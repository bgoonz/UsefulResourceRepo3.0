var mongoose = require('mongoose');
var config = require('../../config/environment');
var Catalog = require('../../api/catalog/catalog.model');
var Product = require('../../api/product/product.model');

exports.cleanDb = function(done){
  var db = mongoose.connection.db;
  if(db){
    console.log('Connection already existed');
    return db.dropDatabase(done);
  }

  console.log('Connection DID NOT existed');

  mongoose.connect(config.mongo.uri, config.mongo.options, function(err){
    if(err) {
      done('Failed to connect to database ' +
        config.mongo.uri + '. ' + err);
    } else {
      mongoose.connection.db.dropDatabase(done);
      mongoose.connection.close();
    }
  });
}

exports.createProductsCatalog = function (callback) {
  var mainCatalog, electronics, books, clothing, vehicle, pantry, appliances;

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
      callback(null);
    })
    .then(null, callback);
}



  // grunt.registerTask('db', function (target) {
  //   if(target === 'clean'){
  //     var done = this.async();
  //     config = require('./server/config/environment');
  //     mongoose = require('mongoose');

  //     mongoose.connect(config.mongo.uri, config.mongo.options, function(err){
  //       if(err) {
  //         grunt.log.error('Failed to connect to database ' +
  //           config.mongo.uri + '. Error: ' + err);
  //         done(err);
  //       } else {
  //         mongoose.connection.db.dropDatabase(function (err) {
  //           if(err) {
  //             grunt.log.writeln('Connected to ' + config.mongo.uri);
  //             grunt.log.error('Failed dropping database: ' + err);
  //           } else {
  //             grunt.log.ok('Successfully Dropped ' + config.mongo.uri);
  //           }
  //           mongoose.connection.close();
  //           done(err);
  //         });
  //       }
  //     });
  //   }
  // });
