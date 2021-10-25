const Rx = require('rxjs/Rx');
const Observable = Rx.Observable;
const debug = require('debug')('crybot:rxHelper');

function webSocketFromEventsToObservable(websocket) {
  return new Observable(observer => {
    // websocket.on('open', e => observer.next(e));
    websocket.on('message', e => observer.next(e));
    websocket.on('error', e => observer.error(e));
    websocket.on('close', e => observer.complete(e));

    return () => {
      debug(`Disconecting from websocket...`);
      try {
        websocket.disconnect();
      } catch (error) { // avoid the UnsubscriptionError: 1 errors occurred during unsubscription: 1) Error: Could not disconnect (not connected)
        debug('Disconecting warning: ', error.message || error);
        throw error; // ignoring the error caused the program to hang...
      }
    }
  });
}

module.exports = {
  webSocketFromEventsToObservable
}