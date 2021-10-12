(this["webpackJsonpjob-application"] =
  this["webpackJsonpjob-application"] || []).push([
  [0],
  {
    21: function (e, t, a) {
      "use strict";
      (function (e) {
        a.d(t, "b", function () {
          return l;
        }),
          a.d(t, "a", function () {
            return c;
          }),
          "undefined" === typeof window && (e.window = {});
        var n,
          i,
          r =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame;
        function s(e, t, a) {
          var n,
            i,
            r,
            s = this,
            o = arguments,
            l = {
              now:
                Date.now ||
                function () {
                  return new Date().getTime();
                },
            },
            c = null,
            m = 0;
          a || (a = {});
          var u = function () {
            (m = !1 === a.leading ? 0 : l.now()),
              (c = null),
              (r = e.apply(n, i)),
              c || (n = i = null);
          };
          return function () {
            var d = l.now();
            m || !1 !== a.leading || (m = d);
            var p = t - (d - m);
            return (
              (n = s),
              (i = o),
              p <= 0 || p > t
                ? (c && (clearTimeout(c), (c = null)),
                  (m = d),
                  (r = e.apply(n, i)),
                  c || (n = i = null))
                : c || !1 === a.trailing || (c = setTimeout(u, p)),
              r
            );
          };
        }
        function o(e) {
          var t = {
              width: document.documentElement.clientWidth,
              height: document.documentElement.clientHeight,
            },
            a = { x: window.pageXOffset, y: window.pageYOffset },
            n = (function (e) {
              var t = 0,
                a = 0,
                n = e.offsetHeight,
                i = e.offsetWidth;
              do {
                isNaN(e.offsetTop) || (t += e.offsetTop),
                  isNaN(e.offsetLeft) || (a += e.offsetLeft);
              } while (null !== (e = e.offsetParent));
              return { top: t, left: a, height: n, width: i };
            })(e),
            i = n.height,
            r = n.width,
            s = n.top,
            o = n.left;
          return (
            s + 0.2 * i < a.y - 0 + t.height &&
            s + i - 0.2 * i > a.y + 0 &&
            o + 0.2 * r > a.x + 0 &&
            o + r - 0.2 * r < a.x - 0 + t.width
          );
        }
        function l(e, t, a, l) {
          if (
            window.requestAnimationFrame &&
            document.documentElement.classList
          ) {
            document.documentElement.classList.add("enhanced");
            var c = document.querySelectorAll("." + t),
              m = function () {
                for (var e = 0; e < c.length; e++)
                  o(c[e])
                    ? (c[e].classList.add(a), l && l(!0, c[e]))
                    : (c[e].classList.remove(a), l && l(!1, c[e]));
              };
            if (e)
              return (
                window.addEventListener
                  ? (window.removeEventListener("scroll", n, !1),
                    window.removeEventListener("resize", i, !1))
                  : window.attachEvent
                  ? (window.detachEvent("onscroll", n),
                    window.detachEvent("onresize", i))
                  : ((window.onscroll = null), (window.onresize = null)),
                !1
              );
            (n = s(function () {
              return r(m);
            }, 300)),
              (i = s(function () {
                return r(m);
              }, 300)),
              window.addEventListener
                ? (window.addEventListener("scroll", n, !1),
                  window.addEventListener("resize", i, !1))
                : window.attachEvent
                ? (window.attachEvent("onscroll", n),
                  window.attachEvent("onresize", i))
                : ((window.onscroll = n), (window.onresize = i));
          }
        }
        function c(e, t) {
          if (t)
            document.removeEventListener("mousemove", u),
              window.removeEventListener("resize", d),
              (e.style.transition = ""),
              (e.style.transform = "");
          else {
            var a = new m(e);
            if (
              ((e.style.transition = "transform 0.2s ease-out"),
              "undefined" === typeof requestAnimationFrame)
            )
              return;
            document.addEventListener("mousemove", u.bind(a)),
              window.addEventListener("resize", d.bind(a));
          }
        }
        function m(e) {
          (this.el = e),
            (this.win = {
              width: window.innerWidth,
              height: window.innerHeight,
            });
        }
        function u(e) {
          var t = this;
          requestAnimationFrame(function () {
            var a = t.getMousePos(e),
              n =
                ((2 * t.options.tilt.maxRotationX) / t.win.height) * a.y -
                t.options.tilt.maxRotationX,
              i =
                ((2 * t.options.tilt.maxRotationY) / t.win.width) * a.x -
                t.options.tilt.maxRotationY,
              r =
                ((2 * t.options.tilt.maxTranslationX) / t.win.width) * a.x -
                t.options.tilt.maxTranslationX,
              s =
                ((2 * t.options.tilt.maxTranslationY) / t.win.height) * a.y -
                t.options.tilt.maxTranslationY;
            t.el.style.transform =
              "perspective(1000px) \n                               translate3d( "
                .concat(r, "px, ")
                .concat(
                  s,
                  "px, 0) \n                               rotate3d(1,0,0,"
                )
                .concat(
                  n,
                  "deg) \n                               rotate3d(0,1,0,"
                )
                .concat(i, "deg)");
          });
        }
        function d() {
          !(function (e, t, a) {
            var n;
          })(function () {
            this.win = { width: window.innerWidth, height: window.innerHeight };
          }, 10);
        }
        (m.prototype.options = {
          tilt: {
            maxRotationX: -4,
            maxRotationY: 3,
            maxTranslationX: 10,
            maxTranslationY: -2,
          },
        }),
          (m.prototype.getMousePos = function (e) {
            var t = 0,
              a = 0;
            return (
              e || (e = window.event),
              e.pageX || e.pageY
                ? ((t = e.pageX), (a = e.pageY))
                : (e.clientX || e.clientY) &&
                  ((t =
                    e.clientX +
                    document.body.scrollLeft +
                    document.documentElement.scrollLeft),
                  (a =
                    e.clientY +
                    document.body.scrollTop +
                    document.documentElement.scrollTop)),
              { x: t, y: a }
            );
          });
      }.call(this, a(23)));
    },
    26: function (e) {
      e.exports = JSON.parse(
        '{"name":"Sn\xe6r Seljan \xde\xf3roddsson","firstName":"sn\xe6r seljan","lastName":"\xfe\xf3roddsson","email":"snaerth@gmail.com","sendEmail":"Haf\xf0u samband","back":"Til baka","more":"Meira","resume":"Ferilskr\xe1","contact":{"title":"Vertu \xed bandi","text":"Ef \xfe\xfa vilt hafa samband \xfe\xe1 getur \xfe\xfa sent m\xe9r p\xf3st beint \xe1 <a href=\'mailto:snaerth@gmail.com\' title=\'Senda p\xf3st til snaerth@gmail.com\'>snaerth@gmail.com</a> e\xf0a sent m\xe9r skilabo\xf0 \xe1 <a href=\'https://www.facebook.com/snaerth\' title=\'Facebook\'>Facebook</a>.","email":"snaerth@gmail.com","buttonText":"Senda m\xe9r p\xf3st"},"nav":[{"id":1,"text":"um mig","active":true},{"id":2,"text":"menntun","active":false},{"id":3,"text":"ferill","active":false},{"id":4,"text":"kunn\xe1tta","active":false},{"id":5,"text":"verkefni","active":false}],"career":{"title":"ferill","rows":[{"title":"Dohop","secondTitle":"2017 - ","content":"\xcd Dohop hef \xe9g starfa\xf0 a\xf0 margv\xedslegum verkefnum. Mitt starf er sambland af v\xf6rumerkjastj\xf3ra, t\xe6kni lei\xf0toga og forritara.  T\xf3lin sem \xe9g hef unni\xf0 mest me\xf0 \xed Dohop eru Node.js, React.js, Less, css modules,  Python \xed bakenda , Less, CSS modules and Amazon AWS."},{"title":"Advania","secondTitle":"2014-2017","content":"Hj\xe1 Advania hef \xe9g sinnt m\xf6rgum og fj\xf6lbreyttum verkefnum sem vefforritari s\xed\xf0astli\xf0inn 3 \xe1r. \xc9g hef g\xf3\xf0a reynslu b\xe6\xf0i \xed fram- og bakendaforritun en \xe9g hef \xfer\xf3a\xf0 og forrita\xf0 st\xf3ra vefi og vef\xfej\xf3nustur (REST og SOAP). Helsti styrkleiki minn liggur \xed Javascript og CSS, n\xe1nar tilteki\xf0 \xed Node.js, React me\xf0 Redux, SASS, LESS og CSS Modules."},{"title":"Launafl ehf.","secondTitle":"2012-2013","content":"Rafvirkjast\xf6rf \xe1 rafmagnsverkst\xe6\xf0i Launafls."},{"title":"Seljask\xf3li","secondTitle":"2009-2012","content":"Umsj\xf3nakennari \xe1 mi\xf0stigi \xed Seljask\xf3la. Einnig kenndi \xe9g valf\xf6g \xe1 unglingastigi, me\xf0al annars \xed\xfer\xf3ttafr\xe6\xf0i, gl\xedmu, f\xf3tbolta og almennar \xed\xfer\xf3ttir."},{"title":"Ungmennaf\xe9lagi\xf0 Valur","secondTitle":"2010-2012","content":"Umsj\xf3nama\xf0ur leikjan\xe1mskei\xf0a \xe1 sumrin hj\xe1 Ungmennaf\xe9laginu Val \xe1 Rey\xf0arfir\xf0i."},{"title":"\xc1rmann","secondTitle":"2009-2012","content":"Gl\xedmu\xfej\xe1lfari hj\xe1 Gl\xedmudeild \xc1rmanns. \xdej\xe1lfa\xf0i barna- og unglingaflokk sem og meistaraflokk."},{"title":"Japan","secondTitle":"2004-2005 ","content":"Lauk svarta beltinu og lag\xf0i stund \xe1 j\xfad\xf3 \xed Matsuyama, Japan \xed fimm m\xe1nu\xf0i \xe1samt \xfev\xed a\xf0 kenna grunn- og framhaldssk\xf3lanemum ensku."}],"images":[{"id":1,"url":"me1.jpg","thumbnail":"thumbnails/me1.jpg","text":"Hanoi, Vietnam"},{"id":2,"url":"me2.jpg","thumbnail":"thumbnails/me2.jpg","text":"Kaminarimon, Tokyo"}]},"education":{"title":"menntun","rows":[{"title":"H\xe1sk\xf3li \xcdslands","secondTitle":"2012-2015","content":"T\xf6lvunarfr\xe6\xf0i, B.S."},{"title":"Kennarah\xe1sk\xf3li \xcdslands","secondTitle":"2005-2008","content":"Grunnsk\xf3lakennarafr\xe6\xf0i, B.Ed. - Kj\xf6rsvi\xf0: St\xe6r\xf0fr\xe6\xf0i"},{"title":"Menntask\xf3linn \xe1 Egilsst\xf6\xf0um","secondTitle":"2000-2004","content":"St\xfadentspr\xf3f af n\xe1tt\xfarufr\xe6\xf0ibraut"}],"images":[{"id":3,"url":"me_and_solla3.jpg","thumbnail":"thumbnails/me_and_solla3.jpg","text":"\xdeorrabl\xf3t \xe1 Rey\xf0arfir\xf0i"},{"id":4,"url":"me4.jpg","thumbnail":"thumbnails/me4.jpg","text":"Luang Prabang, Laos"},{"id":5,"url":"me5.jpg","thumbnail":"thumbnails/me5.jpg","text":"Endurkynni vi\xf0 J\xfad\xf3 meistarann minn herra Bunji sensei \xed Matsuyama, Japan"},{"id":6,"url":"me6.jpg","thumbnail":"thumbnails/me6.jpg","text":"G\xf3\xf0ur bolli af v\xedetn\xf6msku kaffi \xed Hanoi, Vietnam"}]},"about":{"title":"um mig","text":"\xc9g heiti Sn\xe6r Seljan \xde\xf3roddsson og er f\xe6ddur 1983. \xc9g er fa\xf0ir, forritari, kennari, gl\xedmu- og j\xfad\xf3ma\xf0ur svo f\xe1tt eitt s\xe9 nefnt. \xc9g er uppalinn \xe1 Rey\xf0arfir\xf0i en hef b\xfai\xf0 \xed Reykjav\xedk s\xed\xf0an 2004. Af \xe1hugam\xe1lum ber helst a\xf0 nefna fj\xf6lskyldan, umhverfism\xe1l, forritun \\"au\xf0vita\xf0\\", veganismi, heilsa og hreyfing, kvikmyndir, \xfativera og n\xfana n\xfdlega yoga. M\xe9r \xfeykir f\xe1tt skemmtilegra en a\xf0 ey\xf0a t\xedma me\xf0 fj\xf6lskyldu e\xf0a forrita \xfeegar t\xedmi gefst.","images":[{"id":8,"url":"me_and_solla4.jpg","thumbnail":"thumbnails/me_and_solla4.jpg","text":"Kyoto, Japan"},{"id":10,"url":"me_and_embla.jpg","thumbnail":"thumbnails/me_and_embla.jpg","text":"\xc9g og Embla a\xf0 chilla \xed Elli\xf0a\xe1rdalnum"},{"id":7,"url":"me13.jpg","thumbnail":"thumbnails/me13.jpg","text":"Fushimi Inari Tori hli\xf0i\xf0 \xed Kyoto, Japan"},{"id":9,"url":"me7.jpg","thumbnail":"thumbnails/me7.jpg","text":"Bj\xf3runnandi"}]},"processbars":[{"title":"forritunarm\xe1l","mainTitle":"kunn\xe1tta","items":[{"name":"Javascript","percentage":95},{"name":"Typescript","percentage":80},{"name":"GraphQL","percentage":50},{"name":"C#","percentage":73},{"name":"JAVA","percentage":70},{"name":"Python","percentage":80},{"name":"Html","percentage":95},{"name":"CSS, SCSS, LESS","percentage":95}]},{"title":"javascript frameworks","items":[{"name":"React umgj\xf6r\xf0ir","percentage":99},{"name":"Node.js and Express","percentage":95},{"name":"React Native","percentage":70},{"name":"Vue","percentage":60},{"name":"Angular","percentage":60}]}],"projects":[{"title":"t\xf3mstundagaman","mainTitle":"verkefni","projects":[{"id":1,"image":"glima.png","thumbnail":"thumbnails/glima.png","url":"https://www.glima.is","text":"Forrita\xf0i og hanna\xf0i vefs\xed\xf0u Gl\xedmusambands \xcdslands","title":"glima.is (2019)","titleText":"\xcdslensk gl\xedma."},{"id":2,"image":"straumverk.png","thumbnail":"thumbnails/straumverk.png","url":"https://www.straumverk.is","text":"Forrita\xf0i og hanna\xf0i vefs\xed\xf0u Straumverk efhf","title":"straumverk.is (2017)","titleText":"Vefs\xed\xf0a straumverks."},{"id":3,"image":"biomynd_is.PNG","thumbnail":"thumbnails/biomynd_is.PNG","url":"http://www.biomynd.is","text":"Allt \xfea\xf0 sem \xfe\xfa vilt vita um b\xed\xf3myndir \xed s\xfdningu sem og v\xe6ntanlegar \xed kvikmyndh\xfas landsins.","title":"biomynd.is (2015)","titleText":"Allar myndir \xed b\xed\xf3 \xe1 einum sta\xf0"},{"id":4,"image":"api_kvikmyndir_is.jpg","thumbnail":"thumbnails/api_kvikmyndir_is.PNG","url":"http://api.kvikmyndir.is","text":"Icelandic movie API er fr\xed REST \xfej\xf3nusta sem hefur a\xf0 geyma allar uppl\xfdsingar um kvikmyndir \xed b\xed\xf3h\xfasum landsins.","title":"api.kvikmyndir.is (2016)","titleText":"B\xfa\xf0u til b\xed\xf3app, b\xed\xf3 vefs\xed\xf0u me\xf0 g\xf6gnunum fr\xe1 Icelandic movie API."}]},{"title":"Vinnutengd verkefni","text":"Helstu verkefni sem \xe9g hef unni\xf0 a\xf0 eru tengd framendaforritun en \xe9g hef einnig sinnt m\xf6rgum verkefnum \xed bakendaforritun. Minn styrkur liggur \xed framendanum, \xfe\xe1 s\xe9rstaklega \xed Javascript \\"frameworks\\" eins React.js, Vue.js, Next.js e\xf0a Gatsby.js. Svo er \xe9g einnig mj\xf6g f\xe6r \xed \\"Plain valnilla Javascript\\". Ekki m\xe1 gleyma a\xf0 \xe9g vinn vel me\xf0 \xf6\xf0rum og \xe9g er g\xf3\xf0ur teymisstj\xf3rnandi  Endilega hafi\xf0 samband <a href=\'mailto:snaerth@gmail.com\' class=\'reveal-text\' title=\'Senda p\xf3st til snaerth@gmail.com\'>snaerth@gmail.com</a> fyrir frekari uppl\xfdsingar."}],"images":[{"id":1,"url":"me1.jpg","thumbnail":"thumbnails/me1.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":2,"url":"me2.jpg","thumbnail":"thumbnails/me2.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":3,"url":"me3.jpg","thumbnail":"thumbnails/me3.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":4,"url":"me4.jpg","thumbnail":"thumbnails/me4.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":5,"url":"me5.jpg","thumbnail":"thumbnails/me5.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":6,"url":"me6.jpg","thumbnail":"thumbnails/me6.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":7,"url":"solla_1.jpg","thumbnail":"thumbnails/rsz_solla_1.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":8,"url":"solla_3.jpg","thumbnail":"thumbnails/rsz_solla_3.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":9,"url":"solla_4.jpg","thumbnail":"thumbnails/rsz_solla_4.jpg","text":"Dolor sit amet, consectetur adipiscing."}]}'
      );
    },
    31: function (e, t, a) {
      e.exports = a.p + "static/media/snaer_seljan_thoroddsson.d4b0ca1f.png";
    },
    39: function (e) {
      e.exports = JSON.parse(
        '{"name":"Sn\xe6r Seljan \xde\xf3roddsson","firstName":"sn\xe6r seljan","lastName":"\xfe\xf3roddsson","email":"snaerth@gmail.com","sendEmail":"Contact me","back":"Back","more":"More","resume":"Resume","contact":{"title":"Contact me","text":"If you\'d like to get in touch, you can send me an email directly at <a href=\'mailto:snaerth@gmail.com\' title=\'Send mail to snaerth@gmail.com\'>snaerth@gmail.com</a> or message me on <a href=\'https://www.facebook.com/snaerth\' title=\'Facebook\'>Facebook</a>","email":"snaerth@gmail.com","buttonText":"Send me an email"},"nav":[{"id":1,"text":"about me","active":true},{"id":2,"text":"education","active":false},{"id":3,"text":"career","active":false},{"id":4,"text":"skills","active":false},{"id":5,"text":"projects","active":false}],"career":{"title":"Career","rows":[{"title":"Dohop","secondTitle":"2017 - ","content":"In Dohop I have worked on a variety of projects. My job is a combination of production owner, technology leader and programming. The tools I have worked with most in Dohop are Node.js, React.js, Less, css modules, Python in the backend, Less,  CSS modules and Amazon AWS."},{"title":"Advania","secondTitle":"2014-2017","content":"At Advania I have worked on many various projects as a web developer for the past 3 years. I have good experience in both front- and backend development. I have programmed large websites and web services both REST and SOAP. My main strength lies in Javascript and CSS, more specifically in Node.js, React with Redux, SASS, LESS and CSS Modules."},{"title":"Launafl ehf.","secondTitle":"2012-2013","content":"Electricity work."},{"title":"Seljask\xf3li","secondTitle":"2009-2012","content":"Middle school teacher in Seljask\xf3li. I also taught optional subjects such as physical education, Icelandic wrestling, football and general sports."},{"title":"Ungmennaf\xe9lagi\xf0 Valur","secondTitle":"2010-2012","content":"Summer course supervisor for children\xb4s Youth Program Valur in Rey\xf0arfj\xf6r\xf0ur."},{"title":"\xc1rmann","secondTitle":"2009-2012","content":"Icelandic Glima wrestling coach at \xc1rmann Sports Club. I trained children and teenagers as well as adult champion courses."},{"title":"Japan","secondTitle":"2004-2005 ","content":"Obtained the black belt and practised Judo in Matsuyama, Japan for five months as well as teaching primary and secondary students English."}],"images":[{"id":1,"url":"me1.jpg","thumbnail":"thumbnails/me1.jpg","text":"Hanoi, Vietnam"},{"id":2,"url":"me2.jpg","thumbnail":"thumbnails/me2.jpg","text":"Kaminarimon, Tokyo"}]},"education":{"title":"Education","rows":[{"title":"University of Iceland","secondTitle":"2012-2015","content":"Computer Science, BS"},{"title":"University of Iceland","secondTitle":"2005-2008","content":"Bachelor of Education in Elementary Education, B.Ed. - Major in mathematics"},{"title":"High School of Egilssta\xf0ir","secondTitle":"2000-2004","content":"Matriculation course of natural science"}],"images":[{"id":3,"url":"me_and_solla3.jpg","thumbnail":"thumbnails/me_and_solla3.jpg","text":"\xdeorrabl\xf3t in Rey\xf0arfj\xf6r\xf0ur"},{"id":4,"url":"me4.jpg","thumbnail":"thumbnails/me4.jpg","text":"Luang Prabang, Laos"},{"id":5,"url":"me5.jpg","thumbnail":"thumbnails/me5.jpg","text":"Reunion with my Judo master Mr. Bunji sensei in Matsuyama, Japan"},{"id":6,"url":"me6.jpg","thumbnail":"thumbnails/me6.jpg","text":"Good cup of Vietnamese Weasel coffee Hanoi, Vietnam"}]},"about":{"title":"about me","text":"My name is Sn\xe6r Seljan \xde\xf3roddsson. I was born in 1983 and I grew up in Rey\xf0arfj\xf6r\xf0ur in the east of Iceland. I have lived in the capital Reykjavik since 2004. I am a father, programmer, teacher, Icelandic Glima wrestler and Judo man. Activities of interest include family, programming of course, environmental issues, veganisim, health and training, films, outdoor activities and recently yoga. In my spare time I love spending time with my family or hacking in some programming language.","images":[{"id":8,"url":"me_and_solla4.jpg","thumbnail":"thumbnails/me_and_solla4.jpg","text":"Kyoto, Japan"},{"id":10,"url":"me_and_embla.jpg","thumbnail":"thumbnails/me_and_embla.jpg","text":"Me and Embla chilling by the lake"},{"id":7,"url":"me13.jpg","thumbnail":"thumbnails/me13.jpg","text":"Fushimi Inari Tori Gates in Kyoto, Japan"},{"id":9,"url":"me7.jpg","thumbnail":"thumbnails/me7.jpg","text":"Beer enthusiast"}]},"processbars":[{"title":"programming languages","mainTitle":"skills","items":[{"name":"Javascript","percentage":95},{"name":"Typescript","percentage":80},{"name":"GraphQL","percentage":50},{"name":"C#","percentage":75},{"name":"JAVA","percentage":70},{"name":"Python","percentage":80},{"name":"Dart","percentage":50},{"name":"Html","percentage":95},{"name":"CSS, SCSS, LESS","percentage":95}]},{"title":"javascript frameworks","items":[{"name":"React frameworks","percentage":99},{"name":"Node.js and Express","percentage":95},{"name":"React Native","percentage":70},{"name":"Vue","percentage":60},{"name":"Angular","percentage":60}]}],"projects":[{"title":"Projects and hobby projects","mainTitle":"projects","projects":[{"id":1,"image":"glima.png","thumbnail":"thumbnails/glima.png","url":"https://www.glima.is","text":"Programmed and designed Icelandic Gl\xedma website","title":"glima.is (2019)","titleText":"Icelandic national sport Gl\xedma."},{"id":2,"image":"straumverk.png","thumbnail":"thumbnails/straumverk.png","url":"https://www.straumverk.is","text":"Programmed and designed Straumverk website","title":"straumverk.is (2017)","titleText":"Straumverk website."},{"id":3,"image":"biomynd_is.PNG","thumbnail":"thumbnails/biomynd_is.png","url":"http://www.biomynd.is","text":"Everything you want to know about movies both in screening and upcoming in Icelandic cinemas.","title":"biomynd.is (2015)","titleText":"All movies in cinemas in one place."},{"id":4,"image":"api_kvikmyndir_is.jpg","thumbnail":"thumbnails/api_kvikmyndir_is.png","url":"http://api.kvikmyndir.is","text":"Icelandic movie API is a free REST service for movies showing in Icelandic cinemas.","title":"api.kvikmyndir.is (2016)","titleText":"Free REST service for movies in Icelandic cinemas."}]},{"title":"Work projects","text":"The main tasks I\'ve worked on are related to frontend programming, but I have also worked on many projects in backend programming. My strength lies in the frontend, especially in Javascript frameworks like React.js, Vue.js, Next.js or Gatsby.js. I am also really good in plain vanilla Javascript. I work well with others and in teams. Please contact <a href=\'mailto:snaerth@gmail.com\' class=\'reveal-text\' title=\'Send mail to snaerth@gmail.com\'> snaerth@gmail.com </a> for further information."}],"images":[{"id":1,"url":"me1.jpg","thumbnail":"thumbnails/me1.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":2,"url":"me2.jpg","thumbnail":"thumbnails/me2.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":3,"url":"me3.jpg","thumbnail":"thumbnails/me3.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":4,"url":"me4.jpg","thumbnail":"thumbnails/me4.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":5,"url":"me5.jpg","thumbnail":"thumbnails/me5.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":6,"url":"me6.jpg","thumbnail":"thumbnails/me6.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":7,"url":"solla_1.jpg","thumbnail":"thumbnails/rsz_solla_1.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{"id":8,"url":"solla_3.jpg","thumbnail":"thumbnails/rsz_solla_3.jpg","text":"Dolor sit amet, consectetur adipiscing."},{"id":9,"url":"solla_4.jpg","thumbnail":"thumbnails/rsz_solla_4.jpg","text":"Dolor sit amet, consectetur adipiscing."}]}'
      );
    },
    44: function (e, t, a) {
      e.exports = a(71);
    },
    53: function (e, t, a) {},
    54: function (e, t, a) {},
    55: function (e, t, a) {},
    57: function (e, t, a) {},
    58: function (e, t, a) {},
    59: function (e, t, a) {},
    60: function (e, t, a) {},
    61: function (e, t, a) {},
    62: function (e, t, a) {},
    63: function (e, t, a) {},
    64: function (e, t, a) {},
    65: function (e, t, a) {},
    66: function (e, t, a) {},
    67: function (e, t, a) {},
    70: function (e, t, a) {},
    71: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = {};
      a.r(n),
        a.d(n, "setLanguage", function () {
          return N;
        }),
        a.d(n, "revealAnimationForward", function () {
          return S;
        }),
        a.d(n, "revealAnimationBackward", function () {
          return T;
        }),
        a.d(n, "removePageLoading", function () {
          return L;
        }),
        a.d(n, "addPageLoading", function () {
          return C;
        });
      var i = a(0),
        r = a.n(i),
        s = a(24),
        o = a(11),
        l = a(15),
        c = a(20),
        m = a(3),
        u = a(4),
        d = a(6),
        p = a(5),
        h = a(7),
        g = a(2),
        f = a(10),
        v = a(38),
        b = a.n(v),
        y = a(26),
        w = a(39),
        k = "reveal_animation_forward",
        j = "reveal_animation_backward",
        E = "set_language",
        x = "add_page_loading",
        O = "remove_page_loading";
      function N(e) {
        return {
          type: E,
          payload: { translations: "is" === e ? y : w, lang: e || "en" },
        };
      }
      function S() {
        return { type: k };
      }
      function T(e) {
        return { type: j, payload: e };
      }
      function L() {
        return function (e) {
          var t = new Date(),
            a = new Date().getTime() - t.getTime();
          if (!(a < 500))
            return document.body.classList.remove("loading"), { type: O };
          setTimeout(function () {
            document.body.classList.remove("loading"), e({ type: O });
          }, 500 - a);
        };
      }
      function C() {
        return document.body.classList.add("loading"), { type: x };
      }
      var _ = a(21),
        R = (function (e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(d.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: "componentWillUnmount",
                value: function () {
                  Object(_.a)(this.refs.image, !0);
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  e.common.showPage &&
                    !this.state.ie &&
                    Object(_.a)(this.refs.image, !0);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.src,
                    a = e.alt,
                    n = e.onClick,
                    i = e.className;
                  return r.a.createElement("div", {
                    style: { backgroundImage: "url(".concat(t, ")") },
                    role: "img",
                    "aria-label": a,
                    onClick: n,
                    className: i,
                    ref: "image",
                  });
                },
              },
            ]),
            t
          );
        })(i.Component);
      var A = Object(o.b)(function (e) {
          return { common: e.common };
        }, null)(R),
        I =
          (a(53),
          function (e) {
            var t = e.src,
              a = e.alt;
            return r.a.createElement(
              "div",
              { className: "image-container text-center" },
              r.a.createElement(A, { src: t, alt: a, className: "coverImage" }),
              r.a.createElement("div", { className: "overlay" })
            );
          }),
        P = a(12),
        H = a(9),
        V = a.n(H),
        M =
          (a(54),
          function (e) {
            var t = e.text,
              a = e.onClick,
              n = e.className,
              i = e.children;
            return r.a.createElement(
              "button",
              {
                className: V()(
                  "button button--moema",
                  "button--text-thick",
                  "button--text-upper",
                  "button--size-s",
                  n
                ),
                onClick: a,
              },
              t,
              i || null
            );
          }),
        D =
          (a(55),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(m.a)(this, t),
                ((a = Object(d.a)(
                  this,
                  Object(p.a)(t).call(this, e)
                )).clickHandler = a.clickHandler.bind(Object(P.a)(a))),
                a
              );
            }
            return (
              Object(h.a)(t, e),
              Object(u.a)(t, [
                {
                  key: "clickHandler",
                  value: function (e, t) {
                    e.preventDefault(),
                      this.props.actions.revealAnimationForward(),
                      setTimeout(this.props.history.push, 1500, "/" + t);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.translations;
                    return r.a.createElement(
                      "div",
                      { className: "content-container" },
                      r.a.createElement(
                        "div",
                        { className: "job-application--button-container" },
                        r.a.createElement(
                          l.b,
                          {
                            to: "/profile",
                            onClick: function (t) {
                              return e.clickHandler(t, "profile");
                            },
                          },
                          r.a.createElement(M, { text: t.resume })
                        ),
                        r.a.createElement(
                          l.b,
                          {
                            to: "/profile",
                            onClick: function (t) {
                              return e.clickHandler(t, "contact");
                            },
                          },
                          r.a.createElement(M, {
                            className: "hidden-mobile-480",
                            text: t.sendEmail,
                          })
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component));
      var X = Object(c.f)(
          Object(o.b)(
            function (e) {
              return {
                common: e.common,
                translations: e.common.translations,
                routing: e.routing,
              };
            },
            function (e) {
              return { actions: Object(f.b)(n, e) };
            }
          )(D)
        ),
        J = a(31),
        z = a.n(J),
        F =
          (a(57),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(m.a)(this, t),
                ((a = Object(d.a)(this, Object(p.a)(t).call(this, e))).state = {
                  tl: new g.d(),
                  dirty: !1,
                }),
                a
              );
            }
            return (
              Object(h.a)(t, e),
              Object(u.a)(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    b()(this.refs.mobileImage, { background: !0 }, function () {
                      e.props.actions.removePageLoading(), e.animateStart();
                    });
                  },
                },
                {
                  key: "animateStart",
                  value: function () {
                    var e = this.state.tl,
                      t = this.refs,
                      a = t.left,
                      n = t.right,
                      i = t.firstName,
                      r = t.lastName,
                      s = t.github,
                      o = t.githubMobile,
                      l = t.lang,
                      c = t.mobileImage;
                    e.set([i, r], { rotationX: -45 })
                      .to([a, n, c], 1.5, {
                        x: "0%",
                        opacity: 1,
                        ease: g.c.easeOut,
                      })
                      .to(
                        i,
                        1.5,
                        {
                          y: "0%",
                          opacity: 1,
                          transformOrigin: "0 50%",
                          rotationX: 0,
                          ease: g.c.easeOut,
                        },
                        0.8
                      )
                      .to(
                        r,
                        1.5,
                        {
                          y: "0%",
                          opacity: 1,
                          transformOrigin: "0 50%",
                          rotationX: 0,
                          ease: g.c.easeOut,
                        },
                        1
                      )
                      .to(
                        [s, o, l],
                        1,
                        { y: "0%", opacity: 1, ease: g.c.easeOut },
                        1
                      )
                      .play();
                  },
                },
                {
                  key: "changeLanguage",
                  value: function () {
                    var e = this;
                    this.props.actions.addPageLoading(),
                      setTimeout(function () {
                        e.props.actions.removePageLoading(),
                          e.props.actions.setLanguage(
                            "en" === e.props.common.lang ? "is" : "en"
                          );
                      }, 300);
                  },
                },
                {
                  key: "componentWillReceiveProps",
                  value: function (e) {
                    e.common.pageRevealer &&
                      this.state.tl.timeScale(3).reverse(),
                      this.props.common.backButtonPressed &&
                        !this.state.dirty &&
                        (this.setState({ dirty: !0 }),
                        this.state.tl.timeScale(1).restart());
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    return r.a.createElement(
                      "div",
                      { className: "container" },
                      r.a.createElement(
                        "h1",
                        { className: "name" },
                        r.a.createElement(
                          "span",
                          { ref: "firstName" },
                          this.props.translations.firstName
                        ),
                        r.a.createElement(
                          "span",
                          { ref: "lastName" },
                          this.props.translations.lastName
                        )
                      ),
                      r.a.createElement("div", {
                        ref: "mobileImage",
                        className: "mobile-background",
                        style: { backgroundImage: "url(".concat(z.a, ")") },
                      }),
                      r.a.createElement(
                        "span",
                        {
                          ref: "lang",
                          className: "language-wrapper",
                          onClick: function () {
                            return e.changeLanguage();
                          },
                        },
                        r.a.createElement(
                          "svg",
                          { className: "icon-globe" },
                          r.a.createElement("use", {
                            href: "#icon-globe",
                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                            xlinkHref: "#icon-globe",
                          })
                        ),
                        r.a.createElement(
                          "span",
                          { className: "language" },
                          "en" === this.props.common.lang ? "IS" : "EN"
                        )
                      ),
                      r.a.createElement(
                        "a",
                        {
                          ref: "githubMobile",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          href: "https://github.com/snaerth/resume-example",
                          className: "github-link mobile",
                        },
                        r.a.createElement(
                          "svg",
                          { className: "icon-github" },
                          r.a.createElement("use", {
                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                            xlinkHref: "#icon-github",
                          })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-50" },
                        r.a.createElement(
                          "div",
                          { className: "left", ref: "left" },
                          r.a.createElement(X, null)
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-50" },
                        r.a.createElement(
                          "a",
                          {
                            ref: "github",
                            href: "https://github.com/snaerth?tab=repositories",
                            className: "github-link",
                          },
                          r.a.createElement(
                            "svg",
                            { className: "icon-github" },
                            r.a.createElement("use", {
                              xmlnsXlink: "http://www.w3.org/1999/xlink",
                              xlinkHref: "#icon-github",
                            })
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "right", ref: "right" },
                          r.a.createElement(I, {
                            src: z.a,
                            alt: "Sn\xe6r Seljan \xde\xf3roddsson",
                          })
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component));
      var W = Object(o.b)(
          function (e) {
            return { common: e.common, translations: e.common.translations };
          },
          function (e) {
            return { actions: Object(f.b)(n, e) };
          }
        )(F),
        B = a(32),
        G =
          (a(58),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(m.a)(this, t),
                ((a = Object(d.a)(
                  this,
                  Object(p.a)(t).call(this, e)
                )).animateProcessbar = a.animateProcessbar.bind(
                  Object(P.a)(a)
                )),
                (a.resize = a.resize.bind(Object(P.a)(a))),
                (a.state = { tl: new g.e() }),
                a
              );
            }
            return (
              Object(h.a)(t, e),
              Object(u.a)(t, [
                {
                  key: "resize",
                  value: function () {
                    for (
                      var e = new g.d(), t = 0, a = this.props.data.length;
                      t < a;
                      t++
                    ) {
                      var n = this.refs["processcounter-" + t],
                        i = this.refs["processbar-" + t];
                      if (i) {
                        var r = this.props.data[t].percentage,
                          s =
                            (r / 100) *
                            (i.viewportElement.clientWidth ||
                              i.parentNode.parentNode.clientWidth);
                        e.to(n, 0.3, { x: s, ease: g.c.easeOut }, "-=0.3").to(
                          i,
                          0.5,
                          { attr: { width: r + "%" }, ease: g.c.easeOut },
                          "-=0.5"
                        );
                      }
                    }
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    window.addEventListener("resize", this.resize);
                    var e = this.state.tl;
                    e.add(this.animateTitle(), 1),
                      e.add(this.animateColumns(), 1.5),
                      e.add(this.animateProcessbar(), 1.5);
                  },
                },
                {
                  key: "animateTitle",
                  value: function () {
                    var e = new g.d(),
                      t = this.refs["title-" + this.props.id];
                    return (
                      e
                        .set(t, { rotationX: -45 })
                        .to(
                          t,
                          1,
                          {
                            y: "0%",
                            opacity: 1,
                            transformOrigin: "0 50%",
                            rotationX: 0,
                            ease: g.c.easeOut,
                          },
                          0.2
                        ),
                      e
                    );
                  },
                },
                {
                  key: "animateColumns",
                  value: function () {
                    var e = this.props.id,
                      t = new g.d(),
                      a = new g.d(),
                      n = new g.d(),
                      i = new g.d();
                    return (
                      t.set(
                        ".processbar-row--container",
                        { autoAlpha: 1 },
                        1.6
                      ),
                      n
                        .set(".processbar-left-" + e, {
                          autoAlpha: 0,
                          x: "-200px",
                        })
                        .staggerTo(
                          ".processbar-left-" + e,
                          1,
                          {
                            autoAlpha: 1,
                            x: "0%",
                            ease: g.a.easeOut,
                            easeParams: [0.9, 1],
                          },
                          1.4
                        ),
                      i
                        .set(".processbar-right-" + e, {
                          autoAlpha: 0,
                          x: "200px",
                        })
                        .staggerTo(
                          ".processbar-right-" + e,
                          1,
                          {
                            autoAlpha: 1,
                            x: "0%",
                            ease: g.a.easeOut,
                            easeParams: [0.9, 1],
                          },
                          1.4
                        ),
                      a.add(n, 0),
                      a.add(i, 0),
                      a
                    );
                  },
                },
                {
                  key: "animateProcessbar",
                  value: function () {
                    for (
                      var e = this,
                        t = new g.d(),
                        a = [],
                        n = function (n, i) {
                          var r = e.refs["processcounter-" + n],
                            s = e.refs["processbar-" + n],
                            o = e.props.data[n].percentage,
                            l =
                              (o / 100) *
                              (s.viewportElement.clientWidth ||
                                s.parentNode.parentNode.clientWidth);
                          a.push({ score: 0 }),
                            t
                              .set(r, {
                                autoAlpha: 0,
                                scale: 0,
                                z: 0.01,
                                y: "20px",
                              })
                              .to(r, 1.5, {
                                scale: 1,
                                y: "0%",
                                autoAlpha: 1,
                                ease: g.a.easeOut,
                                easeParams: [1.2, 0.3],
                              })
                              .to(r, 1.5, { x: l, ease: g.c.easeOut }, "-=1.5")
                              .to(
                                a[n],
                                1.5,
                                {
                                  score: "+=" + o,
                                  roundProps: "score",
                                  onUpdate: function () {
                                    r.children[0].innerHTML = a[n].score;
                                  },
                                  ease: g.b.easeNone,
                                },
                                "-=1.5"
                              )
                              .to(
                                s,
                                1.5,
                                { attr: { width: o + "%" }, ease: g.c.easeOut },
                                "-=1.5"
                              );
                        },
                        i = 0,
                        r = this.props.data.length;
                      i < r;
                      i++
                    )
                      n(i);
                    return t;
                  },
                },
                {
                  key: "renderRows",
                  value: function (e, t) {
                    var a = this;
                    return e.map(function (e, n) {
                      return r.a.createElement(
                        "div",
                        { className: "processbar-row", key: n },
                        r.a.createElement(
                          "div",
                          {
                            className: V()(
                              "processbar-left",
                              "processbar-left-" + t
                            ),
                          },
                          r.a.createElement("h2", null, e.name)
                        ),
                        r.a.createElement(
                          "div",
                          {
                            className: V()(
                              "processbar-right",
                              "processbar-right-" + t
                            ),
                          },
                          r.a.createElement(
                            "span",
                            {
                              className: "processbar-counter",
                              ref: "processcounter-" + n,
                            },
                            r.a.createElement("span", null, "0"),
                            r.a.createElement("span", null, "%")
                          ),
                          r.a.createElement(
                            "div",
                            null,
                            r.a.createElement(
                              "svg",
                              {
                                viewBox: "0 0 622 20",
                                preserveAspectRatio: "xMidYMid meet",
                                className: "processbar-svg",
                                ref: "svg",
                                height: a.props.height,
                                width: "100%",
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg",
                              },
                              r.a.createElement("rect", {
                                height: a.props.height,
                                fill: "#CCCCCC",
                                width: "100%",
                              }),
                              r.a.createElement("rect", {
                                height: a.props.height,
                                fill: "#FF92F6",
                                width: "0",
                                ref: "processbar-" + n,
                              })
                            )
                          )
                        )
                      );
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.data,
                      a = e.id,
                      n = e.title;
                    return r.a.createElement(
                      "div",
                      { className: "processbar-container" },
                      r.a.createElement(
                        "h2",
                        { className: "name processbars-header" },
                        r.a.createElement("span", { ref: "title-" + a }, n)
                      ),
                      r.a.createElement(
                        "div",
                        { className: "processbar-row--container" },
                        this.renderRows(t, a)
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component)),
        U =
          (a(59),
          (function (e) {
            function t() {
              var e, a;
              Object(m.a)(this, t);
              for (
                var n = arguments.length, s = new Array(n), o = 0;
                o < n;
                o++
              )
                s[o] = arguments[o];
              return (
                ((a = Object(d.a)(
                  this,
                  (e = Object(p.a)(t)).call.apply(e, [this].concat(s))
                )).titleRef = Object(i.createRef)()),
                (a.state = { componentRenderCount: 0, titleVisible: !1 }),
                (a.renderRows = function (e, t) {
                  var n = a.props,
                    i = n.processbars,
                    s = n.visibleArr,
                    o = a.state.titleVisible;
                  return (
                    s[t] &&
                      a.titleRef &&
                      a.titleRef.current &&
                      !o &&
                      a.animateTitle(a.titleRef.current.children[0]),
                    r.a.createElement(
                      "div",
                      { key: t },
                      r.a.createElement(
                        "div",
                        {
                          className: V()(
                            "onscroll-reveal processbars",
                            "processbar" + t
                          ),
                        },
                        s[t] &&
                          r.a.createElement(G, {
                            height: 20,
                            data: i[t].items,
                            id: t,
                            title: i[t].title,
                          })
                      )
                    )
                  );
                }),
                a
              );
            }
            return (
              Object(h.a)(t, e),
              Object(u.a)(t, [
                {
                  key: "shouldComponentUpdate",
                  value: function (e, t) {
                    return t.componentRenderCount <= e.visibleArr.length + 2;
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e, t) {
                    var a = t.titleVisible;
                    e.visibleArr === this.props.visibleArr ||
                      a ||
                      this.setState({ titleVisible: !0 });
                  },
                },
                {
                  key: "animateTitle",
                  value: function (e) {
                    new g.d()
                      .set(e, { rotationX: -45 })
                      .to(
                        e,
                        1.5,
                        {
                          y: "0%",
                          opacity: 1,
                          transformOrigin: "0 50%",
                          rotationX: 0,
                          ease: g.c.easeOut,
                        },
                        0.5
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.title,
                      a = e.visibleArr;
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "h1",
                        {
                          className: "name visible relative",
                          ref: this.titleRef,
                        },
                        r.a.createElement("span", null, t)
                      ),
                      r.a.createElement(
                        "div",
                        { className: "processbars-list-container" },
                        a.map(this.renderRows)
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component)),
        Y = [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335,
          292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335,
          312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298,
          284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335,
          323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428,
          417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298,
          291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437,
          428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
          329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265,
          261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428,
          422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354,
          350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298,
          294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507,
          501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437,
          433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
          377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
          332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297,
          294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265,
          263, 261, 259,
        ],
        q = [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17,
          17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19,
          19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20,
          20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        ];
      function K(e, t, a, n) {
        var i = e.naturalWidth,
          r = e.naturalHeight,
          s = r / i;
        (t.parentNode.style.height = s * t.clientWidth + "px"),
          (t.width = i),
          (t.height = r);
        var o = t.getContext("2d");
        o.clearRect(0, 0, i, r),
          o.drawImage(e, 0, 0),
          isNaN(a) ||
            a < 1 ||
            (function (e, t, a, n, i, r) {
              if (isNaN(r) || r < 1) return;
              r |= 0;
              var s = (function (e, t, a, n, i) {
                var r = e.getContext("2d"),
                  s = null;
                try {
                  try {
                    s = r.getImageData(t, a, n, i);
                  } catch (o) {
                    throw new Error("unable to access local image data: " + o);
                  }
                } catch (o) {
                  throw new Error("unable to access image data: " + o);
                }
                return s;
              })(e, t, a, n, i);
              (s = (function (e, t, a, n, i, r) {
                var s,
                  o,
                  l,
                  c,
                  m,
                  u,
                  d,
                  p,
                  h,
                  g,
                  f,
                  v,
                  b,
                  y,
                  w,
                  k,
                  j,
                  E,
                  x,
                  O,
                  N = e.data,
                  S = r + r + 1,
                  T = n - 1,
                  L = i - 1,
                  C = r + 1,
                  _ = (C * (C + 1)) / 2,
                  R = new Q(),
                  A = R,
                  I = null;
                for (l = 1; l < S; l++)
                  (A = A.next = new Q()), l === C && (I = A);
                A.next = R;
                var P = null,
                  H = null;
                d = u = 0;
                var V = Y[r],
                  M = q[r];
                for (o = 0; o < i; o++) {
                  for (
                    y = w = k = p = h = g = 0,
                      f = C * (j = N[u]),
                      v = C * (E = N[u + 1]),
                      b = C * (x = N[u + 2]),
                      p += _ * j,
                      h += _ * E,
                      g += _ * x,
                      A = R,
                      l = 0;
                    l < C;
                    l++
                  )
                    (A.r = j), (A.g = E), (A.b = x), (A = A.next);
                  for (l = 1; l < C; l++)
                    (c = u + ((T < l ? T : l) << 2)),
                      (p += (A.r = j = N[c]) * (O = C - l)),
                      (h += (A.g = E = N[c + 1]) * O),
                      (g += (A.b = x = N[c + 2]) * O),
                      (y += j),
                      (w += E),
                      (k += x),
                      (A = A.next);
                  for (P = R, H = I, s = 0; s < n; s++)
                    (N[u] = (p * V) >> M),
                      (N[u + 1] = (h * V) >> M),
                      (N[u + 2] = (g * V) >> M),
                      (p -= f),
                      (h -= v),
                      (g -= b),
                      (f -= P.r),
                      (v -= P.g),
                      (b -= P.b),
                      (c = (d + ((c = s + r + 1) < T ? c : T)) << 2),
                      (y += P.r = N[c]),
                      (w += P.g = N[c + 1]),
                      (k += P.b = N[c + 2]),
                      (p += y),
                      (h += w),
                      (g += k),
                      (P = P.next),
                      (f += j = H.r),
                      (v += E = H.g),
                      (b += x = H.b),
                      (y -= j),
                      (w -= E),
                      (k -= x),
                      (H = H.next),
                      (u += 4);
                  d += n;
                }
                for (s = 0; s < n; s++) {
                  for (
                    w = k = y = h = g = p = 0,
                      f = C * (j = N[(u = s << 2)]),
                      v = C * (E = N[u + 1]),
                      b = C * (x = N[u + 2]),
                      p += _ * j,
                      h += _ * E,
                      g += _ * x,
                      A = R,
                      l = 0;
                    l < C;
                    l++
                  )
                    (A.r = j), (A.g = E), (A.b = x), (A = A.next);
                  for (m = n, l = 1; l <= r; l++)
                    (u = (m + s) << 2),
                      (p += (A.r = j = N[u]) * (O = C - l)),
                      (h += (A.g = E = N[u + 1]) * O),
                      (g += (A.b = x = N[u + 2]) * O),
                      (y += j),
                      (w += E),
                      (k += x),
                      (A = A.next),
                      l < L && (m += n);
                  for (u = s, P = R, H = I, o = 0; o < i; o++)
                    (N[(c = u << 2)] = (p * V) >> M),
                      (N[c + 1] = (h * V) >> M),
                      (N[c + 2] = (g * V) >> M),
                      (p -= f),
                      (h -= v),
                      (g -= b),
                      (f -= P.r),
                      (v -= P.g),
                      (b -= P.b),
                      (c = (s + ((c = o + C) < L ? c : L) * n) << 2),
                      (p += y += P.r = N[c]),
                      (h += w += P.g = N[c + 1]),
                      (g += k += P.b = N[c + 2]),
                      (P = P.next),
                      (f += j = H.r),
                      (v += E = H.g),
                      (b += x = H.b),
                      (y -= j),
                      (w -= E),
                      (k -= x),
                      (H = H.next),
                      (u += n);
                }
                return e;
              })(s, 0, 0, n, i, r)),
                e.getContext("2d").putImageData(s, t, a);
            })(t, 0, 0, i, r, a);
      }
      function Q() {
        (this.r = 0),
          (this.g = 0),
          (this.b = 0),
          (this.a = 0),
          (this.next = null);
      }
      a(60);
      var Z = (function (e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(d.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.blur,
                    n = t.thumbnail,
                    i = new Image();
                  (i.src = n || "images/thumbnails/placeholder.png"),
                    (i.onload = function () {
                      var t = e.refs.canvas;
                      K(i, t, a || 10);
                    });
                },
              },
              {
                key: "loadBigImage",
                value: function (e) {
                  var t = this,
                    a = new Image();
                  (a.src = e),
                    (a.onload = function () {
                      t.refs.canvas.parentNode.classList.add("heightAuto"),
                        t.refs.canvas.classList.add("image-blur--image--hide"),
                        t.refs.image.classList.add("image-blur--image--show");
                    });
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e) {
                  return !0 === e.visible;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.src,
                    a = e.alt,
                    n = e.className,
                    i = e.text,
                    s = e.overlay,
                    o = e.overlayText,
                    l = e.overlayTitle,
                    c = e.visible;
                  return (
                    !0 === c && this.loadBigImage(t),
                    r.a.createElement(
                      "div",
                      {
                        className: V()("image-blur--wrapper", n),
                        ref: "wrapper",
                      },
                      r.a.createElement(
                        "figure",
                        { className: "image-blur--wrapper-image" },
                        r.a.createElement(
                          "div",
                          null,
                          r.a.createElement("img", {
                            src: c ? t : "",
                            alt: a,
                            className: "image-blur--image",
                            ref: "image",
                          }),
                          r.a.createElement("canvas", {
                            ref: "canvas",
                            className: "image-blur--canvas",
                          })
                        ),
                        s
                          ? r.a.createElement(
                              "div",
                              { className: "image-blur--wrapper-overlay" },
                              r.a.createElement("h2", null, l),
                              r.a.createElement("p", null, o)
                            )
                          : null
                      ),
                      i
                        ? r.a.createElement(
                            "figcaption",
                            null,
                            r.a.createElement("p", null, i)
                          )
                        : null
                    )
                  );
                },
              },
            ]),
            t
          );
        })(i.Component),
        $ =
          (a(61),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(m.a)(this, t),
                ((a = Object(d.a)(this, Object(p.a)(t).call(this, e))).state = {
                  tl: new g.d(),
                  hasShown: !1,
                }),
                a
              );
            }
            return (
              Object(h.a)(t, e),
              Object(u.a)(t, [
                {
                  key: "componentWillUpdate",
                  value: function (e, t) {
                    var a = this;
                    !1 === t.hasShown &&
                      (this.setState(function (e, t) {
                        return { hasShown: !0 };
                      }),
                      this.animateTitle(this.refs.title.children[0]),
                      setTimeout(function () {
                        a.animateComponent();
                      }, 1200));
                  },
                },
                {
                  key: "shouldComponentUpdate",
                  value: function (e, t) {
                    return e.visible && !t.hasShown;
                  },
                },
                {
                  key: "animateComponent",
                  value: function () {
                    for (
                      var e = this.state.tl,
                        t = this.refs.container.children,
                        a = [],
                        n = [],
                        i = 0,
                        r = t.length;
                      i < r;
                      i++
                    )
                      if ("H1" !== t[i].tagName) {
                        a.push(t[i].children[0]);
                        for (
                          var s = t[i].children[1].children,
                            o = 0,
                            l = s.length;
                          o < l;
                          o++
                        )
                          s[o].children[0] && n.push(s[o].children[0]);
                      }
                    e.staggerTo(
                      a,
                      1.5,
                      {
                        y: "0%",
                        autoAlpha: 1,
                        ease: g.a.easeOut,
                        easeParams: [0.9, 1],
                      },
                      1
                    ).staggerTo(
                      n,
                      1.5,
                      {
                        y: "0%",
                        autoAlpha: 1,
                        ease: g.a.easeOut,
                        easeParams: [0.9, 1],
                      },
                      0.1,
                      0.3
                    );
                  },
                },
                {
                  key: "renderHobbyProjects",
                  value: function (e) {
                    var t = this.props.visible;
                    return e.map(function (e, a) {
                      var n = e.id,
                        i = e.url,
                        s = e.image,
                        o = e.thumbnail,
                        l = e.text,
                        c = e.title,
                        m = e.titleText;
                      return r.a.createElement(
                        "a",
                        {
                          href: i,
                          title: l,
                          key: "project-image" + a,
                          className: "project",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        r.a.createElement(
                          "div",
                          { className: "even" },
                          r.a.createElement(Z, {
                            id: n,
                            src: "images/" + s,
                            thumbnail: "images/" + o,
                            alt: l,
                            text: l,
                            overlay: !0,
                            overlayTitle: c,
                            overlayText: m,
                            visible: t,
                          })
                        )
                      );
                    });
                  },
                },
                {
                  key: "animateTitle",
                  value: function (e) {
                    new g.d()
                      .set(e, { rotationX: -45 })
                      .to(
                        e,
                        1.5,
                        {
                          y: "0%",
                          opacity: 1,
                          transformOrigin: "0 50%",
                          rotationX: 0,
                          ease: g.c.easeOut,
                        },
                        0.5
                      );
                  },
                },
                {
                  key: "renderSection",
                  value: function (e) {
                    var t = this,
                      a = this.props.visible;
                    return e.map(function (e, n) {
                      var s = e.title,
                        o = e.projects,
                        l = e.text,
                        c = 1 === n ? "work-header" : "";
                      return r.a.createElement(
                        "div",
                        { key: "project-" + n },
                        r.a.createElement(
                          "h2",
                          { className: V()("project-header", c) },
                          r.a.createElement("span", null, s)
                        ),
                        r.a.createElement(
                          "div",
                          { className: "image-blur--container" },
                          0 === n
                            ? r.a.createElement(
                                i.Fragment,
                                null,
                                t.renderHobbyProjects(o),
                                r.a.createElement(
                                  "a",
                                  {
                                    href: "https://github.com/snaerth/create-react-component-folder/",
                                    title: l,
                                    key: "project-image-5",
                                    className: "project",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  },
                                  r.a.createElement(
                                    "div",
                                    { className: "even" },
                                    r.a.createElement(Z, {
                                      id: 5,
                                      src: "images/crcf.png",
                                      alt: "Create react component folder",
                                      text: "Hj\xe1lpart\xf3l til a\xf0 b\xfaa til m\xf6ppu str\xfaktur fyrir React e\xf0a React Native me\xf0 einni skipun",
                                      overlay: !0,
                                      overlayTitle:
                                        "Create react component folder (2018)",
                                      visible: a,
                                    })
                                  )
                                )
                              )
                            : null,
                          1 === n
                            ? r.a.createElement("p", {
                                className: "work-text",
                                dangerouslySetInnerHTML: { __html: l },
                              })
                            : null
                        )
                      );
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.data,
                      a = e.visible;
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "h1",
                        {
                          className: "name visible relative name-project",
                          ref: "title",
                        },
                        r.a.createElement("span", null, t[0].mainTitle)
                      ),
                      r.a.createElement(
                        "div",
                        {
                          className: "projects-list-container",
                          ref: "container",
                        },
                        a ? this.renderSection(t) : null
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component)),
        ee = (function (e) {
          function t() {
            var e;
            return (
              Object(m.a)(this, t),
              ((e = Object(d.a)(this, Object(p.a)(t).call(this))).state = {
                hasShown: !1,
              }),
              e
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: "componentWillUpdate",
                value: function (e, t) {
                  !1 === t.hasShown &&
                    this.setState(function (e, t) {
                      return { hasShown: !0 };
                    });
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                  return e.visible && !t.hasShown;
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = new g.d();
                  (e = e[0].classList.contains("odd") ? [e[1], e[0]] : e),
                    t.staggerTo(
                      e,
                      1,
                      { y: "0%", opacity: 1, ease: g.c.easeOut },
                      0.2
                    );
                },
              },
              {
                key: "renderCol",
                value: function (e) {
                  var t = this;
                  return e.map(function (e, a) {
                    return t.renderImages(e);
                  });
                },
              },
              {
                key: "renderImages",
                value: function (e) {
                  var t = this.props.visible;
                  return r.a.createElement(Z, {
                    key: e.id,
                    id: e.id,
                    src: "images/" + e.url,
                    thumbnail: "images/" + e.thumbnail,
                    alt: e.text,
                    text: e.text,
                    visible: t,
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.left,
                    a = e.right,
                    n = e.type;
                  return (
                    !0 === e.visible &&
                      this.startAnimation(this.refs.container.children),
                    r.a.createElement(
                      "div",
                      { className: "image-blur--container", ref: "container" },
                      r.a.createElement(
                        "div",
                        { className: n || "even" },
                        this.renderCol(t)
                      ),
                      r.a.createElement(
                        "div",
                        { className: n || "odd" },
                        this.renderCol(a)
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(i.Component),
        te =
          (a(62),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(m.a)(this, t),
                ((a = Object(d.a)(
                  this,
                  Object(p.a)(t).call(this, e)
                )).onClickHandler = a.onClickHandler.bind(Object(P.a)(a))),
                (a.state = { tl: new g.d() }),
                a
              );
            }
            return (
              Object(h.a)(t, e),
              Object(u.a)(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = window.innerWidth,
                      t = this.refs.ul,
                      a = this.state.tl,
                      n = { x: "0%", opacity: 1, ease: g.c.easeOut };
                    e <= 1500 &&
                      (n = { y: "0%", opacity: 1, ease: g.c.easeOut }),
                      a.staggerTo(t.children, 0.7, n, 0.1).pause(),
                      setTimeout(function () {
                        a.play();
                      }, 1e3);
                  },
                },
                {
                  key: "onClickHandler",
                  value: function (e) {
                    var t = document.querySelector(
                      'div[data-navid="' + e + '"]'
                    );
                    window.scroll(0, 0 !== e ? t.offsetTop - 50 : 0);
                  },
                },
                {
                  key: "componentWillReceiveProps",
                  value: function (e) {
                    !0 === e.common.back &&
                      this.state.tl.timeScale(4).reverse();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props,
                      a = t.links,
                      n = t.linksState;
                    return r.a.createElement(
                      "nav",
                      null,
                      r.a.createElement(
                        "ul",
                        { className: "nav", ref: "ul" },
                        a.map(function (t, a) {
                          var i = n[a] ? "active" : "";
                          return r.a.createElement(
                            "li",
                            {
                              key: t.id,
                              className: i,
                              onClick: function () {
                                return e.onClickHandler(a);
                              },
                            },
                            t.text,
                            r.a.createElement(
                              "svg",
                              { className: V()("icon-line", i) },
                              r.a.createElement("use", {
                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                xlinkHref: "#svg_line",
                              })
                            )
                          );
                        })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component));
      var ae = Object(o.b)(function (e) {
          return { common: e.common };
        }, null)(te),
        ne =
          (a(63),
          function () {
            return r.a.createElement(
              "div",
              { className: "container-wave" },
              r.a.createElement(
                "svg",
                {
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 500 70",
                  preserveAspectRatio: "xMinYMin slice",
                },
                r.a.createElement("path", {
                  d: "M0,50 C200,100 200,0 500,50 L500,00 L0,0 Z",
                })
              )
            );
          }),
        ie =
          (a(64),
          (function (e) {
            function t(e) {
              var a;
              Object(m.a)(this, t);
              var n = (a = Object(d.a)(this, Object(p.a)(t).call(this, e)))
                  .props.translations,
                i = n.processbars,
                r = n.nav;
              return (
                (a.back = a.back.bind(Object(P.a)(a))),
                (a.removeHiddenClass = a.removeHiddenClass.bind(
                  Object(P.a)(a)
                )),
                (a.state = {
                  tl: new g.d(),
                  processbarVisible: i.map(function () {
                    return !1;
                  }),
                  sectionsVisible: [!1, !1, !1],
                  projectsVisible: !1,
                  imagesVisible: [!1, !1, !1],
                  linksState: r.map(function (e, t) {
                    return e.active;
                  }),
                }),
                a
              );
            }
            return (
              Object(h.a)(t, e),
              Object(u.a)(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.initElementInViewportChecker();
                    var e = this.refs,
                      t = e.back,
                      a = e.title,
                      n = this.state.tl,
                      i = a.parentNode.nextSibling;
                    this.animateTitle(a, n),
                      n
                        .to(
                          t,
                          1,
                          { x: "0%", opacity: 1, ease: g.c.easeOut },
                          0.2
                        )
                        .pause(),
                      n
                        .to(
                          i,
                          1,
                          { y: "0%", opacity: 1, ease: g.c.easeOut },
                          "-=0.4"
                        )
                        .play();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    Object(_.b)(!0);
                  },
                },
                {
                  key: "initElementInViewportChecker",
                  value: function () {
                    var e = this,
                      t = this,
                      a = 0,
                      n =
                        document.querySelectorAll(".onscroll-reveal").length -
                        4,
                      i = 0,
                      r = !1;
                    Object(_.b)(
                      null,
                      "onscroll-reveal",
                      "inViewport",
                      function (s, o) {
                        if (s && o.classList.contains("resume-section")) {
                          var l = parseInt(
                            o.attributes["data-navid"].value,
                            10
                          );
                          i !== l && ((i = l), e.setActiveNavLink(l));
                        }
                        if (s && !o.isAnimated && !r) {
                          var c = e.state,
                            m = c.imagesVisible,
                            u = c.processbarVisible;
                          if (
                            (o.classList.contains("processbars") &&
                              (e.changeStateVisibility(
                                o,
                                u,
                                "processbarVisible",
                                "processbar"
                              ),
                              (o.isAnimated = !0),
                              a++),
                            o.classList.contains("images-container") &&
                              (e.changeStateVisibility(
                                o,
                                m,
                                "imagesVisible",
                                "images-container"
                              ),
                              (o.isAnimated = !0),
                              a++),
                            o.classList.contains("projects-wrapper") &&
                              (e.setState(function (e, t) {
                                return { projectsVisible: !0 };
                              }),
                              (o.isAnimated = !0),
                              a++),
                            o.classList.contains("resume-section"))
                          ) {
                            var d = o.attributes["data-navid"].value,
                              p = t.refs["rows" + d];
                            p &&
                              (t.animateSections(p.children, 3),
                              (o.isAnimated = !0));
                          }
                          a === n && (r = !0);
                        }
                      }
                    );
                  },
                },
                {
                  key: "setActiveNavLink",
                  value: function (e) {
                    var t = this.state.linksState.map(function () {
                      return !1;
                    });
                    (t[e] = !0),
                      this.setState(function (e, a) {
                        return { linksState: t };
                      });
                  },
                },
                {
                  key: "changeStateVisibility",
                  value: function (e, t, a, n) {
                    for (
                      var i = Object(B.a)(t), r = {}, s = 0, o = t.length;
                      s < o;
                      s++
                    )
                      e.classList.contains(n + s) && !i[s] && (i[s] = !0);
                    (r[a] = i),
                      this.setState(function () {
                        return r;
                      });
                  },
                },
                {
                  key: "animateSections",
                  value: function (e, t, a) {
                    if (e.length > 0) {
                      a = a || new g.d();
                      var n = 0,
                        i =
                          e[0].parentNode && e[0].parentNode.previousSibling
                            ? e[0].parentNode.previousSibling
                            : null;
                      i &&
                        (this.animateTitle(i.children[0], a), t || (n = 0.8));
                      for (var r = t || e.length, s = 0; s < r; s++)
                        for (
                          var o = e[s].children, l = 0, c = o.length;
                          l < c;
                          l++
                        ) {
                          var m = 0.4 + (s + 1) / 10 + (l + s + 1) / 10;
                          a.to(
                            o[l],
                            1,
                            { y: "0%", opacity: 1, ease: g.c.easeOut },
                            m + n
                          );
                        }
                      a.play();
                    }
                  },
                },
                {
                  key: "animateTitle",
                  value: function (e, t) {
                    return t
                      .set(e, { rotationX: -45 })
                      .to(
                        e,
                        1.5,
                        {
                          y: "0%",
                          opacity: 1,
                          transformOrigin: "0 50%",
                          rotationX: 0,
                          ease: g.c.easeOut,
                        },
                        0.5
                      );
                  },
                },
                {
                  key: "back",
                  value: function (e) {
                    e.preventDefault(),
                      this.refs["images-container0"].classList.add("fadeOut"),
                      this.state.tl.timeScale(4).reverse(),
                      this.props.actions.revealAnimationBackward(),
                      setTimeout(this.props.history.push, 1500, "/");
                  },
                },
                {
                  key: "renderSection",
                  value: function (e, t, a) {
                    var n = this,
                      i = this.props.translations.more,
                      s = e.rows ? this.renderRows(e.rows, t) : null,
                      o = this.renderColImages(e.images, t);
                    return r.a.createElement(
                      "div",
                      {
                        className: V()("resume-section onscroll-reveal"),
                        "data-navid": t,
                        key: t,
                        ref: "section" + t,
                      },
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(
                          "h1",
                          { className: "name visible relative" },
                          r.a.createElement(
                            "span",
                            { ref: 0 === t ? "title" : "" },
                            e.title
                          )
                        ),
                        s
                          ? r.a.createElement(
                              "div",
                              {
                                className: "resume-section--row",
                                ref: "rows" + t,
                              },
                              s,
                              s.length > 3
                                ? r.a.createElement(
                                    "div",
                                    { className: "text-center" },
                                    r.a.createElement(
                                      "button",
                                      {
                                        ref: "morebutton" + t,
                                        className: "more",
                                        onClick: function (e) {
                                          return n.removeHiddenClass(e, t, s);
                                        },
                                      },
                                      i
                                    )
                                  )
                                : null
                            )
                          : null,
                        e.text
                          ? r.a.createElement(
                              "div",
                              {
                                className: V()(
                                  "resume-section--row",
                                  0 === t ? "first" : ""
                                ),
                              },
                              r.a.createElement(
                                "div",
                                { className: "resume-row" },
                                r.a.createElement(
                                  "p",
                                  { className: "max-1000 text-section" },
                                  e.text
                                )
                              )
                            )
                          : null,
                        o || null
                      ),
                      r.a.createElement(ne, null)
                    );
                  },
                },
                {
                  key: "renderColImages",
                  value: function (e, t) {
                    for (
                      var a = this.state.imagesVisible,
                        n = [],
                        i = [],
                        s = 0,
                        o = e.length;
                      s < o;
                      s++
                    )
                      s % 2 === 0 ? n.push(e[s]) : i.push(e[s]);
                    return r.a.createElement(
                      "div",
                      {
                        className: V()(
                          "onscroll-reveal",
                          "images-container",
                          "images-container" + t
                        ),
                        ref: "images-container" + t,
                      },
                      r.a.createElement(ee, {
                        left: n,
                        right: i,
                        type: t % 2 !== 0 ? "odd" : "even",
                        visible: a[t],
                      })
                    );
                  },
                },
                {
                  key: "renderRows",
                  value: function (e, t) {
                    var a = this;
                    return e.map(function (e, n) {
                      var i =
                        !a.state.sectionsVisible[t] && n > 2 ? "hidden" : "";
                      return r.a.createElement(
                        "div",
                        { className: V()("resume-row", i), key: "row-" + n },
                        r.a.createElement(
                          "div",
                          { className: "resume-left" },
                          r.a.createElement("h2", null, e.title),
                          r.a.createElement("h2", null, e.secondTitle)
                        ),
                        r.a.createElement(
                          "div",
                          { className: "resume-right" },
                          r.a.createElement("p", null, e.content)
                        )
                      );
                    });
                  },
                },
                {
                  key: "removeHiddenClass",
                  value: function (e, t, a) {
                    var n = this;
                    e.preventDefault();
                    var i = Object(B.a)(this.state.sectionsVisible);
                    i[t] = !0;
                    var r = [];
                    a = this.refs["rows" + t].children;
                    for (var s = 3; s < a.length; s++) {
                      a[s].className.indexOf("hidden") > 1 && r.push(a[s]);
                    }
                    var o = this.refs["morebutton" + t];
                    o.classList.add("fadeOutButton"),
                      setTimeout(function () {
                        o.classList.add("hidden"),
                          n.setState(function (e, t) {
                            return { sectionsVisible: i };
                          });
                      }, 250),
                      this.animateSections(r);
                  },
                },
                {
                  key: "renderProcessbarsList",
                  value: function (e, t, a) {
                    return r.a.createElement(
                      "div",
                      {
                        className: "resume-section onscroll-reveal",
                        "data-navid": a,
                      },
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement(U, {
                          processbars: e,
                          visibleArr: t,
                          title: e[0].mainTitle,
                        })
                      ),
                      r.a.createElement(ne, null)
                    );
                  },
                },
                {
                  key: "renderProjects",
                  value: function (e, t) {
                    var a = this.state.projectsVisible;
                    return r.a.createElement(
                      "div",
                      {
                        className:
                          "resume-section onscroll-reveal projects-wrapper",
                        "data-navid": t,
                      },
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement($, { data: e, visible: a })
                      )
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.translations,
                      a = t.processbars,
                      n = t.career,
                      i = t.education,
                      s = t.projects,
                      o = t.about,
                      c = t.nav,
                      m = this.state,
                      u = m.processbarVisible,
                      d = m.linksState;
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        l.b,
                        {
                          to: "/",
                          onClick: function (t) {
                            return e.back(t);
                          },
                        },
                        r.a.createElement(
                          "div",
                          {
                            className: V()(
                              "job-application--button-container",
                              "button-left",
                              "button-left--offset",
                              "button-back--fixed"
                            ),
                            ref: "back",
                          },
                          r.a.createElement(M, { text: t.back })
                        )
                      ),
                      r.a.createElement(ae, { links: c, linksState: d }),
                      r.a.createElement(
                        "div",
                        { className: "resume-container", ref: "container" },
                        this.renderSection(o, 0),
                        this.renderSection(i, 1),
                        this.renderSection(n, 2),
                        this.renderProcessbarsList(a, u, 3),
                        this.renderProjects(s, 4)
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component));
      var re = Object(c.f)(
          Object(o.b)(
            function (e) {
              return { common: e.common, translations: e.common.translations };
            },
            function (e) {
              return { actions: Object(f.b)(n, e) };
            }
          )(ie)
        ),
        se =
          (a(65),
          function () {
            return r.a.createElement(
              "div",
              { className: "page-container" },
              r.a.createElement(re, null)
            );
          }),
        oe =
          (a(66),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(m.a)(this, t),
                ((a = Object(d.a)(this, Object(p.a)(t).call(this, e))).back =
                  a.back.bind(Object(P.a)(a))),
                (a.state = { tl: new g.d() }),
                a
              );
            }
            return (
              Object(h.a)(t, e),
              Object(u.a)(t, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this.refs,
                      t = e.back,
                      a = e.title,
                      n = e.text,
                      i = e.button,
                      r = this.state.tl;
                    this.animateTitle(a, r),
                      r
                        .to(
                          t,
                          1,
                          { x: "0%", opacity: 1, ease: g.c.easeOut },
                          0.2
                        )
                        .pause(),
                      r
                        .to(
                          n,
                          1,
                          { y: "0%", opacity: 1, ease: g.c.easeOut },
                          "-=0.8"
                        )
                        .to(
                          i,
                          0.4,
                          { scale: 1, opacity: 1, ease: g.c.easeOut },
                          "-=0.6"
                        )
                        .play();
                    for (
                      var s = n.children[0].children,
                        o = function (e) {
                          setTimeout(function () {
                            s[e].classList.add("reveal-text");
                          }, 800 * (e + 1));
                        },
                        l = 0;
                      l < s.length;
                      l++
                    )
                      o(l);
                  },
                },
                {
                  key: "animateTitle",
                  value: function (e, t) {
                    return t
                      .set(e, { rotationX: -45 })
                      .to(
                        e,
                        1.5,
                        {
                          y: "0%",
                          opacity: 1,
                          transformOrigin: "0 50%",
                          rotationX: 0,
                          ease: g.c.easeOut,
                        },
                        0.5
                      );
                  },
                },
                {
                  key: "back",
                  value: function (e) {
                    e.preventDefault(),
                      this.state.tl.timeScale(4).reverse(),
                      this.props.actions.revealAnimationBackward(),
                      setTimeout(this.props.history.push, 1500, "/");
                  },
                },
                {
                  key: "emailHandler",
                  value: function (e) {
                    var t = new g.d(),
                      a = this.refs.svg;
                    return (
                      t
                        .to(a, 1, { x: "-15px", y: "-15px", ease: g.a.easeIn })
                        .to(a, 1, {
                          x: "1000px",
                          y: "-1000px",
                          ease: g.c.easeOut,
                        })
                        .set(a, { x: 0, y: 0 }),
                      setTimeout(function () {
                        window.location.href = "mailto:" + e;
                      }, 2e3),
                      !1
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.translations,
                      a = t.email,
                      n = t.back,
                      i = t.contact,
                      s = i.text,
                      o = i.buttonText,
                      c = i.title;
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        l.b,
                        {
                          to: "/",
                          onClick: function (t) {
                            return e.back(t);
                          },
                        },
                        r.a.createElement(
                          "div",
                          {
                            className: V()(
                              "job-application--button-container",
                              "button-left",
                              "button-left--offset"
                            ),
                            ref: "back",
                          },
                          r.a.createElement(M, { text: n })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "resume-container", ref: "container" },
                        r.a.createElement(
                          "div",
                          { className: "resume-section" },
                          r.a.createElement(
                            "div",
                            null,
                            r.a.createElement(
                              "h1",
                              {
                                className:
                                  "name visible relative text-center no-padding",
                              },
                              r.a.createElement("span", { ref: "title" }, c)
                            ),
                            r.a.createElement(
                              "div",
                              { className: "resume-section--row max-768" },
                              r.a.createElement(
                                "div",
                                {
                                  className: "resume-row hidden-element",
                                  ref: "text",
                                },
                                r.a.createElement("p", {
                                  className: "text-section text-center",
                                  dangerouslySetInnerHTML: { __html: s },
                                })
                              ),
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "resume-row flex-center email-button-wrapper",
                                  ref: "button",
                                },
                                r.a.createElement(
                                  M,
                                  {
                                    text: o,
                                    onClick: function () {
                                      return e.emailHandler(a);
                                    },
                                    className: "max-width-300 pr-60",
                                  },
                                  r.a.createElement(
                                    "span",
                                    {
                                      className: "plane-container",
                                      ref: "svg",
                                    },
                                    r.a.createElement(
                                      "svg",
                                      { className: "icon-paperplane" },
                                      r.a.createElement("use", {
                                        xmlnsXlink:
                                          "http://www.w3.org/1999/xlink",
                                        xlinkHref: "#icon-paperplane",
                                      })
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component));
      var le = Object(c.f)(
          Object(o.b)(
            function (e) {
              return { common: e.common, translations: e.common.translations };
            },
            function (e) {
              return { actions: Object(f.b)(n, e) };
            }
          )(oe)
        ),
        ce = function () {
          return r.a.createElement(
            "div",
            { className: "page-container" },
            r.a.createElement(le, null)
          );
        },
        me =
          (a(67),
          (function (e) {
            function t() {
              return (
                Object(m.a)(this, t),
                Object(d.a)(this, Object(p.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(h.a)(t, e),
              Object(u.a)(t, [
                {
                  key: "componentWillMount",
                  value: function () {
                    var e = this.props.staticContext;
                    e && (e.status = 404);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "section",
                        { className: "notfound_container" },
                        r.a.createElement(
                          "div",
                          { className: "notfound_center" },
                          r.a.createElement(
                            "h1",
                            {
                              className:
                                "name visible relative text-center no-padding",
                            },
                            "404"
                          ),
                          r.a.createElement(
                            "p",
                            { className: "text-section text-center" },
                            "The page you were looking for was not found."
                          ),
                          r.a.createElement(
                            l.b,
                            { to: "/" },
                            r.a.createElement(
                              "div",
                              {
                                className: "job-application--button-container",
                              },
                              r.a.createElement(M, { text: "Go back to Home" })
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(i.Component)),
        ue = (function (e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(d.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.type,
                    a = e.visible
                      ? "anim--effect-" + t + " revealer--" + t
                      : "";
                  return r.a.createElement(
                    "div",
                    { className: V()("revealer revealer--animate", a) },
                    r.a.createElement("div", { className: "layer" }),
                    r.a.createElement("div", { className: "layer" })
                  );
                },
              },
            ]),
            t
          );
        })(i.Component),
        de = (function (e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(d.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(u.a)(t, [
              {
                key: "componentWillMount",
                value: function () {
                  this.props.actions.setLanguage("is"),
                    window.location && "/" === window.location.pathname
                      ? document.body.classList.remove("loading")
                      : this.props.actions.removePageLoading();
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(c.c, null, this.props.children),
                    r.a.createElement(ue, {
                      type: this.props.common.pageRevealerType,
                      visible: this.props.common.pageRevealer,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(i.Component);
      var pe = Object(c.f)(
          Object(o.b)(
            function (e) {
              return { common: e.common };
            },
            function (e) {
              return { actions: Object(f.b)(n, e) };
            }
          )(de)
        ),
        he = a(41);
      function ge(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ge(a, !0).forEach(function (t) {
                Object(he.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ge(a).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var ve = {
          pageRevealer: !1,
          pageRevealerType: "top",
          translations: y,
          lang: "is",
        },
        be = a(42),
        ye = Object(f.c)({
          common: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ve,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case x:
              case O:
                return fe({}, e, { pageRevealer: !1 });
              case E:
                return fe({}, e, {
                  translations: t.payload.translations,
                  pageRevealer: !1,
                  lang: t.payload.lang,
                });
              case k:
                return fe({}, e, {
                  pageRevealer: !0,
                  pageRevealerType: "top",
                  back: !1,
                  backButtonPressed: !1,
                });
              case j:
                return fe({}, e, {
                  pageRevealer: !0,
                  pageRevealerType: "bottom",
                  back: !0,
                  backButtonPressed: t.payload,
                });
              default:
                return fe({}, e);
            }
          },
          routing: be.routerReducer,
        }),
        we = a(43);
      a(70);
      var ke,
        je = Object(f.e)(
          ye,
          ke,
          Object(f.d)(
            Object(f.a)(we.a),
            "object" === typeof window &&
              "undefined" !== typeof window.devToolsExtension
              ? window.devToolsExtension()
              : function (e) {
                  return e;
                }
          )
        );
      window.store = je;
      var Ee = "pushState" in window.history;
      Object(s.render)(
        r.a.createElement(
          o.a,
          { store: je },
          r.a.createElement(
            l.a,
            { forceRefresh: !Ee },
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                pe,
                null,
                r.a.createElement(c.a, { exact: !0, path: "/", component: W }),
                r.a.createElement(c.a, { path: "/profile", component: se }),
                r.a.createElement(c.a, { path: "/contact", component: ce }),
                r.a.createElement(c.a, { path: "/contact", component: ce }),
                r.a.createElement(c.a, { component: me })
              )
            )
          )
        ),
        document.getElementById("root")
      );
    },
  },
  [[44, 1, 2]],
]);
//# sourceMappingURL=main.c1901c1a.chunk.js.map
