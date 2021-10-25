$(function () {
  var allPlatforms = [
    {
      text: "Android 7.1 Nougat",
      icon: "images/os-icons/android-71.png",
    },
    {
      text: "Android 7.0 Nougat",
      icon: "images/os-icons/android-70.png",
    },
    {
      text: "Android 6.0 Marshmallow",
      icon: "images/os-icons/android-60.png",
    },
    {
      text: "Android 5.1 Lollipop",
      icon: "images/os-icons/android-51.png",
    },
    {
      text: "Android 5.0 Lollipop",
      icon: "images/os-icons/android-50.png",
    },
    {
      text: "Android 4.4 KitKat",
      icon: "images/os-icons/android-44.png",
    },
    {
      text: "Windows XP",
      icon: "images/os-icons/windows-xp.png",
    },
    {
      text: "Windows Vista",
      icon: "images/os-icons/windows-vista.png",
    },
    {
      text: "Windows 7",
      selected: true,
      icon: "images/os-icons/windows-7.png",
    },
    {
      text: "Windows 8",
      icon: "images/os-icons/windows-8.png",
    },
    {
      text: "Windows 8.1",
      icon: "images/os-icons/windows-81.png",
    },
    {
      text: "Windows 10",
      icon: "images/os-icons/windows-10.png",
    },
  ];

  var allBrowsers = [
    {
      text: "Internet Explorer",
      selected: true,
      icon: "images/browser-icons/ie.png",
    },
    {
      text: "Chrome",
      icon: "images/browser-icons/chrome.png",
    },
    {
      text: "Firefox",
      icon: "images/browser-icons/firefox.png",
    },
    {
      text: "Opera",
      icon: "images/browser-icons/opera.png",
    },
    {
      text: "Safari",
      icon: "images/browser-icons/safari.png",
    },
  ];

  var win10Browsers = [
    {
      text: "Edge",
      selected: true,
      icon: "images/browser-icons/edge.png",
    },
    {
      text: "Internet Explorer",
      icon: "images/browser-icons/ie.png",
    },
    {
      text: "Chrome",
      icon: "images/browser-icons/chrome.png",
    },
    {
      text: "Firefox",
      icon: "images/browser-icons/firefox.png",
    },
    {
      text: "Opera",
      icon: "images/browser-icons/opera.png",
    },
    {
      text: "Safari",
      icon: "images/browser-icons/safari.png",
    },
  ];

  var androidBrowsers = [
    {
      text: "Default Browser",
      icon: "images/browser-icons/android.png",
    },
  ];

  localStorageGet("browsers", function (items) {
    if (!items.browsers) {
      // create a default browser list
      //
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
          ie: [6, 7, { text: 8, selected: true }],
          chrome: ["canary"].concat(range(1, 49)),
          firefox: ["nightly", 3, 3.5, 3.6].concat(range(4, 49)),
          safari: ["4.0", "5.0.5", "5.1"],
          opera: ["next", 10, 10.5, 11, 11.5, 11.6, 12].concat(range(15, 36)),
        },
        winvista: {
          ie: [{ text: 9, selected: true }],
          chrome: ["canary"].concat(range(1, 50)),
          firefox: ["nightly", 3, 3.5, 3.6].concat(range(4, 52)),
          safari: ["4.0", "5.0.5", "5.1"],
          opera: ["next", 10, 10.5, 11, 11.5, 11.6, 12].concat(range(15, 36)),
        },
        win7: {
          ie: [10, { text: 11, selected: true }],
          chrome: ["canary"].concat(range(1, 64)),
          firefox: ["nightly", 3, 3.5, 3.6].concat(range(4, 58)),
          safari: ["4.0", "5.0.5", "5.1"],
          opera: ["next", 10, 10.5, 11, 11.5, 11.6, 12].concat(range(15, 50)),
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

      // cache this list and init UI
      localStorageSet(
        {
          browsers: browserVersions,
          cacheTime: 0,
        },
        function () {
          init(browserVersions);
        }
      );
    } else {
      init(items.browsers);
    }
  });

  function init(browserVersions) {
    var platformDropdown = new Dropdown({
      width: 200,
      height: 40,
      iconWidth: 32,
      iconHeight: 32,
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

        var versions =
          browserVersions[platform + platform_version][browser].slice();
        versions.reverse();
        updateVersionsDropdown(versions);
      },
    });
    $("#platform").append(platformDropdown.create());

    var browserDropdown = new Dropdown({
      width: 170,
      height: 40,
      iconWidth: 32,
      iconHeight: 32,
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
        var versions =
          browserVersions[platform + platform_version][browser].slice();
        versions.reverse();
        updateVersionsDropdown(versions);
      },
    });
    $("#browser").append(browserDropdown.create());

    function updateBrowsersDropdown(browsers) {
      browserDropdown.update(browsers);
    }

    function updateVersionsDropdown(versions) {
      versionDropdown.update(versions);
    }

    // ie 11 on win7 is selected by default
    var ieVersions = browserVersions["win7"]["ie"].slice();
    ieVersions.reverse();
    var versionDropdown = new Dropdown({
      width: 90,
      height: 40,
      center: true,
      data: ieVersions,
    });
    $("#version").append(versionDropdown.create());

    // update dropdownds with latest browser info
    function updateDropdowns(browsers, freshOrCached) {
      var browser = $("#browser .dropdown-selected .text").text();
      browser = normalizeBrowserName(browser);
      var platform_version = $("#platform .dropdown-selected .text").text();
      platform_version = platformVersionToShortName(platform_version);

      var versions = browsers["win" + platform_version][browser].slice();
      versions.reverse();
      updateVersionsDropdown(versions);
    }

    function updateBrowserList(browserList) {
      var list = {};

      var winPlatform = Object.keys(browserList.win);
      winPlatform.forEach(function (platform) {
        list["win" + platform] = {};

        var winBrowsers = Object.keys(browserList.win[platform]);
        winBrowsers.forEach(function (browser) {
          // put any browser versions with text (nightly, next, canary) at the first position
          var orderedBrowserList = [];
          browserList["win"][platform][browser].forEach(function (v) {
            if (/^\d+/.test(v)) {
              orderedBrowserList.push(v);
            } else {
              orderedBrowserList.unshift(v);
            }
          });
          // make the last item selected for Dropdown
          var last = orderedBrowserList[orderedBrowserList.length - 1];
          last = { text: last, selected: true };
          orderedBrowserList[orderedBrowserList.length - 1] = last;

          list["win" + platform][browser] = orderedBrowserList;
        });
      });

      var androidPlatform = Object.keys(browserList.android);
      androidPlatform.forEach(function (platform) {
        list["android" + platform] = {};

        var androidBrowsers = Object.keys(browserList.android[platform]);
        androidBrowsers.forEach(function (browser) {
          // put any browser versions with text (nightly, next, canary) at the first position
          var orderedBrowserList = [];
          browserList["android"][platform][browser].forEach(function (v) {
            if (/^\d+/.test(v)) {
              orderedBrowserList.push(v);
            } else {
              orderedBrowserList.unshift(v);
            }
          });
          // make the last item selected for Dropdown
          var last = orderedBrowserList[orderedBrowserList.length - 1];
          last = { text: last, selected: true };
          orderedBrowserList[orderedBrowserList.length - 1] = last;

          list["android" + platform][browser] = orderedBrowserList;
        });
      });

      return list;
    }

    // get latest browser info
    function getLatestBrowsers(cb) {
      $.get(
        "https://www.broowserools.com/browsers.json",
        function (data) {
          try {
            var browsers = JSON.parse(data);
            cb(browsers);
          } catch (e) {
            cb(null);
          }
        },
        "text"
      );
    }

    localStorageGet(["browsers", "cacheTime"], function (items) {
      if (items.browsers && items.cacheTime) {
        if (Date.now() - items.cacheTime > 3 * 3600 * 1000) {
          getLatestBrowsers(function (browsers) {
            if (browsers) {
              var browserList = updateBrowserList(browsers);
              localStorageSet(
                {
                  browsers: browserList,
                  cacheTime: Date.now(),
                },
                function () {
                  updateDropdowns(browserList, "fresh");
                }
              );
            }
          });
        } else {
          updateDropdowns(items.browsers, "cached");
        }
      } else {
        getLatestBrowsers(function (browsers) {
          if (browsers) {
            var browserList = updateBrowserList(browsers);
            localStorageSet(
              {
                browsers: browserList,
                cacheTime: Date.now(),
              },
              function () {
                updateDropdowns(browserList, "fresh");
              }
            );
          }
        });
      }
    });
  }

  // make footer www.broowserools.com clickable
  $("#footer a").click(function (ev) {
    ev.preventDefault();

    var newUrl = "https://www.broowserools.com";
    createTab(newUrl);
  });

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

  // make run work
  $("#run input").click(function () {
    var platform_name = "win";
    var platform_version = $("#platform .dropdown-selected .text").text();
    if (/android/i.test(platform_version)) {
      platform_name = "android";
    }
    platform_version = platformVersionToShortName(platform_version);

    var browser = $("#browser .dropdown-selected .text").text();
    browser = normalizeBrowserName(browser);

    var version = $("#version .dropdown-selected .text").text();
    var url = $("#url input").val();

    if (platform_name == "android") {
      var newUrl =
        "https://www.broowserools.com/browse/" +
        platform_name +
        "/" +
        platform_version +
        "/" +
        encodeURIComponent(url);
    } else {
      var newUrl =
        "https://www.broowserools.com/browse/" +
        platform_name +
        "/" +
        platform_version +
        "/" +
        browser +
        "/" +
        version +
        "/" +
        encodeURIComponent(url);
    }

    createTab(newUrl);
  });

  // fill url field with current tab's url
  getCurrentUrl(function (url) {
    $("#url input").val(url);
  });
});
