(window.dullscriptWebpackJsonp = window.dullscriptWebpackJsonp || []).push([
  [2],
  {
    528: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(0),
        r = n(2);
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var o = (function () {
        function e() {}
        var t, n, i;
        return (
          (e.prototype.getRegex = function (e, t) {
            var n = "g";
            return (
              t.matchCase || t.matchWildCards || (n += "i"),
              (t.matchPrefix || t.matchWholeWord) && (e = "\\b" + e),
              (t.matchSuffix || t.matchWholeWord) && (e += "\\b"),
              new RegExp(e, n)
            );
          }),
          (t = e),
          (i = [
            {
              key: "instance",
              get: function () {
                return e._instance || (e._instance = new e());
              },
            },
          ]),
          (n = null) && a(t.prototype, n),
          i && a(t, i),
          e
        );
      })();
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      (o._instance = null), Object(i.a)(o, "FindUtils", null, [159]);
      var l = (function () {
        function e(e, t, n, i) {
          (this._contextus = e),
            (this._resultStart = t),
            (this._resultEnd = n),
            (this._resultType = i);
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "contextus",
              get: function () {
                return this._contextus;
              },
            },
            {
              key: "resultStart",
              get: function () {
                return this._resultStart;
              },
            },
            {
              key: "resultEnd",
              get: function () {
                return this._resultEnd;
              },
            },
            {
              key: "resultType",
              get: function () {
                return this._resultType;
              },
            },
          ]) && s(t.prototype, n),
          i && s(t, i),
          e
        );
      })();
      Object(i.a)(l, "SearchContext", null, [179]);
      n(9);
      var c = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.createSearchContext = function (t, n, i, r, a) {
            var o,
              s,
              c = r - i;
            if (c >= 100) (o = i), (s = r);
            else {
              var h;
              if (
                ((o = Math.max(0, i + Math.ceil(c / 2) - 50)),
                (s = Math.min(t.length, o + 100)),
                (o = Math.max(0, s - 100)) && " " !== t.charAt(o - 1))
              ) {
                h = Math.min(i, o + e._bookendCharacterBuffer);
                for (var u = o; u < h; ++u)
                  if (" " === t.charAt(u)) {
                    o = u + 1;
                    break;
                  }
              }
              if (s !== t.length && " " !== t.charAt(s)) {
                h = Math.max(r, s - e._bookendCharacterBuffer);
                for (var d = s - 1; d >= h; --d)
                  if (" " === t.charAt(d)) {
                    s = d;
                    break;
                  }
              }
            }
            var g = t.substring(o, s);
            return new l(g, i - o, r - o, a);
          }),
          (t.createSearchContextFromFindResult = function (e) {
            return this.createSearchContext(
              e.getOriginalText(),
              "",
              e.begin,
              e.end,
              ""
            );
          }),
          e
        );
      })();
      (c._bookendCharacterBuffer = 10),
        Object(i.a)(c, "SearchContextFactory", null, [158]);
      var h = n(11),
        u = (function () {
          function e(e) {
            (this.result = null), (this.regExp = e);
          }
          var t = e.prototype;
          return (
            (t.exec = function (e) {
              return !!(this.result = this.regExp.exec(e));
            }),
            (t.getIndex = function () {
              return this.result.index;
            }),
            (t.getLastIndex = function () {
              return this.regExp.lastIndex;
            }),
            e
          );
        })();
      Object(i.a)(u, "RegularExpressionWrapper", null, []);
      var d = n(13);
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var m = (function () {
        function e() {}
        var t,
          n,
          i,
          r = e.prototype;
        return (
          (r.preprocessQuery = function (e) {
            var t = this.splitSearchQuery(e).join("");
            var n = new RegExp("(\\\\.\\\\.\\\\.)", "g");
            return t.replace(n, "(\\.\\.\\.|\u2026)");
          }),
          (r.preprocessQueryWithQueryFilters = function (t) {
            var n,
              i = t.text;
            if (
              ((n = t.matchWildCards
                ? this.splitSearchQueryWithWildCardEnabled(i)
                : this.splitSearchQuery(i)),
              t.ignorePunct || t.ignoreSpace)
            ) {
              var r = "";
              t.ignoreSpace && (r += "\\s"),
                t.ignorePunct && (r += e.punctuationCharacters),
                (r = "[" + r + "]*");
              for (var a = 1; a < n.length; a++)
                (!t.matchWildCards ||
                  ("{" !== n[a].charAt(0) && "@" !== n[a].charAt(0))) &&
                  (n[a] = r + n[a]);
            }
            return n.join("");
          }),
          (r.parseQuery = function (e) {
            return [e];
          }),
          (r.isValidWildCardStatement = function (e) {
            for (
              var t = this,
                n = function (n) {
                  var r = e.charAt(n),
                    a = 0;
                  if ("[" === r) {
                    if (
                      !t.isStartWithValidSpecialCharacterStatement(
                        e.substr(n),
                        Object(h.a)(
                          function () {
                            return a;
                          },
                          function (e) {
                            return (a = e);
                          }
                        )
                      )
                    )
                      return (i = n), { v: !1 };
                    n = a + n - 1;
                  } else if ("<" === r) {
                    if (!t.isStartWithValidBeginOfWordStatement(e.substr(n)))
                      return (i = n), { v: !1 };
                  } else if (">" === r) {
                    if (!n) return (i = n), { v: !1 };
                  } else if ("{" === r) {
                    if (
                      !n ||
                      !t.isStartWithValidMultiOccurBraceStatement(
                        e.substr(n),
                        Object(h.a)(
                          function () {
                            return a;
                          },
                          function (e) {
                            return (a = e);
                          }
                        )
                      )
                    )
                      return (i = n), { v: !1 };
                    n = a + n - 1;
                  } else if ("@" === r) {
                    if (
                      !n ||
                      !t.isStartWithValidMultiOccurAtStatement(e.substr(n))
                    )
                      return (i = n), { v: !1 };
                  } else if ("(" === r) {
                    if (
                      !t.isStartWithParenthesisSubStatement(
                        e.substr(n),
                        Object(h.a)(
                          function () {
                            return a;
                          },
                          function (e) {
                            return (a = e);
                          }
                        )
                      )
                    )
                      return (i = n), { v: !1 };
                    n = a + n - 1;
                  } else if ("}" === r || "]" === r || ")" === r)
                    return (i = n), { v: !1 };
                  i = n;
                },
                i = 0;
              i < e.length;
              ++i
            ) {
              var r = n(i);
              if ("object" == typeof r) return r.v;
            }
            return !0;
          }),
          (r.findWildCardStatement = function (e, t, n, i) {
            if (((n.val = 0), (i.val = 0), e.length <= t)) return !1;
            var r = e.length,
              a = e.charAt(t);
            if ("[" === a)
              for (var o = t + 1; o < r; o++) {
                if ("]" === e.charAt(o) && o - t != 1)
                  return (n.val = o), (i.val = 5), !0;
              }
            else if ("{" === a)
              for (var s = -1, l = t + 1; l < r; l++) {
                var c = e.charAt(l);
                if ("," === c) s = l;
                else if ("}" === c)
                  return (
                    (i.val = -1 === s ? 6 : l - s != 1 ? 7 : 8), (n.val = l), !0
                  );
              }
            return !1;
          }),
          (r.turnAsteriskToRegEx = function (e, t, n, i) {
            if (((n.val = t), !t && 1 === e.length))
              return this.turnWildCardToRegEx(e, i, !0);
            switch (e.charAt(t + 1)) {
              case "{":
                var r = "",
                  a = -1,
                  o = 0;
                return this.findWildCardStatement(
                  e,
                  t + 1,
                  Object(h.a)(
                    function () {
                      return a;
                    },
                    function (e) {
                      return (a = e);
                    }
                  ),
                  Object(h.a)(
                    function () {
                      return o;
                    },
                    function (e) {
                      return (o = e);
                    }
                  )
                )
                  ? ((r =
                      this.turnWildCardToRegEx("*", i, !0) +
                      this.turnWildCardToRegEx(e.substring(t + 1, a + 1), o)),
                    (n.val = a),
                    (7 !== o && 8 !== o) || (r += "?"),
                    r)
                  : this.turnWildCardToRegEx("*", i, !1);
              case "@":
                return (n.val = t + 1), this.turnWildCardToRegEx("*", i, !0);
              case "*":
                if (!t) {
                  for (n.val++; "*" === e.charAt(n.val); ) n.val++;
                  return n.val === e.length
                    ? this.turnWildCardToRegEx("*", i, !0)
                    : this.turnWildCardToRegEx("*", i, !1);
                }
                return this.turnWildCardToRegEx("*", i, !1);
              default:
                return this.turnWildCardToRegEx("*", i, !1);
            }
          }),
          (r.turnWildCardToRegEx = function (e, t, n) {
            void 0 === n && (n = !1);
            var i = e.length;
            switch (t) {
              case 5:
                return "!" === e.charAt(1) && i > 2
                  ? "([^" +
                      this.preprocessStringInSquareBrackets(
                        e.substr(2, i - 3)
                      ) +
                      "]\u0640*)"
                  : "([" +
                      this.preprocessStringInSquareBrackets(
                        e.substr(1, i - 2)
                      ) +
                      "]\u0640*)";
              case 6:
              case 7:
                return e;
              case 9:
                return "+?";
              case 8:
                return e;
              case 3:
              case 4:
                return "\\b";
              case 1:
                return ".";
              case 2:
                return n ? "(.+?)" : "(.*?)";
              case 10:
                return e;
            }
            return null;
          }),
          (r.getWildCardKind = function (e) {
            switch (e) {
              case "?":
                return 1;
              case "*":
                return 2;
              case "<":
                return 3;
              case ">":
                return 4;
              case "@":
                return 9;
            }
            return 0;
          }),
          (r.preProcessChar = function (e) {
            return "[" === e ||
              "]" === e ||
              "\\" === e ||
              "(" === e ||
              ")" === e
              ? String.format("\\{0}", e)
              : "'" === e ||
                "\u2018" === e ||
                "\u2019" === e ||
                '"' === e ||
                "\u201c" === e ||
                "\u201d" === e ||
                d.a.isWhitespaceUnicode(e)
              ? this.processApostraphyQuoteHyphen(e)
              : e;
          }),
          (r.preprocessStringInSquareBrackets = function (e) {
            for (var t = [], n = 0; n < e.length; ++n) {
              var i = e.charAt(n);
              t[n] = this.preProcessChar(i);
            }
            return t.join("");
          }),
          (r.isStartWithValidSpecialCharacterStatement = function (e, t) {
            t.val = -1;
            var n = new u(new RegExp("\\[.+?\\]", "g"));
            if (!n.exec(e)) return !1;
            if (n.getIndex()) return !1;
            if (
              ((t.val = n.getLastIndex()),
              new u(new RegExp("(\\(\\))|(.+?!)", "g")).exec(
                e.substring(1, t.val - 1)
              ))
            )
              return !1;
            var i = new u(new RegExp("[^!\\[]-[^\\]]", "g"));
            for (e.substring(0, t.val); i.exec(e.substring(0, t.val)); ) {
              var r = i.getIndex(),
                a = i.getLastIndex(),
                o = new RegExp("[-]", "g"),
                s = e.substring(r, a).split(o);
              if (s[0].charAt(0) > s[1].charAt(0)) return !1;
            }
            return !0;
          }),
          (r.isStartWithValidBeginOfWordStatement = function (e) {
            return !new u(new RegExp("\\<(\\{|\\@|\\>|\\<|\\}|\\))", "g")).exec(
              e
            );
          }),
          (r.isStartWithValidMultiOccurBraceStatement = function (e, t) {
            t.val = -1;
            if (new u(new RegExp("(\\}\\{)|(\\}\\@)", "g")).exec(e)) return !1;
            var n = new u(new RegExp("\\{\\d+(,|(,\\d+))?\\}", "g"));
            if (!n.exec(e)) return !1;
            if (n.getIndex()) return !1;
            t.val = n.getLastIndex();
            var i = new RegExp("[{,}]", "g"),
              r = e.substring(0, t.val).split(i);
            return !(
              4 === r.length &&
              Number.parseInvariant(r[1]) >= Number.parseInvariant(r[2])
            );
          }),
          (r.isStartWithValidMultiOccurAtStatement = function (e) {
            return !new u(new RegExp("\\@\\{", "g")).exec(e);
          }),
          (r.isStartWithParenthesisSubStatement = function (e, t) {
            t.val = -1;
            var n = -1,
              i = new u(new RegExp("\\(([^\\[\\]]*?(\\[.+?\\])?)+?\\)", "g"));
            if (i.exec(e)) {
              if (((n = i.getIndex()), (t.val = i.getLastIndex()), n))
                return !1;
              if (!this.isValidWildCardStatement(e.substring(1, t.val - 1)))
                return !1;
            }
            return !0;
          }),
          (r.splitSearchQueryWithWildCardEnabled = function (e) {
            for (
              var t = this,
                n = [],
                i = e.length,
                r = function (i) {
                  var r = e.charAt(i),
                    o = 0,
                    s = 0;
                  "[" === r ||
                  "\\" === r ||
                  "^" === r ||
                  "$" === r ||
                  "." === r ||
                  "|" === r ||
                  "+" === r ||
                  "(" === r ||
                  ")" === r ||
                  "?" === r ||
                  "*" === r ||
                  "<" === r ||
                  ">" === r ||
                  "@" === r ||
                  "?" === r ||
                  "{" === r
                    ? ("[" !== r && "{" !== r) ||
                      !t.findWildCardStatement(
                        e,
                        i,
                        Object(h.a)(
                          function () {
                            return o;
                          },
                          function (e) {
                            return (o = e);
                          }
                        ),
                        Object(h.a)(
                          function () {
                            return s;
                          },
                          function (e) {
                            return (s = e);
                          }
                        )
                      )
                      ? "?" === r || "<" === r || ">" === r || "@" === r
                        ? ((s = t.getWildCardKind(r)),
                          (n[i] = t.turnWildCardToRegEx(r, s)))
                        : "*" === r
                        ? ((s = t.getWildCardKind(r)),
                          (n[i] = t.turnAsteriskToRegEx(
                            e,
                            i,
                            Object(h.a)(
                              function () {
                                return o;
                              },
                              function (e) {
                                return (o = e);
                              }
                            ),
                            s
                          )),
                          (i = o))
                        : "(" === r || ")" === r
                        ? ((s = 10), (n[i] = t.turnWildCardToRegEx(r, s)))
                        : (n[i] = String.format("\\{0}", r))
                      : ((n[i] = t.turnWildCardToRegEx(
                          e.substr(i, o + 1 - i),
                          s
                        )),
                        (i = o))
                    : "'" === r ||
                      "\u2018" === r ||
                      "\u2019" === r ||
                      '"' === r ||
                      "\u201c" === r ||
                      "\u201d" === r ||
                      "-" === r ||
                      "\u2013" === r ||
                      "\u2014" === r ||
                      d.a.isWhitespaceUnicode(r)
                    ? (n[i] = "[" + t.processApostraphyQuoteHyphen(r) + "]")
                    : (n[i] = "\u2026" === r ? "\\.\\.\\." : r),
                    "" === n[i] ||
                      s ||
                      (i < e.length - 1 &&
                      ("@" === e.charAt(i + 1) || "{" === e.charAt(i + 1))
                        ? (n[i] = "(" + n[i] + "\u0640*)")
                        : (n[i] += "\u0640*")),
                    (a = i);
                },
                a = 0;
              a < i;
              ++a
            )
              r(a);
            return n;
          }),
          (r.splitSearchQuery = function (e) {
            for (var t = [], n = 0; n < e.length; ++n) {
              var i = e.charAt(n);
              "[" === i ||
              "\\" === i ||
              "^" === i ||
              "$" === i ||
              "." === i ||
              "|" === i ||
              "+" === i ||
              "(" === i ||
              ")" === i ||
              "?" === i ||
              "*" === i
                ? (t[n] = String.format("\\{0}", i))
                : "'" === i ||
                  "\u2018" === i ||
                  "\u2019" === i ||
                  '"' === i ||
                  "\u201c" === i ||
                  "\u201d" === i ||
                  "-" === i ||
                  "\u2013" === i ||
                  "\u2014" === i ||
                  d.a.isWhitespaceUnicode(i)
                ? (t[n] = "[" + this.processApostraphyQuoteHyphen(i) + "]")
                : (t[n] = "\u2026" === i ? "\\.\\.\\." : i),
                "" !== t[n] && (t[n] += "\u0640*");
            }
            return t;
          }),
          (r.processApostraphyQuoteHyphen = function (t) {
            return "'" === t || "\u2018" === t || "\u2019" === t
              ? "'\u2018\u2019"
              : '"' === t || "\u201c" === t || "\u201d" === t
              ? '"\u201c\u201d'
              : "-" === t || "\u2013" === t || "\u2014" === t
              ? "-\u2013\u2014"
              : d.a.isWhitespaceUnicode(t)
              ? e.unicodeWhitespaceCharacters
              : t;
          }),
          (t = e),
          (i = [
            {
              key: "instance",
              get: function () {
                return e._instance || (e._instance = new e());
              },
            },
          ]),
          (n = null) && g(t.prototype, n),
          i && g(t, i),
          e
        );
      })();
      (m._instance = null),
        (m.unicodeWhitespaceCharacters =
          " \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000"),
        (m.punctuationCharacters =
          '-\u2013.,:;/?!"\u3002\uff0c\uff1a\uff1b\u3001\uff1f\uff01\u201d\u201c'),
        Object(i.a)(m, "WordQueryProcessor", null, [160]);
      var p = n(1),
        _ = n(24),
        f = n(21),
        v = n(5),
        C = n(3),
        y = n(14),
        S = n(34),
        x = n(530),
        b = n(535),
        B = n(539),
        k = function () {};
      (k.textboxFindId = "TextBoxFind"),
        (k.buttonFindMatchCaseId = "ButtonFindMatchCase"),
        (k.buttonFindMatchWholeWordId = "ButtonFindMatchWholeWord"),
        (k.searchBoxDropDownId = "SearchBoxDropDown"),
        (k.searchBoxFrameId = "SearchBoxFrame"),
        (k.searchBoxSplitButtonId = "FindSplitButton"),
        (k.searchUIAreaId = "SearchUIArea"),
        (k.cancelSearchMenuId = "CancelSearchMenu"),
        Object(i.a)(k, "SearchBoxControls", null, []);
      var A = function () {};
      (A.checkedImageName = "QuickSearchCompletedToday_16x16x32"),
        (A.splitButtonArrow = "SplitButtonArrow_5x3x32"),
        (A.splitButtonArrow8by8 = "SplitButtonArrow_8x8x32"),
        (A.splitButtonSearchIcon = "Search_16x16x32"),
        (A.splitButtonCancelIcon = "ClosePaneGlyph_16x16x32"),
        Object(i.a)(A, "SearchBoxIcons", null, []);
      var w = (function () {
        function e(e, t) {
          (this._resultDom = e), (this._resultHit = t);
        }
        var t = e.prototype;
        return (
          (t.dispose = function () {
            (this._resultDom = null), (this._resultHit = null);
          }),
          (t.getOffsetTop = function () {
            return this._resultDom.offsetTop;
          }),
          (t.getOffsetHeight = function () {
            return this._resultDom.offsetHeight;
          }),
          (t.select = function () {
            Sys.UI.DomElement.addCssClass(this._resultDom, "WACSelectedResult"),
              Sys.UI.DomElement.addCssClass(
                this._resultHit,
                "WACActiveContext"
              );
          }),
          (t.deselect = function () {
            this._resultDom &&
              Sys.UI.DomElement.removeCssClass(
                this._resultDom,
                "WACSelectedResult"
              ),
              this._resultHit &&
                Sys.UI.DomElement.removeCssClass(
                  this._resultHit,
                  "WACActiveContext"
                );
          }),
          e
        );
      })();
      Object(i.a)(w, "SearchPaneItem", null, [226, 4]);
      var E = (function () {
        function e(t) {
          (this._resultsScroller = t),
            (this._sampleResult = e.createSearchResult()),
            (this._lastResultBox = null);
        }
        var t = e.prototype;
        return (
          (t.dispose = function () {
            (this._resultsScroller = null),
              (this._lastResultBox = null),
              (this._sampleResult = null);
          }),
          (t.addResult = function (t, n, i) {
            if (n) {
              var r = x.b("div", null, e._wacResultDividerClassName);
              this._resultsScroller.appendChild(r);
            }
            var a = this.resultBoxFromContext(t, n, i);
            this._resultsScroller.appendChild(a), (this._lastResultBox = a);
          }),
          (t.clearAllResults = function () {
            for (; this._resultsScroller.hasChildNodes(); )
              this._resultsScroller.removeChild(
                this._resultsScroller.lastChild
              );
            this._resultsScroller.parentNode &&
              (this._resultsScroller.parentNode.className =
                e._wacEmptyPaneClassName),
              (this._lastResultBox = null);
          }),
          (t.getSearchPaneItem = function (t) {
            var n = document.getElementById(t + e._wacResultOutlineSuffix);
            if (!n) return null;
            var i = e.getDomFromSearchResult(n, 3);
            return new w(n, i);
          }),
          (t.getSearchPaneIndex = function (e) {
            var t = e.id;
            return parseInt(t);
          }),
          (t.goToResult = function (e, t, n) {
            t + 1 === n && (e.scrollTop = this._resultsScroller.offsetHeight),
              t || (e.scrollTop = 0);
            var i = this.getSearchPaneItem(t),
              r = i.getOffsetTop(),
              a = e.scrollTop,
              o = r + i.getOffsetHeight(),
              s = a + e.offsetHeight;
            return (
              r < e.scrollTop
                ? (e.scrollTop = r)
                : o > s && (e.scrollTop = o - e.offsetHeight),
              i
            );
          }),
          (t.getLastResultBoxOffsetTop = function () {
            return this._lastResultBox
              ? this._lastResultBox.offsetTop
              : Number.NaN;
          }),
          (t.resultBoxFromContext = function (e, t, n) {
            var i = this._sampleResult.cloneNode(!0);
            return this.updateResultBoxFromContext(i, e, t, n), i;
          }),
          (t.updateResultBoxFromContext = function (t, n, i, r) {
            var a = n.contextus,
              o = n.resultType,
              s = n.resultStart,
              l = n.resultEnd;
            t.id = i + e._wacResultOutlineSuffix;
            var c = e.getDomFromSearchResult(t, 0);
            (c.id = i + e._wacSearchResultSuffix), r && (c.title = r);
            var h = e.getDomFromSearchResult(t, 1);
            (h.id = i + e._resultTypeSuffix), (h.innerText = o);
            var u = e.getDomFromSearchResult(t, 2);
            (u.id = i + e._preResultSuffix), (u.innerText = a.substring(0, s));
            var d = e.getDomFromSearchResult(t, 3);
            (d.id = i + e._resultSuffix), (d.innerText = a.substring(s, l));
            var g = e.getDomFromSearchResult(t, 4);
            (g.id = i + e._postResultSuffix),
              (g.innerText = a.substring(l, a.length));
          }),
          (e.createSearchResult = function () {
            var t = x.b("div", null, e._wacResultOutlineSuffix),
              n = x.b("div", null, e._wacSearchResultSuffix),
              i = x.b("span", null, "WACResultType"),
              r = x.b("span", null, null),
              a = x.b("span", null, "WACContext"),
              o = x.b("span", null, null);
            return (
              n.appendChild(i),
              n.appendChild(r),
              n.appendChild(a),
              n.appendChild(o),
              t.appendChild(n),
              t
            );
          }),
          (e.getDomFromSearchResult = function (e, t) {
            switch (t) {
              case 0:
                return e.firstChild;
              case 1:
                return e.firstChild.childNodes[0];
              case 2:
                return e.firstChild.childNodes[1];
              case 3:
                return e.firstChild.childNodes[2];
              case 4:
                return e.firstChild.childNodes[3];
            }
            return null;
          }),
          e
        );
      })();
      (E._wacResultOutlineSuffix = "WACResultOutline"),
        (E._wacResultDividerClassName = "ResultDivider"),
        (E._wacEmptyPaneClassName = "WACSearchResultsPaneEmpty"),
        (E._wacSearchResultSuffix = "WACSearchResult"),
        (E._resultTypeSuffix = "resultType"),
        (E._preResultSuffix = "preResult"),
        (E._resultSuffix = "Result"),
        (E._postResultSuffix = "postResult"),
        (E._selectedResultStyle = "WACSelectedResult"),
        Object(i.a)(E, "SearchResultsDom", null, [206, 4]);
      var R = (function () {
        function e() {}
        return (
          (e.prototype.createSearchResultsDom = function (e) {
            return new E(e);
          }),
          e
        );
      })();
      Object(i.a)(R, "SearchResultsDomFactory", null, [181]);
      var I = n(31),
        F = n(55),
        P = n(56),
        T = n(71),
        N = n(4),
        W = n(17),
        M = n(25),
        O = n(20),
        H = n(73),
        D = n(314),
        j = n(10),
        U = n(181),
        L = n(72),
        V = n(8),
        K = (n(54), n(7)),
        X = n(16);
      function z(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var Q = (function () {
        function e(e, t, n, i) {
          (this.registeredChangeEvent = null),
            (this._form = null),
            (this._inputMode = 0),
            (this._valueChangedHandler = null),
            (this._submitHandler = null),
            (this._textElement = null),
            (this._id = e),
            (this._className = t),
            (this._placeholderText = n),
            (this._keyInputManager = i),
            this.createPlaceholderControl(),
            this.showPlaceholderText();
        }
        var t,
          n,
          i,
          a = e.prototype;
        return (
          (a.enable = function () {
            this.textElement.removeAttribute("disabled");
          }),
          (a.disable = function () {
            this.textElement.setAttribute("disabled", "true");
          }),
          (a.reset = function () {
            this.showUserInput();
          }),
          (a.setMaxInputLength = function (e) {
            this.textElement.setAttribute("maxLength", String.format("{0}", e));
          }),
          (a.setFocus = function () {
            var e = this;
            window.setTimeout(function () {
              e.textElement.focus();
            }, 0);
          }),
          (a.setTooltip = function (e) {
            this.textElement.title = e;
          }),
          (a.registerValueChangedHandler = function (e, t) {
            (this._valueChangedHandler = e),
              (this.registeredChangeEvent = t),
              this._keyInputManager.registerHandler(
                this.registeredChangeEvent,
                this.textElement,
                this._valueChangedHandler
              );
          }),
          (a.registerSubmitHandler = function (e) {
            this._submitHandler = e;
          }),
          (a.createPlaceholderControl = function () {
            (this._textElement = document.createElement("input")),
              (this.textElement.id = this._id),
              (this.textElement.className = this._className),
              (this.textElement.type = "text"),
              this.textElement.setAttribute("Autocomplete", "off"),
              this.textElement.setAttribute("data-lpignore", "true"),
              K.a.setAriaAttribute(
                this.textElement,
                K.a.ariaRoleAttribute,
                K.a.ariaTextboxAttribute
              ),
              Sys.UI.DomElement.addCssClass(this.textElement, "UIFont"),
              this.addPlaceholderCapabilityToTextbox(),
              (this._form = document.createElement("form")),
              this._form.appendChild(this.textElement),
              W.a.addHandler(
                this._form,
                "submit",
                Object(r.d)(this, this.onSubmit, "onSubmit")
              );
          }),
          (a.addPlaceholderCapabilityToTextbox = function () {
            W.a.addHandler(
              this.textElement,
              "focus",
              Object(r.d)(this, this.onFocus, "onFocus")
            ),
              W.a.addHandler(
                this.textElement,
                "blur",
                Object(r.d)(this, this.onBlur, "onBlur")
              );
          }),
          (a.onFocus = function (e) {
            document.activeElement === this.textElement &&
              (this.applyFocussedStyle(),
              this._inputMode || this.showUserInput());
          }),
          (a.onBlur = function (e) {
            this.removeFocussedStyle(),
              1 === this._inputMode &&
                "" === this.textElement.value &&
                this.showPlaceholderText();
          }),
          (a.onSubmit = function (e) {
            this._submitHandler && this._submitHandler(), e.preventDefault();
          }),
          (a.showUserInput = function () {
            (this.textElement.value = ""),
              (this._inputMode = 1),
              this.removePlaceholderStyle();
          }),
          (a.showPlaceholderText = function () {
            (this.textElement.value = this._placeholderText),
              (this._inputMode = 0),
              this.applyPlaceholderStyle();
          }),
          (a.applyPlaceholderStyle = function () {
            Sys.UI.DomElement.addCssClass(this.textElement, "PlaceholderText");
          }),
          (a.removePlaceholderStyle = function () {
            Sys.UI.DomElement.removeCssClass(
              this.textElement,
              "PlaceholderText"
            );
          }),
          (a.applyFocussedStyle = function () {
            Sys.UI.DomElement.addCssClass(this.textElement, "PlaceholderFocus");
          }),
          (a.removeFocussedStyle = function () {
            Sys.UI.DomElement.removeCssClass(
              this.textElement,
              "PlaceholderFocus"
            );
          }),
          (a.dispose = function () {
            W.a.removeHandler(
              this.textElement,
              "focus",
              Object(r.d)(this, this.onFocus, "onFocus")
            ),
              W.a.removeHandler(
                this.textElement,
                "blur",
                Object(r.d)(this, this.onBlur, "onBlur")
              ),
              this._valueChangedHandler &&
                (this._keyInputManager.unregisterHandler(
                  this.registeredChangeEvent,
                  this.textElement,
                  this._valueChangedHandler
                ),
                (this._valueChangedHandler = null)),
              W.a.removeHandler(
                this._form,
                "submit",
                Object(r.d)(this, this.onSubmit, "onSubmit")
              ),
              (this._submitHandler = null);
          }),
          (t = e),
          (n = [
            {
              key: "textElement",
              get: function () {
                return this._textElement;
              },
            },
            {
              key: "rootElement",
              get: function () {
                return this._form;
              },
            },
            {
              key: "value",
              get: function () {
                return this.isUserInput ? this.textElement.value : "";
              },
              set: function (e) {
                this.showUserInput(),
                  (this.textElement.value = e),
                  e && X.a.selectAllTextInInput(this.textElement);
              },
            },
            {
              key: "placeholderText",
              get: function () {
                return this._placeholderText;
              },
              set: function (e) {
                (this._placeholderText = e),
                  this._inputMode || this.showPlaceholderText();
              },
            },
            {
              key: "isUserInput",
              get: function () {
                return 1 === this._inputMode;
              },
            },
          ]) && z(t.prototype, n),
          i && z(t, i),
          e
        );
      })();
      Object(i.a)(Q, "PlaceholderInput", null, [228, 4]);
      var Z = function () {};
      (Z.searchBoxStyle = "SearchBox"),
        (Z.searchBoxFrameStyle = "SearchBoxButtonFrame"),
        (Z.searchUIAreaStyle = "SearchUIArea"),
        (Z.splitButtonStyle = "SearchSplitButton"),
        Object(i.a)(Z, "SearchBoxStyles", null, []);
      var G = n(80);
      function q(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var Y = (function () {
        function e(e, t, n, i, r, a) {
          void 0 === a && (a = N.EventNames.keyUp),
            (this._placeholderInput = null),
            (this._element = null),
            (this._parent = e),
            (this._queryChangedHandler = t),
            (this._keyInputManager = n),
            (this._searchBoxControlUser = i),
            (this._stringsProvider = r),
            (this._cachedQuery = ""),
            this.createSearchBox(),
            this.refreshControls(),
            this.registerQueryChangedHandler(a);
        }
        var t,
          n,
          i,
          a = e.prototype;
        return (
          (a.registerQueryChangedHandler = function (e) {
            this._placeholderInput.registerValueChangedHandler(
              Object(r.d)(this, this.onQueryChanged, "onQueryChanged"),
              e
            );
          }),
          (a.refreshControls = function () {
            this._searchBoxControlUser.refreshControls();
          }),
          (a.createSearchBox = function () {
            var e = document.createElement("div");
            (e.id = k.searchUIAreaId),
              (e.className = Z.searchUIAreaStyle),
              this._parent.appendChild(e);
            var t = document.createElement("div");
            (t.id = k.searchBoxFrameId),
              (t.className = Z.searchBoxFrameStyle),
              e.appendChild(t),
              (this._placeholderInput = new Q(
                k.textboxFindId,
                Z.searchBoxStyle,
                this._stringsProvider.getString(0),
                this._keyInputManager
              )),
              this._placeholderInput.setTooltip(
                this._stringsProvider.getString(1)
              ),
              (this._element = this._placeholderInput.textElement),
              t.appendChild(this._placeholderInput.rootElement),
              j.a.isInternetExplorer8 &&
                (this.element.style.lineHeight = "175%"),
              this.buildSearchSplitButton(t);
          }),
          (a.buildSearchSplitButton = function (e) {
            var t = this.createSplitButtonXml(),
              n = this.getSplitButtonDomElement(t);
            n &&
              (Sys.UI.DomElement.addCssClass(n, Z.splitButtonStyle),
              K.a.setAriaAttribute(
                n,
                K.a.ariaRoleAttribute,
                K.a.ariaPresentationRole
              ),
              this._stringsProvider.contains(7) &&
                K.a.setAriaAttribute(
                  n,
                  K.a.ariaRoleDescription,
                  this._stringsProvider.getString(7)
                ),
              e.appendChild(n));
          }),
          (a.getSplitButtonDomElement = function (e) {
            return this._searchBoxControlUser.getSplitButtonDomElement(
              e,
              k.searchBoxDropDownId
            );
          }),
          (a.createSplitButtonXml = function () {
            var e = [
                G.b(
                  k.buttonFindMatchCaseId,
                  "",
                  "2398455418",
                  "1369572530",
                  this._stringsProvider.getString(2)
                ),
                G.b(
                  k.buttonFindMatchWholeWordId,
                  "",
                  "1783557000",
                  "3914542000",
                  this._stringsProvider.getString(3)
                ),
              ],
              t = G.c("msFindSearch_Controls", e),
              n = G.d("msFindSearch", t, null),
              i = [
                G.a(
                  k.cancelSearchMenuId,
                  "241072808",
                  this._stringsProvider.getString(4),
                  A.splitButtonCancelIcon,
                  "",
                  "",
                  this._stringsProvider.getString(4),
                  "",
                  "",
                  ""
                ),
              ],
              r = G.c("msCancelSearch_Controls", i),
              a = [n, G.d(k.cancelSearchMenuId, r, null)];
            return G.h(
              k.searchBoxSplitButtonId,
              V.a.clearSearch,
              V.a.queryClearSearch,
              this._stringsProvider.getString(6),
              A.splitButtonSearchIcon,
              a
            );
          }),
          (a.onQueryChanged = function (t) {
            var n = e.isEnterKey(t);
            return this._placeholderInput.isUserInput
              ? !(this.element.value === this._cachedQuery && !n) &&
                  (this.triggerSearch(n), !0)
              : ((this.element.value = this._placeholderInput.placeholderText),
                !0);
          }),
          (a.triggerSearch = function (e) {
            (this._cachedQuery = this.element.value),
              this._queryChangedHandler(this._cachedQuery, !e);
          }),
          (a.updateControl = function (e) {
            this._searchBoxControlUser.updateControl(e);
          }),
          (a.enable = function () {
            this._placeholderInput.enable(),
              this.updateControl(k.searchBoxSplitButtonId);
          }),
          (a.disable = function () {
            this._placeholderInput.disable(),
              this.updateControl(k.searchBoxSplitButtonId);
          }),
          (a.reset = function () {
            this._placeholderInput.reset();
          }),
          (a.setMaxInputLength = function (e) {
            this._placeholderInput.setMaxInputLength(e);
          }),
          (a.setFocus = function () {
            this._placeholderInput.setFocus();
          }),
          (a.dispose = function () {
            (this._element = null),
              this._placeholderInput &&
                (this._placeholderInput.dispose(),
                (this._placeholderInput = null)),
              this._searchBoxControlUser &&
                (this._searchBoxControlUser.dispose(),
                (this._searchBoxControlUser = null));
          }),
          (e.isEnterKey = function (e) {
            return e.innerEvent.keyCode === M.a.vK_Enter;
          }),
          (t = e),
          (n = [
            {
              key: "value",
              get: function () {
                return this._placeholderInput.value;
              },
              set: function (e) {
                this._placeholderInput.value = e;
              },
            },
            {
              key: "placeholderText",
              get: function () {
                return this._placeholderInput.placeholderText;
              },
              set: function (e) {
                this._placeholderInput.placeholderText = e;
              },
            },
            {
              key: "element",
              get: function () {
                return this._element;
              },
            },
          ]) && q(t.prototype, n),
          i && q(t, i),
          e
        );
      })();
      Object(i.a)(Y, "SearchBox", null, [208, 4]);
      var $ = n(203),
        J = n(206),
        ee = (function () {
          function e() {
            var e = new J.a();
            (e.ImageDownArrow = p.AFrameworkApplication.imageClusterPath),
              (e.ImageDownArrowClass = F.getImageClass(A.splitButtonArrow)),
              (e.ImageCheckMark = p.AFrameworkApplication.imageClusterPath),
              (e.ImageCheckMarkClass = F.getImageClass(A.checkedImageName)),
              (e.TextDirection = p.AFrameworkApplication.isRtl ? "rtl" : "ltr"),
              (this._root = new $.a("SearchBoxRoot", e)),
              (this._root.rootUser = y.App.get_activeAppFrame().ribbonUser);
          }
          var t = e.prototype;
          return (
            (t.dispose = function () {
              this._root && (this._root.dispose(), (this._root = null));
            }),
            (t.refreshControls = function () {
              this._root.pollForStateAndUpdate();
            }),
            (t.getSplitButtonDomElement = function (e, t) {
              return this._root.addControl(t, e)
                ? this._root.getDOMElementForControlDisplayMode(t, "Small")
                : (C.ULS.sendTraceTag(
                    4523030,
                    313,
                    15,
                    "Failed to add SearchBox splitbutton, continuing"
                  ),
                  null);
            }),
            (t.updateControl = function (e) {
              this._root.updateControl(e);
            }),
            e
          );
        })();
      Object(i.a)(ee, "SearchBoxControlUser", null, [207, 4]);
      var te = (function () {
        function e() {
          (this._initialized = !1), (this._strings = {});
        }
        var t = e.prototype;
        return (
          (t.getString = function (e) {
            return this.ensureStringsAdded(), this.get(e);
          }),
          (t.contains = function (e) {
            return this.ensureStringsAdded(), e.toString() in this._strings;
          }),
          (t.ensureStringsAdded = function () {
            this._initialized || (this.addStrings(), (this._initialized = !0));
          }),
          (t.addString = function (e, t) {
            this._strings[e.toString()] = t;
          }),
          (t.get = function (e) {
            return this._strings[e.toString()];
          }),
          e
        );
      })();
      Object(i.a)(te, "AIntlHelper", null, []);
      var ne = (function (e) {
        var t, n;
        function i() {
          return e.call(this) || this;
        }
        return (
          (n = e),
          ((t = i).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          (i.prototype.addStrings = function () {
            this.addString(
              0,
              WordViewerIntl.WordViewerStrings.l_SearchBoxValue
            ),
              this.addString(
                1,
                WordViewerIntl.WordViewerStrings.l_FindPlaceholderTooltip
              ),
              this.addString(2, WordViewerIntl.WordViewerStrings.l_MatchCase),
              this.addString(
                3,
                WordViewerIntl.WordViewerStrings.l_MatchWholeWord
              ),
              this.addString(4, WordViewerIntl.WordViewerStrings.l_ClearSearch),
              this.addString(
                5,
                WordViewerIntl.WordViewerStrings.l_SearchButtonTitleEnd
              ),
              this.addString(
                6,
                WordViewerIntl.WordViewerStrings.l_SearchButtonTitleBegin
              );
          }),
          i
        );
      })(te);
      function ie(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      Object(i.a)(ne, "SearchBoxIntl", te, []);
      var re = (function () {
        function e() {}
        var t, n, i;
        return (
          (e.prototype.createSearchBox = function (e, t) {
            return new Y(e, t, O.KeyInputManager.instance, new ee(), new ne());
          }),
          (t = e),
          (i = [
            {
              key: "instance",
              get: function () {
                return e._instance || (e._instance = new e());
              },
            },
          ]),
          (n = null) && ie(t.prototype, n),
          i && ie(t, i),
          e
        );
      })();
      (re._instance = null), Object(i.a)(re, "SearchBoxFactory", null, [180]);
      var ae = n(531),
        oe = n(395),
        se = n(148),
        le = n(18),
        ce = (function () {
          function e(t) {
            var n = this;
            (this._resultsScroller = null),
              (this._resultsInfo = null),
              (this._searchBox = null),
              (this._searchBoxInput = null),
              (this._progress = null),
              (this._findResultsString = null),
              (this._searchResultsDomFactory = null),
              (this._searchResultsDom = null),
              (this._nextResultButton = null),
              (this._nextResultButtonFlag = 0),
              (this._prevResultButton = null),
              (this._prevResultButtonFlag = 0),
              (this._closeButton = null),
              (this._filtersDiv = null),
              (this._isAutoFind = !1),
              (this._nextButtonEnterHandler = null),
              (this._prevButtonEnterHandler = null),
              (this._closeButtonKeyEventHandler = null),
              (this.matchWholeWord = !1),
              (this.matchCase = !1);
            var i = p.AFrameworkApplication.isRtl,
              a = H.a.instance,
              o = T.a.instance,
              s = O.KeyInputManager.instance,
              l = P.a.instance;
            (this._actionManager = p.AFrameworkApplication.theActionManager),
              this._actionManager.addActionWithFlags(
                V.a.queryClearSearch,
                S.a.application,
                Object(r.d)(this, this.queryClearSearch, "queryClearSearch"),
                97
              ),
              this._actionManager.addAction(
                V.a.clearSearch,
                S.a.application,
                Object(r.d)(this, this.clearSearch, "clearSearch")
              ),
              this._actionManager.addAction(
                V.a.clearSearchFromSearchMenu,
                S.a.application,
                Object(r.d)(
                  this,
                  this.clearSearchFromSearchMenu,
                  "clearSearchFromSearchMenu"
                )
              ),
              this._actionManager.addAction(
                V.a.findMatchCase,
                S.a.application,
                Object(r.d)(this, this.updateFilters, "updateFilters")
              ),
              this._actionManager.addAction(
                V.a.findWholeWord,
                S.a.application,
                Object(r.d)(this, this.updateFilters, "updateFilters")
              ),
              this._actionManager.addActionWithFlags(
                V.a.queryFindMatchCase,
                S.a.application,
                Object(r.d)(
                  this,
                  this.queryFindMatchCase,
                  "queryFindMatchCase"
                ),
                97
              ),
              this._actionManager.addActionWithFlags(
                V.a.queryFindWholeWord,
                S.a.application,
                Object(r.d)(
                  this,
                  this.queryFindWholeWord,
                  "queryFindWholeWord"
                ),
                97
              ),
              (this._pane = x.b("div", "WACSearchPane", "FindPane"));
            var c = this.createHeaderDom(i, o, s),
              h = this.createControlsDom(i, a, o, s);
            (this._results = this.createResultsDom(o, l)),
              this._pane.appendChild(c),
              this._pane.appendChild(h),
              this._pane.appendChild(this._results),
              t.appendChild(this._pane),
              (this._sampleResult = e.createSearchResult());
            var u = _.FocusManager.instance().getScope(oe.a.searchFocusID);
            u.bindAction(
              O.KeyInputManager.hashKey(M.a.vK_UpArrow, 0),
              le.a.previousSearchResult
            ),
              u.bindAction(
                O.KeyInputManager.hashKey(M.a.vK_DownArrow, 0),
                le.a.nextSearchResult
              ),
              (u.parent = I.AFrame.appFocusId),
              u.addSetFocus(function () {
                n._searchBoxInput
                  ? n._searchBoxInput.focus()
                  : C.ULS.shipAssertTag(4318920, 321, !1);
              }),
              T.a.instance.addFocusEvent(
                oe.a.searchFocusID,
                this._searchBoxInput
              ),
              p.AFrameworkApplication.activeFrame.theF6Manager.addF6KeyBindings(
                oe.a.searchFocusID
              ),
              y.App.get_activeAppFrame().add_onResize(
                Object(r.d)(this, this.positionSearchPane, "positionSearchPane")
              ),
              this._actionManager.addAction(
                le.a.hideSearchPane,
                S.a.application,
                Object(r.d)(this, this.hideSearchPane, "hideSearchPane")
              ),
              this._actionManager.addAction(
                le.a.nextSearchResult,
                S.a.application,
                Object(r.d)(this, this.nextSearchResult, "nextSearchResult")
              ),
              this._actionManager.addAction(
                le.a.previousSearchResult,
                S.a.application,
                Object(r.d)(
                  this,
                  this.previousSearchResult,
                  "previousSearchResult"
                )
              ),
              this._actionManager.addActionWithFlags(
                le.a.queryToggleSearchPane,
                S.a.application,
                Object(r.d)(
                  this,
                  this.queryToggleSearchPane,
                  "queryToggleSearchPane"
                ),
                96
              ),
              this.positionSearchPane();
          }
          var t = e.prototype;
          return (
            (t.dispose = function () {
              this.clearAllResults();
              var e = H.a.instance,
                t = T.a.instance,
                n = O.KeyInputManager.instance,
                i = P.a.instance;
              t.unregisterHandler(
                N.EventNames.click,
                this._closeButton,
                Object(r.d)(
                  this,
                  this.onClosePaneClickEvent,
                  "onClosePaneClickEvent"
                )
              ),
                n.unregisterHandlerForAllKeyEvents(
                  this._closeButton,
                  this._closeButtonKeyEventHandler
                ),
                t.unregisterHandler(
                  N.EventNames.click,
                  this._results,
                  Object(r.d)(
                    this,
                    this.resultClickedEvent,
                    "resultClickedEvent"
                  )
                ),
                j.a.isIPad ||
                  (e.unregisterHandler(
                    N.EventNames.mouseOver,
                    this._nextResultButton,
                    Object(r.d)(
                      this,
                      this.enterNextResultButtonEvent,
                      "enterNextResultButtonEvent"
                    )
                  ),
                  e.unregisterHandler(
                    N.EventNames.mouseOut,
                    this._nextResultButton,
                    Object(r.d)(
                      this,
                      this.exitNextResultButtonEvent,
                      "exitNextResultButtonEvent"
                    )
                  ),
                  e.unregisterHandler(
                    N.EventNames.mouseDown,
                    this._nextResultButton,
                    Object(r.d)(
                      this,
                      this.mouseDownNextResultButtonEvent,
                      "mouseDownNextResultButtonEvent"
                    )
                  ),
                  e.unregisterHandler(
                    N.EventNames.mouseUp,
                    this._nextResultButton,
                    Object(r.d)(
                      this,
                      this.mouseUpNextResultButtonEvent,
                      "mouseUpNextResultButtonEvent"
                    )
                  )),
                t.unregisterHandler(
                  N.EventNames.click,
                  this._nextResultButton,
                  Object(r.d)(
                    this,
                    this.clickNextResultButtonEvent,
                    "clickNextResultButtonEvent"
                  )
                ),
                j.a.isIPad ||
                  (e.unregisterHandler(
                    N.EventNames.mouseOver,
                    this._prevResultButton,
                    Object(r.d)(
                      this,
                      this.enterPrevResultButtonEvent,
                      "enterPrevResultButtonEvent"
                    )
                  ),
                  e.unregisterHandler(
                    N.EventNames.mouseOut,
                    this._prevResultButton,
                    Object(r.d)(
                      this,
                      this.exitPrevResultButtonEvent,
                      "exitPrevResultButtonEvent"
                    )
                  ),
                  e.unregisterHandler(
                    N.EventNames.mouseDown,
                    this._prevResultButton,
                    Object(r.d)(
                      this,
                      this.mouseDownPrevResultButtonEvent,
                      "mouseDownPrevResultButtonEvent"
                    )
                  ),
                  e.unregisterHandler(
                    N.EventNames.mouseUp,
                    this._prevResultButton,
                    Object(r.d)(
                      this,
                      this.mouseUpPrevResultButtonEvent,
                      "mouseUpPrevResultButtonEvent"
                    )
                  )),
                t.unregisterHandler(
                  N.EventNames.click,
                  this._prevResultButton,
                  Object(r.d)(
                    this,
                    this.clickPrevResultButtonEvent,
                    "clickPrevResultButtonEvent"
                  )
                ),
                i.unregisterHandler(
                  N.EventNames.scroll,
                  this._results,
                  Object(r.d)(this, this.onScroll, "onScroll")
                ),
                W.a.removeHandler(
                  this._prevResultButton.firstChild,
                  "focus",
                  Object(r.d)(
                    this,
                    this.focusPrevResultButtonEvent,
                    "focusPrevResultButtonEvent"
                  )
                ),
                W.a.removeHandler(
                  this._prevResultButton.firstChild,
                  "blur",
                  Object(r.d)(
                    this,
                    this.blurPrevResultButtonEvent,
                    "blurPrevResultButtonEvent"
                  )
                ),
                W.a.removeHandler(
                  this._nextResultButton.firstChild,
                  "focus",
                  Object(r.d)(
                    this,
                    this.focusNextResultButtonEvent,
                    "focusNextResultButtonEvent"
                  )
                ),
                W.a.removeHandler(
                  this._nextResultButton.firstChild,
                  "blur",
                  Object(r.d)(
                    this,
                    this.blurNextResultButtonEvent,
                    "blurNextResultButtonEvent"
                  )
                ),
                W.a.removeHandler(
                  this._prevResultButton.parentNode,
                  N.EventNames.keyUp,
                  this._prevButtonEnterHandler
                ),
                W.a.removeHandler(
                  this._nextResultButton.parentNode,
                  N.EventNames.keyUp,
                  this._nextButtonEnterHandler
                ),
                this._progress &&
                  (this._progress.dispose(), (this._progress = null)),
                (this._sampleResult = null),
                (this._resultsScroller = null),
                (this._resultsInfo = null),
                this._searchBox &&
                  (this._searchBox.dispose(), (this._searchBox = null)),
                (this._results = null),
                (this._pane = null),
                (this._nextResultButton = null),
                (this._prevResultButton = null),
                (this._closeButton = null);
            }),
            (t.createHeaderDom = function (e, t, n) {
              var i = x.b("div", "", "FindPaneHeader"),
                a = x.b(
                  "span",
                  "WACSearchHeaderText",
                  "PaneTitle FindPaneTitle UIFontLight"
                );
              return (
                (a.innerText = WordViewerIntl.WordViewerStrings.l_HeaderText),
                (this._closeButton = b.a.createButton(
                  "FindPaneCloseButton",
                  "FindPaneCloseButton",
                  WordViewerIntl.WordViewerStrings.L_Close,
                  "ClosePaneGlyph_16x16x32",
                  !1
                )),
                e
                  ? Sys.UI.DomElement.addCssClass(
                      this._closeButton,
                      "FloatLeft"
                    )
                  : Sys.UI.DomElement.addCssClass(
                      this._closeButton,
                      "FloatRight"
                    ),
                t.registerHandler(
                  N.EventNames.click,
                  this._closeButton,
                  Object(r.d)(
                    this,
                    this.onClosePaneClickEvent,
                    "onClosePaneClickEvent"
                  )
                ),
                (this._closeButtonKeyEventHandler =
                  n.registerHandlerForAllKeyEvents(
                    this._closeButton,
                    Object(r.d)(
                      this,
                      this.onClosePaneClickEvent,
                      "onClosePaneClickEvent"
                    ),
                    M.a.vK_Enter
                  )),
                i.appendChild(a),
                i.appendChild(this._closeButton),
                i
              );
            }),
            (t.createControlsDom = function (e, t, n, i) {
              var r = x.b("div", "WACSearchControls", "WACSearchControls"),
                a = this.createSearchBoxDom(e, t, n, i),
                o = this.createProgressAndNavigationDom(e, t, n);
              return r.appendChild(a), r.appendChild(o), r;
            }),
            (t.createResultsDom = function (e, t) {
              var n = x.b(
                "div",
                "WACSearchResultsPane",
                "WACSearchResultsPane"
              );
              return (
                (this._resultsScroller = x.b(
                  "div",
                  "WACSearchResultsScroller",
                  "WACSearchResultsScroller"
                )),
                (this._resultsScroller.innerText =
                  WordViewerIntl.WordViewerStrings.l_SearchText),
                t.registerHandler(
                  N.EventNames.scroll,
                  n,
                  Object(r.d)(this, this.onScroll, "onScroll")
                ),
                e.registerHandler(
                  N.EventNames.click,
                  n,
                  Object(r.d)(
                    this,
                    this.resultClickedEvent,
                    "resultClickedEvent"
                  )
                ),
                (this._searchResultsDomFactory = new R()),
                (this._searchResultsDom =
                  this._searchResultsDomFactory.createSearchResultsDom(
                    this._resultsScroller
                  )),
                n.appendChild(this._resultsScroller),
                n
              );
            }),
            (t.createSearchBoxDom = function (e, t, n, i) {
              var a = x.b("div", "", "");
              (this._searchBox = re.instance.createSearchBox(
                a,
                Object(r.d)(
                  this,
                  this.queryChangedHandler,
                  "queryChangedHandler"
                )
              )),
                this._searchBox.setMaxInputLength(255),
                (this._searchBoxInput = this._searchBox.element),
                (this._filtersDiv = x.b("div", "", "FiltersLabel")),
                e
                  ? Sys.UI.DomElement.addCssClass(this._filtersDiv, "FloatLeft")
                  : Sys.UI.DomElement.addCssClass(
                      this._filtersDiv,
                      "FloatRight"
                    ),
                a.appendChild(this._filtersDiv);
              var o = document.createElement("div");
              return (
                Sys.UI.DomElement.addCssClass(o, "ClearFloat"),
                a.appendChild(o),
                a
              );
            }),
            (t.createProgressAndNavigationDom = function (t, i, a) {
              var o = t ? "FloatLeft" : "FloatRight",
                s = x.b("div", "WACInfoAndNavigation", "WACInfoAndNavigation"),
                l = x.b("span", "WACSearchProgressSpan", " "),
                c = x.b(
                  "div",
                  "WACResultNavigationDiv",
                  "FindPaneNavigationControls " + o
                );
              return (
                (this._resultsInfo = x.b(
                  "div",
                  "WACResultsInfo",
                  "WACResultsInfo"
                )),
                (this._resultsInfo.innerText = ""),
                Sys.UI.DomElement.addCssClass(l, "WACSearchProgressSpan"),
                (this._progress = new D.a("")),
                (this._progress.isSmall = !0),
                (this._progress.text =
                  WordViewerIntl.WordViewerStrings.l_ProgressTextSearching),
                (this._progress.element.style.display = "none"),
                l.appendChild(this._progress.element),
                (this._findResultsString = x.b(
                  "span",
                  "WACSearchMatchesText",
                  "WACSearchMatchesText"
                )),
                (this._findResultsString.style.display = "none"),
                l.appendChild(this._findResultsString),
                (this._prevResultButton = F.createClusteredImage(
                  17,
                  14,
                  "",
                  "WACResultNavigation ",
                  !0,
                  WordViewerIntl.WordViewerStrings.l_PrevButtonTitle
                )),
                (this._prevResultButton.id = "WACPrevResultButtonSpan"),
                (this._prevResultButtonFlag = 1),
                e.setButton(
                  this._prevResultButton,
                  this._prevResultButtonFlag,
                  "ReorderUp",
                  "_17x14x24"
                ),
                (this._nextResultButton = F.createClusteredImage(
                  17,
                  14,
                  "",
                  "WACResultNavigation ",
                  !0,
                  WordViewerIntl.WordViewerStrings.l_NextButtonTitle
                )),
                (this._nextResultButton.id = "WACNextResultButtonSpan"),
                (this._nextResultButtonFlag = 1),
                e.setButton(
                  this._nextResultButton,
                  this._nextResultButtonFlag,
                  "ReorderDown",
                  "_17x14x24"
                ),
                j.a.isIPad ||
                  (i.registerHandler(
                    N.EventNames.mouseOver,
                    this._nextResultButton,
                    Object(r.d)(
                      this,
                      this.enterNextResultButtonEvent,
                      "enterNextResultButtonEvent"
                    )
                  ),
                  i.registerHandler(
                    N.EventNames.mouseOut,
                    this._nextResultButton,
                    Object(r.d)(
                      this,
                      this.exitNextResultButtonEvent,
                      "exitNextResultButtonEvent"
                    )
                  ),
                  i.registerHandler(
                    N.EventNames.mouseDown,
                    this._nextResultButton,
                    Object(r.d)(
                      this,
                      this.mouseDownNextResultButtonEvent,
                      "mouseDownNextResultButtonEvent"
                    )
                  ),
                  i.registerHandler(
                    N.EventNames.mouseUp,
                    this._nextResultButton,
                    Object(r.d)(
                      this,
                      this.mouseUpNextResultButtonEvent,
                      "mouseUpNextResultButtonEvent"
                    )
                  )),
                a.registerHandler(
                  N.EventNames.click,
                  this._nextResultButton,
                  Object(r.d)(
                    this,
                    this.clickNextResultButtonEvent,
                    "clickNextResultButtonEvent"
                  )
                ),
                j.a.isIPad ||
                  (i.registerHandler(
                    N.EventNames.mouseOver,
                    this._prevResultButton,
                    Object(r.d)(
                      this,
                      this.enterPrevResultButtonEvent,
                      "enterPrevResultButtonEvent"
                    )
                  ),
                  i.registerHandler(
                    N.EventNames.mouseOut,
                    this._prevResultButton,
                    Object(r.d)(
                      this,
                      this.exitPrevResultButtonEvent,
                      "exitPrevResultButtonEvent"
                    )
                  ),
                  i.registerHandler(
                    N.EventNames.mouseDown,
                    this._prevResultButton,
                    Object(r.d)(
                      this,
                      this.mouseDownPrevResultButtonEvent,
                      "mouseDownPrevResultButtonEvent"
                    )
                  ),
                  i.registerHandler(
                    N.EventNames.mouseUp,
                    this._prevResultButton,
                    Object(r.d)(
                      this,
                      this.mouseUpPrevResultButtonEvent,
                      "mouseUpPrevResultButtonEvent"
                    )
                  )),
                a.registerHandler(
                  N.EventNames.click,
                  this._prevResultButton,
                  Object(r.d)(
                    this,
                    this.clickPrevResultButtonEvent,
                    "clickPrevResultButtonEvent"
                  )
                ),
                this.createNavigationButtonFrame(c, this._prevResultButton),
                this.createNavigationButtonFrame(c, this._nextResultButton),
                this.showHideNavigationButtons(!1),
                (this._nextButtonEnterHandler =
                  e.getNavigationButtonKeyUpHandler(function () {
                    n(528).SearchManager.instance.goToNextResult();
                  })),
                (this._prevButtonEnterHandler =
                  e.getNavigationButtonKeyUpHandler(function () {
                    n(528).SearchManager.instance.goToPrevResult();
                  })),
                W.a.addHandler(
                  this._prevResultButton.parentNode,
                  N.EventNames.keyUp,
                  this._prevButtonEnterHandler
                ),
                W.a.addHandler(
                  this._nextResultButton.parentNode,
                  N.EventNames.keyUp,
                  this._nextButtonEnterHandler
                ),
                Sys.UI.DomElement.addCssClass(
                  this._prevResultButton,
                  "WACNavigationButton"
                ),
                Sys.UI.DomElement.addCssClass(
                  this._nextResultButton,
                  "WACNavigationButton"
                ),
                t
                  ? (Sys.UI.DomElement.addCssClass(
                      this._prevResultButton.parentNode,
                      "FloatRight"
                    ),
                    Sys.UI.DomElement.addCssClass(
                      this._nextResultButton.parentNode,
                      "FloatLeft"
                    ))
                  : (Sys.UI.DomElement.addCssClass(
                      this._prevResultButton.parentNode,
                      "FloatLeft"
                    ),
                    Sys.UI.DomElement.addCssClass(
                      this._nextResultButton.parentNode,
                      "FloatRight"
                    )),
                W.a.addHandler(
                  this._prevResultButton.firstChild,
                  "focus",
                  Object(r.d)(
                    this,
                    this.focusPrevResultButtonEvent,
                    "focusPrevResultButtonEvent"
                  )
                ),
                W.a.addHandler(
                  this._prevResultButton.firstChild,
                  "blur",
                  Object(r.d)(
                    this,
                    this.blurPrevResultButtonEvent,
                    "blurPrevResultButtonEvent"
                  )
                ),
                W.a.addHandler(
                  this._nextResultButton.firstChild,
                  "focus",
                  Object(r.d)(
                    this,
                    this.focusNextResultButtonEvent,
                    "focusNextResultButtonEvent"
                  )
                ),
                W.a.addHandler(
                  this._nextResultButton.firstChild,
                  "blur",
                  Object(r.d)(
                    this,
                    this.blurNextResultButtonEvent,
                    "blurNextResultButtonEvent"
                  )
                ),
                s.appendChild(c),
                s.appendChild(l),
                s.appendChild(this._resultsInfo),
                s
              );
            }),
            (t.createNavigationButtonFrame = function (e, t) {
              var n = x.b("div", null, "WACNavigationButtonFrame");
              (n.tabIndex = 0), e.appendChild(n), n.appendChild(t);
            }),
            (t.foundResult = function (t, n) {
              if (
                (this._searchResultsDom.addResult(
                  t.context,
                  n,
                  String.format(
                    WordViewerIntl.WordViewerStrings.l_ResultToolTip,
                    t.page
                  )
                ),
                n || this.showHideNavigationButtons(!0),
                1 === n)
              ) {
                if (!this._isAutoFind) {
                  var i = _.FocusManager.instance();
                  i.currentScope &&
                    i.currentScope.name === oe.a.searchFocusID &&
                    _.FocusManager.tryFocus(this._nextResultButton.parentNode),
                    this._searchBoxInput &&
                      _.FocusManager.tryBlur(this._searchBoxInput);
                }
                (this._nextResultButtonFlag &= -2),
                  e.setButton(
                    this._nextResultButton,
                    this._nextResultButtonFlag,
                    "ReorderDown",
                    "_17x14x24"
                  ),
                  (this._prevResultButtonFlag &= -2),
                  e.setButton(
                    this._prevResultButton,
                    this._prevResultButtonFlag,
                    "ReorderUp",
                    "_17x14x24"
                  );
              }
            }),
            (t.showHideNavigationButtons = function (e) {
              var t = e ? "inline-block" : "none";
              this._prevResultButton &&
                this._prevResultButton.parentNode &&
                (this._prevResultButton.parentNode.style.display = t),
                this._nextResultButton &&
                  this._nextResultButton.parentNode &&
                  (this._nextResultButton.parentNode.style.display = t);
            }),
            (t.goToResult = function (e, t) {
              return this._searchResultsDom.goToResult(this._results, e, t);
            }),
            (t.startSearch = function () {
              (this._progress.element.style.display = "inline-block"),
                (this._findResultsString.style.display = "none"),
                (this._resultsScroller.innerText = ""),
                (this._resultsInfo.innerText = String.format(
                  WordViewerIntl.WordViewerStrings.l_ResultsInfoText,
                  y.App.instance.theDocument.pageCount
                )),
                this.clearAllResults(),
                (this._resultsScroller.parentNode.className =
                  "WACSearchResultsPane"),
                this.updateSearchBoxState();
            }),
            (t.updateSearchBoxState = function () {
              this._searchBox &&
                (this._searchBox.updateControl(k.searchBoxSplitButtonId),
                this._searchBox.updateControl(k.cancelSearchMenuId));
            }),
            (t.reset = function () {
              (this._progress.element.style.display = "none"),
                (this._findResultsString.style.display = "none"),
                (this._resultsInfo.innerText = ""),
                this.clearAllResults(),
                (this._resultsScroller.innerText =
                  WordViewerIntl.WordViewerStrings.l_SearchText),
                this._searchBox.reset(),
                this.updateSearchBoxState(),
                (this._resultsScroller.parentNode.className =
                  "WACSearchResultsPaneEmpty");
            }),
            (t.resumeSearch = function () {
              (this._progress.element.style.display = "inline-block"),
                (this._findResultsString.style.display = "none");
            }),
            (t.doneSearch = function (e) {
              (this._progress.element.style.display = "none"),
                (this._findResultsString.style.display = "inline-block"),
                (this._findResultsString.innerText = e
                  ? 1 === e
                    ? WordViewerIntl.WordViewerStrings.l_ProgressTextOneResult
                    : String.format(
                        WordViewerIntl.WordViewerStrings
                          .l_ProgressTextManyResults,
                        e
                      )
                  : WordViewerIntl.WordViewerStrings.l_ProgressTextNoResults);
            }),
            (t.doneSearchingPage = function (e) {
              this._resultsInfo.innerText = String.format(
                WordViewerIntl.WordViewerStrings.l_NumberOfSearchedPages,
                e,
                y.App.instance.theDocument.pageCount
              );
            }),
            (t.canPauseSearch = function () {
              var e = this._searchResultsDom.getLastResultBoxOffsetTop();
              return (
                !isNaN(e) &&
                this._results.scrollTop + this._results.offsetHeight < e
              );
            }),
            (t.clearAllResults = function () {
              this._searchResultsDom.clearAllResults(),
                (this._prevResultButtonFlag |= 1),
                e.setButton(
                  this._prevResultButton,
                  this._prevResultButtonFlag,
                  "ReorderUp",
                  "_17x14x24"
                ),
                (this._nextResultButtonFlag |= 1),
                e.setButton(
                  this._nextResultButton,
                  this._nextResultButtonFlag,
                  "ReorderDown",
                  "_17x14x24"
                ),
                this.showHideNavigationButtons(!1);
            }),
            (t.nextSearchResult = function (e, t, i, r, a) {
              var o = n(528).SearchManager;
              return 1 === i
                ? y.App.isReadyForRibbon()
                  ? 32
                  : 8
                : (y.App.get_activeAppFrame().isSearchPaneVisible &&
                    o.instance.totalResults &&
                    o.instance.goToNextResult(),
                  32);
            }),
            (t.previousSearchResult = function (e, t, i, r, a) {
              var o = n(528).SearchManager;
              return 1 === i
                ? y.App.isReadyForRibbon()
                  ? 32
                  : 8
                : (y.App.get_activeAppFrame().isSearchPaneVisible &&
                    o.instance.totalResults &&
                    o.instance.goToPrevResult(),
                  32);
            }),
            (t.enterNextResultButtonEvent = function (t) {
              return (
                1 !== this._nextResultButtonFlag &&
                  Sys.UI.DomElement.addCssClass(
                    this._nextResultButton.parentNode,
                    "WACNavigationButtonFrameHover"
                  ),
                e.enterEvent(
                  this._nextResultButton,
                  this._nextResultButtonFlag,
                  "ReorderDown",
                  "_17x14x24"
                )
              );
            }),
            (t.focusNextResultButtonEvent = function (t) {
              1 !== this._nextResultButtonFlag &&
                Sys.UI.DomElement.addCssClass(
                  this._nextResultButton.parentNode,
                  "WACNavigationButtonFrameHover"
                ),
                e.enterEvent(
                  this._nextResultButton,
                  this._nextResultButtonFlag,
                  "ReorderDown",
                  "_17x14x24"
                );
            }),
            (t.exitNextResultButtonEvent = function (t) {
              return (
                Sys.UI.DomElement.removeCssClass(
                  this._nextResultButton.parentNode,
                  "WACNavigationButtonFrameHover"
                ),
                e.exitEvent(
                  this._nextResultButton,
                  this._nextResultButtonFlag,
                  "ReorderDown",
                  "_17x14x24"
                )
              );
            }),
            (t.blurNextResultButtonEvent = function (t) {
              Sys.UI.DomElement.removeCssClass(
                this._nextResultButton.parentNode,
                "WACNavigationButtonFrameHover"
              ),
                e.exitEvent(
                  this._nextResultButton,
                  this._nextResultButtonFlag,
                  "ReorderDown",
                  "_17x14x24"
                );
            }),
            (t.mouseDownNextResultButtonEvent = function (t) {
              return e.mouseDownEvent(
                this._nextResultButton,
                this._nextResultButtonFlag,
                "ReorderDown",
                "_17x14x24"
              );
            }),
            (t.mouseUpNextResultButtonEvent = function (t) {
              return e.mouseUpEvent(
                this._nextResultButton,
                this._nextResultButtonFlag,
                "ReorderDown",
                "_17x14x24"
              );
            }),
            (t.clickNextResultButtonEvent = function (e) {
              var t = n(528).SearchManager;
              return (
                1 & this._nextResultButtonFlag || t.instance.goToNextResult(),
                !0
              );
            }),
            (t.enterPrevResultButtonEvent = function (t) {
              return (
                1 !== this._prevResultButtonFlag &&
                  Sys.UI.DomElement.addCssClass(
                    this._prevResultButton.parentNode,
                    "WACNavigationButtonFrameHover"
                  ),
                e.enterEvent(
                  this._prevResultButton,
                  this._prevResultButtonFlag,
                  "ReorderUp",
                  "_17x14x24"
                )
              );
            }),
            (t.focusPrevResultButtonEvent = function (t) {
              1 !== this._prevResultButtonFlag &&
                Sys.UI.DomElement.addCssClass(
                  this._prevResultButton.parentNode,
                  "WACNavigationButtonFrameHover"
                ),
                e.enterEvent(
                  this._prevResultButton,
                  this._prevResultButtonFlag,
                  "ReorderUp",
                  "_17x14x24"
                );
            }),
            (t.exitPrevResultButtonEvent = function (t) {
              return (
                Sys.UI.DomElement.removeCssClass(
                  this._prevResultButton.parentNode,
                  "WACNavigationButtonFrameHover"
                ),
                e.exitEvent(
                  this._prevResultButton,
                  this._prevResultButtonFlag,
                  "ReorderUp",
                  "_17x14x24"
                )
              );
            }),
            (t.blurPrevResultButtonEvent = function (t) {
              Sys.UI.DomElement.removeCssClass(
                this._prevResultButton.parentNode,
                "WACNavigationButtonFrameHover"
              ),
                e.exitEvent(
                  this._prevResultButton,
                  this._prevResultButtonFlag,
                  "ReorderUp",
                  "_17x14x24"
                );
            }),
            (t.mouseDownPrevResultButtonEvent = function (t) {
              return e.mouseDownEvent(
                this._prevResultButton,
                this._prevResultButtonFlag,
                "ReorderUp",
                "_17x14x24"
              );
            }),
            (t.mouseUpPrevResultButtonEvent = function (t) {
              return e.mouseUpEvent(
                this._prevResultButton,
                this._prevResultButtonFlag,
                "ReorderUp",
                "_17x14x24"
              );
            }),
            (t.clickPrevResultButtonEvent = function (e) {
              var t = n(528).SearchManager;
              return (
                1 & this._prevResultButtonFlag || t.instance.goToPrevResult(),
                !0
              );
            }),
            (t.resultClickedEvent = function (e) {
              var t = n(528).SearchManager;
              _.FocusManager.tryBlur(this._searchBoxInput),
                _.FocusManager.tryFocus(
                  y.App.get_activeAppFrame().workspace.appBaseDom
                );
              var i = e.sourceElement;
              var r = this._searchResultsDom.getSearchPaneIndex(i);
              if (isNaN(r)) {
                if (!t.instance.totalResults) return !1;
                _.FocusManager.instance().setScope(oe.a.searchFocusID);
              } else t.instance.setCurrentResult(r);
              return !0;
            }),
            (t.onClosePaneClickEvent = function (e) {
              return (
                p.AFrameworkApplication.theActionManager.processAction(
                  le.a.hideSearchPane,
                  2
                ),
                !0
              );
            }),
            (t.onScroll = function (e) {
              var t = n(528).SearchManager.instance;
              return (
                t.isSearchComplete ||
                  t.isSearchActive() ||
                  this.canPauseSearch() ||
                  t.resumeSearch(),
                !1
              );
            }),
            (t.positionSearchPane = function () {
              var e = !0,
                t = null;
              y.App.get_activeAppFrame().isSearchPaneVisible
                ? ((this._pane.style.visibility = "visible"),
                  y.App.get_activeAppFrame().isSearchPaneTouchMode
                    ? Sys.UI.DomElement.addCssClass(
                        this._pane,
                        I.AFrame.dynamicTouchModeCssClass
                      )
                    : Sys.UI.DomElement.removeCssClass(
                        this._pane,
                        I.AFrame.dynamicTouchModeCssClass
                      ),
                  (t = Object(r.d)(
                    this,
                    this.onAfterSearchPaneShow,
                    "onAfterSearchPaneShow"
                  )))
                : ((e = !1),
                  (t = Object(r.d)(
                    this,
                    this.onAfterSearchPaneHide,
                    "onAfterSearchPaneHide"
                  )));
              var n = y.App.instance.theConfig.searchPaneWidth,
                i = y.App.get_activeAppFrame().workspace.getHeight();
              (this._results.style.height =
                i > this._results.offsetTop
                  ? i - this._results.offsetTop + "px"
                  : "0px"),
                (this._pane.style.width = n + "px"),
                se.a.animateFindPane(this._pane, e, t);
            }),
            (t.onAfterSearchPaneShow = function (e) {
              (this._pane.style.visibility = "visible"),
                ae.a.instance.calculateOffset();
            }),
            (t.onAfterSearchPaneHide = function (e) {
              (this._pane.style.visibility = "hidden"),
                ae.a.instance.calculateOffset();
            }),
            (t.queryChangedHandler = function (e, t) {
              var i = n(528).SearchManager;
              e && e.length
                ? ((this._isAutoFind = t), this.startNewSearch(e))
                : i.instance.stopSearch();
            }),
            (t.startNewSearch = function (e) {
              var t = n(528).SearchManager;
              if (e && e.length) {
                var i = this.createQuery(e);
                i && t.instance.startSearch(i);
              }
            }),
            (t.createQuery = function (e) {
              var t = 0;
              return (
                this.matchCase && (t |= 1),
                this.matchWholeWord && (t |= 2),
                B.a.createQuery(e, t)
              );
            }),
            (t.showSearchPane = function (e, t, i, r, a) {
              var o = n(528).SearchManager;
              if (1 === i) return y.App.isReadyForRibbon() ? 32 : 8;
              if (!y.App.get_activeAppFrame().isSearchPaneVisible) {
                ae.a.instance.hideSelection();
                var s = 0;
                if (a) s = a.inputMethod;
                o.instance.clearQuery(),
                  y.App.get_activeAppFrame().showSearchPane(s);
              }
              this._resultsScroller.children.length ||
                (this._resultsScroller.parentNode.className =
                  "WACSearchResultsPaneEmpty"),
                p.AFrameworkApplication.activeFrame.theF6Manager.activateFocus(
                  oe.a.searchFocusID
                ),
                _.FocusManager.instance().setScope(oe.a.searchFocusID);
              var l = y.App.get_activeAppFrame().ribbonUser;
              return l && l.poll(), 32;
            }),
            (t.hideSearchPane = function (e, t, i, r, a) {
              var o = n(528).SearchManager;
              if (1 === i) return 32;
              var s = y.App.get_activeAppFrame();
              s.isSearchPaneVisible &&
                (ae.a.instance.hideSelection(),
                s.hideSearchPane(),
                o.instance.stopSearch());
              var l = _.FocusManager.instance();
              l.currentScope &&
                l.currentScope.name === oe.a.searchFocusID &&
                l.setScope(l.defaultScopeName);
              p.AFrameworkApplication.activeFrame.theF6Manager.deactivateFocus(
                oe.a.searchFocusID
              );
              var c = y.App.get_activeAppFrame().ribbonUser;
              return c && c.poll(), 32;
            }),
            (t.toggleSearchPane = function (e, t, n, i, r) {
              return y.App.get_activeAppFrame().isSearchPaneVisible
                ? this.hideSearchPane(e, t, n, i, r)
                : this.showSearchPane(e, t, n, i, r);
            }),
            (t.queryToggleSearchPane = function (e, t, n, i, r) {
              return (
                1 === n ||
                  (r[L.a.On] = y.App.get_activeAppFrame().isSearchPaneVisible),
                32
              );
            }),
            (t.queryClearSearch = function (e, t, n, i, r) {
              var a = r,
                o = !this._searchBox || "" === this._searchBox.value;
              return (
                (a[U.a.Image16by16Class] = o
                  ? F.getImageClass(A.splitButtonSearchIcon)
                  : F.getImageClass(A.splitButtonCancelIcon)),
                (a[U.a.LabelText] = o
                  ? WordViewerIntl.WordViewerStrings.l_SearchButtonTitleBegin
                  : WordViewerIntl.WordViewerStrings.l_SearchButtonTitleEnd),
                (a[U.a.On] = !1),
                32
              );
            }),
            (t.clearSearch = function (e, t, i, r, a) {
              var o = n(528).SearchManager;
              return 1 === i || o.instance.stopSearch(), 32;
            }),
            (t.clearSearchFromSearchMenu = function (e, t, i, r, a) {
              var o = n(528).SearchManager;
              return 1 === i
                ? !this._searchBox || "" === this._searchBox.value
                  ? 8
                  : 32
                : (o.instance.stopSearch(),
                  this._searchBox && this._searchBox.setFocus(),
                  32);
            }),
            (t.updateFilters = function (e, t, n, i, r) {
              if (1 === n) return 32;
              switch (e) {
                case V.a.findMatchCase:
                  this.toggleMatchCaseFilter();
                  break;
                case V.a.findWholeWord:
                  this.toggleMatchWholeWordFilter();
              }
              return this.startNewSearch(this._searchBox.value), 32;
            }),
            (t.queryFindMatchCase = function (e, t, n, i, r) {
              return (r[L.a.On] = this.matchCase), 32;
            }),
            (t.queryFindWholeWord = function (e, t, n, i, r) {
              return (r[L.a.On] = this.matchWholeWord), 32;
            }),
            (t.toggleMatchWholeWordFilter = function () {
              (this.matchWholeWord = !this.matchWholeWord),
                this._searchBox &&
                  this._searchBox.updateControl(k.buttonFindMatchWholeWordId),
                this.updateFiltersLabel(),
                this._searchBox && this._searchBox.setFocus();
            }),
            (t.toggleMatchCaseFilter = function () {
              (this.matchCase = !this.matchCase),
                this._searchBox &&
                  this._searchBox.updateControl(k.buttonFindMatchCaseId),
                this.updateFiltersLabel(),
                this._searchBox && this._searchBox.setFocus();
            }),
            (t.updateFiltersLabel = function () {
              var e = this.matchCase || this.matchWholeWord;
              (this._filtersDiv.style.display = e ? "block" : "none"),
                e && (this._filtersDiv.innerText = this.getFiltersLabel());
            }),
            (t.getFiltersLabel = function () {
              var e = "";
              return (
                this.matchCase && this.matchWholeWord
                  ? (e = String.format(
                      WordViewerIntl.WordViewerStrings
                        .l_FindMultipleFiltersLabelText,
                      WordViewerIntl.WordViewerStrings.l_MatchCase,
                      WordViewerIntl.WordViewerStrings.l_MatchWholeWord
                    ))
                  : this.matchCase
                  ? (e = String.format(
                      WordViewerIntl.WordViewerStrings.l_FindFilterLabelText,
                      WordViewerIntl.WordViewerStrings.l_MatchCase
                    ))
                  : this.matchWholeWord &&
                    (e = String.format(
                      WordViewerIntl.WordViewerStrings.l_FindFilterLabelText,
                      WordViewerIntl.WordViewerStrings.l_MatchWholeWord
                    )),
                e
              );
            }),
            (e.getNavigationButtonKeyUpHandler = function (e) {
              return function (t) {
                var n = t.keyCode;
                (n !== M.a.vK_Enter && n !== M.a.vK_Space) || e();
              };
            }),
            (e.createSearchResult = function () {
              var e = x.b("div", null, "WACResultOutline"),
                t = x.b("div", null, "WACSearchResult"),
                n = x.b("span", null, null),
                i = x.b("span", null, "WACContext"),
                r = x.b("span", null, null);
              return (
                t.appendChild(n),
                t.appendChild(i),
                t.appendChild(r),
                e.appendChild(t),
                e
              );
            }),
            (e.enterEvent = function (t, n, i, r) {
              return (n |= 4), e.setButton(t, n, i, r), !0;
            }),
            (e.exitEvent = function (t, n, i, r) {
              return (n &= -13), e.setButton(t, n, i, r), !0;
            }),
            (e.mouseDownEvent = function (t, n, i, r) {
              return (n |= 8), e.setButton(t, n, i, r), !0;
            }),
            (e.mouseUpEvent = function (t, n, i, r) {
              return (n &= -9), (n |= 4), e.setButton(t, n, i, r), !0;
            }),
            (e.setButton = function (e, t, n, i) {
              var r = e.firstChild;
              if (
                (4 & t && "Search" !== n && !(1 & t) && (n += "Hover"),
                2 & t && (n = "cancel" + n),
                1 & t)
              )
                return (
                  (r.className = F.getImageClass(n + "Disabled" + i)),
                  void (r.style.cursor = "default")
                );
              r.className = F.getImageClass(n + i);
            }),
            e
          );
        })();
      Object(i.a)(ce, "SearchPane", null, [4]);
      var he = n(39),
        ue = n(540),
        de = n(91);
      function ge(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var me = (function () {
        function e(e, t, n, i, r) {
          (this._zoomControl = null),
            (this._scrollControl = null),
            (this._context = e),
            (this._page = t),
            (this._hitOnPage = n),
            (this._textrunIdOfContainingParagraph = r),
            (this._location = i);
        }
        var t,
          n,
          i,
          r = e.prototype;
        return (
          (r.dispose = function () {
            this._location = null;
          }),
          (r.getScrollTop = function () {
            var e = this.zoomControl.currentZoom,
              t = de.a.instance.getPageTopAtZoom(this._page, e),
              n = this.scrollControl.getScrollTop(),
              i = t + this._location.top * e;
            if (i < n)
              return Math.round(
                i -
                  e *
                    (this._location.height *
                      y.App.instance.theConfig.searchResultVerticalMultiplier)
              );
            var r = this.scrollControl.getClientHeight(),
              a = n + r,
              o = i + this._location.height * e;
            return o > a
              ? Math.round(
                  o +
                    this._location.height *
                      y.App.instance.theConfig.searchResultVerticalMultiplier *
                      e -
                    r
                )
              : Number.NaN;
          }),
          (r.getScrollLeft = function () {
            var e = this.zoomControl.currentZoom,
              t = this.scrollControl.getScrollLeft(),
              n = this.scrollControl.getWidth(),
              i = t + n;
            if (p.AFrameworkApplication.isRtl) {
              var r = de.a.instance.getDistanceOfPageLeftFromScrollerRightEdge(
                  this._page,
                  e
                ),
                a = r - this._location.left * e,
                o = r - (this._location.left + this._location.width) * e;
              if (o > (t = Math.abs(t)))
                return Math.round(
                  a - y.App.instance.theConfig.searchResultHorizontalBuffer
                );
              if (a < t)
                return Math.round(
                  o - y.App.instance.theConfig.searchResultHorizontalBuffer
                );
            } else {
              var s =
                  de.a.instance.getPageLeftAtZoom(this._page, e, !1) +
                  this._location.left * e,
                l = s + this._location.width * e;
              if (s < t)
                return Math.round(
                  s - y.App.instance.theConfig.searchResultHorizontalBuffer
                );
              if (l > i)
                return Math.round(
                  l - n + y.App.instance.theConfig.searchResultHorizontalBuffer
                );
            }
            return Number.NaN;
          }),
          (t = e),
          (n = [
            {
              key: "context",
              get: function () {
                return this._context;
              },
            },
            {
              key: "zoomControl",
              get: function () {
                return (
                  this._zoomControl ||
                  (this._zoomControl = f.a.instance.resolve(
                    "WordViewer.Controls.IZoomControl"
                  ))
                );
              },
            },
            {
              key: "scrollControl",
              get: function () {
                return (
                  this._scrollControl ||
                  (this._scrollControl = f.a.instance.resolve(
                    "WordViewer.Controls.IScrollControl"
                  ))
                );
              },
            },
            {
              key: "id",
              get: function () {
                return String.format("{0}-{1}", this._page, this._hitOnPage);
              },
            },
            {
              key: "page",
              get: function () {
                return this._page;
              },
            },
            {
              key: "paragraphTextrunId",
              get: function () {
                return this._textrunIdOfContainingParagraph;
              },
            },
          ]) && ge(t.prototype, n),
          i && ge(t, i),
          e
        );
      })();
      Object(i.a)(me, "SearchResult", null, [4]);
      var pe = n(541),
        _e = n(36);
      function fe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var ve = (function () {
        function e(e) {
          (this._isPaused = !0),
            (this._nextSearchTask = null),
            (this._pageBeingSearched = 0),
            (this._countHitsOnPage = 0),
            (this._isComplete = !0),
            (this._paragraphXmls = null),
            (this._paragraphBeingSearched = 0),
            (this._searchResults = []),
            (this._countRunCharacters = 0),
            (this._countRunParagraphs = 0),
            (this._searchContextFactory = e);
        }
        var t,
          i,
          a,
          o = e.prototype;
        return (
          (o.startSearch = function () {
            this.reset(),
              (this._isComplete = !1),
              (this._isPaused = !1),
              (this._countHitsOnPage = 0),
              this.getNextPage();
          }),
          (o.reset = function () {
            this.stopSearchTask(),
              this.clearSearchResults(),
              (this._isPaused = !0),
              (this._pageBeingSearched = 0),
              (this._isComplete = !0),
              (this._paragraphXmls = null);
          }),
          (o.resumeSearch = function () {
            n(528).SearchManager;
            this._pageBeingSearched &&
              ((this._isPaused = !1),
              p.AFrameworkApplication.theWsaClient.incrementDw(89406, 1),
              this.getNextPage());
          }),
          (o.getNextPage = function () {
            this._pageBeingSearched++,
              y.App.get_activeAppFrame().thePageInfoCache.updateSearchCache(
                this._pageBeingSearched
              ),
              (this._nextSearchTask = new he.a(
                3,
                1,
                y.App.instance.theConfig.searchTaskDelay,
                Object(r.d)(this, this.waitOnNextPage, "waitOnNextPage")
              )),
              p.AFrameworkApplication.theTaskManager.addTask(
                this._nextSearchTask
              );
          }),
          (o.waitOnNextPage = function (e) {
            var t = y.App.get_activeAppFrame().thePageInfoCache.getXmlForPage(
              this._pageBeingSearched
            );
            if (t) {
              if (
                ((this._paragraphXmls = t.selectNodes("descendant::P")),
                (this._paragraphBeingSearched = 0),
                !this._paragraphXmls.length)
              )
                return void this.getNextPage();
              this._nextSearchTask = new he.a(
                3,
                1,
                y.App.instance.theConfig.searchTaskDelay,
                Object(r.d)(
                  this,
                  this.parseParagraphXmlTask,
                  "parseParagraphXmlTask"
                )
              );
            } else 0;
            p.AFrameworkApplication.theTaskManager.addTask(
              this._nextSearchTask
            );
          }),
          (o.parseParagraphXmlTask = function (e) {
            (this._countRunCharacters = 0), (this._countRunParagraphs = 0);
            for (
              var t = y.App.instance.theConfig;
              this._paragraphBeingSearched < this._paragraphXmls.length &&
              this._countRunCharacters < t.minCharactersToSearchBeforePausing &&
              this._countRunParagraphs < t.maxParagraphsToSearchBeforePausing;

            )
              this.parseParagraphXml();
            if (this._paragraphBeingSearched < this._paragraphXmls.length)
              p.AFrameworkApplication.theTaskManager.addTask(
                this._nextSearchTask
              );
            else {
              var i = y.App.get_activeAppFrame().workspace,
                r = n(528).SearchManager.instance;
              r.doneSearchingPage(this._pageBeingSearched),
                (this._countHitsOnPage = 0);
              var a = de.a.instance.pageCount;
              this._pageBeingSearched === a
                ? ((this._nextSearchTask = null),
                  (this._isComplete = !0),
                  r.doneSearch(this._searchResults.length))
                : !(
                    this._pageBeingSearched %
                    y.App.instance.theConfig.searchPageIncrement
                  ) &&
                  this._pageBeingSearched >= i.getLastCachedPage() &&
                  r.canPauseSearch()
                ? ((this._isPaused = !0),
                  (this._nextSearchTask = null),
                  p.AFrameworkApplication.theWsaClient.incrementDw(89405, 1))
                : this.getNextPage();
            }
          }),
          (o.parseParagraphXml = function () {
            var e = this._paragraphXmls[this._paragraphBeingSearched];
            if (!e.selectSingleNode("ancestor::P")) {
              var t = e.selectNodes("descendant::T/text()"),
                n = pe.a(t);
              t.length && this.grepTheText(n, t),
                this._countRunParagraphs++,
                (this._countRunCharacters += n.length);
            }
            this._paragraphBeingSearched++;
          }),
          (o.grepTheText = function (e, t) {
            for (
              var i,
                r,
                a,
                o = n(528).SearchManager.instance,
                s = o.regex,
                l = parseInt(
                  t[0]
                    .selectSingleNode("ancestor::Page")
                    .attributes.getNamedItem("id").nodeValue
                ),
                c = 0,
                h = 0;
              (a = s.exec(e));

            ) {
              (i = a.index), (r = s.lastIndex);
              for (
                var u = 0,
                  d = this._searchContextFactory.createSearchContext(
                    e,
                    a[0],
                    i,
                    r,
                    ""
                  ),
                  g = null;
                c < t.length;
                ++c
              ) {
                if (((u = h + t[c].data.length), h < r && u > i)) {
                  0,
                    (g = ue.a.instance.estimatedBoundingBox(
                      t[c].parentNode,
                      i - h,
                      Math.min(u - h, r - h)
                    ));
                  break;
                }
                h = u;
              }
              var m = parseInt(_e.a.parseXmlAttribute(t[0].parentNode, "id")),
                p = new me(d, l, this._countHitsOnPage, g, m);
              (this._searchResults[this._searchResults.length] = p),
                this._countHitsOnPage++,
                o.foundResult(p, this._searchResults.length - 1),
                1 === this._searchResults.length && o.foundFirstSearchResult();
            }
          }),
          (o.stopSearchTask = function () {
            this._nextSearchTask &&
              (p.AFrameworkApplication.theTaskManager.deleteTask(
                this._nextSearchTask
              ),
              (this._nextSearchTask = null)),
              y.App.get_activeAppFrame().thePageInfoCache &&
                y.App.get_activeAppFrame().thePageInfoCache.removeSearchCache();
          }),
          (o.clearSearchResults = function () {
            for (var e = 0; e < this._searchResults.length; ++e)
              this._searchResults[e].dispose(), (this._searchResults[e] = null);
            Array.clear(this._searchResults), (this._searchResults = []);
          }),
          (o.pageCacheChanged = function (e) {
            var t = n(528).SearchManager;
            e >= this._pageBeingSearched && t.instance.resumeSearch();
          }),
          (o.getResult = function (e) {
            return this._searchResults[e];
          }),
          (o.dispose = function () {
            this.reset(),
              (this._searchResults = null),
              (this._searchContextFactory = null);
          }),
          (e.createInstanceWithResolvedDependencies = function (t) {
            return new e(t);
          }),
          (e.createInstance = function (t) {
            return e.createInstanceWithResolvedDependencies(t);
          }),
          (t = e),
          (i = [
            {
              key: "pageBeingSearched",
              get: function () {
                return this._pageBeingSearched;
              },
            },
            {
              key: "complete",
              get: function () {
                return this._isComplete;
              },
            },
            {
              key: "paused",
              get: function () {
                return this._isPaused;
              },
            },
            {
              key: "totalResults",
              get: function () {
                return this._searchResults.length;
              },
            },
          ]) && fe(t.prototype, i),
          a && fe(t, a),
          e
        );
      })();
      function Ce(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      Object(i.a)(ve, "SearchWorker", null, [4]),
        n.d(t, "SearchManager", function () {
          return ye;
        });
      var ye = (function () {
        function e(t, i, a) {
          var o;
          (this._originalQuery = null), (this._regex = null);
          var s = n(550).HighlightWorker,
            l = n(546).CurrentResult;
          (this._searchWorker = ve.createInstance(e.getSearchContextFactory())),
            (this._highlightWorker = s.createInstance(i)),
            (this._currentResult = new l()),
            (this._searchPane = new ce(t)),
            C.ULS.sendTraceTag(
              4575576,
              313,
              50,
              "{0}",
              (((o = {}).SearchPaneCreation = !!this._searchPane), o)
            ),
            (this._queryProcessor = m.instance),
            (this._findUtils = a),
            (this._currentQueryString = ""),
            p.AFrameworkApplication.theActionManager.addActionWithFlags(
              le.a.pageCacheChanged,
              S.a.application,
              Object(r.d)(this, this.pageCacheChanged, "pageCacheChanged"),
              96
            );
        }
        var t,
          i,
          a,
          s = e.prototype;
        return (
          (s.isSearchActive = function () {
            return !this._searchWorker.paused;
          }),
          (s.dispose = function () {
            C.ULS.sendTraceTag(4575577, 313, 50, "SearchManagerDispose"),
              this._currentResult &&
                (this._currentResult.dispose(), (this._currentResult = null)),
              this._highlightWorker &&
                (this._highlightWorker.dispose(),
                (this._highlightWorker = null)),
              this._searchPane &&
                (this._searchPane.dispose(), (this._searchPane = null)),
              this._searchWorker &&
                (this._searchWorker.dispose(), (this._searchWorker = null));
          }),
          (s.foundFirstSearchResult = function () {
            this._currentResult.reset(),
              this._highlightWorker.setupHighlighting(),
              this.setCurrentResult(0);
          }),
          (s.startSearch = function (e) {
            p.AFrameworkApplication.theWsaClient.incrementDw(8813, 1);
            var t = this._queryProcessor.preprocessQuery(e.text);
            if (t) {
              var n = this.currentQueryString,
                i = this._originalQuery;
              if (
                i &&
                i.matchCase === e.matchCase &&
                i.matchWholeWord === e.matchWholeWord &&
                t.length === n.length
              )
                if ((i.matchCase ? new RegExp(t) : new RegExp(t, "i")).exec(n))
                  return;
              (this._currentQueryString = t),
                (this._originalQuery = e),
                (this._regex = this._findUtils.getRegex(
                  this.currentQueryString,
                  this._originalQuery
                )),
                this._searchPane.startSearch(),
                this._searchWorker.startSearch(),
                this._highlightWorker.reset();
            }
          }),
          (s.stopSearch = function () {
            this._currentResult.reset(),
              this._searchWorker.reset(),
              this._highlightWorker.reset(),
              this._searchPane.reset(),
              this.clearQuery();
          }),
          (s.doneSearch = function (e) {
            p.AFrameworkApplication.theWsaClient.addToAverage(89404, e),
              p.AFrameworkApplication.theWsaClient.setIfMax(89528, e),
              p.AFrameworkApplication.theWsaClient.setIfMin(89529, e),
              this._searchPane.doneSearch(e);
          }),
          (s.resumeSearch = function () {
            this._searchWorker.paused &&
              !this._searchWorker.complete &&
              (this._searchWorker.resumeSearch(),
              this._searchPane.resumeSearch());
          }),
          (s.goToNextResult = function () {
            var e = this._currentResult.resultNumber,
              t = this.totalResults;
            this.setCurrentResult(e < t - 1 ? e + 1 : 0);
          }),
          (s.goToPrevResult = function () {
            var e = this._currentResult.resultNumber;
            this.setCurrentResult(e > 0 ? e - 1 : this.totalResults - 1);
          }),
          (s.clearQuery = function () {
            (this._originalQuery = null),
              (this._currentQueryString = ""),
              (this._regex = null);
          }),
          (s.setCurrentResult = function (e) {
            var t = this.totalResults;
            if (!(e < 0 || e >= t)) {
              var n = this._searchWorker.getResult(e),
                i = this._searchPane.goToResult(e, t);
              this._currentResult.setCurrentResult(n, i, e),
                _.FocusManager.instance().setScope(oe.a.searchFocusID);
            }
          }),
          (s.pageCacheChanged = function (e, t, n, i, r) {
            var a = r;
            if (2 === a.length && a[0] && a[1]) {
              var o = a[0],
                s = a[1];
              this._highlightWorker.pageCacheChanged(o, s),
                this._searchWorker.pageCacheChanged(s);
            }
            return 32;
          }),
          (s.doneSearchingPage = function (e) {
            this._searchPane.doneSearchingPage(e);
          }),
          (s.canPauseSearch = function () {
            return this._searchPane.canPauseSearch();
          }),
          (s.foundResult = function (e, t) {
            this._searchPane.foundResult(e, t);
          }),
          (s.foundCurrentResult = function (e) {
            this._currentResult.foundCurrentResult(e);
          }),
          (s.lookForCurrentResult = function (e, t, n) {
            this._highlightWorker.lookForCurrentResult(e, t, n);
          }),
          (s.clearCurrentResultHighlight = function () {
            this._currentResult.clearCurrentResultHighlight();
          }),
          (s.getHighlightsByPage = function (e) {
            return this._highlightWorker.getHighlightsByPage(e);
          }),
          (s.showSearchPane = function (e, t, n, i, r) {
            return v.c(this._searchPane)
              ? (C.ULS.sendTraceTag(
                  4575578,
                  313,
                  10,
                  "InconsistentShowSearchState"
                ),
                16)
              : this._searchPane.showSearchPane(e, t, n, i, r);
          }),
          (s.toggleSearchPane = function (e, t, n, i, r) {
            return v.c(this._searchPane)
              ? (C.ULS.sendTraceTag(
                  4575579,
                  313,
                  10,
                  "InconsistentToggleSearchState"
                ),
                16)
              : this._searchPane.toggleSearchPane(e, t, n, i, r);
          }),
          (e.getSearchContextFactory = function () {
            return new c();
          }),
          (t = e),
          (a = [
            {
              key: "instance",
              get: function () {
                return (
                  e._instance ||
                    e._initializing ||
                    y.App.instance.isSmallView ||
                    p.AFrameworkApplication.isNoChrome ||
                    !y.App.get_activeAppFrame().workspace.initialized ||
                    ((e._initializing = !0),
                    (e._instance = new e(
                      y.App.get_activeAppFrame().workspace.appBaseDom,
                      f.a.instance.resolve(
                        "WordViewer.Controls.IScrollControl"
                      ).scroller,
                      o.instance
                    )),
                    (e._initializing = !1)),
                  e._instance
                );
              },
            },
          ]),
          (i = [
            {
              key: "pageBeingSearched",
              get: function () {
                return this._searchWorker.pageBeingSearched;
              },
            },
            {
              key: "isSearchComplete",
              get: function () {
                return this._searchWorker.complete;
              },
            },
            {
              key: "totalResults",
              get: function () {
                return this._searchWorker.totalResults;
              },
            },
            {
              key: "currentSelectedResult",
              get: function () {
                return this._currentResult;
              },
            },
            {
              key: "currentQueryString",
              get: function () {
                return this._currentQueryString;
              },
            },
            {
              key: "regex",
              get: function () {
                return this._regex;
              },
            },
          ]) && Ce(t.prototype, i),
          a && Ce(t, a),
          e
        );
      })();
      (ye._instance = null),
        (ye._initializing = !1),
        Object(i.a)(ye, "SearchManager", null, [4]);
    },
    529: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return y;
      });
      var i = n(0),
        r = n(2),
        a = n(11),
        o = n(537),
        s = n(31),
        l = n(1),
        c = n(61),
        h = (n(9), n(54), n(78)),
        u = n(307),
        d = n(308),
        g = n(243),
        m = n(309),
        p = n(86),
        _ = n(58),
        f = n(35),
        v = n(8);
      function C(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var y = (function () {
        function e(e) {
          (this._commentPane = null),
            (this._commentModel = null),
            (this._hintManager = null),
            (this._currentMode = 0),
            (this._focusManager = null),
            (this._eventHost = null),
            (this._commentPendingDeleteConfirmation = null),
            (this._sharedCommentsEnabled = !1),
            (this._commentHighlightEnabled = !1),
            (this._commentDoesNotExistNotificationId = null),
            (this.copyingEnabled = !0),
            (this._actionManager = e),
            this.registerActions();
        }
        var t,
          n,
          i,
          y = e.prototype;
        return (
          (y.dispose = function () {
            this._commentPane &&
              (this._commentPane.dispose(), (this._commentPane = null)),
              this._commentModel &&
                (this._commentModel.dispose(), (this._commentModel = null)),
              this._hintManager &&
                (this._hintManager.dispose(), (this._hintManager = null)),
              this.endCommentingSession();
          }),
          (y.selectComment = function (e, t) {
            void 0 === t && (t = 1);
            var n = this._commentModel.getComment(e);
            n &&
              ((2 === this.mode && 1 !== n.commentType) ||
                (this._commentModel.selectComment(n),
                this._hintManager.highlightComment(n, !0),
                this._commentPane.selectComment(n, t),
                1 === t &&
                  this.sharedCommentsEnabled &&
                  this._eventHost.selectComment(e)));
          }),
          (y.selectNextComment = function () {
            var e = this._commentModel.selectNextComment();
            e &&
              (this._hintManager.highlightComment(e, !0),
              this._commentPane.selectComment(e),
              this.sharedCommentsEnabled &&
                this._eventHost.selectComment(e.id));
          }),
          (y.selectPrevComment = function () {
            var e = this._commentModel.selectPrevComment();
            e &&
              (this._hintManager.highlightComment(e, !0),
              this._commentPane.selectComment(e),
              this.sharedCommentsEnabled &&
                this._eventHost.selectComment(e.id));
          }),
          (y.selectAfterRemoval = function (e) {
            e
              ? this.selectComment(e, 0)
              : this._commentPane.newCommentButton &&
                this.getCommentPaneFocusRegion().listing.trySetCurrentElement(
                  this._commentPane.newCommentButton
                );
          }),
          (y.clearSelection = function () {
            this._commentModel.clearSelection(),
              this.sharedCommentsEnabled && this._eventHost.selectComment(null),
              this._hintManager.clearHighlighting();
          }),
          (y.paneClosing = function () {
            if (!this.discreteHostedCommentsEnabled)
              if (2 === this._currentMode) {
                this.clearSelection();
                var e = this._commentModel.inProgressComment;
                0, this.deleteComment(e);
              } else this.clearSelection();
          }),
          (y.addNewComment = function (e) {
            if (1 === this.mode) {
              var t,
                n = o.a.createNewComment(e),
                i = this._hintManager.createAnchorForSelectedParagraphs(
                  n,
                  Object(a.a)(
                    function () {
                      return t;
                    },
                    function (e) {
                      return (t = e);
                    }
                  )
                );
              if (!t || i) {
                var r;
                switch (i) {
                  case 1:
                    r = CommonUIStrings.l_NewCommentError;
                    break;
                  case 2:
                    r = CommonUIStrings.l_NewCommentInvalidContent;
                    break;
                  case 0:
                  default:
                    0, (r = CommonUIStrings.l_NewCommentError);
                }
                var s = new _.StandardDialog();
                return (
                  (s.buttonsOption = 0),
                  void s.showInformation(
                    CommonUIStrings.l_DefaultDialogTitle,
                    r,
                    null
                  )
                );
              }
              this.addComment(n, t);
            }
          }),
          (y.addComment = function (e, t) {
            this.mode &&
              (this._commentModel.addCommentToModel(e, t),
              this._commentPane.renderNewComment(e),
              e.commentType && this.selectComment(e.id),
              this._actionManager.processAction(v.a.commentNewCreated, 2));
          }),
          (y.editComment = function (e, t) {
            1 === this.mode &&
              e &&
              (this._commentModel.editCommentInModel(e, t),
              this._commentPane.renderEditingComment(e),
              this.selectComment(e.id));
          }),
          (y.cancelEditingComment = function (e) {
            this._commentModel.cancelEditingCommentInModel(e),
              this._commentPane.renderEditingComment(e);
          }),
          (y.addReply = function (e, t) {
            if (1 === this.mode) {
              var n = this._commentModel.createAndAddReplyToModel(e, t);
              this._hintManager.createAnchorForReply(n),
                this._commentPane.renderNewComment(n),
                this.selectComment(n.id, 0),
                this._actionManager.processAction(v.a.commentReply, 2);
            }
          }),
          (y.onHighlightChange = function (e, t) {}),
          (y.deleteComment = function (e) {
            if (1 !== this.mode) {
              if (2 !== this.mode) return void 0;
              if (1 !== e.commentType) return void 0;
              this.mode = 1;
            }
            if (this.showConfirmDeleteDialog && 1 !== e.commentType) {
              this._commentPendingDeleteConfirmation = e;
              var t = new _.StandardDialog();
              return (
                (t.buttonsOption = 4),
                t.setDefaultButton(2),
                void t.showQuestion(
                  CommonUIStrings.l_DefaultDialogTitle,
                  this.deleteCommentConfirmMessage,
                  Object(r.d)(
                    this,
                    this.deleteDialogHandler,
                    "deleteDialogHandler"
                  )
                )
              );
            }
            this.deleteCommentConfirmed(e);
          }),
          (y.registerActions = function () {
            var e = this;
            this._actionManager.addActionWithFlags(
              v.a.commentBeginRefresh,
              f.a.frame,
              c.ActionManager.doNothingButReportHandler,
              64
            ),
              this._actionManager.addActionWithFlags(
                v.a.commentBeginRefreshRefused,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler,
                64
              ),
              this._actionManager.addActionWithFlags(
                v.a.commentBeginSucceeded,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler,
                64
              ),
              this._actionManager.addAction(
                v.a.commentCancelled,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler
              ),
              this._actionManager.addAction(
                v.a.commentDelete,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler
              ),
              this._actionManager.addAction(
                v.a.commentDone,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler
              ),
              this._actionManager.addActionWithFlags(
                v.a.commentDownloadFailed,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler,
                64
              ),
              this._actionManager.addActionWithFlags(
                v.a.commentDownloadSucceeded,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler,
                64
              ),
              this._actionManager.addAction(
                v.a.commentNewCreated,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler
              ),
              this._actionManager.addAction(
                v.a.commentNewSaved,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler
              ),
              this._actionManager.addAction(
                v.a.commentReply,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler
              ),
              this._actionManager.addActionWithFlags(
                v.a.commentSaveNetworkError,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler,
                64
              ),
              this._actionManager.addActionWithFlags(
                v.a.commentSaveSucceeded,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler,
                64
              ),
              this._actionManager.addActionWithFlags(
                v.a.commentSaveRetry,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler,
                64
              ),
              this._actionManager.addAction(
                v.a.commentUndone,
                f.a.frame,
                c.ActionManager.doNothingButReportHandler
              ),
              this._actionManager.addAction(
                v.a.notifyCommentDoesNotExist,
                f.a.frame,
                function (t, n, i, r, a) {
                  return e.notifyCommentDoesNotExist(), 32;
                }
              );
          }),
          (y.deleteDialogHandler = function (e, t) {
            1 === e
              ? this.deleteCommentConfirmed(
                  this._commentPendingDeleteConfirmation
                )
              : (this._commentPendingDeleteConfirmation &&
                  this.selectComment(this._commentPendingDeleteConfirmation.id),
                (this._commentPendingDeleteConfirmation = null));
          }),
          (y.deleteCommentConfirmed = function (e) {
            var t = e.replyToId;
            1 === e.commentType
              ? this._actionManager.processAction(v.a.commentCancelled, 2)
              : this._actionManager.processAction(v.a.commentDelete, 2),
              (this._commentPendingDeleteConfirmation = null),
              this.sharedCommentsEnabled || this.clearSelection();
            var n = this._commentModel.deleteComment(e);
            this._commentPane.removeCommentsFromPane(n),
              this._hintManager.commentsDeleted(n);
            for (var i = 0; i < n.length; i++) n[i].dispose();
            this.selectAfterRemoval(t);
          }),
          (y.changeDoneStatus = function (e, t) {
            this.mode &&
              (this._actionManager.processAction(
                t ? v.a.commentDone : v.a.commentUndone,
                2
              ),
              this._commentModel.changeDoneStatus(e, t));
          }),
          (y.commitNewComment = function (e) {
            this._commentModel.commitNewComment(e),
              (this.mode = 1),
              this._actionManager.processAction(v.a.commentNewSaved, 2);
          }),
          (y.commitEditComment = function (e) {
            this._commentModel.commitEditComment(e), (this.mode = 1);
          }),
          (y.commitTaskChanges = function (e, t) {
            this._commentModel.recordTaskChanges(e, t);
          }),
          (y.initiateCommentingSession = function () {}),
          (y.endCommentingSession = function () {}),
          (y.selectCommentByNavigationId = function (e, t) {}),
          (y.showCommentPane = function (e, t, n, i, r) {
            return this._commentPane.showCommentPane(e, t, n, i, r);
          }),
          (y.toggleCommentPane = function (e, t, n, i, r) {
            return this._commentPane.toggleCommentPane(e, t, n, i, r);
          }),
          (y.getCommentPaneFocusRegion = function () {
            var e = this,
              t = this._focusManager.getRegion(s.AFrame.commentPaneFocusId);
            if (!t) {
              var n = this._focusManager.getScope(s.AFrame.commentPaneFocusId),
                i = new h.DOMFocusListing(function () {
                  return e.pane.paneSurface;
                });
              (i.rememberFirstElement = !0),
                i.addValidTag(3),
                i.addValidTag(2),
                i.addValidTag(4),
                i.addValidTag(1),
                i.addValidTag(6),
                i.addValidTag(5),
                this._focusManager.buildRegionWithDelegate(
                  function () {
                    return e.pane.paneSurface;
                  },
                  n,
                  i
                ),
                (t = this._focusManager.getRegion(
                  s.AFrame.commentPaneFocusId
                )).rememberFocusStealers(),
                (t.looped = !0),
                (t.contained = !0),
                n.unBindAction(this._focusManager._tabInput),
                n.unBindAction(this._focusManager._tabShiftInput);
            }
            return t;
          }),
          (y.addCommentReaction = function (e, t) {
            this.mode && this._commentModel.addCommentReaction(e, t);
          }),
          (y.removeCommentReaction = function (e, t) {
            this.mode && this._commentModel.removeCommentReaction(e, t);
          }),
          (y.notifyCommentDoesNotExist = function () {
            var e = this;
            p.UISurfaces.getNotificationsAPIAsync().then(function (t) {
              var n = Object.assign(new u.a(), {
                  target: '[data-unique-id~="ShowCommentsTopBar"]',
                  showCloseIcon: !0,
                  content:
                    CommonUIStrings.l_DeepLinkedCommentDoesNotExistNotification,
                  calloutProps: Object.assign(new m.a(), {
                    directionalHint: 6,
                    gapSpace: 4,
                    isBeakVisible: !1,
                  }),
                }),
                i = t.callout(n),
                a = Object.assign(new g.a(), {
                  expirationOptions: Object.assign(new d.a(), {
                    displayTimeoutSeconds: 10,
                    onExpire: Object(r.d)(e, e.dismiss, "dismiss"),
                  }),
                });
              e._commentDoesNotExistNotificationId = t.addNotification(i, a);
            });
          }),
          (y.dismiss = function () {
            var e = this;
            p.UISurfaces.getNotificationsAPIAsync().then(function (t) {
              return (
                t.removeNotification(e._commentDoesNotExistNotificationId),
                (e._commentDoesNotExistNotificationId = null),
                null
              );
            });
          }),
          (t = e),
          (i = [
            {
              key: "instance",
              get: function () {
                return (
                  e._instance ||
                  (e.factory ? (e._instance = e.factory()) : null)
                );
              },
              set: function (t) {
                e._instance = t;
              },
            },
          ]),
          (n = [
            {
              key: "pane",
              get: function () {
                return this._commentPane;
              },
            },
            {
              key: "model",
              get: function () {
                return this._commentModel;
              },
            },
            {
              key: "hintManager",
              get: function () {
                return this._hintManager;
              },
            },
            {
              key: "dateFormat",
              get: function () {
                return l.AFrameworkApplication.shortDateFormat;
              },
            },
            {
              key: "timeFormat",
              get: function () {
                return l.AFrameworkApplication.shortTimeFormat;
              },
            },
            {
              key: "deleteCommentConfirmMessage",
              get: function () {
                return CommonUIStrings.l_DeleteCommentConfirm;
              },
            },
            {
              key: "supportEdit",
              get: function () {
                return !1;
              },
            },
            {
              key: "discreteHostedCommentsEnabled",
              get: function () {
                return !1;
              },
            },
            {
              key: "eventHost",
              get: function () {
                return this._eventHost;
              },
              set: function (e) {
                this._eventHost = e;
              },
            },
            {
              key: "mode",
              get: function () {
                return this._currentMode;
              },
              set: function (e) {
                if (e !== this._currentMode) {
                  if (((this._currentMode = e), -1 === this._currentMode))
                    return;
                  this._commentPane.modeChanged(),
                    this._commentModel.modeChanged(),
                    this._currentMode || this.endCommentingSession();
                }
              },
            },
            {
              key: "sharedCommentsEnabled",
              get: function () {
                return this._sharedCommentsEnabled;
              },
              set: function (e) {
                this._sharedCommentsEnabled = e;
              },
            },
            {
              key: "commentHighlightEnabled",
              get: function () {
                return this._commentHighlightEnabled;
              },
              set: function (e) {
                this._commentHighlightEnabled = e;
              },
            },
            {
              key: "removePersonalInformation",
              get: function () {
                return !1;
              },
            },
            {
              key: "showConfirmDeleteDialog",
              get: function () {
                return !0;
              },
            },
          ]) && C(t.prototype, n),
          i && C(t, i),
          e
        );
      })();
      (y._instance = null),
        (y.factory = null),
        Object(i.a)(y, "CommentManager", null, [23, 24, 4]);
    },
    530: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return r;
        });
      var i = function (e, t, n) {
          var i = document.createElement(e);
          return t && (i.id = t), n && (i.className = n), i;
        },
        r = function (e, t, n) {
          var r = i(e, t, n);
          return r.setAttribute("Unselectable", "on"), r;
        };
    },
    531: function (e, t, n) {
      "use strict";
      var i = n(0),
        r = n(2),
        a = n(11),
        o = n(1),
        s = n(16),
        l = n(10),
        c = n(3);
      function h(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var u = (function () {
        function e(e, t) {
          (this._dialogHandler = e), (this._clipboardAccessExtensionLink = t);
        }
        var t,
          n,
          i,
          r = e.prototype;
        return (
          (r.extensionLinkHandler = function (e) {
            c.ULS.sendTraceTag(8716421, 307, 50, null),
              s.a.safelyOpenWindow(
                this.clipboardAccessExtensionLink,
                "_blank",
                void 0,
                void 0,
                "ClipboardAccessExtensionLink"
              );
          }),
          (r.resolveCopyPasteShortcut = function (e, t) {
            var n = l.a.isMac;
            return (
              o.AFrameworkApplication.appSettingsManager.getBooleanAppSetting(
                "CcpFixIPadShortcutStringsIsEnabled"
              ) && (n = l.a.isIPad || n),
              n ? String.format(t, "\u2318") : e
            );
          }),
          (r.dispose = function () {
            this._dialogHandler = null;
          }),
          (r.reactCopyPasteShortcutDialogHandler = function (e, t) {
            this.copyPasteShortcutDialogHandler(e);
          }),
          (r.legacyCopyPasteShortcutDialogHandler = function (e, t) {
            this.copyPasteShortcutDialogHandler(e);
          }),
          (r.copyPasteShortcutDialogHandler = function (e) {
            this._dialogHandler && this._dialogHandler(e);
          }),
          (t = e),
          (n = [
            {
              key: "titleText",
              get: function () {
                return CommonUIStrings.l_ClipboardUseShortcutTitle;
              },
            },
            {
              key: "forwardElementText",
              get: function () {
                return CommonUIStrings.l_ClipboardUseShortcutMessage;
              },
            },
            {
              key: "cutText",
              get: function () {
                return CommonUIStrings.l_ClipboardCut;
              },
            },
            {
              key: "macCutText",
              get: function () {
                return CommonUIStrings.l_ClipboardCut_Mac;
              },
            },
            {
              key: "copyText",
              get: function () {
                return CommonUIStrings.l_ClipboardCopy;
              },
            },
            {
              key: "macCopyText",
              get: function () {
                return CommonUIStrings.l_ClipboardCopy_Mac;
              },
            },
            {
              key: "pasteText",
              get: function () {
                return CommonUIStrings.l_ClipboardPaste;
              },
            },
            {
              key: "macPasteText",
              get: function () {
                return CommonUIStrings.l_ClipboardPaste_Mac;
              },
            },
            {
              key: "pasteTextOnly",
              get: function () {
                return CommonUIStrings.l_ClipboardPasteText;
              },
            },
            {
              key: "macPasteTextOnly",
              get: function () {
                return CommonUIStrings.l_ClipboardPasteText_Mac;
              },
            },
            {
              key: "clipboardAccessExtensionLink",
              get: function () {
                return this._clipboardAccessExtensionLink;
              },
            },
            {
              key: "clipboardExtensionLinkText",
              get: function () {
                return CommonUIStrings.l_ClipboardExtensionLink;
              },
            },
            {
              key: "clipboardExtensionSuggestionText",
              get: function () {
                return CommonUIStrings.l_ClipboardExtensionSuggestion;
              },
            },
          ]) && h(t.prototype, n),
          i && h(t, i),
          e
        );
      })();
      (u.id = "CopyPasteShortcutDialog"),
        (u.textElementId = "CopyPasteText"),
        Object(i.a)(u, "ACopyPasteShortcutDialog", null, [4]);
      var d = n(17),
        g = n(58);
      function m(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var p = (function (e) {
        var t, n;
        function i(t, n, i) {
          var a;
          a = e.call(this, t, n) || this;
          var o = document.createElement("span");
          o.className = "WACCopyPasteShortcutDialogTextPanel";
          var s = document.createElement("span");
          s.id = u.textElementId;
          var h = document.createElement("span");
          h.innerText = a.forwardElementText;
          var p = document.createElement("span");
          (p.className = "UIFontBold"),
            (p.innerText = a.resolveCopyPasteShortcut(a.cutText, a.macCutText));
          var _ = document.createElement("span");
          (_.className = "UIFontBold"),
            (_.innerText = a.resolveCopyPasteShortcut(
              a.copyText,
              a.macCopyText
            ));
          var f = document.createElement("span");
          if (
            ((f.className = "UIFontBold"),
            (f.innerText = a.resolveCopyPasteShortcut(
              a.pasteText,
              a.macPasteText
            )),
            s.appendChild(h),
            s.appendChild(document.createElement("br")),
            s.appendChild(p),
            s.appendChild(_),
            s.appendChild(f),
            i.getBooleanAppSetting("PasteTextOnlyShortcutDialogIsEnabled") &&
              (l.a.isChrome || l.a.isFirefox))
          ) {
            var v = document.createElement("span");
            (v.className = "UIFontBold"),
              (v.innerText = a.resolveCopyPasteShortcut(
                a.pasteTextOnly,
                a.macPasteTextOnly
              )),
              s.appendChild(v);
          }
          if ((o.appendChild(s), a.clipboardAccessExtensionLink)) {
            c.ULS.sendTraceTag(8716420, 307, 50, null);
            var C = document.createElement("span"),
              y = document.createElement("a");
            (y.href = "#"),
              (y.innerText = a.clipboardExtensionLinkText),
              d.a.addHandler(
                y,
                "click",
                Object(r.d)(
                  m(a),
                  a.extensionLinkHandler,
                  "extensionLinkHandler"
                )
              ),
              C.appendChild(y);
            var S = a.clipboardExtensionSuggestionText.indexOf("{0}");
            if (-1 !== S) {
              var x = a.clipboardExtensionSuggestionText.substring(0, S),
                b = a.clipboardExtensionSuggestionText.substring(
                  S + 3,
                  a.clipboardExtensionSuggestionText.length
                ),
                B = document.createTextNode(x),
                k = document.createTextNode(b);
              C.insertBefore(B, y), C.appendChild(k);
            }
            o.appendChild(document.createElement("br")), o.appendChild(C);
          } else c.ULS.sendTraceTag(8716422, 307, 50, null);
          var A = new g.StandardDialog();
          return (
            (A.buttonsOption = 0),
            (A.dialogId = u.id),
            A.messageBox(
              a.titleText,
              null,
              0,
              Object(r.d)(
                m(a),
                a.legacyCopyPasteShortcutDialogHandler,
                "legacyCopyPasteShortcutDialogHandler"
              ),
              o
            ),
            A.setDescribedByForDialog(u.textElementId),
            a
          );
        }
        return (
          (n = e),
          ((t = i).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          i
        );
      })(u);
      Object(i.a)(p, "CopyPasteShortcutDialog", u, []);
      var _ = n(75);
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var v = (function (e) {
        var t, n, i, a, o;
        function s(t, n) {
          var i,
            a,
            o,
            s = {};
          (o = (a = e.call(this, t, n) || this).installTitleText),
            (s.extensionStartText = a.extensionStartText),
            (s.extensionLink = null),
            (s.extensionEndText = null),
            (s.shortcutsMessageText = a.shortcutsMessageText),
            (s.cutText = a.resolveCopyPasteShortcut(a.cutText, a.macCutText)),
            (s.copyText = a.resolveCopyPasteShortcut(
              a.copyText,
              a.macCopyText
            )),
            (s.pasteText = a.resolveCopyPasteShortcut(
              a.pasteText,
              a.macPasteText
            )),
            (s.pasteTextOnly = a.resolveCopyPasteShortcut(
              a.pasteTextOnly,
              a.macPasteTextOnly
            ));
          var l =
              (((i = {}).id = "CopyPasteInstallDialog"),
              (i.bodyControls = s),
              i),
            c = new _.a(!1, !1, !0);
          return (
            (c.dialogId = "CopyPasteInstallDialog"),
            (c.buttonsOption = 0),
            c.setButtonText(1, a.installText),
            c.setDefaultButton(1),
            c.initializeAndShow(
              o,
              Object(r.d)(
                (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(a),
                a.reactCopyPasteShortcutDialogHandler,
                "reactCopyPasteShortcutDialogHandler"
              ),
              l
            ),
            a
          );
        }
        return (
          (n = e),
          ((t = s).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          (s.shouldUseInstallDialog = function (e) {
            return (
              !!e &&
              new RegExp(
                "^https:\\/\\/((.*?(word-edit|powerpoint|onenote|excel|visio)\\.(officeapps\\.live\\.com|partner\\.officewebapps\\.cn|gov\\.online\\.office365\\.us|dod\\.online\\.office365\\.us))|(project\\.microsoft\\.com))$",
                "g"
              ).test(e)
            );
          }),
          (i = s),
          (a = [
            {
              key: "shortcutsMessageText",
              get: function () {
                return CommonUIStrings.l_ClipboardInstallDialogShortcutsMessage;
              },
            },
            {
              key: "installText",
              get: function () {
                return CommonUIStrings.l_ClipboardInstallDialogInstallButton;
              },
            },
            {
              key: "installTitleText",
              get: function () {
                return CommonUIStrings.l_ClipboardInstallDialogTitle;
              },
            },
            {
              key: "extensionStartText",
              get: function () {
                return CommonUIStrings.l_ClipboardInstallDialogExtensionMessage;
              },
            },
          ]) && f(i.prototype, a),
          o && f(i, o),
          s
        );
      })(u);
      Object(i.a)(v, "ReactCopyPasteInstallDialog", u, []);
      var C = (function (e) {
        var t, n;
        function i(t, n, i) {
          var a, o;
          o = e.call(this, t, n) || this;
          var s = {};
          if (
            ((s.forwardElementText = o.forwardElementText),
            (s.cutText = o.resolveCopyPasteShortcut(o.cutText, o.macCutText)),
            (s.copyText = o.resolveCopyPasteShortcut(
              o.copyText,
              o.macCopyText
            )),
            (s.pasteText = o.resolveCopyPasteShortcut(
              o.pasteText,
              o.macPasteText
            )),
            i.getBooleanAppSetting("PasteTextOnlyShortcutDialogIsEnabled") &&
              (l.a.isChrome || l.a.isFirefox) &&
              (s.pasteTextOnly = o.resolveCopyPasteShortcut(
                o.pasteTextOnly,
                o.macPasteTextOnly
              )),
            o.clipboardAccessExtensionLink)
          ) {
            var h;
            c.ULS.sendTraceTag(40726914, 307, 50, null);
            s.extensionLink =
              (((h = {}).type = "AppLinkProps"),
              (h.id = "extensionLink"),
              (h.text = o.clipboardExtensionLinkText),
              (h.handler = function (e) {
                o.extensionLinkHandler(e);
              }),
              h);
            var d = o.clipboardExtensionSuggestionText.indexOf("{0}");
            -1 !== d &&
              ((s.suggestionPrefixElement =
                o.clipboardExtensionSuggestionText.substring(0, d)),
              (s.suggestionSuffixElement =
                o.clipboardExtensionSuggestionText.substring(
                  d + 3,
                  o.clipboardExtensionSuggestionText.length
                )));
          } else c.ULS.sendTraceTag(40726915, 307, 50, null);
          var g = (((a = {}).id = u.id), (a.bodyControls = s), a),
            m = new _.a(!1, !1, !0);
          return (
            (m.buttonsOption = 0),
            (m.dialogId = u.id),
            m.initializeAndShow(
              o.titleText,
              Object(r.d)(
                (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(o),
                o.reactCopyPasteShortcutDialogHandler,
                "reactCopyPasteShortcutDialogHandler"
              ),
              g
            ),
            o
          );
        }
        return (
          (n = e),
          ((t = i).prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n),
          i
        );
      })(u);
      function y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      Object(i.a)(C, "ReactCopyPasteShortcutDialog", u, []);
      var S = (function () {
        function e() {
          this._isReactDialogEnabled =
            !!o.AFrameworkApplication.activeFrame &&
            o.AFrameworkApplication.activeFrame.applicationInstance
              .isReactDialogEnabled;
        }
        var t, n, i;
        return (
          (e.prototype.createCopyPasteShortcutDialog = function (e, t, n) {
            return (
              void 0 === n && (n = !1),
              c.ULS.sendTraceTag(
                594882645,
                307,
                50,
                String.format(
                  "_isReactDialogEnabled={0}, useInstallDialog={1}",
                  this._isReactDialogEnabled,
                  n
                )
              ),
              this._isReactDialogEnabled
                ? n
                  ? new v(e, t)
                  : new C(e, t, o.AFrameworkApplication.appSettingsManager)
                : new p(e, t, o.AFrameworkApplication.appSettingsManager)
            );
          }),
          (t = e),
          (i = [
            {
              key: "instance",
              get: function () {
                return e._instance || (e._instance = new e());
              },
            },
          ]),
          (n = null) && y(t.prototype, n),
          i && y(t, i),
          e
        );
      })();
      (S._instance = null),
        Object(i.a)(S, "CopyPasteShortcutDialogFactory", null, [157]);
      var x = n(31),
        b = (n(9), n(4)),
        B = n(24),
        k = n(25),
        A = n(20),
        w = n(39),
        E = n(22),
        R = n(13),
        I = n(21),
        F = n(14),
        P = n(34),
        T = n(396),
        N = n(159),
        W = n(532),
        M = n(61),
        O = function (e, t) {
          (this.cp = e), (this.wordBreakType = t);
        };
      Object(i.a)(O, "WordBreak", null, []);
      n(54);
      var H = n(312),
        D = function () {
          (this.wordCount = 0), (this.browserWordBreakCount = 0);
        };
      function j(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      Object(i.a)(D, "WordCountFromWordBreaksResult", null, []);
      var U = (function () {
        function e() {
          e._punctuationCheck = null;
        }
        var t,
          n,
          i,
          r = e.prototype;
        return (
          (r.getForwardBreakByWord = function (e, t, n) {
            void 0 === n && (n = !1);
            var i = this.getForwardBreak(e, t, n);
            return i &&
              (i.wordBreakType || (i = this.getForwardBreak(e, i.cp, n)))
              ? i.cp
              : e.length;
          }),
          (r.getBackwardBreakByWord = function (e, t, n) {
            void 0 === n && (n = !1);
            var i = this.getBackwardBreak(e, t, n);
            return i &&
              (i.wordBreakType || (i = this.getBackwardBreak(e, i.cp, n)))
              ? i.cp
              : 0;
          }),
          (r.getForwardBreak = function (e, t, n) {
            return (
              void 0 === n && (n = !1),
              this.getForwardBreakInternal(e, t, e.length, n)
            );
          }),
          (r.getBackwardBreak = function (e, t, n) {
            return (
              void 0 === n && (n = !1), this.getBackwardBreakInternal(e, t, n)
            );
          }),
          (r.getTextStartWordBreak = function (e) {
            return this.getTextWordBreak(e, 0);
          }),
          (r.getTextWordBreak = function (e, t) {
            return new O(t, this.getWordBreakType(e, t));
          }),
          (r.getBreaks = function (e) {
            var t = this.getBreaksForRange(e, 0, e.length);
            return (
              e.length && Array.insert(t, 0, this.getTextStartWordBreak(e)), t
            );
          }),
          (r.getBreaksForRange = function (e, t, n) {
            var i = [];
            if ("" === e) return i;
            for (var r = t, a = !1; !a; ) {
              var o = this.getForwardBreakInternal(e, r, n);
              if (o)
                if (4 === o.wordBreakType)
                  if ((r = o.cp + 1) >= n) a = !0;
                  else {
                    var s = this.getWordBreakType(e, o.cp),
                      l = this.getWordBreakType(e, r);
                    s !== l && Array.add(i, new O(r, l));
                  }
                else Array.add(i, o), (r = o.cp);
              else a = !0;
            }
            return i;
          }),
          (r.getWordCount = function (e, t) {
            return this.getWordCountFromWordBreaks(e, t).wordCount;
          }),
          (r.getWordCountInRange = function (e, t, n) {
            var i = this.getBreaksForRange(e, t, n);
            return (
              Array.insert(i, 0, this.getTextWordBreak(e, t)),
              this.getWordCount(i, e)
            );
          }),
          (r.getWordCountFromWordBreaks = function (e, t) {
            for (var n = new D(), i = 0; i < e.length; i++) {
              var r = e[i];
              3 === r.wordBreakType || 2 === r.wordBreakType
                ? (2 === r.wordBreakType && n.browserWordBreakCount++,
                  this.shouldCountAlphaBreak(i, e, t) && n.wordCount++)
                : (1 !== r.wordBreakType && 5 !== r.wordBreakType) ||
                  (this.shouldCountPuncuationBreak(i, e, t) && n.wordCount++);
            }
            return n;
          }),
          (r.shouldCountAlphaBreak = function (e, t, n) {
            if (!e) return !0;
            var i = t[e];
            if (!i.cp) return !0;
            var r = t[e - 1];
            if (
              R.a.isEastAsianCharExtended(n.charCodeAt(i.cp)) ||
              R.a.isEastAsianCharExtended(n.charCodeAt(r.cp))
            )
              return !0;
            var a = !0;
            if (1 === r.wordBreakType)
              for (var o = !1, s = r.cp; s < i.cp; s++) {
                var l = n.charAt(s);
                if ("-" === l) {
                  if (o) return !0;
                  o = !0;
                } else o = !1;
                if ((a = this.doesPunctuationIndiciateNewWord(l))) return !0;
              }
            else if (2 === r.wordBreakType) return !1;
            return (2 !== i.wordBreakType || !r.wordBreakType) && a;
          }),
          (r.shouldCountPuncuationBreak = function (e, t, n) {
            var i = t[e];
            if (this.doesPunctuationIndiciateNewWord(n.charAt(i.cp))) return !1;
            if (!e) return !0;
            if (!i.cp) return !1;
            var r = t[e - 1];
            return (
              !!R.a.isEastAsianCharExtended(n.charCodeAt(r.cp)) ||
              !r.wordBreakType ||
              6 === r.wordBreakType
            );
          }),
          (r.doesPunctuationIndiciateNewWord = function (e) {
            return "\u2013" === e || "\u2014" === e;
          }),
          (r.getForwardBreakInternal = function (t, n, i, r) {
            if ((void 0 === r && (r = !1), n >= i - 1)) return null;
            for (var a = n; a < i; ) {
              var o = this.getWordBreakType(t, a);
              switch (o) {
                case 2:
                  var s = this.getBrowserNextWordBreak(t, n, !0);
                  return s ? (s.cp >= i ? null : s) : null;
                case 3:
                case 1:
                case 0:
                case 5:
                case 6:
                  if (a >= i - 1) return null;
                  var l = a + 1,
                    c = this.getWordBreakType(t, l);
                  if (
                    o !== c &&
                    this.shouldCreateBreakOnNextWordBreak(o, c, r) &&
                    (2 !== c || !e.supportsBrowserWordBreaking)
                  )
                    return new O(l, c);
                  break;
                default:
                  0;
              }
              a += 1;
            }
            return null;
          }),
          (r.getBackwardBreakInternal = function (t, n, i) {
            if ((void 0 === i && (i = !1), 1 >= n)) return null;
            for (var r = n; 0 < r; ) {
              var a = this.getWordBreakType(t, r - 1);
              switch (a) {
                case 2:
                  var o = this.getBrowserNextWordBreak(t, n, !1);
                  return o || null;
                case 3:
                case 1:
                case 0:
                case 5:
                case 6:
                  if (1 >= r) return null;
                  var s = r - 1,
                    l = this.getWordBreakType(t, s - 1);
                  if (
                    a !== l &&
                    this.shouldCreateBreakOnNextWordBreak(a, l, i) &&
                    (2 !== l || !e.supportsBrowserWordBreaking)
                  )
                    return new O(s, a);
                  break;
                default:
                  0;
              }
              r -= 1;
            }
            return null;
          }),
          (r.shouldCreateBreakOnNextWordBreak = function (e, t, n) {
            return (
              void 0 === n && (n = !1),
              n
                ? !((3 === e && 1 === t) || (1 === e && 3 === t))
                : (5 === e && 3 !== t) ||
                  (3 === e && 5 !== t) ||
                  1 === e ||
                  6 === e ||
                  !e
            );
          }),
          (r.ensureBrowserWordBreakSurface = function () {
            e._browserWordBreakingSurface ||
              ((e._browserWordBreakingSurface =
                H.a.getScratchPad("WordBreakUtils")),
              (e._browserWordBreakingSurface.className =
                "WACWordBreakSurface"));
          }),
          (r.updateCurrentText = function (t) {
            e._currentText !== t &&
              ((e._browserWordBreakingSurface.innerText = t),
              (e._currentText = t));
          }),
          (r.setNoBrowserWordBreaker = function () {
            e._noBrowserWordBreakerCount++;
          }),
          (r.removeNoBrowserWordBreaker = function () {
            e._noBrowserWordBreakerCount--;
          }),
          (r.getBrowserNextWordBreak = function (t, n, i) {
            this.ensureBrowserWordBreakSurface(), this.updateCurrentText(t);
            var r = -1;
            var a = !1;
            l.a.supportsTextRange
              ? n !== (r = this.textRangeWordBreak(n, i)) && (a = !0)
              : l.a.supportsWordBreakingRange &&
                n !== (r = this.rangeWordBreak(n, i)) &&
                (a = !0),
              a || (r = this.noSupportWordBreak(n, i));
            var o = -1;
            return (
              i
                ? r >= e._currentText.length
                  ? (r = -1)
                  : r === n
                  ? (o = 4)
                  : r < n && (r = -1)
                : (r <= 0 && (r = -1), r >= n && (r = -1)),
              -1 === r
                ? null
                : (-1 === o && (o = this.getWordBreakType(t, r)), new O(r, o))
            );
          }),
          (r.textRangeWordBreak = function (t, n) {
            o.AFrameworkApplication.theWsaClient.incrementDw(
              e.DATAID_WACWORDBREAKINGFROMBROWSER,
              1
            ),
              e._textRangeObject ||
                (e._textRangeObject = document.body.createTextRange()),
              e._textRangeObject.moveToElementText(
                e._browserWordBreakingSurface
              ),
              e._textRangeObject.collapse(),
              e._textRangeObject.move("character", t),
              n
                ? e._textRangeObject.moveEnd("word", 1)
                : e._textRangeObject.moveStart("word", -1);
            var i = e._textRangeObject.text.length,
              r = n ? t + i : t - i;
            return (
              (r < 0 || r > e._currentText.length) && (r = t),
              (r = this.correctBrowerWordBreak(t, r, n))
            );
          }),
          (r.rangeWordBreak = function (t, n) {
            o.AFrameworkApplication.theWsaClient.incrementDw(
              e.DATAID_WACWORDBREAKINGFROMBROWSER,
              1
            ),
              H.a.beginScratchPadUse();
            var i = e._browserWordBreakingSurface.firstChild,
              r = e._browserWordBreakingSurface.ownerDocument.createRange();
            r.setStart(i, t), r.setEnd(i, t), r.expand("word");
            var a = n ? r.endOffset : r.startOffset;
            return (
              a === t &&
                !n &&
                t > 0 &&
                (r.setStart(i, t - 1),
                r.setEnd(i, t - 1),
                r.expand("word"),
                (a = r.startOffset)),
              (a = this.correctBrowerWordBreak(t, a, n)),
              H.a.endScratchPadUse(),
              a
            );
          }),
          (r.correctBrowerWordBreak = function (e, t, n) {
            return e === t
              ? t
              : n
              ? this.correctForwardHelper(e, t)
              : this.correctBackwardHelper(e, t);
          }),
          (r.correctForwardHelper = function (t, n) {
            for (var i = !1, r = t; r < n; r++) {
              var a = this.getWordBreakType(e._currentText, r);
              if (i) {
                if (1 === a || !a)
                  return (
                    o.AFrameworkApplication.theWsaClient.incrementDw(
                      e.DATAID_WACWORDBREAKINGOVERRIDEBROWSER,
                      1
                    ),
                    r
                  );
              } else 2 === a && (i = !0);
            }
            return n;
          }),
          (r.correctBackwardHelper = function (t, n) {
            for (var i = !1, r = t - 1; r >= n; r--) {
              var a = this.getWordBreakType(e._currentText, r);
              if (i) {
                if (1 === a || !a)
                  return (
                    o.AFrameworkApplication.theWsaClient.incrementDw(
                      e.DATAID_WACWORDBREAKINGOVERRIDEBROWSER,
                      1
                    ),
                    r + 1
                  );
              } else 2 === a && (i = !0);
            }
            return n;
          }),
          (r.noSupportWordBreak = function (e, t) {
            return t
              ? this.noSupportWordBreakForward(e)
              : this.noSupportWordBreakBackward(e);
          }),
          (r.noSupportWordBreakForward = function (t) {
            for (
              var n = t;
              n < e._currentText.length &&
              2 === this.getWordBreakType(e._currentText, n) &&
              !R.a.isEastAsianCharExtended(R.a.charCodeAt(e._currentText, n));

            )
              n++;
            return (
              n === t && (n++, this.isCpInMiddleOfSurrogatePair(n) && n++), n
            );
          }),
          (r.noSupportWordBreakBackward = function (t) {
            for (
              var n = t;
              n > 0 &&
              2 === this.getWordBreakType(e._currentText, n - 1) &&
              !R.a.isEastAsianCharExtended(
                R.a.charCodeAt(e._currentText, n - 1)
              );

            )
              n--;
            return (
              n === t && (n--, this.isCpInMiddleOfSurrogatePair(n) && n--), n
            );
          }),
          (r.isCpInMiddleOfSurrogatePair = function (t) {
            return R.a.isLowSurrogateCharAt(e._currentText, t - 1);
          }),
          (r.getWordBreakType = function (e, t) {
            var n = e.charAt(t).toString();
            return this.isAlphaNumeric(n)
              ? 3
              : this.isWhiteSpace(n)
              ? 0
              : this.isPunctuation(n)
              ? 1
              : this.isPunctuationWithoutBreak(n)
              ? 5
              : this.isFootnoteEndnotePunctuation(n)
              ? 6
              : 2;
          }),
          (r.isAlphaNumeric = function (e) {
            return R.a.isAlphaNum(e.charAt(0));
          }),
          (r.isWhiteSpace = function (t) {
            return (
              e._whiteSpaceCheck ||
                (e._whiteSpaceCheck = new RegExp(
                  "[\\u0000-\\u001F]|\\u0020|[\\u007F-\\u009F]|\\u00A0|[\\u2000-\\u200B]|\\u202F|\\u205F|\\u2420|[\\u2422-\\u2424]|\\u3000|\\uFF02"
                )),
              e._whiteSpaceCheck.test(t)
            );
          }),
          (r.isPunctuation = function (t) {
            return (
              e._punctuationCheck ||
                (e._punctuationCheck = new RegExp(
                  "[!-&]|[\\(-\\.]|/|[:-@]|[\\[-`]|[{-~]|\xa1|\xa6|\xa7|\xa9|\xab|\xac|\xae|\xb0|\xb1|[\xb4-\xb7]|\xbb|\xbf|\xd7|\xf7|\u01c3|\u037e|[\u2012-\u2015]|[\u201a-\u2022]|[\u2024-\u2026]|\\u202F|\u2030|\u2039|\u203a|\u203c|\u203d|\u2048|\u2049|\\u2060|\u2103|\u2105|\u2106|\u2109|\u2116|\u2122|\u2211|\u2212|\u221a|\u221e|\u222b|\u2248|\u2260|\u2264|\u2265|\\u25A1|\\u25AA|\\u25AB|\u25ca|\u25cf|\u25e6|[\u2639-\u263b]|\u2762|\\uFEFF|\uff01|\uff0e|\uff1b|\uff1f|\uff61"
                )),
              e._punctuationCheck.test(t)
            );
          }),
          (r.isPunctuationWithoutBreak = function (e) {
            return "'" === e || "\u2018" === e || "\u2019" === e;
          }),
          (r.isFootnoteEndnotePunctuation = function (e) {
            return "\ue000" === e;
          }),
          (t = e),
          (i = [
            {
              key: "supportsBrowserWordBreaking",
              get: function () {
                return l.a.supportsTextRange || l.a.supportsWordBreakingRange;
              },
            },
            {
              key: "instance",
              get: function () {
                return e._instance || (e._instance = new e()), e._instance;
              },
            },
          ]),
          (n = null) && j(t.prototype, n),
          i && j(t, i),
          e
        );
      })();
      (U.DATAID_WACWORDBREAKINGOVERRIDEBROWSER = 10265),
        (U.DATAID_WACWORDBREAKINGFROMBROWSER = 10266),
        (U._whiteSpaceCheck = null),
        (U._punctuationCheck = null),
        (U._browserWordBreakingSurface = null),
        (U._currentText = ""),
        (U._textRangeObject = null),
        (U._callback = null),
        (U._noBrowserWordBreakerCount = 0),
        (U._instance = null),
        Object(i.a)(U, "WordBreakUtils", null, [178]);
      var L = n(533),
        V = n(536),
        K = n(36);
      function X(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return z(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return z(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0;
            return function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (n = e[Symbol.iterator]()).next.bind(n);
      }
      function z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function Q(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var Z = (function () {
        function e(e, t, n, i) {
          (this._dpiAspectRatio = e),
            (this._isRtl = t),
            (this._xmlNodeWrapperFactory = n),
            (this._wordBreakUtils = i);
        }
        var t,
          n,
          i,
          r = e.prototype;
        return (
          (r.getRectanglePosition = function (t) {
            return e.getRectanglePositionInternal(
              this._xmlNodeWrapperFactory.getSelectionXmlNodeWrapper(t)
            );
          }),
          (r.getSelectionBoundingBox = function (t, n, i, r, a, o, s) {
            var l;
            if (!t || !n || !i)
              return (
                e._loggedNullValueForBoundingBox ||
                  (c.ULS.sendTraceTag(
                    20557894,
                    301,
                    50,
                    "Can't get bounding box due to null value"
                  ),
                  (e._loggedNullValueForBoundingBox = !0)),
                null
              );
            if (!t.firstChild || !t.firstChild.nodeValue)
              return this.getRectanglePosition(t);
            var h = n.characterPosition,
              u = i.characterPosition;
            return (
              -1 === h || -1 === u
                ? (l = this.getRectanglePosition(t))
                : n.id === i.id
                ? ((l = W.a.instance.computeBoundingBoxForTextRun(t, h, u)),
                  e.fixBoundingBoxDimensionsIfImagePresent(
                    l,
                    n.selectionPosition.x,
                    i.selectionPosition.x,
                    n.imagesInlineWithText
                  ),
                  e.logBoxIfInvalid(l))
                : !a && t.firstChild && o
                ? ((l = W.a.instance.computeBoundingBoxForTextRun(
                    t,
                    h,
                    t.firstChild.nodeValue.length
                  )),
                  e.fixBoundingBoxDimensionsIfImagePresent(
                    l,
                    n.selectionPosition.x,
                    Number.MAX_VALUE,
                    n.imagesInlineWithText
                  ),
                  e.logBoxIfInvalid(l))
                : a === r && t.firstChild && s
                ? ((l = W.a.instance.computeBoundingBoxForTextRun(t, 0, u)),
                  e.fixBoundingBoxDimensionsIfImagePresent(
                    l,
                    0,
                    i.selectionPosition.x,
                    i.imagesInlineWithText
                  ),
                  e.logBoxIfInvalid(l))
                : (l = this.getRectanglePosition(t)),
              l
            );
          }),
          (r.getImagesInlineWithText = function (e, t) {
            return this.getImagesInlineWithTextInternal(
              this._xmlNodeWrapperFactory.getSelectionXmlNodeWrapper(e),
              this._xmlNodeWrapperFactory.getSelectionXmlNodeWrapper(t)
            );
          }),
          (r.getImagesInlineWithTextInternal = function (t, n) {
            if (!t || !n) return null;
            var i;
            if (
              !this.tryGetCharacterWidthArray(
                t,
                Object(a.a)(
                  function () {
                    return i;
                  },
                  function (e) {
                    return (i = e);
                  }
                )
              )
            )
              return null;
            for (
              var r,
                o = n.selectNodes("Image[@type='Figure']/boundingRect"),
                s = 0,
                l = X(i);
              !(r = l()).done;

            ) {
              s += r.value;
            }
            s = Math.round(s * this._dpiAspectRatio());
            for (
              var c = e.getRectanglePositionInternal(t), h = [], u = 0;
              u < o.length;
              u++
            ) {
              var d = o.get_item(u),
                g = e.getRectanglePositionInternal(d);
              this.areBoxesIntersecting(c, g) &&
                Math.abs(c.width - s) > Math.abs(c.width - (s + g.width)) &&
                (Array.add(h, d), (s += g.width));
            }
            return h;
          }),
          (r.areBoxesIntersecting = function (e, t) {
            return (
              !(!e || !t) &&
              !(e.left > t.left + t.width || t.left > e.left + e.width) &&
              !(e.top > t.top + t.height || t.top > e.top + e.height)
            );
          }),
          (r.getCharacterPosition = function (e, t, n) {
            var i = this._xmlNodeWrapperFactory.getSelectionXmlNodeWrapper(t);
            return this.getCharacterPositionInternal(e, i, n);
          }),
          (r.getCharacterPositionInternal = function (t, n, i) {
            var r;
            if (
              !this.tryGetCharacterWidthArray(
                n,
                Object(a.a)(
                  function () {
                    return r;
                  },
                  function (e) {
                    return (r = e);
                  }
                )
              )
            )
              return -1;
            if (!n.attributes.getNamedItem("l"))
              return (
                e._loggedMissingLeftOffset ||
                  (c.ULS.sendTraceTag(
                    20557895,
                    301,
                    50,
                    "CharSelection failed: missing left offset"
                  ),
                  (e._loggedMissingLeftOffset = !0)),
                -1
              );
            var o = parseFloat(n.attributes.getNamedItem("l").nodeValue);
            if (isNaN(o))
              return (
                e._loggedLeftOffsetNaN ||
                  (c.ULS.sendTraceTag(
                    20557896,
                    301,
                    50,
                    "CharSelection failed: left offset NaN"
                  ),
                  (e._loggedLeftOffsetNaN = !0)),
                -1
              );
            if (t.x < o) return 0;
            var s,
              l = 0,
              h = 0,
              u = 0;
            if (i && i.length) {
              var d = function () {
                var n = i[s],
                  r = void 0,
                  o = void 0;
                if (
                  !e.tryGetXCoordinatesForXmlNode(
                    n,
                    Object(a.a)(
                      function () {
                        return r;
                      },
                      function (e) {
                        return (r = e);
                      }
                    ),
                    Object(a.a)(
                      function () {
                        return o;
                      },
                      function (e) {
                        return (o = e);
                      }
                    )
                  )
                )
                  return "continue";
                o < t.x
                  ? (h += o - r)
                  : r < t.x && t.x <= o && ((h += t.x - r), (u = 1));
              };
              for (s = 0; s < i.length; s++) d();
            }
            for (s = 0; s < r.length; s++)
              if ((l += r[s]) * this._dpiAspectRatio() + o + h > t.x)
                return s + u;
            return s;
          }),
          (r.tryGetCharacterWidthArray = function (t, n) {
            return (
              (n.val = null),
              this._isRtl
                ? (e._loggedApplicationRtl ||
                    (c.ULS.sendTraceTag(
                      20557900,
                      301,
                      50,
                      "CharSelection failed: App RTL"
                    ),
                    (e._loggedApplicationRtl = !0)),
                  !1)
                : !!t &&
                  (t.attributes
                    ? t.attributes.getNamedItem("a")
                      ? (e._loggedAngle ||
                          (c.ULS.sendTraceTag(
                            20557902,
                            301,
                            50,
                            "CharSelection failed: angled text"
                          ),
                          (e._loggedAngle = !0)),
                        !1)
                      : t.attributes.getNamedItem("rtl")
                      ? (e._loggedTextRtl ||
                          (c.ULS.sendTraceTag(
                            20557903,
                            301,
                            50,
                            "CharSelection failed: text RTL"
                          ),
                          (e._loggedTextRtl = !0)),
                        !1)
                      : t.attributes.getNamedItem("gr")
                      ? (e._loggedRotated ||
                          (c.ULS.sendTraceTag(
                            20557904,
                            301,
                            50,
                            "CharSelection failed: rotated text"
                          ),
                          (e._loggedRotated = !0)),
                        !1)
                      : t.firstChild && t.firstChild.nodeValue
                      ? this.tryParseWidths(t, n)
                      : (e._loggedNullValue ||
                          (c.ULS.sendTraceTag(
                            20557897,
                            301,
                            50,
                            "CharSelection failed: null node/FirstChild"
                          ),
                          (e._loggedNullValue = !0)),
                        !1)
                    : (e._loggedNullValue ||
                        (c.ULS.sendTraceTag(
                          20557901,
                          301,
                          50,
                          "CharSelection failed: null attributes"
                        ),
                        (e._loggedNullValue = !0)),
                      !1))
            );
          }),
          (r.tryParseWidths = function (t, n) {
            if (((n.val = null), !t.attributes.getNamedItem("cw")))
              return (
                e._loggedNullValue ||
                  (c.ULS.sendTraceTag(
                    21002058,
                    301,
                    50,
                    "CharSelection failed: null cw attribute"
                  ),
                  (e._loggedNullValue = !0)),
                !1
              );
            var i = t.attributes.getNamedItem("cw").nodeValue,
              r = (i = i.substring(1, i.length - 1)).split(
                e.characterWidthDelimiter
              );
            if (r.length !== t.firstChild.nodeValue.length)
              return (
                e._loggedCharWidthParseFailedWrongLength ||
                  (c.ULS.sendTraceTag(
                    20557898,
                    301,
                    50,
                    "CharSelection failed: char width array length [cwLength:{0}] [textLength:{1}]",
                    r.length,
                    t.firstChild.nodeValue.length
                  ),
                  (e._loggedCharWidthParseFailedWrongLength = !0)),
                !1
              );
            n.val = new Array(r.length);
            for (var a = 0; a < r.length; a++) {
              var o = parseFloat(r[a]);
              if (isNaN(o))
                return (
                  e._loggedCharWidthParseFailedInvalidWidths ||
                    (c.ULS.sendTraceTag(
                      20557899,
                      301,
                      50,
                      "CharSelection failed: char width NaN [width:{0}]",
                      r[a]
                    ),
                    (e._loggedCharWidthParseFailedInvalidWidths = !0)),
                  !1
                );
              n.val[a] = o;
            }
            return !0;
          }),
          (r.tryGetWordStart = function (e, t, n, i) {
            var r;
            n.val = null;
            var o = this.tryGetWordStartInternal(
              this._xmlNodeWrapperFactory.getSelectionXmlNodeWrapper(e),
              t,
              Object(a.a)(
                function () {
                  return r;
                },
                function (e) {
                  return (r = e);
                }
              ),
              i
            );
            return r && (n.val = r.backingNode), o;
          }),
          (r.tryGetWordStartInternal = function (e, t, n, i) {
            var r;
            if (
              ((i.val = -1),
              (n.val = null),
              !this.tryGetCharacterWidthArray(
                e,
                Object(a.a)(
                  function () {
                    return r;
                  },
                  function (e) {
                    return (r = e);
                  }
                )
              ))
            )
              return !1;
            var o = e.firstChild.nodeValue,
              s = this._wordBreakUtils.getBackwardBreak(o, t);
            n.val = e;
            for (var l = 0; !s && l < 1e6; ) {
              var h = n.val.previousSibling;
              if (
                this.tryGetCharacterWidthArray(
                  h,
                  Object(a.a)(
                    function () {
                      return r;
                    },
                    function (e) {
                      return (r = e);
                    }
                  )
                )
              ) {
                var u = h.firstChild.nodeValue;
                (s = this._wordBreakUtils.getBackwardBreak(u, u.length))
                  ? (s = new O(0, -1))
                  : (n.val = h);
              } else s = new O(0, -1);
              l++;
            }
            return s && n.val
              ? ((i.val = s.cp), !0)
              : (c.ULS.sendTraceTag(
                  20820181,
                  301,
                  15,
                  "TryGetWordEnd returning unexpected output [InfiniteLoop:{0}]",
                  !s
                ),
                !1);
          }),
          (r.tryGetWordEnd = function (e, t, n, i) {
            var r;
            n.val = null;
            var o = this.tryGetWordEndInternal(
              this._xmlNodeWrapperFactory.getSelectionXmlNodeWrapper(e),
              t,
              Object(a.a)(
                function () {
                  return r;
                },
                function (e) {
                  return (r = e);
                }
              ),
              i
            );
            return r && (n.val = r.backingNode), o;
          }),
          (r.tryGetWordEndInternal = function (e, t, n, i) {
            var r;
            if (
              ((n.val = null),
              (i.val = -1),
              !this.tryGetCharacterWidthArray(
                e,
                Object(a.a)(
                  function () {
                    return r;
                  },
                  function (e) {
                    return (r = e);
                  }
                )
              ))
            )
              return !1;
            var o = e.firstChild.nodeValue,
              s = this._wordBreakUtils.getForwardBreak(o, t);
            n.val = e;
            for (var l = 0; !s && l < 1e6; ) {
              var h = n.val.nextSibling;
              this.tryGetCharacterWidthArray(
                h,
                Object(a.a)(
                  function () {
                    return r;
                  },
                  function (e) {
                    return (r = e);
                  }
                )
              )
                ? ((n.val = h),
                  (s = this._wordBreakUtils.getForwardBreak(
                    n.val.firstChild.nodeValue,
                    0
                  )))
                : (s = new O(n.val.firstChild.nodeValue.length, -1)),
                l++;
            }
            return s && n.val
              ? ((i.val = s.cp), !0)
              : (c.ULS.sendTraceTag(
                  20820182,
                  301,
                  15,
                  "TryGetWordEnd returning unexpected output [InfiniteLoop:{0}]",
                  !s
                ),
                !1);
          }),
          (e.getInstanceWithResolvedDependencies = function () {
            return new e(
              function () {
                return F.App.instance.theConfig.dpiAspectRatio;
              },
              o.AFrameworkApplication.isRtl,
              new L.a(),
              U.instance
            );
          }),
          (e.buildXPathForPageSelection = function (e, t) {
            var n;
            t.id < e.id && ((n = e), (e = t), (t = n));
            return String.format(
              "descendant::P[@storyId='{0}']/T[@id>={1} and @id<={2}]",
              e.storyId,
              e.id,
              t.id
            );
          }),
          (e.buildXPathFromPosition = function (e, t, n, i) {
            var r = String.format(
              "/Pages/Page[@id='{0}']/descendant::P[@storyId='{1}']/T[@l<={2} and (@l + @w)>={2}",
              e,
              t,
              i.x
            );
            return (r += n
              ? String.format(" and (@t + @h)>={0}]", i.y)
              : String.format(" and @t<={0}]", i.y));
          }),
          (e.getRectanglePositionInternal = function (t) {
            var n = Math.round(
                parseFloat(t.attributes.getNamedItem("l").nodeValue)
              ),
              i = Math.round(
                parseFloat(t.attributes.getNamedItem("t").nodeValue)
              ),
              r = Math.round(
                parseFloat(t.attributes.getNamedItem("w").nodeValue)
              ),
              a = Math.round(
                parseFloat(t.attributes.getNamedItem("h").nodeValue)
              ),
              o = new V.a(n, i, r, a);
            return e.logBoxIfInvalid(o), o;
          }),
          (e.fixBoundingBoxDimensionsIfImagePresent = function (t, n, i, r) {
            if (t && r)
              for (
                var o = function (o) {
                    var s = r[o],
                      l = void 0,
                      c = void 0;
                    return e.tryGetXCoordinatesForXmlNode(
                      s,
                      Object(a.a)(
                        function () {
                          return l;
                        },
                        function (e) {
                          return (l = e);
                        }
                      ),
                      Object(a.a)(
                        function () {
                          return c;
                        },
                        function (e) {
                          return (c = e);
                        }
                      )
                    )
                      ? l + 5 > i
                        ? "continue"
                        : void (c - 5 < n
                            ? (t.left = t.left + (c - l))
                            : (t.width = t.width + (c - l)))
                      : "continue";
                  },
                  s = 0;
                s < r.length;
                s++
              )
                o(s);
          }),
          (e.tryGetXCoordinatesForXmlNode = function (e, t, n) {
            if (((t.val = n.val = 0), !e || !e.attributes)) return !1;
            var i = e.attributes.getNamedItem("l"),
              r = e.attributes.getNamedItem("w");
            return (
              !(!i || !r) &&
              ((t.val = parseFloat(i.nodeValue)),
              (n.val = t.val + parseFloat(r.nodeValue)),
              !isNaN(t.val) && !isNaN(n.val))
            );
          }),
          (e.logBoxIfInvalid = function (e) {
            ((e.left <= 0 && e.top <= 0 && e.width <= 0 && e.height <= 0) ||
              e.width < 0 ||
              e.height < 0) &&
              c.ULS.sendTraceTag(
                4792668,
                301,
                50,
                "It seems like the user is not going to see a selection. L={0} T={1} W={2} H={3}",
                e.left,
                e.top,
                e.width,
                e.height
              );
          }),
          (e.getXmlNodeAtPosition = function (e, t, n) {
            if (!n) return null;
            var i = F.App.instance.theConfig.selectionTolerance,
              r = String.format(
                "/Pages/Page[@id='{0}']/descendant::P/T[@l<={1} and (@l + @w)>={2} and @t<={3} and (@t + @h)>={4}]",
                t,
                e.x + i,
                e.x - i,
                e.y + i,
                e.y - i
              );
            return n.selectSingleNode(r);
          }),
          (e.getXmlLinkNodeAtPosition = function (e, t, n) {
            if (!n) return null;
            var i = String.format(
              "/Pages/Page[@id='{0}']/descendant::L[@l<={1} and (@l + @w)>={2} and @t<={3} and (@t + @h)>={4}]",
              t,
              e.x,
              e.x,
              e.y,
              e.y
            );
            return n.selectSingleNode(i);
          }),
          (e.nodeHasDimensions = function (e) {
            return (
              !!e &&
              !!parseInt(e.attributes.getNamedItem("w").nodeValue) &&
              !!parseInt(e.attributes.getNamedItem("h").nodeValue)
            );
          }),
          (e.getCopyableHtmlElementsForRegion = function (t, n) {
            for (
              var i = e.buildXPath(t, n), r = [], a = -1, o = t.page;
              o <= n.page;
              o++
            ) {
              var s = K.a.getPageSetXmlFromPage(o);
              if (s !== a) {
                var l =
                  F.App.get_activeAppFrame().thePageInfoCache.getCopyableHtmlElementsForQuery(
                    i,
                    o,
                    t.characterPosition,
                    n.characterPosition
                  );
                l && Array.addRange(r, l), (a = s);
              }
            }
            return r;
          }),
          (e.buildXPath = function (e, t) {
            var n;
            t.id < e.id && ((n = e), (e = t), (t = n));
            return String.format(
              "/Pages/Page[@id>={0} and @id<={1}]/descendant::P[@storyId='{2}']/T[@id>={3} and @id<={4}]",
              e.page,
              t.page,
              e.storyId,
              e.id,
              t.id
            );
          }),
          (t = e),
          (i = [
            {
              key: "instance",
              get: function () {
                return (
                  e._instance ||
                  (e._instance = e.getInstanceWithResolvedDependencies())
                );
              },
            },
          ]),
          (n = null) && Q(t.prototype, n),
          i && Q(t, i),
          e
        );
      })();
      (Z._loggedCharWidthParseFailedWrongLength = !1),
        (Z._loggedCharWidthParseFailedInvalidWidths = !1),
        (Z._loggedApplicationRtl = !1),
        (Z._loggedNullValue = !1),
        (Z._loggedAngle = !1),
        (Z._loggedTextRtl = !1),
        (Z._loggedRotated = !1),
        (Z._loggedMissingLeftOffset = !1),
        (Z._loggedLeftOffsetNaN = !1),
        (Z._loggedNullValueForBoundingBox = !1),
        (Z.characterWidthDelimiter = ";,"),
        (Z._instance = null),
        Object(i.a)(Z, "SelectionUtils2", null, []);
      var G = n(18);
      function q(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var Y = (function () {
        function e(e) {
          (this._start = null),
            (this._end = null),
            (this._copyFrameLoaded = !1),
            (this._setFocusExceptionLogged = !1),
            (this._copyFrame = document.createElement("iFrame")),
            (this._copyFrame.className = "WACCopyFrame"),
            (this._copyFrame.title =
              WordViewerIntl.WordViewerStrings.l_NonUserFacingFrameTitle),
            B.FocusManager.instance()
              .getScope(x.AFrame.documentFocusID)
              .addOnFocus(
                Object(r.d)(
                  this,
                  this.documentScopeOnFocus,
                  "documentScopeOnFocus"
                )
              ),
            d.a.addHandler(
              this._copyFrame,
              "load",
              Object(r.d)(this, this.onCopyFrameLoad, "onCopyFrameLoad")
            ),
            e.appendChild(this._copyFrame),
            (this._copyFrame.id = "WACCopyFrame"),
            o.AFrameworkApplication.theActionManager.addActionWithFlags(
              G.a.buildClipboard,
              P.a.application,
              F.App.instance.copyingEnabled
                ? Object(r.d)(this, this.buildClipboard, "buildClipboard")
                : M.ActionManager.doNothingHandler,
              96
            );
        }
        var t,
          n,
          i,
          a = e.prototype;
        return (
          (a.documentScopeOnFocus = function (e, t) {
            this.setFocus();
          }),
          (a.initKeyInputManager = function () {
            (this._copyFrame.contentWindow.document.body.id =
              "WACCopyFrameBody"),
              F.App.get_activeAppFrame().theKeyInputManager.initializeForElement(
                this._copyFrame.contentWindow.document.body
              ),
              F.App.get_activeAppFrame().theContextMenuInputManager.registerHandler(
                this._copyFrame.contentWindow.document.body,
                Object(r.d)(this, this.contextMenuHandler, "contextMenuHandler")
              ),
              F.App.get_activeAppFrame().theKeyInputManager.registerHandler(
                b.EventNames.keyPress,
                this._copyFrame.contentWindow.document.body,
                Object(r.d)(
                  F.App.get_activeAppFrame(),
                  F.App.get_activeAppFrame().showViewerWarningBusinessBar,
                  "showViewerWarningBusinessBar"
                )
              ),
              F.App.get_activeAppFrame().theCompositionEventManager.registerHandler(
                b.EventNames.compositionStart,
                this._copyFrame.contentWindow.document.body,
                Object(r.d)(
                  F.App.get_activeAppFrame(),
                  F.App.get_activeAppFrame().showViewerWarningBusinessBar,
                  "showViewerWarningBusinessBar"
                ),
                null
              );
          }),
          (a.buildClipboard = function (e, t, n, i, r) {
            var a = Z.getCopyableHtmlElementsForRegion(this._start, this._end);
            return this.placeCopyElementsInIFrame(a), 32;
          }),
          (a.contextMenuHandler = function (e) {
            return T.a.showFromKey(e), !0;
          }),
          (a.onCopyFrameLoad = function (e) {
            (this._copyFrame.contentWindow.document.title = String.format(
              "{0} {1}",
              WordViewerIntl.WordViewerStrings.l_CopyIframeTitle,
              CommonUIStrings.l_AccHelpShortcutAnnouncement
            )),
              this.initKeyInputManager(),
              (this._copyFrameLoaded = !0);
          }),
          (a.setContentEditable = function (e) {
            this._copyFrame.contentWindow.document.body.setAttribute(
              "contentEditable",
              e ? "true" : "false"
            );
          }),
          (a.clearCopy = function () {
            var e = !1,
              t = Number.MAX_VALUE,
              n = Number.MIN_VALUE;
            this._start &&
              this._end &&
              ((e = !0), (t = this._start.page), (n = this._end.page)),
              this.clearCopyIframe(),
              (this._start = null),
              (this._end = null),
              e &&
                F.App.get_activeAppFrame().thePageInfoCache.removeFromCache(
                  t,
                  n
                );
          }),
          (a.updateCopy = function (e, t) {
            if (F.App.instance.copyingEnabled && e && t) {
              if (e.id > t.id) {
                var n = e;
                (e = t), (t = n);
              }
              (this._start = e), (this._end = t);
              for (
                var i = F.App.get_activeAppFrame().thePageInfoCache,
                  r = !0,
                  a = this._start.page;
                a <= this._end.page;
                a++
              )
                if (!i.getPage(a)) {
                  r = !1;
                  break;
                }
              r
                ? o.AFrameworkApplication.theActionManager.processAction(
                    G.a.buildClipboard,
                    2
                  )
                : F.App.get_activeAppFrame().thePageInfoCache.addToCache(
                    this._start.page,
                    this._end.page
                  );
            }
          }),
          (a.clearCopyIframe = function () {
            this.forceCompatibility();
            var e = this._copyFrame.contentWindow.document.body;
            E.DomUtils.clearElementHtml(e),
              B.FocusManager.instance().setScope(x.AFrame.documentFocusID);
          }),
          (a.placeCopyElementsInIFrame = function (e) {
            if ((e.length, F.App.instance.copyingEnabled)) {
              0, this.forceCompatibility();
              var t = this._copyFrame.contentWindow.document.body;
              if (t) {
                E.DomUtils.clearElementHtml(t);
                for (var n = 0; n < e.length; n++) t.appendChild(e[n]);
                B.FocusManager.instance().setScope(x.AFrame.documentFocusID),
                  e.length > 0 && this.setFocus();
              }
            }
          }),
          (a.setFocus = function () {
            if (this._copyFrame.contentWindow) {
              0;
              try {
                this._copyFrame.contentWindow.focus();
              } catch (e) {
                c.ULS.sendTraceTag(
                  4792863,
                  301,
                  10,
                  "Cannot focus the copy frame's window. Exception: {0}. Copy frame load status = {1}.",
                  e.message,
                  this._copyFrameLoaded
                );
              }
              try {
                if (l.a.supportsDomL2Selection) {
                  var e = this._copyFrame.contentWindow.getSelection();
                  e.removeAllRanges(),
                    e.selectAllChildren(
                      this._copyFrame.contentWindow.document.body
                    );
                } else
                  this._copyFrame.contentWindow.document.execCommand(
                    "SelectAll"
                  );
              } catch (e) {
                this._setFocusExceptionLogged ||
                  (c.ULS.sendTraceTag(
                    6362266,
                    301,
                    50,
                    "Selection failed: Message: {0}, stacktrace: {1}, _setFocusExceptionLogged = {2}",
                    e.message,
                    e.stack,
                    this._setFocusExceptionLogged
                  ),
                  (this._setFocusExceptionLogged = !0));
              }
            } else
              c.ULS.sendTraceTag(
                4792862,
                301,
                10,
                "Cannot focus the copy frame's window, because it's null. Copy frame load status = {0}.",
                this._copyFrameLoaded
              );
          }),
          (a.forceCompatibility = function () {
            if (l.a.isFirefox) {
              var e = this._copyFrame.contentWindow;
              window.self.__loadCompat &&
                !e.attachEvent &&
                (__loadCompat(e), _loadMozillaCompat(e));
            }
          }),
          (a.dispose = function () {
            d.a.removeHandler(
              this._copyFrame,
              "load",
              Object(r.d)(this, this.onCopyFrameLoad, "onCopyFrameLoad")
            ),
              this._start && (this._start.dispose(), (this._start = null)),
              this._end && (this._end.dispose(), (this._end = null)),
              this._copyFrame.contentWindow &&
                this._copyFrame.contentWindow.document &&
                this._copyFrame.contentWindow.document.body &&
                (this._copyFrameLoaded ||
                  c.ULS.sendTraceTag(
                    4032355,
                    301,
                    50,
                    "It seems like the OnLoad handler for _copyFrame has not been run - the event may have not been fired by the browser; Expected=WACCopyFrameBody Actual={0}",
                    this._copyFrame.contentWindow.document.body.id || "null"
                  ),
                F.App.get_activeAppFrame().theKeyInputManager.unregisterHandler(
                  b.EventNames.keyPress,
                  this._copyFrame.contentWindow.document.body,
                  Object(r.d)(
                    F.App.get_activeAppFrame(),
                    F.App.get_activeAppFrame().showViewerWarningBusinessBar,
                    "showViewerWarningBusinessBar"
                  )
                ),
                F.App.get_activeAppFrame().theCompositionEventManager.unregisterHandler(
                  b.EventNames.compositionStart,
                  this._copyFrame.contentWindow.document.body,
                  Object(r.d)(
                    F.App.get_activeAppFrame(),
                    F.App.get_activeAppFrame().showViewerWarningBusinessBar,
                    "showViewerWarningBusinessBar"
                  )
                ),
                F.App.get_activeAppFrame().theKeyInputManager.deinitializeForElement(
                  this._copyFrame.contentWindow.document.body
                ),
                F.App.get_activeAppFrame().theContextMenuInputManager.unregisterHandler(
                  this._copyFrame.contentWindow.document.body,
                  Object(r.d)(
                    this,
                    this.contextMenuHandler,
                    "contextMenuHandler"
                  )
                )),
              (this._copyFrameLoaded = !1),
              (this._copyFrame = null),
              (this._setFocusExceptionLogged = !1);
          }),
          (t = e),
          (n = [
            {
              key: "copyFrame",
              get: function () {
                return this._copyFrame;
              },
            },
          ]) && q(t.prototype, n),
          i && q(t, i),
          e
        );
      })();
      Object(i.a)(Y, "ClipboardManager", null, [4]);
      var $ = function (e, t) {
        (this.eventArgs = e), (this.selectionFlag = t);
      };
      Object(i.a)($, "EventDataForSelection", null, []);
      var J = n(542),
        ee = function (e, t) {
          (this.cursorY = e), (this.directionUp = t);
        };
      function te(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      Object(i.a)(ee, "SelectionData", null, []);
      var ne,
        ie = (function () {
          function e(e) {
            (this._start = new Sys.UI.Point(-1, -1)),
              (this._position = new Sys.UI.Point(-1, -1)),
              (this._scrollPosition = new Sys.UI.Point(-1, -1)),
              (this._startFlag = 0),
              (this._currentlyScrolling = !1),
              (this._scrollTimeoutId = 0),
              (this._aLongTimeAgo = new Date(0).getTime()),
              (this._scrollControl = null),
              (this._region = e),
              (this._lastScrolltime = this._aLongTimeAgo);
          }
          var t,
            n,
            i,
            a = e.prototype;
          return (
            (a.setStart = function (e) {
              if (-1 === this._start.y) {
                this._start = e;
                var t = F.App.get_activeAppFrame().workspace.getHeight();
                this._start.y <= F.App.instance.theConfig.scrollZone
                  ? (this._startFlag = 0)
                  : t - this._start.y < F.App.instance.theConfig.scrollZone
                  ? (this._startFlag = 2)
                  : (this._startFlag = 1);
              }
            }),
            (a.update = function (e) {
              var t = F.App.instance.theConfig.scrollZone,
                n = Math.round(
                  (t * F.App.instance.theConfig.scrollOffset) / 100
                );
              (this._scrollPosition = new Sys.UI.Point(e.x, e.y)),
                this._startFlag
                  ? 2 === this._startFlag &&
                    (this._start.y < e.y - n
                      ? (this._scrollPosition.y =
                          this._region.clientHeight +
                          e.y -
                          t -
                          this._start.y -
                          n)
                      : this.stopScrolling())
                  : e.y + n < this._start.y
                  ? (this._scrollPosition.y = t + n + e.y - this._start.y)
                  : this.stopScrolling(),
                this._scrollPosition.y < t ||
                this._region.offsetHeight - this._scrollPosition.y < t
                  ? ((this._position = e),
                    this._currentlyScrolling ||
                      (-1 === this._start.y && (this._start = e),
                      (this._currentlyScrolling = !0),
                      (this._scrollTimeoutId = window.setTimeout(
                        Object(r.d)(this, this.forceScroll, "forceScroll"),
                        F.App.instance.theConfig.scrollDelay
                      ))))
                  : this.stopScrolling();
            }),
            (a.stopScrolling = function () {
              this._currentlyScrolling &&
                ((this._region.style.cursor = ""),
                (this._currentlyScrolling = !1),
                (this._lastScrolltime = this._aLongTimeAgo),
                window.clearTimeout(this._scrollTimeoutId));
            }),
            (a.resetScroller = function () {
              this.stopScrolling(),
                (this._scrollPosition = new Sys.UI.Point(-1, -1)),
                (this._position = new Sys.UI.Point(-1, -1)),
                (this._start = new Sys.UI.Point(-1, -1));
            }),
            (a.forceScroll = function () {
              if (
                this._currentlyScrolling &&
                -1 !== this._position.y &&
                -1 !== this._start.y &&
                -1 !== this._scrollPosition.y
              ) {
                var e = !1,
                  t = this._lastScrolltime !== this._aLongTimeAgo,
                  n = new Date().getTime(),
                  i = n - this._lastScrolltime;
                if (
                  ((this._lastScrolltime = n),
                  t &&
                    (this._scrollPosition.y <
                    F.App.instance.theConfig.scrollZone
                      ? this._start.y < this._position.y
                        ? (t = !1)
                        : (e = !0)
                      : this._start.y > this._position.y && (t = !1)),
                  t)
                ) {
                  var a = Math.floor(
                    (i / 1e3) *
                      F.App.instance.theConfig.scrollMagnitudePerSecond
                  );
                  0,
                    e && (a *= -1),
                    o.AFrameworkApplication.theActionManager.processActionWithData(
                      G.a.repositionScrollerWithoutAnimation,
                      2,
                      new N.a(
                        Math.round(this.scrollControl.getScrollTop() + a),
                        Number.NaN
                      )
                    ),
                    o.AFrameworkApplication.theActionManager.processActionWithData(
                      G.a.selectFromScroll,
                      2,
                      new ee(this._position.y, e)
                    ),
                    (this._region.style.cursor = "text");
                }
                this._scrollTimeoutId = window.setTimeout(
                  Object(r.d)(this, this.forceScroll, "forceScroll"),
                  F.App.instance.theConfig.scrollDelay
                );
              }
            }),
            (a.dispose = function () {
              this._region = null;
            }),
            (t = e),
            (n = [
              {
                key: "scrollControl",
                get: function () {
                  return (
                    this._scrollControl ||
                    (this._scrollControl = I.a.instance.resolve(
                      "WordViewer.Controls.IScrollControl"
                    ))
                  );
                },
              },
            ]) && te(t.prototype, n),
            i && te(t, i),
            e
          );
        })();
      Object(i.a)(ie, "ScrollHandler", null, [4]),
        (function (e) {
          (e[(e.beginSelection = 0)] = "beginSelection"),
            (e[(e.moveSelection = 1)] = "moveSelection"),
            (e[(e.endSelection = 2)] = "endSelection"),
            (e[(e.clickSelection = 3)] = "clickSelection"),
            (e[(e.hover = 4)] = "hover"),
            (e[(e.doubleClickSelection = 5)] = "doubleClickSelection"),
            (e[(e.checkClickInSelection = 6)] = "checkClickInSelection"),
            (e[(e.checkClickInPage = 7)] = "checkClickInPage");
        })(ne || (ne = {})),
        Object(i.b)("SelectionFlag", ne);
      var re = n(91),
        ae = n(254);
      function oe(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      n.d(t, "a", function () {
        return se;
      });
      var se = (function () {
        function e() {
          if (
            ((this._clicking = !1),
            (this._offset = new Sys.UI.Point(0, 0)),
            (this._eventPosition = new Sys.UI.Point(0, 0)),
            (this._selected = {}),
            (this._externalLinkOnClickRegistered = !1),
            (this._safeLinksManager = null),
            (this._scrollControl = null),
            (this._zoomControl = null),
            (this._start = null),
            (this._end = null),
            (this._previousSelectionStart = null),
            (this._previousSelectionEnd = null),
            (this._selectionCopier = null),
            (this._waitingOnReposition = !1),
            (this._loggedWordSelectionFailed = !1),
            F.App.get_activeAppFrame().workspace &&
              F.App.get_activeAppFrame().workspace.initialized)
          ) {
            if (
              ((this._newEmbedModeIsEnabled =
                o.AFrameworkApplication.appSettingsManager.getBooleanAppSetting(
                  "NewEmbedModeIsEnabled"
                )),
              (this._surface = this.scrollControl.container),
              this.calculateOffset(),
              (this._selectionScroller = new ie(this._surface)),
              (this._externalLinkAnchor = document.createElement("a")),
              (this._externalLinkDiv = document.createElement("div")),
              (this._externalLinkDiv.className = "WACLink"),
              this._externalLinkAnchor.appendChild(this._externalLinkDiv),
              (this._externalLinkAnchor.target = "_blank"),
              this._externalLinkAnchor.setAttribute(
                "rel",
                "noreferrer noopener"
              ),
              !F.App.instance.isAccessiblePdfMode &&
                (F.App.instance.copyingEnabled &&
                  (this._selectionCopier = new Y(this._surface)),
                !F.App.instance.isSmallView || this._newEmbedModeIsEnabled))
            ) {
              F.App.get_activeAppFrame().theDragInputManager.registerDragAdapter(
                this._surface,
                this
              ),
                F.App.get_activeAppFrame().theClickInputManager.registerHandler(
                  b.EventNames.doubleClick,
                  this._surface,
                  Object(r.d)(this, this.onDoubleClick, "onDoubleClick")
                ),
                F.App.get_activeAppFrame().theClickInputManager.registerHandler(
                  b.EventNames.click,
                  this._surface,
                  Object(r.d)(this, this.onClick, "onClick")
                );
              var e = F.App.get_activeAppFrame().theMouseInputManager;
              e.registerHandler(
                b.EventNames.mouseDown,
                this._surface,
                Object(r.d)(this, this.onMouseDown, "onMouseDown"),
                null
              ),
                e.registerHandler(
                  b.EventNames.mouseMove,
                  this._surface,
                  Object(r.d)(this, this.onMouseMove, "onMouseMove"),
                  null
                );
            }
            (this._repositionAllSelectionsTask = new w.a(
              3,
              1,
              10,
              Object(r.d)(
                this,
                this.repositionAllSelectionsTask,
                "repositionAllSelectionsTask"
              )
            )),
              (this._clearPreviousSelectionTask = new w.a(
                3,
                1,
                1e3,
                Object(r.d)(
                  this,
                  this.clearPreviousSelectionTask,
                  "clearPreviousSelectionTask"
                )
              )),
              this.actionManager.addActionWithFlags(
                G.a.onContainerResizeForSelection,
                P.a.application,
                Object(r.d)(this, this.onContainerResize, "onContainerResize"),
                96
              ),
              this.actionManager.addActionWithFlags(
                G.a.xmlPageDownloaded,
                P.a.application,
                Object(r.d)(this, this.xmlPageDownloaded, "xmlPageDownloaded"),
                97
              ),
              this.actionManager.addActionWithFlags(
                G.a.updateSelection,
                P.a.application,
                Object(r.d)(this, this.updateSelection, "updateSelection"),
                96
              ),
              this.actionManager.addActionWithFlags(
                G.a.selectFromScroll,
                P.a.application,
                Object(r.d)(this, this.selectFromScroll, "selectFromScroll"),
                97
              ),
              this.actionManager.addAction(
                G.a.browserCopied,
                P.a.application,
                Object(r.d)(this, this.browserCopied, "browserCopied")
              ),
              this.actionManager.addAction(
                G.a.copy,
                P.a.application,
                Object(r.d)(this, this.copy, "copy")
              ),
              this.actionManager.addAction(
                G.a.showContextMenuInDocument,
                P.a.application,
                Object(r.d)(
                  this,
                  this.showContextMenuInDocument,
                  "showContextMenuInDocument"
                )
              ),
              this.actionManager.addAction(
                G.a.showContextMenuFromKey,
                P.a.application,
                Object(r.d)(this, this.contextMenuFromKey, "contextMenuFromKey")
              ),
              this.actionManager.addAction(
                G.a.beginSelection,
                P.a.application,
                Object(r.d)(this, this.selection, "selection")
              ),
              this.actionManager.addAction(
                G.a.endSelection,
                P.a.application,
                Object(r.d)(this, this.selection, "selection")
              ),
              this.actionManager.addAction(
                G.a.doubleClickSelection,
                P.a.application,
                Object(r.d)(this, this.selection, "selection")
              ),
              B.FocusManager.instance()
                .getScope(x.AFrame.documentFocusID)
                .bindAction(
                  A.KeyInputManager.hashKey(
                    k.a.VK_C,
                    A.KeyInputManager.commandKeyModifier
                  ),
                  G.a.browserCopied
                );
          }
        }
        var t,
          n,
          i,
          h = e.prototype;
        return (
          (h.firstPage = function () {
            return this._start && this._end
              ? Math.min(this._start.page, this._end.page)
              : Number.MAX_VALUE;
          }),
          (h.lastPage = function () {
            return this._start && this._end
              ? Math.max(this._start.page, this._end.page)
              : Number.MIN_VALUE;
          }),
          (h.dispose = function () {
            var e = this._selected;
            for (var t in e) {
              ({ key: t, value: e[t] }.value.dispose());
            }
            if (
              (this.teardownExternalLinkAnchor(),
              (this._externalLinkAnchor = null),
              (this._externalLinkDiv = null),
              this._selectionCopier &&
                (this._selectionCopier.dispose(),
                (this._selectionCopier = null)),
              this._selectionScroller &&
                (this._selectionScroller.dispose(),
                (this._selectionScroller = null)),
              this._waitingOnReposition &&
                (o.AFrameworkApplication.theTaskManager.deleteTask(
                  this._repositionAllSelectionsTask
                ),
                (this._waitingOnReposition = !1)),
              (!F.App.instance.isSmallView || this._newEmbedModeIsEnabled) &&
                !F.App.instance.isAccessiblePdfMode &&
                this._surface)
            ) {
              F.App.get_activeAppFrame().theDragInputManager.unregisterDragAdapter(
                this._surface,
                this
              ),
                F.App.get_activeAppFrame().theClickInputManager.unregisterHandler(
                  b.EventNames.click,
                  this._surface,
                  Object(r.d)(this, this.onClick, "onClick")
                ),
                F.App.get_activeAppFrame().theClickInputManager.unregisterHandler(
                  b.EventNames.doubleClick,
                  this._surface,
                  Object(r.d)(this, this.onDoubleClick, "onDoubleClick")
                );
              var n = F.App.get_activeAppFrame().theMouseInputManager;
              n.unregisterHandler(
                b.EventNames.mouseDown,
                this._surface,
                Object(r.d)(this, this.onMouseDown, "onMouseDown")
              ),
                n.unregisterHandler(
                  b.EventNames.mouseMove,
                  this._surface,
                  Object(r.d)(this, this.onMouseMove, "onMouseMove")
                );
            }
            (this._surface = null), (this._selected = null);
          }),
          (h.selection = function (e, t, n, i, r) {
            var a = r,
              o = !1;
            if (!a || !a.eventArgs) return 8;
            try {
              o = this.eventHandler(a.eventArgs, a.selectionFlag);
            } catch (e) {
              c.ULS.sendTraceTag(
                24151193,
                301,
                10,
                "Drag event failed for '{0}': {1}",
                ne[a.selectionFlag],
                e.message
              );
            }
            return o ? 32 : 8;
          }),
          (h.xmlPageDownloaded = function (e, t, n, i, r) {
            var a,
              o = r,
              s = o.firstPage,
              l = o.lastPage,
              c = F.App.get_activeAppFrame().thePageInfoCache;
            if (!this._start || !this._end) return 32;
            for (var h = s; h <= l; h++)
              (a = c.getPage(s)),
                this.selectPage(a, this._start, this._end, h === s, h === l);
            return 32;
          }),
          (h.updateSelection = function (e, t, n, i, r) {
            return this.repositionAllSelections(), 32;
          }),
          (h.selectFromScroll = function (e, t, n, i, r) {
            if (!this._start) return 32;
            this._end || (this._end = this._start);
            var a = r,
              s = a.directionUp,
              l = a.cursorY,
              c = this.zoomControl.currentZoom,
              h = this.scrollControl.getScrollTop() + l,
              u = re.a.instance.getPageFromScrollTop(h, c),
              d = new Sys.UI.Point(0, 0);
            o.AFrameworkApplication.isRtl
              ? (d.x =
                  re.a.instance.getDistanceOfPageLeftFromScrollerRightEdge(
                    u,
                    c
                  ) - this._eventPosition.x)
              : (d.x =
                  this._eventPosition.x -
                  re.a.instance.getPageLeftAtZoom(u, c, !1)),
              (d.y = h - re.a.instance.getPageTopAtZoom(u, c));
            var g = Z.buildXPathFromPosition(u, this._start.storyId, s, d),
              m = F.App.get_activeAppFrame().thePageInfoCache.getPage(u);
            if (!m) return 32;
            for (
              var p,
                _ = m.selectNodes(g),
                f = null,
                v = null,
                C = Number.MIN_VALUE,
                y = Number.MAX_VALUE,
                S = 0;
              S < _.length;
              S++
            )
              (p = parseInt(_[S].attributes.getNamedItem("id").nodeValue)) <
                y && ((y = p), (v = _[S])),
                p > C && ((C = p), (f = _[S]));
            var x,
              b = -1;
            return (
              s
                ? ((x = Z.instance.getImagesInlineWithText(v, m)),
                  (b = Z.instance.getCharacterPosition(d, v, x)),
                  this.updateSelectionNode(v, b, d, x))
                : ((x = Z.instance.getImagesInlineWithText(f, m)),
                  (b = Z.instance.getCharacterPosition(d, f, x)),
                  this.updateSelectionNode(f, b, d, x)),
              32
            );
          }),
          (h.browserCopied = function (e, t, n, i, r) {
            return o.AFrameworkApplication.theWsaClient.incrementDw(8812, 1), 4;
          }),
          (h.contextMenuFromKey = function (e, t, n, i, r) {
            if (!this._start || !this._end) return 32;
            var a = 0,
              o = 0;
            if (
              void 0 !== this._start &&
              null !== this._start &&
              void 0 !== this._start.node &&
              null !== this._start.node
            ) {
              var s = this._start.node.attributes,
                l = Math.round(parseFloat(s.getNamedItem("l").nodeValue)),
                c = Math.round(parseFloat(s.getNamedItem("t").nodeValue));
              (a =
                l + Math.round(parseFloat(s.getNamedItem("w").nodeValue)) / 2),
                (o =
                  c +
                  Math.round(parseFloat(s.getNamedItem("h").nodeValue)) / 2);
            }
            var h = this.scrollControl.scroller.offsetLeft,
              u =
                (F.App.get_activeAppFrame().workspace,
                this.scrollControl.getScrollTop()),
              d = this.zoomControl.currentZoom,
              g = this._start.page,
              m = Math.round(re.a.instance.getPageTopAtZoom(g, d) / d),
              p = new Sys.UI.Point(a + h, m - u + o);
            return (
              T.a.ensureContextMenuCreated(),
              T.a.contextMenuUser.showContextMenuAt("mnuSelectionViewer", p, 2),
              32
            );
          }),
          (h.copy = function (t, n, i, r, a) {
            if (!this._start || !this._end) return 8;
            if (1 === i) return F.App.isReadyForRibbon() ? 32 : 8;
            var o;
            try {
              this._selectionCopier.updateCopy(
                this.selectionStart,
                this.selectionEnd
              ),
                (o = e.executeBrowserCopyCommand(
                  this._selectionCopier.copyFrame.contentWindow.document
                ));
            } catch (e) {
              c.ULS.shipAssertTag(
                4792664,
                301,
                l.a.isFirefox,
                "We failed to copy to the system clipboard, even though we thought we had access!"
              ),
                (o = !1);
            }
            return o
              ? (this._selectionCopier.setFocus(), 32)
              : (this.handleBlockedAccessAttempt(), 8);
          }),
          (h.showContextMenuInDocument = function (e, t, n, i, r) {
            var a = r;
            return this.eventHandler(a, 7)
              ? ((this._start && this._end) || this.eventHandler(a, 3),
                T.a.contextMenuUser.showContextMenuAt(
                  "mnuSelectionViewer",
                  a.clientPoint,
                  a.inputSource
                ),
                32)
              : 8;
          }),
          (h.handleBlockedAccessAttempt = function () {
            if (o.AFrameworkApplication.wacCopyPasteShortcutDialogIsEnabled)
              S.instance.createCopyPasteShortcutDialog(
                Object(r.d)(this, this.closeHandler, "closeHandler"),
                null
              );
            else {
              var e = new g.StandardDialog();
              (e.buttonsOption = 0),
                e.showWarning(
                  CommonUIStrings.l_ClipboardAccessDeniedTitle,
                  CommonUIStrings.l_ClipboardAccessDenied,
                  Object(r.d)(
                    this,
                    this.standardDialogCloseHandler,
                    "standardDialogCloseHandler"
                  )
                );
            }
          }),
          (h.closeHandler = function (e) {
            this.sharedCloseHandler();
          }),
          (h.standardDialogCloseHandler = function (e, t) {
            this.sharedCloseHandler();
          }),
          (h.sharedCloseHandler = function () {
            this._selectionCopier.setFocus();
          }),
          (h.eventHandler = function (t, n) {
            var i = t.innerEvent.rawEvent.shiftKey,
              r = F.App.get_activeAppFrame().workspace,
              a = this.scrollControl.getScrollLeft(),
              l = this.scrollControl.getScrollTop(),
              h = new Sys.UI.Point(0, 0);
            o.AFrameworkApplication.isRtl
              ? (h.x =
                  this.scrollControl.getWidth() +
                  this._offset.x +
                  Math.abs(a) -
                  t.clientPoint.x)
              : (h.x = t.clientPoint.x + a - this._offset.x),
              (h.y = t.clientPoint.y + l - this._offset.y);
            var u = this.zoomControl.currentZoom,
              d = re.a.instance.getPageFromScrollTop(h.y, u);
            (this._eventPosition = new Sys.UI.Point(h.x - a, h.y - l)),
              this._clicking &&
                this._selectionScroller.update(this._eventPosition);
            var g = new Sys.UI.Point(0, 0);
            if (o.AFrameworkApplication.isRtl) {
              var m = re.a.instance.getDistanceOfPageLeftFromScrollerRightEdge(
                d,
                u
              );
              g.x = Math.round((m - h.x) / u);
            } else {
              var p = re.a.instance.getPageLeftAtZoom(d, u, !1);
              g.x = Math.round((h.x - p) / u);
            }
            g.y = Math.round((h.y - re.a.instance.getPageTopAtZoom(d, u)) / u);
            var _ = F.App.get_activeAppFrame().thePageInfoCache,
              f = null,
              v = null,
              C = -1,
              y = null;
            if (
              (_ &&
                ((f = Z.getXmlNodeAtPosition(g, d, _.getPage(d))),
                (y = Z.instance.getImagesInlineWithText(f, _.getPage(d))),
                (C = Z.instance.getCharacterPosition(g, f, y)),
                (v = Z.getXmlLinkNodeAtPosition(g, d, _.getPage(d)))),
              4 === n)
            )
              return (
                e.isValidIntLinkNode(v)
                  ? (this._surface.style.cursor = "pointer")
                  : e.isValidExtLinkNode(v)
                  ? ((this._surface.style.cursor = "pointer"),
                    this.setupExternalLinkAnchor(v, l, d, u))
                  : (this.teardownExternalLinkAnchor(),
                    (this._surface.style.cursor = Z.nodeHasDimensions(f)
                      ? "text"
                      : "")),
                !1
              );
            if (
              3 === n &&
              e.isValidExtLinkNode(v) &&
              this.isHyperlinkLaunchEvent(t)
            ) {
              try {
                var S = e.returnScreenedLink(v.text);
                (this.safeLinksManager &&
                  this.safeLinksManager.tryNavigate(S)) ||
                  s.a.followHyperlinkWithNoReferrer(S);
              } catch (e) {
                e.message;
                c.ULS.sendTraceTag(
                  39965912,
                  301,
                  50,
                  "Error thrown when opening the link with protocol '{0}'",
                  this.getLinkProtocol(v.text)
                );
              }
              return !0;
            }
            if (
              3 === n &&
              e.isValidIntLinkNode(v) &&
              this.isHyperlinkLaunchEvent(t)
            )
              return this.navigatepublicLink(v), !0;
            switch (n) {
              case 0:
                this._selectionScroller.setStart(this._eventPosition),
                  this.beginSelection(f, i, C, g, y);
                break;
              case 1:
                this.moveSelection(f, C, g, y);
                break;
              case 2:
                this.endSelection();
                break;
              case 3:
                if (3 === t.inputSource)
                  this.checkIfClickIsInSelection(g.x, g.y)
                    ? F.App.get_activeAppFrame().contextMenuControl.show(t)
                    : this.selectParagraph(f);
                else
                  f && i
                    ? (this.beginSelection(f, i, C, g, y),
                      this.moveSelection(f, C, g, y),
                      this.endSelection())
                    : "contextmenu" !== t.eventName && this.clearSelection();
                break;
              case 5:
                this.selectWordAtPosition(f, C, g, y);
                break;
              case 6:
                return this.checkIfClickIsInSelection(g.x, g.y);
              case 7:
                var x = o.AFrameworkApplication.isRtl
                  ? F.App.get_activeAppFrame().isCommentPaneVisible
                    ? F.App.instance.theConfig.commentPaneWidth
                    : 0
                  : F.App.get_activeAppFrame().isSearchPaneVisible
                  ? F.App.instance.theConfig.searchPaneWidth
                  : 0;
                return (
                  !(
                    g.x < 0 ||
                    g.x > re.a.instance.getPageWidthAtZoom(d, u) / u ||
                    t.clientPoint.x - x > this.scrollControl.getWidth()
                  ) &&
                  !(
                    g.y < 0 ||
                    g.y > re.a.instance.getPageHeightAtZoom(d, u) / u ||
                    t.clientPoint.y - r.appBaseDom.offsetTop > r.getHeight()
                  )
                );
              default:
                0,
                  c.ULS.sendTraceTag(
                    4792667,
                    301,
                    15,
                    "Invalid Selection Code {0}",
                    n
                  );
            }
            return !0;
          }),
          (h.isHyperlinkLaunchEvent = function (e) {
            return (
              2 !== e.inputSource ||
              !e.innerEvent.button ||
              e.innerEvent.button === Sys.UI.MouseButton.middleButton
            );
          }),
          (h.getLinkProtocol = function (e) {
            if (!e) return "NULL";
            if (!e.length) return "EMPTY";
            var t = e.indexOf("://");
            return -1 === t ? "UNKNOWN" : e.substring(0, t);
          }),
          (h.checkIfClickIsInSelection = function (e, t) {
            if (!this._start || !this._end) return !1;
            var n = this._selected;
            for (var i in n) {
              var r = { key: i, value: n[i] }.value.rectangle;
              if (
                e >= r.left &&
                e <= r.left + r.width &&
                t >= r.top &&
                t <= r.top + r.height
              )
                return !0;
            }
            return !1;
          }),
          (h.setupExternalLinkAnchor = function (t, n, i, a) {
            var s = e.returnScreenedLink(t.text);
            if (s) {
              this._externalLinkAnchor.href = s;
              var l = Math.round(
                  parseFloat(t.attributes.getNamedItem("t").nodeValue)
                ),
                c = Math.round(
                  parseFloat(t.attributes.getNamedItem("l").nodeValue)
                ),
                h = n - re.a.instance.getPageTopAtZoom(i, a);
              if (
                ((this._externalLinkDiv.style.top = n + l * a - h + "px"),
                o.AFrameworkApplication.isRtl)
              ) {
                var u = Math.round(
                  parseFloat(t.attributes.getNamedItem("w").nodeValue)
                );
                this._externalLinkDiv.style.right =
                  re.a.instance.getDistanceOfPageLeftFromScrollerRightEdge(
                    i,
                    a
                  ) -
                  (u + c) * a +
                  "px";
              } else
                this._externalLinkDiv.style.left =
                  re.a.instance.getPageLeftAtZoom(i, a, !1) + c * a + "px";
              (this._externalLinkDiv.style.width =
                Math.round(
                  parseFloat(t.attributes.getNamedItem("w").nodeValue) * a
                ) + "px"),
                (this._externalLinkDiv.style.height =
                  Math.round(
                    parseFloat(t.attributes.getNamedItem("h").nodeValue) * a
                  ) + "px"),
                (this._externalLinkDiv.title = s);
              var d = new w.a(
                2,
                1,
                1e3,
                Object(r.d)(
                  this,
                  this.setupExternalLinkAnchorInternal,
                  "setupExternalLinkAnchorInternal"
                )
              );
              return o.AFrameworkApplication.theTaskManager.addTask(d), !0;
            }
            return !1;
          }),
          (h.setupExternalLinkAnchorInternal = function (e) {
            this._externalLinkOnClickRegistered ||
              (F.App.get_activeAppFrame().theClickInputManager.registerHandler(
                b.EventNames.click,
                this._externalLinkAnchor,
                Object(r.d)(this, this.linkOnClick, "linkOnClick")
              ),
              (this._externalLinkOnClickRegistered = !0)),
              this._surface.appendChild(this._externalLinkAnchor);
          }),
          (h.teardownExternalLinkAnchor = function () {
            E.DomUtils.removeElement(this._externalLinkAnchor),
              this._externalLinkOnClickRegistered &&
                (F.App.get_activeAppFrame().theClickInputManager.unregisterHandler(
                  b.EventNames.click,
                  this._externalLinkAnchor,
                  Object(r.d)(this, this.linkOnClick, "linkOnClick")
                ),
                (this._externalLinkOnClickRegistered = !1));
          }),
          (h.navigatepublicLink = function (e) {
            if (e.hasChildNodes()) {
              0;
              var t = e.selectSingleNode("LT"),
                n = t.attributes.getNamedItem("p"),
                i = t.attributes.getNamedItem("t"),
                r = parseInt(n.nodeValue),
                a = parseInt(i.nodeValue),
                s = this.zoomControl.currentZoom,
                l = re.a.instance.getPageTopAtZoom(r, s);
              l += a * s;
              var c = parseInt(this._surface.offsetHeight);
              o.AFrameworkApplication.theActionManager.processActionWithData(
                G.a.repositionScroller,
                2,
                new N.a(l - 0.2 * c, 0)
              );
            }
          }),
          (h.beginSelection = function (e, t, n, i, r) {
            this._clicking = !0;
            var a = null;
            e && (a = new J.a(null, e, n, i, r)),
              t && this._end && this._start
                ? this.updateSelectionNode(e, n, i, r)
                : (this.clearSelection(),
                  this._selectionCopier && this._selectionCopier.clearCopy(),
                  (this._start = a));
          }),
          (h.moveSelection = function (e, t, n, i) {
            this.updateSelectionNode(e, t, n, i);
          }),
          (h.endSelection = function () {
            this._selectionScroller.resetScroller(),
              this._clicking &&
                this._selectionCopier &&
                this._selectionCopier.updateCopy(this._start, this._end),
              (this._surface.style.cursor = ""),
              (this._clicking = !1);
          }),
          (h.clearSelection = function () {
            var e,
              t = this._selected;
            for (var n in t) {
              (e = { key: n, value: t[n] }.value.rectangle),
                W.a.instance.removeFromParent(e);
            }
            (this._previousSelectionStart = this._start),
              (this._previousSelectionEnd = this._end),
              o.AFrameworkApplication.theTaskManager.addTask(
                this._clearPreviousSelectionTask
              ),
              (this._selected = {}),
              (this._start = null),
              (this._end = null);
          }),
          (h.clearPreviousSelectionTask = function (e) {
            this._previousSelectionStart || this._previousSelectionEnd,
              (this._previousSelectionStart = null),
              (this._previousSelectionEnd = null);
          }),
          (h.unselectRange = function (e, t) {
            var n;
            t < e && ((n = e), (e = t), (t = n));
            var i,
              r,
              a = [],
              o = this._selected;
            for (var s in o) {
              var l = { key: s, value: o[s] };
              (i = l.value.rectangle),
                (r = parseInt(i.id)) >= e &&
                  r <= t &&
                  (W.a.instance.removeFromParent(i), Array.add(a, l.key));
              for (var c = 0; c < a.length; c++) delete this._selected[a[c]];
            }
          }),
          (h.updateSelectionNode = function (e, t, n, i) {
            if (
              (this._end ||
                (this.selectRange(this._start, this._start),
                (this._end = this._start)),
              e)
            ) {
              var r = new J.a(null, e, t, n, i);
              if (
                r.storyId === this._start.storyId &&
                (1 === r.storyId || r.page === this._start.page)
              ) {
                var a = this._end.page,
                  o = F.App.get_activeAppFrame().thePageInfoCache;
                this._end.id === r.id
                  ? (this.unselectRange(this._end.id, this._end.id),
                    this.selectRange(this._start, r),
                    (this._end = r))
                  : this._start.id < r.id
                  ? this._end.id < this._start.id
                    ? (this.unselectRange(this._end.id, this._start.id - 1),
                      this.selectRange(this._start, r),
                      (this._end = r),
                      o.removeFromCache(a, this._start.page))
                    : this._end.id < r.id
                    ? (this.unselectRange(this._end.id, this._end.id),
                      this.selectRange(this._start, r),
                      (this._end = r))
                    : r.id < this._end.id &&
                      (this.unselectRange(r.id + 1, this._end.id),
                      (this._end = r),
                      o.removeFromCache(r.page, a))
                  : r.id < this._start.id
                  ? this._start.id < this._end.id
                    ? (this.unselectRange(this._start.id + 1, this._end.id),
                      this.selectRange(r, this._start),
                      (this._end = r),
                      o.removeFromCache(this._start.page, a))
                    : r.id < this._end.id
                    ? (this.unselectRange(this._end.id, this._end.id),
                      this.selectRange(this._start, r),
                      (this._end = r))
                    : this._end.id < r.id &&
                      (this.unselectRange(this._end.id, r.id - 1),
                      (this._end = r),
                      o.removeFromCache(a, r.page))
                  : r.id === this._start.id &&
                    this._end.id !== this._start.id &&
                    (this._end.id < this._start.id
                      ? (this.unselectRange(this._end.id, this._start.id - 1),
                        (this._end = r),
                        o.removeFromCache(a, r.page))
                      : (this.unselectRange(this._start.id + 1, this._end.id),
                        (this._end = r),
                        o.removeFromCache(r.page, a)));
              }
            }
          }),
          (h.selectRange = function (e, t) {
            var n;
            (t.id < e.id ||
              (e.id === t.id && t.characterPosition < e.characterPosition)) &&
              ((n = e), (e = t), (t = n));
            for (
              var i,
                r = F.App.get_activeAppFrame().thePageInfoCache,
                a = e.page;
              a <= t.page;
              a++
            )
              (i = r.getPage(a)),
                this.selectPage(i, e, t, a === e.page, a === t.page);
          }),
          (h.selectWordAtPosition = function (e, t, n, i) {
            var r,
              o,
              s,
              l,
              h = Z.instance.tryGetWordStart(
                e,
                t,
                Object(a.a)(
                  function () {
                    return r;
                  },
                  function (e) {
                    return (r = e);
                  }
                ),
                Object(a.a)(
                  function () {
                    return s;
                  },
                  function (e) {
                    return (s = e);
                  }
                )
              ),
              u = Z.instance.tryGetWordEnd(
                e,
                t,
                Object(a.a)(
                  function () {
                    return o;
                  },
                  function (e) {
                    return (o = e);
                  }
                ),
                Object(a.a)(
                  function () {
                    return l;
                  },
                  function (e) {
                    return (l = e);
                  }
                )
              );
            h && u
              ? (this.beginSelection(r, !1, s, n, i),
                this.updateSelectionNode(o, l, n, i),
                this.endSelection())
              : (this._loggedWordSelectionFailed ||
                  (c.ULS.sendTraceTag(
                    20557893,
                    301,
                    50,
                    "Unable to select word"
                  ),
                  (this._loggedWordSelectionFailed = !0)),
                this.selectParagraph(e));
          }),
          (h.selectParagraph = function (e) {
            if (e) {
              var t = e.selectSingleNode("ancestor::P");
              if (t) {
                var n = t.selectNodes("descendant::T");
                n &&
                  n.length &&
                  (this.beginSelection(n[0], !1, -1, null, null),
                  this.updateSelectionNode(n[n.length - 1], -1, null, null),
                  this.endSelection());
              }
            } else this.clearSelection();
          }),
          (h.selectPage = function (e, t, n, i, r) {
            if (e) {
              var a = Z.buildXPathForPageSelection(t, n),
                o = e.selectNodes(a);
              if (o.length) {
                var s,
                  l,
                  c,
                  h = o[0].selectSingleNode("ancestor::Page");
                0;
                for (
                  var u = parseInt(h.selectSingleNode("@id").text), d = 0;
                  d < o.length;
                  d++
                )
                  if (
                    ((l = (s = o[d]).attributes.getNamedItem("id").nodeValue),
                    !this._selected[l] && Z.nodeHasDimensions(s))
                  ) {
                    var g = this.zoomControl.currentZoom,
                      m = Z.instance.getSelectionBoundingBox(
                        s,
                        t,
                        n,
                        o.length - 1,
                        d,
                        i,
                        r
                      ),
                      p = W.a.instance.drawRectangle(
                        m,
                        0,
                        l,
                        K.a.getPageFromXmlLine(s)
                      );
                    p.setPosition(p.box, u, g),
                      (c = new J.a(p, s)),
                      (this._selected[p.id] = c);
                  }
              }
            }
          }),
          (h.repositionAllSelections = function () {
            this._waitingOnReposition ||
              ((this._waitingOnReposition = !0),
              o.AFrameworkApplication.theTaskManager.addTask(
                this._repositionAllSelectionsTask
              ));
          }),
          (h.repositionAllSelectionsTask = function (e) {
            var t,
              n = this.zoomControl.currentZoom,
              i = this._selected;
            for (var r in i) {
              t = { key: r, value: i[r] }.value;
              var a = Z.instance.getRectanglePosition(t.node);
              t.rectangle.setPosition(a, K.a.getPageFromXmlLine(t.node), n);
            }
            this.showSelection(), (this._waitingOnReposition = !1);
          }),
          (h.calculateOffset = function () {
            (this._offset = ae.a(this._surface)),
              o.AFrameworkApplication.isRtl &&
                (l.a.isInternetExplorerNonEdge || l.a.isChromeOrIEEdge) &&
                (this._offset.x += this.scrollControl.verticalScrollBarWidth);
          }),
          (h.onContainerResize = function (e, t, n, i, r) {
            return this.repositionAllSelections(), this.calculateOffset(), 32;
          }),
          (h.hideSelection = function () {
            var e = this._selected;
            for (var t in e) {
              ({ key: t, value: e[t] }.value.rectangle.hideHighlight());
            }
          }),
          (h.showSelection = function () {
            var e = this._selected;
            for (var t in e) {
              ({ key: t, value: e[t] }.value.rectangle.showHighlight());
            }
          }),
          (h.isDragPossible = function (e) {
            return 2 === e.inputSource && !e.mouseButton;
          }),
          (h.onDragStart = function (e) {
            return (
              !!this.isDragPossible(e) &&
              this.executeDragOrClickEventForSelection(e, G.a.beginSelection, 0)
            );
          }),
          (h.onDragMove = function (e) {
            return !!this._start && this.eventHandler(e, 1);
          }),
          (h.onDragEnd = function (e) {
            e.mouseButton ||
              this.executeDragOrClickEventForSelection(e, G.a.endSelection, 2);
          }),
          (h.onDragCancel = function (e) {
            this.endSelection();
          }),
          (h.linkOnClick = function (e) {
            return e.innerEvent.stopPropagation(), !1;
          }),
          (h.onClick = function (e) {
            return this.eventHandler(e, 3);
          }),
          (h.onDoubleClick = function (e) {
            return this.executeDragOrClickEventForSelection(
              e,
              G.a.doubleClickSelection,
              5
            );
          }),
          (h.onMouseDown = function (e) {
            return (
              B.FocusManager.usable() &&
                B.FocusManager.instance().setScope(x.AFrame.documentFocusID),
              document.body.focus(),
              !1
            );
          }),
          (h.onMouseMove = function (e) {
            return this._clicking || this.eventHandler(e, 4), !1;
          }),
          (h.executeDragOrClickEventForSelection = function (e, t, n) {
            return (
              32 === this.actionManager.processActionWithData(t, 2, new $(e, n))
            );
          }),
          (e.executeBrowserCopyCommand = function (e) {
            return e.execCommand("copy", !1, null);
          }),
          (e.returnScreenedLink = function (e) {
            var t = ["javascript:", "vbscript:"];
            if (!e) return null;
            for (var n = R.a.toLower(e), i = t.length, r = 0; r < i; ++r)
              if (R.a.startsWith(n, t[r])) return null;
            return R.a.isLinkable(e) ? e : "BLOCKED:" + e;
          }),
          (e.isValidExtLinkNode = function (e) {
            return (
              !!e &&
              !(
                1 !== e.childNodes.length ||
                3 !== e.childNodes[0].nodeType ||
                !Z.nodeHasDimensions(e)
              )
            );
          }),
          (e.isValidIntLinkNode = function (e) {
            if (!e) return !1;
            var t = e.selectSingleNode("LT");
            return (
              !!t &&
              !!(
                t.attributes.getNamedItem("p") &&
                t.attributes.getNamedItem("l") &&
                t.attributes.getNamedItem("t")
              )
            );
          }),
          (t = e),
          (i = [
            {
              key: "instance",
              get: function () {
                return (
                  e._instance ||
                    e._initializing ||
                    ((e._initializing = !0),
                    F.App.get_activeAppFrame() && (e._instance = new e()),
                    (e._initializing = !1)),
                  e._instance
                );
              },
            },
          ]),
          (n = [
            {
              key: "actionManager",
              get: function () {
                return o.AFrameworkApplication.theActionManager;
              },
            },
            {
              key: "safeLinksManager",
              get: function () {
                return (
                  this._safeLinksManager ||
                  (this._safeLinksManager = I.a.instance.tryResolve(
                    "Common.App.SafeLinks.ISafeLinksManager"
                  ))
                );
              },
            },
            {
              key: "zoomControl",
              get: function () {
                return (
                  this._zoomControl ||
                  (this._zoomControl = I.a.instance.resolve(
                    "WordViewer.Controls.IZoomControl"
                  ))
                );
              },
            },
            {
              key: "scrollControl",
              get: function () {
                return (
                  this._scrollControl ||
                  (this._scrollControl = I.a.instance.resolve(
                    "WordViewer.Controls.IScrollControl"
                  ))
                );
              },
            },
            {
              key: "selectionStart",
              get: function () {
                return this._start
                  ? this._end && this._start.id > this._end.id
                    ? this._end
                    : this._start
                  : null;
              },
            },
            {
              key: "surface",
              get: function () {
                return this._surface;
              },
            },
            {
              key: "selectionEnd",
              get: function () {
                return this._end
                  ? this._start && this._start.id > this._end.id
                    ? this._start
                    : this._end
                  : null;
              },
            },
            {
              key: "previousSelectionStart",
              get: function () {
                return this._previousSelectionStart
                  ? this._previousSelectionEnd
                    ? this._previousSelectionStart.id >
                      this._previousSelectionEnd.id
                      ? this._previousSelectionEnd
                      : this._previousSelectionStart
                    : this._start
                  : null;
              },
            },
            {
              key: "previousSelectionEnd",
              get: function () {
                return this._previousSelectionEnd
                  ? this._previousSelectionStart
                    ? this._previousSelectionStart.id >
                      this._previousSelectionEnd.id
                      ? this._previousSelectionStart
                      : this._previousSelectionEnd
                    : this._end
                  : null;
              },
            },
          ]) && oe(t.prototype, n),
          i && oe(t, i),
          e
        );
      })();
      (se._initializing = !1),
        (se._instance = null),
        Object(i.a)(se, "SelectionManager", null, [77, 4]);
    },
    532: function (e, t, n) {
      "use strict";
      var i = n(0),
        r = (n(9), n(21)),
        a = n(11),
        o = n(14),
        s = n(1),
        l = n(29),
        c = n(148),
        h = n(91);
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var d = (function () {
        function e(e, t, n, i, r, a) {
          (this._box = e),
            (this._style = t),
            (this._id = n),
            (this._page = i),
            (this._domElem = document.createElement("div")),
            (this._domElem.id = n),
            (this._zoom = 1),
            (this._isRtl = r),
            (this._documentDataUtils = a),
            this.addStyle(t);
        }
        var t,
          n,
          i,
          r = e.prototype;
        return (
          (r.addStyle = function (e) {
            switch (((this._style = e), e)) {
              case 1:
                Sys.UI.DomElement.addCssClass(
                  this._domElem,
                  "CommonHighlight WACHighlight"
                );
                break;
              case 2:
                Sys.UI.DomElement.addCssClass(
                  this._domElem,
                  "WACActiveHighlight"
                );
                break;
              case 3:
                Sys.UI.DomElement.addCssClass(
                  this._domElem,
                  "CommonHighlight WACCommentHighlight"
                );
                break;
              case 0:
              default:
                Sys.UI.DomElement.addCssClass(this._domElem, "WACSelection");
            }
          }),
          (r.removeStyle = function (e) {
            switch (
              (e === this._style && 2 === e
                ? (this._style = 1)
                : (this._style = -1),
              e)
            ) {
              case 1:
                Sys.UI.DomElement.removeCssClass(
                  this._domElem,
                  "CommonHighlight WACHighlight"
                );
                break;
              case 2:
                Sys.UI.DomElement.removeCssClass(
                  this._domElem,
                  "WACActiveHighlight"
                );
                break;
              case 3:
                Sys.UI.DomElement.removeCssClass(
                  this._domElem,
                  "CommonHighlight WACCommentHighlight"
                );
                break;
              case 0:
              default:
                Sys.UI.DomElement.removeCssClass(this._domElem, "WACSelection");
            }
          }),
          (r.setPosition = function (e, t, n) {
            (this._page = t),
              (this._zoom = n),
              (this._box = this.box),
              this.reposition();
          }),
          (r.cloneHighlight = function () {
            return l.WacAirSpace.cloneElement(this.domElem, !1, !0);
          }),
          (r.hideHighlight = function () {
            c.a.animateHideHighlight(this.domElem);
          }),
          (r.showHighlight = function () {
            this.reposition(), c.a.animateShowHighlight(this.domElem);
          }),
          (r.reposition = function () {
            this._isRtl
              ? (this._domElem.style.right =
                  this._documentDataUtils.getDistanceOfPageLeftFromScrollerRightEdge(
                    this._page,
                    this._zoom
                  ) -
                  (Math.round(this._box.left * this._zoom) +
                    Math.round(this._box.width * this._zoom)) +
                  "px")
              : (this._domElem.style.left =
                  this._documentDataUtils.getPageLeftAtZoom(
                    this._page,
                    this._zoom,
                    !1
                  ) +
                  Math.round(this._box.left * this._zoom) +
                  "px"),
              (this._domElem.style.top =
                this._documentDataUtils.getPageTopAtZoom(
                  this._page,
                  this._zoom
                ) +
                Math.round(this._box.top * this._zoom) +
                "px"),
              (this._domElem.style.width =
                Math.round(this._box.width * this._zoom) + "px"),
              (this._domElem.style.height =
                Math.round(this._box.height * this._zoom) + "px");
          }),
          (e.createAnInstance = function (t, n, i, r) {
            return new e(
              t,
              n,
              i,
              r,
              s.AFrameworkApplication.isRtl,
              h.a.instance
            );
          }),
          (t = e),
          (n = [
            {
              key: "left",
              get: function () {
                return this._box.left;
              },
              set: function (e) {
                this._box.left = e;
              },
            },
            {
              key: "top",
              get: function () {
                return this._box.top;
              },
              set: function (e) {
                this._box.top = e;
              },
            },
            {
              key: "width",
              get: function () {
                return this._box.width;
              },
              set: function (e) {
                this._box.width = e;
              },
            },
            {
              key: "height",
              get: function () {
                return this._box.height;
              },
              set: function (e) {
                this._box.height = e;
              },
            },
            {
              key: "box",
              get: function () {
                return this._box;
              },
              set: function (e) {
                this._box = e;
              },
            },
            {
              key: "style",
              get: function () {
                return this._style;
              },
              set: function (e) {
                this._style = e;
              },
            },
            {
              key: "id",
              get: function () {
                return this._id;
              },
              set: function (e) {
                this._id = e;
              },
            },
            {
              key: "page",
              get: function () {
                return this._page;
              },
              set: function (e) {
                this._page = e;
              },
            },
            {
              key: "domElem",
              get: function () {
                return this._domElem;
              },
              set: function (e) {
                this._domElem = e;
              },
            },
          ]) && u(t.prototype, n),
          i && u(t, i),
          e
        );
      })();
      Object(i.a)(d, "HighlightRectanglePng", null, [196]);
      var g = n(540);
      function m(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var p = (function () {
        function e(e, t) {
          (this._parent = e), (this._highlightUtils = t);
        }
        var t,
          n,
          i,
          r = e.prototype;
        return (
          (r.removeFromParent = function (e) {
            e && this._parent.removeChild(e.domElem);
          }),
          (r.drawRectangle = function (e, t, n, i) {
            var r = d.createAnInstance(e, t, n, i);
            return this._parent.appendChild(r.domElem), r;
          }),
          (r.isPageLoaded = function (e) {
            return !0;
          }),
          (r.computeBoundingBoxForTextRun = function (e, t, n) {
            var i = o.App.instance.theConfig.dpiAspectRatio,
              r = parseFloat(e.attributes.getNamedItem("l").nodeValue),
              s = parseFloat(e.attributes.getNamedItem("t").nodeValue),
              l = parseFloat(e.attributes.getNamedItem("w").nodeValue),
              c = parseFloat(e.attributes.getNamedItem("h").nodeValue),
              h = e.attributes.getNamedItem("a")
                ? parseInt(e.attributes.getNamedItem("a").nodeValue)
                : 0,
              u = !!e.attributes.getNamedItem("rtl"),
              d = !!e.attributes.getNamedItem("gr"),
              g = "";
            if (!e.attributes.getNamedItem("cw"))
              return this._highlightUtils.estimatedBoundingBox(e, t, n);
            g = e.attributes.getNamedItem("cw").nodeValue;
            var m = 0,
              p = 0;
            e.childNodes[0].data.length;
            var _ = Number.NaN,
              f = Number.NaN;
            u || h
              ? (270 === h && !u) || (90 === h && u)
                ? ((_ = (r + l) / i), (f = (s + c) / i))
                : (90 === h && !u) || (270 === h && u)
                ? ((_ = r / i), (f = s / i))
                : isNaN(_) && ((_ = (r + l) / i), (f = (s + c) / i))
              : ((_ = r / i), (f = s / i));
            var v = g.split(";"),
              C = [];
            Array.addRange(C, v), Array.removeAt(C, C.length - 1);
            var y = t - 0,
              S = l / i,
              x = 0,
              b = 0,
              B = this._highlightUtils.calculateWidth(
                d,
                y,
                S,
                C,
                Object(a.a)(
                  function () {
                    return x;
                  },
                  function (e) {
                    return (x = e);
                  }
                ),
                Object(a.a)(
                  function () {
                    return b;
                  },
                  function (e) {
                    return (b = e);
                  }
                ),
                !1
              );
            d
              ? (m = f + B)
              : h
              ? (270 === h && !u) || (90 === h && u)
                ? (m = f - B)
                : ((90 === h && !u) || (270 === h && u)) && (m = f + B)
              : (m = u ? _ - B : _ + B);
            var k = n - 0,
              A = this._highlightUtils.calculateWidth(
                d,
                k,
                S,
                C,
                Object(a.a)(
                  function () {
                    return x;
                  },
                  function (e) {
                    return (x = e);
                  }
                ),
                Object(a.a)(
                  function () {
                    return b;
                  },
                  function (e) {
                    return (b = e);
                  }
                ),
                !0
              );
            return (
              d
                ? (p = m + A)
                : h
                ? (270 === h && !u) || (90 === h && u)
                  ? (p = m - A)
                  : ((90 === h && !u) || (270 === h && u)) && (p = m + A)
                : (p = u ? m - A : m + A),
              this._highlightUtils.drawHitBox(
                h,
                u,
                d,
                r,
                s,
                l,
                c,
                m,
                p,
                e,
                t,
                n
              )
            );
          }),
          (e.createAnInstance = function (t) {
            return new e(t, g.a.instance);
          }),
          (t = e),
          (n = [
            {
              key: "parent",
              get: function () {
                return this._parent;
              },
              set: function (e) {
                this._parent = e;
              },
            },
            {
              key: "needsManualRepositioning",
              get: function () {
                return !0;
              },
            },
          ]) && m(t.prototype, n),
          i && m(t, i),
          e
        );
      })();
      function _(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      Object(i.a)(p, "HighlightManagerPng", null, [176]),
        n.d(t, "a", function () {
          return f;
        });
      var f = (function () {
        function e() {}
        var t, n, i;
        return (
          (e.getHighlightManagerWithResolvedDependencies = function () {
            return e.createHighlightManager(
              0,
              r.a.instance.resolve("WordViewer.Controls.IScrollControl")
                .scroller
            );
          }),
          (e.createHighlightManager = function (e, t) {
            switch (e) {
              case 0:
                return p.createAnInstance(t);
              default:
                0;
            }
            return null;
          }),
          (t = e),
          (i = [
            {
              key: "instance",
              get: function () {
                return (
                  e._instance ||
                    e._initializing ||
                    ((e._initializing = !0),
                    (e._instance =
                      e.getHighlightManagerWithResolvedDependencies()),
                    (e._initializing = !1)),
                  e._instance
                );
              },
            },
          ]),
          (n = null) && _(t.prototype, n),
          i && _(t, i),
          e
        );
      })();
      (f._initializing = !1),
        (f._instance = null),
        Object(i.a)(f, "HighlightManager", null, []);
    },
    533: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var i = n(0),
        r = (function () {
          function e() {}
          return (
            (e.prototype.getSelectionXmlNodeWrapper = function (e) {
              var t = n(549).XmlNodeWrapper;
              return e ? new t(e) : null;
            }),
            e
          );
        })();
      Object(i.a)(r, "XmlNodeWrapperFactory", null, [177]);
    },
    534: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(0),
        r = n(529),
        a = n(2),
        o = n(538),
        s = n(530),
        l = n(535),
        c = n(31),
        h = n(1),
        u = n(40),
        d = (n(9), n(55)),
        g = n(56),
        m = n(71),
        p = n(4),
        _ = n(24),
        f = n(25),
        v = n(20),
        C = n(39),
        y = n(7),
        S = n(22),
        x = n(16),
        b = n(10),
        B = n(8);
      function k(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return A(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return A(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var i = 0;
            return function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (n = e[Symbol.iterator]()).next.bind(n);
      }
      function A(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function w(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var E = (function () {
        function e(e) {
          (this.minimumTextboxRows = 4),
            (this._previousTextLength = 0),
            (this._cancelCommentButton = null),
            (this._content = null),
            (this._container = null),
            (this._deleteButton = null),
            (this._doneButton = null),
            (this._doneButtonImage = null),
            (this._replyButton = null),
            (this._saveButton = null),
            (this._footerRow = null),
            (this._footerControls = null),
            (this._footerAddNewControls = null),
            (this._statusIconContainer = null),
            (this._headerRow = null),
            (this._textEntryBox = null),
            (this._textMeasurementContainer = null),
            (this._textMeasurementBox = null),
            (this._saveButtonKeyEventHandler = null),
            (this._doneButtonKeyEventHandler = null),
            (this._replyButtonKeyEventHandler = null),
            (this._cancelButtonKeyEventHandler = null),
            (this._deleteButtonKeyEventHandler = null),
            b.a.isInternetExplorer8 && (this.minimumTextboxRows = 6),
            (this._comment = e),
            (this._escapeKeyHash = v.KeyInputManager.hashKey(f.a.vK_Escape, 0)),
            this.render();
        }
        var t,
          n,
          i,
          r = e.prototype;
        return (
          (r.dispose = function () {
            var e = h.AFrameworkApplication.activeFrame.theClickInputManager,
              t = h.AFrameworkApplication.activeFrame.theKeyInputManager;
            if (
              (e.unregisterHandler(
                p.EventNames.click,
                this._container,
                Object(a.d)(this, this.onContainerClick, "onContainerClick")
              ),
              e.unregisterHandler(
                p.EventNames.doubleClick,
                this._container,
                Object(a.d)(
                  this,
                  this.onContainerDoubleClick,
                  "onContainerDoubleClick"
                )
              ),
              t.unregisterHandler(
                p.EventNames.keyUp,
                this._container,
                Object(a.d)(
                  this,
                  this.onContainerKeyPress,
                  "onContainerKeyPress"
                )
              ),
              this._deleteButton &&
                (e.unregisterHandler(
                  p.EventNames.click,
                  this._deleteButton,
                  Object(a.d)(
                    this,
                    this.onDeleteButtonClick,
                    "onDeleteButtonClick"
                  )
                ),
                t.unregisterHandlerForAllKeyEvents(
                  this._deleteButton,
                  this._deleteButtonKeyEventHandler
                )),
              this._doneButton &&
                (e.unregisterHandler(
                  p.EventNames.click,
                  this._doneButton,
                  Object(a.d)(this, this.onDoneButtonClick, "onDoneButtonClick")
                ),
                t.unregisterHandlerForAllKeyEvents(
                  this._doneButton,
                  this._doneButtonKeyEventHandler
                )),
              this._saveButton &&
                (e.unregisterHandler(
                  p.EventNames.click,
                  this._saveButton,
                  Object(a.d)(this, this.onSaveButtonClick, "onSaveButtonClick")
                ),
                t.unregisterHandlerForAllKeyEvents(
                  this._saveButton,
                  this._saveButtonKeyEventHandler
                )),
              this._cancelCommentButton &&
                (e.unregisterHandler(
                  p.EventNames.click,
                  this._cancelCommentButton,
                  Object(a.d)(
                    this,
                    this.onCancelButtonClick,
                    "onCancelButtonClick"
                  )
                ),
                t.unregisterHandlerForAllKeyEvents(
                  this._cancelCommentButton,
                  this._cancelButtonKeyEventHandler
                )),
              this._replyButton &&
                (e.unregisterHandler(
                  p.EventNames.click,
                  this._replyButton,
                  Object(a.d)(
                    this,
                    this.onReplyButtonClick,
                    "onReplyButtonClick"
                  )
                ),
                t.unregisterHandlerForAllKeyEvents(
                  this._replyButton,
                  this._replyButtonKeyEventHandler
                )),
              this._textEntryBox)
            ) {
              if (
                (t.unregisterHandler(
                  p.EventNames.keyPress,
                  this._textEntryBox,
                  Object(a.d)(this, this.onKeyEvent, "onKeyEvent")
                ),
                t.unregisterHandler(
                  p.EventNames.keyUp,
                  this._textEntryBox,
                  Object(a.d)(this, this.onKeyEvent, "onKeyEvent")
                ),
                b.a.isIPad)
              ) {
                var n =
                  h.AFrameworkApplication.activeFrame
                    .theCompositionEventManager;
                n.unregisterHandler(
                  p.EventNames.compositionStart,
                  this._textEntryBox,
                  Object(a.d)(
                    this,
                    this.onCompositionEvent,
                    "onCompositionEvent"
                  )
                ),
                  n.unregisterHandler(
                    p.EventNames.compositionEnd,
                    this._textEntryBox,
                    Object(a.d)(
                      this,
                      this.onCompositionEvent,
                      "onCompositionEvent"
                    )
                  ),
                  n.unregisterHandler(
                    p.EventNames.compositionUpdate,
                    this._textEntryBox,
                    Object(a.d)(
                      this,
                      this.onCompositionEvent,
                      "onCompositionEvent"
                    )
                  );
              }
              g.a.instance.unregisterHandler(
                p.EventNames.paste,
                this._textEntryBox,
                Object(a.d)(this, this.onPaste, "onPaste")
              );
            }
            (this._container = null),
              (this._deleteButton = null),
              (this._replyButton = null),
              (this._doneButton = null),
              (this._doneButtonImage = null),
              (this._saveButton = null),
              (this._cancelCommentButton = null),
              (this._textEntryBox = null),
              (this._textMeasurementContainer = null),
              (this._textMeasurementBox = null),
              (this._footerRow = null),
              (this._headerRow = null);
          }),
          (r.focus = function () {
            _.FocusManager.instance().scopeChanged(c.AFrame.commentPaneFocusId),
              this._container.focus(),
              this._comment.commentManager
                .getCommentPaneFocusRegion()
                .listing.trySetCurrentElement(this._container);
          }),
          (r.focusOnTextbox = function () {
            _.FocusManager.instance().scopeChanged(
              o.a.commentPaneTextboxFocusId
            ),
              this._textEntryBox.focus(),
              this._comment.commentManager
                .getCommentPaneFocusRegion()
                .listing.trySetCurrentElement(this._textEntryBox),
              2 === this._comment.commentType &&
                this._textEntryBox.value &&
                this._textEntryBox.value.length > 0 &&
                x.a.selectAllTextInInput(this._textEntryBox);
            var e = this._comment.commentManager.pane.paneSurface,
              t = x.a.getRelativeLocation(e, this._container);
            t.y + this._container.clientHeight > e.scrollTop + e.clientHeight &&
              (e.scrollTop =
                t.y + this._container.clientHeight - e.clientHeight);
          }),
          (r.finishedCreatingOrEditingComment = function () {
            if (
              (Sys.UI.DomElement.removeCssClass(
                this._container,
                "NewOrEditComment"
              ),
              (this._cancelCommentButton.style.display = "none"),
              (this._textEntryBox.style.display = "none"),
              _.FocusManager.tryBlur(this._textEntryBox),
              _.FocusManager.tryBlur(this._saveButton),
              _.FocusManager.instance()
                .getScope(o.a.commentPaneTextboxFocusId)
                .unBindAction(this._escapeKeyHash),
              _.FocusManager.instance().removeScope(
                o.a.commentPaneTextboxFocusId
              ),
              v.KeyInputManager.instance.unregisterHandler(
                p.EventNames.keyPress,
                this._textEntryBox,
                Object(a.d)(this, this.onKeyEvent, "onKeyEvent")
              ),
              v.KeyInputManager.instance.unregisterHandler(
                p.EventNames.keyUp,
                this._textEntryBox,
                Object(a.d)(this, this.onKeyEvent, "onKeyEvent")
              ),
              b.a.isIPad)
            ) {
              var e =
                h.AFrameworkApplication.activeFrame.theCompositionEventManager;
              e.unregisterHandler(
                p.EventNames.compositionStart,
                this._textEntryBox,
                Object(a.d)(this, this.onCompositionEvent, "onCompositionEvent")
              ),
                e.unregisterHandler(
                  p.EventNames.compositionEnd,
                  this._textEntryBox,
                  Object(a.d)(
                    this,
                    this.onCompositionEvent,
                    "onCompositionEvent"
                  )
                ),
                e.unregisterHandler(
                  p.EventNames.compositionUpdate,
                  this._textEntryBox,
                  Object(a.d)(
                    this,
                    this.onCompositionEvent,
                    "onCompositionEvent"
                  )
                );
            }
            g.a.instance.unregisterHandler(
              p.EventNames.paste,
              this._textEntryBox,
              Object(a.d)(this, this.onPaste, "onPaste")
            ),
              this._content.removeChild(this._textEntryBox),
              this._content.removeChild(this._textMeasurementContainer),
              (this._textEntryBox = null),
              (this._textMeasurementContainer = null),
              (this._textMeasurementBox = null),
              this.updateRenderedText(),
              this.updateRenderedState(),
              this.focus();
          }),
          (r.updateRenderedState = function () {
            this.renderState(
              this._statusIconContainer,
              this._footerControls,
              this._footerAddNewControls,
              this._doneButton,
              this._doneButtonImage,
              this._container
            );
          }),
          (r.render = function () {
            var t = s.a("a", this.makeId("cc"), "CommentContainer");
            y.a.setAriaAttribute(
              t,
              y.a.ariaDescribedByAttribute,
              o.a.commentTabHelp
            ),
              (t.tabIndex = 0),
              this._comment.replyToId && (t.className += " Reply1");
            var n = s.a("div", this.makeId("ch"), "CommentHeaderRow"),
              i = s.a("span", this.makeId("ca"), "CommentAuthor UIFontBold");
            (i.innerText = this._comment.author), n.appendChild(i);
            var r = s.a("span", this.makeId("ct"), "CommentDate");
            (r.innerText = e.dateToString(
              this._comment.date,
              this._comment.commentManager.dateFormat,
              this._comment.commentManager.timeFormat
            )),
              Sys.UI.DomElement.addCssClass(
                r,
                h.AFrameworkApplication.isRtl ? "FloatLeft" : "FloatRight"
              ),
              n.appendChild(r);
            var c = s.a("span", this.makeId("ci"), "CommentStatusIcon");
            n.appendChild(c);
            var u = null;
            this._comment.isCommentBeingCreatedOrEdited &&
              ((u = l.a.createButton(
                this.makeId("cl"),
                o.a.commentCancelButtonClassName,
                CommonUIStrings.l_CommentCancelButton,
                "ClosePaneGlyph_16x16x32",
                !1
              )),
              Sys.UI.DomElement.addCssClass(
                u,
                h.AFrameworkApplication.isRtl ? "FloatLeft" : "FloatRight"
              ),
              (u.tabIndex = 0),
              n.appendChild(u)),
              (this._content = s.a("div", this.makeId("cn"), "CommentContent"));
            var d = null,
              m = null,
              _ = null;
            this._comment.isCommentBeingCreatedOrEdited
              ? (((d = s.a(
                  "textarea",
                  this.makeId("ce"),
                  o.a.commentTextEntryClassName + " UIFont"
                )).rows = this.minimumTextboxRows),
                (d.cols = 50),
                (d.tabIndex = 0),
                y.a.setAriaAttribute(
                  d,
                  "title",
                  CommonUIStrings.l_CommentContent
                ),
                this._content.appendChild(d),
                (m = s.a("div", "", "CommentTextMeasurementContainer")),
                ((_ = s.a(
                  "textarea",
                  "",
                  o.a.commentTextEntryClassName + " UIFont"
                )).rows = 1),
                (_.cols = 50),
                (_.style.visibility = "hidden"),
                (_.spellcheck = !1),
                m.appendChild(_),
                this._content.appendChild(m),
                2 === this._comment.commentType &&
                  (d.value = this._comment.text.join("\n") + "\n"))
              : this.updateRenderedText();
            var v = s.a("div", "", "CommentFooterRow"),
              C = s.a("span", this.makeId("cf"), ""),
              S = l.a.createButton(
                this.makeId("cr"),
                o.a.commentReplyButtonClassName + " CommentFooterButton",
                CommonUIStrings.l_CommentReplyButton,
                "CommentReply_16x16x32",
                !1
              );
            (S.tabIndex = 0),
              S.setAttribute(y.a.ariaRoleAttribute, y.a.ariaButtonRole),
              C.appendChild(S);
            var x = l.a.createButton(
              this.makeId("cd"),
              "CommentDoneButton CommentFooterButton",
              CommonUIStrings.l_CommentDoneButton,
              "CheckboxUnchecked_16x16x32",
              !1
            );
            x.tabIndex = 0;
            var B = x.childNodes[0].childNodes[0];
            C.appendChild(x);
            var k = l.a.createButton(
              this.makeId("cx"),
              o.a.commentDeleteButtonClassName + " CommentFooterButton",
              CommonUIStrings.l_CommentDeleteButton,
              "Delete_16x16x32",
              !1
            );
            (x.tabIndex = 0), C.appendChild(k), v.appendChild(C);
            var A = s.a("span", this.makeId("cfa"), ""),
              w = l.a.createButton(
                this.makeId("cs"),
                o.a.commentSaveButtonClassName,
                CommonUIStrings.l_CommentSaveCommentButton,
                null
              );
            l.a.setButtonEnabledState(w, !1),
              (w.tabIndex = 0),
              A.appendChild(w),
              v.appendChild(A),
              this.renderState(c, C, A, x, B, t),
              this._comment.commentManager.copyingEnabled ||
                (i.setAttribute("Unselectable", "on"),
                r.setAttribute("Unselectable", "on")),
              t.appendChild(n),
              t.appendChild(this._content),
              t.appendChild(v),
              (this._container = t),
              (this._doneButton = x),
              (this._doneButtonImage = B),
              (this._deleteButton = k),
              (this._replyButton = S),
              (this._saveButton = w),
              (this._textEntryBox = d),
              (this._textMeasurementContainer = m),
              (this._textMeasurementBox = _),
              (this._cancelCommentButton = u),
              (this._footerRow = v),
              (this._footerControls = C),
              (this._footerAddNewControls = A),
              (this._statusIconContainer = c),
              (this._headerRow = n);
            var E = h.AFrameworkApplication.activeFrame.theClickInputManager,
              R = h.AFrameworkApplication.activeFrame.theKeyInputManager;
            if (
              (E.registerHandler(
                p.EventNames.click,
                this._container,
                Object(a.d)(this, this.onContainerClick, "onContainerClick")
              ),
              E.registerHandler(
                p.EventNames.doubleClick,
                this._container,
                Object(a.d)(
                  this,
                  this.onContainerDoubleClick,
                  "onContainerDoubleClick"
                )
              ),
              R.registerHandler(
                p.EventNames.keyUp,
                this._container,
                Object(a.d)(
                  this,
                  this.onContainerKeyPress,
                  "onContainerKeyPress"
                )
              ),
              this._doneButton &&
                (E.registerHandler(
                  p.EventNames.click,
                  this._doneButton,
                  Object(a.d)(this, this.onDoneButtonClick, "onDoneButtonClick")
                ),
                (this._doneButtonKeyEventHandler =
                  R.registerHandlerForAllKeyEvents(
                    this._doneButton,
                    Object(a.d)(
                      this,
                      this.onDoneButtonClick,
                      "onDoneButtonClick"
                    ),
                    f.a.vK_Enter
                  ))),
              this._replyButton &&
                (E.registerHandler(
                  p.EventNames.click,
                  this._replyButton,
                  Object(a.d)(
                    this,
                    this.onReplyButtonClick,
                    "onReplyButtonClick"
                  )
                ),
                (this._replyButtonKeyEventHandler =
                  R.registerHandlerForAllKeyEvents(
                    this._replyButton,
                    Object(a.d)(
                      this,
                      this.onReplyButtonClick,
                      "onReplyButtonClick"
                    ),
                    f.a.vK_Enter
                  ))),
              this._saveButton &&
                (E.registerHandler(
                  p.EventNames.click,
                  this._saveButton,
                  Object(a.d)(this, this.onSaveButtonClick, "onSaveButtonClick")
                ),
                (this._saveButtonKeyEventHandler =
                  R.registerHandlerForAllKeyEvents(
                    this._saveButton,
                    Object(a.d)(
                      this,
                      this.onSaveButtonClick,
                      "onSaveButtonClick"
                    ),
                    f.a.vK_Enter
                  ))),
              this._deleteButton &&
                (E.registerHandler(
                  p.EventNames.click,
                  this._deleteButton,
                  Object(a.d)(
                    this,
                    this.onDeleteButtonClick,
                    "onDeleteButtonClick"
                  )
                ),
                (this._deleteButtonKeyEventHandler =
                  R.registerHandlerForAllKeyEvents(
                    this._deleteButton,
                    Object(a.d)(
                      this,
                      this.onDeleteButtonClick,
                      "onDeleteButtonClick"
                    ),
                    f.a.vK_Enter
                  ))),
              this._cancelCommentButton &&
                (E.registerHandler(
                  p.EventNames.click,
                  this._cancelCommentButton,
                  Object(a.d)(
                    this,
                    this.onCancelButtonClick,
                    "onCancelButtonClick"
                  )
                ),
                (this._cancelButtonKeyEventHandler =
                  R.registerHandlerForAllKeyEvents(
                    this._cancelCommentButton,
                    Object(a.d)(
                      this,
                      this.onCancelButtonClick,
                      "onCancelButtonClick"
                    ),
                    f.a.vK_Enter
                  ))),
              d)
            ) {
              if (
                (R.registerHandler(
                  p.EventNames.keyPress,
                  d,
                  Object(a.d)(this, this.onKeyEvent, "onKeyEvent")
                ),
                R.registerHandler(
                  p.EventNames.keyUp,
                  d,
                  Object(a.d)(this, this.onKeyEvent, "onKeyEvent")
                ),
                b.a.isIPad)
              ) {
                var I =
                  h.AFrameworkApplication.activeFrame
                    .theCompositionEventManager;
                I.registerHandler(
                  p.EventNames.compositionStart,
                  d,
                  Object(a.d)(
                    this,
                    this.onCompositionEvent,
                    "onCompositionEvent"
                  ),
                  null
                ),
                  I.registerHandler(
                    p.EventNames.compositionEnd,
                    d,
                    Object(a.d)(
                      this,
                      this.onCompositionEvent,
                      "onCompositionEvent"
                    ),
                    null
                  ),
                  I.registerHandler(
                    p.EventNames.compositionUpdate,
                    d,
                    Object(a.d)(
                      this,
                      this.onCompositionEvent,
                      "onCompositionEvent"
                    ),
                    null
                  );
              }
              g.a.instance.registerHandler(
                p.EventNames.paste,
                d,
                Object(a.d)(this, this.onPaste, "onPaste")
              ),
                this.setupTextboxFocus();
            }
          }),
          (r.setSaveCommentButtonState = function (e) {
            l.a.setButtonEnabledState(this._saveButton, e);
          }),
          (r.makeId = function (e) {
            return e + "_" + this._comment.id;
          }),
          (r.renderState = function (e, t, n, i, r, a) {
            switch (this._comment.saveState) {
              case 0:
              case 1:
                this.showStatusIcon(e, 0);
                break;
              case 2:
              case 4:
                e.style.display = "none";
                break;
              case 3:
                Sys.UI.DomElement.addCssClass(a, "SaveFailure"),
                  Sys.UI.DomElement.addCssClass(a, "NoReply"),
                  this.showStatusIcon(e, 1);
                break;
              default:
                0;
            }
            this._comment.done
              ? (Sys.UI.DomElement.addCssClass(a, "CommentIsDone"),
                (r.className = d.getImageClass("CheckboxChecked_16x16x32")))
              : (Sys.UI.DomElement.removeCssClass(a, "CommentIsDone"),
                (r.className = d.getImageClass("CheckboxUnchecked_16x16x32"))),
              this._comment.isCommentBeingCreatedOrEdited
                ? (Sys.UI.DomElement.addCssClass(a, "NewOrEditComment"),
                  Sys.UI.DomElement.addCssClass(a, "SelectedComment"),
                  (e.style.display = "none"),
                  (t.style.display = "none"),
                  (n.style.display = "inline"),
                  this._comment.commentManager.mode ||
                    (this.setSaveCommentButtonState(!1),
                    l.a.setButtonEnabledState(this._cancelCommentButton, !1)))
                : 1 === this._comment.selectionState
                ? (Sys.UI.DomElement.addCssClass(a, "SelectedComment"),
                  Sys.UI.DomElement.removeCssClass(a, "SelectedParentComment"),
                  1 !== this._comment.commentManager.mode ||
                  3 === this._comment.saveState ||
                  this._comment.isLocked
                    ? (t.style.display = "none")
                    : (t.style.display = "inline"),
                  (n.style.display = "none"))
                : 2 === this._comment.selectionState
                ? (Sys.UI.DomElement.removeCssClass(a, "SelectedComment"),
                  Sys.UI.DomElement.addCssClass(a, "SelectedParentComment"),
                  (t.style.display = "inline"),
                  (n.style.display = "none"))
                : (Sys.UI.DomElement.removeCssClass(a, "SelectedComment"),
                  Sys.UI.DomElement.removeCssClass(a, "SelectedParentComment"),
                  (t.style.display = "inline"),
                  (n.style.display = "none"));
          }),
          (r.showStatusIcon = function (e, t) {
            switch ((S.DomUtils.clearElement(e), t)) {
              case 0:
                var n = document.createElement("img");
                (n.alt = CommonUIStrings.l_CommentProgressTooltip),
                  (n.src = u.a.commonImage("progress16.gif")),
                  e.appendChild(n);
                break;
              case 1:
                var i = d.createClusteredImage(
                  16,
                  16,
                  "Risks_16x16x32",
                  "",
                  !0,
                  CommonUIStrings.l_CommentFailTooltip
                );
                e.appendChild(i);
                break;
              default:
                0;
            }
            e.style.display = "inline-block";
          }),
          (r.updateRenderedText = function () {
            S.DomUtils.clearElementHtml(this._content);
            var e = this._comment.text;
            1 === e.length && e[0] && (e = e[0].split("\n"));
            for (var t, n = k(e); !(t = n()).done; ) {
              var i = t.value,
                r = s.a("p", "", "CommentContentPara");
              (r.innerText = i || "\xa0"),
                this._comment.commentManager.copyingEnabled ||
                  r.setAttribute("Unselectable", "on"),
                this._content.appendChild(r);
            }
          }),
          (r.setupTextboxFocus = function () {
            var e = _.FocusManager.instance().getScope(
              o.a.commentPaneTextboxFocusId
            );
            (e.parent = c.AFrame.commentPaneFocusId),
              m.a.instance.addFocusEvent(
                o.a.commentPaneTextboxFocusId,
                this._textEntryBox
              ),
              e.bindAction(
                v.KeyInputManager.hashKey(f.a.VK_S, 2),
                B.a.doNothing
              ),
              e.bindAction(this._escapeKeyHash, B.a.commentCancelled),
              e.bindAction(
                v.KeyInputManager.hashKey(f.a.vK_UpArrow, 0),
                B.a.doBrowserDefault
              ),
              e.bindAction(
                v.KeyInputManager.hashKey(f.a.vK_DownArrow, 0),
                B.a.doBrowserDefault
              ),
              e.unBindAction(_.FocusManager.instance()._tabInput),
              e.unBindAction(_.FocusManager.instance()._tabShiftInput);
          }),
          (r.onContainerClick = function (e) {
            return (
              (this._comment.isCommentBeingCreatedOrEdited &&
                e.innerEvent.target === this._textEntryBox) ||
                this._comment.onSelect(),
              !0
            );
          }),
          (r.onContainerDoubleClick = function (e) {
            return this._comment.onEdit(), !0;
          }),
          (r.onContainerKeyPress = function (e) {
            var t = !1;
            return (
              e.innerEvent.keyCode === f.a.vK_Enter &&
                (this._comment.selectionState
                  ? this._comment.onEdit()
                  : this._comment.onSelect(),
                (t = !0)),
              t
            );
          }),
          (r.onDeleteButtonClick = function (e) {
            return this._deleteButton.disabled || this._comment.onDelete(), !0;
          }),
          (r.onDoneButtonClick = function (e) {
            return (
              this._doneButton.disabled || this._comment.onToggleDone(), !0
            );
          }),
          (r.onReplyButtonClick = function (e) {
            return this._replyButton.disabled || this._comment.onReply(), !0;
          }),
          (r.onSaveButtonClick = function (e) {
            return (
              this._saveButton.disabled ||
                this._comment.onSave(this._textEntryBox.value),
              !0
            );
          }),
          (r.onCancelButtonClick = function (e) {
            return (
              this._cancelCommentButton.disabled || this._comment.onCancel(), !0
            );
          }),
          (r.onCancelDeleteKeyEvent = function (e) {
            return (
              (e.innerEvent.keyCode === f.a.vK_Enter ||
                e.innerEvent.keyCode === f.a.vK_Space) &&
              (e.eventName === p.EventNames.keyUp &&
                (e.sourceElement === this._deleteButton
                  ? this._comment.onDelete()
                  : e.sourceElement === this._cancelCommentButton &&
                    this._comment.onCancel()),
              !0)
            );
          }),
          (r.onKeyEvent = function (e) {
            if (e.innerEvent.ctrlKey && e.innerEvent.keyCode === f.a.vK_Enter)
              return (
                this._textEntryBox.value.length > 0 &&
                  this.onSaveButtonClick(null),
                !0
              );
            if (e.innerEvent.keyCode === f.a.vK_Escape) return !0;
            var t =
              e.eventName === p.EventNames.keyPress &&
              e.innerEvent.charCode === f.a.vK_Enter;
            return this.onTextEntered(t), !1;
          }),
          (r.onCompositionEvent = function (e) {
            return this.onTextEntered(!1), !1;
          }),
          (r.onPaste = function (e) {
            var t = this,
              n = new C.a(
                0,
                1,
                0,
                function (e) {
                  t.onTextEntered(!1);
                },
                1
              );
            return h.AFrameworkApplication.theTaskManager.addTask(n), !1;
          }),
          (r.onTextEntered = function (e) {
            if (
              this._comment.commentManager.mode &&
              (this.setSaveCommentButtonState(
                this._textEntryBox.value.length > 0
              ),
              !b.a.isInternetExplorer8)
            ) {
              if (
                (this._textMeasurementContainer.clientWidth !==
                  this._textEntryBox.clientWidth &&
                  (this._textMeasurementContainer.style.width =
                    this._textEntryBox.clientWidth + "px"),
                (this._textMeasurementBox.value =
                  this._textEntryBox.value + "___"),
                this._previousTextLength > this._textEntryBox.value.length &&
                  (this._textMeasurementBox.rows = 1),
                b.a.isInternetExplorer8)
              )
                this._textMeasurementBox.scrollHeight;
              for (
                var t = 0, n = Number.MAX_VALUE;
                1 <=
                  (t =
                    this._textMeasurementBox.scrollHeight -
                    this._textMeasurementBox.clientHeight) && t < n;

              )
                if (
                  ((n = t),
                  this._textMeasurementBox.rows++,
                  b.a.isInternetExplorer8)
                )
                  this._textMeasurementBox.scrollHeight;
              this._textMeasurementBox.rows < this.minimumTextboxRows
                ? (this._textEntryBox.rows = this.minimumTextboxRows)
                : (e && this._textMeasurementBox.rows++,
                  (this._textEntryBox.rows = this._textMeasurementBox.rows)),
                (this._previousTextLength = this._textEntryBox.value.length);
            }
          }),
          (e.dateToString = function (e, t, n) {
            if (!e || isNaN(e.getDate())) return "";
            var i = n,
              r = new Date();
            return (
              (r.getFullYear() === e.getFullYear() &&
                r.getMonth() === e.getMonth() &&
                r.getDate() === e.getDate()) ||
                (i = String.format(
                  CommonUIStrings.l_CommentLongDateFormat,
                  t,
                  n
                )),
              e.localeFormat(i)
            );
          }),
          (t = e),
          (n = [
            {
              key: "containerElement",
              get: function () {
                return this._container;
              },
            },
            {
              key: "deleteButtonElement",
              get: function () {
                return this._deleteButton;
              },
            },
            {
              key: "saveButtonElement",
              get: function () {
                return this._saveButton;
              },
            },
          ]) && w(t.prototype, n),
          i && w(t, i),
          e
        );
      })();
      Object(i.a)(E, "CommentViewObject", null, [4, 78]);
      var R = n(122);
      function I(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      n.d(t, "Comment", function () {
        return F;
      });
      var F = (function () {
        function e(e, t, n, i, a, o, s, l, c, h, u, d) {
          void 0 === c && (c = !1),
            void 0 === h && (h = null),
            void 0 === u && (u = null),
            void 0 === d && (d = null),
            (this._anchorStartId = null),
            (this._anchorEndId = null),
            (this._selectedState = 0),
            (this._saveState = 2),
            (this._commentType = 0),
            (this._viewObject = null),
            (this._draftConfiguration = null),
            (this.isNewComment = !1),
            (this.objectId = null),
            (this.isLocked = !1),
            (this._id = e),
            (this._guardId = t),
            (this._author = n),
            (this._date = i),
            (this._replyToId = a),
            (this._done = o),
            (this._paragraphs = s),
            (this._groupNumber = l),
            (this.contentCanBeLostOnEditing = c),
            (this._authorId = h),
            (this._authorIdProvider = u),
            (this.usersByReactionType = d),
            (this._commentManager = r.a.instance);
        }
        var t,
          n,
          i,
          a = e.prototype;
        return (
          (a.dispose = function () {
            this._viewObject &&
              (this._viewObject.dispose(), (this._viewObject = null));
          }),
          (a.render = function () {
            return (
              (this._viewObject = new E(this)),
              this._viewObject.containerElement
            );
          }),
          (a.modeChanged = function () {
            this._viewObject && this._viewObject.updateRenderedState();
          }),
          (a.focus = function () {
            this.onSelect(),
              this._viewObject.focus(),
              this.isCommentBeingCreatedOrEdited &&
                this._viewObject.focusOnTextbox();
          }),
          (a.toString = function () {
            var e = "[null]";
            return (
              this._paragraphs &&
                this._paragraphs.length > 0 &&
                (e =
                  this._paragraphs[0].length > 30
                    ? this._paragraphs[0].substr(0, 30) + "..."
                    : this._paragraphs[0]),
              String.format(
                'I:{0} A:{1} T:{2} R:{3} D:{4} "{5}"',
                this._id || "[null]",
                this._author || "[null]",
                this._date ? this._date.toString() : "[null]",
                this._replyToId || "[null]",
                this._done,
                e
              )
            );
          }),
          (a.onSelect = function () {
            2 !== this.commentManager.mode && 3 !== this.commentManager.mode
              ? (_.FocusManager.instance().scopeChanged(
                  c.AFrame.commentPaneFocusId
                ),
                1 !== this._selectedState &&
                  this.commentManager.selectComment(this._id))
              : this.isCommentBeingCreatedOrEdited &&
                this._viewObject.focusOnTextbox();
          }),
          (a.onEdit = function () {
            this.commentManager.supportEdit &&
              !this._commentType &&
              (_.FocusManager.instance().scopeChanged(
                c.AFrame.commentPaneFocusId
              ),
              (this._commentType = 2),
              (this._saveState = 0),
              this.commentManager.editComment(this, null));
          }),
          (a.onEditCancelled = function () {
            3 === this.commentManager.mode &&
              (_.FocusManager.instance().scopeChanged(
                c.AFrame.commentPaneFocusId
              ),
              (this._commentType = 0),
              (this._saveState = 2),
              this.commentManager.cancelEditingComment(this));
          }),
          (a.onDelete = function () {
            _.FocusManager.instance().scopeChanged(c.AFrame.commentPaneFocusId),
              this.commentManager.deleteComment(this);
          }),
          (a.onToggleDone = function () {
            this.commentManager.changeDoneStatus(this, !this._done);
          }),
          (a.onReply = function () {
            if (2 !== this.commentManager.mode) {
              0,
                _.FocusManager.instance().scopeChanged(
                  c.AFrame.commentPaneFocusId
                );
              var e = this._replyToId || this._id;
              this.commentManager.addReply(e, null);
            }
          }),
          (a.onSave = function (e) {
            _.FocusManager.instance().scopeChanged(c.AFrame.commentPaneFocusId),
              (this._paragraphs = new Array(1)),
              (this._paragraphs[0] = e),
              1 === this._commentType
                ? this.commentManager.commitNewComment(this)
                : this.commentManager.commitEditComment(this);
          }),
          (a.onCancel = function () {
            _.FocusManager.instance().scopeChanged(c.AFrame.commentPaneFocusId),
              this.commentManager.pane.paneSurface &&
                this.commentManager.pane.paneSurface.focus(),
              1 === this._commentType
                ? (this.commentManager.deleteComment(this),
                  this.commentManager.selectAfterRemoval(this.replyToId))
                : this.onEditCancelled();
          }),
          (e.createCommentForEditing = function (t, n, i, r) {
            var a = R.a.create().toString(),
              o =
                h.AFrameworkApplication.appSettingsManager.getStringAppSetting(
                  "PresenceUserId"
                ),
              s =
                h.AFrameworkApplication.appSettingsManager.getStringAppSetting(
                  "PresenceProvider"
                ),
              l = new e(
                a,
                e.guardIdInvalid,
                t,
                new Date(),
                n,
                !1,
                new Array(0),
                i,
                !1,
                o,
                s
              );
            return (
              (l._commentType = 1),
              (l._saveState = 0),
              (l._draftConfiguration = r),
              l
            );
          }),
          (t = e),
          (n = [
            {
              key: "id",
              get: function () {
                return this._id;
              },
              set: function (e) {
                this._id = e;
              },
            },
            {
              key: "author",
              get: function () {
                return this.isScrubbed
                  ? CommonUIStrings.l_RemovedAuthorName
                  : this._author;
              },
            },
            {
              key: "authorId",
              get: function () {
                return this._authorId;
              },
            },
            {
              key: "authorIdProvider",
              get: function () {
                return this._authorIdProvider;
              },
            },
            {
              key: "date",
              get: function () {
                return this.isScrubbed ? null : this._date;
              },
              set: function (e) {
                this._date = e;
              },
            },
            {
              key: "done",
              get: function () {
                return this._done;
              },
              set: function (e) {
                this._done !== e &&
                  ((this._done = e),
                  this._viewObject && this._viewObject.updateRenderedState());
              },
            },
            {
              key: "groupNumber",
              get: function () {
                return this._groupNumber;
              },
              set: function (e) {
                this._groupNumber = e;
              },
            },
            {
              key: "replyToId",
              get: function () {
                return this._replyToId;
              },
              set: function (e) {
                this._replyToId = e;
              },
            },
            {
              key: "text",
              get: function () {
                return this._paragraphs;
              },
              set: function (e) {
                (this._paragraphs = e),
                  this._viewObject && this._viewObject.updateRenderedText();
              },
            },
            {
              key: "guardId",
              get: function () {
                return this._guardId;
              },
              set: function (e) {
                this._guardId = e;
              },
            },
            {
              key: "anchorStartId",
              get: function () {
                return this._anchorStartId;
              },
              set: function (e) {
                this._anchorStartId = e;
              },
            },
            {
              key: "anchorEndId",
              get: function () {
                return this._anchorEndId;
              },
              set: function (e) {
                this._anchorEndId = e;
              },
            },
            {
              key: "selectionState",
              get: function () {
                return this._selectedState;
              },
              set: function (e) {
                this._selectedState !== e &&
                  ((this._selectedState = e),
                  this._viewObject && this._viewObject.updateRenderedState());
              },
            },
            {
              key: "saveState",
              get: function () {
                return this._saveState;
              },
              set: function (e) {
                if (this._saveState !== e) {
                  if (!this._saveState && 2 === e) return;
                  if (3 === this._saveState) return;
                  (this._saveState = e),
                    this._viewObject && this._viewObject.updateRenderedState();
                }
              },
            },
            {
              key: "commentType",
              get: function () {
                return this._commentType;
              },
              set: function (e) {
                if (this._commentType !== e) {
                  var t = this.isCommentBeingCreatedOrEdited && !e;
                  (this._commentType = e),
                    t &&
                      this._viewObject &&
                      this._viewObject.finishedCreatingOrEditingComment();
                }
              },
            },
            {
              key: "isCommentBeingCreatedOrEdited",
              get: function () {
                return 1 === this._commentType || 2 === this._commentType;
              },
            },
            {
              key: "isScrubbed",
              get: function () {
                return (
                  !!this._commentManager &&
                  this._commentManager.removePersonalInformation
                );
              },
            },
            {
              key: "containerElement",
              get: function () {
                return this._viewObject
                  ? this._viewObject.containerElement
                  : null;
              },
            },
            {
              key: "commentManager",
              get: function () {
                return this._commentManager;
              },
            },
            {
              key: "commentViewObject",
              get: function () {
                return this._viewObject;
              },
            },
            {
              key: "draftConfiguration",
              get: function () {
                return this._draftConfiguration;
              },
              set: function (e) {
                this._draftConfiguration = e;
              },
            },
          ]) && I(t.prototype, n),
          i && I(t, i),
          e
        );
      })();
      (F.guardIdInvalid = null),
        (F.pageNumberUnknown = -1),
        Object(i.a)(F, "Comment", null, [4, 66]);
    },
    535: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var i = n(0),
        r = n(530),
        a = (n(9), n(55)),
        o = n(7),
        s = (function () {
          function e() {}
          return (
            (e.prototype.dispose = function () {}),
            (e.createButton = function (e, t, n, i, s) {
              void 0 === s && (s = !0);
              var l = s ? "" : n;
              var c = r.a("a", e, "StandardButton " + t);
              (c.title = l), (c.tabIndex = 0);
              var h = null;
              if (
                (i
                  ? ((h = a.createClusteredImage(
                      16,
                      16,
                      i,
                      "StandardButtonImage",
                      !0,
                      null
                    )).setAttribute(
                      o.a.ariaRoleAttribute,
                      o.a.ariaPresentationRole
                    ),
                    c.appendChild(h))
                  : Sys.UI.DomElement.addCssClass(c, "StandardButtonNoImage"),
                s)
              ) {
                var u = r.a("span", null, "StandardButtonLabel");
                (u.innerText = n), c.appendChild(u);
              } else
                Sys.UI.DomElement.addCssClass(h, "StandardButtonImageNoText");
              return (
                c.setAttribute(o.a.ariaRoleAttribute, o.a.ariaButtonRole), c
              );
            }),
            (e.setButtonEnabledState = function (e, t) {
              var n;
              null != e &&
                ((e.disabled = !t),
                t
                  ? ((n = o.a.ariaFalseValue),
                    Sys.UI.DomElement.removeCssClass(e, "DisabledButton"),
                    Sys.UI.DomElement.removeCssClass(e, "cui-disabled"))
                  : ((n = o.a.ariaTrueValue),
                    Sys.UI.DomElement.containsCssClass(e, "DisabledButton") ||
                      Sys.UI.DomElement.addCssClass(e, "DisabledButton"),
                    Sys.UI.DomElement.containsCssClass(e, "cui-disabled") ||
                      Sys.UI.DomElement.addCssClass(e, "cui-disabled")),
                o.a.setAriaAttribute(e, o.a.ariaDisabledAttribute, n));
            }),
            e
          );
        })();
      Object(i.a)(s, "SimpleButtonFactory", null, [4]);
    },
    536: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n(0);
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var a = (function () {
        function e(e, t, n, i) {
          (this._left = e),
            (this._top = t),
            (this._width = n),
            (this._height = i);
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "height",
              get: function () {
                return this._height;
              },
              set: function (e) {
                this._height = e;
              },
            },
            {
              key: "left",
              get: function () {
                return this._left;
              },
              set: function (e) {
                this._left = e;
              },
            },
            {
              key: "top",
              get: function () {
                return this._top;
              },
              set: function (e) {
                this._top = e;
              },
            },
            {
              key: "width",
              get: function () {
                return this._width;
              },
              set: function (e) {
                this._width = e;
              },
            },
          ]) && r(t.prototype, n),
          i && r(t, i),
          e
        );
      })();
      Object(i.a)(a, "Box", null, []);
    },
    537: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var i = n(0),
        r = n(1);
      n(9), n(54);
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var o = (function () {
        function e() {
          (this._commentManager = null),
            (this._comments = []),
            (this._changes = []),
            (this._selected = null),
            (this._selectedParent = null),
            (this._inProgress = null);
        }
        var t,
          i,
          o,
          s = e.prototype;
        return (
          (s.initialize = function (e) {
            this._commentManager = e;
          }),
          (s.dispose = function () {
            for (var e = this._comments.length, t = 0; t < e; t++)
              this._comments[t].dispose();
            this._comments = [];
          }),
          (s.modeChanged = function () {
            this._selected && this._selected.modeChanged(),
              this._selectedParent && this._selectedParent.modeChanged();
          }),
          (s.selectComment = function (e) {
            if (
              (this.clearSelection(),
              (e.selectionState = 1),
              (this._selected = e),
              e.replyToId)
            ) {
              0;
              for (var t = Array.indexOf(this._comments, e) - 1; t >= 0; t--) {
                var n = this._comments[t];
                if (n.id === e.replyToId) {
                  (n.selectionState = 2), (this._selectedParent = n);
                  break;
                }
              }
              0;
            }
          }),
          (s.selectNextComment = function () {
            if (!this._comments.length) return null;
            var e = null;
            return (
              (e = this._selected
                ? this.getCommentAfter(this._selected, !0)
                : this._comments[0]),
              this.selectComment(e),
              e
            );
          }),
          (s.selectPrevComment = function () {
            if (!this._comments.length) return null;
            var e = null;
            return (
              (e = this._selected
                ? this.getCommentBefore(this._selected, !0)
                : this._comments[this._comments.length - 1]),
              this.selectComment(e),
              e
            );
          }),
          (s.clearSelection = function () {
            this._selected &&
              ((this._selected.selectionState = 0), (this._selected = null)),
              this._selectedParent &&
                ((this._selectedParent.selectionState = 0),
                (this._selectedParent = null));
          }),
          (s.editCommentInModel = function (e, t) {
            (this._commentManager.mode = 3),
              (e.commentType = 2),
              (e.saveState = 0),
              (e.draftConfiguration = t),
              (this._inProgress = e);
          }),
          (s.cancelEditingCommentInModel = function (e) {
            (this._inProgress = null), (this._commentManager.mode = 1);
          }),
          (s.createAndAddReplyToModel = function (e, t) {
            var i = this.getComment(e);
            this._commentManager.mode = 2;
            var a = n(534).Comment.createCommentForEditing(
              r.AFrameworkApplication.userName,
              e,
              i.groupNumber,
              t
            );
            this._inProgress = a;
            for (var o = this._comments.length - 1; o >= 0; o--) {
              var s = this._comments[o];
              if (s.replyToId === a.replyToId || s.id === a.replyToId) {
                Array.insert(this._comments, o + 1, a), !0;
                break;
              }
            }
            return a;
          }),
          (s.commitNewComment = function (e) {
            this.commitNewOrEditComment(e, 2);
          }),
          (s.commitEditComment = function (e) {
            this.commitNewOrEditComment(e, 4);
          }),
          (s.deleteComment = function (e) {
            var t = [];
            for (
              var n = Array.indexOf(this._comments, e);
              n < this._comments.length;

            ) {
              var i = this._comments[n];
              if (i.id !== e.id && i.replyToId !== e.id) break;
              Array.removeAt(this._comments, n), Array.add(t, i);
            }
            return (
              this._commentManager.sharedCommentsEnabled,
              this.recordChanges(t, 3),
              Array.indexOf(t, this._inProgress) > -1 &&
                ((this._inProgress = null), (this._commentManager.mode = 1)),
              t
            );
          }),
          (s.changeDoneStatus = function (e, t) {
            var n = [];
            for (
              var i = Array.indexOf(this._comments, e);
              i < this._comments.length;

            ) {
              var r = this._comments[i];
              if (r.id !== e.id && r.replyToId !== e.id) break;
              (r.done = t), Array.add(n, r), i++;
            }
            this.recordChanges(n, t ? 0 : 1);
          }),
          (s.getAllComments = function () {
            return Array.clone(this._comments);
          }),
          (s.hasComments = function () {
            return !!this._comments && !!this._comments.length;
          }),
          (s.getComment = function (e) {
            for (var t = 0; t < this._comments.length; t++) {
              var n = this._comments[t];
              if (n.id === e) return n;
            }
            return null;
          }),
          (s.getCommentAfter = function (e, t) {
            var n = Array.indexOf(this._comments, e);
            return n === this._comments.length - 1
              ? t
                ? this._comments[0]
                : null
              : this._comments[n + 1];
          }),
          (s.getFirstCommentAfter = function (e, t, n) {
            void 0 === n && (n = !1);
            var i = Array.indexOf(this._comments, e);
            var r = i;
            do {
              if (r === this._comments.length - 1 && !t) return null;
              if (
                ((r = r === this._comments.length - 1 ? 0 : r + 1),
                !n || !this._comments[r].done)
              )
                return this._comments[r];
            } while (r !== i);
            return this._comments[i];
          }),
          (s.getCommentBefore = function (e, t) {
            var n = Array.indexOf(this._comments, e);
            return n
              ? this._comments[n - 1]
              : t
              ? this._comments[this._comments.length - 1]
              : null;
          }),
          (s.getFirstCommentBefore = function (e, t, n) {
            void 0 === n && (n = !1);
            var i = Array.indexOf(this._comments, e);
            var r = i;
            do {
              if (!r && !t) return null;
              if (
                ((r = r ? r - 1 : this._comments.length - 1),
                !n || !this._comments[r].done)
              )
                return this._comments[r];
            } while (r !== i);
            return this._comments[i];
          }),
          (s.dumpChanges = function () {
            for (var e = "", t = 0; t < this._changes.length; t++)
              e += this._changes[t].toString() + "\n\n";
            return e;
          }),
          (s.addCommentReaction = function (e, t) {}),
          (s.removeCommentReaction = function (e, t) {}),
          (s.commitNewOrEditComment = function (e, t) {
            var n = [];
            (e.commentType = 0),
              Array.add(n, e),
              this.recordChanges(n, t),
              (this._inProgress = null);
          }),
          (e.createNewComment = function (e) {
            return n(534).Comment.createCommentForEditing(
              r.AFrameworkApplication.userName,
              null,
              n(534).Comment.pageNumberUnknown,
              e
            );
          }),
          (e.dateToLocalTime = function (e) {
            return e.getTime() - 60 * e.getTimezoneOffset() * 1e3;
          }),
          (t = e),
          (i = [
            {
              key: "selectedComment",
              get: function () {
                return this._selected;
              },
            },
            {
              key: "inProgressComment",
              get: function () {
                return this._inProgress;
              },
            },
          ]) && a(t.prototype, i),
          o && a(t, o),
          e
        );
      })();
      Object(i.a)(o, "CommentModel", null, [4, 47]);
    },
    538: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var i = n(0),
        r = function () {};
      (r.commentPaneTextboxFocusId = "CommentPaneTextbox"),
        (r.commentPaneData = "CommentPaneData"),
        (r.commentPaneID = "CommentPane"),
        (r.commentDeleteButtonClassName = "CommentDeleteButton"),
        (r.commentSaveButtonClassName = "CommentSaveButton"),
        (r.commentReplyButtonClassName = "CommentReplyButton"),
        (r.commentCancelButtonClassName = "CommentCancelButton"),
        (r.commentTextEntryClassName = "CommentTextEntry"),
        (r.commentTaskPaneCloseClassName = "TaskPaneClose"),
        (r.commentPaneCloseButtonClassName = "CommentPaneCloseButton"),
        (r.commentPaneWidth = 300),
        (r.commentTabHelp = "CommentTabHelp"),
        Object(i.a)(r, "CommentManagerConstants", null, []);
    },
    539: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n(0);
      n(9);
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var a = (function () {
        function e(e, t) {
          (this._text = e), (this._filters = t);
        }
        var t, n, i;
        return (
          (e.prototype.isQueryFilterSet = function (e) {
            return (this._filters & e) === e;
          }),
          (e.createQuery = function (t, n) {
            return new e(t, n);
          }),
          (t = e),
          (n = [
            {
              key: "text",
              get: function () {
                return this._text;
              },
            },
            {
              key: "matchCase",
              get: function () {
                return this.isQueryFilterSet(1);
              },
            },
            {
              key: "matchWholeWord",
              get: function () {
                return this.isQueryFilterSet(2);
              },
            },
            {
              key: "matchWildCards",
              get: function () {
                return this.isQueryFilterSet(4);
              },
            },
            {
              key: "matchPrefix",
              get: function () {
                return this.isQueryFilterSet(8);
              },
            },
            {
              key: "matchSuffix",
              get: function () {
                return this.isQueryFilterSet(16);
              },
            },
            {
              key: "ignorePunct",
              get: function () {
                return this.isQueryFilterSet(32);
              },
            },
            {
              key: "ignoreSpace",
              get: function () {
                return this.isQueryFilterSet(64);
              },
            },
          ]) && r(t.prototype, n),
          i && r(t, i),
          e
        );
      })();
      Object(i.a)(a, "Query", null, [182]);
    },
    540: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var i = n(0),
        r = (n(9), n(14)),
        a = n(536);
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var s = (function () {
        function e() {}
        var t,
          n,
          i,
          s = e.prototype;
        return (
          (s.estimatedBoundingBox = function (e, t, n) {
            var i,
              r = e.firstChild.data.length,
              o = parseFloat(e.attributes.getNamedItem("l").nodeValue),
              s = parseFloat(e.attributes.getNamedItem("t").nodeValue),
              l = parseFloat(e.attributes.getNamedItem("w").nodeValue),
              c = parseFloat(e.attributes.getNamedItem("h").nodeValue),
              h = 0,
              u = 0,
              d = 0;
            return (
              e.attributes.getNamedItem("a") &&
                (u = parseInt(e.attributes.getNamedItem("a").nodeValue)),
              e.attributes.getNamedItem("rtl") &&
                (d = parseInt(e.attributes.getNamedItem("rtl").nodeValue)),
              u
                ? ((i = (c / r) * (n - t)),
                  (270 === u && 1 !== d) || (90 === u && 1 === d)
                    ? ((s = s + c - (c / r) * t - i), new a.a(o, s, l, i))
                    : (90 === u && 1 !== d) || (270 === u && 1 === d)
                    ? ((s += (c / r) * t), new a.a(o, s, l, i))
                    : new a.a(o, s, l, c))
                : ((h = (l / r) * (n - t)),
                  1 !== d ? (o += (l / r) * t) : (o = o + l - (l / r) * t - h),
                  new a.a(o, s, h, c))
            );
          }),
          (s.drawHitBox = function (e, t, n, i, o, s, l, c, h, u, d, g) {
            var m = r.App.instance.theConfig.dpiAspectRatio;
            return (
              n
                ? ((o = c * m), (l = Math.abs(h - c) * m - o))
                : e
                ? (270 === e && !t) || (90 === e && t)
                  ? ((o = h * m), (l = Math.abs(h - c) * m))
                  : ((90 === e && !t) || (270 === e && t)) &&
                    ((o = c * m), (l = Math.abs(h - c) * m))
                : ((i = t ? h * m : c * m), (s = Math.abs(h - c) * m)),
              i < 0 ||
              o < 0 ||
              s < 0 ||
              l < 0 ||
              isNaN(i) ||
              isNaN(o) ||
              isNaN(s) ||
              isNaN(l)
                ? this.estimatedBoundingBox(u, d, g)
                : new a.a(i, o, s, l)
            );
          }),
          (s.calculateWidth = function (e, t, n, i, r, a, o) {
            for (var s = new RegExp("\\(\\d:\\d\\)"), l = 0; a.val < t; ) {
              var c = 1,
                h = 1,
                u = i[r.val],
                d = s.exec(u);
              if (d) {
                for (
                  var g = d[0].split(new RegExp("[\\(|\\:|\\)]")), m = 0;
                  !g[m] && m < g.length;

                )
                  m++;
                for (c = parseInt(g[m]), m++; !g[m] && m < g.length; ) m++;
                h = parseInt(g[m]);
              }
              if (a.val + c > t && !o) return l;
              for (var p = 0; p < h; p++) {
                var _ = i[r.val].split(",");
                e
                  ? (l = r.val ? n - parseFloat(_[3]) : n)
                  : (l += parseFloat(_[1])),
                  r.val++;
              }
              a.val += c;
            }
            return l;
          }),
          (t = e),
          (i = [
            {
              key: "instance",
              get: function () {
                return e._instance || (e._instance = new e());
              },
            },
          ]),
          (n = null) && o(t.prototype, n),
          i && o(t, i),
          e
        );
      })();
      (s._instance = null), Object(i.a)(s, "HighlightUtils", null, [190]);
    },
    541: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var i = function (e, t, n) {
          e && e.setPosition(e.box, t, n);
        },
        r = function (e) {
          for (var t, n = [], i = 0; i < e.length; ++i)
            (t = e[i]), (n[i] = t.data);
          return n.join("");
        };
    },
    542: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n(0);
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var a = (function () {
        function e(e, t, n, i, r) {
          if (
            (void 0 === n && (n = -1),
            void 0 === i && (i = null),
            void 0 === r && (r = null),
            (this._id = 0),
            (this._storyId = 0),
            (this._page = 0),
            (this._rectangle = e),
            (this._xmlNode = t),
            (this._characterPosition = n),
            (this._selectionPosition = i),
            (this._imagesInlineWithText = r),
            this._xmlNode)
          ) {
            this._id = parseInt(
              this._xmlNode.attributes.getNamedItem("id").nodeValue
            );
            var a = this._xmlNode.parentNode;
            this._storyId = parseInt(
              a.attributes.getNamedItem("storyId").nodeValue
            );
            var o = a.selectSingleNode("ancestor::Page");
            this._page = parseInt(o.attributes.getNamedItem("id").nodeValue);
          }
        }
        var t, n, i;
        return (
          (e.prototype.dispose = function () {
            this._rectangle = null;
          }),
          (t = e),
          (n = [
            {
              key: "rectangle",
              get: function () {
                return this._rectangle;
              },
              set: function (e) {
                this._rectangle = e;
              },
            },
            {
              key: "id",
              get: function () {
                return this._id;
              },
            },
            {
              key: "node",
              get: function () {
                return this._xmlNode;
              },
            },
            {
              key: "page",
              get: function () {
                return this._page;
              },
            },
            {
              key: "storyId",
              get: function () {
                return this._storyId;
              },
            },
            {
              key: "characterPosition",
              get: function () {
                return this._characterPosition;
              },
            },
            {
              key: "selectionPosition",
              get: function () {
                return this._selectionPosition;
              },
            },
            {
              key: "imagesInlineWithText",
              get: function () {
                return this._imagesInlineWithText;
              },
            },
          ]) && r(t.prototype, n),
          i && r(t, i),
          e
        );
      })();
      Object(i.a)(a, "LineInfo", null, [4]);
    },
    546: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "CurrentResult", function () {
          return d;
        });
      var i = n(0),
        r = n(1),
        a = (n(9), n(14)),
        o = n(303),
        s = n(159),
        l = n(528),
        c = n(148),
        h = n(18);
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var d = (function () {
        function e() {
          (this._resultNumber = 0),
            (this._currentResultItem = null),
            (this._currentSearchResultHighlights = []),
            (this._currentResult = null);
        }
        var t,
          n,
          i,
          d = e.prototype;
        return (
          (d.dispose = function () {
            this._currentResultItem &&
              (Array.clear(this._currentSearchResultHighlights),
              (this._currentResultItem = null));
          }),
          (d.reset = function () {
            (this._resultNumber = Number.NaN),
              (this._currentResult = null),
              this._currentResultItem &&
                (this._currentResultItem.deselect(),
                (this._currentResultItem = null)),
              Array.clear(this._currentSearchResultHighlights);
          }),
          (d.setCurrentResult = function (e, t, n) {
            (this._resultNumber = n), (this._currentResult = e);
            var i = e.id;
            this.clearCurrentResultHighlight(),
              this._currentResultItem && this._currentResultItem.deselect(),
              (this._currentResultItem = t),
              this._currentResultItem.select(),
              this.searchForCurrentResult(i),
              l.SearchManager.instance.lookForCurrentResult(
                e.page,
                i,
                this._currentSearchResultHighlights.length > 0
              );
            var c = e.getScrollTop(),
              u = e.getScrollLeft();
            if (!isNaN(c) || !isNaN(u)) {
              var d = new s.a(c, u);
              r.AFrameworkApplication.theActionManager.processActionWithData(
                h.a.repositionScroller,
                2,
                d
              ),
                a.App.instance.isBroadcastMode &&
                  r.AFrameworkApplication.theActionManager.processActionWithData(
                    h.a.broadcastOnScroll,
                    2,
                    new o.a(e.page, d, 2)
                  );
            }
          }),
          (d.searchForCurrentResult = function (e) {
            var t,
              n,
              i = 0,
              r = new RegExp("(\\d+)-(\\d+)").exec(e);
            (t = Number.parseInvariant(r[1])),
              (n = Number.parseInvariant(r[2]));
            var a = l.SearchManager.instance,
              o = a.getHighlightsByPage(t);
            if (o) {
              var s = o[n];
              if (s)
                for (var c = s.highlightRectangles[i]; c; )
                  this.foundCurrentResult(c),
                    i++,
                    (c = (s = (o = a.getHighlightsByPage(t))[n])
                      .highlightRectangles[i]);
            }
          }),
          (d.foundCurrentResult = function (e) {
            this._currentSearchResultHighlights[
              this._currentSearchResultHighlights.length
            ] = e;
            var t = e.cloneHighlight();
            if ((e.addStyle(2), t)) {
              var n = e.domElem;
              c.a.animateFoundCurrentResultHighlight(t, n);
            }
          }),
          (d.clearCurrentResultHighlight = function () {
            if (this._currentSearchResultHighlights) {
              for (
                var e = 0;
                e < this._currentSearchResultHighlights.length;
                ++e
              ) {
                var t = this._currentSearchResultHighlights[e],
                  n = t.cloneHighlight();
                if ((t.removeStyle(2), n)) {
                  var i = t.domElem;
                  c.a.animateClearCurrentResultHighlight(n, i);
                }
              }
              Array.clear(this._currentSearchResultHighlights);
            }
          }),
          (t = e),
          (n = [
            {
              key: "resultNumber",
              get: function () {
                return this._resultNumber;
              },
            },
            {
              key: "result",
              get: function () {
                return this._currentResult;
              },
            },
          ]) && u(t.prototype, n),
          i && u(t, i),
          e
        );
      })();
      Object(i.a)(d, "CurrentResult", null, [4]);
    },
    549: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(0),
        r = n(533),
        a =
          (n(9),
          (function () {
            function e(e) {
              (this._xmlNodeWrapperFactory = new r.a()),
                (this._xmlNamedNodeMap = e);
            }
            return (
              (e.prototype.getNamedItem = function (e) {
                return this._xmlNodeWrapperFactory.getSelectionXmlNodeWrapper(
                  this._xmlNamedNodeMap.getNamedItem(e)
                );
              }),
              e
            );
          })());
      Object(i.a)(a, "XmlNamedNodeMapWrapper", null, [241]);
      var o = (function () {
        function e() {}
        return (
          (e.prototype.getSelectionXmlNamedNodeMapWrapper = function (e) {
            return e ? new a(e) : null;
          }),
          e
        );
      })();
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      Object(i.a)(o, "XmlNamedNodeMapWrapperFactory", null, [222]);
      var l = (function () {
        function e(e) {
          (this._xmlnodeWrapperFactory = new r.a()), (this._list = e);
        }
        var t, n, i;
        return (
          (e.prototype.get_item = function (e) {
            return this._xmlnodeWrapperFactory.getSelectionXmlNodeWrapper(
              this._list[e]
            );
          }),
          (t = e),
          (n = [
            {
              key: "length",
              get: function () {
                return this._list.length;
              },
            },
          ]) && s(t.prototype, n),
          i && s(t, i),
          e
        );
      })();
      Object(i.a)(l, "XmlNodeListWrapper", null, [240]);
      var c = (function () {
        function e() {}
        return (
          (e.prototype.getXmlNodeListWrapper = function (e) {
            return e ? new l(e) : null;
          }),
          e
        );
      })();
      function h(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      Object(i.a)(c, "XmlNodeListWrapperFactory", null, [223]),
        n.d(t, "XmlNodeWrapper", function () {
          return u;
        });
      var u = (function () {
        function e(e) {
          (this._xmlNodeWrapperFactory = new r.a()),
            (this._xmlNamedNodeMapWrapperFactory = new o()),
            (this._xmlNodeListWrapperFactory = new c()),
            (this._node = e);
        }
        var t,
          n,
          i,
          a = e.prototype;
        return (
          (a.selectSingleNode = function (e) {
            return this._xmlNodeWrapperFactory.getSelectionXmlNodeWrapper(
              this._node.selectSingleNode(e)
            );
          }),
          (a.selectNodes = function (e) {
            return this._xmlNodeListWrapperFactory.getXmlNodeListWrapper(
              this._node.selectNodes(e)
            );
          }),
          (t = e),
          (n = [
            {
              key: "backingNode",
              get: function () {
                return this._node;
              },
            },
            {
              key: "firstChild",
              get: function () {
                return this._xmlNodeWrapperFactory.getSelectionXmlNodeWrapper(
                  this._node.firstChild
                );
              },
            },
            {
              key: "previousSibling",
              get: function () {
                return this._xmlNodeWrapperFactory.getSelectionXmlNodeWrapper(
                  this._node.previousSibling
                );
              },
            },
            {
              key: "nextSibling",
              get: function () {
                return this._xmlNodeWrapperFactory.getSelectionXmlNodeWrapper(
                  this._node.nextSibling
                );
              },
            },
            {
              key: "nodeValue",
              get: function () {
                return this._node.nodeValue;
              },
            },
            {
              key: "attributes",
              get: function () {
                return this._xmlNamedNodeMapWrapperFactory.getSelectionXmlNamedNodeMapWrapper(
                  this._node.attributes
                );
              },
            },
          ]) && h(t.prototype, n),
          i && h(t, i),
          e
        );
      })();
      Object(i.a)(u, "XmlNodeWrapper", null, [200]);
    },
    550: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(0),
        r = n(2),
        a = n(1),
        o = (n(9), n(39)),
        s = n(21),
        l = n(14),
        c = n(34),
        h = n(532);
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var d = (function () {
        function e(e) {
          (this._page = e), (this._highlightRectangles = []);
        }
        var t,
          n,
          i,
          r = e.prototype;
        return (
          (r.dispose = function () {
            for (var e = 0; e < this._highlightRectangles.length; ++e)
              this._highlightRectangles[e] &&
                (h.a.instance.removeFromParent(this._highlightRectangles[e]),
                null);
          }),
          (r.addHighlightRectangle = function (e) {
            this._highlightRectangles[this._highlightRectangles.length] = e;
          }),
          (t = e),
          (n = [
            {
              key: "highlightRectangles",
              get: function () {
                return this._highlightRectangles;
              },
            },
            {
              key: "page",
              get: function () {
                return this._page;
              },
            },
          ]) && u(t.prototype, n),
          i && u(t, i),
          e
        );
      })();
      Object(i.a)(d, "HighlightResult", null, [4]);
      var g = n(528),
        m = n(541),
        p = n(18);
      function _(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      n.d(t, "HighlightWorker", function () {
        return f;
      });
      var f = (function () {
        function e(e) {
          (this._nextHighlightTask = null),
            (this._pageBeingHighlighted = 0),
            (this._countHitsOnPage = 0),
            (this._waitingOnReposition = !1),
            (this._countRunParagraphs = 0),
            (this._countRunCharacters = 0),
            (this._paragraphXmls = null),
            (this._paragraphBeingHighlighted = 0),
            (this._firstPageToHighlight = Number.NaN),
            (this._lastPageToHighlight = Number.NaN),
            (this._currentResultPage = Number.NaN),
            (this._currentResultId = null),
            (this._currentResultFound = !0),
            (this._oldCurrentPage = Number.NaN),
            (this._zoomControl = null),
            (this._target = e),
            a.AFrameworkApplication.theActionManager.addActionWithFlags(
              p.a.updateSearchHighlight,
              c.a.application,
              Object(r.d)(this, this.updateHighlight, "updateHighlight"),
              96
            ),
            l.App.get_activeAppFrame().add_onResize(
              Object(r.d)(this, this.onResize, "onResize")
            ),
            (this._highlights = {}),
            (this._repositionAllHighlightsTask = new o.a(
              3,
              1,
              10,
              Object(r.d)(
                this,
                this.repositionAllHighlightsTask,
                "repositionAllHighlightsTask"
              )
            ));
        }
        var t,
          n,
          i,
          u = e.prototype;
        return (
          (u.dispose = function () {
            this.reset(),
              (this._highlights = null),
              (this._paragraphXmls = null),
              (this._target = null),
              (this._repositionAllHighlightsTask = null);
          }),
          (u.onResize = function () {
            this.repositionAllHighlights();
          }),
          (u.updateHighlight = function (e, t, n, i, r) {
            return this.repositionAllHighlights(), 32;
          }),
          (u.reset = function () {
            this._waitingOnReposition &&
              (a.AFrameworkApplication.theTaskManager.deleteTask(
                this._repositionAllHighlightsTask
              ),
              (this._waitingOnReposition = !1)),
              this.clearAllHighlights(),
              (this._paragraphXmls = null),
              (this._firstPageToHighlight = Number.NaN),
              (this._lastPageToHighlight = Number.NaN),
              (this._currentResultFound = !0),
              (this._currentResultPage = Number.NaN),
              (this._currentResultId = null);
          }),
          (u.stopHighlightTask = function () {
            this._nextHighlightTask &&
              (a.AFrameworkApplication.theTaskManager.deleteTask(
                this._nextHighlightTask
              ),
              (this._nextHighlightTask = null));
          }),
          (u.setupHighlighting = function () {
            var e = l.App.get_activeAppFrame().workspace;
            (this._firstPageToHighlight = e.getFirstCachedPage()),
              (this._lastPageToHighlight = e.getLastCachedPage()),
              this.beginHighlighting();
          }),
          (u.beginHighlighting = function () {
            this.clearAllHighlights(),
              (this._pageBeingHighlighted =
                l.App.get_activeAppFrame().workspace.getCurrentPage()),
              (this._countHitsOnPage = 0),
              (this._nextHighlightTask = new o.a(
                3,
                1,
                l.App.instance.theConfig.highlightTaskDelay,
                Object(r.d)(this, this.waitOnNewPage, "waitOnNewPage")
              )),
              this.waitOnNewPage(null);
          }),
          (u.clearAllHighlights = function () {
            this.stopHighlightTask();
            var e = this._highlights;
            for (var t in e) {
              var n = { key: t, value: e[t] };
              this.clearHighlightsOnPage(n.key);
            }
            this._highlights = {};
          }),
          (u.clearHighlightsOnPage = function (e) {
            if (this._highlights[e]) {
              for (var t = this._highlights[e], n = 0; n < t.length; ++n)
                t[n].dispose(), (t[n] = null);
              Array.clear(t),
                delete this._highlights[e],
                e === this._currentResultPage &&
                  ((this._currentResultFound = !1),
                  g.SearchManager.instance.clearCurrentResultHighlight());
            }
          }),
          (u.waitOnNewPage = function (e) {
            var t;
            l.App.get_activeAppFrame().workspace;
            h.a.instance.isPageLoaded(this._pageBeingHighlighted) &&
            (t = l.App.get_activeAppFrame().thePageInfoCache.getXmlForPage(
              this._pageBeingHighlighted
            ))
              ? ((this._paragraphXmls = t.selectNodes("descendant::P")),
                (this._paragraphBeingHighlighted = 0),
                (this._nextHighlightTask = new o.a(
                  3,
                  1,
                  l.App.instance.theConfig.highlightTaskDelay,
                  Object(r.d)(
                    this,
                    this.parseParagraphXmlTask,
                    "parseParagraphXmlTask"
                  )
                )),
                a.AFrameworkApplication.theTaskManager.addTask(
                  this._nextHighlightTask
                ))
              : a.AFrameworkApplication.theTaskManager.addTask(
                  this._nextHighlightTask
                );
          }),
          (u.parseParagraphXmlTask = function (e) {
            (this._countRunCharacters = 0), (this._countRunParagraphs = 0);
            var t = l.App.instance.theConfig,
              n = this._highlights[this._pageBeingHighlighted];
            for (
              n ||
              ((n = []), (this._highlights[this._pageBeingHighlighted] = n));
              this._paragraphBeingHighlighted < this._paragraphXmls.length &&
              this._countRunCharacters < t.minCharactersToSearchBeforePausing &&
              this._countRunParagraphs < t.maxParagraphsToSearchBeforePausing;

            )
              this.parseParagraphXml();
            this._paragraphBeingHighlighted < this._paragraphXmls.length
              ? a.AFrameworkApplication.theTaskManager.addTask(
                  this._nextHighlightTask
                )
              : this.highlightNextPage();
          }),
          (u.highlightNextPage = function () {
            var e = this._lastPageToHighlight - this._firstPageToHighlight + 1,
              t = 0,
              n = l.App.get_activeAppFrame().workspace.getCurrentPage();
            for (
              n !== this._oldCurrentPage &&
              ((this._pageBeingHighlighted = n), (this._oldCurrentPage = n));
              t !== e && this._highlights[this._pageBeingHighlighted];

            )
              t++,
                (this._pageBeingHighlighted =
                  this._pageBeingHighlighted === this._lastPageToHighlight
                    ? this._firstPageToHighlight
                    : this._pageBeingHighlighted + 1);
            t === e
              ? (this._nextHighlightTask = null)
              : ((this._countHitsOnPage = 0),
                (this._nextHighlightTask = new o.a(
                  3,
                  1,
                  l.App.instance.theConfig.highlightTaskDelay,
                  Object(r.d)(this, this.waitOnNewPage, "waitOnNewPage")
                )),
                a.AFrameworkApplication.theTaskManager.addTask(
                  this._nextHighlightTask
                ));
          }),
          (u.parseParagraphXml = function () {
            var e = this._paragraphXmls[this._paragraphBeingHighlighted];
            if (!e.selectSingleNode("ancestor::P")) {
              var t = e.selectNodes("descendant::T/text()"),
                n = m.a(t);
              t.length && this.grepTheText(n, t),
                this._countRunParagraphs++,
                (this._countRunCharacters += n.length);
            }
            this._paragraphBeingHighlighted++;
          }),
          (u.grepTheText = function (e, t) {
            var n,
              i,
              r,
              a = 0,
              o = 0,
              s = g.SearchManager.instance,
              l = s.regex,
              c = this.zoomControl.currentZoom,
              u = this._highlights[this._pageBeingHighlighted];
            for (
              u ||
              ((u = []), (this._highlights[this._pageBeingHighlighted] = u));
              (r = l.exec(e));

            ) {
              var p =
                !this._currentResultFound &&
                this._pageBeingHighlighted === this._currentResultPage;
              (n = r.index), (i = l.lastIndex);
              for (
                var _ = 0,
                  f = new d(this._pageBeingHighlighted),
                  v = void 0,
                  C = null;
                a < t.length;
                ++a
              ) {
                if (((_ = o + t[a].data.length), o < i && _ > n)) {
                  var y = t[a].parentNode,
                    S = Math.max(0, n - o),
                    x = Math.min(_ - o, i - o);
                  (v = h.a.instance.computeBoundingBoxForTextRun(y, S, x)),
                    C ||
                      ((C = String.format(
                        "{0}-{1}",
                        this._pageBeingHighlighted,
                        this._countHitsOnPage
                      )),
                      this._countHitsOnPage++,
                      p &&
                        C === this._currentResultId &&
                        (this._currentResultFound = !0));
                  var b = h.a.instance.drawRectangle(
                    v,
                    1,
                    C,
                    this._pageBeingHighlighted
                  );
                  m.b(b, this._pageBeingHighlighted, c),
                    f.addHighlightRectangle(b),
                    this._currentResultFound && p && s.foundCurrentResult(b);
                }
                if (_ >= i) break;
                o = _;
              }
              u[u.length] = f;
            }
          }),
          (u.lookForCurrentResult = function (e, t, n) {
            (this._currentResultPage = e),
              (this._currentResultId = t),
              (this._currentResultFound = n);
          }),
          (u.pageCacheChanged = function (e, t) {
            if (
              "" !== g.SearchManager.instance.currentQueryString &&
              (this._firstPageToHighlight !== e ||
                this._lastPageToHighlight !== t)
            ) {
              if (
                (this._nextHighlightTask &&
                  (this._pageBeingHighlighted < e ||
                    this._pageBeingHighlighted > t) &&
                  (a.AFrameworkApplication.theTaskManager.deleteTask(
                    this._nextHighlightTask
                  ),
                  (this._nextHighlightTask = null)),
                isNaN(this._firstPageToHighlight) ||
                  isNaN(this._lastPageToHighlight) ||
                  e > this._lastPageToHighlight ||
                  t < this._firstPageToHighlight)
              )
                return (
                  (this._firstPageToHighlight = e),
                  (this._lastPageToHighlight = t),
                  void this.beginHighlighting()
                );
              for (var n = this._firstPageToHighlight; n < e; ++n)
                this.clearHighlightsOnPage(n);
              for (var i = t + 1; i <= this._lastPageToHighlight; ++i)
                this.clearHighlightsOnPage(i);
              (this._firstPageToHighlight = e),
                (this._lastPageToHighlight = t),
                this._nextHighlightTask ||
                  ((this._paragraphBeingHighlighted = Number.NaN),
                  this.highlightNextPage());
            }
          }),
          (u.repositionAllHighlights = function () {
            this._waitingOnReposition ||
              ((this._waitingOnReposition = !0),
              a.AFrameworkApplication.theTaskManager.addTask(
                this._repositionAllHighlightsTask
              ));
          }),
          (u.repositionAllHighlightsTask = function (e) {
            for (
              var t,
                n = l.App.get_activeAppFrame().workspace,
                i = this.zoomControl.currentZoom,
                r = n.getCurrentPage(),
                a = n.getFirstCachedPage(),
                o = n.getLastCachedPage(),
                s = r;
              s <= o;
              ++s
            )
              this.repositionHighlightsOnPage(this._highlights[s], i);
            for (var c = a; c < r; ++c)
              this.repositionHighlightsOnPage(this._highlights[c], i);
            var h = this._highlights;
            for (var u in h) {
              var d = { key: u, value: h[u] };
              ((t = d.key) < a || t > o) &&
                this.repositionHighlightsOnPage(d.value, i);
            }
            this._waitingOnReposition = !1;
          }),
          (u.repositionHighlightsOnPage = function (e, t) {
            if (e)
              for (var n, i, r, a = 0; a < e.length; ++a) {
                (i = (n = e[a]).highlightRectangles), (r = n.page);
                for (var o = 0; o < i.length; ++o) m.b(i[o], r, t);
              }
          }),
          (u.getHighlightsByPage = function (e) {
            return this._highlights[e];
          }),
          (e.createInstanceWithResolvedDependencies = function (t) {
            return new e(t);
          }),
          (e.createInstance = function (t) {
            return e.createInstanceWithResolvedDependencies(t);
          }),
          (t = e),
          (n = [
            {
              key: "zoomControl",
              get: function () {
                return (
                  this._zoomControl ||
                  (this._zoomControl = s.a.instance.resolve(
                    "WordViewer.Controls.IZoomControl"
                  ))
                );
              },
            },
          ]) && _(t.prototype, n),
          i && _(t, i),
          e
        );
      })();
      Object(i.a)(f, "HighlightWorker", null, [4]);
    },
  },
]);
//# sourceMappingURL=https://wordwebclientbuilds.blob.core.windows.net/ooui/1bdb878eb2c9f6e4858feb8dab64d388d1ebe749/WordViewerDS.common.js.map
