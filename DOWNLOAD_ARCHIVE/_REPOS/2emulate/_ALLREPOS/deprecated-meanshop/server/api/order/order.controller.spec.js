'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var server = request.agent('http://localhost:9000');
var async = require('async');
var Order = require('./order.model.js');
var User = require('../user/user.model');
var Product = require('../product/product.model');


var orderReq = {
  "data": {
    "shipping": null,
    "tax": 0,
    "taxRate": null,
    "subTotal": 300.99,
    "totalCost": 300.99,
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
    }, {
      "id": "5590ad07be1d2e7c690dd3ce",
      "name": "Product 1",
      "price": 100.33,
      "quantity": 1,
      "data": {
        "_id": "5590ad07be1d2e7c690dd3ce",
        "title": "Product 1",
        "price": 100.33,
        "description": "This is the description of product 1",
        "__v": 0,
        "stock": 3
      },
      "total": 100.33
    }]
  }
};

var token, cookies;

var products,
  products_attributes = [{
    title: 'Product 1',
    price: 111.11
  }, {
    title: 'Product 2',
    price: 2222.22
  }, ],
  user = new User({
    provider: 'local',
    name: 'Fake User',
    email: 'test@test.com',
    password: 'password'
  });

describe('POST /api/orders/checkout', function() {
  beforeEach(cleanDb);
  after(cleanDb);

  beforeEach(function(done) {
    Product.create(products_attributes, function(err, data) {
      if (err) return done(err);
      products = data;
    })
    .then(function (products) {
      return user.save();
    })
    .then(function (user) {
      loginUser(done);
    })
    .then(null, done);
  });

  xit('should create a order with valid data', function(done) {
    request(app)
      .post('/api/orders/checkout')
      .expect(201)
      .set('Accept', 'application/json')
      // .set('Authorization', token)
      .expect('Content-type', /json/)
      .send(orderReq)
      .end(function (err, res) {
        if(err) return done(err);
        done();
      });
  });
});

function loginUser(done) {
  request(app)
    .post('/auth/local')
    .expect(200)
    .expect('Content-Type', /json/)
    .send({ email: 'test@test.com', password: 'password' })
    .end(function (err, res) {
      if(err) return done(err);
      token = res.body.token;
      cookies = res.headers['set-cookie'].pop().split(';')[0];
      done();
    });
}

function cleanDb(done) {
  Order.remove().then(function() {
    return Product.remove();
  }).then(function() {
    return User.remove();
  }).then(function() {
    done();
  }).then(null, done);
}
