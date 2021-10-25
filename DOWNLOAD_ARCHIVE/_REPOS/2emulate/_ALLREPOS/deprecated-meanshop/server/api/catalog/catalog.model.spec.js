'use strict';

var Catalog = require('./catalog.model');
var Product = require('../product/product.model');
var utils = require('../../components/utils');


describe('Catalog', function() {
  var validAttributes = {
    name: 'Root Catalog'
  }, childAttributes = {
      name: 'Child Catalog #1'
  },
  root;

  beforeEach(function (done) {
    Catalog
      .find({})
      .remove()
      .then(function () {
        return Catalog.create(validAttributes)
      })
      .then(function(catalog){
        root = catalog;
        done()
      })
      .then(null, done);
  })

  it('should create a catalog', function(done) {
    Catalog.findOne({})
      .then(function(catalog){
        catalog.name.should.be.equal(validAttributes.name);
        catalog.slug.should.be.equal('root-catalog');
        done();
      })
      .then(null, done);
  });

  it('should create a nested catalog', function(done) {
    root.addChild(childAttributes)
      .then(function (catalog) {
        catalog.name.should.be.equal(childAttributes.name);
        catalog.ancestors.should.containEql(root._id);
        catalog.parent.should.be.equal(root._id);
        done();
      })
      .then(null, done);
  });

  it('should support deeply nested categories', function(done) {
    var child1;
    root.addChild(childAttributes)
      .then(function (child) {
        child1 = child;
        return child.addChild(childAttributes);
      })
      .then(function (child2) {
        child2.name.should.be.equal(childAttributes.name);
        child2.ancestors.should.containEql(root._id);
        child2.ancestors.should.containEql(child1._id);
        child2.parent.should.be.equal(child1._id);
        done();
      })
      .then(null, done);
  });
});

describe('Product+Catalog', function() {
  var root, books, food, furniture;

  before(function (done) {
    Catalog
      .find({})
      .remove()
      .then(function () {
        return Product.find({}).remove();
      })
      .then(function () {
        return Catalog.create({name: 'Navigation'})
      })
      .then(function (rootElement) {
        root = rootElement;
        return root.addChild({name: 'Books'});
      })
      .then(function (child) {
        books = child;
        return root.addChild({name: 'Food'});
      })
      .then(function (child) {
        food = child;
        return root.addChild({name: 'Furniture'});
      })
      .then(function (child) {
        furniture = child;
        done();
      })
      .then(null, done);
  });

  it('should create a product with book catetory', function(done) {
    Product.create({title: 'Broccoli', price: 123, categories: [books._id]})
      .then(function () {
        return Product.findOne({}).populate(['categories', 'categories.parent']);
      })
      .then(function (newBook) {
        var category = newBook.categories[0];
        category.name.should.be.equal('Books');
        category.slug.should.be.equal('books');
        done();
      })
      .then(null, done);
  });
});

describe('Finding products by category', function () {
  var mainCatalog, electronics, books, clothing, vehicle, pantry, appliances;

  before(function (done) {
    utils.createProductsCatalog(done);
  });

  it('should find 3 electronic products', function(done) {
    Catalog.findOne({name: 'Electronics'})
      .then(function (electronics) {
        return Product
          .find({'categories': electronics._id })
          .populate('categories');
      })
      .then(function (products) {
        products.length.should.be.equal(3);
        done()
      })
      .then(null, done);
  });

  it('should find one vehicle and one clothing products', function (done) {
    var vehicle;

    Catalog.findOne({name: 'Vehicle'})
      .then(function (_vehicle) {
        vehicle = _vehicle;
        return Catalog.findOne({name: 'Clothing'});
      })
      .then(function (clothing) {
        return Product.find({'categories': { $in: [vehicle._id, clothing._id]} });
      })
      .then(function (products) {
        products.length.should.be.equal(2);
        done()
      })
      .then(null, done);
  });


  it('should find _all_ products', function (done) {
    Catalog.findOne({name: 'All'})
      .then(function (_mainCatalog) {
        mainCatalog = _mainCatalog;
        return Product.find({'categories': { $in: mainCatalog.children } })
      })
      .then(function (products) {
        products.length.should.be.equal(6);
        done();
      })
      .then(null, done);
  });

});
