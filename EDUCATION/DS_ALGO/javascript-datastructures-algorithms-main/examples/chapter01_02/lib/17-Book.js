((global, factory) => {
  if (typeof define === "function" && define.amd) {
    define(["module", "exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    const mod = {
      exports: {},
    };
    factory(mod, mod.exports);
    global.Book = mod.exports;
  }
})(this, (module, exports) => {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true,
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  const _createClass = (() => {
    function defineProperties(target, props) {
      props.forEach((descriptor) => {
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      });
    }

    return (Constructor, protoProps, staticProps) => {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  const Book = (() => {
    function Book(title) {
      _classCallCheck(this, Book);

      this.title = title;
    }

    _createClass(Book, [
      {
        key: "printTitle",
        value: function printTitle() {
          console.log(this.title);
        },
      },
    ]);

    return Book;
  })();

  exports.default = Book;
  module.exports = exports["default"];
});
