"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertAttr = require("./Attr.js").convert;
const impl = utils.implSymbol;

function NamedNodeMap() {
  throw new TypeError("Illegal constructor");
}

Object.defineProperty(NamedNodeMap, "prototype", {
  value: NamedNodeMap.prototype,
  writable: false,
  enumerable: false,
  configurable: false,
});

Object.defineProperty(NamedNodeMap.prototype, Symbol.iterator, {
  writable: true,
  enumerable: false,
  configurable: true,
  value: Array.prototype[Symbol.iterator],
});

NamedNodeMap.prototype.item = function item(index) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'item' on 'NamedNodeMap': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'item' on 'NamedNodeMap': parameter 1",
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].item(...args));
};

NamedNodeMap.prototype.getNamedItem = function getNamedItem(qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getNamedItem' on 'NamedNodeMap': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context:
        "Failed to execute 'getNamedItem' on 'NamedNodeMap': parameter 1",
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getNamedItem(...args));
};

NamedNodeMap.prototype.getNamedItemNS = function getNamedItemNS(
  namespace,
  localName
) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'getNamedItemNS' on 'NamedNodeMap': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg === null || curArg === undefined) {
      curArg = null;
    } else {
      curArg = conversions["DOMString"](curArg, {
        context:
          "Failed to execute 'getNamedItemNS' on 'NamedNodeMap': parameter 1",
      });
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context:
        "Failed to execute 'getNamedItemNS' on 'NamedNodeMap': parameter 2",
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getNamedItemNS(...args));
};

NamedNodeMap.prototype.setNamedItem = function setNamedItem(attr) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'setNamedItem' on 'NamedNodeMap': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = convertAttr(curArg, {
      context:
        "Failed to execute 'setNamedItem' on 'NamedNodeMap': parameter 1",
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].setNamedItem(...args));
};

NamedNodeMap.prototype.setNamedItemNS = function setNamedItemNS(attr) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'setNamedItemNS' on 'NamedNodeMap': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = convertAttr(curArg, {
      context:
        "Failed to execute 'setNamedItemNS' on 'NamedNodeMap': parameter 1",
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].setNamedItemNS(...args));
};

NamedNodeMap.prototype.removeNamedItem = function removeNamedItem(
  qualifiedName
) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'removeNamedItem' on 'NamedNodeMap': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context:
        "Failed to execute 'removeNamedItem' on 'NamedNodeMap': parameter 1",
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].removeNamedItem(...args));
};

NamedNodeMap.prototype.removeNamedItemNS = function removeNamedItemNS(
  namespace,
  localName
) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'removeNamedItemNS' on 'NamedNodeMap': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg === null || curArg === undefined) {
      curArg = null;
    } else {
      curArg = conversions["DOMString"](curArg, {
        context:
          "Failed to execute 'removeNamedItemNS' on 'NamedNodeMap': parameter 1",
      });
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context:
        "Failed to execute 'removeNamedItemNS' on 'NamedNodeMap': parameter 2",
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].removeNamedItemNS(...args));
};

Object.defineProperty(NamedNodeMap.prototype, "length", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["length"];
  },

  enumerable: true,
  configurable: true,
});

Object.defineProperty(NamedNodeMap.prototype, Symbol.toStringTag, {
  value: "NamedNodeMap",
  writable: false,
  enumerable: false,
  configurable: true,
});

const iface = {
  // When an interface-module that implements this interface as a mixin is loaded, it will append its own `.is()`
  // method into this array. It allows objects that directly implements *those* interfaces to be recognized as
  // implementing this mixin interface.
  _mixedIntoPredicates: [],
  is(obj) {
    if (obj) {
      if (utils.hasOwn(obj, impl) && obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(obj)) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(wrapper)) {
          return true;
        }
      }
    }
    return false;
  },
  convert(obj, { context = "The provided value" } = {}) {
    if (module.exports.is(obj)) {
      return utils.implForWrapper(obj);
    }
    throw new TypeError(`${context} is not of type 'NamedNodeMap'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(NamedNodeMap.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(NamedNodeMap.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {},
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};

    privateData.wrapper = obj;

    this._internalSetup(obj);
    Object.defineProperty(obj, impl, {
      value: new Impl.implementation(constructorArgs, privateData),
      writable: false,
      enumerable: false,
      configurable: true,
    });

    obj = new Proxy(obj, {
      get(target, P, receiver) {
        if (typeof P === "symbol") {
          return Reflect.get(target, P, receiver);
        }
        const desc = this.getOwnPropertyDescriptor(target, P);
        if (desc === undefined) {
          const parent = Object.getPrototypeOf(target);
          if (parent === null) {
            return undefined;
          }
          return Reflect.get(target, P, receiver);
        }
        if (!desc.get && !desc.set) {
          return desc.value;
        }
        const getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return Reflect.apply(getter, receiver, []);
      },

      has(target, P) {
        if (typeof P === "symbol") {
          return Reflect.has(target, P);
        }
        const desc = this.getOwnPropertyDescriptor(target, P);
        if (desc !== undefined) {
          return true;
        }
        const parent = Object.getPrototypeOf(target);
        if (parent !== null) {
          return Reflect.has(parent, P);
        }
        return false;
      },

      ownKeys(target) {
        const keys = new Set();

        for (const key of target[impl][utils.supportedPropertyIndices]) {
          keys.add(`${key}`);
        }

        for (const key of target[impl][utils.supportedPropertyNames]) {
          if (!(key in target)) {
            keys.add(`${key}`);
          }
        }

        for (const key of Reflect.ownKeys(target)) {
          keys.add(key);
        }
        return [...keys];
      },

      getOwnPropertyDescriptor(target, P) {
        if (typeof P === "symbol") {
          return Reflect.getOwnPropertyDescriptor(target, P);
        }
        let ignoreNamedProps = false;

        if (utils.isArrayIndexPropName(P)) {
          const index = P >>> 0;
          const indexedValue = target[impl].item(index);
          if (indexedValue !== null) {
            return {
              writable: false,
              enumerable: true,
              configurable: true,
              value: utils.tryWrapperForImpl(indexedValue),
            };
          }
          ignoreNamedProps = true;
        }

        const namedValue = target[impl].getNamedItem(P);

        if (namedValue !== null && !(P in target) && !ignoreNamedProps) {
          return {
            writable: false,
            enumerable: false,
            configurable: true,
            value: utils.tryWrapperForImpl(namedValue),
          };
        }

        return Reflect.getOwnPropertyDescriptor(target, P);
      },

      set(target, P, V, receiver) {
        if (typeof P === "symbol") {
          return Reflect.set(target, P, V, receiver);
        }
        if (target === receiver) {
          utils.isArrayIndexPropName(P);

          typeof P === "string" && !utils.isArrayIndexPropName(P);
        }
        let ownDesc;

        if (utils.isArrayIndexPropName(P)) {
          const index = P >>> 0;
          const indexedValue = target[impl].item(index);
          if (indexedValue !== null) {
            ownDesc = {
              writable: false,
              enumerable: true,
              configurable: true,
              value: utils.tryWrapperForImpl(indexedValue),
            };
          }
        }

        if (ownDesc === undefined) {
          ownDesc = Reflect.getOwnPropertyDescriptor(target, P);
        }
        if (ownDesc === undefined) {
          const parent = Reflect.getPrototypeOf(target);
          if (parent !== null) {
            return Reflect.set(parent, P, V, receiver);
          }
          ownDesc = {
            writable: true,
            enumerable: true,
            configurable: true,
            value: undefined,
          };
        }
        if (!ownDesc.writable) {
          return false;
        }
        if (!utils.isObject(receiver)) {
          return false;
        }
        const existingDesc = Reflect.getOwnPropertyDescriptor(receiver, P);
        let valueDesc;
        if (existingDesc !== undefined) {
          if (existingDesc.get || existingDesc.set) {
            return false;
          }
          if (!existingDesc.writable) {
            return false;
          }
          valueDesc = { value: V };
        } else {
          valueDesc = {
            writable: true,
            enumerable: true,
            configurable: true,
            value: V,
          };
        }
        return Reflect.defineProperty(receiver, P, valueDesc);
      },

      defineProperty(target, P, desc) {
        if (typeof P === "symbol") {
          return Reflect.defineProperty(target, P, desc);
        }

        if (utils.isArrayIndexPropName(P)) {
          return false;
        }
        if (!utils.hasOwn(target, P)) {
          const creating = !(target[impl].getNamedItem(P) !== null);
          if (!creating) {
            return false;
          }
        }
        return Reflect.defineProperty(target, P, desc);
      },

      deleteProperty(target, P) {
        if (typeof P === "symbol") {
          return Reflect.deleteProperty(target, P);
        }

        if (utils.isArrayIndexPropName(P)) {
          const index = P >>> 0;
          return !(target[impl].item(index) !== null);
        }

        if (target[impl].getNamedItem(P) !== null && !(P in target)) {
          return false;
        }

        return Reflect.deleteProperty(target, P);
      },

      preventExtensions() {
        return false;
      },
    });

    obj[impl][utils.wrapperSymbol] = obj;
    if (Impl.init) {
      Impl.init(obj[impl], privateData);
    }
    return obj;
  },
  interface: NamedNodeMap,
  expose: {
    Window: { NamedNodeMap },
  },
}; // iface
module.exports = iface;

const Impl = require("../attributes/NamedNodeMap-impl.js");
