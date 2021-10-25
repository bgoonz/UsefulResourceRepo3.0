'use strict';

var _ = require('lodash');
var Product = require('./product.model');
var Catalog = require('../catalog/catalog.model');

// Get list of products
exports.index = function(req, res) {
  Product
    .find({})
    .populate('categories')
    .sort({_id: -1})
    .exec(function (err, products) {
      if(err) { return handleError(res, err); }
      return res.json(200, products);
    });
};

exports.catalog = function(req, res) {
  Catalog
    .findOne({ slug: req.params.slug })
    .then(function (catalog) {
      var catalog_ids = [catalog._id].concat(catalog.children);
      return Product
        .find({'categories': { $in: catalog_ids } })
        .populate('categories')
        .exec();
    })
    .then(function (products) {
      res.json(200, products);
    })
    .then(null, function (err) {
      handleError(res, err);
    });
};

exports.search = function(req, res) {
  Product
    .find({ $text: { $search: req.params.term }})
    .populate('categories')
    .exec(function (err, products) {
      if(err) { return handleError(res, err); }
      return res.json(200, products);
    });
};

// Get a single product
exports.show = function(req, res) {
  handleProductId(req, res, function(product){
    return res.json(200, product);
  });
};

// Creates a new product in the DB.
exports.create = function(req, res) {
  Product.create(req.body, function(err, product) {
    if(err) { return handleError(res, err); }
    return res.json(201, product);
  });
};

// Updates an existing product in the DB.
exports.update = function(req, res) {
  handleProductId(req, res, function(product){
    var updated = _.merge(product, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, product);
    });
  });
};

// Deletes a product from the DB.
exports.destroy = function(req, res) {
  handleProductId(req, res, function(product){
    product.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleProductId(req, res, callback){
  Product.findById(req.params.id, function (err, product) {
    if(err) { return handleError(res, err); }
    if(!product) {
      return res.json(404,
        { message: 'Product (' + req.params.id + ') not found.' });
    }
    return callback(product);
  });
}

function handleError(res, err) {
  console.error(err.stack);
  return res.json(500, err);
}
