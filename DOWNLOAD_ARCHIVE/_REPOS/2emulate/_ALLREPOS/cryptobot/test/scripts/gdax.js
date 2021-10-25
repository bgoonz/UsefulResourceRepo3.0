#!/usr/bin/env node

// https://docs.gdax.com/#get-currencies
// https://github.com/coinbase/gdax-node
const Gdax = require('gdax');
const callback = require('../../lib/common/helper').callback;

// ---------------

// const key = process.env.GDAX_KEY;
// const b64secret = process.env.GDAX_SECRET;
// const passphrase = process.env.GDAX_PASSPHRASE;
// const apiURI = 'https://api.gdax.com';
// const apiURI = 'https://localhost:7777';

const key = process.env.GDAX_SANDBOX_KEY;
const b64secret = process.env.GDAX_SANDBOX_SECRET;
const passphrase = process.env.GDAX_SANDBOX_PASSPHRASE;
const apiURI = 'https://api-public.sandbox.gdax.com';

var authedClient = new Gdax.AuthenticatedClient(key, b64secret, passphrase, apiURI);

console.log('authedClient.getCoinbaseAccounts:');
authedClient.getCoinbaseAccounts(callback);
// authedClient.getFundings({}, callback);

console.log('authedClient.getAccounts:');
authedClient.getAccounts(callback);

// authedClient.getAccounts(callback);

/*
[ { id: '328cbc77-321c-44c9-9e30-cea1f8248d85',
    currency: 'USD',
    balance: '0.0000000000000000',
    available: '0.0000000000000000',
    hold: '0.0000000000000000',
    profile_id: 'f9de7517-451e-4c71-b794-db525d0890b8' },
  { id: '7c7c0230-9601-4a7d-b1c3-f204e7e74164',
    currency: 'LTC',
    balance: '0.0000000000000000',
    available: '0.0000000000000000',
    hold: '0.0000000000000000',
    profile_id: 'f9de7517-451e-4c71-b794-db525d0890b8' },
  { id: 'f51508d0-ca0a-43b6-b54c-2f4efcf27eb9',
    currency: 'ETH',
    balance: '0.0000000000000000',
    available: '0.0000000000000000',
    hold: '0.0000000000000000',
    profile_id: 'f9de7517-451e-4c71-b794-db525d0890b8' },
  { id: '0d5a42b5-6a61-4558-802f-13bbb8b47238',
    currency: 'BTC',
    balance: '0.0000000000000000',
    available: '0.0000000000000000',
    hold: '0.0000000000000000',
    profile_id: 'f9de7517-451e-4c71-b794-db525d0890b8' } ]
*/

/* Sandbox
authedClient.getCoinbaseAccounts
[
  {
    "id": "95671473-4dda-5264-a654-fc6923e8a334",
    "name": "Fake",
    "balance": "50.00000000",
    "currency": "BTC",
    "type": "wallet",
    "primary": true,
    "active": true
  },
  {
    "id": "95671473-4dda-5264-a654-fc6923e8a335",
    "name": "All the Ether",
    "balance": "1000.00000000",
    "currency": "ETH",
    "type": "wallet",
    "primary": false,
    "active": true
  },
  {
    "id": "95671473-4dda-5264-a654-fc6923e8a336",
    "name": "Satoshi Lite",
    "balance": "100000.00000000",
    "currency": "LTC",
    "type": "wallet",
    "primary": false,
    "active": true
  },
  {
    "id": "bcdd4c40-df40-5d76-810c-74aab722b223",
    "name": "USD Wallet",
    "balance": "10480.00000000",
    "currency": "USD",
    "type": "fiat",
    "primary": false,
    "active": true,
    "wire_deposit_information": {
      "account_number": "12345678912",
      "routing_number": "1234567",
      "bank_name": "Coinbase Test Bank",
      "bank_address": "1 Test Bank Drive, Nowhere",
      "bank_country": {
        "code": "US",
        "name": "United States"
      },
      "account_name": "Coinbase, Inc",
      "account_address": "548 Market Street, #23008, San Francisco, CA 94104",
      "reference": "TESTREFERENCE"
    }
  },
  {
    "id": "47f515a1-f035-5ce1-9c68-1a986548ee15",
    "name": "EUR Wallet",
    "balance": "10480.00000000",
    "currency": "EUR",
    "type": "fiat",
    "primary": false,
    "active": true,
    "sepa_deposit_information": {
      "iban": "EE957700771001355096",
      "swift": "LHVBEE22",
      "bank_name": "AS LHV Pank",
      "bank_address": "Tartu mnt 2, 10145 Tallinn, Estonia",
      "bank_country_name": "Estonia",
      "account_name": "Coinbase UK, Ltd.",
      "account_address": "9th Floor, 107 Cheapside, London, EC2V 6DN, United Kingdom",
      "reference": "CBAEUROVFXOMYXEXC"
    }
  },
  {
    "id": "eafc4cb3-600c-5ba1-b9be-b693e7acce52",
    "name": "GBP Wallet",
    "balance": "10480.00000000",
    "currency": "GBP",
    "type": "fiat",
    "primary": false,
    "active": true
  },
  {
    "id": "24df678d-809e-5332-8170-f3048e2908f2",
    "name": "Zero Hero",
    "balance": "0.00000000",
    "currency": "USD",
    "type": "fiat",
    "primary": false,
    "active": true
  }
]


authedClient.getAccounts
[
  {
    "id": "2de562d6-8916-406a-b6b0-6dff4e90bcac",
    "currency": "BTC",
    "balance": "2.4452645700000000",
    "available": "1.0442055100000000",
    "hold": "1.4010590600000000",
    "profile_id": "14282daa-4446-4b0e-af3d-5137b32a004b"
  },
  {
    "id": "08f5fb3a-8186-4213-9355-1b54a8e8f07f",
    "currency": "USD",
    "balance": "1030.9483793104750000",
    "available": "1030.9483793104750000",
    "hold": "0.0000000000000000",
    "profile_id": "14282daa-4446-4b0e-af3d-5137b32a004b"
  },
  {
    "id": "54c3c4d7-d350-4413-87cd-b82f0088f853",
    "currency": "GBP",
    "balance": "0.0000000000000000",
    "available": "0.0000000000000000",
    "hold": "0.0000000000000000",
    "profile_id": "14282daa-4446-4b0e-af3d-5137b32a004b"
  },
  {
    "id": "5e3d74b7-21fc-4aea-b535-92183271793f",
    "currency": "EUR",
    "balance": "0.0000000000000000",
    "available": "0.0000000000000000",
    "hold": "0.0000000000000000",
    "profile_id": "14282daa-4446-4b0e-af3d-5137b32a004b"
  },
  {
    "id": "caf9e12b-8b37-4e19-89a7-333f92d0b15e",
    "currency": "CAD",
    "balance": "0.0000000000000000",
    "available": "0.0000000000000000",
    "hold": "0.0000000000000000",
    "profile_id": "14282daa-4446-4b0e-af3d-5137b32a004b"
  }
]
*/

// const usdAccount = '328cbc77-321c-44c9-9e30-cea1f8248d85';
// authedClient.getAccountHolds(usdAccount, callback);

// authedClient.getOrders(callback);
/*
[ { id: '15f9e760-5bb0-4927-ba63-7925fbbdec87',
    price: '2000.00000000',
    size: '0.14000000',
    product_id: 'BTC-USD',
    side: 'buy',
    stp: 'dc',
    type: 'limit',
    time_in_force: 'GTC',
    post_only: false,
    created_at: '2017-07-03T12:52:56.379825Z',
    fill_fees: '0.0000000000000000',
    filled_size: '0.00000000',
    executed_value: '0.0000000000000000',
    status: 'open',
    settled: false },
  { id: '2639f484-990f-43a4-bed9-4352bbcc96d8',
    price: '2300.00000000',
    size: '0.20000000',
    product_id: 'BTC-USD',
    side: 'buy',
    stp: 'dc',
    type: 'limit',
    time_in_force: 'GTC',
    post_only: false,
    created_at: '2017-07-03T12:52:25.434645Z',
    fill_fees: '0.0000000000000000',
    filled_size: '0.00000000',
    executed_value: '0.0000000000000000',
    status: 'open',
    settled: false } ]
*/

// --------------

const productID = 'BTC-USD';
const endpoint = 'https://api.gdax.com';
const wss = 'wss://ws-feed.gdax.com';
const twss = 'wss://ws-feed-public.sandbox.gdax.com';
// var publicClient = new Gdax.PublicClient(productID, endpoint);

// Last trade tick (use websocket instead of polling)
// publicClient.getProductTicker(callback);

// Real-time ticks
// var websocket = new Gdax.WebsocketClient(['BTC-USD'], { websocketURI: twss});

// websocket.on('open', () => console.info(`Listening on GDAX`));
// websocket.on('error', (e) => console.warn('ERROR websocket: ', e));
// websocket.on('close', () => console.info(`close`));

// websocket.on('message', function (d) {
//   if(d.type === 'match') {
//     console.log(`${d.product_id} ${d.sequence}: ${d.price} (${d.type})`);
//   }
// });
/*
{ type: 'match',
  trade_id: 17499723,
  maker_order_id: '7031b122-c342-4b13-98f1-173539fe17a6',
  taker_order_id: '42ba677f-2ed0-44c6-bc98-5750ff16f487',
  side: 'buy',
  size: '0.02000000',
  price: '2454.87000000',
  product_id: 'BTC-USD',
  sequence: 3436653933,
  time: '2017-06-27T21:27:16.802000Z'
}
*/

// Rates history
// publicClient.getProductHistoricRates((e, r, d) => console.log(d.slice(0, 10), d.length, d));
// publicClient.getProductHistoricRates({ 'granularity': 1,
//   start: (new Date(1498601940 * 1000)).toISOString(),
//   end: (new Date(1498602120 * 1000)).toISOString() }, (e, r, d) => console.log(e, r.statusCode, d.length, d));

// publicClient.getProductHistoricRates({
//   // 'granularity': 1,
//   start: (new Date(1498601940 * 1000)).toISOString(),
//   end: (new Date(1498602120 * 1000)).toISOString()
// }, (e, r, d) => console.log(e, r.statusCode, d.length, d));

// [
//   [time, low, high, open, close, volume],
//   [1415398768, 0.32, 4.2, 0.35, 4.2, 12.3],
//   ...
// ]




// Market depth
// publicClient.getProductOrderBook(callback);
/*
{ sequence: 3436073169,
  bids: [ [ '2399.13', '0.02', 1 ] ],
  asks: [ [ '2399.36', '0.77155', 1 ] ] }
*/
// publicClient.getProductOrderBook({ level: 2 }, callback);

/**
 * Get all trading pairs
 */
// publicClient.getProducts(callback);
/*
[ { id: 'LTC-EUR',
    base_currency: 'LTC',
    quote_currency: 'EUR',
    base_min_size: '0.01',
    base_max_size: '1000000',
    quote_increment: '0.01',
    display_name: 'LTC/EUR' },
  { id: 'LTC-BTC',
    base_currency: 'LTC',
    quote_currency: 'BTC',
    base_min_size: '0.01',
    base_max_size: '1000000',
    quote_increment: '0.00001',
    display_name: 'LTC/BTC' },
  { id: 'BTC-GBP',
    base_currency: 'BTC',
    quote_currency: 'GBP',
    base_min_size: '0.01',
    base_max_size: '250',
    quote_increment: '0.01',
    display_name: 'BTC/GBP' },
  { id: 'BTC-EUR',
    base_currency: 'BTC',
    quote_currency: 'EUR',
    base_min_size: '0.01',
    base_max_size: '250',
    quote_increment: '0.01',
    display_name: 'BTC/EUR' },
  { id: 'ETH-EUR',
    base_currency: 'ETH',
    quote_currency: 'EUR',
    base_min_size: '0.01',
    base_max_size: '5000',
    quote_increment: '0.01',
    display_name: 'ETH/EUR' },
  { id: 'ETH-BTC',
    base_currency: 'ETH',
    quote_currency: 'BTC',
    base_min_size: '0.01',
    base_max_size: '5000',
    quote_increment: '0.00001',
    display_name: 'ETH/BTC' },
  { id: 'LTC-USD',
    base_currency: 'LTC',
    quote_currency: 'USD',
    base_min_size: '0.01',
    base_max_size: '1000000',
    quote_increment: '0.01',
    display_name: 'LTC/USD' },
  { id: 'BTC-USD',
    base_currency: 'BTC',
    quote_currency: 'USD',
    base_min_size: '0.01',
    base_max_size: '250',
    quote_increment: '0.01',
    display_name: 'BTC/USD' },
  { id: 'ETH-USD',
    base_currency: 'ETH',
    quote_currency: 'USD',
    base_min_size: '0.01',
    base_max_size: '5000',
    quote_increment: '0.01',
    display_name: 'ETH/USD' } ]
*/

// publicClient.getProductTrades(callback);
/*
[ { time: '2017-06-27T19:19:51.79Z',
    trade_id: 17494736,
    price: '2389.27000000',
    size: '0.27396612',
    side: 'sell' },
  { time: '2017-06-27T19:19:51.79Z',
    trade_id: 17494735,
    price: '2389.27000000',
    size: '0.46355129',
    side: 'sell' },
  { time: '2017-06-27T19:19:49.928Z',
    trade_id: 17494734,
    price: '2389.27000000',
    size: '0.07898292',
    side: 'sell' },
  { time: '2017-06-27T19:19:49.531Z',
    trade_id: 17494733,
    price: '2389.26000000',
    size: '0.01000000',
    side: 'buy' },
  { time: '2017-06-27T19:19:49.502Z',
    trade_id: 17494732,
    price: '2389.26000000',
    size: '0.05000000',
    side: 'buy' },
  { time: '2017-06-27T19:19:46.461Z',
    trade_id: 17494731,
    price: '2389.27000000',
    size: '0.09554338',
    side: 'sell' },
  { time: '2017-06-27T19:19:43.219Z',
    trade_id: 17494730,
    price: '2389.27000000',
    size: '0.16192241',
    side: 'sell' },
  { time: '2017-06-27T19:19:43.219Z',
    trade_id: 17494729,
    price: '2389.27000000',
    size: '0.18181814',
    side: 'sell' },
  { time: '2017-06-27T19:19:38.966Z',
    trade_id: 17494728,
    price: '2389.27000000',
    size: '0.11649111',
    side: 'sell' },
  { time: '2017-06-27T19:19:38.892Z',
    trade_id: 17494727,
    price: '2389.27000000',
    size: '0.50169075',
    side: 'sell' },
    ...
  ]
*/

/*
Websocket ticker
  ```js
{ type: 'received',
  order_id: 'e99e1a38-be4f-433d-8341-a5ec70d431a5',
  order_type: 'limit',
  size: '0.09199000',
  price: '2583.88000000',
  side: 'sell',
  product_id: 'BTC-USD',
  sequence: 3510553182,
  time: '2017-07-06T16:00:12.075000Z' }

{ type: 'received',
  order_id: '0995570a-4e96-436b-8d7d-991e8eff3b04',
  order_type: 'market',
  size: '0.16730000',
  side: 'buy',
  funds: '432.2831240000000000',
  product_id: 'BTC-USD',
  sequence: 3510553461,
  time: '2017-07-06T16:00:15.098000Z' }

// remaining: 0.07531 (0.1673 - 0.09199)
{ type: 'match',
  trade_id: 17783459,
  maker_order_id: 'e99e1a38-be4f-433d-8341-a5ec70d431a5',
  taker_order_id: '0995570a-4e96-436b-8d7d-991e8eff3b04',
  side: 'sell',
  size: '0.09199000',
  price: '2583.88000000',
  product_id: 'BTC-USD',
  sequence: 3510553462,
  time: '2017-07-06T16:00:15.098000Z' }

{ type: 'done',
  side: 'sell',
  order_id: 'e99e1a38-be4f-433d-8341-a5ec70d431a5',
  reason: 'filled',
  product_id: 'BTC-USD',
  price: '2583.88000000',
  remaining_size: '0.00000000',
  sequence: 3510553463,
  time: '2017-07-06T16:00:15.098000Z' }

{ type: 'done',
  side: 'buy',
  order_id: '0995570a-4e96-436b-8d7d-991e8eff3b04',
  reason: 'filled',
  product_id: 'BTC-USD',
  remaining_size: '0.00000000',
  sequence: 3510553465,
  time: '2017-07-06T16:00:15.098000Z' }

// Another match

{ type: 'received',
  order_id: 'ced7415c-072c-4544-a0c7-f0d9d1ddac41',
  order_type: 'limit',
  size: '0.09787000',
  price: '2583.88000000',
  side: 'sell',
  product_id: 'BTC-USD',
  sequence: 3510553445,
  time: '2017-07-06T16:00:14.023000Z' }

{ type: 'open',
  side: 'sell',
  price: '2583.88000000',
  order_id: 'ced7415c-072c-4544-a0c7-f0d9d1ddac41',
  remaining_size: '0.09787000',
  product_id: 'BTC-USD',
  sequence: 3510553446,
  time: '2017-07-06T16:00:14.023000Z' }

{ type: 'match',
  trade_id: 17783460,
  maker_order_id: 'ced7415c-072c-4544-a0c7-f0d9d1ddac41',
  taker_order_id: '0995570a-4e96-436b-8d7d-991e8eff3b04',
  side: 'sell',
  size: '0.07531000',
  price: '2583.88000000',
  product_id: 'BTC-USD',
  sequence: 3510553464,
  time: '2017-07-06T16:00:15.098000Z' }

{ type: 'done',
  side: 'buy',
  order_id: '0995570a-4e96-436b-8d7d-991e8eff3b04',
  reason: 'filled',
  product_id: 'BTC-USD',
  remaining_size: '0.00000000',
  sequence: 3510553465,
  time: '2017-07-06T16:00:15.098000Z' }

{ type: 'done',
  side: 'sell',
  order_id: 'ced7415c-072c-4544-a0c7-f0d9d1ddac41',
  reason: 'canceled',
  product_id: 'BTC-USD',
  price: '2583.88000000',
  remaining_size: '0.02256000',
  sequence: 3510554226,
  time: '2017-07-06T16:00:20.120000Z' }

  */
