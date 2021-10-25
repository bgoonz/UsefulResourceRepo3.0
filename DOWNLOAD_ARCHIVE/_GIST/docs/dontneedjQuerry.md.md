## Query Selector

In place of common selectors like class, id or attribute we can use `document.querySelector` or `document.querySelectorAll` for substitution. The differences lie in: \* `document.querySelector` returns the first matched element \* `document.querySelectorAll` returns all matched elements as NodeList. It can be converted to Array using `Array.prototype.slice.call(document.querySelectorAll(selector));` \* If there are no elements matched, jQuery and `document.querySelectorAll` will return `[]`, whereas `document.querySelector` will return `null`.

> Notice: `document.querySelector` and `document.querySelectorAll` are quite **SLOW**, try to use `document.getElementById`, `document.getElementsByClassName` or `document.getElementsByTagName` if you want to get a performance bonus.

- [1.0](#1.0) <span id="1.0"></span> Query by selector

      // jQuery
      $('selector');

      // Native
      document.querySelectorAll('selector');

- [1.1](#1.1) <span id="1.1"></span> Query by class

      // jQuery
      $('.class');

      // Native
      document.querySelectorAll('.class');

      // or
      document.getElementsByClassName('class');

- [1.2](#1.2) <span id="1.2"></span> Query by id

      // jQuery
      $('#id');

      // Native
      document.querySelector('#id');

      // or
      document.getElementById('id');

- [1.3](#1.3) <span id="1.3"></span> Query by attribute

      // jQuery
      $('a[target=_blank]');

      // Native
      document.querySelectorAll('a[target=_blank]');

- [1.4](#1.4) <span id="1.4"></span> Query in descendents

      // jQuery
      $el.find('li');

      // Native
      el.querySelectorAll('li');

- [1.5](#1.5) <span id="1.5"></span> Sibling/Previous/Next Elements

  - Sibling elements

        // jQuery
        $el.siblings();

        // Native
        Array.prototype.filter.call(el.parentNode.children, (child) =>
          child !== el
        );

  - Previous elements

        // jQuery
        $el.prev();

        // Native
        el.previousElementSibling;

  - Next elements

        // jQuery
        $el.next();

        // Native
        el.nextElementSibling;

- [1.6](#1.6) <span id="1.6"></span> Closest

  Return the first matched element by provided selector, traversing from current element to document.

      // jQuery
      $el.closest(selector);

      // Native - Only latest, NO IE
      el.closest(selector);

      // Native - IE10+
      function closest(el, selector) {
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        while (el) {
          if (matchesSelector.call(el, selector)) {
            return el;
          } else {
            el = el.parentElement;
          }
        }
        return null;
      }

- [1.7](#1.7) <span id="1.7"></span> Parents Until

  Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.

      // jQuery
      $el.parentsUntil(selector, filter);

      // Native
      function parentsUntil(el, selector, filter) {
        const result = [];
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        // match start from parent
        el = el.parentElement;
        while (el && !matchesSelector.call(el, selector)) {
          if (!filter) {
            result.push(el);
          } else {
            if (matchesSelector.call(el, filter)) {
              result.push(el);
            }
          }
          el = el.parentElement;
        }
        return result;
      }

- [1.8](#1.8) <span id="1.8"></span> Form

  - Input/Textarea

        // jQuery
        $('#my-input').val();

        // Native
        document.querySelector('#my-input').value;

  - Get index of e.currentTarget between `.radio`

        // jQuery
        $(e.currentTarget).index('.radio');

        // Native
        Array.prototype.indexOf.call(document.querySelectorAll('.radio'), e.currentTarget);

- [1.9](#1.9) <span id="1.9"></span> Iframe Contents

  `$('iframe').contents()` returns `contentDocument` for this specific iframe

  - Iframe contents

        // jQuery
        $iframe.contents();

        // Native
        iframe.contentDocument;

  - Iframe Query

        // jQuery
        $iframe.contents().find('.css');

        // Native
        iframe.contentDocument.querySelectorAll('.css');

- [1.10](#1.10) <span id="1.10"></span> Get body

      // jQuery
      $('body');

      // Native
      document.body;

- [1.11](#1.11) <span id="1.11"></span> Attribute getter and setter

  - Get an attribute

        // jQuery
        $el.attr('foo');

        // Native
        el.getAttribute('foo');

  - Set an attribute

        // jQuery, note that this works in memory without change the DOM
        $el.attr('foo', 'bar');

        // Native
        el.setAttribute('foo', 'bar');

  - Get a `data-` attribute

        // jQuery
        $el.data('foo');

        // Native (use `getAttribute`)
        el.getAttribute('data-foo');

        // Native (use `dataset` if only need to support IE 11+)
        el.dataset['foo'];

**[⬆ back to top](#table-of-contents)**

## CSS & Style

- [2.1](#2.1) <span id="2.1"></span> CSS

  - Get style

        // jQuery
        $el.css('color');

        // Native
        // NOTE: Known bug, will return 'auto' if style value is 'auto'
        const win = el.ownerDocument.defaultView;

        // null means not to return pseudo styles
        win.getComputedStyle(el, null).color;

  - Set style

        // jQuery
        $el.css({ color: '#f01' });

        // Native
        el.style.color = '#f01';

  - Get/Set Styles

    Note that if you want to set multiple styles once, you could refer to [setStyles](https://github.com/oneuijs/oui-dom-utils/blob/master/src/index.js#L194) method in oui-dom-utils package.

  - Add class

        // jQuery
        $el.addClass(className);

        // Native
        el.classList.add(className);

  - Remove class

        // jQuery
        $el.removeClass(className);

        // Native
        el.classList.remove(className);

  - has class

        // jQuery
        $el.hasClass(className);

        // Native
        el.classList.contains(className);

  - Toggle class

        // jQuery
        $el.toggleClass(className);

        // Native
        el.classList.toggle(className);

- [2.2](#2.2) <span id="2.2"></span> Width & Height

  Width and Height are theoretically identical, take Height as example:

  - Window height

        // window height
        $(window).height();

        // with scrollbar
        window.document.documentElement.clientHeight;

        // without scrollbar, behaves like jQuery
        window.innerHeight;

  - Document height

        // jQuery
        $(document).height();

        // Native
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(
          body.offsetHeight,
          body.scrollHeight,
          html.clientHeight,
          html.offsetHeight,
          html.scrollHeight
        );

  - Element height

        // jQuery
        $el.height();

        // Native
        function getHeight(el) {
          const styles = window.getComputedStyle(el);
          const height = el.offsetHeight;
          const borderTopWidth = parseFloat(styles.borderTopWidth);
          const borderBottomWidth = parseFloat(styles.borderBottomWidth);
          const paddingTop = parseFloat(styles.paddingTop);
          const paddingBottom = parseFloat(styles.paddingBottom);
          return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
        }

        // accurate to integer（when `border-box`, it's `height`; when `content-box`, it's `height + padding + border`）
        el.clientHeight;

        // accurate to decimal（when `border-box`, it's `height`; when `content-box`, it's `height + padding + border`）
        el.getBoundingClientRect().height;

- [2.3](#2.3) <span id="2.3"></span> Position & Offset

  - Position

    Get the current coordinates of the element relative to the offset parent.

        // jQuery
        $el.position();

        // Native
        { left: el.offsetLeft, top: el.offsetTop }

  - Offset

    Get the current coordinates of the element relative to the document.

        // jQuery
        $el.offset();

        // Native
        function getOffset (el) {
          const box = el.getBoundingClientRect();

          return {
            top: box.top + window.pageYOffset - document.documentElement.clientTop,
            left: box.left + window.pageXOffset - document.documentElement.clientLeft
          };
        }

- [2.4](#2.4) <span id="2.4"></span> Scroll Top

  Get the current vertical position of the scroll bar for the element.

      // jQuery
      $(window).scrollTop();

      // Native
      (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

**[⬆ back to top](#table-of-contents)**

## DOM Manipulation

- [3.1](#3.1) <span id="3.1"></span> Remove

  Remove the element from the DOM.

      // jQuery
      $el.remove();

      // Native
      el.parentNode.removeChild(el);

- [3.2](#3.2) <span id="3.2"></span> Text

  - Get text

    Get the combined text contents of the element including their descendants,

        // jQuery
        $el.text();

        // Native
        el.textContent;

  - Set text

    Set the content of the element to the specified text.

        // jQuery
        $el.text(string);

        // Native
        el.textContent = string;

- [3.3](#3.3) <span id="3.3"></span> HTML

  - Get HTML

        // jQuery
        $el.html();

        // Native
        el.innerHTML;

  - Set HTML

        // jQuery
        $el.html(htmlString);

        // Native
        el.innerHTML = htmlString;

- [3.4](#3.4) <span id="3.4"></span> Append

  Append child element after the last child of parent element

      // jQuery
      $el.append('<div id="container">Hello World</div>');

      // Native (HTML string)
      el.insertAdjacentHTML('beforeend', '<div id="container">Hello World</div>');

      // Native (Element)
      el.appendChild(newEl);

- [3.5](#3.5) <span id="3.5"></span> Prepend

      // jQuery
      $el.prepend('<div id="container">Hello World</div>');

      // Native (HTML string)
      el.insertAdjacentHTML('afterbegin', '<div id="container">Hello World</div>');

      // Native (Element)
      el.insertBefore(newEl, el.firstChild);

- [3.6](#3.6) <span id="3.6"></span> insertBefore

  Insert a new node before the selected elements

      // jQuery
      $newEl.insertBefore(selector);

      // Native (HTML string)
      el.insertAdjacentHTML('beforebegin ', '<div id="container">Hello World</div>');

      // Native (Element)
      const el = document.querySelector(selector);
      if (el.parentNode) {
        el.parentNode.insertBefore(newEl, el);
      }

- [3.7](#3.7) <span id="3.7"></span> insertAfter

  Insert a new node after the selected elements

      // jQuery
      $newEl.insertAfter(selector);

      // Native (HTML string)
      el.insertAdjacentHTML('afterend', '<div id="container">Hello World</div>');

      // Native (Element)
      const el = document.querySelector(selector);
      if (el.parentNode) {
        el.parentNode.insertBefore(newEl, el.nextSibling);
      }

- [3.8](#3.8) <span id="3.8"></span> is

  Return `true` if it matches the query selector

      // jQuery - Notice `is` also work with `function` or `elements` which is not concerned here
      $el.is(selector);

      // Native
      el.matches(selector);

- [3.9](#3.9) <span id="3.9"></span> clone

  Create a deep copy of that element

      // jQuery
      $el.clone();

      // Native
      el.cloneNode();

      // For Deep clone , set param as `true`

- [3.10](#3.10) <span id="3.10"></span> empty

  Remove all child nodes

      // jQuery
      $el.empty();

      // Native
      el.innerHTML = '';

- [3.11](#3.11) <span id="3.11"></span> wrap

  Wrap an HTML structure around each element

      // jQuery
      $('.inner').wrap('<div class="wrapper"></div>');

      // Native
      Array.prototype.forEach.call(document.querySelectorAll('.inner'), (el) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        el.parentNode.insertBefore(wrapper, el);
        el.parentNode.removeChild(el);
        wrapper.appendChild(el);
      });

- [3.12](#3.12) <span id="3.12"></span> unwrap

  Remove the parents of the set of matched elements from the DOM

      // jQuery
      $('.inner').unwrap();

      // Native
      Array.prototype.forEach.call(document.querySelectorAll('.inner'), (el) => {
        Array.prototype.forEach.call(el.childNodes, (child) => {
          el.parentNode.insertBefore(child, el);
        });
        el.parentNode.removeChild(el);
      });

- [3.13](#3.13) <span id="3.13"></span> replaceWith

  Replace each element in the set of matched elements with the provided new content

      // jQuery
      $('.inner').replaceWith('<div class="outer"></div>');

      // Native
      Array.prototype.forEach.call(document.querySelectorAll('.inner'), (el) => {
        const outer = document.createElement('div');
        outer.className = 'outer';
        el.parentNode.insertBefore(outer, el);
        el.parentNode.removeChild(el);
      });

**[⬆ back to top](#table-of-contents)**

## Ajax

[Fetch API](https://fetch.spec.whatwg.org/) is the new standard to replace XMLHttpRequest to do ajax. It works on Chrome and Firefox, you can use polyfills to make it work on legacy browsers.

Try [github/fetch](http://github.com/github/fetch) on IE9+ or [fetch-ie8](https://github.com/camsong/fetch-ie8/) on IE8+, [fetch-jsonp](https://github.com/camsong/fetch-jsonp) to make JSONP requests.

- [4.1](#4.1) <span id="4.1"></span> Load data from the server and place the returned HTML into the matched element.

      // jQuery
      $(selector).load(url, completeCallback)

      // Native
      fetch(url).then(data => data.text()).then(data => {
        document.querySelector(selector).innerHTML = data
      }).then(completeCallback)

**[⬆ back to top](#table-of-contents)**

## Events

For a complete replacement with namespace and delegation, refer to https://github.com/oneuijs/oui-dom-events

- [5.0](#5.0) <span id="5.0"></span> Document ready by `DOMContentLoaded`

      // jQuery
      $(document).ready(eventHandler);

      // Native
      // Check if the DOMContentLoaded has already been completed
      if (document.readyState === 'complete' || document.readyState !== 'loading') {
        eventHandler();
      } else {
        document.addEventListener('DOMContentLoaded', eventHandler);
      }

- [5.1](#5.1) <span id="5.1"></span> Bind an event with on

      // jQuery
      $el.on(eventName, eventHandler);

      // Native
      el.addEventListener(eventName, eventHandler);

- [5.2](#5.2) <span id="5.2"></span> Unbind an event with off

      // jQuery
      $el.off(eventName, eventHandler);

      // Native
      el.removeEventListener(eventName, eventHandler);

- [5.3](#5.3) <span id="5.3"></span> Trigger

      // jQuery
      $(el).trigger('custom-event', {key1: 'data'});

      // Native
      if (window.CustomEvent) {
        const event = new CustomEvent('custom-event', {detail: {key1: 'data'}});
      } else {
        const event = document.createEvent('CustomEvent');
        event.initCustomEvent('custom-event', true, true, {key1: 'data'});
      }

      el.dispatchEvent(event);

**[⬆ back to top](#table-of-contents)**

## Utilities

Most of utilities are found by native API. Others advanced functions could be choosed better utilities library focus on consistency and performance. Recommend [lodash](https://lodash.com) to replace.

- [6.1](#6.1) <span id="6.1"></span> Basic utilities

  - isArray

  Determine whether the argument is an array.

      // jQuery
      $.isArray(array);

      // Native
      Array.isArray(array);

  - isWindow

  Determine whether the argument is a window.

      // jQuery
      $.isWindow(obj);

      // Native
      function isWindow(obj) {
        return obj !== null && obj !== undefined && obj === obj.window;
      }

  - inArray

  Search for a specified value within an array and return its index (or -1 if not found).

      // jQuery
      $.inArray(item, array);

      // Native
      array.indexOf(item) > -1;

      // ES6-way
      array.includes(item);

  - isNumeric

  Determine if the argument passed is numerical. Use `typeof` to decide the type or the `type` example for better accuracy.

      // jQuery
      $.isNumeric(item);

      // Native
      function isNumeric(value) {
        var type = typeof value;

        return (type === 'number' || type === 'string') && !Number.isNaN(value - Number.parseFloat(value));
      }

  - isFunction

  Determine if the argument passed is a JavaScript function object.

      // jQuery
      $.isFunction(item);

      // Native
      function isFunction(item) {
        if (typeof item === 'function') {
          return true;
        }
        var type = Object.prototype.toString(item);
        return type === '[object Function]' || type === '[object GeneratorFunction]';
      }

  - isEmptyObject

  Check to see if an object is empty (contains no enumerable properties).

      // jQuery
      $.isEmptyObject(obj);

      // Native
      function isEmptyObject(obj) {
        return Object.keys(obj).length === 0;
      }

  - isPlainObject

  Check to see if an object is a plain object (created using “{}” or “new Object”).

      // jQuery
      $.isPlainObject(obj);

      // Native
      function isPlainObject(obj) {
        if (typeof (obj) !== 'object' || obj.nodeType || obj !== null && obj !== undefined && obj === obj.window) {
          return false;
        }

        if (obj.constructor &&
            !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
          return false;
        }

        return true;
      }

  - extend

  Merge the contents of two or more objects together into the first object. object.assign is ES6 API, and you could use [polyfill](https://github.com/ljharb/object.assign) also.

      // jQuery
      $.extend({}, defaultOpts, opts);

      // Native
      Object.assign({}, defaultOpts, opts);

  - trim

  Remove the white-space from the beginning and end of a string.

      // jQuery
      $.trim(string);

      // Native
      string.trim();

  - map

  Translate all items in an array or object to new array of items.

      // jQuery
      $.map(array, (value, index) => {
      });

      // Native
      array.map((value, index) => {
      });

  - each

  A generic iterator function, which can be used to seamlessly iterate over both objects and arrays.

      // jQuery
      $.each(array, (index, value) => {
      });

      // Native
      array.forEach((value, index) => {
      });

  - grep

  Finds the elements of an array which satisfy a filter function.

      // jQuery
      $.grep(array, (value, index) => {
      });

      // Native
      array.filter((value, index) => {
      });

  - type

  Determine the internal JavaScript \[Class\] of an object.

      // jQuery
      $.type(obj);

      // Native
      function type(item) {
        const reTypeOf = /(?:^\[object\s(.*?)\]$)/;
        return Object.prototype.toString.call(item)
          .replace(reTypeOf, '$1')
          .toLowerCase();
      }

  - merge

  Merge the contents of two arrays together into the first array.

      // jQuery
      $.merge(array1, array2);

      // Native
      // But concat function doesn't remove duplicate items.
      function merge(...args) {
        return [].concat(...args)
      }

  - now

  Return a number representing the current time.

      // jQuery
      $.now();

      // Native
      Date.now();

  - proxy

  Takes a function and returns a new one that will always have a particular context.

      // jQuery
      $.proxy(fn, context);

      // Native
      fn.bind(context);

  - makeArray

  Convert an array-like object into a true JavaScript array.

      // jQuery
      $.makeArray(arrayLike);

      // Native
      Array.prototype.slice.call(arrayLike);

      // ES6-way
      Array.from(arrayLike);

- [6.2](#6.2) <span id="6.2"></span> Contains

  Check to see if a DOM element is a descendant of another DOM element.

      // jQuery
      $.contains(el, child);

      // Native
      el !== child && el.contains(child);

- [6.3](#6.3) <span id="6.3"></span> Globaleval

  Execute some JavaScript code globally.

      // jQuery
      $.globaleval(code);

      // Native
      function Globaleval(code) {
        const script = document.createElement('script');
        script.text = code;

        document.head.appendChild(script).parentNode.removeChild(script);
      }

      // Use eval, but context of eval is current, context of $.Globaleval is global.
      eval(code);

- [6.4](#6.4) <span id="6.4"></span> parse

  - parseHTML

  Parses a string into an array of DOM nodes.

      // jQuery
      $.parseHTML(htmlString);

      // Native
      function parseHTML(string) {
        const context = document.implementation.createHTMLDocument();

        // Set the base href for the created document so any parsed elements with URLs
        // are based on the document's URL
        const base = context.createElement('base');
        base.href = document.location.href;
        context.head.appendChild(base);

        context.body.innerHTML = string;
        return context.body.children;
      }

  - parseJSON

  Takes a well-formed JSON string and returns the resulting JavaScript value.

      // jQuery
      $.parseJSON(str);

      // Native
      JSON.parse(str);

**[⬆ back to top](#table-of-contents)**

## Promises

A promise represents the eventual result of an asynchronous operation. jQuery has its own way to handle promises. Native JavaScript implements a thin and minimal API to handle promises according to the [Promises/A+](http://promises-aplus.github.io/promises-spec/) specification.

- [7.1](#7.1) <span id="7.1"></span> done, fail, always

  `done` is called when promise is resolved, `fail` is called when promise is rejected, `always` is called when promise is either resolved or rejected.

      // jQuery
      $promise.done(doneCallback).fail(failCallback).always(alwaysCallback)

      // Native
      promise.then(doneCallback, failCallback).then(alwaysCallback, alwaysCallback)

- [7.2](#7.2) <span id="7.2"></span> when

  `when` is used to handle multiple promises. It will resolve when all promises are resolved, and reject if either one is rejected.

      // jQuery
      $.when($promise1, $promise2).done((promise1Result, promise2Result) => {
      });

      // Native
      Promise.all([$promise1, $promise2]).then([promise1Result, promise2Result] => {});

- [7.3](#7.3) <span id="7.3"></span> Deferred

  Deferred is a way to create promises.

      // jQuery
      function asyncFunc() {
        const defer = new $.Deferred();
        setTimeout(() => {
          if(true) {
            defer.resolve('some_value_computed_asynchronously');
          } else {
            defer.reject('failed');
          }
        }, 1000);

        return defer.promise();
      }

      // Native
      function asyncFunc() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (true) {
              resolve('some_value_computed_asynchronously');
            } else {
              reject('failed');
            }
          }, 1000);
        });
      }

      // Deferred way
      function defer() {
        const deferred = {};
        const promise = new Promise((resolve, reject) => {
          deferred.resolve = resolve;
          deferred.reject = reject;
        });

        deferred.promise = () => {
          return promise;
        };

        return deferred;
      }

      function asyncFunc() {
        const defer = defer();
        setTimeout(() => {
          if(true) {
            defer.resolve('some_value_computed_asynchronously');
          } else {
            defer.reject('failed');
          }
        }, 1000);

        return defer.promise();
      }

**[⬆ back to top](#table-of-contents)**

## Animation

- [8.1](#8.1) <span id="8.1"></span> Show & Hide

      // jQuery
      $el.show();
      $el.hide();

      // Native
      // More detail about show method, please refer to https://github.com/oneuijs/oui-dom-utils/blob/master/src/index.js#L363
      el.style.display = ''|'inline'|'inline-block'|'inline-table'|'block';
      el.style.display = 'none';

- [8.2](#8.2) <span id="8.2"></span> Toggle

  Display or hide the element.

      // jQuery
      $el.toggle();

      // Native
      if (el.ownerDocument.defaultView.getComputedStyle(el, null).display === 'none') {
        el.style.display = ''|'inline'|'inline-block'|'inline-table'|'block';
      } else {
        el.style.display = 'none';
      }

- [8.3](#8.3) <span id="8.3"></span> FadeIn & FadeOut

      // jQuery
      $el.fadeIn(3000);
      $el.fadeOut(3000);

      // Native
      el.style.transition = 'opacity 3s';
      // fadeIn
      el.style.opacity = '1';
      // fadeOut
      el.style.opacity = '0';

- [8.4](#8.4) <span id="8.4"></span> FadeTo

  Adjust the opacity of the element.

      // jQuery
      $el.fadeTo('slow',0.15);
      // Native
      el.style.transition = 'opacity 3s'; // assume 'slow' equals 3 seconds
      el.style.opacity = '0.15';

- [8.5](#8.5) <span id="8.5"></span> FadeToggle

  Display or hide the element by animating their opacity.

      // jQuery
      $el.fadeToggle();

      // Native
      el.style.transition = 'opacity 3s';
      const { opacity } = el.ownerDocument.defaultView.getComputedStyle(el, null);
      if (opacity === '1') {
        el.style.opacity = '0';
      } else {
        el.style.opacity = '1';
      }

- [8.6](#8.6) <span id="8.6"></span> SlideUp & SlideDown

      // jQuery
      $el.slideUp();
      $el.slideDown();

      // Native
      const originHeight = '100px';
      el.style.transition = 'height 3s';
      // slideUp
      el.style.height = '0px';
      // slideDown
      el.style.height = originHeight;

- [8.7](#8.7) <span id="8.7"></span> SlideToggle

  Display or hide the element with a sliding motion.

      // jQuery
      $el.slideToggle();

      // Native
      const originHeight = '100px';
      el.style.transition = 'height 3s';
      const { height } = el.ownerDocument.defaultView.getComputedStyle(el, null);
      if (parseInt(height, 10) === 0) {
        el.style.height = originHeight;
      }
      else {
       el.style.height = '0px';
      }

- [8.8](#8.8) <span id="8.8"></span> Animate

  Perform a custom animation of a set of CSS properties.

      // jQuery
      $el.animate({ params }, speed);

      // Native
      el.style.transition = 'all ' + speed;
      Object.keys(params).forEach((key) =>
        el.style[key] = params[key];
      )

## Alternatives

- [You Might Not Need jQuery](http://youmightnotneedjquery.com/) - Examples of how to do common event, element, ajax etc with plain javascript.
- [npm-dom](http://github.com/npm-dom) and [webmodules](http://github.com/webmodules) - Organizations you can find individual DOM modules on NPM
