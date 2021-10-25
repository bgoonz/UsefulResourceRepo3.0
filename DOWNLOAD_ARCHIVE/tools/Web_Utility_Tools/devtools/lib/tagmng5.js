var isLazyAd = false;
var deskAdsNum = 1;
var mobileAdsNum = 0;

if (typeof deskAdsNum === "undefined") var deskAdsNum = 2;
if (typeof mobileAdsNum === "undefined") var mobileAdsNum = 1;
if (typeof isStickyAd === "undefined") var isStickyAd = true;
if (typeof isAPS === "undefined") var isAPS = true;
if (typeof isLazyAd === "undefined") var isLazyAd = true;
var apstag;
var isFF = navigator.userAgent.indexOf("Firefox") != -1;
var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
var isMobile = width < 970 ? true : false;
var adsNum = deskAdsNum;
if (isMobile) adsNum = mobileAdsNum;
window.ga =
  window.ga ||
  function () {
    (ga.q = ga.q || []).push(arguments);
  };
ga.l = +new Date();
loadScripts();
if (document.readyState !== "loading") tagmngMain();
else {
  window.addEventListener("DOMContentLoaded", function () {
    tagmngMain();
  });
}

function tagmngMain() {
  if (adsNum) {
    if (isMobile) {
      window.addEventListener("scroll", setAds, { once: true });
    } else {
      setAds();
      if (isStickyAd) setSticky(2);
    }
  }
  setAnalytics();
}
function loadScripts() {
  var ga;
  if (adsNum) {
    if (isMobile) {
      window.addEventListener("scroll", loadGPTScript, { once: true });
    } else {
      loadGPTScript();
    }
  }
  ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src = "https://www.google-analytics.com/analytics.js";
  document.head.appendChild(ga);
}
function loadGPTScript() {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
  document.head.appendChild(ga);
}
function setAnalytics() {
  ga("create", "UA-2665076-2", "auto");
  ga("send", "pageview");
}

function setAds() {
  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(function () {
    var responsiveAdSlot = googletag
      .defineSlot(
        "/22558647090/rapidtables_right_fixed",
        [300, 250],
        "div-gpt-ad-1631210698489-0"
      )
      .addService(googletag.pubads());
    if (isMobile || adsNum > 1)
      googletag
        .defineSlot(
          "/22558647090/rapidtables_bottom_fixed",
          [300, 250],
          "div-gpt-ad-1631993686440-0"
        )
        .addService(googletag.pubads());
    if (isAPS && !isFF) googletag.pubads().disableInitialLoad();
    var mapping = googletag
      .sizeMapping()
      .addSize([970, 300], [300, 250])
      .addSize([0, 0], [])
      .build();
    responsiveAdSlot.defineSizeMapping(mapping);
    if (isLazyAd)
      googletag.pubads().enableLazyLoad({
        fetchMarginPercent: 80,
        renderMarginPercent: 40,
        mobileScaling: 2.0,
      });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
  if (isAPS && !isFF) initAPS();
  googletag.cmd.push(function () {
    googletag.display("div-gpt-ad-1631210698489-0");
  });
}
function setSticky(nh) {
  if (isMobile) return;
  var wrap = document.getElementById("wrapper");
  var rcol = document.getElementById("rcol");
  rcol.setAttribute("style", "position:sticky; top:0;");
  var h =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  var hwrap = wrap.getBoundingClientRect().height;
  var hrcol = rcol.getBoundingClientRect().height;
  var dh = hwrap - hrcol - nh * h;
  if (dh < 0) {
    hwrap -= dh;
    wrap.style.height = hwrap + "px";
  } else {
    hrcol += dh;
    rcol.style.height = hrcol + "px";
  }
}

//window['ga-disable-UA-2665076-2'] = true;
//(adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=1;

function initAPS() {
  //load the apstag.js library
  !(function (a9, a, p, s, t, A, g) {
    if (a[a9]) return;
    function q(c, r) {
      a[a9]._Q.push([c, r]);
    }
    a[a9] = {
      init: function () {
        q("i", arguments);
      },
      fetchBids: function () {
        q("f", arguments);
      },
      setDisplayBids: function () {},
      targetingKeys: function () {
        return [];
      },
      _Q: [],
    };
    A = p.createElement(s);
    A.async = !0;
    A.src = t;
    g = p.getElementsByTagName(s)[0];
    g.parentNode.insertBefore(A, g);
  })(
    "apstag",
    window,
    document,
    "script",
    "//c.amazon-adsystem.com/aax2/apstag.js"
  );

  //initialize the apstag.js library on the page to allow bidding
  apstag.init({
    pubID: "f48dc2f5-feda-43b9-a3bf-8d668de2484f",
    adServer: "googletag",
  });
  apstag.fetchBids(
    {
      slots: [
        {
          slotID: "div-gpt-ad-1631210698489-0", //example: 'div-gpt-ad-1475102693815-0'
          slotName: "/22558647090/rapidtables_right_fixed", //example: '12345/box-1'
          sizes: [[300, 250]], //example: [[300,250], [300,600]]
        },
        {
          slotID: "div-gpt-ad-1631993686440-0", //example: 'div-gpt-ad-1475185990716-0'
          slotName: "/22558647090/rapidtables_bottom_fixed", //example: '12345/leaderboard-1'
          sizes: [[300, 250]], //example: [[728,90]]
        },
      ],
      timeout: 2e3,
    },
    function (bids) {
      // set apstag targeting on googletag, then trigger the first GAM request in googletag's disableInitialLoad integration
      googletag.cmd.push(function () {
        apstag.setDisplayBids();
        googletag.pubads().refresh();
      });
    }
  );
}

function initShare() {
  if (document.getElementById("sharefb") != null) {
    document.getElementById("sharefb").href =
      "https://facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(window.location.href) +
      "&title=" +
      encodeURIComponent(document.title);
    document.getElementById("sharetw").href =
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(document.title) +
      "&url=" +
      encodeURIComponent(window.location.href);
    document.getElementById("sharewa").href =
      "https://wa.me/?text=" +
      encodeURIComponent(document.title) +
      " " +
      encodeURIComponent(window.location.href);
    document.getElementById("shareml").href =
      "mailto:?to=&subject=" +
      encodeURIComponent(document.title) +
      "&body=" +
      encodeURIComponent(window.location.href);
  }
}

function OnSubFb() {
  var m = "feedback.";
  var txt = document.getElementById("fdbkarea").value;
  var url = window.location.href;
  var body = "Page URL:\r\n" + url;
  body +=
    "\r\nScreen size:\r\n" + window.screen.width + "x" + window.screen.height;
  body += "\r\nOS:\r\n" + window.navigator.platform;
  body += "\r\nUser agent:\r\n" + window.navigator.userAgent;
  body += "\r\n\r\nMessage:\r\n" + txt;
  body = encodeURIComponent(body);
  m += "rapidtables@gmail.com";
  var href = "mailto:" + m + "?subject=Page%20Feedback&body=" + body;
  if (txt.length > 30) {
    var form = document.getElementById("fdbkform");
    function handleForm(e) {
      e.preventDefault();
    }
    form.addEventListener("submit", handleForm);
    window.location.href = href;
    document.getElementById("fdbkmsg").textContent =
      "If your mail client is not defined, please copy & send your message to " +
      m;
  }
}
