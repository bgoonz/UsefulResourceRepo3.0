var D3 = require("./core"),
    d3_identity = require("./identity")._identity,
    d3_window = D3._window,
    d3_array = require("./array")._array,
    D3Dispatch = require("./dispatch"),
    D3Rebind = require("./rebind");

var D3XHR = function(url, mimeType, callback) {
  var xhr = {},
      dispatch = D3Dispatch("progress", "load", "error"),
      headers = {},
      response = d3_identity,
      request = new (d3_window.XDomainRequest && /^(http(s)?:)?\/\//.test(url) ? XDomainRequest : XMLHttpRequest);

  "onload" in request
      ? request.onload = request.onerror = respond
      : request.onreadystatechange = function() { request.readyState > 3 && respond(); };

  function respond() {
    var s = request.status;
    !s && request.responseText || s >= 200 && s < 300 || s === 304
        ? dispatch.load.call(xhr, response.call(xhr, request))
        : dispatch.error.call(xhr, request);
  }

  request.onprogress = function(event) {
    var o = D3.event;
    D3.event = event;
    try { dispatch.progress.call(xhr, request); }
    finally { D3.event = o; }
  };

  xhr.header = function(name, value) {
    name = (name + "").toLowerCase();
    if (arguments.length < 2) return headers[name];
    if (value == null) delete headers[name];
    else headers[name] = value + "";
    return xhr;
  };

  // If mimeType is non-null and no Accept header is set, a default is used.
  xhr.mimeType = function(value) {
    if (!arguments.length) return mimeType;
    mimeType = value == null ? null : value + "";
    return xhr;
  };

  // Specify how to convert the response content to a specific type;
  // changes the callback value on "load" events.
  xhr.response = function(value) {
    response = value;
    return xhr;
  };

  // Convenience methods.
  ["get", "post"].forEach(function(method) {
    xhr[method] = function() {
      return xhr.send.apply(xhr, [method].concat(d3_array(arguments)));
    };
  });

  // If callback is non-null, it will be used for error and load events.
  xhr.send = function(method, data, callback) {
    if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
    request.open(method, url, true);
    if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
    if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
    if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
    if (callback != null) xhr.on("error", callback).on("load", function(request) { callback(null, request); });
    request.send(data == null ? null : data);
    return xhr;
  };

  xhr.abort = function() {
    request.abort();
    return xhr;
  };

  D3Rebind(xhr, dispatch, "on");

  if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, mimeType = null;
  return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
};

function d3_xhr_fixCallback(callback) {
  return callback.length === 1
      ? function(error, request) { callback(error == null ? request : null); }
      : callback;
}

module.exports = D3XHR;
