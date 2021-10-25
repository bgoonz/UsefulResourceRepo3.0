'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('meanstackApp'));
  beforeEach(module('socketMock'));

  var MainCtrl,
      $scope,
      $httpBackend;

  var productsAttributes = [
    {_id: 1, title: 'Product 1', price: 100.10 },
    {_id: 2, title: 'Product 2', price: 200.20 },
    {_id: 3, title: 'Product 3', price: 3100.10 },
    {_id: 4, title: 'Product 4', price: 400.20 },
    {_id: 5, title: 'Product 5', price: 500.10 },
    {_id: 6, title: 'Product 6', price: 600.20 },
  ];

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/products')
      .respond(productsAttributes);

    $scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: $scope
    });

    $httpBackend.flush();
  }));

  it('contains 3 products', function () {
    expect($scope.products.length).toBe(3);
  });

  it('contains first 3 products', function() {
    var ids = [];

    angular.forEach($scope.products, function(product){
      this.push(product._id);
    }, ids);

    expect(ids).toContain(1);
    expect(ids).toContain(2);
    expect(ids).toContain(3);
  });
});
