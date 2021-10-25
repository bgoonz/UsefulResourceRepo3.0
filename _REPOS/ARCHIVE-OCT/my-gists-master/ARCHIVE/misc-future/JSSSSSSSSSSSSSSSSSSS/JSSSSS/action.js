var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
export function action(type, config) {
  if (typeof config === "function") {
    return defineType(type, function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return __assign(__assign({}, config.apply(void 0, args)), {
        type: type,
      });
    });
  }
  var as = config ? config._as : "empty";
  switch (as) {
    case "empty":
      return defineType(type, function () {
        return {
          type: type,
        };
      });
    case "fsa":
      return defineType(type, function (payload, meta) {
        return payload instanceof Error
          ? {
              error: true,
              meta: meta,
              payload: payload,
              type: type,
            }
          : {
              error: false,
              meta: meta,
              payload: payload,
              type: type,
            };
      });
    case "payload":
      return defineType(type, function (payload) {
        return {
          payload: payload,
          type: type,
        };
      });
    case "props":
      return defineType(type, function (props) {
        return __assign(__assign({}, props), {
          type: type,
        });
      });
    default:
      throw new Error("Unexpected config.");
  }
}
export function empty() {
  return {
    _as: "empty",
  };
}
export function fsa() {
  return {
    _as: "fsa",
    _m: undefined,
    _p: undefined,
  };
}
export function payload() {
  return {
    _as: "payload",
    _p: undefined,
  };
}
export function props() {
  return {
    _as: "props",
    _p: undefined,
  };
}
export function type(type, rest) {
  return __assign(__assign({}, rest), {
    type: type,
  });
}
export function union() {
  var creators = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    creators[_i] = arguments[_i];
  }
  var descriptor = {
    get: function () {
      throw new Error("Pseudo property not readable.");
    },
    set: function () {
      throw new Error("Pseudo property not writable.");
    },
  };
  var result = creators.map(function (_a) {
    var type = _a.type;
    return Object.defineProperty(
      {
        type: type,
      },
      "action",
      descriptor
    );
  });
  Object.defineProperties(result, {
    actions: descriptor,
    types: descriptor,
  });
  return result;
}

function defineType(type, creator) {
  return Object.defineProperty(creator, "type", {
    value: type,
    writable: false,
  });
}
