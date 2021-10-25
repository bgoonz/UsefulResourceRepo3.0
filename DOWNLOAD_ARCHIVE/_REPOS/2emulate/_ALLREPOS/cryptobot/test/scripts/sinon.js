const sinon = require('sinon');
const assert = require('assert');

const testApi = {
  bomb() {
    throw new Error('Bomb!');
  },
  safe() {
    console.log('safe');
  }
}

sinon.stub(testApi, 'bomb');
console.log(testApi.bomb('test'));

sinon.assert.calledWithExactly(testApi.bomb, 'test');

class FakeClass {
  constructor() {
    console.log('FakeClass::constructor');
    this.name = 'FakeClass';
  }

  test() {
    return this.name;
  }
}

class RealClass {
  constructor() {
    console.log('RealClass::constructor');
    this.name = 'RealClass';
  }

  test() {
    return this.name;
  }
}


const ns = {
  FakeClass,
  RealClass
}

sinon.stub(ns, 'RealClass').returns(new FakeClass()); // works!!

const realClass = new ns.RealClass();
assert.equal(ns.RealClass.calledWithNew(), true);
console.log('name', realClass.test());