'use strict';

var forEach       = Array.prototype.forEach
  , map           = Array.prototype.map
  , slice         = Array.prototype.slice
  , keys          = Object.keys
  , reserved      = require('es5-ext/lib/reserved').all
  , isFunction    = require('es5-ext/lib/Function/is-function')
  , curry         = require('es5-ext/lib/Function/prototype/curry')
  , dscope        = require('./dscope')
  , compact       = require('es5-ext/lib/Array/prototype/compact')
  , flatten       = require('es5-ext/lib/Array/prototype/flatten')
  , toArray       = require('es5-ext/lib/Object/prototype/to-array')
  , isList        = require('es5-ext/lib/Object/is-list')
  , bindMethods   = require('es5-ext/lib/Object/prototype/bind-methods')
  , isPlainObject = require('es5-ext/lib/Object/is-plain-object')
  , oForEach      = require('es5-ext/lib/Object/prototype/for-each')
  , isNode        = require('./is-node')

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
	this.require = extRequire || require;
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
