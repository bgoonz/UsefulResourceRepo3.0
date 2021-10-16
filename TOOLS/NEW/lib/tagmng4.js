if (typeof deskAdsNum === "undefined") var deskAdsNum = 3;
if (typeof mobileAdsNum === "undefined") var mobileAdsNum = 0;
if (typeof isLazyAd === "undefined") var isLazyAd = 0;
var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
var adsNum = deskAdsNum;
if (width < 800) adsNum = mobileAdsNum;

window.ga =
  window.ga ||
  function () {
    (ga.q = ga.q || []).push(arguments);
  };
ga.l = +new Date();
(adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;
loadScripts();
if (document.readyState !== "loading") tagmngMain();
else {
  window.addEventListener("DOMContentLoaded", function () {
    tagmngMain();
  });
}

function tagmngMain() {
  document.getElementById("banokbtn").onclick = function () {
    onOK();
  };
  var v = getCookie("RTConsent");
  if (v == null) {
    if (isCal() || isEER()) {
      setBanner();
      runTags("1111"); //
    } else runTags("1111");
  } else {
    runTags(v);
  }
  //initShare();
}
function loadScripts() {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src = "https://www.google-analytics.com/analytics.js";
  document.head.appendChild(ga);
  if (adsNum == 0) return;
  ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  document.head.appendChild(ga);
}
function setAnalytics() {
  //ga('create', 'UA-199879494-1', {
  //   sampleRate: 10,
  //   cookieDomain: 'auto'
  //});
  ga("create", "UA-2665076-2", "auto");
  ga("send", "pageview");
}
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function isCal() {
  try {
    if (typeof Intl !== "undefined")
      if (typeof Intl.DateTimeFormat === "function")
        if (typeof Intl.DateTimeFormat().resolvedOptions === "function") {
          var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (timeZone === "America/Los_Angeles") return true;
          return false;
        }
    var offset = new Date().getTimezoneOffset();
    if (offset <= 480 && offset >= 420) return true;
    return false;
  } catch (error) {
    console.error(error);
    return true;
  }
}
function isEER() {
  try {
    if (typeof Intl !== "undefined")
      if (typeof Intl.DateTimeFormat === "function")
        if (typeof Intl.DateTimeFormat().resolvedOptions === "function") {
          var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (timeZone.substring(0, 7) === "Europe/") return true;
          return false;
        }

    var offset = new Date().getTimezoneOffset();
    if (offset >= -240 && offset <= 0) return true;
    return false;
  } catch (error) {
    console.error(error);
    return true;
  }
}

function setAds(np) {
  if (adsNum == 0) {
    var as1 = document.getElementsByClassName("adslot_1");
    if (as1.length > 0) as1[0].style.display = "none";
    return;
  }
  if (np)
    (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
  (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0;
  if (isLazyAd) adsNum--;
  for (var n = 0; n < adsNum; n++)
    (adsbygoogle = window.adsbygoogle || []).push({});
  if (isLazyAd) window.addEventListener("scroll", scrollHandler);
}
function scrollHandler() {
  var rect = document.getElementById("fdbk").getBoundingClientRect();
  isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
  if (isVisible) {
    (adsbygoogle = window.adsbygoogle || []).push({});
    window.removeEventListener("scroll", scrollHandler);
  }
}
function setBanner() {
  document.getElementById("banner").style.display = "block";
}
function runTags(v) {
  if (v[0] == "1") setAnalytics();
  if (v[1] == "1") setAds(false);
  else setAds(true);
}
function onOK() {
  //runTags("1111");
  document.getElementById("banner").style.display = "none";
  setCookie("RTConsent", "1111", 365);
}

//window['ga-disable-UA-2665076-2'] = true;
//(adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=1;

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
  //var body="Page URL:\n"+url+"\n\nMessage:\n"+txt;
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
