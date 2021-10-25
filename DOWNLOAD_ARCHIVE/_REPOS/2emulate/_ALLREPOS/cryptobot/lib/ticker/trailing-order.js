const EventEmitter = require('events');
const debug = require('debug')('crybot:TrailingOrder');

const PAIR_REGEX = /([a-zA-Z]*)[^a-zA-Z]([a-zA-Z]*)/;
const MIN_TRADE_SIZE = 0.01;
const SOLIDITY = 0.003; // Avoid fees! Add + /- 0.3% to order price. Inverse of liquidity (solidity), makes order less liquit so they are more likely to be maker rather than taker

/**
 * Trailing Order does a trailing stop/limit for buy and sell to maximize profit
 */
class TrailingOrder extends EventEmitter {
  /**
   * Intialize TrailingOrder with a security
   * @param {String} security - Optional. forex pair "BTC/USD"
   */
  constructor(security = 'BTC-USD', provider = 'gdax', id = -1) {
    super();
    this.uuid = id;
    this.funds = {};
    this.funds.base = 0.0;
    this.funds.quote = 0.0;
    this.order = {};
    this.setSecurity(security);
    this.provider = provider;
    // this.executeTrade = noop;
    // this.getFunds = noop;
  }

  setSecurity(val) {
    [this.security, this.baseSymbol, this.quoteSymbol] = val.match(PAIR_REGEX) || [];
  }

  /**
   * Set funds for the pair base/quote. e.g. BTC/USD, BTC/ETH
   * @param {Object} params
   */
  setFunds(opts = {}) {
    // parse array of funds
    if(Array.isArray(opts)) {
      opts = opts.reduce((a, f) => {
        a[f.currency] = f.available;
        return a;
      }, {});
    }

    if(!opts) { // case opts is null
      opts = {};
    }

    this.funds.base = btc(opts[this.baseSymbol] || opts.base || 0.0);
    this.funds.quote = usd(opts[this.quoteSymbol] || opts.quote || 0.0);
    debug(`Funds updated %o`, this.funds);
  }

  setGetFundsAction(fn) {
    this.getFunds = fn;
  }

  setExecuteTradeAction(fn) {
    this.executeTrade = fn;
  }

  /**
   *
   * @param {Object} value - object with all the limit triggers and actions
   */
  setOrder(value) {
    try {
      // this.validate(value);
      this.orders = value;
      (this.orders || []).forEach((order, index) => {
        this.validate(order);
        this.checkTradeSignal(order, index);
      });
    } catch (error) {
      const msg = `ERROR: order is incorrect ${error}`;
      this.emit('error', msg);
      console.error(msg.stack);
    }
  }

  validate(order) {

    if (!['sell', 'buy'].includes(order.side)) {
      throw `ERROR: parsing order. Side should be either buy or sell. Given ${side}`
    }

    if(typeof order.target === 'undefined') {
      throw `No target price specified!`;
    }

    let trend;
    if(order.side === 'sell') {
      trend = 'higher';
    } else {
      trend = 'lower';
    }

    debug(`*** ${this.provider}.${this.security} --- to#${this.uuid}: `);
    debug(`${order.side.toUpperCase()}ing WHEN price reaches %o or ${trend}`, order.target);
    debug(`Trading %o with these funds %o`, order.trade, this.funds);
    if (order.trigger) debug(`Triggers: %o`, order.trigger);
    debug(`Trailing is %o ***`, order.trailing);
  }

  /**
   * Set current price
   * @param {Float} value current price value
   */
  setPrice(value) {
    const price = parseFloat(value);

    this.price = price;
    (this.orders || []).forEach((order, index) => this.checkTradeSignal(order, index));
  }

  checkTradeSignal(order, index) {
    const price = this.price;

    order.trigger = order.trigger || {};
    if(!order.target && price) {
      debug(`Order target price was ${order.target}, setting it to current price: ${price}`);
      order.target = price;
      delete order.saved;
      this.emit('order', order);
    }

    const {
      side,
      target,
      trailing,
      trade
    } = order;

    // check if trade trigger are met
    if (side === 'buy' && order.trigger.buy && price >= order.trigger.buy.price ||
      side === 'sell' && order.trigger.sell && price <= order.trigger.sell.price) {

      // delete orders and trigger if the trigger price was met.
      // Very important!! Otherwise orders can be executed multiple times
      this.orders.splice(index, 1); // delete order
      debug(`[TRADING] Trigger price met: %o -- ${price}`, order.trigger);

      if(this.getFunds) {
        this.getFunds((error, response, funds) => {
          if (error || (response && response.statusCode !== 200)) {
            this.emit('error', `Error getting funds. statusCode=${JSON.stringify(response && response.statusCode)} error=${JSON.stringify(error)}`);
          } else {
            this.setFunds(funds); // TODO: wait for funds to finish updating
            this.makeTrade({ price, side, order });
          }
        });
      } else {
        debug(`[TRADING] making trade WITHOUT updating funds (provider getFunds is not defined)`);
        this.makeTrade({ price, side, order });
      }

      return;
    }

    let trailBounds = calculateBounds(price, order.trailing);

    // check if trailing limits are met
    if (side === 'sell' && price >= target) {
      const trigger = {};
      trigger.price = trailBounds.lower;
      trigger.trail = trailBounds.upper;
      this.updateTrigger(side, order, trigger);
    } else if (side === 'buy' && price <= target) {
      const trigger = {};
      trigger.price = trailBounds.upper;
      trigger.trail = trailBounds.lower;
      this.updateTrigger(side, order, trigger);
    }
  }

  /**
   * set new triggers and trade price
   * @param {*} side
   * @param {*} trigger
   */
  updateTrigger(side, order, trigger) {
    if (!order.trigger[side] ||
      (side === 'buy' && order.trigger[side].trail > trigger.trail && this.price < order.trigger[side].trail ||
      side === 'sell' && order.trigger[side].trail < trigger.trail && this.price > order.trigger[side].trail)
    ) {
      order.trigger[side] = trigger;
      debug(`[Trailing] Trigger for ${this.security} ${side} @ ${order.target} has change %o --- %o --- to: %o`, this.price, order.trigger, this.uuid);

      this.emit('trigger', Object.assign({}, order, {
        provider: `${this.provider}.${this.security}`
      }));
    }
  }

  makeTrade({price, side, order}) {
    let tradeSize = calculateTradeSize(price, this.funds, order.trade);
    let size;

    if (side === 'buy') {
      size = tradeSize.buy;

      // set new funds
      if (size > 0) {
        this.funds.base = btc(this.funds.base + size);
        this.funds.quote = usd(this.funds.quote - size * price);
      }
    } else {
      size = tradeSize.sell;

      // set new funds
      if (size > 0) {
        this.funds.base = btc(this.funds.base - size);
        this.funds.quote = usd(this.funds.quote + size * price);
      }
    }

    // if the orders size was zero then fail
    if (MIN_TRADE_SIZE > size) {
      const msg = `[TRADING] Cancelling trade for ${this.security} ${side} @ ${order.target} since size is too small ${size}`;
      debug(msg);
      // console.error(msg);
      return;
    }

    // if the order size is bigger than zero then execute
    if (size > 0) {
      const tradeParams = {
        order,
        trade: { side, size, price, product_id: this.security }
      };

      debug(`[TRADING] Executing trade for ${this.security} ${side} @ ${order.target} - Trade: %o`, tradeParams.trade);

      delete order.trigger; // delete trigger since is not needed for nothing else

      if (this.executeTrade && size >= MIN_TRADE_SIZE) {
        this.executeTrade(tradeParams.trade, (error, response, data) => {
          const statusCode = response && response.statusCode;
          debug('Response from GDAX', statusCode, error, data);

          if (error || statusCode && statusCode !== 200) {
            // TODO: wrap errors with Error() so it can have stack trace...
            this.emit('error', `Error executing trade. statusCode=${statusCode} error=${JSON.stringify(error || data)}. Trade ${JSON.stringify(tradeParams)}`);
          } else {
            tradeParams.result = data;
            this.emit('trade', tradeParams);
          }
        });
      } else {
        if(size < MIN_TRADE_SIZE) {
          const msg = `Order size (${size}) is too small to execute`;
          console.error(`[TRADING] ${msg}. Closing order without executing trade`);
          tradeParams.result = msg;
        }
        this.emit('trade', tradeParams);
      }
    }
  }

  toString() {
    return JSON.stringify(this.toObject());
  }

  toObject() {
    return {
      uuid: this.uuid,
      security: this.security,
      price: this.price,
      funds: this.funds,
      orders: this.orders,
      trade: this.trade
    }
  }
}

function btc(amount) {
  // convert to BTC with eigth decimals (1 satoshi)
  // return +(parseFloat(amount).toFixed(8));
  return +(parseFloat(amount).toFixed(3)); // Reducing Price Precision
}

// convert to usd format
function usd(amount) {
  // return +(parseFloat(amount).toFixed(4));
  return +(parseFloat(amount).toFixed(2)); // Reducing Price Precision
}

// convert to string
function str(json) {
  return JSON.stringify(json);
}

function calculateBounds(price, trailing = {}) {
  let upper = price;
  let lower = price;

  const amount = parseFloat(trailing.amount);
  const percentage = trailing.percentage * price;

  let modifier = 0;

  if(amount > 0) {
    modifier = amount;
  }

  if(percentage > 0) {
    modifier = amount > 0 ? Math.min(amount, percentage) : percentage;
  }

  upper += modifier;
  lower -= modifier;

  return {upper: usd(upper), lower: usd(lower)};
}

/**
 * Return size or order if it is sold or bought
 * @param {Number} price
 * @param {Object} funds funds available
 * @property {Number} funds.base base currency e.g. BTC
 * @property {Number} funds.quote quote currency e.g. USD
 * @param {Object} trade
 * @property {Number} trade.quote amount of funds to trade in quote currency e.g. USD
 * @property {Number} trade.base amount of funds to trade in base currency e.g. BTC
 * @property {Number} trade.amount (deprecated) amount of funds to trade in quote currency e.g. USD*
 * @property {Number} trade.percentage percentage of funds to trade
 */
function calculateTradeSize(price, {base, quote}, trade = {}, solidity = SOLIDITY) {
  let buy = 0.0, sell = 0.0, newQuoteSize, newBaseSize;
  let tradeAmount = trade.quote || trade.amount;
  if(trade.base) {
    tradeAmount = btc(price * trade.base);
  }

  const amount = btc(parseFloat(tradeAmount || 0.0) / price); // default to 0 if not specified
  const percentageFunds = parseFloat(trade.percentage || 0.99); // default to trade all funds if not specified. Use 0.99 instead of 1 to prevent insufficient funds issue
  const percentageFundsQuote = usd(percentageFunds * quote);
  const percentageFundsBase = btc(percentageFunds * base);

  // Choose the minimun amount between percentage of funds or trade amount.

  buy = btc(percentageFundsQuote / price);
  if (tradeAmount) {
    buy = Math.min(amount, buy);
  }
  buy = btc(buy * (1 - solidity));

  sell = percentageFundsBase;
  if (tradeAmount) {
    sell = Math.min(amount, sell);
  }
  sell = btc(sell * (1 + solidity));

  return { buy, sell};
}

function noop(a, b) {
  try {
    if (a) a();
    if (b) b();
  } catch (error) {

  }
}

module.exports = TrailingOrder;