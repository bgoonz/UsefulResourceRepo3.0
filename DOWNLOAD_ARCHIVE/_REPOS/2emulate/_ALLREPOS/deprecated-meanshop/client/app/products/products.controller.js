'use strict';

function errorHandler(scope){
  return function error(httpResponse){
    // console.error(httpResponse);
    scope.errors = JSON.stringify(httpResponse);
  };
}

angular.module('meanstackApp')
  .controller('ProductsCtrl', function ($scope, Products) {
    $scope.products = Products.query();

    $scope.$on('search:term', function (event, data) {
      if(data.length){
        $scope.products = Products.search({id: data});
      } else {
        $scope.products = Products.query();
      }
    });
  })

  .controller('ProductCatalogCtrl', function ($scope, $stateParams, Products) {
    $scope.products = Products.catalog({id: $stateParams.slug});
  })

  .controller('ProductViewCtrl', function ($scope, $state, $stateParams, Products) {
    $scope.product = Products.get({id: $stateParams.id});
    $scope.deleteProduct = function(product){
      Products.delete({id: product._id}, function success(/* value, responseHeaders */) {
        $state.go('products');
      }, errorHandler($scope));
    };
  })

  .controller('ProductNewCtrl', function ($scope, $state, Products) {
    $scope.product = {}; // create a new instance
    $scope.addProduct = function(){
      Products.save($scope.product, function success(value /*, responseHeaders*/){

        $state.go('viewProduct', {id: value._id});
      }, errorHandler($scope));
    };
  })

  .controller('ProductEditCtrl', function ($scope, $state, $stateParams, Products) {
    $scope.product = Products.get({id: $stateParams.id});
    $scope.editProduct = function(){
      Products.update({id: $scope.product._id}, $scope.product, function success(value /*, responseHeaders*/){
        $state.go('viewProduct', {id: value._id});
      }, errorHandler($scope));
    };
  })

  .controller('ProductCheckoutCtrl', function($scope, $window){
    $scope.errors = '';

    $scope.payPalSettings = {
      url: '/api/orders/checkout',
      data: {
        payment: 'paypal'
      }
    };

    $scope.$on('ngCart:checkout_success', function(event, data){
      $window.location.href = data.payment.links[1].href;
    });

    $scope.$on('ngCart:checkout_failed', function (event, err) {
      /*jshint camelcase: false */
      $scope.errors = err.error.response.error_description;
    });
  });

