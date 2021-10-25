$(function () {
  var allPlatforms = [
    {
      text: "Android 7.1 Nougat",
      icon: "/images/os-icons/android-71.png",
    },
    {
      text: "Android 7.0 Nougat",
      icon: "/images/os-icons/android-70.png",
    },
    {
      text: "Android 6.0 Marshmallow",
      icon: "/images/os-icons/android-60.png",
    },
    {
      text: "Android 5.1 Lollipop",
      icon: "/images/os-icons/android-51.png",
    },
    {
      text: "Android 5.0 Lollipop",
      icon: "/images/os-icons/android-50.png",
    },
    {
      text: "Android 4.4 KitKat",
      icon: "/images/os-icons/android-44.png",
    },
    {
      text: "Windows XP",
      icon: "/images/os-icons/windows-xp.png",
    },
    {
      text: "Windows Vista",
      icon: "/images/os-icons/windows-vista.png",
    },
    {
      text: "Windows 7",
      selected: true,
      icon: "/images/os-icons/windows-7.png",
    },
    {
      text: "Windows 8",
      icon: "/images/os-icons/windows-8.png",
    },
    {
      text: "Windows 8.1",
      icon: "/images/os-icons/windows-81.png",
    },
    {
      text: "Windows 10",
      icon: "/images/os-icons/windows-10.png",
    },
  ];

  var win10Browsers = [
    {
      text: "Edge",
      selected: true,
      icon: "/images/browser-icons/edge.png",
    },
    {
      text: "Internet Explorer",
      icon: "/images/browser-icons/ie.png",
    },
    {
      text: "Chrome",
      icon: "/images/browser-icons/chrome.png",
    },
    {
      text: "Firefox",
      icon: "/images/browser-icons/firefox.png",
    },
    {
      text: "Opera",
      icon: "/images/browser-icons/opera.png",
    },
    {
      text: "Safari",
      icon: "/images/browser-icons/safari.png",
    },
  ];

  var allBrowsers = [
    {
      text: "Internet Explorer",
      icon: "/images/browser-icons/ie.png",
      selected: true,
    },
    {
      text: "Chrome",
      icon: "/images/browser-icons/chrome.png",
    },
    {
      text: "Firefox",
      icon: "/images/browser-icons/firefox.png",
    },
    {
      text: "Opera",
      icon: "/images/browser-icons/opera.png",
    },
    {
      text: "Safari",
      icon: "/images/browser-icons/safari.png",
    },
  ];

  var androidBrowsers = [
    {
      text: "Default Browser",
      icon: "images/browser-icons/android.png",
    },
  ];

  function range(start, end) {
    var ret = [];
    for (var i = start; i <= end; i++) {
      ret.push(i);
    }
    return ret;
  }

  var browserVersions = {
    "android4.4": {
      browser: ["4.4"],
    },
    "android5.0": {
      browser: ["5.0"],
    },
    "android5.1": {
      browser: ["5.1"],
    },
    "android6.0": {
      browser: ["6.0"],
    },
    "android7.0": {
      browser: ["7.0"],
    },
    "android7.1": {
      browser: ["7.1"],
    },
    winxp: {
      ie: [6, 7, 8],
      chrome: ["canary"].concat(range(1, 49)),
      firefox: ["nightly", 3, 3.5, 3.6].concat(range(4, 49)),
      safari: ["4.0", "5.0.5", "5.1"],
      opera: ["next", 10, 10.5, 11, 11.5, 11.6, 12].concat(range(15, 36)),
    },
    winvista: {
      ie: [9],
      chrome: ["canary"].concat(range(1, 50)),
      firefox: ["nightly", 3, 3.5, 3.6].concat(range(4, 52)),
      safari: ["4.0", "5.0.5", "5.1"],
      opera: ["next", 10, 10.5, 11, 11.5, 11.6, 12].concat(range(15, 36)),
    },
    win7: {
      ie: [10, 11],
      chrome: ["canary"].concat(range(1, 59)),
      firefox: ["nightly", 3, 3.5, 3.6].concat(range(4, 54)),
      safari: ["4.0", "5.0.5", "5.1"],
      opera: ["next", 10, 10.5, 11, 11.5, 11.6, 12].concat(range(15, 45)),
    },
    win8: {
      ie: [10],
      chrome: ["canary"].concat(range(30, 57)),
      firefox: ["nightly"].concat(range(30, 52)),
      safari: ["4.0", "5.0.5", "5.1"],
      opera: ["next"].concat(range(20, 44)),
    },
    "win8.1": {
      ie: [11],
      chrome: ["canary"].concat(range(30, 57)),
      firefox: ["nightly"].concat(range(30, 52)),
      safari: ["4.0", "5.0.5", "5.1"],
      opera: ["next"].concat(range(20, 44)),
    },
    win10: {
      edge: [38],
      ie: [11],
      chrome: ["canary"].concat(range(1, 56)),
      firefox: ["nightly", 3, 3.5, 3.6].concat(range(4, 51)),
      safari: ["4.0", "5.0.5", "5.1"],
      opera: ["next", 10, 10.5, 11, 11.5, 11.6, 12].concat(range(15, 43)),
    },
  };

  function updateVersionsDropdown(versions) {
    versionDropdown.update(versions);
  }

  function updateBrowsersDropdown(browsers) {
    browserDropdown.update(browsers);
  }

  var platformDropdown = new Dropdown({
    width: 200,
    height: 40,
    iconWidth: 32,
    iconHeight: 32,
    backgroundColor: "white",
    data: allPlatforms,
    callback: function (selected) {
      var platform_version = selected;
      platform_version = platformVersionToShortName(platform_version);

      var platform = "win";
      if (/android/i.test(selected)) {
        platform = "android";
        // for now add only android 6 default browser
        updateBrowsersDropdown(androidBrowsers);
        var browser = "browser";
      } else {
        var browser = $("#browser .dropdown-selected .text").text();
        browser = normalizeBrowserName(browser);
        if (platform_version == 10) {
          browser = "edge";
          updateBrowsersDropdown(win10Browsers);
        } else {
          browser = "ie";
          updateBrowsersDropdown(allBrowsers);
        }
      }

      var versions = browserVersions[platform + platform_version][
        browser
      ].slice();
      versions.reverse();
      updateVersionsDropdown(versions);

      updateBookmarklet();
    },
  });
  $("#platform").append(platformDropdown.create());

  var browserDropdown = new Dropdown({
    width: 170,
    height: 40,
    iconWidth: 32,
    iconHeight: 32,
    backgroundColor: "white",
    data: allBrowsers,
    callback: function (selected) {
      var browser = selected;
      browser = normalizeBrowserName(browser);

      var platform_version = $("#platform .dropdown-selected .text").text();

      var platform = "win";
      if (/android/i.test(platform_version)) {
        platform = "android";
        browser = "browser";
      }

      platform_version = platformVersionToShortName(platform_version);
      var versions = browserVersions[platform + platform_version][
        browser
      ].slice();
      versions.reverse();
      updateVersionsDropdown(versions);

      updateBookmarklet();
    },
  });
  $("#browser").append(browserDropdown.create());

  // chrome on vista is selected by default
  var chromeVersions = browserVersions["win7"]["ie"].slice();
  chromeVersions.reverse();
  var versionDropdown = new Dropdown({
    width: 90,
    height: 40,
    center: true,
    backgroundColor: "white",
    data: chromeVersions,
    callback: function (selected) {
      updateBookmarklet();
    },
  });
  $("#version").append(versionDropdown.create());

  function updateBookmarklet() {
    var platform_name = "win";
    var platform_version = $("#platform .dropdown-selected .text").text();
    if (/android/i.test(platform_version)) {
      platform_name = "android";
    }
    platform_version = platformVersionToShortName(platform_version);

    var browser = $("#browser .dropdown-selected .text").text();
    browser = normalizeBrowserName(browser);

    var version = $("#version .dropdown-selected .text").text();

    if (platform_name == "android") {
      var bookmarklet =
        "javascript: (function () {" +
        "window.location.href = 'https://www.broowserools.com/browse/' +" +
        " '{platform_name}' + '/' + " +
        " '{platform_version}' + '/' + " +
        " '{url}' " +
        "})();";
    } else {
      var bookmarklet =
        "javascript: (function () {" +
        "window.location.href = 'https://www.broowserools.com/browse/' +" +
        " '{platform_name}' + '/' + " +
        " '{platform_version}' + '/' + " +
        " '{browser}' + '/' + " +
        " '{version}' + '/' + " +
        " '{url}' " +
        "})();";
    }

    bookmarklet = bookmarklet.replace("{platform_name}", platform_name);
    bookmarklet = bookmarklet.replace("{platform_version}", platform_version);
    bookmarklet = bookmarklet.replace("{browser}", browser);
    bookmarklet = bookmarklet.replace("{version}", version);

    if ($("#bookmarklet-url-input").is(":visible")) {
      var url = encodeURIComponent($("#bookmarklet-url-input input").val());
      bookmarklet = bookmarklet.replace("{url}", url);
    } else {
      var url = "encodeURIComponent(window.location.href)";
      bookmarklet = bookmarklet.replace("'{url}'", url);
    }

    $("#bookmarklet-link a").attr("href", bookmarklet);

    if (browser == "ie") {
      browser = "IE";
    } else if (browser == "default browser") {
      browser = "Default Browser";
    } else {
      browser = browser.charAt(0).toUpperCase() + browser.slice(1);
    }

    version = version.charAt(0).toUpperCase() + version.slice(1);
    platform_name =
      platform_name.charAt(0).toUpperCase() + platform_name.slice(1);
    if (platform_version == "xp") {
      platform_version = "XP";
    } else {
      platform_version =
        platform_version.charAt(0).toUpperCase() + platform_version.slice(1);
    }

    if (/android/i.test(platform_name)) {
      $("#bookmarklet-link a").text(
        browser + " on " + platform_name + " " + platform_version
      );
    } else {
      $("#bookmarklet-link a").text(
        browser +
          " " +
          version +
          " on " +
          platform_name +
          " " +
          platform_version
      );
    }
  }

  function platformVersionToShortName(platform_version) {
    if (platform_version == "Windows XP") {
      platform_version = "xp";
    } else if (platform_version == "Windows Vista") {
      platform_version = "vista";
    } else if (platform_version == "Windows 7") {
      platform_version = "7";
    } else if (platform_version == "Windows 8") {
      platform_version = "8";
    } else if (platform_version == "Windows 8.1") {
      platform_version = "8.1";
    } else if (platform_version == "Windows 10") {
      platform_version = "10";
    } else if (platform_version == "Android 7.1 Nougat") {
      platform_version = "7.1";
    } else if (platform_version == "Android 7.0 Nougat") {
      platform_version = "7.0";
    } else if (platform_version == "Android 6.0 Marshmallow") {
      platform_version = "6.0";
    } else if (platform_version == "Android 5.1 Lollipop") {
      platform_version = "5.1";
    } else if (platform_version == "Android 5.0 Lollipop") {
      platform_version = "5.0";
    } else if (platform_version == "Android 4.4 KitKat") {
      platform_version = "4.4";
    }
    return platform_version;
  }

  function normalizeBrowserName(browser) {
    if (browser == "Internet Explorer") {
      browser = "ie";
    } else {
      browser = browser.toLowerCase();
    }
    return browser;
  }

  $("#bookmarklet-url a").click(function (ev) {
    ev.preventDefault();
    $("#bookmarklet-url-input").slideDown();
    $("#bookmarklet-link-url").slideDown();
    updateBookmarklet();
  });

  $("#bookmarklet-url-input input").keyup(function (ev) {
    var url = $("#bookmarklet-url-input input").val();
    $("#bookmarklet-link-url span").text(url);
    updateBookmarklet();
  });

  $("#bookmarklet-url-input a").click(function (ev) {
    ev.preventDefault();
    $("#bookmarklet-url-input").slideUp();
    $("#bookmarklet-link-url").slideUp();
    updateBookmarklet();
  });
});
