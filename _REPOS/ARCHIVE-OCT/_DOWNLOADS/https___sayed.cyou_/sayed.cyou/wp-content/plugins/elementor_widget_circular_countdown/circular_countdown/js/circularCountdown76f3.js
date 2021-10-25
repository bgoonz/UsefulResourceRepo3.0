/*
 * Circular Countdown v3.1
 *
 * Copyright 2013-2021, LambertGroup
 *
 */

(function (f) {
  function C(a, c) {
    a.remainingDays = Math.floor(a.totalRemainingSeconds / a.secondsInADay);
    a.remainingHours = Math.floor(
      (a.totalRemainingSeconds - a.remainingDays * a.secondsInADay) /
        a.secondsInAnHour
    );
    a.remainingMinutes = Math.floor(
      (a.totalRemainingSeconds -
        a.remainingDays * a.secondsInADay -
        a.remainingHours * a.secondsInAnHour) /
        a.secondsInAMinute
    );
    a.remainingSeconds =
      a.totalRemainingSeconds -
      a.remainingDays * a.secondsInADay -
      a.remainingHours * a.secondsInAnHour -
      a.remainingMinutes * a.secondsInAMinute;
  }
  function w(a, c, e, m, k, l, p, d, g, x, y, z, A, v, h) {
    if (0 <= d.totalRemainingSeconds) {
      switch (a) {
        case "seconds":
          var n =
            (2 * (60 - d.remainingSeconds) * Math.PI) / 60 - 0.5 * Math.PI;
          d.secondsNumberDiv.html(d.remainingSeconds);
          break;
        case "minutes":
          n = (2 * (60 - d.remainingMinutes) * Math.PI) / 60 - 0.5 * Math.PI;
          d.minutesNumberDiv.html(d.remainingMinutes);
          break;
        case "hours":
          n = (2 * (24 - d.remainingHours) * Math.PI) / 24 - 0.5 * Math.PI;
          d.hoursNumberDiv.html(d.remainingHours);
          break;
        case "days":
          n =
            (2 * (d.entireWorkingDaysPeriod - d.remainingDays) * Math.PI) /
              d.entireWorkingDaysPeriod -
            0.5 * Math.PI;
          d.daysNumberDiv.html(d.remainingDays);
          break;
        default:
          n = (2 * (60 - d.remainingSeconds) * Math.PI) / 60 - 0.5 * Math.PI;
      }
      "days" == a && h && F(g, d, x, y, z, A);
      (-1 != v && 9 > v) ||
        (c.clearRect(0, 0, e.width, e.height),
        c.beginPath(),
        (c.globalAlpha = m / 100),
        c.arc(
          parseInt(
            (g.circleRadius +
              (g.circleLineWidth + g.behindCircleLineWidthExpand) / 2 +
              g.circleLeftRightPadding) *
              d.pluginRatio,
            10
          ),
          parseInt(
            (g.circleRadius +
              (g.circleLineWidth + g.behindCircleLineWidthExpand) / 2 +
              g.circleTopBottomPadding) *
              d.pluginRatio,
            10
          ),
          parseInt(g.circleRadius * d.pluginRatio, 10),
          0,
          2 * Math.PI,
          !1
        ),
        (c.lineWidth = parseInt(
          (g.circleLineWidth + g.behindCircleLineWidthExpand) * d.pluginRatio,
          10
        )),
        (c.strokeStyle = k),
        c.stroke(),
        c.closePath(),
        c.beginPath(),
        (c.globalAlpha = l / 100),
        c.arc(
          parseInt(
            (g.circleRadius +
              (g.circleLineWidth + g.behindCircleLineWidthExpand) / 2 +
              g.circleLeftRightPadding) *
              d.pluginRatio,
            10
          ),
          parseInt(
            (g.circleRadius +
              (g.circleLineWidth + g.behindCircleLineWidthExpand) / 2 +
              g.circleTopBottomPadding) *
              d.pluginRatio,
            10
          ),
          g.circleRadius * d.pluginRatio,
          -0.5 * Math.PI,
          n,
          !1
        ),
        (c.lineWidth = parseInt(g.circleLineWidth * d.pluginRatio, 10)),
        (c.strokeStyle = p),
        c.stroke(),
        c.closePath());
      "seconds" == a && d.remainingSeconds--;
      0 > d.remainingSeconds && C(d, g);
    } else if ("seconds" == a && 0 >= d.repetitionNo)
      if (f.isFunction(g.complete))
        d.repetitionNo++,
          clearInterval(d.intervalIDSeconds),
          g.complete.call(this);
      else if (g.autoReset24h) {
        resetNo = 0;
        d.totalRemainingSeconds = -1;
        d.new_nowD = new Date();
        for (
          theIntervalNowDate =
            Date.UTC(
              d.new_nowD.getFullYear(),
              d.new_nowD.getMonth(),
              d.new_nowD.getDate(),
              d.new_nowD.getHours(),
              d.new_nowD.getMinutes(),
              d.new_nowD.getSeconds()
            ) /
              1e3 -
            Date.UTC(
              d.nowD.getFullYear(),
              d.nowD.getMonth(),
              d.nowD.getDate(),
              d.nowD.getHours(),
              d.nowD.getMinutes(),
              d.nowD.getSeconds()
            ) /
              1e3;
          0 > d.totalRemainingSeconds;

        )
          resetNo++,
            (g.beginDate = g.launchingDate),
            (g.launchingDate += 86400),
            (d.totalRemainingSeconds =
              "" == g.nowDate
                ? g.launchingDate -
                  Date.UTC(
                    d.new_nowD.getFullYear(),
                    d.new_nowD.getMonth(),
                    d.new_nowD.getDate(),
                    d.new_nowD.getHours(),
                    d.new_nowD.getMinutes(),
                    d.new_nowD.getSeconds()
                  ) /
                    1e3
                : g.launchingDate -
                  (Date.UTC(
                    parseInt(nowDate_arr[0], 10),
                    parseInt(nowDate_arr[1], 10) - 1,
                    parseInt(nowDate_arr[2], 10),
                    parseInt(nowDate_arr[3], 10),
                    parseInt(nowDate_arr[4], 10),
                    parseInt(nowDate_arr[5], 10)
                  ) /
                    1e3 +
                    theIntervalNowDate));
        d.entireWorkingDaysPeriod = Math.floor(
          (g.launchingDate - g.beginDate) / d.secondsInADay
        );
        C(d, g);
      }
  }
  function F(a, c, e, m, k, l) {
    f(".innerNumber", e).css({
      display: "block",
      left:
        parseInt((c.canvasWidth - f(".innerNumber", e).width()) / 2, 10) + "px",
      top:
        parseInt(
          (c.canvasHeight - f(".innerNumber", e).height()) / 2 -
            a.numberAdditionalTopPadding,
          10
        ) + "px",
    });
    f(".innerNumber", m).css({
      display: "block",
      left:
        parseInt((c.canvasWidth - f(".innerNumber", m).width()) / 2, 10) + "px",
      top:
        parseInt(
          (c.canvasHeight - f(".innerNumber", m).height()) / 2 -
            a.numberAdditionalTopPadding,
          10
        ) + "px",
    });
    f(".innerNumber", k).css({
      display: "block",
      left:
        parseInt((c.canvasWidth - f(".innerNumber", k).width()) / 2, 10) + "px",
      top:
        parseInt(
          (c.canvasHeight - f(".innerNumber", k).height()) / 2 -
            a.numberAdditionalTopPadding,
          10
        ) + "px",
    });
    f(".innerNumber", l).css({
      display: "block",
      left:
        parseInt((c.canvasWidth - f(".innerNumber", l).width()) / 2, 10) + "px",
      top:
        parseInt(
          (c.canvasHeight - f(".innerNumber", l).height()) / 2 -
            a.numberAdditionalTopPadding,
          10
        ) + "px",
    });
  }
  function G(a, c, e, m, k, l, p, d, g, x, y, z, A) {
    var v = D();
    e = e.parent().parent().width();
    c.origWidth != e &&
      (e > c.origWidth && (e = c.origWidth),
      c.origWidth > e || c.prevOrigWidth != e) &&
      ((c.prevOrigWidth = e),
      (a.pluginRatio = e / c.origWidth),
      (a.canvasWidth = parseInt(a.canvasOrigWidth * a.pluginRatio, 10)),
      (a.canvasHeight = parseInt(a.canvasOrigHeight * a.pluginRatio, 10)),
      (a.canvasDays.width = a.canvasWidth),
      (a.canvasDays.height = a.canvasHeight),
      k.css({
        width: parseInt(a.unitDivOrigWidthDays * a.pluginRatio, 10) + "px",
        height: parseInt(a.unitDivOrigHeightDays * a.pluginRatio, 10) + "px",
      }),
      (a.canvasHours.width = a.canvasWidth),
      (a.canvasHours.height = a.canvasHeight),
      l.css({
        width: parseInt(a.unitDivOrigWidthHours * a.pluginRatio, 10) + "px",
        height: parseInt(a.unitDivOrigHeightHours * a.pluginRatio, 10) + "px",
      }),
      (a.canvasMinutes.width = a.canvasWidth),
      (a.canvasMinutes.height = a.canvasHeight),
      p.css({
        width: parseInt(a.unitDivOrigWidthMinutes * a.pluginRatio, 10) + "px",
        height: parseInt(a.unitDivOrigHeightMinutes * a.pluginRatio, 10) + "px",
      }),
      (a.canvasSeconds.width = a.canvasWidth),
      (a.canvasSeconds.height = a.canvasHeight),
      d.css({
        width: parseInt(a.unitDivOrigWidthSeconds * a.pluginRatio, 10) + "px",
        height: parseInt(a.unitDivOrigHeightSeconds * a.pluginRatio, 10) + "px",
      }),
      (e = 0),
      -1 != v && 9 > v && (e = a.canvasHeight),
      f(".innerNumber", k).css({
        "font-size": parseInt(c.numberSize * a.pluginRatio, 10) + "px",
        "line-height": parseInt(c.numberSize * a.pluginRatio, 10) + "px",
      }),
      f(".innerText", k).css({
        top: e + "px",
        "font-size": parseInt(c.textSize * a.pluginRatio, 10) + "px",
        "line-height": parseInt(c.textSize * a.pluginRatio, 10) + "px",
        "margin-top": parseInt(c.textMarginTop * a.pluginRatio, 10) + "px",
        "padding-top": parseInt(c.textPadding * a.pluginRatio, 10) + "px",
        "padding-bottom": parseInt(c.textPadding * a.pluginRatio, 10) + "px",
      }),
      f(".innerNumber", l).css({
        "font-size": parseInt(c.numberSize * a.pluginRatio, 10) + "px",
        "line-height": parseInt(c.numberSize * a.pluginRatio, 10) + "px",
      }),
      f(".innerText", l).css({
        top: e + "px",
        "font-size": parseInt(c.textSize * a.pluginRatio, 10) + "px",
        "line-height": parseInt(c.textSize * a.pluginRatio, 10) + "px",
        "margin-top": parseInt(c.textMarginTop * a.pluginRatio, 10) + "px",
        "padding-top": parseInt(c.textPadding * a.pluginRatio, 10) + "px",
        "padding-bottom": parseInt(c.textPadding * a.pluginRatio, 10) + "px",
      }),
      f(".innerNumber", p).css({
        "font-size": parseInt(c.numberSize * a.pluginRatio, 10) + "px",
        "line-height": parseInt(c.numberSize * a.pluginRatio, 10) + "px",
      }),
      f(".innerText", p).css({
        top: e + "px",
        "font-size": parseInt(c.textSize * a.pluginRatio, 10) + "px",
        "line-height": parseInt(c.textSize * a.pluginRatio, 10) + "px",
        "margin-top": parseInt(c.textMarginTop * a.pluginRatio, 10) + "px",
        "padding-top": parseInt(c.textPadding * a.pluginRatio, 10) + "px",
        "padding-bottom": parseInt(c.textPadding * a.pluginRatio, 10) + "px",
      }),
      f(".innerNumber", d).css({
        "font-size": parseInt(c.numberSize * a.pluginRatio, 10) + "px",
        "line-height": parseInt(c.numberSize * a.pluginRatio, 10) + "px",
      }),
      f(".innerText", d).css({
        top: e + "px",
        "font-size": parseInt(c.textSize * a.pluginRatio, 10) + "px",
        "line-height": parseInt(c.textSize * a.pluginRatio, 10) + "px",
        "margin-top": parseInt(c.textMarginTop * a.pluginRatio, 10) + "px",
        "padding-top": parseInt(c.textPadding * a.pluginRatio, 10) + "px",
        "padding-bottom": parseInt(c.textPadding * a.pluginRatio, 10) + "px",
      }),
      g.css({
        width: parseInt(c.origWidth * a.pluginRatio, 10) + 2 + "px",
        "margin-top":
          parseInt(c.allCirclesTopMargin * a.pluginRatio, 10) + "px",
        "margin-bottom":
          parseInt(c.allCirclesBottomMargin * a.pluginRatio, 10) + "px",
      }),
      y.css({
        "font-family": c.pluginFontFamily,
        "font-size":
          Math.max(10, parseInt(c.h2Size * a.pluginRatio, 10)) + "px",
        "line-height":
          Math.max(10, parseInt(c.h2Size * a.pluginRatio, 10)) + "px",
        "margin-top":
          Math.max(10, parseInt(c.h2TopMargin * a.pluginRatio, 10)) + "px",
      }),
      z.css({
        "font-family": c.pluginFontFamily,
        "font-size": Math.max(8, parseInt(c.h3Size * a.pluginRatio, 10)) + "px",
        "line-height":
          Math.max(8, parseInt(c.h3Size * a.pluginRatio, 10)) + "px",
        "margin-top": parseInt(c.h3TopMargin * a.pluginRatio, 10) + "px",
      }),
      A.css({
        "font-family": c.pluginFontFamily,
        "font-size": Math.max(6, parseInt(c.h4Size * a.pluginRatio, 10)) + "px",
        "line-height":
          Math.max(6, parseInt(c.h4Size * a.pluginRatio, 10)) + "px",
        "margin-top": parseInt(c.h4TopMargin * a.pluginRatio, 10) + "px",
      }),
      m.css({ width: parseInt(c.origWidth * a.pluginRatio, 10) + "px" }),
      x.css({ width: parseInt(c.origWidth * a.pluginRatio, 10) + "px" }));
  }
  function D() {
    var a = -1;
    "Microsoft Internet Explorer" == navigator.appName &&
      null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) &&
      (a = parseFloat(RegExp.$1));
    return parseInt(a, 10);
  }
  function u(a) {
    var c = !1;
    a = a.substr(a.length - 4).toLowerCase();
    if (".jpg" == a || ".png" == a || ".gif" == a) c = !0;
    return c;
  }
  f.fn.circularCountdown = function (a) {
    a = f.extend({}, f.fn.circularCountdown.defaults, a);
    return this.each(function () {
      var c = f(this),
        e = f("<div></div>").addClass("circularCountdown").addClass(a.type);
      c.wrap(e);
      var m = c.parent(".circularCountdown"),
        k = f(".secondsDiv", m),
        l = f(".minutesDiv", m),
        p = f(".hoursDiv", m),
        d = f(".daysDiv", m),
        g = f(".theCircles", m);
      c = f(".socialIcons", m);
      var x = f(".socialIconsDiv", m),
        y = f(".logoDiv", m),
        z = f("h2", m),
        A = f("h3", m),
        v = f("h4", m),
        h = "",
        n = (e = e = ""),
        q = "",
        r = "",
        t = D();
      m.css({ "font-family": a.pluginFontFamily });
      e = a.beginDate.split(",");
      n = a.launchingDate.split(",");
      a.beginDate =
        Date.UTC(
          parseInt(e[0], 10),
          parseInt(e[1], 10) - 1,
          parseInt(e[2], 10),
          parseInt(e[3], 10),
          parseInt(e[4], 10),
          parseInt(e[5], 10)
        ) / 1e3;
      a.launchingDate =
        Date.UTC(
          parseInt(n[0], 10),
          parseInt(n[1], 10) - 1,
          parseInt(n[2], 10),
          parseInt(n[3], 10),
          parseInt(n[4], 10),
          parseInt(n[5], 10)
        ) / 1e3;
      var b = {
        nowD: new Date(),
        secondsInADay: 86400,
        secondsInAnHour: 3600,
        secondsInAMinute: 60,
        entireWorkingDaysPeriod: 0,
        totalRemainingSeconds: 0,
        remainingDays: 0,
        remainingHours: 0,
        remainingMinutes: 0,
        remainingSeconds: 0,
        canvasSeconds: "",
        ctxSeconds: "",
        secondsNumberDiv: f(".innerNumber", k),
        canvasMinutes: "",
        ctxMinutes: "",
        minutesNumberDiv: f(".innerNumber", l),
        canvasHours: "",
        ctxHours: "",
        hoursNumberDiv: f(".innerNumber", p),
        canvasDays: "",
        ctxDays: "",
        daysNumberDiv: f(".innerNumber", d),
        canvasWidth: 0,
        canvasOrigWidth: 0,
        canvasHeight: 0,
        canvasOrigHeight: 0,
        unitDivOrigWidth: 0,
        unitDivOrigHeight: 0,
        unitDivOrigWidthDays: 0,
        unitDivOrigHeightDays: 0,
        unitDivOrigWidthHours: 0,
        unitDivOrigHeightHours: 0,
        unitDivOrigWidthMinutes: 0,
        unitDivOrigHeightMinutes: 0,
        unitDivOrigWidthSeconds: 0,
        unitDivOrigHeightSeconds: 0,
        pluginRatio: 1,
        repetitionNo: 0,
      };
      b.entireWorkingDaysPeriod = Math.floor(
        (a.launchingDate - a.beginDate) / b.secondsInADay
      );
      e = a.nowDate.split(",");
      b.totalRemainingSeconds =
        "" == a.nowDate
          ? a.launchingDate -
            Date.UTC(
              b.nowD.getFullYear(),
              b.nowD.getMonth(),
              b.nowD.getDate(),
              b.nowD.getHours(),
              b.nowD.getMinutes(),
              b.nowD.getSeconds()
            ) /
              1e3
          : a.launchingDate -
            Date.UTC(
              parseInt(e[0], 10),
              parseInt(e[1], 10) - 1,
              parseInt(e[2], 10),
              parseInt(e[3], 10),
              parseInt(e[4], 10),
              parseInt(e[5], 10)
            ) /
              1e3;
      C(b, a);
      b.canvasWidth =
        2 * a.circleRadius +
        a.circleLineWidth +
        a.behindCircleLineWidthExpand +
        2 * a.circleLeftRightPadding;
      b.canvasHeight =
        2 * a.circleRadius +
        a.circleLineWidth +
        a.behindCircleLineWidthExpand +
        2 * a.circleTopBottomPadding;
      b.canvasOrigWidth = b.canvasWidth;
      b.canvasOrigHeight = b.canvasHeight;
      (-1 != t && 9 > t) ||
        ((b.canvasDays = f(".canvasDays", m)[0]),
        (b.canvasDays.width = b.canvasWidth),
        (b.canvasDays.height = b.canvasHeight),
        (b.ctxDays = b.canvasDays.getContext("2d")),
        w(
          "days",
          b.ctxDays,
          b.canvasDays,
          a.behindCircleAlphaDays,
          a.behindCircleColorDays,
          a.circleAlphaDays,
          a.circleColorDays,
          b,
          a,
          d,
          p,
          l,
          k,
          t,
          0
        ),
        (b.canvasHours = f(".canvasHours", m)[0]),
        (b.canvasHours.width = b.canvasWidth),
        (b.canvasHours.height = b.canvasHeight),
        (b.ctxHours = b.canvasHours.getContext("2d")),
        w(
          "hours",
          b.ctxHours,
          b.canvasHours,
          a.behindCircleAlphaHours,
          a.behindCircleColorHours,
          a.circleAlphaHours,
          a.circleColorHours,
          b,
          a,
          d,
          p,
          l,
          k,
          t,
          0
        ),
        (b.canvasMinutes = f(".canvasMinutes", m)[0]),
        (b.canvasMinutes.width = b.canvasWidth),
        (b.canvasMinutes.height = b.canvasHeight),
        (b.ctxMinutes = b.canvasMinutes.getContext("2d")),
        w(
          "minutes",
          b.ctxMinutes,
          b.canvasMinutes,
          a.behindCircleAlphaMinutes,
          a.behindCircleColorMinutes,
          a.circleAlphaMinutes,
          a.circleColorMinutes,
          b,
          a,
          d,
          p,
          l,
          k,
          t,
          0
        ),
        (b.canvasSeconds = f(".canvasSeconds", m)[0]),
        (b.canvasSeconds.width = b.canvasWidth),
        (b.canvasSeconds.height = b.canvasHeight),
        (b.ctxSeconds = b.canvasSeconds.getContext("2d")),
        w(
          "seconds",
          b.ctxSeconds,
          b.canvasSeconds,
          a.behindCircleAlphaSeconds,
          a.behindCircleColorSeconds,
          a.circleAlphaSeconds,
          a.circleColorSeconds,
          b,
          a,
          d,
          p,
          l,
          k,
          t,
          0
        ));
      b.totalRemainingSeconds--;
      b.intervalIDSeconds = setInterval(function () {
        b.totalRemainingSeconds--;
        w(
          "seconds",
          b.ctxSeconds,
          b.canvasSeconds,
          a.behindCircleAlphaSeconds,
          a.behindCircleColorSeconds,
          a.circleAlphaSeconds,
          a.circleColorSeconds,
          b,
          a,
          d,
          p,
          l,
          k,
          t,
          1
        );
        w(
          "minutes",
          b.ctxMinutes,
          b.canvasMinutes,
          a.behindCircleAlphaMinutes,
          a.behindCircleColorMinutes,
          a.circleAlphaMinutes,
          a.circleColorMinutes,
          b,
          a,
          d,
          p,
          l,
          k,
          t,
          1
        );
        w(
          "hours",
          b.ctxHours,
          b.canvasHours,
          a.behindCircleAlphaHours,
          a.behindCircleColorHours,
          a.circleAlphaHours,
          a.circleColorHours,
          b,
          a,
          d,
          p,
          l,
          k,
          t,
          1
        );
        w(
          "days",
          b.ctxDays,
          b.canvasDays,
          a.behindCircleAlphaDays,
          a.behindCircleColorDays,
          a.circleAlphaDays,
          a.circleColorDays,
          b,
          a,
          d,
          p,
          l,
          k,
          t,
          1
        );
      }, 1e3);
      h = a.divBackgroundDays;
      u(a.divBackgroundDays) && (h = "url(" + a.divBackgroundDays + ")");
      e = 0;
      "" != a.borderTopColorDays && (e = "1px solid " + a.borderTopColorDays);
      n = 0;
      "" != a.borderRightColorDays &&
        (n = "1px solid " + a.borderRightColorDays);
      q = 0;
      "" != a.borderBottomColorDays &&
        (q = "1px solid " + a.borderBottomColorDays);
      r = 0;
      "" != a.borderLeftColorDays && (r = "1px solid " + a.borderLeftColorDays);
      d.css({
        "border-top": e,
        "border-right": n,
        "border-bottom": q,
        "border-left": r,
        background: h,
      });
      h = a.divBackgroundHours;
      u(a.divBackgroundHours) && (h = "url(" + a.divBackgroundHours + ")");
      e = 0;
      "" != a.borderTopColorHours && (e = "1px solid " + a.borderTopColorHours);
      n = 0;
      "" != a.borderRightColorHours &&
        (n = "1px solid " + a.borderRightColorHours);
      q = 0;
      "" != a.borderBottomColorHours &&
        (q = "1px solid " + a.borderBottomColorHours);
      r = 0;
      "" != a.borderLeftColorHours &&
        (r = "1px solid " + a.borderLeftColorHours);
      p.css({
        "border-top": e,
        "border-right": n,
        "border-bottom": q,
        "border-left": r,
        background: h,
      });
      h = a.divBackgroundMinutes;
      u(a.divBackgroundMinutes) && (h = "url(" + a.divBackgroundMinutes + ")");
      e = 0;
      "" != a.borderTopColorMinutes &&
        (e = "1px solid " + a.borderTopColorMinutes);
      n = 0;
      "" != a.borderRightColorMinutes &&
        (n = "1px solid " + a.borderRightColorMinutes);
      q = 0;
      "" != a.borderBottomColorMinutes &&
        (q = "1px solid " + a.borderBottomColorMinutes);
      r = 0;
      "" != a.borderLeftColorMinutes &&
        (r = "1px solid " + a.borderLeftColorMinutes);
      l.css({
        "border-top": e,
        "border-right": n,
        "border-bottom": q,
        "border-left": r,
        background: h,
      });
      h = a.divBackgroundSeconds;
      u(a.divBackgroundSeconds) && (h = "url(" + a.divBackgroundSeconds + ")");
      e = 0;
      "" != a.borderTopColorSeconds &&
        (e = "1px solid " + a.borderTopColorSeconds);
      n = 0;
      "" != a.borderRightColorSeconds &&
        (n = "1px solid " + a.borderRightColorSeconds);
      q = 0;
      "" != a.borderBottomColorSeconds &&
        (q = "1px solid " + a.borderBottomColorSeconds);
      r = 0;
      "" != a.borderLeftColorSeconds &&
        (r = "1px solid " + a.borderLeftColorSeconds);
      k.css({
        "border-top": e,
        "border-right": n,
        "border-bottom": q,
        "border-left": r,
        background: h,
      });
      b.unitDivOrigWidthDays = parseInt(
        2 * a.circleRadius +
          a.circleLineWidth +
          a.behindCircleLineWidthExpand +
          2 * a.circleLeftRightPadding,
        10
      );
      b.unitDivOrigWidth = b.unitDivOrigWidthDays;
      b.unitDivOrigWidthHours = b.unitDivOrigWidthDays;
      b.unitDivOrigWidthMinutes = b.unitDivOrigWidthDays;
      b.unitDivOrigWidthSeconds = b.unitDivOrigWidthDays;
      "" != a.borderLeftColorDays && b.unitDivOrigWidthDays--;
      "" != a.borderRightColorDays && b.unitDivOrigWidthDays--;
      d.css({ width: b.unitDivOrigWidth + "px" });
      "" != a.borderLeftColorHours && b.unitDivOrigWidthHours--;
      "" != a.borderRightColorHours && b.unitDivOrigWidthHours--;
      p.css({ width: b.unitDivOrigWidth + "px" });
      "" != a.borderLeftColorMinutes && b.unitDivOrigWidthMinutes--;
      "" != a.borderRightColorMinutes && b.unitDivOrigWidthMinutes--;
      l.css({ width: b.unitDivOrigWidth + "px" });
      "" != a.borderLeftColorSeconds && b.unitDivOrigWidthSeconds--;
      "" != a.borderRightColorSeconds && b.unitDivOrigWidthSeconds--;
      k.css({ width: b.unitDivOrigWidth + "px" });
      e = 0;
      -1 != t && 9 > t && (e = b.canvasHeight);
      f(".innerNumber", d).css({
        color: a.numberColorDays,
        "font-size": a.numberSize + "px",
        "line-height": a.numberSize + "px",
      });
      h = a.textColorBackgroundDays;
      u(a.textColorBackgroundDays) &&
        (h = "url(" + a.textColorBackgroundDays + ")");
      f(".innerText", d).css({
        top: e + "px",
        color: a.textColorDays,
        "font-size": a.textSize + "px",
        "line-height": a.textSize + "px",
        "margin-top": a.textMarginTop + "px",
        "padding-top": a.textPadding + "px",
        "padding-bottom": a.textPadding + "px",
        background: h,
      });
      f(".innerNumber", p).css({
        color: a.numberColorHours,
        "font-size": a.numberSize + "px",
        "line-height": a.numberSize + "px",
      });
      h = a.textColorBackgroundHours;
      u(a.textColorBackgroundHours) &&
        (h = "url(" + a.textColorBackgroundHours + ")");
      f(".innerText", p).css({
        top: e + "px",
        color: a.textColorHours,
        "font-size": a.textSize + "px",
        "line-height": a.textSize + "px",
        "margin-top": a.textMarginTop + "px",
        "padding-top": a.textPadding + "px",
        "padding-bottom": a.textPadding + "px",
        background: h,
      });
      f(".innerNumber", l).css({
        color: a.numberColorMinutes,
        "font-size": a.numberSize + "px",
        "line-height": a.numberSize + "px",
      });
      h = a.textColorBackgroundMinutes;
      u(a.textColorBackgroundMinutes) &&
        (h = "url(" + a.textColorBackgroundMinutes + ")");
      f(".innerText", l).css({
        top: e + "px",
        color: a.textColorMinutes,
        "font-size": a.textSize + "px",
        "line-height": a.textSize + "px",
        "margin-top": a.textMarginTop + "px",
        "padding-top": a.textPadding + "px",
        "padding-bottom": a.textPadding + "px",
        background: h,
      });
      f(".innerNumber", k).css({
        color: a.numberColorSeconds,
        "font-size": a.numberSize + "px",
        "line-height": a.numberSize + "px",
      });
      h = a.textColorBackgroundSeconds;
      u(a.textColorBackgroundSeconds) &&
        (h = "url(" + a.textColorBackgroundSeconds + ")");
      f(".innerText", k).css({
        top: e + "px",
        color: a.textColorSeconds,
        "font-size": a.textSize + "px",
        "line-height": a.textSize + "px",
        "margin-top": a.textMarginTop + "px",
        "padding-top": a.textPadding + "px",
        "padding-bottom": a.textPadding + "px",
        background: h,
      });
      e = parseInt(k.width() + l.width() + p.width() + d.width(), 10);
      "" != a.borderLeftColorDays && e++;
      "" != a.borderRightColorDays && e++;
      "" != a.borderLeftColorHours && e++;
      "" != a.borderRightColorHours && e++;
      "" != a.borderLeftColorMinutes && e++;
      "" != a.borderRightColorMinutes && e++;
      "" != a.borderLeftColorSeconds && e++;
      "" != a.borderRightColorSeconds && e++;
      a.origWidth = e;
      a.prevOrigWidth = e;
      g.css({
        width: e + 2 + "px",
        "margin-top": a.allCirclesTopMargin + "px",
        "margin-bottom": a.allCirclesBottomMargin + "px",
      });
      console.log(a.h2Size);
      z.css({
        "font-family": a.pluginFontFamily,
        "font-size": a.h2Size + "px",
        "line-height": a.h2Size + "px",
        color: a.h2Color,
        "font-weight": a.h2Weight,
        "margin-top": a.h2TopMargin + "px",
      });
      A.css({
        "font-family": a.pluginFontFamily,
        "font-size": a.h3Size + "px",
        "line-height": a.h3Size + "px",
        color: a.h3Color,
        "font-weight": a.h3Weight,
        "margin-top": a.h3TopMargin + "px",
      });
      v.css({
        "font-family": a.pluginFontFamily,
        "font-size": a.h4Size + "px",
        "line-height": a.h4Size + "px",
        color: a.h4Color,
        "font-weight": a.h4Weight,
        "margin-top": a.h4TopMargin + "px",
      });
      y.css({
        width: e + "px",
        background: "url(" + a.lineSeparatorImg + ") bottom left repeat-x",
      });
      x.css({
        width: e + "px",
        background: "url(" + a.lineSeparatorImg + ") top left repeat-x",
      });
      h = a.socialBgOFF;
      u(a.socialBgOFF) && (h = "url(" + a.socialBgOFF + ") no-repeat");
      f("li", c).css({ background: h });
      f("li", c).on("mouseover", function () {
        h = a.socialBgON;
        u(a.socialBgON) && (h = "url(" + a.socialBgON + ") no-repeat");
        f(this).css({ background: h });
      });
      f("li", c).on("mouseout", function () {
        h = a.socialBgOFF;
        u(a.socialBgOFF) && (h = "url(" + a.socialBgOFF + ") no-repeat");
        f(this).css({ background: h });
      });
      b.unitDivOrigHeightDays = parseInt(
        2 * a.circleRadius +
          a.circleLineWidth +
          a.behindCircleLineWidthExpand +
          2 * a.circleTopBottomPadding +
          f(".innerText", d).height() +
          2 * a.textPadding +
          a.textMarginTop,
        10
      );
      b.unitDivOrigHeight = b.unitDivOrigHeightDays;
      b.unitDivOrigHeightHours = b.unitDivOrigHeightDays;
      b.unitDivOrigHeightMinutes = b.unitDivOrigHeightDays;
      b.unitDivOrigHeightSeconds = b.unitDivOrigHeightDays;
      "" != a.borderTopColorDays && b.unitDivOrigHeightDays--;
      "" != a.borderBottomColorDays && b.unitDivOrigHeightDays--;
      d.css({ height: b.unitDivOrigHeight + "px" });
      "" != a.borderTopColorHours && b.unitDivOrigHeightHours--;
      "" != a.borderBottomColorHours && b.unitDivOrigHeightHours--;
      p.css({ height: b.unitDivOrigHeight + "px" });
      "" != a.borderTopColorMinutes && b.unitDivOrigHeightMinutes--;
      "" != a.borderBottomColorMinutes && b.unitDivOrigHeightMinutes--;
      l.css({ height: b.unitDivOrigHeight + "px" });
      "" != a.borderTopColorSeconds && b.unitDivOrigHeightSeconds--;
      "" != a.borderBottomColorSeconds && b.unitDivOrigHeightSeconds--;
      k.css({ height: b.unitDivOrigHeight + "px" });
      setTimeout(function () {
        F(a, b, d, p, l, k);
      }, 200);
      a.responsive && G(b, a, m, y, d, p, l, k, g, x, z, A, v);
      var E = !1;
      f(window).on("resize", function () {
        var H = D(),
          B = !0;
        -1 != H && 9 == H && 0 == b.windowWidth && (B = !1);
        b.windowWidth == f(window).width()
          ? ((B = !1),
            a.windowCurOrientation != window.orientation &&
              -1 != navigator.userAgent.indexOf("Android") &&
              ((a.windowCurOrientation = window.orientation), (B = !0)))
          : (b.windowWidth = f(window).width());
        a.responsive &&
          B &&
          (!1 !== E && clearTimeout(E),
          (E = setTimeout(function () {
            G(b, a, m, y, d, p, l, k, g, x, z, A, v);
          }, 300)));
      });
    });
  };
  f.fn.circularCountdown.defaults = {
    type: "version1",
    beginDate: "2014,2,30,22,30,10",
    launchingDate: "2018,8,30,14,12,10",
    nowDate: "",
    pluginFontFamily: "'PT Serif', serif",
    circleRadius: 85,
    circleLineWidth: 20,
    behindCircleLineWidthExpand: 6,
    circleTopBottomPadding: 20,
    circleLeftRightPadding: 30,
    numberSize: 60,
    numberAdditionalTopPadding: 2,
    textSize: 24,
    textMarginTop: 18,
    textPadding: 15,
    lineSeparatorImg: "circular_countdown_images/line.png",
    allCirclesTopMargin: 0,
    allCirclesBottomMargin: 80,
    divBackgroundDays: "",
    borderTopColorDays: "",
    borderRightColorDays: "",
    borderBottomColorDays: "",
    borderLeftColorDays: "",
    circleColorDays: "#dd1e2f",
    circleAlphaDays: 100,
    behindCircleColorDays: "#000000",
    behindCircleAlphaDays: 30,
    numberColorDays: "#FFFFFF",
    textColorDays: "#6f6f6f",
    textColorBackgroundDays: "",
    divBackgroundHours: "",
    borderTopColorHours: "",
    borderRightColorHours: "",
    borderBottomColorHours: "",
    borderLeftColorHours: "",
    circleColorHours: "#ebb035",
    circleAlphaHours: 100,
    behindCircleColorHours: "#000000",
    behindCircleAlphaHours: 30,
    numberColorHours: "#FFFFFF",
    textColorHours: "#6f6f6f",
    textColorBackgroundHours: "",
    divBackgroundMinutes: "",
    borderTopColorMinutes: "",
    borderRightColorMinutes: "",
    borderBottomColorMinutes: "",
    borderLeftColorMinutes: "",
    circleColorMinutes: "#06a2cb",
    circleAlphaMinutes: 100,
    behindCircleColorMinutes: "#000000",
    behindCircleAlphaMinutes: 30,
    numberColorMinutes: "#FFFFFF",
    textColorMinutes: "#6f6f6f",
    textColorBackgroundMinutes: "",
    divBackgroundSeconds: "",
    borderTopColorSeconds: "",
    borderRightColorSeconds: "",
    borderBottomColorSeconds: "",
    borderLeftColorSeconds: "",
    circleColorSeconds: "#218559",
    circleAlphaSeconds: 100,
    behindCircleColorSeconds: "#000000",
    behindCircleAlphaSeconds: 30,
    numberColorSeconds: "#FFFFFF",
    textColorSeconds: "#6f6f6f",
    textColorBackgroundSeconds: "",
    socialBgOFF: "circular_countdown_images/social_icons/socialCircleOFF.png",
    socialBgON: "circular_countdown_images/social_icons/socialCircleON.png",
    h2Size: 36,
    h2Color: "#FFFFFF",
    h2Weight: "bold",
    h2TopMargin: 60,
    h3Size: 24,
    h3Color: "#6f6f6f",
    h3Weight: "normal",
    h3TopMargin: 0,
    h4Size: 14,
    h4Color: "#6f6f6f",
    h4Weight: "normal",
    h4TopMargin: 15,
    complete: null,
    autoReset24h: !1,
    responsive: !0,
    origWidth: 0,
    prevOrigWidth: 0,
    thumbsWrapperMarginBottom: 0,
    windowOrientationScreenSize0: 0,
    windowOrientationScreenSize90: 0,
    windowOrientationScreenSize_90: 0,
    windowCurOrientation: 0,
  };
})(jQuery);
