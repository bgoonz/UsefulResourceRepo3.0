'use strict';

angular.module('meanstackApp')
  .controller('MainCtrl', function ($scope, $http, socket, Products) {
    Products.query(function (products) {
      $scope.products =  products.slice(0, 3);
      // TODO: make sockets work on products updates
      socket.syncUpdates('products', function (products) {
        $scope.products =  products.slice(0, 3);
      });
    });
  });
