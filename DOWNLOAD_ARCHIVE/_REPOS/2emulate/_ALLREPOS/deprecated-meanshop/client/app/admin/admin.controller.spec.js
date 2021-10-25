'use strict';

describe('AdminCtrl', function() {
  beforeEach(module('meanstackApp'));

  var Products, User, $location, $controller, controller, $scope;

  var productAttributes = [
    {_id: 1, title: 'Product1', price: 100.10, stock: 10},
    {_id: 2, title: 'Product2', price: 200.00, stock: 20}
  ];

  var userAttributes = [
    {_id: 1, name: 'User1', email: 'user1@example.com', provider: 'local'},
    {_id: 2, name: 'User2', email: 'user2@example.com', provider: 'facebook'}
  ];

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.users', function() {
    beforeEach(function () {
      User = jasmine.createSpyObj('User', ['query', 'remove']);
      User.query.andReturn(userAttributes);
      $scope = {};
      controller = $controller('AdminCtrl', {
        $scope: $scope,
        User: User
      });
    });

    it('loads the users', function() {
      expect($scope.users).toBe(userAttributes);
    });

    it('deletes users', function() {
      var user1 = userAttributes[0];
      var user2 = userAttributes[1];
      $scope.deleteUser(user1);
      expect(User.remove).toHaveBeenCalled();
      expect(angular.equals($scope.users, [user2])).toBe(true);
    });
  });

  describe('$scope.products', function() {
    var product1 = productAttributes[0];
    var product2 = productAttributes[1];

    beforeEach(function () {
      $location = jasmine.createSpyObj('$location', ['path']);
      Products = jasmine.createSpyObj('Products', ['query', 'remove']);
      Products.query.andReturn(productAttributes);
      $scope = {};
      controller = $controller('AdminCtrl', {
        $scope: $scope,
        $location: $location,
        Products: Products,
      });
    });

    it('loads the products', function() {
      expect($scope.products).toBe(productAttributes);
    });

    it('deletes products', function() {
      $scope.deleteProduct(product1);
      expect(Products.remove).toHaveBeenCalled();
      expect(angular.equals($scope.products, [product2])).toBe(true);
    });

    it('redirects to edit form', function() {
      $scope.editProduct(product1);
      expect($location.path).toHaveBeenCalledWith('/products/'+ product1._id + '/edit');
    });

    it('redirects to product show', function() {
      $scope.showProduct(product2);
      expect($location.path).toHaveBeenCalledWith('/products/'+ product2._id);
    });
  });

});
