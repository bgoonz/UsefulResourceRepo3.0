Encapsulation is one of the most important principles of object oriented programming. Ideally, an object exposes a limited public interface and keeps its data and implementation details private.

JavaScript does not provide a built-in way to manage the visibility of an object's members. However its flexibility does allow us to recreate encapsulation. A common approach is to use a function that contains the private data and functions, and then return a limited set of public functions that can interact with the private data.

```js

var Customer = function(id) {
    var totalSpend = 0;

    function isSpecial() {
        return totalSpend > 100;
    }

    return {
        placeOrder: function(order) {
            totalSpend += order.total;
        },
        getReward: function() {
            if (isSpecial()) {
                return "Special Customer Coupon!";
            } else {
                return "Nothing Today";
            }
        },
        toString: function() {
            return "Customer #" + id;
        }
    };
};

`

This approach is valid, but not necessarily that efficient when creating lots of objects. Every time an object is created, all its functions and created as well. This takes time, and perhaps more importantly, memory. If you're script is running on a mobile device then resources can be limited. Also, server-side JavaScript running in NodeJS could be creating many thousands of objects.

JavaScript provides the prototype model of inheritance to solve this problem. A single prototype object can contain the functions. Then any objects that have that prototype can share them without any extra overhead.

The following code demonstrates the common pattern of defining a prototype.

`

var Customer = function(id) {
    this.id = id;
    this.totalSpend = 0;
};
Customer.prototype.placeOrder = function(order) {
    totalSpend += order.total;
};
Customer.prototype.getReward = function() {
    if (isSpecial()) {
        return "Special Customer Coupon!";
    } else {
        return "Nothing Today";
    }
};
Customer.prototype.toString = function() {
    return "Customer #" + id;
};
Customer.prototype.isSpecial = function() {
    return totalSpend > 100;
};

`

While this code is more efficient, we have lost the ability to encapsulate any data and private functions. Anyone creating a `Customer` object can directly access the `totalSpend` property.

A possible workaround is to rely on a convention of, for example, prefixing all non-public members with an underscore. Personally, I dislike this. It adds syntactic noise to the code and doesn't discourage wayward developers from using objects in ways they shouldn't!

Therefore I created an alternative solution. It combines the efficiency of prototypes, with the principles of encapsulation. Here's a quick example of defining a class:

`

var Customer = defineClass({
    "constructor": function(id) {
        this.id = id;
        this.totalSpend = 0;
    },
    "public": {
        placeOrder: function(order) {
            this.totalSpend += order.total;
        },
        getReward: function() {
            if (this.isSpecial()) {
                return "Special Customer Coupon!";
            } else {
                return "Nothing Today";
            }
        },
        toString: function() {
            return "Customer #" + this.id;
        }
    },
    "private": {
        isSpecial: function() {
            return this.totalSpend > 100;
        }
    }
});

```

The defineClass function accepts an object literal which contains the constructor, the public functions and private functions. Within functions, the "this" keyword works as normal, allowing storage of data in the object. All the object's functions, public and private, can call each other.

Let's examine the use of an instance of the object.

```js
var customer = new Customer(123);
console.log(customer.toString()); // > "Customer #123"
customer.placeOrder({ total: 10 });
console.log(customer.getReward()); // > "Nothing Today"
customer.placeOrder({ total: 101 });
console.log(customer.getReward()); // > "Special Customer Coupon!"
```

So what happens if we try to access the private members of the object?

```js
var customer = new Customer(123);
customer.totalSpend = 1000;
console.log(customer.getReward()); // > "Nothing Today"
console.log(typeof customer.isSpecial); // > "undefined"
```

Any attempt to use the private data or functions fails. The actual object we're using doesn't have those private members.

## Annotated source for defineClass

The source code for defineClass is annotated with comments to explain the trickier details. It's less than 100 lines and is probably easier to read, than explain it again here.

```js
var defineClass = (function () {
  // Creates a proxying function that will call the real object.
  function createProxyFunction(functionName) {
    return function () {
      // 'this' in here is the proxy object.
      var realObject = this.__realObject__,
        realFunction = realObject[functionName];

      // Call the real function on the real object, passing any arguments we received.
      return realFunction.apply(realObject, arguments);
    };
  }

  // createProxyClass creates a function that will create Proxy objects.
  //   publicFunctions: an object of public functions for the proxy.
  function createProxyClass(publicFunctions) {
    var ProxyClass, functionName, func;

    // This is this Proxy object constructor.
    ProxyClass = function (realObject) {
      // Choose a reasonably obscure name for the real object property.
      // It should avoid any conflict with the public function names.
      // Also any code being naughty by using this property is quickly spotted!
      this.__realObject__ = realObject;
    };

    // Create a proxy function for each of the public functions.
    for (functionName in publicFunctions) {
      func = publicFunctions[functionName];
      // We only want functions that are defined directly on the publicFunctions object.
      if (
        publicFunctions.hasOwnProperty(functionName) &&
        typeof func === "function"
      ) {
        ProxyClass.prototype[functionName] = createProxyFunction(functionName);
      }
    }

    return ProxyClass;
  }

  function copyToPrototype(source, destination) {
    var prototype = destination.prototype,
      property;
    for (property in source) {
      if (source.hasOwnProperty(property)) {
        prototype[property] = source[property];
      }
    }
  }

  function createRealClass(constructor, publics, privates, proxyClass) {
    var RealClass = function () {
      var proxy;

      if (typeof constructor === "function") {
        // Call the constructor function to perform any initialization of the object.
        constructor.apply(this, arguments);
      }
      proxy = new proxyClass(this);
      // Maintain the illusion that the proxy object is a real object.
      // Assign the constructor property in case anyone uses it to create another instance.
      proxy.constructor = RealClass;
      // Returning the proxy object means creating a new instance of Class
      // results in a proxy object, instead of the real object.
      // Callers can then only interact with the proxy.
      return proxy;
    };
    // The RealClass has both public and private functions.
    copyToPrototype(publics || {}, RealClass);
    copyToPrototype(privates || {}, RealClass);

    return RealClass;
  }

  // Return the defineClass function.
  return function (options) {
    // 'public' and 'private' are reserved keywords, so the option properties must be
    // accessed using strings instead of options.public, for example.
    var proxyClass = createProxyClass(options["public"]),
      realClass = createRealClass(
        options["constructor"],
        options["public"],
        options["private"],
        proxyClass
      );
    return realClass;
  };
})();
```

## Proxy Object

The key to how defineClass works lies with the "proxy" object pattern. A cute trick of JavaScript is that an object constructor function may return a different object, other than the one being constructed. So when creating a new Customer object, you actually get a CustomerProxy object. The real Customer object is hidden within the proxy.

To protect the real object from unwanted external manipulation, a proxy object is created to only expose the public functions. This proxy object has a single property that references the real object. Any call to a function of the proxy object is passed back to the real object.

This does provide a way to circumvent the proxy, by directly using the real object property. However, choosing a suitable name for the property will clearly highlight any calling code that is doing something questionable.

In addition, it is sometimes necessary to violate encapsulation. A common case is for serialization, which requires access to the private data of an object. It's therefore useful to have an "escape valve".
