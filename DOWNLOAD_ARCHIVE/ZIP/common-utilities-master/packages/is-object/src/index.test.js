"use strict";
Object.defineProperty( exports, "__esModule", {
  value: true
} );
var index_1 = require( "./index" );
describe( '@common-utilities/', function () {
  describe( 'is-object', function () {
    describe( 'isOfObjectType', function () {
      test( 'array', function () {
        var result = index_1.isOfObjectType( [ 'test', 'test' ] );
        expect( result ).toEqual( true );
      } );
      test( 'object', function () {
        var result = index_1.isOfObjectType( {
          foo: 'test'
        } );
        expect( result ).toEqual( true );
      } );
      test( 'number', function () {
        var result = index_1.isOfObjectType( 9 );
        expect( result ).toEqual( false );
      } );
      test( 'string', function () {
        var result = index_1.isOfObjectType( 'string' );
        expect( result ).toEqual( false );
      } );
      test( 'null', function () {
        var result = index_1.isOfObjectType( null );
        expect( result ).toEqual( false );
      } );
      test( 'undefined', function () {
        var result = index_1.isOfObjectType( undefined );
        expect( result ).toEqual( false );
      } );
    } );
    describe( 'isObject', function () {
      test( 'false', function () {
        var result = index_1.isObject( [ 'test', 'test' ] );
        expect( result ).toEqual( false );
      } );
      test( 'true', function () {
        var result = index_1.isObject( {
          foo: 'test'
        } );
        expect( result ).toEqual( true );
      } );
    } );
    describe( 'isArray', function () {
      test( 'true', function () {
        var result = index_1.isArray( [ 'test', 'test' ] );
        expect( result ).toEqual( true );
      } );
      test( 'false', function () {
        var result = index_1.isArray( {
          foo: 'test'
        } );
        expect( result ).toEqual( false );
      } );
    } );
  } );
} );
"use strict";
Object.defineProperty( exports, "__esModule", {
  value: true
} );
var index_1 = require( "./index" );
describe( '@common-utilities/', function () {
  describe( 'is-object', function () {
    describe( 'isOfObjectType', function () {
      test( 'array', function () {
        var result = index_1.isOfObjectType( [ 'test', 'test' ] );
        expect( result ).toEqual( true );
      } );
      test( 'object', function () {
        var result = index_1.isOfObjectType( {
          foo: 'test'
        } );
        expect( result ).toEqual( true );
      } );
      test( 'number', function () {
        var result = index_1.isOfObjectType( 9 );
        expect( result ).toEqual( false );
      } );
      test( 'string', function () {
        var result = index_1.isOfObjectType( 'string' );
        expect( result ).toEqual( false );
      } );
      test( 'null', function () {
        var result = index_1.isOfObjectType( null );
        expect( result ).toEqual( false );
      } );
      test( 'undefined', function () {
        var result = index_1.isOfObjectType( undefined );
        expect( result ).toEqual( false );
      } );
    } );
    describe( 'isObject', function () {
      test( 'false', function () {
        var result = index_1.isObject( [ 'test', 'test' ] );
        expect( result ).toEqual( false );
      } );
      test( 'true', function () {
        var result = index_1.isObject( {
          foo: 'test'
        } );
        expect( result ).toEqual( true );
      } );
    } );
    describe( 'isArray', function () {
      test( 'true', function () {
        var result = index_1.isArray( [ 'test', 'test' ] );
        expect( result ).toEqual( true );
      } );
      test( 'false', function () {
        var result = index_1.isArray( {
          foo: 'test'
        } );
        expect( result ).toEqual( false );
      } );
    } );
  } );
} );
