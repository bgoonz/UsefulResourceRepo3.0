/** PURE_IMPORTS_START tslib,_.._util_root,_.._Observable,_.._Subscriber,_.._operators_map PURE_IMPORTS_END */
import * as tslib_1 from "tslib";
import { root } from "../../util/root";
import { Observable } from "../../Observable";
import { Subscriber } from "../../Subscriber";
import { map } from "../../operators/map";
function getCORSRequest() {
  if (root.XMLHttpRequest) {
    return new root.XMLHttpRequest();
  } else if (!!root.XDomainRequest) {
    return new root.XDomainRequest();
  } else {
    throw new Error("CORS is not supported by your browser");
  }
}
function getXMLHttpRequest() {
  if (root.XMLHttpRequest) {
    return new root.XMLHttpRequest();
  } else {
    var progId = void 0;
    try {
      var progIds = [
        "Msxml2.XMLHTTP",
        "Microsoft.XMLHTTP",
        "Msxml2.XMLHTTP.4.0",
      ];
      for (var i = 0; i < 3; i++) {
        try {
          progId = progIds[i];
          if (new root.ActiveXObject(progId)) {
            break;
          }
        } catch (e) {}
      }
      return new root.ActiveXObject(progId);
    } catch (e) {
      throw new Error("XMLHttpRequest is not supported by your browser");
    }
  }
}
export function ajaxGet(url, headers) {
  if (headers === void 0) {
    headers = null;
  }
  return new AjaxObservable({ method: "GET", url: url, headers: headers });
}
export function ajaxPost(url, body, headers) {
  return new AjaxObservable({
    method: "POST",
    url: url,
    body: body,
    headers: headers,
  });
}
export function ajaxDelete(url, headers) {
  return new AjaxObservable({ method: "DELETE", url: url, headers: headers });
}
export function ajaxPut(url, body, headers) {
  return new AjaxObservable({
    method: "PUT",
    url: url,
    body: body,
    headers: headers,
  });
}
export function ajaxPatch(url, body, headers) {
  return new AjaxObservable({
    method: "PATCH",
    url: url,
    body: body,
    headers: headers,
  });
}
var mapResponse = /*@__PURE__*/ map(function (x, index) {
  return x.response;
});
export function ajaxGetJSON(url, headers) {
  return mapResponse(
    new AjaxObservable({
      method: "GET",
      url: url,
      responseType: "json",
      headers: headers,
    })
  );
}
var AjaxObservable = /*@__PURE__*/ (function (_super) {
  tslib_1.__extends(AjaxObservable, _super);
  function AjaxObservable(urlOrRequest) {
    var _this = _super.call(this) || this;
    var request = {
      async: true,
      createXHR: function () {
        return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
      },
      crossDomain: true,
      withCredentials: false,
      headers: {},
      method: "GET",
      responseType: "json",
      timeout: 0,
    };
    if (typeof urlOrRequest === "string") {
      request.url = urlOrRequest;
    } else {
      for (var prop in urlOrRequest) {
        if (urlOrRequest.hasOwnProperty(prop)) {
          request[prop] = urlOrRequest[prop];
        }
      }
    }
    _this.request = request;
    return _this;
  }
  AjaxObservable.prototype._subscribe = function (subscriber) {
    return new AjaxSubscriber(subscriber, this.request);
  };
  AjaxObservable.create = (function () {
    var create = function (urlOrRequest) {
      return new AjaxObservable(urlOrRequest);
    };
    create.get = ajaxGet;
    create.post = ajaxPost;
    create.delete = ajaxDelete;
    create.put = ajaxPut;
    create.patch = ajaxPatch;
    create.getJSON = ajaxGetJSON;
    return create;
  })();
  return AjaxObservable;
})(Observable);
export { AjaxObservable };
var AjaxSubscriber = /*@__PURE__*/ (function (_super) {
  tslib_1.__extends(AjaxSubscriber, _super);
  function AjaxSubscriber(destination, request) {
    var _this = _super.call(this, destination) || this;
    _this.request = request;
    _this.done = false;
    var headers = (request.headers = request.headers || {});
    if (!request.crossDomain && !_this.getHeader(headers, "X-Requested-With")) {
      headers["X-Requested-With"] = "XMLHttpRequest";
    }
    var contentTypeHeader = _this.getHeader(headers, "Content-Type");
    if (
      !contentTypeHeader &&
      !(root.FormData && request.body instanceof root.FormData) &&
      typeof request.body !== "undefined"
    ) {
      headers["Content-Type"] =
        "application/x-www-form-urlencoded; charset=UTF-8";
    }
    request.body = _this.serializeBody(
      request.body,
      _this.getHeader(request.headers, "Content-Type")
    );
    _this.send();
    return _this;
  }
  AjaxSubscriber.prototype.next = function (e) {
    this.done = true;
    var _a = this,
      xhr = _a.xhr,
      request = _a.request,
      destination = _a.destination;
    var result;
    try {
      result = new AjaxResponse(e, xhr, request);
    } catch (err) {
      return destination.error(err);
    }
    destination.next(result);
  };
  AjaxSubscriber.prototype.send = function () {
    var _a = this,
      request = _a.request,
      _b = _a.request,
      user = _b.user,
      method = _b.method,
      url = _b.url,
      async = _b.async,
      password = _b.password,
      headers = _b.headers,
      body = _b.body;
    try {
      var xhr = (this.xhr = request.createXHR());
      this.setupEvents(xhr, request);
      if (user) {
        xhr.open(method, url, async, user, password);
      } else {
        xhr.open(method, url, async);
      }
      if (async) {
        xhr.timeout = request.timeout;
        xhr.responseType = request.responseType;
      }
      if ("withCredentials" in xhr) {
        xhr.withCredentials = !!request.withCredentials;
      }
      this.setHeaders(xhr, headers);
      if (body) {
        xhr.send(body);
      } else {
        xhr.send();
      }
    } catch (err) {
      this.error(err);
    }
  };
  AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
    if (!body || typeof body === "string") {
      return body;
    } else if (root.FormData && body instanceof root.FormData) {
      return body;
    }
    if (contentType) {
      var splitIndex = contentType.indexOf(";");
      if (splitIndex !== -1) {
        contentType = contentType.substring(0, splitIndex);
      }
    }
    switch (contentType) {
      case "application/x-www-form-urlencoded":
        return Object.keys(body)
          .map(function (key) {
            return (
              encodeURIComponent(key) + "=" + encodeURIComponent(body[key])
            );
          })
          .join("&");
      case "application/json":
        return JSON.stringify(body);
      default:
        return body;
    }
  };
  AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  };
  AjaxSubscriber.prototype.getHeader = function (headers, headerName) {
    for (var key in headers) {
      if (key.toLowerCase() === headerName.toLowerCase()) {
        return headers[key];
      }
    }
    return undefined;
  };
  AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
    var progressSubscriber = request.progressSubscriber;
    function xhrTimeout(e) {
      var _a = xhrTimeout,
        subscriber = _a.subscriber,
        progressSubscriber = _a.progressSubscriber,
        request = _a.request;
      if (progressSubscriber) {
        progressSubscriber.error(e);
      }
      var error;
      try {
        error = new AjaxTimeoutError(this, request);
      } catch (err) {
        error = err;
      }
      subscriber.error(error);
    }
    xhr.ontimeout = xhrTimeout;
    xhrTimeout.request = request;
    xhrTimeout.subscriber = this;
    xhrTimeout.progressSubscriber = progressSubscriber;
    if (xhr.upload && "withCredentials" in xhr) {
      if (progressSubscriber) {
        var xhrProgress_1;
        xhrProgress_1 = function (e) {
          var progressSubscriber = xhrProgress_1.progressSubscriber;
          progressSubscriber.next(e);
        };
        if (root.XDomainRequest) {
          xhr.onprogress = xhrProgress_1;
        } else {
          xhr.upload.onprogress = xhrProgress_1;
        }
        xhrProgress_1.progressSubscriber = progressSubscriber;
      }
      var xhrError_1;
      xhrError_1 = function (e) {
        var _a = xhrError_1,
          progressSubscriber = _a.progressSubscriber,
          subscriber = _a.subscriber,
          request = _a.request;
        if (progressSubscriber) {
          progressSubscriber.error(e);
        }
        var error;
        try {
          error = new AjaxError("ajax error", this, request);
        } catch (err) {
          error = err;
        }
        subscriber.error(error);
      };
      xhr.onerror = xhrError_1;
      xhrError_1.request = request;
      xhrError_1.subscriber = this;
      xhrError_1.progressSubscriber = progressSubscriber;
    }
    function xhrReadyStateChange(e) {
      return;
    }
    xhr.onreadystatechange = xhrReadyStateChange;
    xhrReadyStateChange.subscriber = this;
    xhrReadyStateChange.progressSubscriber = progressSubscriber;
    xhrReadyStateChange.request = request;
    function xhrLoad(e) {
      var _a = xhrLoad,
        subscriber = _a.subscriber,
        progressSubscriber = _a.progressSubscriber,
        request = _a.request;
      if (this.readyState === 4) {
        var status_1 = this.status === 1223 ? 204 : this.status;
        var response =
          this.responseType === "text"
            ? this.response || this.responseText
            : this.response;
        if (status_1 === 0) {
          status_1 = response ? 200 : 0;
        }
        if (status_1 < 400) {
          if (progressSubscriber) {
            progressSubscriber.complete();
          }
          subscriber.next(e);
          subscriber.complete();
        } else {
          if (progressSubscriber) {
            progressSubscriber.error(e);
          }
          var error = void 0;
          try {
            error = new AjaxError("ajax error " + status_1, this, request);
          } catch (err) {
            error = err;
          }
          subscriber.error(error);
        }
      }
    }
    xhr.onload = xhrLoad;
    xhrLoad.subscriber = this;
    xhrLoad.progressSubscriber = progressSubscriber;
    xhrLoad.request = request;
  };
  AjaxSubscriber.prototype.unsubscribe = function () {
    var _a = this,
      done = _a.done,
      xhr = _a.xhr;
    if (
      !done &&
      xhr &&
      xhr.readyState !== 4 &&
      typeof xhr.abort === "function"
    ) {
      xhr.abort();
    }
    _super.prototype.unsubscribe.call(this);
  };
  return AjaxSubscriber;
})(Subscriber);
export { AjaxSubscriber };
var AjaxResponse = /*@__PURE__*/ (function () {
  function AjaxResponse(originalEvent, xhr, request) {
    this.originalEvent = originalEvent;
    this.xhr = xhr;
    this.request = request;
    this.status = xhr.status;
    this.responseType = xhr.responseType || request.responseType;
    this.response = parseXhrResponse(this.responseType, xhr);
  }
  return AjaxResponse;
})();
export { AjaxResponse };
function AjaxErrorImpl(message, xhr, request) {
  Error.call(this);
  this.message = message;
  this.name = "AjaxError";
  this.xhr = xhr;
  this.request = request;
  this.status = xhr.status;
  this.responseType = xhr.responseType || request.responseType;
  this.response = parseXhrResponse(this.responseType, xhr);
  return this;
}
AjaxErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
export var AjaxError = AjaxErrorImpl;
function parseJson(xhr) {
  if ("response" in xhr) {
    return xhr.responseType
      ? xhr.response
      : JSON.parse(xhr.response || xhr.responseText || "null");
  } else {
    return JSON.parse(xhr.responseText || "null");
  }
}
function parseXhrResponse(responseType, xhr) {
  switch (responseType) {
    case "json":
      return parseJson(xhr);
    case "xml":
      return xhr.responseXML;
    case "text":
    default:
      return "response" in xhr ? xhr.response : xhr.responseText;
  }
}
function AjaxTimeoutErrorImpl(xhr, request) {
  AjaxError.call(this, "ajax timeout", xhr, request);
  this.name = "AjaxTimeoutError";
  return this;
}
export var AjaxTimeoutError = AjaxTimeoutErrorImpl;
//# sourceMappingURL=AjaxObservable.js.map
