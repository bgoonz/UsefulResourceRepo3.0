const { Observable } = require('rxjs/Rx');

const gdax = require('../../lib/providers/gdax');
const amqp = require('../../lib/messaging/amqp');

function getOrderObservable() {
  // return Observable.of({type: 'order'});
  return amqp.serverObservable()
    .filter(i => Object.keys(i).length > 0)
    .mergeMap(i => Observable.of(Object.assign({}, {
      event: 'EVENT.ORDER',
      order: i
    })));
}

function getTickerObservables(providers) {
  const observables = [];

  if (!providers) {
    throw new Error(`Providers can not be null`);
  }

  Object.entries(providers).forEach(([name, productIds]) => {
    const provider = require('../../lib/providers/' + name);
    const observable = provider.tickerObservable(productIds);
    observables.push(observable.mergeMap(i => Observable.of(Object.assign({}, {
      event: 'EVENT.TICK',
      provider: name,
      tick: i
    }))));
  });

  return Observable.merge.apply(null, observables);
  // return observables[0];
}

function loadOrderObservable() {
  return Observable.never();
}

const tickerObservables = getTickerObservables({gdax: ['BTC-USD']});
const orderObservable = getOrderObservable();
const oloadOrderObservable = loadOrderObservable();

let observables = Observable.never();

observables = observables.merge(tickerObservables, orderObservable, oloadOrderObservable);

s = observables.subscribe(data => console.log(data));

setTimeout(function() {
  console.log('closing...')
  s.unsubscribe();
}, 15000);