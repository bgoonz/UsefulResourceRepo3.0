'use strict';

require('regenerator-runtime/runtime');

var _path = _interopRequireDefault(require('path'));

var _tsNode = require('ts-node');

var _utils = require('@chakra-ui/utils');

var _createThemeTypingsInterface = require('../command/tokens/create-theme-typings-interface');

var _config = require('../command/tokens/config');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

function readTheme(_x) {
  return _readTheme.apply(this, arguments);
}
/**
 * Reads the theme file, generates the typings interface and prints it to stdout
 */

function _readTheme() {
  _readTheme = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(themeFilePath) {
      var _module$default;

      var absoluteThemePath, module;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              absoluteThemePath = _path['default'].join(
                process.cwd(),
                themeFilePath
              );
              (0, _tsNode.register)({
                project: _path['default'].join(
                  __dirname,
                  '..',
                  '..',
                  'bin',
                  'tsconfig.json'
                ),
                dir: _path['default'].basename(absoluteThemePath),
              });
              _context.next = 4;
              return Promise.resolve('' + absoluteThemePath).then(function (s) {
                return _interopRequireWildcard(require(s));
              });

            case 4:
              module = _context.sent;
              return _context.abrupt(
                'return',
                (_module$default = module['default']) != null
                  ? _module$default
                  : module.theme
              );

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  );
  return _readTheme.apply(this, arguments);
}

function run() {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
      var themeFile, theme, template;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch ((_context2.prev = _context2.next)) {
            case 0:
              themeFile = process.argv[2];

              if (themeFile) {
                _context2.next = 3;
                break;
              }

              throw new Error('No path to theme file provided.');

            case 3:
              _context2.next = 5;
              return readTheme(themeFile);

            case 5:
              theme = _context2.sent;

              if ((0, _utils.isObject)(theme)) {
                _context2.next = 8;
                break;
              }

              throw new Error(
                'Theme not found in default or named `theme` export'
              );

            case 8:
              _context2.next = 10;
              return (0,
              _createThemeTypingsInterface.createThemeTypingsInterface)(theme, {
                config: _config.themeKeyConfiguration,
              });

            case 10:
              template = _context2.sent;

              if (process.send) {
                process.send(template);
              } else {
                process.stdout.write(template);
              }

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2);
    })
  );
  return _run.apply(this, arguments);
}

run()['catch'](function (e) {
  process.stderr.write(e.message);
  process.exit(1);
});
//# sourceMappingURL=read-theme-file.worker.js.map
