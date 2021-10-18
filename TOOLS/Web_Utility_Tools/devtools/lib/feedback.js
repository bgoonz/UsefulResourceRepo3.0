// Set share button links
/*
if( document.getElementById("sharefb") )
{
	document.getElementById("sharefb").href = "https://facebook.com/sharer/sharer.php?u="+encodeURIComponent(window.location.href)+"&title="+encodeURIComponent(document.title);
	document.getElementById("sharetw").href = "https://twitter.com/intent/tweet?text="+encodeURIComponent(document.title)+"&url="+encodeURIComponent(window.location.href);
	document.getElementById("sharewa").href = "https://wa.me/?text="+encodeURIComponent(document.title)+" "+encodeURIComponent(window.location.href);
	document.getElementById("shareml").href = "mailto:?to=&subject="+encodeURIComponent(document.title)+"&body="+encodeURIComponent(window.location.href);
}
*/
function OnSubFb() {
  ref = document.feedback;
  ref.URL.value = document.URL;
  if (ref.Message.value == "") alert("Please enter your message");
  else ref.submit();
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
        if (typeof Intl.DateTimeFormat.resolvedOptions === "function") {
          var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (timeZone === "America/Los_Angeles") return true;
          return false;
        }

    //offset = new Date().getTimezoneOffset() / (-60);
    //if( offset>=-8 && offset<=-7 ) return true;
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
        if (typeof Intl.DateTimeFormat.resolvedOptions === "function") {
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

// get consent cookie
var s = getCookie("RTConsent");
console.log(s);
if (s.charAt(0) == "0") window["ga-disable-UA-2665076-2"] = true;
if (s.charAt(1) == "0") {
  //(adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=1;
  (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
  //(adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=0;
}
