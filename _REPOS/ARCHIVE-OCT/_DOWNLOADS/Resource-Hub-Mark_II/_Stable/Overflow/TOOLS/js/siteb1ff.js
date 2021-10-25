/* jshint browser: true */
/* global zenscroll, console */

window.raise = function () {};
window.log = function () {};

window.addEventListener("load", function () {
  // Subscribe form
  Site.applyToAllElements(".subscribe-submit", function (e) {
    e.addEventListener("click", Site.subscribe);
  });

  // Feedback form
  Site.applyToAllElements("#feedback-submit", function (e) {
    e.addEventListener("click", Site.feedback);
  });

  Site.applyToAllElements("#feedback-retry", function (e) {
    e.addEventListener("click", Site.retryFeedback);
  });

  Site.applyToAllElements(".tools.cards .card .block", function (e) {
    Site.attachCardHandler(e);
  });

  Site.applyToAllElements(".coming-soon-list.cards .card .block", function (e) {
    Site.attachNotifyHandler(e);
  });

  Site.applyToAllElements(
    ".all-tools .tool-none-matches .request-tool",
    function (e) {
      e.addEventListener("click", Site.toolFeedback);
    }
  );

  Site.applyToAllElements(
    ".section.tool-unlisted .unlisted-feedback",
    function (e) {
      e.addEventListener("click", Site.unlistedFeedback);
    }
  );

  Site.applyToAllElements(".all-tools .search", function (e) {
    e.addEventListener("keyup", function () {
      Site.sortAllTools(e.value || "");
    });
  });

  Site.applyToAllElements(".pro-tip .omnibox", function (e) {
    Site.attachProTipInputHandler(e);
  });

  Site.applyToAllElements(".network select", function (e) {
    Site.attachNetworkHandler(e);
  });

  Site.applyToAllElements(".subscribe-cancel", function (e) {
    e.addEventListener("click", Site.hideNotify);
  });

  var oldIE = false;
  if (/MSIE (9\.0|10\.0)/.test(navigator.userAgent)) {
    oldIE = true;
  }

  if (oldIE) Site.equalHeightLayout();
  Site.sortAllTools();
  Site.loadSocialWidgets();

  Site.resources.updatePreloaded();
});

var Site = {
  GET: function (url, callback) {
    if (typeof callback !== "function") {
      console.error("Callback must be passed as function.");
      return false;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      callback(this);
    };

    xhttp.open("GET", url, true);
    xhttp.send();
    return true;
  },
  POST: function (url, parameters, callback) {
    if (typeof parameters !== "object") {
      console.error("Parameters must be passed as object.");
      return false;
    }
    if (typeof callback !== "function") {
      console.error("Callback must be passed as function.");
      return false;
    }

    var query = [];
    for (var p in parameters) {
      query.push(
        encodeURIComponent(p) + "=" + encodeURIComponent(parameters[p])
      );
    }
    query = query.join("&");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      callback(this);
    };

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(query);
    return true;
  },
  loadSocialWidgets: function () {
    // Facebook
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    // Twitter
    window.twttr = (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
        t._e.push(f);
      };

      return t;
    })(document, "script", "twitter-wjs");
  },
  equalHeightAttached: false,
  equalHeightLayout: function () {
    if (!Site.equalHeightAttached) {
      window.addEventListener("resize", Site.equalHeightLayout);
      Site.equalHeightAttached = true;
    }

    var cards = document.querySelectorAll(".cards.equal-height .card");
    for (var i = 0; i < cards.length; i++) {
      (function (e) {
        e.style.height = "";
        setTimeout(function () {
          e.style.height = e.offsetHeight + "px";
        }, 1);
      })(cards[i]);
    }
  },
  applyToAllElements: function (query, fn) {
    var elements = document.querySelectorAll(query);
    if (elements)
      for (var i = 0; i < elements.length; i++) {
        fn(elements[i]);
      }
  },
  toolFeedback: function (e) {
    var section = document.querySelector(".section.feedback");
    var subject = document.getElementById("feedback-input-subject");
    var query = document.querySelector(".all-tools .search").value;
    var text = document.getElementById("feedback-input-text");

    subject.value = "Empty search results";
    text.value = 'I was searching for "' + query + '" but nothing was found...';

    if (zenscroll) {
      zenscroll.to(section, 250);
      e.preventDefault();
      e.stopPropagation();
    }
  },
  unlistedFeedback: function (e) {
    var section = document.querySelector(".section.feedback");
    var subject = document.getElementById("feedback-input-subject");

    subject.value = "Unlisted tool feedback";

    if (zenscroll) {
      zenscroll.to(section, 250);
      e.preventDefault();
      e.stopPropagation();
    }
  },
  sortAllTools: function (search) {
    if (!search) search = "";
    search = Site.removeStopWords(search.toLowerCase());

    var wrapper = document.querySelector(".tools.cards");
    var empty = wrapper.querySelector(".tool-none-matches");
    var tools = wrapper.querySelectorAll(".card");
    empty.classList.remove("active");

    var fav = window.localStorage
      ? window.localStorage.favorite_tools || "[]"
      : "[]";
    fav = JSON.parse(fav);

    for (var i = 0; i < tools.length; i++) {
      var tool = tools[i];
      var name = Site.removeStopWords(
        tool.querySelector(".title a").textContent.toLowerCase()
      );
      var desc = Site.removeStopWords(
        tool.querySelector(".body .description").textContent.toLowerCase()
      );
      var url = tool.querySelector(".title a").getAttribute("href");

      tool.classList.remove("hidden");
      tool.classList.remove("favorite");

      // Hide the tool if it does not match the search query.
      if (name.indexOf(search) === -1 && desc.indexOf(search) === -1) {
        tool.classList.add("hidden");
        wrapper.appendChild(tool);
      }
      if (fav.indexOf(url) !== -1) {
        tool.classList.add("favorite");
        if (!tool.classList.contains("hidden")) {
          wrapper.insertBefore(tool, wrapper.firstChild);
        }
      }
    }

    var total = wrapper.querySelectorAll(".card").length;
    var found = wrapper.querySelectorAll(".card:not(.hidden)").length;

    var amount = document.querySelector(".all-tools .tool-matches-amount");
    amount.textContent = search ? found : "";

    if (found == 0 && total != 0) {
      empty.classList.add("active");
    }
  },
  attachCardHandler: function (card) {
    card.addEventListener("click", function (e) {
      var link = card.querySelector(".title a");

      if (e.target != link) {
        if (typeof Event === "function") {
          link.dispatchEvent(new MouseEvent(e.type, e));
        } else {
          var event = document.createEvent("MouseEvents");
          event.initMouseEvent(
            e.type,
            e.bubbles,
            e.cancelable,
            e.view,
            e.detail,
            e.screenX,
            e.screenY,
            e.clientX,
            e.clientY,
            e.ctrlKey,
            e.altKey,
            e.shiftKey,
            e.metaKey,
            e.button,
            e.relatedTarget
          );
          link.dispatchEvent(event);
        }

        return false;
      }
    });
  },
  attachNotifyHandler: function (card) {
    card.addEventListener("click", function () {
      var tool = card.querySelector(".title").textContent;
      Site.showNotify(tool);
    });
  },
  removeStopWords: function (sentence) {
    var replaced = sentence.replace(
      /\b(a|an|the|of|for|to|any|all|from|in|into|-)\b/gi,
      " "
    );
    replaced = replaced.replace(/\s+/g, " ");
    replaced = replaced.replace(/^\s+/, "");
    replaced = replaced.replace(/\s+$/, "");
    return replaced;
  },
  attachProTipInputHandler: function (bar) {
    bar.addEventListener("click", function () {
      var url = bar.getAttribute("data-location");
      window.location.assign(url);
    });
  },
  attachNetworkHandler: function (select) {
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].getAttribute("selected") != null) {
        select.selectedIndex = i;
        break;
      }
    }
    select.addEventListener("change", function () {
      var i = select.selectedIndex;
      var option = select.options[i];
      var url = option.getAttribute("data-location");
      window.location.assign(atob(url));
    });
  },
  showNotify: function (tool) {
    if (tool) {
      Site.hideNotify();
      var notify = document.querySelector(".fullwidth-wrapper");
      if (notify) {
        notify.setAttribute("data-interested-in", tool);
        notify.classList.add("show-notification");
        notify.classList.add("shadow-lock");
        var which = notify.querySelector(".which-tool");
        which.textContent = tool;
        zenscroll.center(notify, 250);
      }
    } else console.error("Can't show notifications for an unknown tool.");
  },
  hideNotify: function () {
    var notify = document.querySelector(".fullwidth-wrapper");
    if (notify) {
      notify.setAttribute("data-interested-in", "");
      notify.classList.remove("show-notification");
      notify.classList.remove("shadow-lock");
    }
  },
  subscribe: function () {
    var wrap = document.querySelector(".fullwidth-wrapper");
    var type = wrap.classList.contains("show-notification");
    var mode = type
      ? wrap.querySelector(".section.notification")
      : wrap.querySelector(".section.subscription");

    var tool = wrap.getAttribute("data-interested-in");
    var form = mode.querySelector(".onlinetools-subscribe-box");
    var email = mode.querySelector(".subscribe-input-email").value;
    var url = "https://www.broowserools.com/api/tools-subscribe";
    var site = window.location.href;
    var button = mode.querySelector(".subscribe-submit");

    if (Site.validateEmail(email)) {
      var parameters = {
        site: site,
        type: "subscribe",
        email: email,
      };
      if (type) {
        parameters.tool = tool;
        parameters.type = "notify";
      }
      var message = form.querySelector(".subscribe-success");
      var before = button.textContent;
      Site.POST(url, parameters, function (state) {
        button.textContent = "Wait...";

        var response = state.responseText;
        if (
          state.readyState == 4 &&
          state.status == 200 &&
          response.toLowerCase().indexOf("error") === -1
        ) {
          form.classList.add("complete");
          message.textContent = response;
          button.textContent = before;
          mode.querySelector(".subscribe-input-email").value = "";
          wrap.classList.remove("shadow-lock");
        } else if (state.readyState == 4) {
          form.classList.add("complete");
          message.textContent =
            "Something has gone wrong. Try again later. (" + response + ")";
          button.textContent = before;
          mode.querySelector(".subscribe-input-email").value = "";
          Site.hideNotify();
          setTimeout(function () {
            form.classList.remove("complete");
          }, 2000);
        }
      });
    } else Site.shake(mode.querySelector(".onlinetools-subscribe-box"));
  },
  retryFeedback: function () {
    var form = document.getElementById("feedback-box");
    form.classList.remove("complete");
    form.classList.remove("error");
  },
  feedback: function () {
    var form = document.getElementById("feedback-box");

    var email = document.getElementById("feedback-input-email").value;
    var text = document.getElementById("feedback-input-text").value;
    var subject = document.getElementById("feedback-input-subject").value;

    var successMessage = document.getElementById("feedback-success-message");
    var errorMessage = document.getElementById("feedback-error-message");

    var url = "https://www.broowserools.com/api/tools-feedback";
    var site = window.location.href;
    var button = form.querySelector("button");

    if (Site.validateEmail(email) && text.length > 0 && subject.length > 0) {
      button.textContent = "Submitting...";

      var parameters = {
        site: site,
        email: email,
        message: text,
        subject: subject,
      };

      Site.POST(url, parameters, function (state) {
        var response = state.responseText;
        if (
          state.readyState == 4 &&
          state.status == 200 &&
          response.toLowerCase().indexOf("error") === -1
        ) {
          form.classList.add("complete");
          button.textContent = "Submit";
          successMessage.textContent = response;
        } else if (state.readyState == 4) {
          form.classList.add("error");
          button.textContent = "Submit";
          errorMessage.textContent =
            "Sorry, your feedback wasn't submitted.\n" + response;
        }
      });
    } else Site.shake(form);
  },
  validateEmail: function (email) {
    var valid = false;

    // Filters everything without @
    // e.g 'userdomain'
    if (email.indexOf("@") !== -1) {
      // Filters multiple @ characters
      // e.g 'user@do@main'
      email = email.split("@");
      if (email.length == 2) {
        var user = email[0];
        var domain = email[1];

        // Filters '@domain.com'
        if (user.length > 0) {
          domain = domain.split(".");
          var size = domain.length >= 2;
          var first = domain[0].length > 0;
          var last = domain[size - 1].length > 0;

          // Filters 'user@domain', 'user@.com', 'user@domain.'
          valid = size && first && last;
        }
      }
    }

    return valid;
  },
  shake: function (element) {
    element.classList.remove("shaking");
    setTimeout(function () {
      element.classList.add("shaking");
    }, 5);
    element.addEventListener("animationend", function () {
      element.classList.remove("shaking");
    });
  },
};

try {
  console.log(
    "%c " +
      "Lbh'ir sbhaq n frperg! Hfr pbhcba pbqr GBBYUNPXRE gb trg n qvfpbhag ng Oebjfreyvat (jjj.oebjfreyvat.pbz)!".replace(
        /[a-zA-Z]/g,
        function (c) {
          return String.fromCharCode(
            (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
          );
        }
      ),
    "color: rgb(180,180,180)"
  );
} catch (err) {}

if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;
    var ancestor = this;
    if (!document.documentElement.contains(el)) {
      return null;
    }
    do {
      if (ancestor.matches(s)) return ancestor;
      ancestor = ancestor.parentElement;
    } while (ancestor !== null);
    return null;
  };
}

String.prototype.format = function () {
  var formatted = this;
  for (var i = 0; i < arguments.length; i++) {
    var regexp = new RegExp("\\{" + i + "\\}", "gi");
    formatted = formatted.replace(regexp, arguments[i]);
  }
  return formatted;
};

Site.resources = {
  list: {
    js: [],
    css: [],
  },
  updatePreloaded: function () {
    var preloaded = document.head.querySelectorAll(
      "link.unique-resource, script.unique-resource"
    );
    for (var i = 0; i < preloaded.length; i++) {
      var element = preloaded[i];
      if (
        element.tagName.toLowerCase() == "script" &&
        !this.isLoaded("js", element.src)
      ) {
        this.list.js.push(element.getAttribute("src"));
      } else if (
        element.tagName.toLowerCase() == "link" &&
        !this.isLoaded("css", element.href)
      ) {
        this.list.css.push(element.getAttribute("href"));
      }
    }
  },
  isLoaded: function (type, source) {
    return this.list[type].indexOf(source) !== -1;
  },
  loadRecursive: function (resources, callback) {
    var that = this;

    if (resources.length == 0) {
      callback();
      return;
    }

    var resource = resources.shift();
    if (resource) {
      that.load(resource.type, resource.source, function () {
        that.loadRecursive(resources, callback);
      });
    } else {
      that.loadRecursive(resources, callback);
    }
  },
  load: function (type, source, callback) {
    var that = this;

    if (this.isLoaded(type, source)) {
      callback();
      return;
    }

    var e;

    if (type == "js") {
      e = document.createElement("script");
      e.addEventListener("load", function () {
        that.list.js.push(source);
        callback();
      });
      e.src = source;
    } else if (type == "css") {
      e = document.createElement("link");
      e.rel = "stylesheet";
      e.addEventListener("load", function () {
        that.list.css.push(source);
        callback();
      });
      e.href = source;
    }

    e.className = "unique-resource loaded-asynchronously";

    var marker = document.head.querySelector("meta[data-marker=resources]");
    document.head.insertBefore(e, marker);
  },
  importFrom: function (data, callback) {
    var resources = [];
    var typeOrder = ["css", "js"];

    for (var i = 0; i < typeOrder.length; i++) {
      var type = typeOrder[i];
      for (var j = 0; j < data[type].length; j++) {
        var source = data[type][j];
        if (!this.isLoaded(type, source)) {
          resources.push({
            type: type,
            source: source,
          });
        }
      }
    }

    if (resources.length === 0) {
      callback();
      return;
    }

    this.loadRecursive(resources, callback);
  },
};
