/******/(function(modules) {
/******/	var installedModules = {};
/******/	function require(moduleId) {
/******/		if(typeof moduleId !== "number") throw new Error("Cannot find module '"+moduleId+"'");
/******/		if(installedModules[moduleId])
/******/			return installedModules[moduleId].exports;
/******/		var module = installedModules[moduleId] = {
/******/			exports: {}
/******/		};
/******/		modules[moduleId](module, module.exports, require);
/******/		return module.exports;
/******/	}
/******/	require.ensure = function(chunkId, callback) {
/******/		callback(require);
/******/	};
/******/	return require(0);
/******/})
/******/({
/******/0: function(module, exports, require) {

var domjs = require(/* domjs/lib/html5 */7)(document, require(/* . */14));

var mydom = domjs.build("./templates/example");

document.body.appendChild(mydom);

/******/},
/******/
/******/1: function(module, exports, require) {

// Whether object is callable
// Inspired by: http://www.davidflanagan.com/2009/08/typeof-isfuncti.html

'use strict';

var forEach = Array.prototype.forEach.bind([]);

module.exports = function (obj) {
	var type;
	if (!obj) {
		return false;
	}
	type = typeof obj;
	if (type === 'function') {
		return true;
	}
	if (type !== 'object') {
		return false;
	}

	try {
		forEach(obj);
		return true;
	} catch (e) {
		if (e instanceof TypeError) {
			return false;
		}
		throw e;
	}
};


/******/},
/******/
/******/2: function(module, exports, require) {

// Analogous to Array.prototype.forEach
//
// Calls a function for each key-value pair found in object
// Additionally you can provide compareFn to iterate object in desired order

'use strict';

module.exports = require(/* ./_iterate */25)('forEach');


/******/},
/******/
/******/3: function(module, exports, require) {

// Is f a function ?

'use strict';

var toString = Object.prototype.toString

  , id = toString.call(function () {});

module.exports = function (f) {
	return (typeof f === "function") && (toString.call(f) === id);
};


/******/},
/******/
/******/4: function(module, exports, require) {

// Throw error if given object is null or undefined

'use strict';

module.exports = function (value) {
	if (value == null) {
		throw new TypeError("Cannot use null or undefined")
	}
};


/******/},
/******/
/******/5: function(module, exports, require) {

/******/ /* WEBPACK FREE VAR INJECTION */ (function(console) {
'use strict';

var forEach       = Array.prototype.forEach
  , map           = Array.prototype.map
  , slice         = Array.prototype.slice
  , keys          = Object.keys
  , reserved      = require(/* es5-ext/lib/reserved */13).all
  , isFunction    = require(/* es5-ext/lib/Function/is-function */3)
  , curry         = require(/* es5-ext/lib/Function/prototype/curry */9)
  , dscope        = require(/* ./dscope */6)
  , compact       = require(/* es5-ext/lib/Array/prototype/compact */18)
  , flatten       = require(/* es5-ext/lib/Array/prototype/flatten */19)
  , toArray       = require(/* es5-ext/lib/Object/prototype/to-array */12)
  , isList        = require(/* es5-ext/lib/Object/is-list */23)
  , bindMethods   = require(/* es5-ext/lib/Object/prototype/bind-methods */26)
  , isPlainObject = require(/* es5-ext/lib/Object/is-plain-object */11)
  , oForEach      = require(/* es5-ext/lib/Object/prototype/for-each */2)
  , isNode        = require(/* ./is-node */8)

  , renameReserved, nodeMap, nextInit;

renameReserved = (function (rename) {
	return function (scope) {
		Object.keys(scope).forEach(rename, scope);
	};
}(function (key) {
	if (reserved[key]) {
		this['_' + key] = this[key];
		delete this[key];
	}
}));

nodeMap = (function (create) {
	return {
		_cdata: create('createCDATASection'),
		_comment: create('createComment'),
		_text: create('createTextNode')
	};
}(function (method) {
	return function (str) {
		return this.df.appendChild(this.document[method](str || ''));
	};
}));

nodeMap._element = function (name) {
	this.createElement(name, this.processArguments(slice.call(arguments, 1)));
};
nodeMap._direct = function () {
	forEach.call(arguments, this.df.appendChild, this.df);
};
nodeMap._detached = function () {
	return this.processChildren(toArray.call(arguments)).map(function (el) {
		if (el.parentNode) {
			el.parentNode.removeChild(el);
		}
		return el;
	});
};

nextInit = function (document, extRequire) {
	this.document = document;
	this.require = extRequire || require(/* . */15);
	this.df = this.document.createDocumentFragment();
	Object.freeze(bindMethods.call(this.map, this));
	return this;
};

module.exports = {
	init: (function (setCreate) {
		return function (elMap) {
			this.map = {};
			// attach node methods
			keys(nodeMap).forEach(function (key) {
				this.map[key] = nodeMap[key];
			}, this);
			// attach element methods
			elMap.forEach(setCreate, this);
			renameReserved(this.map);
			this.map._map = this.map;

			this.init = nextInit;
			this.idMap = {};
			return this;
		};
	}(function (name) {
		this.map[name] = this.getCreate(name);
	})),
	build: function (f) {
		var df, predf;
		predf = this.df;
		df = this.df = this.document.createDocumentFragment();
		dscope(isFunction(f) ? f : curry.call(this.require, f), this.map);
		if (predf) {
			this.df = predf;
		}
		return df;
	},
	processArguments: function (args) {
		args = toArray.call(args);
		return [isPlainObject(args[0]) ? args.shift() : {}, args];
	},
	getCreate: function (name) {
		return function () {
			return this.getUpdate(this.createElement(name,
				this.processArguments(arguments)));
		};
	},
	getUpdate: function (el) {
		return function f() {
			if (!arguments.length) {
				return el;
			}
			this.updateElement(el, this.processArguments(arguments));
			return f;
		}.bind(this);
	},
	createElement: function (name, data) {
		return this.updateElement(this.df.appendChild(
			this.document.createElement(name)
		), data);
	},
	processChildren: function (children) {
		return compact.call(flatten.call(children.map(function self(child) {
			if (isFunction(child)) {
				child = child();
			} else if (!isNode(child) && isList(child) &&
					(typeof child === 'object')) {
				return map.call(child, self, this);
			} else if ((typeof child === "string") || (typeof child === "number")) {
				child = this.document.createTextNode(child);
			}
			return child;
		}, this)));
	},
	updateElement: function (el, data) {
		var attrs = data[0], children = data[1], self = this;
		oForEach.call(attrs, function (value, name) {
			this.setAttribute(el, name, value);
		}, this);
		this.processChildren(children).forEach(el.appendChild, el);
		return el;
	},
	setAttribute: function (el, name, value) {
		if ((value == null) || (value === false)) {
			return;
		} else if (value === true) {
			value = name;
		}
		if (name === 'id') {
			if (this.idMap[value]) {
				console.warn("Duplicate HTML element id: '" + value + "'");
			} else {
				this.idMap[value] = el;
			}
		}
		el.setAttribute(name, value);
	},
	getById: function (id) {
		var current = this.document.getElementById(id);
		!this.idMap[id] && (this.idMap[id] = current);
		return current || this.idMap[id];
	}
};

/******/ /* WEBPACK FREE VAR INJECTION */ }(require(/* __webpack_console */32)))

/******/},
/******/
/******/6: function(module, exports, require) {

// Dynamic scope for given function
// Pollutes global scope for time of function call

'use strict';

var keys     = Object.keys
  , global   = require(/* es5-ext/lib/global */31)
  , reserved = require(/* es5-ext/lib//reserved */13).all

  , set, unset;

set = function (scope, cache) {
	keys(scope).forEach(function (key) {
		if (global.hasOwnProperty(key)) {
			cache[key] = global[key];
		}
		global[key] = scope[key];
	});
};

unset = function (scope, cache) {
	keys(scope).forEach(function (key) {
		if (cache.hasOwnProperty(key)) {
			global[key] = cache[key];
		} else {
			delete global[key];
		}
	});
};

module.exports = function (fn, scope) {
	var result, cache = {};
	set(scope, cache);
	result = fn();
	unset(scope, cache);
	return result;
};


/******/},
/******/
/******/7: function(module, exports, require) {

'use strict';

var isFunction = require(/* es5-ext/lib/Function/is-function */3)
  , extend     = require(/* es5-ext/lib/Object/prototype/plain-extend */30)
  , domjs      = require(/* ./domjs */5)

  , html5js;

html5js = Object.freeze(extend.call(domjs, {
	setAttribute: function (_super, el, name, value) {
		if ((name.slice(0, 2) === 'on') && isFunction(value)) {
			el.setAttribute(name, name);
			el[name] = value;
		} else {
			_super(this, el, name, value);
		}
	}
}).init(['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio',
	'b', 'bdi', 'bdo', 'blockquote', 'br', 'button', 'canvas', 'caption', 'cite',
	'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del', 'details',
	'device', 'dfn', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption',
	'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header',
	'hgroup', 'hr', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen',
	'label', 'legend', 'li', 'link', 'map', 'mark', 'menu', 'meter', 'nav',
	'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param',
	'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section',
	'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary',
	'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time',
	'tr', 'track', 'ul', 'var', 'video', 'wbr']));

module.exports = function (document, require) {
	return Object.create(html5js).init(document, require);
};


/******/},
/******/
/******/8: function(module, exports, require) {

// Whether object is DOM node

'use strict';

module.exports = function (x) {
	return (x && (typeof x.nodeType === "number") &&
		(typeof x.nodeName === "string")) || false;
};


/******/},
/******/
/******/9: function(module, exports, require) {

// Returns a function that, applied to an argument list arg2, applies the
// underlying function to args ++ arg2.
// curry(f, args1…)(args2…) =def  f(args1…, args2…)
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require(/* ../../Object/assert-callable */10)
  , toArray        = require(/* ../../Object/prototype/to-array */12);

module.exports = function () {
	var fn, args;
	assertCallable(fn = this);
	args = toArray.call(arguments);
	return function () {
		return apply.call(fn, this, args.concat(toArray.call(arguments)));
	};
};


/******/},
/******/
/******/10: function(module, exports, require) {

// Throw error if given object is not callable

'use strict';

var isCallable = require(/* ./is-callable */1);

module.exports = function (fn) {
	if (!isCallable(fn)) {
		throw new TypeError(fn + " is not a function");
	}
};


/******/},
/******/
/******/11: function(module, exports, require) {

// Whether object is plain object.
// Its protototype should be Object.prototype and it cannot be host object.

'use strict';

var getPrototypeOf = Object.getPrototypeOf
  , prototype      = Object.prototype
  , toString       = prototype.toString

  , id = {}.toString();

module.exports = function (value) {
	return (value && (typeof value === 'object') &&
		(getPrototypeOf(value) === prototype) && (toString.call(value) === id)) ||
		false;
};


/******/},
/******/
/******/12: function(module, exports, require) {

// Convert array-like object to an Array

'use strict';

var isArray       = Array.isArray
  , slice         = Array.prototype.slice
  , isArguments   = require(/* ../../Function/is-arguments */20)

module.exports = function () {
	if (isArray(this)) {
		return this;
	} else if (isArguments(this)) {
		return (this.length === 1) ? [this[0]] : Array.apply(null, this);
	} else {
		return slice.call(this);
	}
};


/******/},
/******/
/******/13: function(module, exports, require) {

// List of EcmaScript 5th edition reserved keywords

'use strict';

var freeze  = Object.freeze
  , setTrue = require(/* ./Object/get-set */22)(true)
  , flatten = require(/* ./Object/prototype/flatten */27);

// 7.6.1.1 Keywords
['break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete', 'do',
	'else', 'finally', 'for', 'function', 'if', 'in', 'instanceof', 'new',
	'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
	'with']
	.forEach(setTrue, exports.keywords = {}); freeze(exports.keywords);

// 7.6.1.2 Future Reserved Words
['class', 'const', 'enum', 'exports', 'extends', 'import', 'super']
	.forEach(setTrue, exports.future = {}); freeze(exports.future);

// Future Reserved Words (only in strict mode)
['implements', 'interface', 'let', 'package', 'private', 'protected', 'public',
	'static', 'yield']
	.forEach(setTrue, exports.futureStrict = {}); freeze(exports.futureStrict);

freeze(exports.all = flatten.call(exports));


/******/},
/******/
/******/14: function(module, exports, require) {

/***/module.exports = function(name) {
/***/	var map = {"./templates/example.js":16,"./templates/example2.js":17,"./test.js":0};
/***/	return require(map[name+""]||map[name+".webpack.js"]||map[name+".web.js"]||map[name+".js"]||name);
/***/};

/******/},
/******/
/******/15: function(module, exports, require) {

/***/module.exports = function(name) {
/***/	var map = {"./domjs.js":5,"./dscope.js":6,"./html5.js":7,"./is-node.js":8};
/***/	return require(map[name+""]||map[name+".webpack.js"]||map[name+".web.js"]||map[name+".js"]||name);
/***/};

/******/},
/******/
/******/16: function(module, exports, require) {

header(
	h1('Heading'),
	h2('Subheading'));

nav(
	ul({ 'class': 'breadcrumbs' },
		li(a({ href: '/' }, 'Home')),
		li(a({ href: '/section/'}, 'Section')),
		li(a('Subject'))));

article(
	p('Lorem ipsum...'));

footer('Footer stuff');

/******/},
/******/
/******/17: function(module, exports, require) {

header(
	h1('Heading2'),
	h2('Subheading2'));

nav(
	ul({ 'class': 'breadcrumbs' },
		li(a({ href: '/' }, 'Home2')),
		li(a({ href: '/section/'}, 'Section2')),
		li(a('Subject'))));

article(
	p('Lorem ipsum2...'));

footer('Footer stuff2');


/******/},
/******/
/******/18: function(module, exports, require) {

// Removes all falsy values.
//
// Inspired by: http://documentcloud.github.com/underscore/#compact

'use strict';

var filter   = Array.prototype.filter

module.exports = function () {
	return filter.call(this, Boolean);
};


/******/},
/******/
/******/19: function(module, exports, require) {

// Flattens nested array-like objects.

'use strict';

var isArray   = Array.isArray
  , forEach   = Array.prototype.forEach
  , push      = Array.prototype.push;

module.exports = function flatten () {
	var r = [];
	forEach.call(this, function (x) {
		push.apply(r, isArray(x) ? flatten.call(x) : [x]);
	});
	return r;
};


/******/},
/******/
/******/20: function(module, exports, require) {

'use strict';

var toString = Object.prototype.toString

  , id = '[object Arguments]';

module.exports = function (x) {
	return toString.call(x) === id;
};


/******/},
/******/
/******/21: function(module, exports, require) {

// Memoizes a given function

'use strict';

var isArray        = Array.isArray
  , map            = Array.prototype.map
  , slice          = Array.prototype.slice
  , apply          = Function.prototype.apply
  , assertCallable = require(/* ../Object/assert-callable */10)

  , resolve, substituteNaN, altNaN;

resolve = function (args) {
	return this.map(function (r, i) {
		return r ? r(args[i]) : args[i];
	}).concat(slice.call(args, this.length));
};

altNaN = {};
substituteNaN = function (item) {
	return ((item !== item) && isNaN(item)) ? altNaN : item;
};

module.exports = function (fn, length, resolvers) {
	var cache, resolver;
	assertCallable(fn);

	cache = [];
	if (isArray(length)) {
		resolvers = length;
		length = fn.length;
	} else if ((length == null) || isNaN(Number(length)) || (length < 0))  {
		length = fn.length;
	}

	resolver = resolvers ? resolve.bind(resolvers) : null;

	return function () {
		var limit, i, index, arg, args, current, found;

		args = resolver ? resolver(arguments) : arguments;

		i = 0;
		index = limit = (length === false) ? args.length: length;
		current = cache;

		if (limit === 0) {
			found = current.hasOwnProperty(0);
		} else {
			while (i !== limit) {
				arg = substituteNaN(args[i]);
				if (!current[index]) {
					current = (current[index] = [[arg], []]);
					index = 0;
				} else if (
					(index = (current = current[index])[0].indexOf(arg)) === -1) {
					index = current[0].push(arg) - 1;
					found = false;
				} else {
					found = current[1].hasOwnProperty(index);
				}
				current = current[1];
				++i;
			}
		}
		if (found) {
			return current[index];
		}
		return current[index] = apply.call(fn, this, args);
	};
};


/******/},
/******/
/******/22: function(module, exports, require) {

// Return function that sets pregiven value to given key
//
// getSet('bar').call(obj, 'foo') =def obj['foo'] = 'bar'

'use strict';

var assertNotNull = require(/* ../assert-not-null */4);

module.exports = require(/* ../Function/memoize */21)(function (value) {
	return function (key) {
		assertNotNull(this);
		this[key] = value;
	};
});


/******/},
/******/
/******/23: function(module, exports, require) {

// Whether object is array-like object

'use strict';

module.exports = function (x) {
	return ((x != null) && (typeof x.length === 'number') &&
		((typeof x === "object") || (typeof x === "string"))) || false;
};


/******/},
/******/
/******/24: function(module, exports, require) {

// Internal method used by 'extend' and 'override' methods

'use strict';

var call       = Function.prototype.call
  , curry      = require(/* ../../Function/prototype/curry */9)
  , isFunction = require(/* ../../Function/is-function */3)
  , isCallable = require(/* ../is-callable */1)

  , pattern, map;

pattern =
	/^\s*function\s*\(\s*(_super|_proto)\s*(?:,\s*(_super|_proto)\s*)?[,)]/;

map = {
	'_super': function (from, proto) {
		return call.bind(from);
	},
	'_proto': function (from, proto) {
		return proto;
	}
};

module.exports = function (from, to, proto) {
	var match, a1, a2;
	if (isCallable(from) && isFunction(to) &&
		 (match = to.toString().match(pattern))) {
		if (match[2]) {
			return curry.call(to, map[match[1]](from, proto),
				map[match[2]](from, proto));
		} else {
			return curry.call(to, map[match[1]](from, proto));
		}
	} else {
		return to;
	}
};


/******/},
/******/
/******/25: function(module, exports, require) {

// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order

'use strict';

var call       = Function.prototype.call
  , getKeys    = Object.keys
  , isCallable = require(/* ../is-callable */1)

  , compareValues;

compareValues = function (compareFn, a, b) {
	return compareFn(this[a], this[b]);
};

module.exports = function (method) {
	return function (cb, thisArg, compareFn, byKeys) {
		var keys, count, fn, list, index;
		list = keys = getKeys(this);
		index = -1;
		count = keys.length;
		if (compareFn) {
			keys.sort(byKeys ? compareFn : compareValues.bind(this, compareFn));
		}
		fn = function (key) {
			return cb.call(thisArg, this[key], key, this, ++index, count);
		};
		if (isCallable(method)) {
			return call.call(method, list, fn, this);
		} else {
			return list[method](fn, this);
		}
	};
};


/******/},
/******/
/******/26: function(module, exports, require) {

// Bind all object functions to given scope.
// If scope is not given then functions are bound to object they're assigned to.
// This emulates Python's bound instance methods.
// If source (second argument) is present then all functions from source are
// binded to scope and assigned to object.
//
// Inspired by:
// http://mochi.github.com/mochikit/doc/html/MochiKit/Base.html#fn-bindmethods

'use strict';

var bind          = Function.prototype.bind
  , assertNotNull = require(/* ../../assert-not-null */4)
  , isCallable    = require(/* ../is-callable */1)
  , forEach       = require(/* ./for-each */2)

module.exports = function (scope, source) {
	assertNotNull(this);
	scope = scope || this;
	source = source || this;
	forEach.call(source, function (value, key) {
		if (isCallable(value)) {
			this[key] = bind.call(value, scope);
		}
	}, this);
	return this;
};


/******/},
/******/
/******/27: function(module, exports, require) {

// Flatten object properties into one object
//
// flatten.call({ a: { b: 1, c: 1 }, d: { e: 1, f: 1 } })
//                 =def { b: 1, c: 1, e: 1, f: 1 }

'use strict';

var isPlainObject = require(/* ../is-plain-object */11)
  , forEach       = require(/* ./for-each */2)

  , process;

process = function self (value, key) {
	if (isPlainObject(value)) {
		forEach.call(value, self, this);
	} else {
		this[key] = value;
	}
};

module.exports = function () {
	var flattened = {};
	forEach.call(this, process, flattened);
	return flattened;
};


/******/},
/******/
/******/28: function(module, exports, require) {

// Analogous to Array.prototype.map
//
// Creates a new object with properties which values are results of calling
// a provided function on every key-value pair in this object.

'use strict';

var forEach = require(/* ./for-each */2);

module.exports = function (cb, thisArg) {
	var o = {};
	forEach.call(this, function (value, key) {
		o[key] = cb.call(this, value, key);
	}, thisArg);
	return o;
};


/******/},
/******/
/******/29: function(module, exports, require) {

// Merge properties of one object into other.
// Property keys found in both objects will be overwritten.

'use strict';

var keys          = Object.keys
  , assertNotNull = require(/* ../../assert-not-null */4)
  , merge;

merge = function (obj, key) {
	return (this[key] = obj[key]);
};

module.exports = function (arg) {
	assertNotNull(this);
	keys(arg).forEach(merge.bind(this, arg));
	return this;
};


/******/},
/******/
/******/30: function(module, exports, require) {

// extend ES3 way, no descriptors involved
// see ../extend.js for more details

'use strict';

var create     = Object.create
  , map        = require(/* ./map */28)
  , merge      = require(/* ./merge */29)
  , currySuper = require(/* ./_curry_super */24)

  , fn;

fn = function (value, name) {
	return currySuper(this[name], value, this);
};

module.exports = function (properties) {
	return merge.call(create(this), map.call(properties || {}, fn, this));
};


/******/},
/******/
/******/31: function(module, exports, require) {

// Get global object

'use strict';

module.exports = Function("return this")();


/******/},
/******/
/******/32: function(module, exports, require) {

var console = window.console;
module.exports = console;
for(var name in {log:1, info:1, error:1, warn:1, dir:1, trace:1, assert:1})
	if(!console[name])
		console[name] = function() {};
if(!console.time)
console.time = function(label) {
	times[label] = Date.now();
};
if(!console.timeEnd)
console.timeEnd = function() {
	var duration = Date.now() - times[label];
	console.log('%s: %dms', label, duration);
};

/******/},
/******/
/******/})