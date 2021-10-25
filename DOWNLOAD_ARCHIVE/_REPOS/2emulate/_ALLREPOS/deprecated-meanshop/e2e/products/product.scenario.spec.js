'use strict';

var page,
    timestamp = (new Date()).getTime(),
    title = 'Product ' + timestamp,
    description = title + ' description',
    price = parseInt(timestamp / 100000000000);

describe('Products View', function() {
  describe('Menu', function() {
    beforeEach(function() {
      browser.get('/');
      page = require('./products.po');
    });

    it('should include products in the menu', function() {
      expect(element(by.linkText('Products')).getAttribute('href'))
        .toMatch(/\/products$/);
    });

    it('should have a link to products index page', function () {
      element(by.linkText('Products')).click();
      expect(browser.getCurrentUrl()).toMatch(/\/products$/);
    })
  });

  describe('CRUD Products', function() {
    describe('CREATE Products', function() {
      beforeEach(function () {
        browser.get('/products');
        // link to create product
        element(by.linkText('New Product')).click();
        expect(browser.getCurrentUrl()).toMatch(/\/products\/new$/);

        // filling out the form
        element(by.model('product.title')).sendKeys(title);
        element(by.model('product.description')).sendKeys(description);
      });

      it('should create a product', function() {
        element(by.model('product.price')).sendKeys(price);
        element(by.buttonText('Save')).click();

        // should redirecto to product page
        expect(browser.getCurrentUrl()).toMatch(/\/products\//);

        // should have fields
        expect(element(by.binding('product.title')).getText()).toBe(title);
        expect(element(by.binding('product.description')).getText()).toBe(description);
        expect(element(by.binding('product.price')).getText()).toBe('$' + price.toFixed(2));
      });

      it('should show an error if price is not provided', function() {
        element(by.buttonText('Save')).click();
        expect(element(by.binding('errors')).getText()).toMatch(/`price` is required/);
        expect(browser.getCurrentUrl()).toMatch(/\/products\/new$/);
      });
    });

    describe('READ Products', function() {
      beforeEach(function () {
        browser.get('/products');
      });

      it('should have the newly created product', function() {
        expect(element.all(by.repeater('product in products').column("product.title")).first().getText()).toBe(title);
        expect(element.all(by.repeater('product in products').column("product.price")).first().getText()).toBe('$' + price.toFixed(2));
      });

      it('should truncate long descriptions to 15 chars', function() {
        expect(element.all(by.repeater('product in products').column("product.description")).first().getText())
          .toBe(description.substring(0, 15) + ' ...');
      });
    });

    describe('UPDATE products', function() {
      beforeEach(function () {
        browser.get('/products');
        expect(element.all(by.repeater('product in products')).count()).toBe(1);
        element(by.linkText('Details')).click();
        element(by.linkText('Edit')).click();
        expect(browser.getCurrentUrl()).toMatch(/edit$/);
      });

      it('should update the title', function() {
        element(by.model('product.title')).sendKeys('Updated');
        element(by.model('product.description')).sendKeys('Updated');
        element(by.model('product.price')).sendKeys('.12');
        element(by.buttonText('Save')).click();
        expect(browser.getCurrentUrl()).not.toMatch(/edit$/);
        expect(element(by.binding('product.title')).getText()).toBe(title + 'Updated');
        expect(element(by.binding('product.description')).getText()).toBe(description + 'Updated');
        expect(element(by.binding('product.price')).getText()).toBe('$' + (price + 0.12).toFixed(2));
      });
    });

    describe('DELETE products', function () {
      it('should be able to delete existing product', function() {
        browser.get('/products');
        expect(element.all(by.repeater('product in products')).count()).toBe(1);
        element(by.linkText('Details')).click();
        element(by.linkText('Delete')).click();
        expect(browser.getCurrentUrl()).toMatch(/\/products$/);
        expect(element.all(by.repeater('product in products')).count()).toBe(0);
      });
    })
  });
});
