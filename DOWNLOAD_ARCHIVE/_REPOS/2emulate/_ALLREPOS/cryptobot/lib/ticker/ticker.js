const {Observable} = require('rxjs/Rx');
const _ = require('lodash');
const debug = require('debug')('crybot:ticker');

const amqp = require('../messaging/amqp');
const TrailingOrder = require('./trailing-order');
const mongo = require('./db');
const pkg = require('../../package');
// const FakeWebServer = require('../../test/helpers/fakeWebServer');

const EVENT = {
  TRADE: 'trade',
  TICK: 'tick',
  ORDER: 'order',
  TRIGGER: 'trigger'
}

/**
 * Ticker is the main component.
 *
 * 1. Listen to real-time market ticks (WebSockets)
 * 2. Store tick data in database (Mongo)
 * 3. Listen for orders (AMQP)
 * 4. When price reaches it desired point execute order on provider (REST API)
 * 5. Save trades in database (Mongo)
 * 6. Update TrailingOrder
 * 7. Set price
 *
 **/
class Ticker {
  constructor(providers, options = {}) {
    this.reset(providers, options);
  }

  setupListeners() {
    const tickerObservables = this.getTickerObservables(this.providers);
    const orderObservable = this.getOrderObservable();
    const loadOrderObservable = this.loadOrderObservable();
    this.observables = this.observables.merge(tickerObservables, orderObservable, loadOrderObservable);
  }

  loadOrderObservable() {
    return Observable.fromPromise(mongo.loadOrders())
      .filter(order => Object.keys(order).length > 0)
      .mergeMap(order => Observable.of(Object.assign({}, {
        event: EVENT.ORDER,
        saved: true,
        order: order,
      })));
  }

  getOrderObservable() {
    // return Observable.of({type: 'order'});
    return amqp.serverObservable()
      .filter(i => Object.keys(i).length > 0)
      .mergeMap(order => {
        const saved = _.some(order, (v, k) => _.some(v, {saved: true}));

        return Observable.of(Object.assign({}, {
          event: EVENT.ORDER, order, saved
        }));
      });
  }

  getTickerObservables(providers) {
    const observables = [];

    if(!providers) {
      throw new Error(`Providers can not be null`);
    }

    Object.entries(providers).forEach(([name, productIds]) => {
      const provider = require('../providers/' + name);
      const observable = provider.tickerObservable(productIds);
      observables.push(observable.mergeMap(i => Observable.of(Object.assign({}, {
        event: EVENT.TICK,
        provider: name,
        tick: i
      }))));
    });

    return Observable.merge.apply(null, observables);
  }

  reset(providers, options) {
    this.providers = providers || this.providers;
    this.options = options || this.options;

    debug(`--->>> Ticker v${pkg.version} <<<---`, this.providers, this.options, '---', providers, options);

    this.orders = {};
    this.observables = Observable.never();
    this.subscription = null;
    this.trailingOrderCounter = 0;
  }

  // connect to listeners
  start(onData, onError, onComplete) {
    this.setupListeners();

    this.subscription = this.observables
      .let(this.updateTrailingOrders(this.orders))
      .let(this.saveToDb(this.options.bufferTime))
      // .let(this.logger(data => data.event !== EVENT.TICK)) // less noise
      .subscribe(onData, onError, onComplete);
  }

  updateTrailingOrders(orders) {
    var self = this;
    return function feedTrailingOrders(source) {
      return Observable.create(observer => {
        const subscription = source.subscribe(
          value => {
            try {
              observer.next(value); // pass along the new value

              // Set/Unset trailing orders
              if (value.event === EVENT.ORDER) {
                // add event listener for trades, but first unsubscribe from previous one if any
                Object.entries(value.order).forEach(([key, order]) => {
                  const [provider, productId] = key.split('.');
                  const providerImpl = require(`../providers/${provider}`);
                  let to;

                  if(orders[key]) {
                    to = orders[key];
                    to.removeAllListeners('trade');
                    to.removeAllListeners('error');
                    to.removeAllListeners('trigger');
                  } else {
                    const uid = ++self.trailingOrderCounter;
                    debug(`Creating TrailingOrder #${uid}`);
                    to = new TrailingOrder(productId, provider, uid);
                    to.setExecuteTradeAction(providerImpl.setOrder); // executeTrade
                    to.setGetFundsAction(providerImpl.getFunds); // lazy. just before trade
                    orders[key] = to;
                  }

                  if (order.status && order.status !== 'open') {
                    debug(`Removing order since it was not opened: %o`, order);
                    order[key] = null;
                    to = null;
                    return;
                  }

                  // order events
                  to.setOrder(JSON.parse(JSON.stringify(order)));
                  // set events
                  to.on('trade', tradeParams => {
                    observer.next(Object.assign({}, tradeParams, {
                      event: EVENT.TRADE,
                      provider: provider }));
                  });

                  to.on('error', error => {
                    console.error(`Error with trailing order: `, error);
                    observer.error(error);
                  });

                  to.on('trigger', order => {
                    observer.next(Object.assign({}, {
                      event: EVENT.TRIGGER,
                      order
                    }));
                  });

                  to.on('order', order => {
                    const fullOrder = {};
                    fullOrder[key] = [order];
                    observer.next(Object.assign({}, {
                      event: EVENT.ORDER,
                      order: fullOrder
                    }));
                  });
                });
              } else if (value.event === EVENT.TICK) {
                // set price
                const key = `${value.provider}.${value.tick.product_id}`;
                if (orders[key]) {
                  orders[key].setPrice(value.tick.price);
                }
              }
            } catch (err) {
              console.error(`Error on trailing orders observer: ${err.stack}`);
              // observer.error(err);
            }
          },
          err => observer.error(err),
          () => observer.complete());

        return () => {
          Object.keys(orders).forEach(key => orders[key] = null);
          subscription.unsubscribe();
        };
      });
    };
  }

  saveToDb(bufferTime = 100) {
    // console.log('bufferTime', bufferTime);
    let saveSequence = 0;

    return function (source) {
      return Observable.create(observer => {
        const aggregator = {};

        const subscription = source.subscribe(
          value => {
            observer.next(value);

            switch (value.event) {
              case EVENT.TRIGGER:
                mongo.updateSingleOrder(value.order);
                break;

              case EVENT.ORDER:
                debug('--- Just before saving order %o', value);
                if(!value.saved) mongo.saveOrders(value.order);
                break;

              case EVENT.TRADE:
                // console.log('save trade', value);
                mongo.saveTrade(value);
                break;

              case EVENT.TICK:
                // console.log('tick', value.tick.price || value.tick);
                const key = `${value.provider}.${value.tick.product_id}`;
                const tick = {
                  _id: parseInt(value.tick.sequence),
                  price: parseFloat(value.tick.price),
                  side: value.tick.side,
                  size: parseFloat(value.tick.size),
                  time: value.tick.time
                };


                const agg = aggregator[key];

                // debug('event.tick %o ;; %o', tick, agg);

                if (agg) {
                  agg.data.push(tick);
                } else {
                  const t = setInterval(() => {
                    const dataToSave = aggregator[key].data;
                    // debug('dataToSave length', dataToSave.length);

                    if(dataToSave.length > 0) {
                      // console.log('save tick', key, aggregator[key].data);
                      // console.log('save tick', key, aggregator[key].data.length);
                      mongo.saveTickAggregation(key, dataToSave, saveSequence++);
                      // .catch(error => {
                        // throw new Error(error);
                      // });
                    };
                    aggregator[key].data = [];
                  }, bufferTime);

                  aggregator[key] = {
                    data: [tick],
                    timer: t
                  };
                }
                break;

              default:
                break;
            }
          },
          err => observer.error(err),
          () => observer.complete()
        );

        return () => {
          subscription.unsubscribe();
          // clean up timer VERY IMPORTANT
          Object.entries(aggregator).forEach(([key, agg]) => {
            if(agg) {
              clearInterval(agg.timer);
              agg.data = null;
            }
          });
        }
      });
    }
  }

  logger(fn) {
    return function (source) {
      return Observable.create(observer => {
        const subscription = source.subscribe(data => {
          observer.next(data);
          if(fn(data)) {
            debug(`[Logger] Event: %o`, data);
          }
        },
        error => {
          debug(`[Logger] Error: %o`, error);
          observer.error(error)
        },
        () => observer.complete());

        return subscription;
      });
    }
  }

  // tear down listeners
  stop() {
    if (this.subscription) {
      debug(`Unsubscribing ticker...`);
      this.subscription.unsubscribe();
    }
    if(this.reset) {
      debug(`Resetting on unsubscribing...`);
      this.reset();
    }
  }
}

module.exports = {
  Ticker,
  EVENT
};