/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Catalog = require('./catalog.model');

exports.register = function(socket) {
  Catalog.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Catalog.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('catalog:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('catalog:remove', doc);
}