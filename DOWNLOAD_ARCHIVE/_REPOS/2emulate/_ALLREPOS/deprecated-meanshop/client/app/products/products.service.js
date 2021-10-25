'use strict';

angular.module('meanstackApp')
  .factory('Products', function ($resource) {
    return $resource('/api/products/:id/:controller', null, {
      'get':    { method: 'GET' },
      'save':   { method: 'POST' },
      'query':  { method: 'GET', isArray: true },
      'catalog':{ method: 'GET', isArray: true,
        params: {
          controller: 'catalog'
        }
      },
      'search': { method: 'GET', isArray: true,
        params: {
          controller: 'search'
        }
      },
      'remove': { method: 'DELETE' },
      'delete': { method: 'DELETE' },
      'update': { method: 'PUT' }
    });
  });
