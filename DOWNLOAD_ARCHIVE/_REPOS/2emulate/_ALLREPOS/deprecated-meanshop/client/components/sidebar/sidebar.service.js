'use strict';

angular.module('meanstackApp')
  .factory('Catalog', function ($resource) {
    return $resource('/api/catalogs/:id');
  });
