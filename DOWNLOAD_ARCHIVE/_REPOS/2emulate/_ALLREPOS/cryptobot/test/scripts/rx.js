// const {Observable} = require('rxjs/Observable');
// patch Observable with appropriate methods
// require('rxjs/add/observable/of');
// require('rxjs/add/operator/map');
// require('rxjs/add/observable/dom/webSocket')

const Rx = require('rxjs/Rx');
const Observable = Rx.Observable;
const Websocket = require('ws');

const o = Observable.of(1500, 1600, 2000, 2500, 3000).concatMap(x => Observable.of(x).delay(1000));
// const o = Observable.interval(1000).mergeMap(i => Observable.of({type: 'test', value: i}) );
o.subscribe(msg => console.log(1, msg));

// o.mergeMap(i => Observable.of(Object.assign(i, {a: 1}))).subscribe(msg => console.log(2, msg));


// const Gdax = require('gdax');
// const config = require('../../config');
// // const websocket = new Gdax.WebsocketClient(['BTC-USD'], { websocketURI: config.gdax.wss, heartbeat: true });
// const websocket = new Websocket('ws://localhost:7171');
// setTimeout(() => websocket.send('hola'), 1e3);
// setTimeout(() => websocket.send('dos'), 2e3);

// var fromEvent = Observable.fromEvent;
// var throwError = Observable.throw; // http://reactivex.io/rxjs/test-file/spec-js/observables/throw-spec.js.html

// var connect = fromEvent(websocket, 'open');
// var error = fromEvent(websocket, 'error').mergeMap(throwError);
// var end = fromEvent(websocket, 'close');
// var message = fromEvent(websocket, 'message');

// // Now let's make it shine!
// var datastream = message.merge(error)
//   .skipUntil(connect.race(error))
//   .takeUntil(end.race(error)).retry(3)
//   .filter(tick => tick.type === 'match');

// const subscription = datastream.subscribe(
//   function (v) {
//     // Handle data
//     console.log('data', v.price);
//   },
//   function (err) {
//     // Handle error
//     console.log('error >', err);
//   },
//   function () {
//     // Handle completion
//     console.log('closed!');
//   });

// setTimeout(() => {
//   console.log('-----------------')
//   // subscription.unsubscribe();
//   console.log('-----------------')
// }, 1e3);

//////////

// var observable = Rx.Observable.create(function (observer) {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   setTimeout(() => {
//     observer.next(4);
//     observer.complete();
//   }, 1000);
// });

// console.log('just before subscribe');

// observable.subscribe({
//   next: x => console.log('#1: got value ' + x),
//   error: err => console.error('something wrong occurred: ' + err),
//   complete: () => console.log('done'),
// });


// observable.subscribe({
//   next: x => console.log('#2: got value ' + x),
//   error: err => console.error('something wrong occurred: ' + err),
//   complete: () => console.log('done'),
// });

// console.log('just after subscribe');

///----------


/*
// Observable.of(1, 2, 3).map(function (x) { return x + '!!!'; }); // etc

// https://github.com/ReactiveX/rxjs/blob/master/src/observable/dom/WebSocketSubject.ts#L63
const { w3cwebsocket } = require('websocket');

const subject = Observable.webSocket({
  url: 'wss://ws-feed.gdax.com',
  WebSocketCtor: w3cwebsocket
});

const subscription = subject
  .filter((msg) => msg.type === 'match')
  .subscribe(
    (msg) => console.log('message received: ' + JSON.stringify(msg)),
    (err) => console.log(err),
    () => console.log('complete')
  );

subject.next(JSON.stringify({
  type: 'subscribe',
  product_ids: [
    'BTC-USD'
  ]
}));

subject.next(JSON.stringify({
  "type": "heartbeat",
  "on": true
}));

setTimeout(() => {
  console.log('-----------------')
  subscription.unsubscribe();
  console.log('-----------------')
}, 10e3);
*/