/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Product = require('../api/product/product.model');
var User = require('../api/user/user.model');
var Catalog = require('../api/catalog/catalog.model');
var mainCatalog, electronics, books, clothing, vehicle, pantry, appliances;

/* //Clear all products and catalog
Catalog
  .find({})
  .remove()
  .then(function () {
    return Product.find({}).remove();
  });

//*/

Catalog
  .find({})
  .remove()
  .then(function () {
    return Catalog.create({ name: 'All'});
  })
  .then(function (catalog) {
    mainCatalog = catalog;
    return mainCatalog.addChild({name: 'Electronics'});
  })
  .then(function (category) {
    electronics = category._id;
    return mainCatalog.addChild({name: 'Books'});
  })
  .then(function (category) {
    books = category._id;
    return mainCatalog.addChild({name: 'Clothing'});
  })
  .then(function (category) {
    clothing = category._id;
    return mainCatalog.addChild({name: 'Vehicle'});
  })
  .then(function (category) {
    vehicle = category._id;
    return mainCatalog.addChild({name: 'Pantry'});
  })
  .then(function (category) {
    pantry = category._id;
    return mainCatalog.addChild({name: 'Appliances'});
  })
  .then(function (category) {
    appliances = category._id;
    console.log('Finished populating Catalog');

    return Product.find({}).remove({});
  })
  .then(function() {
    return Product.create({
      title : 'GoPro HERO4 SILVER',
      price : 399.99,
      stock : 200,
      categories : [electronics],
      description : 'GoPro’s high-end camera model that features a new design with an integrated LCD, significantly increasing ease of use.'
    }, {
      title : 'Building an E-Commerce Application with MEAN',
      price : 23.99,
      stock : 950,
      categories : [books],
      description : 'Build an state-of-the-art using the MEAN stack (MongoDB, ExpressJS, AngularJS and NodeJS)'
    }, {
      title : 'Ray-Ban RB2132 Sunglasses',
      price : 146.99,
      stock : 10,
      categories : [clothing],
      description : 'Plastic imported Ray-Ban RB2132 New Wayfarer Sunglasses'
    }, {
      title : 'PlayStation 4 Console',
      price : 399.95,
      stock : 100,
      categories : [electronics],
      description : 'The PlayStation 4 system opens the door to an incredible journey through immersive new gaming worlds and a deeply connected gaming community. PS4 puts gamers first with an astounding launch lineup and over 180 games in development. Play amazing top-tier blockbusters and innovative indie hits on PS4. Developer Inspired, Gamer Focused.'
    }, {
      title : 'Toyota Corolla 2014',
      price : 16493,
      stock : 1,
      categories : [vehicle],
      description : 'ECO 38 MPG , CLEAN CARFAX , ONE OWNERS LOW MILEGE , LE POWER PACK , BACK UP CAMERA , BLUETOOTH , AUTOMATIC CLIMATE CONTROL , NONSMOKER , VERY CLEAN IN AND OUT , COMES WITH 2 KEYS , BOOKS , SERVICE RECORDS , 3YR / 36K FULL TOYOTA WARRANTY & FREE OIL CHANGES'
    }, {
      title : 'iPad Air 2 Wi-Fi 16GB - Silver',
      price : 499,
      stock : 15,
      categories : [electronics],
      description : 'The power and portability of iPad unlock possibilities that will change the way you do the things you love. '
    });
  })
  .then(function () {
    console.log('Finished populating Products');
  })
  .then(null, function (err) {
    console.error(err);
  });

//*/

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('Finished populating users');
    }
  );
});
