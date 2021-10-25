'use strict';

angular.module('meanstackApp')
  .controller('AdminCtrl', function ($scope, $http, $location, Auth, User, Products) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.products = Products.query();

    $scope.deleteUser = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.showProduct = function(product){
      // TODO: model windows (popup)
      return $location.path('/products/' + product._id);
    };

    $scope.editProduct = function(product){
      // TODO: model windows (popup)
      return $location.path('/products/' + product._id + '/edit');
    };

    $scope.deleteProduct = function(product){
      Products.remove({ id: product._id });
      angular.forEach($scope.products, function(p, i) {
        if (p === product) {
          $scope.products.splice(i, 1);
        }
      });
    };
  });
