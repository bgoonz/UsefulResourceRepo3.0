/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["npm-package-template"] = t())
    : (e["npm-package-template"] = t());
})(self, function () {
  return (() => {
    "use strict";
    var e = {
        519: (e, t, o) => {
          o.r(t), console.log("hello");
        },
      },
      t = {};
    function o(r) {
      if (t[r]) return t[r].exports;
      var n = (t[r] = { exports: {} });
      return e[r](n, n.exports, o), n.exports;
    }
    return (
      (o.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      o(519)
    );
  })();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ucG0tcGFja2FnZS10ZW1wbGF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbnBtLXBhY2thZ2UtdGVtcGxhdGUvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9ucG0tcGFja2FnZS10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ucG0tcGFja2FnZS10ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vbnBtLXBhY2thZ2UtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiO0NBQUEsU0FBMkNBLEVBQU1DLEdBQzFCLGlCQUFaQyxTQUEwQyxpQkFBWEMsT0FDeENBLE9BQU9ELFFBQVVELElBQ1EsbUJBQVhHLFFBQXlCQSxPQUFPQyxJQUM5Q0QsT0FBTyxHQUFJSCxHQUNlLGlCQUFaQyxRQUNkQSxRQUFRLHdCQUEwQkQsSUFFbENELEVBQUssd0JBQTBCQyxJQVJqQyxDQVNHSyxNQUFNLFdBQ1QsTSwrQ0NMQUMsUUFBUUMsSUFGZ0IsV0NGcEJDLEVBQTJCLEdBRy9CLFNBQVNDLEVBQW9CQyxHQUU1QixHQUFHRixFQUF5QkUsR0FDM0IsT0FBT0YsRUFBeUJFLEdBQVVULFFBRzNDLElBQUlDLEVBQVNNLEVBQXlCRSxHQUFZLENBR2pEVCxRQUFTLElBT1YsT0FIQVUsRUFBb0JELEdBQVVSLEVBQVFBLEVBQU9ELFFBQVNRLEdBRy9DUCxFQUFPRCxRQ2pCZixPQ0ZBUSxFQUFvQkcsRUFBS1gsSUFDSCxvQkFBWFksUUFBMEJBLE9BQU9DLGFBQzFDQyxPQUFPQyxlQUFlZixFQUFTWSxPQUFPQyxZQUFhLENBQUVHLE1BQU8sV0FFN0RGLE9BQU9DLGVBQWVmLEVBQVMsYUFBYyxDQUFFZ0IsT0FBTyxLREZoRFIsRUFBb0IsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5wbS1wYWNrYWdlLXRlbXBsYXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5wbS1wYWNrYWdlLXRlbXBsYXRlXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXG5pbXBvcnQgeyBTYW1wbGVUeXBlIH0gZnJvbSAnLi9tb2R1bGVzL3NhbXBsZSc7XG5cbmNvbnN0IHN0cjogU2FtcGxlVHlwZSA9ICdoZWxsbyc7XG5cbmNvbnNvbGUubG9nKHN0cik7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDUxOSk7XG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9
