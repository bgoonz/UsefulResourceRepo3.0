'use strict';

var _ = require('lodash');
var Order = require('./order.model');
var paypal = require('../../components/paypal');

// Get list of orders
exports.index = function(req, res) {
  Order.find(function (err, orders) {
    if(err) { return handleError(res, err); }
    return res.json(200, orders);
  });
};

// Get a single order
exports.show = function(req, res) {
  handleOrderId(req, res, function(order){
    return res.json(200, order);
  });
};

// Creates a new order in the DB.
exports.create = function(req, res) {
  Order.create(req.body, function(err, order) {
    if(err) { return handleError(res, err); }
    return res.json(201, order);
  });
};

// Updates an existing order in the DB.
exports.update = function(req, res) {
  handleOrderId(req, res, function(order){
    var updated = _.merge(order, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, order);
    });
  });
};

// Deletes a order from the DB.
exports.destroy = function(req, res) {
  handleOrderId(req, res, function(order){
    order.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleOrderId(req, res, callback){
  Order.findById(req.params.id, function (err, order) {
    if(err) { return handleError(res, err); }
    if(!order) {
      return res.json(404,
        { message: 'Order (' + req.params.id + ') not found.' });
    }
    return callback(order);
  });
}

// Creates a new order in the DB based on a checkout object.
/*
{
  "data": {
    "shipping": null,
    "tax": 0,
    "taxRate": null,
    "subTotal": 200.66,
    "totalCost": 200.66,
    "items": [{
      "id": "558986aaf11245e108e0df59",
      "name": "Product 2",
      "price": 200.66,
      "quantity": 1,
      "data": {
        "_id": "558986aaf11245e108e0df59",
        "title": "Product 2",
        "price": 200.66,
        "description": "This is the description of product 2",
        "__v": 0,
        "stock": 6
      },
      "total": 200.66
    }]
  }
}
*/
exports.checkout = function(req, res, next) {
  var data = req.body.data;
  var paymentType = req.body.options.payment;

  data.products = req.body.data.items.map(function(i){ return i.id; });
  data.user = req.user._id;
  data.total = data.totalCost;

  Order.create(data, function(err, order) {
    if(err) { return handleError(res, err); }
    if(paymentType === 'paypal'){
      paypal.createPayment(data, function(err, payment){
        if(err) return handleError(res, err);
        res.json(201, { order: order, payment: payment });
      })
    } else {
      return res.json(404, { message: 'Payment provider not supported.' });
    }
  });
};

function handleOrderId(req, res, callback){
  Order.findById(req.params.id, function (err, order) {
    if(err) { return handleError(res, err); }
    if(!order) {
      return res.json(404,
        { message: 'Order (' + req.params.id + ') not found.' });
    }
    return callback(order);
  });
}

function handleError(res, err) {
  console.log('**ERROR** ', JSON.stringify(err));
  return res.json(500, err);
}

