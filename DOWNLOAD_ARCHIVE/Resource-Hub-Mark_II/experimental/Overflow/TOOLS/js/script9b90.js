/* jshint browser: true, esversion: 5 */
/* global Spinner, Sortable, Element, XMLHttpRequest, console */

var page = {};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    initialize_error_handler();

    page.addToHomeScreenPrompt = null;
    register_service_worker();

    page.body = document.body;

    var id = function (name) {
      var element = document.getElementById(name);

      if (!element) {
        window.alert("Couldn't find an element with id \"" + name + '"');
      }

      return element;
    };

    var json_script = function (name) {
      var text = id(name).textContent;
      return JSON.parse(text);
    };

    var attach_click_handlers = function (opts) {
      var queries = Object.keys(opts);

      for (var i = 0; i < queries.length; i++) {
        var query = queries[i];
        var handler = opts[query];

        each(page.body, query, function (e) {
          e.addEventListener("click", handler);
        });
      }
    };

    page.getScrollTop = function () {
      return parseInt(document.documentElement.scrollTop) || 0;
    };

    page.setScrollTop = function (position) {
      document.documentElement.scrollTop = parseInt(position) || 0;
    };

    page.getWidth = function () {
      return parseInt(document.documentElement.clientWidth);
    };

    page.getHeight = function () {
      return parseInt(document.documentElement.clientHeight);
    };

    // Simple overlay system
    //   Active overlay name are stored in data-active-overlay attribute
    //   of <body> element separated by space. Order of space-separated
    //   names does not reflect the order as they appear on screen.
    page.overlay = {
      container: id("page-overlays"),

      // Returns an array of active overlays
      get: function () {
        return page.body.dataset.activeOverlay
          .split(" ")
          .filter(function (overlay) {
            return overlay !== "";
          });
      },

      onShow: function () {},

      onHide: function (overlayName) {
        if (overlayName == "search-results") {
          updateURLQuery({
            q: null,
          });
        } else if (overlayName == "article-context-menu") {
          if (page.article_context_menu.really_hide) {
            page.article_context_menu.element.style.transition = "";
          }
        }
      },

      // Sets the array of active overlays
      set: function (overlays) {
        overlays = overlays.filter(function (overlay) {
          return overlay !== "";
        });

        // Without this line IE11 doesn't load the overlay
        if (page.ie_version && page.ie_version <= 11) {
          page.body.className = page.body.className;
        }

        // Automatically revert the page.overlays.fullwidth() hack
        // if there are no overlays remaining and the page has stored position
        if (overlays.length == 0) {
          page.body.style.overflow = "";
          page.body.style.paddingRight = "";
        }

        var oldOverlays = page.overlay.get();
        var newOverlays = overlays;

        // For every overlay that wasn't visible before call onShow
        for (var i = 0; i < newOverlays.length; i++) {
          var newOverlay = newOverlays[i];

          if (oldOverlays.indexOf(newOverlay) === -1) {
            page.overlay.onShow(newOverlay);
          }
        }

        // For every overlay that will not be visible call onHide
        for (var i = 0; i < oldOverlays.length; i++) {
          var oldOverlay = oldOverlays[i];

          if (newOverlays.indexOf(oldOverlay) === -1) {
            page.overlay.onHide(oldOverlay);
          }
        }

        page.body.dataset.activeOverlay = overlays.join(" ");
      },

      // Any active overlays on screen?
      empty: function () {
        return page.overlay.get().length == 0;
      },

      // Is overlay "name" active?
      has: function (name) {
        return page.overlay.get().indexOf(name) !== -1;
      },

      // A hack to prevent the page from scrolling, hide the scrollbar and prevent URL bar from moving
      // in mobile browsers. Call this function before showing an overlay that needs to be of full width.
      fullwidth: function () {
        if (page.body.style.overflow != "hidden") {
          var scrollbarWidth = parseInt(
            window.innerWidth - page.body.clientWidth
          );

          page.body.style.overflow = "hidden";
          page.body.style.paddingRight = scrollbarWidth + "px";
        }
      },

      // If "name" is inactive, shows only the "name" overlay.
      // If "name" is active, hides all overlays.
      only: function (name) {
        if (page.overlay.has(name)) {
          page.overlay.set([]);
        } else {
          page.overlay.set([name]);
        }
      },
    };

    page.data = {
      network_sites: json_script("data-network-sites"),
      site_full_names: json_script("data-site-full-names"),
    };

    page.primary = id("page-primary");

    page.reorder_overlay = id("page-reorder-overlay");

    page.subscribe_modal = id("page-subscribe-modal");
    page.subscribe_email = id("page-subscribe-email");

    page.feedback_modal = id("page-feedback-modal");
    page.feedback_email = id("page-feedback-email");

    page.visible_cards_container = id("page-visible-cards-container");
    page.visible_cards = id("page-visible-cards");
    page.hidden_cards = id("page-hidden-cards");

    page.search_results = id("page-search-results-container");
    page.search_results_query = id("page-search-results-query");
    page.search_results_amount = id("page-search-results-amount");
    page.search_results_message = {
      title: id("page-search-results-title"),
      subtitle: id("page-search-results-subtitle"),
    };

    page.search_tips = {};
    page.search_tips.popup = id("page-search-tips-popup");

    page.search_preferences = {};
    page.search_preferences.modal = id("page-search-chooser-modal");
    page.search_preferences.popup = id("page-search-chooser-popup");
    page.search_preferences.getAvailableSites = function () {
      var sitesInChooser = [];
      var checkboxes = page.search_preferences.popup.querySelectorAll(
        ".search-select-site"
      );
      for (var i = 0; i < checkboxes.length; i++) {
        sitesInChooser.push(checkboxes[i].value);
      }

      return sitesInChooser;
    };
    page.search_preferences.loadFromStorage = function () {
      var storage = window.localStorage;

      // No Storage support
      if (!storage) {
        return;
      }

      var sitesInChooser = page.search_preferences.getAvailableSites();

      var excludeSites = storage.getItem("search-exclude-sites");

      // If the preference was never saved, populate it from the popup inputs
      if (excludeSites === null) {
        storage.setItem("search-exclude-sites", "");
      } else {
        var validSitesToHide = [];
        var savedSitesToHide = excludeSites.split(",");

        // Remove all sites that do not exist in the chooser
        // from the saved local storage string.
        for (var i = 0; i < savedSitesToHide.length; i++) {
          var site = savedSitesToHide[i];
          if (sitesInChooser.indexOf(site) !== -1) {
            validSitesToHide.push(site);
          }
        }

        storage.setItem("search-exclude-sites", validSitesToHide.join(","));
      }

      page.search_preferences.updateFromStorage();
    };
    page.search_preferences.updateFromStorage = function () {
      var storage = window.localStorage;

      // No Storage support
      if (!storage) {
        return;
      }

      var excludeSites = storage.getItem("search-exclude-sites");
      var excludeSiteNames = excludeSites ? excludeSites.split(",") : [];

      var elements = [
        page.search_preferences.modal,
        page.search_preferences.popup,
      ];
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var checkboxes = element.querySelectorAll(".search-select-site");
        for (var j = 0; j < checkboxes.length; j++) {
          var input = checkboxes[j];
          var siteName = input.value;

          var isIncluded = excludeSiteNames.indexOf(siteName) === -1;
          input.checked = isIncluded;
        }
      }
    };

    // todo: improve
    page.search_preferences.getPreference = function () {
      var storage = window.localStorage;

      // No Storage support
      if (!storage) {
        return;
      }

      return storage.getItem("search-exclude-sites");
    };
    page.search_preferences.setPreference = function (opts) {
      var storage = window.localStorage;

      // No Storage support
      if (!storage) {
        return;
      }

      // To include a site, remove its name from exclude names.
      if (opts.includeSite) {
        var excludeSites = storage.getItem("search-exclude-sites");
        var excludeSiteNames = excludeSites ? excludeSites.split(",") : [];

        for (var i = 0; i < excludeSiteNames.length; i++) {
          var site = excludeSiteNames[i];
          if (site == opts.includeSite) {
            excludeSiteNames.splice(i, 1);
            i--;
          }
        }

        storage.setItem("search-exclude-sites", excludeSiteNames.join(","));
      }

      // To exclude a site, add its name to exclude names.
      if (opts.excludeSite) {
        var excludeSites = storage.getItem("search-exclude-sites");
        var excludeSiteNames = excludeSites ? excludeSites.split(",") : [];

        if (excludeSiteNames.indexOf(opts.excludeSite) === -1) {
          excludeSiteNames.push(opts.excludeSite);
        }

        storage.setItem("search-exclude-sites", excludeSiteNames.join(","));
      }

      page.search_preferences.updateFromStorage();
    };

    template_polyfill();
    page.template = {
      link: id("template-article-link"),
      network_site: id("template-network-site"),
      search_site_checkbox: id("template-search-site-checkbox"),
      search_result: id("template-search-result"),
      reorder_block: id("template-reorder-site-block"),
    };

    page.ie_version = ie_version();
    page.small_screen = window.matchMedia("(max-width: 596px)");
    page.small_screen_was_matching = page.small_screen.matches;
    page.small_screen.addListener(function (e) {
      if (!e.matches || !page.small_screen_was_matching) {
        page.small_screen_was_matching = !page.small_screen_was_matching;
        page.on_viewport_change();
      }
    });
    page.on_viewport_change = function () {
      // Hide article context menu overlay when viewport changes.
      // Important due to fullwidth hack only set for mobile and not desktop.
      // The context menu position also can't be translated from smaller dimensions
      if (page.overlay.has("article-context-menu")) {
        page.overlay.set([]);
      }
    };

    page.mobile_block_position = {
      cache: [],
    };

    attach_click_handlers({
      ".toggle-menu": toggle_menu,
      ".toggle-preferences": toggle_preferences,
      ".toggle-reorder": toggle_reorder,
      ".toggle-subscribe": toggle_subscribe,
      ".toggle-all-overlays": toggle_all_overlays,
      ".toggle-feedback": toggle_feedback,
    });

    initialize_all_blocks({
      blocks: document.querySelectorAll(
        "#page-visible-cards > .publisher-block, #page-hidden-cards > .publisher-block"
      ),
    });

    initialize_search({
      searchChooserButton: id("page-search-chooser"),
      searchIntervalButton: id("page-search-interval"),
      searchTipsButton: id("page-search-tips"),
      searchTipsPopup: id("page-search-tips-popup"),
      searchInput: id("page-search-input"),
      searchButton: id("page-search-submit"),

      visibleSiteNames: get_cookie("show").split(","),
      hiddenSiteNames: get_cookie("hide").split(","),

      searchSiteChoosers: [
        page.search_preferences.modal,
        page.search_preferences.popup,
      ],
    });

    initialize_reorder({
      visibleContainer: id("page-reorder-visible"),
      discardedContainer: id("page-reorder-discarded"),
      showAllButton: id("page-reorder-show-all"),
      hideAllButton: id("page-reorder-hide-all"),

      visibleSiteNames: get_cookie("show").split(","),
      hiddenSiteNames: get_cookie("hide").split(","),
    });

    initialize_overlays({
      hideOnOuterClick: true,
      hideOnEscPress: true,
      hideOnBackNavigation: false,
    });

    initialize_subscribe_form({
      modalElement: page.subscribe_modal,
      inputEmail: page.subscribe_email,
      errorElement: id("page-subscribe-error"),
      submitButton: id("page-subscribe-submit"),
      resultMessage: id("page-subscribe-result-message"),
    });

    initialize_feedback_form({
      modalElement: page.feedback_modal,
      inputEmail: page.feedback_email,
      inputSubject: id("page-feedback-subject"),
      inputMessage: id("page-feedback-message"),
      errorElement: id("page-feedback-error"),
      submitButton: id("page-feedback-submit"),
      resultMessage: id("page-feedback-result-message"),
    });

    page.article_context_menu = {
      element: id("page-article-context-menu"),
      really_hide: true,
    };

    initialize_article_context_menu({
      attachHandlerTo: id("page-visible-cards"),
      contextMenuContainer: id("page-article-context-menu-container"),
      contextMenuElement: page.article_context_menu.element,
      radioPreferenceWithShift: id("page-link-menu-behaviour-shift"),
      radioPreferenceDefault: id("page-link-menu-behaviour-default"),
      delegatedTargetClass: "article-link",
    });

    initialize_network_sites({
      networkMenus: document.querySelectorAll(".menu-network .network-sites"),
    });

    search_by_query();
  },
  false
);

function initialize_network_sites(opts) {
  var networkMenus = opts.networkMenus;
  var networkSiteList = page.data.network_sites;

  if (networkSiteList.length == 0) {
    return;
  }

  for (var i = 0; i < networkMenus.length; i++) {
    var networkMenu = networkMenus[i];
    var listFragment = document.createDocumentFragment();

    for (var j = 0; j < networkSiteList.length; j++) {
      var networkSite = networkSiteList[j];
      var siteElement = create_network_site({
        icon: "data:image/png;base64," + networkSite.icon,
        name: atob(networkSite.name),
      });

      attach_network_site_handler({
        siteButton: siteElement.querySelector(".site-button"),
        redirectUrl: atob(networkSite.url),
      });

      listFragment.appendChild(siteElement);
    }

    networkMenu.appendChild(listFragment);
  }
}

function attach_network_site_handler(opts) {
  var element = opts.siteButton;
  var url = opts.redirectUrl;

  // Handles primary clicks, opens this site in this tab by default
  // or in a new window or tab instead if CTRL key was pressed
  element.addEventListener("click", function (mouseEvent) {
    mouseEvent.preventDefault();

    if (mouseEvent.ctrlKey) {
      window.open(url, "_blank");
    } else {
      window.open(url, "_self");
    }
  });

  // The default middle click behavior is handled before the `auxclick`
  // event and need to be prevented in `mousedown` handler instead
  element.addEventListener("mousedown", function (mouseEvent) {
    var pressedButtons = parse_mouse_event_buttons(mouseEvent);
    if (pressedButtons.buttonSecondary || pressedButtons.buttonAuxiliary) {
      mouseEvent.preventDefault();
    }
  });

  // Handles middle-mouse click, opens this site in a new window or tab
  // Note that we're not looking at the `buttons` value because this event
  // only supports a single button press, accessible through `button`
  element.addEventListener("auxclick", function (mouseEvent) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button#Return_value
    if (mouseEvent.button == 1) {
      mouseEvent.preventDefault();
      window.open(url, "_blank");
    }
  });

  // Disable context menu for consistency
  element.addEventListener("contextmenu", function (mouseEvent) {
    mouseEvent.preventDefault();
  });
}

function parse_mouse_event_buttons(mouseEvent) {
  var buttonCode = mouseEvent.buttons;

  // See: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons#Return_value
  return {
    buttonQuinary: (buttonCode & 16) > 0,
    buttonQuaternary: (buttonCode & 8) > 0,
    buttonAuxiliary: (buttonCode & 4) > 0,
    buttonSecondary: (buttonCode & 2) > 0,
    buttonPrimary: (buttonCode & 1) > 0,
  };
}

function create_network_site(site) {
  var element = document.importNode(page.template.network_site.content, true);

  var siteIcon = element.querySelector(".site-icon img");
  siteIcon.src = site.icon;

  var siteName = element.querySelector(".site-name");
  siteName.textContent = site.name;

  return element;
}

function initialize_article_context_menu(opts) {
  var container = opts.attachHandlerTo;
  var targetClass = opts.delegatedTargetClass;
  var contextMenuContainer = opts.contextMenuContainer;
  var contextMenuElement = opts.contextMenuElement;

  // Blocks or allows context menu on menu items that lead to links
  // (Open link and Open comments) on mobile and desktop environments.
  var allowContextOnLinkItems = {
    mobile: true,
    desktop: true,
  };

  var storage = window.localStorage;

  var setDesktopPreference = function (preference) {
    if (preference != "default" && preference != "shift") {
      preference = "default";
    }

    storage.setItem("desktop-context-menu-mode", preference);
    return preference;
  };

  var getDesktopPreference = function () {
    var preference = storage.getItem("desktop-context-menu-mode");

    if (preference == null) {
      return setDesktopPreference("default");
    }

    if (preference != "default" && preference != "shift") {
      return setDesktopPreference("default");
    }

    return preference;
  };

  opts.radioPreferenceWithShift.addEventListener("change", function () {
    setDesktopPreference("shift");
  });

  opts.radioPreferenceDefault.addEventListener("change", function () {
    setDesktopPreference("default");
  });

  var currentPreference = getDesktopPreference();
  if (currentPreference == "shift") {
    opts.radioPreferenceWithShift.checked = true;
  } else {
    opts.radioPreferenceDefault.checked = true;
  }

  // When scrolling on desktop, hide the context menu
  window.addEventListener(
    "scroll",
    function () {
      if (
        page.overlay.has("article-context-menu") &&
        !page.small_screen.matches
      ) {
        page.article_context_menu.really_hide = true;
        page.overlay.set([]);
      }
    },
    { passive: true }
  );

  // When right-clicking or holding in the context menu wrapper
  contextMenuContainer.addEventListener("contextmenu", function (e) {
    // If the click was somewhere inside the menu
    if (contextMenuElement.contains(e.target)) {
      if (e.target.closest(".menu-item.is-link")) {
        var isMobile = page.small_screen.matches;
        var viewMode = isMobile ? "mobile" : "desktop";

        if (allowContextOnLinkItems[viewMode]) {
          return;
        }
      }

      e.preventDefault();
      e.stopPropagation();
      return;
    }

    page.article_context_menu.really_hide = false;
    page.overlay.set([]);
    page.article_context_menu.really_hide = true;

    e.preventDefault();
    e.stopPropagation();

    var x = e.pageX;
    var y = e.pageY - page.getScrollTop();

    var elementUnderneath = document.elementFromPoint(x, y);
    if (elementUnderneath && elementUnderneath.className == targetClass) {
      var linkElement = elementUnderneath;
      var linkContainer = linkElement.closest(".publisher-link");
      contextMenuElement.style.transition = "transform 0.15s ease";

      show_article_context_menu({
        contextMenuElement: contextMenuElement,
        linkElement: linkElement,
        linkContainer: linkContainer,
        mouseEvent: e,
      });
    } else {
      contextMenuElement.style.transition = "";
    }
  });

  container.addEventListener("contextmenu", function (e) {
    var clickedOnLink = e.target && e.target.className == targetClass;

    var isMobile = page.small_screen.matches;
    var desktopPreference = getDesktopPreference();

    var shiftPressed = e.shiftKey;
    var openByDefault = desktopPreference == "default" && !shiftPressed;
    var openWithShift = desktopPreference == "shift" && shiftPressed;

    var shouldOpen = isMobile || openByDefault || openWithShift;

    if (clickedOnLink && shouldOpen) {
      e.preventDefault();
      e.stopPropagation();

      var linkElement = e.target;
      var linkContainer = linkElement.closest(".publisher-link");

      show_article_context_menu({
        contextMenuElement: contextMenuElement,
        linkElement: linkElement,
        linkContainer: linkContainer,
        mouseEvent: e,
      });
    }
  });
}

function show_article_context_menu(opts) {
  var mouseEvent = opts.mouseEvent;

  // The <a href> link that points to an article which received the click
  var linkElement = opts.linkElement;

  // The <div class="publisher-link"> container that contains more data
  var publisherLink = opts.linkContainer;
  var publisherBlock = publisherLink.closest(".publisher-block");

  var contextMenu = opts.contextMenuElement;

  var articleTitle = contextMenu.querySelector(".article-title");
  var articleLink = contextMenu.querySelector(".article-link");
  var commentsLink = contextMenu.querySelector(".comments-link");
  var publisherDomain = contextMenu.querySelector(".publisher-domain");
  var publisherTitle = contextMenu.querySelector(".publisher-title");

  articleTitle.textContent = linkElement.textContent;
  publisherDomain.textContent = publisherBlock.dataset.publisherDomain;
  publisherTitle.textContent = publisherBlock.querySelector(
    ".publisher-header .title .primary"
  ).textContent;

  contextMenu.classList.remove("has-no-comments");

  if (publisherLink.dataset.commentUrl) {
    commentsLink.setAttribute("href", publisherLink.dataset.commentUrl);
  } else {
    contextMenu.classList.add("has-no-comments");
  }

  articleLink.setAttribute("href", linkElement.getAttribute("href"));

  if (page.small_screen.matches) {
    page.overlay.fullwidth();
  } else {
    var bounds = contextMenu.getBoundingClientRect();

    var menuSpacing = 10;

    var posX = mouseEvent.pageX;
    var posY = mouseEvent.pageY - page.getScrollTop();
    var pageHeight = page.getHeight() - menuSpacing;
    var pageWidth = page.getWidth() - menuSpacing;
    var menuHeight = bounds.height;
    var menuWidth = bounds.width;

    if (posY + menuHeight > pageHeight) {
      posY = posY - menuHeight;
    }

    if (posX + menuWidth > pageWidth) {
      posX = pageWidth - menuWidth;
    }

    contextMenu.style.transform = "translate(" + posX + "px, " + posY + "px)";
  }

  page.overlay.set(["article-context-menu"]);
}

function search_by_query() {
  var query = getURLQuery("q");
  if (query !== undefined) {
    var searchInput = document.getElementById("page-search-input");
    searchInput.value = query;
    do_search({
      query: query,
      exclude: page.search_preferences.getPreference(),
    });
  }
}

function initialize_subscribe_form(opts) {
  opts.submitButton.addEventListener("click", function () {
    var email = opts.inputEmail.value;

    var error = opts.errorElement;
    var modal = opts.modalElement;
    var button = opts.submitButton;

    var result = opts.resultMessage;

    modal.classList.remove("show-error");
    modal.classList.remove("disabled");

    if (email.length == 0) {
      error.textContent = "The email field is empty.";
      modal.classList.add("show-error");
      return;
    }

    if (!validate_email(email)) {
      error.textContent = "This email is invalid.";
      modal.classList.add("show-error");
      return;
    }

    var data = {
      email: email,
      site: window.location.href,
    };

    modal.classList.add("disabled");

    var previousText = button.textContent;
    button.textContent = "Subscribing...";

    httpPost(
      "https://www.broowserools.com/api/xurls-subscribe",
      data,
      function (status, responseText) {
        modal.classList.remove("disabled");
        button.textContent = previousText;

        if (status != 200) {
          error.textContent = "Something went wrong.";
          modal.classList.add("show-error");
          return;
        }

        if (responseText.toLowerCase().indexOf("error") !== -1) {
          error.textContent = responseText;
          modal.classList.add("show-error");
          return;
        }

        result.textContent = responseText;

        page.overlay.fullwidth();
        page.overlay.only("subscribe-message");
      }
    );
  });
}

function initialize_feedback_form(opts) {
  opts.submitButton.addEventListener("click", function () {
    var email = opts.inputEmail.value;
    var subject = opts.inputSubject.value;
    var message = opts.inputMessage.value;

    var error = opts.errorElement;
    var modal = opts.modalElement;
    var button = opts.submitButton;

    var result = opts.resultMessage;

    modal.classList.remove("show-error");
    modal.classList.remove("disabled");

    if (!email) {
      error.textContent = "The email field is empty.";
      modal.classList.add("show-error");
      return;
    }

    if (!validate_email(email)) {
      error.textContent = "This email is invalid.";
      modal.classList.add("show-error");
      return;
    }

    if (!subject) {
      error.textContent = "The subject field is empty.";
      modal.classList.add("show-error");
      return;
    }

    if (!message) {
      error.textContent = "Please type in your message.";
      modal.classList.add("show-error");
      return;
    }

    var data = {
      email: email,
      subject: subject,
      message: message,
      site: window.location.href,
    };

    modal.classList.add("disabled");

    var previousText = button.textContent;
    button.textContent = "Submitting...";

    httpPost(
      "https://www.broowserools.com/api/xurls-feedback",
      data,
      function (status, responseText) {
        modal.classList.remove("disabled");
        button.textContent = previousText;

        if (status != 200) {
          error.textContent = "Something went wrong.";
          modal.classList.add("show-error");
          return;
        }

        if (responseText.toLowerCase().indexOf("error") !== -1) {
          error.textContent = responseText;
          modal.classList.add("show-error");
          return;
        }

        result.textContent = responseText;

        page.overlay.fullwidth();
        page.overlay.only("feedback-message");
      }
    );
  });
}

function initialize_error_handler() {
  window.addEventListener("error", function () {
    // todo -- error reporting
  });
}

function initialize_overlays(opts) {
  // Clicking outside of overlay hides it
  if (opts.hideOnOuterClick) {
    page.body.addEventListener("click", function (e) {
      // If clicking somewhere with at least one overlay active
      if (!page.overlay.empty()) {
        // Create a path of overlays that contain the click
        var path = [];
        var current = e.target;
        while (current) {
          var name = current.dataset.isOverlay;
          if (name) {
            path.push(name);
          }
          current = current.parentElement;
        }

        // Update the active overlays
        page.overlay.set(path);
      }
    });
  }

  // Pressing ESC hides all overlays
  // Do not change the behaviour to "pop" because
  // the overlay system has no control over their
  // actual appearance order.
  if (opts.hideOnEscPress) {
    page.body.addEventListener("keydown", function (e) {
      var key = e.key.toLowerCase();
      var escapePressed = key == "esc" || key == "escape";
      var noOverlaysVisible = page.overlay.empty();

      if (escapePressed && !noOverlaysVisible) {
        page.overlay.set([]);

        e.stopPropagation();
        e.preventDefault();
      }
    });
  }

  // Back button hides all overlays, then exits the page

  // Currently disabled due to experimental nature of such behaviour
  if (window.history && window.history.pushState && opts.hideOnBackNavigation) {
    // The identificator for the filler state
    var filler = "initial-state";

    // User loads the page: state is null.

    // Immediately push the filler state with the same URL and title.
    if (window.history.state != filler) {
      window.history.pushState(filler, "");
    }

    // On navigation back
    window.addEventListener("popstate", function (e) {
      // If the "initial-state" state filler has been popped, the
      // state is null, and the next navigation will close the page
      if (e.state == null) {
        // If there are any overlays
        if (!page.overlay.empty()) {
          // Remove the overlays and prevent the navigation
          page.overlay.set([]);

          window.history.pushState(filler, "");
          return;
        }

        // If there are no overlays, navigate the user away.
        else {
          window.history.back();
        }
      }
    });
  }
}

function initialize_search(opts) {
  var whichSites = opts.searchChooserButton;

  // Clicking the "All sites ▼" dropdown shows the site selector overlay.
  // Call e.stopPropagation to avoid hiding the overlay immediately
  // because the show button is actually outside the overlay.
  whichSites.addEventListener("click", function (e) {
    if (page.small_screen.matches) {
      page.overlay.fullwidth();
    }

    page.overlay.only("search-sites");
    e.stopPropagation();
  });

  var searchInterval = opts.searchIntervalButton;
  searchInterval.addEventListener("click", function (e) {
    page.overlay.only("search-time");
    e.stopPropagation();
  });

  var searchTips = opts.searchTipsButton;
  searchTips.addEventListener("click", function (e) {
    page.overlay.only("search-tips");
    e.stopPropagation();
  });

  var searchInput = opts.searchInput;
  searchInput.addEventListener("keydown", function (e) {
    var key = e.key.toLowerCase();

    if (key == "enter" && searchInput.value) {
      do_search({
        query: searchInput.value,
        exclude: page.search_preferences.getPreference(),
      });
      searchInput.blur();
      e.stopPropagation();
      e.preventDefault();
    }
  });

  var searchButton = opts.searchButton;
  searchButton.addEventListener("click", function (e) {
    if (searchInput.value) {
      do_search({
        query: searchInput.value,
        exclude: page.search_preferences.getPreference(),
      });
      e.stopPropagation();
    }
  });

  var searchSiteChoosers = opts.searchSiteChoosers;
  var chooser = null;
  for (var i = 0; i < searchSiteChoosers.length; i++) {
    chooser = searchSiteChoosers[i];

    var checkboxContainer = chooser.querySelector(".sites");
    var checkboxFor = checkboxContainer.dataset.checkboxesFor;

    var checkboxes = document.createDocumentFragment();

    // create site search checkboxes in alphabetical order
    //
    var sites = Object.keys(page.data.site_full_names).sort();
    for (var j = 0; j < sites.length; j++) {
      var checkbox = create_search_site_checkbox({
        where: checkboxFor,
        checked: true,
        name: sites[j],
        title: page.data.site_full_names[sites[j]],
      });

      checkboxes.appendChild(checkbox);
    }

    checkboxContainer.appendChild(checkboxes);
  }

  page.search_preferences.loadFromStorage();

  for (var i = 0; i < searchSiteChoosers.length; i++) {
    chooser = searchSiteChoosers[i];

    var selectAll = chooser.querySelector(".search-select-all");
    if (!selectAll) {
      console.error(
        'Can\'t initialize search: No "Select All" button in chooser ' + chooser
      );
      return;
    }

    var selectNone = chooser.querySelector(".search-select-none");
    if (!selectNone) {
      console.error(
        'Can\'t initialize search: No "Select None" button in chooser ' +
          chooser
      );
      return;
    }

    var selectSites = chooser.querySelectorAll(".search-select-site");
    if (!selectSites || selectSites.length == 0) {
      console.error(
        "Can't initialize search: No sites to select from in chooser " + chooser
      );
      return;
    }

    selectAll.addEventListener("click", function () {
      for (var j = 0; j < selectSites.length; j++) {
        var selectSite = selectSites[j];
        var siteName = selectSite.value;

        selectSite.checked = true;
        page.search_preferences.setPreference({ includeSite: siteName });
      }
    });

    selectNone.addEventListener("click", function () {
      for (var j = 0; j < selectSites.length; j++) {
        var selectSite = selectSites[j];
        var siteName = selectSite.value;

        selectSite.checked = false;
        page.search_preferences.setPreference({ excludeSite: siteName });
      }
    });

    for (var j = 0; j < selectSites.length; j++) {
      var selectSite = selectSites[j];

      selectSite.addEventListener("change", function (e) {
        var checkbox = e.target;
        var siteName = checkbox.value;
        var include = checkbox.checked;

        if (include) {
          page.search_preferences.setPreference({ includeSite: siteName });
        } else {
          page.search_preferences.setPreference({ excludeSite: siteName });
        }
      });
    }
  }

  var tipsPopup = page.search_tips.popup;
  var searchExamples = tipsPopup.querySelectorAll(".example-query > a");

  for (var i = 0; i < searchExamples.length; i++) {
    var searchExample = searchExamples[i];
    (function (searchExample) {
      searchExample.addEventListener("click", function (ev) {
        ev.preventDefault();
        ev.stopPropagation();

        var searchQuery = searchExample.textContent;
        searchInput.value = searchQuery;
        do_search({
          query: searchQuery,
          exclude: page.search_preferences.getPreference(),
        });
      });
    })(searchExample);
  }
}

function register_service_worker() {
  if ("serviceWorker" in window.navigator) {
    window.navigator.serviceWorker.register("/js/service-worker.js");

    window.addEventListener("beforeinstallprompt", function (e) {
      e.preventDefault();
      page.addToHomeScreenPrompt = e;
    });
  }
}

function do_search(opts) {
  var searchResults = page.search_results;
  var searchModalTitle = page.search_results_amount;
  var searchModalQuery = page.search_results_query;
  var emptyMessage = page.search_results_message;

  var query = opts.query;
  var exclude = opts.exclude;
  var updateURL = function () {
    updateURLQuery({
      q: opts.query,
    });
  };

  var searchingSites = 0;
  var availableSites = 0;
  var excludedSites = 0;

  if (exclude.length == 0) {
    searchingSites = page.search_preferences.getAvailableSites().length;
  } else {
    availableSites = page.search_preferences.getAvailableSites().length;
    excludedSites = exclude.split(",").length;
    searchingSites = availableSites - excludedSites;
  }

  searchModalTitle.textContent = "Search results";
  searchModalQuery.textContent = query;

  emptyMessage.title.textContent = "";
  emptyMessage.subtitle.textContent = "";

  // Remove all previous search results
  while (searchResults.firstChild) {
    searchResults.removeChild(searchResults.firstChild);
  }

  if (!query) {
    emptyMessage.title.textContent = "Can't search";
    emptyMessage.subtitle.textContent = "The search query is empty.";

    page.overlay.fullwidth();
    page.overlay.only("search-results");
    updateURL();
    return;
  }

  if (searchingSites == 0) {
    emptyMessage.title.textContent = "Can't search";
    emptyMessage.subtitle.textContent = "Every site is excluded from search.";

    page.overlay.fullwidth();
    page.overlay.only("search-results");
    updateURL();
    return;
  }

  emptyMessage.title.textContent = "Loading results...";

  if (searchingSites == availableSites) {
    emptyMessage.subtitle.textContent = "Searching in all sites.";
  } else if (searchingSites > 1) {
    emptyMessage.subtitle.textContent =
      "Searching in " + searchingSites + " sites.";
  } else if (searchingSites == 1) {
    emptyMessage.subtitle.textContent = "Searching in one site.";
  }

  var data = {
    q: query,
    "exclude-sites": exclude,
  };

  httpPost("/api/search", data, function (status, responseText) {
    if (status != 200 || !responseText) {
      emptyMessage.title.textContent = "Server error";
      emptyMessage.subtitle.textContent =
        "An unknown server error has occurred. Please try again later. If you're seeing this error for an extended period of time, let us know!";
      return;
    }

    var json = null;
    try {
      json = JSON.parse(responseText);
    } catch (e) {
      emptyMessage.title.textContent = "Server error";
      emptyMessage.subtitle.textContent =
        "We couldn't display search results. Please try again later. If you're seeing this error for an extended period of time, let us know!";
      return;
    }

    if (json.status != "success") {
      if (json.title) {
        emptyMessage.title.textContent = json.title;
      } else {
        emptyMessage.title.textContent = "Server error";
      }
      emptyMessage.subtitle.textContent = json.error_short || json.error;
      return;
    }

    var results = json.data;
    var amount = results.length;

    if (amount == 0) {
      emptyMessage.title.textContent = "No results";
      emptyMessage.subtitle.textContent = "No articles match your query.";
      return;
    }

    if (amount == 1) {
      searchModalTitle.textContent = "1 search result";
    } else {
      searchModalTitle.textContent = amount + " search results";
    }

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < results.length; i++) {
      var result = results[i];

      var element = create_search_result({
        publisher: result.site,

        ago: result.ago,
        date: result.date,

        highlighted_title: result.highlighted_title,
        title: result.title,

        url: result.url,
        highlighted_url: result.highlighted_url,
      });

      fragment.appendChild(element);
    }

    searchResults.appendChild(fragment);
  });

  page.overlay.fullwidth();
  page.overlay.only("search-results");
  updateURL();
}

function each(element, query, callback) {
  var elements = element.querySelectorAll(query);
  if (elements) {
    for (var i = 0; i < elements.length; i++) {
      callback(elements[i]);
    }
  }
}

function toggle_menu(e) {
  if (page.small_screen.matches) {
    page.overlay.fullwidth();
  }

  page.overlay.only("menu");
  e.stopPropagation();
}

function toggle_preferences(e) {
  page.overlay.fullwidth();
  page.overlay.only("preferences");
  e.stopPropagation();
}

function toggle_subscribe(e) {
  page.subscribe_modal.classList.remove("disabled");
  page.subscribe_modal.classList.remove("show-error");

  page.overlay.fullwidth();
  page.overlay.only("subscribe");
  e.stopPropagation();

  window.setTimeout(function () {
    page.subscribe_email.focus();
  }, 200);
}

function toggle_all_overlays(e) {
  page.overlay.set([]);
  e.stopPropagation();
}

function toggle_feedback(e) {
  page.feedback_modal.classList.remove("disabled");
  page.feedback_modal.classList.remove("show-error");

  page.overlay.fullwidth();
  page.overlay.only("feedback");
  e.stopPropagation();

  window.setTimeout(function () {
    page.feedback_email.focus();
  }, 200);
}

function toggle_reorder(e) {
  // Clicking the reorder button shows the site reorder overlay.
  // Call e.stopPropagation to avoid hiding the overlay immediately
  // because the reorder button is actually outside the overlay.
  page.overlay.fullwidth();
  page.overlay.only("reorder");
  e.stopPropagation();
}

function initialize_all_blocks(opts) {
  var blocks = opts.blocks;

  for (var i = 0; i < blocks.length; i++) {
    attach_scroll_listener(blocks[i]);
    attach_spinner(blocks[i]);
    attach_mode_chooser(blocks[i]);
    attach_load_more_handler(blocks[i]);
  }

  attach_mobile_scroll_listener();
}

function attach_mobile_scroll_listener() {
  if (page.small_screen.matches) {
    update_mobile_position_cache();
  }

  window.addEventListener(
    "scroll",
    function () {
      if (page.small_screen.matches) {
        update_mobile_scroll_position();
      }
    },
    { passive: true }
  );

  window.addEventListener(
    "resize",
    function () {
      // When resizing on a small screen, update the cached element positions
      if (page.small_screen.matches) {
        update_mobile_position_cache();
      }
    },
    { passive: true }
  );
}

function update_load_more_button_text(publisherBlock) {
  var loadMoreButton = publisherBlock.querySelector(
    ".publisher-data .load-more"
  );
  var selectedViewMode = get_block_interval_view_mode(publisherBlock);
  var viewModeDescriptions = {
    latest: "Load more stories",
    day: "Load another day of stories",
    week: "Load another week of stories",
    month: "Load another month of stories",
  };

  var matchingDescription = viewModeDescriptions[selectedViewMode];
  if (!matchingDescription) {
    console.error(
      "Couldn't find text for the load more button, selected mode is '" +
        selectedViewMode +
        "'"
    );
    return;
  }

  loadMoreButton.textContent = viewModeDescriptions[selectedViewMode];
}

function update_mobile_position_cache() {
  if (!page.small_screen.matches) {
    return;
  }

  var containerElement = page.visible_cards_container;
  var containerOffset = containerElement.offsetTop;

  var cache = [];

  var blocks = page.visible_cards.querySelectorAll(".publisher-block");
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];

    // How far away the block is relative to the page
    var blockOffset = containerOffset + block.offsetTop;

    // How far away the card is relative to the block (its padding)
    var cardPadding = block.querySelector(".publisher-card").offsetTop;

    // At what position the block starts (including the card padding)
    // Reflects the position of the first header pixel
    var blockStart = blockOffset;

    // How far away the links are relative to the container
    var blockData = block.querySelector(".publisher-data-wrapper");
    var dataStart = blockData.offsetTop + blockStart + cardPadding;

    // The height of the link container
    var dataHeight = blockData.offsetHeight;

    cache.push({
      blockElement: block,
      blockStart: blockStart,
      dataStart: dataStart,
      dataEnd: dataStart + dataHeight,
    });
  }

  page.mobile_block_position.cache = cache;
}

function update_mobile_scroll_position() {
  if (!page.small_screen.matches) {
    return;
  }

  var pageScroll = page.getScrollTop();

  var blockInView = page.visible_cards.querySelector(".is-in-mobile-view");

  var positionCache = page.mobile_block_position.cache;
  var actuallyInView = null;
  var l = positionCache.length;
  var block = null;
  var progress = null;

  for (var i = 0; i < l; i++) {
    block = positionCache[i];

    if (pageScroll >= block.blockStart && pageScroll <= block.dataEnd) {
      actuallyInView = block.blockElement;
      break;
    }
  }

  if (blockInView != actuallyInView) {
    if (blockInView) {
      blockInView.classList.remove("is-in-mobile-view");
      progress = blockInView.querySelector(".publisher-scroll-progress");
      progress.style.transform = "";
    }
    if (actuallyInView) actuallyInView.classList.add("is-in-mobile-view");
  }

  page.visible_cards.classList.remove("has-in-mobile-view");

  // If some block is in view
  if (actuallyInView != null) {
    page.visible_cards.classList.add("has-in-mobile-view");

    progress = actuallyInView.querySelector(".publisher-scroll-progress");
    var percent = get_block_scroll_position(actuallyInView) * 100;
    if (percent < 0) {
      percent = 0;
    }
    if (percent > 100) {
      percent = 100;
    }

    progress.style.transform = "translateX(-" + (100 - percent) + "%)";
  }
}

function template_polyfill() {
  if (!("content" in document.createElement("template"))) {
    var templates = document.getElementsByTagName("template");
    var length = templates.length;

    for (var i = 0; i < length; ++i) {
      var template = templates[i];
      var content = template.childNodes;
      var fragment = document.createDocumentFragment();

      while (content[0]) {
        fragment.appendChild(content[0]);
      }

      template.content = fragment;
    }
  }
}

function attach_spinner(block) {
  var wrapper = block.querySelector(".publisher-header-spin");
  var spin = new Spinner().spin(wrapper);

  spin.stop();
  spin.start = spin.spin.bind(spin, wrapper);
  block.spinner = spin;
}

function parse_json_api_response(status, data) {
  if (status != 200) {
    return { error: "internal server error" };
  }

  var json = null;
  try {
    json = JSON.parse(data);
  } catch (e) {}

  if (!json || !json.status) {
    return { error: "invalid server response" };
  }

  if (json.status == "error") {
    return { error: json.error_short || "unknown server error" };
  }

  return { json: json };
}

function attach_load_more_handler(publisherBlock) {
  var publisherName = publisherBlock.getAttribute("data-publisher");
  var loadMoreButton = publisherBlock.querySelector(
    ".publisher-data .load-more"
  );

  loadMoreButton.addEventListener("click", function () {
    if (loadMoreButton.disabled) {
      return;
    }

    var selectedViewMode = get_block_interval_view_mode(publisherBlock);
    var lastLinkElement = publisherBlock.querySelector(
      ".publisher-links > .publisher-link:last-child"
    );
    var lastLinkId = parseInt(lastLinkElement.dataset.id);

    var apiParams = {
      site: publisherName,
      interval: selectedViewMode,
      last_id: lastLinkId,
      load_more: true,
    };

    show_alternate_subtitle(publisherBlock, "loading more stories...");
    loadMoreButton.disabled = true;
    publisherBlock.spinner.start();

    var finishLoading = function (statusText) {
      publisherBlock.spinner.stop();
      show_alternate_subtitle(publisherBlock, statusText);
      window.setTimeout(function () {
        show_default_subtitle(publisherBlock);
        loadMoreButton.disabled = false;
      }, 800);
    };

    httpPost("/api/get_titles", apiParams, function (status, data) {
      var apiResponse = parse_json_api_response(status, data);
      if (apiResponse.error) {
        finishLoading(apiResponse.error);
        return;
      }

      var moreArticles = apiResponse.json.data;
      if (moreArticles.length == 0) {
        finishLoading("no more articles");
        return;
      }

      var linksFragment = document.createDocumentFragment();

      for (var i = 0; i < moreArticles.length; i++) {
        var currentArticle = moreArticles[i];
        var articleLink = create_article_link({
          id: currentArticle.id,
          title: currentArticle.title,
          url: currentArticle.url,
          comment_url: currentArticle.comment_url,
          ago: currentArticle.ago,
          date: currentArticle.date,
        });

        linksFragment.appendChild(articleLink);
      }

      // Insert new links after the last link element
      lastLinkElement.parentNode.insertBefore(
        linksFragment,
        lastLinkElement.nextElementSibling
      );

      if (moreArticles.length == 1) {
        finishLoading("loaded 1 more article");
      } else {
        finishLoading("loaded " + moreArticles.length + " more articles");
      }

      // Only update the scrollbar display on both mobile and desktop
      if (page.small_screen.matches) {
        update_mobile_position_cache();
        update_mobile_scroll_position();
      } else {
        update_scroll_position(publisherBlock);
      }
    });
  });

  update_load_more_button_text(publisherBlock);
}

function attach_mode_chooser(publisherBlock) {
  var publisherName = publisherBlock.getAttribute("data-publisher");
  var viewModeButtons = publisherBlock.querySelector(
    ".publisher-text .subtitle-default"
  );

  // For every button in (latest, day, week, month)
  each(viewModeButtons, ".view", function (viewButton) {
    // When the button is clicked, load new articles from that period
    viewButton.addEventListener("click", function () {
      var dateInterval = viewButton.dataset.view;
      var apiParams = {
        site: publisherName,
        interval: dateInterval,
      };

      show_alternate_subtitle(
        publisherBlock,
        "loading " + dateInterval + "..."
      );
      publisherBlock.spinner.start();

      var finishLoading = function (statusText, newMode) {
        publisherBlock.spinner.stop();
        show_alternate_subtitle(publisherBlock, statusText);
        if (newMode) {
          set_block_interval_view_mode(publisherBlock, newMode);
        }
        window.setTimeout(function () {
          show_default_subtitle(publisherBlock);
        }, 800);
      };

      httpPost("/api/get_titles", apiParams, function (status, data) {
        var apiResponse = parse_json_api_response(status, data);
        if (apiResponse.error) {
          finishLoading(apiResponse.error);
          return;
        }

        var allArticles = apiResponse.json.data;
        if (allArticles.length == 0) {
          finishLoading("no articles");
          return;
        }

        // Don't calculate scroll position if not on mobile
        var isSmallScreen = page.small_screen.matches;
        var oldRelativePosition = isSmallScreen
          ? get_block_scroll_position(publisherBlock)
          : 0;

        // Shallow clone the current link container without including its children
        var oldPublisherLinks = publisherBlock.querySelector(
          ".publisher-links"
        );
        var newPublisherLinks = oldPublisherLinks.cloneNode(false);
        var linksFragment = document.createDocumentFragment();

        // Add all links to the cloned container
        for (var i = 0; i < allArticles.length; i++) {
          var currentArticle = allArticles[i];
          var articleLink = create_article_link({
            id: currentArticle.id,
            title: currentArticle.title,
            url: currentArticle.url,
            comment_url: currentArticle.comment_url,
            ago: currentArticle.ago,
            date: currentArticle.date,
          });

          linksFragment.appendChild(articleLink);
        }

        // Replace the old container with its clone that has new links
        newPublisherLinks.appendChild(linksFragment);
        oldPublisherLinks.parentElement.replaceChild(
          newPublisherLinks,
          oldPublisherLinks
        );

        if (allArticles.length == 1) {
          finishLoading("loaded 1 article", dateInterval);
        } else {
          finishLoading(
            "loaded " + allArticles.length + " articles",
            dateInterval
          );
        }

        // If on small screen, set the page's scroll position relatively to where it was
        // before the articles were added so the scroll position within the block is the same
        if (isSmallScreen) {
          update_mobile_position_cache();
          set_block_scroll_position(publisherBlock, oldRelativePosition);
          update_mobile_scroll_position();
        }

        // On desktops, just update the scrollbar display
        else {
          update_scroll_position(publisherBlock);
        }
      });
    });
  });
}

function set_block_scroll_position(block, position) {
  var containerElement = page.visible_cards_container;

  var containerOffset = containerElement.offsetTop;

  var blockData = block.querySelector(".publisher-data-wrapper");

  var dataHeight = blockData.offsetHeight;

  var currentPosition = page.getScrollTop();
  var newPosition = dataHeight * position + block.offsetTop + containerOffset;

  if (
    newPosition > currentPosition ||
    currentPosition < containerOffset + block.offsetTop
  ) {
    return;
  }

  document.documentElement.scrollTo(0, newPosition);
}

function get_block_scroll_position(block) {
  var containerElement = page.visible_cards_container;

  var containerOffset = containerElement.offsetTop;

  var cardOffset = block.querySelector(".publisher-card").offsetTop;
  var blockData = block.querySelector(".publisher-data-wrapper");

  var dataOffset = blockData.offsetTop + cardOffset;

  var dataStart = block.offsetTop + dataOffset;
  var dataHeight = blockData.offsetHeight;

  var relativeScroll = page.getScrollTop() - containerOffset + dataOffset;

  var blockScroll = (relativeScroll - dataStart) / dataHeight;

  return blockScroll;
}

function show_alternate_subtitle(block, text) {
  var subtitles = block.querySelector(".publisher-text > .subtitle");
  var alternate = subtitles.querySelector(".subtitle-alternate");

  subtitles.classList.remove("alternate");
  subtitles.classList.add("alternate");

  alternate.textContent = text;
  alternate.title = text;
}

function show_default_subtitle(block) {
  var subtitles = block.querySelector(".publisher-text > .subtitle");
  subtitles.classList.remove("alternate");
}

function get_block_interval_view_mode(publisherBlock) {
  var selectedViewMode = publisherBlock.querySelector(
    ".publisher-text .subtitle-default .view.selected"
  );
  if (!selectedViewMode) {
    console.error(
      'No active view mode in publisher block "' +
        publisherBlock.dataset.publisher +
        '"'
    );
    return undefined;
  }

  return selectedViewMode.dataset.view;
}

function set_block_interval_view_mode(block, mode) {
  var viewModeButtons = block.querySelector(
    ".publisher-text .subtitle-default"
  );
  each(viewModeButtons, ".view", function (viewButton) {
    viewButton.classList.remove("selected");
    if (viewButton.dataset.view == mode) {
      viewButton.classList.add("selected");
    }
  });

  update_load_more_button_text(block);
}

function attach_scroll_listener(block) {
  var scrollable = block.querySelector(".publisher-data");

  scrollable.addEventListener(
    "scroll",
    function () {
      update_scroll_position(block);
    },
    { passive: true }
  );
}

function update_scroll_position(block) {
  var progressBar = block.querySelector(".publisher-scroll-progress");
  var dataWrapper = block.querySelector(".publisher-data-wrapper");
  var scrollableArea = block.querySelector(".publisher-data");

  var currentScroll = scrollableArea.scrollTop;
  var maxScroll = scrollableArea.scrollHeight - scrollableArea.offsetHeight;

  // Hide the "scroll shadow" decoration if the link container cannot be scrolled
  // or the scroll position is within 10px of the end of the container.
  // Because we disabled browser scrollbars for publisher blocks we're using this
  // subtle shadow effect to hint the user that the link container has more elements
  // than it displays on screen.
  if (maxScroll <= 0 || maxScroll - currentScroll <= 10) {
    dataWrapper.classList.remove("bottom-shadow");
  } else if (!dataWrapper.classList.contains("bottom-shadow")) {
    dataWrapper.classList.add("bottom-shadow");
  }

  var scrollPercentage = (currentScroll / maxScroll) * 100;
  progressBar.style.transform =
    "translateX(-" + (100 - scrollPercentage) + "%)";
}

function validate_email(email) {
  return /^.+@.+\..+$/.test(email);
}

function create_article_link(article) {
  var element = document.importNode(page.template.link.content, true);
  var publisherLink = element.querySelector(".publisher-link");

  if (article.comment_url) {
    publisherLink.dataset.commentUrl = article.comment_url;
  }

  publisherLink.dataset.id = article.id;

  var text = element.querySelector(".aside .text");
  var link = element.querySelector(".link a");

  text.textContent = article.ago;

  text.title = "Posted on " + article.date;

  link.textContent = article.title;
  //link.title = article.title;
  link.href = article.url;

  return element;
}

function create_search_site_checkbox(site) {
  var element = document.importNode(
    page.template.search_site_checkbox.content,
    true
  );

  var checkbox = element.querySelector(".search-select-site");
  var label = element.querySelector("label");

  label.textContent = site.title;
  checkbox.value = site.name;
  checkbox.checked = site.checked;
  checkbox.id = "checkbox-" + site.where + "-search-site-" + site.name;
  label.htmlFor = "checkbox-" + site.where + "-search-site-" + site.name;

  return element;
}

function create_search_result(result) {
  var element = document.importNode(page.template.search_result.content, true);

  var publisherBlock = element.querySelector(
    ".icon > .publisher-block-compact"
  );
  var publisherIcon = publisherBlock.querySelector(".publisher-icon svg use");
  var resultTitle = element.querySelector(".result > .headline > .title");
  var resultAgo = element.querySelector(".result > .headline > .ago");
  var resultLink = element.querySelector(".result > .url > a");

  publisherBlock.classList.add("publisher-is-" + result.publisher);
  publisherIcon.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "href",
    "#publisher-icon-" + result.publisher
  );

  resultTitle.innerHTML = result.highlighted_title || result.title;
  resultLink.innerHTML = result.highlighted_url || result.url;
  resultAgo.textContent = result.ago;
  resultAgo.title = result.date;
  resultLink.href = result.url;

  return element;
}

function create_reorder_block(site) {
  var element = document.importNode(page.template.reorder_block.content, true);

  var publisherBlock = element.querySelector(".publisher-block-compact");
  publisherBlock.classList.add("publisher-is-" + site.name);
  publisherBlock.dataset.publisher = site.name;

  var publisherIcon = publisherBlock.querySelector(".publisher-icon svg use");
  publisherIcon.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "href",
    "#publisher-icon-" + site.name
  );

  return element;
}

function show_site(siteName, newIndex) {
  // This function is called from onEnd event in re-order menu when a site was
  // previously hidden and now it's moved to visible cards at position "newIndex".
  //
  var cardToMove = page.hidden_cards.querySelector(".publisher-is-" + siteName);
  if (!cardToMove) {
    console.error("Couldn't find site " + siteName + " in hidden cards.");
    return;
  }
  move_card(cardToMove, page.visible_cards, newIndex);
}

function hide_site(siteName, newIndex) {
  // This function is called from onEnd event in re-order menu when a site was
  // previously visible but now is being hidden.
  //
  var cardToMove = page.visible_cards.querySelector(
    ".publisher-is-" + siteName
  );
  if (!cardToMove) {
    console.error("Couldn't find site " + siteName + " in visible cards.");
    return;
  }
  move_card(cardToMove, page.hidden_cards, newIndex);
}

function move_site(siteName, oldIndex, newIndex) {
  // This function is called from onEnd event in re-order menu when a site's position
  // is changed in visible cards from oldIndex position to newIndex position.
  //
  var cardToMove = page.visible_cards.querySelector(
    ".publisher-is-" + siteName
  );
  if (!cardToMove) {
    console.error("Couldn't find site " + siteName + " in visible cards.");
    return;
  }
  move_card(cardToMove, page.visible_cards, newIndex);
}

function move_card(cardToMove, containerToMoveIn, newIndex) {
  // Generic function from moving a single card around. It's called by show_site, hide_site,
  // and move_site functions. This function moves the given "card" (DOM element) to "container"
  // (visible or hidden cards) and insert it at position "index".

  var allCards = [].slice.call(
    containerToMoveIn.querySelectorAll(".publisher-block")
  );
  var cardAtIndex = allCards[newIndex] || null;

  // Try to find the card's current index inside the container it will be moving in; if
  // it's not currently in that container, assume the current index is at the new position.
  // Keeping track of the old index is important to determine in which direction the card is moving
  var currentIndex = allCards.indexOf(cardToMove);
  var oldIndex = currentIndex === -1 ? newIndex : currentIndex;

  // Append the card at the end of the container if the new index is outside of the container
  if (newIndex >= allCards.length) {
    containerToMoveIn.appendChild(cardToMove);
  }

  // If the card is moving forwards in the same container, move the card after the card
  // at that index because the new indices will be different after the card is in place.
  else if (newIndex > oldIndex) {
    containerToMoveIn.insertBefore(cardToMove, cardAtIndex.nextElementSibling);
  }

  // If the card is moving backwards or comes from a different container,
  // put it before the card at that index, so it takes that index instead.
  else {
    containerToMoveIn.insertBefore(cardToMove, cardAtIndex);
  }
}

function move_cards(cards, container) {
  // Given a list of cards, move them all quickly to container
  //
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < cards.length; i++) {
    fragment.appendChild(cards[i]);
  }
  container.appendChild(fragment);
}

function find_card(siteName) {
  // Finds the card for s site with site name "siteName.
  // A card of a site is either in visible cards or hiddern cards.
  var card = page.visible_cards.querySelector(".publisher-is-" + siteName);
  if (card) {
    return card;
  }
  card = page.hidden_cards.querySelector(".publisher-is-" + siteName);
  if (card) {
    return card;
  }
}

function show_all_cards(siteNames) {
  // Given a list of siteNames, move them quickly to visible cards container.
  //
  var cards = [];
  for (var i = 0; i < siteNames.length; i++) {
    var card = find_card(siteNames[i]);
    cards.push(card);
  }

  move_cards(cards, page.visible_cards);
}

function hide_all_cards(siteNames) {
  // Given a list of siteNames, move them quickly to hidden cards container.
  //
  var cards = [];
  for (var i = 0; i < siteNames.length; i++) {
    var card = find_card(siteNames[i]);
    cards.push(card);
  }

  move_cards(cards, page.hidden_cards);
}

function get_cookie(name) {
  var cookieName = name + "=";
  var cookiesArray = document.cookie.split(";");
  var cookiesLength = cookiesArray.length;

  for (var i = 0; i < cookiesLength; i++) {
    var cookie = cookiesArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) !== -1) {
      return decodeURIComponent(
        cookie.substring(cookieName.length, cookie.length)
      );
    }
  }
  return "";
}
function set_cookie(key, value, days) {
  var expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    key + "=" + value + ";expires=" + expires.toUTCString() + ";path=/";
}

function update_show_hide_cookies(visibleSites, hiddenSites) {
  set_cookie("show", visibleSites.join(","), 10 * 365);
  set_cookie("hide", hiddenSites.join(","), 10 * 365);
}

function initialize_reorder(opts) {
  function getSiteName(block) {
    return block.getAttribute("data-publisher");
  }

  function getSiteNames(blocks) {
    var names = [];
    for (var i = 0; i < blocks.length; i++) {
      names.push(getSiteName(blocks[i]));
    }
    return names;
  }

  function getVisibleSites() {
    var visiblePublishers = opts.visibleContainer.querySelectorAll(
      ".publisher-block-compact"
    );
    return getSiteNames(visiblePublishers);
  }

  function getHiddenSites() {
    var discardedPublishers = opts.discardedContainer.querySelectorAll(
      ".publisher-block-compact"
    );
    return getSiteNames(discardedPublishers);
  }

  function initialize_sortable(container, name) {
    container.sortable = new Sortable(container, {
      // Fixes https://crbug.com/990572
      forceFallback: true,

      draggable: ".publisher-block-compact",
      group: {
        name: name,
        pull: ["visible", "discarded"],
        put: ["visible", "discarded"],
      },
      animation: 100,
      onEnd: endSort,
    });

    function endSort(ev) {
      var siteName = getSiteName(ev.item);
      var oldIndex = ev.oldIndex;
      var newIndex = ev.newIndex;
      var fromContainer = ev.from;
      var toContainer = ev.to;

      var visible = getVisibleSites();
      var hidden = getHiddenSites();

      update_show_hide_cookies(visible, hidden);

      if (
        fromContainer == opts.discardedContainer &&
        toContainer == opts.discardedContainer
      ) {
        // Site moved within discarded container.
        // Do nothing in the UI as this site is not visible.
        return;
      } else if (
        fromContainer == opts.discardedContainer &&
        toContainer == opts.visibleContainer
      ) {
        // Site moved from discarded container to visible container at position newIndex. Show it.
        show_site(siteName, newIndex);
      } else if (
        fromContainer == opts.visibleContainer &&
        toContainer == opts.discardedContainer
      ) {
        // Site moved from visible container to hidden container at position newIndex. Hide it.
        hide_site(siteName, newIndex);
      } else if (
        fromContainer == opts.visibleContainer &&
        toContainer == opts.visibleContainer
      ) {
        // Site moved within visible container from position oldIndex to newIndex. Move it.
        move_site(siteName, oldIndex, newIndex);
      }
    }
  }

  function initialize_show_hide_all_sites(button, moveFrom, moveTo) {
    button.addEventListener("click", function (ev) {
      ev.preventDefault();

      var publishersToMove = moveFrom.querySelectorAll(
        ".publisher-block-compact"
      );
      if (publishersToMove.length == 0) {
        return;
      }

      var fragment = document.createDocumentFragment();
      for (var i = 0; i < publishersToMove.length; i++) {
        fragment.appendChild(publishersToMove[i]);
      }
      moveTo.appendChild(fragment);

      var visible = getVisibleSites();
      var hidden = getHiddenSites();

      update_show_hide_cookies(visible, hidden);

      if (moveTo == opts.visibleContainer) {
        // Show all sites
        show_all_cards(visible);
      } else {
        // Hide all sites
        hide_all_cards(hidden);
      }
    });
  }

  function create_sortable_container(container, siteNames) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < siteNames.length; i++) {
      var name = siteNames[i];

      if (name != "none") {
        var block = create_reorder_block({
          name: name,
        });

        fragment.appendChild(block);
      }
    }

    container.appendChild(fragment);
  }

  create_sortable_container(opts.visibleContainer, opts.visibleSiteNames);
  create_sortable_container(opts.discardedContainer, opts.hiddenSiteNames);

  initialize_sortable(opts.visibleContainer, "visible");
  initialize_sortable(opts.discardedContainer, "discarded");

  initialize_show_hide_all_sites(
    opts.showAllButton,
    opts.discardedContainer,
    opts.visibleContainer
  );
  initialize_show_hide_all_sites(
    opts.hideAllButton,
    opts.visibleContainer,
    opts.discardedContainer
  );
}

function ie_version() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }

  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }

  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }

  return false;
}

function setURLQuery(queryData) {
  var queryArray = [];

  var keys = Object.keys(queryData);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = queryData[key];

    if (value) {
      queryArray.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(value)
      );
    } else {
      queryArray.push(encodeURIComponent(key));
    }
  }

  var queryString = queryArray.join("&");

  if (window.history.pushState) {
    var newURL =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    if (queryString) {
      newURL += "?" + queryString;
    }
    if (window.location.hash) {
      newURL += window.location.hash;
    }

    window.history.replaceState(null, "", newURL);
  }
}

function updateURLQuery(queryData) {
  var currentQuery = getURLQuery();

  var keys = Object.keys(queryData);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (queryData[key] === null) {
      delete currentQuery[key];
    } else {
      currentQuery[key] = queryData[key];
    }
  }

  setURLQuery(currentQuery);
}

function getURLQuery(findKey) {
  var queryParts = window.location.search.substring(1).split("&");
  var queryData = {};

  for (var i = 0; i < queryParts.length; i++) {
    var queryPair = queryParts[i].split("=");

    var key = null;
    var value = null;

    try {
      key = decodeURIComponent(queryPair[0]);
    } catch (e) {
      continue;
    }

    try {
      value = decodeURIComponent(queryPair[1] || "");
    } catch (ignored) {}

    if (key) queryData[key] = value;
  }

  return findKey ? queryData[findKey] : queryData;
}

function httpPost(url, parameters, callback) {
  if (parameters && typeof parameters !== "object") {
    console.error("Parameters is not an object");
    return;
  }
  if (callback && typeof callback !== "function") {
    console.error("Callback is not a function");
    return;
  }

  var query = [];
  if (!parameters) parameters = {};

  for (var p in parameters) {
    query.push(encodeURIComponent(p) + "=" + encodeURIComponent(parameters[p]));
  }
  query = query.join("&");

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && callback) {
      callback(this.status, this.responseText);
    }
  };

  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(query);
}

try {
  console.log(
    "%c " +
      "Lbh'ir sbhaq n frperg! Hfr pbhcba pbqr HEYFUNPXRE gb trg n qvfpbhag ng Oebjfreyvat (jjj.oebjfreyvat.pbz)!".replace(
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

// Element.closest polyfill
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
      i,
      el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {}
    } while (i < 0 && (el = el.parentElement));

    return el;
  };
}
