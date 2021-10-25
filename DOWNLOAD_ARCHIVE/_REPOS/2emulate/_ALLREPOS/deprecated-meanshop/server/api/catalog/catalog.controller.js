'use strict';

var _ = require('lodash');
var Catalog = require('./catalog.model');

// Get list of catalogs
exports.index = function(req, res) {
  Catalog.find({}).sort({slug: 1}).exec(function (err, catalogs) {
    if(err) { return handleError(res, err); }
    return res.json(200, catalogs);
  });
};

// Get a single catalog
exports.show = function(req, res) {
  Catalog.findById(req.params.id, function (err, catalog) {
    if(err) { return handleError(res, err); }
    if(!catalog) { return res.send(404); }
    return res.json(catalog);
  });
};

// Creates a new catalog in the DB.
exports.create = function(req, res) {
  Catalog.create(req.body, function(err, catalog) {
    if(err) { return handleError(res, err); }
    return res.json(201, catalog);
  });
};

// Updates an existing catalog in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Catalog.findById(req.params.id, function (err, catalog) {
    if (err) { return handleError(res, err); }
    if(!catalog) { return res.send(404); }
    var updated = _.merge(catalog, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, catalog);
    });
  });
};

// Deletes a catalog from the DB.
exports.destroy = function(req, res) {
  Catalog.findById(req.params.id, function (err, catalog) {
    if(err) { return handleError(res, err); }
    if(!catalog) { return res.send(404); }
    catalog.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
