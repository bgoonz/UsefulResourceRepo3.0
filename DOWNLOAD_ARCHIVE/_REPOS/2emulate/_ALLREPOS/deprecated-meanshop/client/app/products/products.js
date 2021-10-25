'use strict';

angular.module('meanstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/templates/products.html',
        controller: 'ProductsCtrl'
      })

      .state('productCatalog', {
        url: '/products/:slug/catalog',
        templateUrl: 'app/products/templates/products.html',
        controller: 'ProductCatalogCtrl'
      })

      .state('viewProduct', {
        url: '/products/:id',
        templateUrl: 'app/products/templates/product-view.html',
        controller: 'ProductViewCtrl'
      })

      .state('newProduct', {
        url: '/products/new',
        templateUrl: 'app/products/templates/product-new.html',
        controller: 'ProductNewCtrl'
      })

      .state('editProduct', {
        url: '/products/:id/edit',
        templateUrl: 'app/products/templates/product-edit.html',
        controller: 'ProductEditCtrl'
      })

      .state('checkout', {
        url: '/checkout',
        templateUrl: 'app/products/templates/products-checkout.html',
        controller: 'ProductCheckoutCtrl'
      });
  });
