define("browserstorage", ["lightobject"], function () {
  !(function () {
    var e = {},
      t = window.$Config && $Config.hcid ? "." + $Config.hcid : "";
    window.BrowserStorage = {
      setSessionValue: function (t, i) {
        try {
          window.sessionStorage
            ? (sessionStorage[t] = Object.toJSON(i))
            : (e[t] = Object.toJSON(i));
        } catch (n) {}
      },
      getSessionValue: function (t) {
        try {
          var i;
          return (
            (i = window.sessionStorage ? sessionStorage[t] : e[t]),
            i ? Object.fromJSON(i) : void 0
          );
        } catch (n) {}
      },
      setLocalValue: function (e, i, n) {
        try {
          window.localStorage &&
            (n || (e += t), (localStorage[e] = Object.toJSON(i)));
        } catch (r) {}
      },
      getLocalValue: function (e, i, n) {
        try {
          if (window.localStorage) {
            n || (e += t);
            var r = localStorage[e],
              a = r ? Object.fromJSON(r) : void 0;
            return (null !== a && void 0 !== a) || void 0 === i ? a : i;
          }
        } catch (o) {}
        return i;
      },
    };
  })();
}),
  define("getstring", [], function () {
    window.GetString = function (e) {
      for (
        var t = this, i = e.toLowerCase().split("."), n = i.length, r = 0;
        n > r;
        r++
      ) {
        var a = i[r];
        if (((t = t[a]), null == t)) return "";
      }
      return "object" == typeof t ? t.___str : t.toString();
    };
  }),
  define(
    "alehelpers",
    ["registernamespace", "dependancies", "getstring"],
    function () {
      !(function () {
        function e(e) {
          return window.GetString ? GetString(e) : "";
        }
        var t = "live.shared.skydrive.",
          i = "live.shared.strings.",
          n = "live.shared.marketinfo.";
        wLive.Core.AleHelpers = {
          getString: function (i) {
            return e(t + "shared." + i);
          },
          getPCString: function (i) {
            return e(t + "pc." + i);
          },
          getSkyString: function (i) {
            return e(t + i);
          },
          getMobileString: function (i) {
            return e(t + "mobile." + i);
          },
          getMarketInfoValue: function (t) {
            return e(n + t);
          },
          getSharedString: function (t) {
            return e(i + t);
          },
        };
      })();
    }
  ),
  define("priorityqueue", ["dependancies"], function () {
    !(function () {
      function e(e, t, m) {
        function g(e, t) {
          var i = e[t];
          i && (i.state == c ? (_(i), i.abort && i.abort()) : p(i), k(i));
        }
        function f(e, t, i, n, r) {
          var a = {
            id: n,
            queueId: r,
            exec: e,
            abort: t,
            pri: i,
            timeoutId: 0,
            next: null,
            prev: null,
            state: d,
          };
          return a;
        }
        function p(e) {
          if (e && e.state == u) {
            e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev);
            var t = e.pri;
            F[t] == e && (F[t] = e.next),
              L[t] == e && (L[t] = e.prev),
              (e.state = d),
              (e.prev = e.next = null),
              T--;
          }
          return e;
        }
        function v(e) {
          if (e && e.state == d) {
            var t = e.pri,
              i = L[t];
            i ? ((i.next = e), (e.prev = i)) : (F[t] = e),
              (L[t] = e),
              (e.state = u),
              T++;
          }
        }
        function y() {
          !N && !B && T && I > A && (B = window.setTimeout(S, o));
        }
        function C(e, t) {
          var i = !0;
          if (t > 0) {
            var n = Math.max(r, a - a * (t / D));
            i = new Date().getTime() - e < n;
          }
          return i;
        }
        function S() {
          var e = new Date().getTime(),
            t = 0;
          for (B = 0, N = !0; T > 0 && D >= t && I > A; ) {
            var i = F[t];
            if ((i = i && P[i.pri] < (x[i.pri] || I) ? b(p(i)) : null)) {
              if (!C(e, t)) break;
            } else t++;
          }
          (N = !1), y();
        }
        function b(e) {
          if (e) {
            A++,
              (U[e.id] = e),
              (e.startTime = new Date().getTime()),
              P[e.pri]++,
              (e.state = c);
            var t = e.exec(function (t) {
              _(e, t);
            });
            t || _(e);
          }
          return e;
        }
        function _(e, t) {
          e.state === c && (A--, delete U[e.id], P[e.pri]--, k(e));
        }
        function k(e) {
          var t = M[e.queueId];
          (e.state = h), delete t[e.id], y();
        }
        for (
          var w = this,
            I = e || n,
            x = t || {},
            D = m || i,
            T = 0,
            A = 0,
            P = [],
            E = 0;
          D >= E;
          E++
        )
          P.push(0);
        var B = 0,
          R = 0,
          M = {},
          F = [],
          L = [],
          U = {},
          V = !1,
          N = !1;
        (w.enqueue = function (e, t, i, n, r) {
          var a = !1;
          if (!V) {
            (r = r || s), (n = n || String(R++)), (i = void 0 !== i ? i : l);
            var o = (M[r] = M[r] || {}),
              d = o[n];
            (d && (d.state != u || (!d.next && d.pri == i))) ||
              (d
                ? (p(d), (d.pri = i))
                : ((a = !0), (d = o[n] = f(e, t, i, n, r))),
              v(d),
              y());
          }
          return a;
        }),
          (w.abortAll = function () {
            V = !0;
            for (queueId in M) w.abort(queueId);
            V = !1;
          }),
          (w.abortTask = function (e, t) {
            e = e || s;
            var i = M[e];
            i && g(i, t);
          }),
          (w.abort = function (e) {
            e = e || s;
            var t = M[e];
            if (t) {
              for (taskId in t) g(t, taskId);
              M[e] = {};
            }
          }),
          (w.getActiveTaskCount = function () {
            return A;
          }),
          (w.getActiveTasks = function () {
            return U;
          });
      }
      var t = wLive.Core,
        i = 3,
        n = 5,
        r = 20,
        a = 100,
        o = 0,
        s = "root",
        l = 2,
        d = 0,
        u = 1,
        c = 2,
        h = 4;
      t.PriorityQueue = e;
    })();
  }),
  define("priorityqueueconfiguration", ["priorityqueue"], function () {
    !(function () {
      var e = wLive.Core,
        t = 5,
        i = (e.RequestPriorityEnum = {
          FetchData: 0,
          FetchImages: 1,
          DefaultGet: 2,
          DefaultPost: 3,
          MoveOperation: 4,
          CopyOperation: 5,
          DeleteOperation: 6,
          RestoreOperation: 7,
          UploadOperation: 8,
          RemoteUploadOperation: 9,
          UpdateStatusOperation: 10,
          ResetAbuseScoreOperation: 11,
          OwnerRequestReviewOperation: 12,
          RotateImageOperation: 13,
          PublishToFacebookOperation: 14,
          CopyAsyncOperation: 15,
          PublishVideoOperation: 16,
          AddFavoritesOperation: 17,
          RemoveFavoritesOperation: 18,
        }),
        n = 18,
        r = {};
      (r[i.CopyOperation] = 1),
        (r[i.DeleteOperation] = 1),
        (r[i.MoveOperation] = 1),
        (r[i.RestoreOperation] = 1),
        (r[i.UploadOperation] = 3),
        (r[i.RemoteUploadOperation] = 1),
        (window.requests = new e.PriorityQueue(t, r, n)),
        (window.domUpdates = new e.PriorityQueue());
    })();
  }),
  define(
    "jsonconstants",
    [
      "jquery-1.7.2",
      "pagestats",
      "validateconfig",
      "jbase",
      "workmonitor",
      "basecontrol",
      "alehelpers",
      "dependancies",
      "retriablepromise",
      "priorityqueueconfiguration",
    ],
    function () {
      wLive.Core.JSONConstants = {
        ErrorCodes: {
          BlockedUserErrorCode: 3009,
          HipCheck: 3006,
          PartialPermissionsSetError: 2019,
          UnverifiedAccount: 3020,
        },
        InvalidNameRegEx: '([:|*|?|\\\\|/|"|<|>|||／|＊])',
        InvalidItemNameCharacters: '* ? \\ / " : < > |',
        ViewType: {
          FolderPicker: "1",
          FilePicker: "2",
          Self: "3",
          Photos: "photos",
        },
        SortField: {
          Default: "0",
          Name: "1",
          ModifiedDate: "2",
          CreatedDate: "3",
          Size: "4",
          Type: "5",
          DateTaken: "6",
          Owner: "7",
          UserArranged: "8",
          LastOpened: "9",
          Relevancy: "10",
          DateDeleted: "11",
          OriginalLocation: "12",
          DateShared: "13",
          Sharer: "14",
        },
        SortDirection: { Default: "0", Ascending: "1", Descending: "2" },
        GroupBy: {
          Default: "-1",
          None: "-2",
          Folders: "0",
          FoldersDocumentsPhotos: "0,1,2",
        },
        FilterType: {
          Albums: "1",
          Folder: "2",
          Favorites: "4",
          AllFolders: "7",
          PhotosAndVideos: "8",
          PhotosVideosFolders: "15",
          Documents: "16",
        },
        SharingLevel: { Public: 0, PublicUnlisted: 2, Shared: 3, Private: 4 },
        UserFactInfoType: {
          NewBrandBonus: 1,
          CameraRollBonus: 2,
          NewFriendAcceptedInvitation: 3,
          CameraRollNewlyEnabled: 4,
          InvitedFriendBonus: 5,
          InvitedByFriendBonus: 6,
          Upsells: 7,
          Grandfather: 8,
          OdbAccounts: 9,
          QuotaFactExpiration: 10,
          CameraRollBonus2: 14,
          BubbleControl: 17,
        },
        UserFactInfoAction: { Set: 1, Delete: 2, InsertUpdate: 3 },
      };
    }
  ),
  define("datarequest", ["jsonconstants"], function () {
    !(function (e) {
      function t(t, n, k, w, I, x, D, T, A, P, E) {
        function B() {
          var e = window.location.search,
            t = "";
          if (e) {
            var i = $Utility.deserialize(e.substring(1)),
              n = i.iam,
              r = "aad_auth:" + n,
              a = $Cookie.getCookie(r.decodeUrl().encodeUrl());
            if (a) {
              var o = "id_token=",
                s = a.indexOf(o);
              t = a.substring(s + o.length, a.indexOf("&", s));
            }
          }
          return t;
        }
        function R(e) {
          var t = !1;
          return (
            0 != e.indexOf("/") && (t = M(e) != M(window.location.host)), t
          );
        }
        function M(e) {
          var t = e.indexOf("://");
          return (
            -1 !== t && (e = e.substr(t + 3)),
            (t = e.indexOf("?")),
            -1 !== t && (e = e.substr(0, t)),
            (t = e.indexOf("/")),
            -1 !== t && (e = e.substr(0, t)),
            e.toLowerCase()
          );
        }
        function F() {
          U._workId && (o.completeWork(U._workId), (U._workId = null));
        }
        function L(e) {
          var r,
            a = e ? e.error : null;
          if (
            (F(), (e = e || {}), wLive.PageStats.add(e.pageStats, O), e.error)
          ) {
            var o = e.error.stackTrace;
            (r = e.error.debugMessage ? e.error.debugMessage + "\n" : ""),
              (r += o && o.encodeJson ? o.encodeJson() : "");
            '{"code": "' +
              e.error.code +
              '", "message": "' +
              e.error.message +
              '", "debug": "' +
              e.error.debugMessage +
              '", "stacktrace": "' +
              r +
              '", "retriesLeft": "' +
              q +
              '", "requestUrl": "' +
              n +
              '"}';
          }
          if (e.error && e.error.isRetriable && q > 0)
            Trace.logTo(H, "Retrying request: " + n, y, {
              dataBundle: e,
              shouldSynchronizeSerialization: !0,
            }),
              N && N(),
              q--,
              U.start();
          else {
            if (e.error)
              Trace.logTo(H, "Failed response: " + n, y, {
                dataBundle: e,
                shouldSynchronizeSerialization: !0,
              }),
                N && N(U.failureReentranceDelay),
                e.error.code != g && i(t, !1, e);
            else {
              var l = !1;
              Trace.logTo(H, "Response: " + n, y, {
                dataBundle: e,
                shouldSynchronizeSerialization: l,
              }),
                N && N(U.successReentranceDelay),
                $ && U.originId && (e.originId = U.originId),
                i(t, !0, e);
            }
            if (U.apiId && U.propertyId) {
              var d = void 0,
                u = s.success;
              a &&
                ((d = a.code + (a.status ? "-" + a.status : "")),
                (u = a.isExpected ? s.expected : s.unexpected)),
                U.errorCodeSuffix &&
                  (d = (d || "success") + "-" + U.errorCodeSuffix),
                window.Qos && Qos.log(U.apiId, U.propertyId, O, d, u, r);
            }
          }
        }
        var U = this;
        (U.successCallback = w),
          (U.failureCallback = I),
          (t = t || "key" + S++),
          (b[t] = b[t] || []),
          b[t].push(this);
        var V,
          N,
          Q = !1,
          q = void 0 !== T ? T : f;
        x = x || c;
        var O,
          H = null,
          $ = R(n);
        (U.priority = D || (k || E ? p : v)),
          (U.queueId = k || E ? u : d),
          (U.originId = null),
          (U.jsonpParameterName = void 0),
          (U.successReentranceDelay = 0),
          (U.failureReentranceDelay = 0),
          (U._queuedWorkStarted = !1),
          k && (k = k.replace(/\?/g, "\\u003F")),
          (U.apiId = ""),
          (U.propertyId = ""),
          (U.errorCodeSuffix = ""),
          (U._workId = null),
          (U.start = function () {
            var i = o.startWork([
              o.StandardTags.Network,
              o.StandardTags.Network_Data,
            ]);
            return (
              (U._enqueued = window.requests.enqueue(
                function (s) {
                  if (((U._queuedWorkStarted = !0), Q)) o.completeWork(i);
                  else {
                    (U._workId = i),
                      (N = s),
                      (O = new Date().getTime()),
                      (H = Trace.log("Request: " + n, y, {
                        dataBundle: k,
                        shouldSynchronizeSerialization: !0,
                      }));
                    var l,
                      d = null,
                      u = n,
                      c = !1;
                    if ($) {
                      if (!A) {
                        (u += -1 === n.indexOf("?") ? "?" : "&"),
                          (u += "canary=" + FilesConfig.canary.encodeUrl()),
                          (l = "dataRequestCallback_" + C++);
                        var h = !1,
                          g = setTimeout(function () {
                            h || ((h = !0), L(U.parseError(V, "timeout", m)));
                          }, x);
                        a.DataRequest[l] = function (e) {
                          h || (clearTimeout(g), (h = !0), L(e)),
                            delete a.DataRequest[l];
                        };
                      }
                    } else {
                      (d = {
                        canary: FilesConfig.canary,
                        Accept: "application/json",
                        AppId: FilesConfig.appId,
                      }),
                        u.indexOf("/GetItems?") > -1 &&
                          ((d["Cache-Control"] = "private"),
                          (d["X-ForceCache"] = "1")),
                        U.originId && (d["X-SkyApiOriginId"] = U.originId),
                        FilesConfig.oauthToken &&
                          (d["X-Auth"] = FilesConfig.oauthToken);
                      var f = B();
                      f && (d.Authorization = "Bearer " + f),
                        FilesConfig.authKey &&
                          (d.InvitationToken = FilesConfig.authKey),
                        FilesConfig.skyApiDomain &&
                          u.toLowerCase().startsWith("/api/") &&
                          (c = !0);
                    }
                    var p = function (e, t, i) {
                        c
                          ? setTimeout(function () {
                              L(e);
                            }, 0)
                          : L(e);
                      },
                      v = function (e, t, i) {
                        c
                          ? setTimeout(function () {
                              L(U.parseError(e, t, i));
                            }, 0)
                          : L(U.parseError(e, t, i));
                      },
                      S = {
                        url: u,
                        dataType: P ? P : $ && !A ? "jsonp" : "json",
                        jsonp: U.jsonpParameterName,
                        jsonpCallback: l
                          ? "wLive.Core.DataRequest." + l
                          : void 0,
                        data: k,
                        processData: !1,
                        type: k || E ? "POST" : "GET",
                        headers: d,
                        timeout: x,
                        success: $ && !A ? void 0 : p,
                        error: $ && !A ? void 0 : v,
                        xhrFields: A ? null : { withCredentials: 1 },
                      },
                      b = window.$InlineRequests && $InlineRequests[t];
                    b
                      ? (Trace.logTo(H, "Inline request: " + n, y),
                        b.then(p, v))
                      : c
                      ? $Do.when("skyApiProxy", 0, function () {
                          Q ||
                            (_ && _.contentWindow && _.contentWindow.jQuery
                              ? (V = _.contentWindow.jQuery.ajax(S))
                              : ((h = !0),
                                L(U.parseError(null, "proxyfailure", m)),
                                r()));
                        })
                      : (V = e.ajax(S));
                  }
                  return !Q;
                },
                function () {
                  $ || U.abort();
                },
                U.priority,
                t,
                U.queueId
              )),
              U._enqueued || o.completeWork(i),
              U._enqueued
            );
          }),
          (U.abort = function () {
            (Q = !0),
              V &&
                !$ &&
                (Trace.logTo(H, "Abort: " + n, y, {
                  dataBundle: k,
                  shouldSynchronizeSerialization: !0,
                }),
                V.abort(),
                (V = null)),
              N
                ? (N(), (N = null))
                : U._enqueued &&
                  !U._queuedWorkStarted &&
                  (requests.abortTask(U.queueId, t), (U._enqueued = !1)),
              F();
          }),
          (U.getStartTime = function () {
            return O;
          }),
          (U.parseError = function (e, t, i) {
            var r = {};
            if (e && 500 == e.status)
              try {
                r = Object.fromJSON(e.responseText) || {};
              } catch (a) {}
            if (!r.error && !r.items) {
              var o = !0,
                s = !1,
                d = h + (e && e.status ? ": status " + e.status : ""),
                u = l("LoadGenericError");
              switch (
                ((r.pageStats = {
                  url: n,
                  error: t,
                  tasks: [],
                  executionTimeMs: 0,
                  schedulerTimeMs: 0,
                }),
                t)
              ) {
                case "proxyfailure":
                case "timeout":
                  (d = m), (u = l("LoadTimeoutError"));
                  break;
                case "abort":
                  (d = g),
                    (o = !1),
                    (s = !0),
                    (r.pageStats.info = t),
                    (r.pageStats.error = null);
              }
              r.error = {
                isRetriable: o,
                isExpected: s,
                code: d,
                message: u,
                status: t,
                debugMessage: e
                  ? "(xhr status " +
                    e.status +
                    ") xhr.responseText: " +
                    e.responseText
                  : "",
                stackTrace: "",
              };
            }
            return r;
          });
      }
      function i(e, t, i) {
        var n = b[e];
        delete b[e];
        for (var r = 0; n && r < n.length; r++) {
          var a = n[r];
          t && a.successCallback && a.successCallback(i),
            !t && a.failureCallback && a.failureCallback(i);
        }
      }
      function n() {
        _ ||
          ((_ = ce("IFRAME")),
          (_.id = "skyApiProxyFrame"),
          (_.src = FilesConfig.skyApiDomain + "/api/proxy?v=3"),
          document.head.appendChild(_));
      }
      function r() {
        if (_) {
          var e = _.parentNode;
          e.removeChild(_), (_ = null);
        }
        $Do.unregister("skyApiProxy"), n();
      }
      var a = wLive.Core,
        o = Shared.WorkMonitor,
        s = Qos.responseType,
        l = a.AleHelpers.getString,
        d = "fetch",
        u = "write",
        c = 3e4,
        h = "unexpected",
        m = "timeout",
        g = "aborted",
        f = 1,
        p = a.RequestPriorityEnum.DefaultPost,
        v = a.RequestPriorityEnum.DefaultGet,
        y = "DataRequest",
        C = 0,
        S = 0,
        b = {},
        _ = null;
      FilesConfig.skyApiDomain &&
        ((FilesConfig.lightweightEmbedPage && window.self !== window.top) ||
          ((document.domain = $Config.d), (_ = byId("skyApiProxyFrame")), n())),
        (a.DataRequest = t),
        (a.DataRequest.hasPendingRequest = function (e) {
          return !!b[e];
        });
    })(window.originaljQuery || jQuery);
  }),
  define("viewparams", ["dependancies", "defineutilities"], function () {
    !(function () {
      defineClass("wLive.Core.ViewParams", function () {}, {});
    })();
  }),
  define("viewcontext", ["viewparams", "browserstorage"], function () {
    !(function () {
      var e,
        t = wLive.Core,
        i = "SkyDrive.UserSettings";
      defineClass(
        "wLive.Core.ViewContext",
        function () {
          this.viewParams = new t.ViewParams();
          try {
            this.userSettings = BrowserStorage.getLocalValue(i) || {};
          } catch (e) {
            this.userSettings = {};
          }
        },
        {
          updateSettings: function (e) {
            mix(this.userSettings, e);
            try {
              BrowserStorage.setLocalValue(i, this.userSettings);
            } catch (t) {}
          },
        },
        {
          getInstance: function () {
            return e || (e = new wLive.Core.ViewContext()), e;
          },
        }
      );
    })();
  }),
  define(
    "bicihelpers",
    [
      "jquery-1.7.2",
      "dependancies",
      "lightstring",
      "bsi",
      "domutilities",
      "viewcontext",
    ],
    function () {
      !(function () {
        function e(e) {
          for (var t = e.context; t; ) {
            if (t.control) return t.control;
            t = t.parentElement;
          }
        }
        var t = wLive.Core,
          i = "TypeOfPage",
          n = "Search",
          r = "SearchesBeforeAction",
          a = "SearchItemPos",
          o = "frestatus",
          s = "ABTest",
          l = 5,
          d = "ODREFID",
          u = "SR",
          c = "SB",
          h = jQuery.ajax;
        t.BiciHelpers = {
          reportClickAction: function (m, g, f, p, v, y) {
            var C,
              S = { SkyCmnd: m, ClickLoc: g };
            if (!f) {
              (C = wLive.Core.ViewContext.getInstance()),
                (f = C && C.biciPageId);
              var b = C && C.biciSetViewContentType;
              b && (f += b);
            }
            if ((f && (S[i] = f), m == u && g == c)) {
              var _ = {
                searchCount: -1,
                searchId: -1,
                currentQuery: "",
                pageSearchedFrom: f,
              };
              t.Search &&
                ((_.searchCount = t.Search.getSearchesBeforeAction()),
                (_.searchId = t.Search.getSearchStartTime()),
                (_.currentQuery = t.Search.getCurrentQuery())),
                Qos.logData(
                  "SkyDriveWeb_Internal_Search_Query",
                  "SkyDrive",
                  _.searchId,
                  null,
                  null,
                  _,
                  Date.now()
                );
            }
            if (f && f.startsWith(n)) {
              var k = {
                searchesBeforeAction: -1,
                searchItemPosition: -1,
                resultCount: -1,
                searchSucceeded: !1,
                searchId: -1,
                searchQuery: "",
                skyCmnd: m,
                clickLoc: g,
              };
              t.Search &&
                ((S[r] = t.Search.getSearchesBeforeAction()),
                (k.searchesBeforeAction = S[r]),
                (k.searchId = t.Search.getSearchStartTime()),
                t.Search.clearSearchesBeforeAction(m)),
                C &&
                  ((k.searchItemPosition =
                    C.selectionManager.getSelection().firstSelectedIndex),
                  (k.resultCount = C.currentItem.estimatedResultCount),
                  (k.searchQuery = C.viewParams.q));
              var w;
              if (p) {
                var I = e(p);
                if (I) {
                  for (
                    ;
                    I && I.dataContext && void 0 == I.dataContext.itemIndex;

                  )
                    I = I.parent;
                  I &&
                    I.dataContext &&
                    ((k.searchItemPosition = I.dataContext.itemIndex),
                    (w = I.dataContext.item));
                }
              }
              !w && y && (w = y),
                w &&
                  w.urls &&
                  w.urls.bingClickInstrumentation &&
                  h(w.urls.bingClickInstrumentation),
                k.searchItemPosition >= 0 &&
                  ((S[a] = k.searchItemPosition), (k.searchSucceeded = !0)),
                Qos.logData(
                  "SkyDriveWeb_Internal_Search_Result",
                  "SkyDrive",
                  k.searchId,
                  null,
                  null,
                  k,
                  Date.now()
                );
            }
            for (var x in v) S[x] = v[x];
            for (var D = 1; l > D; D++) {
              var T = s + D,
                A = $Cookie.getCookie(T);
              null != A && (S[T] = A);
            }
            var P = $Cookie.getCookie(d);
            null != P && (S[d] = P);
            var E = $Cookie.getCookie(o);
            if (null != E) {
              var B = "0";
              "shown" == E && (B = "1"),
                $BSI.reportEvent("SkyDrive.FREEligible.ActionAfter", {
                  FREShown: B,
                }),
                $Cookie.deleteCookie(o);
            }
            $BSI.reportEvent("ClickedSelected.Command.SkyDrive", S);
          },
          prependBiciReportClickAction: function (e, i, n) {
            return function (r) {
              if (r) {
                if (r.target) var a = jQuery(r.target);
                if (r.data) var o = r.data;
              }
              return (
                t.BiciHelpers.reportClickAction(i, n, null, a, null, o),
                e && e.apply(this, arguments)
              );
            };
          },
        };
      })();
    }
  ),
  define(
    "imagestrip",
    ["validateconfig", "dependancies", "wliveimagestrip"],
    function () {
      !(function () {
        function e(e) {
          for (var i = -1, n = 0; n < t.length; n++)
            if (t[n].hasOwnProperty(e)) {
              i = n;
              break;
            }
          return i;
        }
        var t = [window.FilesIS32 || {}, window.FilesIS8 || {}],
          i = [FilesConfig.imageStripUrl_32, FilesConfig.imageStripUrl_8];
        window.require &&
          !$B.Mobile &&
          require([
            "skydrive_pc_strip_8_ltr",
            "skydrive_pc_strip_32_ltr",
          ], function () {
            t = [window.FilesIS32 || {}, window.FilesIS8 || {}];
          });
        var n = (wLive.Core.ImageStrip = {});
        n.getImage = function (n, r, a) {
          (r = r || ""), (a = a || "");
          var o,
            s = e(n);
          if (s > -1) {
            var l = t[s],
              d = i[s],
              u = l[n];
            o = $IS.Create(u.x, u.y, u.w, u.h, FilesConfig.imgBaseUrl, d, r, a);
          }
          return o;
        };
      })();
    }
  ),
  define(
    "stringhelpers",
    [
      "jquery-1.7.2",
      "browserstorage",
      "pagestats",
      "jbase",
      "basecontrol",
      "validateconfig",
      "lightobject",
      "lightstring",
      "alehelpers",
      "datarequest",
      "bicihelpers",
      "viewcontext",
      "imagestrip",
    ],
    function () {
      !(function () {
        wLive.Core.StringHelpers = {
          caseInsensitiveStringEquals: function (e, t) {
            return e == t
              ? !0
              : null == e || null == t
              ? !1
              : e.toLowerCase() == t.toLowerCase();
          },
        };
      })();
    }
  ),
  define("throttle", ["stringhelpers"], function () {
    !(function () {
      var e = {},
        t = {};
      wLive.throttle = function (i, n, r, a) {
        function o() {
          e[i] = setTimeout(function () {
            r(), delete e[i], a && t[i] && ((r = t[i]), delete t[i], o());
          }, n);
        }
        return a && e[i]
          ? void (t[i] = r)
          : (e[i] && clearTimeout(e[i]), void o());
      };
    })();
  }),
  define("skydriveitemset", ["throttle"], function () {
    !(function () {
      function e(e, t) {
        var i = t._headerItemsSet && e && -1 !== t._headerItemsSet.indexOf(e);
        return (
          i && n.push({ set: t, headerSet: t._headerItemsSet, item: e }), !i
        );
      }
      function t(e, t, i, n) {
        for (var r = e + 1; r < t.length; r++) {
          var a = t[r];
          if (!(a.startIndex <= i.endIndex + 1)) break;
          if (a.mergeUp) {
            if (n.endIndex < a.endIndex) {
              var o = a.endIndex - n.endIndex;
              (n.mergeDown = a.mergeDown), (n.count += o), (n.endIndex += o);
            }
            (a.count = -1), (a.startIndex = -1), (a.endIndex = -1);
          } else {
            if (!a._filler) break;
            if (n.endIndex < a.endIndex) {
              var s = a.endIndex - n.endIndex;
              (a.count -= s), (a.startIndex += s);
            } else (a.count = -1), (a.startIndex = -1), (a.endIndex = -1);
          }
        }
      }
      var i = wLive.Core,
        n = [];
      s_infiniteScrollBuffer = 20;
      var r = "SkyDriveItemSet",
        a = "headerFilter",
        o = Shared.ItemSet.prototype;
      defineSubClass(
        "SkyDrive.Core.SkyDriveItemSet",
        Shared.ItemSet,
        function (t, n, r) {
          var o = this;
          (o._dataModel = t),
            (o._parentItemKey = n),
            (o._setKey = r),
            (o.setKeyParts = i.SkyDriveItem.getSetKeyParts(r)),
            (o._headerItemsSet = null),
            o.setFilter(a, e);
        },
        {
          modifiedDate: "-1",
          defaultGroupName: "FolderDocumentsPhotos",
          groupings: null,
          _rawCount: void 0,
          firstGroupingId: "folder",
          hasPendingRequests: function () {
            var e = this;
            return e._dataModel.hasPendingRequests(e._parentItemKey, e._setKey);
          },
          setHeaderItemsSet: function (e) {
            var t = this;
            t._headerItemsSet && t.removeChangeListener(t._headerItemsSet),
              (t._headerItemsSet = e),
              e && this.addChangeListener(e, t._onChildChanged);
          },
          isOutOfDate: function () {
            var e = this,
              t = !1,
              i = e.getParent(!0);
            if (i && i.folder && !i.neverExpires) {
              var n = i && i.modifiedDate != e.modifiedDate,
                r = i && 0 === i.folder.totalCount && 0 === e._childCount,
                a = e.setKeyParts.tagFilter;
              t = i && (i.hasExpired() || (n && (!r || a)));
            }
            return t;
          },
          peek: function (e, t) {
            return this._get(e, t, !0);
          },
          get: function (e, t) {
            return this._get(e, t, !1);
          },
          _get: function (e, t, i) {
            var n = this,
              a = null,
              s = !1,
              l = !1,
              d = n._dataModel,
              u = n._parentItemKey,
              c = n._setKey,
              h = n._headerItemsSet,
              m = n.getCount(t),
              g = n._filteredIndexToActualIndex,
              f = n.isOutOfDate();
            if (
              (h &&
                h.getCount() > 0 &&
                (h.getCount() > e
                  ? ((a = h.get(e, t)), (s = !0))
                  : (e -= h.getCount())),
              s || ((a = o.get.call(n, e, t)), (l = !a && e >= 0 && m > e)),
              a && a.hasExpired() && n.parentShouldBeExpiredOnGet())
            ) {
              f = !0;
              var p = a.getParent(!0);
              p && p.expire(!1, !0);
            }
            if (!i && (l || f)) {
              var v = e;
              t || void 0 === g[e] || (v = g[e]),
                d.fetchItem(u, c, null, v) &&
                  Trace.log(
                    "get miss - index: " +
                      e +
                      ", exists: " +
                      !!a +
                      ", setExpired: " +
                      f +
                      ", setKey: " +
                      c,
                    r
                  );
            }
            return a && (a.parentKey = u), a;
          },
          parentShouldBeExpiredOnGet: function () {
            return !0;
          },
          getCount: function (e) {
            var t = this,
              i = t._headerItemsSet,
              n = o.getCount.call(t, e);
            return (
              i && (n += i.getCount()),
              t.isOutOfDate() && !n && !t._materializedCount && (n = 1),
              n
            );
          },
          getRawCount: function () {
            return this._rawCount || this.getCount();
          },
          setCount: function (e) {
            var t = this,
              i = t.getParent(!0);
            if (!i || (i.hasMoreResults !== !0 && i.hasMoreResults !== !1))
              o.setCount.call(t, e);
            else {
              var n = t._rawCount,
                r = i.folder.totalCount,
                a = i.folder.totalCount,
                s = t._childCount;
              if (
                (i.hasMoreResults &&
                  (n > r && (r = n),
                  s >= a ? (a = s) : (a += s_infiniteScrollBuffer)),
                (t._rawCount = r),
                (t._childCount = t._filteredCount = a),
                (t._requiresFilter = !0),
                s > a)
              )
                for (var l = s - 1; l >= a; l--)
                  t._indexToItem[l] && t._materializedCount--,
                    delete t._indexToItem[l];
            }
          },
          getGroupings: function (e) {
            var t,
              i,
              n = this,
              r = n._headerItemsSet,
              a = o.getGroupings.call(n, e);
            if (r && (i = r.getCount(e))) {
              for (var s = [], l = 0; l < a.length; l++) {
                var d = a[l],
                  u = { name: d.name, itemGroups: [], partial: d.partial };
                s.push(u);
                var c = d.itemGroups;
                if (0 == c.length || c[0].groupingId != n.firstGroupingId) {
                  u.itemGroups.push({
                    groupingId: n.firstGroupingId,
                    startIndex: 0,
                    endIndex: i - 1,
                    count: i,
                  });
                  for (var h = 0; h < c.length; h++)
                    (t = c[h]),
                      u.itemGroups.push({
                        groupingId: t.groupingId,
                        startIndex: t.startIndex + i,
                        endIndex: t.endIndex + i,
                        count: t.count,
                      });
                } else
                  for (var m = 0; m < c.length; m++)
                    (t = c[m]),
                      u.itemGroups.push({
                        groupingId: t.groupingId,
                        name: t.name,
                        startIndex: t.startIndex ? t.startIndex + i : 0,
                        endIndex: t.endIndex + i,
                        count:
                          t.groupingId == n.firstGroupingId
                            ? t.count + i
                            : t.count,
                      });
              }
              a = s;
            }
            return (
              (i = this.getCount(e)),
              i &&
                !a.length &&
                a.push({
                  groupingId: "other",
                  startIndex: 0,
                  endIndex: i - 1,
                  count: i,
                }),
              a
            );
          },
          getParent: function (e) {
            var t = this,
              i = t._dataModel;
            return i ? i.getItem(t._parentItemKey, e) : null;
          },
          indexOf: function (e, t, i) {
            var n = this,
              a = n._headerItemsSet,
              s = n._dataModel,
              l = n._parentItemKey,
              d = n._setKey,
              u = n.isOutOfDate(),
              c = -1;
            return (
              a && (c = a.indexOf(e, t)),
              -1 == c &&
                ((c = o.indexOf.call(n, e, t)),
                i ||
                  (-1 !== c && !u) ||
                  (s.fetchItem(l, d, e.id, 0) &&
                    Trace.log(
                      "indexOf miss - id: " +
                        e.id +
                        ", setExpired: " +
                        u +
                        ", setKey: " +
                        d,
                      r
                    )),
                a && -1 !== c && (c += a.getCount(t))),
              c
            );
          },
          remove: function (e) {
            var t = this,
              i = t.indexOf(e, !0, !0);
            -1 != i && t.removeAt(i, !0);
          },
          removeAt: function (e, t) {
            var i = this._headerItemsSet;
            if (i) {
              var n = i.getCount();
              n > e ? i.removeAt(e, t) : o.removeAt.apply(this, [e - n, t]);
            } else o.removeAt.apply(this, arguments);
          },
          insertWithGroupHint: function (e, t, i, n) {
            var r = this._headerItemsSet;
            if (r) {
              var a = r.getCount();
              a > e
                ? r.insertWithGroupHint(e, t, i, n)
                : o.insertWithGroupHint.apply(this, [e - a, t, i, n]);
            } else o.insertWithGroupHint.apply(this, arguments);
          },
          clone: function () {
            var e = this,
              t = new SkyDrive.Core.SkyDriveItemSet(
                e._dataModel,
                e._parentItemKey,
                e._setKey
              ),
              i = o.get;
            t.groupings = this.groupings;
            for (var n = 0; n < e.getCount(); n++) {
              var r = i.call(e, n);
              r && t.set(n, r);
            }
            t.modifiedDate = e.modifiedDate;
            var a = e._headerItemsSet,
              s = new Shared.ItemSet();
            if (a)
              for (n = 0; n < a.getCount(); n++) {
                var l = a.peek(n);
                l && s.set(n, l);
              }
            return t.setHeaderItemsSet(s), t;
          },
          isComplete: function () {
            var e = this;
            return e._materializedCount === e._childCount;
          },
          sort: function () {
            for (
              var e = this,
                t = i.SkyDriveItem.getSetKeyParts(e._setKey),
                n = [],
                r = 0;
              r < e.getCount();
              r++
            ) {
              var a = e.peek(r);
              n.push(a);
            }
            var o = n.sort(function (e, n) {
              function r(e, t) {
                var n = i.JSONConstants.SortField;
                switch (t) {
                  case n.ModifiedDate:
                    return e.dateModifiedOnClient || 0;
                  case n.CreatedDate:
                    return e.creationDate || 0;
                  case n.Size:
                    return e.size || 0;
                  case n.Name:
                    return e.name;
                }
              }
              var a = t.sr;
              t.sd && (a = t.sd == i.JSONConstants.SortDirection.Default);
              var o = r(n, t.sb),
                s = r(e, t.sb),
                l =
                  t.sb == i.JSONConstants.SortField.Name
                    ? o.localeCompare(s)
                    : o - s;
              return (
                a && (l = -l),
                e.folder && !n.folder
                  ? -1
                  : !e.folder && n.folder
                  ? 1
                  : (!e.video && !e.photo) || n.photo || n.video
                  ? (!n.video && !n.photo) || e.photo || e.video
                    ? l
                    : -1
                  : 1
              );
            });
            for (r = 0; r < o.length; r++) e.set(r, o[r]);
          },
          _mergeGroupingsFromServer: function (e, i) {
            var n = this,
              r = this.getCount(!0);
            (!i && n.groupings) || (n.groupings = e);
            for (var a = 0; a < e.length; a++) {
              for (var o, s = e[a], l = n.groupings, d = 0; d < l.length; d++)
                l[d].name === s.name && (o = l[d]);
              if ((o || ((o = e[a]), n.groupings.push(e[a])), s.partial)) {
                var u = [],
                  c = s.itemGroups;
                if (i) {
                  if (c.length > 0) {
                    var h = c[0];
                    0 !== h.startIndex &&
                      u.push({
                        groupingId: "other",
                        startIndex: 0,
                        endIndex: h.startIndex - 1,
                        count: h.startIndex,
                        __filler: !0,
                      });
                    for (var m = 0; m < c.length; m++) {
                      var g = c[m];
                      (g.endIndex = g.startIndex + g.count - 1), u.push(g);
                    }
                    var f = c[c.length - 1],
                      p = f.startIndex + f.count - 1;
                    p !== r - 1 &&
                      u.push({
                        groupingId: "other",
                        startIndex: p + 1,
                        endIndex: r - 1,
                        count: r - p - 1,
                        __filler: !0,
                      });
                  }
                } else
                  for (
                    var v = o.itemGroups, y = c.length > 0 ? c[0] : null, C = 0;
                    C < v.length;
                    C++
                  ) {
                    var S = v[C];
                    if (y && y.startIndex <= S.endIndex && S.__filler) {
                      for (var b = 0; b < c.length; b++) {
                        var _ = c[b];
                        if (
                          ((_.endIndex = _.startIndex + _.count - 1),
                          _.startIndex <= S.endIndex &&
                            _.endIndex >= S.startIndex)
                        )
                          if (_.startIndex <= S.startIndex) {
                            var k = _;
                            if (
                              (_.mergeUp || _.startIndex < S.startIndex) &&
                              C > 0 &&
                              v[C - 1].mergeDown
                            ) {
                              var w = _.count - (S.startIndex - _.startIndex);
                              (k = v[C - 1]),
                                (k.count += w),
                                (k.endIndex += w),
                                (k.mergeDown = _.mergeDown),
                                (S.count -= w),
                                (S.startIndex += w);
                            } else
                              u.push(_),
                                (S.count -= _.count),
                                (S.startIndex += _.count);
                            if (S.count <= 0) {
                              t(C, v, _, k);
                              break;
                            }
                          } else if (
                            (u.push({
                              groupingId: "other",
                              startIndex: S.startIndex,
                              endIndex: _.startIndex - 1,
                              count: _.startIndex - S.startIndex,
                              __filler: !0,
                            }),
                            u.push(_),
                            (S.startIndex = _.endIndex + 1),
                            (S.count = S.endIndex - S.startIndex + 1),
                            S.count <= 0)
                          ) {
                            t(C, v, _, _);
                            break;
                          }
                      }
                      S.count > 0 && u.push(S);
                    } else S.count > 0 && u.push(S);
                  }
                o.itemGroups = u;
              }
            }
          },
        },
        {
          removeMarkedHeaderItems: function () {
            for (; n.length > 0; ) {
              var e = n.pop(),
                t = e.set,
                i = e.headerSet,
                r = e.item;
              i.remove(r), (t._requiresFilter = !0);
            }
          },
          setInfiniteScrollBuffer: function (e) {
            s_infiniteScrollBuffer = e;
          },
        }
      );
    })();
  }),
  define("skydriveitem", ["skydriveitemset"], function () {
    !(function () {
      function e(e, i) {
        var n = e.parentKey,
          r = e.key,
          a = e.snippet,
          o = e.highlights,
          s = e.directlyShared,
          l = {};
        t(l, e.keyParts, 1),
          t(e, i, 1),
          delete e.partialData,
          (e.parentKey = n),
          (e.key = r),
          (e.keyParts = l),
          (e.snippet = a),
          (e.highlights = o),
          (e.directlyShared = s);
      }
      function t(e, i, n) {
        for (var r in i) {
          var a = i[r];
          if (a && "object" == typeof a && !Object.isArray(a) && n > 0) {
            var o = (e[r] = e[r] || {});
            t(o, a, n - 1);
          } else e[r] = a;
        }
      }
      function i(e) {
        if (Q && e)
          for (var t = 0; t < Q.length; t++) if (e.id === Q[t].id) return !1;
        return !0;
      }
      function n(e, t) {
        if ("shared" == t.qt) {
          if (!Q && (Q = l.getLocalValue(p))) {
            for (var n = new Date(), r = 0; r < Q.length; r++) {
              var a = Q[r];
              new Date(a.expire) < n && (Q.splice(r, 1), r--);
            }
            l.setLocalValue(p, Q);
          }
          e.setFilter("abdicatedItems", i);
        }
      }
      function r(e) {
        var t = e.folder;
        t &&
          ((t.covers = t.covers || null),
          (t.hasSubfolders = !!t.hasSubfolders)),
          (e.isProcessingVideo = e.isProcessingVideo || !1);
      }
      function a(e, t) {
        var i = o.JSONConstants.FilterType,
          n = e.totalCount,
          r = o.SkyDriveItem.getSetKeyParts(t),
          a = r ? r.ft : "";
        return (
          a == i.AllFolders
            ? (n =
                void 0 !== e.folderCount
                  ? e.folderCount
                  : e.hasSubfolders
                  ? 1
                  : 0)
            : a == i.PhotosAndVideos &&
              void 0 !== e.photoCount &&
              (n = e.photoCount),
          void 0 !== n ? n : 1
        );
      }
      var o = wLive.Core,
        s = (o.AleHelpers.getPCString, o.AleHelpers.getString),
        l = window.BrowserStorage,
        d = "SkyDriveItem",
        u = "root",
        c = "default",
        h = "NonEmptyDocumentFolder",
        m = wLive.Core.AleHelpers.getPCString("SkyDriveProductName"),
        g = 0,
        f = "SkyDriveItem",
        p = "SkyDrive.AbdicatedItems",
        v = "SkyDrive.RecycledItems",
        y = "shared",
        C = "sharedby",
        S = "allmyphotos",
        b = "search",
        _ = "mru",
        k = "recyclebin",
        w = s("DocsSharedWithMe"),
        I = s("RecentDocuments"),
        x = s("RecycleBin"),
        D = s("SharedWithGroup"),
        T = s("SearchResults"),
        A = s("SharedLandingPage"),
        P = s("AllMyPhotosLandingPage"),
        E = s("AllFilesRootTitle"),
        B = s("AllFilesVisitorRootTitle"),
        R = 0,
        M = "rd,1",
        F = 12e4,
        L = 36e7,
        U = {},
        V = {},
        N = null,
        Q = null,
        q = "f",
        O = "p",
        H = "r",
        $ = "h",
        j = "s",
        z = "d",
        W = "b",
        G = "y";
      defineClass(
        "wLive.Core.SkyDriveItem",
        function (e, t, i, n) {
          t == i && (i = null);
          var r = this;
          (r.instance = g++),
            (r._dataModel = e),
            (r.key = t),
            (r.specialFolderKey = n),
            (r.keyParts = o.SkyDriveItem.getItemKeyParts(t)),
            (r.parentKey = i),
            (r.id = r.keyParts.id),
            (r.did = r.keyParts.did),
            (r.documentFormat = wLive.Core.SkyDriveItem.DocumentFormat.Default),
            (r.name = r._getNameForItem(r.keyParts));
        },
        {
          __isObservable: !0,
          commands: null,
          parentId: null,
          ghostId: null,
          modifiedDate: -1,
          name: null,
          extension: null,
          orderedFriendlyName: null,
          ownerName: null,
          ownerCid: null,
          resourcePartitionCid: null,
          iconType: null,
          isUnknownFileType: !1,
          folder: null,
          sharingLevel: null,
          group: null,
          groupFolderType: 0,
          hasPendingGroupJoinRequest: null,
          userInvitedToGroupOnDifferentEmail: null,
          userRole: null,
          partialData: null,
          hasMoreResults: null,
          neverExpires: null,
          estimatedResultCount: null,
          maxReturnableResultCount: null,
          directlyShared: null,
          snippet: null,
          sharingRootResourceId: null,
          highlights: null,
          textEditorMimeType: null,
          tokenNeedsRedeeming: !1,
          photo: null,
          video: null,
          ocr: null,
          tags: null,
          downloadUrl: null,
          downloadUrlTimestamp: 0,
          quotaRemaining: 0,
          recycledSharedItemInfo: null,
          thumbnailSet: null,
          isAlbum: !1,
          _isLoadingItem: !1,
          _missingName: !0,
          _expirationDate: 0,
          _isNewFolder: !1,
          _childSets: null,
          _headerItemsSet: null,
          _dataContext: null,
          _version: 0,
          processItem: function (e) {
            var i = this,
              n = !1;
            if (
              ((this._isNewFolder = !1),
              void 0 === e.modifiedDate ||
                e.modifiedDate >= i.modifiedDate ||
                this.parentId != e.parentId)
            ) {
              if ((r(e), this.parentKey && this.parentId != e.parentId)) {
                var a = o.SkyDriveItem.getItemKeyParts(this.parentKey),
                  s = o.SkyDriveItem.getItemKey(
                    this.parentId,
                    a.cid,
                    a.group,
                    null,
                    null,
                    a.q,
                    a.sft
                  );
                s == this.parentKey &&
                  (this.parentKey = o.SkyDriveItem.getItemKey(
                    e.parentId,
                    a.cid,
                    a.group,
                    a.qt,
                    a.did,
                    a.q,
                    a.sft
                  ));
              }
              var l = o.GroupFolderType.None;
              e.groupFolderType &&
                (l =
                  "OriginalSyncRoot" == e.groupFolderType
                    ? o.GroupFolderType.OriginalSyncRoot
                    : "MountPoint" == e.groupFolderType
                    ? o.GroupFolderType.MountPoint
                    : o.GroupFolderType.None);
              var d = this.folder ? this.folder.totalCount : -1,
                u =
                  l == o.GroupFolderType.MountPoint &&
                  !!e.folder &&
                  !e.folder.totalCount,
                m = e.folder && !u ? e.folder.totalCount : -1;
              (e.modifiedDate != i.modifiedDate ||
                m != d ||
                e.sharingLevel != i.sharingLevel ||
                (e.ocr &&
                  (!i.ocr || e.ocr.engineVersion != i.ocr.engineVersion)) ||
                (e.quotaRemaining && e.quotaRemaining != i.quotaRemaining)) &&
                (i._version++, (n = !0));
              var g = null;
              e.folder && ((g = e.folder.children), delete e.folder.children),
                t(i, e, 1),
                (i.groupFolderType = l),
                g && (e.folder.children = g),
                e.folder &&
                  (!i._childSets && (i._childSets = {}),
                  !i._headerItemsSet &&
                    (i._headerItemsSet = new Shared.ItemSet())),
                (i.itemStatus = e.itemStatus || 0),
                i.folder && (i.folder.totalCount = m),
                (i._missingName = !e.name),
                (i.name = i._getNameForItem(i.keyParts)),
                (i.parentId = e.parentId),
                (i.resourcePartitionCid = e.resourcePartitionCid
                  ? e.resourcePartitionCid
                  : ""),
                e.sharingRootResourceId &&
                  (i.sharingRootResourceId = e.sharingRootResourceId);
              var f = i.isViewerOwner();
              if (
                (!i.ownerName &&
                  (i.ownerName = f ? FilesConfig.userDisplayName : ""),
                !i.ownerCid && (i.ownerCid = i.keyParts.cid),
                !i.iconType && (i.iconType = e.folder ? h : c),
                (i.isUnknownFileType =
                  o.StringHelpers.caseInsensitiveStringEquals(i.iconType, c)),
                e.docFormat &&
                  1 == e.docFormat &&
                  (i.documentFormat = o.SkyDriveItem.DocumentFormat.ODF),
                i.thumbnailSet && i.thumbnailSet.thumbnails)
              ) {
                var p = !!FilesConfig.thumbnailCropEnabled;
                if (i.photo && !p)
                  i.thumbnailSet.size = {
                    width: i.photo.width,
                    height: i.photo.height,
                  };
                else
                  for (var v = 0; v < i.thumbnailSet.thumbnails.length; v++) {
                    var y = i.thumbnailSet.thumbnails[v];
                    if ("scaled2560" == y.name) {
                      i.thumbnailSet.size = {
                        width: y.width,
                        height: y.height,
                      };
                      break;
                    }
                  }
              }
            }
            (i._commands = null),
              i.did && (i.commands = M + (i.commands ? "," + i.commands : "")),
              i.isAlbum &&
                (i.commands = "de,1" + (i.commands ? "," + i.commands : ""));
            var C = i.neverExpires ? L : F;
            return (i._expirationDate = new Date().getTime() + C), n;
          },
          updateItemProperties: function (e, t, i, n) {
            var r = this;
            r._dataModel.updateItemProperties(r, e, t, i, n);
          },
          updateItemProperty: function (e, t, i, n, r, a) {
            var o = this;
            this._isNewFolder && "name" == e
              ? ((o.name = (t || "").trim()),
                o.invalidate(),
                o._dataModel.createSubfolder(
                  o.getParent(),
                  o.name,
                  null,
                  i,
                  n,
                  o
                ))
              : o._dataModel.updateItemProperty(o, e, t, i, n, r, a);
          },
          updateTags: function (e, t, i, n, r) {
            var a = this;
            a._dataModel.updateTags(a, e, t, i, n, r);
          },
          createSubFolder: function (e, t, i, n) {
            var r = this;
            r._dataModel.createSubfolder(r, e, t, i, n);
          },
          getExtendedInfo: function (e, t, i) {
            var n;
            switch (i) {
              case o.SkyDriveItem.ExtendedProperty.MoSkyDocProperties:
                n = "&with=davUrl,mimetype";
                break;
              case o.SkyDriveItem.ExtendedProperty.QuotaInfo:
                n = "";
            }
            this._dataModel.fetchItem(
              this.key,
              o.SkyDriveItem.getSetKey(),
              null,
              0,
              !0,
              this.modifiedDate,
              e,
              t,
              0,
              n
            );
          },
          hasExpired: function () {
            return this._expirationDate < new Date().getTime();
          },
          getVersion: function () {
            return this._version;
          },
          getDisplayName: function (e, t) {
            var i = this,
              n = i.name;
            if (e && !i.parentKey)
              if (i.did) {
                var r = e.deviceItemSet.getByKey(i.did.toLowerCase());
                n = r ? r.name : "";
              } else
                n = i.isQt("search")
                  ? s("SearchResults").format(i.getSearchQuery())
                  : i.isQt("recyclebin")
                  ? s("RecycleBinLowerCase")
                  : i.isQt("sharedby")
                  ? s("SharedLandingPage")
                  : i.ownerName && (i.isViewerOwner() || i.isViewerCoOwner())
                  ? i.orderedFriendlyName && i.isViewerOwner()
                    ? s("UsersSkyDrive").format(i.orderedFriendlyName)
                    : s("UsersSkyDrive").format(i.ownerName)
                  : m;
            else {
              var a = i.extension;
              (i.isUnknownFileType || i.textEditorMimeType || t) &&
                a &&
                (n += a);
            }
            return n;
          },
          getJsonApiCommandActionIndex: function (e) {
            return wLive.Core.SkyDriveItem.getJsonApiCommandActionIndex(
              this,
              e
            );
          },
          isViewerOwner: function () {
            var e = this;
            return (
              !e.ownerCid ||
              e.ownerCid.toLowerCase() == FilesConfig.hcid.toLowerCase()
            );
          },
          isViewerCoOwner: function () {
            return (
              4 === this.userRole ||
              (FilesConfig.isUserInGfRamp && 1 === this.userRole)
            );
          },
          doesViewerHaveEditAccess: function () {
            var e = this;
            return 1 === e.userRole || e.isViewerCoOwner() || e.isViewerOwner();
          },
          getUploadUrlCid: function () {
            var e = this;
            return e.resourcePartitionCid ? e.resourcePartitionCid : e.ownerCid;
          },
          hasPendingRequests: function () {
            return this._dataModel.hasPendingRequests(this.key);
          },
          isLoading: function () {
            return this._isLoadingItem;
          },
          isWebPlayableVideo: function () {
            return !!this.video;
          },
          isQt: function (e) {
            return o.StringHelpers.caseInsensitiveStringEquals(
              this.keyParts.qt,
              e
            );
          },
          isParQt: function (e) {
            return o.StringHelpers.caseInsensitiveStringEquals(
              this.keyParts.parQt,
              e
            );
          },
          getSearchQuery: function () {
            return this.keyParts.q || "";
          },
          extendPartialData: function (t) {
            var i = this,
              n = o.SkyDriveItem.getItemKeyParts(i.key),
              r = o.SkyDriveItem.getItemKey(
                n.id,
                n.cid,
                parseInt(n.group),
                void 0,
                n.did,
                void 0,
                void 0
              ),
              a = i._dataModel.getItem(r, !0),
              s = i._dataModel.getItem(i.key, !0);
            a && !a.hasExpired() && s && !s.hasExpired()
              ? (e(i, a), t(i))
              : i._dataModel.fetchItem(
                  r,
                  o.SkyDriveItem.getSetKey("0"),
                  null,
                  0,
                  !1,
                  i.modifiedDate,
                  function (n) {
                    e(i, n), t(i);
                  }
                );
          },
          getParent: function (e) {
            var t = this;
            return t.parentKey ? t._dataModel.getItem(t.parentKey, e) : null;
          },
          getChildren: function (e) {
            var t = this,
              i = this._childSets,
              r = null;
            if (i) {
              if (
                ((e = e || N),
                t.isQt("shared") ||
                  t.isQt("sharedby") ||
                  t.isParQt("sharedby") ||
                  t.isQt("allmyphotos") ||
                  t.isParQt("allmyphotos"))
              ) {
                var s = o.SkyDriveItem.getSetKeyParts(e);
                e = o.SkyDriveItem.getSetKey(
                  s.sb,
                  null,
                  s.ft,
                  "0",
                  s.sd,
                  s.tagFilter
                );
              }
              if (((r = i[e]), !r)) {
                var l = o.SkyDriveItem.getSetKeyParts(e);
                for (var d in i) {
                  var u = o.SkyDriveItem.getSetKeyParts(d),
                    c = i[d];
                  if (
                    l.ft === u.ft &&
                    l.tagFilter === u.tagFilter &&
                    u.sb === l.sb &&
                    u.sd === l.sd &&
                    c.isComplete() &&
                    1 == c.getCount()
                  ) {
                    (r = i[e] = c.clone()),
                      (r._setKey = e),
                      (r.setKeyParts = $Utility.deserialize(e, "&", !1, !1));
                    break;
                  }
                }
                r ||
                  ((r = i[e] =
                    new SkyDrive.Core.SkyDriveItemSet(t._dataModel, t.key, e)),
                  (l &&
                    l.ft &&
                    l.ft === o.JSONConstants.FilterType.PhotosAndVideos) ||
                    r.setHeaderItemsSet(t._headerItemsSet),
                  n(r, this.keyParts));
              }
              "-1" == r.modifiedDate && r.setCount(a(t.folder, e));
            }
            return r;
          },
          remove: function () {
            raiseEvent(this, "removeItem", this);
          },
          setVisibility: function (e) {
            var t = this;
            (t.isVisible = e), change(this);
          },
          getVisibility: function () {
            var e = this;
            return void 0 === e.isVisible || e.isVisible;
          },
          clearRotationState: function () {
            (this.rotationState = null), this.invalidate(!0);
          },
          getRotationState: function (e) {
            var t = this;
            return e ? t.rotationState : t.rotationState || 0;
          },
          rotateClockwise: function (e) {
            (this.rotationState = ((this.rotationState || 0) + e) % 4),
              this.invalidate(!0);
          },
          invalidate: function (e) {
            var t = this;
            Trace.log(
              "Item invalidating (name: " +
                this.name +
                ", suppressVersionIncrement: " +
                e +
                ")",
              d
            ),
              e || t._version++;
            var i = t;
            for (change(this); i; )
              t._dataModel._fireDataChanged(i), (i = i.getParent(!0));
          },
          expire: function (e, t) {
            var i = this;
            if (
              (-1 != i._expirationDate &&
                (Trace.log(
                  "Item expiring (name: " +
                    this.name +
                    ", expireAncestors: " +
                    e +
                    ", suppressAbort: " +
                    t +
                    ")",
                  d
                ),
                (i._expirationDate = -1),
                i._dataModel.setItemVersion(i.key)),
              e)
            ) {
              var n = i.getParent(!0);
              n && n.expire(!0, t);
            }
            t || i._dataModel.abortPendingRequests(i.key);
          },
          getHasSubfolders: function () {
            var e = this.folder && this.folder.hasSubfolders,
              t =
                this.ghostId &&
                this.folder &&
                (void 0 !== this.folder.childCount
                  ? this.folder.childCount > 0
                  : this.folder.totalCount > 0);
            return (
              e ||
              (this._headerItemsSet && this._headerItemsSet.getCount() > 0) ||
              t
            );
          },
          createPinnedSubfolder: function () {
            var e = this,
              t = null;
            if (e._headerItemsSet) {
              var i = "NewFolder" + R++;
              (t = new o.SkyDriveItem(
                this._dataModel,
                o.SkyDriveItem.getItemKey(i),
                this.key
              )),
                t.processItem({
                  folder: { totalCount: 0, childCount: 0 },
                  name: FilesConfig.defaultFolderString,
                  commands: "rn,1",
                  group: e.group,
                  cid: e.ownerCid,
                  ownerName: e.ownerName,
                  sharingLevel: e.sharingLevel,
                  _isNewFolder: !0,
                }),
                Trace.log("Creating a pinned subfolder under: " + this.key, f),
                e._headerItemsSet.insert(0, t),
                e._headerItemsSet.invalidate();
            }
            return t;
          },
          removePinnedSubfolder: function (e) {
            var t = this,
              i = t._headerItemsSet;
            i && (i.remove(e), i.invalidate());
          },
          updatePinnedSubfolderKey: function (e) {
            var t = this,
              i = !1;
            if (t._headerItemsSet) {
              var n = t._headerItemsSet.indexOf(e);
              n >= 0 &&
                (t._headerItemsSet.remove(e),
                (e.key = o.SkyDriveItem.getItemKey(
                  e.id,
                  e.ownerCid,
                  e.group,
                  null,
                  null
                )),
                (e.keyParts = o.SkyDriveItem.getItemKeyParts(e.key)),
                e.clearItemSets(),
                t._headerItemsSet.insert(n, e),
                t._headerItemsSet.invalidate(),
                (i = !0));
            }
            i ||
              ((e.key = o.SkyDriveItem.getItemKey(
                e.id,
                e.ownerCid,
                e.group,
                null,
                null
              )),
              (e.keyParts = o.SkyDriveItem.getItemKeyParts(e.key)),
              e.clearItemSets());
          },
          clearItemSets: function () {
            var e = this;
            if (null !== e._childSets) {
              for (var t in e._childSets) e._childSets[t].clear();
              e._childSets = {};
            }
          },
          getDevice: function () {
            var e = this,
              t = null;
            if (e.keyParts.did) {
              var i = o.ViewContext.getInstance().deviceItemSet;
              t = i.getByKey(e.keyParts.did.toLowerCase());
            }
            return t;
          },
          getDeviceBaseUrl: function () {
            var e = this,
              t = null,
              i = e.getDevice();
            return i && (t = i.baseUrl), t || FilesConfig.devicesBaseUrl;
          },
          getViewCategory: function () {
            return wLive.Core.SkyDriveItem.getViewCategory(this);
          },
          _getNameForItem: function (e) {
            var t = this,
              i = t.name || "",
              n = "1" == e.group;
            if (t.id == u && t._missingName) {
              var r = e.qt;
              if (e.did) {
                var a = t.getDevice();
                i = a ? a.name : "";
              } else if (r === y) i = n ? D : w;
              else if (r === C) i = A;
              else if (r === S) i = P;
              else if (r === b) i = T.format(t.getSearchQuery());
              else if (n) i = t.ownerName || "";
              else if (r === _) i = I;
              else if (r === k && FilesConfig.recycleBinEnabled) i = x;
              else {
                var s =
                  t.checkForName &&
                  t.checkForName(t, o.ViewContext.getInstance());
                if (s) i = s;
                else if (!this.parentKey && !this._isLoadingItem) {
                  var l =
                    this.ownerCid &&
                    this.ownerCid.toLowerCase() ==
                      FilesConfig.hcid.toLowerCase();
                  i = l ? E : this.ownerName ? B.format(this.ownerName) : "";
                }
              }
            }
            return i;
          },
        },
        {
          getJsonApiCommandActionIndex: function (e, t) {
            var i = null;
            if (e && e.commands) {
              if (!e._commands) {
                var n = e.commands.split(",");
                e._commands = {};
                for (var r = 0; r < n.length; r += 2)
                  e._commands[n[r]] = n[r + 1];
              }
              i = e._commands[t];
            }
            return i;
          },
          getItemKey: function (e, t, i, n, r, a, o, s, l) {
            return this.getItemKeyFromObject({
              id: e,
              ownerCid: t,
              isGroup: i,
              queryType: n,
              deviceId: r,
              searchQuery: a,
              searchFilterType: o,
              internalPath: s,
              rif: l,
            });
          },
          getItemKeyFromObject: function (e) {
            var t = {
              id: e.id || u,
              cid: (e.ownerCid || "" + FilesConfig.hcid).toLowerCase(),
              group: Number(e.isGroup) ? "1" : "0",
              qt: (e.queryType || "").toLowerCase(),
              did: e.deviceId || "",
              q: e.searchQuery || "",
              sft: e.searchFilterType || "",
              beginDate: e.beginDate || "",
              endDate: e.endDate || "",
              highlights: e.highlights || "",
              internalPath: e.internalPath || "",
              rif: e.rif,
            };
            t.did || (t.id = t.id.toLowerCase()),
              void 0 === t.rif && (t.rif = this.getRecycledFilter(t));
            var i =
              "id=" +
              t.id.encodeUrl() +
              "&cid=" +
              t.cid.encodeUrl() +
              "&group=" +
              t.group.encodeUrl() +
              "&qt=" +
              t.qt.encodeUrl() +
              "&rif=" +
              t.rif.encodeUrl();
            return (
              t.did && (i += "&did=" + t.did.encodeUrl()),
              t.q && (i += "&q=" + t.q.encodeUrl()),
              t.sft && (i += "&sft=" + t.sft.encodeUrl()),
              t.beginDate && (i += "&beginDate=" + t.beginDate.encodeUrl()),
              t.endDate && (i += "&endDate=" + t.endDate.encodeUrl()),
              t.highlights && (i += "&highlights=" + t.highlights.encodeUrl()),
              t.internalPath &&
                (i += "&internalPath=" + t.internalPath.encodeUrl()),
              (U[i] = t),
              i
            );
          },
          getItemKeyParts: function (e) {
            var t = U[e];
            if (!t) {
              var i = $Utility.deserialize(e, "&", !1, !1);
              o.SkyDriveItem.getItemKey(
                i.id,
                i.cid,
                parseInt(i.group),
                i.qt,
                i.did,
                i.q,
                i.sft,
                i.internalPath,
                i.rif
              ),
                (t = U[e]);
            }
            return t;
          },
          getSetKey: function (e, t, i, n, r, a) {
            var o = V[N] || {},
              s = e || o.sb || "0",
              l = null !== t && void 0 !== t,
              d = l ? t : o.sr,
              u = Number(d) ? "1" : "0",
              c = String(i || "");
            (n = n || "0,1,2"), (r = r || "0");
            var h =
              "ft=" +
              c.encodeUrl() +
              "&sb=" +
              s.encodeUrl() +
              (l ? "&sr=" + u : "") +
              (l ? "" : "&sd=" + r) +
              "&gb=" +
              n.encodeUrl();
            return (
              a && (h += "&tagFilter=" + a.encodeUrl()),
              (V[h] = { ft: c, sb: s, gb: n }),
              l ? (V[h].sr = d) : (V[h].sd = r),
              a && (V[h].tagFilter = a),
              h
            );
          },
          getSetKeyParts: function (e) {
            return (e = e || N), V[e];
          },
          setDefaultSetKey: function (e) {
            N = e;
          },
          getDefaultSetKey: function () {
            return N;
          },
          areItemsSame: function (e, t, i) {
            if (e && t) {
              var n =
                !i ||
                (e.commands === t.commands && e.name === t.name && !t.error);
              return (
                e.key === t.key &&
                e.modifiedDate === t.modifiedDate &&
                e._isLoadingItem === t._isLoadingItem &&
                n
              );
            }
            return !e && !t;
          },
          isFolderWithCovers: function (e) {
            return e && e.folder && e.folder.covers;
          },
          getRecycledFilter: function (e) {
            var t = "0";
            if (FilesConfig.showRecycledItemsMenu) {
              var i = FilesConfig.hcid.toLowerCase(),
                n = e.cid.toLowerCase(),
                r = wLive.Core.SkyDriveItemHelper.parseCidFromItemId(
                  e.id.toLowerCase()
                ),
                a = i === n && (!r || i === r);
              t = (a && l.getSessionValue(v)) || "0";
            }
            return t;
          },
          setRecycledFilter: function (e) {
            l.setSessionValue(v, e);
          },
          DocumentFormat: { Default: 0, ODF: 1 },
          ExtendedProperty: { Default: 0, MoSkyDocProperties: 1, QuotaInfo: 2 },
          getViewCategory: function (e) {
            var t = q;
            return (
              e &&
                e.folder &&
                (1 === e.folder.category
                  ? (t = O)
                  : "mru" === e.keyParts.qt
                  ? (t = H)
                  : "shared" === e.keyParts.qt
                  ? (t = $)
                  : "search" === e.keyParts.qt
                  ? (t = j)
                  : "recyclebin" === e.keyParts.qt
                  ? (t = W)
                  : "sharedby" === e.keyParts.qt
                  ? (t = G)
                  : e.did && (t = z)),
              t
            );
          },
          ViewCategories: {
            DefaultFolder: q,
            PhotoFolder: O,
            RecentDocs: H,
            Shared: $,
            Search: j,
            Devices: z,
            RecycleBin: W,
            SharedBy: G,
          },
        }
      ),
        (o.ClientSortableFields = { 2: !0, 3: !0, 4: !0 }),
        (o.QuotaStatus = { Normal: 0, Nearing: 1, Exceeded: 2 }),
        (o.ItemStatus = { Active: 0, Restricted: 1, RestrictedICN: 2 }),
        (o.ReviewState = {
          NotReviewed: 0,
          AutoReviewed: 1,
          AgentReviewed: 2,
          Challenged: 3,
          ChallengeReviewed: 4,
        }),
        (o.GroupFolderType = { None: 0, OriginalSyncRoot: 1, MountPoint: 2 }),
        (o.ThumbnailCropMode = { Center: 0, Fit: 1 }),
        (N = o.SkyDriveItem.getSetKey());
    })();
  }),
  define("deviceitem", ["skydriveitem"], function () {
    !(function () {
      defineClass(
        "wLive.Core.DeviceItem",
        function (e) {
          this.processItem(e);
        },
        {
          __isObservable: !0,
          processItem: function (e) {
            var t = this;
            (t.isVisible = !0),
              jQuery.extend(t, e),
              (t.id = "root"),
              (t.folder = {}),
              (t.commands = "defc,1"),
              (t.baseUrl = null);
          },
          setVisibility: function (e) {
            (this.isVisible = e), change(this);
          },
          isQt: function (e) {
            return !1;
          },
          getJsonApiCommandActionIndex:
            wLive.Core.SkyDriveItem.prototype.getJsonApiCommandActionIndex,
        },
        {
          hasNewBaseUrlError: function (e, t) {
            var i = !1;
            if ((!e || e.isRetriable) && t) {
              var n = wLive.Core.ViewContext.getInstance().deviceItemSet,
                r = n.getByKey(t.toLowerCase());
              r && ((r.baseUrl = null), (i = !0));
            }
            return i;
          },
        }
      );
    })();
  }),
  define("deviceitemset", ["deviceitem"], function () {
    !(function () {
      function e() {
        d || ((d = !0), l.callerCid && t());
      }
      function t() {
        var e = new n.DataRequest(
          s,
          s,
          null,
          function (e) {
            Trace.log(
              "DeviceItemSet.js getDevices() successCallback - devices count: " +
                (e.devices ? e.devices.length : "no devices returned"),
              a
            ),
              e.devices && i(e);
          },
          function () {
            i(null);
          }
        );
        (e.apiId = "SkyDrive_Json_GetDevices"),
          (e.propertyId = "SkyDrive"),
          e.start();
      }
      function i(e) {
        if ((Trace.log("DeviceItemSet.js parseResponse()", a), !e || e.error))
          c > 0 && (c--, t());
        else {
          var i = e.devices || [];
          h = [];
          for (var n = 0; n < i.length; n++) {
            var r = i[n];
            (r.key = r.did.toLowerCase()), h.push(new wLive.Core.DeviceItem(r));
          }
          change(wLive.Core.DeviceItemSet);
        }
      }
      var n = wLive.Core,
        r = n.AleHelpers.getPCString,
        a = "DeviceItemSet",
        o = "DeleteRemove.Device",
        s = FilesConfig.baseApiUrl + "GetDevices",
        l = n.ViewContext.getInstance(),
        d = !1,
        u = 3,
        c = u,
        h = null,
        m = Shared.ItemSet.prototype;
      defineSubClass(
        "wLive.Core.DeviceItemSet",
        Shared.ItemSet,
        function () {
          var t = this;
          (t._onLoadCallbacks = []),
            e(),
            h && ((t.isLoaded = !0), t.load(h)),
            t.addChangeListener(wLive.Core.DeviceItemSet, function () {
              (t.isLoaded = !0), t.load(h), t.invalidate();
            });
        },
        {
          isLoaded: !1,
          waitForLoad: function (e) {
            var t = this;
            t.isLoaded ? e.apply(t) : t._onLoadCallbacks.push(e);
          },
          load: function (e, t, i) {
            var n = this;
            if (n._onLoadCallbacks && n._onLoadCallbacks.length) {
              for (var r = 0; r < n._onLoadCallbacks.length; r++)
                n._onLoadCallbacks[r].apply(n);
              n._onLoadCallbacks = [];
            }
            Shared.ItemSet.prototype.load.apply(n, arguments);
          },
          remove: function (e) {
            var t = this,
              i = FilesConfig.baseApiUrl + "RemoveDevice";
            $BSI.reportEvent(o, {});
            var a = n.ViewContext.getInstance();
            e.setVisibility(!1),
              $BSI.navigateTo("#cid=" + FilesConfig.hcid.encodeUrl());
            var s = { did: e.did },
              l = new n.DataRequest(
                i,
                i,
                Object.toJSON(s),
                function (i) {
                  m.remove.call(t, e);
                  var n = jQuery(
                    "<span>" +
                      r("RemoveDevice.SuccessNotification")
                        .format(e.name)
                        .encodeHtml() +
                      "</span>"
                  );
                  sutra(n, "$Sutra.SkyDrive.RemoveDeviceSuccess"),
                    a.errorManager.add({ $element: n, priority: 1, type: 2 });
                },
                function (t) {
                  e.setVisibility(!0);
                  var i = jQuery(
                    "<span>" +
                      r("RemoveDevice.ErrorNotification")
                        .format(e.name)
                        .encodeHtml() +
                      "</span>"
                  );
                  sutra(i, "$Sutra.SkyDrive.RemoveDeviceError"),
                    a.errorManager.add({
                      $element: i,
                      priority: 0,
                      type: 0,
                      code: "deviceRemove",
                    });
                }
              );
            (l.apiId = "SkyDrive_Json_RemoveDevice"),
              (l.propertyId = "SkyDrive"),
              l.start();
          },
        }
      );
    })();
  }),
  define("groupinfo", ["deviceitemset"], function () {
    !(function () {
      function e(e, t) {
        var v = this,
          y = $Utility.deserialize(t, "&", !1, !1),
          C = (e.displayName, e.email),
          S = e.membershipState,
          b = e.permissions,
          _ = e.membership,
          k = y.cid;
        (v.emailHtml = function () {
          var e;
          if (C && C !== a) {
            var t = s.format(C.encodeUrl());
            e = n.format(t.encodeHtmlAttribute(), C.encodeHtmlAttribute());
            var i = jQuery(e);
            i.click(p(null, "EG", o)), (e = i);
          } else if (S && S > 5) {
            var r = g.format(k);
            e =
              h +
              '<br /><a href="' +
              r.encodeHtmlAttribute() +
              '">' +
              m +
              "</a>";
          }
          return e;
        }),
          (v.emailTitle = function () {
            return C;
          }),
          (v.emailHistoryHtml = function () {
            var e;
            if (C && C !== a) {
              var t = u.format(C.encodeUrl());
              e = n.format(t.encodeHtmlAttribute(), c);
              var i = jQuery(e);
              i.click(p(null, "VGE", o)), (e = i);
            }
            return e;
          }),
          (v.membershipHtml = function () {
            var e;
            return S && S > 3 && (e = i(r + ".Membership" + S)), e;
          }),
          (v.permissionsHtml = function () {
            var e;
            return null != b && (e = i(r + ".Permissions" + b)), e;
          }),
          (v.groupOptionsLink = function () {
            var e;
            if (S && S > 4) {
              var t = l.format(k);
              e = n.format(t.encodeHtmlAttribute(), d);
              var i = jQuery(e);
              i.click(p(null, "VGO", o)), (e = i);
            }
            return e;
          }),
          (v.canInvite = function () {
            return S && S > 5;
          }),
          (v.groupMembership = function () {
            return _;
          }),
          (v.membershipPageLink = function (e) {
            var t = f.format(k);
            return n.format(t.encodeHtmlAttribute(), e);
          });
      }
      var t = wLive.Core,
        i = t.AleHelpers.getPCString,
        n = '<a href="{0}">{1}</a>',
        r = "GroupInfo",
        a = "",
        o = "IP",
        s = FilesConfig.groupMailUrl,
        l = "/cid-{0}/GroupOptions",
        d = i(r + ".ViewGroupOptions"),
        u = FilesConfig.groupMailSearchUrl,
        c = i(r + ".ViewEmail"),
        h = i(r + ".EmailTurnedOff"),
        m = i(r + ".TurnOnEmailLinkText"),
        g = l + "/email",
        f = "/cid-{0}/Groupmembership/",
        p = t.BiciHelpers.prependBiciReportClickAction;
      t.GroupInfo = e;
    })();
  }),
  define("skydriveitemhelper", ["groupinfo"], function () {
    !(function () {
      function e(e) {
        var i = t(e, "qt");
        return i && "" !== i;
      }
      function t(e, t) {
        return e
          ? (e.keyParts ||
              (e.keyParts = $Utility.deserialize(e.key, "&", !1, !1)),
            e.keyParts[t])
          : void 0;
      }
      function i(e, t, i, r) {
        var a = mix({}, e);
        r = r || n.ThumbnailCropMode.Center;
        var o,
          s,
          l,
          d = Math.round(Math.min(e.width, t)),
          u = Math.round(Math.min(e.height, i));
        if (r === n.ThumbnailCropMode.Center)
          (o = d), (s = u), (l = "&cropMode=center");
        else {
          var c = e.width / e.height,
            h = d / u;
          c > h ? ((o = d), (s = d / c)) : ((o = u * c), (s = u)), (l = "");
        }
        return (
          mix(a, {
            url:
              e.url.replace("http:", "https:") +
              (e.url.indexOf("?") > -1 ? "&" : "?") +
              "width=" +
              d +
              "&height=" +
              u +
              l,
            width: o,
            height: s,
          }),
          a
        );
      }
      var n = wLive.Core,
        r = n.JSONConstants,
        a = r.SharingLevel,
        o = n.AleHelpers.getPCString,
        s = n.AleHelpers.getSkyString,
        l = n.AleHelpers.getString,
        d = "SkyDriveItemHelper";
      Trace.register(d, { isEnabled: !1 });
      var u = "",
        c = ":",
        h = 1e3,
        m = 6e4,
        g = 36e5,
        f = "lastModifierName",
        p = 1,
        v = new RegExp(r.InvalidNameRegEx),
        y = "root",
        C = "photomail_",
        S = o("SkyDriveProductName"),
        b = l("UsersSkyDrive"),
        _ = "Doc",
        k = "One",
        w = "Ppt",
        I = "Xls",
        x = "Vsd",
        D = "Lib",
        T = "Drive",
        A = "CDDrive",
        P = "USBDrive",
        E = "ExtDrive",
        B = "NetDrive",
        R = "ipi_",
        M = '<span class="' + R + 'arrow">{0}</span>',
        F = null,
        L = 1,
        U = 2,
        V = {
          WinDocuments: D,
          WinLibrary: D,
          WinMusic: D,
          WinPictures: D,
          WinPodcastLibrary: D,
          WinVideos: D,
          WinDrive: T,
          CDDrive: A,
          GenericDrive: T,
          UsbDrive: P,
          ExternalDrive: E,
          NetworkStorage: B,
          Accdb: "Mdb",
          Doc: _,
          Docm: _,
          Docx: _,
          Dot: _,
          Dotm: _,
          Dotx: _,
          Exe: "Exe",
          Html: "Html",
          Mdb: "Mdb",
          Mpp: "Mpp",
          Mpt: "Mpp",
          Odp: w,
          Ods: I,
          Odt: _,
          One: k,
          Onepkg: k,
          Onetoc2: k,
          Notebook: "OneNotebook",
          Pot: w,
          Potm: w,
          Potx: w,
          Ppa: w,
          Ppam: w,
          Pps: w,
          Ppsm: w,
          Ppsx: w,
          Ppt: w,
          Pptm: w,
          Pptx: w,
          Pub: "Pub",
          Rtf: "Rtf",
          Txt: "Txt",
          Vdw: x,
          Vsd: x,
          Vsdm: x,
          Vsdx: x,
          Vsl: x,
          Vss: x,
          Vssm: x,
          Vssx: x,
          Vst: x,
          Vstm: x,
          Vstx: x,
          Xaml: "Xaml",
          Xla: I,
          Xlam: I,
          Xll: I,
          Xls: I,
          Xlsb: I,
          Xlsm: I,
          Xlsx: I,
          Xlt: I,
          Xltm: I,
          Xltx: I,
          Xml: "Xml",
          Xps: "Xps",
          Xsn: "Xsn",
          Zip: "Zip",
        },
        N = {},
        Q = "PC.Sharing.EditableAttribute",
        q = "PC.Sharing.OwnedAttribute",
        O = "PC.Sharing.ViewOnlyAttribute",
        H = "PC.Sharing.PublicViewLinkTitle",
        $ = "–";
      n.SkyDriveItemHelper = {
        duration: function (e) {
          var t = u,
            i = !1;
          if (e >= g) {
            var n = Math.floor(e / g);
            (e %= g), (t += n + c), (i = !0);
          }
          var r = Math.floor(e / m);
          (e %= m), 10 > r && i && (t += "0"), (t += r + c);
          var a = Math.floor(e / h);
          return 10 > a && (t += "0"), (t += a);
        },
        getThumbnail: function (e, t) {
          var i = e.thumbnails;
          if (i)
            for (var n = i.length, r = 0; n > r; r++) {
              var a = i[r];
              if (a.name == t) return a;
            }
        },
        getPixelRatio: function () {
          if (!F) {
            var e = 1,
              t = window.devicePixelRatio,
              i = screen.deviceXDPI;
            t
              ? (e = t)
              : $B.IE && $B.Mobile
              ? (e =
                  window.screen.availWidth /
                  document.documentElement.clientWidth)
              : i && (e = i / 96),
              (F = Math.min(Math.max(e, L), U));
          }
          return F;
        },
        pickThumbnail: function (e, t, r, a, o) {
          var s = null,
            l = null,
            d = a || p,
            u = n.SkyDriveItemHelper.getPixelRatio(),
            c = t * u,
            h = r * u,
            m = c * h * d;
          if (e && e.thumbnails && e.thumbnails.length > 0)
            for (var g = 0; g < e.thumbnails.length; g++) {
              var f = e.thumbnails[g];
              "unRes" == f.name && (f = i(f, c, h, o)),
                (f.totalPixels = f.width * f.height);
              var v = (f.coverage =
                Math.min(f.width, c) * Math.min(f.height, h) * Math.max(d, 1));
              v >= m
                ? (!s || f.totalPixels < s.totalPixels) && (s = f)
                : (!l || f.totalPixels > l.totalPixels) && (l = f);
            }
          return s || l;
        },
        isHtml5DropEnabled: function (e) {
          return (
            e &&
            e.folder &&
            !e.did &&
            "mru" != e.keyParts.qt &&
            "shared" != e.keyParts.qt &&
            !("search" == e.keyParts.qt && "root" == e.id) &&
            "sharedby" != e.keyParts.qt &&
            "recyclebin" != e.keyParts.qt &&
            "allmyphotos" != e.keyParts.qt &&
            n.SkyDriveItem.getJsonApiCommandActionIndex(e, "up")
          );
        },
        isRootItem: function (e) {
          return e.id === y;
        },
        isSkyDriveRoot: function (t) {
          return (
            n.SkyDriveItemHelper.isRootItem(t) && !t.group && !t.did && !e(t)
          );
        },
        isDeviceRoot: function (e) {
          return e && n.SkyDriveItemHelper.isRootItem(e) && e.did;
        },
        isGroupRoot: function (e) {
          return (
            n.SkyDriveItemHelper.isRootItem(e) &&
            "1" === t(e, "group") &&
            null != e.ownerCid
          );
        },
        isGroupItem: function (e) {
          return "1" === t(e, "group");
        },
        isCoOwner: function (e) {
          return e && e.isViewerCoOwner();
        },
        isOwnerOrCoOwner: function (e) {
          return e && (e.isViewerOwner() || e.isViewerCoOwner());
        },
        canViewSharingInfo: function (e) {
          return (
            e &&
            e.doesViewerHaveEditAccess() &&
            !n.SkyDriveItemHelper.isAlbumRoot(e) &&
            !e.isTagsRoot
          );
        },
        isSharedLandingPageRoot: function (e) {
          return (
            e &&
            n.SkyDriveItemHelper.isRootItem(e) &&
            n.SkyDriveItemHelper.isSharedByQuery(e)
          );
        },
        isAlbumRoot: function (e) {
          return e && e.isAlbumRoot;
        },
        treatAsAlbum: function (e, t) {
          return (
            e &&
            (e.isAlbum ||
              (e.folder &&
                !e.isAlbumRoot &&
                !e.isTagsRoot &&
                !e._isLoadingItem &&
                t.viewParams &&
                "photos" == t.viewParams.v &&
                "allmyphotos" != t.viewParams.qt))
          );
        },
        isSharerFolder: function (e) {
          return e && e.isSharerFolder;
        },
        isLegacyPhotomail: function (e) {
          return e.id && e.id.startsWith(C);
        },
        isTopLevelItem: function (e) {
          if (n.SkyDriveItemHelper.isRootItem(e)) return !1;
          var t = e.getParent(!0);
          return t && n.SkyDriveItemHelper.isRootItem(t);
        },
        getTopLevelItem: function (e) {
          for (; e && !n.SkyDriveItemHelper.isTopLevelItem(e); )
            e = e.getParent(!0);
          return e;
        },
        isViewerOwner: function (e) {
          return (
            !e.ownerCid ||
            e.ownerCid.toLowerCase() == FilesConfig.hcid.toLowerCase()
          );
        },
        isMruQuery: function (e) {
          var i = t(e, "qt");
          return i && "mru" === i.toLowerCase();
        },
        isHighlightsQuery: function (e) {
          return !!t(e, "highlights");
        },
        isRecycleBinQuery: function (e) {
          var i = t(e, "qt");
          return i && "recyclebin" === i.toLowerCase();
        },
        isAllMyPhotosQuery: function (e) {
          var i = t(e, "qt");
          return !!i && "allmyphotos" === i.toLowerCase();
        },
        isAllMyPhotosDescendant: function (e) {
          var t = e && e.getParent && e.getParent(!0);
          return n.SkyDriveItemHelper.isAllMyPhotosQuery(t);
        },
        isSharedQuery: function (e) {
          var i = t(e, "qt");
          return i && "shared" === i.toLowerCase();
        },
        isSharedByQuery: function (e) {
          var i = t(e, "qt");
          return i && "sharedby" === i.toLowerCase();
        },
        isSearchQuery: function (e) {
          var i = t(e, "qt");
          return (
            i &&
            "search" === i.toLowerCase() &&
            n.SkyDriveItemHelper.isRootItem(e)
          );
        },
        isBingSearchQuery: function (e) {
          return (
            n.SkyDriveItemHelper.isSearchQuery(e) &&
            2147483647 === e.maxReturnableResultCount
          );
        },
        getSearchQuery: function (e) {
          return t(e, "q") || "";
        },
        getErrorMessageForNewItemName: function (e, t) {
          var i;
          if (e)
            if (!t && e.endsWith(".")) i = o("CantStartOrEndWithDotError");
            else {
              var n = e.match(v);
              n &&
                n.length > 1 &&
                (i = o("InvalidTextFormatError").format(
                  r.InvalidItemNameCharacters
                ));
            }
          else i = o("NameRequiredError");
          return i;
        },
        isPartOfBundle: function (e) {
          var t = e && e.getParent && e.getParent(!0);
          return t && t.isBundle;
        },
        hasExtractedTextUrl: function (e) {
          return e && e.photo && e.urls && e.urls.textContent;
        },
        hasOneNoteWebUrl: function (e) {
          return e && e.urls && e.urls.oneNoteWeb;
        },
        hasOneNoteClientUrl: function (e) {
          return e && e.urls && e.urls.oneNoteClient;
        },
        isGifOrPng: function (e) {
          return (
            e &&
            e.mimeType &&
            ("image/gif" === e.mimeType || "image/png" === e.mimeType)
          );
        },
        isRestricted: function (e) {
          return e.itemStatus && e.itemStatus > 0 && 4 != e.sharingLevelValue;
        },
        isSearchResult: function (e) {
          var t = e && e.getParent && e.getParent(!0);
          return n.SkyDriveItemHelper.isSearchQuery(t);
        },
        isSearchOrDescendent: function (e) {
          for (; e; ) {
            if (n.SkyDriveItemHelper.isSearchQuery(e)) return !0;
            e = e.getParent && e.getParent(!0);
          }
          return !1;
        },
        highlightAndEncodeField: function (e, t) {
          if (e && e[t]) {
            var i = e[t],
              r = e.highlights;
            if ("name" == t && e.internalPath) {
              var a;
              a =
                1 == e.internalPath.length
                  ? [i, e.internalPath[0]]
                  : e.internalPath.slice(0);
              for (var o = 0, s = 0; s < a.length; s++) {
                var l = a[s];
                (a[s] = n.SkyDriveItemHelper.highlightAndEncodeFieldWithValue(
                  r,
                  t,
                  l,
                  o
                )),
                  (o += l.length);
              }
              var d = n.ImageStrip.getImage(
                "chevronRightBlack",
                null,
                null
              ).outerHTML;
              return a.join(M.format(d));
            }
            return n.SkyDriveItemHelper.highlightAndEncodeFieldWithValue(
              r,
              t,
              i,
              0
            );
          }
          return "";
        },
        highlightAndEncodeFieldWithValue: function (e, t, i, n) {
          var r = i,
            a = [];
          if (e)
            for (var o = e.length - 1; o >= 0; o--) {
              var s = e[o].startIndex - n,
                l = e[o].endIndex - n;
              if (e[o].fieldName == t && s < r.length) {
                a.unshift(r.substring(l).encodeHtml());
                var d = jQuery(_ce("span"))
                  .addClass("highlight")
                  .html(r.substring(s, l).encodeHtml());
                sutra(d, "$Sutra.SkyDrive.SearchHighlight");
                var u = jQuery(_ce("span")).append(d);
                a.unshift(u.html()), (r = r.substring(0, s));
              }
            }
          return a.unshift(r.encodeHtml()), a.join("");
        },
        hasFieldHighlight: function (e, t) {
          if (e && e[t] && e.highlights)
            for (var i = e.highlights, n = 0; n < i.length; n++)
              if (i[n].fieldName == t) return !0;
          return !1;
        },
        clearFieldHighlights: function (e, t) {
          if (e && e.highlights)
            for (var i = e.highlights, n = 0; n < i.length; )
              i[n].fieldName == t ? i.splice(n, 1) : n++;
        },
        evaluateThrottleNotification: function (e, t, i) {
          for (var r = !1, a = e; a && !a.throttleRestrictions; )
            a = t.itemProvider.peekParent(a);
          if (a && !a.hasExpired() && (!N[a.ownerCid] || i)) {
            var s = a.throttleRestrictions;
            if (s)
              for (var l = s.split(","), d = 0; d < l.length; d++) {
                var u = l[d];
                if ("4" === u || "Download_Visitor" === u) {
                  (r = !0), (N[a.ownerCid] = !0);
                  var c = n.SkyDriveItemHelper.isViewerOwner(e);
                  t.errorManager.add({
                    $element: o(
                      "BandwidthThrottledNotification." +
                        (c ? "Owner" : "NonOwner")
                    ),
                    priority: 2,
                    ui: 1,
                    type: 1,
                  });
                  break;
                }
              }
          }
          return r;
        },
        getNormalizedExtension: function (e) {
          return e && V[e.iconType];
        },
        getFriendlyFileType: function (e) {
          var t = e.getVersion(),
            i = "friendlyFileTypeVersion";
          if (e[i] !== t) {
            var r = e.extension,
              a = r && r.substring(1).toUpperCase(),
              s = n.SkyDriveItemHelper.getNormalizedExtension(e),
              l = o("FileType.NoExtension");
            !s && e.folder
              ? (l = o("FileType.Folder"))
              : e.isPanorama
              ? (l = o("FileType.Panorama"))
              : e.photo && !e.video
              ? (l = o("FileType.Image")
                  .format(a || "")
                  .trim())
              : s
              ? (l = o("FileType." + s))
              : a && (l = o("FileType.Unknown").format(a)),
              (e.friendlyFileType = l),
              (e[i] = t);
          }
          return e.friendlyFileType;
        },
        getModifiedDateHtml: function (e, t, i) {
          var r = "",
            a = n.DateFactory,
            o = t.callerCid;
          if (!e._isNewFolder) {
            var s =
              e.displayModifiedDate ||
              a.getDateString(
                e.dateModifiedOnClient || e.modifiedDate,
                null,
                !1
              ) ||
              "";
            if (
              ((r =
                '<span class="modifiedDateText">' + htmlEncode(s) + "</span>"),
              o !== e.ownerCid || o !== e.lastModifierCid)
            ) {
              var l = e.lastModifierName;
              l &&
                ((l = i
                  ? n.SkyDriveItemHelper.highlightAndEncodeField(e, f)
                  : htmlEncode(l)),
                (r +=
                  '&nbsp;<span class="modifiedDateNameText">' + l + "</span>"));
            }
          }
          return r;
        },
        getCreatedDateText: function (e, t) {
          var i = "",
            r = n.DateFactory,
            a = t.callerCid;
          if (
            !e._isNewFolder &&
            ((i =
              e.displayCreationDate ||
              r.getDateString(e.creationDate, null, !1)),
            a !== e.creatorCid)
          ) {
            var o = e.creatorName;
            o && (i += " " + o);
          }
          return i;
        },
        getLocationText: function (e) {
          var t;
          if (n.SkyDriveItemHelper.isSearchResult(e)) t = e.locatedIn || S;
          else if (n.SkyDriveItemHelper.isViewerOwner(e)) {
            var i = e.getParent();
            t = !i || n.SkyDriveItemHelper.isRootItem(i) ? S : i.name;
          } else t = e.ownerName ? b.format(e.ownerName) : S;
          return t;
        },
        getOriginalLocationText: function (e) {
          var t = e.deletedFromLocation;
          return t || (t = b.format(e.ownerName)), t;
        },
        getSharedWithText: function (e) {
          var t;
          if (FilesConfig.visualUpdatesForSharedContent) {
            var i =
                void 0 === e.sharingLevelValue ||
                e.sharingLevelValue === a.Private,
              r = e.sharingLevelValue === a.Public;
            return (t = r
              ? s(H)
              : i
              ? $
              : !FilesConfig.isUserInGfRamp ||
                (e.groupFolderType != n.GroupFolderType.MountPoint &&
                  e.groupFolderType != n.GroupFolderType.OriginalSyncRoot)
              ? this.fetchDetailedSharingText(e)
              : s(Q));
          }
          if (
            ((t =
              void 0 !== e.sharingLevelValue &&
              e.sharingLevelValue !== a.Private
                ? e.sharingLevel
                : ""),
            t &&
              (e.groupFolderType == n.GroupFolderType.MountPoint ||
                e.groupFolderType == n.GroupFolderType.OriginalSyncRoot))
          ) {
            var o = s(
              FilesConfig.isUserInGfRamp
                ? "GF.Sharing.EditorAttribute"
                : "GF.Sharing.CoOwnedAttribute"
            );
            t = t + " " + o;
          }
          return t;
        },
        fetchDetailedSharingText: function (e) {
          var t;
          return (
            e.sharingLevelValue !== a.Public &&
              e.sharingLevelValue !== a.Private &&
              (t =
                e.groupFolderType == n.GroupFolderType.MountPoint
                  ? Q
                  : e.isViewerCoOwner()
                  ? Q
                  : e.isViewerOwner()
                  ? q
                  : e.doesViewerHaveEditAccess()
                  ? Q
                  : O),
            s(t)
          );
        },
        getDateSharedText: function (e) {
          var t = "",
            i = n.DateFactory;
          return (t = e.dateShared
            ? e.displayDateShared || i.getDateString(e.dateShared, null, !1)
            : "");
        },
        getRestoreItem: function (e) {
          var t = {};
          return (
            e.recycledSharedItemInfo
              ? (t.restoreSharedItemInfo = {
                  relativePath: e.recycledSharedItemInfo.relativePath,
                  sharedFolderResId: e.recycledSharedItemInfo.sharedFolderResId,
                  ghostRootResId: e.recycledSharedItemInfo.ghostRootResId,
                })
              : (t.deletedFromLocation = e.deletedFromLocation),
            (t.name = e.extension ? e.name + e.extension : e.name),
            (t.id = e.id),
            t
          );
        },
        parseCidFromItemId: function (e) {
          var t = e.indexOf("!") > -1 ? e.substring(0, e.indexOf("!")) : 0;
          return t;
        },
      };
    })();
  }),
  define("datamodel", ["skydriveitemhelper"], function () {
    !(function () {
      function e(e) {
        var t = c.ViewContext.getInstance().deviceItemSet;
        return t.getByKey(e.toLowerCase());
      }
      function t(e) {
        return e && "recyclebin" === a(e, "qt") && a(e, "id") === v;
      }
      function i(e) {
        return e && "search" === a(e, "qt") && a(e, "id") === v;
      }
      function n(e) {
        for (
          var t = e ? e.getParent(!0) : null;
          t && t.parentKey && !t.isSharerFolder;

        )
          (e = t), (t = t.getParent(!0));
        return t ? e : null;
      }
      function r(e, t) {
        var i = h.getItemKeyParts(e);
        return (
          c.StringHelpers.caseInsensitiveStringEquals(i.id, t) || (!t && !i.id)
        );
      }
      function a(e, t) {
        var i = h.getItemKeyParts(e);
        return i[t];
      }
      function o(e) {
        var t = !1;
        if (e)
          switch (e.code) {
            case 101:
            case 102:
            case 103:
            case 152:
            case 200:
            case 201:
            case 202:
            case 3e3:
            case 10001:
            case 10002:
            case 10004:
            case 10006:
            case 10009:
            case 10011:
            case 10012:
            case 10013:
            case 10027:
              t = !0;
          }
        return t;
      }
      function s(e) {
        return !e || e.hasExpired();
      }
      function l(e) {
        if (void 0 !== e.childCount) {
          for (
            var t = e.childCount, i = [], n = [], r = null, a = 0;
            t > a;
            a++
          ) {
            var o = e.children[a];
            o.isHeader
              ? (r && r.count && n.push(r),
                (r = {
                  groupingId: "other",
                  name: o.name,
                  startIndex: i.length,
                  endIndex: i.length,
                  count: 0,
                }))
              : ((r.endIndex = i.length), i.push(o), r.count++);
          }
          r && r.count && n.push(r),
            (e.itemGroupings = [
              { name: "FolderDocumentsPhotos", itemGroups: n },
            ]),
            (e.children = i),
            (e.totalCount = i.length),
            (e.childCount = i.length);
        }
      }
      function d(e) {
        var t = "SkyDrive_Json_GetItems",
          i = h.getItemKeyParts(e);
        return (t +=
          "mru" === i.qt
            ? "Mru"
            : "shared" === i.qt
            ? "Shared"
            : "recyclebin" === i.qt
            ? "RecycleBin"
            : "search" === i.qt
            ? "Search"
            : "sharedby" === i.qt
            ? "SharedBy"
            : "allmyphotos" === i.qt
            ? "AllMyPhotos"
            : "Folders");
      }
      var u,
        c = wLive.Core,
        h = c.SkyDriveItem,
        m = c.SkyDriveItemHelper,
        g = c.JSONConstants.SortField,
        f = c.JSONConstants.SortDirection,
        p = c.JSONConstants.GroupBy,
        v = "root",
        y = "id",
        C = "cid",
        S = "lct=1",
        b = "rset",
        _ = FilesConfig.useNewThumbs,
        k = (_ ? "odweb" : "skyweb") + ($B.Mobile ? "_mobile" : ""),
        w = "skyweb_picker",
        I = "DataModel",
        x = 1e3,
        D = 45e3,
        T = 15e4,
        A = 2e3,
        P = 3,
        E = 4,
        B = 5,
        R = 6e4,
        M = "SkyDrive.GetItemsVersionLookup",
        F = "albums",
        L = {};
      defineClass(
        "wLive.Core.DataModel",
        function (e, t, i, n, r) {
          mix(this, {
            extraGetItemsParams: "",
            baseUrl: e,
            _baseUrl: e || null,
            _callerCid: (i || "").toLowerCase(),
            _market: n || "",
            _pageSize: r || 100,
            _appId: t || "",
            _items: [],
            _maxRetries: 1,
            _groupInfo: {},
            _pendingRequests: {},
            _restoreAllWorkItemCount: 0,
            _versionLookup: BrowserStorage.getLocalValue(M) || {},
            _suspendedChangeEvents: null,
          });
        },
        {
          __isObservable: !0,
          dispose: function () {
            var e = this;
            for (var t in e._pendingRequests) e._pendingRequests[t].abort();
          },
          hasPendingRequests: function (e, t) {
            var i = this._pendingRequests[e],
              n = i && t ? i[t] : null;
            return !!(t ? n : i);
          },
          abortPendingRequests: function (e) {
            var t = this._pendingRequests[e];
            if (t) {
              for (var i in t)
                if ("count" !== i)
                  for (var n in t[i])
                    if ("count" !== n) {
                      var r = t[i][n];
                      r.abort();
                    }
              delete this._pendingRequests[e];
            }
          },
          setItemVersion: function (e, t) {
            Trace.log(
              "Setting item version (key: " + e + ", version: " + t + ")",
              I
            ),
              t ? (this._versionLookup[e] = t) : delete this._versionLookup[e],
              BrowserStorage.setLocalValue(M, this._versionLookup);
          },
          getRestoreAllWorkItemCount: function () {
            return this._restoreAllWorkItemCount;
          },
          getItem: function (e, t, i, n, r) {
            var a = this,
              o = null;
            if (e && ((o = a._items[e] || null), !t)) {
              var l = s(o),
                d = a._hasAncestors(o, e);
              if (l || (!d && o.id !== v)) {
                var u = n || h.getDefaultSetKey();
                a.fetchItem(
                  e,
                  u,
                  null,
                  0,
                  !1,
                  o ? null : i,
                  null,
                  null,
                  void 0,
                  null,
                  r
                ) &&
                  Trace.log(
                    "getItem miss - exists: " +
                      !!o +
                      ", expired: " +
                      l +
                      ", hasAncestors: " +
                      d +
                      ", key: " +
                      e +
                      ", setKey: " +
                      u,
                    I
                  );
              }
            }
            return o;
          },
          processResponse: function (t, i, n) {
            var r = this,
              o = !1;
            n = n || h.getDefaultSetKey();
            var s = n;
            if (t && t.items && !t.error) {
              var l = a(i, "did"),
                d = h.getSetKeyParts(n);
              if (d.sb == g.Default || d.sd == f.Default || d.gb == p.Default)
                if (l) {
                  var u = d.sb == g.Default ? g.Name : d.sb,
                    c = d.sd,
                    v = d.gb;
                  c == f.Default &&
                    (c = u != g.Name ? f.Descending : f.Ascending),
                    v == p.Default && (v = p.Folders),
                    (n = h.getSetKey(
                      u + "",
                      null,
                      d.ft,
                      v + "",
                      c + "",
                      t.tagFilter,
                      t.rif
                    ));
                } else
                  n = h.getSetKey(
                    t.sortOrder + "",
                    null,
                    d.ft,
                    t.groupBy || d.gb,
                    t.sortDirection + "",
                    t.tagFilter,
                    t.rif
                  );
              t.restoreAllWorkItemCount &&
                t.restoreAllWorkItemCount > 0 &&
                (r._restoreAllWorkItemCount = t.restoreAllWorkItemCount);
              var y = t.items;
              r._preprocessGetItemsResponse(t);
              var C = t.baseUrl;
              if (l && C) {
                var S = e(l);
                S && (S.baseUrl = C);
              }
              for (var b = 0; b < y.length; b++)
                o = r._processItem(y[b], i, n, null, o, s) || o;
              var _ = r.getItem(i, !0);
              if (
                void 0 !== t.lastVersion ||
                (_ && m.isSkyDriveRoot(_) && m.isViewerOwner(_))
              ) {
                var k = FilesConfig.lastVersion || t.lastVersion,
                  w = k ? k.split(",") : [];
                (FilesConfig.lastVersion = w[0] || "0"),
                  void 0 === FilesConfig.freRenderIndex &&
                    (FilesConfig.freRenderIndex = Number(w[1] || "0"));
              }
            }
            return o;
          },
          suspendChangeEvents: function () {
            this._suspendedChangeEvents || (this._suspendedChangeEvents = []);
          },
          resumeChangeEvents: function () {
            var e = this;
            if (e._suspendedChangeEvents) {
              var t = e._suspendedChangeEvents;
              for (e._suspendedChangeEvents = null; t.length; )
                e._fireDataChanged(t.pop());
            }
          },
          createSubfolder: function (e, t, i, n, r, a) {
            var o = this,
              s = this._baseUrl + "AddFolder?" + S,
              l = null,
              d = {
                parentId: e.id,
                cid: e.ownerCid,
                group: e.group,
                name: t,
                permissionsInfo: null,
              };
            i &&
              ((d.permissionsInfo = {
                ownerCid: i.ownerCid,
                message: i.message,
                requireSignIn: i.requireSignIn,
                entities: i.entities,
              }),
              (d.doNotRollbackOnPartialPermissionsError =
                i.doNotRollbackOnPartialPermissionsError),
              (d.sendShareNotification = i.sendSharingNotification),
              (l = R)),
              m.isRootItem(e) &&
                "photos" == c.ViewContext.getInstance().viewParams.sc &&
                (d.category = 1);
            var u = null,
              h = new c.DataRequest(
                s,
                s,
                Object.toJSON(d),
                function (t) {
                  var i = t ? t.item : null,
                    r = a ? a : e.createPinnedSubfolder();
                  r.processItem(i),
                    e.updatePinnedSubfolderKey(r),
                    (o._items[r.key] = r),
                    e.expire(),
                    e.invalidate(),
                    n && n(t, r);
                },
                function (e) {
                  e &&
                    e.error &&
                    e.error.code === x &&
                    (e.error.isExpected = !0),
                    r && r(e, u);
                },
                l
              );
            (h.apiId = "SkyDrive_Json_AddFolder"),
              (h.propertyId = "SkyDrive"),
              h.start();
          },
          updateItem: function (e, t, i, n, r, a) {
            var o = this,
              s = o._baseUrl + t + "?" + S,
              l = new c.DataRequest(
                s + Math.random(),
                s,
                i,
                function (t) {
                  var i = t && t.item;
                  if (i) {
                    var r = h.getItemKey(i.id, i.ownerCid, i.group);
                    o._processItem(i, r) && o.getItem(r).invalidate();
                  }
                  n && n(t, e);
                },
                function (t) {
                  if (r) {
                    var i = o.getItem(e.key, !0);
                    r(t, i);
                  }
                }
              );
            (l.apiId = "SkyDrive_Json_" + (a ? t + "_" + a : t)),
              (l.propertyId = "SkyDrive"),
              l.start();
          },
          updateItemProperties: function (e, t, i, n, r) {
            var a = this,
              o = e.parentId;
            (t.id = e.id),
              o && o !== v && (t.lid = e.parentId),
              (t[b] = k),
              a.updateItem(e, "UpdateItem", Object.toJSON(t), i, n, r);
          },
          updateItemProperty: function (e, t, i, n, r, a, o) {
            var s = "";
            a && (s = ', "overrideLock":"true"');
            var l = e[t],
              d = (e[t] = i),
              u = e.extension;
            "name" === t && u && (d += u), e.invalidate();
            var c = e.parentId;
            this.updateItem(
              e,
              "UpdateItem",
              '{"id":"' +
                e.id +
                '","' +
                t +
                '":"' +
                d.encodeJson() +
                (c && c !== v ? '","lid":"' + c.encodeJson() : "") +
                '","' +
                b +
                '":"' +
                k +
                '"' +
                s +
                "}",
              n,
              function (e, n) {
                r(e, n), n[t] === i && ((n[t] = l), n.invalidate());
              },
              o
            );
          },
          updateTags: function (e, t, i, n, r, a) {
            this.updateTagsForItems([e], t, i, n, r, a);
          },
          updateTagsForItems: function (e, t, i, n, r, a) {
            for (
              var o = this,
                s = "UpdateTags",
                l = { ids: [], tagsToAdd: t, tagsToDelete: i },
                d = 0;
              d < e.length;
              d++
            )
              l.ids.push(e[d].id);
            var u = o._baseUrl + s,
              h = new c.DataRequest(
                u + Math.random(),
                u,
                Object.toJSON(l),
                function (t) {
                  n && n(t, e);
                },
                function (t) {
                  r && r(t, e);
                }
              );
            (h.apiId = "SkyDrive_Json_" + s),
              (h.propertyId = "SkyDrive"),
              h.start();
          },
          getPlaceholderItem: function (e, t, i, n) {
            var r = new h(this, e, null),
              o = a(e, C).toUpperCase(),
              s = {
                name: t,
                isPlaceholder: !0,
                id: a(e, y),
                ownerName:
                  o == FilesConfig.hcid ? FilesConfig.userDisplayName : "",
                ownerCid: o,
              };
            return (
              i && (s.folder = { totalCount: 1, childCount: 1 }),
              r.processItem(s),
              mix(r, n),
              r
            );
          },
          getLoadingItem: function (e, t, i) {
            var n = void 0 !== t ? t : !0;
            return (
              (i = i || {}),
              mix(i, { _isLoadingItem: !0 }),
              this.getPlaceholderItem(e, "", n, i)
            );
          },
          getGroupInformation: function (e, t, i) {
            var n = "cid=" + e.toLowerCase().encodeUrl(),
              r = i.viewParams;
            r.authkey && (n += "&authkey=" + (r.authkey || "").encodeUrl()),
              r.ticket && (n += "&ticket=" + (r.ticket || "").encodeUrl());
            var a = this._groupInfo[n];
            return a || this._fetchGroupInformation(n, t, this._maxRetries), a;
          },
          _ensureCompletelyDownloaded: function (e, t, i) {
            function n(i, n) {
              function h() {
                var h = [],
                  p = l.getItem(d, !0);
                if (!m)
                  if (
                    ("-1" != c &&
                      c != p.modifiedDate &&
                      (Trace.log(
                        "EnsureCompletelyDownloaded refresh loop detected: modifiedDateChanges - " +
                          u +
                          " itemModifiedDate - " +
                          c +
                          " item.modifiedDate - " +
                          e.modifiedDate,
                        I
                      ),
                      u++,
                      (c = p.modifiedDate)),
                    u > P)
                  )
                    Trace.log(
                      "EnsureCompletelyDownloaded refresh loop hit: modifiedDateChanges - " +
                        u +
                        " itemModifiedDate - " +
                        c +
                        " item.modifiedDate - " +
                        e.modifiedDate,
                      I
                    ),
                      l.resumeChangeEvents(),
                      n(null);
                  else {
                    var v = p ? p.getChildren(t) : e.getChildren(t);
                    if (
                      (r
                        ? (h = l._getMissingGroupRanges(p || e, t, o, s))
                        : v.isComplete() ||
                          (h = l._getMissingRanges(p || e, t, a)),
                      h.length)
                    ) {
                      (g = []), l.suspendChangeEvents();
                      for (var y = 0; y < h.length; y++) {
                        var C = h[y];
                        f(y, C.start, C.count);
                      }
                    } else l.resumeChangeEvents(), i(p || e);
                  }
              }
              function f(e, i, n) {
                g[e] = l.fetchItem(
                  d,
                  t,
                  null,
                  i,
                  !1,
                  null,
                  function () {
                    p(e);
                  },
                  v,
                  1,
                  null,
                  { pageSize: n }
                );
              }
              function p(e) {
                var t;
                for (g[e] = !1, t = 0; t < g.length && !g[t]; t++);
                t == g.length && h();
              }
              function v(e) {
                Trace.log(
                  "EnsureCompletelyDownloaded fetch error: itemKey - " +
                    d +
                    " setKey - " +
                    t,
                  I
                ),
                  l.resumeChangeEvents(),
                  n(e);
              }
              h();
            }
            var r = i.downloadGroupMode,
              a = i.indexes,
              o = i.groupIndex,
              s = i.subGroupIndex;
            t = t || h.getDefaultSetKey();
            var l = this,
              d = e.key,
              u = 0,
              c = e.modifiedDate,
              m = !1,
              g = [];
            return new Shared.Promise(n, function () {
              l.resumeChangeEvents(), l.abortPendingRequests(d), (m = !0);
            });
          },
          ensureCompletelyDownloaded: function (e, t, i) {
            return this._ensureCompletelyDownloaded(e, t, {
              indexes: i,
              downloadGroupMode: !1,
            });
          },
          ensureGroupCompletelyDownloaded: function (e, t, i, n) {
            return this._ensureCompletelyDownloaded(e, t, {
              groupIndex: i,
              subGroupIndex: n,
              downloadGroupMode: !0,
            });
          },
          fetchItem: function (e, t, n, r, o, s, l, d, u, g, f) {
            var p = this;
            f = f || {};
            var v = f.pageSize || p._pageSize;
            n ||
              ((r -= r % p._pageSize),
              r > 0 &&
                !f.pageSize &&
                ((r -= p._pageSize), (v = 2 * p._pageSize)));
            var y = p.replaceGetItemsUrl && p.replaceGetItemsUrl(e, p._baseUrl),
              C = f.itemKey || e,
              S = f.startId || n,
              b = y || p._createGetItemsUrl(C, t, S, r, v, u, g),
              _ = window.$InlineRequests || {},
              k = _[b],
              w = k ? k.originId : Math.random(),
              I = p.getItem(e, !0);
            I && I.hasExpired() && (o = !0);
            var x;
            if (I && m.isAllMyPhotosQuery(I) && !o) {
              var P = I.getChildren(t);
              P && P.getGroupings(!1).length < 2 && (o = !0);
            }
            x =
              c.Search && i(e) && !o
                ? c.Search.getSearchOrigin(a(e, "q"))
                : o
                ? w
                : k
                ? k.version
                : p._versionLookup[e] || w;
            var E = FilesConfig.authKey
                ? "&authkey=" + FilesConfig.authKey.encodeUrl()
                : FilesConfig.ticket
                ? "&ticket=" + FilesConfig.ticket.encodeUrl()
                : "",
              B = b + E + "&v=" + x,
              R = !!h.getItemKeyParts(e).did,
              M = new Date().getTime(),
              F = !c.DataRequest.hasPendingRequest(b),
              U = null,
              V = new Date().getTime();
            (lastErrorForRequest = L[e + "_" + t]),
              lastErrorForRequest && V - lastErrorForRequest.time < A
                ? (raiseEvent(
                    this,
                    wLive.Core.DataModel.errorEvent,
                    lastErrorForRequest.error
                  ),
                  d && d(lastErrorForRequest.error))
                : ((U = new c.DataRequest(
                    b,
                    B,
                    null,
                    function (i) {
                      F && p._handleServerResponse(i, e, t, n, r, w, M, x, b),
                        l && l(p.getItem(e, !0));
                    },
                    function (i) {
                      F && p._handleServerResponse(i, e, t, n, r, w, M, x, b),
                        d && d(i ? i.error : null);
                    },
                    R ? T : D
                  )),
                  (U.originId = w));
            var N = U && U.start();
            if (N) {
              var Q = (p._pendingRequests[C] = p._pendingRequests[C] || {}),
                q = (Q[t] = Q[t] || {});
              (q[b] = U),
                (q.count = (q.count || 0) + 1),
                (Q.count = (Q.count || 0) + 1);
            }
            return N;
          },
          getApplicationDetails: function (e, t, i) {
            var n = this,
              r = n._baseUrl + "GetApplicationDetails?appId=" + e,
              a = new c.DataRequest(
                n._baseUrl,
                r,
                null,
                function (e) {
                  t && t(e);
                },
                function (e) {
                  i && i(e ? e.error : null);
                },
                D
              );
            return (
              (a.originId = Math.random()),
              (a.failureReentranceDelay = A),
              a.start()
            );
          },
          _getMissingGroupRanges: function (e, t, i, n) {
            var r = e.getChildren(t),
              a = r.getGroupings(),
              o = [],
              s = a[i];
            if (s) {
              var l = s.itemGroups[n];
              if (l) {
                if (l.mergeUp) {
                  var d = Math.max(l.startIndex - this._pageSize, 0);
                  o.push({ start: d, count: l.startIndex - d });
                }
                l.mergeDown &&
                  o.push({ start: l.endIndex + 1, count: this._pageSize });
              }
            }
            return o;
          },
          _getMissingRanges: function (e, t, i) {
            var n,
              r = this._pageSize,
              a = [],
              o = e.getChildren(t),
              s = {};
            if (i)
              for (n = 0; n < i.length; n++) {
                var l = i[n];
                o.peek(l) || (s[l - (l % r)] = !0);
              }
            else for (n = 0; n < o.getCount(); n += r) o.peek(n) || (s[n] = !0);
            for (n in s) a.push({ start: Number(n), count: r });
            if (a.length > E) {
              var d = 0;
              for (n = 0; n < a.length - 1; n++) {
                var u = a[n];
                ++d < B && u.start + u.count == a[n + 1].start
                  ? ((u.count += a[n + 1].count), a.splice(n + 1, 1), n--)
                  : (d = 0);
              }
            }
            return a;
          },
          _fireDataChanged: function (e) {
            var t = this;
            t._suspendedChangeEvents
              ? t._suspendedChangeEvents.push(e)
              : raiseEvent(this, wLive.Core.DataModel.dataChangedEvent, e);
          },
          _handleServerResponse: function (t, i, n, r, s, l, u, h, m) {
            var g,
              f,
              p,
              v = this,
              y = new Date().getTime(),
              C = v._pendingRequests[i],
              S = d(i);
            if (
              (window.$InlineRequests && delete window.$InlineRequests[m], C)
            ) {
              var b = C[n];
              b && (delete b[m], b.count--, b.count || delete C[n]),
                C.count--,
                C.count || delete v._pendingRequests[i];
            }
            if (t && t.items && !t.error) {
              var _ = l && l != t.originId,
                k = _,
                w = v.processResponse(t, i, n);
              (g =
                (_ ? "cacheHit-" : "cacheMiss-") +
                (k ? "revalidating-" : "valid-") +
                (w ? "changed" : "nochange")),
                (f = "s"),
                Trace.log("Received response: (" + g + ")", I);
              var x = v.getItem(i, !0);
              x &&
                (_ ||
                  (this.setItemVersion(i, h),
                  raiseEvent(v, c.DataModel.responseAvailableEvent, {
                    itemKey: i,
                    setKey: n,
                    originId: l,
                    response: t,
                  }),
                  (x.isSpecialFolder || x.isAlbumRoot) &&
                    (x.specialFolderKey != i
                      ? (v.setItemVersion(x.specialFolderKey, h),
                        raiseEvent(v, c.DataModel.responseAvailableEvent, {
                          itemKey: x.specialFolderKey,
                          setKey: n,
                          originId: l,
                          response: t,
                        }))
                      : (v.setItemVersion(x.key, h),
                        raiseEvent(v, c.DataModel.responseAvailableEvent, {
                          itemKey: x.key,
                          setKey: n,
                          originId: l,
                          response: t,
                        }))),
                  x.isRecycled &&
                    Qos.log(
                      "SkyDrive_Json_GetItemsWithDeleted",
                      "SkyDrive",
                      u,
                      null,
                      null,
                      null,
                      y
                    )),
                w && x.invalidate(!0)),
                k && v.fetchItem(i, n, r, s, !0);
            } else {
              var D = t ? t.error : null;
              D = D || {
                code: 2147745797,
                debugMessage: "Server returned no success or failure",
              };
              var T = a(i, "did");
              if (T) {
                var A = e(T);
                A &&
                  A.baseUrl &&
                  c.DeviceItem.hasNewBaseUrlError(D, T) &&
                  v.fetchItem(i, n, r, s, !0);
              }
              (g = D.code),
                (f = o(D) ? "c" : "f"),
                (p = D.debugMessage + "\n" + D.stackTrace),
                (D.key = i),
                (D.rootCauseApiId = S),
                (D.rootCauseErrorType = f),
                (D.rootCauseStartTime = u),
                (L[i + "_" + n] = { error: D, time: new Date().getTime() }),
                raiseEvent(this, wLive.Core.DataModel.errorEvent, D);
            }
            Qos.log(S, "SkyDrive", u, g, f, p, y);
          },
          _processItem: function (e, t, i, n, o, s) {
            var d,
              u = this,
              g = h.getItemKeyParts(t),
              f = void 0;
            if (t && r(t, e.id)) d = t;
            else {
              var p = g.qt,
                y = c.ViewContext.getInstance(),
                C = y && y.viewParams.parId;
              e.id == C && (p = y.viewParams.parQt),
                "search" === p &&
                  e.internalPath &&
                  (f = e.internalPath.join(",")),
                (d = h.getItemKey(
                  e.id,
                  e.ownerCid,
                  e.group,
                  p,
                  g.did,
                  g.q,
                  g.sft,
                  f
                ));
            }
            var S = u.getItem(d, !0),
              b = e.folder;
            if (!n && e.parentId)
              if ("search" === g.qt)
                n = h.getItemKey(v, void 0, 0, g.qt, 0, g.q, g.sft);
              else {
                var _ = e.isAlbum ? "albums" : e.parentId;
                n = h.getItemKey(_, e.ownerCid, e.group, g.qt, g.did);
              }
            if (!S) {
              o = !0;
              var k,
                w = e.isAlbumRoot;
              (w || e.isSpecialFolder) &&
                (k = h.getItemKey(
                  (w ? F : e.specialFolderCanonicalName).toLowerCase(),
                  e.ownerCid,
                  e.group,
                  null,
                  g.did
                )),
                (S = u._items[d] = new h(u, d, n, k)),
                k && (u._items[k] = S);
            }
            if (((o = S.processItem(e) || o), b)) {
              var I = S.getChildren(i);
              s &&
                i != s &&
                ((o = o || S._childSets[s] !== I), (S._childSets[s] = I)),
                m.isDeviceRoot(S) && l(b);
              var x = !1,
                D = I.getCount(!0);
              (I.modifiedDate == S.modifiedDate && D == b.childCount) ||
                void 0 == b.childCount ||
                ((x = !0),
                (I.modifiedDate = S.modifiedDate),
                I.setCount(b.childCount),
                (D = I.getCount(!0)),
                (I._requiresFilter = !0),
                (o = !0)),
                b.itemGroupings &&
                  S.hasMoreResults !== !0 &&
                  S.hasMoreResults !== !1 &&
                  I._mergeGroupingsFromServer(b.itemGroupings, x),
                void 0 !== b.photoCount && (S.folder.photoCount = b.photoCount);
              var T = a(t, "qt");
              ("allmyphotos" !== T && "sharedby" !== T) || (T = null);
              var A = a(t, "q"),
                P = a(t, "sft");
              if (b.children) {
                var E = b.startIndex || 0;
                if (E + b.children.length > b.totalCount) {
                  var B = b.totalCount - E;
                  b.children.length = B > 0 ? B : 0;
                }
                for (var R = 0, M = E; R < b.children.length; R++, M++) {
                  var L = b.children[R];
                  (f = void 0),
                    "search" === T &&
                      L.internalPath &&
                      (f = L.internalPath.join(","));
                  var U = h.getItemKey(
                    L.id,
                    L.ownerCid,
                    L.group,
                    T,
                    S.did,
                    A,
                    P,
                    f
                  );
                  (o = u._processItem(L, U, i, d, o) || o),
                    (o = I.set(M, u.getItem(U, !0)) || o);
                }
                o && change(I);
              }
            }
            return o;
          },
          _mergeGroupsAfterCurrent: function (e, t, i, n) {
            for (var r = e + 1; r < t.length; r++) {
              var a = t[r];
              if (!(a.startIndex <= i.endIndex + 1)) break;
              if (a.mergeUp) {
                if (n.endIndex < a.endIndex) {
                  var o = a.endIndex - n.endIndex;
                  (n.mergeDown = a.mergeDown),
                    (n.count += o),
                    (n.endIndex += o);
                }
                (a.count = -1), (a.startIndex = -1), (a.endIndex = -1);
              } else {
                if (!a._filler) break;
                if (n.endIndex < a.endIndex) {
                  var s = a.endIndex - n.endIndex;
                  (a.count -= s), (a.startIndex += s);
                } else (a.count = -1), (a.startIndex = -1), (a.endIndex = -1);
              }
            }
          },
          _preprocessGetItemsResponse: function (e) {
            for (
              var t = e.items,
                i = e.tokenNeedsRedeeming,
                n = e.tokenType,
                r = c.ViewContext.getInstance(),
                a = 0;
              a < t.length;
              a++
            ) {
              var o = t[a];
              if (o.id != v && ((i && null != n) || !o.tokenNeedsRedeeming)) {
                (o.tokenNeedsRedeeming = i), (o.tokenType = n);
                var s = o.folder;
                if (s && s.children) {
                  var l = 0;
                  for (s.startIndex || 0; l < s.children.length; l++) {
                    var d = s.children[l];
                    (d.tokenNeedsRedeeming = i), (d.tokenType = n);
                  }
                }
              }
              o.settings &&
                r &&
                o.ownerCid &&
                m.isViewerOwner(o) &&
                r.updateSettings(o.settings);
            }
          },
          _createGetItemsUrl: function (t, i, r, o, s, l, d) {
            var u,
              m = this,
              p = m.getItem(t, !0),
              v = (n(p), d ? d : m.extraGetItemsParams),
              y = c.ViewContext.getInstance(),
              C = y && y.viewParams,
              _ = k;
            C && C.v == FilesConfig.filePickerViewParam
              ? ((u = C.auth == FilesConfig.skyDrivePickerOAuth ? 2 : 1),
                (_ = w))
              : C && C.iam && (u = 1);
            var I =
              (void 0 === l ? "&d=1" : "&d=" + l) +
              "&iabch=1&caller=" +
              m._callerCid +
              "&path=" +
              (0 === l ? "0" : "1") +
              (r ? "&sid=" + r : "&si=" + o) +
              "&ps=" +
              s +
              "&pi=5&m=" +
              m._market +
              "&" +
              b +
              "=" +
              _ +
              "&" +
              S +
              (u ? "&urlType=" + u : "") +
              (FilesConfig.eventRange
                ? "&eventRange=" + FilesConfig.eventRange
                : "") +
              v;
            $B.Mobile && (I += "&isMobile=1");
            var x = this._baseUrl;
            if (-1 !== t.indexOf("&did=")) {
              var D = e(a(t, "did"));
              x = D && D.baseUrl ? D.baseUrl : FilesConfig.devicesBaseUrl;
              var T = h.getSetKeyParts(i);
              if (void 0 !== T.sd) {
                var A = "0";
                (A =
                  T.sb == g.Default || T.sb == g.Name
                    ? T.sd == f.Descending
                      ? "1"
                      : "0"
                    : T.sd == f.Ascending
                    ? "0"
                    : "1"),
                  (i = i.replace("sd=" + T.sd, "sr=" + A));
              }
            }
            return x + "GetItems?" + t + "&" + i + I;
          },
          _fetchGroupInformation: function (e, t, i) {
            var n =
                this._baseUrl +
                "GetGroupInfo?" +
                e +
                "&retrieveMembership=true",
              r = this,
              a = new c.DataRequest(n, n, null, function (t) {
                var i = new c.GroupInfo(t.groupInfo, e);
                (r._groupInfo[e] = i),
                  raiseEvent(
                    r,
                    wLive.Core.DataModel.groupInfoChangedEvent,
                    null
                  );
              });
            (a.apiId = "SkyDrive_Json_GetGroupInfo"),
              (a.propertyId = "SkyDrive"),
              a.start();
          },
          _hasAncestors: function (e, r) {
            var a = n(e);
            return i(r) || t(r)
              ? !1
              : !!((e && e.parentKey) || (a && this.getItem(a.parentKey, !0)));
          },
        },
        {
          getInstance: function () {
            if (!u) {
              var e = window.FilesConfig;
              u = new wLive.Core.DataModel(
                e.baseApiUrl,
                e.appId,
                e.hcid,
                $Config.mkt,
                e.dataPageSize
              );
            }
            return u;
          },
          dataChangedEvent: "dataChanged",
          responseAvailableEvent: "responseAvailable",
          groupInfoChangedEvent: "groupInfoChanged",
          errorEvent: "error",
        },
        Shared.ObjectEventing,
        Shared.Async
      );
    })();
  }),
  define("errormanager", ["datamodel"], function () {
    !(function () {
      function e() {
        function e(e, t) {
          return e.priority != t.priority
            ? e.priority - t.priority
            : e.type - t.type;
        }
        var t = this;
        (t._errors = []),
          (t.errorReceivedEventName = "errorreceived"),
          (t.errorClearedEventName = "errorcleared"),
          (t.add = function (n) {
            if (
              ((n.priority |= 0),
              (n.type |= 0),
              0 == n.type && $Config.hc && n.$element)
            ) {
              var r = "Help",
                a = n.$element.children("a").length > 0;
              if (a) r = "Other";
              else if (n.code) {
                var o = null;
                if ($Config.hc.slcList && $Config.hc.slcList[n.code]) {
                  r = "SLC";
                  var s = "&nbsp;" + i("ErrorStatusMessage"),
                    l =
                      '<a href="' +
                      $Config.hc.slcUrl +
                      '" target="_blank">' +
                      i("ErrorStatusLinkLabel") +
                      "</a>";
                  (o = jQuery("<span/>", {
                    class: "errorHelpLink",
                    html: s.format(l),
                  })),
                    o.click(function () {
                      $BSI.reportEvent(
                        "ClickSelected.SLC.SkyDriveInProductLink",
                        { CMXErrorCodeSD: n.code }
                      );
                    }),
                    $BSI.reportEvent("Action.SLC.SkyDriveOutageError", {
                      CMXErrorCodeSD: n.code,
                    });
                } else
                  (o = jQuery(
                    '<span class="errorHelpLink">&nbsp;<a target="_blank">' +
                      $Config.hc.label +
                      "</a></span>"
                  )),
                    $HelpContext.attachContextTo(
                      o.children("a"),
                      n.code,
                      n.$element.text()
                    );
                n.$element.append(o);
              } else (n.code = "noCode"), (r = "None");
              $BSI.reportEvent("Log.WL.ErrorDisplayed", {
                WLErrorProduct: $Config.prop,
                WLErrorCode: n.code,
                WLErrorLinkType: r,
              });
            }
            t._errors.push(n),
              t._errors.sort(e),
              jQuery(t).trigger(t.errorReceivedEventName);
          }),
          (t.removeAt = function (e) {
            var i = t._errors && t._errors.length;
            i > 0 &&
              e >= 0 &&
              i > e &&
              (t._errors.splice(e, 1),
              0 === t._errors.length &&
                jQuery(t).trigger(t.errorClearedEventName));
          }),
          (t.clear = function () {
            t._errors.length > 0 &&
              ((t._errors = []), jQuery(t).trigger(t.errorClearedEventName));
          }),
          (t.dismiss = function () {
            var e = t._errors;
            e.length > 0 && e[0].dismissCallback && e[0].dismissCallback(),
              t.clear();
          }),
          (t.getErrors = function () {
            return t._errors;
          });
      }
      var t = wLive.Core,
        i = t.AleHelpers.getString;
      t.ErrorManager = e;
    })();
  }),
  define("skydrive_pc_strip_32_ltr", [], function () {
    window.FilesIS32 = {
      InteractiveModeButtonActive: { x: 1, y: 1, w: 97, h: 96 },
      InteractiveModeButtonRest: { x: 1, y: 99, w: 97, h: 96 },
      InteractiveModeButtonHover: { x: 100, y: 1, w: 97, h: 96 },
      mobileUpsell: { x: 100, y: 99, w: 77, h: 42 },
      previousRest: { x: 100, y: 143, w: 69, h: 40 },
      nextRest: { x: 1, y: 197, w: 69, h: 40 },
      nextHover: { x: 72, y: 197, w: 69, h: 40 },
      previousHover: { x: 199, y: 1, w: 69, h: 40 },
      groupsIcon60: { x: 199, y: 43, w: 60, h: 60 },
      video_48: { x: 179, y: 105, w: 48, h: 48 },
      processingVideo_48: { x: 171, y: 155, w: 48, h: 48 },
      ft_48_Notebook: { x: 1, y: 239, w: 48, h: 48 },
      ft_48_Docx: { x: 51, y: 239, w: 48, h: 48 },
      ft_48_Pptx: { x: 101, y: 239, w: 48, h: 48 },
      ft_48_Xlsx: { x: 151, y: 205, w: 48, h: 48 },
      skydrive: { x: 221, y: 155, w: 45, h: 40 },
      PanoBackRest: { x: 201, y: 205, w: 41, h: 41 },
      PanoBackActive: { x: 270, y: 1, w: 41, h: 41 },
      PanoBackHover: { x: 261, y: 44, w: 41, h: 41 },
      PanoZoomInActive: { x: 229, y: 105, w: 40, h: 40 },
      PanoZoomOutRest: { x: 271, y: 87, w: 40, h: 40 },
      PanoZoomOutActive: { x: 271, y: 129, w: 40, h: 40 },
      PanoZoomOutHover: { x: 268, y: 171, w: 40, h: 40 },
      PanoZoomInRest: { x: 244, y: 213, w: 40, h: 40 },
      PanoZoomInHover: { x: 1, y: 289, w: 40, h: 40 },
      formLinkIcon_40: { x: 43, y: 289, w: 40, h: 40 },
      friendsIcon_40: { x: 85, y: 289, w: 40, h: 40 },
      formLinkIcon_40_White: { x: 151, y: 255, w: 40, h: 40 },
      embedIcon_40_White: { x: 193, y: 255, w: 40, h: 40 },
      publicIcon_40: { x: 235, y: 255, w: 40, h: 40 },
      publicIcon_40_White: { x: 313, y: 1, w: 40, h: 40 },
      linkIcon_40_White: { x: 304, y: 44, w: 40, h: 40 },
      linkIcon_40: { x: 313, y: 86, w: 40, h: 40 },
      groupsIcon_40_White: { x: 313, y: 128, w: 40, h: 40 },
      groupsIcon_40: { x: 310, y: 171, w: 40, h: 40 },
      friendsIcon_40_White: { x: 286, y: 213, w: 40, h: 40 },
      embedIcon_40: { x: 277, y: 255, w: 40, h: 40 },
      ft_32_Tag: { x: 1, y: 331, w: 38, h: 38 },
      ft_32_NonEmptyFavoriteFolder: { x: 41, y: 331, w: 32, h: 32 },
      processingVideo_32: { x: 75, y: 331, w: 32, h: 32 },
      ft_32_Txt: { x: 109, y: 331, w: 32, h: 32 },
      ft_32_Video: { x: 127, y: 297, w: 32, h: 32 },
      embedIcon: { x: 161, y: 297, w: 32, h: 32 },
      friendsIcon: { x: 143, y: 331, w: 32, h: 32 },
      publicIconWhite: { x: 195, y: 297, w: 32, h: 32 },
      publicIcon: { x: 177, y: 331, w: 32, h: 32 },
      mailIcon: { x: 229, y: 297, w: 32, h: 32 },
      friendsIconWhite: { x: 211, y: 331, w: 32, h: 32 },
      formLinkIconWhite: { x: 263, y: 297, w: 32, h: 32 },
      formLinkIcon: { x: 319, y: 255, w: 32, h: 32 },
      embedIconWhite: { x: 245, y: 331, w: 32, h: 32 },
      linkIconWhite: { x: 297, y: 297, w: 32, h: 32 },
      linkIcon: { x: 279, y: 331, w: 32, h: 32 },
      ft_32_Zip: { x: 313, y: 331, w: 32, h: 32 },
      ft_32_Docx: { x: 355, y: 1, w: 32, h: 32 },
      ft_32_Pptx: { x: 355, y: 35, w: 32, h: 32 },
      ft_32_Audio: { x: 355, y: 69, w: 32, h: 32 },
      ft_32_Notebook: { x: 355, y: 103, w: 32, h: 32 },
      ft_32_Xlsx: { x: 355, y: 137, w: 32, h: 32 },
      ft_32_Blank: { x: 352, y: 171, w: 32, h: 32 },
      photosTab: { x: 328, y: 213, w: 30, h: 30 },
      tagsTab: { x: 353, y: 245, w: 30, h: 30 },
      BackToFolderHover: { x: 331, y: 289, w: 30, h: 30 },
      BackToFolderRest: { x: 347, y: 321, w: 30, h: 30 },
      BackToFolderPressed: { x: 1, y: 371, w: 30, h: 30 },
      panorama: { x: 33, y: 371, w: 30, h: 30 },
      albumsTab: { x: 65, y: 365, w: 30, h: 30 },
      groupsIconWhite: { x: 97, y: 365, w: 30, h: 30 },
      groupsIcon: { x: 129, y: 365, w: 30, h: 30 },
      PreviousItemPressed: { x: 161, y: 365, w: 30, h: 30 },
      PreviousItemRest: { x: 193, y: 365, w: 30, h: 30 },
      ViewItemInfoPressed: { x: 225, y: 365, w: 30, h: 30 },
      ViewItemInfoRest: { x: 257, y: 365, w: 30, h: 30 },
      HideItemInfoHover: { x: 289, y: 365, w: 30, h: 30 },
      HideItemInfoRest: { x: 321, y: 365, w: 30, h: 30 },
      HideItemInfoPressed: { x: 353, y: 353, w: 30, h: 30 },
      ViewItemInfoHover: { x: 389, y: 1, w: 30, h: 30 },
      NextItemRest: { x: 389, y: 33, w: 30, h: 30 },
      NextItemHover: { x: 389, y: 65, w: 30, h: 30 },
      NextItemPressed: { x: 389, y: 97, w: 30, h: 30 },
      PreviousItemHover: { x: 389, y: 129, w: 30, h: 30 },
      video_32: { x: 389, y: 161, w: 30, h: 30 },
      videoPausePressed: { x: 360, y: 205, w: 26, h: 26 },
      videoPlay: { x: 388, y: 193, w: 26, h: 26 },
      videoPlayPressed: { x: 388, y: 221, w: 26, h: 26 },
      videoVolume: { x: 385, y: 249, w: 26, h: 26 },
      videoVolumePressed: { x: 363, y: 277, w: 26, h: 26 },
      videoMute: { x: 391, y: 277, w: 26, h: 26 },
      videoMutePressed: { x: 379, y: 305, w: 26, h: 26 },
      videoExpand: { x: 385, y: 333, w: 26, h: 26 },
      videoExpandPressed: { x: 385, y: 361, w: 26, h: 26 },
      videoCollapse: { x: 1, y: 403, w: 26, h: 26 },
      videoCollapsePressed: { x: 29, y: 403, w: 26, h: 26 },
      videoSettings: { x: 57, y: 403, w: 26, h: 26 },
      videoSettingsPressed: { x: 85, y: 397, w: 26, h: 26 },
      videoCloud: { x: 113, y: 397, w: 26, h: 26 },
      videoSettingsDisabled: { x: 141, y: 397, w: 26, h: 26 },
      videoSettingsHover: { x: 169, y: 397, w: 26, h: 26 },
      videoCollapseDisabled: { x: 197, y: 397, w: 26, h: 26 },
      videoCollapseHover: { x: 225, y: 397, w: 26, h: 26 },
      videoExpandDisabled: { x: 253, y: 397, w: 26, h: 26 },
      videoExpandHover: { x: 281, y: 397, w: 26, h: 26 },
      videoMuteDisabled: { x: 309, y: 397, w: 26, h: 26 },
      videoMuteHover: { x: 337, y: 397, w: 26, h: 26 },
      videoVolumeDisabled: { x: 365, y: 389, w: 26, h: 26 },
      videoVolumeHover: { x: 393, y: 389, w: 26, h: 26 },
      videoPlayDisabled: { x: 421, y: 1, w: 26, h: 26 },
      videoPlayHover: { x: 421, y: 29, w: 26, h: 26 },
      videoPauseDisabled: { x: 421, y: 57, w: 26, h: 26 },
      videoPauseHover: { x: 421, y: 85, w: 26, h: 26 },
      uploadIconDark: { x: 421, y: 113, w: 26, h: 26 },
      createIconLight: { x: 421, y: 141, w: 26, h: 26 },
      videoPause: { x: 421, y: 169, w: 26, h: 26 },
      uploadIconLight: { x: 416, y: 197, w: 26, h: 26 },
      createIconDark: { x: 416, y: 225, w: 26, h: 26 },
      cancelActive: { x: 413, y: 253, w: 20, h: 20 },
      CancelDarkHover: { x: 419, y: 275, w: 20, h: 20 },
      CancelDarkRest: { x: 407, y: 305, w: 20, h: 20 },
      CancelLightActive: { x: 413, y: 327, w: 20, h: 20 },
      CancelLightRest: { x: 413, y: 349, w: 20, h: 20 },
      EditDarkHover: { x: 421, y: 371, w: 20, h: 20 },
      EditLightActive: { x: 421, y: 393, w: 20, h: 20 },
      EditLightHover: { x: 1, y: 431, w: 20, h: 20 },
      EditLightRest: { x: 23, y: 431, w: 20, h: 20 },
      SaveDarkHover: { x: 45, y: 431, w: 20, h: 20 },
      SaveLightActive: { x: 67, y: 431, w: 20, h: 20 },
      SaveLightRest: { x: 89, y: 425, w: 20, h: 20 },
      SaveLightHover: { x: 111, y: 425, w: 20, h: 20 },
      SaveDarkRest: { x: 133, y: 425, w: 20, h: 20 },
      SaveDarkActive: { x: 155, y: 425, w: 20, h: 20 },
      EditDarkRest: { x: 177, y: 425, w: 20, h: 20 },
      EditDarkActive: { x: 199, y: 425, w: 20, h: 20 },
      CancelLightHover: { x: 221, y: 425, w: 20, h: 20 },
      CancelDarkActive: { x: 243, y: 425, w: 20, h: 20 },
      cancelRest: { x: 265, y: 425, w: 20, h: 20 },
      addCoOwnersIcon: { x: 287, y: 425, w: 20, h: 20 },
      cancelHover: { x: 309, y: 425, w: 20, h: 20 },
      skydrive_16Selected: { x: 429, y: 297, w: 18, h: 18 },
      goBackNormal: { x: 331, y: 425, w: 18, h: 18 },
      goBackHover: { x: 351, y: 425, w: 18, h: 18 },
      skydrive_16: { x: 371, y: 417, w: 18, h: 18 },
      zoomInRest: { x: 391, y: 417, w: 16, h: 16 },
      zoomOutRest: { x: 409, y: 417, w: 16, h: 16 },
      zoomOutHover: { x: 391, y: 435, w: 16, h: 16 },
      zoomInHover: { x: 427, y: 415, w: 16, h: 16 },
      ft_16_NonEmptyDocumentFolderSelected: { x: 409, y: 435, w: 16, h: 16 },
      ft_16_NonEmptyAlbumSelected: { x: 427, y: 433, w: 16, h: 16 },
      ft_16_BundleSelected: { x: 449, y: 1, w: 16, h: 16 },
      ft_16_SharedFolder: { x: 449, y: 19, w: 16, h: 16 },
      info_gray_16: { x: 449, y: 37, w: 16, h: 16 },
      info_16: { x: 449, y: 55, w: 16, h: 16 },
      ft_16_Docx: { x: 449, y: 73, w: 16, h: 16 },
      ft_16_SharedGlyph: { x: 449, y: 91, w: 16, h: 16 },
      ft_16_Pptx: { x: 449, y: 109, w: 16, h: 16 },
      blocked16: { x: 449, y: 127, w: 16, h: 16 },
      ft_16_Notebook: { x: 449, y: 145, w: 16, h: 16 },
      ft_16_SharedGlyphGray: { x: 449, y: 163, w: 16, h: 16 },
      ft_16_Xlsx: { x: 449, y: 181, w: 16, h: 16 },
      ft_16_SharedGlyphSelected: { x: 444, y: 199, w: 16, h: 16 },
      ft_16_SharedFolderSelected: { x: 444, y: 217, w: 16, h: 16 },
      centerHover: { x: 444, y: 235, w: 16, h: 16 },
      centerRest: { x: 435, y: 253, w: 16, h: 16 },
      ft_16_BundleWithBorderSelected: { x: 441, y: 271, w: 16, h: 16 },
      ft_16_Bundle: { x: 449, y: 289, w: 16, h: 16 },
      ft_16_EmptyAlbumSelected: { x: 449, y: 307, w: 16, h: 16 },
      ft_16_EmptyDocumentFolderSelected: { x: 435, y: 325, w: 16, h: 16 },
      ft_16_NonEmptyDocumentFolder: { x: 435, y: 343, w: 16, h: 16 },
      ft_16_NonEmptyAlbum: { x: 443, y: 361, w: 16, h: 16 },
      ft_16_NonEmptyFavoriteFolderSelected: { x: 443, y: 379, w: 16, h: 16 },
      ft_16_EmptyFavoriteFolderSelected: { x: 443, y: 397, w: 16, h: 16 },
      ft_16_EmptyAlbum: { x: 445, y: 415, w: 16, h: 16 },
      ft_16_EmptyDocumentFolder: { x: 445, y: 433, w: 16, h: 16 },
      ft_16_EmptyFavoriteFolder: { x: 1, y: 453, w: 16, h: 16 },
      ft_16_NonEmptyFavoriteFolder: { x: 19, y: 453, w: 16, h: 16 },
      searchIcon: { x: 37, y: 453, w: 14, h: 14 },
      warning: { x: 53, y: 453, w: 12, h: 12 },
      checkMark: { x: 67, y: 453, w: 12, h: 12 },
      whiteClosedUp11x9: { x: 81, y: 453, w: 9, h: 11 },
      freClose: { x: 92, y: 447, w: 11, h: 11 },
      freCloseHover: { x: 105, y: 447, w: 11, h: 11 },
      collapse11x9: { x: 100, y: 185, w: 11, h: 9 },
      expand11x9: { x: 113, y: 185, w: 11, h: 9 },
      darkPanelOpenUp11x9: { x: 126, y: 185, w: 11, h: 9 },
      whiteOpenUp11x9: { x: 139, y: 185, w: 11, h: 10 },
      openUp11x9: { x: 152, y: 185, w: 11, h: 9 },
      darkPanelClosedUp11x9: { x: 118, y: 447, w: 9, h: 11 },
      closedUp11x9: { x: 129, y: 447, w: 9, h: 11 },
      privateIcon: { x: 261, y: 87, w: 8, h: 10 },
      privateIconWhite: { x: 140, y: 447, w: 10, h: 10 },
      restoreRest: { x: 360, y: 233, w: 10, h: 10 },
      restoreHover: { x: 152, y: 447, w: 10, h: 10 },
      whiteClosedUp: { x: 171, y: 143, w: 6, h: 8 },
      whiteOpenUp: { x: 143, y: 197, w: 8, h: 6 },
      openUp: { x: 153, y: 196, w: 8, h: 6 },
      darkPanelOpenUp: { x: 229, y: 147, w: 8, h: 6 },
      closedUp: { x: 143, y: 205, w: 6, h: 8 },
      darkPanelClosedUp: { x: 143, y: 215, w: 6, h: 8 },
      sortMenuBullet: { x: 92, y: 460, w: 8, h: 8 },
      chevronRightGray: { x: 143, y: 225, w: 6, h: 8 },
      chevronRightBlack: { x: 346, y: 43, w: 6, h: 8 },
    };
  }),
  define("skydrive_pc_strip_8_ltr", [], function () {
    window.FilesIS8 = {
      ft_48_Blank: { x: 1, y: 1, w: 48, h: 48 },
      ft_48_NonEmptyFavoriteFolder: { x: 51, y: 1, w: 48, h: 48 },
      ft_48_Zip: { x: 1, y: 51, w: 48, h: 48 },
      ft_48_Photo: { x: 51, y: 51, w: 48, h: 48 },
      ft_48_Txt: { x: 101, y: 1, w: 48, h: 48 },
      ft_48_NonEmptyAlbum: { x: 101, y: 51, w: 48, h: 48 },
      ft_48_EmptyAlbum: { x: 1, y: 101, w: 48, h: 48 },
      ft_48_NonEmptyDocumentFolder: { x: 51, y: 101, w: 48, h: 48 },
      ft_48_EmptyDocumentFolder: { x: 101, y: 101, w: 48, h: 48 },
      ft_48_Video: { x: 151, y: 1, w: 48, h: 48 },
      ft_48_Audio: { x: 151, y: 51, w: 48, h: 48 },
      ft_32_NonEmptyDocumentFolder: { x: 151, y: 101, w: 32, h: 32 },
      ft_32_EmptyDocumentFolder: { x: 1, y: 151, w: 32, h: 32 },
      ft_32_Photo: { x: 35, y: 151, w: 32, h: 32 },
      ft_32_NonEmptyAlbum: { x: 69, y: 151, w: 32, h: 32 },
      ft_32_EmptyAlbum: { x: 103, y: 151, w: 32, h: 32 },
      groups: { x: 151, y: 135, w: 32, h: 32 },
      gridIconSelected: { x: 1, y: 185, w: 26, h: 26 },
      listIconSelected: { x: 29, y: 185, w: 26, h: 26 },
      customIconSelected: { x: 57, y: 185, w: 26, h: 26 },
      infoPaneIconSelected: { x: 85, y: 185, w: 26, h: 26 },
      infoPaneIcon: { x: 113, y: 185, w: 26, h: 26 },
      customIcon: { x: 141, y: 169, w: 26, h: 26 },
      listIcon: { x: 169, y: 169, w: 26, h: 26 },
      upIcon: { x: 201, y: 1, w: 26, h: 26 },
      gridIcon: { x: 201, y: 29, w: 26, h: 26 },
      darkPanelOpen: { x: 201, y: 57, w: 20, h: 25 },
      lightPanelOpen: { x: 201, y: 84, w: 20, h: 25 },
      panelClose: { x: 185, y: 111, w: 20, h: 25 },
      error: { x: 207, y: 111, w: 16, h: 16 },
      ft_16_Blank: { x: 185, y: 138, w: 16, h: 16 },
      ft_16_Zip: { x: 207, y: 129, w: 16, h: 16 },
      ft_16_Photo: { x: 203, y: 147, w: 16, h: 16 },
      ft_16_Video: { x: 197, y: 165, w: 16, h: 16 },
      ft_16_Txt: { x: 197, y: 183, w: 16, h: 16 },
      ft_16_Audio: { x: 1, y: 213, w: 16, h: 16 },
      redX: { x: 19, y: 213, w: 16, h: 16 },
      ppRedX: { x: 37, y: 213, w: 13, h: 13 },
      ppSearch: { x: 52, y: 213, w: 13, h: 13 },
      ppGreyX: { x: 67, y: 213, w: 13, h: 13 },
      close: { x: 137, y: 151, w: 10, h: 10 },
    };
  }),
  define("skydrive_sharing_strip_8_ltr", [], function () {
    window.SharingIS = {
      linkedin: { x: 1, y: 1, w: 20, h: 20 },
      add: { x: 23, y: 1, w: 20, h: 20 },
      weibo: { x: 1, y: 23, w: 20, h: 20 },
      twitter: { x: 23, y: 23, w: 20, h: 20 },
      facebook: { x: 45, y: 1, w: 20, h: 20 },
    };
  }),
  define("header_strip_ltr", [], function () {
    window.HeaderIS = {
      dogfood: { x: 2, y: 2, w: 110, h: 110 },
      onenote: { x: 116, y: 2, w: 110, h: 110 },
      people: { x: 2, y: 116, w: 110, h: 110 },
      sway: { x: 116, y: 116, w: 110, h: 110 },
      office: { x: 230, y: 2, w: 110, h: 110 },
      word: { x: 230, y: 116, w: 110, h: 110 },
      ppt: { x: 2, y: 230, w: 110, h: 110 },
      outlook: { x: 116, y: 230, w: 110, h: 110 },
      excel: { x: 230, y: 230, w: 110, h: 110 },
      onedrive: { x: 344, y: 2, w: 110, h: 110 },
      calendar: { x: 344, y: 116, w: 110, h: 110 },
    };
  }),
  define(
    "imageloader",
    [
      "defineutilities",
      "trace",
      "retriablepromise",
      "domutilities",
      "workmonitor",
      "elementeventing",
    ],
    function () {
      !(function () {
        var e = Shared.WorkMonitor,
          t = 10,
          n = "ImageLoader",
          r = 3,
          a = [5e3, 15e3, 3e4];
        Trace.register(n, { isEnabled: !1 });
        var o = "retryid";
        defineNamespace("Shared.ImageLoader", {
          _loadedUrls: {},
          _imageStates: {},
          _urlQueue: [],
          _loadAttempts: 0,
          _loadRetryAttempts: 0,
          _loadSuccess: 0,
          _loadError: 0,
          _loadAbort: 0,
          _loadPending: 0,
          loadImagePromise: function (t, i) {
            var o,
              s = t,
              l = this,
              d = 0,
              u = new Shared.RetriablePromise(
                function (e, r) {
                  1 === ++d
                    ? (o = Trace.log("Loading image: " + t, n))
                    : Trace.logTo(
                        o,
                        "Retrying image (attempt: " +
                          d +
                          ", pending: " +
                          l._loadPending +
                          ")",
                        n
                      ),
                    l.loadImage(s, i, e, r, d > 1);
                },
                function () {
                  var e = l._imageStates[t];
                  e &&
                    (e.references--, e.references || delete l._imageStates[t]);
                },
                r,
                a,
                null
              );
            return (
              u.then(
                function () {
                  Trace.logTo(o, "Complete", n);
                },
                function () {
                  Trace.logTo(o, "Error", n);
                }
              ),
              e.monitorPromise(
                [e.StandardTags.Network, e.StandardTags.Network_Image],
                u
              ),
              u
            );
          },
          loadImage: function (e, t, i, n, r) {
            var a = this;
            if (((t = t || ce("img")), a._loadedUrls[e])) (t.src = e), i(e, t);
            else {
              var o = a._imageStates[e];
              o
                ? (o.elements.push(t),
                  o.references++,
                  i && o.callbacks.push(i),
                  n && o.errorCallbacks.push(n),
                  (o.forceDownload = o.forceDownload || r))
                : (r && a._loadRetryAttempts++,
                  (o = a._imageStates[e] =
                    {
                      url: e,
                      elements: [t],
                      callbacks: [],
                      errorCallbacks: [],
                      references: 1,
                      forceDownload: r,
                    }),
                  i && o.callbacks.push(i),
                  n && o.errorCallbacks.push(n),
                  a._urlQueue.push(e),
                  a.processQueue());
            }
          },
          isIdle: function () {
            return 0 === this._loadPending;
          },
          isLoaded: function (e) {
            return !!this._loadedUrls[e];
          },
          isDomainAccessible: function (e, t) {
            return !0;
          },
          onError: function (e) {},
          processQueue: function () {
            for (
              var e = 0, i = this;
              e < i._urlQueue.length && i._loadPending < t;

            )
              if (Shared.ImageLoader.isDomainAccessible(i._urlQueue[e])) {
                var n = i._urlQueue.shift(),
                  r = i._imageStates[n];
                if (r) {
                  var a = r.elements[0],
                    s = n;
                  i._addImageEventHandlers(a),
                    r.forceDownload &&
                      (s +=
                        (-1 == n.indexOf("?") ? "?" : "&") +
                        o +
                        "=" +
                        Math.random()),
                    i._loadAttempts++,
                    i._loadPending++,
                    (a.s = n),
                    (a.src = s);
                }
              } else e++;
          },
          _addImageEventHandlers: function (e) {
            return (
              this.addElementListener(e, "load", this._onImageLoad),
              this.addElementListener(e, "error", this._onImageError),
              this.addElementListener(e, "abort", this._onImageAbort),
              e
            );
          },
          _removeImageEventHandlers: function (e) {
            this.removeElementListener(e, "load", this._onImageLoad),
              this.removeElementListener(e, "error", this._onImageError),
              this.removeElementListener(e, "abort", this._onImageAbort);
          },
          _onImageLoad: function (e, t) {
            var n = this,
              r = e.currentTarget,
              a = r.s,
              o = n._imageStates[a];
            if ((n._removeImageEventHandlers(r), n._loadPending--, o)) {
              if (t) {
                if (1 === t) {
                  for (i = 0; i < o.errorCallbacks.length; i++)
                    o.errorCallbacks[i](a);
                  Shared.ImageLoader.onError(a);
                }
              } else
                for (
                  n._loadSuccess++, n._loadedUrls[a] = !0, i = 0;
                  i < o.callbacks.length;
                  i++
                )
                  try {
                    i > 0 && (o.elements[i].src = a),
                      o.callbacks[i](a, o.elements[i]);
                  } catch (s) {}
              delete n._imageStates[a];
            }
            this.processQueue();
          },
          _onImageError: function (e) {
            this._loadError++, this._onImageLoad(e, 1);
          },
          _onImageAbort: function (e) {
            this._loadAbort++, this._onImageLoad(e, 2);
          },
        }),
          mix(Shared.ImageLoader, Shared.ElementEventing);
      })();
    }
  ),
  define("contentcontrol", ["jbase", "basecontrol"], function () {
    !(function () {
      defineSubClass(
        "JBase.UI.ContentControl",
        JBase.UI.BaseControl,
        function () {
          mix(this, { _contentControlType: null, _controlTable: {} });
        },
        {
          controlType: JBase.UI.BaseControl,
          controlOptions: null,
          currentControl: null,
          disposeOnSwap: !1,
          getControlType: function (e) {
            return this.controlType;
          },
          getControlOptions: function (e) {
            return this.controlOptions;
          },
          getChildDataContext: function (e) {
            return e;
          },
          onRenderHtml: function () {
            return this.currentControl
              ? this.currentControl.renderHtml()
              : this.defaultRenderHtml("");
          },
          onCurrentControlChanged: function () {},
          onDataContextChanged: function (e) {
            var t = this.getControlType(e);
            t && t.isPromise
              ? t.then(bind(this, this._evaluateControlType))
              : this._evaluateControlType(t);
          },
          _evaluateControlType: function (e) {
            var t = this.dataContext,
              i = this.currentControl;
            if (this._contentControlType !== e) {
              var n = ce("div");
              if (
                (i &&
                  (this.removeChild(i),
                  (this.currentControl = null),
                  this.disposeOnSwap
                    ? (delete this._controlTable[
                        this._contentControlType.prototype.__fullName
                      ],
                      i.dispose())
                    : i.deactivate()),
                (this._contentControlType = e),
                e)
              ) {
                var r = e.prototype.__fullName;
                (i = this.currentControl = this._controlTable[r]),
                  i
                    ? this.addChild(i)
                    : ((i =
                        this.currentControl =
                        this._controlTable[r] =
                          this.createChild(e, this.getControlOptions(t))),
                      (i.id = this.id),
                      this.onCurrentControlChanged()),
                  i.setDataContext(this.getChildDataContext(t), !0),
                  this.element &&
                    (i.element ||
                      (setHtml(n, i.renderHtml()), (i.element = n.firstChild)),
                    this.element.parentNode &&
                      this.element.parentNode.replaceChild(
                        i.element,
                        this.element
                      ),
                    (this.element = i.element),
                    this.isActive && i.activate());
              } else if (this.element) {
                setHtml(n, this.defaultRenderHtml(""));
                var a = n.firstChild;
                this.element.parentNode &&
                  this.element.parentNode.replaceChild(a, this.element),
                  (this.element = a);
              }
            } else i && i.setDataContext(this.getChildDataContext(t));
          },
          onDispose: function () {
            for (var e in this._controlTable)
              this._controlTable.hasOwnProperty(e) &&
                this._controlTable[e].dispose();
            this._controlTable = {};
          },
        }
      );
    })();
  }),
  define(
    "repeater",
    ["jbase", "basecontrol", "imageloader", "contentcontrol"],
    function () {
      !(function () {
        defineSubClass(
          "JBase.UI.Repeater",
          JBase.UI.BaseControl,
          function () {},
          {
            childControl: JBase.UI.ContentControl,
            onRenderHtml: function () {
              return this.defaultRenderHtml(this._buildHtml());
            },
            onDataContextChanged: function () {
              var e = this;
              e.element &&
                (e.element.childNodes.length
                  ? e._update()
                  : (setHtml(e.element, e._buildHtml()),
                    e.activate(),
                    e._updateKeyToElementMap()));
            },
            getChildContext: function (e, t) {
              var i = e;
              return e.__isDataContext || (i = { item: e }), i;
            },
            getKeyFromChildContext: function (e) {
              return e.key || (e.item ? e.item.key : null);
            },
            _updateKeyToElementMap: function () {
              var e = this,
                t = e.element.childNodes;
              e._keyToElement = {};
              for (var i = 0; i < t.length; i++) {
                var n = t[i],
                  r = n.control,
                  a =
                    r && r.dataContext && r.dataContext.key
                      ? r.dataContext.key
                      : null;
                a && (e._keyToElement[r.dataContext.key] = n);
              }
            },
            _buildHtml: function () {
              var e = this,
                t = "";
              if (e.dataContext) {
                var i = e.dataContext.items;
                if ((e.clearChildren(), i && e.childControl))
                  for (var n, r = 0; r < i.length; r++)
                    (n = e.createChild(e.childControl)),
                      n.setDataContext(e.getChildContext(i[r], r)),
                      (t += n.renderHtml());
              }
              return t;
            },
            _update: function () {
              var e = this;
              if (e.element) {
                var t = e.dataContext.items,
                  i = e._keyToElement || {},
                  n = e.element.childNodes,
                  r = {};
                if (t && t.length) {
                  for (var a = 0; a < t.length; a++) {
                    var o = t[a],
                      s = this.getChildContext(o, a),
                      l = this.getKeyFromChildContext(s),
                      d = n[a];
                    if (d) {
                      var u =
                        d.control && d.control.dataContext
                          ? this.getKeyFromChildContext(d.control.dataContext)
                          : null;
                      if (u != l)
                        if (void 0 === i[l]) r[l] = e._insertCell(a, s);
                        else {
                          for (var c = -1, h = 0; h < t.length; h++) {
                            var m = t[h];
                            if (m && m.key === u) {
                              c = h;
                              break;
                            }
                          }
                          -1 === c
                            ? (e._removeCell(d), a--)
                            : (r[l] = e._insertCell(a, s));
                        }
                      else (r[l] = d), d.control && d.control.setDataContext(s);
                    } else r[l] = e._insertCell(a, s);
                  }
                  for (; n.length > t.length; )
                    this._removeCell(n[n.length - 1]);
                  this._keyToElement = r;
                } else e.clearChildren(), setHtml(e.element, "");
              }
            },
            _insertCell: function (e, t) {
              var i = this,
                n = i.element,
                r = i.createChild(i.childControl),
                a = ce("div");
              i.dataContext.items;
              r.setDataContext(t), setHtml(a, r.renderHtml());
              var o = (r.element = a.firstChild);
              return (
                e >= n.childNodes.length
                  ? n.appendChild(o)
                  : n.insertBefore(o, n.childNodes[e]),
                r.activate(),
                o
              );
            },
            _removeCell: function (e) {
              var t = e.control;
              t && (t.dispose(), this.removeChild(t)),
                this.element && this.element.removeChild(e);
            },
          }
        );
      })();
    }
  ),
  define("repeaterv2", ["repeater"], function () {
    !(function () {
      var e = {
        col: 1,
        colgroup: 1,
        tr: 1,
        tbody: 1,
        tfoot: 1,
        thead: 1,
        table: 1,
      };
      defineSubClass(
        "JBase.UI.RepeaterV2",
        JBase.UI.BaseControl,
        function () {},
        {
          childControlType: JBase.UI.ContentControl,
          childControlOptions: {},
          getChildControlType: function (e) {
            return this.childControlType;
          },
          getChildControlOptions: function (e) {
            return this.childControlOptions;
          },
          onRenderHtml: function () {
            return this.defaultRenderHtml(this._buildHtml());
          },
          onDataContextChanged: function () {
            var e = this;
            e.element &&
              (e.element.childNodes.length
                ? e._update()
                : (setHtml(e.element, e._buildHtml()),
                  e.activate(),
                  e._updateKeyToElementMap()));
          },
          getChildContext: function (e, t) {
            var i = e;
            return e.__isDataContext || (i = { item: e }), i;
          },
          getKeyFromChildContext: function (e) {
            return e.key || (e.item ? e.item.key : null);
          },
          _updateKeyToElementMap: function () {
            var e = this,
              t = e.element.childNodes;
            e._keyToElement = {};
            for (var i = 0; i < t.length; i++) {
              var n = t[i],
                r = n.control,
                a =
                  r && r.dataContext && r.dataContext.key
                    ? r.dataContext.key
                    : null;
              a && (e._keyToElement[r.dataContext.key] = n);
            }
          },
          _buildHtml: function () {
            var e = this,
              t = "";
            if (e.dataContext) {
              var i = e.dataContext.itemSet;
              if ((e.clearChildren(), i))
                for (var n, r = i.getCount(), a = 0; r > a; a++) {
                  var o = i.get(a);
                  if (!o) break;
                  (n = e.createChild(
                    e.getChildControlType(o),
                    e.getChildControlOptions(o)
                  )),
                    n.setDataContext(e.getChildContext(o, a)),
                    (t += n.renderHtml());
                }
            }
            return t;
          },
          _update: function () {
            var e = this;
            if (e.element) {
              var t = e.dataContext.itemSet,
                i = e._keyToElement || {},
                n = e.element.childNodes,
                r = {},
                a = 0;
              if (t && t.getCount()) {
                for (var o = t.getCount(); o > a; a++) {
                  var s = t.get(a);
                  if (!s) break;
                  var l = this.getChildContext(s, a),
                    d = this.getKeyFromChildContext(l),
                    u = n[a];
                  if (u) {
                    var c =
                      u.control && u.control.dataContext
                        ? this.getKeyFromChildContext(u.control.dataContext)
                        : null;
                    if (c != d)
                      if (void 0 === i[d]) r[d] = e._insertCell(a, l, s);
                      else {
                        var h = t.getByKey(c),
                          m = h ? t.indexOf(h) : -1;
                        -1 === m
                          ? (e._removeCell(u), a--)
                          : (r[d] = e._insertCell(a, l, s));
                      }
                    else (r[d] = u), u.control && u.control.setDataContext(l);
                  } else r[d] = e._insertCell(a, l, s);
                }
                for (; n.length > a; ) this._removeCell(n[n.length - 1]);
                this._keyToElement = r;
              } else e.clearChildren(), setHtml(e.element, "");
            }
          },
          _insertCell: function (t, i, n) {
            var r = this,
              a = r.element,
              o = r.createChild(
                r.getChildControlType(n),
                r.getChildControlOptions(n)
              ),
              s = ce(r.baseTag);
            o.setDataContext(i),
              r.baseTag in e
                ? jQuery(s).append(jQuery(o.renderHtml()))
                : setHtml(s, o.renderHtml());
            var l = (o.element = s.firstChild);
            return (
              t >= a.childNodes.length
                ? a.appendChild(l)
                : a.insertBefore(l, a.childNodes[t]),
              o.activate(),
              l
            );
          },
          _removeCell: function (e) {
            var t = e.control;
            t && (t.dispose(), this.removeChild(t)),
              this.element && this.element.removeChild(e);
          },
        }
      );
    })();
  }),
  define("imagestriphelper", ["repeaterv2"], function () {
    !(function () {
      var e = [],
        t = [],
        i = {};
      defineNamespace("JBase.UI.ImageStripHelper", {
        registerStrip: function (i, n) {
          e.push(i), t.push(n);
        },
        getImageInfo: function (n, r, a) {
          var o;
          if (n && ((o = i[n]), !o)) {
            for (var s = 0, l = -1; s < t.length && -1 == l; )
              (l = t[s].hasOwnProperty(n) ? s : -1), s++;
            if (l >= 0) {
              var d = t[l][n];
              o = i[n] = {
                url: e[l],
                containerSize: { width: d.w, height: d.h },
                imagePosition: { left: -d.x, top: -d.y },
              };
            }
          }
          return o
            ? {
                url: o.url,
                containerSize: o.containerSize,
                imagePosition: o.imagePosition,
                alt: r,
                title: a,
              }
            : null;
        },
      });
    })();
  }),
  define("imagesizehelper", ["imagestriphelper"], function () {
    !(function () {
      var e = 0.5;
      defineNamespace("JBase.UI.ImageSizeHelper", {
        scaleToContainer: function (e, t, i, n, r) {
          var a = {};
          if (
            ((e.width = e.width || (i && i.width) || 0),
            (e.height = e.height || (i && i.height) || 0),
            e.width && e.height)
          ) {
            var o = e.width / e.height,
              s = t.width / t.height;
            if ((!n && o > s) || (n && s > o)) {
              var l = i && !r ? Math.min(i.width, t.width) : t.width;
              a = { width: l, height: Math.ceil(l * (1 / o)) };
            } else {
              var d = i && !r ? Math.min(i.height, t.height) : t.height;
              a = { width: Math.ceil(d * o), height: d };
            }
          }
          return a;
        },
        centerPosition: function (t, i, n, r) {
          var a = t.width > i.width,
            o = t.height > i.height;
          (n = a && void 0 !== n ? n : e), (r = o && void 0 !== r ? r : e);
          var s = Math.round(0.5 * i.height - t.height * r),
            l = Math.round(0.5 * i.width - t.width * n),
            d = {
              left: a ? Math.min(0, l) : l,
              top: o ? Math.min(0, s) : s,
              width: t.width,
              height: t.height,
            };
          return d;
        },
        swapWidthAndHeight: function (e) {
          return { left: e.left, top: e.top, width: e.height, height: e.width };
        },
      });
    })();
  }),
  define("imagetile.css", ["registerstyle", "imagesizehelper"], function (e) {
    registerStyle(
      "/* Root image tile style. */\r\n.c-ImageTile\r\n{\r\n    display: inline-block;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n/* Image within the tile container. */\r\n.c-ImageTile img \r\n{     \r\n    position: absolute;\r\n    opacity: 0;\r\n    left: 0; /* This works in RTL as well, it's just a default position required for Safari RTL. */\r\n    top: 0;\r\n}\r\n\r\n/* Visible state. */\r\n.c-ImageTile img.visible\r\n{\r\n    opacity: 1;\r\n}\r\n\r\n/* Visible animated state. */\r\n.c-ImageTile img.animated\r\n{\r\n    opacity: 1;\r\n    animation-name: imageTileFadeIn;\r\n    -ms-animation-name: imageTileFadeIn;\r\n    -webkit-animation-name: imageTileFadeIn;\r\n    -moz-animation-name: imageTileFadeIn;\r\n}\r\n\r\n/* Disabling image animations in Chrome when the language picker is visible. */\r\n.Chrome.langPickerVisible .c-ImageTile img.animated\r\n{\r\n   animation-name: none;\r\n    -ms-animation-name: none;\r\n    -webkit-animation-name: none;\r\n    -moz-animation-name: none;\r\n}"
    );
  }),
  define("imagetile", ["imagetile.css"], function () {
    !(function (e) {
      function t(e) {
        return e
          ? generateStyleAttribute(
              "width.px",
              e.width,
              "height.px",
              e.height,
              "left.px",
              e.left,
              "right.px",
              e.right,
              "top.px",
              e.top
            )
          : "";
      }
      var i = JBase.UI.ImageSizeHelper,
        n = "visible",
        r = "animated",
        a = { url: "" },
        o = 0.5,
        s = Shared.ImageLoader,
        l =
          "keyframes imageTileFadeIn {0% { opacity: 0; }100% { opacity: 1; }}";
      registerStyle(
        ".c-ImageTile > img { filter: alpha(opacity=0); }.c-ImageTile > img.visible { filter: alpha(opacity=100); }@" +
          l +
          "@-ms-" +
          l +
          "@-moz-" +
          l +
          "@-webkit-" +
          l
      );
      var d = !(($B.IE && $B.V < 10) || ($B.SF_iPhone && $B.rtl));
      defineSubClass(
        "JBase.UI.ImageTile",
        JBase.UI.BaseControl,
        function () {
          mix(this, {
            scaleToFit: !1,
            _currentUrl: null,
            _lastLoadedImage: null,
            _loadingImagePromise: null,
            thumbnailStyle: null,
            _lastLoadedUrl: null,
            _purgeTimeout: null,
            _renderedImageHtml: !1,
            _rotationClass: null,
          });
        },
        {
          baseTag: "span",
          imageAnimationDuration: null,
          horizontalCenterRatio: o,
          verticalCenterRatio: o,
          allowStretching: !1,
          onRenderHtml: function () {
            var e = "",
              t = this.dataContext || a;
            return (
              t.url &&
                s.isLoaded(t.url) &&
                !this._lastLoadedImage &&
                ((this._renderedImageHtml = !0),
                (e =
                  "<img " +
                  (t.alt ? ' alt="' + htmlAttributeEncode(t.alt) + '"' : "") +
                  (t.title
                    ? ' title="' + htmlAttributeEncode(t.title) + '"'
                    : "") +
                  ' src="' +
                  htmlAttributeEncode(t.url) +
                  '" class="' +
                  n +
                  '" style="' +
                  this.thumbnailStyle +
                  '" />')),
              this.defaultRenderHtml(e)
            );
          },
          onActivate: function () {
            var e = this;
            e._lastLoadedImage &&
              e._onImageAvailable(e._lastLoadedUrl, e._lastLoadedImage),
              e._renderedImageHtml &&
                e.element &&
                ((e._currentImage = e.element.children[0]),
                (e._renderedImageHtml = !1));
          },
          onDispose: function () {
            this._loadingImagePromise && this._loadingImagePromise.cancel(),
              (this._loadingImagePromise = null);
          },
          onDataContextChanged: function (e) {
            if (((e = e || a), e.url != this._currentUrl)) {
              (this._currentUrl = e.url), (this._currentImage = null);
              var t = this.element;
              if ((!this.imageAnimationDuration || !e.url) && t)
                for (var i; (i = t.firstChild); ) t.removeChild(i);
              (!this.isActive && s.isLoaded(e.url)) || this._loadImage(e.url);
            }
            this._updateContentSize();
          },
          onImageLoaded: function () {},
          _loadImage: function (e) {
            var t = this;
            t._loadingImagePromise && t._loadingImagePromise.cancel(),
              e &&
                ((t._loadingImagePromise = s.loadImagePromise(e, null)),
                t._loadingImagePromise.then(
                  bind(this, this._onImageAvailable)
                ));
          },
          _onImageAvailable: function (e, t) {
            var i = this,
              r = this.dataContext;
            e === i._currentUrl &&
              ((i._loadingImagePromise = null),
              i.isActive
                ? (i.element &&
                    ((i._currentImage = t),
                    (t.alt = r.alt || ""),
                    (t.title = r.title || ""),
                    !i.imageAnimationDuration && (t.className = n),
                    i._updateContentSize(),
                    i.element.appendChild(t),
                    i.onImageLoaded && i.onImageLoaded(),
                    i.imageAnimationDuration && i._fadeInImage()),
                  (i._lastLoadedImage = i._lastLoadedUrl = null))
                : ((i._lastLoadedImage = t), (i._lastLoadedUrl = e)));
          },
          _fadeInImage: function () {
            var t = this;
            t.imageAnimationDuration &&
              (d
                ? setTimeout(function () {
                    if (t._currentImage) {
                      var e = t._currentImage.style;
                      (e.animationDuration =
                        e.msAnimationDuration =
                        e.webkitAnimationDuration =
                        e.MozAnimationDuration =
                          t.imageAnimationDuration / 1e3 + "s"),
                        (t._currentImage.className = r);
                    }
                  }, 20)
                : e(t._currentImage)
                    .css("opacity", 0)
                    .animate(
                      { opacity: 1 },
                      t.imageAnimationDuration,
                      function () {
                        t._currentImage && (t._currentImage.className = n);
                      }
                    ),
              clearTimeout(t._purgeTimeout),
              (t._purgeTimeout = setTimeout(function () {
                t._currentImage && (t._currentImage.className = n),
                  t._purgeHiddenImages();
              }, t.imageAnimationDuration + 20)));
          },
          _updateContentSize: function () {
            var e = this.dataContext || {},
              n = e.containerSize,
              r = e.imagePosition,
              a = e.originalSize,
              o = e.rotation || 0;
            r &&
              void 0 === r.left &&
              void 0 === r.top &&
              (o % 2 != 0 &&
                ((r = i.swapWidthAndHeight(r)),
                (a = a && i.swapWidthAndHeight(a))),
              (r = i.scaleToContainer(
                r,
                n,
                a,
                !this.scaleToFit,
                this.allowStretching
              )),
              (r = i.centerPosition(
                r,
                n,
                this.horizontalCenterRatio,
                this.verticalCenterRatio
              )),
              o % 2 != 0 && (r = i.swapWidthAndHeight(r))),
              (this.baseStyle = t(n)),
              (this.thumbnailStyle = t(r)),
              this.element && (this.element.style.cssText = this.baseStyle),
              this._currentImage &&
                (this._currentImage.style.cssText = this.thumbnailStyle) &&
                this._updateRotationClass(o);
          },
          _purgeHiddenImages: function () {
            if (this.element)
              for (; this.element.childNodes.length > 1; )
                this.element.removeChild(this.element.children[0]);
          },
          _updateRotationClass: function (e) {
            if (this._currentImage && (e || this._rotationClass)) {
              var t = e ? "rotate" + Math.round(90 * e) : "";
              (this._currentImage.className = this._rotationClass
                ? this._currentImage.className.replace(this._rotationClass, t)
                : this._currentImage.className + " " + t),
                (this._rotationClass = t);
            }
          },
        }
      );
    })(window.originaljQuery || jQuery);
  }),
  define("ag", ["wliveloaded"], function () {
    window.Silverlight || (window.Silverlight = {}),
      (Silverlight.isInstalled = function (e) {
        void 0 == e && (e = null);
        var t = !1;
        try {
          var i = null,
            n = !1;
          if (window.ActiveXObject)
            try {
              (i = new ActiveXObject("AgControl.AgControl")),
                null === e ? (t = !0) : i.IsVersionSupported(e) && (t = !0),
                (i = null);
            } catch (r) {
              n = !0;
            }
          else n = !0;
          if (n) {
            var a = navigator.plugins["Silverlight Plug-In"];
            if (a)
              if (null === e) t = !0;
              else {
                var o = a.description;
                "1.0.30226.2" === o && (o = "2.0.30226.2");
                for (var s = o.split("."); s.length > 4; ) s.pop();
                for (var l = e.split("."); l.length > 4; ) l.pop();
                var d,
                  u,
                  c = 0;
                do (d = parseInt(l[c])), (u = parseInt(s[c])), c++;
                while (c < l.length && d === u);
                u >= d && !isNaN(d) && (t = !0);
              }
          }
        } catch (r) {
          t = !1;
        }
        return t;
      }),
      (Silverlight.supportedUserAgent = function (e, t) {
        try {
          var i = null;
          i = t ? t : window.navigator.userAgent;
          var n = { OS: "Unsupported", Browser: "Unsupported" };
          if (
            (i.indexOf("Windows NT") >= 0 ||
            i.indexOf("Mozilla/4.0 (compatible; MSIE 6.0)") >= 0
              ? (n.OS = "Windows")
              : i.indexOf("PPC Mac OS X") >= 0
              ? (n.OS = "MacPPC")
              : i.indexOf("Intel Mac OS X") >= 0
              ? (n.OS = "MacIntel")
              : i.indexOf("Linux") >= 0 && (n.OS = "Linux"),
            "Unsupported" != n.OS)
          )
            if (-1 == i.indexOf("ARM") && i.indexOf("MSIE") >= 0)
              -1 == navigator.userAgent.indexOf("Win64") &&
                parseInt(i.split("MSIE")[1]) >= 6 &&
                (n.Browser = "MSIE");
            else if (i.indexOf("Firefox") >= 0) {
              var r = i.split("Firefox/")[1].split("."),
                a = parseInt(r[0]);
              if (a >= 2) n.Browser = "Firefox";
              else {
                var o = parseInt(r[1]);
                1 == a && o >= 5 && (n.Browser = "Firefox");
              }
            } else
              i.indexOf("Chrome") >= 0
                ? (n.Browser = "Chrome")
                : i.indexOf("Safari") >= 0
                ? (n.Browser = "Safari")
                : -1 == i.indexOf("ARM") &&
                  window.$B &&
                  window.$B.IE &&
                  11 == window.$B.V &&
                  (n.Browser = "MSIE");
          var s = parseInt(e),
            l = !(
              "Unsupported" == n.OS ||
              "Unsupported" == n.Browser ||
              ("Windows" == n.OS && "Safari" == n.Browser) ||
              (n.OS.indexOf("Mac") >= 0 && "MSIE" == n.Browser) ||
              (n.OS.indexOf("Mac") >= 0 && "Chrome" == n.Browser)
            );
          return n.OS.indexOf("Windows") >= 0 && "Chrome" == n.Browser && 4 > s
            ? !1
            : "MacPPC" == n.OS && s > 1
            ? l && "MacPPC" != n.OS
            : "Linux" == n.OS && s > 2
            ? l && "Linux" != n.OS
            : "1.0" == e
            ? l && i.indexOf("Windows NT 5.0") < 0
            : l;
        } catch (d) {
          return !1;
        }
      }),
      (function () {
        function e() {
          function e(e, t, i, n, r) {
            document.cookie =
              e +
              "=" +
              escape(t) +
              (i ? ";path=" + i : "") +
              (n ? ";domain=" + n : "") +
              (r ? ";secure" : "");
          }
          function n(e) {
            for (
              var t = e + "=", i = document.cookie.split(";"), n = 0;
              n < i.length;
              n++
            ) {
              for (var r = i[n]; " " == r.charAt(0); )
                r = r.substring(1, r.length);
              if (0 == r.indexOf(t)) return r.substring(t.length, r.length);
            }
            return null;
          }
          function a(e) {
            return void 0 === e || null === e || 0 === e.length;
          }
          var o = n(t),
            s = n(i),
            l = getSilverlightVersion(),
            d = Silverlight.supportedUserAgent(),
            u = location.hostname.split("."),
            c = u[u.length - 2] + "." + u[u.length - 1];
          e(t, l, "/", c),
            e(i, d, "/", c),
            ((!window.skipSLReload && a(o) && l != r) ||
              (a(s) && !d) ||
              (!a(o) && o != l)) &&
              location.reload(!0);
        }
        window.getSilverlightVersion = function () {
          var e = n;
          return (
            (e = Silverlight.isInstalled("1.0") ? "1.0" : e),
            (e = Silverlight.isInstalled("2.0") ? "2.0" : e),
            (e = Silverlight.isInstalled("3.0") ? "3.0" : e),
            (e = Silverlight.isInstalled(r) ? r : e)
          );
        };
        var t = "SLVersion",
          i = "SLSupportedAgent",
          n = "0.0",
          r = "4.0.50401",
          a = $B.IE && $B.V <= 10;
        a && e();
        var o = "4.0";
        window.wLive &&
          ((wLive.Core.getSilverlightSupported = function () {
            return e(), Silverlight.supportedUserAgent(o);
          }),
          (wLive.Core.getSilverlightInstalled = function () {
            return (
              e(),
              Silverlight.isInstalled(o) && wLive.Core.getSilverlightSupported()
            );
          }),
          a &&
            ((wLive.Core.SilverlightSupported =
              wLive.Core.getSilverlightSupported()),
            (wLive.Core.SilverlightInstalled =
              wLive.Core.getSilverlightInstalled())));
      })();
  }),
  define("skymode", ["dependancies", "ag"], function () {
    !(function () {
      var e = wLive.Core,
        t = $B.IE && $B.V >= 10,
        i =
          window.File &&
          (window.File.prototype.slice ||
            window.File.prototype.mozSlice ||
            window.File.prototype.webkitSlice);
      e.skyMode = {
        html5UploadEnabled: i,
        useSilverlightForUpload:
          !i &&
          !$B.Firefox &&
          !t &&
          FilesConfig.slEnabledMarket &&
          e.getSilverlightInstalled &&
          e.getSilverlightInstalled(),
      };
    })();
  }),
  define("selectionmanager", ["errormanager", "baseutil"], function () {
    !(function () {
      function e(c) {
        function h(e, t) {
          var i = w(t);
          switch (i) {
            case l:
              m(e), (z = e);
              break;
            case d:
              g(e, t);
              break;
            case s:
              p(e), (z = e);
          }
          var n = L.getSelection();
          j = 0 === n.selectionCount ? -1 : e;
        }
        function m(e) {
          !G && T(e) && v(), S(e);
        }
        function g(e, t) {
          t.ctrl || ((O = {}), (H = {}), A(z));
          for (
            var i = L.isSelected(B, z),
              n = Math.min(Math.min(z, j), e),
              r = Math.max(Math.max(z, j), e),
              a = Math.max(Math.min(z, e), 0),
              o = Math.max(Math.max(z, e), 0),
              s = n;
            r >= s;
            s++
          )
            s >= a && o >= s
              ? s !== z && (i && ((!K && !T(s)) || K) ? y(s) : C(s))
              : (delete O[s], delete H[s]);
        }
        function f(e) {
          return (
            (e = e || {}), (e.ctrl = W && e.ctrl), (e.shift = W && e.shift), e
          );
        }
        function p(e) {
          var t = L.getSelection(),
            i = t && 1 === t.selectionCount && L.isSelected(B, e);
          v(), i || A(e);
        }
        function v() {
          (O = {}), (H = {}), ($ = !1), (j = -1), (z = -1);
        }
        function y(e) {
          A(e);
        }
        function C(e) {
          delete O[e], delete H[e];
        }
        function S(e) {
          L.isSelected(B, e) ? (delete O[e], delete H[e]) : A(e);
        }
        function b(e) {
          for (var t = e; null != O[t]; ) t--;
          return t;
        }
        function _(e) {
          for (var t = e; null != O[t]; ) t++;
          return t;
        }
        function k(e) {
          var t = !1;
          e || (t = !0), !n(e, B) && e && ((t = !0), (B = e));
          var i = c.getSetKey(e ? e.key : null);
          if ((R !== i && (R = i), e)) {
            var a = c.getChildren(e);
            N || (V = a ? a.getGroupings() : []),
              (M = r(e) ? a.getRawCount() : a.getCount());
          }
          return t;
        }
        function w(e) {
          var t = e && e.ctrl,
            i = e && e.shift;
          return i && z > -1 ? d : t ? l : s;
        }
        function I(e) {
          var t = 0;
          for (var i in Q) t++;
          return t > 1 && !n(e, B);
        }
        function x(e, t) {
          var i =
            n(e.parent, t.parent) &&
            e.relationshipsKey === t.relationshipsKey &&
            e.inPreselectionMode === t.inPreselectionMode &&
            e.selectionCount === t.selectionCount;
          if (i) {
            var r = e.indexes,
              a = t.indexes;
            for (var o in r)
              if (r[o] !== a[o]) {
                i = !1;
                break;
              }
          }
          return i;
        }
        function D(e) {
          for (var t = V[0].itemGroups, i = 0; i < t.length; i++) {
            var n = t[i];
            if (n.startIndex <= e && n.endIndex >= e) return i;
          }
          return -1;
        }
        function T(e) {
          for (var t in O) {
            if (D(e) != D(t)) return !0;
            break;
          }
          return !1;
        }
        function A(e) {
          O[e] = parseInt(e);
          var t = c.getChildren(B).peek(e);
          t && (H[e] = t);
        }
        function P(e, t) {
          var i = L.getSelection();
          k(t) && v();
          var n = e();
          return x(i, L.getSelection()) || E(), n;
        }
        function E() {
          U.trigger(e.SelectionChangedEvent, [L.getSelection()]);
        }
        var B,
          R,
          M,
          F,
          L = this,
          U = jQuery(L),
          V = [],
          N = !1,
          Q = {},
          q = {},
          O = {},
          H = {},
          $ = !1,
          j = -1,
          z = -1,
          W = !0,
          G = !0,
          K = !0,
          J = !0,
          X = 0,
          Z = null,
          Y = null;
        (L.dispose = function () {
          clearTimeout(X), v();
        }),
          (L.setMultiSelectEnabled = function (e) {
            W = e;
          }),
          (L.setCrossGroupSelectEnabled = function (e, t) {
            (G = e), (K = t && e);
          }),
          (L.setSelectionEnabled = function (e) {
            (J = e), (W = e);
          }),
          (L.setSelectionFilter = function (e) {
            F = e;
          }),
          (L.registerList = function (e, t) {
            (Q[e] = t), (q[t.key] = e);
          }),
          (L.unregisterList = function () {
            (q = {}), (Q = {});
          }),
          (L.clickSelect = function (e, t, i) {
            if (((i = f(i)), J)) {
              if (F) {
                var n = c.getChildren(e).peek(t);
                if (n && !F(n)) return;
              }
              P(function () {
                h(t, i), ($ = i && i.preselect);
              }, e);
            }
          }),
          (L.keyboardSelect = function (e, t, i) {
            return (
              (i = f(i)),
              I(e) || !J
                ? !0
                : P(function () {
                    var n = j,
                      r = i.shift;
                    switch (t) {
                      case a:
                        if (-1 !== n) {
                          var s = r ? n - 1 : b(n);
                          n = Math.max(0, s);
                        } else k(Q[0]), (n = M - 1);
                        break;
                      case o:
                        if (-1 !== n) {
                          var l = r ? n + 1 : _(n);
                          n = Math.min(M - 1, l);
                        } else k(Q[0]), (n = 0);
                        break;
                      default:
                        return !0;
                    }
                    if (n === j) return !0;
                    if (((i.ctrl = !1), F)) {
                      var d = c.getChildren(e).get(n);
                      if (!F(d)) return !1;
                    }
                    return h(n, i), !1;
                  }, e)
            );
          }),
          (L.resolveSelection = function (t) {
            var i = e.ResolveSuccess,
              n = t ? c.getChildren(t) : null;
            if (n && 0 !== n.getCount()) {
              var r = {};
              L.getSelection();
              if (k(t)) i = e.ResolveFailed;
              else if (n.getMaterializedCount())
                for (var a in O) {
                  var o = H[a];
                  if (!o) {
                    i = e.ResolveWaiting;
                    break;
                  }
                  var s = o ? n.indexOf(o, !1, !0) : -1;
                  if (!(s > -1)) {
                    i = e.ResolveFailed;
                    break;
                  }
                  r[s] = o;
                }
              else i = e.ResolveWaiting;
              if (i === e.ResolveSuccess) {
                var l = H[j],
                  d = l ? n.indexOf(l, !1, !0) : -1,
                  u = H[z],
                  h = u ? n.indexOf(u, !1, !0) : -1;
                P(function () {
                  v();
                  for (var e in r) A(e);
                  (z = h), (j = d);
                }, t);
              } else i === e.ResolveFailed && L.deselectAll();
            } else L.deselectAll();
            return i;
          }),
          (L.selectAll = function (e) {
            return L.selectRange(e, 0, M - 1);
          }),
          (L.deselectAll = function (e, t) {
            t
              ? v()
              : P(function () {
                  v();
                }, e);
          }),
          (L.selectRange = function (e, t, i) {
            return I(e) || !W
              ? !0
              : (P(function () {
                  for (var e = t; i >= e; e++) A(e);
                }, e),
                !1);
          }),
          (L.deselectRange = function (e, t, i) {
            return I(e) || !W
              ? !0
              : (P(function () {
                  for (var e = t; i >= e; e++) C(e);
                }, e),
                !1);
          }),
          (L.getSingleSelectedItem = function (e) {
            var t,
              i = this.getSelection();
            if (((e = e || B), e && 1 === i.selectionCount))
              for (var n in i.indexes) {
                t = c.getChildren(e).get(n);
                break;
              }
            return t;
          }),
          (L.multipleSelected = function () {
            var e = 0;
            for (var t in O) if (O.hasOwnProperty(t) && (e++, e > 1)) break;
            return e > 1;
          }),
          (L.anySelected = function () {
            var e = !1;
            for (var t in O)
              if (O.hasOwnProperty(t)) {
                e = !0;
                break;
              }
            return e;
          }),
          (L.getSelection = function () {
            var e = 0,
              t = -1;
            for (var i in O) (t > i || -1 === t) && (t = i), e++;
            var n = {
              parent: B,
              inPreselectionMode: $,
              indexes: O,
              selectionCount: e,
              firstSelectedIndex: t,
              lastInteractedIndex: j,
            };
            return n;
          }),
          (L.showSelectionDialog = function (e) {
            var t = this;
            !Y &&
              e &&
              require(["modaldialog", "doregister"], function () {
                var n =
                  $f &&
                  $f.createLoading({
                    returnMarkup: !0,
                    useTransparentFallback: !0,
                    text: e,
                  });
                Y = wLive.Controls.Notifications.createModalDialog({
                  buttons: { close: i("Cancel") },
                  title: "",
                  content: n,
                });
                var r = jQuery(Y);
                r.bind({
                  "afterdismiss._dlg": function (e, i) {
                    r.unbind(), (t.dialog = null);
                  },
                  "buttonclick._dlg": function (e, t, i) {
                    "close" === i && Z && (Z.cancel(), (Z = null));
                  },
                }),
                  Y.show();
              });
          }),
          (L.dismissSelectionDialog = function () {
            $header && $header.hideLoading(),
              clearTimeout(X),
              (X = 0),
              Y && (Y.dismiss(), (Y = null));
          }),
          (L.selectGroupFromIndex = function (e, i, n, r, a) {
            var o = t.DataModel.getInstance(),
              s = L.getSelection(),
              l = s.parent,
              d = l.key,
              h = c.getSetKey(d);
            $header.showLoading(),
              (X = setTimeout(function () {
                $header.hideLoading(), L.showSelectionDialog(a);
              }, u)),
              (Z = o.ensureGroupCompletelyDownloaded(l, h, e, i).then(
                function () {
                  L.dismissSelectionDialog();
                  var t = l.getChildren(h),
                    a = t.getGroupings()[e];
                  if (a) {
                    var o = a.itemGroups[i];
                    o
                      ? (n || L.deselectAll(l, !0),
                        L.isRangeSelected(l, o.startIndex, o.endIndex)
                          ? L.deselectRange(l, o.startIndex, o.endIndex)
                          : L.selectRange(l, o.startIndex, o.endIndex),
                        r())
                      : Trace.log(
                          "Failed to get the  subgroup for: " +
                            d +
                            " at group index " +
                            e +
                            " at subgroup index " +
                            o,
                          "Selection Manager"
                        );
                  } else
                    Trace.log(
                      "Failed to get the group for: " +
                        d +
                        " at group index " +
                        e,
                      "Selection Manager"
                    );
                },
                function () {
                  L.dismissSelectionDialog(),
                    Trace.log(
                      "Failed to get the selected items for: " + d,
                      "Selection Manager"
                    );
                }
              ));
          }),
          (L.getSelectedItems = function (e, i) {
            var n = t.DataModel.getInstance(),
              r = L.getSelection(),
              a = r.parent,
              o = [];
            for (var s in r.indexes) o.push(s);
            var l = a.key,
              d = c.getSetKey(l);
            $header.showLoading(),
              (X = setTimeout(function () {
                $header.hideLoading(), L.showSelectionDialog(i);
              }, u)),
              (Z = n.ensureCompletelyDownloaded(a, d, o).then(
                function () {
                  L.dismissSelectionDialog();
                  var t = [];
                  for (var i in r.indexes) {
                    var n = c.getChildren(a).get(i);
                    n && t.push(n);
                  }
                  e(t);
                },
                function () {
                  L.dismissSelectionDialog(),
                    Trace.log(
                      "Failed to get the selected items for: " + l,
                      "Selection Manager"
                    );
                }
              ));
          }),
          (L.isSelected = function (e, t) {
            return n(e, B) && O[t] === t;
          }),
          (L.isRangeSelected = function (e, t, i) {
            var r = n(e, B);
            if (r)
              for (var a = t; i >= a; a++)
                if (O[a] !== a) {
                  r = !1;
                  break;
                }
            return r;
          }),
          (L.hasPreselectedChild = function (e) {
            return n(e, B) && $;
          }),
          (L.resetPreselectionFlag = function () {
            $ = !1;
          }),
          (L.setGroupings = function (e) {
            if (e) (V = e), (N = !0);
            else {
              if (B) {
                var t = c.getChildren(B);
                V = t ? t.getGroupings() : [];
              } else V = [];
              N = !1;
            }
          });
      }
      var t = wLive.Core,
        i = t.AleHelpers.getPCString,
        n = t.SkyDriveItem.areItemsSame,
        r = t.SkyDriveItemHelper.isSearchQuery,
        a = 38,
        o = 40,
        s = 0,
        l = 1,
        d = 2,
        u = 3e3;
      (e.SelectionChangedEvent = "selectionChanged"),
        (e.ResolveFailed = -1),
        (e.ResolveWaiting = 1),
        (e.ResolveSuccess = 2),
        (wLive.Core.SelectionManager = e);
    })();
  }),
  define(
    "actionmanager",
    ["jquery-1.7.2", "dependancies", "lightstring", "bsi", "bicihelpers"],
    function () {
      !(function () {
        function e() {
          this._actions = {};
        }
        var t = wLive.Core;
        t.ActionManager = e;
        var i = e.prototype;
        (i.registerAction = function (e, t) {
          this._actions[e] = t;
        }),
          (i.isActionRegistered = function (e) {
            return !!this._actions[e];
          }),
          (i.getAction = function (e, t) {
            var i = this._actions[e];
            return i ? i.getAction.apply(i, arguments) : null;
          }),
          (i.doAction = function (e) {
            var t = !0;
            return (
              e &&
                (e.click && (t = e.click()),
                e.url && ($BSI.navigateTo(e.url, e.target), (t = !1))),
              t
            );
          }),
          (e.getATagAction = i.getATagAction =
            function (e, i, n) {
              var r =
                  e.click ||
                  function () {
                    return $BSI.navigateTo(e.url), !1;
                  },
                a = e.skyCmd;
              return (
                i &&
                  a &&
                  (r = e.click =
                    t.BiciHelpers.prependBiciReportClickAction(r, a, i)),
                n &&
                  (e.click = function (e) {
                    return n(e, r);
                  }),
                e
              );
            }),
          (e.setATagAction = i.setATagAction =
            function (t, i, n, r) {
              return (
                (i = i || jQuery(document.createElement("a"))),
                (t = e.getATagAction(t, n, r)),
                t.click && i.bind("click.action", t.click),
                i.attr("href", t.url || "#"),
                t.target && i.attr("target", t.target),
                i
              );
            });
      })();
    }
  ),
  define(
    "commandmanager",
    ["errormanager", "selectionmanager", "actionmanager"],
    function () {
      !(function () {
        function e(t, i, n, r, a, o, s, l, d) {
          for (var u = n.length, c = 0; u > c; c++) {
            var h = mix({}, n[c]),
              m = h.command,
              g = h.commandGroup;
            if (m) {
              var f = i.getAction(m, r),
                p = h.alias || m,
                v = a && (a[p] || a["*"]);
              if (f && (!h.isEnabled || h.isEnabled(t, r)) && (!v || v(t, r))) {
                if (((h.action = f), (h.id = m), !h.stringId)) {
                  var y = h.getStringId;
                  h.stringId = (y && y(t, r)) || m;
                }
                h.string =
                  f.string || C(h.stringId + "Command") || C(h.stringId);
                var S = h.getSutraId;
                (h.sutraId = (S && S(r)) || m), o(h, d);
              }
            } else if (g) {
              var b = function (n) {
                e(t, i, h.members, r, a, o, s, l, n);
              };
              s ? s(g, d, b, h) : b(d);
            } else l && l(d, h);
          }
        }
        function t(e, t) {
          var i = e.currentItem,
            n = i.key;
          return (
            "SetView" !== e.currentViewType ||
              i.folder ||
              i.textEditorMimeType ||
              (n = i.parentKey),
            n === t.key
          );
        }
        function i(e, i) {
          return !t(e, i);
        }
        function n(e, i) {
          return !(t(e, i) || (t(e, i) && i.textEditorMimeType));
        }
        function r(e, t) {
          return y.SkyDriveItemHelper.isGroupRoot(t);
        }
        function a(e, t) {
          return !y.SkyDriveItemHelper.isRootItem(t);
        }
        function o(e, t) {
          var n = e.actionManager.getAction("DefaultClick", t),
            r = n && n.name,
            a = "ViewItem" === r;
          return i(e, t) && a;
        }
        function s(e, i) {
          return (
            !l(e, i) && (t(e, i) || !e.actionManager.getAction("Abdicate", i))
          );
        }
        function l(e, t) {
          return g(e);
        }
        function d(e, t) {
          return !u(e, t);
        }
        function u(e, i) {
          return t(e, i);
        }
        function c(e, t) {
          var i = e.itemProvider.peekParent(t),
            n = i && i.isPlaceholder;
          return !(
            (y.SkyDriveItemHelper.isPartOfBundle(t) && !t.isViewerOwner()) ||
            n
          );
        }
        function h(e, t) {
          return !0;
        }
        function m(e, t) {
          return !t.form;
        }
        function g(e) {
          return "recyclebin" == e.viewParams.qt;
        }
        function f(e) {
          return !e.tokenHasBeenRedeemed;
        }
        function p(e, t) {
          return t && t.folder && t.folder.childCount > 0;
        }
        function v(e, t) {
          return !(!t || !t.folder);
        }
        var y = wLive.Core,
          C = y.AleHelpers.getPCString;
        defineNamespace("wLive.Core.CommandManager", {
          CommandSetEnum: {
            DefaultCommands: 0,
            FolderCreateCommands: 1,
            OneUpCommands: 2,
            PhotosViewCommands: 3,
          },
          processCommands: function (t, i, n, r, a, o, s, l, d) {
            var u = this,
              c = i,
              h = t.actionManager;
            i || ((c = n), (h = t.multiselectActionManager));
            var m;
            switch (d) {
              case u.CommandSetEnum.OneUpCommands:
                m = u._oneUpCommands;
                break;
              case u.CommandSetEnum.FolderCreateCommands:
                m = u._folderCreateCommands;
                break;
              case u.CommandSetEnum.PhotosViewCommands:
                m = u._photosViewCommands;
                break;
              case u.CommandSetEnum.DefaultCommands:
              default:
                m = u._commands;
            }
            e(t, h, m, c, r, a, o, s, l);
          },
          commandDisabled: function (e, t) {
            return !1;
          },
          isCurrentItem: function (e, i) {
            return t(e, i);
          },
          isNotCurrentItem: function (e, t) {
            return i(e, t);
          },
          isDeleteEnabled: function (e, t) {
            return s(e, t);
          },
          isOwnerRequestReviewEnabled: function (e, t) {
            return h(e, t);
          },
          isRecycleBinItem: function (e) {
            return g(e);
          },
          isFolder: function (e, t) {
            return v(e, t);
          },
          _oneUpCommands: [
            { command: "Sharing" },
            { command: "Download", screenSizes: { small: !0 } },
            { command: "RotateImage", screenSizes: { small: !0 } },
            {
              command: "Delete",
              isEnabled: function (e, t) {
                return !e.viewParams.tagFilter;
              },
            },
            { command: "RemoveFromAlbum", stringId: "RemoveFromBundle" },
            { command: "Untag", stringId: "RemoveFromBundle" },
            { command: "ViewOrginal" },
            { command: "SlideShow", screenSizes: { small: !0 } },
            { command: "SlideShowEnd", screenSizes: { small: !0 } },
            { command: "Embed" },
            { command: "OrderPrints" },
            { command: "AddToAlbum" },
            {
              command: "OpenFileLocation",
              isEnabled: c,
              screenSizes: { small: !0 },
            },
          ],
          _photosViewCommands: [
            { command: "CreateTailoredAlbum" },
            { command: "AddToAlbum" },
            { command: "AddToAlbumPicker" },
            { command: "Sharing" },
            { command: "Download", screenSizes: { small: !1 } },
            {
              command: "Delete",
              isEnabled: function (e, t) {
                return (
                  t.isAlbum ||
                  ("allmyphotos" == e.viewParams.qt && !e.viewParams.tagFilter)
                );
              },
            },
            { command: "RemoveFromAlbum", stringId: "RemoveFromBundle" },
            { command: "Untag", stringId: "RemoveFromBundle" },
            {
              command: "Rename",
              isEnabled: function (e, t) {
                return t.isAlbum;
              },
            },
            { command: "Deselect" },
          ],
          _folderCreateCommands: [
            {
              commandGroup: "Create",
              stringId: "CommandBarCreateText",
              imageStripOptions: "createIcon",
              members: [
                {
                  isEnabled: v,
                  command: "CreateFolder",
                  stringId: "CommandBarCreateFolder",
                },
                {},
                {
                  command: "CreateWordBlank",
                  stringId: "CommandBarCreateWord",
                },
                {
                  command: "CreateExcelBlank",
                  stringId: "CommandBarCreateExcel",
                },
                {
                  command: "CreatePowerPointBlank",
                  stringId: "CommandBarCreatePowerPoint",
                },
                {
                  command: "CreateOneNoteBlank",
                  stringId: "CommandBarCreateOneNote",
                },
                {
                  command: "CreateExcelFormBlank",
                  stringId: "CommandBarCreateExcelSurvey",
                },
                {
                  command: "CreateTextDocument",
                  stringId: "CommandBarCreateTextFile",
                },
              ],
            },
          ],
          _commands: [
            { isEnabled: p, command: "RestoreAllItems" },
            { isEnabled: p, command: "EmptyRecycleBin" },
            {
              commandGroup: "Survey",
              members: [
                { command: "SendSurvey" },
                { command: "PreviewSurvey" },
                { command: "EditSurvey" },
              ],
            },
            { command: "SlideShow" },
            { isEnabled: o, command: "ViewItem" },
            {
              commandGroup: "Open",
              members: [
                { command: "OpenInWord" },
                {
                  command: "OpenInWordWebApp",
                  stringId: "OpenInWordOnlineCommand",
                },
                { isEnabled: m, command: "OpenInExcel" },
                {
                  getStringId: function (e, t) {
                    var i = t;
                    return i.form
                      ? "OpenWorkbookInExcelWebApp"
                      : "OpenInExcelOnlineCommand";
                  },
                  command: "OpenInExcelWebApp",
                },
                { command: "OpenInOneNote" },
                {
                  command: "OpenInOneNoteWebApp",
                  stringId: "OpenInOneNoteOnlineCommand",
                },
                { command: "OpenInPowerPoint" },
                {
                  command: "OpenInPowerPointWebApp",
                  stringId: "OpenInPowerPointOnlineCommand",
                },
                { command: "OpenInVisio" },
                { command: "OpenInProject" },
                { command: "OpenInPublisher" },
              ],
            },
            { command: "Play" },
            { alias: "TopLevelRename", command: "Rename" },
            { alias: "TopLevelDownload", command: "Download" },
            { command: "Restore" },
            { isEnabled: l, command: "Delete" },
            { command: "CopyToSkyDrive" },
            { command: "ViewOrginal" },
            { command: "AddToBundle" },
            {
              commandGroup: "Share",
              stringId: "ShareCommand",
              members: [
                {
                  getStringId: function (e, i) {
                    var n,
                      r = i;
                    return (
                      r.form && r.isViewerOwner()
                        ? (n = "ShareWorkbook")
                        : t(e, i) &&
                          e.actionManager.getAction("Share", i) &&
                          (i.video
                            ? (n = "ShareVideo")
                            : i.isPanorama
                            ? (n = "SharePanorama")
                            : i.photo && (n = "SharePhoto")),
                      n
                    );
                  },
                  getSutraId: function (e) {
                    return "Share";
                  },
                  command: "Sharing",
                },
                { command: "ShareParent" },
              ],
            },
            { command: "Discuss" },
            { alias: "TopLevelEmbed", command: "Embed" },
            { isEnabled: f, command: "AddToShared" },
            {
              isEnabled: u,
              alias: "TopLevelConvertToAlbum",
              command: "ConvertToAlbum",
            },
            {
              commandGroup: "Manage",
              members: [
                { alias: "NestedDownload", command: "Download" },
                { alias: "NestedEmbed", command: "Embed" },
                {
                  isEnabled: d,
                  alias: "NestedConvertToAlbum",
                  command: "ConvertToAlbum",
                },
                {},
                { command: "RemoveFromMRU" },
                { isEnabled: n, command: "Rename" },
                {
                  alias: "NestedDelete",
                  isEnabled: s,
                  command: "Delete",
                  getStringId: function (e, t) {
                    var i = t;
                    return i.isRecycled ? "Purge" : "Delete";
                  },
                },
                { command: "RemoveMountPoint" },
                { command: "Abdicate" },
                { command: "RemoveFromBundle" },
                { command: "ReportAbuse" },
                { command: "Move" },
                { command: "Copy" },
                {},
                { command: "AddCoverPhoto" },
                { command: "RemoveCoverPhoto" },
                { command: "ViewVersions" },
                {},
                { command: "OpenFileLocation", isEnabled: c },
                { command: "ViewInFolder" },
                { isEnabled: h, command: "OwnerRequestReview" },
                { command: "ShowInAllPhotos" },
                { isEnabled: a, command: "Properties" },
              ],
            },
            { command: "AddToAlbum" },
            { command: "RotateImage" },
            { command: "CreateMountPoint" },
            {
              commandGroup: "Group",
              members: [
                { command: "GroupSendMail" },
                { command: "GroupViewMail" },
                {},
                { command: "GroupInvite" },
                { command: "GroupMembership" },
                {},
                { command: "ViewGroupCalendar" },
                { isEnabled: r, command: "Properties" },
              ],
            },
            { command: "GroupOptions" },
            { command: "OrderPrints" },
            { command: "Deselect" },
          ],
        });
      })();
    }
  ),
  define(
    "contextmenu",
    [
      "errormanager",
      "skymode",
      "selectionmanager",
      "actionmanager",
      "commandmanager",
      "wlivemenu",
    ],
    function () {
      !(function () {
        function e(e, t) {
          var i = e.itemProvider.peekParent(t),
            n = i && i.isPlaceholder;
          return (
            (s.isCurrentItem(e, t) ||
              l.isSearchResult(t) ||
              l.isAllMyPhotosDescendant(t) ||
              (l.isPartOfBundle(t) && t.isViewerOwner())) &&
            !n
          );
        }
        function t(e, t) {
          return l.isMruQuery(t);
        }
        function i(e, t) {
          return "SetView" === e.currentViewType;
        }
        function n(e, t) {
          return (
            s.isCurrentItem(e, t) &&
            t.folder &&
            1 === t.folder.category &&
            !l.isRootItem(t)
          );
        }
        function r(e, t, i) {
          e.html(t),
            sutra(e, "$Sutra.SkyDrive." + i + "Command"),
            !$B.IE && e instanceof jQuery && e.attr("tabindex", 1);
          var n = jQuery("<li></li>").append(e);
          return n;
        }
        function a(e, t) {
          function i(e, t) {
            return T.hide(), t(null, null, null, null, e.target);
          }
          function n(e) {
            var t = e.which;
            return t === _ ? (T.hide(), !1) : void 0;
          }
          function a() {
            T.hide();
          }
          var s,
            l,
            x,
            D,
            T = this,
            A = !1;
          t &&
            ((D = jQuery(t.selectionManager)),
            D.bind(o.SelectionManager.SelectionChangedEvent, a)),
            (T.render = function (e, a, f) {
              function p(e, t) {
                if (E) {
                  var n = u(e.stringId + E + "Command");
                  n && (e.string = n);
                }
                var a = t,
                  s = o.ActionManager.setATagAction(e.action, null, f.bici, i),
                  l = r(s, e.string.encodeHtml(), e.sutraId);
                l.appendTo(a);
              }
              function v(e, t, i) {
                var n = t,
                  r = jQuery("<ul></ul>");
                i(r);
                var a = r.children(),
                  o = n.children();
                a.length > 1 &&
                  (o.length > 0 &&
                    0 === o.last().find(".c_ms").length &&
                    o.last().append(m),
                  a.last().append(m)),
                  n.append(a);
              }
              function C(e, t, i, n) {
                var r = t,
                  a = window.$menu,
                  o = a.createSubmenuContainer();
                i(o);
                var s = o.children(),
                  l = s.length;
                if (l > 0) {
                  var d = u(n.stringId) || e,
                    c = jQuery("<span></span>").text(d),
                    h = a.createSubmenuChevron(
                      $menu.chevronTypes.SmallRightDark
                    ),
                    m = a.createSubmenuA(c, h),
                    g = n.sutraId || e + "Menu";
                  sutra(m, "$Sutra.SkyDrive." + g);
                  var f = function (e) {
                      window.$menu.create(e, S, {
                        menuEl: o.get(0),
                        sourceEl: m.get(0),
                      });
                    },
                    p = a.createSubmenuItem(m, o, f);
                  p.appendTo(r);
                }
              }
              function b(e, t) {
                if (t.forceSeparator) {
                  var i = e;
                  i.append(m);
                }
              }
              (x = f.ev), (A = !0);
              var _ = a && a.selectionCount;
              if (1 === _)
                for (var k in a.indexes) {
                  var D = a.parent;
                  e = t.itemProvider.getChildren(D).get(k);
                  break;
                }
              l ? (l.dispose(), (l = null)) : t.itemScopedDisposables.push(T),
                s && s.remove(),
                (s = jQuery(h).appendTo(document.body));
              var P = f.pos;
              s.css({ left: P.x, top: P.y });
              var E = f.folderEmptySpace ? y : void 0,
                B = jQuery(c)
                  .bind("keydown", n)
                  .bind(g, function () {
                    return !1;
                  });
              sutra(B, "$Sutra.SkyDrive.ContextMenu"),
                f.folderEmptySpace &&
                  (o.CommandManager.processCommands(
                    t,
                    e,
                    a,
                    I,
                    p,
                    C,
                    b,
                    B,
                    d.FolderCreateCommands
                  ),
                  T._createUploadCommand(e, a, f, B)),
                o.CommandManager.processCommands(
                  t,
                  e,
                  a,
                  f.folderEmptySpace ? I : w,
                  p,
                  v,
                  b,
                  B,
                  t.viewParams.v == wLive.Core.JSONConstants.ViewType.Photos
                    ? d.PhotosViewCommands
                    : d.DefaultCommands
                );
              var R = B.children();
              R.last().find(".c_ms").remove(), s.append(B);
              var M = s.get(0);
              window.$menu.create(x, 0, {
                menuEl: B.get(0),
                sourceEl: M,
                parentEl: document.body,
              }),
                (l = M.menu);
              var F = jQuery(
                '<a tabindex="1" style="outline:0; margin:0"></a>'
              );
              B.prepend(jQuery("<li></li>").append(F)), F.focus();
            }),
            (T._createUploadCommand = function (e, t, i, n) {
              if (o.skyMode.html5UploadEnabled) {
                if (((k = jQuery(C)), 0 == k.length)) {
                  var a = new Date().getTime();
                  return void Qos.log(
                    "SkyDriveWeb_Internal_File_JS_ContextMenu",
                    null,
                    a,
                    b,
                    void 0,
                    null,
                    a
                  );
                }
                if (1 == k.length) {
                  var s = jQuery("<a/>"),
                    l = r(s, f.encodeHtml(), "Upload");
                  l.appendTo(n),
                    s.bind("click", function (e) {
                      k.click();
                    });
                } else if (
                  "webkitdirectory" in document.createElement("input") &&
                  FilesConfig.folderUploadEnabled
                ) {
                  var d = jQuery("<a></a>"),
                    u = r(d, v.encodeHtml(), "UploadFile");
                  d.bind("click", function (e) {
                    k[0].click();
                  });
                  var c = jQuery("<a/>"),
                    h = r(c, p.encodeHtml(), "UploadFolder");
                  c.bind("click", function (e) {
                    k[1].click();
                  });
                  var m = window.$menu.createSubmenuContainer(),
                    g = f,
                    y = jQuery("<span></span>").text(g),
                    _ = window.$menu.createSubmenuChevron(
                      $menu.chevronTypes.SmallRightDark
                    ),
                    w = window.$menu.createSubmenuA(y, _),
                    I = f + "Menu";
                  sutra(w, "$Sutra.SkyDrive." + I),
                    u.appendTo(m),
                    h.appendTo(m);
                  var x = window.$menu.createSubmenuItem(w, m, function (e) {
                    window.$menu.create(e, S, { menuEl: m[0], sourceEl: w[0] });
                  });
                  x.appendTo(n);
                }
              }
            }),
            (T.hide = function () {
              A && (l && l.hide(), (A = !1));
            }),
            (T.dispose = function () {
              l && (l.dispose(), (l = null)),
                s && s.empty(),
                D && D.unbind(o.SelectionManager.SelectionChangedEvent, a);
            });
        }
        var o = wLive.Core,
          s = o.CommandManager,
          l = o.SkyDriveItemHelper,
          d = o.CommandManager.CommandSetEnum,
          u = o.AleHelpers.getPCString,
          c = '<ul class="c_m t_hovl"></ul>',
          h = '<div class="c_mp co_me" style="position:absolute;"></div>',
          m = '<span class="c_ms"></span>',
          g = "contextmenu",
          f = u("CommandBarAddFiles"),
          p = u("CommandBarCreateFolder"),
          v = u("LeftNavBar.MyFiles.Text"),
          y = "Folder",
          C = ".cb_uploadInput input",
          S = 6,
          b = 1001,
          _ = 27,
          k = jQuery(""),
          w = {
            TopLevelRename: s.commandDisabled,
            NestedDownload: s.commandDisabled,
            NestedShare: s.commandDisabled,
            NestedEmbed: s.commandDisabled,
            OpenFileLocation: e,
            Properties: s.isNotCurrentItem,
            Rename: i,
            ShareParent: s.commandDisabled,
            SlideShow: s.commandDisabled,
            ViewInFolder: t,
            NestedDelete: s.isDeleteEnabled,
            OwnerRequestReview: s.isOwnerRequestReviewEnabled,
            ShowInAllPhotos: s.commandDisabled,
          },
          I = {
            TopLevelRename: s.commandDisabled,
            TopLevelDownload: s.commandDisabled,
            NestedShare: s.commandDisabled,
            TopLevelEmbed: s.commandDisabled,
            OpenFileLocation: s.commandDisabled,
            Rename: s.commandDisabled,
            ShareParent: s.commandDisabled,
            SlideShow: s.commandDisabled,
            ViewInFolder: s.commandDisabled,
            NestedDelete: s.commandDisabled,
            OwnerRequestReview: s.commandDisabled,
            ShowInAllPhotos: n,
          };
        wLive.Controls.ContextMenu = a;
      })();
    }
  ),
  define("legacycontroladapter", ["imagetile", "errormanager"], function () {
    !(function () {
      defineSubClass(
        "SkyDrive.UI.LegacyControlAdapter",
        JBase.UI.BaseControl,
        function () {
          this._controlInstance = null;
        },
        {
          controlType: null,
          constructorOption: null,
          renderOption: null,
          disposeOnDeactivate: !1,
          onResize: function () {
            this._controlInstance &&
              this._controlInstance.resize &&
              this._controlInstance.resize();
          },
          onActivate: function () {
            this._updateControl(!0);
          },
          onDeactivate: function () {
            this.disposeOnDeactivate &&
              this._controlInstance &&
              (this._controlInstance.dispose(), (this._controlInstance = null));
          },
          onDataContextChanged: function (e) {
            this._updateControl();
          },
          _updateControl: function (e) {
            var t = this.dataContext;
            (this.isActive || e) && t && t.item
              ? (this._controlInstance ||
                  ((this._controlInstance = new this.controlType(
                    jQuery(this.element),
                    wLive.Core.ViewContext.getInstance(),
                    this.constructorOption
                  )),
                  (this._controlInstance.parent = this)),
                this._controlInstance.render(t.item, this.renderOption))
              : this._controlInstance &&
                (this._controlInstance.dispose(),
                (this._controlInstance.parent = null),
                (this._controlInstance = null));
          },
          onDispose: function () {
            this._controlInstance &&
              (this._controlInstance.dispose(), (this._controlInstance = null));
          },
        }
      );
    })();
  }),
  define("newcontroladapter", ["legacycontroladapter"], function () {
    !(function () {
      defineClass(
        "SkyDrive.UI.NewControlAdapter",
        function (e, t) {
          (this.element = e ? e[0] : null),
            (this._viewContext = t),
            (this._constructorArgs = Array.prototype.slice.call(arguments, 2)),
            (this._controlInstance = null);
        },
        {
          controlType: null,
          initialize: function () {
            if (!this._controlInstance && this.controlType) {
              var e = this._constructorArgs;
              (this._controlInstance = new this.controlType(
                e[0],
                e[1],
                e[2],
                e[3],
                e[4],
                e[5]
              )),
                (this._controlInstance.parent = this);
            }
          },
          render: function (e, t) {
            var i = e ? { item: e } : {};
            this.initialize(),
              this._controlInstance.setDataContext(i, t),
              this._controlInstance.isActive ||
                ((this.element.innerHTML = this._controlInstance.renderHtml()),
                this._controlInstance.activate());
          },
          exposeResources: function (e) {
            this.initialize(), this._controlInstance.exposeResources(e);
          },
          isLoaded: function () {
            return (
              !this._controlInstance ||
              !this._controlInstance.isLoaded ||
              this._controlInstance.isLoaded()
            );
          },
          resize: function () {
            this._controlInstance &&
              this._controlInstance.resize &&
              this._controlInstance.resize();
          },
          dispose: function () {
            this._controlInstance &&
              (this._controlInstance.dispose(),
              (this._controlInstance.parent = null),
              (this._controlInstance = null));
          },
        }
      );
    })();
  }),
  define("filetypes", ["imagetile", "errormanager"], function () {
    !(function () {
      defineNamespace("SkyDrive.Constants.FileTypes", {
        access: "access",
        adobe: "adobe",
        audio: "audio",
        excel: "excel",
        exe: "exe",
        folder: "folder",
        file: "file",
        html: "html",
        infoPath: "infopath",
        oneNote: "onenote",
        pdf: "pdf",
        picture: "picture",
        powerPoint: "powerpoint",
        project: "project",
        publisher: "publisher",
        richText: "richtext",
        text: "text",
        video: "video",
        visio: "visio",
        word: "word",
        xaml: "xaml",
        xml: "xml",
        xps: "xps",
        zip: "zip",
      });
    })();
  }),
  define("filetypehelper", ["filetypes"], function () {
    !(function () {
      var e = JBase.UI.ImageStripHelper,
        t = SkyDrive.Constants.FileTypes,
        i = "v2",
        n = {
          accdb: t.access,
          ai: t.adobe,
          audio: t.audio,
          doc: t.word,
          docm: t.word,
          docx: t.word,
          dot: t.word,
          dotm: t.word,
          dotx: t.word,
          exe: t.exe,
          html: t.html,
          mdb: t.access,
          mpp: t.project,
          mpt: t.project,
          odp: t.powerPoint,
          ods: t.excel,
          odt: t.word,
          one: t.oneNote,
          onepkg: t.oneNote,
          onetoc2: t.oneNote,
          notebook: t.oneNote,
          pdf: t.pdf,
          photo: t.picture,
          pot: t.powerPoint,
          potm: t.powerPoint,
          potx: t.powerPoint,
          ppa: t.powerPoint,
          ppam: t.powerPoint,
          pps: t.powerPoint,
          ppsm: t.powerPoint,
          ppsx: t.powerPoint,
          ppt: t.powerPoint,
          pptm: t.powerPoint,
          pptx: t.powerPoint,
          ps: t.adobe,
          psd: t.adobe,
          pub: t.publisher,
          rtf: t.richText,
          txt: t.text,
          video: t.video,
          vdw: t.visio,
          vsd: t.visio,
          vsdm: t.visio,
          vsdx: t.visio,
          vsl: t.visio,
          vss: t.visio,
          vssm: t.visio,
          vssx: t.visio,
          vst: t.visio,
          vstm: t.visio,
          vstx: t.visio,
          xaml: t.xaml,
          xla: t.excel,
          xlam: t.excel,
          xll: t.excel,
          xls: t.excel,
          xlsb: t.excel,
          xlsm: t.excel,
          xlsx: t.excel,
          xlt: t.excel,
          xltm: t.excel,
          xltx: t.excel,
          xml: t.xml,
          xps: t.xps,
          xsn: t.infoPath,
          zip: t.zip,
        };
      defineNamespace("SkyDrive.FileTypeHelper", {
        iconVersion: i,
        getFileType: function (e) {
          var i = "";
          if (e) {
            var r = e.iconType || "";
            i = e.folder ? t.folder : n[r.toLowerCase()];
          }
          return i || t.file;
        },
        getIconInfo: function (t, n, r, a, o, s) {
          var l;
          if (t) {
            var d = this.isAdobeFile(t),
              u = s || (d ? "Photo" : t.iconType) || "";
            s ||
              ("NonEmptyAlbum" !== u && "EmptyAlbum" !== u) ||
              t.isSpecialFolder ||
              (u = "Folder"),
              "Folder" === u &&
                ((u = t.folder && !t.folder.totalCount ? "Empty" : "NonEmpty"),
                (u += "DocumentFolder")),
              FilesConfig.visualUpdatesForSharedContent &&
                !s &&
                !t.isBundle &&
                t.folder &&
                t.sharingLevelValue !==
                  wLive.Core.JSONConstants.SharingLevel.Private &&
                (u = "SharedFolder");
            var c = "ft_" + n + "_" + u + (t.folder && r ? "Selected" : "");
            if (((l = e.getImageInfo(c, a, o)), !l && t.iconType)) {
              var h = 16 === n ? "tiny" : 32 === n ? "smaller" : "small";
              l = {
                url:
                  FilesConfig.foldersImgBaseUrl +
                  "/icons/" +
                  i +
                  "/" +
                  h +
                  "/" +
                  t.iconType +
                  ".png",
                containerSize: { width: n, height: n },
                imagePosition: { left: 0, top: 0 },
                alt: a,
                title: o,
              };
            }
          }
          return l;
        },
        isOfficeDocument: function (e) {
          var i = this.getFileType(e);
          return (
            i === t.word ||
            i === t.excel ||
            i === t.powerPoint ||
            i === t.oneNote ||
            i === t.pdf
          );
        },
        isAdobeFile: function (e) {
          var i = this.getFileType(e);
          return i == t.adobe;
        },
      });
    })();
  }),
  define("baseitemprovider", ["errormanager"], function () {
    !(function () {
      defineSubClass(
        "SkyDrive.Core.BaseItemProvider",
        JBase.DataContext,
        function () {
          this.dataModel = wLive.Core.DataModel.getInstance();
        },
        {
          getSetKey: function (e, t, i, n, r, a, o) {
            return wLive.Core.SkyDriveItem.getSetKey(t, null, n, r, i, a);
          },
          setSkyDriveItemDefaultSetKey: function (e, t, i, n, r, a) {
            wLive.Core.SkyDriveItem.setDefaultSetKey(
              this.getSetKey(e, t, i, n, r, a)
            );
          },
          peekItem: function (e, t) {
            return this.dataModel && e
              ? this.dataModel.getItem(
                  e,
                  !0,
                  t,
                  wLive.Core.SkyDriveItem.getSetKey()
                )
              : null;
          },
          getItem: function (e, t, i, n) {
            return this.dataModel && e
              ? this.dataModel.getItem(e, !1, t, n || this.getSetKey(e), i)
              : null;
          },
          peekParent: function (e) {
            return this.peekItem(e.parentKey);
          },
          getParent: function (e) {
            return this.getItem(e.parentKey);
          },
          getChildren: function (e, t) {
            return e ? e.getChildren(t || this.getSetKey(e.key)) : null;
          },
        }
      );
    })();
  }),
  define("skywebitemprovider", ["baseitemprovider"], function () {
    !(function () {
      var e = (wLive.Core, "1"),
        t = "7",
        i = "SkyDrive.Sort.",
        n = "SkyDrive.GroupBy",
        r = "SkyDrive.GetItemsOverridesLookup";
      defineSubClass(
        "SkyDrive.Core.SkyWebItemProvider",
        SkyDrive.Core.BaseItemProvider,
        function () {
          (this._sortFieldItemCache = {}),
            (this._sortDirectionItemCache = {}),
            (this._overridesLookup = BrowserStorage.getLocalValue(r) || {}),
            (this._viewContext = wLive.Core.ViewContext.getInstance()),
            (this.currentFilterType = ""),
            (this.currentFilterTypeOverride = void 0),
            (this.currentTagFilter = null),
            (this.isFileGroupingEnabled = !0),
            (this.queryType = "");
        },
        {
          getSetKey: function (e, t, i, n, r, a) {
            if (e) {
              var o = wLive.Core.SkyDriveItem.getItemKeyParts(e);
              void 0 === t && (t = this._getBestEffortSortField(e)),
                void 0 !== this.currentFilterTypeOverride
                  ? (n = this.currentFilterType =
                      this.currentFilterTypeOverride)
                  : void 0 === n &&
                    (n = this.currentFilterType =
                      this._viewContext.viewParams.ft || ""),
                void 0 === r && (r = this._getGroupByParam(e, o)),
                void 0 === i && (i = this._getBestEffortSortDirection(e)),
                void 0 === a &&
                  (a = this.currentTagFilter =
                    this._viewContext.viewParams.tagFilter || ""),
                o &&
                  "queue" === o.qt &&
                  ((t = "0"), (n = null), (r = "0,1,2"), (i = "0"));
            }
            var s = wLive.Core.SkyDriveItem.getSetKey(t, null, n, r, i, a);
            return s;
          },
          setSort: function (e, t, n) {
            if (
              ((void 0 !== n && null != n) || (n = "0"),
              t != this._getBestEffortSortField(e) ||
                (n && n != this._getBestEffortSortDirection(e)))
            ) {
              (this._sortFieldItemCache[e] = t),
                (this._sortDirectionItemCache[e] = n),
                BrowserStorage.setSessionValue(i + e, {
                  sortField: t,
                  sortDirection: n,
                });
              var r = this.peekItem(e);
              r && r.invalidate();
            }
          },
          setDefaultGroupBy: function (e, t) {
            var i = this.peekItem(e);
            if (i && t != this.getItemDefaultGroupBy(i.key)) {
              var r = i.getViewCategory(),
                a = this._storageViewCategoryInLocalStorage(r),
                o = a
                  ? BrowserStorage.getLocalValue(n)
                  : BrowserStorage.getSessionValue(n);
              o || (o = {}),
                o[r] != t &&
                  ((o[r] = t),
                  a
                    ? BrowserStorage.setLocalValue(n, o)
                    : BrowserStorage.setSessionValue(n, o),
                  i.invalidate());
            }
          },
          getItemDefaultSortField: function (t) {
            var i = e,
              n = this._getSortByItem(t),
              r = this._overridesLookup[t];
            return (i =
              n && n.folder && n.folder.defaultSort && !n.isPlaceholder
                ? n.folder.defaultSort + ""
                : r && void 0 !== r.sb
                ? r.sb
                : "0");
          },
          getItemDefaultSortDirection: function (e) {
            var t = "0",
              i = this._getSortByItem(e),
              n = this._overridesLookup[e];
            return (
              i && i.folder && i.folder.defaultSortDirection && !i.isPlaceholder
                ? (t = i.folder.defaultSortDirection)
                : n && void 0 !== n.sd && (t = n.sd),
              t
            );
          },
          getItemDefaultGroupBy: function (e) {
            var t = wLive.Core.SkyDriveItem.getItemKeyParts(e);
            return this._getGroupByParam(e, t);
          },
          _getBestEffortSortField: function (e) {
            var i = this._getSortByItem(e);
            e = i ? i.key : e;
            var n = this.getItemDefaultSortField(e);
            return (
              this._updateCacheValues(e),
              this._sortFieldItemCache[e] !== t ||
                wLive.Core.SkyDriveItemHelper.isSharedQuery(this.peekItem(e)) ||
                (this._sortFieldItemCache[e] = null),
              this._sortFieldItemCache[e] || 0 === this._sortFieldItemCache[e]
                ? this._sortFieldItemCache[e]
                : n
            );
          },
          _getBestEffortSortDirection: function (e) {
            var t = this._getSortByItem(e);
            e = t ? t.key : e;
            var i = this.getItemDefaultSortDirection(e);
            return (
              this._updateCacheValues(e),
              this._sortDirectionItemCache[e] ||
              0 === this._sortDirectionItemCache[e]
                ? this._sortDirectionItemCache[e]
                : i
            );
          },
          _onResponseAvailable: function (e) {
            var t = e.itemKey,
              i = e.setKey,
              n = this.getSetKey(t, void 0, void 0, void 0, void 0, void 0, !0),
              a = (this._overridesLookup[t] = {}),
              o = e.response,
              s = o.items[0];
            if (s && s.folder && s.folder.childCount > 0) {
              var l = wLive.Core.SkyDriveItem.getSetKeyParts(n),
                d = wLive.Core.SkyDriveItem.getSetKeyParts(i);
              o.sortOrder == l.sb &&
                o.sortDirection == l.sd &&
                d.gb == l.gb &&
                ((a.sb = d.sb), (a.sd = d.sd), (a.gb = d.gb));
            }
            BrowserStorage.setLocalValue(r, this._overridesLookup);
          },
          _getSortByItem: function (e) {
            var t = this.peekItem(e);
            return t && !t.folder && (t = this.peekParent(t)), t;
          },
          _getGroupByParam: function (e, t) {
            var i = null,
              n = this._overridesLookup[e],
              r = this.peekItem(e);
            if (
              "shared" == t.qt ||
              "sharedby" == t.qt ||
              "search" == t.qt ||
              "allmyphotos" == t.qt
            )
              i = "0";
            else if (r) {
              var a = this._getViewCategoryDefaultGroupBy(r);
              a
                ? (i = a)
                : r.folder &&
                  r.folder.defaultGroupBy &&
                  !r.isPlaceholder &&
                  (i = r.folder.defaultGroupBy);
            }
            return !i && n && void 0 !== n.gb && (i = n.gb), i || "0,1,2";
          },
          _storageViewCategoryInLocalStorage: function (e) {
            return !0;
          },
          _getViewCategoryDefaultGroupBy: function (e) {
            var t = e.getViewCategory(),
              i = this._storageViewCategoryInLocalStorage(t),
              r = i
                ? BrowserStorage.getLocalValue(n)
                : BrowserStorage.getSessionValue(n),
              a = r && r[t];
            return a;
          },
          _updateCacheValues: function (e) {
            if (void 0 === this._sortFieldItemCache[e]) {
              var t = BrowserStorage.getSessionValue(i + e);
              t &&
                ((this._sortFieldItemCache[e] = t.sortField),
                (this._sortDirectionItemCache[e] = t.sortDirection));
            }
          },
        }
      );
    })();
  }),
  define("itemactionhelper", ["jquery-1.7.2", "errormanager"], function () {
    !(function () {
      function e(e) {
        return e ? e.encodeURIComponent() : r;
      }
      function t(e, t, i, n) {
        var r = e ? e.ownerCid : null;
        return n ? n : r || t.callerCid;
      }
      function i(e, t) {
        var i =
          e &&
          !e.isTagFolder &&
          (e.photo ||
            e.video ||
            e.isProcessingVideo ||
            "SelfView" === t.currentViewType);
        return {
          shouldKeepQueryType:
            t.viewParams.qt &&
            (("allmyphotos" === t.viewParams.qt &&
              !e.isAlbum &&
              !e.isTagsRoot) ||
              ("sharedby" === t.viewParams.qt && (i || e.isSharerFolder))),
          hasParentParam: t.viewParams.parQt || t.viewParams.parId,
          shouldUseSelfView: i,
          hasChildren: e && e.folder && e.folder.childCount,
        };
      }
      var n = wLive.Core,
        r = "",
        a = "&v=",
        o = n.ViewContext.getInstance(),
        s = n.SkyDriveItemHelper,
        l = n.JSONConstants;
      wLive.Core.ItemActionHelper = {
        itemStringFormat: function (d, u, c, h) {
          return d.itemFormat(
            {
              item: u,
              $Config: window.$Config,
              FilesConfig: FilesConfig,
              ViewContext: o,
            },
            {
              encodeUrl: function (e) {
                return e ? e.encodeUrl() : r;
              },
              encodeURIComponent: e,
              cid: t,
              cidQueryString: function (i, n, a, o, l) {
                var d = l || (i && i.group),
                  u = i && s.isSearchQuery(i) && "root" == i.id,
                  c = i && s.isRecycleBinQuery(i);
                return u
                  ? "qt=search&q=" + s.getSearchQuery(i).encodeURIComponent()
                  : "cid=" +
                      e(t(i, n, a, o)) +
                      (d ? "&group=1" : r) +
                      (c ? "&qt=recyclebin" : r);
              },
              profileDomain: function (e, t, i, n, r) {
                var a = r === !0 || r === !1 ? r : e && e.group;
                return a ? i.groupsDomain : i.profileDomain;
              },
              groupsDomain: function () {
                return FilesConfig.groupsDomain;
              },
              groupEmail: function (e) {
                return e && s.isGroupRoot(e) && e.groupEmail
                  ? e.groupEmail
                  : "";
              },
              deviceIdQueryString: function (e, t) {
                return e && e.did ? "&did=" + e.did.encodeURIComponent() : r;
              },
              resIdQueryString: function (e, t) {
                return e && "root" != e.id
                  ? "&resid=" + e.id.encodeURIComponent()
                  : r;
              },
              idAsParentIdQueryString: function (e) {
                return e ? "&parid=" + e.id.encodeURIComponent() : r;
              },
              appQueryString: function (e, t) {
                var i =
                    wLive.Core.SkyDriveItemHelper.getNormalizedExtension(e) ||
                    e.iconType,
                  n = null;
                switch (i) {
                  case "Doc":
                    n = "Word";
                    break;
                  case "Pdf":
                    n = "WordPdf";
                    break;
                  case "Xls":
                    n = "Excel";
                    break;
                  case "Ppt":
                    n = "PowerPoint";
                    break;
                  case "One":
                  case "OneNotebook":
                    n = "OneNote";
                }
                return n ? "&app=" + n : r;
              },
              authKeyQueryString: function (e, t) {
                var i = t.viewParams;
                return i.ticket
                  ? "&ticket=" + i.ticket.encodeURIComponent()
                  : i.authkey
                  ? "&authkey=" + i.authkey.encodeURIComponent()
                  : r;
              },
              iamQueryString: function (e, t) {
                var i = t.viewParams;
                return i.iam ? "&iam=" + i.iam.encodeURIComponent() : r;
              },
              idQueryString: function (e, t) {
                var n = r,
                  a = i(e, t);
                return (
                  a.shouldKeepQueryType ||
                  !a.hasParentParam ||
                  (a.shouldUseSelfView && !a.hasChildren) ||
                  (e && e.parentId === t.viewParams.id)
                    ? e &&
                      (n =
                        !e.isTagsRoot &&
                        (e.isTagFolder ||
                          (t.viewParams.tagFilter &&
                            t.viewParams.v == l.ViewType.Photos &&
                            e.folder))
                          ? "root"
                          : e.id)
                    : (n = t.viewParams.parId),
                  "root" == n ? r : "&id=" + n.encodeURIComponent()
                );
              },
              parentIdQueryString: function (e, t) {
                return e.parentId && !e.directlyShared
                  ? "root" == e.parentId
                    ? r
                    : "&id=" + e.parentId.encodeURIComponent()
                  : r;
              },
              parentId: function (e, t) {
                return (e.parentId || r).encodeURIComponent();
              },
              isFolder: function (e) {
                return e.folder ? 1 : 0;
              },
              scenario: function (e, t) {
                return t.viewParams.sc ? "&sc=" + t.viewParams.sc : r;
              },
              queryType: function (e, t) {
                return t.viewParams.qt ? "&qt=" + t.viewParams.qt : r;
              },
              wacQueryType: function (e, t) {
                var i = r;
                return (
                  t.viewParams.wacqt
                    ? (i = "&wacqt=" + t.viewParams.wacqt)
                    : t.viewParams.qt
                    ? (i = "&wacqt=" + t.viewParams.qt)
                    : t.viewParams.cid &&
                      !n.StringHelpers.caseInsensitiveStringEquals(
                        t.viewParams.cid,
                        t.callerCid
                      ) &&
                      (i = "&wacqt=sharedby"),
                  i
                );
              },
              selfViewQueryType: function (e, t) {
                function n(e) {
                  return (
                    d && (e += "&beginDate=" + d),
                    u && (e += "&endDate=" + u),
                    c && (e += "&highlights=" + c),
                    e
                  );
                }
                var a = r,
                  o = t.viewParams.qt,
                  s = t.viewParams.parQt,
                  l = t.viewParams.parId,
                  d = t.viewParams.beginDate,
                  u = t.viewParams.endDate,
                  c = t.viewParams.highlights,
                  h = e && e.getParent && e.getParent(!0),
                  m = i(e, t);
                if (m.shouldKeepQueryType)
                  if (m.shouldUseSelfView) {
                    var g =
                      "sharedby" !== o ||
                      (t.viewParams.id && "root" !== t.viewParams.id)
                        ? t.viewParams.id
                        : e.ownerDCid;
                    (a = "&parQt=" + o + "&parId=" + (g || "root")), (a = n(a));
                  } else a = "&qt=" + t.viewParams.qt;
                else
                  m.hasParentParam
                    ? m.shouldUseSelfView &&
                      !m.hasChildren &&
                      "SelfView" === t.currentViewType
                      ? (s && (a = "&parQt=" + s),
                        l && (a += "&parId=" + l),
                        (a = n(a)))
                      : s && (a = "&qt=" + s)
                    : h && (h.isBundle || h.isAlbum)
                    ? (a = "&parId=" + h.id)
                    : e && e.isSharerFolder
                    ? (a = "&qt=sharedby")
                    : e &&
                      e.keyParts &&
                      e.keyParts.qt &&
                      ("sharedby" === e.keyParts.qt || e.isTagFolder) &&
                      (a = "&qt=" + e.keyParts.qt);
                return a;
              },
              filterTypeParams: function (e, t) {
                var i = t.viewParams.ft;
                return i ? "&ft=" + i.encodeUrl() : r;
              },
              tagFilterParams: function (e, t) {
                var i = t.viewParams.tagFilter;
                return (
                  e &&
                    (e && e.isTagFolder
                      ? (i = e.tagName || e.name)
                      : e && e.isTagsRoot && (i = null)),
                  i ? "&tagFilter=" + i.encodeUrl() : r
                );
              },
              searchParams: function (e, t) {
                var i = e && s.isSearchResult(e),
                  n =
                    e &&
                    (e.photo ||
                      e.video ||
                      e.isProcessingVideo ||
                      "SelfView" === t.currentViewType);
                return i && n
                  ? "&qt=search&q=" + s.getSearchQuery(e).encodeURIComponent()
                  : r;
              },
              viewQueryString: function (e, t) {
                var i = t.viewParams.v,
                  n = !1;
                e &&
                  (FilesConfig.tailoredPhotos
                    ? (n =
                        (FilesConfig.enableAlbumsView &&
                          (e.isAlbum || e.isAlbumRoot)) ||
                        s.isAllMyPhotosQuery(e) ||
                        (FilesConfig.enableTagsView && "tags" == e.id))
                    : FilesConfig.enableAlbumsRecipientView && (n = e.isAlbum));
                var o = e && (e.photo || e.video || e.isProcessingVideo),
                  d = r;
                return (
                  o
                    ? (d = a + l.ViewType.Self)
                    : i &&
                      i != l.ViewType.Self &&
                      "DevicesView" !== i &&
                      "TextFileEditor" !== i
                    ? (d = a + i)
                    : n && (d = a + l.ViewType.Photos),
                  d
                );
              },
            },
            [u, o, FilesConfig, c, h]
          );
        },
      };
    })();
  }),
  define(
    "navitemdatacontext",
    ["jbase", "basecontrol", "imagetile", "wlivemenu"],
    function () {
      !(function () {
        defineSubClass(
          "Shared.UI.NavItemDataContext",
          JBase.DataContext,
          function (e) {},
          {
            reset: function () {
              mix(this, {
                type: "NavLink",
                html: "",
                text: "Nav Link",
                url: "#",
                target: "",
                key: "",
                sutra: "",
                imageData: null,
                isEnabled: !0,
                isVisible: !0,
                isSelected: !1,
                isBolded: !1,
                isImageSelectMode: !1,
                childItems: null,
                click: null,
                chevronDark: !0,
                showChevron: !0,
                allowClicks: null,
                includeSeparator: !1,
                closeMenuOnClick: null,
              });
            },
          }
        );
      })();
    }
  ),
  define("navseparator", ["navitemdatacontext"], function () {
    !(function () {
      defineSubClass(
        "Shared.UI.NavSeparator",
        JBase.UI.BaseControl,
        function () {},
        {
          baseTag: "span",
          baseDataContextType: Shared.UI.NavItemDataContext,
          onDataContextChanged: function (e) {
            this.isVisible = !!e.isVisible;
          },
        }
      );
    })();
  }),
  define("navseparator.html", ["navseparator"], function () {
    (Shared.UI.NavSeparator.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' role="presentation" aria-hidden="true" id="' +
        htmlAttributeEncode(this.id + "_0") +
        '" style="' +
        this.baseStyle +
        " " +
        generateStyleAttribute("display", this.isVisible) +
        '" class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        ' c_ms"></' +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        Shared.UI.NavSeparator,
        [{ id: 0, css: ["display", "isVisible"] }],
        [],
        {}
      );
  }),
  define("navlink", ["navseparator.html"], function () {
    !(function () {
      var e;
      defineSubClass(
        "Shared.UI.NavLink",
        JBase.UI.BaseControl,
        function () {
          (e = e || $menu.createChevron($menu.chevronTypes.SmallRightDark, !0)),
            (this.thumbsLinkImage = this.createChild(JBase.UI.ImageTile));
        },
        {
          baseTag: "a",
          baseDataContextType: Shared.UI.NavItemDataContext,
          sutra: "",
          onActivate: function () {
            window.sutra && this.sutra && sutra(this.element, this.sutra);
          },
          onDataContextChanged: function (t) {
            var i = this;
            (i.navHtml =
              t.html ||
              ($B.rtl ? "&rlm;" : "&lrm;") +
                htmlEncode(t.text) +
                (t.targetOverlay ? t.targetOverlay : "")),
              (i.chevronHtml = t.showBCBChevron ? e : ""),
              (i.showChevron = t.showBCBChevron),
              (i.isSelected = !!t.isSelected),
              (i.url = t.url || "#"),
              (i.isBolded = !!t.isBolded),
              (i.displayImage = !!t.imageData || t.isImageSelectMode),
              (i.isImageVisible =
                t.imageData && !(t.isImageSelectMode && !t.isSelected)),
              (i.target = t.target || ""),
              (i.sutra = t.sutra || ""),
              (i.closeMenuOnClick = t.closeMenuOnClick || null),
              t.imageData && i.thumbsLinkImage.setDataContext(t.imageData),
              (i.isVisible = !!t.isVisible);
          },
          _onLinkClicked: function (e) {
            var t = this.dataContext.click;
            return (
              this.closeMenuOnClick && window.$menu && $menu.closeAll(),
              t ? t(e) : !0
            );
          },
        }
      );
    })();
  }),
  define("navlink.html", ["navlink"], function () {
    (Shared.UI.NavLink.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        sutraAttribute("SkyDrive.SharedNavLink") +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '" style="' +
        this.baseStyle +
        " " +
        generateStyleAttribute("display", this.isVisible) +
        '" class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        generateClassAttribute("isSelected", this.isSelected) +
        '"' +
        generateAttributesString("href", this.url, "target", this.target) +
        "><span" +
        sutraAttribute("SkyDrive.Image") +
        ' id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" style="' +
        generateStyleAttribute("display.inlineblock", this.displayImage) +
        '" class="navLinkImage' +
        generateClassAttribute("imageVisible", this.isImageVisible) +
        '">' +
        this.thumbsLinkImage.renderHtml() +
        '</span><span id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" class="' +
        generateClassAttribute("c_rchev", this.showChevron) +
        '">' +
        this.chevronHtml +
        '</span><span id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" class="navLinkText' +
        generateClassAttribute("isBolded", this.isBolded) +
        '">' +
        this.navHtml +
        "</span></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        Shared.UI.NavLink,
        [
          {
            id: 0,
            css: ["display", "isVisible"],
            attr: ["href", "url", "target", "target"],
            className: ["isSelected", "isSelected"],
            userActions: { click: "_onLinkClicked" },
          },
          {
            id: 1,
            css: ["display.inlineBlock", "displayImage"],
            className: ["imageVisible", "isImageVisible"],
          },
          {
            id: 2,
            attr: ["html", "chevronHtml"],
            className: ["c_rchev", "showChevron"],
          },
          {
            id: 3,
            attr: ["html", "navHtml"],
            className: ["isBolded", "isBolded"],
          },
        ],
        [],
        {}
      );
  }),
  define("navlinkdisabled", ["navlink.html"], function () {
    !(function () {
      defineSubClass(
        "Shared.UI.NavLinkDisabled",
        Shared.UI.NavLink,
        function () {},
        {
          baseTag: "span",
          _onLinkClicked: function (e) {
            return this.dataContext.allowClicks === !0;
          },
        }
      );
    })();
  }),
  define("navitem", ["navlinkdisabled"], function () {
    !(function () {
      defineSubClass(
        "Shared.UI.NavItem",
        JBase.UI.BaseControl,
        function () {
          this.contentControl = this.createChild(JBase.UI.ContentControl, {
            getControlType: bind(this, this.getControlType),
          });
        },
        {
          baseTag: "li",
          baseDataContextType: Shared.UI.NavItemDataContext,
          onDataContextChanged: function (e) {
            var t = this;
            e.baseClass && (t.baseClass = e.baseClass),
              t.contentControl.setDataContext(e),
              e.teachingBubble &&
                ((t.teachingBubble = e.teachingBubble),
                t.teachingBubble.setDataContext({ isVisible: e.isVisible }));
          },
          onDispose: function () {
            var e = this;
            e.teachingBubble && e.teachingBubble.dispose();
          },
          getControlType: function (e) {
            var t = e.type;
            return (
              "NavLink" == t
                ? (e.isEnabled || (t += "Disabled"),
                  e.includeSeparator && (this.includeSeparator = !0))
                : (this.includeSeparator = !1),
              Shared.UI[t] || t
            );
          },
        }
      );
    })();
  }),
  define("navitem.html", ["navitem"], function () {
    (Shared.UI.NavItem.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '">' +
        this.contentControl.renderHtml() +
        '<span role="presentation" id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" style="' +
        generateStyleAttribute("display", this.includeSeparator) +
        '" class="c_ms"></span></' +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        Shared.UI.NavItem,
        [{ id: 0 }, { id: 1, css: ["display", "includeSeparator"] }],
        [],
        {}
      );
  }),
  define("menu", ["navitem.html"], function () {
    !(function (e) {
      defineSubClass(
        "Shared.UI.Menu",
        JBase.UI.BaseControl,
        function () {
          (this.navLinksRepeater = this.createChild(JBase.UI.Repeater, {
            childControl: Shared.UI.NavItem,
            baseTag: "ul",
            baseClass: "uxfa_m c_m t_hovl",
          })),
            (this.thumbsLinkImage = this.createChild(JBase.UI.ImageTile));
        },
        {
          baseTag: "span",
          isExpanded: !1,
          suppressUpdates: !1,
          menuLoc: 0,
          skipEdgeDetection: !1,
          subMenuLoc: 6,
          arrowKeysNavigate: !0,
          _menu: null,
          baseDataContextType: Shared.UI.NavItemDataContext,
          sutra: "",
          onActivate: function () {
            window.sutra &&
              this.sutra &&
              sutra(this.subElements.menuLink, this.sutra);
          },
          onDeactivate: function () {
            this._menu && (this._menu.dispose(), (this._menu = null));
          },
          onDataContextChanged: function (e) {
            var t = this,
              i =
                e.chevronType ||
                (e.chevronDark
                  ? $menu.chevronTypes.SmallDownDark
                  : $menu.chevronTypes.SmallDownLight);
            t.showChevron = !!e.showChevron;
            for (var n = e.childItems || [], r = 0; r < n.length; r++) {
              var a = n[r];
              a.childItems ||
                a.closeMenuOnClick === !1 ||
                (a.closeMenuOnClick = !0);
            }
            t.navLinksRepeater.setDataContext({ items: n }),
              (t.text = e.text || ""),
              (t.chevronHtml = " " + ($menu.createChevron(i, !0) || "")),
              (t.isEnabled = !!e.isEnabled),
              (t.displayImage = !!e.imageData || e.isImageSelectMode),
              (t.isImageVisible =
                e.imageData && !(e.isImageSelectMode && !e.isSelected)),
              (t.sutra = e.sutra || ""),
              e.imageData && t.thumbsLinkImage.setDataContext(e.imageData),
              t.doOnEndOfRenderFrame("updateMenu", function () {
                t.isActive && t._menu && !t.suppressUpdates && t._menu.update();
              });
          },
          show: function () {
            this.isExpanded ||
              (this._menuBind(),
              this._menu && this._menu.show(),
              (this.isExpanded = !0),
              this._updateBindings());
          },
          hide: function () {
            this.isExpanded &&
              (this._menuBind(),
              this._menu && this._menu.hide(),
              (this.isExpanded = !1),
              this._updateBindings());
          },
          _menuClick: function (e) {
            this._menuBind(e), (this.isExpanded = this._menu.isOpen());
            var t = this.dataContext.click;
            return t && t(e), e.preventDefault(), !1;
          },
          _menuBind: function (e) {
            if (
              this.isActive &&
              ((e = e || { target: this.element, type: "click" }), !this._menu)
            ) {
              var t = {};
              (t.defaultLoc = this.menuLoc),
                (t.skipEdgeDetection = this.skipEdgeDetection),
                (t.menuEl = this.navLinksRepeater.element),
                (t.sourceEl = this.subElements.menuLink),
                (t.arrowKeysNavigate = this.arrowKeysNavigate),
                $menu.create(e, this.subMenuLoc, t) &&
                  ((this._menu = this.navLinksRepeater.element.binding),
                  this._menu.addStateListener(
                    bind(this, this._onMenuStateChanged)
                  )),
                (this.isExpanded = !0),
                this._updateBindings();
            }
          },
          _onMenuStateChanged: function () {
            var e = this._menu.isOpen();
            this.isExpanded != e &&
              ((this.isExpanded = e), this._updateBindings());
          },
        }
      );
    })(window.originaljQuery || jQuery);
  }),
  define("menu.html", ["menu"], function () {
    (Shared.UI.Menu.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        sutraAttribute("SkyDrive.SharedMenu") +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><a href="#" role="button" aria-haspopup="true" onclick="return false" id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="uxfa_ml c_ml"' +
        generateAttributesString("aria-expanded", this.isExpanded) +
        '><span id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" style="' +
        generateStyleAttribute("display.inlineblock", this.displayImage) +
        '" class="navLinkImage' +
        generateClassAttribute("imageVisible", this.isImageVisible) +
        '">' +
        this.thumbsLinkImage.renderHtml() +
        '</span><span id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" class="c_mlu">' +
        htmlEncode(this.text) +
        '</span><span role="presentation" aria-hidden="true" id="' +
        htmlAttributeEncode(this.id + "_4") +
        '" style="' +
        generateStyleAttribute("display.inline", this.showChevron) +
        '" class="c_chev">' +
        this.chevronHtml +
        "</span></a><span" +
        sutraAttribute("SkyDrive.Links") +
        ">" +
        this.navLinksRepeater.renderHtml() +
        "</span></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        Shared.UI.Menu,
        [
          { id: 0 },
          {
            id: 1,
            attr: ["aria-expanded", "isExpanded"],
            childId: "menuLink",
            userActions: { click: "_menuClick", mousedown: "_menuBind" },
          },
          {
            id: 2,
            css: ["display.inlineBlock", "displayImage"],
            className: ["imageVisible", "isImageVisible"],
          },
          { id: 3, attr: ["text", "text"] },
          {
            id: 4,
            css: ["display.inline", "showChevron"],
            attr: ["html", "chevronHtml"],
          },
        ],
        [],
        {}
      );
  }),
  define("droppablenavlink", ["menu.html"], function () {
    !(function () {
      defineSubClass(
        "Shared.UI.DroppableNavLink",
        Shared.UI.NavLink,
        function () {},
        {
          key: null,
          processDropCallback: null,
          processDropLocationCallback: null,
          removeDropLocationCallback: null,
          onActivate: function () {
            var e = this;
            e.element && (e.element.dropTarget = !0),
              Shared.UI.NavLink.prototype.onActivate.call(e);
          },
          onDataContextChanged: function (e) {
            var t = this,
              i = e.dropTarget;
            (t.key = i.key),
              (t.processDropCallback = i.processDropCallback),
              (t.processDropLocationCallback = i.processDropLocationCallback),
              (t.removeDropLocationCallback = i.removeDropLocationCallback),
              Shared.UI.NavLink.prototype.onDataContextChanged.call(t, e);
          },
          onProcessDrop: function (e, t, i) {
            return this.processDropCallback(e, t, i, this.key);
          },
          onProcessDropLocation: function (e, t, i) {
            return this.processDropLocationCallback(e, t, i, this.key);
          },
          onRemoveDropLocation: function () {
            this.removeDropLocationCallback(this.key);
          },
        }
      );
    })();
  }),
  define(
    "skydriveitemhelperextended",
    ["errormanager", "imagestrip", "filetypehelper"],
    function () {
      !(function () {
        function e(e, t, i) {
          for (var n = !1; !n && e && null != e.parentKey; )
            (n = e.folder && e.folder.category === i),
              (e = t.dataModel.getItem(e.parentKey, !0));
          return n;
        }
        var t = wLive.Core,
          i = SkyDrive.FileTypeHelper.iconVersion,
          n = document,
          r = ".SkyDriveItemHelperExtended",
          a = 1e4,
          o = t.SkyDriveItemHelper;
        (o.getLoadedThumbnailUrl = function (e) {
          var i,
            n = e.thumbnails;
          if (n)
            for (var r = n.length, a = 0; r > a; a++) {
              var o = n[a],
                s = e.baseUrl + o.url;
              if (t.Images.isComplete(s)) {
                i = s;
                break;
              }
            }
          return i;
        }),
          (o.isFavoritesLib = function (t, i) {
            return e(t, i, 2);
          }),
          (o.isPhotoAlbum = function (t, i) {
            return e(t, i, 1);
          }),
          (o.getViewLink = function (e, t) {
            var i = t.actionManager,
              n = i.getAction("ViewItem", e),
              r = i.setATagAction(n).text(e.name);
            return r;
          }),
          (o.getIcon = function (e, n) {
            var r = "ft_" + n + "_" + e.iconType,
              a = "icon" + n + r;
            if (!e[a]) {
              if (this.isRootItem(e) && 16 === n)
                return t.ImageStrip.getImage("skydrive_16", e.ownerName);
              if (this.isGroupRoot(e))
                return t.ImageStrip.getImage("groups", e.ownerName);
              var o = e.name,
                s = t.ImageStrip.getImage(r, o);
              if (!s) {
                var l = 16 === n ? "tiny" : 32 === n ? "smaller" : "small",
                  d = (
                    FilesConfig.foldersImgBaseUrl +
                    "/icons/" +
                    i +
                    "/{0}/{1}.png"
                  ).format(l, e.iconType);
                s = $IS.Create(0, 0, n, n, FilesConfig.imgBaseUrl, d, o, "");
              }
              e[a] = s;
            }
            return e[a].cloneNode(!0);
          }),
          (o.refreshItemWhenVisible = function (e, t) {
            function i() {
              e.expire(), e.invalidate();
            }
            var o, s;
            if (
              ("hidden" in n
                ? ((o = "hidden"), (s = "visibilitychange"))
                : "msHidden" in n
                ? ((o = "msHidden"), (s = "msvisibilitychange"))
                : "webkitHidden" in n
                ? ((o = "webkitHidden"), (s = "webkitvisibilitychange"))
                : "mozHidden" in n &&
                  ((o = "mozHidden"), (s = "mozvisibilitychange")),
              o)
            ) {
              var l = jQuery(n);
              l.bind(s + r, function () {
                n[o] || (l.unbind(r), i());
              });
            } else setTimeout(i, a);
          });
      })();
    }
  ),
  define("domhelpers", ["dependancies", "domutilities"], function () {
    !(function () {
      wLive.Core.DomHelpers = {
        isInputElement: function (e) {
          return isInputElement(e[0]);
        },
        setTimeoutZero: function (e) {
          return window.msSetImmediate
            ? (window.msSetImmediate(e), null)
            : window.setTimeout(e, 0);
        },
      };
    })();
  }),
  define("eventhelpers", ["defineutilities", "validateconfig"], function () {
    !(function () {
      var e = 768,
        t = window.jQuery && jQuery("html").hasClass("responsive");
      defineNamespace("SkyDrive.UI.EventHelper", {
        isMouseEvent: function (e) {
          var t = e.originalEvent;
          return (
            t &&
            (t.pointerType == t.MSPOINTER_TYPE_MOUSE ||
              "mouse" == t.pointerType)
          );
        },
        isSmallScreen: function () {
          return window.innerWidth <= e && FilesConfig.responsive && t;
        },
        isSmallScreenTouchEvent: function (e) {
          return (
            !SkyDrive.UI.EventHelper.isMouseEvent(e) &&
            SkyDrive.UI.EventHelper.isSmallScreen()
          );
        },
      });
    })();
  }),
  define("operationmanager", ["dependancies", "do"], function () {
    !(function () {
      function e() {
        var e = this;
        (e.execute = function (e, t) {
          require([
            e.toLowerCase() + "operation",
            "registeroperations",
          ], function () {
            $Do.when(n + e, 0, t);
          });
        }),
          (e.register = function (e, t) {
            $Do.register(n + e, function (i) {
              t(e, i);
            });
          });
      }
      var t = wLive.Core;
      t.OperationManager = e;
      var i = new e(),
        n = "Operation_";
      (t.OperationManager.getInstance = function () {
        return i;
      }),
        (t.OperationManager.Current = new e());
    })();
  }),
  define(
    "loadingspinner",
    ["baseutil", "jquery-1.7.2", "sutra", "alehelpers"],
    function () {
      !(function () {
        function e(e, i) {
          var n = this;
          n.render = function () {
            i = null == i ? t : i;
            var n =
                $f &&
                $f.createLoading({
                  returnMarkup: !0,
                  useTransparentFallback: !0,
                  text: i,
                }),
              r = jQuery(n);
            e.append(r),
              $f.showLoading(r),
              r.find(".c_loadingText").addClass("t_ctc"),
              sutra(r, "$Sutra.SkyDrive.LoadingSpinner");
          };
        }
        var t = wLive.Core.AleHelpers.getString("Loading");
        wLive.Controls.LoadingSpinner = e;
      })();
    }
  ),
  define("loadingcue", ["loadingspinner"], function () {
    !(function () {
      function e(e) {
        e.html(i);
        var s = jQuery(".lcCenter", e),
          l = jQuery(".lcWrapper", e).hide(),
          d = new t.LoadingSpinner(l);
        d.render(),
          l.css("margin-" + a, -(l.width() / 2)),
          sutra(l, "$Sutra.SkyDrive.LoadingCue");
        var u = this,
          c = !1;
        (u.setVisibility = function (e) {
          e
            ? (c ||
                (r
                  ? l
                      .stop(!0)
                      .delay(n)
                      .css("opacity", 0)
                      .show()
                      .animate({ opacity: 1 }, 500)
                  : l.show()),
              s.offset().top >= (o.scrollTop && o.scrollTop())
                ? l.css({ position: "absolute" })
                : l.css({ position: "fixed" }))
            : l.stop(!0).hide(),
            (c = e);
        }),
          (u.update = function () {
            u.setVisibility(c);
          });
      }
      var t = wLive.Controls,
        i = '<div class="lcCenter"><div class="lcWrapper"></div></div>',
        n = 250,
        r = jQuery.support.opacity,
        a = $B.ltr ? "left" : "right",
        o = jQuery(window);
      t.LoadingCue = e;
    })();
  }),
  define(
    "newdocument",
    [
      "jquery-1.7.2",
      "actionmanager",
      "alehelpers",
      "bicihelpers",
      "errormanager",
      "itemactionhelper",
      "loadingcue",
      "skydriveitemhelperextended",
    ],
    function () {
      !(function () {
        function e(e, D, T) {
          function A(e) {
            if (!e) return !1;
            if (((e = e.replace(/^\s+|\s+$/g, "")), "" === e)) return !1;
            var i = t.JSONConstants.InvalidNameRegEx,
              n = e.match(i);
            if (n && n.length > 1) return !1;
            var r = e[0],
              a = e[e.length - 1];
            return "." !== r && (pe !== v || "." !== a);
          }
          function P() {
            var e;
            switch (pe) {
              case m:
                (O = X), (H = W ? u : s), (e = re);
                break;
              case g:
                (O = Z), (H = W ? h : d), (e = ae);
                break;
              case f:
                (O = Y), (H = d), (e = oe);
                break;
              case p:
                (O = ee), (H = W ? c : l), (e = se);
                break;
              case v:
                (O = te), (H = ""), (e = le);
                break;
              default:
                (O = "Unknown error"), (H = "None"), (e = "unknown{0}");
            }
            for (var t = 1; !R(($ = e.format(t))); ) t++;
          }
          function E() {
            F(), U(!1);
            var e = ye.val(),
              i = pe;
            if (!A(e)) return void M(ue);
            if (!R(e)) return void M(de);
            pe == f && (pe = g);
            var n = r + "CreateDocument",
              a = Object.toJSON({
                parentId: ve.id,
                nameConflict: 0,
                overrideLock: !1,
                cid: ve.ownerCid,
                group: ve.group,
                name: e + H,
                docType: pe != v ? pe + (W ? "odf" : "") : pe,
              });
            (j = new t.DataRequest(
              n + x++,
              n,
              a,
              function (e) {
                if (e && e.items && !e.error) L(e.items[0], i);
                else {
                  var t = e
                    ? e.error
                    : {
                        debugMessage:
                          "Server returned no success or failure for CreateDocument",
                        code: 1,
                      };
                  B(t);
                }
              },
              function (e) {
                var t = e
                  ? e.error
                  : {
                      debugMessage:
                        "Server returned no success or failure for CreateDocument",
                      code: 1,
                    };
                B(t);
              }
            )),
              (j.apiId = "SkyDrive_Json_CreateDocument"),
              (j.propertyId = "SkyDrive"),
              j.start(),
              V(!1),
              U(!0);
          }
          function B(e) {
            if (e && e.code)
              switch (e.code) {
                case C:
                  M(e.message || de), (e.isExpected = !0);
                  break;
                case w:
                  M(e.message || ue), (e.isExpected = !0);
                  break;
                case b:
                  M(e.message || ce), (e.isExpected = !0);
                  break;
                case k:
                  M(e.message || he), (e.isExpected = !0);
                  break;
                case y:
                case _:
                case S:
                default:
                  M(e.message || me);
              }
          }
          function R(e) {
            if (!ve) return !0;
            var i =
              ve &&
              jQuery.isFunction(ve.getChildren) &&
              t.ViewContext.getInstance().itemProvider.getChildren(ve);
            if (i)
              for (var n = i.getCount(), r = 0; n > r; r++) {
                var a = i.peek(r);
                if (a && a.extension) {
                  if (e === a.name && H === a.extension) return !1;
                } else if (pe === v && a && a.name && e === a.name) return !1;
              }
            return !0;
          }
          function M(e) {
            _e.text(e), ke.show(), ye.select(), V(!0), U(!1);
          }
          function F() {
            ke.hide();
          }
          function L(e, t) {
            Q.dismiss(), q && q(e, t), z.dispose();
          }
          function U(e) {
            e ? Se.show() : Se.hide();
          }
          function V(e) {
            be.prop({ disable: e });
          }
          var N,
            Q,
            q,
            O,
            H,
            $,
            j,
            z = this,
            W = D.documentFormat == t.SkyDriveItem.DocumentFormat.ODF,
            G = W ? "ODF" : "",
            K = n("NewDocument.Creating"),
            J = n("NewDocument.CreateButtonText"),
            X =
              (n("NewDocument.CancelButtonText"),
              n("NewDocument.WordDocumentTitle" + G)),
            Z = n("NewDocument.ExcelSpreadsheetTitle" + G).replace(
              "speadsheet",
              "spreadsheet"
            ),
            Y = n("NewDocument.ExcelSurveyTitle"),
            ee = n("NewDocument.PowerPointPresentationTitle" + G),
            te = n("NewDocument.OneNoteNotebookTitle"),
            ie = n("NewDocument.ExcelSurveyDescription"),
            ne = n("NewDocument.InputTitleText"),
            re = n("NewDocument.WordDefaultName"),
            ae = n("NewDocument.ExcelDefaultName"),
            oe = n("NewDocument.ExcelSurveyDefaultName"),
            se = n("NewDocument.PowerPointDefaultName"),
            le = n("NewDocument.OneNoteDefaultName"),
            de = n("NewDocument.ErrorDuplicateName"),
            ue = n("NewDocument.ErrorInvalidChar"),
            ce = n("NewDocument.ErrorLengthExceeded"),
            he = n("ProcessWindow.UploadQuotaLimitReached"),
            me = n("NewDocument.ErrorUnknown"),
            ge =
              '<div id="errBox"><div id="errTxt"><span></span></div></div><div id="description" type="text"></div><table id="nameBox" cellspacing="0"><tr><td class="fileNameCell"><input id="fileName" type="text" title="{0}" /></td><td><span id="ext"></span></td></tr></table>',
            fe = '<span id="creating"></span>',
            pe = e,
            ve = D,
            ye = null,
            Ce = null,
            Se = null,
            be = null,
            _e = null,
            ke = null,
            we = null;
          (z.dispose = function () {
            ye.unbind("keydown"), j && j.abort();
          }),
            (z.show = function (t) {
              q = t;
              var n = document.createElement("div");
              (n.innerHTML = ge.format(ne.encodeHtml())),
                (we = jQuery(n)),
                we.addClass("nd"),
                (ye = jQuery("#fileName", we)),
                (ke = jQuery("#errBox", we)),
                ke.hide(),
                (_$descriptionString = jQuery("#description", we)),
                _$descriptionString.text(""),
                sutra(_$descriptionString, "$Sutra.SkyDrive.NewDocDescription"),
                e == f && _$descriptionString.text(ie),
                (_e = jQuery("#errTxt span", we)),
                (Ce = jQuery("#ext", we)),
                P(),
                pe != v ? Ce.text(H) : Ce.hide(),
                ye.val($),
                ye.keydown(function (e) {
                  switch (e.keyCode) {
                    case I:
                      E(), e.preventDefault();
                  }
                });
              var r = _ge(o) || _ge(a);
              require(["flyout", "doregister"], function () {
                function e() {
                  be = jQuery(Q.getButton({ buttonName: "action" }));
                  var e = be.closest(".ButtonArea");
                  e.prepend(fe),
                    (Se = jQuery("#creating")),
                    (N = new i.LoadingSpinner(Se, K)),
                    N.render(),
                    U(!1),
                    ye.focus().select(),
                    sutra(Se, "$Sutra.SkyDrive.NewDocCreating"),
                    sutra(be, "$Sutra.SkyDrive.NewDocCreateBtn"),
                    sutra(ye, "$Sutra.SkyDrive.NewDocFileName"),
                    sutra(_e, "$Sutra.SkyDrive.NewDocError"),
                    sutra(Ce, "$Sutra.SkyDrive.NewDocExtension");
                  var t = jQuery(Q.content());
                  sutra(t, "$Sutra.SkyDrive.NewDocPopover"),
                    sutra(t.find(".UserTitle"), "$Sutra.SkyDrive.NewDocTitle");
                  var n = jQuery("#nameBox", t),
                    r = Math.max(jQuery(".UserTitle", t).width(), 340);
                  n.width(r), n.addClass("fillWidth");
                }
                Q = i.Notifications.createFlyout({
                  buttons: { action: J },
                  title: O,
                  content: n,
                  anchor: r,
                  options: {
                    dismissOnOutsideClick: !0,
                    dismissOnButtonClick: !1,
                    dismissOnEnter: !1,
                    focusFirstButton: !1,
                    focusElement: ye[0],
                    setFocus: !0,
                  },
                });
                var t = jQuery(Q);
                t.bind({
                  "afterdismiss._flyoutPopover": function () {
                    z.dispose();
                  },
                  "aftershow._flyoutPopover": function () {
                    e(),
                      setTimeout(function () {
                        ye.focus();
                      }, 10);
                  },
                  "buttonclick._flyoutPopover": function (e, t, i) {
                    "action" === i ? E() : t.dismiss();
                  },
                }),
                  Q.show();
              });
            });
        }
        var t = wLive.Core,
          i = wLive.Controls,
          n = t.AleHelpers.getPCString,
          r = FilesConfig.baseApiUrl,
          a = "m_wh",
          o = "cb_create",
          s = ".docx",
          l = ".pptx",
          d = ".xlsx",
          u = ".odt",
          c = ".odp",
          h = ".ods",
          m = "w",
          g = "x",
          f = "f",
          p = "p",
          v = "n",
          y = 1,
          C = 1e3,
          S = 3e3,
          b = 2005,
          _ = 1007,
          k = 2001,
          w = 1006,
          I = 13,
          x = 0;
        i.NewDocument = e;
      })();
    }
  ),
  define("newdocumentcommand", ["newdocument"], function () {
    !(function () {
      function e(e, s, l, d) {
        function u(e, i) {
          var r = "ND",
            a = new t.SkyDriveItem(
              t.DataModel.getInstance(),
              t.SkyDriveItem.getItemKey(e.id, e.ownerCid, e.group),
              g.key
            );
          a.processItem(e);
          var o = v.getAction("EditBrowserNew", a);
          i === n && (o = v.getAction("EditFormNew", a)),
            o &&
              (o.click = t.BiciHelpers.prependBiciReportClickAction(
                o.click,
                o.skyCmd,
                r
              )),
            v.doAction(o);
        }
        var c,
          h,
          m = this,
          g = s,
          f = l,
          p = d,
          v = e.actionManager;
        (m.dispose = function () {
          c ? (c.dispose(), (c = null)) : h && (h.remove(), (h = null));
        }),
          (m.execute = function (e, n, s) {
            if (e === r || s) (c = new i.NewDocument(e, g, n)), c.show(u);
            else {
              var l =
                  g.documentFormat == wLive.Core.SkyDriveItem.DocumentFormat.ODF
                    ? "odf"
                    : "",
                d = t.ItemActionHelper.itemStringFormat(a + e + l, g, f, p);
              (h = jQuery(o.format(d, FilesConfig.navCanary)).appendTo(
                window.document.body
              )),
                $BSI.informNav(d, null, null, !1, !0),
                h.submit(),
                t.SkyDriveItemHelper.refreshItemWhenVisible(g);
            }
          });
      }
      var t = wLive.Core,
        i = wLive.Controls;
      t.NewDocumentCommand = e;
      var n = "f",
        r = "n",
        a =
          "/create.aspx?{cidQueryString}{idAsParentIdQueryString}{wacQueryType}{authKeyQueryString}&nd=",
        o =
          '<form target="_blank" action="{0}" id="create_form" method="post"><input name="canary" type="hidden" value="{1}" /></form>';
    })();
  }),
  define("popovermanager", ["dependancies", "do"], function () {
    !(function () {
      var e = wLive.Core,
        t = wLive.Controls;
      e.PopoverManager = {
        showPopover: function (i, n) {
          require([i.toLowerCase()], function () {
            var r = new t[i](e.ViewContext.getInstance());
            r.show(n);
          }),
            !t[i];
        },
      };
    })();
  }),
  define("orderprintsdialog", ["basecontrol", "errormanager"], function () {
    !(function () {
      var e = wLive.Core,
        t = (wLive.Controls, e.AleHelpers.getPCString),
        i =
          (t("OrderPrints.WalgreensCancel"),
          t("OrderPrints.WalgreensCancelTitle"),
          t("OrderPrints.WalgreensSubmitted")),
        n = t("OrderPrints.WalgreensSubmittedTitle"),
        r = t("OrderPrints.PrintToWalgreens"),
        a = $Config.isINT
          ? "https://m5-qa.walgreens.com"
          : "https://m5.walgreens.com",
        o = 5e3,
        s = $B.Safari;
      defineNamespace("SkyDrive.UI.OrderPrintsDialogState", {
        Splash: 0,
        Loading: 1,
        Core: 2,
        Done: 3,
        Error: 4,
      }),
        defineSubClass(
          "SkyDrive.UI.OrderPrintsDialog",
          JBase.UI.BaseControl,
          function () {},
          {
            loadingStateContent: "",
            isLoading: !1,
            splashText: t("OrderPrints.WalgreensSplashText"),
            errorText: t("OrderPrints.WalgreensError"),
            doneText: "",
            showDone: !1,
            showCore: !1,
            showSplash: !0,
            showError: !1,
            showFrame: !1,
            landingPageUrl: "",
            splashImgUrl:
              FilesConfig.foldersImgBaseUrl + "/partners/walgreens2.png",
            curState: SkyDrive.UI.OrderPrintsDialogState.Splash,
            _dataRequest: null,
            _titleElement: null,
            _loadStartTime: 0,
            _iframeTimer: 0,
            _$notificationArea: null,
            _$orderPrintsButton: null,
            onActivate: function () {
              var e = this;
              (e.loadingStateContent =
                $f &&
                $f.createLoading({
                  returnMarkup: !0,
                  useTransparentFallback: !0,
                })),
                e.addElementListener(window, "message", e._onReceiveMessage),
                e._updateBindings();
            },
            onDataContextChanged: function (e) {
              var t = e.dialog;
              t &&
                ((this._$notificationArea = t.notificationArea()),
                (this._$orderPrintsButton = t.getButton({
                  buttonName: "action",
                })),
                (this._titleElement = byClass("UserTitle", t.content())));
            },
            onDispose: function () {
              this._dataRequest && this._dataRequest.abort(),
                this.dataContext.dialog && this.dataContext.dialog.dismiss();
            },
            _transitionToState: function (e) {
              var t = this,
                i = SkyDrive.UI.OrderPrintsDialogState;
              (t.showDone = e == i.Done),
                (t.showCore = e == i.Core),
                (t.showSplash = e == i.Splash || e == i.Loading),
                (t.showError = e == i.Error),
                (t.showFrame = e == i.Core),
                e == i.Loading
                  ? ((t.isLoading = !0), t._startLoading())
                  : ((t.isLoading = !1), t._stopLoading()),
                t._updateBindings(),
                (t.showError || t.showDone) &&
                  t.doOnRenderFrame("reposition", function () {
                    t.dataContext.dialog.reposition();
                  }),
                (t.curState = e);
            },
            _stopLoading: function () {
              this._$orderPrintsButton.hide(), this._$notificationArea.empty();
            },
            _startLoading: function () {
              this._$notificationArea.html(this.loadingStateContent).show(),
                this._$orderPrintsButton.prop("disabled", !0);
            },
            _onReceiveMessage: function (e) {
              var t = e && e.originalEvent;
              if (t && t.origin.startsWith(a)) {
                var i = t.data;
                "action=cancel" == i || "action=back" == i
                  ? this._onCloseClicked()
                  : "action=done" == i && this._onSubmitted();
              }
            },
            _onOrderPrintsClicked: function () {
              this._getLandingPageUrl(),
                this._transitionToState(
                  SkyDrive.UI.OrderPrintsDialogState.Loading
                ),
                e.BiciHelpers.reportClickAction("COPW", "DLG");
            },
            _onCloseClicked: function () {
              this.curState != SkyDrive.UI.OrderPrintsDialogState.Done &&
                this._reportSubmissionQos(!0),
                this.dispose();
            },
            _onSubmitted: function () {
              this._reportSubmissionQos(),
                this._changeTitle(n),
                (this.doneText = i),
                this._transitionToState(
                  SkyDrive.UI.OrderPrintsDialogState.Done
                );
            },
            _onIframeLoaded: function () {
              clearTimeout(this._iframeTimer),
                this.showError ||
                  (this._reportFrameLoadQos(),
                  this._changeTitle(r),
                  this._transitionToState(
                    SkyDrive.UI.OrderPrintsDialogState.Core
                  ));
            },
            _onIframeTimeout: function () {
              this._reportFrameLoadQos(!0),
                this._transitionToState(
                  SkyDrive.UI.OrderPrintsDialogState.Error
                );
            },
            _reportFrameLoadQos: function (e, t) {
              var i = this.dataContext.items.length;
              window.Qos &&
                Qos.log(
                  "Walgreens_QuickPrints_FrameLoaded",
                  "Walgreens",
                  this._loadStartTime,
                  "count_" + i / 10 + (t ? "_newWindow" : ""),
                  e ? Qos.responseType.unexpected : Qos.responseType.success,
                  "numItems:" + i
                );
            },
            _reportSubmissionQos: function (e) {
              var t = this.dataContext.items.length;
              window.Qos &&
                Qos.log(
                  "Walgreens_QuickPrints_Submitted",
                  "Walgreens",
                  this._loadStartTime,
                  "count_" + t / 10,
                  e ? Qos.responseType.expected : Qos.responseType.success,
                  "numItems:" + t
                );
            },
            _getLandingPageUrl: function () {
              var t = this;
              if (!t._dataRequest) {
                for (
                  var i = FilesConfig.baseApiUrl + "PublishToWalgreens",
                    n = t.dataContext.items,
                    r = [],
                    a = 0;
                  n && a < n.length;
                  a++
                )
                  r.push(n[a].id);
                (t._dataRequest = new e.DataRequest(
                  i,
                  i,
                  Object.toJSON({ ids: r }),
                  function (e) {
                    if (e && e.landingUrl && t.isActive) {
                      var i = t.subElements.printsFrame;
                      i.attachEvent
                        ? i.attachEvent("onload", bind(t, t._onIframeLoaded))
                        : (i.onload = bind(t, t._onIframeLoaded)),
                        (_loadStartTime = new Date().getTime()),
                        (t._iframeTimer = t.setTimeout(
                          bind(t, t._onIframeTimeout),
                          o
                        )),
                        $B.Firefox &&
                          t._transitionToState(
                            SkyDrive.UI.OrderPrintsDialogState.Core
                          ),
                        s
                          ? (window.open(
                              e.landingUrl,
                              "_blank",
                              "width=350,height=450"
                            ),
                            t._reportFrameLoadQos(!1, !0),
                            t.dispose())
                          : ((t.landingPageUrl = e.landingUrl),
                            t._updateBindings());
                    }
                  },
                  function () {
                    t._transitionToState(
                      SkyDrive.UI.OrderPrintsDialogState.Error
                    );
                  }
                )),
                  (t._dataRequest.apiId = "Skydrive_Json_PublishToWalgreens"),
                  t._dataRequest.start();
              }
            },
            _changeTitle: function (e) {
              this._titleElement.innerText = e;
            },
          }
        );
    })();
  }),
  define("orderprintsdialoghelper", ["orderprintsdialog"], function () {
    !(function () {
      var e = wLive.Core,
        t = wLive.Controls,
        i = e.AleHelpers.getPCString,
        n = null;
      e.OrderPrintsDialogHelper = {
        showOrderPrintsDialog: function (e) {
          require(["modaldialog", "doregister"], function () {
            var r = t.Notifications;
            r && r.getQueue().start();
            var a = new SkyDrive.UI.OrderPrintsDialog(),
              o = {
                content: a.renderHtml(),
                buttons: {
                  action: i("OrderPrints.PrintToWalgreens"),
                  close: i("Close"),
                },
                title: i("OrderPrintsCommand"),
                options: { dismissOnButtonClick: !1 },
              };
            (n = r.createModalDialog(o)),
              a.setDataContext({ dialog: n, items: e });
            var s = jQuery(n);
            s.bind({
              "afterdismiss._dlg": function (e, t) {
                a && a.dispose(),
                  s && s.unbind("._dlg"),
                  (s = null),
                  (n = null);
              },
              "buttonclick._dlg": function (e, t, i) {
                "action" == i ? a._onOrderPrintsClicked() : a._onCloseClicked();
              },
            }),
              n.show(),
              a.activate();
          });
        },
        dispose: function () {
          n && (n.dismiss(), (n = null));
        },
      };
    })();
  }),
  define("orderprintsdialog.html", ["orderprintsdialoghelper"], function () {
    (SkyDrive.UI.OrderPrintsDialog.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><div class="popWrapper"><div id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" style="' +
        generateStyleAttribute("display", this.showSplash) +
        '" class="splash"><span id="' +
        htmlAttributeEncode(this.id + "_2") +
        '">' +
        htmlEncode(this.splashText) +
        '</span><img alt="" id="' +
        htmlAttributeEncode(this.id + "_3") +
        '"' +
        generateAttributesString("src", this.splashImgUrl) +
        '></img></div><div id="' +
        htmlAttributeEncode(this.id + "_4") +
        '" style="' +
        generateStyleAttribute("display", this.showCore) +
        '" class="core"><iframe scrolling="auto" frameborder="0" width="425" height="450" id="' +
        htmlAttributeEncode(this.id + "_5") +
        '" style="' +
        generateStyleAttribute("display", this.showFrame) +
        '"' +
        generateAttributesString("src", this.landingPageUrl) +
        '></iframe></div><div id="' +
        htmlAttributeEncode(this.id + "_6") +
        '" style="' +
        generateStyleAttribute("display", this.showError) +
        '" class="error"><span id="' +
        htmlAttributeEncode(this.id + "_7") +
        '">' +
        htmlEncode(this.errorText) +
        '</span></div><div id="' +
        htmlAttributeEncode(this.id + "_8") +
        '" style="' +
        generateStyleAttribute("display", this.showDone) +
        '" class="done"><span id="' +
        htmlAttributeEncode(this.id + "_9") +
        '">' +
        htmlEncode(this.doneText) +
        "</span></div></div></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.OrderPrintsDialog,
        [
          { id: 0 },
          { id: 1, css: ["display", "showSplash"] },
          { id: 2, attr: ["text", "splashText"] },
          { id: 3, attr: ["src", "splashImgUrl"] },
          { id: 4, css: ["display", "showCore"] },
          {
            id: 5,
            css: ["display", "showFrame"],
            attr: ["src", "landingPageUrl"],
            childId: "printsFrame",
          },
          { id: 6, css: ["display", "showError"] },
          { id: 7, attr: ["text", "errorText"] },
          { id: 8, css: ["display", "showDone"] },
          { id: 9, attr: ["text", "doneText"] },
        ],
        [],
        {}
      );
  }),
  define("dialog", ["jbase", "basecontrol"], function () {
    !(function (e) {
      defineNamespace("Shared.UI.DialogTypes", {
        Flyout: "Flyout",
        Modal: "Modal",
      }),
        defineSubClass(
          "Shared.UI.Dialog",
          JBase.UI.BaseControl,
          function () {
            this._buttons = {};
          },
          {
            _buttons: null,
            _dialog: null,
            getTitle: null,
            onBeforeDismiss: null,
            getDialogType: function () {
              return Shared.UI.DialogTypes.Modal;
            },
            getAnchor: function () {
              return null;
            },
            getPositionMode: function () {},
            shouldConstrainSize: function () {
              return !0;
            },
            onDispose: function () {
              this._dialog && (this._dialog.dismiss(), (this._dialog = null));
            },
            registerCloseButton: function (e, t) {
              this._registerButton("close", e, t);
            },
            registerActionButton: function (e, t) {
              this._registerButton("action", e, t);
            },
            _beforeDismiss: function () {
              return this.onBeforeDismiss ? this.onBeforeDismiss() : !0;
            },
            _getButtons: function () {
              var e = {};
              for (var t in this._buttons) {
                var i = this._buttons[t];
                e[t] = i.text;
              }
              return e;
            },
            _getOptions: function () {
              var e = "";
              return (
                this.getTitle && (e = this.getTitle()),
                {
                  buttons: this._getButtons(),
                  title: e,
                  content: this.renderHtml(),
                  anchor: this.getAnchor(),
                  options: {
                    positionMode: this.getPositionMode(),
                    constrainSize: this.shouldConstrainSize(),
                  },
                }
              );
            },
            _handleButtonClick: function (e, t) {
              var i = this._buttons[t];
              i && i.callback(e);
            },
            _setDialog: function (e) {
              this._dialog = e;
            },
            _registerButton: function (e, t, i) {
              this._buttons[e] = { callback: bind(this, i), text: t };
            },
          },
          {
            MixIn: {
              _dialogsCreatedDialogs: null,
              _dialogsDisposed: !1,
              createDialog: function (e, t) {
                var i = this;
                Shared.UI.Dialog.create(e, function () {
                  if (i._dialogsDisposed) return null;
                  var e = t(),
                    n = getId(e);
                  return (
                    i._dialogsCreatedDialogs || (i._dialogsCreatedDialogs = {}),
                    (i._dialogsCreatedDialogs[n] = e),
                    e
                  );
                });
              },
              dispose: function () {
                if (
                  ((this._dialogsDisposed = !0), this._dialogsCreatedDialogs)
                ) {
                  for (var e in this._dialogsCreatedDialogs)
                    this._dialogsCreatedDialogs[e].dispose();
                  this._dialogsCreatedDialogs = null;
                }
              },
            },
            create: function (t, i) {
              require(t, function () {
                var t = i();
                if (t) {
                  var n,
                    r = t.getDialogType();
                  switch (r) {
                    default:
                    case Shared.UI.DialogTypes.Modal:
                      n = "modaldialog";
                      break;
                    case Shared.UI.DialogTypes.Flyout:
                      n = "flyout";
                  }
                  require([n, "doregister"], function () {
                    var i,
                      n = wLive.Controls.Notifications;
                    switch ((n.getQueue().start(), r)) {
                      default:
                      case Shared.UI.DialogTypes.Modal:
                        i = n.createModalDialog(t._getOptions());
                        break;
                      case Shared.UI.DialogTypes.Flyout:
                        i = n.createFlyout(t._getOptions());
                    }
                    t._setDialog(i);
                    var a = e(i);
                    a.bind({
                      "aftershow._dlg": function () {
                        setTimeout(function () {
                          t.isDisposed || t.activate();
                        }, 10);
                      },
                      "beforedismiss._dlg": function () {
                        return t._beforeDismiss();
                      },
                      "afterdismiss._dlg": function () {
                        t.dispose(),
                          a && a.unbind("._dlg"),
                          (a = null),
                          (i = null);
                      },
                      "buttonclick._dlg": function (e, i, n) {
                        t._handleButtonClick(e, n);
                      },
                    }),
                      i.show();
                  });
                }
              });
            },
          }
        );
    })(window.originaljQuery || jQuery);
  }),
  define(
    "filepickerdialog",
    ["basecontrol", "errormanager", "dialog"],
    function () {
      !(function () {
        var e = wLive.Core,
          t = wLive.Controls,
          i = e.AleHelpers.getPCString,
          n = e.AleHelpers.getString,
          r = e.SkyDriveItemHelper,
          a = 13;
        wLive.Core.ViewContext.getInstance();
        defineSubClass(
          "SkyDrive.UI.FilePickerDialog",
          Shared.UI.Dialog,
          function (e, t) {
            this.frameLoadingStateContent =
              $f &&
              $f.createLoading({
                returnMarkup: !0,
                useTransparentFallback: !0,
                width: 40,
                height: 40,
              });
          },
          {
            isFrameLoading: !0,
            showButtonLoading: !1,
            errorMessage: "",
            isErrorVisible: !1,
            nameFieldText: n("CreateAlbum.AlbumNameTitle"),
            closeButtonText: i("Close"),
            hasInvalidName: !0,
            buttonShouldBeDisabled: !1,
            isActionButtonDisabled: !0,
            onDataContextChanged: function (e) {
              var t = {
                v: 2,
                hideHeader: 1,
                hideFooter: 1,
                selection: "multi",
                onSky: 1,
                qt: e.queryType,
                noMaxItems: !e.enforceMaxItemCheck,
              };
              (this.pickerUrl =
                "https://" +
                window.location.hostname +
                "?" +
                $Utility.serialize(t)),
                (this.showNameField = e.showNameField),
                (this.actionButtonText = e.actionButtonText);
            },
            shouldConstrainSize: function () {
              return !1;
            },
            stopLoading: function () {
              (this.isFrameLoading = !1), this._updateBindings();
            },
            onActivate: function () {
              var e = this;
              if (e.dataContext.showNameField) {
                var i = new t.PlaceholderInput(
                  jQuery(e.subElements.itemName),
                  e.nameFieldText
                );
                i.render();
              }
              (e.buttonLoadingStateContent =
                window.$f &&
                $f.createLoading({
                  returnMarkup: !0,
                  useTransparentFallback: !0,
                  text: e.dataContext.loadingText,
                })),
                (e.subElements.itemName.value =
                  e.dataContext.defaultName || ""),
                e.subElements.itemName.focus(),
                e.setButtonDisabled(!0);
            },
            _onKeyDown: function (e) {
              var t = !1;
              switch (e.which) {
                case a:
                  !this.isActionButtonDisabled && this._onActionButtonClicked(),
                    e.preventDefault(),
                    (t = !0);
              }
              return !t;
            },
            _onKeyUp: function (e) {
              return this.evaluateName(), !0;
            },
            showLoading: function () {
              var e = this;
              (e.showButtonLoading = !0), e._updateButton();
            },
            showError: function (e) {
              var t = this;
              (t.errorMessage = e),
                (t.showButtonLoading = !1),
                (t.isErrorVisible = !0),
                t._updateButton();
            },
            evaluateName: function (e) {
              var t = this,
                i = t.subElements.itemName.value,
                n = r.getErrorMessageForNewItemName(i, !1);
              (t.hasInvalidName = !!n),
                t.hasInvalidName
                  ? t.showError(n)
                  : ((t.isErrorVisible = !1), t._updateBindings()),
                t._updateButton();
            },
            _onActionButtonClicked: function () {
              var e = this;
              e.showNameField && e.evaluateName(),
                (!e.hasInvalidName || !e.showNameField) &&
                  e.dataContext.getSelectedItems(function (t) {
                    var i = e.subElements.itemName.value,
                      n = e.dataContext.getOperation(t, i);
                    e._performOperation(n);
                  });
            },
            _performOperation: function (e) {
              var t = this;
              t.showLoading(),
                $header.showLoading(),
                e.then(
                  function (e) {
                    $header.hideLoading();
                    var i = t.dataContext.folder;
                    i && (i.expire(), i.invalidate());
                    var n = t.dataContext.onSuccess;
                    n && n(e), t.dispose();
                  },
                  function (e) {
                    if (($header.hideLoading(), t.isActive)) {
                      var n =
                        (e && e.error && e.error.message) ||
                        i("AddToBundleError");
                      t.showError(n);
                    }
                  }
                );
            },
            _onCloseButtonClicked: function () {
              var e = this.dataContext.onError;
              e && e(), this.dispose();
            },
            setButtonDisabled: function (e) {
              (this.buttonShouldBeDisabled = e), this._updateButton();
            },
            _updateButton: function (e) {
              var t = this;
              t.isActive &&
                ((t.isActionButtonDisabled =
                  (t.dataContext.requireItemSelection && !t.hasItemSelected) ||
                  t.showButtonLoading ||
                  t.isFrameLoading),
                t._updateBindings());
            },
            _onPickerSelectionChange: function (e) {
              (this.hasItemSelected = e), this._updateButton();
            },
          }
        );
      })();
    }
  ),
  define("filepickerdialog.html", ["filepickerdialog"], function () {
    (SkyDrive.UI.FilePickerDialog.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        ' dlg-height"><div id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="fpWrapper' +
        generateClassAttribute("isFrameLoading", this.isFrameLoading) +
        '"><div id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" class="loading">' +
        this.frameLoadingStateContent +
        '</div><iframe scrolling="auto" frameborder="0" width="100%" height="100%" id="' +
        htmlAttributeEncode(this.id + "_3") +
        '"' +
        generateAttributesString("src", this.pickerUrl) +
        '></iframe></div><div class="bottomRow"><div id="' +
        htmlAttributeEncode(this.id + "_4") +
        '" class="buttonContainer"><span id="' +
        htmlAttributeEncode(this.id + "_5") +
        '" style="' +
        generateStyleAttribute("display.inlineblock", this.showButtonLoading) +
        '" class="loadingState">' +
        this.buttonLoadingStateContent +
        '</span><input type="button" id="' +
        htmlAttributeEncode(this.id + "_6") +
        '" class="default"' +
        generateAttributesString(
          "value",
          this.actionButtonText,
          "disabled",
          this.isActionButtonDisabled
        ) +
        '></input><input type="button" id="' +
        htmlAttributeEncode(this.id + "_7") +
        '"' +
        generateAttributesString("value", this.closeButtonText) +
        '></input></div><span id="' +
        htmlAttributeEncode(this.id + "_8") +
        '" style="' +
        generateStyleAttribute("display", this.showNameField) +
        '" class="nameField"><input type="text" id="' +
        htmlAttributeEncode(this.id + "_9") +
        '"' +
        generateAttributesString("disabled", this.showButtonLoading) +
        '></input></span><span id="' +
        htmlAttributeEncode(this.id + "_10") +
        '" style="' +
        generateStyleAttribute("display.inlineblock", this.isErrorVisible) +
        '" class="errortext">' +
        htmlEncode(this.errorMessage) +
        "</span></div></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.FilePickerDialog,
        [
          { id: 0 },
          { id: 1, className: ["isFrameLoading", "isFrameLoading"] },
          { id: 2, attr: ["html", "frameLoadingStateContent"] },
          { id: 3, attr: ["src", "pickerUrl"] },
          { id: 4, childId: "buttonContainer" },
          {
            id: 5,
            css: ["display.inlineBlock", "showButtonLoading"],
            attr: ["html", "buttonLoadingStateContent"],
            childId: "loadingState",
          },
          {
            id: 6,
            attr: [
              "value",
              "actionButtonText",
              "disabled",
              "isActionButtonDisabled",
            ],
            childId: "actionButton",
            userActions: { click: "_onActionButtonClicked" },
          },
          {
            id: 7,
            attr: ["value", "closeButtonText"],
            childId: "closeButton",
            userActions: { click: "_onCloseButtonClicked" },
          },
          { id: 8, css: ["display", "showNameField"] },
          {
            id: 9,
            attr: ["disabled", "showButtonLoading"],
            childId: "itemName",
            userActions: { keyup: "_onKeyUp", keydown: "_onKeyDown" },
          },
          {
            id: 10,
            css: ["display.inlineBlock", "isErrorVisible"],
            attr: ["text", "errorMessage"],
          },
        ],
        [],
        {}
      );
  }),
  define("filepickerdialoghelper", ["filepickerdialog.html"], function () {
    !(function () {
      var e,
        t = wLive.Core,
        i = (wLive.Controls, t.AleHelpers.getPCString),
        n = t.AleHelpers.getString,
        r = null;
      t.FilePickerDialogHelper = {
        showFilePickerDialog: function (t, a) {
          function o(o, s) {
            Shared.UI.Dialog.create([], function () {
              return (
                (e = new SkyDrive.UI.FilePickerDialog()),
                e.setDataContext({
                  actionButtonText:
                    t.actionButtonText || i("FilePickerDialog.Add"),
                  loadingText: t.loadingText || n("Picker.Adding"),
                  showNameField: t.showNameField,
                  queryType: t.queryType,
                  folder: t.folder,
                  enforceMaxItemCheck: t.enforceMaxItemCheck,
                  requireItemSelection: t.requireItemSelection,
                  getSelectedItems: function (e) {
                    r.getSelectedItems(e);
                  },
                  onSuccess: o,
                  onError: s,
                  getOperation: a,
                }),
                e
              );
            });
          }
          function s() {
            e && e.dispose();
          }
          return new Shared.Promise(o, s);
        },
        addItemsToFolder: function (e, i, n, r) {
          var a = {
            enforceMaxItemCheck: r,
            queryType: n,
            folder: e,
            requireItemSelection: !0,
          };
          return t.FilePickerDialogHelper.showFilePickerDialog(a, i);
        },
        createFolderFromItems: function (e, r, a, o) {
          var s = {
            actionButtonText: i("CreateFolder.CreateButtonText"),
            loadingText: n("Picker.Creating"),
            showNameField: !0,
            enforceMaxItemCheck: o,
            queryType: a,
            folder: e,
          };
          return t.FilePickerDialogHelper.showFilePickerDialog(s, r);
        },
        onFilePickerDialogLoaded: function (t) {
          e && e.isActive && (e.stopLoading(), (r = t));
        },
        onPickerContextChange: function (t) {
          r && e && e._onPickerSelectionChange(!r.isActionButtonDisabled);
        },
      };
    })();
  }),
  define(
    "albumsprovider",
    ["jbase", "basecontrol", "imagetile", "datarequest", "errormanager"],
    function () {
      !(function () {
        function e(e, t) {
          for (var i = [], n = 0; e && n < e.length; n++) {
            var r = e[n];
            r && (!t || r.photo || r.video) && i.push(r.id);
          }
          return i;
        }
        var t = wLive.Core;
        defineNamespace("SkyDrive.Core.ModifyAlbumActionType", {
          add: "Add",
          remove: "Remove",
          create: "Create",
        });
        var i = 200;
        defineClass("SkyDrive.Core.AlbumsProvider", function () {}, {
          propertyId: "SkyDrive",
          createAlbum: function (e, t) {
            var i = this;
            return i.enumerateAllItems(t).then(function (t) {
              return i._callModifyAlbum(
                null,
                e,
                t,
                SkyDrive.Core.ModifyAlbumActionType.create
              );
            });
          },
          addToAlbum: function (e, t) {
            var i = this;
            return i.enumerateAllItems(t).then(function (t) {
              return i._callModifyAlbum(e, null, t);
            });
          },
          removeFromAlbum: function (t, i) {
            return this._callModifyAlbum(
              t,
              null,
              e(i),
              SkyDrive.Core.ModifyAlbumActionType.remove
            );
          },
          enumerateAllItems: function (i) {
            function n(n, r) {
              for (
                var o = [],
                  s = t.SkyDriveItem.getSetKey(
                    null,
                    null,
                    t.JSONConstants.FilterType.PhotosVideosFolders
                  ),
                  l = 0;
                i && l < i.length;
                l++
              ) {
                var d = i[l];
                if (d.folder) {
                  var u = d._dataModel;
                  a.push(u.ensureCompletelyDownloaded(d, s));
                } else o.push(d);
              }
              if (a.length > 0)
                for (var c = 0, h = 0; h < a.length; h++)
                  a[h].then(
                    function (t) {
                      var i = t.getChildren(s).toArray();
                      if (((o = o.concat(i)), ++c == a.length)) {
                        var r = e(o, !0);
                        n(r);
                      }
                    },
                    function (e) {
                      r && r(e);
                    }
                  );
              else {
                var m = e(o, !0);
                n(m);
              }
            }
            function r() {
              for (var e = 0; e < a.length; e++) a[e].abort();
            }
            var a = [];
            return new Shared.Promise(n, r);
          },
          createAlbumFromFolder: function (i, n, r) {
            var a = this,
              o = t.SkyDriveItem.getSetKey(),
              s = i._dataModel;
            return s.ensureCompletelyDownloaded(i, o).then(function () {
              for (
                var t = i.getChildren(o).toArray(),
                  s = e(t, !0),
                  l = e(n),
                  d = e(r),
                  u = s.concat(l),
                  c = 0;
                c < d.length;
                c++
              ) {
                var h = u.indexOf(d[c]);
                h >= 0 && u.splice(h, 1);
              }
              return 0 == u.length
                ? new Shared.Promise(function (e, t) {
                    t && t();
                  })
                : a._callModifyAlbum(
                    null,
                    i.name,
                    u,
                    SkyDrive.Core.ModifyAlbumActionType.create
                  );
            });
          },
          createPlaceholderAlbum: function (e, i) {
            var n = new t.SkyDriveItem(
              t.DataModel.getInstance(),
              t.SkyDriveItem.getItemKey(e),
              t.SkyDriveItem.getItemKey("albums")
            );
            return n.processItem({ isAlbum: !0, name: i }), n;
          },
          _callModifyAlbum: function (e, n, r, a) {
            function o(o, s) {
              function u(e) {
                c.length > 0
                  ? l
                      ._callModifyAlbum(
                        e.id,
                        null,
                        c,
                        a && a != SkyDrive.Core.ModifyAlbumActionType.create
                          ? a
                          : SkyDrive.Core.ModifyAlbumActionType.add
                      )
                      .then(o, s)
                  : o && o(e);
              }
              var c = (r || []).splice(i),
                h = {
                  id: e,
                  name: n,
                  items: r || [],
                  action: a || SkyDrive.Core.ModifyAlbumActionType.add,
                },
                m = FilesConfig.baseApiUrl + "ModifyAlbum";
              (d = new t.DataRequest(
                m,
                m,
                Object.toJSON(h),
                u,
                s,
                null,
                3,
                1,
                !0
              )),
                (d.apiId = "SkyDrive_Web_ModifyAlbum_" + h.action),
                (d.errorCodeSuffix = Math.ceil(h.items.length / 10)),
                (d.propertyId = l.propertyId),
                d.start();
            }
            function s() {
              d && d.abort();
            }
            var l = this,
              d = null;
            return new Shared.Promise(o, s);
          },
        });
      })();
    }
  ),
  define("placeholderinput", ["jquery-1.7.2", "wliveloaded"], function () {
    !(function () {
      function e(e, t) {
        function i() {
          e.val() == t && (e.removeClass("pi_placeholder"), e.val(""));
        }
        function n() {
          "" == e.val() && (e.addClass("pi_placeholder"), e.val(t));
        }
        var r = this;
        r.render = function () {
          return e.length && "placeholder" in e[0]
            ? void e.attr("placeholder", t)
            : (e.focus(i), e.blur(n), void n());
        };
      }
      wLive.Controls.PlaceholderInput = e;
    })();
  }),
  define(
    "albumpicker",
    [
      "jbase",
      "basecontrol",
      "imagetile",
      "dialog",
      "alehelpers",
      "albumsprovider",
      "errormanager",
      "placeholderinput",
    ],
    function () {
      !(function () {
        function e(e, t) {
          var n = i.Notifications,
            o = a.getViewLink(t, c)[0].outerHTML,
            s =
              1 == e.length
                ? r("Picker.AddedToAlbum").format(escape(e[0].name), o)
                : r("Picker.MultiAddedToAlbum").format(e.length, o),
            l = n.createTopBar({ content: s, dismissalMode: "Timeout" });
          l.show(),
            jQuery(l.content())
              .find("a")
              .click(function () {
                l.hide();
              });
        }
        var t = wLive.Core,
          i = wLive.Controls,
          n = t.AleHelpers.getPCString,
          r = t.AleHelpers.getString,
          a = t.SkyDriveItemHelper,
          o = 13,
          s = "albumRowClicked",
          l = "albums",
          d = n("NewDocument.Creating"),
          u = r("Picker.Adding"),
          c = wLive.Core.ViewContext.getInstance(),
          h = t.DataModel.getInstance();
        defineSubClass(
          "SkyDrive.UI.AlbumPicker",
          Shared.UI.Dialog,
          function () {
            var e = this;
            (e.albumsListView = e.createChild(
              SkyDrive.UI.SetRowsListView,
              null,
              e.dataContext
            )),
              e.exposeResources({
                selectionManager: c ? c.selectionManager : {},
                itemProvider: c ? c.itemProvider : {},
                actionManager: c ? c.actionManager : {},
              }),
              e.addObjectListener(h, t.DataModel.dataChangedEvent, e.change);
          },
          {
            createButtonText: n("CreateFolder.CreateButtonText"),
            createHelpText: r("AlbumPicker.AlbumNamePlaceHolder"),
            isCreateButtonDisabled: !0,
            showLoadingState: !1,
            errorMessage: "",
            isErrorVisible: !1,
            getDialogType: function () {
              return Shared.UI.DialogTypes.Flyout;
            },
            getAnchor: function () {
              return this.dataContext && this.dataContext.anchor;
            },
            onActivate: function () {
              var e = this,
                t = new i.PlaceholderInput(
                  jQuery(e.subElements.folderName),
                  e.createHelpText
                );
              t.render(), e.addObjectListener(e, s, e._onAlbumRowClicked);
            },
            onDataContextChanged: function (e) {
              var t = e.item;
              if (t && t._isLoadingItem) {
                var i = c.itemProvider.getItem(t.key);
                i && ((t = i), (e.item = i), (e.itemSet = i.getChildren()));
              }
              this.albumsListView.setDataContext({
                item: t,
                itemSet: e.itemSet,
              });
            },
            _onKeyDown: function (e) {
              var t = !1;
              switch (e.which) {
                case o:
                  this._onCreateButtonClicked(), e.preventDefault(), (t = !0);
              }
              return !t;
            },
            _onKeyUp: function (e) {
              var t = this;
              return (
                (t.isCreateButtonDisabled = !t.subElements.folderName.value),
                (t.isErrorVisible = !1),
                t._updateBindings(),
                !0
              );
            },
            _onAlbumRowClicked: function (e) {
              this.dataContext.onAlbumRowClicked &&
                this.dataContext.onAlbumRowClicked(e);
            },
            showLoading: function (e) {
              var t = this;
              (t.loadingStateContent =
                window.$f &&
                $f.createLoading({
                  returnMarkup: !0,
                  useTransparentFallback: !0,
                  text: e,
                })),
                (t.isCreateButtonDisabled = !0),
                (t.showLoadingState = !0),
                t._updateBindings();
            },
            _onCreateButtonClicked: function () {
              var t = this,
                i = t.subElements.folderName.value,
                n = a.getErrorMessageForNewItemName(i, !1);
              if (n)
                (t.errorMessage = n),
                  (t.isErrorVisible = !0),
                  t._updateBindings();
              else {
                t.showLoading(d);
                var r = new SkyDrive.Core.AlbumsProvider();
                r.createAlbum(i, t.dataContext.itemsToAdd).then(function (n) {
                  var a = t.dataContext.item;
                  a.expire(), a.invalidate();
                  var o = r.createPlaceholderAlbum(n.id, i);
                  e(t.dataContext.itemsToAdd, o), t._dialog.dismiss();
                }, bind(t, t._onAlbumCreateFailure));
              }
            },
            _onAlbumCreateFailure: function (e) {
              var t = this;
              (t.isCreateButtonDisabled = !1),
                (t.showLoadingState = !1),
                (t.isErrorVisible = !0),
                t._updateBindings();
            },
          },
          {
            addItemsToAlbum: function (t, i) {
              SkyDrive.UI.AlbumPicker.showAlbumPickerFlyout(
                i,
                t,
                function (i, n) {
                  var r = new SkyDrive.Core.AlbumsProvider();
                  r.addToAlbum(i.id, t).then(
                    function () {
                      e(t, i), i.expire(), i.invalidate(), n && n.dismiss();
                    },
                    function () {}
                  );
                }
              );
            },
            showAlbumPickerFlyout: function (e, i, n) {
              Shared.UI.Dialog.create([], function () {
                var r = t.SkyDriveItem.getItemKey(l),
                  a = new SkyDrive.Core.PhotosProvider(),
                  o = a.getItem(r) || c.dataModel.getLoadingItem(r, !0),
                  s = new SkyDrive.UI.AlbumPicker();
                return (
                  s.setDataContext({
                    anchor: e || byId("m_wh"),
                    item: o,
                    itemSet: a.getChildren(o),
                    itemsToAdd: i,
                    onAlbumRowClicked: function (e) {
                      s.showLoading(u), n && n(e, s._dialog);
                    },
                  }),
                  c.itemScopedDisposables.push(s),
                  s
                );
              });
            },
          }
        );
      })();
    }
  ),
  define("albumpicker.html", ["albumpicker"], function () {
    (SkyDrive.UI.AlbumPicker.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><div id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="albumsList listViewViewport">' +
        this.albumsListView.renderHtml() +
        '</div><div class="createArea"><input type="text" id="' +
        htmlAttributeEncode(this.id + "_2") +
        '"></input><div class="errorContainer"><div id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" style="' +
        generateStyleAttribute("display", this.isErrorVisible) +
        '" class="errorText">' +
        this.errorMessage +
        '</div></div><div id="' +
        htmlAttributeEncode(this.id + "_4") +
        '" class="buttonContainer"><span id="' +
        htmlAttributeEncode(this.id + "_5") +
        '" style="' +
        generateStyleAttribute("display.inlineblock", this.showLoadingState) +
        '" class="loadingState">' +
        this.loadingStateContent +
        '</span><input type="button" id="' +
        htmlAttributeEncode(this.id + "_6") +
        '" class="default"' +
        generateAttributesString(
          "value",
          this.createButtonText,
          "disabled",
          this.isCreateButtonDisabled
        ) +
        "></input></div></div></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.AlbumPicker,
        [
          { id: 0 },
          { id: 1, childId: "albumList" },
          {
            id: 2,
            childId: "folderName",
            userActions: { keydown: "_onKeyDown", keyup: "_onKeyUp" },
          },
          {
            id: 3,
            css: ["display", "isErrorVisible"],
            attr: ["html", "errorMessage"],
          },
          { id: 4, childId: "buttonContainer" },
          {
            id: 5,
            css: ["display.inlineBlock", "showLoadingState"],
            attr: ["html", "loadingStateContent"],
            childId: "loadingState",
          },
          {
            id: 6,
            attr: [
              "value",
              "createButtonText",
              "disabled",
              "isCreateButtonDisabled",
            ],
            childId: "createButton",
            userActions: { click: "_onCreateButtonClicked" },
          },
        ],
        [],
        {}
      );
  }),
  define(
    "renamedialog",
    [
      "jbase",
      "basecontrol",
      "imagetile",
      "dialog",
      "alehelpers",
      "errormanager",
      "placeholderinput",
    ],
    function () {
      !(function () {
        var e = wLive.Core,
          t = wLive.Controls,
          i = e.AleHelpers.getPCString,
          n = e.AleHelpers.getString,
          r = e.SkyDriveItemHelper,
          a = 13,
          o = n("RenameDialog.RenameAlbum"),
          s = (wLive.Core.ViewContext.getInstance(), e.DataModel.getInstance());
        defineSubClass(
          "SkyDrive.UI.RenameDialog",
          Shared.UI.Dialog,
          function () {},
          {
            renameButtonText: i("RenameCommand"),
            createHelpText: n("CreateAlbum.AlbumNameTitle"),
            isCreateButtonDisabled: !0,
            showLoadingState: !1,
            errorMessage: "",
            isErrorVisible: !1,
            populateWithItemName: !0,
            getDialogType: function () {
              return Shared.UI.DialogTypes.Flyout;
            },
            getAnchor: function () {
              return this.dataContext && this.dataContext.anchor;
            },
            getTitle: function () {
              return this.dataContext.item.isAlbum ? o : "";
            },
            onActivate: function () {
              var e = this,
                i = new t.PlaceholderInput(
                  jQuery(e.subElements.itemName),
                  e.createHelpText
                );
              i.render(),
                (e.loadingStateContent =
                  window.$f &&
                  $f.createLoading({
                    returnMarkup: !0,
                    useTransparentFallback: !0,
                  })),
                (e.subElements.itemName.value = e.dataContext.item.name || "");
            },
            _onKeyDown: function (e) {
              var t = !1;
              switch (e.which) {
                case a:
                  this._onRenameButtonClicked(), e.preventDefault(), (t = !0);
              }
              return !t;
            },
            _onKeyUp: function (e) {
              var t = this;
              return (
                (t.isRenameButtonDisabled = !t.subElements.itemName.value),
                (t.isErrorVisible = !1),
                t._updateBindings(),
                !0
              );
            },
            showLoading: function () {
              var e = this;
              (e.isRenameButtonDisabled = !0),
                (e.showLoadingState = !0),
                e._updateBindings();
            },
            _onRenameButtonClicked: function () {
              var e = this,
                t = e.subElements.itemName.value,
                i = r.getErrorMessageForNewItemName(t, !1);
              i
                ? ((e.isRenameButtonDisabled = !0),
                  (e.errorMessage = i),
                  (e.isErrorVisible = !0),
                  e._updateBindings())
                : (e.showLoading(), e._renameItem(e.dataContext.item, t));
            },
            _renameItem: function (e, t) {
              var i = this,
                n = { id: e.id, name: t };
              e.parentId && "root" !== e.parentId && (n.lid = e.parentId),
                s.updateItem(
                  e,
                  "UpdateItem",
                  Object.toJSON(n),
                  function (e, t) {
                    if (
                      (t.invalidate(), (i.errorMessage = ""), i.dataContext)
                    ) {
                      var n = raiseEvent(t, "renameComplete", [
                        function () {
                          i.dispose();
                        },
                      ]);
                      n && i.dispose();
                    }
                  },
                  bind(i, i._onRenameFailure),
                  "RenameAlbum"
                );
            },
            _onRenameFailure: function (e) {
              var t = this;
              (t.errorMessage = e && e.error && e.error.message),
                (t.isRenameButtonDisabled = !1),
                (t.showLoadingState = !1),
                (t.isErrorVisible = !0),
                t._updateBindings();
            },
          },
          {
            renameItem: function (e, t) {
              Shared.UI.Dialog.create([], function () {
                var i = new SkyDrive.UI.RenameDialog();
                return (
                  i.setDataContext({ anchor: t || byId("m_wh"), item: e }), i
                );
              });
            },
          }
        );
      })();
    }
  ),
  define("renamedialog.html", ["renamedialog"], function () {
    (SkyDrive.UI.RenameDialog.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><input type="text" id="' +
        htmlAttributeEncode(this.id + "_1") +
        '"></input><div id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" style="' +
        generateStyleAttribute("display", this.isErrorVisible) +
        '" class="errorContainer"><div id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" class="errortext">' +
        this.errorMessage +
        '</div></div><div id="' +
        htmlAttributeEncode(this.id + "_4") +
        '" class="buttonContainer"><span id="' +
        htmlAttributeEncode(this.id + "_5") +
        '" style="' +
        generateStyleAttribute("display.inlineblock", this.showLoadingState) +
        '" class="loadingState">' +
        this.loadingStateContent +
        '</span><input type="button" id="' +
        htmlAttributeEncode(this.id + "_6") +
        '" class="default"' +
        generateAttributesString(
          "value",
          this.renameButtonText,
          "disabled",
          this.isRenameButtonDisabled
        ) +
        "></input></div></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.RenameDialog,
        [
          { id: 0 },
          {
            id: 1,
            childId: "itemName",
            userActions: { keydown: "_onKeyDown", keyup: "_onKeyUp" },
          },
          { id: 2, css: ["display", "isErrorVisible"] },
          { id: 3, attr: ["html", "errorMessage"] },
          { id: 4, childId: "buttonContainer" },
          {
            id: 5,
            css: ["display.inlineBlock", "showLoadingState"],
            attr: ["html", "loadingStateContent"],
            childId: "loadingState",
          },
          {
            id: 6,
            attr: [
              "value",
              "renameButtonText",
              "disabled",
              "isRenameButtonDisabled",
            ],
            childId: "renameButton",
            userActions: { click: "_onRenameButtonClicked" },
          },
        ],
        [],
        {}
      );
  }),
  define("ui", ["defineutilities"], function () {
    !(function () {
      defineNamespace("SkyDrive.UI.Constants", {
        screenSizes: { small: "small", large: "large" },
        containerEvents: {
          show: "showContainer",
          hide: "hideContainer",
          collapse: "collapseContainer",
          expand: "expandContainer",
          setFlavor: "setContainerFlavor",
        },
      });
    })();
  }),
  define(
    "jsonapi",
    [
      "errormanager",
      "operationmanager",
      "itemactionhelper",
      "actionmanager",
      "newdocumentcommand",
      "selectionmanager",
      "skydriveitemhelperextended",
      "popovermanager",
      "orderprintsdialog.html",
      "filepickerdialoghelper",
      "albumpicker.html",
      "renamedialog.html",
      "ui",
      "wlivemenu",
      "dialog",
    ],
    function () {
      !(function () {
        function e() {
          return Ee || (Ee = Z.Notifications), Ee;
        }
        function t(e) {
          return e.textEditorMimeType ? "TEXEF" : Qe;
        }
        function i() {
          return jQuery(
            '<iframe src="' +
              FilesConfig.iFrameEmptyUrl.encodeHtmlAttribute() +
              '"></iframe>'
          )
            .hide()
            .appendTo(document.body);
        }
        function n(e, t, i) {
          var n = !0;
          return (
            re.isOwnerOrCoOwner(e) ||
              (n = !re.evaluateThrottleNotification(e, Pe, !0)),
            n
          );
        }
        function r(e, t, r, a) {
          if ((G(t), n(t, r, a))) {
            var o = ne.itemStringFormat(e, t, r, a),
              s = { fileSize: t.size, isGroup: a, authed: "true", ids: t.id },
              l = {};
            (l[t.extension] = 1),
              (s.extensions = l),
              t &&
                t.itemStatus > 0 &&
                ((o += "&noauth=1"), (s.authed = "false")),
              (s.url = o),
              Qos.logData(
                "SkyDriveWeb_Internal_DownloadFile",
                "SkyDrive",
                null,
                null,
                null,
                s,
                null
              ),
              $B.Mobile || ae
                ? $BSI.navigateTo(o, "_top")
                : (J || (J = i()), J.attr("src", o));
          }
        }
        function a(t, i) {
          require(["flyout", "doregister"], function () {
            function n(e, i, n) {
              "action" === n && (l || Qos.log(Ae + "Purge_Confirm", Te), s(t));
            }
            var r = t.group,
              a = FilesConfig.recycleBinEnabled,
              o = a && !re.isViewerOwner(t) && !r,
              l = a && !!re.isRecycleBinQuery(t),
              d = t.isRecycled,
              u = t.isAlbum;
            if (!a || l || d || o || r || u) {
              l || Qos.log(Ae + "Purge", Te);
              var c = "DeletePromptSingleItem";
              d
                ? (c = "InlineDeletePromptSingle")
                : o
                ? (c = "DeleteSharedSingleItem")
                : u &&
                  Y("DeleteAlbum.CommandMessage") &&
                  (c = "DeleteAlbum.CommandMessage");
              var h = Y("DeleteAlbum.CommandText");
              _dlg = e().createFlyout({
                buttons: { action: t.isAlbum && h ? h : Y("DeleteCommand") },
                title: t.isAlbum
                  ? ""
                  : Y(
                      o
                        ? "DeleteSharedSingleItemPromptTitle"
                        : "DeletePromptTitle"
                    ),
                content: Y(c).format(t.name.encodeHtml()),
                anchor: i || _ge(ie),
              });
              var m = jQuery(_dlg);
              m.bind({
                "aftershow._dlg": function (e, t) {
                  if (_dlg) {
                    var i = jQuery(_dlg.content()),
                      n = _dlg.getButton({ buttonName: "action" });
                    sutra(i, "$Sutra.SkyDrive.DeleteMsgBoxContainer"),
                      sutra(n, "$Sutra.SkyDrive.DeleteMsgBoxOkBtn"),
                      sutra(
                        jQuery(".UserArea", i),
                        "$Sutra.SkyDrive.DeleteMsgBoxBody"
                      );
                  }
                },
                "afterdismiss._dlg": function (e, t) {
                  m && m.unbind("._dlg"), (m = null), (_dlg = null);
                },
                "buttonclick._dlg": n,
              }),
                _dlg.show();
            } else s(t);
          });
        }
        function o(e) {
          var t = null,
            i = !0,
            n = Pe.currentViewType == oe,
            r = Pe.itemProvider.peekParent(e),
            a = r ? Pe.itemProvider.getChildren(r) : null,
            o = a ? a.indexOf(e, !0) : -1;
          if (o >= 0) {
            if (r) {
              var s = a ? a.getCount() : 0;
              if (((i = !1), (t = r), s > 1 && n))
                if (FilesConfig.useOneUpViewOnDesktop) t = null;
                else {
                  var l = s - 1 > o ? o + 1 : o - 1;
                  if (l >= 0) {
                    var d = a.peek(l);
                    d && (t = d);
                  }
                }
            }
          } else
            Pe.viewParams.id == e.id && r
              ? (t = r)
              : e.textEditorMimeType && (t = r);
          return t;
        }
        function s(e) {
          var t = o(e),
            i = re.isRecycleBinQuery(e),
            n = new Object();
          if (
            (i || e.isRecycled ? (n.deletionType = 3) : (n.deletionType = 2),
            t && Pe.viewParams.id != t.id && !i)
          ) {
            var r = ne.itemStringFormat(
              "#{cidQueryString}{selfViewQueryType}{tagFilterParams}" +
                (t ? "{idQueryString}" : "") +
                "{scenario}{viewQueryString}",
              t
            );
            $BSI.navigateTo(r);
          }
          X.OperationManager.Current.execute("Delete", {
            items: [e],
            targetItem: e.getParent(!0),
            options: n,
          });
        }
        function l(e, t) {
          require(["orderprintsdialog"], function () {
            X.OrderPrintsDialogHelper &&
              X.OrderPrintsDialogHelper.showOrderPrintsDialog([e]);
          });
        }
        function d(t, i) {
          var n = ' checked="checked"',
            r = t && t.folder && 1 == t.folder.category,
            a =
              '<div><div><input type="radio" name="folderType" id="folderTypeDocuments"' +
              (r ? "" : n) +
              '/><label for="folderTypeDocuments">' +
              Y("InfoPane.Information.FolderTypeDocuments").encodeHtml() +
              '</label></div><div><input type="radio" name="folderType" id="folderTypePhotos"' +
              (r ? n : "") +
              '/><label for="folderTypePhotos">' +
              Y("InfoPane.Information.FolderTypePhotos").encodeHtml() +
              "</label></div>NaN",
            o = jQuery(a),
            s = e().createFlyout({
              buttons: { action: Y("SaveCommand") },
              title: Y("ChangeFolder.Title").encodeHtml(),
              content: o,
              anchor: i || _ge(ie),
            }),
            l = jQuery(s),
            d = jQuery(document);
          l.bind({
            "aftershow.fly": function () {
              d.bind("onFlyoutClose", function (e) {
                s.dismiss();
              });
            },
            "afterdismiss.fly": function (e, t) {
              d.unbind("onFlyoutClose"),
                l && l.unbind("._dlg"),
                (l = null),
                (s = null);
            },
            "buttonclick._dlg": function (e, i, n) {
              if ("action" === n) {
                var r = t.folder.category,
                  a = o.find("#folderTypeDocuments").attr("checked") ? 0 : 1;
                r != a &&
                  ((t.folder.category = a),
                  t.invalidate(),
                  t.updateItemProperties(
                    { cid: t.ownerCid, category: a },
                    function () {
                      (t.folder.category = a), t.invalidate(), t.expire();
                    },
                    function () {
                      (t.folder.category = r), t.invalidate();
                    },
                    "FolderType"
                  ));
              }
            },
          }),
            s.show(),
            $menu.closeAll();
        }
        function u(e, t) {
          return SkyDrive.UI.EventHelper.isSmallScreen()
            ? !1
            : (require(["sharedialog"], function () {
                $Do.wE("Bucket3.css", 0, function () {
                  X.SharingHelper.showSharingDialog(t);
                });
              }),
              !1);
        }
        function c(e, t, i, n) {
          var r,
            a = !1;
          "search" === Pe.viewParams.qt &&
          X.SkyDriveItemHelper.hasOneNoteClientUrl(e)
            ? ((a = !0), (n = nt), (r = e.urls.oneNoteClient))
            : (r = ne.itemStringFormat(
                "/ResourceToUrl/?{cidQueryString}{resIdQueryString}&oc={item.ownerCid}&ct=" +
                  (i || e.group ? "Group" : "None"),
                e,
                t,
                i
              ));
          var o = {
            url: r,
            isDavUrl: a,
            fileName: e.name,
            iconType: e.iconType,
            appType: n,
            extension: n == nt ? dt : e.extension,
            item: e,
          };
          $B.Mobile || FilesConfig.legacyMobile
            ? $BSI.navigateTo(ne.itemStringFormat(ve, e, t, i))
            : require(["officeclient"], function () {
                window.OfficeClient.executeOpenInClient(o, Pe.errorManager);
              });
        }
        function h(e) {
          require(["officeclient"], function () {
            var t,
              i = Pe.actionManager,
              n = i.getAction("OpenInOffice", e);
            (t =
              window.OfficeClient && window.OfficeClient.isOfficeInstalled()
                ? n
                : i.getAction("EditBrowser", e) ||
                  i.getAction("ViewBrowser", e) ||
                  n),
              i.doAction(t);
          });
        }
        function m(e, t, i, n, r, a) {
          var o = new X.NewDocumentCommand(Pe, t, i, n);
          Pe.itemScopedDisposables.push(o), o.execute(e, r, a);
        }
        function g(e, t) {
          var i = !1,
            n = t;
          do
            if (
              ((n = Pe.itemProvider.peekParent(n)),
              n && "Music" == n.specialFolderCanonicalName)
            ) {
              i = !0;
              break;
            }
          while (n);
          if (!i) {
            var r = '<a href="https://go.microsoft.com/?linkid=9874949">',
              a = "</a>";
            Pe.errorManager.add({
              $element: jQuery(
                "<span>" + Y("EmptyFolder.Music").format(r, a) + "</span>"
              ),
              priority: 1,
              type: 0,
              error: "embedPopover",
            });
          }
          return (
            window.open(
              FilesConfig.xboxMusicUrl + "cloud/track/" + t.id,
              "xboxmusic"
            ),
            !1
          );
        }
        function f(t, i) {
          return (
            require([
              "permissionsprovider",
              "embed",
              "modaldialog",
            ], function () {
              var n;
              try {
                var r = new X.PermissionsProvider(Pe.callerCid);
                n = new Z.Embed(r);
              } catch (a) {
                var o = Y("Embed.PopoverError");
                Pe.errorManager.add({
                  $element: jQuery("<span>" + o.encodeHtml() + "</span>"),
                  priority: 1,
                  type: 0,
                  error: "embedPopover",
                });
              }
              if (t.isSpecialFolder && 0 !== t.sharingLevelValue) {
                var s = {
                    buttons: { action: Y("Embed.SpecialFolder.Button") },
                    content: jQuery(
                      "<p>" +
                        Y("Embed.SpecialFolder.Msg1") +
                        "</p><p>" +
                        Y("Embed.SpecialFolder.Msg2").format(
                          '<a class="edi_e" href="#" onclick="return false">',
                          "</a>"
                        ) +
                        "</p>"
                    ),
                    title: Y("Embed.SpecialFolder.Header"),
                  },
                  l = new e().createModalDialog(s),
                  d = jQuery(l);
                d.bind({
                  "aftershow._dlg": function (e, r) {
                    jQuery("div.ModalDialog .edi_e").click(function () {
                      n.show(t, !0, i), l.dismiss();
                    });
                  },
                  "afterdismiss._dlg": function (e, t) {
                    d && d.unbind("._dlg"), (d = null), (l = null);
                  },
                  "buttonclick._dlg": function (e, t, i) {
                    l.dismiss();
                  },
                }),
                  l.show();
              } else n.show(t, !0, i);
            }),
            !1
          );
        }
        function p(e, t, i, n, r) {
          return C(e, t, "Move", r);
        }
        function v(e, t, i, n, r) {
          return C(
            e,
            t,
            FilesConfig.copyAsyncEnabled ? "CopyAsync" : "Copy",
            r
          );
        }
        function y(e, t, i, n, r) {
          return C(e, t, "CopyToSkyDrive", r);
        }
        function C(e, t, i, n) {
          return (
            require(["movecopycommand"], function () {
              var e = new X.MoveCopyCommand(Pe, i, n);
              Pe.itemScopedDisposables.push(e), e.execute(t);
            }),
            !1
          );
        }
        function S(t, i, n) {
          return (
            require(["restoreoperation"], function () {
              function t() {
                X.OperationManager.Current.execute("Restore", {
                  items: [i],
                  targetItem: i.getParent(!0),
                  perItemOptions: r,
                });
              }
              var r = new Object();
              (r.recycleBinItems = [new Object()]),
                (r.recycleBinItems[0] = X.SkyDriveItemHelper.getRestoreItem(i)),
                i == Pe.currentItem
                  ? (Qos.log(Ae + "Restore", Te),
                    require(["flyout", "doregister"], function () {
                      var r = n || _ge("c_header"),
                        a = {
                          buttons: { action: Y("RestoreCommand") },
                          title: Y("InlineRestorePromptTitle"),
                          content: Y("InlineRestorePromptSingle").format(
                            i.name
                          ),
                          anchor: r,
                        },
                        o = e().createFlyout(a),
                        s = jQuery(o);
                      s.bind({
                        "afterdismiss._dlg": function (e, t) {
                          s && s.unbind("._dlg"), (s = null), (o = null);
                        },
                        "buttonclick._dlg": function (e, i, n) {
                          "action" === n &&
                            (Qos.log(Ae + "Restore_Confirm", Te), t()),
                            o.dismiss();
                        },
                      }),
                        o.show();
                    }))
                  : t();
            }),
            !1
          );
        }
        function b(e, t) {
          return (
            require(["rotateimageoperation"], function () {
              var e = { numberOfClockwiseRotations: -1 };
              X.OperationManager.Current.execute("RotateImage", {
                items: [t],
                targetItem: t,
                options: e,
              });
            }),
            !1
          );
        }
        function _(e, t) {
          return w("Delete", t), !1;
        }
        function k(t, i, n) {
          function r(e, t) {
            i.expire(), i.invalidate();
          }
          function a(e, t) {}
          return (
            i.folder.childCount < i._dataModel._pageSize
              ? w("Restore", i)
              : require(["flyout", "doregister"], function () {
                  var t = {
                      buttons: { action: Y("RestoreCommand") },
                      content: jQuery(
                        "<span>" + Y("RestoreAllWarning") + "</span>"
                      ),
                      anchor: n ? n : _ge("c_header"),
                    },
                    i = new e().createFlyout(t),
                    o = jQuery(i);
                  o.bind({
                    "buttonclick._dlg": function (e, t, i) {
                      var n = FilesConfig.baseApiUrl + "RestoreAll",
                        o = new X.DataRequest(n + Math.random(), n, null, r, a);
                      (o.apiId = "SkyDrive_Json_RestoreAll"),
                        (o.propertyId = "SkyDrive"),
                        o.start();
                    },
                  }),
                    i.show();
                }),
            !1
          );
        }
        function w(e, t) {
          var i = Pe.selectionManager;
          i.selectAll(t);
          var n = i.getSelection(),
            r = Pe.multiselectActionManager.getAction(e, n);
          r && Pe.actionManager.doAction(r);
        }
        function I(e) {
          var t = {
              buttons: { action: Y("Close") },
              content: jQuery(
                "<span>" + ee("RestrictedNotification.Visitor") + "</span>"
              ),
            },
            i = Z.Notifications.createModalDialog(t),
            n = jQuery(i);
          return (
            n.bind({
              "buttonclick._dlg": function (e, t, n) {
                i.dismiss();
              },
            }),
            i.show(),
            !1
          );
        }
        function x(e, t) {
          return (
            require(["reportabusecommand"], function () {
              jQuery(Pe).trigger(Me);
              var e = new X.ReportAbuseCommand(Pe, t);
              Pe.itemScopedDisposables.push(e), e.execute();
            }),
            !1
          );
        }
        function D(e) {
          return (
            require([
              "mountpointhelper",
              "mountpointconfirm",
              "mountpointconfirm.html",
            ], function () {
              X.MountPointHelper.processMountOperation(e);
            }),
            !1
          );
        }
        function T(e, t) {
          return (
            require(["removemountpoint"], function () {
              X.RemoveMountPointHelper.startMountPointRemoval(e, t);
            }),
            !1
          );
        }
        function A(t) {
          require(["modaldialog", "doregister"], function () {
            function i(e, t, i) {
              "action" === i && Pe.deviceItemSet.remove(n);
            }
            var n = Pe.deviceItemSet.getByKey(t.did.toLowerCase()),
              r = {
                buttons: {
                  action: Y("RemoveDevice.DisconnectButtonText"),
                  close: Y("CancelCommand"),
                },
                title: Y("RemoveDevice.ConfirmTitle")
                  .format(n.name)
                  .encodeHtml(),
                content:
                  Y("RemoveDevice.ConfirmText1").format(n.name).encodeHtml() +
                  "<br/><br/>" +
                  Y("RemoveDevice.ConfirmText2").encodeHtml(),
              };
            _dlg = e().createModalDialog(r);
            var a = jQuery(_dlg);
            a.bind({
              "aftershow._dlg": function (e, t) {
                var i = jQuery(_dlg.content());
                sutra(i, "$Sutra.SkyDrive.RemoveDeviceConfirmation"),
                  sutra(
                    _dlg.getButton({ buttonName: "action" }),
                    "$Sutra.SkyDrive.RemoveDeviceOKButton"
                  ),
                  sutra(
                    _dlg.getButton({ buttonName: "close" }),
                    "$Sutra.SkyDrive.RemoveDeviceCancelButton"
                  );
              },
              "afterdismiss._dlg": function (e, t) {
                a && a.unbind("._dlg"), (a = null), (_dlg = null);
              },
              "buttonclick._dlg": i,
            }),
              _dlg.show();
          });
        }
        function P(e, t, i, n) {
          return (
            require(["createfolderhelper"], function () {
              X.CreateFolderHelper.showCreateFolderDialog(t);
            }),
            !1
          );
        }
        function E(e, t) {
          return function (i, n, r, a, o) {
            return (
              e
                ? $BSI.navigateTo(ne.itemStringFormat(e, n, r, a))
                : t && t(i, n, r, a, o),
              !1
            );
          };
        }
        function B(e, t) {
          return R(e, t) && !(($B.IE && $B.V < 10) || $B.SF_iPhone);
        }
        function R(e, t) {
          var i = ae && $B.V < 6;
          return !(
            i ||
            ("allmyphotos" === Pe.viewParams.qt && t.folder) ||
            Pe.currentViewType == De ||
            re.treatAsAlbum(t, Pe)
          );
        }
        function M(e, t) {
          return !(
            ("allmyphotos" === Pe.viewParams.qt && t.folder) ||
            re.treatAsAlbum(t, Pe) ||
            t.isAlbumRoot
          );
        }
        function F(e, t) {
          return (
            (!re.isPartOfBundle(t) || FilesConfig.copyAsyncEnabled) &&
            "root" !== t.id &&
            ("sharedby" !== Pe.viewParams.qt ||
              (FilesConfig.copyAsyncEnabled && 4 !== t.sharingLevelValue)) &&
            "allmyphotos" !== Pe.viewParams.qt &&
            !re.treatAsAlbum(t, Pe) &&
            !t.isAlbumRoot &&
            (!t.folder || FilesConfig.copyAsyncEnabled) &&
            ("search" !== Pe.viewParams.qt || !t.internalPath)
          );
        }
        function L(e, t) {
          return (
            (!re.isPartOfBundle(t) ||
              FilesConfig.showExtendedCommandsForEditors) &&
            ("allmyphotos" !== Pe.viewParams.qt || !t.folder) &&
            Pe.currentViewType != De &&
            !re.treatAsAlbum(t, Pe) &&
            !t.isAlbumRoot &&
            "sharedby" !== Pe.viewParams.qt &&
            ("search" !== Pe.viewParams.qt || !t.internalPath)
          );
        }
        function U(e, t) {
          var i = Pe.viewParams,
            n = Pe.itemProvider.peekParent(t);
          return (
            "sharedby" !== i.qt &&
            !re.isPartOfBundle(t) &&
            ("allmyphotos" !== i.qt || !t.folder) &&
            Pe.currentViewType != De &&
            !t.isAlbumRoot &&
            ("search" !== Pe.viewParams.qt || !t.internalPath) &&
            (!t.isAlbum || re.isOwnerOrCoOwner(t)) &&
            (!n || !n.isAlbum)
          );
        }
        function V(e, t) {
          return "search" !== Pe.viewParams.qt || !t.internalPath;
        }
        function N(e, t) {
          return "search" !== Pe.viewParams.qt || !t.internalPath;
        }
        function Q(e, t) {
          return ("search" !== Pe.viewParams.qt || !t.internalPath) && W(t);
        }
        function q(e, t) {
          var i = Pe.viewParams;
          return !(Pe.currentViewType == De && !t.folder) && "queue" !== i.qt;
        }
        function O(e, t) {
          var i = Pe.viewParams;
          return "recyclebin" !== i.qt && !!t.folder;
        }
        function H(e, t) {
          var i = Pe.viewParams;
          return "allmyphotos" !== i.qt && "sharedby" !== i.qt;
        }
        function $(e, t, i, n) {
          var r = t.getParent(!0);
          return null != r && re.refreshItemWhenVisible(r), !0;
        }
        function j(e, t, i, n) {
          var r =
            ke +
            "?{cidQueryString}{idQueryString}{authKeyQueryString}&action=" +
            e;
          r = ne.itemStringFormat(r, t, i, n);
          var a =
            FilesConfig.signInUrl +
            "&ru=" +
            r.encodeUrl() +
            "&wreply=" +
            r.encodeUrl();
          $BSI.navigateTo(a, "_top");
        }
        function z(e) {
          return e && !!e.video;
        }
        function W(e) {
          return FilesConfig.isEmbedLinkDisabledForVideos ? !z(e) : !0;
        }
        function G(e) {
          var t = "Document",
            i = e && e.did ? "Devices" : "SkyDrive";
          e && (e.video ? (t = "Movie") : e.photo && (t = "Photo")),
            $BSI.reportEvent("Download.Content.File." + t, {
              DocsContentSource: i,
            });
        }
        function K(e, t) {
          t = t || ft;
          for (var i in t) e.registerAction(i, pt);
        }
        var J,
          X = wLive.Core,
          Z = wLive.Controls,
          Y = X.AleHelpers.getPCString,
          ee = X.AleHelpers.getString,
          te = X.AleHelpers.getSkyString,
          ie = "m_wh",
          ne = X.ItemActionHelper,
          re = X.SkyDriveItemHelper,
          ae = $B.SF_iPhone && !$B.Mobile,
          oe = "SelfView",
          se = "_blank",
          le =
            "{cidQueryString}{idQueryString}{deviceIdQueryString}{scenario}{selfViewQueryType}{searchParams}{viewQueryString}{authKeyQueryString}{filterTypeParams}{tagFilterParams}",
          de = "#",
          ue =
            "/view.aspx?{cidQueryString}{resIdQueryString}{wacQueryType}{appQueryString}{authKeyQueryString}&" +
            FilesConfig.wacSessionOriginDocLib,
          ce =
            "/edit.aspx?{cidQueryString}{resIdQueryString}{wacQueryType}{appQueryString}{authKeyQueryString}&" +
            FilesConfig.wacSessionOriginDocLib,
          he =
            "/edit.aspx?{cidQueryString}{resIdQueryString}{wacQueryType}{appQueryString}{authKeyQueryString}&nd=1&" +
            FilesConfig.wacSessionOriginCreateNew,
          me =
            "/edit.aspx?{cidQueryString}{resIdQueryString}{wacQueryType}{appQueryString}{authKeyQueryString}&formAction=1&" +
            FilesConfig.wacSessionOriginCreateNew,
          ge =
            "/edit.aspx?{cidQueryString}{resIdQueryString}{wacQueryType}{appQueryString}{authKeyQueryString}&formAction=2",
          fe =
            "/edit.aspx?{cidQueryString}{resIdQueryString}{wacQueryType}{appQueryString}{authKeyQueryString}&formAction=3",
          pe =
            "/versions.aspx?{cidQueryString}{resIdQueryString}{wacQueryType}{authKeyQueryString}",
          ve =
            "/openinclient?{cidQueryString}{resIdQueryString}{authKeyQueryString}&autoRedirect=false",
          ye =
            FilesConfig.autoRedeemUrl +
            "?{cidQueryString}{resIdQueryString}{authKeyQueryString}&autoRedeem=False",
          Ce = "{item.urls.download}",
          Se =
            ".aspx?{cidQueryString}{resIdQueryString}{authKeyQueryString}&canary={FilesConfig.canary:encodeURIComponent}",
          be = "/downloadfolder" + Se,
          _e = "/download" + Se,
          ke = "https://" + location.host,
          we =
            ("http://" + location.host,
            "/feed.aspx?{cidQueryString}{resIdQueryString}"),
          Ie =
            "/changefolderexpiration.aspx?cid={item.ownerCid}{resIdQueryString}",
          xe = "",
          De = "FilePickerView",
          Te = "SkyDrive",
          Ae = "SkyDriveWeb_Internal_Control_InlineDeletedContent_",
          Pe = X.ViewContext.getInstance(),
          Ee = null,
          Be = "DO",
          Re = "PL",
          Me = "RA",
          Fe = "DEL",
          Le = "OO",
          Ue = "C",
          Ve = "CTS",
          Ne = "M",
          Qe = "DC",
          qe = "NW",
          Oe = "NE",
          He = "NX",
          $e = "NP",
          je = "NO",
          ze = "NF",
          We = "AF",
          Ge = "AP",
          Ke = "RD",
          Je = "RMRU",
          Xe = "ORR",
          Ze = "CMP",
          Ye = "RMP",
          et = "ATS",
          tt = "AF",
          it = "Excel",
          nt = "OneNote",
          rt = "PowerPoint",
          at = "Word",
          ot = "Visio",
          st = "Project",
          lt = "Publisher",
          dt = ".one",
          ut = "w",
          ct = "x",
          ht = "f",
          mt = "p",
          gt = "n",
          ft = {
            RemoveFromMRU: {
              name: "rmru",
              1: {
                skyCmd: Je,
                click: function (e, t, i, n, r) {
                  return (
                    require(["removefrommrucommand"], function () {
                      var e = new X.RemoveFromMRUCommand(Pe);
                      e.execute([t]);
                    }),
                    !1
                  );
                },
              },
            },
            ViewVersions: {
              name: "vv",
              1: { skyCmd: "VRS", url: pe, target: se, requiresRedemption: !0 },
            },
            Share: {
              name: "sh",
              1: {
                skyCmd: "SH",
                click: u,
                check: function (e, t, i, n) {
                  return (
                    !Pe.viewParams.group &&
                    re.canViewSharingInfo(t) &&
                    !t.isRecycled
                  );
                },
              },
              2: {
                skyCmd: "SH",
                click: u,
                check: function (e, t, i, n) {
                  return (
                    !Pe.viewParams.group &&
                    re.canViewSharingInfo(t) &&
                    !t.isRecycled
                  );
                },
              },
            },
            AddToShared: {
              name: "ats",
              1: {
                skyCmd: et,
                click: function (e, t) {
                  t.expire(), $BSI.navigateTo(t.urls.viewInBrowser);
                },
                requiresRedemption: !0,
              },
            },
            SendSurvey: {
              name: "sf",
              1: {
                skyCmd: "FS",
                click: function (e, t) {
                  var i;
                  return (
                    require(["permissionsprovider", "sendform"], function () {
                      var e = new X.PermissionsProvider(Pe.callerCid);
                      (i = new Z.SendForm(e)), i.show(t);
                    }),
                    !1
                  );
                },
              },
            },
            PreviewSurvey: {
              name: "pf",
              1: { skyCmd: "FP", url: ge, target: se },
            },
            EditSurvey: {
              name: "ef",
              1: { skyCmd: "FE", url: fe, target: se },
            },
            ChangeExpiration: { name: "ce", 1: { skyCmd: "CE", url: Ie } },
            Feed: {
              name: "fe",
              1: { skyCmd: "Feed", url: ke + we + xe },
              2: { skyCmd: "Feed", url: ke + we },
              3: { skyCmd: "Feed", url: ke + we + xe },
              4: { skyCmd: "Feed", url: ke + we },
            },
            Embed: {
              name: "em",
              1: {
                skyCmd: "EM",
                click: function (e, t) {
                  return f(t, !1);
                },
                check: function (e, t, i, n) {
                  return (
                    "allmyphotos" !== Pe.viewParams.qt &&
                    !t.isAlbumRoot &&
                    !re.treatAsAlbum(t, Pe) &&
                    ("search" !== Pe.viewParams.qt || !t.internalPath) &&
                    W(t)
                  );
                },
              },
              2: {
                skyCmd: "EM",
                click: function (e, t) {
                  return f(t, !0);
                },
                check: Q,
              },
              3: {
                skyCmd: "EM",
                click: function (e, t) {
                  return f(t, !1);
                },
                check: Q,
              },
            },
            Play: { name: "pl", 1: { skyCmd: Re, click: g } },
            Download: {
              name: "dl",
              1: {
                skyCmd: Be,
                mousedown: function () {
                  return !1;
                },
                click: function (e, t, i, r) {
                  if (n(t, i, r)) {
                    var a = {},
                      o = Pe.viewParams;
                    o.ticket
                      ? (a.ticket = o.ticket)
                      : o.authkey && (a.authkey = o.authkey),
                      Pe.operationManager.execute("DownloadAsZip", {
                        items: [t],
                        options: a,
                      });
                  }
                  return !1;
                },
                checkLocalModifications: !0,
                check: function (e, t, i, n) {
                  return !(
                    t.isAlbumRoot ||
                    ("allmyphotos" === Pe.viewParams.qt && t.folder)
                  );
                },
                screenSizes: { small: !0 },
              },
              2: {
                skyCmd: Be,
                url: _e,
                mousedown: function () {
                  return !1;
                },
                click: function (e, t, i, n) {
                  return r(_e, t, i, n), !1;
                },
                checkLocalModifications: !0,
                screenSizes: { small: !0 },
              },
              3: {
                skyCmd: Be,
                mousedown: function () {
                  return !1;
                },
                click: function (e, t, i, n) {
                  return r(t && t.did ? Ce : _e, t, i, n), !1;
                },
                getUrl: function (e) {
                  return e && e.did ? Ce : _e;
                },
                checkLocalModifications: !0,
                screenSizes: { small: !0 },
              },
              4: {
                skyCmd: Be,
                click: function (e, t, i, n) {
                  return j("Download", t, i, n), !1;
                },
                checkLocalModifications: !0,
                screenSizes: { small: !0 },
              },
            },
            ReportAbuse: {
              name: "ra",
              1: {
                skyCmd: "RA",
                click: function (e, t, i, n) {
                  return x("reportAbuse", t), !1;
                },
              },
            },
            OwnerRequestReview: {
              apiIdPart: "OwnerRequestReview",
              name: "orr",
              1: {
                skyCmd: Xe,
                click: function (e, t, i, n, r) {
                  var a = [];
                  return (
                    a.push(t),
                    Pe.operationManager.execute("OwnerRequestReview", {
                      items: a,
                    }),
                    !1
                  );
                },
              },
            },
            EditTextFile: {
              name: "etf",
              1: {
                skyCmd: "TEXEF",
                click: function (e, t, i, n, r) {
                  return t.invalidate(), !1;
                },
                requiresRedemption: !0,
              },
            },
            Delete: {
              name: "de",
              1: {
                skyCmd: Fe,
                click: function (e, t, i, n, r) {
                  return a(t, r), !1;
                },
                check: U,
              },
              2: {
                skyCmd: Fe,
                click: function (e, t, i, n, r) {
                  return a(t, r), !1;
                },
                requiresRedemption: !0,
                check: U,
              },
              3: {
                skyCmd: Fe,
                click: function (e, t, i, n, r) {
                  return a(t, r), !1;
                },
                check: U,
              },
              4: {
                skyCmd: Fe,
                click: function (e, t, i, n, r) {
                  return a(t, r), !1;
                },
                requiresRedemption: !0,
                check: U,
              },
              5: {
                skyCmd: Fe,
                click: function (e, t, i, n, r) {
                  return a(t, r), !1;
                },
                requiresRedemption: !0,
                check: U,
              },
              6: {
                skyCmd: Fe,
                click: function (e, t, i, n, r) {
                  return a(t, r), !1;
                },
                requiresRedemption: !0,
                check: U,
              },
            },
            SaveSort: {
              name: "sds",
              1: {
                skyCmd: "SS",
                click: function () {
                  return !1;
                },
              },
            },
            Arrange: {
              name: "ar",
              1: {
                skyCmd: "R",
                url: "#{cidQueryString}{idQueryString}{deviceIdQueryString}{scenario}&v=arrange",
                check: function () {
                  return !ae;
                },
              },
            },
            ViewOrginal: {
              name: "vo",
              1: {
                skyCmd: "VO",
                url: "{item.urls.open}",
                target: se,
                check: function () {
                  return Pe.currentViewType == oe || Pe.isSuper;
                },
              },
            },
            ViewBrowser: {
              name: "vb",
              1: {
                skyCmd: "VB",
                click: $,
                getUrl: function (e) {
                  return "search" === Pe.viewParams.qt &&
                    X.SkyDriveItemHelper.hasOneNoteWebUrl(e)
                    ? e.urls.oneNoteWeb
                    : ue;
                },
                target: se,
              },
            },
            EditBrowser: {
              name: "eb",
              1: {
                skyCmd: "EB",
                click: $,
                getUrl: function (e) {
                  return "search" === Pe.viewParams.qt &&
                    X.SkyDriveItemHelper.hasOneNoteWebUrl(e)
                    ? e.urls.oneNoteWeb
                    : ce;
                },
                target: se,
                requiresRedemption: !0,
              },
            },
            EditBrowserNew: { name: "eb", 1: { skyCmd: "EB", url: he } },
            EditFormNew: { name: "eb", 1: { skyCmd: "FE", url: me } },
            FileAbuseReport: {
              name: "fab",
              1: {
                skyCmd: Me,
                click: function (e, t, i, n) {
                  return alert("Make API call to /2/ReportAbuse"), !1;
                },
              },
            },
            OpenInExcel: {
              name: "oo",
              1: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return c(t, i, n, it), !1;
                },
                requiresRedemption: !0,
              },
            },
            OpenInOneNote: {
              name: "oo",
              2: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return c(t, i, n, nt), !1;
                },
                requiresRedemption: !0,
              },
            },
            OpenInPowerPoint: {
              name: "oo",
              3: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return c(t, i, n, rt), !1;
                },
                requiresRedemption: !0,
              },
            },
            OpenInWord: {
              name: "oo",
              4: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return c(t, i, n, at), !1;
                },
                requiresRedemption: !0,
              },
            },
            OpenInVisio: {
              name: "oo",
              5: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return c(t, i, n, ot), !1;
                },
                requiresRedemption: !0,
              },
            },
            OpenInProject: {
              name: "oo",
              6: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return c(t, i, n, st), !1;
                },
                requiresRedemption: !0,
              },
            },
            OpenInPublisher: {
              name: "oo",
              7: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return c(t, i, n, lt), !1;
                },
                requiresRedemption: !0,
              },
            },
            OpenInOffice: {
              name: "oo",
              1: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return Pe.actionManager
                    .getAction("OpenInExcel", t, i, n)
                    .click();
                },
                requiresRedemption: !0,
              },
              2: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return Pe.actionManager
                    .getAction("OpenInOneNote", t, i, n)
                    .click();
                },
                requiresRedemption: !0,
              },
              3: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return Pe.actionManager
                    .getAction("OpenInPowerPoint", t, i, n)
                    .click();
                },
                requiresRedemption: !0,
              },
              4: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return Pe.actionManager
                    .getAction("OpenInWord", t, i, n)
                    .click();
                },
                requiresRedemption: !0,
              },
              5: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return Pe.actionManager
                    .getAction("OpenInVisio", t, i, n)
                    .click();
                },
                requiresRedemption: !0,
              },
              6: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return Pe.actionManager
                    .getAction("OpenInProject", t, i, n)
                    .click();
                },
                requiresRedemption: !0,
              },
              7: {
                skyCmd: Le,
                click: function (e, t, i, n) {
                  return Pe.actionManager
                    .getAction("OpenInPublisher", t, i, n)
                    .click();
                },
                requiresRedemption: !0,
              },
            },
            AddCoverPhoto: {
              name: "acp",
              1: {
                skyCmd: "ACP",
                check: H,
                click: function (e, t, i, n, r) {
                  return (
                    require(["operationmanager"], function () {
                      X.OperationManager.Current.execute("AddFavorites", {
                        items: [t],
                        targetItem: t.getParent(!0),
                      });
                    }),
                    !1
                  );
                },
              },
            },
            RemoveCoverPhoto: {
              name: "rcp",
              1: {
                skyCmd: "RCP",
                check: H,
                click: function (e, t, i, n, r) {
                  return (
                    require(["operationmanager"], function () {
                      X.OperationManager.Current.execute("RemoveFavorites", {
                        items: [t],
                        targetItem: t.getParent(!0),
                      });
                    }),
                    !1
                  );
                },
              },
            },
            OrderPrints: {
              name: "op",
              1: {
                skyCmd: "OP",
                check: function (e, t, i, n) {
                  return !$B.IE || $B.V > 8;
                },
                click: function (e, t, i, n, r) {
                  return l(t, r), !1;
                },
              },
            },
            AddTag: {
              name: "at",
              1: {
                skyCmd: "AT",
                click: function (e, t) {
                  return jQuery(Pe).trigger("enableTagging", [t.key]), !1;
                },
                requiresRedemption: !0,
              },
            },
            Rename: {
              name: "rn",
              1: {
                skyCmd: "RN",
                click: function (e, t, i, n, r) {
                  return (
                    (r = r || document.activeElement),
                    t.textEditorMimeType
                      ? t.localModifications
                        ? raiseEvent(t, "checkLocalModifications", [
                            null,
                            t,
                            r,
                            function (e) {
                              null == e &&
                                Shared.UI.Dialog.create(
                                  [
                                    "renametextfiledialog",
                                    "renametextfiledialog.html",
                                  ],
                                  function () {
                                    var e =
                                      new SkyDrive.UI.RenameTextFileDialog();
                                    return (
                                      e.setDataContext({ anchor: r, item: t }),
                                      e
                                    );
                                  }
                                );
                            },
                          ])
                        : Shared.UI.Dialog.create(
                            [
                              "renametextfiledialog",
                              "renametextfiledialog.html",
                            ],
                            function () {
                              var e = new SkyDrive.UI.RenameTextFileDialog();
                              return (
                                e.setDataContext({ anchor: r, item: t }), e
                              );
                            }
                          )
                      : t.isAlbum
                      ? require(["renamedialog"], function () {
                          SkyDrive.UI.RenameDialog.renameItem(t, r);
                        })
                      : jQuery(Pe).trigger("Rename", { key: t.key }),
                    !1
                  );
                },
                check: V,
                requiresRedemption: !0,
              },
            },
            ModifyCaption: {
              name: "mc",
              1: {
                skyCmd: "MC",
                click: function () {
                  return !1;
                },
              },
            },
            ChangeFolderType: {
              name: "cft",
              1: {
                skyCmd: "CFT",
                check: function (e, t) {
                  return !t.isAlbum;
                },
                click: function (e, t, i, n, r) {
                  return d(t, r), !1;
                },
              },
            },
            Copy: {
              name: "cp",
              1: {
                skyCmd: Ue,
                click: E(null, v),
                check: F,
                checkLocalModifications: !0,
              },
              3: {
                skyCmd: Ue,
                click: E(null, v),
                check: F,
                checkLocalModifications: !0,
                requiresRedemption: !0,
              },
              "-2": {
                skyCmd: Ue,
                click: function () {
                  return (
                    require(["modaldialog", "doregister"], function () {
                      $Do.wE("Bucket3.css", 0, function () {
                        var t = {
                          buttons: { action: Y("Close") },
                          title: Y("CopyFileSizeLimitError.Header"),
                          content:
                            Y("CopyFileSizeLimitError.BodyLine1")
                              .format(FilesConfig.maxCopyFileSize)
                              .encodeHtml() +
                            "<br/><br/>" +
                            Y("CopyFileSizeLimitError.BodyLine2").encodeHtml(),
                        };
                        _dlg = e().createModalDialog(t);
                        var i = jQuery(_dlg);
                        i.bind({
                          "aftershow._dlg": function (e, t) {
                            jQuery(".InnerContainer").width(400);
                          },
                          "afterdismiss._dlg": function (e, t) {
                            i && i.unbind("._dlg"), (i = null), (_dlg = null);
                          },
                        }),
                          _dlg.show();
                      });
                    }),
                    !1
                  );
                },
                check: F,
                checkLocalModifications: !0,
              },
            },
            Move: {
              name: "mv",
              1: { skyCmd: Ne, click: E(null, p), check: L },
              3: { skyCmd: Ne, click: E(null, p), check: L },
              4: {
                skyCmd: Ne,
                click: E(null, p),
                check: L,
                requiresRedemption: !0,
              },
            },
            CopyToSkyDrive: {
              name: "cts",
              1: { skyCmd: Ve, click: E(null, y) },
            },
            DefaultClick: {
              name: "defc",
              1: {
                getSkyCmd: t,
                url: "#" + le,
                name: "ViewItem",
                click: function (e, t, i, n, r) {
                  return t.textEditorMimeType
                    ? ($BSI.navigateTo(
                        ne.itemStringFormat(
                          "https://" + FilesConfig.domain + "?" + le,
                          t,
                          i,
                          n
                        ),
                        se
                      ),
                      !1)
                    : void 0;
                },
                check: q,
              },
              2: {
                skyCmd: Qe,
                click: $,
                getUrl: function (e) {
                  return "search" === Pe.viewParams.qt &&
                    X.SkyDriveItemHelper.hasOneNoteWebUrl(e)
                    ? e.urls.oneNoteWeb
                    : ce;
                },
                target: se,
                name: "EditBrowser",
                requiresRedemption: !0,
                check: q,
              },
              3: {
                skyCmd: Qe,
                click: $,
                getUrl: function (e) {
                  return "search" === Pe.viewParams.qt &&
                    X.SkyDriveItemHelper.hasOneNoteWebUrl(e)
                    ? e.urls.oneNoteWeb
                    : ue;
                },
                target: se,
                name: "ViewBrowser",
                check: q,
              },
              4: {
                skyCmd: Qe,
                click: function (t, i, n, a, o) {
                  if (i.isProcessingVideo && $B.Full) {
                    var s = e().createModalDialog({
                        title: ee("Video.BeingProcessedHeader"),
                        buttons: {
                          action: Y("DownloadCommand"),
                          close: Y("Cancel"),
                        },
                        content: ee("Video.BeingProcessedMessage"),
                      }),
                      l = jQuery(s);
                    l.bind({
                      "afterdismiss._dlg": function (e, t) {
                        l && l.unbind("._dlg"), (l = null), (s = null);
                      },
                      "buttonclick._dlg": function (e, t, o) {
                        return "action" == o && r(Ce, i, n, a), !0;
                      },
                    }),
                      s.show();
                  } else r(Ce, i, n, a);
                  return !1;
                },
                name: "Download",
                check: q,
              },
              5: {
                getSkyCmd: t,
                click: function (e, t, i, n) {
                  return $BSI.navigateTo(t.urls.favorite, se), !1;
                },
              },
              6: {
                getSkyCmd: t,
                click: function (e, t, i, n) {
                  return c(t, i, n, nt), !1;
                },
                requiresRedemption: !0,
                check: q,
              },
              7: {
                skyCmd: Qe,
                click: function (e, t, i, n) {
                  return r(be, t, i, n), !1;
                },
                check: q,
              },
              10: {
                skyCmd: Qe,
                click: function (e, t, i, n) {
                  return h(t), !1;
                },
                name: "OpenInOffice",
                altNames: [
                  "OpenInExcel",
                  "OpenInOneNote",
                  "OpenInPowerPoint",
                  "OpenInWord",
                  "OpenInVisio",
                  "OpenInProject",
                  "OpenInPublisher",
                ],
                check: q,
              },
              11: {
                skyCmd: Qe,
                click: function (e, t, i, n) {
                  return j("DefaultClick", t, i, n), !1;
                },
                name: "Download",
                check: q,
              },
              12: {
                skyCmd: Qe,
                click: function (e, t, i, n) {},
                name: "Select",
                check: q,
              },
              13: {
                getSkyCmd: t,
                url: "#{cidQueryString}{idQueryString}&qt=sharedby",
                name: "ViewSharerItem",
                check: q,
              },
              15: { getSkyCmd: t, click: g, name: "Play" },
              16: {
                getSkyCmd: t,
                url: "#" + le,
                name: "ViewRecycledItem",
                check: O,
              },
              50: {
                skyCmd: Qe,
                click: function (e, t, i, n) {
                  return I(t), !1;
                },
                name: "RestrictedAccess",
                check: q,
              },
            },
            CreateWordBlank: {
              name: "cdoc",
              1: {
                skyCmd: qe,
                click: function (e, t, i, n, r) {
                  return m(ut, t, i, n, r), !1;
                },
                requiresRedemption: !0,
                check: M,
              },
              2: {
                skyCmd: qe,
                click: function (e, t, i, n) {
                  return re.refreshItemWhenVisible(t), !0;
                },
                url: "#" + le + "{wacQueryType}&action=CreateWord",
                target: se,
                requiresRedemption: !0,
                check: M,
              },
            },
            CreateWord: {
              name: "cdoc",
              1: {
                skyCmd: qe,
                click: function (e, t, i, n, r) {
                  return m(ut, t, i, n, r, !0), !1;
                },
                requiresRedemption: !0,
                check: M,
              },
              2: {
                skyCmd: qe,
                click: function (e, t, i, n, r) {
                  return m(ut, t, i, n, r, !0), !1;
                },
                requiresRedemption: !0,
                check: M,
              },
            },
            CreateExcelBlank: {
              name: "cxls",
              1: {
                skyCmd: Oe,
                click: function (e, t, i, n, r) {
                  return m(ct, t, i, n, r), !1;
                },
                requiresRedemption: !0,
                check: M,
              },
              2: {
                skyCmd: Oe,
                click: function (e, t, i, n) {
                  return re.refreshItemWhenVisible(t), !0;
                },
                url: "#" + le + "{wacQueryType}&action=CreateExcel",
                target: se,
                requiresRedemption: !0,
                check: M,
              },
            },
            CreateExcel: {
              name: "cxls",
              1: {
                skyCmd: Oe,
                click: function (e, t, i, n, r) {
                  return m(ct, t, i, n, r, !0), !1;
                },
                requiresRedemption: !0,
                check: M,
              },
              2: {
                skyCmd: Oe,
                click: function (e, t, i, n, r) {
                  return m(ct, t, i, n, r, !0), !1;
                },
                requiresRedemption: !0,
                check: M,
              },
            },
            CreateExcelFormBlank: {
              name: "cxlsf",
              1: {
                skyCmd: He,
                click: function (e, t, i, n, r) {
                  return m(ht, t, i, n, r, !1), !1;
                },
                requiresRedemption: !0,
                check: M,
              },
            },
            CreateExcelForm: {
              name: "cxlsf",
              1: {
                skyCmd: He,
                click: function (e, t, i, n, r) {
                  return m(ht, t, i, n, r, !0), !1;
                },
                requiresRedemption: !0,
                check: M,
              },
            },
            CreatePowerPointBlank: {
              name: "cppt",
              1: {
                skyCmd: $e,
                click: function (e, t, i, n, r) {
                  return m(mt, t, i, n, r), !1;
                },
                requiresRedemption: !0,
                check: M,
              },
              2: {
                skyCmd: $e,
                click: function (e, t, i, n) {
                  return re.refreshItemWhenVisible(t), !0;
                },
                url: "#" + le + "{wacQueryType}&action=CreatePowerPoint",
                target: se,
                requiresRedemption: !0,
                check: M,
              },
            },
            CreatePowerPoint: {
              name: "cppt",
              1: {
                skyCmd: $e,
                click: function (e, t, i, n, r) {
                  return m(mt, t, i, n, r, !0), !1;
                },
                requiresRedemption: !0,
                check: M,
              },
              2: {
                skyCmd: $e,
                click: function (e, t, i, n, r) {
                  return m(mt, t, i, n, r, !0), !1;
                },
                requiresRedemption: !0,
                check: M,
              },
            },
            CreateOneNoteBlank: {
              name: "con",
              1: {
                skyCmd: je,
                click: function (e, t, i, n) {
                  return re.refreshItemWhenVisible(t), !0;
                },
                url: "#" + le + "{wacQueryType}&action=CreateOneNote",
                target: se,
                requiresRedemption: !0,
                check: M,
              },
            },
            CreateOneNote: {
              name: "con",
              1: {
                skyCmd: je,
                click: function (e, t, i, n, r) {
                  return m(gt, t, i, n, r), !1;
                },
                requiresRedemption: !0,
                check: M,
              },
            },
            CreateFolder: {
              name: "cf",
              1: { skyCmd: ze, requiresRedemption: !0, click: P, check: M },
            },
            CreateAlbum: {
              name: "cf",
              1: { skyCmd: ze, requiresRedemption: !0, click: P },
              2: { skyCmd: ze, requiresRedemption: !0, click: P },
            },
            CreateMountPoint: {
              name: "cmp",
              1: {
                skyCmd: Ze,
                string: te("GF.CreateMountPointCommand"),
                click: function (e, t, i, n, r) {
                  return D(t), !1;
                },
              },
            },
            RemoveMountPoint: {
              name: "rmp",
              1: {
                skyCmd: Ye,
                string: te("GF.RemoveMountPointCommand"),
                click: function (e, t, i, n, r) {
                  return T(t, r), !1;
                },
              },
            },
            AddFiles: {
              name: "up",
              1: { skyCmd: We, url: de, requiresRedemption: !0, check: R },
              2: { skyCmd: We, url: de, requiresRedemption: !0, check: R },
            },
            AddFolder: {
              name: "up",
              1: { skyCmd: tt, url: de, requiresRedemption: !0, check: R },
              2: { skyCmd: tt, url: de, requiresRedemption: !0, check: R },
            },
            AddPhotos: {
              name: "up",
              1: { skyCmd: Ge, url: de, requiresRedemption: !0, check: R },
              2: { skyCmd: Ge, url: de, requiresRedemption: !0, check: R },
            },
            Upload: {
              name: "up",
              1: { skyCmd: "UP", url: de, requiresRedemption: !0, check: R },
            },
            CreateTextDocument: {
              name: "up",
              1: {
                skyCmd: "CTD",
                requiresRedemption: !0,
                click: function (e, t) {
                  re.refreshItemWhenVisible(t);
                },
                check: B,
                target: se,
                url:
                  "https://" +
                  FilesConfig.domain +
                  "?{cidQueryString}{idQueryString}{authKeyQueryString}&create=text",
              },
            },
            RemoveDevice: {
              name: "rd",
              1: {
                skyCmd: Ke,
                click: function (e, t) {
                  return (
                    Pe.deviceItemSet.waitForLoad(function () {
                      A(t);
                    }),
                    !1
                  );
                },
              },
            },
            AddComment: { name: "cm", 2: { skyCmd: "CM", url: "#" } },
            EmailPublishing: {
              name: "epb",
              1: {
                skyCmd: "EPB",
                url: "emailpublishing?cid={item.ownerCid}",
                check: N,
              },
            },
            GroupInvite: {
              name: "ginv",
              1: {
                skyCmd: "GIP",
                click: function (e, t, i, n, r) {
                  return (
                    require(["groupinvitedialog"], function () {
                      X.GroupInviteHelper.showWaitingDialog(t);
                    }),
                    !1
                  );
                },
              },
            },
            GroupMembership: {
              name: "gmv",
              1: {
                skyCmd: "GMV",
                url: "/cid-{cid:encodeURIComponent}/GroupMembership/",
              },
            },
            GroupOptions: {
              name: "gop",
              1: {
                skyCmd: "GOP",
                url: "/cid-{cid:encodeURIComponent}/GroupOptions/",
              },
            },
            GroupDiscussions: {
              name: "gdis",
              1: {
                skyCmd: "GDIS",
                url: "{profileDomain}cid-{cid:encodeURIComponent}/disucssions.zip",
              },
            },
            ViewGroupCalendar: {
              name: "gcalv",
              1: {
                skyCmd: "GCALV",
                url: FilesConfig.groupCalendarUrlFormat
                  ? FilesConfig.groupCalendarUrlFormat.format(
                      "{cid:encodeURIComponent}"
                    )
                  : "#",
              },
            },
            GroupSendMail: {
              name: "gsem",
              1: {
                skyCmd: "GSEM",
                url: FilesConfig.groupMailUrl
                  ? FilesConfig.groupMailUrl.format("{groupEmail}")
                  : "#",
              },
            },
            GroupViewMail: {
              name: "geh",
              1: {
                skyCmd: "GEH",
                url: FilesConfig.groupMailSearchUrl
                  ? FilesConfig.groupMailSearchUrl.format("{groupEmail}")
                  : "#",
              },
            },
            Restore: {
              name: "rst",
              1: {
                skyCmd: "RST",
                click: function (e, t, i, n, r) {
                  return S(e, t, r), !1;
                },
                check: function (e, t, i, n) {
                  if (re.isRecycleBinQuery(t)) return !0;
                  var r = t.getParent();
                  return t.isRecycled && !r.isRecycled;
                },
              },
            },
            EmptyRecycleBin: {
              name: "erb",
              1: {
                skyCmd: "ERB",
                click: function (e, t, i, n) {
                  return _(e, t), !1;
                },
              },
            },
            RestoreAllItems: {
              name: "rai",
              1: {
                skyCmd: "RAI",
                click: function (e, t, i, n, r) {
                  return k(e, t, r), !1;
                },
              },
            },
            RotateImage: {
              name: "rot",
              1: {
                skyCmd: "ROT",
                click: function (e, t, i, n) {
                  return b(e, t), !1;
                },
              },
            },
          },
          pt = {
            getAction: function (e, t, i, n, r) {
              var a = null,
                o = ft[e],
                s = o.name,
                l = wLive.Core.SkyDriveItem.getJsonApiCommandActionIndex(t, s);
              if (l) {
                var d = o[l];
                if (d && (!d.check || d.check(e, t, i, n))) {
                  (a = jQuery.extend({}, d)),
                    (a.name = a.name || e),
                    a.url && (a.url = ne.itemStringFormat(a.url, t, i, n)),
                    d.getUrl &&
                      (a.url = ne.itemStringFormat(d.getUrl(t), t, i, n)),
                    d.getSkyCmd && (a.skyCmd = d.getSkyCmd(t));
                  var u = a.skyCmd,
                    c = u ? "SkyDriveWeb_Internal_Action_" + u : "",
                    h = a.click;
                  a.click = function (o) {
                    return Qos.instrument(Qos.createContext(c), function () {
                      function s() {
                        var o = (h && h(e, t, i, n, r)) || !h;
                        o && a.url && $BSI.navigateTo(a.url);
                      }
                      var l,
                        d = !0;
                      if (
                        (arguments &&
                          5 === arguments.length &&
                          (l = arguments[4]),
                        (r = r || (o ? o.target : l)),
                        !a.requiresRedemption ||
                          Pe.tokenHasBeenRedeemed ||
                          (!t.tokenNeedsRedeeming && u != et))
                      )
                        a.checkLocalModifications && t.localModifications
                          ? (raiseEvent(t, "checkLocalModifications", [o, t]),
                            (d = !1))
                          : h && (d = h(e, t, i, n, r));
                      else {
                        if ($B.Mobile) {
                          var c = ne.itemStringFormat(
                              ke +
                                "/?{cidQueryString}{idQueryString}{authKeyQueryString}&action=" +
                                a.name,
                              t,
                              i,
                              n
                            ),
                            m =
                              ne.itemStringFormat(ye, t, i, n) +
                              "&ru=" +
                              c.encodeUrl();
                          t.expire(!0), $BSI.navigateTo(m);
                        } else
                          X.PopoverManager.showPopover("TicketRedeemer", {
                            authkey: FilesConfig.authKey,
                            item: t,
                            action: a,
                            callback: s,
                          });
                        d = !1;
                      }
                      return d;
                    }).apply(this, arguments);
                  };
                }
              }
              return a;
            },
          };
        (X.SkyDriveItemHelper._jsonApiActions = ft),
          (X.SkyDriveItemHelper.registerJsonApiActions = K);
      })();
    }
  ),
  define("links", ["jsonapi"], function () {
    !(function () {
      function e(e, t) {
        t = t || h;
        for (var i in t) e.registerAction(i, m);
      }
      var t,
        i = wLive.Core,
        n = i.SkyDriveItemHelper,
        r = i.AleHelpers.getPCString,
        a = i.AleHelpers.getString,
        o = i.JSONConstants.SortDirection,
        s = i.JSONConstants.SortField,
        l = i.ViewContext.getInstance(),
        d =
          "#{cidQueryString}{idQueryString}{scenario}{deviceIdQueryString}{selfViewQueryType}{searchParams}{authKeyQueryString}",
        u = d + "{viewQueryString}",
        c = u + "{filterTypeParams}{tagFilterParams}",
        h = {
          Abdicate: {
            name: "ab",
            skyCmd: "AB",
            check: function (e, t, i, r) {
              var a = l.viewParams;
              return (
                t &&
                !n.isViewerOwner(t) &&
                a &&
                ("sharedby" === a.qt || "shared" === a.qt) &&
                !t.isSharerFolder
              );
            },
            click: function (e, t, n, r) {
              return (
                i.PopoverManager.showPopover("AbdicatePopover", { items: [t] }),
                !1
              );
            },
          },
          SkyDriveRoot: {
            skyCmd: "SDR",
            url:
              $Config && $Config.hcid
                ? "#cid=" +
                  $Config.hcid.encodeUrl() +
                  (l.viewParams.v ? "&v=" + l.viewParams.v : "")
                : "/",
            click: function (e, t, i, n) {
              return (
                $Config && $Config.hcid
                  ? $BSI.navigateTo(
                      "#cid=" +
                        $Config.hcid.encodeUrl() +
                        (l.viewParams.v ? "&v=" + l.viewParams.v : "")
                    )
                  : $BSI.navigateTo("/", "_top"),
                !1
              );
            },
          },
          UploadFiles: {
            getTemplate: function (e, t, i, n) {
              var r = l.actionManager;
              return (
                r.getAction("AddFiles", t) && r.getAction("DefaultClick", t)
              );
            },
          },
          UploadFolders: {
            getTemplate: function (e, t, i, n) {
              var r = l.actionManager;
              return (
                r.getAction("AddFolder", t) && r.getAction("DefaultClick", t)
              );
            },
          },
          DevicesView: { skyCmd: "DEVV", url: "#v=DevicesView" },
          OpenInExcelWebApp: {
            getTemplate: function (e, t, i, r) {
              var a = l.actionManager;
              return (
                !n.isRecycleBinQuery(t) &&
                SkyDrive.FileTypeHelper.getFileType(t) ===
                  SkyDrive.Constants.FileTypes.excel &&
                (a.getAction("EditBrowser", t) || a.getAction("ViewBrowser", t))
              );
            },
          },
          OpenInOneNoteWebApp: {
            getTemplate: function (e, t, i, r) {
              var a = l.actionManager;
              return (
                !n.isRecycleBinQuery(t) &&
                SkyDrive.FileTypeHelper.getFileType(t) ===
                  SkyDrive.Constants.FileTypes.oneNote &&
                (a.getAction("EditBrowser", t) || a.getAction("ViewBrowser", t))
              );
            },
          },
          OpenInPowerPointWebApp: {
            getTemplate: function (e, t, i, r) {
              var a = l.actionManager;
              return (
                !n.isRecycleBinQuery(t) &&
                SkyDrive.FileTypeHelper.getFileType(t) ===
                  SkyDrive.Constants.FileTypes.powerPoint &&
                a.getAction("ViewBrowser", t)
              );
            },
          },
          OpenInWordWebApp: {
            getTemplate: function (e, t, i, r) {
              var a = l.actionManager,
                o = SkyDrive.FileTypeHelper.getFileType(t),
                s = !$B.IE || $B.V > 7;
              return (
                !n.isRecycleBinQuery(t) &&
                (o === SkyDrive.Constants.FileTypes.word ||
                  (o === SkyDrive.Constants.FileTypes.pdf && s)) &&
                a.getAction("ViewBrowser", t)
              );
            },
          },
          SlideShow: {
            skyCmd: "SLSH",
            check: function (e, t, i, n) {
              var r = l.itemProvider.peekParent(t),
                a = r ? l.itemProvider.getChildren(r) : null;
              return a && a.getCount() > 1;
            },
            click: function (e, t, i, n) {
              return jQuery(l).trigger("slideshow"), !1;
            },
          },
          SlideShowEnd: {
            skyCmd: "ESLSH",
            click: function (e, t, i, n) {
              return jQuery(l).trigger("slideshowend"), !1;
            },
          },
          ViewItem: {
            skyCmd: "VI",
            url: c,
            check: function (e, t) {
              return !t || !t.isPlaceholder;
            },
          },
          ViewItemNoFilter: { skyCmd: "VINF", url: u },
          ViewItemWithoutView: { skyCmd: "VIWV", url: d },
          ViewInFolder: {
            skyCmd: "VIF",
            check: function (e, t, i, n) {
              return t.isQt("mru");
            },
            url: c,
          },
          ViewItemBasic: {
            skyCmd: "VIB",
            url: "#{cidQueryString}{idQueryString}{viewQueryString}",
          },
          ViewRecycleBin: {
            skyCmd: "VRB",
            url: "#{cidQueryString}&qt=recyclebin",
          },
          ViewItemInInteractiveMode: {
            skyCmd: "VIM",
            url: c + "&mode=interactive",
          },
          OpenFileLocation: {
            skyCmd: "OFL",
            url: "#{cidQueryString}{parentIdQueryString}{deviceIdQueryString}{authKeyQueryString}",
          },
          ShowInAllPhotos: {
            skyCmd: "SAP",
            check: function (e, t, i, r) {
              return (
                t.folder &&
                !t.did &&
                !t.isBundle &&
                !t.isRecycled &&
                n.isViewerOwner(t) &&
                !n.isAllMyPhotosQuery(t)
              );
            },
            url: "#{cidQueryString}{idQueryString}&qt=allmyphotos",
          },
          CreatorProfileUrl: {
            skyCmd: "CPU",
            url: "{profileDomain}cid-{item.creatorCid:encodeURIComponent}",
          },
          CreateGroup: { skyCmd: "GCR", url: "{groupsDomain}home/create/" },
          TwoFactorAuth: { skyCmd: "TFA", target: "_top", url: "#" },
          OfficeLearnMore: {
            skyCmd: "LM",
            url: "http://g.live.com/8SESkydrive/DocsLearnMore",
          },
          Sharing: {
            skyCmd: "SH",
            check: function (e, t, i, r) {
              return (
                t &&
                !t.did &&
                !t.isPlaceholder &&
                !n.isRootItem(t) &&
                !n.isRecycleBinQuery(t) &&
                !t.isRecycled &&
                !n.isSharerFolder(t) &&
                !n.isAllMyPhotosQuery(t) &&
                n.canViewSharingInfo(t)
              );
            },
            click: function (e, t, n, r) {
              return (
                require(["sharedialog"], function () {
                  $Do.wE("Bucket3.css", 0, function () {
                    i.SharingHelper.showSharingDialog(t);
                  });
                }),
                !1
              );
            },
          },
          Discuss: {
            skyCmd: "DSC",
            check: function (e, t, i, r) {
              return (
                t &&
                !t.did &&
                !t.isPlaceholder &&
                !t.isRecycled &&
                !n.isRootItem(t) &&
                !n.isRecycleBinQuery(t) &&
                !n.isSharerFolder(t) &&
                !n.isAllMyPhotosQuery(t) &&
                n.canViewSharingInfo(t) &&
                FilesConfig.enableDiscussDialog
              );
            },
            click: function (e, t, n, r) {
              return (
                require([
                  "discussnotsharedpane.html",
                  "contactpickerv2",
                ], function () {
                  $Do.wE("Bucket3.css", 0, function () {
                    i.DiscussHelper.showDiscussDialog(t);
                  });
                }),
                !1
              );
            },
          },
          Properties: {
            skyCmd: "PR",
            check: function (e, t, i, r) {
              return (
                t &&
                !t.isPlaceholder &&
                !n.isSharerFolder(t) &&
                !n.isAllMyPhotosQuery(t) &&
                !t.isAlbumRoot &&
                !n.treatAsAlbum(t, l)
              );
            },
            click: function (e, i, n, r) {
              return (
                t !== i
                  ? ((t = i), jQuery(l).trigger("toggleProperties", !0))
                  : ((wLive.Controls.InfoPane.clickOrigin = "property"),
                    jQuery(l).trigger("toggleProperties"),
                    (wLive.Controls.InfoPane.clickOrigin = null)),
                !1
              );
            },
          },
          CreateTailoredAlbum: {
            skyCmd: "CALB",
            check: function (e, t, i, r) {
              return n.isAlbumRoot(t);
            },
            click: function (e, t, n, r, a) {
              return (
                require(["filepickerdialog"], function () {
                  var e = new SkyDrive.Core.AlbumsProvider();
                  i.FilePickerDialogHelper.createFolderFromItems(
                    t,
                    function (t, i) {
                      return e.createAlbum(i, t);
                    },
                    "allmyphotos"
                  ).then(function (i) {
                    var n = e.createPlaceholderAlbum(i.id, t.name),
                      r = l.actionManager,
                      a = r.getAction("ViewItem", n);
                    r.doAction(a);
                  });
                }),
                !1
              );
            },
            string: a("CreateAlbumCommand"),
          },
          ConvertToAlbum: {
            skyCmd: "CTA",
            check: function (e, t, i, r) {
              var a = t.folder;
              return (
                FilesConfig.enableAlbumsView &&
                n.isViewerOwner(t) &&
                a &&
                !n.isRootItem(t) &&
                !t.isSpecialFolder &&
                ((a.covers && a.covers.length >= 3) || 1 == a.category) &&
                (void 0 == a.photoCount || a.photoCount >= 3)
              );
            },
            click: function (e, t, i, r, o) {
              return (
                require(["notificationbar", "doregister"], function () {
                  window.$header && $header.showLoading();
                  var e = new SkyDrive.Core.AlbumsProvider(),
                    i = wLive.Controls.Notifications;
                  e.createAlbumFromFolder(t).then(
                    function (r) {
                      window.$header && $header.hideLoading();
                      var o = e.createPlaceholderAlbum(r.id, t.name),
                        s = n.getViewLink(o, l)[0].outerHTML,
                        d = a("Picker.MultiAddedToAlbum").format(
                          t.folder.photoCount,
                          s
                        ),
                        u = i.createTopBar({
                          content: d,
                          dismissalMode: "Timeout",
                        });
                      u.show();
                    },
                    function (e) {
                      var t = e && e.error && e.error.message;
                      window.$header && $header.hideLoading();
                      var n = i.createTopBar({
                        content: t || a("LoadGenericError"),
                        dismissalMode: "Timeout",
                      });
                      n.show();
                    }
                  );
                }),
                !1
              );
            },
            string: r("EmptyFolder.Action.CreateAlbum"),
          },
          Deselect: {
            skyCmd: "DSEL",
            check: function (e, t, i, n) {
              return 0 !== l.selectionManager.getSelection().selectionCount;
            },
            click: function (e, t, i, n) {
              var r = l.selectionManager;
              return r.deselectAll(r.getSelection().parent), !1;
            },
          },
          RemoveFromBundle: {
            skyCmd: "RFB",
            check: function (e, t, i, r) {
              var a = t.getParent && t.getParent(!0);
              return n.isViewerOwner(t) && a && a.isBundle;
            },
            click: function (e, t, n, a) {
              return (
                require(["permissionsprovider"], function () {
                  var e = new i.PermissionsProvider(l.callerCid),
                    n = i.PermissionsProvider.BundleAction.Remove,
                    a = t && t.getParent && t.getParent(!0);
                  e.updateBundle(
                    a,
                    [t],
                    n,
                    function () {
                      a.expire(), a.invalidate();
                      var e = a.getChildren();
                      e && e.remove(t), t.setVisibility(!0);
                    },
                    function () {
                      var e = r("RemoveFromBundleError");
                      l.errorManager.add({
                        $element: jQuery("<span>" + e.encodeHtml() + "</span>"),
                        priority: 1,
                        type: 0,
                        error: "removeFromBundle",
                      }),
                        t.setVisibility(!0);
                    }
                  ),
                    t.setVisibility(!1);
                }),
                !1
              );
            },
          },
          AddToBundle: {
            skyCmd: "ATB",
            check: function (e, t, i, r) {
              return t && t.isBundle && n.isViewerOwner(t);
            },
            click: function (e, t, n, r) {
              return (
                require([
                  "permissionsprovider",
                  "filepickerdialog",
                ], function () {
                  i.FilePickerDialogHelper.addItemsToFolder(
                    t,
                    function (e) {
                      function n(n, r) {
                        var a = new i.PermissionsProvider(l.callerCid),
                          o = i.PermissionsProvider.BundleAction.Add;
                        a.updateBundle(t, e, o, n, r);
                      }
                      return new Shared.Promise(n);
                    },
                    null,
                    !0
                  );
                }),
                !1
              );
            },
          },
          AddToAlbumPicker: {
            skyCmd: "ATAP",
            check: function (e, t, i, r) {
              return (
                FilesConfig.enableAlbumsView &&
                t &&
                n.treatAsAlbum(t, l) &&
                n.isOwnerOrCoOwner(t)
              );
            },
            click: function (e, t, n, r, a) {
              return (
                require(["filepickerdialog"], function () {
                  var e = new SkyDrive.Core.AlbumsProvider();
                  i.FilePickerDialogHelper.addItemsToFolder(
                    t,
                    function (i) {
                      return t.isAlbum
                        ? e.addToAlbum(t.id, i)
                        : e.createAlbumFromFolder(t, i);
                    },
                    "allmyphotos"
                  ).then(function (i) {
                    if (!t.isAlbum) {
                      var n = e.createPlaceholderAlbum(i.id, t.name),
                        r = l.actionManager,
                        a = r.getAction("ViewItem", n);
                      r.doAction(a);
                    }
                  });
                }),
                !1
              );
            },
            string: r("AddToBundleCommand"),
          },
          AddToAlbum: {
            skyCmd: "ATA",
            check: function (e, t, i, r) {
              return (
                FilesConfig.enableAlbumsView &&
                t &&
                (t.photo || t.video) &&
                n.isOwnerOrCoOwner(t) &&
                !n.isRecycleBinQuery(t)
              );
            },
            click: function (e, t, i, n, r) {
              return (
                require(["albumpicker", "albumpicker.html"], function () {
                  SkyDrive.UI.AlbumPicker.addItemsToAlbum([t], r);
                }),
                !1
              );
            },
            string: a("AddToAlbumCommand"),
          },
          RemoveFromAlbum: {
            skyCmd: "RFA",
            check: function (e, t, i, r) {
              var a = t.getParent && t.getParent(!0);
              return (
                FilesConfig.enableAlbumsView &&
                n.isViewerOwner(t) &&
                n.treatAsAlbum(a, l) &&
                !t.folder
              );
            },
            click: function (e, t, i, r, a) {
              var o = n._multiselectionActions;
              return o && o.RemoveFromAlbum && o.RemoveFromAlbum.click([t]), !1;
            },
          },
          Untag: {
            skyCmd: "UT",
            check: function (e, t, i, n) {
              return (
                l.viewParams.tagFilter && t.tags && FilesConfig.enableTagsView
              );
            },
            click: function (e, t, i, r, a) {
              var o = n._multiselectionActions;
              return o && o.Untag && o.Untag.click([t]), !1;
            },
          },
          ViewMyDocs: { skyCmd: "D", url: "#sc=documents" },
          ViewMyPhotos: { skyCmd: "P", url: "#sc=photos" },
          ViewRecentDocs: { skyCmd: "MRU", url: "#qt=mru" },
          ViewAlbums: { skyCmd: "ALB", url: "#id=albums&v=photos" },
          ViewTags: { skyCmd: "TAG", url: "#id=tags&v=photos{iamQueryString}" },
          ViewAllMyPhotos: {
            skyCmd: "AMP",
            click: function (e, t, n, r) {
              var a = FilesConfig.tailoredPhotos
                  ? "&v=photos{iamQueryString}"
                  : "",
                d = l.userSettings;
              if (d) {
                var u = d.allPhotosFolderId,
                  c = d.allPhotosSortAscending;
                if (u) {
                  var h = c ? o.Ascending : o.Descending,
                    m = i.SkyDriveItem.getItemKey(u, n, !1, "allmyphotos");
                  return (
                    l.itemProvider.setSort(m, s.DateTaken, h),
                    $BSI.navigateTo("#qt=allmyphotos&id=" + u + a),
                    !1
                  );
                }
              }
              var g = l.viewParams;
              if (g.highlights) {
                var f = l.itemProvider.getChildren(t || l.currentItem);
                if (f && f.getCount() > 0) {
                  var p = f.get(0);
                  return (
                    $BSI.navigateTo("#qt=allmyphotos&focusId=" + p.id + a), !1
                  );
                }
              }
              var v = l.actionManager.getAction("ViewAllMyPhotosRoot", t);
              return l.actionManager.doAction(v), !1;
            },
          },
          ViewAllMyPhotosRoot: {
            skyCmd: "AMPR",
            url:
              "#qt=allmyphotos" +
              (FilesConfig.tailoredPhotos ? "&v=photos" : ""),
          },
          ViewAllMyPhotosPicker: { skyCmd: "AMPP", url: "#qt=allmyphotos&v=2" },
          ViewAllMyPhotosRootTailored: {
            skyCmd: "AMPRT",
            url: "#qt=allmyphotos&v=photos",
          },
          ViewSharedDocs: { skyCmd: "SD", url: "#qt=shared" },
          ViewSharedBy: { skyCmd: "SD", url: "#qt=sharedby" },
          ViewGroup: { skyCmd: "VGP", url: "#{cidQueryString}" },
          ShareParent: {
            getTemplate: function (e, t, i, n) {
              var r = l.itemProvider.peekParent(t);
              return r && l.actionManager.getAction("Share", r);
            },
          },
          GroupView: { skyCmd: "G", url: "#v=GroupView" },
        },
        m = {
          getAction: function (e, t, i, n) {
            var r = h[e];
            if (
              (r && r.getTemplate && (r = r.getTemplate(e, t, i, n)),
              !r || (r.check && !r.check(e, t, i, n)))
            )
              return null;
            var a = mix({}, r);
            a.url &&
              (a.url = wLive.Core.ItemActionHelper.itemStringFormat(
                a.url,
                t,
                i,
                n
              ));
            var o = a.skyCmd,
              s = o ? "SkyDriveWeb_Internal_Action_" + o : "",
              l = a.click;
            return (
              (a.click = function () {
                return Qos.instrument(Qos.createContext(s, 1), function (r) {
                  return l ? l(e, t, i, n, r && r.target) : void 0;
                }).apply(this, arguments);
              }),
              a
            );
          },
        };
      (i.SkyDriveItemHelper._linkActions = h),
        (i.SkyDriveItemHelper.registerLinkActions = e);
    })();
  }),
  define("multiselectlinks", ["links"], function () {
    !(function () {
      function e() {
        return f || (f = wLive.Controls.Notifications), f;
      }
      function t(e, t, i) {
        var n = !0,
          r = t.indexes,
          a = m.itemProvider.getChildren(t.parent);
        for (var o in r) {
          var s = r[o],
            l = a.peek(s);
          if (l && (!m.actionManager.getAction(e, l) || (i && !i(l)))) {
            n = !1;
            break;
          }
        }
        return n;
      }
      function i(e, t, i) {
        var n = !1,
          r = t.indexes,
          a = m.itemProvider.getChildren(t.parent);
        for (var o in r) {
          var s = r[o],
            l = a.peek(s);
          if (l && m.actionManager.getAction(e, l) && (!i || i(l))) {
            n = !0;
            break;
          }
        }
        return n;
      }
      function n(e, t, n) {
        var r = !1;
        if (n) {
          n.indexes;
          r = e && e.check ? e.check(n) : i(t, n);
        }
        return r;
      }
      function r(e, t) {
        for (var i = 0; i < e.length; i++) e[i].setVisibility(t);
      }
      function a(e, t) {
        e instanceof Array
          ? t(e)
          : m.selectionManager.getSelectedItems(function (e) {
              t(e);
            });
      }
      function o(e, t) {
        t = t || p;
        for (var i in t) e.registerAction(i, v);
      }
      var s = wLive.Core,
        l = s.AleHelpers.getPCString,
        d = s.AleHelpers.getString,
        u = "SkyDrive",
        c = "SkyDriveWeb_Internal_Control_InlineDeletedContent_",
        h = s.SkyDriveItemHelper,
        m = s.ViewContext.getInstance(),
        g = s.ItemActionHelper,
        f = null,
        p = {
          Abdicate: {
            name: "ab",
            skyCmd: "AB",
            click: function (e) {
              return (
                m.selectionManager.getSelectedItems(function (e) {
                  return (
                    s.PopoverManager.showPopover("AbdicatePopover", {
                      items: e,
                    }),
                    !1
                  );
                }, l("SelectionResolve.Abdicate")),
                !1
              );
            },
          },
          Copy: {
            name: "cp",
            skyCmd: "C",
            click: function (e, t) {
              return (
                require(["movecopycommand"], function () {
                  var i = new s.MoveCopyCommand(m, "CopyAsync", t);
                  m.itemScopedDisposables.push(i), i.execute(null, e);
                }),
                !1
              );
            },
            check: function (e) {
              if (!FilesConfig.copyAsyncEnabled) return !1;
              var i = s.SkyDriveItemHelper,
                n = m.viewParams.qt;
              return (
                "sharedby" !== n &&
                "allmyphotos" !== n &&
                "mru" !== n &&
                t("Copy", e, function (e) {
                  return !i.isPartOfBundle(e);
                })
              );
            },
          },
          AddCoverPhoto: {
            name: "acp",
            skyCmd: "ACP",
            click: function (e, t) {
              return (
                m.selectionManager.getSelectedItems(function (e) {
                  require(["operationmanager"], function () {
                    var t = e[0];
                    s.OperationManager.Current.execute("AddFavorites", {
                      items: e,
                      targetItem: t.getParent(!0),
                    });
                  });
                }),
                !1
              );
            },
            check: function (e) {
              return t("AddCoverPhoto", e, function (e) {
                return !e.isRecycled;
              });
            },
          },
          RemoveCoverPhoto: {
            name: "rcp",
            skyCmd: "RCP",
            click: function (e, t) {
              return (
                m.selectionManager.getSelectedItems(function (e) {
                  require(["operationmanager"], function () {
                    var t = e[0];
                    s.OperationManager.Current.execute("RemoveFavorites", {
                      items: e,
                      targetItem: t.getParent(!0),
                    });
                  });
                }),
                !1
              );
            },
            check: function (e) {
              return !i("AddCoverPhoto", e) && i("RemoveCoverPhoto", e);
            },
          },
          RemoveFromMRU: {
            name: "rmru",
            skyCmd: "RMRU",
            click: function (e) {
              return (
                require(["removefrommrucommand"], function () {
                  var e = new s.RemoveFromMRUCommand(m);
                  m.selectionManager.getSelectedItems(function (t) {
                    return e.execute(t), !1;
                  }, l("SelectionResolve.MRURemove"));
                }),
                !1
              );
            },
          },
          Deselect: {
            name: "ds",
            skyCmd: "DSEL",
            click: function (e) {
              return m.selectionManager.deselectAll(e.parent), !1;
            },
            check: function (e) {
              return !0;
            },
          },
          Sharing: {
            skyCmd: "SH",
            click: function (e) {
              return (
                require(["sharedialog"], function () {
                  $Do.wE("Bucket3.css", 0, function () {
                    s.SharingHelper.showSharingDialog(null, e);
                  });
                }),
                !1
              );
            },
            check: function (e) {
              var i = s.SkyDriveItemHelper;
              return t("Share", e, function (e) {
                return (
                  FilesConfig.bundlesEnabled &&
                  !e.isBundle &&
                  !e.group &&
                  !e.did &&
                  !e.isRecycled &&
                  i.isViewerOwner(e) &&
                  2 != m.actionManager.getAction("Share", e)
                );
              });
            },
          },
          RemoveFromBundle: {
            skyCmd: "RFB",
            check: function (e) {
              var t = e.parent;
              return t && t.isBundle && h.isViewerOwner(t);
            },
            click: function (e) {
              return (
                require(["permissionsprovider"], function () {
                  var e = new s.PermissionsProvider(m.callerCid),
                    t = s.PermissionsProvider.BundleAction.Remove;
                  m.selectionManager.getSelectedItems(function (i) {
                    var n = i[0],
                      a = n && n.getParent && n.getParent(!0);
                    e.updateBundle(
                      a,
                      i,
                      t,
                      function () {
                        a.expire(), a.invalidate();
                      },
                      function () {
                        var e = l("RemoveFromBundleErrorPartial");
                        m.errorManager.add({
                          $element: jQuery(
                            "<span>" + e.encodeHtml() + "</span>"
                          ),
                          priority: 1,
                          type: 0,
                          error: "removeFromBundle",
                        }),
                          r(i, !0);
                      }
                    ),
                      r(i, !1);
                  });
                }),
                !1
              );
            },
          },
          Download: {
            skyCmd: "DO",
            mousedown: function () {
              return !1;
            },
            click: function (e) {
              return (
                m.selectionManager.getSelectedItems(function (e) {
                  if (e && e.length > 0) {
                    for (
                      var t = m.itemProvider.peekParent(e[0]),
                        i = 0,
                        n = {},
                        r = 0;
                      r < e.length;
                      r++
                    ) {
                      var a = e[r];
                      (i += parseInt(a.size)),
                        (n[a.extension] = (+n[a.extension] || 0) + 1);
                    }
                    if (
                      "UnAuth" == FilesConfig.hcid &&
                      i > FilesConfig.maxAnonDownloadSize
                    ) {
                      var o =
                        "https://" +
                        location.host +
                        "?{cidQueryString}{idQueryString}{authKeyQueryString}";
                      o = g.itemStringFormat(o, t);
                      var s =
                          FilesConfig.signInUrl +
                          "&ru=" +
                          o.encodeUrl() +
                          "&wreply=" +
                          o.encodeUrl(),
                        l = {
                          fileSize: i,
                          itemCount: e.length,
                          authed: "false",
                          url: o,
                          extensions: n,
                          ids: "",
                        };
                      Qos.logData(
                        "SkyDriveWeb_Internal_DownloadFile",
                        "SkyDrive",
                        null,
                        null,
                        null,
                        l,
                        null
                      ),
                        $BSI.navigateTo(s, "_top");
                    } else {
                      var d = {},
                        u = m.viewParams;
                      u.ticket
                        ? (d.ticket = u.ticket)
                        : u.authkey && (d.authkey = u.authkey),
                        m.operationManager.execute("DownloadAsZip", {
                          items: e,
                          options: d,
                        });
                    }
                  }
                }, l("SelectionResolve.Download")),
                !1
              );
            },
            check: function (e) {
              return t("Download", e, function (e) {
                return !e.did && !FilesConfig.http10 && !e.isRecycled;
              });
            },
          },
          AddToAlbum: {
            skyCmd: "ATA",
            check: function (e) {
              return t("AddToAlbum", e);
            },
            click: function (e, t) {
              return (
                m.selectionManager.getSelectedItems(function (e) {
                  require(["albumpicker", "albumpicker.html"], function () {
                    SkyDrive.UI.AlbumPicker.addItemsToAlbum(e, t);
                  });
                }),
                !1
              );
            },
            string: d("AddToAlbumCommand"),
          },
          RemoveFromAlbum: {
            skyCmd: "RFA",
            check: function (e) {
              return t("RemoveFromAlbum", e);
            },
            click: function (e, t) {
              function i(t) {
                require(["albumsprovider"], function () {
                  var i = new SkyDrive.Core.AlbumsProvider(),
                    n = e.parent || t[0].getParent(),
                    a = n.isAlbum
                      ? i.removeFromAlbum(n.id, t)
                      : i.createAlbumFromFolder(n, [], t);
                  a.then(
                    function (e) {
                      if (n.isAlbum) n.expire(), n.invalidate();
                      else {
                        var r = i.createPlaceholderAlbum(e.id, n.name),
                          a = m.actionManager,
                          o = a.getAction("ViewItem", r);
                        a.doAction(o);
                      }
                      for (
                        var s = m.itemProvider.getChildren(n), l = 0;
                        l < t.length;
                        l++
                      ) {
                        var d = t[l];
                        s && s.remove(d), d.setVisibility(!0);
                      }
                    },
                    function () {
                      var e = l("RemoveFromBundleError");
                      m.errorManager.add({
                        $element: jQuery("<span>" + e.encodeHtml() + "</span>"),
                        priority: 1,
                        type: 0,
                        error: "removeFromAlbum",
                      }),
                        r(t, !0);
                    }
                  ),
                    r(t, !1);
                });
              }
              return a(e, i), !1;
            },
          },
          Untag: {
            skyCmd: "UT",
            check: function (e) {
              return t("Untag", e);
            },
            click: function (e) {
              function t(t) {
                var i = s.DataModel.getInstance(),
                  n = m.viewParams.tagFilter;
                i.updateTagsForItems(
                  t,
                  null,
                  [{ tag: n }],
                  function () {
                    for (
                      var i = e.parent || t[0].getParent(),
                        n = m.itemProvider.getChildren(i),
                        r = 0;
                      r < t.length;
                      r++
                    ) {
                      var a = t[r];
                      n && n.remove(a), a.setVisibility(!0);
                    }
                  },
                  function () {
                    r(t, !0);
                  }
                ),
                  r(t, !1);
              }
              return a(e, t), !1;
            },
          },
          Move: {
            skyCmd: "M",
            click: function (e, t) {
              return (
                require(["movecopycommand"], function () {
                  var i = new s.MoveCopyCommand(m, "Move", t);
                  m.itemScopedDisposables.push(i), i.execute(null, e);
                }),
                !1
              );
            },
            check: function (e) {
              var i = s.SkyDriveItemHelper;
              return t("Move", e, function (e) {
                return !(
                  i.isMruQuery(e) ||
                  i.isSharedQuery(e) ||
                  i.isSearchQuery(e.getParent(!0)) ||
                  e.isRecycled
                );
              });
            },
          },
          Properties: {
            skyCmd: "PR",
            click: function (e, t) {
              return jQuery(m).trigger("toggleProperties"), !1;
            },
          },
          OrderPrints: {
            skyCmd: "OP",
            click: function (e, t) {
              return (
                e && e.selectionCount > FilesConfig.maxOrderPrintsCount
                  ? m.errorManager.add({
                      $element: jQuery(
                        "<div>" +
                          l("OrderPrints.SelectionOverLimitError").format(
                            FilesConfig.maxOrderPrintsCount,
                            e.selectionCount
                          ) +
                          "</div>"
                      ),
                      priority: 1,
                      type: 4,
                    })
                  : require(["orderprintsdialog"], function () {
                      m.selectionManager.getSelectedItems(function (e) {
                        s.OrderPrintsDialogHelper &&
                          s.OrderPrintsDialogHelper.showOrderPrintsDialog(e);
                      });
                    }),
                !1
              );
            },
            check: function (e) {
              return t("OrderPrints", e, function (e) {
                return e && e.photo && !e.video;
              });
            },
          },
          Delete: {
            skyCmd: "DEL",
            click: function (t, i) {
              function n() {
                if (a && r && r.length > 0) {
                  var e = new Object();
                  f || p
                    ? ((e.deletionType = 3),
                      f || Qos.log(c + "Purge_Confirm", u))
                    : (e.deletionType = 2),
                    m.operationManager.execute("Delete", {
                      items: r,
                      targetItem: r[0].getParent(),
                      options: e,
                    });
                }
              }
              var r,
                a,
                o = s.SkyDriveItemHelper,
                d = m.currentItem.group,
                h = FilesConfig.recycleBinEnabled,
                g = h && !o.isViewerOwner(m.currentItem) && !d,
                f = h && !!o.isRecycleBinQuery(m.currentItem),
                p = !1;
              "undefined" != typeof $header && $header.showLoading(),
                m.selectionManager.getSelectedItems(function (e) {
                  "undefined" != typeof $header && $header.hideLoading(),
                    (r = e),
                    (p = r && r.length && r[0].isRecycled),
                    n();
                }, l("SelectionResolve.DeleteString"));
              return (
                !h || f || p || g || d
                  ? require(["flyout", "doregister"], function () {
                      var r,
                        o = i || _ge("c_header");
                      p
                        ? ((r = l("InlineDeletePromptMultiple")),
                          f || Qos.log(c + "Purge", u))
                        : (r = l(
                            g
                              ? "DeleteSharedMultipleItems"
                              : "DeletePromptMultipleItems"
                          ).format(t.selectionCount));
                      var s = {
                          buttons: { action: l("DeleteCommand") },
                          title: l(
                            g
                              ? "DeleteSharedMultipleItemPromptTitle"
                              : "DeletePromptTitle"
                          ),
                          content: r,
                          anchor: o,
                        },
                        d = e().createFlyout(s),
                        h = jQuery(d);
                      h.bind({
                        "aftershow._dlg": function (e, t) {
                          var i = jQuery(d.content());
                          sutra(i, "$Sutra.SkyDrive.DeleteMsgBoxContainer"),
                            sutra(
                              jQuery(".UserArea", i),
                              "$Sutra.SkyDrive.DeleteMsgBoxBody"
                            ),
                            sutra(
                              d.getButton({ buttonName: "action" }),
                              "$Sutra.SkyDrive.DeleteMsgBoxOkBtn"
                            );
                        },
                        "afterdismiss._dlg": function (e, t) {
                          h && h.unbind("._dlg"), (h = null), (d = null);
                        },
                        "buttonclick._dlg": function (e, t, i) {
                          "action" == i && ((a = !0), n()), d.dismiss();
                        },
                      }),
                        d.show();
                    })
                  : ((a = !0), n()),
                !1
              );
            },
            check: function (e) {
              var i = s.SkyDriveItemHelper,
                n = !0,
                r = !0;
              return t("Delete", e, function (e) {
                return (
                  (n = n && !e.isRecycled),
                  (r = r && !!e.isRecycled),
                  !i.isMruQuery(e) && !i.isSharedQuery(e) && (n || r)
                );
              });
            },
          },
          OwnerRequestReview: {
            apiIdPart: "OwnerRequestReview",
            name: "ORR",
            skyCmd: "ORR",
            click: function (e, t) {
              function i() {
                "undefined" != typeof $header && $header.hideLoading(),
                  m.operationManager.execute("OwnerRequestReview", {
                    items: n,
                  });
              }
              var n = [];
              return (
                "undefined" != typeof $header && $header.showLoading(),
                m.selectionManager.getSelectedItems(function (e) {
                  (n = e), i();
                }, l("SelectionResolve.Review")),
                !1
              );
            },
          },
          Restore: {
            name: "rst",
            skyCmd: "RST",
            click: function (e, t) {
              function i() {
                var e = new Object();
                e.recycleBinItems = [];
                for (var t, i = 0; i < n.length; i++) {
                  t = n[i];
                  var a = s.SkyDriveItemHelper.getRestoreItem(t);
                  e.recycleBinItems.push(a);
                }
                n.length > 0 &&
                  m.operationManager.execute("Restore", {
                    items: n,
                    targetItem: n[0].getParent(!0),
                    perItemOptions: e,
                  }),
                  r || Qos.log("Restore_Confirm", u);
              }
              var n = [],
                r = !!s.SkyDriveItemHelper.isRecycleBinQuery(m.currentItem);
              return (
                "undefined" != typeof $header && $header.showLoading(),
                m.selectionManager.getSelectedItems(function (e) {
                  "undefined" != typeof $header && $header.hideLoading(),
                    r || Qos.log(c + "Restore", u),
                    (n = e),
                    i();
                }, l("SelectionResolve.Restore")),
                !1
              );
            },
            check: function (e) {
              return t("Restore", e, function (e) {
                return e.isRecycled;
              });
            },
          },
        },
        v = {
          getAction: function (e, t, i) {
            var r = p[e],
              a = null;
            if (r && n(r, e, t) && ((a = jQuery.extend({}, r)), a.click)) {
              var o = a.skyCmd,
                s = o ? "SkyDriveWeb_Internal_Action_" + o : "",
                l = a.click;
              a.click = function () {
                return Qos.instrument(
                  Qos.createContext(s, t && t.selectionCount),
                  function () {
                    return l(
                      t,
                      i ||
                        (arguments[0] &&
                          "click" === arguments[0].type &&
                          arguments[0].target)
                    );
                  }
                ).apply(this, arguments);
              };
            }
            return a;
          },
        };
      (s.SkyDriveItemHelper._multiselectionActions = p),
        (s.SkyDriveItemHelper.registerMultiselectActions = o);
    })();
  }),
  define(
    "beforeunloadmanager",
    ["imagetile", "jquery-1.7.2", "pagestats", "alehelpers"],
    function () {
      !(function () {
        function e(e) {
          c.bind(d, e), (o && jQuery.isEmptyObject(a)) || c.trigger(d, a);
        }
        function t(e, t, i) {
          require(["modaldialog", "doregister"], function () {
            var n = wLive.Controls.Notifications.createModalDialog({
                buttons: { action: r("LeavePageStr"), close: r("Cancel") },
                title: "",
                content: e,
              }),
              a = jQuery(n);
            a.bind({
              "aftershow._dlg": function (e, t) {
                var i = jQuery(t.content());
                sutra(i, "$Sutra.SkyDrive.BeforeUnloadDialog"),
                  sutra(
                    t.getButton({ buttonName: "action" }),
                    "$Sutra.SkyDrive.BeforeUnloadContinueButton"
                  ),
                  sutra(
                    t.getButton({ buttonName: "close" }),
                    "$Sutra.SkyDrive.BeforeUnloadCancelButton"
                  );
              },
              "afterdismiss._dlg": function (e, t) {
                a && a.unbind("._dlg"), (a = null), (t = null);
              },
              "buttonclick._dlg": function (e, n, r) {
                "action" === r ? t() : i && i();
              },
            }),
              n.show();
          });
        }
        function i(e) {
          var t = "";
          return (
            raiseEventWithProcessing(
              n.BeforeUnloadManager,
              e ? "beforehashchange" : "beforeunload",
              function (e) {
                return !(t = e);
              },
              {},
              !1
            ),
            t
          );
        }
        var n = wLive.Core,
          r = n.AleHelpers.getPCString,
          a = {},
          o = !0,
          s = !1,
          l = !1,
          d = "navigate",
          u = {},
          c = jQuery(u);
        (n.BeforeUnloadManager = {
          registerHandler: function (e, t) {
            this.addObjectListener(
              this,
              t ? "beforehashchange" : "beforeunload",
              e
            );
          },
          unRegisterHandler: function (e) {
            this.removeObjectListener(this, "beforehashchange"),
              this.removeObjectListener(this, "beforeunload");
          },
        }),
          mix(n.BeforeUnloadManager, Shared.ObjectEventing),
          $Do.when("$History.attach", 0, function (e, n) {
            var r = i(!0);
            (o = !1),
              r && !s
                ? ($BSI.navigateTo("#" + $Utility.serialize(a)),
                  l ||
                    ((l = !0),
                    t(
                      r,
                      function () {
                        setTimeout(function () {
                          (l = !1),
                            (s = !0),
                            (a = n),
                            $BSI.navigateTo("#" + $Utility.serialize(n));
                        }, 0);
                      },
                      function () {
                        (l = !1), (s = !1);
                      }
                    )))
                : ((s = !1), (a = n), c.trigger(d, n));
          });
        var h = window.onbeforeunload;
        (window.onbeforeunload = function () {
          var e;
          return (
            h && (e = h.apply(this, arguments)),
            !e &&
              window.__onbeforeunload &&
              (e = window.__onbeforeunload.apply(this, arguments)),
            e || (e = i(!1)),
            e ? e : void 0
          );
        }),
          $Do.register("BeforeUnloadManager.attach", e, !0);
      })();
    }
  ),
  define("inlineerror", ["jquery-1.7.2", "sutra", "alehelpers"], function () {
    !(function () {
      function e(e, t, i) {
        var r = this;
        r.render = function () {
          var r = jQuery('<div class="ine_error"></div>');
          e.append(r), sutra(r, "$Sutra.SkyDrive.InlineError");
          var a = jQuery('<div class="ine_text"></div>');
          i && t ? a.html(t) : t ? a.text(t) : a.text(n),
            r.append(a),
            r.append(jQuery('<div class="c_clr"></div>'));
        };
      }
      var t = wLive.Core,
        i = t.AleHelpers.getPCString,
        n = i("ReportAbuse.PopoverError");
      wLive.Controls.InlineError = e;
    })();
  }),
  define("optimizelyhelper", ["defineutilities", "qos"], function () {
    !(function () {
      var e = window,
        t =
          e.Flight &&
          Flight.Ramps &&
          Flight.Ramps.optimizelyEnabled &&
          e.optimizely,
        i = e.optimizely,
        n = 2623860133,
        r = "2621120483",
        a = 2606940167,
        o = {
          ClickGetMoreStorage: "SkyDriveWeb_ABTest_LeftNav_GetStorage",
          ClickGetTheApps: "SkyDriveWeb_ABTest_LeftNav_GetApps",
          SignInCompletedODC: "SkyDriveWeb_ABTest_SignIn",
        },
        s = "SkyDrive";
      defineNamespace("SkyDrive.UI.OptimizelyHelper", {
        experiments: { leftNav: n, signIn: a },
        init: function () {
          if (t && i && i.push) {
            i.push(["setDimensionValue", "ODLocale", $Config.mkt]),
              i.push(["setDimensionValue", "ODCID", $Config.unid]),
              e.location.search &&
                e.location.search.indexOf("gologin=1") > 0 &&
                SkyDrive.UI.OptimizelyHelper.trackEvent(
                  a,
                  "SignInCompletedODC"
                );
            var n = i.data && i.data.state;
            if (n && n.activeExperiments && n.activeExperiments.length) {
              for (
                var r = [], o = [], l = 0;
                l < n.activeExperiments.length;
                l++
              ) {
                var d = n.activeExperiments[l],
                  u = n.variationIdsMap[d] || "0";
                r.push(d), o.push(u);
              }
              var c = {
                experiments: r.join(","),
                variations: o.join(","),
                unid: $Config.unid,
              };
              Qos.logData(
                "SkyDriveWeb_ABTest_PageLoad",
                s,
                Date.now(),
                null,
                null,
                c
              );
            }
          }
        },
        isExperimentEnabled: function (e) {
          if (t && i) {
            var a = i.data && i.data.state;
            return a && a.variationIdsMap[n] && a.variationIdsMap[n][0] === r;
          }
          return !1;
        },
        trackEvent: function (e, n) {
          if (t && i && i.push) {
            i.push(["trackEvent", n]);
            var r = o[n],
              a = i.data && i.data.state;
            if (r && a) {
              var l = {
                eventName: n,
                experimentId: e,
                variationId: a.variationIdsMap[e] && a.variationIdsMap[e][0],
                unid: $Config.unid,
              };
              Qos.logData(r, s, Date.now(), null, null, l);
            }
          }
        },
      });
    })();
  }),
  define(
    "quotapane",
    ["basecontrol", "alehelpers", "errormanager", "optimizelyhelper"],
    function () {
      !(function () {
        function e(e) {
          var t = "";
          if (e && e.displayQuotaRemaining && e.displayQuotaTotal && !e.group) {
            var n = "<span>" + htmlEncode(e.displayQuotaRemaining) + "</span>",
              r = "<span>" + htmlEncode(e.displayQuotaExceeded) + "</span>";
            (t = '<div id="quotaHeader">' + s.format(n) + "</div>"),
              e.quotaStatus === i.Exceeded &&
                (t += "<div>" + l.format(r) + "</div>");
          }
          return t;
        }
        var t = wLive.Core,
          i = t.QuotaStatus,
          n = t.AleHelpers.getString,
          r = t.AleHelpers.getPCString,
          a = SkyDrive.UI.OptimizelyHelper,
          o = "leftnavbar.",
          s = r(o + "QuotaAvailable.Format"),
          l = r(o + "QuotaUsageExceeded.Format");
        defineSubClass(
          "SkyDrive.UI.QuotaPane",
          JBase.UI.BaseControl,
          function () {},
          {
            apiIdBase: "SkyDriveWeb_Internal_Control_QuotaPane",
            quotaHtml: "",
            recycleBinUrl: "#qt=recyclebin",
            manageStorageUrl: FilesConfig.manageStorageUrl,
            getAppsUrl: FilesConfig.getSkyDriveAppsUrl + "?biciid=lhnlink",
            manageStorageText: r(o + "managestorage.text"),
            getAppsText: r(o + "getapps.text"),
            recycleBinText: n("RecycleBin"),
            hasExceededQuota: !1,
            isControlGroup: !0,
            isTestGroup: !1,
            onActivate: function (e, i) {
              var n = this;
              a.isExperimentEnabled(a.experiments.leftNav) &&
                i.getAppsLink.parentNode.insertBefore(
                  i.getAppsLink,
                  i.manageLink
                ),
                n.addElementListener(
                  i.getAppsLink,
                  "click",
                  n._onGetAppsClicked
                ),
                n.addElementListener(i.manageLink, "click", n._onManageClicked),
                n.addElementListener(
                  i.recycleLink,
                  "click",
                  t.BiciHelpers.prependBiciReportClickAction(null, "RB", "LN")
                );
            },
            onDataContextChanged: function (t) {
              (this.quotaHtml = e(t.item) || this.quotaHtml),
                (this.hasExceededQuota = t.quotaStatus === i.Exceeded);
            },
            _onManageClicked: function () {
              a.trackEvent(a.experiments.leftNav, "ClickGetMoreStorage"),
                t.BiciHelpers.prependBiciReportClickAction(null, "MS", "LN")();
            },
            _onGetAppsClicked: function () {
              a.trackEvent(a.experiments.leftNav, "ClickGetTheApps");
            },
          }
        );
      })();
    }
  ),
  define("quotapane.html", ["quotapane"], function () {
    (SkyDrive.UI.QuotaPane.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        sutraAttribute("SkyDrive.QuotaPane") +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><div class="leftNavBar_extraLinks"><div id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="leftNavBar_quota' +
        generateClassAttribute(
          "leftNavBar_quotaExceeded",
          this.hasExceededQuota
        ) +
        '"><div id="' +
        htmlAttributeEncode(this.id + "_2") +
        '">' +
        this.quotaHtml +
        '</div></div><a draggable="false"' +
        sutraAttribute("SkyDrive.RecycleBinLink") +
        ' id="' +
        htmlAttributeEncode(this.id + "_3") +
        '"' +
        generateAttributesString("href", this.recycleBinUrl) +
        ">" +
        htmlEncode(this.recycleBinText) +
        '</a><a draggable="false"' +
        sutraAttribute("SkyDrive.ManageStorageLink") +
        ' id="' +
        htmlAttributeEncode(this.id + "_4") +
        '"' +
        generateAttributesString("href", this.manageStorageUrl) +
        ">" +
        htmlEncode(this.manageStorageText) +
        '</a><a target="_blank" draggable="false"' +
        sutraAttribute("SkyDrive.GetAppsLink") +
        ' id="' +
        htmlAttributeEncode(this.id + "_5") +
        '"' +
        generateAttributesString("href", this.getAppsUrl) +
        ">" +
        htmlEncode(this.getAppsText) +
        "</a></div></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.QuotaPane,
        [
          { id: 0 },
          {
            id: 1,
            className: ["leftNavBar_quotaExceeded", "hasExceededQuota"],
          },
          { id: 2, attr: ["html", "quotaHtml"] },
          {
            id: 3,
            attr: ["href", "recycleBinUrl", "text", "recycleBinText"],
            childId: "recycleLink",
          },
          {
            id: 4,
            attr: ["href", "manageStorageUrl", "text", "manageStorageText"],
            childId: "manageLink",
          },
          {
            id: 5,
            attr: ["href", "getAppsUrl", "text", "getAppsText"],
            childId: "getAppsLink",
          },
        ],
        [],
        {}
      );
  }),
  define("quickview", ["debug", "domhelpers", "errormanager"], function () {
    !(function () {
      function e(i, g, f) {
        function p(e, i) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            if (t.StringHelpers.caseInsensitiveStringEquals(r.id, i)) return r;
          }
          return null;
        }
        function v(e, t) {
          "undefined" != typeof e.url && null != e.url && (e.collapsible = !1),
            y(e.collapsible)
              ? t
                ? (e.collapsible = t.collapsible)
                : (e.collapsible = !0)
              : 0 == e.collapsible && (e.expanded = !0),
            y(e.expanded) &&
              (t ? (e.expanded = t.expanded) : (e.expanded = !0)),
            y(e.selected) &&
              (t ? (e.selected = t.selected) : (e.selected = !1)),
            y(e.hidden) && (t ? (e.hidden = t.hidden) : (e.hidden = !1)),
            y(e.hoverable) &&
              (t ? (e.hoverable = t.hoverable) : (e.hoverable = !0));
        }
        function y(e) {
          return "undefined" == typeof e || null == e;
        }
        function C(e) {
          var t = jQuery(e).parents(".quickview").data(n);
          return t && t.item && t.item.entries ? t.item.entries[t.index] : null;
        }
        function S(e) {
          var t = C(this);
          if (t) {
            var i = t._internal;
            (t.expanded = !0),
              i.$element.show(),
              i.$chevronOpen.show(),
              i.$chevronClosed.hide();
          }
        }
        function b(e) {
          var t = C(this);
          if (t) {
            var i = t._internal;
            (t.expanded = !1),
              i.$element.hide(),
              i.$chevronOpen.hide(),
              i.$chevronClosed.show();
          }
        }
        function _(e) {
          var t = C(this);
          t && (t._internal.$quickView.show(), (t.hidden = !1));
        }
        function k(e) {
          var t = C(this);
          t && (t._internal.$quickView.hide(), (t.hidden = !0));
        }
        function w(e) {
          if (!t.DomHelpers.isInputElement(jQuery(e.target))) {
            var i = jQuery(this).parents(".quickview").data(n),
              r = i ? i.item.entries[i.index] : null;
            if (r) {
              for (var a = 0; a < i.item.entries.length; a++) {
                var o = i.item.entries[a];
                o &&
                  o._internal &&
                  o._internal.$headerContainer &&
                  o._internal.$headerContainer.removeClass("quickview_sel");
              }
              r &&
                r._internal &&
                r._internal.$headerContainer &&
                (r._internal.$headerContainer.addClass("quickview_sel"),
                (r.selected = !0));
            }
          }
        }
        function I(e) {
          var t = C(this);
          t &&
            (t._internal.$headerContainer.removeClass("quickview_sel"),
            (t.selected = !1));
        }
        function x(e) {
          var t = C(this);
          t &&
            (!t.collapsible ||
              (t.action &&
                0 !=
                  jQuery(e.srcElement).closest(".quickview_header_text")
                    .length) ||
              (T ||
                (t.expanded
                  ? t._internal.$element.trigger(m.Collapse)
                  : t._internal.$element.trigger(m.Expand),
                t.onChevronToggle && t.onChevronToggle()),
              e.preventDefault()),
            (T = !1));
        }
        var D,
          T,
          A = this,
          P = f || !1;
        (A.render = function (m, f) {
          var y;
          if (D)
            for (var C = 0; C < D.entries.length; C++)
              (y = D.entries[C]), (y._internal.disposing = !0);
          for (var E, B = !1, R = 0; R < m.entries.length; R++) {
            (E = m.entries[R]),
              D
                ? ((y = p(D.entries, E.id)), y && (y._internal.disposing = !1))
                : (y = null);
            var M = {};
            (M.disposing = !1),
              v(E, y),
              E.collapsible && (B = !0),
              (M.$quickView = jQuery('<div class="quickview"></div>'));
            if (E.action || E.collapsible) {
              if (
                ((M.$headerHitTarget = jQuery(a)),
                (M.$headerAnchor = M.$hover =
                  jQuery(".quickview_header_anchor", M.$headerHitTarget)),
                E.action &&
                  (M.$headerContainer = M.$headerAnchor.addClass(
                    "quickview_header_indented"
                  )),
                E.collapsible)
              ) {
                if (
                  (M.$headerAnchor
                    .append(s)
                    .addClass("quickview_header_anchor_withchevron"),
                  t.StringHelpers.caseInsensitiveStringEquals(
                    g.currentViewType,
                    r
                  ))
                ) {
                  var F = "darkPanelClosedUp",
                    L = "darkPanelOpenUp";
                  P && ((F += "11x9"), (L += "11x9")),
                    (M.$chevronClosed = jQuery(
                      ".quickview_chevron_closed",
                      M.$headerHitTarget
                    ).append(t.ImageStrip.getImage(F, c))),
                    (M.$chevronOpen = jQuery(
                      ".quickview_chevron_open",
                      M.$headerHitTarget
                    ).append(t.ImageStrip.getImage(L, h)));
                } else {
                  var U = "closedUp",
                    V = "openUp";
                  P && ((U += "11x9"), (V += "11x9")),
                    (M.$chevronClosed = jQuery(
                      ".quickview_chevron_closed",
                      M.$headerHitTarget
                    ).append(t.ImageStrip.getImage(U, c))),
                    (M.$chevronOpen = jQuery(
                      ".quickview_chevron_open",
                      M.$headerHitTarget
                    ).append(t.ImageStrip.getImage(V, h)));
                }
                (M.$headerContainer = jQuery(
                  ".quickview_header_anchor_container",
                  M.$headerHitTarget
                )),
                  (E.expanded ? M.$chevronClosed : M.$chevronOpen).hide();
              }
            } else
              (M.$headerHitTarget = jQuery(o)),
                (M.$hover = M.$headerContainer = M.$headerHitTarget);
            if (
              (M.$headerHitTarget.bind("click", x),
              y && y._internal.$header
                ? (y._internal.$header.appendTo(M.$headerContainer),
                  (M.$hover = M.$header = y._internal.$header),
                  (y._internal.$header = null))
                : (M.$hover = M.$header =
                    jQuery(l).appendTo(M.$headerContainer)),
              E.action)
            ) {
              var N = M.$headerContainer.find(".quickview_header_text");
              g.actionManager.setATagAction(
                E.action,
                N,
                null,
                (function (e) {
                  return function (t, i) {
                    return (
                      e &&
                        wLive.Core.BiciHelpers.reportClickAction(
                          e.SkyCmnd,
                          e.ClickLoc
                        ),
                      (T = !0),
                      i(t)
                    );
                  };
                })(E.bici)
              );
            }
            (M.$subheader = jQuery(d)),
              M.$headerHitTarget
                .bind("dragstart", function (e) {
                  e.preventDefault();
                })
                .bind("selectstart", function (e) {
                  e.preventDefault();
                })
                .appendTo(M.$quickView),
              M.$subheader.appendTo(M.$quickView),
              (M.$elementContainer = jQuery(d)),
              y
                ? ((M.$element = y._internal.$element), M.$element.detach())
                : (M.$element = jQuery(u)
                    .bind(e.EventNames.Expand, S)
                    .bind(e.EventNames.Collapse, b)
                    .bind(e.EventNames.Show, _)
                    .bind(e.EventNames.Hide, k)
                    .bind("select", w)
                    .bind("unselect", I)),
              M.$elementContainer.append(M.$element),
              M.$quickView.append(M.$elementContainer),
              M.$element.toggle(E.expanded),
              M.$quickView.toggle(!E.hidden),
              E.selected
                ? M.$headerContainer.addClass("quickview_sel")
                : M.$headerContainer.removeClass("quickview_sel");
            var Q = { item: m, index: R };
            M.$quickView.data(n, Q);
            var q = E.control;
            y
              ? (M.$control = y._internal.$control)
              : ((E._internal = M),
                (M.$control = new q(M.$element, g, {
                  $header: M.$header.find("span"),
                  $headerA: M.$headerAnchor,
                  $subheader: M.$subheader,
                  $chevron: M.$headerContainer.find(".quickview_chevron"),
                  options: E.cstrOptions,
                }))),
              i.append(M.$quickView),
              y && y._internal.$quickView.remove(),
              (E._internal = M),
              M.$control.render(E.data, f);
          }
          if (!B)
            for (var O = 0; O < m.entries.length; O++) {
              E = m.entries[O];
              var H = E._internal;
              H.$headerAnchor &&
                H.$headerAnchor.removeClass("quickview_header_indented"),
                H.$headerHitTarget.removeClass("quickview_header_indented"),
                H.$subheader.removeClass("quickview_element_indented"),
                H.$elementContainer.removeClass("quickview_element_indented");
            }
          A.disposeCore(!0), (D = m);
        }),
          (A.disposeCore = function (e) {
            if (D) {
              var t = [];
              !(function () {
                for (var i = 0; i < D.entries.length; i++) {
                  var n = D.entries[i];
                  !e || n._internal.disposing
                    ? (n._internal.$quickView.remove(),
                      n._internal.$control.dispose())
                    : (t[t.length] = n);
                }
              })(),
                (D = { entries: t });
            }
          }),
          (A.dispose = function () {
            A.disposeCore(!1);
          });
      }
      var t = wLive.Core,
        i = t.AleHelpers.getPCString,
        n = "quickView_event",
        r = "SelfView";
      wLive.Controls.QuickView = e;
      var a =
          '<div class="quickview_header"><span class="quickview_header_anchor"></span></div>',
        o = '<div class="quickview_header quickview_header_indented"></div>',
        s =
          '<span class="quickview_header_anchor_container"><a class="quickview_chevron" href="#"><span class="quickview_chevron_open"></span><span class="quickview_chevron_closed"></span></a></span>',
        l = '<a class="quickview_header_text"><span class="t_ctc"></span></a>',
        d = '<div class="quickview_element_indented"></div>',
        u = '<div class="quickview_element"></div>',
        c = i("expandicontooltip"),
        h = i("collapseicontooltip"),
        m = (e.EventNames = {
          Collapse: "collapse",
          Expand: "expand",
          Show: "show",
          Hide: "hide",
          SetFlavor: "setFlavor",
        });
    })();
  }),
  define(
    "cookietoss",
    ["skydriveitemhelperextended", "domhelpers"],
    function () {
      !(function () {
        var e = window,
          t = [
            new RegExp(
              "^http(?:s)?://(?:[A-Za-z0-9]*[.])*livefilestore(?:-int)?[.]com/",
              "i"
            ),
            new RegExp(
              "^http(?:s)?://(?:[A-Za-z0-9-]*[.])*1drv(?:-int)?[.]com/",
              "i"
            ),
          ];
        if (
          (defineClass(
            "wLive.Core.CookieToss",
            function (e, t, i) {
              (this.domainRegex = e), (this.iframeSrc = t), (this.complete = i);
            },
            {
              complete: !e.cookieToss,
              pending: !1,
              eventName: "cookieToss",
              requiresCookieToss: function (e) {
                return this.domainRegex.test(e);
              },
              startCookieToss: function () {
                if (!this.pending && !this.complete) {
                  this.pending = !0;
                  var e = document.createElement("IFRAME");
                  (e.src = this.iframeSrc),
                    (e.style.display = "none"),
                    document.body.appendChild(e);
                }
              },
            }
          ),
          e.cookieToss)
        ) {
          for (
            var i = e.cookieToss.s, n = e.cookieToss.r, r = [], a = 0;
            i && a < i.length;
            a++
          )
            r.push(new wLive.Core.CookieToss(t[a], i[a], !n[a]));
          (e.cookieToss.c = function (e) {
            var t = r[e];
            t &&
              ((t.complete = !0),
              (t.pending = !1),
              jQuery(t).trigger(t.eventName));
          }),
            e.Shared &&
              e.Shared.ImageLoader &&
              (Shared.ImageLoader.isDomainAccessible = function (e, t) {
                var i = !1;
                for (a = 0; a < r.length; a++) {
                  var n = r[a];
                  if (
                    ((i = n.requiresCookieToss(e) && !n.complete),
                    i && !n.pending)
                  ) {
                    jQuery(n).bind(n.eventName, function () {
                      t ? t() : Shared.ImageLoader.processQueue();
                    }),
                      n.startCookieToss();
                    break;
                  }
                }
                return !i;
              });
        }
      })();
    }
  ),
  define("images", ["cookietoss"], function () {
    !(function () {
      function e(e) {
        v = !0;
      }
      function t(e) {
        function i() {
          (e[0].t = new Date().getTime()), (e[0].s = n), (e[0].src = n);
        }
        var n;
        !e && c.length > 0 && (e = c.pop()),
          e &&
            (!v &&
            h.length > 0 &&
            Shared.ImageLoader.isDomainAccessible(h[0], t)
              ? ((n = h.splice(0, 1)[0]),
                h.length > 0 && c.length > 0 && t(),
                p++,
                p % 10 ? i() : o.DomHelpers.setTimeoutZero(i))
              : c.push(e));
      }
      function i(e) {
        var i = this,
          n = jQuery(i),
          r = i.s;
        a(i.t, "DownloadFailure"), delete m[r], t(n);
      }
      function n(e) {
        var t = this,
          i = jQuery(t);
        a(t.t, "Abort", "c");
        var n = t.s;
        delete m[n], c.push(i);
      }
      function r(e) {
        var i = this,
          n = jQuery(i),
          r = i.s;
        a(i.t);
        var o = m[r],
          s = 0,
          l = o.length;
        for (g[r] = !0; l > s; s++) o[s] && (o[s].src = r);
        delete m[r], t(n);
      }
      function a(e, t, i) {
        Qos.log(
          "SkyDriveWeb_Internal_Framework_Images_Download",
          "Storage",
          e,
          t,
          i
        );
      }
      var o = wLive.Core,
        s = "imgPool",
        l = "unload",
        d = (wLive.Core.Images = {}),
        u = 10,
        c = [],
        h = [],
        m = {},
        g = {},
        f = 0,
        p = 0,
        v = !1;
      !(function () {
        for (var t = 0; u > t; t++)
          c.push(
            jQuery(document.createElement("img")).bind({
              error: i,
              abort: n,
              load: r,
            })
          );
        jQuery(window).bind(l, e);
      })(),
        (d.getId = function () {
          return s + f++;
        }),
        (d.isComplete = function (e) {
          return g[e];
        }),
        (d.isIdle = function () {
          return 0 == h.length && c.length == u;
        }),
        (d.hasLoadedImage = function (e) {
          return g[e];
        }),
        (d.loadImage = function (e, i) {
          g[e]
            ? i && (i.src = e)
            : m[e]
            ? m[e].push(i)
            : (h.push(e), (m[e] = [i]), t());
        });
    })();
  }),
  define("datefactory", ["images"], function () {
    !(function () {
      function e(e) {
        var t = e / 1e4 - c;
        return t;
      }
      function t(t, a, o) {
        var s = new Date(),
          d = e(t),
          u = s.getTime() - d,
          c = i(u),
          S = n(u),
          b = r(u);
        return c > 0
          ? 7 > c
            ? (1 == c ? h : m).format(c)
            : a
            ? a
            : l.DateFactory.getFormattedDate(t)
          : S > 0
          ? (1 == S ? g : f).format(S)
          : b > 0
          ? (1 == b ? p : v).format(b)
          : o
          ? C
          : y;
      }
      function i(e) {
        return 0 == e ? 0 : Math.floor(e / 1e3 / 60 / 60 / 24);
      }
      function n(e) {
        return 0 == e ? 0 : Math.floor(e / 1e3 / 60 / 60);
      }
      function r(e) {
        return 0 == e ? 0 : Math.floor(e / 1e3 / 60);
      }
      function a() {
        var e = [];
        o(w, e, 0);
      }
      function o(e, t, i) {
        for (var n = Math.min(i + I, e.length), r = i; n > r; r++) {
          var l = e[r];
          s(l) && t.push(l);
        }
        n < e.length
          ? setTimeout(function () {
              o(e, t, n);
            }, 10)
          : ((w = t), setTimeout(a, k));
      }
      function s(e) {
        var i = !1,
          n = e.el,
          r = e.ticks,
          a = e.localizedDate;
        return (
          n &&
            0 !== n.closest("body").size() &&
            r &&
            (n.text(t(r, a)), (i = !0)),
          i
        );
      }
      var l = wLive.Core,
        d = l.AleHelpers.getString,
        u = l.AleHelpers.getMarketInfoValue,
        c = 621355968e5,
        h = d("Dates.Yesterday"),
        m = d("Dates.DaysAgo"),
        g = d("Dates.HourAgo"),
        f = d("Dates.HoursAgo"),
        p = d("Dates.MinuteAgo"),
        v = d("Dates.MinutesAgo"),
        y = d("Dates.MomentAgo"),
        C = d("Dates.MomentAgoLowerCase"),
        S = u("DateFormat.DayMonthYearPattern"),
        b = u("DateFormat.DayAndSuffixPattern"),
        _ = u("DateFormat.AppendAfterDay"),
        k = 6e4,
        w = [],
        I = 10;
      (l.DateFactory = {
        getDate: function (e, i, n) {
          var r = jQuery(_ce("span"));
          return (
            e > 0 &&
              w.push({ el: r.text(t(e, i, n)), ticks: e, localizedDate: i }),
            r
          );
        },
        getDateString: t,
        getFormattedDate: function (t) {
          var i = e(t),
            n = new Date(i),
            r = (n.getMonth() + 1).toString(),
            a = n.getDate(),
            o = d("Dates.AbbreviatedMonth_{0}".format(r)),
            s = b.format(a, _),
            l = S.format(s, o, n.getFullYear());
          return l;
        },
        getUTCDateTime: function (t, i) {
          var n = jQuery(_ce("span")),
            r = e(t),
            a = new Date(r),
            o = (a.getUTCMonth() + 1).toString(),
            s = a.getUTCDate(),
            l = a.getUTCFullYear(),
            d = a.getUTCHours(),
            u = a.getUTCMinutes(),
            c = a.getUTCSeconds();
          (u = u > 9 ? u : "0" + u), (c = c > 9 ? c : "0" + c);
          var h = "{0}/{1}/{2} {3}:{4}:{5} UTC",
            m = h.format(o, s, l, d, u, c);
          return n.text(m), n;
        },
      }),
        setTimeout(a, k);
    })();
  }),
  define("olditemtile", ["datefactory"], function () {
    !(function () {
      function e(V, W, G) {
        function K(e, t, i) {
          (Ae = !1),
            (be = e),
            (_e = be.getVersion()),
            (Pe = e.getRotationState()),
            (Qe = 0),
            (qe = 0),
            (Ee = 0),
            (Be = 0),
            (Re = 0),
            (Me = 0),
            he(),
            t || (Ne.empty(), Ne.removeClass(T)),
            i || (Te = null),
            se();
          var n = me();
          (Ue = !1), J(), i ? ((ke = jQuery(b, Ne)), n && X()) : X(), le();
        }
        function J() {
          var e = Math.round(90 * Pe);
          V.removeClass("rotate90 rotate180 rotate270"),
            e && V.addClass("rotate" + e);
        }
        function X() {
          xe
            ? be.video || be.isPanorama
              ? Z()
              : be.photo || be.audio
              ? ee()
              : be.folder
              ? ie()
              : ne()
            : (!G.df && be.folder
                ? ae()
                : be.photo || be.video || be.isProcessingVideo
                ? ne()
                : re(),
              (Ae = !0));
        }
        function Z() {
          var e = G.dv ? N : Q,
            t = e.format(be.name.encodeHtmlAttribute());
          Ne.html(t), (ke = jQuery(b, Ne)), ke.bind(k, te), Y();
        }
        function Y() {
          if (n.isComplete(xe)) ke.attr(p, xe), Ne.addClass(T), (Ae = !0);
          else {
            var e = n.isComplete(De);
            He || (e ? (ke.attr(p, De), Ne.addClass(T)) : ke.hide()),
              (e && De == xe) ||
                ((we = jQuery("<img />")
                  .attr(f, "")
                  .attr(g, ke.attr(g))
                  .css(x, 0)
                  .css(D, 1)),
                we.insertBefore(ke),
                Fe || (we.bind(_, Ce), n.loadImage(xe, we[0])));
          }
        }
        function ee() {
          var e = N.format(be.name.encodeHtmlAttribute());
          Ne.html(e), (ke = jQuery(b, Ne)), ke.bind(k, te), Y();
        }
        function te() {
          ke.css(L, U);
        }
        function ie() {
          var e = be && be.folder ? be.folder.totalCount : 0,
            t = O.format(e);
          Ne.html(t), oe();
          var i = jQuery(h + m, Ne);
          jQuery(i[0]).css(x, 1),
            jQuery(i[1]).css(x, 0),
            (ke = jQuery(b, jQuery(i[0]))),
            ke.bind(k, te),
            ke.bind(_, fe),
            n.loadImage(xe, ke[0]);
        }
        function ne() {
          var e;
          if (be.photo) e = z;
          else {
            var t = FilesConfig.foldersImgBaseUrl + "/videoNoThumbnail.png";
            e = j.format(
              t.encodeHtmlAttribute(),
              be.name.encodeHtmlAttribute()
            );
          }
          Ne.html(e);
        }
        function re() {
          Ne.html($),
            be.did
              ? jQuery(".itemTdm", Ne).append(
                  r.getFriendlyFileType(be).encodeHtml()
                )
              : jQuery(".itemTdm", Ne).append(
                  t.DateFactory.getDate(
                    be.dateModifiedOnClient,
                    be.displayModifiedDate
                  )
                ),
            oe();
        }
        function ae() {
          Ne.html(H), oe();
        }
        function oe() {
          var e = jQuery(".itemName", Ne);
          G.de || !i.EditableText
            ? e.text(be.name)
            : (Ve
                ? (e.replaceWith(Ve.getContainer()), Ve.bindAll())
                : (Ve = new i.EditableText(
                    e,
                    W,
                    jQuery.extend({}, i.EditableText.RenameOptions, {
                      de: !0,
                      ec: "itemNameEdit",
                      hc: !0,
                    })
                  )),
              Ve.isEditing() || Ve.render(be));
        }
        function se() {
          var e,
            t,
            i = !1;
          return (
            (e = G.w > 0 ? G.w : V.width()),
            (t = G.h > 0 ? G.h : V.height()),
            (e == Ee && t == Be) || ((Ee = e), (Be = t), (i = !0)),
            i
          );
        }
        function le() {
          Ne.width(Ee),
            Ne.height(Be),
            be &&
              (ke
                ? (ue(Ee, Be), ce(Ee, Be))
                : be.video || be.isProcessingVideo
                ? ue(Ee, Be)
                : (!G.df && be.folder) || be.photo || de(Ee, Be));
        }
        function de(e, t) {
          var i = Ne.find(".itemTd"),
            n = (Ne.find(".itemTdc"), Ne.find(".itemTdi")),
            a = Ne.find(".itemTdt"),
            d = s;
          (t != o && t != l) || (d = l),
            t == d ? i.removeClass("itemTdb") : i.addClass("itemTdb");
          var u = t == s || t == l;
          n
            .empty()
            .height(d)
            .width(d)
            .css(M, u ? 0 : c)
            .css("margin-top", -d / 2),
            $B.Mobile && be.folder
              ? n.append(q.format(be.folder.totalCount))
              : n.append(jQuery(r.getIcon(be, d))),
            a.css(M, 2 * c + d).css(R, c),
            u ? a.hide() : a.show();
        }
        function ue(e, i) {
          var n = jQuery(".itemTo", Ne);
          if (n[0]) {
            var r = jQuery(jQuery(".itemTos", Ne)[Ue ? 1 : 0]);
            if (
              (r.width(e),
              r.height(i),
              n.width(e),
              n.height(i),
              l > i || (Oe && G.dt))
            )
              n.hide();
            else if ((n.show(), be.isPanorama))
              n.find(".itemTvo")
                .empty()
                .width(d)
                .append(jQuery(t.ImageStrip.getImage("panorama")))
                .css(I, (i - u) / 2);
            else if (!Oe) {
              var o = n.find(".itemTvo"),
                c = s;
              a > i && (c = l);
              var h =
                (!be.video && be.isProcessingVideo
                  ? "processingVideo_"
                  : "video_") + c;
              o.empty()
                .width(c)
                .append(jQuery(t.ImageStrip.getImage(h)))
                .css(I, (i - c) / 2);
            }
          }
        }
        function ce(e, t) {
          var i = Pe % 2 != 0;
          if (i) {
            var n = e;
            (e = t), (t = n);
          }
          var r, a;
          0 == Qe || 0 == qe
            ? ((r = 0), (a = 0))
            : Oe || G.as
            ? 0 == e || 0 == t
              ? ((r = 0), (a = 0))
              : e / t > Qe / qe
              ? ((r = e), (a = (qe / Qe) * e))
              : ((a = t), (r = (Qe / qe) * t))
            : G.iw && G.ih
            ? ((a = qe), (r = Qe))
            : G.iw
            ? t > qe
              ? ((a = qe), (r = Qe))
              : ((a = t), (r = (Qe / qe) * t))
            : G.ih
            ? e > qe
              ? ((a = qe), (r = Qe))
              : ((r = e), (a = (qe / Qe) * e))
            : 0 == e || 0 == t
            ? ((r = 0), (a = 0))
            : e > Qe && t > qe
            ? ((a = qe), (r = Qe))
            : Qe / qe > e / t
            ? ((r = e), (a = (qe / Qe) * e))
            : ((a = t), (r = (Qe / qe) * t)),
            (r = Math.ceil(r)),
            (a = Math.ceil(a));
          var o = ke.parent();
          o.width(r).height(a),
            $B.IE && $B.V < 9 && ke.width(r).height(a),
            o.css(F, i ? 0 : Math.floor((e - r) / 2)),
            Oe
              ? o.css(I, Math.floor((t - a) / 4))
              : o.css(I, Math.floor((t - a) / 2));
        }
        function he() {
          jQuery(h + m, V).stop(!0, !0),
            Ie && (Ie.unbind(), (Ie = null)),
            we && (we.stop(!0), we.unbind(_, Ce), (we = null)),
            ke && (ke.unbind(), (ke = null));
        }
        function me() {
          var e = xe,
            i = De;
          (xe = De = null), (Oe = !1);
          var n,
            a,
            o,
            s = Ee,
            l = Be;
          if (be) {
            if (be.getRotationState() && Te)
              (xe = e),
                (De = i),
                (Qe = be.thumbnailSet.size.width),
                (qe = be.thumbnailSet.size.height);
            else if (!be.thumbnailSet || (be.audio && !G.ap)) {
              if (t.SkyDriveItem.isFolderWithCovers(be)) {
                var d = be.folder.covers,
                  u = d.length;
                u > 0 &&
                  ((Le = 0),
                  (n = d[Le]),
                  (a = r.pickThumbnail(n, s, l)),
                  (o = n.size || a),
                  (Oe = !0));
              }
            } else if (
              ((n = be.thumbnailSet),
              (a = r.pickThumbnail(n, s, l, r.isGifOrPng(be) ? 2 : null)),
              (o = be.thumbnailSet.size || a),
              l > B && !ye())
            ) {
              var c = r.pickThumbnail(n, B, B);
              (c.width == a.width && c.height == a.height) ||
                (De = n.baseUrl + c.url);
            }
            a &&
              ((Qe = o.width),
              (qe = o.height),
              (xe = n.baseUrl + a.url),
              De || (De = xe),
              (Te = a));
          }
          return e != xe;
        }
        function ge(t) {
          var i = this,
            n = jQuery(i);
          if ((V.trigger(e.pulseEventName, n.data(C)), t.type == _)) {
            var r = jQuery(jQuery(h + m, V)[Ue ? 1 : 0]);
            r.animate({ opacity: E }, P, A), (Ue = !Ue);
            var a = jQuery(jQuery(h + m, V)[Ue ? 1 : 0]);
            (ke = jQuery(b, a)),
              (Qe = n.data(v)),
              (qe = n.data(y)),
              (xe = n.attr(p)),
              (De = xe),
              ke.attr(p, xe),
              Ne.addClass(T),
              le(),
              a.animate({ opacity: 1 }, c_pulseFadeInSpeed, A);
          }
        }
        function fe(e) {
          Ne.addClass(T), De == xe && ve();
        }
        function pe(e) {
          var t = { pos: { x: e.pageX, y: e.pageY }, ev: e, bici: "CM" };
          W.contextMenu.render(be, null, t);
        }
        function ve() {
          (Ae = !0), $BSI.isLoading() && jQuery(W).trigger("perfLoad");
          var e = W.errorManager.getErrors(),
            t = e && e.length;
          if (t > 0)
            for (var i = 0; t > i; i++)
              if ("imageLoad" === e[i].code) {
                W.errorManager.removeAt(i);
                break;
              }
        }
        function ye() {
          var e = !1;
          return (
            be &&
              W &&
              (e =
                !W.isSuper &&
                !r.isViewerOwner(be) &&
                be.itemStatus &&
                be.itemStatus > 0),
            e
          );
        }
        function Ce(e) {
          Ne.addClass(T),
            He
              ? ((He = !1),
                ($e = !1),
                we.css({ opacity: 1 }),
                ke.remove(),
                (ke = we),
                J(),
                ce(Ee, Be))
              : we && we.animate({ opacity: 1 }, c_pulseFadeInSpeed),
            ve();
        }
        var Se = this;
        G = G || {};
        var be,
          _e,
          ke,
          we,
          Ie,
          xe,
          De,
          Te,
          Ae,
          Pe,
          Ee,
          Be,
          Re,
          Me,
          Fe,
          Le,
          Ue,
          Ve,
          Ne = jQuery('<span class="itemT"></span>'),
          Qe = 0,
          qe = 0,
          Oe = !1,
          He = !1,
          $e = !1;
        sutra(Ne, "$Sutra.SkyDrive.ItemTile"),
          V.append(Ne),
          $B.Full &&
            Ne.bind(S, function (e) {
              return G.sm && !e.shiftKey ? (pe(e), !1) : void 0;
            }),
          (Se.render = function (e, i, r) {
            var a = t.SkyDriveItem.areItemsSame(be, e, !0),
              o = a && _e === e.getVersion();
            (He = (!!e.getRotationState() || He) && a),
              (G = r || G),
              o && !He && Se.resize(),
              He
                ? ((Pe = e.getRotationState()),
                  (Ae = !1),
                  (be = e),
                  (_e = be.getVersion()),
                  Pe
                    ? K(e, !0, !0)
                    : me() && be.photo
                    ? (($e = !0), Y())
                    : !$e && K(e))
                : (o && Fe == i) ||
                  ((Fe = i),
                  o
                    ? we &&
                      !Fe &&
                      (Ae || (we.bind(_, Ce), n.loadImage(xe, we[0])))
                    : K(e));
          }),
          (Se.isLoaded = function () {
            return Ae;
          }),
          (Se.resize = function (e) {
            (se() || e) &&
              ((Ee > Re || Be > Me) &&
                ((Re = Ee), (Me = Be), me() && be.thumbnailSet && ke && Y()),
              le());
          }),
          (Se.dispose = function () {
            he(), Ne.unbind(), Ve && Ve.dispose();
          }),
          (Se.canPulse = function () {
            return Oe && be.folder.covers.length > 1;
          }),
          (Se.pulse = function (e) {
            var t = !1;
            if (Oe && n.isIdle()) {
              var i = be.folder.covers.length;
              if (i > 1) {
                Le = (Le + 1) % i;
                var a = Ee,
                  o = Be,
                  s = be.folder.covers[Le],
                  l = r.pickThumbnail(s, a, o);
                t = !0;
                var d = s.baseUrl + l.url;
                Ie || (Ie = jQuery("<img/>").bind(_ + " " + k + " " + w, ge)),
                  Ie.data(y, l.height).data(v, l.width).data(C, e),
                  Ie.attr(p, d);
              }
            }
            return t;
          }),
          (Se.showContextMenu = pe);
      }
      var t = wLive.Core,
        i = wLive.Controls,
        n = t.Images,
        r = (t.AleHelpers.getString, t.SkyDriveItemHelper),
        a = 128,
        o = 64,
        s = 48,
        l = 32,
        d = 30,
        u = 30,
        c = $B.Mobile ? 5 : 12,
        h = ".",
        m = "itemTos",
        g = "alt",
        f = "title",
        p = "src",
        v = "w",
        y = "h",
        C = "p",
        S = "contextmenu",
        b = "img",
        _ = "load",
        k = "error",
        w = "abort",
        I = "margin-top",
        x = "opacity",
        D = "z-index",
        T = "itemTl",
        A = "linear",
        P = (c_pulseFadeInSpeed = 1e3),
        E = 0,
        B = $B.Full ? 128 : 64,
        R = $B.rtl ? "left" : "right",
        M = $B.rtl ? "right" : "left",
        F = "margin-" + M,
        L = "visibility",
        U = "hidden",
        V = '<span class="itemTp"><img alt="{0}" title="" /></span>',
        N = ($B.Mobile ? "" : '<span class="itemTs"></span>') + V,
        Q =
          '<span class="itemTo"><span class="itemTvo"></span></span><span class="itemTos">' +
          N +
          "</span>",
        q =
          "<div class='itemTan itemTb'><div class='itemRib'><span class='itemTag itemCh'>{0}</span></div></div>",
        O =
          '<span class="itemTo itemTag"><div class="itemTan itemRib"><div class="itemName"></div></div><span class="itemTac">{0}</span></span><span class="itemTos"><div class="itemTan itemRib"><span class="itemTag itemCh">{0}</span></div>' +
          V +
          '</span><span class="itemTos">' +
          V +
          "</span>",
        H =
          '<div class="itemTan itemTb"><div class="itemName itemTag itemRib"></div></div>',
        $ =
          '<span class="itemTd"><span class="itemTdc"><span class="itemTdio"><span class="itemTdi"></span></span><span class="itemTdt"><span class="itemTdn"><span class="itemName"></span></span><span class="itemTdm"></span></span></span></span>',
        j =
          '<span class="itemTo"><span class="itemTvo"></span></span><span class="itemTos"><img class="itemTnv" src="{0}" alt="{1}" title="" /></span>',
        z = '<span class="itemTnp"></span>';
      (wLive.Controls.ItemTile = e), (e.pulseEventName = "pulse");
    })();
  }),
  define("imagebutton", ["jbase", "basecontrol"], function () {
    !(function () {
      var e = { url: "" };
      defineSubClass(
        "Shared.UI.ImageButton",
        JBase.UI.BaseControl,
        function () {
          this.buttonImage = this.createChild(JBase.UI.ImageTile);
        },
        {
          baseTag: "button",
          isDisabled: !1,
          altText: "",
          titleText: "",
          _isMouseDown: !1,
          _isMouseOver: !1,
          onDataContextChanged: function (t) {
            var i = e;
            (this.isDisabled = t.isDisabled),
              (this.altText = t.alt || ""),
              (this.titleText = t.title || ""),
              (i =
                t.isDisabled && t.disabledImage
                  ? t.disabledImage
                  : this._isMouseDown && this._isMouseOver && t.pressedImage
                  ? t.pressedImage
                  : this._isMouseOver && t.hoverImage
                  ? t.hoverImage
                  : t.image),
              this.buttonImage.setDataContext(i);
          },
          onActivate: function (e) {
            this.addElementListener(document, "mouseup", this._onMouseUp);
          },
          _onMouseDown: function () {
            return (
              (this._isMouseDown = !0),
              this.change(),
              raiseEvent(this, "mousedown", null, !0)
            );
          },
          _onDragStart: function () {
            return !1;
          },
          _onMouseUp: function () {
            return (
              (this._isMouseDown = !1),
              (this._isMouseOver = !1),
              this.change(),
              raiseEvent(this, "mouseup", null, !0)
            );
          },
          _onMouseOver: function () {
            (this._isMouseOver = !0), this.change();
          },
          _onMouseOut: function () {
            (this._isMouseOver = !1), this.change();
          },
          _onClick: function (e) {
            return raiseEvent(this, "click", e, !0);
          },
        }
      );
    })();
  }),
  define("imagebutton.html", ["imagebutton"], function () {
    (Shared.UI.ImageButton.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"' +
        generateAttributesString(
          "disabled",
          this.isDisabled,
          "title",
          this.titleText,
          "alt",
          this.altText
        ) +
        ">" +
        this.buttonImage.renderHtml() +
        "</" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        Shared.UI.ImageButton,
        [
          {
            id: 0,
            attr: [
              "disabled",
              "isDisabled",
              "title",
              "titleText",
              "alt",
              "altText",
            ],
            userActions: {
              mousedown: "_onMouseDown",
              mouseover: "_onMouseOver",
              mousemove: "_onMouseOver",
              mouseout: "_onMouseOut",
              click: "_onClick",
              dragstart: "_onDragStart",
            },
          },
        ],
        [],
        {}
      );
  }),
  define(
    "teachingbubble",
    [
      "jbase",
      "imagetile",
      "basecontrol",
      "errormanager",
      "imagebutton.html",
      "newcontroladapter",
    ],
    function () {
      !(function () {
        defineNamespace("SkyDrive.UI.TeachingBubbleAlignmentTypes", {
          topLeft: "topLeft beak",
          topMiddle: "topMiddle beak",
          topRight: "topRight beak",
          left: "left beak",
          right: "right beak",
          bottomRight: "bottomRight beak",
          bottomMiddle: "bottomMiddle beak",
          bottomLeft: "bottomLeft beak",
        }),
          defineNamespace("SkyDrive.UI.TeachingBubbleTriggerTypes", {
            openByDefault: 0,
            onClick: 1,
            onHover: 2,
            other: 3,
          }),
          defineNamespace("SkyDrive.UI.TeachingBubbleEvents", {
            dismissed: "teachingBubbleClosed",
            disposed: "teachingBubbleDisposed",
          });
        var e = SkyDrive.UI.TeachingBubbleAlignmentTypes,
          t = SkyDrive.UI.TeachingBubbleTriggerTypes,
          i = SkyDrive.UI.TeachingBubbleEvents;
        defineSubClass(
          "SkyDrive.UI.TeachingBubble",
          JBase.UI.BaseControl,
          function () {},
          {
            isVisible: !1,
            currentTop: null,
            currentRight: null,
            currentBottom: null,
            currentLeft: null,
            campaignGuid: "",
            startDate: null,
            endDate: null,
            throttle: null,
            title: "",
            bodyCopy: "",
            linkUrl: "",
            linkText: "",
            trigger: t.openByDefault,
            targetElement: null,
            isUserDismissed: !1,
            ltrAlignment: e.left,
            localeBasedBeakAlignment: e.left,
            setUserSeenFunction: null,
            onDataContextChanged: function (e) {
              var t = this;
              t.closeButton.setDataContext({
                image: JBase.UI.ImageStripHelper.getImageInfo("freClose"),
                hoverImage:
                  JBase.UI.ImageStripHelper.getImageInfo("freCloseHover"),
              }),
                mix(t, {
                  isVisible: e.isVisible,
                  campaignGuid: e.campaignGuid,
                  startDate: e.startDate,
                  endDate: e.endDate,
                  throttle: e.throttle,
                  title: e.title,
                  bodyCopy: e.bodyCopy,
                  linkUrl: e.linkUrl,
                  linkText: e.linkText,
                  trigger: e.trigger,
                  targetElement: e.targetElement,
                  isUserDismissed: e.isUserDismissed,
                  ltrAlignment: e.ltrAlignment,
                }),
                e.ltrAlignment &&
                  (t.localeBasedBeakAlignment = t.determineAlignmentForLocale(
                    e.ltrAlignment
                  )),
                t.isUserDismissed || t.positionBubble();
            },
            onActivate: function () {
              var e = this;
              e.addObjectListener(
                e.closeButton,
                "click",
                e._onCloseButtonClicked
              ),
                e.addElementListener(window, "resize", e.positionBubble),
                e.addElementListener(
                  window,
                  "orientationchange",
                  e.positionBubble
                );
            },
            onDispose: function () {
              var e = this;
              e.removeObjectListener(e.closeButton, "click"),
                e.removeElementListener(window, "resize", e.positionBubble),
                e.removeElementListener(
                  window,
                  "orientationchange",
                  e.positionBubble
                ),
                raiseEvent(e, i.disposed, e);
            },
            determineAlignmentForLocale: function (t) {
              if ($B.rtl)
                switch (t) {
                  case e.topLeft:
                    return e.topRight;
                  case e.topRight:
                    return e.topLeft;
                  case e.right:
                    return e.left;
                  case e.bottomRight:
                    return e.bottomLeft;
                  case e.bottomLeft:
                    return e.bottomRight;
                  case e.left:
                    return e.right;
                }
              return t;
            },
            positionBubble: function () {
              var t = this;
              t.setTimeout(function () {
                var i = t.targetElement.getBoundingClientRect(),
                  n = document.documentElement.clientWidth,
                  r = document.documentElement.clientHeight,
                  a = 5,
                  o = 23,
                  s = 13,
                  l = s + a,
                  d = $f.getStyle(t.targetElement, "display");
                if ((t._resetCurrentPosition(), "none" === d || "" === d))
                  t.isVisible = !1;
                else
                  switch (t.localeBasedBeakAlignment) {
                    case e.topLeft:
                      (t.currentTop = i.bottom + l + "px"),
                        (t.currentLeft = i.left - o + "px");
                      break;
                    case e.topMiddle:
                      (t.currentTop = i.bottom + l + "px"),
                        (t.currentLeft =
                          t._findMidpointOfTargetElementCoordinates(i) + "px");
                      break;
                    case e.topRight:
                      (t.currentTop = i.bottom + l + "px"),
                        (t.currentRight = n - i.right - o + "px");
                      break;
                    case e.right:
                      (t.currentTop = i.top - o + "px"),
                        (t.currentRight = n - i.left + l + "px");
                      break;
                    case e.bottomRight:
                      (t.currentBottom = r + i.top + l + "px"),
                        (t.currentRight = n - i.right - o + "px");
                      break;
                    case e.bottomMiddle:
                      (t.currentTop = i.bottom + a + "px"),
                        (t.currentLeft =
                          t._findMidpointOfTargetElementCoordinates(i) + "px");
                      break;
                    case e.bottomLeft:
                      (t.currentBottom = r - i.top + l + "px"),
                        (t.currentLeft = i.left + "px");
                      break;
                    case e.left:
                      (t.currentTop = i.top - o + "px"),
                        (t.currentLeft = i.right + l + "px");
                  }
                t._updateBindings();
              }, 0);
            },
            _findMidpointOfTargetElementCoordinates: function (e) {
              return parseInt((e.right - e.left) / 2);
            },
            _resetCurrentPosition: function () {
              var e = this;
              (e.currentTop = null),
                (e.currentRight = null),
                (e.currentBottom = null),
                (e.currentLeft = null);
            },
            _onCloseButtonClicked: function () {
              (this.isUserDismissed = !0), raiseEvent(this, i.dismissed);
            },
          }
        );
      })();
    }
  ),
  define("teachingbubble.html", ["teachingbubble"], function () {
    (SkyDrive.UI.TeachingBubble.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '" style="' +
        this.baseStyle +
        " " +
        generateStyleAttribute(
          "display",
          this.isVisible,
          "top",
          this.currentTop,
          "left",
          this.currentLeft,
          "right",
          this.currentRight,
          "bottom",
          this.currentBottom
        ) +
        '" class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><div id="' +
        htmlAttributeEncode(this.id + "_1") +
        '"' +
        generateAttributesString("class", this.localeBasedBeakAlignment) +
        "></div>" +
        this.closeButton.renderHtml() +
        '<h1 id="' +
        htmlAttributeEncode(this.id + "_2") +
        '">' +
        htmlEncode(this.title) +
        '</h1><p id="' +
        htmlAttributeEncode(this.id + "_3") +
        '">' +
        this.bodyCopy +
        '</p><a id="' +
        htmlAttributeEncode(this.id + "_4") +
        '"' +
        generateAttributesString("href", this.linkUrl) +
        ">" +
        htmlEncode(this.linkText) +
        "</a></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.TeachingBubble,
        [
          {
            id: 0,
            css: [
              "display",
              "isVisible",
              "top",
              "currentTop",
              "left",
              "currentLeft",
              "right",
              "currentRight",
              "bottom",
              "currentBottom",
            ],
          },
          { id: 1, attr: ["class", "localeBasedBeakAlignment"] },
          { id: 2, attr: ["text", "title"] },
          { id: 3, attr: ["html", "bodyCopy"] },
          { id: 4, attr: ["href", "linkUrl", "text", "linkText"] },
        ],
        [],
        { closeButton: Shared.UI.ImageButton }
      );
  }),
  define("teachingbubblemanager", ["teachingbubble.html"], function () {
    !(function () {
      function e() {
        var e = this;
        (e._bubbles = []),
          (e._currentBubble = null),
          (e._currentBubbleDiv = null),
          mix(e, Shared.ObjectEventing),
          (e._getCampaignById = function (e) {
            var n,
              r,
              a = t.TeachingBubbleCampaigns;
            switch (e) {
              case a.odbLeftNav:
                FilesConfig.oneDriveBusinessAccountLinking &&
                  ((r = "PC.Campaigns.OdbLeftNav."),
                  (n = {
                    campaignGuid: e,
                    startDate: new Date(2014, 8, 29),
                    endDate: new Date(2016, 4, 1),
                    title: i(r + "Title"),
                    bodyCopy: i(r + "BodyCopy"),
                    linkUrl: FilesConfig.oneDriveBusinessAccountLinkingLinkUrl,
                    linkText: i(r + "LinkText"),
                    ltrAlignment: SkyDrive.UI.TeachingBubbleAlignmentTypes.left,
                    trigger:
                      SkyDrive.UI.TeachingBubbleTriggerTypes.openByDefault,
                  }));
                break;
              case a.recycleBin:
                FilesConfig.isRecycleBinBubbleEnabled &&
                  ((r = "PC.Campaigns.RecycleBin."),
                  (n = {
                    campaignGuid: e,
                    startDate: new Date(2014, 8, 29),
                    endDate: new Date(2016, 4, 1),
                    title: i(r + "Title"),
                    bodyCopy: i(r + "BodyCopy"),
                    ltrAlignment:
                      SkyDrive.UI.TeachingBubbleAlignmentTypes.bottomLeft,
                    trigger:
                      SkyDrive.UI.TeachingBubbleTriggerTypes.openByDefault,
                  }));
                break;
              case a.addToOneDrive:
                FilesConfig.isAddToOneDriveBubbleEnabled &&
                  (n = {
                    campaignGuid: e,
                    startDate: new Date(2015, 0, 1),
                    endDate: new Date(2018, 0, 1),
                    title: i("GF.CreateMountPointBubbleTitle"),
                    bodyCopy: i("GF.CreateMountPointDescription"),
                    linkUrl: "http://go.microsoft.com/fwlink/p/?LinkId=389986",
                    linkText: i("GF.MountPoint.ModalDialogTextLearnMore"),
                    ltrAlignment:
                      SkyDrive.UI.TeachingBubbleAlignmentTypes.topLeft,
                    trigger:
                      SkyDrive.UI.TeachingBubbleTriggerTypes.openByDefault,
                  });
            }
            return n;
          }),
          (e.addBubbleByCampaignId = function (t, i) {
            var r = e._getCampaignById(t);
            if (r) {
              var a = new SkyDrive.UI.TeachingBubble();
              return (
                a.setDataContext({
                  campaignGuid: r.campaignGuid,
                  startDate: r.startDate,
                  endDate: r.endDate,
                  throttle: r.throttle,
                  title: r.title,
                  bodyCopy: r.bodyCopy,
                  linkUrl: r.linkUrl,
                  linkText: r.linkText,
                  trigger: r.trigger,
                  targetElement: i,
                  isUserDismissed: r.isUserDismissed,
                  ltrAlignment: r.ltrAlignment,
                }),
                e.addObjectListener(a, n.disposed, e.removeBubble),
                e.addBubble(a),
                a
              );
            }
          }),
          (e.showNextBubble = function () {
            var e = this,
              t = e.getNextBubble();
            e.clearCurrentBubble(), t && e._setCurrentBubble(t);
          }),
          (e._setCurrentBubble = function (e) {
            var i = this;
            (i._currentBubble = e),
              i._currentBubble.setDataContext({ isVisible: !1 });
            var r = ce("div");
            setHtml(r, i._currentBubble.renderHtml()),
              document.body.appendChild(r),
              (i._currentBubbleDiv = r),
              i._currentBubble.activate();
            var a = t.ViewContext.getInstance(),
              o = a.viewParams,
              s = !(!o.forceBubble || "1" !== o.forceBubble),
              l = i._currentBubble;
            i._getBubbleUserFact(
              l,
              function (e) {
                (e.d || e.v >= 2) && !s
                  ? i.showNextBubble()
                  : (l.setDataContext({ isVisible: !0 }),
                    i.addObjectListener(
                      l,
                      n.dismissed,
                      i.onCurrentBubbleChanged
                    ),
                    (l.setUserSeenFunction = setTimeout(function () {
                      l.isVisible &&
                        i._getBubbleUserFact(l, function (e) {
                          (e.v = e.v ? ++e.v : 1), i._setBubbleUserFact(l, e);
                        });
                    }, 750)));
              },
              !0
            );
          }),
          (e.onCurrentBubbleChanged = function () {
            if (e._currentBubble.isUserDismissed) {
              var t = e._currentBubble;
              e._getBubbleUserFact(
                t,
                function (i) {
                  (i.d = !0), e._setBubbleUserFact(t, i);
                },
                !0
              );
            }
            e.showNextBubble();
          }),
          (e.clearCurrentBubble = function () {
            e._currentBubble &&
              (clearTimeout(e._currentBubble.setUserSeenFunction),
              (e._currentBubbleDiv.innerHTML = ""),
              e._currentBubble.dispose()),
              (e._currentBubble = null);
          }),
          (e.removeBubble = function (e) {
            var t = this;
            if (t._currentBubble === e) t.clearCurrentBubble();
            else {
              var i = t._bubbles.indexOf(e);
              i > -1 && t._bubbles.splice(i, 1);
            }
          }),
          (e.addBubble = function (e) {
            this._bubbles.unshift(e);
          }),
          (e.getNextBubble = function () {
            return this._bubbles.pop();
          }),
          (e._getBubbleUserFact = function (e, i, n) {
            SkyDrive.Core.UserInfoHelpers.getUserInfo(n).then(function (n) {
              var r = {};
              if (n.info)
                for (var a = 0; a < n.info.length; a++)
                  if (
                    t.StringHelpers.caseInsensitiveStringEquals(
                      n.info[a].id,
                      e.campaignGuid
                    )
                  ) {
                    r = JSON.parse(n.info[a].data);
                    break;
                  }
              i(r);
            });
          }),
          (e._setBubbleUserFact = function (e, i) {
            SkyDrive.Core.UserInfoHelpers.setUserInfo(
              t.JSONConstants.UserFactInfoType.BubbleControl,
              t.JSONConstants.UserFactInfoAction.InsertUpdate,
              null,
              e.campaignGuid,
              JSON.stringify(i)
            );
          });
      }
      var t = wLive.Core,
        i = t.AleHelpers.getSkyString,
        n = SkyDrive.UI.TeachingBubbleEvents;
      defineNamespace("wLive.Core.TeachingBubbleCampaigns", {
        odbLeftNav: "49FEA7F9-6B31-4C2C-95EC-A9246E51D22C",
        recycleBin: "25A2A8CC-1E45-4638-8975-8BDCB25EA8D1",
        addToOneDrive: "33C1BB8C-0E67-4D1F-959D-39CCF4E5C4DE",
      }),
        (t.TeachingBubbleManager = e);
    })();
  }),
  define("softblockenum", ["wliveloaded", "alehelpers"], function () {
    wLive.Core.SoftBlockEnum = {
      MoveAction: 0,
      RenameAction: 1,
      DeleteAction: 2,
    };
  }),
  define("softblock", ["softblockenum"], function () {
    !(function () {
      function e(e, t, u, c) {
        function h() {
          var t = R ? x : I,
            i = u.name + (u.extension ? u.extension : "");
          switch (((S = w.format(i)), e)) {
            case r.MoveAction:
              (_ = D), (b = t.format(D));
              break;
            case r.RenameAction:
              (_ = T), (b = t.format(T));
              break;
            case r.DeleteAction:
              (_ = A), (b = t.format(A));
          }
        }
        function m(e, t, i) {
          "action" === i ? y && y() : C && C();
        }
        function g() {
          window.$icm && $icm.removeAllICsByNamespace(s);
        }
        function f(e) {
          g();
          var t = [];
          d++,
            t.push([e, o + d]),
            t.length &&
              $icm.createICsFromCids(a, t, p, { namespace: s, showICCard: !0 });
        }
        function p(e, t) {
          if (t) {
            var i = jQuery("#sbICBox", B);
            i.append(t.render()), t.activate();
          }
        }
        var v,
          y,
          C,
          S,
          b,
          _,
          k = this,
          w = n("SoftBlock.Title"),
          I = n("SoftBlock.MessageSame"),
          x = n("SoftBlock.MessageOther"),
          D = n("SoftBlock.Move"),
          T = n("SoftBlock.Rename"),
          A = n("SoftBlock.DeleteCommand"),
          P = n("SoftBlock.CancelButton"),
          E = null,
          B = null,
          R = (c.cid && t !== c.cid) || !1;
        (k.dispose = function () {
          g(), v && v.dismiss();
        }),
          (k.show = function (e, t) {
            (y = e), (C = t);
            var n = document.createElement("div");
            (n.innerHTML = l),
              (B = jQuery(n)),
              B.addClass("sky_sb"),
              (E = jQuery("#sbMsgTxt", B)),
              h(),
              c.dcid &&
                R &&
                require(["ic"], function () {
                  $Do.when("$ic", 0, function () {
                    f(c.dcid);
                  });
                }),
              E.text(b),
              require(["modaldialog", "doregister"], function () {
                v = i.Notifications.createModalDialog({
                  buttons: { action: _, close: P },
                  title: S,
                  content: n,
                });
                var e = jQuery(v);
                e.bind({
                  "aftershow._dlg": function (e, t) {
                    var i = jQuery(".UserContent");
                    sutra(i, "$Sutra.SkyDrive.SoftBlockPopover"),
                      sutra(
                        i.find(".UserTitle"),
                        "$Sutra.SkyDrive.SoftBlockTitle"
                      ),
                      sutra(
                        i.find("button[name='action']"),
                        "$Sutra.SkyDrive.SoftBlockActionBtn"
                      ),
                      sutra(
                        i.find("button[name='close']"),
                        "$Sutra.SkyDrive.SoftBlockCancelBtn"
                      ),
                      sutra(E, "$Sutra.SkyDrive.SoftBlockMessage");
                  },
                  "afterdismiss._dlg": function (t, i) {
                    e && e.unbind("._dlg"), (e = null), (v = null);
                  },
                  "buttonclick._dlg": m,
                }),
                  v.show();
              });
          });
      }
      var t = wLive.Core,
        i = wLive.Controls,
        n = t.AleHelpers.getPCString,
        r = t.SoftBlockEnum,
        a = "SoftBlockTemplate",
        o = "softBlockIc_",
        s = "Folders_SoftBlock",
        l =
          '<div id="sbMsgBox"><p id="sbMsgTxt"></p></div><div id="sbICBox"></div>',
        d = 0;
      i.SoftBlock = e;
    })();
  }),
  define(
    "commandbarhelper",
    [
      "jquery-1.7.2",
      "wliveloaded",
      "basecontrol",
      "browserstorage",
      "skymode",
      "alehelpers",
      "errormanager",
      "skywebitemprovider",
      "newcontroladapter",
      "filetypehelper",
      "itemactionhelper",
      "droppablenavlink",
      "selectionmanager",
      "imagestrip",
      "commandmanager",
      "skydriveitemhelperextended",
      "domhelpers",
      "eventhelpers",
      "actionmanager",
      "operationmanager",
      "multiselectlinks",
      "beforeunloadmanager",
      "inlineerror",
      "loadingcue",
      "placeholderinput",
      "quotapane.html",
      "ag",
      "quickview",
      "olditemtile",
      "teachingbubblemanager",
      "softblock",
    ],
    function () {
      !(function () {
        var e = wLive.Core,
          t = wLive.Controls,
          i = e.AleHelpers.getPCString,
          n =
            window.$CommandBar &&
            window.$CommandBar.getDataModel &&
            window.$CommandBar.getDataModel().isLightTheme
              ? "Dark"
              : "Light",
          r = "cb_",
          a = FilesConfig.useClientHeader,
          o = (SkyDrive.UI.Constants.screenSizes, { small: !1, large: !0 }),
          s = { small: "small-screen", large: "" };
        defineNamespace("wLive.Controls.CommandBarHelper", {
          populateSharedCommands: function (t, i, n, r, a, o) {
            this._populateSharedCommands(
              t,
              i,
              n,
              r,
              a,
              o,
              e.CommandManager.CommandSetEnum.DefaultCommands
            );
          },
          populateFolderCreateCommands: function (t, i, n, r, a, o) {
            this._populateSharedCommands(
              t,
              i,
              n,
              r,
              a,
              o,
              e.CommandManager.CommandSetEnum.FolderCreateCommands
            );
          },
          populateOneUpCommands: function (t, i, n, r, a, o) {
            this._populateSharedCommands(
              t,
              i,
              n,
              r,
              a,
              o,
              e.CommandManager.CommandSetEnum.OneUpCommands
            );
          },
          populatePhotosViewCommands: function (t, i, n, r, a, o) {
            this._populateSharedCommands(
              t,
              i,
              n,
              r,
              a,
              o,
              e.CommandManager.CommandSetEnum.PhotosViewCommands
            );
          },
          _populateSharedCommands: function (s, l, d, u, c, h, m) {
            var g = this;
            h = h || "";
            var f,
              p = function (e, t) {
                f = f || e;
                var n = i(e.stringId + h + "Command") || e.string,
                  r = mix({}, e.action),
                  o = {};
                r.screenSizes && mix(o, r.screenSizes),
                  e.screenSizes && mix(o, e.screenSizes),
                  (r.screenSizes = o),
                  a
                    ? g.createNavLinkContext(r, e.sutraId, n, t, "CB")
                    : g.createNavLink(r, e.sutraId, n, t, "CB");
              },
              v = function (e, s, l, d) {
                var u = s,
                  c = [];
                l(c);
                var m = c.length;
                if (m) {
                  var f;
                  if (1 === m) f = c[0];
                  else {
                    var p = e + h + "Menu",
                      v = i(d && d.stringId ? d.stringId : p),
                      y =
                        d && d.imageStripOptions
                          ? d.imageStripOptions + n
                          : null,
                      C = g.createNavLinkElement(v, y),
                      S = e ? r + e.toLowerCase() : null,
                      b = t.Menu.create({ html: C, id: S, linkId: S }),
                      _ = mix({}, o);
                    if ((d.screenSizes && mix(_, d.screenSizes), a)) {
                      var k = new Shared.UI.NavItemDataContext({
                        text: v,
                        type: "Menu",
                        childItems: c,
                        id: S,
                        chevronDark: !1,
                        imageData: y
                          ? JBase.UI.ImageStripHelper.getImageInfo(y)
                          : null,
                        sutra: "$Sutra.SkyDrive." + p,
                        baseClass: g._getBaseClass(_),
                      });
                      (c[m - 1].includeSeparator = !1), (f = k);
                    } else {
                      for (var w = 0; m > w; w++) b.push(c[w]);
                      c[m - 1].removeSeparator(),
                        (f = b),
                        sutra(b._$a, "$Sutra.SkyDrive." + p);
                    }
                  }
                  u.push(f);
                }
              },
              y = function (e) {
                var t = e.array || e,
                  i = t.length;
                if (i) {
                  var n = t[i - 1];
                  n.removeSeparator
                    ? (n.removeSeparator(), n.addSeparator())
                    : (n.includeSeparator = !0);
                }
              };
            e.CommandManager.processCommands(s, l, d, c, p, v, y, u, m);
          },
          initializeCommandBar: function (e, t) {
            if (window.$CommandBar) {
              sutra($CommandBar.$obj, t);
              var i = e.actionManager.getAction("SkyDriveRoot");
              if (i && $CommandBar.getDataModel) {
                var n = $CommandBar.getDataModel().logo;
                n.setProperty("url", i.url);
              }
              return $CommandBar;
            }
          },
          createNavLinkContext: function (t, i, n, r, a, s) {
            var l = this,
              d = t.skyCmd;
            d &&
              (t.click = e.BiciHelpers.prependBiciReportClickAction(
                t.click,
                d,
                a
              ));
            var u = t.target;
            t.url && 0 === t.url.indexOf("http") && (u = u || "_top"),
              (t.text = n),
              (t.target = u),
              (t.sutra = "$Sutra.SkyDrive." + i + "Command"),
              (t.imageData = s
                ? JBase.UI.ImageStripHelper.getImageInfo(s)
                : null);
            var c = mix({}, o);
            t.screenSizes && mix(c, t.screenSizes),
              (t.baseClass = l._getBaseClass(c));
            var h = new Shared.UI.NavItemDataContext(t);
            return r.push(h), h;
          },
          createNavLink: function (i, n, r, a, o, s) {
            var l = null,
              d = i.skyCmd;
            d &&
              (i.click = e.BiciHelpers.prependBiciReportClickAction(
                i.click,
                d,
                o
              )),
              (i.html = this.createNavLinkElement(r, s)),
              (l = t.NavLink.create(i));
            var u = i.url,
              c = i.target;
            return (
              u && 0 === u.indexOf("http") && (c = c || "_top"),
              c && l._$a.attr("target", c),
              sutra(l._$a, "$Sutra.SkyDrive." + n + "Command"),
              a.push(l),
              l
            );
          },
          createNavLinkElement: function (e, t) {
            var i = jQuery(_ce("span"));
            return (
              t
                ? (i.append(wLive.Core.ImageStrip.getImage(t)),
                  i.append("&nbsp;" + e.encodeHtml()))
                : i.text(e),
              i
            );
          },
          _getBaseClass: function (e) {
            var t = "";
            for (var i in s) s.hasOwnProperty(i) && e[i] && (t += " " + s[i]);
            return t;
          },
        });
      })();
    }
  ),
  define("filesnotificationbar", ["commandbarhelper"], function () {
    !(function () {
      function e(e) {
        function t() {
          c && h.removeChangeListener(c);
        }
        function d() {
          h.render(c);
        }
        function u(e) {
          return c && (c.clear(), c.invalidate()), !1;
        }
        var c,
          h = this,
          m = i + n++;
        e.html(r);
        var g = e.find(".setNBContainer").hide(),
          f = g.find(".setNBContent"),
          p = g.find(".setNBDismiss");
        p.bind("click" + m, u).html(wLive.Core.ImageStrip.getImage("close", l)),
          (h.dispose = function () {
            t(), p.unbind(m);
          }),
          (h.bind = function (e) {
            t(),
              (c = e),
              c &&
                h.addChangeListener(
                  c,
                  d,
                  "SkyDriveWeb_Internal_Control_NotificationBar_ItemSetChanged"
                );
          }),
          (h.render = function (e) {
            if (e.getCount()) {
              var t = e.get(0),
                i = 0 === t.type ? s : 1 === t.type ? o : a;
              f.html(t.content),
                g
                  .removeClass(a + " " + o + " " + s)
                  .addClass(i)
                  .show();
            } else g.hide();
          }),
          mix(h, Shared.ObjectEventing);
      }
      var t = wLive.Core.AleHelpers.getPCString;
      wLive.Controls.NotificationBar = e;
      var i = ".NotificationBar",
        n = 0,
        r =
          '<div class="setNBContainer"><a class="setNBDismiss" href="#"></a><div class="setNBContent"></div></div>',
        a = "setNBInfo",
        o = "setNBWarning",
        s = "setNBError",
        l = t("PPickerClosePicker");
    })();
  }),
  define("editabletextoptions.vsdoc", ["filesnotificationbar"], function () {
    !(function () {
      var e = window.wLive;
      (e.Controls.EditableTextOptions = function () {}),
        (e.Controls.EditableTextOptions.prototype = {
          n: "name",
          gdt: function (e, t) {},
          snp: !1,
          v: function (e) {
            return "defaultValue";
          },
          g: !0,
          c: !1,
          ml: 0,
          de: !1,
          ca: "ClickAction",
          ac: "actionClass",
          ic: "inputClass",
          ec: "editClass",
          gem: function (e, t) {},
          get: function (e) {},
          sc: function (e) {},
          aa: "authAction",
          ea: "editAction",
          stt: !1,
        });
    })();
  }),
  define("editabletext", ["editabletextoptions.vsdoc"], function () {
    !(function () {
      function e(e, o, Q) {
        function O(e) {
          ve && ve.key === e.key && ke.render(e);
        }
        function H(e, t) {
          ve && t && ve.key === t.key && X();
        }
        function $() {
          Ke && ((Se = Ce), ie());
        }
        function j() {
          var e;
          (e = Ue ? et.height() : ot.height()), le(!0), ge("height", e);
          var t = function () {
            ke.resize(function () {
              ke.focus(!0);
            });
          };
          $B.SF_iPhone ? t() : setTimeout(t, 0);
        }
        function z(e) {
          var t = Ae && Ae(o, e);
          return t || W(e);
        }
        function W(e) {
          return e[Te];
        }
        function G(e) {
          var t = e.snippet || "";
          t && it.html("..." + r.highlightAndEncodeField(e, "snippet") + "...");
        }
        function K(e, i) {
          var n = Pe || (_e && !Ne);
          if (!et || n !== ("A" === et[0].nodeName)) {
            et && et.remove();
            var r = n ? "a" : "span";
            (et = jQuery(
              "<" +
                r +
                ' class="' +
                l +
                (Ee ? " " + Ee : "") +
                '"><span class="' +
                d +
                '"></span>' +
                (Oe ? '<span class="' + u + '"></span>' : "") +
                "</" +
                r +
                ">"
            )),
              fe(et, D, Y),
              (tt = jQuery("." + d, et)),
              sutra(tt, "$Sutra.SkyDrive.EditableTextCurrentText"),
              (it = jQuery("." + u, et)),
              ot.append(et);
          }
          (e = e && e.trim()),
            e
              ? et.removeClass(h)
              : _e && (et.addClass(h), Q.v && (e = Q.v(ve))),
            (e = e || ""),
            i ? tt.html(e) : tt.text(e),
            He && ((Q.v && Q.v(ve) !== e) || void 0 === Q.v)
              ? tt.attr(M, e)
              : tt.removeAttr(M);
          var a;
          Pe && (a = o.actionManager.getAction(Pe, ve)),
            a
              ? (t.ActionManager.setATagAction(a, et), et.removeClass(m))
              : ("A" === et[0].nodeName &&
                  et.attr("href", x).bind(D, function (e) {
                    e.preventDefault();
                  }),
                et.addClass(m));
        }
        function J() {
          we.clear(), (Ce = !1), rt && rt.removeClass(y);
        }
        function X() {
          _e && !Ke && (j(), rt.val(W(ve)));
        }
        function Z(e) {
          if ((J(), Se)) Se = !1;
          else {
            var t = qe ? qe(ve) : n("UpdateItemErrorTitle"),
              i = jQuery("<span>" + t + " " + e + "</span>");
            we.add({ $element: i, priority: 0, type: 0 }),
              (Ce = !0),
              j(),
              rt && rt.addClass(y);
          }
        }
        function Y() {
          return Ne ? void 0 : (X(), !1);
        }
        function ee(e) {
          if (Ke) {
            J(), (Se = !1);
            var t,
              i = e.which;
            i === F ? (t = ne) : i === L && (t = ie),
              t
                ? (t(), e.preventDefault())
                : Le && nt.text(rt.val() + String.fromCharCode(i));
            var n = (nt[0].scrollHeight, nt[0].scrollHeight);
            rt.innerHeight() < n && ge("height", n), e.stopPropagation();
          }
        }
        function te(e) {
          e && (at && at.hide(), me(w));
        }
        function ie() {
          function e() {
            if (
              l &&
              ((o.pendingFolderToCreate = !1),
              ve.invalidate(),
              te(l),
              0 === o.selectionManager.getSelection().selectionCount)
            ) {
              var e = o.itemProvider.peekParent(ve);
              if (e) {
                var t = o.itemProvider.getChildren(e).indexOf(ve, !0);
                t > -1 && o.selectionManager.clickSelect(e, t);
              }
            }
            $e && $e(ve),
              "caption" == Te && (o.tokenHasBeenRedeemed = !0),
              de(!1),
              (Se = !1);
          }
          function r(e, d) {
            t.StringHelpers.caseInsensitiveStringEquals(ve.id, d.id) &&
              (e && e.error && e.error.code === a
                ? require(["softblock"], function () {
                    if (
                      t.StringHelpers.caseInsensitiveStringEquals(ve.id, d.id)
                    ) {
                      var n = e.error.data,
                        a = n && jQuery.parseJSON(n);
                      (be = new i.SoftBlock(
                        N.RenameAction,
                        o.callerCid,
                        ve,
                        a,
                        i.Notifications
                      )),
                        be.show(
                          function () {
                            de(!0),
                              Ie.updateItemProperty(
                                ve,
                                Te,
                                s,
                                function () {
                                  de(!1);
                                },
                                r,
                                !0,
                                Me
                              );
                          },
                          function () {
                            K(u), se(!0);
                          }
                        );
                    }
                  })
                : (rt.val(s),
                  K(u),
                  te(l),
                  Z(e.error.message || n("UpdateItemError")))),
              de(!1);
          }
          var s = rt.val();
          s = s.trim();
          var l = ve._isNewFolder;
          l &&
            (at
              ? at.show()
              : ((at =
                  $f &&
                  jQuery(
                    $f.createLoading({
                      returnMarkup: !0,
                      useTransparentFallback: !0,
                    })
                  )),
                ot.prepend(at)),
            he(w));
          var d = Qe && Qe(ve, s);
          if (d) te(l), Z(d);
          else {
            var u = W(ve);
            s !== (et.hasClass(h) ? "" : u) || ve._isNewFolder
              ? (K(s), de(!0), se(!1), ve.updateItemProperty(Te, s, e, r, Me))
              : ne();
          }
          return !1;
        }
        function ne() {
          return se(!0), !1;
        }
        function re() {
          fe(rt, E, $), fe(rt, R, ee);
        }
        function ae() {
          rt && rt.unbind(), V.unbind(B, $);
        }
        function oe() {
          if (Ke) {
            var t = Ue ? e : ot,
              i = t.offset();
            if (((i.top && i.left) || (i = Ge), i.top && i.left)) {
              Ge = i;
              var n = $B.rtl ? 3 : 0;
              (i.left = i.left - xe.offset().left - n), st.show(), st.offset(i);
            }
          }
        }
        function se(e) {
          if (Ke && e && ve && ve._isNewFolder) {
            ue(), (o.pendingFolderToCreate = !1);
            var t = o.itemProvider.peekParent(ve);
            t && (t.removePinnedSubfolder(ve), t.invalidate());
          } else ue();
        }
        function le(t) {
          Ke != t &&
            ((Ke = t),
            Ke
              ? ((nt = jQuery(Ye)),
                (rt = jQuery(I + _, st)),
                e.append(nt),
                he(p),
                sutra(rt, "$Sutra.SkyDrive.EditableTextInput"),
                st.hide().appendTo(xe),
                re())
              : (ae(), st.remove(), unsutra(rt), me(p), nt && nt.remove()),
            ce());
        }
        function de(e) {
          Je != e && ((Je = e), ce());
        }
        function ue() {
          Ke && J(), le(!1);
        }
        function ce() {
          Je || Ke ? Ie.suspendChangeEvents() : Ie.resumeChangeEvents();
        }
        function he(t) {
          e.addClass(t), st.addClass(t);
        }
        function me(t) {
          e.removeClass(t), st.removeClass(t);
        }
        function ge(e, t) {
          if (t) {
            rt && rt[e](t);
            var i = $B.IE ? t - 1 : t;
            nt && nt[e](i);
          }
        }
        function fe(e, t, i) {
          e && e.unbind(t, i).bind(t, i);
        }
        function pe() {
          return document.getElementById("filesPageContent")
            ? jQuery("#filesPageContent")
            : jQuery("#rootPageContent");
        }
        var ve,
          ye,
          Ce,
          Se,
          be,
          _e,
          ke = this,
          we = o.errorManager,
          Ie = o.dataModel,
          xe = pe(),
          De = jQuery(o),
          Te = Q.n,
          Ae = Q.gdt,
          Pe = Q.ca,
          Ee = Q.ac,
          Be = Q.ic,
          Re = Q.ec,
          Me = Q.aa,
          Fe = Q.ea,
          Le = Q.g,
          Ue = Q.c,
          Ve = Q.ml,
          Ne = Q.de,
          Qe = Q.gem,
          qe = Q.get,
          Oe = Q.snp,
          He = Q.stt,
          $e = Q.sc,
          je = !1,
          ze = q(),
          We = I + ze,
          Ge = { top: 0, left: 0 },
          Ke = !1,
          Je = !1,
          Xe = " " + k + (Be ? " " + Be : ""),
          Ze = Ve ? ' maxlength="' + Ve + '"' : "",
          Ye =
            '<textarea class="' +
            b +
            Xe +
            '" disabled="disabled"' +
            Ze +
            "></textarea>";
        e.html('<span class="' + c + '"></span>'),
          e.addClass(s).addClass(Le ? C : "");
        var et,
          tt,
          it,
          nt,
          rt,
          at,
          ot = jQuery(I + c, e),
          st = jQuery(
            '<div id="' +
              ze +
              '" class="' +
              f +
              (Ne ? " " + v : "") +
              (Re ? " " + Re : "") +
              '"><textarea class="' +
              _ +
              Xe +
              '"' +
              Ze +
              "></textarea></div>"
          );
        sutra(e, "$Sutra.SkyDrive.EditableText"),
          Fe && De.bind(Fe, H),
          Ue && he(S),
          (ke.bindAll = function () {
            ke.addObjectListener(
              Ie,
              t.DataModel.dataChangedEvent,
              O,
              "SkyDriveWeb_Internal_Control_EditableText_DataChanged"
            ),
              fe(et, D, Y),
              Ke && re();
          }),
          (ke.isEditing = function () {
            return Ke;
          }),
          (ke.getContainer = function () {
            return e;
          }),
          (ke.focus = function (e) {
            try {
              Ke ? (rt.focus(), e && rt.select()) : et.focus();
            } catch (t) {}
          }),
          (ke.render = function (e) {
            if (
              !(
                (t.SkyDriveItem.areItemsSame(ve, e) && ye === z(e)) ||
                (Ke && ve.key === e.key)
              )
            ) {
              se(!0),
                (ve = e),
                (ye = z(ve)),
                (_e = !!o.actionManager.getAction(Me, ve)),
                !Ne && _e ? he(g) : me(g);
              z(ve) || "";
              K(r.highlightAndEncodeField(ve, Te), !0), G(e);
            }
            Ue && ke.resize();
          }),
          (ke.resize = function (t) {
            var i;
            (i = Ue ? e.width() - 2 : ot.width() - 2),
              Ue && !Ke
                ? tt &&
                  (ot.width("auto"), ot.width(Math.min(tt.width() + 21, i)))
                : ge("width", i);
            var n = function () {
              oe(), t && t();
            };
            $B.SF_iPhone ? n() : setTimeout(n, 0);
          }),
          (ke.dispose = function () {
            je ||
              ((je = !0),
              se(!0),
              J(),
              Fe && De.unbind(Fe, H),
              U.unbind(We),
              et && et.unbind(),
              ae()),
              be && (be.dispose(), (be = null));
          }),
          U.bind(T + We, function () {
            ke.resize();
          }),
          U.bind(A + We, oe),
          U.bind(P + We, $),
          mix(ke, Shared.ObjectEventing),
          ke.bindAll();
      }
      var t = wLive.Core,
        i = wLive.Controls,
        n = t.AleHelpers.getPCString,
        r = t.SkyDriveItemHelper,
        a = 9001,
        o = "et_",
        s = o + "main",
        l = o + "text",
        d = o + "primary",
        u = o + "snippet",
        c = o + "textContainer",
        h = o + "empty",
        m = o + "inactive",
        g = o + "editable",
        f = o + "edit",
        p = o + "editing",
        v = o + "outline",
        y = o + "error",
        C = o + "growable",
        S = o + "centered",
        b = o + "hinput",
        _ = o + "input",
        k = o + "textarea",
        w = o + "processing",
        I = ".",
        x = "#",
        D = "click",
        T = "resize",
        A = "scroll",
        P = "mousewheel",
        E = "blur",
        B = "mouseup",
        R = "keydown",
        M = "title",
        F = 27,
        L = 13,
        U = jQuery(window),
        V = jQuery(document),
        N = t.SoftBlockEnum,
        Q = 0,
        q = function () {
          return o + Q++;
        };
      (i.EditableText = e),
        (e.RenameOptions = {
          n: "name",
          gdt: function (e, t) {
            return t.getDisplayName(e);
          },
          g: !1,
          gem: function (e, t) {
            return r.getErrorMessageForNewItemName(t, e && e.extension);
          },
          get: function (e) {
            return e._isNewFolder
              ? n("NewFolderErrorTitle")
              : n("RenameErrorTitleFormat").format(e.name);
          },
          aa: "Rename",
          ea: "Rename",
        }),
        (e.CaptionOptions = {
          n: "caption",
          aa: "ModifyCaption",
          get: function (e) {
            return n(e.photo ? "CaptionErrorTitle" : "DescriptionErrorTitle");
          },
          ml: 255,
          v: function (e) {
            return n(e.photo ? "AddCaption" : "AddDescription");
          },
        }),
        defineSubClass(
          "SkyDrive.UI.EditableText",
          SkyDrive.UI.LegacyControlAdapter,
          function () {},
          {
            controlType: i.EditableText,
            options: {},
            onInitialize: function () {
              var e = this;
              e.constructorOption = e.options;
            },
          }
        );
    })();
  }),
  define("infopane", ["editabletext"], function () {
    !(function () {
      function e(S, b, _) {
        function k() {
          q.addObjectListener(
            H,
            t.DataModel.dataChangedEvent,
            A,
            "SkyDriveWeb_Internal_Control_InfoPane_DataChanged"
          ),
            jQuery(O).bind(t.SelectionManager.SelectionChangedEvent + v, E);
        }
        function w() {
          return B === M;
        }
        function I() {
          var i,
            n = b.infoPaneClosed;
          return (
            n
              ? (W.removeClass(h), (i = "IPE"))
              : (W.addClass(h),
                jQuery(b).trigger("disableTagging"),
                (i = "IPC")),
            t.BiciHelpers.reportClickAction(i, b.infoPaneBiciLoc),
            T(),
            (b.infoPaneClosed = !n),
            S.trigger(e.EventNames.resize),
            b.infoPaneClosed || L || x(M, F),
            !1
          );
        }
        function x(r, a, o) {
          var s = t.SkyDriveItem.areItemsSame(M, r);
          if (((M = r), (F = a), (L = !1), !b.infoPaneClosed && r)) {
            b.infoPaneBiciLoc = a || b.infoPaneBiciLoc;
            var l = n.isGroupRoot(r),
              d = !1;
            if (
              (J.show(), r.isPlaceholder || r._isLoadingItem || r._isNewFolder)
            )
              X && ((X = !1), S.hide(), (d = !0));
            else {
              r.partialData && !s && r.extendPartialData(P),
                X || ((X = !0), S.show(), (d = !0)),
                l
                  ? (G.hide(), (b.infoPaneBiciLoc = "IP"))
                  : (Z && Z.render(r), G.show());
              for (var u = 0; u < te.length; u++) te[u].render(r);
              window.require(
                [
                  "infopanecomments",
                  "infopanegroupmembership",
                  "infopaneinformation",
                  "infopanelocation",
                  "infopanesharing",
                  "infopanepeople",
                  "infopanetags",
                  "infopaneextractedtext",
                  "extractedtextsection.html",
                ],
                function () {
                  if (r.key === M.key && !U) {
                    var e = [];
                    e.push({
                      id: "ip_location",
                      control: i.InfoPaneLocation,
                      data: r,
                      hoverable: !1,
                    }),
                      e.push({
                        id: "ip_tags",
                        control: i.InfoPaneTags,
                        data: r,
                        hoverable: !1,
                        hidden: !0,
                      }),
                      e.push({
                        id: "ip_taglist",
                        control: i.InfoPaneTagList,
                        data: r,
                        hoverable: !1,
                        cstrOptions: j,
                      }),
                      e.push({
                        id: "ip_extractedtext",
                        control: i.InfoPaneExtractedText,
                        data: r,
                        hoverable: !1,
                        hidden: !0,
                      }),
                      n.canViewSharingInfo(r) &&
                        e.push({
                          id: "ip_sharing",
                          control: i.InfoPaneSharing,
                          data: r,
                          hoverable: !1,
                          cstrOptions: { fs: w, col: _.cs },
                        }),
                      e.push({
                        id: "ip_information",
                        control: i.InfoPaneInformation,
                        data: r,
                        hoverable: !1,
                        cstrOptions: { open: _.oi || _.pc, i: _.i },
                      }),
                      e.push({
                        id: "ip_comments",
                        control: i.InfoPaneComments,
                        data: r,
                        hoverable: !1,
                      }),
                      e.push({
                        id: "ip_groupMembership",
                        control: i.InfoPaneGroupMembership,
                        data: r,
                        hoverable: !1,
                        expanded: n.isGroupRoot(r),
                      }),
                      Y.render({ entries: e }, o),
                      (_.pc = !1);
                  }
                }
              );
            }
            _.fh && G.hide(),
              q.resize(),
              S.parent().scrollTop(0),
              d && S.trigger(e.EventNames.resize),
              (L = !0);
          }
        }
        function D(t) {
          (X = !0),
            S.show(),
            G.hide(),
            J.show(),
            ee.renderSelection(t),
            Y.render({ entries: [] }),
            q.resize(),
            S.trigger(e.EventNames.resize);
        }
        function T(e) {
          _.fh ||
            ($B.IE && $B.V < 7) ||
            (e && ($ = a.scrollTop() + d), z.width(W.width()));
        }
        function A(e) {
          M && M.key === e.key && !R && x(e);
        }
        function P(e) {
          M &&
            M.key === e.key &&
            !R &&
            (_.fh ? x(e, void 0, !0) : e.invalidate());
        }
        function E(e, t) {
          Qos.start("SkyDriveWeb_Internal_Control_InfoPane_SelectionChanged"),
            q.throttle("infoPaneSelection", 100, 100, function () {
              if (!U) {
                var e = t.selectionCount;
                if (1 == e) {
                  var i;
                  for (var n in t.indexes) {
                    var r = t.parent;
                    i = b.itemProvider.getChildren(r).get(n);
                    break;
                  }
                  i && (x(i, "IP"), b.infoPaneClosed && I(), T(!0)), (R = null);
                } else e > 1 ? (D(t), (R = t)) : (x(B, _.bici), (R = null));
              }
            }),
            Qos.end();
        }
        var B,
          R,
          M,
          F,
          L,
          U,
          V,
          N,
          Q,
          q = this,
          O = b.selectionManager,
          H = b.dataModel,
          $ = 0;
        _ = _ || {};
        var j = jQuery.extend({ tm: !1, at: !1 }, _.to);
        S.html(y);
        var z = jQuery(l + u, S);
        _.fh ? z.hide() : z.height(0);
        var W = jQuery(l + c, S),
          G = jQuery(l + f, S),
          K = jQuery(l + m, S),
          J = jQuery(l + g, S),
          X = !0;
        b.infoPaneClosed && W.addClass(h),
          sutra(J, "$Sutra.SkyDrive.InfoPaneHeader"),
          sutra(S, "$Sutra.SkyDrive.InfoPane");
        var Z,
          Y = new i.QuickView(jQuery(l + p, S), b, !0),
          ee = new i.InfoPaneHeader(J, b, _.h),
          te = [ee];
        _.fh || (Z = new i.EditableText(G, b, C)),
          (q.render = function (t) {
            var i = b.selectionManager.getSelection();
            i && i.selectionCount > 0
              ? ((B = t), E(null, i))
              : (B && M && B.key === t.key && B.key !== M.key) ||
                ((B = t), x(t, _.bici)),
              "property" === e.clickOrigin && (_.pc = !0);
          }),
          (q.toggle = I),
          (q.resize = function () {
            _.fh
              ? K.height(S.height())
              : ((V = r.height()), (N = o.height() + parseInt(o.css(s))), T());
          }),
          (q.dispose = function () {
            clearTimeout(Q), (Q = null);
            for (var e = 0; e < te.length; e++) te[e].dispose();
            Z && Z.dispose(),
              Y && Y.dispose(),
              (b.infoPaneBiciLoc = ""),
              jQuery(O).unbind(t.SelectionManager.SelectionChangedEvent + v),
              (U = !0);
          }),
          mix(q, Shared.ObjectEventing),
          mix(q, Shared.Async),
          k();
      }
      var t = wLive.Core,
        i = wLive.Controls,
        n = t.SkyDriveItemHelper,
        r = jQuery(window),
        a = jQuery(document),
        o = jQuery("#m_wf"),
        s = "padding-top",
        l = ".",
        d = 20,
        u = "ip_pl",
        c = "infopane",
        h = "ip_col",
        m = "ip_content",
        g = "ip_header",
        f = "ip_caption",
        p = "ip_quickview",
        v = ".infopane",
        y =
          '<div class="' +
          u +
          '"></div><div class="' +
          c +
          ' t_cbgc"><div class="' +
          m +
          '" tabindex="-1"><div class="' +
          g +
          '"></div><div class="c_clr"><div class="ip_scrollp"><div class="' +
          f +
          '"></div><div class="' +
          p +
          '"></div></div></div></div></div>',
        C = jQuery.extend({}, i.EditableText.CaptionOptions, {
          ec: "infoPaneCaptionEdit",
          g: !0,
        });
      (i.InfoPane = e),
        (e.EventNames = { resize: "ipResize" }),
        defineSubClass(
          "SkyDrive.UI.InfoPane",
          SkyDrive.UI.LegacyControlAdapter,
          function () {},
          {
            apiIdBase: "SkyDriveWeb_Internal_Control_InfoPane",
            controlType: i.InfoPane,
          }
        );
    })();
  }),
  define("leftnavbaritem", ["infopane"], function () {
    !(function () {
      function e(e, a, o) {
        function s(e) {
          var t = c(this);
          if (t) {
            var i = t.bici;
            i &&
              wLive.Core.BiciHelpers.reportClickAction(i.SkyCmnd, i.ClickLoc),
              l(e);
          }
        }
        function l(e) {
          var t = e.currentTarget,
            i = u(t),
            n = c(t),
            a = i.item.$quickViewContainer;
          return (
            a.trigger("unselectAll"), n.$a.addClass(r), (n.selected = !0), !1
          );
        }
        function d() {
          var e = c(this);
          return e.$a.removeClass(r), (e.selected = !1), !1;
        }
        function u(e) {
          return jQuery(e).data(t);
        }
        function c(e) {
          var t = u(e);
          return t && t.item && t.item.entries ? t.item.entries[t.index] : null;
        }
        var h,
          m = this;
        e.bind("select" + n, function () {
          h &&
            h.$quickViewContainer.trigger("unselectAll", h.$quickViewContainer);
        }),
          (m.render = function (a) {
            var u;
            if (h && h.entries)
              for (u = 0; u < h.entries.length; u++) {
                var c = h.entries[u];
                c.$el && c.$el.unbind(n);
              }
            o.$header.empty(),
              o.$header.append(a.header),
              e.empty(),
              (a.$quickViewContainer = e),
              (a.$quickViewHeader = o.$header),
              (a.$quickViewChevron = o.$chevron);
            var g = jQuery('<div class="t_hovl"></div>');
            for (u = 0; u < a.entries.length; u++) {
              var f = a.entries[u];
              f.text || "";
              (f.$a = jQuery(
                '<a class="' +
                  i +
                  'anchor" draggable="false"><span class="t_ctc">' +
                  f.text.encodeHtml() +
                  "</span></a>"
              )),
                f.selected && f.$a.addClass(r),
                f.action
                  ? wLive.Core.ActionManager.setATagAction(f.action, f.$a)
                  : f.$a.attr("href", "#"),
                (f.$el = jQuery('<div class="' + i + 'item"></div>')
                  .append(f.$a)
                  .data(t, { index: u, item: a })
                  .bind("click" + n, s)
                  .bind("select" + n, l)
                  .bind("unselect" + n, d)
                  .appendTo(g));
            }
            e.append(g),
              jQuery(h).unbind(n),
              jQuery(a).bind("render" + n, function () {
                m.render(h);
              }),
              (h = a);
          }),
          (m.dispose = function () {
            for (var t = 0; t < h.entries.length; t++) {
              var i = h.entries[t];
              i.$el.unbind(n);
            }
            e.unbind(n).empty();
          });
      }
      var t = "leftNavBarItem_event",
        i = "leftNavBar_",
        n = ".leftNavBarItem",
        r = "quickview_sel";
      wLive.Controls.LeftNavBarItem = e;
    })();
  }),
  define("leftnavbar", ["leftnavbaritem"], function () {
    !(function () {
      function e(e, t) {
        function i() {
          Trace.log("LeftNavBar.js storeHeaderExpandedState() called", E),
            h.setLocalValue(R, !G.expanded),
            h.setLocalValue(M, !K.expanded);
        }
        var r = this,
          a = t.actionManager;
        l = e;
        for (var o = 0; o < _quickViewControlItem.entries.length; o++) {
          var s = _quickViewControlItem.entries[o],
            c = s.data;
          if (c.actionName) {
            var m = c.ownerSpecific ? t.viewParams.cid : null;
            s.action = a.getAction(c.actionName, null, m);
          }
        }
        (K.onChevronToggle = i), (G.onChevronToggle = i);
        var g = !0,
          f = new u.QuickView(e, t, !0);
        e.bind("unselectAll", function (e, t) {
          t || (t = []);
          for (var i = 0; i < _quickViewControlItem.entries.length; i++) {
            var n = _quickViewControlItem.entries[i],
              r = n.data;
            r.$quickViewContainer &&
              r.$quickViewContainer.not(t).trigger("unselect");
            for (var a = 0; a < r.entries.length; a++) {
              var o = r.entries[a];
              o.$el && o.$el.not(t).trigger("unselect");
            }
          }
        }),
          (r.dispose = function () {
            i(), e.unbind("unselectAll");
            for (var n = 0; n < _quickViewControlItem.entries.length; n++) {
              var r = _quickViewControlItem.entries[n],
                a = r.data;
              a.dispose && a.dispose(t);
            }
            e.empty();
          }),
          (r.render = function (i) {
            if (i) {
              if (!O) {
                for (var r = 0; r < _quickViewControlItem.entries.length; r++) {
                  var a = _quickViewControlItem.entries[r],
                    o = a.data;
                  o.init && o.init(t);
                }
                O = !0;
              }
              if (g) {
                (g = !1), f.render(_quickViewControlItem);
                for (var s = 0; s < _quickViewControlItem.entries.length; s++) {
                  var l = _quickViewControlItem.entries[s],
                    u = l.data;
                  u.firstRender && u.firstRender(t);
                }
                sutra(e, "$Sutra.SkyDrive.LeftNavBar"),
                  sutra(
                    e.find(".leftNavBar_anchor_err"),
                    "$Sutra.SkyDrive.ErrorMessage"
                  ),
                  d.StringHelpers.caseInsensitiveStringEquals(
                    $Config.mkt,
                    "ML-IN"
                  ) &&
                    e.find(".quickview_header_text > span").addClass("ml-in");
              }
              n(t, i);
            }
          });
      }
      function t(e) {
        e.selected = !0;
        var t = e.data;
        t.$quickViewContainer && t.$quickViewContainer.trigger(f);
      }
      function i(e) {
        e.selected = !0;
        var t = e.$el || (e._internal ? e._internal.$element : null);
        t && t.trigger(f);
      }
      function n(e, n) {
        var r,
          a = !1,
          o = e.viewParams,
          s = e.callerCid,
          u = d.StringHelpers.caseInsensitiveStringEquals(o.cid, s);
        if (o.did) {
          var c = e.deviceItemSet.getByKey(o.did.toLowerCase());
          if (c) {
            var h = K.data.entries;
            for (r = 0; r < h.length; r++) {
              var g = h[r];
              d.StringHelpers.caseInsensitiveStringEquals(g.id, o.did) &&
                ((g.selected = a = !0), i(g));
            }
          }
        } else if (o.group && 1 == o.group) {
          var f = G.data.entries;
          for (r = 0; r < f.length; r++) {
            var p = f[r];
            if (d.StringHelpers.caseInsensitiveStringEquals(p.id, o.cid)) {
              (p.selected = a = !0), i(p);
              break;
            }
          }
        } else
          o.qt == P
            ? (a = !1)
            : o.qt == A
            ? (i(z), (a = !0))
            : o.qt == D || (n && n.isBundle)
            ? (i(W), (a = !0))
            : o.cid && u
            ? "documents" != o.sc && "photos" != o.sc && (t($), (a = !0))
            : o.qt == T
            ? (i(j), (a = !0))
            : o.v == m
            ? (e.deviceItemSet.getCount() && t(K), (a = !0))
            : "QueueView" == o.v
            ? (a = !1)
            : o.v == B
            ? (t(G), (a = !0))
            : o.cid && !u
            ? (a = !1)
            : "recyclebin" == o.qt
            ? (a = !1)
            : (t($), (a = !0));
        return !a && l.trigger("unselectAll"), a;
      }
      function r(e) {
        var t = e.callerCid,
          i = g + "?cid=" + t,
          n = new d.DataRequest(i, i + "&v=" + Math.random(), null, function (
            t
          ) {
            a(t, e);
          });
        (n.apiId = "SkyDrive_Json_GetGroups"),
          (n.propertyId = "SkyDrive"),
          (n.queueId = null),
          n.start();
      }
      function a(e, t) {
        var i = e.groups;
        if (((H = e.groupInviteCount), i)) {
          var r = G.data;
          r.entries = [];
          for (var a = 0; a < i.length; a++) {
            var o = i[a];
            r.entries[a] = {
              id: o.groupId,
              text: o.displayName,
              bici: { SkyCmnd: "G", ClickLoc: "LN" },
              action: t.actionManager.getAction(
                "ViewGroup",
                null,
                o.groupId,
                !0
              ),
            };
          }
          var s = r.entries;
          if (s.length > 0 || H > 0) {
            var l =
              $.selected ||
              j.selected ||
              W.selected ||
              G.selected ||
              K.selected;
            for (
              !l &&
                n(t) &&
                r.$quickViewContainer.trigger(
                  wLive.Controls.QuickView.EventNames.Expand
                ),
                r.$quickViewContainer.trigger("show"),
                r.$quickViewHeader.prev().show(),
                jQuery(r).trigger("render"),
                a = 0;
              a < s.length;
              a++
            ) {
              var d = s[a];
              sutra(d.$el, "$Sutra.SkyDrive.GroupItem");
            }
          } else r && r.$quickViewChevron && r.$quickViewChevron.hide();
        }
      }
      function o(e) {
        if (FilesConfig.devicesLeftNavEnabled) {
          var t = e.deviceItemSet,
            i = K.data,
            n = (i.entries = []),
            r = t.getCount();
          if (
            (Trace.log("LeftNavBar.js: loadDevices() - deviceCount == " + r, E),
            r > 0)
          ) {
            for (var a = 0; r > a; a++) {
              var o = t.get(a);
              n[a] = {
                id: o.did,
                text: o.name,
                bici: { SkyCmnd: "D", ClickLoc: "LN" },
                action: e.actionManager.getAction("DefaultClick", o),
              };
            }
            i.$quickViewContainer.trigger("show");
          } else i.$quickViewContainer.trigger("hide");
          for (jQuery(i).trigger("render"), a = 0; a < n.length; a++) {
            var s = n[a];
            sutra(s.$el, "$Sutra.SkyDrive.DeviceItem");
          }
        }
      }
      var s,
        l,
        d = wLive.Core,
        u = wLive.Controls,
        c = d.AleHelpers.getPCString,
        h = window.BrowserStorage,
        m = "DevicesView",
        g = "/API/2/GetGroups",
        f = "select",
        p = "leftnavbar.",
        v = p + "myfiles.",
        y = v + "docs.",
        C = v + "photos.",
        S = p + "quickviews.",
        b = S + "mru.",
        _ = S + "allmyphotos.",
        k = v + "photos.",
        w = S + "shareddocs.",
        I = p + "groups.",
        x = "text",
        D = FilesConfig.sharedByEnabled ? "sharedby" : "shared",
        T = "mru",
        A = "allmyphotos",
        P = "search",
        E = "LeftNavBar",
        B = "GroupView",
        R = "groupsCollapsed",
        M = "devicesCollapsed",
        F = (c(y + x), c(C + x), c(v + x)),
        L = c(b + x),
        U = c(_ + x),
        V = c(k + x),
        N = c(w + x),
        Q = c(p + "devices." + x),
        q = (c(p + "getapps." + x), c(p + "managestorage." + x), "topGroup"),
        O = (d.SkyDriveItemHelper, !1),
        H = 0,
        $ = {
          id: "myfiles",
          control: u.LeftNavBarItem,
          collapsible: !1,
          selected: !1,
          bici: { SkyCmnd: "MF", ClickLoc: "LN" },
          data: {
            header: F,
            actionName: "SkyDriveRoot",
            $quickViewContainer: null,
            $quickViewHeader: null,
            firstRender: function (e) {
              sutra($.data.$quickViewHeader, "$Sutra.SkyDrive.MyFiles"),
                $.data.$quickViewContainer.parent().parent().addClass(q);
            },
            dispose: function (e) {
              $.$quickViewContainer = $.$quickViewHeader = null;
            },
            entries: [],
          },
        },
        j = {
          id: "mru",
          control: u.LeftNavBarItem,
          collapsible: !1,
          selected: !1,
          bici: { SkyCmnd: "RD", ClickLoc: "LN" },
          data: {
            header: L,
            actionName: "ViewRecentDocs",
            firstRender: function (e) {
              sutra(j.data.$quickViewHeader, "$Sutra.SkyDrive.QuickViewsMru"),
                j.data.$quickViewContainer.parent().parent().addClass(q);
            },
            dispose: function (e) {
              j.$el = j.$a = null;
            },
            entries: [],
            $quickViewContainer: null,
            $quickViewHeader: null,
          },
        },
        z = {
          id: "allmyphotos",
          control: u.LeftNavBarItem,
          collapsible: !1,
          selected: !1,
          bici: { SkyCmnd: "AMP", ClickLoc: "LN" },
          data: {
            header:
              FilesConfig.tailoredPhotos ||
              (FilesConfig.allphotosLeftNavCultures &&
                -1 !=
                  FilesConfig.allphotosLeftNavCultures.indexOf(
                    $Config.mkt.toUpperCase()
                  ))
                ? V
                : U,
            actionName: "ViewAllMyPhotos",
            firstRender: function (e) {
              sutra(
                z.data.$quickViewHeader,
                "$Sutra.SkyDrive.QuickViewsAllMyPhotos"
              ),
                z.data.$quickViewContainer.parent().parent().addClass(q);
            },
            dispose: function (e) {
              z.$el = z.$a = null;
            },
            entries: [],
            $quickViewContainer: null,
            $quickViewHeader: null,
          },
        },
        W = {
          id: "shared",
          control: u.LeftNavBarItem,
          collapsible: !1,
          selected: !1,
          bici: { SkyCmnd: "DS", ClickLoc: "LN" },
          data: {
            header: N,
            actionName: FilesConfig.sharedByEnabled
              ? "ViewSharedBy"
              : "ViewSharedDocs",
            firstRender: function (e) {
              sutra(
                W.data.$quickViewHeader,
                "$Sutra.SkyDrive.QuickViewsSharedDocs"
              );
            },
            dispose: function (e) {
              W.$el = W.$a = null;
            },
            entries: [],
            $quickViewContainer: null,
            $quickViewHeader: null,
          },
        },
        G = {
          id: "groups",
          collapsible: !0,
          control: u.LeftNavBarItem,
          expanded: !h.getLocalValue(R),
          hidden: !0,
          selected: !1,
          data: {
            header: c(I + x),
            actionName: B,
            init: function (e) {
              r(e);
            },
            firstRender: function (e) {
              sutra(G.data.$quickViewHeader, "$Sutra.SkyDrive.Groups"),
                sutra(G.data.$quickViewContainer, "$Sutra.SkyDrive.GroupItems"),
                sutra(G.data.$quickViewChevron, "$Sutra.SkyDrive.GroupChevron");
              var t = G.data,
                i = t.entries;
              i.length < 1 && 1 > H && t.$quickViewContainer.trigger("hide");
            },
            dispose: function (e) {
              G.$quickViewContainer = G.$quickViewHeader = null;
            },
            entries: [],
            $quickViewChevron: null,
            $quickViewContainer: null,
            $quickViewHeader: null,
          },
        },
        K = {
          id: "devices",
          collapsible: !0,
          control: u.LeftNavBarItem,
          expanded: !h.getLocalValue(M),
          hidden: !0,
          selected: !1,
          data: {
            header: Q,
            actionName: m,
            firstRender: function (e) {
              e.deviceItemSet &&
                ((s = function () {
                  o(e);
                }),
                Trace.log(
                  "LeftNavBar.js render(): Adding 'change' listener to deviceItemSet",
                  E
                ),
                this.addChangeListener(
                  e.deviceItemSet,
                  s,
                  "SkyDriveWeb_Internal_Control_LeftNavBar_DeviceItemSetChanged"
                ),
                (e.deviceItemSet.isListening = !0),
                e.deviceItemSet.isLoaded &&
                  (Trace.log(
                    "LeftNavBar.js render(): calling loadDevices()",
                    E
                  ),
                  o(e))),
                sutra(K.data.$quickViewHeader, "$Sutra.SkyDrive.Devices"),
                sutra(
                  K.data.$quickViewContainer,
                  "$Sutra.SkyDrive.DeviceItems"
                ),
                sutra(
                  K.data.$quickViewChevron,
                  "$Sutra.SkyDrive.DeviceChevron"
                );
            },
            dispose: function (e) {
              e.deviceItemSet &&
                e.deviceItemSet.isLoaded &&
                e.deviceItemSet.isListening &&
                (e.deviceItemSet.isListening = !1);
            },
            entries: [],
            $quickViewChevron: null,
            $quickViewContainer: null,
            $quickViewHeader: null,
          },
        };
      mix(K.data, Shared.ObjectEventing),
        (_quickViewControlItem = { entries: [$, j, z, W, G, K] }),
        (u.LeftNavBar = e),
        (e._quickViewControlItem = _quickViewControlItem),
        defineSubClass(
          "SkyDrive.UI.LeftNavBar",
          SkyDrive.UI.LegacyControlAdapter,
          function () {},
          {
            apiIdBase: "SkyDriveWeb_Internal_Control_LeftNavBar",
            controlType: wLive.Controls.LeftNavBar,
          }
        );
    })();
  }),
  define("infopaneheader", ["leftnavbar"], function () {
    !(function () {
      function e(e, T, A) {
        function P() {
          if (G)
            e.html(D),
              (L = jQuery(f + a, e)),
              (H = jQuery(f + o, L)),
              (V = jQuery(f + s, e)),
              (N = jQuery(f + c, e)),
              (Q = jQuery(f + m, e)),
              (q = jQuery(f + h, Q)),
              ($ = jQuery(f + g, e)),
              sutra(L, "$Sutra.SkyDrive.InfoPaneBreadcrumb"),
              sutra(N, "$Sutra.SkyDrive.InfoPaneViewFolder"),
              sutra(q, "$Sutra.SkyDrive.InfoPaneReturnToSearch"),
              sutra($, "$Sutra.SkyDrive.InfoPaneIndexOf"),
              z.addObjectListener(
                W,
                t.DataModel.dataChangedEvent,
                R,
                "SkyDriveWeb_Internal_Control_InfoPaneHeader_DataChanged"
              );
          else {
            var n = w;
            K && (n += k + I + x),
              e.html(n),
              (U = jQuery(f + u, e)),
              (O = jQuery(f + l, e)),
              (N = jQuery(f + c, e)),
              (q = jQuery(f + h, e)),
              (Q = jQuery(f + m, e)),
              (j = new i.NewItemTile(U, T)),
              j.exposeResources({ itemProvider: T.itemProvider }),
              sutra(O, "$Sutra.SkyDrive.ItemName"),
              sutra(N, "$Sutra.SkyDrive.InfoPaneViewFolder"),
              sutra(q, "$Sutra.SkyDrive.InfoPaneReturnToSearch");
          }
        }
        function E() {
          if (M) {
            var e = M.photo,
              t = M.folder || e ? b : _;
            e &&
              e.height &&
              (t = JBase.UI.ImageSizeHelper.scaleToContainer(e, t)),
              U.css(t).show(),
              j.initialize(),
              j._controlInstance.setSize(t),
              j.render(M),
              O.hide();
          }
        }
        function B(e, t, i) {
          e.text(t).attr(C, void 0 === i ? "" : i);
        }
        function R(e) {
          F == e.key && z.render(M);
        }
        var M,
          F,
          L,
          U,
          V,
          N,
          Q,
          q,
          O,
          H,
          $,
          j,
          z = this,
          W = T.dataModel,
          G = A && A.sp,
          K = A && A.vf;
        (z.render = function (e) {
          if (
            ((M = e),
            (r.isRootItem(e) && !r.isGroupRoot(M)) ||
              r.isSharerFolder(e) ||
              r.isAllMyPhotosQuery(e))
          ) {
            var i;
            if (
              ((i = r.isBingSearchQuery(e)
                ? T.itemProvider.getChildren(e).getRawCount()
                : r.isSearchQuery(e)
                ? Math.min(e.estimatedResultCount, e.maxReturnableResultCount)
                : T.itemProvider.getChildren(e).getCount()),
              r.isSharedLandingPageRoot(e) &&
                e.folder.itemGroupings &&
                e.folder.itemGroupings[0])
            ) {
              var a = e.folder.itemGroupings[0].itemGroups;
              i = 0;
              for (var o = 0; o < a.length; o++) {
                var s = a[o].data;
                i += (s && a[o].data.itemsSharedCount) || 0;
              }
            }
            var l = 1 == i ? "ItemCountSingle" : "ItemCountMultiple";
            B(O, n(l).format(i)), U.hide(), O.addClass(d), O.show();
          } else {
            var u = T.itemProvider.peekParent(e);
            if (u && G) {
              u.isPlaceholder
                ? (L.hide(), V.prepend(H).show())
                : (V.hide(),
                  L.html(H).show(),
                  t.ActionManager.setATagAction(
                    T.actionManager.getAction("ViewItem", u),
                    L
                  ));
              var c = (u && u.name) || "";
              B(H, c, c), (F = e.parentKey);
              var h = W.getItem(F),
                m = T.itemProvider.getChildren(h);
              if (h.folder.photoCount !== m.getCount() || T.viewParams.qt == S)
                $.text(".").css(p, y);
              else {
                var g = m.indexOf(e);
                $.text(
                  n("InfoPaneHeader.IndexOf").format(g + 1, h.folder.photoCount)
                ).css(p, v);
              }
            } else {
              E();
              var f = M.name || "";
              B(O, f, f);
            }
            if (u && K) {
              N.text(n("openfilelocationcommand"));
              var C = r.isSearchQuery(u),
                b = r.isAllMyPhotosQuery(u),
                _ = u && u.isBundle && e.isViewerOwner(),
                k = T.actionManager.getAction("ViewItem", u);
              if (u && (C || b || _)) {
                var w;
                (w = C
                  ? "returntosearchcommand"
                  : b
                  ? "returntophotoscommand"
                  : "returntobundlecommand"),
                  q.text(n(w)),
                  Q.show();
                var I = T.actionManager.getAction("OpenFileLocation", M);
                I ? (N.show(), t.ActionManager.setATagAction(I, N)) : N.hide(),
                  k
                    ? (Q.show(), t.ActionManager.setATagAction(k, q))
                    : Q.hide();
              } else
                Q.hide(),
                  k
                    ? (N.show(), t.ActionManager.setATagAction(k, N))
                    : N.hide();
            }
            O && O.removeClass(d);
          }
        }),
          (z.renderSelection = function (e) {
            B(O, n("SelectionCount").format(e.selectionCount)),
              U.hide(),
              O.addClass(d),
              O.show();
          }),
          (z.dispose = function () {
            j && j.dispose();
          }),
          mix(z, Shared.ObjectEventing),
          P();
      }
      var t = wLive.Core,
        i = wLive.Controls,
        n = t.AleHelpers.getPCString,
        r = t.SkyDriveItemHelper;
      i.InfoPaneHeader = e;
      var a = "iph_bc",
        o = "iph_bctxt",
        s = "iph_fakebc",
        l = "iph_title",
        d = "iph_nomar",
        u = "iph_bit",
        c = "iph_vf",
        h = "iph_rts",
        m = "iph_rtsw",
        g = "iph_io",
        f = ".",
        p = "visibility",
        v = "visible",
        y = "hidden",
        C = "title",
        S = "search",
        b = { width: 260, height: 130 },
        _ = { width: 170, height: 190 },
        k = '<span class="c_clr"></span>',
        w = '<div class="' + u + '"></div><div class="' + l + '"></div>',
        I = '<div class="iph_tl"><a class="' + c + '"></a></div>',
        x = '<div class="iph_tl ' + m + '"><a class="' + h + '"></a></div>',
        D =
          '<a class="' +
          a +
          '"><span class="' +
          o +
          ' t_ctc"></span>' +
          k +
          '</a><div class="' +
          s +
          '">' +
          k +
          '</div><div class="' +
          g +
          ' t_cstc"></div>' +
          I +
          x;
    })();
  }),
  define(
    "popoverhelpers",
    ["dependancies", "do", "trace", "wlivemenu"],
    function () {
      !(function () {
        var e = ".ModalDialog",
          t = "popoverHelpers",
          i = !1,
          n = jQuery(window),
          r = function (e, n) {
            Trace.log("PopoverHelpers: dialog up", t), (i = !0);
          },
          a = function (e, n) {
            Trace.log("PopoverHelpers: dialog closed", t), (i = !1);
          };
        $Do.when("NotificationControls", 0, function () {
          Trace.log("PopoverHelpers: creating bindings", t),
            jQuery(wLive.Controls.Notifications).bind({
              "afterdialogshow.notifications": r,
              "beforedialogdismiss.notifications": a,
              "afterflyoutshow.notifications": r,
              "beforeflyoutdismiss.notifications": a,
            });
          var e = {};
          (e.cleanupBindings = function () {
            Trace.log("PopoverHelpers: clearing bindings", t),
              jQuery(wLive.Controls.Notifications).unbind({
                "afterdialogshow.notifications": r,
                "beforedialogdismiss.notifications": a,
                "afterflyoutshow.notifications": r,
                "beforeflyoutdismiss.notifications": a,
              });
          }),
            n.bind("unload", function () {
              e.cleanupBindings();
            });
        }),
          (wLive.Core.PopoverHelpers = {
            popoverSelector: e,
            isPopoverVisible: function () {
              return i || ($menu && $menu.current);
            },
          });
      })();
    }
  ),
  define(
    "eventtile",
    [
      "jbase",
      "basecontrol",
      "imagetile",
      "alehelpers",
      "contextmenu",
      "newcontroladapter",
      "filetypehelper",
      "infopaneheader",
      "popoverhelpers",
    ],
    function () {
      !(function () {
        var e = wLive.Core,
          t = wLive.Core.AleHelpers.getPCString,
          i = 1,
          n = { width: 120, height: 130 },
          r = 32,
          a = 9,
          o = 33,
          s = 34,
          l = "SETAP",
          d = "PC",
          u = "EventTile",
          c = "photo",
          h = t("ShareCommand");
        Trace.register(u, { isEnabled: !1 }),
          defineSubClass(
            "SkyDrive.UI.EventTile",
            JBase.UI.BaseControl,
            function () {
              this.baseTag = "span";
            },
            {
              apiIdBase: "SkyDriveWeb_Internal_Control_EventTile",
              _size: n,
              isFocused: !1,
              shareText: h,
              onDataContextChanged: function (e) {
                var t = e.item || {},
                  i = t.data || {},
                  n = i.monthName || i.dayOfWeek || "";
                mix(this, {
                  tileWidth: this._size.width,
                  tileHeight: this._size.height,
                  dayOfTheWeek: i.dayOfWeek || "",
                  monthName: n,
                  locationTime: i.location || i.time || "",
                  dayNumber: i.day || "",
                  showNamePlate: t.groupingId == c,
                });
              },
              setSize: function (e) {
                (this._size.width === e.width &&
                  this._size.height === e.height) ||
                  (this._size = { width: e.width, height: e.height });
              },
              onKeyDown: function (t) {
                var i = !1;
                if (
                  !e.PopoverHelpers.isPopoverVisible() &&
                  !e.DomHelpers.isInputElement(jQuery(t.target))
                )
                  switch (t.which) {
                    case r:
                      this._onSelectAreaClicked(t), (i = !0);
                  }
                return !i;
              },
              setFocusState: function (e, t) {
                (this.isFocused = e),
                  this.isActive &&
                    (this._updateBindings(),
                    e && this.subElements.selectArea.focus(),
                    !t ||
                      t.metaKey ||
                      t.ctrlKey ||
                      t.shiftKey ||
                      t.which === a ||
                      t.which === o ||
                      t.which === s ||
                      !e ||
                      this.getResource("selectionManager").deselectAll(
                        this.dataContext.item.parent
                      ));
              },
              _selectEventItems: function (e, n) {
                var r = this.dataContext.item;
                if (r) {
                  var a = this.getResource("selectionManager");
                  a.selectGroupFromIndex(
                    i,
                    r.groupIndex,
                    e,
                    n,
                    t("PPickerLoading")
                  );
                }
              },
              _onSelectAreaClicked: function (e) {
                return (
                  this._selectEventItems(!0, function () {
                    wLive.Core.BiciHelpers.reportClickAction(l, d);
                  }),
                  !1
                );
              },
              _onShareClicked: function (t) {
                var i = this;
                return (
                  this._selectEventItems(!1, function () {
                    var t = i.getResource("selectionManager"),
                      n = t.getSelection();
                    if (n.selectionCount > 1) {
                      var r = i.getResource("multiselectActionManager"),
                        a = r.getAction("Sharing", n);
                      if (a) {
                        var o = a.skyCmd;
                        o &&
                          (a.click = e.BiciHelpers.prependBiciReportClickAction(
                            a.click,
                            o,
                            d
                          )),
                          r.doAction(a);
                      }
                    } else {
                      var s = i.getResource("actionManager"),
                        l = s.getAction("Sharing", t.getSingleSelectedItem());
                      if (l) {
                        var u = l.skyCmd;
                        u &&
                          (l.click = e.BiciHelpers.prependBiciReportClickAction(
                            l.click,
                            u,
                            d
                          )),
                          s.doAction(l);
                      }
                    }
                  }),
                  !1
                );
              },
            }
          );
      })();
    }
  ),
  define("eventtile.html", ["eventtile"], function () {
    (SkyDrive.UI.EventTile.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        sutraAttribute("SkyDrive.EventTile") +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><a href="#" id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="selectArea' +
        generateClassAttribute("isFocused", this.isFocused) +
        '"><span class="hoverWrapper"><span class="focusBorder"></span><span id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" style="' +
        generateStyleAttribute("display", this.showNamePlate) +
        '" class="namePlate"><span class="titleArea"><span' +
        sutraAttribute("SkyDrive.EventTileLocation") +
        ' id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" class="locationTime">' +
        this.locationTime +
        "</span><span" +
        sutraAttribute("SkyDrive.EventTileMonthName") +
        ' id="' +
        htmlAttributeEncode(this.id + "_4") +
        '" class="monthName">' +
        this.monthName +
        "</span><span" +
        sutraAttribute("SkyDrive.EventTileDayNumber") +
        ' id="' +
        htmlAttributeEncode(this.id + "_5") +
        '" class="dayNumber">' +
        this.dayNumber +
        "</span><span" +
        sutraAttribute("SkyDrive.EventTileShare") +
        ' id="' +
        htmlAttributeEncode(this.id + "_6") +
        '" class="share">' +
        htmlEncode(this.shareText) +
        '</span></span></span><span class="selectionBorder"></span><span class="selectionTab"></span></span></a></' +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.EventTile,
        [
          { id: 0 },
          {
            id: 1,
            className: ["isFocused", "isFocused"],
            childId: "selectArea",
            userActions: { click: "_onSelectAreaClicked" },
          },
          { id: 2, css: ["display", "showNamePlate"] },
          { id: 3, attr: ["html", "locationTime"] },
          { id: 4, attr: ["html", "monthName"] },
          { id: 5, attr: ["html", "dayNumber"] },
          {
            id: 6,
            attr: ["text", "shareText"],
            childId: "shareLink",
            userActions: { click: "_onShareClicked" },
          },
        ],
        [],
        {}
      );
  }),
  define("zoomtile", ["eventtile.html"], function () {
    !(function () {
      var e = wLive.Core,
        t = wLive.Core.SkyDriveItemHelper,
        i = { width: 120, height: 130 },
        n = 32,
        r = 30,
        a = "ZoomTile";
      Trace.register(a, { isEnabled: !1 });
      wLive.Core.ViewContext.getInstance();
      defineSubClass(
        "SkyDrive.UI.ZoomTile",
        JBase.UI.BaseControl,
        function () {
          (this.imageTile = this.createChild(JBase.UI.ImageTile, {
            baseClass: "thumbnail",
          })),
            (this.imageTile.verticalCenterRatio = 1 / 3),
            (this._thumbnailSet = null);
        },
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_ZoomTile",
          _size: i,
          baseTag: "span",
          onDataContextChanged: function (e) {
            var i = e.item || {},
              n = i.data || {};
            mix(this, {
              tileWidth: this._size.width,
              tileHeight: this._size.height,
              title: n.monthName || i.name || "",
              count: i.count || "",
              isFocused: !1,
            });
            var r = n && n.cover,
              a = this._getThumbnailContainerSize();
            this._thumbnailSet != r &&
              ((this._thumbnailSet = r),
              (this._thumbnail = r
                ? t.pickThumbnail(r, a.width, a.height)
                : null),
              (this._thumbnailUrl = this._thumbnail
                ? this._thumbnailSet.baseUrl + this._thumbnail.url
                : null)),
              this.imageTile.setDataContext({
                url: this._thumbnailUrl,
                containerSize: a,
                imagePosition: this._thumbnail,
                originalSize: i.photo,
              });
          },
          setSize: function (e) {
            (this._size.width === e.width && this._size.height === e.height) ||
              ((this._size = {
                width: e.width,
                height: e.height,
              }),
              this.imageTile &&
                this.dataContext &&
                this.imageTile.setDataContext({
                  containerSize: this._getThumbnailContainerSize(),
                }));
          },
          onKeyDown: function (t) {
            var i = !1;
            if (
              !e.PopoverHelpers.isPopoverVisible() &&
              !e.DomHelpers.isInputElement(jQuery(t.target))
            )
              switch (t.which) {
                case n:
                  this._onSelectAreaClicked(t), (i = !0);
              }
            return !i;
          },
          setFocusState: function (e, t) {
            (this.isFocused = e),
              this.isActive &&
                (this._updateBindings(),
                e && this.subElements.selectArea.focus());
          },
          _onSelectAreaClicked: function (e) {
            var t = this.dataContext.item;
            return t && raiseEvent(this, "tileClicked", { item: t }, !0), !1;
          },
          _getThumbnailContainerSize: function () {
            return { width: this._size.width, height: this._size.height - r };
          },
        }
      );
    })();
  }),
  define("zoomtile.html", ["zoomtile"], function () {
    (SkyDrive.UI.ZoomTile.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        sutraAttribute("SkyDrive.ZoomTile") +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><a href="#" id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="selectArea canPress' +
        generateClassAttribute("isFocused", this.isFocused) +
        '"><span class="hoverWrapper"><span class="focusBorder"></span>' +
        this.imageTile.renderHtml() +
        '<span class="namePlate"><span' +
        sutraAttribute("SkyDrive.ZoomTileCount") +
        ' id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" class="count">' +
        htmlEncode(this.count) +
        '</span><span class="titleArea"><span' +
        sutraAttribute("SkyDrive.ZoomTileTitle") +
        ' id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" class="title">' +
        this.title +
        '</span></span></span><span class="selectionBorder"></span><span class="selectionTab"></span></span></a></' +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.ZoomTile,
        [
          { id: 0 },
          {
            id: 1,
            className: ["isFocused", "isFocused"],
            childId: "selectArea",
            userActions: { click: "_onSelectAreaClicked" },
          },
          { id: 2, attr: ["text", "count"] },
          { id: 3, attr: ["html", "title"] },
        ],
        [],
        {}
      );
  }),
  define("itemtile", ["zoomtile.html"], function () {
    !(function () {
      function e(e, t) {
        var i;
        return (
          e &&
            (e.video
              ? (i = "video_32")
              : e.isProcessingVideo
              ? (i = "processingVideo_32")
              : e.isPanorama && (i = "panorama")),
          i ? o.getImageInfo(i) : y
        );
      }
      function t(e, t) {
        var i;
        return (
          e &&
            (e.folder
              ? e.folder.covers &&
                e.folder.covers.length &&
                ((t %= e.folder.covers.length), (i = e.folder.covers[t]))
              : (i = e.thumbnailSet)),
          i
        );
      }
      var i,
        n,
        r,
        a = wLive.Core.JSONConstants.SortField,
        o = JBase.UI.ImageStripHelper,
        s = wLive.Core.AleHelpers.getPCString,
        l = wLive.Core.AleHelpers.getString,
        d = wLive.Core.SkyDriveItemHelper,
        u = SkyDrive.FileTypeHelper,
        c = 10,
        h = { width: 192, height: 130 },
        m = !($B.IE && $B.V < 10),
        g = m ? 600 : 0,
        f = 1500,
        p = s("ItemTileSurveyTag"),
        v = s("Sharing.BundleToolTip"),
        y = { url: null },
        C = "ItemTile",
        S = 50,
        b = 200;
      Trace.register(C, { isEnabled: !1 });
      var _ = wLive.Core.ViewContext.getInstance(),
        k = !!FilesConfig.visualUpdatesForSharedContent;
      defineSubClass(
        "SkyDrive.UI.ItemTile",
        JBase.UI.BaseControl,
        function () {
          var e = this;
          (e.baseTag = "span"),
            (e.imageTile = e.createChild(JBase.UI.ImageTile, {
              imageAnimationDuration: e.imageAnimationDuration,
              baseClass: "thumbnail",
            })),
            (e.iconTile = e.createChild(JBase.UI.ImageTile)),
            (e.topIconTile = e.createChild(JBase.UI.ImageTile)),
            (e.sharedIconTile = e.createChild(JBase.UI.ImageTile)),
            (e.overlayTile = e.createChild(JBase.UI.ImageTile, {
              baseClass: "overlay",
            })),
            (e.notificationTile = e.createChild(JBase.UI.ImageTile, {
              baseClass: "notificationIcon",
            })),
            (e._transitionDuration = e.imageAnimationDuration),
            (e.metaDataHtml = ""),
            (i = o.getImageInfo(
              "warning",
              "",
              l("RestrictedNotification.Visitor")
            )),
            (n = o.getImageInfo(
              "warning",
              "",
              l("RestrictedNotification.Owner").format("", "") +
                " " +
                l("RestrictedNotification.OwnerContactUs").format('"', '"')
            )),
            (r = o.getImageInfo(
              "warning",
              "",
              l("RestrictedNotification.OwnerOPT")
            ));
        },
        {
          _size: h,
          _imageLoadingPromise: null,
          _loadingUrl: null,
          _loadedUrl: null,
          _thumbnails: null,
          _thumbnail: null,
          _lastItemKey: null,
          _rotationState: 0,
          _parentItem: null,
          _thumbnailSize: null,
          apiIdBase: "SkyDriveWeb_Internal_Control_ItemTile",
          scaleImage: !1,
          imageAnimationDuration: g,
          inMiniMode: !1,
          isGenericFile: !1,
          requiredResources: { itemProvider: null },
          onDataContextChanged: function (i) {
            var n = i.item || {},
              r = this;
            r._resetOnItemChange(),
              (r.inMiniMode = r._size.height < 80 && r._size.width > 100);
            var a = r._rotationState;
            (r._rotationState = n.getRotationState()),
              (r._transitioningFromRotatedState =
                null == n.getRotationState(!0) && a);
            var s = "Audio" === n.iconType,
              l = u.isOfficeDocument(n) || u.isAdobeFile(n),
              c = t(n, r._coverIndex),
              h = c ? c.thumbnails : null,
              m = r._getThumbnailContainerSize(n);
            (r._thumbnailSize = c ? c.size : null),
              r._thumbnails != h &&
                ((r._thumbnails = h),
                r._chooseThumbnail(
                  !l && !r._transitioningFromRotatedState,
                  !0
                ));
            var g =
              !!(!r._loadedUrl || n.folder || l || s || r.inMiniMode) &&
              (!n.isProcessingVideo || r.inMiniMode);
            (r.hasIcon =
              (r.inMiniMode && n.isTagFolder) ||
              (!n.folder && (r.inMiniMode ? !r._loadedUrl || l : g))),
              (r.hasTopIcon = n.isBundle),
              r._updateMetaDataHtml(n),
              (r.isGenericFile = g && !n.folder),
              (r.hasSharedIcon = k
                ? n.sharingLevelValue !==
                  wLive.Core.JSONConstants.SharingLevel.Private
                : !1),
              mix(r, {
                tileWidth: r._size.width,
                tileHeight: r._size.height,
                rootClass:
                  "tileContent " +
                  u.getFileType(n) +
                  (g ? "" : " hideNamePlate") +
                  (r.isGenericFile ? " genericFile" : "") +
                  (r.inMiniMode ? " miniTile" : " fullTile") +
                  (r._loadedUrl ? " hasThumbnail" : " noThumbnail") +
                  (l ? " isOffice" : "") +
                  (n.form ? " survey" : "") +
                  (n.isBundle ? " bundle" : "") +
                  (n.name && n.name.indexOf(" ") > -1
                    ? ""
                    : " nameWithoutBreaks") +
                  (r.metaDataHtml ? " hasMetaData" : "") +
                  (n.isProcessingVideo ? " isProcessing" : ""),
                childCount: r._getChildCountText(n),
                showNamePlate: g,
                showNotificationTab: r.shouldShowNotificationTab(n),
                notificationTabClass: r.getNotificationTabClass(n),
                decoratedName:
                  (n.isTagFolder ? "#" : "") +
                    d.highlightAndEncodeField(n, "name") +
                    ((n.isUnknownFileType || n.textEditorMimeType) &&
                    n.extension
                      ? htmlEncode(n.extension)
                      : "") || "&nbsp;",
              }),
              (r.imageTile.scaleToFit = r.scaleImage),
              (r.imageTile.verticalCenterRatio = l ? 0 : 1 / 3),
              r._transitioningFromRotatedState ||
                ((r.imageTile.imageAnimationDuration = r._rotationState
                  ? 0
                  : r._transitionDuration),
                r.imageTile.setDataContext({
                  url: r._loadedUrl,
                  containerSize: m,
                  imagePosition: r._thumbnail,
                  originalSize: r._thumbnailSize,
                  rotation: r._rotationState,
                }));
            var f = n.isBundle
                ? 16
                : r.inMiniMode && !n.isTagFolder
                ? l && r._loadedUrl
                  ? 16
                  : 48
                : 32,
              p = n.isBundle,
              C = n.isBundle ? v : null,
              S = n.isBundle && h ? "BundleWithBorder" : null,
              b =
                n.folder && !n.isAlbum
                  ? "ft_16_SharedGlyphSelected"
                  : "ft_16_SharedGlyphGray";
            r.iconTile.setDataContext(
              r.hasIcon && r.showNamePlate
                ? u.getIconInfo(n, f, p, null, C, S)
                : y
            ),
              r.topIconTile.setDataContext(
                r.hasTopIcon && r.showNamePlate
                  ? u.getIconInfo(n, f, p, null, C, S)
                  : y
              ),
              r.sharedIconTile.setDataContext(
                r.hasSharedIcon
                  ? o.getImageInfo(
                      b,
                      "",
                      wLive.Core.AleHelpers.getPCString(
                        "Sharing.SharedIconToolTip"
                      )
                    )
                  : y
              ),
              r.notificationTile.setDataContext(r.getNotificationTileInfo(n)),
              r.overlayTile.setDataContext(e(n, !!r._loadedUrl));
          },
          onDispose: function () {
            this._imageLoadingPromise &&
              (this._imageLoadingPromise.cancel(),
              (this._imageLoadingPromise = null));
          },
          onResize: function () {
            var e = this;
            c_nativeRequestAnimationFrameSupport
              ? e.doOnRenderFrameEveryXFrames(
                  "_chooseThumbnail",
                  function () {
                    e._chooseThumbnail();
                  },
                  b
                )
              : e.throttle(e.id, b, 0, function () {
                  e.doOnRenderFrame("_chooseThumbnail", function () {
                    e._chooseThumbnail();
                  });
                });
          },
          _updateMetaDataHtml: function (e) {
            var t = this,
              i = "";
            ((void 0 !== e.sharingLevelValue &&
              e.sharingLevelValue !==
                wLive.Core.JSONConstants.SharingLevel.Private) ||
              (e.isRecycled && !d.isRecycleBinQuery(e))) &&
              (i = t._getMetaDataHtml(e, t._parentItem)),
              (t.metaDataHtml = i);
          },
          _getChildCountText: function (e) {
            var t = "";
            return (
              e.form && (t = p),
              e.folder &&
                !e.did &&
                !e.isRecycled &&
                e.folder.totalCount >= 0 &&
                (t = String(e.folder.totalCount)),
              t
            );
          },
          _getThumbnailContainerSize: function (e) {
            var t = this._size;
            return (
              e &&
                (t = {
                  width: this.inMiniMode
                    ? this._size.height - c
                    : e.folder
                    ? this._size.width + 2
                    : this._size.width,
                  height:
                    this._size.height -
                    (this.inMiniMode ? c : this.isGenericFile ? S : 0),
                }),
              t
            );
          },
          _chooseThumbnail: function (e, i) {
            var n = this,
              r = n.dataContext.item,
              a = t(r, n._coverIndex),
              o = n._getThumbnailContainerSize(r),
              s = a ? d.pickThumbnail(a, o.width, o.height) : null,
              l = s ? a.baseUrl + s.url : null;
            l && l !== n._loadedUrl
              ? ((n._thumbnail = s),
                n._loadingUrl !== l &&
                  n._imageLoadingPromise &&
                  (n._imageLoadingPromise.cancel(),
                  (n._imageLoadingPromise = null)),
                e || (Shared.ImageLoader.isLoaded(l) && n._thumbnail.width)
                  ? ((n._loadedUrl = l), !i && n.change())
                  : n._imageLoadingPromise ||
                    ((n._loadingUrl = l),
                    (n._imageLoadingPromise =
                      Shared.ImageLoader.loadImagePromise(l, null).then(
                        function (e, t) {
                          (n._transitioningFromRotatedState = !1),
                            (n._loadedUrl = n._loadingUrl),
                            (n._thumbnail.width && n._thumbnail.height) ||
                              ((n._thumbnail.width = t.width),
                              (n._thumbnail.height = t.height)),
                            (n._imageLoadingPromise = n._loadingUrl = null),
                            n.change();
                        }
                      ))))
              : l || (this._loadedUrl = null);
          },
          setSize: function (e) {
            (this._size.width === e.width && this._size.height === e.height) ||
              ((this._size = { width: e.width, height: e.height }),
              this.imageTile &&
                this.dataContext &&
                this.imageTile.setDataContext({
                  containerSize: this._getThumbnailContainerSize(
                    this.dataContext.item
                  ),
                }));
          },
          pulse: function () {
            (this._transitionDuration = f), this._coverIndex++, this.change();
          },
          canPulse: function () {
            var e = this.dataContext.item;
            return (
              e && e.folder && e.folder.covers && e.folder.covers.length > 1
            );
          },
          getNotificationTabClass: function (e) {
            return "notificationTab";
          },
          shouldShowNotificationTab: function (e) {
            return d.isRestricted(e);
          },
          getNotificationTileInfo: function (e) {
            var t = "";
            return (
              d.isRestricted(e) &&
                (t = d.isViewerOwner(e) ? (e.itemStatus < 3 ? n : r) : i),
              t
            );
          },
          _getMetaDataHtml: function (e, t) {
            var i = "",
              n = this.getResource("itemProvider");
            if (n && e && t) {
              var r = n.getChildren(t).setKeyParts,
                o = (this.sortType = r.sb);
              switch (o) {
                case a.Name:
                  var l = e.isRecycled
                    ? s("InfoPane.Information.Deleted")
                    : d.getSharedWithText(e);
                  i = htmlEncode(l);
                  break;
                case a.ModifiedDate:
                  i = d.getModifiedDateHtml(e, _, !1);
                  break;
                case a.DateTaken:
                  i = e.folder ? "" : htmlEncode(d.getCreatedDateText(e, _));
                  break;
                case a.DateShared:
                  i = htmlEncode(d.getDateSharedText(e));
                  break;
                case a.Size:
                  i = htmlEncode(e.displaySize);
                  break;
                case a.Owner:
                  i = htmlEncode(d.getLocationText(e));
                  break;
                case a.OriginalLocation:
                  i = htmlEncode(d.getOriginalLocationText(e));
                  break;
                case a.DateDeleted:
                  i = htmlEncode(e.displayDateDeleted);
              }
              k &&
                o === a.DateShared &&
                (i = htmlEncode(d.getSharedWithText(e)));
            }
            return i;
          },
          _resetOnItemChange: function () {
            var e = this.dataContext.item,
              t = this.getResource("itemProvider");
            e &&
              e.key != this._lastItemKey &&
              ((this._coverIndex = 0),
              (this._lastItemKey = e.key),
              t && (this._parentItem = t.peekParent(e)),
              (this._transitionDuration = this.imageAnimationDuration));
          },
        }
      ),
        defineSubClass(
          "wLive.Controls.NewItemTile",
          SkyDrive.UI.NewControlAdapter,
          function (e, t) {},
          { controlType: SkyDrive.UI.ItemTile }
        );
    })();
  }),
  define("itemtile.html", ["itemtile"], function () {
    (SkyDrive.UI.ItemTile.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        sutraAttribute("SkyDrive.ItemTile") +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><span id="' +
        htmlAttributeEncode(this.id + "_1") +
        '"' +
        generateAttributesString("class", this.rootClass) +
        ">" +
        this.imageTile.renderHtml() +
        '<span id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" style="' +
        generateStyleAttribute("display.inlineblock", this.hasTopIcon) +
        '" class="topIcon">' +
        this.topIconTile.renderHtml() +
        "</span><span" +
        sutraAttribute("SkyDrive.NotificationIconArea") +
        ' id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" style="' +
        generateStyleAttribute("display", this.showNotificationTab) +
        '" class="notificationArea"><span id="' +
        htmlAttributeEncode(this.id + "_4") +
        '"' +
        generateAttributesString("class", this.notificationTabClass) +
        "></span>" +
        this.notificationTile.renderHtml() +
        '</span><span class="namePlate"><span id="' +
        htmlAttributeEncode(this.id + "_5") +
        '" style="' +
        generateStyleAttribute("display.inlineblock", this.hasIcon) +
        '" class="icon">' +
        this.iconTile.renderHtml() +
        '</span><span class="titleArea"><span id="' +
        htmlAttributeEncode(this.id + "_6") +
        '" class="count">' +
        htmlEncode(this.childCount) +
        "</span><span" +
        sutraAttribute("SkyDrive.ItemTitleName") +
        ' id="' +
        htmlAttributeEncode(this.id + "_7") +
        '" class="title">' +
        this.decoratedName +
        "</span></span><span" +
        sutraAttribute("SkyDrive.ItemMetaData") +
        ' class="metaData"><span id="' +
        htmlAttributeEncode(this.id + "_8") +
        '" style="' +
        generateStyleAttribute("display.inlineblock", this.hasSharedIcon) +
        '" class="sharedIcon' +
        generateClassAttribute("sharedIconGlyph", this.hasSharedIcon) +
        '">' +
        this.sharedIconTile.renderHtml() +
        '</span><span id="' +
        htmlAttributeEncode(this.id + "_9") +
        '">' +
        this.metaDataHtml +
        '</span></span></span><span class="overlayBorder"></span><span class="overlayCorner"></span><span class="overlayCornerCutout"></span>' +
        this.overlayTile.renderHtml() +
        "</span></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.ItemTile,
        [
          { id: 0 },
          { id: 1, attr: ["class", "rootClass"] },
          { id: 2, css: ["display.inlineBlock", "hasTopIcon"] },
          { id: 3, css: ["display", "showNotificationTab"] },
          { id: 4, attr: ["class", "notificationTabClass"] },
          { id: 5, css: ["display.inlineBlock", "hasIcon"] },
          { id: 6, attr: ["text", "childCount"] },
          { id: 7, attr: ["html", "decoratedName"] },
          {
            id: 8,
            css: ["display.inlineBlock", "hasSharedIcon"],
            className: ["sharedIconGlyph", "hasSharedIcon"],
          },
          { id: 9, attr: ["html", "metaDataHtml"] },
        ],
        [],
        {}
      );
  }),
  define("itemrenamemodel", ["itemtile.html"], function () {
    !(function () {
      var e = wLive.Core,
        t = wLive.Controls,
        i = e.AleHelpers.getPCString,
        n = e.SoftBlockEnum,
        r = e.SkyDriveItemHelper,
        a = "Rename",
        o = "RenameEditing",
        s = "RenameComplete",
        l = 9001,
        d = 10,
        u = wLive.Core.ViewContext.getInstance();
      defineSubClass(
        "SkyDrive.Models.ItemRenameModel",
        JBase.UI.BaseControl,
        function () {},
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_ItemRenameModel",
          baseTag: null,
          requiredResources: { itemProvider: null },
          onActivate: function () {
            this.addElementListener(u, o, this._onRenameEditing),
              this.addElementListener(u, s, this._onRenameComplete);
          },
          _onRenameEditing: function (e, t) {
            u.errorManager.clear();
          },
          _onRenameComplete: function (e, t) {
            var i = this;
            if (
              ((t.isNewFolder = t.item._isNewFolder),
              t.attempt <= d &&
                t.shouldCommit &&
                !t.skipValidation &&
                (t.oldValue !== t.newValue || t.item._isNewFolder))
            ) {
              var n = r.getErrorMessageForNewItemName(
                t.newValue,
                t.item && t.item.extension
              );
              n
                ? this._retryRenameOnFailure(t, n)
                : t.propertyName &&
                  ((t.item.highlights = null),
                  $header && $header.showLoading(),
                  t.item.updateItemProperty(
                    t.propertyName,
                    t.newValue,
                    function () {
                      i._onRenameSuccess(t);
                    },
                    function (e) {
                      i._onRenameFailure(t, e);
                    },
                    t.overrideLock,
                    a
                  ));
            } else this._cancelEdit(t);
          },
          _cancelEdit: function (e) {
            var t = e.item,
              i = this.getResource("itemProvider");
            if (t._isNewFolder) {
              var n = i.peekParent(t);
              n && (n.removePinnedSubfolder(t), n.invalidate());
            }
            this._enableFolderCreation(e);
          },
          _onRenameSuccess: function (e) {
            $header && $header.hideLoading(), this._enableFolderCreation(e);
          },
          _onRenameFailure: function (e, i) {
            var r = this,
              a = i && i.error,
              o = a ? i.error.code : 0,
              s = a ? i.error.message : "",
              d = e.item;
            if (
              ($header && $header.hideLoading(),
              r._enableFolderCreation(e),
              o === l)
            ) {
              var c = i.error.data,
                h = c && jQuery.parseJSON(c);
              (_softBlockPopover = new t.SoftBlock(
                n.RenameAction,
                u.callerCid,
                d,
                h
              )),
                _softBlockPopover.show(
                  function () {
                    (e.overrideLock = !0), r._onRenameComplete(null, e);
                  },
                  function () {}
                );
            } else this._retryRenameOnFailure(e, s);
          },
          _retryRenameOnFailure: function (e, t) {
            var n = e.item,
              r = n._isNewFolder
                ? i("NewFolderErrorTitle")
                : i("RenameErrorTitleFormat").format(n.name),
              o = jQuery(_ce("span")).text(r + " " + t),
              s = u.errorManager;
            s.clear(),
              s.add({ $element: o, priority: 0, type: 0 }),
              (e.hasError = !0),
              setTimeout(function () {
                jQuery(u).trigger(a, e);
              }, 0);
          },
          _enableFolderCreation: function (e) {
            e.isNewFolder && (u.pendingFolderToCreate = !1);
          },
        }
      );
    })();
  }),
  define("itemrenamebox", ["itemrenamemodel"], function () {
    !(function () {
      var e = 27,
        t = 13,
        i = "RenameComplete",
        n = "RenameEditing",
        r = null;
      wLive.Core.SoftBlockEnum;
      defineSubClass(
        "SkyDrive.UI.ItemRenameBox",
        JBase.UI.BaseControl,
        function () {
          (this.renameEventArgs = null),
            (this.propertyToEdit = "name"),
            (this.skipValidation = !1),
            (this._$editBox = null),
            (this.autoFocus = !0);
        },
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_ItemRenameBox",
          baseTag: "span",
          onDataContextChanged: function (e) {
            e.item;
            (this.isRenameError = !(
              !this.renameEventArgs || !this.renameEventArgs.hasError
            )),
              e.shouldClearState && this.isActive && this._clearState(!0);
          },
          onActivate: function () {
            (r = jQuery(wLive.Core.ViewContext.getInstance())),
              this._clearState(),
              this.autoFocus && this._focusEditBox();
          },
          onDeactivate: function () {
            this.subElements.editBox.parentNode &&
              jQuery(this.subElements.editBox).blur();
          },
          _clearState: function (e) {
            var t = this,
              i = t.dataContext.item;
            e && delete this.renameEventArgs;
            var n = t.subElements.editBox;
            (n.value =
              t.renameEventArgs && t.renameEventArgs.newValue
                ? t.renameEventArgs.newValue
                : i.name),
              (t.isRenameError = !1),
              (t._isEditingComplete = !1),
              (t._focusAttemptsRemaining = 3);
          },
          _focusEditBox: function () {
            var e = this;
            e._focusAttemptsRemaining--,
              setTimeout(function () {
                if (e.isActive && !e._isEditingComplete) {
                  var t = e.subElements.editBox;
                  try {
                    t.focus(),
                      t.select(),
                      e.addElementListener(t, "keydown", e._onKeyDown),
                      e.addElementListener(t, "blur", e._onBlur);
                  } catch (i) {
                    e._focusAttemptsRemaining > 0 && e._focusEditBox();
                  }
                }
              }, 100);
          },
          _onBlur: function (e) {
            this._completeEdit(
              !(this.renameEventArgs && this.renameEventArgs.attempt > 0)
            );
          },
          _onKeyDown: function (i) {
            var a = !0;
            switch (
              (this.renameEventArgs &&
                this.renameEventArgs.hasError &&
                ((this.renameEventArgs.hasError = !1),
                r.trigger(n, this.renameEventArgs),
                this.change()),
              i.which)
            ) {
              case t:
                this._completeEdit(!0), (a = !1);
                break;
              case e:
                this._completeEdit(!1), (a = !1);
            }
            return a;
          },
          _getRenameEventArgs: function (e) {
            var t = this.dataContext.item,
              i = e && !t._isNewFolder ? t[this.propertyToEdit] : null,
              n = e ? this.subElements.editBox.value.trim() : i;
            return (
              (this.renameEventArgs = this.renameEventArgs || {}),
              (this.renameEventArgs.attempt =
                (this.renameEventArgs.attempt || 0) + 1),
              mix(this.renameEventArgs, {
                key: t.key,
                item: t,
                shouldCommit: e,
                propertyName: this.propertyToEdit,
                skipValidation: this.skipValidation,
                oldValue: i,
                newValue: n,
              }),
              t.ghostId && (this.renameEventArgs.item.id = t.ghostId),
              this.renameEventArgs
            );
          },
          _completeEdit: function (e) {
            this._isEditingComplete ||
              ((this._isEditingComplete = !0),
              r.trigger(i, this._getRenameEventArgs(e)));
          },
        }
      );
    })();
  }),
  define("itemrenamebox.html", ["itemrenamebox"], function () {
    (SkyDrive.UI.ItemRenameBox.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        sutraAttribute("SkyDrive.ItemRenameBox") +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><span id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="inputContainer' +
        generateClassAttribute("isRenameError", this.isRenameError) +
        '"><span class="inputSizer"><input type="text"' +
        sutraAttribute("SkyDrive.ItemRenameInput") +
        ' id="' +
        htmlAttributeEncode(this.id + "_2") +
        '"></input></span></span></' +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.ItemRenameBox,
        [
          { id: 0 },
          { id: 1, className: ["isRenameError", "isRenameError"] },
          { id: 2, childId: "editBox" },
        ],
        [],
        {}
      );
  }),
  define("setcolumnsizehelper", ["itemrenamebox.html"], function () {
    !(function () {
      var e = 10;
      defineNamespace("SkyDrive.UI.SetColumnSizeHelper", {
        calculatePositions: function (t, i) {
          var n,
            r,
            a = 0,
            o = [],
            s = t.length;
          if (t && s && i) {
            for (n = 0; n < t.length; n++)
              (r = t[n]),
                r.fixedWidth &&
                  ((a += r.fixedWidth + e), (o[n] = { width: r.fixedWidth }));
            for (n = s - 1; n >= 0; n--)
              (r = t[n]),
                r.fixedWidth ||
                  (o[n] = {
                    width: Math.max(
                      r.minWidth,
                      Math.min(r.maxWidth, i - a - e)
                    ),
                  });
            var l = 0;
            for (n = 0; s > n; n++) {
              var d = o[n];
              (d.left = 0 === n || l + d.width <= i ? l : 999999),
                (l += o[n].width + e);
            }
          }
          return o;
        },
      });
    })();
  }),
  define("setnamecell", ["setcolumnsizehelper"], function () {
    !(function () {
      var e,
        t,
        i = JBase.UI.ImageStripHelper,
        n = wLive.Core.AleHelpers.getPCString,
        r = wLive.Core.AleHelpers.getString,
        a = wLive.Core.SkyDriveItemHelper,
        o = wLive.Core.ViewContext.getInstance(),
        s = n("SurveyBadge"),
        l = n("Sharing.BundleToolTip"),
        d = $B.rtl ? "right" : "left",
        u = "&hellip;",
        c = getSutraValue("SkyDrive.ItemRowInlineName"),
        h = getSutraValue("SkyDrive.NotificationIcon");
      defineSubClass(
        "SkyDrive.UI.SetNameCell",
        JBase.UI.BaseControl,
        function () {
          (this._lastRenameEventArgs = null),
            (this._lastItem = null),
            (this.notificationIcon = this.createChild(JBase.UI.ImageTile)),
            (this.itemIcon = this.createChild(JBase.UI.ImageTile)),
            (this.itemRenameBox = this.createChild(JBase.UI.ContentControl, {
              baseTag: "span",
              baseClass: "editArea",
              disposeOnSwap: !0,
              getControlType: bind(this, this._getItemRenameBoxContentType),
              getControlOptions: bind(this, this._getItemRenameBoxOptions),
            })),
            (e = i.getImageInfo(
              "warning",
              "",
              r("RestrictedNotification.Visitor")
            )),
            (t = i.getImageInfo(
              "warning",
              "",
              r("RestrictedNotification.Owner").format("", "") +
                " " +
                r("RestrictedNotification.OwnerContactUs").format('"', '"')
            ));
        },
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_SetNameCell",
          requiredResources: { itemProvider: null },
          baseTag: "span",
          onDataContextChanged: function (e) {
            var t = e.item;
            t != this._lastItem &&
              ((this._lastItem = t),
              (this.isRenaming = !!(
                t &&
                t._isNewFolder &&
                t._fromCreateFolderAction
              ))),
              mix(this, {
                isFile: !t.folder,
                itemNameText: t.getDisplayName(),
                itemNameHtml:
                  a.highlightAndEncodeField(t, "name") +
                  ((t.isUnknownFileType || t.textEditorMimeType) && t.extension
                    ? t.extension.encodeHtml()
                    : ""),
                snippetText: t.snippet
                  ? u + a.highlightAndEncodeField(t, "snippet") + u
                  : "",
                surveyText: t.form ? s : "",
                styleString:
                  "width:" +
                  e.position.width +
                  "px;" +
                  d +
                  ":" +
                  e.position.left +
                  "px",
                showNotificationTab: this.shouldShowNotificationTab(t),
              });
            var i = t.isBundle ? l : null;
            (this.languageDir = $B.ltr ? "ltr" : "rtl"),
              this.notificationIcon.setDataContext(
                this.getNotificationTileInfo(t)
              ),
              this.itemIcon.setDataContext(
                SkyDrive.FileTypeHelper.getIconInfo(
                  t,
                  16,
                  e.isSelected,
                  null,
                  i
                )
              ),
              this.itemRenameBox.setDataContext({
                item: this.isRenaming ? this.dataContext.item : null,
              }),
              this._updateLinkClick(this.isActive);
          },
          onActivate: function () {
            this._updateLinkClick(!0),
              this.addElementListener(o, "Rename", this._onRenameStart),
              this.addElementListener(
                o,
                "RenameComplete",
                this._onRenameComplete
              ),
              c && this.subElements.name.setAttribute("sutra", c),
              h &&
                this.subElements.notificationContainer.setAttribute("sutra", h);
          },
          shouldShowNotificationTab: function (e) {
            return a.isRestricted(e);
          },
          getNotificationTileInfo: function (i) {
            var n = "";
            return a.isRestricted(i) && (n = a.isViewerOwner(i) ? t : e), n;
          },
          _updateLinkClick: function (e) {
            if (e) {
              var t = o.actionManager,
                i = t.getAction("DefaultClick", this.dataContext.item),
                n = jQuery(this.subElements.itemLink);
              n.unbind(), i && t.setATagAction(i, n, "PC", null);
            }
          },
          _getItemRenameBoxContentType: function () {
            return this.isRenaming ? SkyDrive.UI.ItemRenameBox : null;
          },
          _getItemRenameBoxOptions: function () {
            return { renameEventArgs: this._lastRenameEventArgs };
          },
          _onRenameStart: function (e, t) {
            var i = this.dataContext ? this.dataContext.item : null;
            i &&
              t &&
              i.key === t.key &&
              ((this.isRenaming = !0),
              (this._lastRenameEventArgs = t),
              this.change());
          },
          _onRenameComplete: function (e, t) {
            var i = this.dataContext ? this.dataContext.item : null,
              n = this.getResource("itemProvider");
            if (i && t && i.key === t.key) {
              if (
                ((i._lastRenameEventArgs = t),
                (this.isRenaming = !1),
                !this.dataContext.isSelected && t.shouldCommit)
              ) {
                var r = n.peekParent(i),
                  a = n.getChildren(r).indexOf(i);
                o.selectionManager.clickSelect(r, a, { ctrl: !1, shift: !1 });
              }
              this.change(), this.element && this.subElements.itemLink.focus();
            }
          },
        }
      );
    })();
  }),
  define("setnamecell.html", ["setnamecell"], function () {
    (SkyDrive.UI.SetNameCell.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        ' cell"' +
        generateAttributesString("style", this.styleString) +
        '><a id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="' +
        generateClassAttribute("file", this.isFile) +
        '"' +
        generateAttributesString(
          "aria-label",
          this.itemNameText,
          "alt",
          this.itemNameText
        ) +
        '><span id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" class="notification' +
        generateClassAttribute("visible", this.showNotificationTab) +
        '">' +
        this.notificationIcon.renderHtml() +
        "</span>" +
        this.itemIcon.renderHtml() +
        '<span id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" class="cellText"' +
        generateAttributesString("dir", this.languageDir) +
        ">" +
        this.itemNameHtml +
        '</span></a><span id="' +
        htmlAttributeEncode(this.id + "_4") +
        '" class="snippet">' +
        this.snippetText +
        '</span><span id="' +
        htmlAttributeEncode(this.id + "_5") +
        '" class="cellForm">' +
        htmlEncode(this.surveyText) +
        '</span><div id="' +
        htmlAttributeEncode(this.id + "_6") +
        '" style="' +
        generateStyleAttribute("display", this.isRenaming) +
        '" class="editArea">' +
        this.itemRenameBox.renderHtml() +
        "</div></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.SetNameCell,
        [
          { id: 0, attr: ["style", "styleString"] },
          {
            id: 1,
            attr: ["aria-label", "itemNameText", "alt", "itemNameText"],
            className: ["file", "isFile"],
            childId: "itemLink",
          },
          {
            id: 2,
            className: ["visible", "showNotificationTab"],
            childId: "notificationContainer",
          },
          {
            id: 3,
            attr: ["html", "itemNameHtml", "dir", "languageDir"],
            childId: "name",
          },
          { id: 4, attr: ["html", "snippetText"], childId: "snippet" },
          { id: 5, attr: ["text", "surveyText"] },
          { id: 6, css: ["display", "isRenaming"] },
        ],
        [],
        {}
      );
  }),
  define("settextcell", ["setnamecell.html"], function () {
    !(function () {
      var e = $B.rtl ? "right" : "left";
      defineSubClass(
        "SkyDrive.UI.SetTextCell",
        JBase.UI.BaseControl,
        function () {},
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_SetTextCell",
          baseTag: "span",
          cellClass: null,
          cellHtml: null,
          hasContent: null,
          styleString: null,
          onDataContextChanged: function (t) {
            var i = t.column;
            (this.cellClass = "cell cellText " + i.name),
              (this.cellHtml = i.getContent(t.item).html || ""),
              (this.hasContent = !!this.cellHtml),
              (this.styleString =
                "width:" +
                t.position.width +
                "px;" +
                e +
                ":" +
                t.position.left +
                "px");
          },
        }
      );
    })();
  }),
  define("settextcell.html", ["settextcell"], function () {
    (SkyDrive.UI.SetTextCell.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><span id="' +
        htmlAttributeEncode(this.id + "_1") +
        '"' +
        generateAttributesString(
          "class",
          this.cellClass,
          "style",
          this.styleString,
          "alt",
          this.cellHtml
        ) +
        ">" +
        this.cellHtml +
        "</span></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.SetTextCell,
        [
          { id: 0 },
          {
            id: 1,
            attr: [
              "class",
              "cellClass",
              "style",
              "styleString",
              "html",
              "cellHtml",
              "alt",
              "cellHtml",
            ],
          },
        ],
        [],
        {}
      );
  }),
  define("setlinkcell", ["settextcell.html"], function () {
    !(function () {
      var e = $B.rtl ? "right" : "left",
        t = JBase.UI.ImageStripHelper,
        i = !!FilesConfig.visualUpdatesForSharedContent;
      defineSubClass(
        "SkyDrive.UI.SetLinkCell",
        JBase.UI.BaseControl,
        function () {
          this.sharedIconTile = this.createChild(JBase.UI.ImageTile);
        },
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_SetLinkCell",
          baseTag: "span",
          cellClass: null,
          cellText: null,
          styleString: null,
          onDataContextChanged: function (n) {
            var r = n.column,
              a = n.isSelected
                ? "ft_16_SharedGlyphSelected"
                : "ft_16_SharedGlyph";
            (this.cellClass = "cell cellText " + r.name),
              this._updateCellText(),
              (this.width = n.position.width + "px"),
              (this.hasSharedIcon = i
                ? n.item.sharingLevelValue !==
                  wLive.Core.JSONConstants.SharingLevel.Private
                : !1),
              this.sharedIconTile.setDataContext(
                this.hasSharedIcon
                  ? t.getImageInfo(
                      a,
                      "",
                      wLive.Core.AleHelpers.getPCString(
                        "Sharing.SharedIconToolTip"
                      )
                    )
                  : { url: null }
              ),
              (this.styleString =
                "width:" +
                n.position.width +
                "px;" +
                e +
                ":" +
                n.position.left +
                "px");
          },
          onActivate: function () {
            this.addElementListener(
              this.subElements.link,
              "click",
              this.dataContext.column.getClickHandler(this.dataContext.item)
            );
          },
          _updateCellText: function () {
            var e = this,
              t = e.dataContext.column.getText(e.dataContext.item);
            e.cellText = t;
          },
        }
      );
    })();
  }),
  define("setlinkcell.html", ["setlinkcell"], function () {
    (SkyDrive.UI.SetLinkCell.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        ' cell"' +
        generateAttributesString("style", this.styleString) +
        '><a href="#" tabindex="-1" id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="cellText"><span id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" class="sharedIcon' +
        generateClassAttribute("sharedIconGlyph", this.hasSharedIcon) +
        '">' +
        this.sharedIconTile.renderHtml() +
        '</span><span id="' +
        htmlAttributeEncode(this.id + "_3") +
        '">' +
        htmlEncode(this.cellText) +
        "</span></a></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.SetLinkCell,
        [
          { id: 0, attr: ["style", "styleString"] },
          { id: 1, childId: "link" },
          { id: 2, className: ["sharedIconGlyph", "hasSharedIcon"] },
          { id: 3, attr: ["text", "cellText"] },
        ],
        [],
        {}
      );
  }),
  define("setitemcell", ["setlinkcell.html"], function () {
    !(function () {
      defineSubClass(
        "SkyDrive.UI.SetItemCell",
        JBase.UI.ContentControl,
        function () {},
        {
          baseTag: "span",
          getControlType: function (e) {
            var t = SkyDrive.UI.SetTextCell,
              i = e.column;
            return (
              "name" === i.name
                ? (t = SkyDrive.UI.SetNameCell)
                : i.getClickHandler &&
                  i.getClickHandler(e.item) &&
                  (t = SkyDrive.UI.SetLinkCell),
              t
            );
          },
        }
      );
    })();
  }),
  define("setitemrow", ["setitemcell"], function () {
    !(function () {
      var e = wLive.Core,
        t = wLive.Core.ViewContext.getInstance(),
        i = 43,
        n = getSutraValue("SkyDrive.ItemRowContainer"),
        r = getSutraValue("SkyDrive.SelectedItemRow"),
        a = getSutraValue("SkyDrive.ItemCheckbox"),
        o = 9,
        s = 32,
        l = 33,
        d = 34,
        u = 35,
        c = 36,
        h = "FilePickerView";
      defineSubClass(
        "SkyDrive.UI.SetItemRow",
        JBase.UI.BaseControl,
        function () {
          this.columnRepeater = this.createChild(JBase.UI.Repeater, {
            baseTag: "span",
            _size: {},
            childControl: SkyDrive.UI.SetItemCell,
            getChildContext: function (e, t) {
              return {
                column: e,
                position: this.dataContext.columnPositions[t],
                item: this.dataContext.parentItem,
                isSelected: this.dataContext.isSelected,
              };
            },
          });
        },
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_SetItemRow",
          requiredResources: { itemProvider: null },
          _size: { width: 100, height: 30 },
          onDataContextChanged: function (t) {
            var a = t.item,
              o = this.dataContext.columns;
            (this.isFolder = a.folder),
              (this.isFile = !a.folder),
              this._updateSelectionState(),
              this.columnRepeater.setDataContext({
                items: t.columns,
                columnPositions:
                  SkyDrive.UI.SetColumnSizeHelper.calculatePositions(
                    o,
                    this._size.width - i
                  ),
                parentItem: a,
                isSelected: this.isSelected,
              }),
              this.isActive &&
                n &&
                this.element.setAttribute("sutra", this.isSelected ? r : n),
              (this.isRecycled =
                !e.SkyDriveItemHelper.isRecycleBinQuery(a) && a.isRecycled);
          },
          onActivate: function () {
            this.addElementListener(
              t.selectionManager,
              wLive.Core.SelectionManager.SelectionChangedEvent,
              this.change,
              "SkyDriveWeb_Internal_Control_SetItemRow_SelectionChanged"
            ),
              n &&
                (this.element.setAttribute("sutra", this.isSelected ? r : n),
                this.subElements.checkbox.setAttribute("sutra", a)),
              this._onSelectionChanged();
          },
          setSize: function (e) {
            (this._size && this._size.width == e.width) ||
              ((this._size = e), this.change());
          },
          onKeyDown: function (i) {
            var n = !1,
              r = this.getResource("itemProvider");
            if (
              !e.PopoverHelpers.isPopoverVisible() &&
              !e.DomHelpers.isInputElement(jQuery(i.target))
            )
              switch (i.which) {
                case s:
                  t.selectionManager.clickSelect(
                    r.peekParent(this.dataContext.item),
                    this.dataContext.itemIndex,
                    { ctrl: !0, shift: i.shiftKey }
                  ),
                    (n = !0);
              }
            return !n;
          },
          setFocusState: function (e, i) {
            if (
              ((this.isFocused = e),
              this.isActive &&
                (this._updateBindings(),
                !this._shouldBlockClick() &&
                  e &&
                  jQuery("a", this.element)[0].focus()),
              i &&
                e &&
                !i.metaKey &&
                !i.ctrlKey &&
                i.which !== o &&
                i.which !== l &&
                i.which !== d &&
                i.which !== c &&
                i.which !== u &&
                !this._shouldBlockClick())
            ) {
              var n = this.getResource("itemProvider");
              t.selectionManager.clickSelect(
                n.peekParent(this.dataContext.item),
                this.dataContext.itemIndex,
                { ctrl: !1, shift: i.shiftKey }
              );
            }
          },
          _shouldBlockClick: function () {
            return (
              SkyDrive.Core &&
              SkyDrive.Core.DragAndDropController &&
              SkyDrive.Core.DragAndDropController.Instance &&
              SkyDrive.Core.DragAndDropController.Instance.blockClick()
            );
          },
          _onSelectionChanged: function () {
            this._updateSelectionState(), this._updateBindings();
          },
          _updateSelectionState: function () {
            var e = this.dataContext,
              i = e.item || {},
              n = t.selectionManager,
              r = this.getResource("itemProvider");
            (this.isSelected =
              void 0 !== e.itemIndex && i && r.peekParent(i)
                ? n.isSelected(r.getParent(i), e.itemIndex)
                : !1),
              (this.isRangeSelected = n.multipleSelected());
          },
          _onRowClick: function (i) {
            if (this._shouldBlockClick()) return !1;
            var n = jQuery(i.target || i.srcElement),
              r = this.dataContext.item,
              a = t.currentViewType === h,
              o = e.SkyDriveItemHelper.isRecycleBinQuery(r) && !t.isSuper,
              s = this.getResource("itemProvider");
            if (void 0 !== this.dataContext.itemIndex) {
              if (n.closest(".checkArea").length)
                return (
                  t.selectionManager.clickSelect(
                    s.getParent(r),
                    this.dataContext.itemIndex,
                    { ctrl: !0, shift: i.shiftKey }
                  ),
                  n.is("INPUT")
                );
              if (
                !n.closest("A,INPUT").length ||
                n.closest(".c-SetLinkCell").length ||
                (a && !r.folder) ||
                o
              )
                return (
                  t.selectionManager.clickSelect(
                    s.peekParent(r),
                    this.dataContext.itemIndex,
                    { ctrl: i.ctrlKey || i.metaKey, shift: i.shiftKey }
                  ),
                  t.contextMenu.hide(),
                  !1
                );
            }
          },
          _onContextMenu: function (e) {
            if (
              this._shouldBlockClick() ||
              SkyDrive.UI.EventHelper.isSmallScreenTouchEvent(e)
            )
              return !1;
            if (e.shiftKey) return !0;
            var i = { cancelDefault: !1 };
            if (
              (raiseEvent(this, "contextMenuOpening", i, !0), !i.cancelDefault)
            ) {
              var n = this.dataContext.item,
                r = this.getResource("itemProvider"),
                a = r.peekParent(n),
                o = this.dataContext.itemIndex,
                s = t.selectionManager;
              s.isSelected(a, o) || s.clickSelect(a, o);
              var l = s.getSelection(),
                d = {
                  pos: { x: e.pageX, y: e.pageY },
                  sp: t.infoPaneClosed,
                  ev: e,
                  bici: "CM",
                  fil: [],
                };
              return t.contextMenu.render(null, l, d), !1;
            }
          },
        }
      );
    })();
  }),
  define("setitemrow.html", ["setitemrow"], function () {
    (SkyDrive.UI.SetItemRow.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        generateClassAttribute(
          "folder",
          this.isFolder,
          "file",
          this.isFile,
          "isSelected",
          this.isSelected,
          "isRangeSelected",
          this.isRangeSelected,
          "isFocused",
          this.isFocused,
          "recycledItem",
          this.isRecycled
        ) +
        '"><span class="checkArea"><span class="checkboxWrapper"><input type="checkbox" tabindex="-1" id="' +
        htmlAttributeEncode(this.id + "_1") +
        '"' +
        generateAttributesString("checked", this.isSelected) +
        "></input><label></label></span></span>" +
        this.columnRepeater.renderHtml() +
        "</" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.SetItemRow,
        [
          {
            id: 0,
            className: [
              "folder",
              "isFolder",
              "file",
              "isFile",
              "isSelected",
              "isSelected",
              "isRangeSelected",
              "isRangeSelected",
              "isFocused",
              "isFocused",
              "recycledItem",
              "isRecycled",
            ],
            userActions: {
              contextmenu: "_onContextMenu",
              click: "_onRowClick",
            },
          },
          { id: 1, attr: ["checked", "isSelected"], childId: "checkbox" },
        ],
        [],
        {}
      );
  }),
  define("setheaderrowcell", ["setitemrow.html"], function () {
    !(function () {
      var e = (wLive.Core, wLive.Core.JSONConstants.SortDirection),
        t = FilesConfig.foldersImgBaseUrl + "/sort-ascending.png",
        i = FilesConfig.foldersImgBaseUrl + "/sort-descending.png",
        n = $B.rtl ? "right" : "left",
        r = "SkyDrive.HeaderText",
        a = "SkyDrive.SortedUp",
        o = "SkyDrive.SortedDown";
      wLive.Core.ViewContext.getInstance();
      defineSubClass(
        "SkyDrive.UI.SetHeaderRowCell",
        JBase.UI.BaseControl,
        function () {},
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_SetHeaderRowCell",
          baseTag: "span",
          onDataContextChanged: function (e) {
            var s = e.column,
              l = !(
                !s.sortField ||
                (e.item.isPlaceholder && !e.item._isLoadingItem)
              ),
              d = e.position;
            mix(this, {
              columnSutra: getSutraValue("SkyDrive." + s.sutraLabel),
              cellTextSutra: getSutraValue(r),
              sortIconSutra: getSutraValue(s.isSortAscending ? a : o),
              cellText: s.title,
              className: "cell " + s.name + (l ? "" : " unsortable"),
              isSortable: l,
              isSortColumn: s.isSortColumn,
              sortIconUrl: s.isSortAscending ? i : t,
              styleString:
                "width:" +
                d.width +
                "px;" +
                n +
                ":" +
                d.left +
                "px;" +
                (d.left > 999e3 ? "display:none" : ""),
            });
          },
          onActivate: function () {
            this.addElementListener(
              this.subElements.columnLink,
              "click",
              this._onColumnClick
            );
          },
          _onColumnClick: function () {
            if (this.isSortable) {
              var t = this.dataContext.column,
                i = t.sortField,
                n = e.Default;
              t.biciCommand &&
                wLive.Core.BiciHelpers.reportClickAction(t.biciCommand, "PC"),
                t.isSortColumn &&
                  (n = t.isSortAscending ? e.Descending : e.Ascending),
                this.getResource("itemProvider").setSort(
                  this.dataContext.item.key,
                  i,
                  n
                );
            }
            return !1;
          },
        }
      );
    })();
  }),
  define("setheaderrowcell.html", ["setheaderrowcell"], function () {
    (SkyDrive.UI.SetHeaderRowCell.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><a href="#" onclick="return false;" id="' +
        htmlAttributeEncode(this.id + "_1") +
        '"' +
        generateAttributesString(
          "class",
          this.className,
          "style",
          this.styleString,
          "sutra",
          this.columnSutra
        ) +
        '><span id="' +
        htmlAttributeEncode(this.id + "_2") +
        '"' +
        generateAttributesString("sutra", this.cellTextSutra) +
        ">" +
        htmlEncode(this.cellText) +
        '</span><span id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" style="' +
        generateStyleAttribute("display.inline", this.isSortColumn) +
        '" class="sortIcon"' +
        generateAttributesString("sutra", this.sortIconSutra) +
        '><img alt="" id="' +
        htmlAttributeEncode(this.id + "_4") +
        '"' +
        generateAttributesString("src", this.sortIconUrl) +
        "></img></span></a></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.SetHeaderRowCell,
        [
          { id: 0 },
          {
            id: 1,
            attr: [
              "class",
              "className",
              "style",
              "styleString",
              "sutra",
              "columnSutra",
            ],
            childId: "columnLink",
          },
          { id: 2, attr: ["text", "cellText", "sutra", "cellTextSutra"] },
          {
            id: 3,
            css: ["display.inline", "isSortColumn"],
            attr: ["sutra", "sortIconSutra"],
          },
          { id: 4, attr: ["src", "sortIconUrl"] },
        ],
        [],
        {}
      );
  }),
  define("setheaderrow", ["setheaderrowcell.html"], function () {
    !(function () {
      var e = wLive.Core,
        t = wLive.Core.ViewContext.getInstance(),
        i = 43,
        n = 32;
      defineSubClass(
        "SkyDrive.UI.SetHeaderRow",
        JBase.UI.BaseControl,
        function () {
          (this._size = null),
            (this.columnRepeater = this.createChild(JBase.UI.Repeater, {
              baseTag: "span",
              childControl: SkyDrive.UI.SetHeaderRowCell,
              getChildContext: function (e, t) {
                return {
                  column: e,
                  item: this.dataContext.parentItem,
                  position: this.dataContext.columnPositions[t],
                };
              },
            }));
        },
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_SetHeaderRow",
          requiredResources: { itemProvider: null },
          sutraLabel: getSutraValue("SkyDrive.DetailsListColumnHeaders"),
          selectAllSutra: getSutraValue("SkyDrive.SelectAllCheckboxes"),
          onDataContextChanged: function (t) {
            var n = t.columns,
              r = this.getResource("selectionManager"),
              a = r.getSelection(),
              o = this.getResource("itemProvider");
            t.parentItem &&
            a &&
            e.SkyDriveItemHelper.isSearchQuery(t.parentItem)
              ? (this.isAllSelected =
                  a.selectionCount ===
                  o.getChildren(t.parentItem).getRawCount())
              : (this.isAllSelected =
                  t.parentItem &&
                  a &&
                  a.selectionCount === o.getChildren(t.parentItem).getCount()),
              this.columnRepeater.setDataContext({
                items: n,
                parentItem: t.parentItem,
                columnPositions:
                  SkyDrive.UI.SetColumnSizeHelper.calculatePositions(
                    n,
                    this._size.width - i
                  ),
              });
          },
          onActivate: function () {
            this.addElementListener(
              this.subElements.checkArea,
              "click keydown",
              this._onSelectAllBoxClicked
            ),
              this.addElementListener(
                t.selectionManager,
                wLive.Core.SelectionManager.SelectionChangedEvent,
                this.change,
                "SkyDriveWeb_Internal_Control_SetHeaderRow_SelectionChanged"
              ),
              this.sutraLabel &&
                this.element.setAttribute("sutra", this.sutraLabel);
          },
          setSize: function (e) {
            (this._size = e), this.change();
          },
          _onSelectAllBoxClicked: function (i) {
            if ("click" == i.type || i.which === n) {
              var r = this.dataContext.parentItem,
                a = t.selectionManager,
                o = this.getResource("itemProvider");
              if (r) {
                var s,
                  l = a.getSelection();
                return (
                  (s = e.SkyDriveItemHelper.isSearchQuery(r)
                    ? o.getChildren(r).getRawCount()
                    : o.getChildren(r).getCount()),
                  e.SkyDriveItem.areItemsSame(l.parent, r) &&
                  l.selectionCount === s
                    ? a.deselectAll(r)
                    : a.selectAll(r),
                  jQuery(i.target || i.srcElement).is("INPUT")
                );
              }
            }
          },
        }
      );
    })();
  }),
  define("setheaderrow.html", ["setheaderrow"], function () {
    (SkyDrive.UI.SetHeaderRow.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><span id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="checkArea"><span id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" class="checkboxWrapper"' +
        generateAttributesString("sutra", this.selectAllSutra) +
        '><input type="checkbox" id="' +
        htmlAttributeEncode(this.id + "_3") +
        '"' +
        generateAttributesString("checked", this.isAllSelected) +
        "></input><label></label></span></span>" +
        this.columnRepeater.renderHtml() +
        "</" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.SetHeaderRow,
        [
          { id: 0 },
          { id: 1, childId: "checkArea" },
          { id: 2, attr: ["sutra", "selectAllSutra"] },
          { id: 3, attr: ["checked", "isAllSelected"] },
        ],
        [],
        {}
      );
  }),
  define("setitemtile", ["setheaderrow.html"], function () {
    !(function () {
      var e = wLive.Core,
        t = wLive.Core.ViewContext.getInstance(),
        i = 9,
        n = 32,
        r = 33,
        a = 34,
        o = 35,
        s = 36;
      defineSubClass(
        "SkyDrive.UI.SetItemTile",
        JBase.UI.BaseControl,
        function () {
          (this.action = null),
            (this._lastItem = null),
            (this._parentItem = null),
            (this._size = { width: 0, height: 0 }),
            (this.itemRenameBox = this.createChild(JBase.UI.ContentControl, {
              baseTag: "span",
              baseClass: "editArea",
              disposeOnSwap: !0,
              getControlType: bind(this, this._getItemRenameBoxContentType),
              getControlOptions: bind(this, this._getItemRenameBoxOptions),
            }));
        },
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_SetItemTile",
          isRenaming: !1,
          canResize: !1,
          requiredResources: { itemProvider: null },
          onDataContextChanged: function (t) {
            var i = t.item || {},
              n = this.getResource("itemProvider");
            i != this._lastItem &&
              ((this._lastItem = i),
              (this._parentItem = i ? n.peekParent(i) : null)),
              (this.isFile = !i.folder),
              (this.isFolder = !this.isFile),
              (this.itemNameText = i.getDisplayName()),
              this.itemTile.setDataContext(t),
              this.itemRenameBox.setDataContext(t);
            var r = this._size.height < 80 && this._size.width > 100;
            (this.highlightCorner = !i.folder && !i.thumbnailSet && !r),
              (this.action = this.getResource("actionManager").getAction(
                "DefaultClick",
                this.dataContext.item
              )),
              (this.href =
                this.action && this.action.url ? this.action.url : "#"),
              (this.target =
                this.action && this.action.target
                  ? this.action.target
                  : void 0),
              (this.isRecycled =
                !e.SkyDriveItemHelper.isRecycleBinQuery(i) && i.isRecycled),
              this._updateSelectionState();
          },
          onActivate: function () {
            var e = this.getResource("selectionManager");
            this.addElementListener(
              e,
              wLive.Core.SelectionManager.SelectionChangedEvent,
              this._onSelectionChanged,
              "SkyDriveWeb_Internal_Control_SetItemTile_SelectionChanged"
            ),
              this.addElementListener(t, "Rename", this._onRenameStart),
              this.addElementListener(
                t,
                "RenameComplete",
                this._onRenameComplete
              );
            var i = this.dataContext.item;
            i &&
              i._isNewFolder &&
              i._fromCreateFolderAction &&
              this._onRenameStart(null, { key: i.key }),
              this._onSelectionChanged();
          },
          onDeactivate: function () {
            this.dataContext.item._isResizing = !1;
          },
          setSize: function (e) {
            (this._size = e), this.itemTile.setSize(e);
          },
          pulse: function () {
            this.itemTile.pulse();
          },
          canPulse: function () {
            return this.itemTile.canPulse();
          },
          onKeyDown: function (t) {
            var i = !1;
            if (
              !e.PopoverHelpers.isPopoverVisible() &&
              !e.DomHelpers.isInputElement(jQuery(t.target))
            )
              switch (t.which) {
                case n:
                  this._onSelectAreaClicked(t), (i = !0);
              }
            return !i;
          },
          setFocusState: function (e, t) {
            (this.isFocused = e),
              this.isActive &&
                (this._updateBindings(),
                !this._shouldBlockClick() &&
                  e &&
                  this.subElements.itemLink.focus()),
              t &&
                e &&
                !t.metaKey &&
                !t.ctrlKey &&
                t.which !== i &&
                (t.shiftKey ||
                  (t.which !== r &&
                    t.which !== a &&
                    t.which !== s &&
                    t.which !== o)) &&
                this.getResource("selectionManager").clickSelect(
                  this._parentItem,
                  this.dataContext.itemIndex,
                  { ctrl: !1, shift: t.shiftKey }
                );
          },
          _onSelectionChanged: function () {
            this._updateSelectionState(), this._updateBindings();
          },
          _updateSelectionState: function () {
            var e = this.dataContext,
              t = e ? e.item : null,
              i = this.getResource("itemProvider"),
              n = this.getResource("selectionManager");
            t &&
              i &&
              ((this.isSelected = n.isSelected(this._parentItem, e.itemIndex)),
              (this.anySelected = n.anySelected()),
              (this.showSelected = this.anySelected || $B.SF_iPhone));
          },
          _shouldBlockClick: function () {
            return (
              SkyDrive.Core &&
              SkyDrive.Core.DragAndDropController &&
              SkyDrive.Core.DragAndDropController.Instance &&
              SkyDrive.Core.DragAndDropController.Instance.blockClick()
            );
          },
          _onRenameStart: function (e, t) {
            var i = this.dataContext.item;
            if (i && t && i.key === t.key) {
              (this.isRenaming = !0), (this._lastRenameEventArgs = t);
              var n = jQuery(".title", this.element),
                r = jQuery(this.element),
                a = r.offset(),
                o = n.offset() || { left: 0, top: 0 },
                s = this.subElements.itemRenameArea.style;
              o.left >= a.left
                ? ($B.rtl
                    ? (s.right =
                        a.left + r.width() - (o.left + n.width()) + "px")
                    : (s.left = o.left - a.left + "px"),
                  (s.top = o.top - a.top + 1 + "px"))
                : ($B.rtl ? (s.right = "13px") : (s.left = "13px"),
                  (s.top = r.height() - 28 + "px")),
                this.change(),
                this.itemRenameBox.change();
            }
          },
          _onRenameComplete: function (e, t) {
            var i = this.dataContext ? this.dataContext.item : null;
            i &&
              t &&
              i.key === t.key &&
              ((i._lastRenameEventArgs = t),
              (this.isRenaming = !1),
              this.element && this.subElements.itemLink.focus(),
              this.change(),
              this.itemRenameBox.change());
          },
          _getItemRenameBoxContentType: function () {
            return this.isRenaming ? SkyDrive.UI.ItemRenameBox : null;
          },
          _getItemRenameBoxOptions: function () {
            return { renameEventArgs: this._lastRenameEventArgs };
          },
          _onContextMenu: function (e) {
            if (
              this._shouldBlockClick() ||
              SkyDrive.UI.EventHelper.isSmallScreenTouchEvent(e)
            )
              return !1;
            if (e.shiftKey) return !0;
            var i = { cancelDefault: !1 };
            if (
              (raiseEvent(this, "contextMenuOpening", i, !0), !i.cancelDefault)
            ) {
              var n = (this.dataContext.item, this._parentItem),
                r = this.dataContext.itemIndex,
                a = this.getResource("selectionManager");
              a.isSelected(n, r) || a.clickSelect(n, r);
              var o = a.getSelection(),
                s = {
                  pos: { x: e.pageX, y: e.pageY },
                  sp: t.infoPaneClosed,
                  ev: e,
                  bici: "CM",
                  fil: [],
                };
              return t.contextMenu.render(null, o, s), !1;
            }
          },
          _onSelectAreaClicked: function (e) {
            if (SkyDrive.UI.EventHelper.isSmallScreenTouchEvent(e)) return !1;
            if (
              !this._shouldBlockClick() &&
              void 0 !== this.dataContext.itemIndex
            ) {
              var t = e && e.shiftKey,
                i = this.getResource("selectionManager");
              i.clickSelect(this._parentItem, this.dataContext.itemIndex, {
                ctrl: !0,
                shift: t,
              });
            }
            return !1;
          },
          _onItemLinkClicked: function (e) {
            var t = !0;
            if (this._shouldBlockClick()) t = !1;
            else if (this.action) {
              var i = this.getResource("actionManager").getATagAction(
                this.action,
                "PC"
              );
              i.click &&
                (t = i.click({
                  data: this.dataContext ? this.dataContext.item : null,
                }));
            } else t = !1;
            return t;
          },
          _onResizeDown: function (e) {
            return (this.dataContext.item._isResizing = !0), !0;
          },
          _onResizeUp: function (e) {
            return (this.dataContext.item._isResizing = !1), !0;
          },
          _onResizeClicked: function (e) {
            return !1;
          },
        }
      );
    })();
  }),
  define("setitemtile.html", ["setitemtile"], function () {
    (SkyDrive.UI.SetItemTile.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        sutraAttribute("SkyDrive.SetItemTile") +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        generateClassAttribute(
          "isRenaming",
          this.isRenaming,
          "canResize",
          this.canResize,
          "recycledItem",
          this.isRecycled
        ) +
        '"><a role="option" id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="canPress' +
        generateClassAttribute(
          "isSelected",
          this.isSelected,
          "showSelected",
          this.showSelected,
          "anySelected",
          this.anySelected,
          "file",
          this.isFile,
          "folder",
          this.isFolder,
          "isFocused",
          this.isFocused
        ) +
        '"' +
        generateAttributesString(
          "aria-selected",
          this.isSelected,
          "aria-label",
          this.itemNameText,
          "alt",
          this.itemNameText,
          "href",
          this.href,
          "target",
          this.target
        ) +
        '><span class="hoverWrapper"><span class="focusBorder"></span>' +
        this.itemTile.renderHtml() +
        '<span class="selectionBorder"></span><span id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" class="selectionTab' +
        generateClassAttribute("showHighlight", this.highlightCorner) +
        '"></span><span class="selectBox"><input type="checkbox" role="presentation" tabindex="-1"' +
        sutraAttribute("SkyDrive.SetItemCheckBox") +
        ' id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" class="checkbox"' +
        generateAttributesString("checked", this.isSelected) +
        "></input><label></label></span></span><span" +
        sutraAttribute("SkyDrive.SetItemCheckArea") +
        ' id="' +
        htmlAttributeEncode(this.id + "_4") +
        '" class="selectArea"></span><span class="resizeTabOuter"></span><span class="resizeTabInner"></span><span id="' +
        htmlAttributeEncode(this.id + "_5") +
        '" class="resizeClickArea canPress"></span></a><div id="' +
        htmlAttributeEncode(this.id + "_6") +
        '" class="itemRenameArea">' +
        this.itemRenameBox.renderHtml() +
        "</div></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.SetItemTile,
        [
          {
            id: 0,
            className: [
              "isRenaming",
              "isRenaming",
              "canResize",
              "canResize",
              "recycledItem",
              "isRecycled",
            ],
            userActions: { contextmenu: "_onContextMenu" },
          },
          {
            id: 1,
            attr: [
              "aria-selected",
              "isSelected",
              "aria-label",
              "itemNameText",
              "alt",
              "itemNameText",
              "href",
              "href",
              "target",
              "target",
            ],
            className: [
              "isSelected",
              "isSelected",
              "showSelected",
              "showSelected",
              "anySelected",
              "anySelected",
              "file",
              "isFile",
              "folder",
              "isFolder",
              "isFocused",
              "isFocused",
            ],
            childId: "itemLink",
            userActions: { click: "_onItemLinkClicked" },
          },
          { id: 2, className: ["showHighlight", "highlightCorner"] },
          { id: 3, attr: ["checked", "isSelected"] },
          {
            id: 4,
            childId: "selectArea",
            userActions: { click: "_onSelectAreaClicked" },
          },
          {
            id: 5,
            childId: "resizeTab",
            userActions: {
              mousedown: "_onResizeDown",
              mouseup: "_onResizeUp",
              click: "_onResizeClicked",
            },
          },
          { id: 6, childId: "itemRenameArea" },
        ],
        [],
        { itemTile: SkyDrive.UI.ItemTile }
      );
  }),
  define("setactionablegroupheader", ["setitemtile.html"], function () {
    !(function () {
      var e = wLive.Core,
        t = wLive.Core.AleHelpers.getPCString,
        i = 32,
        n = 9,
        r = 33,
        a = 34,
        o = 36,
        s = "#qt=sharedby&id={0}&cid={1}",
        l = t("SharedLanding.NotSharedYet"),
        d = t("SharedLanding.ItemsShared"),
        u = t("SharedLanding.ItemShared"),
        c = t("SharedLanding.ShowAll"),
        h = "SharedByTemplate",
        m = "Folders_GroupHeader",
        g = "sharer",
        f = 10,
        p = "SSZ",
        v = "PC",
        y = wLive.Core.ViewContext.getInstance();
      defineSubClass(
        "SkyDrive.UI.SetActionableGroupHeader",
        JBase.UI.BaseControl,
        function () {
          (this.linkUri = "#"),
            (this._createICFunction = null),
            (this._lastCid = null),
            (this._ic = null);
        },
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_SetActionableGroupHeader",
          onDataContextChanged: function (e) {
            var t = e.item;
            if (t) {
              if (
                ((this.name = t.name || ""),
                (this.groupIndex = String(t.groupIndex)),
                (this.groupType = t.groupingId),
                (this.isClickable = t.isClickable),
                (this.isSharerGroup = t.groupingId === g),
                (this.allowSemanticZoom = !this.isSharerGroup),
                this.isSharerGroup && t.data)
              ) {
                var i = t.data.sharerCid,
                  n = t.data.sharerLongCid,
                  r =
                    t.data.itemsSharedCount <= f
                      ? Math.min(t.count, t.data.itemsSharedCount)
                      : t.data.itemsSharedCount - f + t.count,
                  a = this._lastCid !== i;
                this._updateGroupImage(a),
                  (this.hasTopBorder = this.groupIndex > 0),
                  (this.linkText = t.isTruncated || r > t.count ? c : ""),
                  (this.linkUri = s.format(n, i)),
                  (this.subText = t.data.itemsSharedCount
                    ? 1 === r
                      ? u.format(r)
                      : d.format(r)
                    : l),
                  (this._lastCid = i);
              }
              this.showGroupLink = !!this.linkText;
            }
          },
          onActivate: function () {
            this._updateGroupImage();
          },
          onDeactivate: function () {
            this._ic && this._ic.deactivate();
          },
          onDispose: function () {
            var e = this;
            window.$icm &&
              e._ic &&
              (window.$icm.removeIC(e._ic), (e._ic = null));
          },
          onKeyDown: function (t) {
            var n = !1;
            if (
              !e.PopoverHelpers.isPopoverVisible() &&
              !e.DomHelpers.isInputElement(jQuery(t.target))
            )
              switch (t.which) {
                case i:
                  this._onSelectAreaClicked(t), (n = !0);
              }
            return !n;
          },
          setFocusState: function (e, t) {
            (this.isFocused = e),
              this.isActive &&
                (this._updateBindings(),
                e && this.subElements.selectArea.focus(),
                !t ||
                  t.metaKey ||
                  t.ctrlKey ||
                  t.shiftKey ||
                  t.which === n ||
                  t.which === r ||
                  t.which === a ||
                  t.which === o ||
                  !e ||
                  y.selectionManager.deselectAll(this.dataContext.item.parent));
          },
          _onSelectAreaClicked: function (e) {
            if (this.isClickable) {
              if (!this.allowSemanticZoom) return !0;
              raiseEvent(this, "showSemanticZoom", null, !0),
                wLive.Core.BiciHelpers.reportClickAction(p, v);
            }
            return !1;
          },
          _updateGroupImage: function (e) {
            var t = this;
            if (
              t.isActive &&
              t.isSharerGroup &&
              t.dataContext &&
              t.dataContext.item
            )
              if (!t._ic || e) {
                var i = this.dataContext.item;
                require(["ic"], function () {
                  $Do.when("$icm", 0, function () {
                    window.$icm.createICsFromCids(
                      h,
                      [[i.data.sharerLongCid, "sharer" + i.data.sharerLongCid]],
                      function (e, n) {
                        if (t.isActive) {
                          var r;
                          n
                            ? (r = n.render())
                            : ((n = window.$icm.createNonContactIC(h, i.email, {
                                namespace: m,
                                userTileUrl: i.data.sharerProfileImageUrl,
                                name: i.name,
                              })),
                              (r = n ? n.render() : "")),
                            t.subElements.groupImage &&
                              setHtml(t.subElements.groupImage, r),
                            n && (n.activate(), (t._ic = n));
                        }
                      },
                      { namespace: m, showICCard: !0 }
                    );
                  });
                });
              } else t._ic.activate();
          },
        }
      );
    })();
  }),
  define(
    "setactionablegroupheader.html",
    ["setactionablegroupheader"],
    function () {
      (SkyDrive.UI.SetActionableGroupHeader.prototype.onRenderHtml =
        function () {
          return (
            "<" +
            this.baseTag +
            sutraAttribute("SkyDrive.SetActionableGroupHeader") +
            ' id="' +
            htmlAttributeEncode(this.id + "_0") +
            '"' +
            (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
            ' class="c-' +
            this.controlName +
            " " +
            this.baseClass +
            generateClassAttribute("hasTopBorder", this.hasTopBorder) +
            '"><a id="' +
            htmlAttributeEncode(this.id + "_1") +
            '" class="selectArea' +
            generateClassAttribute(
              "isFocused",
              this.isFocused,
              "isClickable",
              this.isClickable,
              "isSharerGroup",
              this.isSharerGroup
            ) +
            '"' +
            generateAttributesString("href", this.linkUri) +
            '><span id="' +
            htmlAttributeEncode(this.id + "_2") +
            '" class="focusBorder"' +
            generateAttributesString("aria-label", this.linkText) +
            "><div" +
            sutraAttribute("SkyDrive.SetActionableGroupHeaderImage") +
            ' id="' +
            htmlAttributeEncode(this.id + "_3") +
            '" class="groupImage"></div><span class="namePlate"><div' +
            sutraAttribute("SkyDrive.SetActionableGroupHeaderName") +
            ' id="' +
            htmlAttributeEncode(this.id + "_4") +
            '" class="groupName"' +
            generateAttributesString(
              "group-index",
              this.groupIndex,
              "group-type",
              this.groupType
            ) +
            ">" +
            htmlEncode(this.name) +
            "</div><div" +
            sutraAttribute("SkyDrive.SetActionableGroupHeaderSubtext") +
            ' id="' +
            htmlAttributeEncode(this.id + "_5") +
            '" class="groupSubtext">' +
            htmlEncode(this.subText) +
            "</div></span></span></a><a" +
            sutraAttribute("SkyDrive.SetActionableGroupHeaderLink") +
            ' id="' +
            htmlAttributeEncode(this.id + "_6") +
            '" style="' +
            generateStyleAttribute("display", this.showGroupLink) +
            '" class="groupLink"' +
            generateAttributesString("href", this.linkUri) +
            ">" +
            htmlEncode(this.linkText) +
            "</a></" +
            this.baseTag +
            ">"
          );
        }),
        processAnnotations(
          SkyDrive.UI.SetActionableGroupHeader,
          [
            { id: 0, className: ["hasTopBorder", "hasTopBorder"] },
            {
              id: 1,
              attr: ["href", "linkUri"],
              className: [
                "isFocused",
                "isFocused",
                "isClickable",
                "isClickable",
                "isSharerGroup",
                "isSharerGroup",
              ],
              childId: "selectArea",
              userActions: { click: "_onSelectAreaClicked" },
            },
            { id: 2, attr: ["aria-label", "linkText"] },
            { id: 3, childId: "groupImage" },
            {
              id: 4,
              attr: [
                "text",
                "name",
                "group-index",
                "groupIndex",
                "group-type",
                "groupType",
              ],
            },
            { id: 5, attr: ["text", "subText"] },
            {
              id: 6,
              css: ["display", "showGroupLink"],
              attr: ["text", "linkText", "href", "linkUri"],
            },
          ],
          [],
          {}
        );
    }
  ),
  define(
    "renamablegroupheader",
    ["setactionablegroupheader.html"],
    function () {
      !(function () {
        var e = "RenameComplete",
          t = wLive.Core.ViewContext.getInstance();
        defineSubClass(
          "SkyDrive.UI.RenamableGroupHeader",
          JBase.UI.BaseControl,
          function () {
            mix(this, {
              renameBox: this.createChild(SkyDrive.UI.ItemRenameBox, {
                propertyToEdit: null,
                skipValidation: !0,
                autoFocus: !1,
              }),
              showRename: !1,
              showName: !0,
            });
          },
          {
            onActivate: function () {
              this.addElementListener(t, e, this._onRenameComplete);
            },
            onDataContextChanged: function (e) {
              var t = e.item;
              t &&
                ((this.name = t.name || ""),
                (this.groupIndex = String(t.groupIndex)),
                (this.groupType = t.groupingId),
                (this.isClickable = t.isClickable),
                (this.showRename =
                  wLive.Core.SkyDriveItemHelper.isOwnerOrCoOwner(t.parent)),
                (this.showName = !this.showRename),
                this.showRename &&
                  (this.renameBox.setDataContext({
                    item: t,
                    shouldClearState: !0,
                  }),
                  t.data &&
                    t.data.autoFocus &&
                    this.isActive &&
                    (this.renameBox._focusEditBox(), (t.data.autoFocus = !1))));
            },
            _onRenameComplete: function (e, t) {
              if (
                t &&
                t.key == this.dataContext.item.key &&
                t.newValue != this.name
              ) {
                var i = t.newValue;
                (this.name = i),
                  (this.renameBox._isEditingComplete = !1),
                  this.renameBox.renameEventArgs &&
                    (this.renameBox.renameEventArgs.attempt = 0),
                  this._updateBindings();
              }
            },
          }
        );
      })();
    }
  ),
  define("renamablegroupheader.html", ["renamablegroupheader"], function () {
    (SkyDrive.UI.RenamableGroupHeader.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        sutraAttribute("SkyDrive.RenamableGroupHeader") +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><a id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="selectArea"><span class="focusBorder"><span class="namePlate"><div id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" style="' +
        generateStyleAttribute("display", this.showName) +
        '" class="groupName"' +
        generateAttributesString(
          "group-index",
          this.groupIndex,
          "group-type",
          this.groupType
        ) +
        ">" +
        htmlEncode(this.name) +
        '</div><span id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" style="' +
        generateStyleAttribute("display", this.showRename) +
        '" class="renameBox">' +
        this.renameBox.renderHtml() +
        "</span></span></span></a></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.RenamableGroupHeader,
        [
          { id: 0 },
          { id: 1, childId: "selectArea" },
          {
            id: 2,
            css: ["display", "showName"],
            attr: [
              "text",
              "name",
              "group-index",
              "groupIndex",
              "group-type",
              "groupType",
            ],
          },
          { id: 3, css: ["display", "showRename"] },
        ],
        [],
        {}
      );
  }),
  define("setgroupheader", ["renamablegroupheader.html"], function () {
    !(function () {
      defineSubClass(
        "SkyDrive.UI.SetGroupHeader",
        JBase.UI.BaseControl,
        function () {},
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_SetGroupHeader",
          onDataContextChanged: function (e) {
            var t = e.item;
            t &&
              ((this.name = t.name || ""),
              (this.groupIndex = String(t.groupIndex)),
              (this.groupType = t.groupingId),
              (this.headerClass = t.headerClass || ""));
          },
        }
      );
    })();
  }),
  define("setgroupheader.html", ["setgroupheader"], function () {
    (SkyDrive.UI.SetGroupHeader.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><div id="' +
        htmlAttributeEncode(this.id + "_1") +
        '"' +
        generateAttributesString(
          "group-index",
          this.groupIndex,
          "group-type",
          this.groupType,
          "class",
          this.headerClass
        ) +
        ">" +
        htmlEncode(this.name) +
        "</div></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.SetGroupHeader,
        [
          { id: 0 },
          {
            id: 1,
            attr: [
              "text",
              "name",
              "group-index",
              "groupIndex",
              "group-type",
              "groupType",
              "class",
              "headerClass",
            ],
          },
        ],
        [],
        {}
      );
  }),
  define("setgroupfooter", ["setgroupheader.html"], function () {
    !(function () {
      var e = wLive.Core.AleHelpers.getPCString;
      defineSubClass(
        "SkyDrive.UI.SetGroupFooter",
        JBase.UI.BaseControl,
        function () {},
        {
          onDataContextChanged: function (t) {
            var i = t.item || {};
            "sharer" === i.groupingId
              ? ((this.text = e("SharedLanding.SharedByOther")),
                (this.subText = e("SharedLanding.NoSharedByOther")))
              : (this.text = this.subText = "");
          },
        }
      );
    })();
  }),
  define("setgroupfooter.html", ["setgroupfooter"], function () {
    (SkyDrive.UI.SetGroupFooter.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        sutraAttribute("SkyDrive.SetGroupFooter") +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><div><div id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="groupText">' +
        htmlEncode(this.text) +
        '</div><div id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" class="groupSubText">' +
        htmlEncode(this.subText) +
        "</div></div></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.SetGroupFooter,
        [
          { id: 0 },
          { id: 1, attr: ["text", "text"] },
          { id: 2, attr: ["text", "subText"] },
        ],
        [],
        {}
      );
  }),
  define("loadingbar", ["jbase", "basecontrol", "imagetile"], function () {
    !(function () {
      defineSubClass(
        "SkyDrive.UI.LoadingBar",
        JBase.UI.BaseControl,
        function () {},
        {
          fallbackImageUrl: FilesConfig.imgBaseUrl + "common/flyingdots.gif",
          dotColor: "white",
          dotWidth: 4,
          dotHeight: 4,
        }
      );
    })();
  }),
  define("loadingbar.html", ["loadingbar"], function () {
    (SkyDrive.UI.LoadingBar.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        ' c_flyingDots c_loadingDots c_dotsPlaying"><div class="c_loadingFallback"><img alt="" width="100%" id="' +
        htmlAttributeEncode(this.id + "_1") +
        '"' +
        generateAttributesString(
          "src",
          this.fallbackImageUrl,
          "height",
          this.dotHeight
        ) +
        '></img></div><div class="c_loadingTracks"><div class="c_loadingTrack c_loadingTrack5"><div id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" style="' +
        generateStyleAttribute(
          "background-color",
          this.dotColor,
          "width",
          this.dotWidth,
          "height",
          this.dotHeight
        ) +
        '" class="c_loadingDot"></div></div><div class="c_loadingTrack c_loadingTrack4"><div id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" style="' +
        generateStyleAttribute(
          "background-color",
          this.dotColor,
          "width",
          this.dotWidth,
          "height",
          this.dotHeight
        ) +
        '" class="c_loadingDot"></div></div><div class="c_loadingTrack c_loadingTrack3"><div id="' +
        htmlAttributeEncode(this.id + "_4") +
        '" style="' +
        generateStyleAttribute(
          "background-color",
          this.dotColor,
          "width",
          this.dotWidth,
          "height",
          this.dotHeight
        ) +
        '" class="c_loadingDot"></div></div><div class="c_loadingTrack c_loadingTrack2"><div id="' +
        htmlAttributeEncode(this.id + "_5") +
        '" style="' +
        generateStyleAttribute(
          "background-color",
          this.dotColor,
          "width",
          this.dotWidth,
          "height",
          this.dotHeight
        ) +
        '" class="c_loadingDot"></div></div><div class="c_loadingTrack c_loadingTrack1"><div id="' +
        htmlAttributeEncode(this.id + "_6") +
        '" style="' +
        generateStyleAttribute(
          "background-color",
          this.dotColor,
          "width",
          this.dotWidth,
          "height",
          this.dotHeight
        ) +
        '" class="c_loadingDot"></div></div></div></' +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.LoadingBar,
        [
          { id: 0 },
          { id: 1, attr: ["src", "fallbackImageUrl", "height", "dotHeight"] },
          {
            id: 2,
            css: [
              "background-color",
              "dotColor",
              "width",
              "dotWidth",
              "height",
              "dotHeight",
            ],
          },
          {
            id: 3,
            css: [
              "background-color",
              "dotColor",
              "width",
              "dotWidth",
              "height",
              "dotHeight",
            ],
          },
          {
            id: 4,
            css: [
              "background-color",
              "dotColor",
              "width",
              "dotWidth",
              "height",
              "dotHeight",
            ],
          },
          {
            id: 5,
            css: [
              "background-color",
              "dotColor",
              "width",
              "dotWidth",
              "height",
              "dotHeight",
            ],
          },
          {
            id: 6,
            css: [
              "background-color",
              "dotColor",
              "width",
              "dotWidth",
              "height",
              "dotHeight",
            ],
          },
        ],
        [],
        {}
      );
  }),
  define(
    "flashhelper",
    [
      "jbase",
      "basecontrol",
      "imagetile",
      "workmonitor",
      "imagebutton.html",
      "droppablenavlink",
      "alehelpers",
      "errormanager",
      "itemactionhelper",
      "loadingbar.html",
    ],
    function () {
      !(function () {
        function e(e, r) {
          function a() {
            var l;
            try {
              l = o.GetVariable("$version");
            } catch (d) {}
            l
              ? ((n = t(l)), r(i(e)))
              : s > 0
              ? (s--, setTimeout(a, 10))
              : (u.removeChild(o), (n = []), r(!1));
          }
          var o,
            s = 10;
          if (window.ActiveXObject)
            try {
              var l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
              n = l ? t(l.GetVariable("$version")) : [];
            } catch (d) {
              n = [];
            } finally {
              r(i(e));
            }
          else {
            var u = document.body;
            (o = ce("OBJECT")),
              (o.style.position = "absolute"),
              (o.style.left = "99999px"),
              o.setAttribute("type", "application/x-shockwave-flash"),
              u.appendChild(o),
              a();
          }
        }
        function t(e) {
          var t = (e || "").split(" "),
            i = t.length > 1 ? t[1].split(",") : "";
          return i.length > 2
            ? [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)]
            : [];
        }
        function i(e) {
          return (
            e &&
            3 === e.length &&
            3 === n.length &&
            (n[0] > e[0] ||
              (n[0] == e[0] && n[1] > e[1]) ||
              (n[0] == e[0] && n[1] == e[1] && n[2] >= e[2]))
          );
        }
        var n = null;
        defineNamespace("SkyDrive.UI.FlashHelper", {
          checkFlashSupport: function (t, r) {
            null === n ? e(t, r) : r(i(t));
          },
        });
      })();
    }
  ),
  define("videosessionstats", ["flashhelper"], function () {
    !(function () {
      defineClass(
        "SkyDrive.UI.VideoSessionStats",
        function (e) {
          (this._item = e),
            (this._startTime = new Date().getTime()),
            (this._isItemVideo = !(!e || !e.video));
        },
        {
          hasStarted: !1,
          progressSuccessCount: 0,
          progressFailCount: 0,
          decodedFrameCount: null,
          restoreCount: 0,
          errorCount: 0,
          hasEnded: !1,
          _item: null,
          _isItemVideo: !1,
          _startTime: 0,
          complete: function () {
            var e = this.restoreCount > 0 ? "restored-" : "",
              t = Qos.responseType.success,
              i = new Date().getTime(),
              n = i - this._startTime;
            if (this.hasStarted)
              this.progressSuccessCount > 0 &&
              null !== this.decodedFrameCount &&
              this.decodedFrameCount < 2
                ? ((e += "startedDecodingError"),
                  (t = Qos.responseType.unexpected))
                : 0 == this.errorCount
                ? (e += "startedNoError")
                : ((e += "startedWithError"),
                  (t = Qos.responseType.unexpected));
            else if (this.errorCount > 0)
              (e += "noStartWithError"), (t = Qos.responseType.unexpected);
            else {
              if (!(n > 2e3)) return;
              (e += "noStartNoError"), (t = Qos.responseType.expected);
            }
            var r = $B.browser.name + $B.browser.major + "-" + $B.os.name;
            Qos.log(
              "SkyDriveWeb_Internal_Control_VideoPlayer_PlatformSuccess",
              "SkyDrive",
              this._startTime,
              r + ":" + e,
              t,
              null,
              i
            );
          },
        }
      );
    })();
  }),
  define("videodatacontext", ["videosessionstats"], function () {
    !(function () {
      function e() {
        var e = document.createElement("video");
        if (e && e.canPlayType)
          try {
            var t;
            (t = e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')),
              (O = "" !== t && "no" !== t.toLowerCase()),
              (t = e.canPlayType('audio/wav; codecs="1"')),
              (j = t && "no" !== t.toLowerCase()),
              (t = e.canPlayType("application/vnd.apple.mpegURL")),
              ($ =
                "" !== t &&
                "no" !== t.toLowerCase() &&
                ($B.SF_Mac || $B.SF_iPhone)),
              (H =
                !(!O || (!window.MediaSource && !window.WebKitMediaSource)) &&
                (!$B.CR_Win || i("34.0.1847.131")) &&
                !($B.SF_Mac && $B.V >= 8));
          } catch (n) {}
      }
      function t() {
        var e,
          t = navigator.appName,
          i = navigator.userAgent,
          n = i.match(
            /(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i
          );
        return (
          n && null != (e = i.match(/version\/([\.\d]+)/i)) && (n[2] = e[1]),
          (n = n ? [n[1], n[2]] : [t, navigator.appVersion, "-?"]),
          n[1]
        );
      }
      function i(e) {
        for (
          var i = t().split("."), n = e.split("."), r = 0;
          r < i.length && r < n.length;
          r++
        ) {
          var a = Number(i[r]),
            o = Number(n[r]);
          if (a > o) return !0;
          if (o > a) return !1;
        }
        return !0;
      }
      var n = wLive.Core,
        r = n.AleHelpers.getString,
        a = n.ItemActionHelper,
        o = "VideoDataContext",
        s = [10, 0, 0],
        l =
          "/GetDownloadUrl/?{cidQueryString}{resIdQueryString}{authKeyQueryString}&canary={FilesConfig.canary:encodeURIComponent}",
        d = "video/mp4",
        u = "application/vnd.apple.mpegurl",
        c = $B.CR_Android;
      defineNamespace("SkyDrive.UI.VideoPlaybackControlsMode", {
        auto: "default",
        browser: "browser",
        external: "external",
      });
      var h,
        m,
        g = SkyDrive.UI.VideoPlaybackControlsMode,
        f = !(window.$B && ($B.SF_iPhone || c || $B.Mobile)),
        p = !(window.$B && ($B.SF_iPhone || c || $B.Mobile)),
        v = window.$B && ($B.SF_iPhone || c || $B.Mobile) ? g.browser : g.auto,
        y = FilesConfig.isHLSEnabled,
        C = FilesConfig.isHtmlDashEnabled,
        S = FilesConfig.isFlashDashEnabled,
        b = FilesConfig.isNonMp4FlashDashEnabled,
        _ = FilesConfig.isDashlingEnabled,
        k = { unevaluated: 0, evaluating: 1, supported: 2, unsupported: 3 },
        w = k.unevaluated,
        I = "HtmlVideoCanvas",
        x = "HtmlDashVideoCanvas",
        D = "FlashVideoCanvas",
        T = "FlashDashVideoCanvas",
        A = "HtmlHlsVideoCanvas",
        P = "HtmlDashlingVideoCanvas",
        E = {
          htmlmp4: I,
          htmldash: x,
          flashmp4: D,
          flashdash: T,
          hls: A,
          dashling: P,
        },
        B = "video",
        R = "videodiag",
        M = "videonocache",
        F = "testurl",
        L = null,
        U = !1,
        V = 36e5,
        N = "SkyDrive.VideoSettings",
        Q = 2,
        q = {
          volume: 1,
          isMuted: !1,
          defaultVideoQuality: 2,
          defaultAudioQuality: 2,
          showDiagnostics: !1,
        };
      mix(q, BrowserStorage.getLocalValue(N, {}, !0));
      var O,
        H,
        $,
        j,
        z = !1,
        W = r("Video.UnsupportedFormat"),
        G = r("Video.BrowserUnsupportedFormat"),
        K = "H264";
      e(),
        defineNamespace("SkyDrive.UI.VideoErrorCode", {
          resolveUrlError: "resolveUrlError",
          decodeError: "decodeError",
          networkError: "networkError",
          unsupportedFormatError: "unsupportedFormatError",
          loadTimeout: "loadTimeout",
          waitingTimeout: "waitingTimeout",
          unexpectedError: "unexpectedError",
        }),
        defineNamespace("SkyDrive.UI.VideoQuality", {
          quality240: 0,
          quality360: 1,
          quality480: 2,
          quality720: 3,
          quality1080: 4,
        }),
        defineSubClass(
          "SkyDrive.UI.VideoDataContext",
          JBase.DataContext,
          function () {
            if (null === L) {
              var e =
                window.$Config &&
                $Config.AjaxHistory &&
                $Config.AjaxHistory.state
                  ? $Config.AjaxHistory.state
                  : null;
              if (e) {
                var t = e[B];
                t && (h = E[t]), (U = e[M]), (z = e[F]), (m = e[R]);
              }
            }
            mix(this, q);
            var i = SkyDrive.UI.VideoDataContext;
            this.addObjectListener(i, "pauseAll", this._onPauseAll),
              this.addObjectListener(i, "setVolume", this._onSetVolume);
          },
          {
            item: null,
            isAutoPlayEnabled: p,
            playbackControlsMode: v,
            usePosterImageTile: f,
            canPlay: !1,
            isPlaying: !1,
            isLoading: !1,
            isSeeking: !1,
            isExpanded: !1,
            isMuted: !1,
            isWaiting: !1,
            volume: 1,
            duration: 0,
            currentTime: 0,
            bufferRanges: [],
            isQualityChangeSupported: !1,
            autoAdjustQuality: !0,
            playingVideoQuality: 0,
            bufferingVideoQuality: 0,
            bufferingAudioQuality: 0,
            maxVideoQuality: -1,
            maxAudioQuality: -1,
            recoveryAttempts: 0,
            userSeekTime: -1,
            hasUserPaused: !1,
            userVideoQuality: -1,
            hasError: !1,
            isErrorDismissable: !0,
            errorMessage: "",
            debugMessage: "",
            showDiagnostics: !1,
            posterImage: null,
            videoUrl: "",
            videoMimeType: "",
            videoCanvasType: null,
            disableStreaming: !1,
            useStreaming: !1,
            hasCanvasInitialized: null,
            hasCanvasLoaded: null,
            stats: null,
            _currentItem: null,
            _itemLoaded: null,
            _isFetchingUrl: !1,
            reset: function () {
              var e = this._getMaxVideoQuality(),
                t = Math.min(
                  e,
                  c
                    ? SkyDrive.UI.VideoQuality.quality360
                    : q.defaultVideoQuality
                ),
                i = Math.min(Q, q.defaultAudioQuality);
              mix(this, {
                _itemLoaded: null,
                _isFetchingUrl: !1,
                item: null,
                canPlay: !1,
                isLoading: !1,
                isPlaying: !1,
                isSeeking: !1,
                isExpanded: !1,
                isWaiting: !1,
                duration: 0,
                currentTime: 0,
                bufferRanges: [],
                userSeekTime: -1,
                hasUserPaused: !this.isAutoPlayEnabled,
                videoUrl: "",
                videoMimeType: "",
                videoCanvasType: null,
                disableStreaming: !1,
                hasError: !1,
                isErrorDismissable: !0,
                errorMessage: "",
                debugMessage: "",
                showDiagnostics: void 0 !== m ? "1" == m : q.showDiagnostics,
                posterImage: null,
                autoAdjustQuality: !c,
                playingVideoQuality: t,
                bufferingVideoQuality: t,
                maxVideoQuality: e,
                defaultVideoQuality: t,
                bufferingAudioQuality: i,
                defaultAudioQuality: i,
                hasCanvasInitialized: null,
                hasCanvasLoaded: null,
              });
            },
            change: function (e) {
              var t = this.item;
              this._currentItem != t &&
                (this.stats && this.stats.complete(),
                (this._currentItem = t),
                t && (this.stats = new SkyDrive.UI.VideoSessionStats(t))),
                this._itemLoaded != t &&
                  (this.reset(),
                  (this.item = this._itemLoaded = t),
                  (this.duration = t && t.video ? t.video.duration / 1e3 : 0)),
                this.videoUrl || this._evaluateItemPlayability(),
                this.isQualityChangeSupported &&
                  !this.hasError &&
                  ((this.bufferingVideoQuality > this.defaultVideoQuality ||
                    this.bufferingVideoQuality < this.maxVideoQuality) &&
                    this.setDefaultVideoQuality(this.bufferingVideoQuality),
                  (this.bufferingAudioQuality > this.defaultAudioQuality ||
                    this.bufferingAudioQuality < Q) &&
                    this.setDefaultAudioQuality(this.bufferingAudioQuality)),
                this.setShowDiagnostics(this.showDiagnostics),
                change(this, e);
            },
            disableHtmlDash: function () {
              (_ = !1), (C = !1);
            },
            restoreVideo: function (e) {
              if (this.isErrorDismissable) {
                Trace.log(
                  "Restoring video playback (disableStreaming: " + !!e + ")",
                  o
                ),
                  this.stats.restoreCount++,
                  this.setData({ videoCanvasType: null });
                var t = Math.min(this.duration, this.currentTime + 1);
                mix(this, {
                  hasError: !1,
                  videoUrl: null,
                  errorMessage: "",
                  debugMessage: "",
                  hasCanvasInitialized: null,
                  hasCanvasLoaded: null,
                  canPlay: !1,
                  hasUserPaused: !this.isAutoPlayEnabled,
                  isPlaying: !1,
                  isSeeking: !1,
                  isLoading: !1,
                  isWaiting: !1,
                  playingVideoQuality: this.defaultVideoQuality,
                  bufferingVideoQuality: this.defaultVideoQuality,
                  disableStreaming: !!e,
                }),
                  this._evaluateItemPlayability(),
                  (this.userSeekTime = t),
                  this.change();
              }
            },
            isVideoUrlExpired: function () {
              var e = this.item;
              return (
                e &&
                e.downloadUrlTimestamp &&
                new Date().getTime() - e.downloadUrlTimestamp > V
              );
            },
            isAtEndOfVideo: function () {
              var e = this.isSeeking ? this.userSeekTime : this.currentTime;
              return this.duration > 0 && this.duration - e < 0.4;
            },
            setDefaultVideoQuality: function (e) {
              e != q.defaultVideoQuality &&
                (Trace.log("Updating default video quality to: " + e, o),
                (q.defaultVideoQuality = this.defaultVideoQuality = e),
                BrowserStorage.setLocalValue(N, q, !0));
            },
            setDefaultAudioQuality: function (e) {
              e != q.defaultAudioQuality &&
                (Trace.log("Updating default audio quality to: " + e, o),
                (q.defaultAudioQuality = this.defaultAudioQuality = e),
                BrowserStorage.setLocalValue(N, q, !0));
            },
            setShowDiagnostics: function (e) {
              e != q.showDiagnostics &&
                ((q.showDiagnostics = this.showDiagnostics = e),
                BrowserStorage.setLocalValue(N, q, !0));
            },
            resetQuality: function () {
              this.setDefaultVideoQuality(SkyDrive.UI.VideoQuality.quality480),
                this.setDefaultAudioQuality(1);
            },
            _getMaxVideoQuality: function () {
              var e = SkyDrive.UI.VideoQuality,
                t = e.quality240;
              if (this.item && this.item.video) {
                var i = Math.min(this.item.video.width, this.item.video.height);
                i > 720
                  ? (t = e.quality1080)
                  : i > 480
                  ? (t = e.quality720)
                  : i > 360
                  ? (t = e.quality480)
                  : i > 240 && (t = e.quality360);
              }
              return t;
            },
            _getFlashSupportState: function () {
              var e = this;
              return (
                w === k.unevaluated &&
                  ((w = k.evaluating),
                  SkyDrive.UI.FlashHelper.checkFlashSupport(s, function (t) {
                    (e._itemLoaded = null),
                      (w = t ? k.supported : k.unsupported),
                      e.change();
                  })),
                w
              );
            },
            _canPlayInVideoElement: function (e) {
              var t = e && e.video;
              return t && t.fourCC == K && O && ("PCM" != t.audioFormat || j);
            },
            _evaluateItemPlayability: function () {
              var e,
                t,
                i,
                n = this,
                r = n.item,
                a = !(!r || r.did || !r.video),
                o = this._canPlayInVideoElement(r),
                s = !!this.errorMessage && !this.isErrorDismissable,
                l = C || _,
                d = S || (b && a && r.video.fourCC != K);
              if (s) return void (this.videoCanvasType = null);
              if (a) {
                if (h) e = h;
                else {
                  if (!this.disableStreaming)
                    if (H && l) e = _ ? P : x;
                    else if ($ && y) e = A;
                    else if (d)
                      if (
                        ((i = this._getFlashSupportState()), i == k.supported)
                      )
                        e = T;
                      else if (i == k.evaluating) return;
                  e || (o && (e = I));
                }
                e || (t = G);
              } else r && !r.isPlaceholder && (t = W);
              (this.useStreaming = e == T || e == x || e == P),
                (this.isQualityChangeSupported = e == x || e == P),
                (this.videoCanvasType = e),
                t &&
                  ((this.errorMessage = t),
                  (this.isErrorDismissable = !1),
                  (this.hasError = !0)),
                e &&
                  ((this.videoUrl = this._getVideoUrl(r)),
                  this.videoUrl || this._fetchDownloadUrl(r));
            },
            _getVideoUrl: function (e) {
              var t = this,
                i = e.downloadUrlTimestamp
                  ? new Date().getTime() - e.downloadUrlTimestamp
                  : V + 1,
                n = V >= i ? e.downloadUrl : "";
              return (
                n &&
                  ($B.SF_Android &&
                    $B.V < 4 &&
                    0 === n.toLowerCase().indexOf("https:") &&
                    (n = "http" + n.substr(5)),
                  t.useStreaming
                    ? ((n += "&videoformat=dash&part=index"),
                      U && (n += "&cacheDisable=1"),
                      t.videoCanvasType == P
                        ? ((n += "&pretranscode=0"), (n += "&transcodeahead=0"))
                        : t.videoCanvasType == T &&
                          ((n += "&pretranscode=0"),
                          (n += "&.ism/manifest(format=mpd-time-csf)")))
                    : t.videoCanvasType == A
                    ? ((n += "&videoformat=hls&part=index"),
                      (t.videoMimeType = u),
                      U && (n += "&cacheDisable=1"))
                    : (t.videoMimeType = d)),
                n
              );
            },
            _fetchDownloadUrl: function (e) {
              function t(t) {
                (o._isFetchingUrl = !1),
                  o.item === e &&
                    t.DownloadUrl &&
                    ((e.downloadUrl = t.DownloadUrl),
                    (e.downloadUrlTimestamp = new Date().getTime()),
                    o.change());
              }
              function i() {
                (o._isFetchingUrl = !1),
                  o.setData({
                    hasError: !0,
                    errorMessage: r("Video.LoadError"),
                    hasUserPaused: !0,
                  });
              }
              var o = this;
              if (e && e.video && !o._isFetchingUrl) {
                var s = a.itemStringFormat(l, e),
                  d = new n.DataRequest(s, s, null, t, i);
                (d.apiId = "SkyDrive_Json_GetDownloadUrl"),
                  (d.propertyId = "SkyDrive"),
                  d.start(),
                  (o._isFetchingUrl = !0);
              }
            },
            _onPauseAll: function () {
              this.hasUserPaused || ((this.hasUserPaused = !0), this.change());
            },
            _onSetVolume: function (e) {
              (this.volume == e.volume && this.isMuted == e.isMuted) ||
                ((this.volume = e.volume),
                (this.isMuted = e.isMuted),
                this.change());
            },
          },
          {
            pauseAll: function () {
              raiseEvent(SkyDrive.UI.VideoDataContext, "pauseAll");
            },
            setVolume: function (e, t) {
              (e == q.volume && t == q.isMuted) ||
                ((q.volume = e),
                (q.isMuted = t),
                BrowserStorage.setLocalValue(N, q, !0),
                raiseEvent(SkyDrive.UI.VideoDataContext, "setVolume", {
                  volume: e,
                  isMuted: t,
                }));
            },
          }
        );
    })();
  }),
  define("basevideocanvas", ["videodatacontext"], function () {
    !(function () {
      var e = wLive.Core,
        t = e.AleHelpers.getString,
        i = Qos.responseType,
        n = SkyDrive.UI.VideoErrorCode,
        r = SkyDrive.UI.VideoDataContext,
        a = 6e4,
        o = 3e4,
        s = 200,
        l = 500,
        d = window.$B && ($B.SF_iPhone || $B.CR_Android || $B.Mobile),
        u = "SkyDrive",
        c = "Load",
        h = "Recovery",
        m = "Playback",
        g = "Seek",
        f = "Unexpected",
        p = "success",
        v = "canceled",
        y = 0.9,
        C = 5e3,
        S = 500,
        b = SkyDrive.UI.VideoPlaybackControlsMode;
      defineNamespace("SkyDrive.UI.BaseVideoCanvasErrorCodes", {
        pause: "pause",
      }),
        defineSubClass(
          "SkyDrive.UI.BaseVideoCanvas",
          JBase.UI.BaseControl,
          function () {},
          {
            traceCategory: "BaseVideoCanvas",
            videoFormatBase: "",
            _lastVolume: -1,
            _isMuted: null,
            _lastCurrentTimeSet: 0,
            _loadingTimerId: 0,
            _playbackTimerId: 0,
            _waitingTimerId: 0,
            _lastLoadTime: 0,
            _lastWaitTime: 0,
            _lastSeekTime: 0,
            _lastSegmentTimeUpdates: 0,
            _lastSegmentStartTime: 0,
            _lastSegmentCurrentTime: 0,
            _lastSegmentProgressTime: 0,
            _doReset: null,
            _doInitialize: null,
            _doLoad: null,
            _doPlay: null,
            _doPause: null,
            _doSeek: null,
            _doSetMute: null,
            _doSetVolume: null,
            _doAdjustQuality: null,
            onDataContextChanged: function (e) {
              if (this.isActive)
                if (e.videoUrl) {
                  var t = null === e.hasCanvasInitialized,
                    i = null === e.hasCanvasLoaded && !e.hasError;
                  t
                    ? ((e.hasCanvasInitialized = !1),
                      (e.isLoading = !0),
                      this._resetState(),
                      e.isAutoPlayEnabled && this._startLoadMonitor(),
                      this._initialize())
                    : e.hasCanvasInitialized &&
                      (i && ((e.hasCanvasLoaded = !0), this._load(e.videoUrl)),
                      this._updateVideoState(e));
                } else e.hasCanvasLoaded && this._reset();
            },
            onActivate: function () {
              this.change();
            },
            onDeactivate: function () {
              this._resetState(), this._reset();
            },
            _startLoadMonitor: function () {
              this._loadingTimerId ||
                ((this._lastLoadTime = new Date().getTime()),
                (this._loadingTimerId = this.setTimeout(
                  this._onLoadTimeout,
                  a
                )));
            },
            _resetState: function () {
              this._stopPlaybackMonitor(),
                this._stopWaitingMonitor(!0),
                this._logLoadTimes(v),
                this.clearTimeout(this._loadingTimerId),
                mix(this, {
                  _lastVolume: -1,
                  _isMuted: null,
                  _lastCurrentTimeSet: -1,
                  _lastSegmentStartTime: 0,
                  _lastSegmentProgressTime: 0,
                });
            },
            _onInitialized: function () {
              var e = this;
              Trace.log("event: initialized", e.traceCategory),
                e.dataContext.setData({ hasCanvasInitialized: !0 });
            },
            _onLoadStart: function () {
              Trace.log("event: loadstart", this.traceCategory),
                this.dataContext.setData({ isWaiting: !0, isLoading: !0 }),
                this.dataContext.hasUserPaused || this._play();
            },
            _onCanPlay: function () {
              Trace.log("event: canplay", this.traceCategory),
                this.clearTimeout(this._loadingTimerId),
                (this._loadingTimerId = 0),
                this.dataContext.hasUserPaused && this._logLoadTimes(),
                this.dataContext.setData({ canPlay: !0, isLoading: !1 });
            },
            _onPlay: function () {
              Trace.log("event: play", this.traceCategory),
                this.dataContext.setData({
                  isPlaying: !0,
                  hasUserPaused: !1,
                  isWaiting: !1,
                });
            },
            _onPause: function () {
              Trace.log("event: pause", this.traceCategory),
                this._stopPlaybackMonitor(),
                this.dataContext.setData({ isPlaying: !1, hasUserPaused: !0 });
            },
            _onVolumeChange: function (e, t) {
              Trace.log(
                "event: volumechange (volume: " + e + ", muted: " + t + ")",
                this.traceCategory
              ),
                r.setVolume(e, t);
            },
            _onWaiting: function () {
              var e = this.dataContext;
              e.isWaiting ||
                e.isUserSeeking ||
                (e.isAtEndOfVideo()
                  ? (Trace.log(
                      "event: waiting - end of video",
                      this.traceCategory
                    ),
                    this._onEnded())
                  : (Trace.log("event: waiting", this.traceCategory),
                    e.setData({ isWaiting: !0 }),
                    e.isLoading ||
                      e.hasUserPaused ||
                      this._startWaitingMonitor()));
            },
            _onPlaying: function () {
              this.dataContext.isWaiting &&
                (Trace.log("event: playing", this.traceCategory),
                this.dataContext.setData({
                  recoveryAttempts: 0,
                  isWaiting: !1,
                  isSeeking: !1,
                }));
            },
            _onEnded: function () {
              Trace.log("event: ended", this.traceCategory),
                this._stopPlaybackMonitor(),
                (this.dataContext.stats.hasEnded = !0),
                this.dataContext.setData({
                  hasUserPaused: !0,
                  currentTime: this.dataContext.duration,
                });
              var e = this.dataContext.item || {};
              raiseEvent(SkyDrive.UI.BaseVideoCanvas, "complete", {
                itemKey: e.key,
              });
            },
            _onTimeUpdate: function (e, t) {
              var i = new Date().getTime(),
                n = i - this._lastSegmentProgressTime,
                r = { duration: t };
              (e = Math.min(e, t)),
                (this._lastSegmentProgressTime = i),
                this._lastSegmentTimeUpdates++,
                !e ||
                  this.dataContext.hasUserPaused ||
                  this.dataContext.isSeeking ||
                  this.dataContext.userSeekTime != this._lastCurrentTimeSet ||
                  ((r.currentTime = e),
                  S > n &&
                    e > this.dataContext.currentTime &&
                    ((this.dataContext.stats.hasStarted = !0),
                    (this._lastCurrentTimeSet = this.dataContext.userSeekTime =
                      -1),
                    this._startPlaybackMonitor(),
                    (r.isLoading = r.isWaiting = !1),
                    (r.isPlaying = !0))),
                this.dataContext.setData(r);
            },
            _onProgress: function (e) {
              this.dataContext.setData({ bufferRanges: e });
            },
            _onError: function (e, t) {
              var i = this.dataContext;
              if (
                (i.stats.errorCount++,
                i &&
                  i.videoUrl &&
                  !i.hasError &&
                  i.currentTime < this.dataContext.duration)
              ) {
                var r = "",
                  a = !!this._lastLoadTime;
                Trace.log("event: error (" + e + ")", this.traceCategory),
                  this._logLoadTimes(e);
                var o = 2;
                if (
                  i.recoveryAttempts < o &&
                  (e == n.waitingTimeout || "initSegmentDownload" === e)
                ) {
                  i.recoveryAttempts++;
                  var s = i.recoveryAttempts === o;
                  i.restoreVideo(s);
                } else {
                  var l = {
                    errorMessage: this._getMessageForError(e),
                    debugMessage: r || "",
                    hasError: !0,
                    isLoading: !1,
                    isWaiting: !1,
                    hasUserPaused: !0,
                    hasCanvasInitialized: !1,
                    hasCanvasLoaded: !1,
                    videoCanvasType: null,
                    disableStreaming: a ? !0 : i.disableStreaming,
                    canPlay: !1,
                    userSeekTime: i.currentTime,
                  };
                  a && (l.hasCanvasInitialized = !1),
                    this._logAction(f, 0, e),
                    t !== SkyDrive.UI.BaseVideoCanvasErrorCodes.pause &&
                      this._pause(),
                    i.resetQuality(),
                    i.setData(l),
                    raiseEvent(SkyDrive.UI.BaseVideoCanvas, "error", {
                      itemKey: i.item.key,
                    });
                }
              }
            },
            _onLoadTimeout: function (e) {
              (e = e ? " " + e : ""),
                (this._loadingTimerId = 0),
                this._onError(
                  n.loadTimeout + e,
                  "loadTimeout: " +
                    a +
                    "ms passed before load events were received."
                );
            },
            _onSeeking: function () {
              Trace.log("event: seeking", this.traceCategory),
                this.dataContext.setData({ isSeeking: !0 });
            },
            _onSeeked: function () {
              Trace.log(
                "event: seeked (currentTime: " +
                  this.dataContext.currentTime +
                  ")",
                this.traceCategory
              ),
                this.dataContext.setData({ isSeeking: !1 });
            },
            _initialize: function () {
              Trace.log(
                "action: initialize (videoUrl: " +
                  this.dataContext.videoUrl +
                  ")",
                this.traceCategory
              ),
                this._doInitialize
                  ? this._doInitialize()
                  : this._onInitialized();
            },
            _load: function (e) {
              Trace.log(
                "action: load (videoUrl: " + e + ")",
                this.traceCategory
              ),
                (this._lastLoadTime = new Date().getTime()),
                this._doLoad && this._doLoad(e);
            },
            _play: function () {
              var e = this;
              (d && e.dataContext.playbackControlsMode !== b.external) ||
                (Trace.log(
                  "action: play (currentTime: " +
                    e.dataContext.currentTime +
                    ")",
                  e.traceCategory
                ),
                e._doPlay && e._doPlay());
            },
            _pause: function () {
              var e = this;
              (d && e.dataContext.playbackControlsMode !== b.external) ||
                (Trace.log(
                  "action: pause (currentTime: " +
                    e.dataContext.currentTime +
                    ")",
                  e.traceCategory
                ),
                e._stopPlaybackMonitor(),
                e._stopWaitingMonitor(!0),
                e.clearTimeout(e._loadingTimerId),
                (e._lastSeekTime = e._lastLoadTime = e._loadingTimerId = 0),
                e._doPause && e._doPause());
            },
            _seek: function (e, t) {
              Trace.log("action: seek (" + e + ")", this.traceCategory),
                this._stopPlaybackMonitor(),
                this._stopWaitingMonitor(!0),
                e == this.dataContext.duration
                  ? ((this._lastSeekTime = -1),
                    this.dataContext.setData({
                      userSeekTime: -1,
                      currentTime: e,
                      hasUserPaused: !0,
                    }))
                  : (t || (this._lastSeekTime = new Date().getTime()),
                    this.dataContext.setData({
                      userSeekTime: e,
                      currentTime: e,
                    }),
                    this._doSeek && this._doSeek(e));
            },
            _reset: function () {
              Trace.log("action: reset", this.traceCategory),
                this._doReset && this._doReset();
            },
            _setMute: function (e) {
              this._isMuted != e &&
                (Trace.log("action: setMuted (" + e + ")", this.traceCategory),
                (this._isMuted = e),
                this._doSetMute && this._doSetMute(e));
            },
            _setVolume: function (e) {
              this._lastVolume != e &&
                (Trace.log("action: setVolume (" + e + ")", this.traceCategory),
                (this._lastVolume = e),
                this._doSetVolume && this._doSetVolume(e));
            },
            _adjustQuality: function (e) {
              e.isQualityChangeSupported &&
                this._doAdjustQuality &&
                this._doAdjustQuality(e);
            },
            _updateVideoState: function (e) {
              var t = this;
              if (!e.hasError && e.duration > 0 && e.canPlay) {
                if (
                  (t._setMute(e.isMuted),
                  t._setVolume(e.volume),
                  t._adjustQuality(e),
                  e.isPlaying &&
                    e.hasUserPaused &&
                    (e.setData({ isPlaying: !1 }), t._pause()),
                  t._lastCurrentTimeSet != e.userSeekTime && !e.isSeeking)
                ) {
                  var i = Math.abs(e.userSeekTime - t._lastCurrentTimeSet);
                  i > 0.01 &&
                    t.throttle(
                      t.id + "seek",
                      s,
                      l,
                      function () {
                        t.isActive &&
                          -1 != e.userSeekTime &&
                          ((t._lastCurrentTimeSet = e.currentTime =
                            e.userSeekTime),
                          t._seek(t._lastCurrentTimeSet));
                      },
                      !0
                    );
                }
                var n = e.isAtEndOfVideo();
                e.isPlaying ||
                  e.hasUserPaused ||
                  (n && t._seek(0, !0),
                  e.setData({ isPlaying: !0 }),
                  t._play());
              }
            },
            _getMessageForError: function (e) {
              var i;
              switch (e) {
                case n.networkError:
                  i = t("Video.LoadErrorNetwork");
                  break;
                case n.decodeError:
                  i = t("Video.LoadErrorDecode");
                  break;
                default:
                  i = t("Video.LoadError");
              }
              return i;
            },
            _bucketizeDuration: function (e, t) {
              var i = "(";
              t = t || [0, 1, 2, 4, 6, 9, 12, 15, 20];
              for (var n = 1; n < t.length; n++) {
                if (e < t[n]) {
                  i += t[n - 1] + "s-" + t[n] + "s";
                  break;
                }
                n + 1 == t.length && (i += "beyond " + t[n] + "s");
              }
              return (i += ")");
            },
            _logAction: function (e, t, n, r, a) {
              if (((n = n || ""), (r = r || i.success), a)) {
                var o = new Date().getTime(),
                  s = t ? (o - t) / 1e3 : 0;
                n += " " + this._bucketizeDuration(s);
              }
              this._logQos(e, n, r, o - t);
            },
            _logQos: function (e, t, i, n) {
              var r = this.apiIdBase + "_" + e + "_" + this.videoFormatBase,
                a = new Date().getTime(),
                o = n ? ", took " + n + "ms" : "";
              Trace.log(
                "Reporting: " +
                  r +
                  o +
                  ", responseType: " +
                  i +
                  ", responseCode: " +
                  t,
                this.traceCategory
              ),
                Qos.log(r, u, a - (n || 0), t, i, null, a);
            },
            _logLoadTimes: function (e) {
              var t = e && e != v ? i.unexpected : i.success;
              if (
                ((e = e || p),
                this._lastLoadTime &&
                  (this.clearTimeout(this._loadingTimerId),
                  (e != v ||
                    new Date().getTime() - this._lastLoadTime >= 4e3) &&
                    this._logAction(c, this._lastLoadTime, e, t, !0),
                  (this._lastLoadTime = this._loadingTimerId = 0),
                  this.dataContext.setData({ isLoading: !1 })),
                this._lastSeekTime)
              ) {
                var n = e == p || e == v;
                this._logAction(g, this._lastSeekTime, e, t, n),
                  (this._lastSeekTime = 0);
              }
            },
            _startPlaybackMonitor: function () {
              !this._playbackTimerId &&
                this.dataContext.isPlaying &&
                (this._lastSegmentStartTime ||
                  this.dataContext.isWaiting ||
                  (this._logLoadTimes(),
                  this._stopWaitingMonitor(!1),
                  Trace.log("start: playback monitor", this.traceCategory),
                  (this._lastSegmentStartTime = new Date().getTime()),
                  (this._lastSegmentCurrentTime =
                    this.dataContext.currentTime)),
                (this._playbackTimerId = this.setTimeout(
                  this._checkPlaybackProgress,
                  S
                )));
            },
            _stopPlaybackMonitor: function () {
              this._playbackTimerId &&
                (Trace.log("stop: playback monitor", this.traceCategory),
                this.clearTimeout(this._playbackTimerId),
                (this._playbackTimerId = 0)),
                (this._lastSegmentStartTime = 0),
                (this._lastSegmentCurrentTime = 0),
                (this._lastSegmentTimeUpdates = 0);
            },
            _checkPlaybackProgress: function () {
              var e = new Date().getTime(),
                t = this.dataContext,
                n = t.currentTime,
                r = t.duration,
                a = this._lastSegmentProgressTime
                  ? e - this._lastSegmentProgressTime
                  : 0,
                o = this._lastSegmentStartTime
                  ? e - this._lastSegmentStartTime
                  : 0,
                s = !1;
              if (
                ((this._playbackTimerId = 0),
                a > S && this._onWaiting(),
                o >= C)
              ) {
                var l = this._lastSegmentCurrentTime + C / 1e3 < r,
                  d = y * Math.min(C / 1e3, r - this._lastSegmentCurrentTime),
                  u = n - this._lastSegmentCurrentTime,
                  c = u >= d,
                  h =
                    "timeUpdates: " +
                    this._lastSegmentTimeUpdates +
                    " (" +
                    Math.round((1e3 * this._lastSegmentTimeUpdates) / C) +
                    " events/sec), timePassed: " +
                    u +
                    "s, expected: " +
                    d +
                    "s",
                  g = this.dataContext.stats;
                if (
                  (c
                    ? (Trace.log(
                        "Progress acceptable. " + h,
                        this.traceCategory
                      ),
                      g.progressSuccessCount++,
                      l && this._logAction(m))
                    : (g.progressFailCount++,
                      n > r - 1
                        ? (Trace.log(
                            "Progress insufficient, ending video. " + h,
                            this.traceCategory
                          ),
                          l &&
                            this._logAction(
                              m,
                              0,
                              "insufficientUpdatesAtEnd",
                              i.unexpected
                            ),
                          this._onEnded())
                        : (Trace.log(
                            "Progress insufficient, waiting. " + h,
                            this.traceCategory
                          ),
                          l &&
                            this._logAction(
                              m,
                              0,
                              "insufficientUpdates",
                              i.unexpected
                            ),
                          this._onWaiting()),
                      (s = !0)),
                  this._stopPlaybackMonitor(),
                  null !== g.decodedFrameCount && g.decodedFrameCount < 2)
                )
                  return (
                    (g.decodedFrameCount = null),
                    t.disableHtmlDash(),
                    void t.restoreVideo()
                  );
              }
              t.hasUserPaused || s || this._startPlaybackMonitor();
            },
            _startWaitingMonitor: function () {
              var e = this;
              (d && e.dataContext.playbackControlsMode !== b.external) ||
                e._waitingTimerId ||
                e._loadingTimerId ||
                (Trace.log("start: waiting monitor", e.traceCategory),
                (e._lastWaitTime = new Date().getTime()),
                (e._waitingTimerId = e.setTimeout(e._onWaitingTimeout, o)));
            },
            _stopWaitingMonitor: function (e) {
              this._waitingTimerId &&
                (this.dataContext.stats.recoverySuccessCount++,
                Trace.log("stop: waiting monitor", this.traceCategory),
                this._logAction(
                  h,
                  this._lastWaitTime,
                  e ? v : null,
                  e ? i.success : null,
                  !0
                ),
                this.clearTimeout(this._waitingTimerId),
                (this._waitingTimerId = 0));
            },
            _onWaitingTimeout: function () {
              this.dataContext.stats.recoveryFailCount++,
                this._logAction(h, this._lastWaitTime, n.waitingTimeout),
                (this._waitingTimerId = 0),
                this._onError(
                  n.waitingTimeout,
                  "waitingTimeout: " +
                    o +
                    "ms passed before load events were received."
                );
            },
          }
        );
    })();
  }),
  define("flashvideocanvas", ["basevideocanvas"], function () {
    !(function () {
      var e = SkyDrive.UI.BaseVideoCanvas.prototype,
        t = "FlashVideoCanvas",
        i = FilesConfig.imgBaseUrl + FilesConfig.flashVideoUrl,
        n = FilesConfig.imgBaseUrl + FilesConfig.flashOSMFUrl,
        r = {};
      defineSubClass(
        "SkyDrive.UI.FlashVideoCanvas",
        SkyDrive.UI.BaseVideoCanvas,
        function () {},
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_FlashVideoCanvas",
          videoFormatBase: "Mp4",
          traceCategory: t,
          canPlay: !1,
          _playerId: "",
          _playerElement: null,
          _applyingVolume: null,
          _applyingMuted: null,
          _bridgeCreated: !1,
          _loadStarted: !1,
          onInitialize: function () {
            this._playerId = this.id + "-flashPlayer";
          },
          onActivate: function () {
            this.change(), e.onActivate && e.onActivate.apply(this, arguments);
          },
          onDeactivate: function () {
            this._removeFlashPlayer(),
              e.onDeactivate && e.onDeactivate.apply(this, arguments);
          },
          _onLoadTimeout: function () {
            e._onLoadTimeout.call(
              this,
              "(bridgeCreated: " +
                this._bridgeCreated +
                ", loadStarted: " +
                this._loadStarted +
                ")"
            );
          },
          _doInitialize: function (e) {
            this._createFlashPlayer(this.dataContext);
          },
          _doLoad: function (e) {},
          _doReset: function () {
            this._removeFlashPlayer();
          },
          _doSeek: function (e) {
            try {
              this._playerElement.seek(e);
            } catch (t) {
              this._onError("exception: seek");
            }
          },
          _doSetMute: function (e) {
            this._applyingMuted = e;
            try {
              this._playerElement.setMuted(e);
            } catch (t) {
              this._onError("exception: setMuted");
            }
          },
          _doSetVolume: function (e) {
            this._applyingVolume = e;
            try {
              this._playerElement.setVolume(e);
            } catch (t) {
              this._onError("exception: setVolume");
            }
          },
          _doAdjustQuality: function (e) {},
          _doPlay: function () {
            try {
              this._playerElement.play2();
            } catch (e) {
              this._onError("exception: play2");
            }
          },
          _doPause: function () {
            try {
              this._playerElement.pause();
            } catch (e) {
              this._onError(
                "exception: pause",
                SkyDrive.UI.BaseVideoCanvasErrorCodes.pause
              );
            }
          },
          _handlePlayerEvent: function (e, i) {
            var n = this._playerElement;
            if (
              (!n &&
                this._playerId &&
                (n = this._playerElement = byId(this._playerId)),
              n)
            )
              switch (e) {
                case "onJavaScriptBridgeCreated":
                  (this._bridgeCreated = !0), this._onInitialized();
                  break;
                case "loadstart":
                  (this._loadStarted = !0), this._onLoadStart();
                  break;
                case "error":
                  this._onError(SkyDrive.UI.VideoErrorCode.unexpectedError, i);
                  break;
                case "emptied":
                  Trace.log("event: emptied", t),
                    this.dataContext.setData({ canPlay: !0 });
                  break;
                case "durationchange":
                  break;
                case "play":
                  this._onPlay();
                  break;
                case "pause":
                  this._onPause();
                  break;
                case "loadedmetadata":
                  (this.canPlay = !0),
                    this._updateBindings(),
                    this._onCanPlay();
                  break;
                case "seeking":
                  this._onSeeking();
                  break;
                case "seeked":
                  this._onSeeked();
                  break;
                case "timeupdate":
                  this._onTimeUpdate(i.currentTime, this.dataContext.duration);
                  break;
                case "progress":
                  for (
                    var r = [], a = 0;
                    i.buffered && a < i.buffered.length;
                    a++
                  )
                    r.push({
                      key: a,
                      start: i.buffered._start[a],
                      end: i.buffered._end[a],
                      max: this.dataContext.duration,
                    });
                  this._onProgress(r);
                  break;
                case "volumechange":
                  null === this._applyingVolume && null === this._applyingMuted
                    ? this._onVolumeChange(i.volume, i.muted)
                    : (i.volume === this._applyingVolume &&
                        (this._applyingVolume = null),
                      i.muted === this._applyingMuted &&
                        (this._applyingMuted = null));
                  break;
                case "complete":
                  this._onEnded();
                  break;
                default:
                  Trace.log("Unknown event: " + e, this.traceCategory);
              }
          },
          _removeFlashPlayer: function () {
            var e = this._playerElement,
              t = this;
            if (((t.canPlay = !1), e)) {
              if ($B.IE)
                (e.style.display = "none"),
                  (function () {
                    4 == e.readyState
                      ? t._removeFlashPlayerIE(e)
                      : t.setTimeout(t._removeFlashPlayer, 10);
                  })();
              else {
                Trace.log("Removing flash player", this.traceCategory);
                try {
                  !!e.parentNode && e.parentNode.removeChild(e);
                } catch (i) {}
              }
              delete r[this._playerId], (t._playerElement = null);
            }
            this.element && setHtml(this.element, "");
          },
          _removeFlashPlayerIE: function (e) {
            if (e) {
              for (var t in e) "function" == typeof e[t] && (e[t] = null);
              Trace.log("Removing flash player", this.traceCategory),
                !!e.parentNode && e.parentNode.removeChild(e);
            }
          },
          _createFlashPlayer: function (e) {
            var t = this._playerId,
              r =
                "javascriptCallbackFunction=SkyDrive.UI.FlashVideoCanvas.onJavaScriptBridgeCreated&autoPlay=" +
                !!e.isAutoPlayEnabled +
                "&loop=false&controlBarMode=none&enableStageVideo=true&controlBarAutoHide=false&playButtonOverlay=false&id=" +
                t +
                "&useHTML5=false&bufferingOverlay=false&src=" +
                encodeURIComponent(e.videoUrl);
            e.useStreaming &&
              (r += "&plugin_AdaptiveStreamingPlugin=" + encodeURIComponent(n));
            var a;
            (a =
              $B.IE && $B.V < 9
                ? '<object id="' +
                  t +
                  '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"><param name="movie" value="' +
                  i +
                  '" />'
                : '<object id="' +
                  t +
                  '" name="' +
                  t +
                  '" type="application/x-shockwave-flash" data="' +
                  i +
                  '">'),
              (a +=
                '<param name="allowfullscreen" value="false" /><param name="wmode" value="transparent" /><param name="bgcolor" value="000000"/><param name="allowscriptaccess" value="always"/><param name="flashvars" value="' +
                r +
                '" /></object>'),
              this._removeFlashPlayer(),
              setHtml(this.element, a),
              Trace.log("Creating flash player", this.traceCategory);
          },
        },
        {
          onJavaScriptBridgeCreated: function (e, t, i) {
            var n = r[e];
            if (!n) {
              var a = byId(e);
              a && a.parentNode && (r[e] = n = a.parentNode.control);
            }
            n && n._handlePlayerEvent(t, i);
          },
        }
      );
    })();
  }),
  define("flashvideocanvas.html", ["flashvideocanvas"], function () {
    (SkyDrive.UI.FlashVideoCanvas.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        generateClassAttribute("isPlayable", this.canPlay) +
        '"></' +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.FlashVideoCanvas,
        [{ id: 0, className: ["isPlayable", "canPlay"] }],
        [],
        {}
      );
  }),
  define("flashdashvideocanvas", ["flashvideocanvas.html"], function () {
    !(function () {
      var e = "FlashDashVideoCanvas",
        t = SkyDrive.UI.BaseVideoCanvas.prototype;
      defineSubClass(
        "SkyDrive.UI.FlashDashVideoCanvas",
        SkyDrive.UI.FlashVideoCanvas,
        function () {},
        {
          traceCategory: e,
          videoFormatBase: "Dash",
          _hasCalledLoad: !1,
          _doReset: function () {
            this._hasCalledLoad = !1;
          },
          _onLoadStart: function () {
            if (!this._hasCalledLoad) {
              this.element;
              Trace.log("action: calling load() on flash player.", e),
                (this._hasCalledLoad = !0),
                this._playerElement.load();
            }
            SkyDrive.UI.BaseVideoCanvas.prototype._onLoadStart.call(
              this,
              arguments
            );
          },
          _onDashError: function (e, i) {
            this.dataContext.isLoading
              ? (Trace.log(
                  "Dash error during video load, falling back to not use streaming.",
                  this.traceCategory
                ),
                this._logLoadTimes("dashDownloadManifestError"),
                this.dataContext.restoreVideo(!0))
              : t._onError.call(this, e, i);
          },
        }
      ),
        defineNamespace("org.strobemediaplayback", {
          triggerHandler: function (t, i, n) {
            var r,
              a = n && n.error ? n.error.code : "n/a",
              o = byId(t);
            o && o.parentNode && (r = o.parentNode.control),
              r && r._onDashError(i, a),
              Trace.log(
                "event: triggerHandler (" + i + ", code: " + a + ")",
                e
              );
          },
        });
    })();
  }),
  define("htmlvideocanvas", ["flashdashvideocanvas"], function () {
    !(function () {
      var e = SkyDrive.UI.BaseVideoCanvas.prototype,
        t = SkyDrive.UI.VideoErrorCode,
        i = SkyDrive.UI.VideoPlaybackControlsMode,
        n = "HtmlVideoCanvas",
        r = {
          loadstart: "_onLoadStart",
          canplay: "_onCanPlay",
          error: "_onVideoElementError",
          progress: "_onProgress",
          ended: "_onEnded",
          volumechange: "_onVolumeChange",
          play: "_onPlay",
          pause: "_onPause",
          waiting: "_onWaiting",
          playing: "_onPlaying",
          timeupdate: "_onTimeUpdate",
          seeking: "_onSeeking",
          seeked: "_onSeeked",
        },
        a = 400;
      defineSubClass(
        "SkyDrive.UI.HtmlVideoCanvas",
        SkyDrive.UI.BaseVideoCanvas,
        function () {},
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_HtmlVideoCanvas",
          videoFormatBase: "Mp4",
          isPlayerReady: !0,
          traceCategory: n,
          _autoAdjustQuality: null,
          _videoQuality: null,
          _videoElement: null,
          onDataContextChanged: function (t) {
            e.onDataContextChanged.apply(this, arguments);
          },
          onDeactivate: function () {
            this._reset(),
              e.onDeactivate && e.onDeactivate.apply(this, arguments);
          },
          _createVideoElement: function (e, t, n) {
            var a = this,
              o = (this._videoElement = document.createElement("video"));
            !e.usePosterImageTile &&
              e.posterImage &&
              o.setAttribute("poster", e.posterImage.url),
              e.playbackControlsMode === i.browser &&
                o.setAttribute("controls", "");
            for (var s in r) a.addElementListener(o, s, a[r[s]]);
            if (t) {
              var l = document.createElement("source");
              l.setAttribute("src", t),
                l.setAttribute("type", n),
                o.appendChild(l);
            }
            return this.element.appendChild(o), o;
          },
          _removeVideoElement: function () {
            var e = this;
            if (e._videoElement) {
              var t = e._videoElement;
              for (var i in r) e.removeElementListener(t, i, e[r[i]]);
              this.element && this.element.removeChild(t);
              try {
                t.pause();
              } catch (n) {}
              e._videoElement = null;
            }
          },
          _onCanPlay: function () {
            e._onCanPlay.apply(this, arguments);
          },
          _onVolumeChange: function () {
            var t = this._videoElement;
            e._onVolumeChange.call(this, t.volume, t.muted);
          },
          _onProgress: function () {
            e._onProgress.call(this, this._getBufferRanges());
          },
          _onTimeUpdate: function () {
            var t = this._videoElement;
            this.dataContext;
            t &&
              t.duration &&
              (t.webkitDecodedFrameCount &&
                (this.dataContext.stats.decodedFrameCount =
                  t.webkitDecodedFrameCount),
              e._onTimeUpdate.call(this, t.currentTime, t.duration),
              e._onProgress.call(this, this._getBufferRanges()));
          },
          _onVideoElementError: function (i) {
            var n,
              r = this,
              o = r._videoElement,
              s = o && o.error ? o.error.code : 0,
              l = r.dataContext ? r.dataContext.videoUrl : "";
            if (s && l) {
              switch (s) {
                case 1:
                  break;
                case 2:
                  (s = "MEDIA_ERR_NETWORK"), (n = t.networkError);
                  break;
                case 3:
                  (s = "MEDIA_ERR_DECODE"), (n = t.decodeError);
                  break;
                case 4:
                  (s = "MEDIA_ERR_SRC_NOT_SUPPORTED"),
                    (n = t.unsupportedFormatError);
                  break;
                case 5:
                  break;
                default:
                  n = t.unexpectedError;
              }
              var d = "videoElementError, code: " + s + ", url: " + l;
              r.setTimeout(function () {
                r.isActive &&
                  r.dataContext.videoUrl == l &&
                  (Trace.log("event: " + d, r.traceCategory),
                  n && e._onError.call(r, n, d));
              }, a);
            }
          },
          _doReset: function () {
            this._removeVideoElement();
          },
          _doInitialize: function () {
            var e = this;
            e._reset(), e._onInitialized();
          },
          _doLoad: function (e) {
            var t = this,
              i = t.dataContext;
            if (i) {
              Trace.log("Setting video source", this.traceCategory);
              var n = t._createVideoElement(i, e, i.videoMimeType);
              n.load();
            }
          },
          _doSetMute: function (e) {
            var t = this._videoElement;
            t.muted = e;
          },
          _doSetVolume: function (e) {
            var t = this._videoElement;
            t.volume = e;
          },
          _doPlay: function () {
            var e = this._videoElement;
            e.play();
          },
          _doPause: function () {
            var e = this._videoElement;
            e.pause();
          },
          _doSeek: function (e) {
            var t = this._videoElement;
            try {
              t.currentTime = e;
            } catch (i) {}
          },
          _getBufferRanges: function () {
            for (
              var e = [],
                t = this._videoElement ? this._videoElement.buffered : null,
                i = 0;
              t && i < t.length;
              i++
            )
              e.push({
                key: i,
                start: t.start(i),
                end: t.end(i),
                max: this.dataContext.duration,
              });
            return e;
          },
        }
      );
    })();
  }),
  define("htmlvideocanvas.html", ["htmlvideocanvas"], function () {
    (SkyDrive.UI.HtmlVideoCanvas.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"></' +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(SkyDrive.UI.HtmlVideoCanvas, [{ id: 0 }], [], {});
  }),
  define("htmldashvideocanvas", ["htmlvideocanvas.html"], function () {
    !(function () {
      function e(e) {
        e = e || "";
        for (
          var t = e.substring(e.indexOf("?") + 1).split("&"), i = {}, n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r) {
            var a = r.split("=");
            i[a[0]] = a[1];
          }
        }
        return i;
      }
      var t = SkyDrive.UI.BaseVideoCanvas.prototype,
        i = SkyDrive.UI.VideoErrorCode,
        n = "HtmlDashVideoCanvas",
        r = "Unexpected",
        a = !1;
      defineSubClass(
        "SkyDrive.UI.HtmlDashVideoCanvas",
        SkyDrive.UI.HtmlVideoCanvas,
        function () {
          this._onDashErrorCallback = bind(this, this._onDashError);
        },
        {
          traceCategory: n,
          videoFormatBase: "Dash",
          _mediaPlayer: null,
          _doReset: function () {
            this._mediaPlayer &&
              (this._mediaPlayer.attachSource(),
              this._mediaPlayer.removeEventListener(
                "error",
                this._onDashErrorCallback
              ),
              (this._mediaPlayer = null)),
              this._removeVideoElement();
          },
          _doInitialize: function () {
            var e = this;
            e._reset();
            var t = Trace.log("Initializing dash player", this.traceCategory);
            require(["dashmerge"], function () {
              e.isActive &&
                ((MediaPlayer.dependencies.BufferExtensions.BUFFER_TIME_AT_TOP_QUALITY = 120),
                (MediaPlayer.dependencies.BufferExtensions.BUFFER_TIME_AT_TOP_QUALITY_LONG_FORM = 120),
                (MediaPlayer.bufferMax =
                  MediaPlayer.dependencies.BufferExtensions.BUFFER_SIZE_REQUIRED),
                (e._mediaPlayer = new MediaPlayer(new Dash.di.DashContext())),
                e._mediaPlayer.startup(),
                e._mediaPlayer.debug.setLogToBrowserConsole(a),
                e._mediaPlayer.addEventListener(
                  "error",
                  e._onDashErrorCallback
                ),
                Trace.logTo(t, "Complete", this.traceCategory),
                e._onInitialized());
            });
          },
          _doLoad: function (e) {
            var t = this,
              i = t.dataContext;
            if (i) {
              var n = t._mediaPlayer;
              Trace.log(
                "Attaching dash source (audio: " +
                  i.defaultAudioQuality +
                  ", video: " +
                  i.defaultVideoQuality +
                  ")",
                this.traceCategory
              ),
                n.attachView(t._createVideoElement(t.dataContext)),
                n.setScheduleWhilePaused(!0),
                n.setAutoPlay(i.isAutoPlayEnabled),
                n.attachSource(e),
                n.setAutoSwitchQuality(i.autoAdjustQuality),
                n.setQualityFor("audio", i.defaultAudioQuality),
                n.setQualityFor("video", i.defaultVideoQuality);
            }
          },
          _doAdjustQuality: function (e) {
            var t = this,
              i = t._mediaPlayer;
            if (i && !e.hasError) {
              var n = i.getMetricsFor("video"),
                r = i.getMetricsExt();
              if (n && r) {
                var a = r.getCurrentRepresentationSwitch(n);
                null !== a &&
                  e.setData({
                    bufferingVideoQuality: r.getIndexForRepresentation(a.to),
                    playingVideoQuality: i.getQualityFor("video"),
                    maxVideoQuality: r.getMaxIndexForBufferType("video") - 1,
                    bufferingAudioQuality: i.getQualityFor("audio"),
                  });
              }
              t._autoAdjustQuality !== e.autoAdjustQuality &&
                (Trace.log(
                  "action: setAutoSwitchQuality (autoAdjustQuality: " +
                    e.autoAdjustQuality +
                    ")",
                  this.traceCategory
                ),
                i.setAutoSwitchQuality(e.autoAdjustQuality),
                (t._autoAdjustQuality = e.autoAdjustQuality)),
                -1 != e.userVideoQuality &&
                  ((e.userVideoQuality = Math.min(
                    e.maxVideoQuality,
                    Math.max(0, e.userVideoQuality)
                  )),
                  Trace.log(
                    "action: setQualityFor (quality: " +
                      e.userVideoQuality +
                      ")",
                    this.traceCategory
                  ),
                  i.setQualityFor("video", e.userVideoQuality),
                  (e.userVideoQuality = -1));
            }
          },
          _onDashError: function (n) {
            n = n || {};
            var a,
              o = n.error || "",
              s = n.event;
            switch (o) {
              case "download":
                var l = n.event || {},
                  d = l.request,
                  u = d.status,
                  c = e(l.url),
                  h = "dashDownload";
                c.part && (h += "-" + c.part),
                  c.quality && (h += "-" + c.quality),
                  u && (h += "-" + u),
                  this.dataContext.isLoading
                    ? ((h += "-restore"),
                      Trace.log(
                        "Dash error during video load, falling back to not use streaming.",
                        this.traceCategory
                      ),
                      this._logLoadTimes(i.networkError),
                      this.dataContext.restoreVideo(!0))
                    : (a = i.networkError),
                  this._logAction(r, 0, h);
                break;
              default:
                this._logAction(r, 0, "dashError-" + o),
                  (a = i.unexpectedError);
            }
            var m = "dashError (error: " + o + ", event: " + s + ")";
            Trace.log("event: " + m, this.traceCategory),
              a && t._onError.call(this, a, m);
          },
        }
      );
    })();
  }),
  define("htmlhlsvideocanvas", ["htmldashvideocanvas"], function () {
    !(function () {
      defineSubClass(
        "SkyDrive.UI.HtmlHlsVideoCanvas",
        SkyDrive.UI.HtmlVideoCanvas,
        function () {},
        {
          traceCategory: "HtmlHlsVideoCanvas",
          videoFormatBase: "HLS",
          _hasPlayedOnce: !1,
          _onPlay: function () {
            this._hasPlayedOnce ||
              ((this._hasPlayedOnce = !0), this._startLoadMonitor()),
              this._base._onPlay.apply(this, arguments);
          },
        }
      );
    })();
  }),
  define("htmldashlingvideocanvas", ["htmlhlsvideocanvas"], function () {
    !(function () {
      var e = Qos.responseType;
      SkyDrive.UI.VideoErrorCode;
      defineSubClass(
        "SkyDrive.UI.HtmlDashlingVideoCanvas",
        SkyDrive.UI.HtmlVideoCanvas,
        function () {},
        {
          traceCategory: "HtmlDashlingVideoCanvas",
          videoFormatBase: "Dashling",
          _dashling: null,
          _monitor: null,
          onDataContextChanged: function (e) {
            var t = this._monitor;
            t &&
              t.isVisible != e.showDiagnostics &&
              t.setVisibility(e.showDiagnostics),
              this._base.onDataContextChanged.apply(this, arguments);
          },
          _doReset: function () {
            this._removeVideoElement(),
              this._dashling &&
                (this._monitor.dispose(),
                (this._monitor = null),
                this._dashling.dispose(),
                (this._dashling = null));
          },
          _doInitialize: function () {
            var e = this;
            e._reset();
            var t = Trace.log("Initializing dashling", this.traceCategory);
            require(["dashmonitor"], function () {
              e.isActive &&
                ((e._dashling = new Dashling()),
                (e._monitor = new window.DashMonitor()),
                e._dashling.addEventListener(
                  Dashling.Event.download,
                  bind(e, e._onDashlingFileDownloaded)
                ),
                e._dashling.addEventListener(
                  Dashling.Event.sessionStateChange,
                  bind(e, e._onDashlingSessionChange)
                ),
                Trace.logTo(t, "Complete", this.traceCategory),
                e._onInitialized());
            });
          },
          _doLoad: function (e) {
            var t = this,
              i = t.dataContext,
              n = t._dashling,
              r = t._monitor,
              a = t._createVideoElement(i);
            if (i && n) {
              var o = n.settings;
              (o.targetQuality = {
                audio: i.defaultAudioQuality,
                video: i.defaultVideoQuality,
              }),
                (o.logToConsole =
                  SkyDrive.UI.HtmlDashlingVideoCanvas.logToConsole),
                (o.isABREnabled = i.autoAdjustQuality),
                (o.maxDownloadsBeyondAppendPosition = 6),
                (o.maxConcurrentRequestsPerStream = 6),
                (o.startTime = i.currentTime),
                r.attachTo(t.element),
                r.observe(n, a),
                r.setVisibility(i.showDiagnostics),
                n.load(a, e);
            }
          },
          _doAdjustQuality: function (e) {
            var t = this,
              i = t._dashling;
            i &&
              !e.hasError &&
              (e.setData({
                bufferingVideoQuality: i.getBufferingQuality("video"),
                playingVideoQuality: i.getPlayingQuality("video"),
                maxVideoQuality: i.getMaxQuality("video"),
                bufferingAudioQuality: i.getBufferingQuality("audio"),
              }),
              t._autoAdjustQuality !== e.autoAdjustQuality &&
                (Trace.log(
                  "action: setAutoSwitchQuality (autoAdjustQuality: " +
                    e.autoAdjustQuality +
                    ")",
                  this.traceCategory
                ),
                (i.settings.isABREnabled = e.autoAdjustQuality),
                (t._autoAdjustQuality = e.autoAdjustQuality)),
              -1 != e.userVideoQuality &&
                ((e.userVideoQuality = Math.min(
                  e.maxVideoQuality,
                  Math.max(0, e.userVideoQuality)
                )),
                Trace.log(
                  "action: setQualityFor (quality: " + e.userVideoQuality + ")",
                  this.traceCategory
                ),
                (i.settings.targetQuality.video = e.userVideoQuality),
                (e.userVideoQuality = -1)));
          },
          _onVideoElementError: function (e) {},
          _onDashlingFileDownloaded: function (t) {
            var i;
            switch (t.requestType) {
              case "manifest":
                i = "Manifest";
                break;
              case "init":
                i = "InitSegment";
                break;
              case "media":
                i = "Fragment";
            }
            if (i && "aborted" != t.statusCode) {
              var n = !t.hasError,
                r = n ? e.success : e.unexpected;
              if (
                (this._logQos(
                  i + "Download",
                  n
                    ? "success " +
                        this._bucketizeDuration(t.timeAtLastByte / 1e3)
                    : "error (" + t.statusCode + ")",
                  r,
                  t.timeAtLastByte
                ),
                n)
              ) {
                var a = t.timeAtLastByte - t.timeAtFirstByte;
                this._logQos(
                  i + "Wait",
                  "success " + this._bucketizeDuration(t.timeAtFirstByte / 1e3),
                  r,
                  t.timeAtFirstByte
                ),
                  this._logQos(
                    i + "Receive",
                    "success " + this._bucketizeDuration(a / 1e3),
                    r,
                    a
                  );
              }
            }
          },
          _onDashlingSessionChange: function (e, t, i) {
            var n = Dashling.SessionState,
              r = Dashling.Error;
            this.setDataContext({
              isLoading: e == n.initializing,
              isWaiting: e == n.initializing || e == n.buffering,
            }),
              e == n.error &&
                ((i = i ? " (" + i + ")" : ""),
                t == r.manifestDownload || t == r.manifestParse
                  ? (this._logLoadTimes(t + i),
                    this.dataContext.restoreVideo(!0))
                  : this._onError(t, t + " " + i));
          },
        },
        { logToConsole: !1 }
      );
    })();
  }),
  define("scrubbuffer", ["htmldashlingvideocanvas"], function () {
    !(function () {
      defineSubClass(
        "SkyDrive.UI.ScrubBuffer",
        JBase.UI.BaseControl,
        function () {},
        {
          startPercentage: "0%",
          widthPercentage: "0%",
          onDataContextChanged: function (e) {
            var t = e.start || 0,
              i = e.end || 0,
              n = e.max || 1,
              r = Math.min(100, Math.max(0, (100 * t) / n)),
              a = Math.min(100, Math.max(0, (100 * (i - t)) / n));
            (this.startPercentage = r + "%"), (this.widthPercentage = a + "%");
          },
        }
      );
    })();
  }),
  define("scrubbuffer.html", ["scrubbuffer"], function () {
    (SkyDrive.UI.ScrubBuffer.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '" style="' +
        this.baseStyle +
        " " +
        generateStyleAttribute(
          "left",
          this.startPercentage,
          "width",
          this.widthPercentage
        ) +
        '" class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        ' buffered scrubArea dimmed"></' +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.ScrubBuffer,
        [
          {
            id: 0,
            css: ["left", "startPercentage", "width", "widthPercentage"],
          },
        ],
        [],
        {}
      );
  }),
  define("scrubbar", ["scrubbuffer.html"], function () {
    !(function () {
      var e =
          ($B.IE ? ($B.V > 10 ? "pointerdown" : "MSPointerDown") : "touchstart",
          $B.IE ? ($B.V > 10 ? "pointermove" : "MSPointerMove") : "touchmove"),
        t = $B.IE ? ($B.V > 10 ? "pointerup" : "MSPointerUp") : "touchend";
      defineSubClass(
        "SkyDrive.UI.ScrubBar",
        JBase.UI.BaseControl,
        function () {
          this.bufferAreaRepeater = this.createChild(JBase.UI.Repeater, {
            childControl: SkyDrive.UI.ScrubBuffer,
            getChildContext: function (e) {
              return e;
            },
          });
        },
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_ScrubBar",
          thumbPercentage: "0%",
          scrubTooltipVisible: !1,
          scrubTooltip: "",
          scrubTooltipPercentage: "0%",
          mouseOverValue: 0,
          trackMouse: !1,
          isDisabled: !1,
          _isMouseDown: !1,
          _isMouseOver: !1,
          _originalPercentage: "0%",
          _captureDiv: null,
          onDataContextChanged: function (e) {
            (this.isDisabled = e.isDisabled),
              (this.thumbPercentage =
                100 * Math.min(100, Math.max(0, e.value || 0)) + "%"),
              this.bufferAreaRepeater.setDataContext(
                { items: e.bufferRanges },
                !0
              ),
              (this.scrubTooltipVisible = !!e.scrubTooltip),
              (this.scrubTooltip = e.scrubTooltip || "");
          },
          onDeactivate: function () {
            this._endCapture();
          },
          _onMouseDown: function (e) {
            this.isDisabled ||
              this._isMouseDown ||
              (toggleClass(this.element, "isScrubbing", !0),
              (this._isMouseDown = !0),
              this._startCapture(),
              (this._originalPercentage = this.thumbPercentage),
              this._updateMouseOverValue(e),
              (this.dataContext.value = this.mouseOverValue),
              this.change(),
              raiseEvent(
                this,
                "startscrub",
                { value: this.dataContext.value },
                !0
              ),
              this._onMouseMove(e));
          },
          _onMouseMove: function (e) {
            this.isDisabled ||
              ((this.trackMouse || this._isMouseDown) &&
                this._updateMouseOverValue(e),
              this._isMouseDown &&
                this.dataContext.value != this.mouseOverValue &&
                (this.setDataContext({ value: this.mouseOverValue }),
                raiseEvent(this, "scrub", { value: this.mouseOverValue }, !0),
                raiseEvent(this, "mousemove", e)),
              this.trackMouse &&
                this._isMouseOver &&
                raiseEvent(this, "mousemove", e));
          },
          _onMouseOver: function (e) {
            this._isMouseOver = !0;
          },
          _onMouseOut: function (e) {
            (this._isMouseOver = !1),
              this.isDisabled ||
                this._isMouseDown ||
                raiseEvent(this, "mouseout", e);
          },
          _onDragStart: function () {
            return !1;
          },
          _onMouseUp: function (e) {
            !this.isDisabled &&
              this._isMouseDown &&
              (toggleClass(this.element, "isScrubbing", !1),
              (this._isMouseDown = !1),
              this._endCapture(),
              raiseEvent(
                this,
                "endscrub",
                { value: this.dataContext.value },
                !0
              ),
              this._isMouseOver || raiseEvent(this, "mouseout", e));
          },
          _startCapture: function () {
            if (!this._captureDiv) {
              var i = (this._captureDiv = ce("div"));
              (i.className = "c-ScrubBar eventCatcher"),
                document.body.appendChild(i),
                this.addElementListener(i, "mousemove", this._onMouseMove),
                this.addElementListener(i, "mouseup", this._onMouseUp),
                this.addElementListener(i, e, this._onMouseMove),
                this.addElementListener(i, t, this._onMouseUp);
            }
          },
          _endCapture: function () {
            if (this._captureDiv) {
              var i = this._captureDiv;
              this.removeElementListener(i, "mousemove", this._onMouseMove),
                this.removeElementListener(i, "mouseup", this._onMouseUp),
                this.removeElementListener(i, e, this._onMouseMove),
                this.removeElementListener(i, t, this._onMouseUp),
                document.body.removeChild(this._captureDiv),
                (this._captureDiv = null);
            }
          },
          _updateMouseOverValue: function (e) {
            var t = getRect(this.subElements.scrubArea);
            if (t.width) {
              var i = e.originalEvent,
                n = i.touches,
                r = i.changedTouches,
                a = i.clientX || (n && n[0].clientX) || (r && r[0].clientX);
              this.mouseOverValue = Math.min(
                1,
                Math.max(0, (a - t.left) / t.width)
              );
            }
          },
        }
      );
    })();
  }),
  define("scrubbar.html", ["scrubbar"], function () {
    (SkyDrive.UI.ScrubBar.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        generateClassAttribute("isDisabled", this.isDisabled) +
        '"><div class="scrubContainer"><div class="unbuffered scrubArea dimmed"></div>' +
        this.bufferAreaRepeater.renderHtml() +
        '<div id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" style="' +
        generateStyleAttribute("width", this.thumbPercentage) +
        '" class="played scrubArea dimmed"></div><div id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" class="thumb scrubArea"><div id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" style="' +
        generateStyleAttribute("left", this.thumbPercentage) +
        '" class="highlight"></div></div></div></' +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.ScrubBar,
        [
          {
            id: 0,
            className: ["isDisabled", "isDisabled"],
            userActions: {
              touchstart: "_onMouseDown",
              pointerdown: "_onMouseDown",
              MSPointerDown: "_onMouseDown",
              mousedown: "_onMouseDown",
              mouseover: "_onMouseOver",
              mouseout: "_onMouseOut",
              dragstart: "_onDragStart",
              mousemove: "_onMouseMove",
            },
          },
          { id: 1, css: ["width", "thumbPercentage"] },
          { id: 2, childId: "scrubArea" },
          { id: 3, css: ["left", "thumbPercentage"] },
        ],
        [],
        {}
      );
  }),
  define("playbackpanel", ["scrubbar.html"], function () {
    !(function () {
      function e(e) {
        e = e || 0;
        var t = Math.floor(e / 60);
        return (e = Math.floor(e % 60)), t + ":" + (10 > e ? "0" : "") + e;
      }
      function t(e, t) {
        return {
          image: o.getImageInfo("video" + e),
          hoverImage: o.getImageInfo("video" + e + "Hover"),
          pressedImage: o.getImageInfo("video" + e + "Pressed"),
          disabledImage: o.getImageInfo("video" + e + "Disabled"),
          isDisabled: !!t,
        };
      }
      function i(e, t, i) {
        var a;
        a = s("Video.QualityMenu" + e) || e;
        var o = new Shared.UI.NavItemDataContext({ text: a });
        return (
          e
            ? t && i
              ? ((o.key = i.key),
                (o.isImageSelectMode = !0),
                (o.imageData = i.useCheckImage ? r : n),
                (o.click = function () {
                  return t._onQualitySelected(i), !1;
                }),
                (o.isSelected = !1))
              : (o.isEnabled = !1)
            : (o.type = "NavSeparator"),
          o
        );
      }
      var n,
        r,
        a = SkyDrive.UI.VideoDataContext,
        o = JBase.UI.ImageStripHelper,
        s = wLive.Core.AleHelpers.getString,
        l = o.getImageInfo,
        d = 5,
        u = 32,
        c = 27,
        h = 36,
        m = 35,
        g = 37,
        f = 39,
        p = 38,
        v = 40,
        y = 70;
      defineSubClass(
        "SkyDrive.UI.PlaybackPanel",
        JBase.UI.BaseControl,
        function () {
          (n = l("sortMenuBullet")), (r = l("checkMark"));
        },
        {
          renderDirection: $B.rtl ? "rtl" : "ltr",
          isPlayButtonVisible: !0,
          isLoaded: "",
          isLoading: !1,
          currentTime: "",
          duration: "",
          scrubTooltipVisible: !1,
          scrubTooltipLeft: 0,
          scrubTooltip: "",
          hasSettings: !1,
          apiIdBase: "SkyDriveWeb_Internal_Control_PlaybackPanel",
          _hasUserPausedBeforeScrubbing: !1,
          _isUserScrubbing: !1,
          _lastVideoUrl: null,
          _lastCanvasType: null,
          _maxVideoQuality: null,
          onInitialize: function () {
            (this.positionScrubBar.baseClass = "position"),
              (this.positionScrubBar.trackMouse = !0),
              this.positionScrubBar.setDataContext({
                value: 0,
                bufferRanges: [],
              }),
              (this.volumeScrubBar.baseClass = "volume"),
              (this.cloudButton.baseClass = "cloud"),
              (this.settingsButton.baseClass = "settings"),
              (this.expandButton.baseClass = "expand"),
              (this.settingsMenu.baseClass = "settingsMenu"),
              (this.settingsMenu.menuLoc = 2),
              (this.settingsMenu.skipEdgeDetection = !0),
              (this.settingsMenu.navLinksRepeater.baseClass += " c_mfw");
          },
          onDataContextChanged: function (i) {
            var n = 0,
              r = this;
            !r.isActive ||
              (r._lastVideoUrl == i.videoUrl &&
                i.videoCanvasType == this._lastCanvasType) ||
              ((r._lastVideoUrl = i.videoUrl),
              (r._lastCanvasType = i.videoCanvasType),
              (r._maxVideoQuality = null),
              i.videoUrl && r.focus()),
              i.duration &&
                (n = -1 == i.userSeekTime ? i.currentTime : i.userSeekTime),
              (r.hasSettings =
                i.isQualityChangeSupported && i.maxVideoQuality >= 0),
              (r.currentTime = e(n)),
              (this.duration = e(i.duration)),
              (this.isLoading = i.isWaiting && !i.hasUserPaused),
              (this.isPlayButtonVisible = !i.hasError || i.isErrorDismissable),
              this._updateQualityMenu(i),
              i.duration ? (n /= i.duration) : (n = 0);
            var a = !i.item || i.hasError,
              o = i.hasError && i.isExpanded ? !1 : a;
            this.playButton.setDataContext(
              t(
                this._isUserScrubbing
                  ? this._hasUserPausedBeforeScrubbing
                  : i.hasUserPaused
                  ? "Play"
                  : "Pause"
              )
            ),
              this.volumeButton.setDataContext(
                t(i.isMuted || 0 == i.volume ? "Mute" : "Volume", a)
              ),
              this.positionScrubBar.setDataContext({
                value: n,
                bufferRanges: i.bufferRanges || [],
                throttleScrubDelay: 500,
              }),
              this.volumeScrubBar.setDataContext({
                value: i.isMuted ? 0 : i.volume,
                isDisabled: a,
              }),
              this.cloudButton.setDataContext(t("Cloud", !1)),
              this.settingsButton.setDataContext(t("Settings", a)),
              this.expandButton.setDataContext(
                t(i.isExpanded ? "Collapse" : "Expand", o)
              );
          },
          onActivate: function () {
            this.addObjectListener(
              this.playButton,
              "click",
              this._onPlayClicked
            ),
              this.addObjectListener(
                this.positionScrubBar,
                "startscrub",
                this._onPositionStartScrub
              ),
              this.addObjectListener(
                this.positionScrubBar,
                "scrub",
                this._onPositionScrub
              ),
              this.addObjectListener(
                this.positionScrubBar,
                "endscrub",
                this._onPositionEndScrub
              ),
              this.addObjectListener(
                this.positionScrubBar,
                "mousemove",
                this._onPositionMouseMove
              ),
              this.addObjectListener(
                this.positionScrubBar,
                "mouseout",
                this._onPositionMouseOut
              ),
              this.addObjectListener(
                this.cloudButton,
                "mousedown",
                this._onCloudMouseDown
              ),
              this.addObjectListener(
                this.cloudButton,
                "click",
                this._onCloudClicked
              ),
              this.addObjectListener(
                this.settingsButton,
                "mousedown",
                this._onSettingsMouseDown
              ),
              this.addObjectListener(
                this.settingsButton,
                "click",
                this._onSettingsClicked
              ),
              this.addObjectListener(
                this.volumeButton,
                "click",
                this._onVolumeClicked
              ),
              this.addObjectListener(
                this.volumeScrubBar,
                "startscrub",
                this._onVolumeStartScrub
              ),
              this.addObjectListener(
                this.volumeScrubBar,
                "scrub",
                this._onVolumeScrub
              ),
              this.addObjectListener(
                this.volumeScrubBar,
                "endscrub",
                this._onVolumeEndScrub
              ),
              this.addObjectListener(
                this.expandButton,
                "click",
                this._onExpandClicked
              );
          },
          focus: function () {
            var e = this;
            e.setTimeout(function () {
              if (e.playButton && e.playButton.element)
                try {
                  e.playButton.element.focus();
                } catch (t) {}
            }, 10);
          },
          _onKeyDown: function (e) {
            var t = this.dataContext,
              i = !0,
              n = t.isSeeking ? t.userSeekTime : t.currentTime;
            if (t && t.item && !e.ctrlKey && !e.metaKey && !e.altKey)
              switch (e.which) {
                case u:
                  t.setData({ hasUserPaused: !t.hasUserPaused }), (i = !1);
                  break;
                case c:
                  t.isExpanded && (t.setData({ isExpanded: !1 }), (i = !1));
                  break;
                case y:
                  t.isExpanded || (t.setData({ isExpanded: !0 }), (i = !1));
                  break;
                case h:
                  t.setData({ userSeekTime: 0 }), (i = !1);
                  break;
                case m:
                  t.setData({ userSeekTime: t.duration }), (i = !1);
                  break;
                case g:
                  n > 0 && (this._onJumpBehind(null), (i = !1));
                  break;
                case f:
                  t.currentTime > 0 &&
                    !t.isAtEndOfVideo() &&
                    (this._onJumpAhead(null), (i = !1));
                  break;
                case p:
                  t.volume < 1 &&
                    (t.setData({ volume: Math.min(1, t.volume + 0.1) }),
                    (i = !1));
                  break;
                case v:
                  t.volume > 0 &&
                    !t.isMuted &&
                    (t.setData({ volume: Math.max(0, t.volume - 0.1) }),
                    (i = !1));
              }
            return i;
          },
          _onCloudMouseDown: function () {
            return (
              window.open(this.dataContext.item.urls.viewInBrowser),
              a.pauseAll(),
              !1
            );
          },
          _onCloudClicked: function () {
            return !1;
          },
          _onSettingsMouseDown: function () {
            return (
              this.settingsMenu.isExpanded
                ? this.settingsMenu.hide()
                : this.settingsMenu.show(),
              !1
            );
          },
          _onSettingsClicked: function () {
            return !1;
          },
          _onQualitySelected: function (e) {
            var t = this.dataContext;
            this.settingsMenu.hide(),
              "auto" == e.key
                ? t.setData({ autoAdjustQuality: !t.autoAdjustQuality })
                : "diag" == e.key
                ? t.setData({ showDiagnostics: !t.showDiagnostics })
                : e.settings && t.setData(e.settings);
          },
          _onPlayClicked: function (e) {
            var t = this.dataContext,
              i = (t.hasError && t.isErrorDismissable) || t.isVideoUrlExpired();
            return (
              t.hasUserPaused && i
                ? t.restoreVideo()
                : t.setData({ hasUserPaused: !t.hasUserPaused }),
              !1
            );
          },
          _onJumpAhead: function (e) {
            var t = this.dataContext,
              i = t.userSeekTime > -1 ? t.userSeekTime : t.currentTime,
              n = Math.min(this.dataContext.duration, i + d);
            t.setData({ userSeekTime: n });
          },
          _onJumpBehind: function (e) {
            var t = this.dataContext,
              i = t.userSeekTime > -1 ? t.userSeekTime : t.currentTime,
              n = Math.max(0, i - d);
            t.setData({ userSeekTime: n });
          },
          _onPositionStartScrub: function (e) {
            (this._hasUserPausedBeforeSeeking = this.dataContext.hasUserPaused),
              (this._isUserScrubbing = !0),
              this.setDataContext({
                userSeekTime: this.dataContext.duration * e.value,
                hasUserPaused: !0,
              });
          },
          _onPositionScrub: function (e) {
            this.setDataContext({
              userSeekTime: this.dataContext.duration * e.value,
            });
          },
          _onPositionEndScrub: function (e) {
            (this._isUserScrubbing = !1),
              this.setDataContext({
                userSeekTime: this.dataContext.duration * e.value,
                hasUserPaused:
                  1 == e.value ? !0 : this._hasUserPausedBeforeSeeking,
              }),
              this.focus();
          },
          _onPositionMouseMove: function (t) {
            var i = getRect(this.element),
              n = getRect(this.positionScrubBar.element),
              r = this.positionScrubBar.mouseOverValue,
              a = n.left - i.left + 5,
              o = a + n.width - 15;
            (this.scrubTooltipVisible = !0),
              (this.scrubTooltipLeft = Math.min(
                o,
                Math.max(a, t.originalEvent.clientX - i.left)
              )),
              (this.scrubTooltip = e(
                Math.floor(r * this.dataContext.duration)
              )),
              this._updateBindings();
          },
          _onPositionMouseOut: function (e) {
            (this.scrubTooltipVisible = !1), this._updateBindings();
          },
          _onVolumeClicked: function (e) {
            a.setVolume(this.dataContext.volume, !this.dataContext.isMuted);
          },
          _onVolumeStartScrub: function (e) {
            this.dataContext.volume > 0 &&
              (this._originalVolume = this.dataContext.volume),
              a.setVolume(e.value, 0 == e.value);
          },
          _onVolumeScrub: function (e) {
            a.setVolume(e.value, 0 == e.value);
          },
          _onVolumeEndScrub: function (e) {
            0 == e.value
              ? a.setVolume(this._originalVolume, !0)
              : a.setVolume(e.value, !1),
              this.focus();
          },
          _onExpandClicked: function (e) {
            this.setDataContext({ isExpanded: !this.dataContext.isExpanded });
          },
          _updateQualityMenu: function (e) {
            var t = e.maxVideoQuality;
            if (this._maxVideoQuality !== t) {
              var n = [i("Header")];
              (this._maxVideoQuality = t),
                t >= 4 &&
                  n.push(
                    i("1080", this, {
                      key: "4",
                      settings: {
                        userVideoQuality: 4,
                        bufferingVideoQuality: 4,
                        autoAdjustQuality: !1,
                      },
                    })
                  ),
                t >= 3 &&
                  n.push(
                    i("720", this, {
                      key: "3",
                      settings: {
                        userVideoQuality: 3,
                        bufferingVideoQuality: 3,
                        autoAdjustQuality: !1,
                      },
                    })
                  ),
                t >= 2 &&
                  n.push(
                    i("480", this, {
                      key: "2",
                      settings: {
                        userVideoQuality: 2,
                        bufferingVideoQuality: 2,
                        autoAdjustQuality: !1,
                      },
                    })
                  ),
                t >= 1 &&
                  n.push(
                    i("360", this, {
                      key: "1",
                      settings: {
                        userVideoQuality: 1,
                        bufferingVideoQuality: 1,
                        autoAdjustQuality: !1,
                      },
                    })
                  ),
                n.push(
                  i("240", this, {
                    key: "0",
                    settings: {
                      userVideoQuality: 0,
                      bufferingVideoQuality: 0,
                      autoAdjustQuality: !1,
                    },
                  })
                ),
                n.push(i()),
                n.push(i("Auto", this, { key: "auto", useCheckImage: !0 })),
                "HtmlDashlingVideoCanvas" === e.videoCanvasType &&
                  FilesConfig.isVideoDiagEnabled &&
                  n.push(
                    i("Show diagnostics", this, {
                      key: "diag",
                      useCheckImage: !0,
                    })
                  ),
                this.settingsMenu.setDataContext({
                  text: "",
                  showChevron: !1,
                  childItems: n,
                });
            }
            this._updateQualitySelection(e);
          },
          _updateQualitySelection: function (e) {
            for (
              var t = this.settingsMenu.dataContext.childItems,
                i = !!e.autoAdjustQuality,
                n = 0;
              n < t.length;
              n++
            ) {
              var r,
                a = t[n];
              switch (a.key) {
                case "auto":
                  r = i;
                  break;
                case "diag":
                  r = !!e.showDiagnostics;
                  break;
                default:
                  r = a.key == e.bufferingVideoQuality;
              }
              a.setData({
                isSelected: r,
                isBolded: a.key == e.playingVideoQuality,
              });
            }
          },
        }
      );
    })();
  }),
  define("playbackpanel.html", ["playbackpanel"], function () {
    (SkyDrive.UI.PlaybackPanel.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' dir="ltr" id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        '"><div id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" style="' +
        generateStyleAttribute("display", this.isLoading) +
        '">' +
        this.loadingBar.renderHtml() +
        '</div><div class="near area"><div class="play section"><div id="' +
        htmlAttributeEncode(this.id + "_2") +
        '" style="' +
        generateStyleAttribute(
          "display.inlineblock",
          this.isPlayButtonVisible
        ) +
        '" class="playButton">' +
        this.playButton.renderHtml() +
        '</div><div class="seekTime"><span role="button" tabindex="0" id="' +
        htmlAttributeEncode(this.id + "_3") +
        '" class="currentTime">' +
        htmlEncode(this.currentTime) +
        '</span><span>&nbsp;/&nbsp;</span><span role="button" tabindex="0" id="' +
        htmlAttributeEncode(this.id + "_4") +
        '" class="duration">' +
        htmlEncode(this.duration) +
        '</span></div></div></div><div class="far area"><div id="' +
        htmlAttributeEncode(this.id + "_5") +
        '" class="config section' +
        generateClassAttribute("hasSettings", this.hasSettings) +
        '">' +
        this.cloudButton.renderHtml() +
        this.settingsButton.renderHtml() +
        this.volumeButton.renderHtml() +
        this.volumeScrubBar.renderHtml() +
        this.expandButton.renderHtml() +
        '</div></div><div class="area"><div role="button" class="scrub section">' +
        this.positionScrubBar.renderHtml() +
        '</div></div><div id="' +
        htmlAttributeEncode(this.id + "_6") +
        '" style="' +
        generateStyleAttribute("left.px", this.scrubTooltipLeft) +
        '" class="tooltipCenter' +
        generateClassAttribute("isVisible", this.scrubTooltipVisible) +
        '"><div class="tooltipFrame"><div id="' +
        htmlAttributeEncode(this.id + "_7") +
        '" class="tooltipContent">' +
        htmlEncode(this.scrubTooltip) +
        '</div></div></div><div id="' +
        htmlAttributeEncode(this.id + "_8") +
        '"' +
        generateAttributesString("dir", this.renderDirection) +
        ">" +
        this.settingsMenu.renderHtml() +
        "</div></" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.PlaybackPanel,
        [
          { id: 0, userActions: { keydown: "_onKeyDown" } },
          { id: 1, css: ["display", "isLoading"] },
          { id: 2, css: ["display.inlineBlock", "isPlayButtonVisible"] },
          {
            id: 3,
            attr: ["text", "currentTime"],
            childId: "jumpBehindButton",
            userActions: { click: "_onJumpBehind" },
          },
          {
            id: 4,
            attr: ["text", "duration"],
            childId: "jumpAheadButton",
            userActions: { click: "_onJumpAhead" },
          },
          { id: 5, className: ["hasSettings", "hasSettings"] },
          {
            id: 6,
            css: ["left.px", "scrubTooltipLeft"],
            className: ["isVisible", "scrubTooltipVisible"],
          },
          { id: 7, attr: ["text", "scrubTooltip"] },
          { id: 8, attr: ["dir", "renderDirection"] },
        ],
        [],
        {
          loadingBar: SkyDrive.UI.LoadingBar,
          playButton: Shared.UI.ImageButton,
          cloudButton: Shared.UI.ImageButton,
          settingsButton: Shared.UI.ImageButton,
          volumeButton: Shared.UI.ImageButton,
          volumeScrubBar: SkyDrive.UI.ScrubBar,
          expandButton: Shared.UI.ImageButton,
          positionScrubBar: SkyDrive.UI.ScrubBar,
          settingsMenu: Shared.UI.Menu,
        }
      );
  }),
  define("videoplayer", ["playbackpanel.html"], function () {
    !(function () {
      var e = Shared.WorkMonitor,
        t = wLive.Core.SkyDriveItemHelper,
        i = SkyDrive.UI.VideoPlaybackControlsMode,
        n = "VideoPlayer",
        r = 3e3;
      defineSubClass(
        "SkyDrive.UI.VideoPlayer",
        JBase.UI.BaseControl,
        function () {
          (this.playbackCanvas = this.createChild(JBase.UI.ContentControl, {
            disposeOnSwap: !0,
            getControlType: bind(this, this._getCanvasType),
          })),
            (this.posterImage = this.createChild(JBase.UI.ImageTile, {
              baseClass: "posterImage",
              scaleToFit: !0,
              allowStretching: !0,
            }));
        },
        {
          apiIdBase: "SkyDriveWeb_Internal_Control_VideoPlayer",
          baseDataContextType: SkyDrive.UI.VideoDataContext,
          isFullScreen: !1,
          isFullWindow: !1,
          isPosterVisible: !1,
          isUserIdle: !1,
          hasError: !1,
          isPlaybackPanelVisible: !1,
          isLoading: !1,
          errorMessage: "",
          debugMessage: "",
          canvasSize: { width: 500, height: 500 },
          _userIdleTimer: 0,
          _lastMove: 0,
          _lastMouseX: 0,
          _lastMouseY: 0,
          _placeholderDiv: null,
          _hasStartedWaiting: !1,
          _isUserIdle: !1,
          _lastVideoItem: null,
          _videoWorkId: null,
          _isFullScreenOwner: !1,
          _hasFinished: !1,
          onDataContextChanged: function (e) {
            var n = e.item;
            this._updateExpandState(e),
              this._updateWaitingState(e),
              (this.isPlaybackPanelVisible =
                e.playbackControlsMode === i.auto && n),
              (this.useDefaultControls = e.playbackControlsMode === i.browser),
              (this.isUserIdle =
                !e.hasUserPaused &&
                e.isPlaying &&
                !e.isSeeking &&
                !e.isWaiting &&
                -1 == e.userSeekTime &&
                this._isUserIdle),
              (this.isLoading = e.isLoading);
            var r = !(
              !n ||
              !n.video ||
              e.canPlay ||
              e.hasError ||
              !n.thumbnailSet
            );
            if (!e.posterImage)
              if (r) {
                var a = n.thumbnailSet,
                  o = t.pickThumbnail(
                    n.thumbnailSet,
                    this.canvasSize.width,
                    this.canvasSize.height
                  );
                this.dataContext.setData({
                  posterImage: {
                    url: a.baseUrl + o.url,
                    containerSize: this.canvasSize,
                    originalSize: o,
                    imagePosition: {},
                  },
                });
              } else e.setData({ posterImage: { url: null } });
            (this.isPosterVisible = r && e.usePosterImageTile),
              this.isPosterVisible &&
                !e.showDiagnostics &&
                this.posterImage.setDataContext(e.posterImage),
              this.playbackPanel.setDataContext(e),
              this.playbackCanvas.setDataContext(e),
              mix(this, {
                hasError: e.hasError,
                errorMessage: e.errorMessage,
                debugMessage: e.debugMessage,
                isPlaying: e.isPlaying,
                isLoading: e.isLoading,
                isWaiting: e.isWaiting,
                videoCanvasType: e.videoCanvasType,
                useStreaming: e.useStreaming,
                currentTime: e.currentTime,
                duration: e.duration,
                volume: e.volume,
                isMuted: e.isMuted,
                isExpanded: e.isExpanded,
                autoAdjustQuality: e.autoAdjustQuality,
                playingVideoQuality: e.playingVideoQuality,
                bufferingVideoQuality: e.bufferingVideoQuality,
                userVideoQuality: e.userVideoQuality,
              });
            var s = e.hasError || e.isAtEndOfVideo();
            if (s !== this._hasFinished) {
              if (s) {
                var l;
                try {
                  l = window.top.FilesConfig.NextLegacyBundleEnabled;
                } catch (d) {
                  l = null;
                }
                l &&
                  Shared.ElementEventing.raise(
                    window,
                    "videoContentFinished",
                    null
                  );
              }
              this._hasFinished = s;
            }
          },
          onInitialize: function () {
            this.setDataContext({});
          },
          onActivate: function (t) {
            this._updateExpandState(t),
              this.onResize(),
              this.addElementListener(
                document,
                "fullscreenchange",
                this._onFullScreenChanged
              ),
              this.addElementListener(
                document,
                "webkitfullscreenchange",
                this._onFullScreenChanged
              ),
              this.addElementListener(
                document,
                "mozfullscreenchange",
                this._onFullScreenChanged
              ),
              this.addElementListener(
                document,
                "MSFullscreenChange",
                this._onFullScreenChanged
              ),
              (this._videoWorkId = e.startWork([
                e.StandardTags.Network,
                e.StandardTags.Network_Video,
              ]));
          },
          onDeactivate: function () {
            this.setDataContext({ item: null }),
              this._videoWorkId &&
                (e.completeWork(this._videoWorkId), (this._videoWorkId = null)),
              this._updateWaitingState();
          },
          onResize: function () {
            var e = this.subElements;
            if (e) {
              var t = getRect(e.canvasControl);
              (this.canvasSize = { width: t.width, height: t.height }),
                (this.dataContext.posterImage = null),
                this.change();
            }
          },
          _updateWaitingState: function (e) {
            var t = window.$header;
            t &&
              (this.isActive &&
              e &&
              (e.isWaiting || e.isSeeking || e.isLoading) &&
              !e.hasError &&
              !e.hasUserPaused
                ? this._hasStartedWaiting ||
                  (Trace.log("Showing waiting state", n),
                  (this._hasStartedWaiting = !0))
                : this._hasStartedWaiting &&
                  (Trace.log("Hiding waiting state", n),
                  (this._hasStartedWaiting = !1)));
          },
          _onCanvasClicked: function () {
            var e = !0;
            if (this.dataContext.playbackControlsMode === i.auto) {
              var t = this.dataContext;
              t.isExpanded && this.isUserIdle
                ? ((this._isUserIdle = !1), this.change())
                : this.playbackPanel._onPlayClicked(null),
                this.playbackPanel.focus(),
                (e = !1);
            }
            return e;
          },
          _onCanvasDoubleClicked: function () {
            var e = !0;
            return (
              this.dataContext.playbackControlsMode === i.browser &&
                (this.dataContext.setData({
                  isExpanded: !this.dataContext.isExpanded,
                }),
                (e = !1)),
              e
            );
          },
          _onFullScreenChanged: function () {
            var e = this.dataContext,
              t = this._getFullScreenState();
            (this.isFullScreen = this._isUserIdle = t),
              e.setData({ isExpanded: t });
          },
          _onKeyDown: function (e) {
            return this.playbackPanel._onKeyDown(e);
          },
          _onMouseMove: function (e) {
            (this._lastMouseX == e.clientX && this._lastMouseY == e.clientY) ||
              ((this._lastMouseX = e.clientX),
              (this._lastMouseY = e.clientY),
              this._isUserIdle && ((this._isUserIdle = !1), this.change()),
              this.clearTimeout(this._userIdleTimer),
              (this._userIdleTimer = this.setTimeout(this._onUserIdle, r)));
          },
          _onUserIdle: function () {
            this.dataContext.isPlaying
              ? ((this._userIdleTimer = 0),
                (this._isUserIdle = !0),
                this.change())
              : (this._userIdleTimer = this.setTimeout(this._onUserIdle, r));
          },
          _updateExpandState: function (e) {
            var t = this.element,
              i = this.isFullScreen || this.isFullWindow;
            t &&
              (e.isExpanded && !i
                ? ((this._isFullScreenOwner = !0), this._enterFullScreen())
                : !e.isExpanded &&
                  i &&
                  this._isFullScreenOwner &&
                  this._exitFullScreen());
          },
          _getFullScreenState: function () {
            var e = document;
            return !!(
              e.fullscreenElement ||
              e.msFullscreenElement ||
              e.mozFullScreenElement ||
              e.webkitFullscreenElement
            );
          },
          _enterFullScreen: function () {
            var e = this,
              t = document.body,
              i = document;
            e._enterFullWindow(),
              Trace.log("enterFullScreen()", n),
              t.requestFullScreen
                ? (t.requestFullScreen(),
                  (e.isFullScreen = !!i.fullScreenElement))
                : t.msRequestFullscreen
                ? (t.msRequestFullscreen(),
                  (e.isFullScreen = !!i.msFullscreenElement))
                : t.mozRequestFullScreen
                ? (t.mozRequestFullScreen(),
                  (e.isFullScreen = !!i.mozFullScreenElement))
                : t.webkitRequestFullScreen &&
                  (t.webkitRequestFullScreen(),
                  (e.isFullScreen = !!i.webkitFullScreenElement)),
              e.setTimeout(function () {
                e.resize(), e.playbackPanel.focus();
              }, 100);
          },
          _exitFullScreen: function () {
            var e = this,
              t = document;
            Trace.log("exitFullScreen()", n),
              e._exitFullWindow(),
              e.isFullScreen &&
                ((e.isFullScreen = !1),
                t.exitFullScreen
                  ? t.exitFullScreen()
                  : t.msExitFullscreen
                  ? t.msExitFullscreen()
                  : t.mozCancelFullScreen
                  ? t.mozCancelFullScreen()
                  : t.webkitCancelFullScreen && t.webkitCancelFullScreen()),
              e.setTimeout(function () {
                e.resize(), e.playbackPanel.focus();
              }, 100);
          },
          _enterFullWindow: function () {
            this.isFullWindow ||
              (Trace.log("enterFullWindow()", n),
              (this.isFullWindow = !0),
              toggleClass(document.body, "videoFullWindow", !0));
          },
          _exitFullWindow: function () {
            this.isFullWindow &&
              (Trace.log("exitFullWindow()", n),
              (this.isFullWindow = !1),
              toggleClass(document.body, "videoFullWindow", !1));
          },
          _getCanvasType: function (e) {
            return e.videoCanvasType ? SkyDrive.UI[e.videoCanvasType] : null;
          },
        }
      );
    })();
  }),
  define("videoplayer.html", ["videoplayer"], function () {
    (SkyDrive.UI.VideoPlayer.prototype.onRenderHtml = function () {
      return (
        "<" +
        this.baseTag +
        ' id="' +
        htmlAttributeEncode(this.id + "_0") +
        '"' +
        (this.baseStyle ? ' style="' + this.baseStyle + '"' : "") +
        ' class="c-' +
        this.controlName +
        " " +
        this.baseClass +
        generateClassAttribute(
          "isFullWindow",
          this.isFullWindow,
          "isFullScreen",
          this.isFullScreen,
          "isUserIdle",
          this.isUserIdle,
          "hasError",
          this.hasError,
          "showPoster",
          this.isPosterVisible,
          "isLoading",
          this.isLoading,
          "useDefaultControls",
          this.useDefaultControls,
          "isPlaybackPanelVisible",
          this.isPlaybackPanelVisible
        ) +
        '"><div class="canvas"><div id="' +
        htmlAttributeEncode(this.id + "_1") +
        '" class="canvasControl">' +
        this.playbackCanvas.renderHtml() +
        this.posterImage.renderHtml() +
        '</div><div class="errorMessage"><span id="' +
        htmlAttributeEncode(this.id + "_2") +
        '">' +
        htmlEncode(this.errorMessage) +
        '</span><br></br><span id="' +
        htmlAttributeEncode(this.id + "_3") +
        '">' +
        htmlEncode(this.debugMessage) +
        '</span></div></div><div id="' +
        htmlAttributeEncode(this.id + "_4") +
        '" class="canvasOverlay"></div>' +
        this.playbackPanel.renderHtml() +
        "</" +
        this.baseTag +
        ">"
      );
    }),
      processAnnotations(
        SkyDrive.UI.VideoPlayer,
        [
          {
            id: 0,
            className: [
              "isFullWindow",
              "isFullWindow",
              "isFullScreen",
              "isFullScreen",
              "isUserIdle",
              "isUserIdle",
              "hasError",
              "hasError",
              "showPoster",
              "isPosterVisible",
              "isLoading",
              "isLoading",
              "useDefaultControls",
              "useDefaultControls",
              "isPlaybackPanelVisible",
              "isPlaybackPanelVisible",
            ],
            userActions: { mousemove: "_onMouseMove" },
          },
          { id: 1, childId: "canvasControl" },
          { id: 2, attr: ["text", "errorMessage"] },
          { id: 3, attr: ["text", "debugMessage"] },
          {
            id: 4,
            childId: "playbackCanvas",
            userActions: {
              click: "_onCanvasClicked",
              dblclick: "_onCanvasDoubleClicked",
            },
          },
        ],
        [
          "isPlaying",
          "isLoading",
          "isWaiting",
          "videoCanvasType",
          "useStreaming",
          "currentTime",
          "duration",
          "volume",
          "isMuted",
          "isExpanded",
          "autoAdjustQuality",
          "playingVideoQuality",
          "bufferingVideoQuality",
          "userVideoQuality",
          "hasError",
          "errorMessage",
        ],
        { playbackPanel: SkyDrive.UI.PlaybackPanel }
      );
  }),
  define("dashling.full", [], function () {
    !(function () {
      function e(e, t) {
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        return e;
      }
      function t(e, t) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      function n(e, t) {
        (t && !t.logToConsole) || console.log(e);
      }
      function r(e, t, i) {
        var n = e.getElementsByTagName(t)[0],
          r = n ? n.childNodes[0] : null;
        return r ? r.nodeValue : i;
      }
      function a(e) {
        var t = 0,
          i = e.substring("2"),
          n = i.indexOf("H");
        return (
          n > -1 &&
            ((t += 60 * Number(i.substring(0, n)) * 60),
            (i = i.substring(n + 1))),
          (n = i.indexOf("M")),
          n > -1 &&
            ((t += 60 * Number(i.substring(0, n))), (i = i.substring(n + 1))),
          (n = i.indexOf("S")),
          n > -1 && (t += Number(i.substring(0, n))),
          t
        );
      }
      function o(e, t, i) {
        var n = e.average || 0;
        for (
          e.average = n + (t - n) / (e.length + 1), e.push(t);
          e.length > i;

        )
          s(e);
      }
      function s(e) {
        var t = e.shift(),
          i = e.average;
        e.average = i + (i - t) / e.length;
      }
      var l = {
          throttle: function (e, t, i, n, r) {
            var a = this;
            a._throttleIds || (a._throttleIds = {}),
              n && a.clearThrottle(t),
              a._throttleIds[t] ||
                ((a._throttleIds[t] = setTimeout(function () {
                  r || e(), delete a._throttleIds[t];
                }, i)),
                r && ((r = !1), e()));
          },
          clearThrottle: function (e) {
            this._throttleIds &&
              (clearTimeout(this._throttleIds[e]), delete this._throttleIds[e]);
          },
          clearAllThrottles: function () {
            if (this._throttleIds) {
              for (var e in this._throttleIds)
                clearTimeout(this._throttleIds[e]);
              this._throttleIds = null;
            }
          },
        },
        d = {
          addEventListener: function (e, t) {
            this.__events = this.__events || {};
            var i = (this.__events[e] = this.__events[e] || []);
            i.push(t);
          },
          removeEventListener: function (e, t) {
            var i = this.__events && this.__events[e];
            if (i) {
              var n = i.indexOf(t);
              n > -1 && i.splice(n, 1);
            }
          },
          removeAllEventListeners: function () {
            this.__events = null;
          },
          raiseEvent: function (e) {
            for (
              var t = this.__events && this.__events[e], i = 0;
              t &&
              i < t.length &&
              t[i].apply(this, Array.prototype.slice.apply(arguments, [1])) !==
                !1;
              i++
            );
          },
        },
        u = { sessionStateChange: "sessionstatechange", download: "download" },
        c = {
          manifestDownload: "manifestDownload",
          initSegmentDownload: "initSegmentDownload",
          mediaSegmentDownload: "mediaSegmentDownload",
          manifestParse: "manifestParse",
          sourceBufferInit: "sourceBufferInit",
          sourceBufferAppendException: "sourceBufferAppendException",
          sourceBufferAppendMissing: "sourceBufferAppendMissing",
        },
        h = {
          error: -1,
          idle: 0,
          initializing: 1,
          buffering: 2,
          playing: 4,
          paused: 5,
        },
        m = {
          error: -1,
          idle: 0,
          downloading: 1,
          downloaded: 2,
          appending: 3,
          appended: 4,
        };
      (window.Dashling = function () {
        this.settings = e({}, Dashling.Settings);
      }),
        e(Dashling, { Event: u, SessionState: h, FragmentState: m, Error: c }),
        (Dashling.prototype = {
          _streamController: null,
          _sessionIndex: 0,
          state: h.idle,
          lastError: null,
          startTime: null,
          timeAtFirstCanPlay: null,
          load: function (e, t) {
            var i = this;
            i.reset(),
              (i.startTime = new Date().getTime()),
              i._setState(h.initializing),
              (i._videoElement = e),
              i._initializeMediaSource(e),
              i._initializeManifest(t);
          },
          dispose: function () {
            (this.isDisposed = !0), this.reset();
          },
          reset: function () {
            var e = this;
            if (
              ((e.startTime = null),
              (e.timeAtFirstCanPlay = null),
              (e.lastError = null),
              e._streamController &&
                (e._streamController.dispose(), (e._streamController = null)),
              e._parser && (e._parser.dispose(), (e._parser = null)),
              e._videoElement)
            ) {
              e.settings.manifest = null;
              try {
                e._videoElement.pause();
              } catch (t) {}
              e._videoElement = null;
            }
            (e.videoElement = null),
              (e._mediaSource = null),
              e._setState(h.idle);
          },
          getRemainingBuffer: function () {
            return this._streamController
              ? this._streamController.getRemainingBuffer()
              : 0;
          },
          getBufferRate: function () {
            return this._streamController
              ? this._streamController.getBufferRate()
              : 0;
          },
          getPlayingQuality: function (e) {
            return this._streamController
              ? this._streamController.getPlayingQuality(e)
              : this.settings[e];
          },
          getBufferingQuality: function (e) {
            return this._streamController
              ? this._streamController.getBufferingQuality(e)
              : this.settings[e];
          },
          getMaxQuality: function (e) {
            var t = this.settings.manifest
              ? this.settings.manifest.streams[e]
              : null;
            return t ? t.qualities.length - 1 : 0;
          },
          _setState: function (e, t, i) {
            this.isDisposed ||
              this.state == e ||
              ((this.state = e),
              (this.lastError = t ? t + " " + (i ? "(" + i + ")" : "") : null),
              e == h.error &&
                this._streamController &&
                this._streamController.dispose(),
              this.timeAtFirstCanPlay ||
                (e != h.playing && e != h.paused) ||
                (this.timeAtFirstCanPlay =
                  new Date().getTime() - this.startTime),
              this.raiseEvent(u.sessionStateChange, e, t, i));
          },
          _initializeMediaSource: function (e) {
            function t() {
              i.removeEventListener("sourceopen", t),
                n._sessionIndex == r && ((n._mediaSource = i), n._tryStart());
            }
            var i,
              n = this,
              r = n._sessionIndex;
            n.raiseEvent(u.initMediaSourceStart);
            try {
              i = new MediaSource();
            } catch (a) {
              n._setState(h.error, Dashling.Error.mediaSourceInit);
            }
            i &&
              (i.addEventListener("sourceopen", t, !1),
              (e.src =
                window.URL.createObjectURL(i) ||
                ($B.RE_WebKit &&
                  window.webkitURL &&
                  window.webkitURL.createObjectURL(i))));
          },
          _initializeManifest: function (e) {
            function t(e) {
              n._loadIndex == r &&
                n.state != h.error &&
                ((n.settings.manifest = e), n._tryStart());
            }
            function i(e, t) {
              n._loadIndex == r && n._setState(h.error, e, t);
            }
            var n = this,
              r = n._loadIndex;
            n.settings.manifest
              ? t(n.settings.manifest)
              : ((n._parser = new Dashling.ManifestParser(n.settings)),
                n._parser.addEventListener(u.download, function (e) {
                  n.raiseEvent(Dashling.Event.download, e);
                }),
                this._parser.parse(e, t, i));
          },
          _tryStart: function () {
            var e = this;
            e.state != h.error &&
              e._mediaSource &&
              e.settings.manifest &&
              ((e._mediaSource.duration = e.settings.manifest.mediaDuration),
              (e._streamController = new Dashling.StreamController(
                e._videoElement,
                e._mediaSource,
                e.settings
              )),
              e._streamController.addEventListener(u.download, function (t) {
                e.raiseEvent(Dashling.Event.download, t);
              }),
              e._streamController.addEventListener(
                u.sessionStateChange,
                function (t, i, n) {
                  e._setState(t, i, n);
                }
              ),
              e._streamController.start());
          },
        }),
        e(Dashling.prototype, d),
        (Dashling.Settings = {
          manifest: null,
          startTime: 0,
          isABREnabled: !0,
          isRBREnabled: !1,
          targetQuality: { audio: 2, video: 2 },
          shouldAutoPlay: !0,
          logToConsole: !1,
          safeBufferSeconds: 12,
          maxBufferSeconds: 119.5,
          maxConcurrentRequests: { audio: 4, video: 6 },
          maxSegmentLeadCount: { audio: 1, video: 5 },
          defaultBandwidth: 520,
          requestTimeout: 3e4,
          maxRetries: 3,
          delaysBetweenRetries: [200, 1500, 3e3],
          requestCacheThreshold: 80,
          baseUrlOverride: null,
        }),
        (Dashling.ManifestParser = function (e) {
          var t = this;
          (t._settings = e),
            (t._requestManager = new Dashling.RequestManager(!1, e)),
            t._requestManager.addEventListener(u.download, function (e) {
              t.raiseEvent(u.download, e);
            });
        }),
        (Dashling.ManifestParser.prototype = {
          _parseIndex: 0,
          dispose: function () {
            this._requestManager &&
              (this._requestManager.dispose(), (this._requestManager = null));
          },
          parse: function (e, t, i) {
            function n(e) {
              if (a._parseIndex == o) {
                var n;
                try {
                  (n = a._parseManifest(e.data)), (n.request = e);
                } catch (r) {
                  i(c.manifestParse, r);
                }
                n && t(n);
              }
            }
            function r() {
              a._parseIndex == o && i(c.manifestDownload, s.statusCode);
            }
            var a = this,
              o = ++a._parseIndex,
              s = { url: e, requestType: "manifest", onSuccess: n, onError: r };
            this._requestManager.load(s);
          },
          _parseManifest: function (e) {
            var t,
              i = {},
              n = new DOMParser(),
              o = n.parseFromString(e, "text/xml");
            (i.baseUrl = this._settings.baseUrlOverride || r(o, "BaseURL", "")),
              (i.mediaDuration = a(
                o.documentElement.getAttribute("mediaPresentationDuration")
              )),
              (i.streams = {});
            for (
              var s = o.querySelectorAll("AdaptationSet"), l = 0;
              l < s.length;
              l++
            ) {
              var d = s[l];
              if (d) {
                var u = d.getAttribute("contentType"),
                  c = d.querySelectorAll("Representation"),
                  h = d.querySelector("SegmentTemplate"),
                  m = d.querySelectorAll("S"),
                  g = (i.streams[u] = {
                    streamType: u,
                    mimeType: d.getAttribute("mimeType"),
                    codecs: d.getAttribute("codecs"),
                    initUrlFormat: h.getAttribute("initialization"),
                    fragUrlFormat: h.getAttribute("media"),
                    qualities: [],
                    timeline: [],
                  }),
                  f = h.getAttribute("timescale");
                if (!m || !m.length) throw "Missing timeline";
                for (var p = 0; p < c.length; p++) {
                  var v = c[p],
                    y = {
                      id: v.getAttribute("id"),
                      bandwidth: v.getAttribute("bandwidth"),
                    };
                  v.getAttribute("height") &&
                    ((y.width = Number(v.getAttribute("width"))),
                    (y.height = Number(v.getAttribute("height")))),
                    g.qualities.push(y);
                }
                for (var C = 0, S = 0; S < m.length; S++) {
                  var b = m[S],
                    _ = Number(b.getAttribute("r")) || 0,
                    k = Number(b.getAttribute("d"));
                  for (t = 0; _ >= t; t++)
                    g.timeline.push({
                      start: C,
                      startSeconds: C / f,
                      length: k,
                      lengthSeconds: k / f,
                    }),
                      (C += k);
                }
              }
            }
            return i;
          },
        }),
        e(Dashling.ManifestParser.prototype, d);
      var g = 0.06,
        f = 0.5;
      (Dashling.StreamController = function (e, i, n) {
        var r = this;
        if (
          ((r._onVideoSeeking = t(r, r._onVideoSeeking)),
          (r._onVideoError = t(r, r._onVideoError)),
          (r._onPauseStateChange = t(r, r._onPauseStateChange)),
          (r._onVideoEnded = t(r, r._onVideoEnded)),
          (r._appendNextFragment = t(r, r._appendNextFragment)),
          (r._onThrottledSeek = t(r, r._onThrottledSeek)),
          (r._onVideoRateChange = t(r, r._onVideoRateChange)),
          (r._mediaSource = i),
          (r._settings = n),
          (r._bufferRate = []),
          (r._appendedSeconds = 0),
          (r._requestTimerIds = [0, 0]),
          r._intializeVideoElement(e),
          r._initializeStreams(e, i, n),
          r._streams.length && n && n.startTime)
        ) {
          var a = r._streams[0],
            o = a.fragments[0].time.lengthSeconds;
          this._appendIndex = Math.max(
            0,
            Math.min(a.fragments.length - 1, Math.floor((n.startTime - f) / o))
          );
        }
      }),
        (Dashling.StreamController.prototype = {
          _nextStreamIndex: 0,
          _appendIndex: 0,
          _audioDownloadIndex: 0,
          _videoDownloadIndex: 0,
          _simultaneousDownloadsPerStream: 2,
          _maxSegmentsAhead: 2,
          _nextRequestTimerId: 0,
          _seekingTimerId: 0,
          _stalls: 0,
          _lastCurrentTime: 0,
          _lastTimeBeforeSeek: 0,
          _startTime: 0,
          dispose: function () {
            var e = this;
            (e.isDisposed = !0),
              e._adjustPlaybackMonitor(!1),
              e._videoElement &&
                (e._videoElement.removeEventListener(
                  "seeking",
                  e._onVideoSeeking
                ),
                e._videoElement.removeEventListener("error", e._onVideoError),
                e._videoElement.removeEventListener(
                  "play",
                  e._onPauseStateChange
                ),
                e._videoElement.removeEventListener(
                  "pause",
                  e._onPauseStateChange
                ),
                e._videoElement.removeEventListener("ended", e._onVideoEnded),
                e._videoElement.removeEventListener(
                  "ratechange",
                  e._onVideoRateChange
                ),
                (e._videoElement = null));
            for (var t = 0; e._streams && t < e._streams.length; t++)
              e._streams[t].dispose();
            e._requestTimerIds[0] &&
              (clearTimeout(e._requestTimerIds[0]),
              (e._requestTimerIds[0] = 0)),
              e._requestTimerIds[1] &&
                (clearTimeout(e._requestTimerIds[1]),
                (e._requestTimerIds[1] = 1)),
              e._seekingTimerId &&
                (clearTimeout(e._seekingTimerId), (e._seekingTimerId = 0)),
              (e._mediaSource = null),
              e.removeAllEventListeners();
          },
          start: function () {
            (this._startTime = new Date().getTime()),
              this._setCanPlay(!1),
              this._loadNextFragment(),
              this._adjustPlaybackMonitor(!0);
          },
          getPlayingQuality: function (e) {
            var t = 0;
            if (!this.isDisposed)
              for (var i = 0; i < this._streams.length; i++) {
                var n = this._streams[i];
                if (n.streamType == e) {
                  var r = this._videoElement.currentTime,
                    a = Math.min(
                      n.fragments.length - 1,
                      Math.floor(r / n.fragments[0].time.lengthSeconds)
                    );
                  (t = n.fragments[a].qualityIndex),
                    (t = t >= 0 ? t : n.qualityIndex);
                  break;
                }
              }
            return t;
          },
          getBufferingQuality: function (e) {
            var t = 0;
            if (!this.isDisposed)
              for (var i = 0; i < this._streams.length; i++) {
                var n = this._streams[i];
                if (n.streamType == e) {
                  t = n.qualityIndex;
                  break;
                }
              }
            return t;
          },
          getBufferRate: function () {
            return this._bufferRate.average || 0;
          },
          getRemainingBuffer: function (e) {
            var t = this,
              i = 0;
            if (!t.isDisposed) {
              var n =
                  (t._settings.startTime || t._videoElement.currentTime) +
                  (e || 0),
                r = t._videoElement.buffered;
              !n && r.length > 0 && r.start(0) < 1 && (n = r.start(0));
              for (var a = 0; a < r.length; a++)
                if (n >= r.start(a) && n <= r.end(a)) {
                  for (var o = r.end(a); ++a < r.length && r.start(a) - o < g; )
                    o = r.end(a);
                  i = o - n;
                  break;
                }
            }
            return i;
          },
          getTimeUntilUnderrun: function (e) {
            var t = Number.MAX_VALUE,
              i = this;
            if (!i.isDisposed) {
              var n =
                  i._settings.startTime ||
                  Math.max(0.5, i._videoElement.currentTime),
                r = i._settings.manifest.mediaDuration - n - 0.5,
                a = this.getRemainingBuffer(e),
                o = this.getBufferRate(),
                s = a / this._settings.safeBufferSeconds;
              if (((s = Math.min(1, Math.max(0, s))), r > a)) {
                var l = a * o;
                (t = a + s * l),
                  (t > r || t > 0.5 * i._settings.maxBufferSeconds) &&
                    (t = Number.MAX_VALUE);
              }
            }
            return t;
          },
          _intializeVideoElement: function (e) {
            var t = this;
            e &&
              ((t._videoElement = e),
              e.addEventListener("seeking", t._onVideoSeeking),
              e.addEventListener("error", t._onVideoError),
              e.addEventListener("play", t._onPauseStateChange),
              e.addEventListener("pause", t._onPauseStateChange),
              e.addEventListener("ended", t._onVideoEnded),
              e.addEventListener("ratechange", t._onVideoRateChange));
          },
          _initializeStreams: function (e, t, n) {
            function r(e) {
              o.raiseEvent(u.download, e);
            }
            function a(e, t, i) {
              o.raiseEvent(u.sessionStateChange, e, t, i);
            }
            var o = this,
              s =
                n && n.manifest && n.manifest.streams
                  ? n.manifest.streams
                  : null;
            for (
              o._streams = [],
                s &&
                  (s.audio &&
                    o._streams.push(new Dashling.Stream("audio", t, e, n)),
                  s.video &&
                    o._streams.push(new Dashling.Stream("video", t, e, n))),
                i = 0;
              i < o._streams.length;
              i++
            )
              (stream = o._streams[i]),
                stream.addEventListener(u.download, r),
                stream.addEventListener(u.sessionStateChange, a),
                stream.initialize();
          },
          _loadNextFragment: function () {
            function e(e, i) {
              t.isDisposed ||
                (t._requestTimerIds[e] && clearTimeout(t._requestTimerIds[e]),
                (t._requestTimerIds[e] = setTimeout(function () {
                  (t._requestTimerIds[e] = 0), t._loadNextFragment();
                }, i)));
            }
            var t = this;
            if (!t.isDisposed) {
              for (var i = t._getDownloadCandidates(), n = 0; n < i.length; n++)
                for (
                  var r = i[n], a = t._streams[n], o = 0;
                  o < r.length;
                  o++
                ) {
                  var s = r[o],
                    l = (a.fragments[s], a.fragments[s - 1]),
                    d =
                      l &&
                      l.activeRequest &&
                      l.activeRequest.state == m.downloading
                        ? l.activeRequest
                        : null,
                    u = a.getRequestStaggerTime(),
                    c = d ? new Date().getTime() - d.startTime : 0;
                  if (d && !(c >= u)) {
                    e(n, u - c);
                    break;
                  }
                  a.load(s, this._appendNextFragment);
                }
              i.isAtMax && e(0, 300);
            }
          },
          _appendNextFragment: function (e) {
            var t,
              i,
              n = this,
              r = this._streams;
            if (!n.isDisposed) {
              var a = n._settings.startTime || n._videoElement.currentTime;
              if (
                r &&
                r.length &&
                n._mediaSource &&
                "closed" != n._mediaSource.readyState
              ) {
                for (; n._appendIndex < r[0].fragments.length; ) {
                  var s = !0,
                    l = !0;
                  for (i = 0; i < r.length; i++)
                    (t = r[i]),
                      (s &= t.canAppend(n._appendIndex)),
                      (l &=
                        t.fragments[n._appendIndex].state == m.appended &&
                        !t.isMissing(n._appendIndex, a));
                  if (s)
                    for (l = !1, i = 0; i < r.length; i++)
                      (t = r[i]),
                        t.append(n._appendIndex, n._appendNextFragment),
                        (l &= t.fragments[n._appendIndex].state == m.appended);
                  if (!l) break;
                  var d = n._streams[0].fragments[n._appendIndex];
                  if (!d.activeRequest._hasUpdatedBufferRate) {
                    (d.activeRequest._hasUpdatedBufferRate = !0),
                      (n._appendedSeconds += d.time.lengthSeconds);
                    var u = new Date().getTime(),
                      c = (u - this._startTime) / 1e3;
                    o(n._bufferRate, n._appendedSeconds / (c || 0.1), 3);
                  }
                  if ((n._appendIndex++, n._settings.startTime))
                    try {
                      (n._videoElement.currentTime = n._settings.startTime),
                        (n._settings.startTime = 0);
                    } catch (h) {}
                  n._checkCanPlay();
                }
                n._appendIndex == r[0].fragments.length &&
                  "open" == n._mediaSource.readyState &&
                  n._mediaSource.endOfStream(),
                  n._loadNextFragment();
              }
            }
          },
          _adjustPlaybackMonitor: function (e) {
            var t = this;
            !e && t._playbackMonitorId
              ? (clearInterval(t._playbackMonitorId),
                (t._playbackMonitorId = 0))
              : e &&
                !t._playbackMonitorId &&
                (t._playbackMonitorId = setInterval(function () {
                  t._checkCanPlay();
                }, 200));
          },
          _checkCanPlay: function () {
            var e = this,
              t = e.getTimeUntilUnderrun(),
              i = 0.5;
            (this._lastCurrentTime = e._videoElement.currentTime),
              e._canPlay &&
                0.1 > t &&
                !e._timeAtStall &&
                ((e._timeAtStall = this._lastCurrentTime),
                setTimeout(function () {
                  var t = e._timeAtStall;
                  (e._timeAtStall = 0),
                    e.isDisposed ||
                      e._videoElement.currentTime != t ||
                      (e._stalls++, e._setCanPlay(!1));
                }, 200)),
              e._canPlay ||
                (t > e._settings.safeBufferSeconds
                  ? this._setCanPlay(!0)
                  : e.getTimeUntilUnderrun(i) > e._settings.safeBufferSeconds &&
                    ((e._videoElement.currentTime = Math.min(
                      e._videoElement.currentTime + i,
                      e._videoElement.duration
                    )),
                    this._setCanPlay(!0))),
              this.raiseEvent(
                Dashling.Event.sessionStateChange,
                this._canPlay
                  ? this._videoElement.paused
                    ? h.paused
                    : h.playing
                  : h.buffering
              );
          },
          _allStreamsAppended: function (e, t) {
            for (var i = !1, n = 0; n < e.length; n++)
              i &= e[n].fragments[t] == m.appended;
            return i;
          },
          _getDownloadCandidates: function () {
            var e = this,
              t = e._getCurrentFragmentRange(),
              i = [],
              n = 0;
            if (t.start > -1) {
              e._ensureStreamsUpdated(t);
              var r = e._getMissingFragmentIndex(t);
              if (r >= 0) {
                t.start = Math.max(t.start, r);
                for (var a = 0; a < e._streams.length; a++) {
                  var o = e._streams[a];
                  i.push(e._getDownloadableIndexes(o, t)),
                    (n += i[i.length - 1].length);
                }
              }
            }
            return (
              (i.isAtMax =
                !n && t.end >= 0 && t.end < e._streams[0].fragments.length - 1),
              i
            );
          },
          _getCurrentFragmentRange: function () {
            var e = this,
              t = e._videoElement,
              i = e._settings.manifest.mediaDuration,
              n = { start: -1, end: -1 };
            if (i > 0) {
              var r = e._settings.startTime || t.currentTime,
                a = r + 0.005 >= i,
                o = e._streams[0],
                s = o.fragments.length,
                l = o.fragments[0].time.lengthSeconds;
              a ||
                (r > f && (r -= f),
                (n.start = Math.max(0, Math.min(s - 1, Math.floor(r / l)))),
                (n.end = Math.max(
                  0,
                  Math.min(
                    s - 1,
                    Math.ceil((r + e._settings.maxBufferSeconds) / l)
                  )
                )));
            }
            return n;
          },
          _ensureStreamsUpdated: function (e) {
            for (
              var t = this, i = t._videoElement.currentTime, r = 0;
              r < t._streams.length;
              r++
            ) {
              (stream = t._streams[r]), stream.assessQuality();
              for (var a = e.start; a <= e.end; a++)
                if (stream.isMissing(a, i)) {
                  var o = stream.fragments[a];
                  n(
                    "Missing fragment reset: stream=" +
                      stream.streamType +
                      " index=" +
                      a +
                      " [" +
                      o.time.startSeconds +
                      "]",
                    t._settings
                  ),
                    (stream.fragments[a].state = m.idle);
                }
            }
          },
          _getMissingFragmentIndex: function (e) {
            for (var t = this, i = e.start; i <= e.end; i++)
              for (var n = 0; n < t._streams.length; n++) {
                var r = t._streams[n].fragments[i];
                if (r.state <= m.idle) return i;
              }
            return -1;
          },
          _getDownloadableIndexes: function (e, t) {
            for (
              var i = this,
                n = [],
                r = Math.min(
                  t.end,
                  t.start + i._settings.maxSegmentLeadCount[e.streamType]
                ),
                a =
                  i._settings.maxConcurrentRequests[e.streamType] -
                  e.getActiveRequestCount(),
                o = t.start;
              n.length < a && r >= o;
              o++
            )
              e.fragments[o].state <= m.idle && n.push(o);
            return n;
          },
          _setCanPlay: function (e) {
            this._canPlay !== e &&
              ((this._canPlay = e), this._onVideoRateChange());
          },
          _onVideoSeeking: function () {
            this._lastTimeBeforeSeek ||
              (this._lastTimeBeforeSeek = this._lastCurrentTime),
              this._seekingTimerId && clearTimeout(this._seekingTimerId),
              this._setCanPlay(!1),
              (this._settings.startTime = 0),
              (this._seekingTimerId = setTimeout(this._onThrottledSeek, 300));
          },
          _onThrottledSeek: function () {
            var e = this;
            if (!e.isDisposed) {
              var t,
                i = e._videoElement.currentTime,
                r =
                  (this._lastTimeBeforeSeek,
                  Math.floor(
                    Math.max(0, i - f) /
                      e._streams[0].fragments[0].time.lengthSeconds
                  )),
                a =
                  1 == e._videoElement.buffered.length &&
                  e._videoElement.buffered.start(0) <= Math.max(0, i - 2) &&
                  e._videoElement.buffered.end(0) > i;
              if (
                (n(
                  "Throttled seek: " + e._videoElement.currentTime,
                  e._settings
                ),
                (e._seekingTimerId = 0),
                (e._lastTimeBeforeSeek = 0),
                clearTimeout(e._nextRequestTimerId),
                (e._nextRequestTimerId = 0),
                e._appendIndex < r)
              )
                for (t = 0; t < e._streams.length; t++)
                  e._streams[t].abortAll();
              if (
                e._settings.manifest.mediaDuration >
                  e._settings.maxBufferSeconds &&
                !a
              )
                for (
                  n("Clearing buffer", e._settings), t = 0;
                  t < e._streams.length;
                  t++
                )
                  e._streams[t].clearBuffer();
              (e._appendIndex = r), e._appendNextFragment();
            }
          },
          _onVideoError: function () {
            var e,
              t = this._videoElement.error,
              i = "VideoElementUnexpected";
            if (t) {
              i = t.code;
              for (e in t)
                if (t[e] == i && "code" != e) {
                  i = e;
                  break;
                }
            }
            this.raiseEvent(Dashling.Event.sessionStateChange, h.error, i);
          },
          _onPauseStateChange: function () {
            this._adjustPlaybackMonitor(!this._videoElement.paused),
              this._checkCanPlay();
          },
          _onVideoEnded: function () {
            this.raiseEvent(u.sessionStateChange, h.paused);
          },
          _onVideoRateChange: function () {
            var e = this._canPlay ? 1 : 0;
            this._videoElement.playbackRate != e &&
              (this._videoElement.playbackRate =
                this._videoElement.defaultPlaybackRate =
                  e);
          },
        }),
        e(Dashling.StreamController.prototype, d),
        e(Dashling.StreamController.prototype, l);
      var p = "Dashling.Stream.bytesPerSecond";
      (Dashling.Stream = function (t, i, n, r) {
        function a(e) {
          o.raiseEvent(u.download, e);
        }
        var o = this,
          s = r.manifest.streams[t];
        e(o, {
          fragments: [],
          streamType: t,
          qualityIndex: Math.max(
            0,
            Math.min(s.qualities.length - 1, r.targetQuality[t])
          ),
          _startTime: new Date().getTime(),
          _appendLength: 0,
          _appendTimeoutId: 0,
          _initializedQualityIndex: -1,
          _initRequestManager: new Dashling.RequestManager(!1, r),
          _requestManager: new Dashling.RequestManager("video" == t, r),
          _mediaSource: i,
          _videoElement: n,
          _settings: r,
          _manifest: r.manifest,
          _streamInfo: s,
          _buffer: null,
          _hasInitializedBuffer: !1,
          _bufferRate: [],
          _initSegments: [],
        });
        for (var l = s.timeline.length, d = 0; l > d; d++)
          o.fragments.push({
            state: m.idle,
            qualityIndex: -1,
            qualityId: "",
            requestType: "media",
            fragmentIndex: d,
            time: s.timeline[d],
            activeRequest: null,
            requests: [],
          });
        o._requestManager.addEventListener(u.download, a),
          o._initRequestManager.addEventListener(u.download, a);
      }),
        (Dashling.Stream.prototype = {
          initialize: function () {
            var e =
              this._streamInfo.mimeType + ";codecs=" + this._streamInfo.codecs;
            if (!this._buffer)
              try {
                n("Creating " + e + " buffer", this._settings),
                  (this._buffer = this._mediaSource.addSourceBuffer(e));
              } catch (t) {
                this.raiseEvent(
                  u.sessionStateChange,
                  h.error,
                  c.sourceBufferInit,
                  "type=" + e + " error=" + t
                );
              }
          },
          dispose: function () {
            this._requestManager && this._requestManager.dispose(),
              this._initRequestManager && this._initRequestManager.dispose(),
              this.clearAllThrottles(),
              this.removeAllEventListeners(),
              (this.isDisposed = !0);
          },
          abortAll: function () {
            this._requestManager.abortAll();
          },
          clearBuffer: function () {
            var e = this;
            clearTimeout(e._appendTimeoutId),
              (this._isAppending = !1),
              this.abortAll();
            try {
              e._buffer.remove(0, e._videoElement.duration);
            } catch (t) {}
            for (var i = 0; i < e.fragments.length; i++) {
              var n = e.fragments[i];
              n.state !== m.downloaded && (n.state = m.idle);
            }
          },
          canAppend: function (e) {
            var t = this.fragments[e],
              i = t ? this._initSegments[t.qualityIndex] : null,
              n = this._initSegments[this._streamInfo.qualities.length - 1];
            return (
              t &&
              t.state == m.downloaded &&
              i &&
              i.state >= m.downloaded &&
              n &&
              n.state >= m.downloaded
            );
          },
          append: function (e, t) {
            function i() {
              if (!s.isDisposed)
                if (s._buffer.updating) s._appendTimeoutId = setTimeout(i, 10);
                else {
                  var d = g[0];
                  if (g.length) {
                    f.addEventListener("update", r);
                    try {
                      n(
                        "Append started: " +
                          s.streamType +
                          " " +
                          d.qualityId +
                          " " +
                          d.requestType +
                          " " +
                          (void 0 !== d.fragmentIndex
                            ? "index " + d.fragmentIndex
                            : ""),
                        s._settings
                      ),
                        f.appendBuffer(d.data);
                    } catch (u) {
                      a(c.sourceBufferAppendException, u);
                    }
                  } else
                    s._appendTimeoutId = setTimeout(function () {
                      if (!s.isDisposed)
                        if (
                          ((l.state = m.appended),
                          (s._isAppending = !1),
                          s.isMissing(e, s._videoElement.currentTime))
                        )
                          a(
                            c.sourceBufferAppendMissing,
                            "Buffer missing appended fragment"
                          );
                        else {
                          var i = (new Date().getTime() - s._startTime) / 1e3;
                          (s._appendLength += l.time.lengthSeconds),
                            o(s._bufferRate, s._appendLength / i, 5),
                            t(l);
                        }
                    }, 30);
                }
            }
            function r() {
              if (!s.isDisposed) {
                var e = g[0];
                f.removeEventListener("update", r),
                  (e.timeAtAppended = new Date().getTime() - e.startTime),
                  (e.state = m.appended),
                  e.clearDataAfterAppend && (e.data = null),
                  "init" === e.requestType &&
                    (s._initializedQualityIndex = e.qualityIndex),
                  n(
                    "Append complete: " +
                      s.streamType +
                      " " +
                      e.qualityId +
                      " " +
                      e.requestType +
                      " " +
                      (void 0 !== e.fragmentIndex
                        ? "index " + e.fragmentIndex
                        : ""),
                    s._settings
                  ),
                  g.shift(),
                  i();
              }
            }
            function a(e, t) {
              t = t || "";
              var i =
                "error=" +
                t +
                " (quality=" +
                l.qualityId +
                (void 0 !== l.fragmentIndex
                  ? " index=" + l.fragmentIndex
                  : "") +
                ")";
              (l.state = m.error),
                (s._isAppending = !1),
                n("Append exception: " + i),
                s.raiseEvent(u.sessionStateChange, h.error, e, i);
            }
            var s = this,
              l = s.fragments[e],
              d = s._streamInfo.qualities.length - 1,
              g = [],
              f = s._buffer;
            !s._isAppending &&
              l &&
              l.state === m.downloaded &&
              ((s._isAppending = !0),
              (l.state = m.appending),
              this._hasInitializedBuffer ||
                ((this._hasInitializedBuffer = !0),
                d > l.qualityIndex && g.push(s._initSegments[d])),
              g.push(s._initSegments[l.qualityIndex]),
              g.push(l.activeRequest),
              i());
          },
          getBufferRate: function () {
            return this._bufferRate.average || 0;
          },
          getActiveRequestCount: function () {
            return this._requestManager.getActiveRequestCount();
          },
          getRequestStaggerTime: function () {
            return Math.round(
              1400 * this._estimateDownloadSeconds(this.qualityIndex)
            );
          },
          isMissing: function (e, t) {
            var i = this.fragments[e];
            return i.state == m.appended && !this.isBuffered(e, t);
          },
          isBuffered: function (e, t) {
            var i = this.fragments[e],
              n = !1;
            if (i) {
              var r = this._buffer.buffered,
                a = i.time,
                o = a.startSeconds < 0.3,
                s =
                  a.startSeconds + a.lengthSeconds + 0.3 >=
                  this._manifest.mediaDuration,
                l = Math.max(t, a.startSeconds + (o ? 0.8 : 0.15)),
                d = a.startSeconds + a.lengthSeconds - (s ? 0.8 : 0.15);
              try {
                for (var u = 0; u < r.length; u++)
                  if (r.start(u) <= l && r.end(u) >= d) {
                    n = !0;
                    break;
                  }
              } catch (c) {
                n = !0;
              }
            }
            return n;
          },
          canLoad: function (e) {
            return this.fragments[e].state <= m.idle;
          },
          load: function (e, t) {
            function i(e) {
              if (!a.isDisposed) {
                o.state = m.downloaded;
                var i = Math.round(
                    e.timeAtLastByte -
                      (e.timeAtEstimatedFirstByte || e.timeAtFirstByte)
                  ),
                  r = e.timeAtLastByte - i;
                n(
                  "Download complete: " +
                    e.qualityId +
                    " " +
                    e.requestType +
                    " index: " +
                    e.fragmentIndex +
                    " waiting: " +
                    r +
                    "ms receiving: " +
                    i,
                  a._settings
                ),
                  t(o);
              }
            }
            function r(e) {
              a.isDisposed ||
                (e.isAborted
                  ? ((o.state = m.idle),
                    (o.activeRequest = null),
                    (o.requests = []))
                  : ((o.state = m.error),
                    a.raiseEvent(
                      u.sessionStateChange,
                      h.error,
                      c.mediaSegmentDownload,
                      e.statusCode
                    )));
            }
            var a = this,
              o = this.fragments[e];
            if (o && o.state <= m.idle) {
              (o.state = m.downloading),
                (o.qualityIndex = a.qualityIndex),
                (o.qualityId = this._streamInfo.qualities[o.qualityIndex].id),
                a._loadInitSegment(this.qualityIndex, t);
              var s = {
                url: a._getUrl(e, o),
                state: m.downloading,
                fragmentIndex: e,
                requestType: "media",
                qualityIndex: o.qualityIndex,
                qualityId: o.qualityId,
                clearDataAfterAppend: !0,
                isArrayBuffer: !0,
                onSuccess: i,
                onError: r,
              };
              (o.activeRequest = s),
                o.requests.push(s),
                n(
                  "Download started: " +
                    s.qualityId +
                    " " +
                    s.requestType +
                    " " +
                    (void 0 !== s.fragmentIndex
                      ? "index=" + s.fragmentIndex
                      : "") +
                    " time=" +
                    (new Date().getTime() - a._startTime) +
                    "ms stagger=" +
                    a.getRequestStaggerTime() +
                    "ms",
                  a._settings
                ),
                a._requestManager.load(s);
            }
          },
          assessQuality: function () {
            var e = this,
              t = e._settings,
              i = e._requestManager.getAverageBytesPerSecond(),
              r = e._streamInfo.qualities.length - 1;
            if (
              (i
                ? "video" === this.streamType && localStorage.setItem(p, i)
                : (i = parseFloat(localStorage.getItem(p))),
              t.isABREnabled && i)
            )
              if (t.isRBREnabled)
                e.qualityIndex = Math.round(Math.random() * r);
              else {
                for (
                  var a = 0,
                    o =
                      "Quality check " +
                      e.streamType +
                      ": bps=" +
                      Math.round(i),
                    s = e._streamInfo.timeline[0].lengthSeconds,
                    l = 0.4 * s,
                    d = 0;
                  r >= d;
                  d++
                ) {
                  var u = e._estimateDownloadSeconds(d, 0);
                  (o += " " + d + "=" + u.toFixed(2) + "s"),
                    s > u + l && (a = d);
                }
                e.throttle(
                  function () {
                    n(o, e._settings);
                  },
                  "assess",
                  1e3,
                  !1,
                  !1
                ),
                  (e.qualityIndex = a);
              }
            else
              e.qualityIndex = Math.min(
                e._streamInfo.qualities.length - 1,
                t.targetQuality[e.streamType]
              );
          },
          _estimateDownloadSeconds: function (e, t) {
            var i = this,
              n = i._streamInfo.qualities[e],
              r = i._streamInfo.timeline[t || 0].lengthSeconds,
              a = n.bandwidth / 8,
              o = a * r,
              s = i._requestManager.getAverageBytesPerSecond();
            s
              ? "video" === this.streamType && localStorage.setItem(p, s)
              : (s = parseFloat(localStorage.getItem(p)));
            var l = s || i._settings.defaultBandwidth;
            return o / l;
          },
          _loadInitSegment: function (e, t) {
            function i() {
              a.isDisposed ||
                ((s.state = m.downloaded),
                n(
                  "Download complete: " +
                    a.streamType +
                    " " +
                    s.qualityId +
                    " " +
                    s.requestType +
                    " " +
                    (void 0 !== s.fragmentIndex
                      ? "index " + s.fragmentIndex
                      : ""),
                  a._settings
                ),
                t(s));
            }
            function r() {
              a.isDisposed ||
                ((s.state = m.error),
                a.raiseEvent(
                  u.sessionStateChange,
                  h.error,
                  c.initSegmentDownload,
                  s.statusCode
                ));
            }
            var a = this,
              o = this._streamInfo.qualities.length - 1;
            if ((e != o && a._loadInitSegment(o, t), !a._initSegments[e])) {
              var s = (a._initSegments[e] = {
                url: this._getInitUrl(e),
                state: m.downloading,
                timeAtDownloadStarted: new Date().getTime(),
                requestType: "init",
                qualityIndex: e,
                qualityId: this._streamInfo.qualities[e].id,
                isArrayBuffer: !0,
                onSuccess: i,
                onError: r,
              });
              n(
                "Download started: " +
                  a.streamType +
                  " " +
                  s.qualityId +
                  " " +
                  s.requestType +
                  " " +
                  (void 0 !== s.fragmentIndex
                    ? "index " + s.fragmentIndex
                    : ""),
                a._settings
              ),
                a._initRequestManager.load(s);
            }
          },
          _getInitUrl: function (e) {
            var t = this._streamInfo.initUrlFormat.replace(
              "$RepresentationID$",
              this._streamInfo.qualities[e].id
            );
            return this._manifest.baseUrl + t;
          },
          _getUrl: function (e, t) {
            var i = this._streamInfo.fragUrlFormat
              .replace("$RepresentationID$", t.qualityId)
              .replace("$Time$", t.time.start);
            return this._manifest.baseUrl + i;
          },
        }),
        e(Dashling.Stream.prototype, d),
        e(Dashling.Stream.prototype, l),
        (Dashling.RequestManager = function (t, i) {
          e(this, {
            _settings: i,
            _activeRequests: {},
            _retryTimeoutIds: {},
            _waitTimes: [],
            _receiveTimes: [],
            _bytesPerSeconds: [],
            _shouldRecordStats: t,
            _maxRetries: i.maxRetries,
            _delaysBetweenRetries: i.delaysBetweenRetries,
          });
        });
      (Dashling.RequestManager.prototype = {
        _activeRequestCount: 0,
        _totalRequests: 0,
        _xhrType: XMLHttpRequest,
        dispose: function () {
          this.abortAll(), this.removeAllEventListeners();
        },
        getActiveRequestCount: function () {
          return this._activeRequestCount;
        },
        abortAll: function () {
          for (var e in this._retryTimeoutIds) clearTimeout(e);
          for (var t in this._activeRequests) {
            var i = this._activeRequests[t];
            n("Aborting request: " + i.url, this._settings),
              (i.isAborted = !0),
              i.abort();
          }
          (this._retryTimeoutIds = {}), (this._activeRequests = {});
        },
        load: function (e) {
          function t() {
            function l() {
              0 === d.status &&
                e.timeAtLastByte >= i._settings.requestTimeout &&
                (d.isTimedOut = !0),
                i._isRetriable(d) && ++r < n
                  ? (e.retryCount++,
                    (i._retryTimeoutIds[s] = setTimeout(
                      t,
                      a[Math.min(a.length - 1, r)]
                    )))
                  : ((e.state = m.error),
                    (e.hasError = !0),
                    (e.isAborted = d.isAborted),
                    (e.statusCode = d.isAborted
                      ? "aborted"
                      : d.isTimedOut
                      ? "timeout"
                      : d.status),
                    e.onError && e.onError(e));
            }
            delete i._retryTimeoutIds[s];
            var d = new i._xhrType();
            (i._activeRequests[s] = d),
              i._activeRequestCount++,
              i._totalRequests++,
              (d.url = e.url),
              d.open("GET", e.url, !0),
              e.isArrayBuffer && (d.responseType = "arraybuffer"),
              (d.timeout = i._settings.requestTimeout),
              (d.onreadystatechange = function () {
                d.readyState > 0 &&
                  e.timeAtFirstByte < 0 &&
                  (e.timeAtFirstByte = new Date().getTime() - e.startTime);
              }),
              (d.onprogress = function (t) {
                e.progressEvents.push({
                  timeFromStart: new Date().getTime() - e.startTime,
                  bytesLoaded: t.lengthComputable ? t.loaded : -1,
                }),
                  i._postProgress(e.progressEvents, !1);
              }),
              (d.onloadend = function () {
                if (
                  (delete i._activeRequests[s],
                  i._activeRequestCount--,
                  (e.timeAtLastByte = new Date().getTime() - e.startTime),
                  d.status >= 200 && d.status <= 299)
                ) {
                  if (
                    ((e.bytesLoaded = e.isArrayBuffer
                      ? d.response.byteLength
                      : d.responseText
                      ? d.responseText.length
                      : 0),
                    d.onreadystatechange(),
                    i._postProgress(e.progressEvents, !0),
                    e.progressEvents.length > 2)
                  ) {
                    var t = e.progressEvents[e.progressEvents.length - 1],
                      n = e.progressEvents[0],
                      r = t.timeFromStart - n.timeFromStart,
                      a = t.bytesLoaded - n.bytesLoaded;
                    (e.bytesPerMillisecond = a / r),
                      (e.timeAtFirstByte =
                        e.timeAtLastByte -
                        e.bytesLoaded / e.bytesPerMillisecond);
                  }
                  (e.data = e.isArrayBuffer
                    ? new Uint8Array(d.response)
                    : d.responseText),
                    (e.statusCode = d.status),
                    (e.state = m.downloaded),
                    e.onSuccess && e.onSuccess(e);
                } else l(e);
                e.timeAtLastByte > i._settings.requestCacheThreshold &&
                  (o(i._waitTimes, e.timeAtFirstByte, 20),
                  o(i._receiveTimes, e.timeAtLastByte - e.timeAtFirstByte, 20),
                  i.raiseEvent(Dashling.Event.download, e));
              }),
              (e.state = m.downloading),
              (e.progressEvents = []),
              (e.timeAtFirstByte = -1),
              (e.timeAtLastByte = -1),
              (e.startTime = new Date().getTime()),
              d.send();
          }
          var i = this,
            n = this._maxRetries,
            r = -1,
            a = this._delaysBetweenRetries,
            s = i._totalRequests + 1;
          (e.retryCount = 0), t();
        },
        _isRetriable: function (e) {
          return !e.isAborted && 404 != e.status;
        },
        _postProgress: function (e, t) {
          if (e.length > 2) {
            var i = e[e.length - 1],
              n = e[0],
              r = i.bytesLoaded - n.bytesLoaded;
            if (r > 1e4) {
              var a = i.timeFromStart - n.timeFromStart;
              a > 5 &&
                (t || this._bytesPerSeconds.length < 5) &&
                o(this._bytesPerSeconds, (1e3 * r) / a, 20);
            }
          }
        },
        getAverageWait: function () {
          return this._waitTimes.average || 0;
        },
        getAverageReceive: function () {
          return this._receiveTimes.average || 0;
        },
        getAverageBytesPerSecond: function () {
          return this._bytesPerSeconds.average || 0;
        },
      }),
        e(Dashling.RequestManager.prototype, d);
    })();
  }),
  define("dashmonitor.css", ["registerstyle", "dashling.full"], function (e) {
    registerStyle(
      ".c-DashMonitor {\r\n  background: rgba(44, 44, 44, .7);\r\n  position: absolute;\r\n  top: -10px;\r\n  left: 0px;\r\n  right: 0px;\r\n  min-height: 15px;\r\n  display: block;\r\n  opacity: 0;\r\n  color: #AAA;\r\n}\r\n\r\n.c-DashMonitor.isVisible {\r\n  transition: opacity .2s linear, top .25s ease-out;\r\n  top: 0px;\r\n  opacity: 1;\r\n}\r\n\r\n.c-DashMonitor .streamData,\r\n.c-DashMonitor .key\r\n{\r\n  display: none;\r\n}\r\n\r\n.c-DashMonitor .isVisible {\r\n  display: block;\r\n}\r\n\r\n.c-DashMonitor .streamMetrics {\r\n  list-style-type: none;\r\n  padding: 5px 5px 0 5px;\r\n  margin: 0;\r\n}\r\n\r\n.c-DashMonitor .streamMetrics li {\r\n  margin-right: 5px;\r\n  margin-bottom: 5px;\r\n  border: 1px solid rgba(255, 255, 255, 0.5);\r\n  background: #313131;\r\n  overflow: hidden;\r\n  vertical-align: top;\r\n  font-size: 11px;\r\n  display: none;\r\n}\r\n\r\n.c-DashMonitor .streamMetrics li.hasValue {\r\n  display: inline-block;\r\n}\r\n\r\n.c-DashMonitor .streamTitle {\r\n  font-size: 15px;\r\n  display: inline-block;\r\n  width: 80px;\r\n  text-align: right;\r\n  float: left;\r\n  margin-right: 5px;\r\n  line-height: 30px;\r\n}\r\n\r\n.c-DashMonitor .metricTitle {\r\n\r\n  padding: 3px 5px;\r\n  display: inline-block;\r\n  font-weight: bold;\r\n}\r\n\r\n.c-DashMonitor .metricValue {\r\n  display: inline-block;\r\n  padding: 3px 5px;\r\n  white-space: nowrap;\r\n  background: rgb(95, 95, 95);\r\n  color: white;\r\n}\r\n\r\n\r\n.c-DashMonitor .row {\r\n  line-height: 15px;\r\n  height: 15px;\r\n  padding-bttom: 1px;\r\n  position: relative;\r\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n  margin-top: -1px;\r\n  font-family: Segoe UI;\r\n  font-weight: bold;\r\n  font-size: 9px;\r\n  background: #222;\r\n}\r\n\r\n.c-DashMonitor .traffic {\r\n  position: relative;\r\n}\r\n\r\n.c-DashMonitor .seekContainer {\r\n  margin-left: 3px;\r\n}\r\n.c-DashMonitor .seekBar {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0%;\r\n  width: 2px;\r\n  margin-left: -2px;\r\n  background: rgba(255,255,255,.7);\r\n  height: 100%;\r\n}\r\n\r\n.c-DashMonitor .rowHeader {\r\n  position: absolute;\r\n  width: 80px;\r\n  text-align: right;\r\n}\r\n\r\n.c-DashMonitor .rowFragments,\r\n.c-DashMonitor .seekContainer {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 85px;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.c-DashMonitor .rowRequest {\r\n  position: absolute;\r\n  top: 2px;\r\n  bottom: 2px;\r\n  border-radius: 4px;\r\n  box-shadow: inset -4px 0px 7px 0px rgba(0,0,0,.6);\r\n  min-width: 5px;\r\n}\r\n\r\n.c-DashMonitor .key {\r\n  box-shadow: inset 0 8px 15px -10px rgba(0,0,0,.2);\r\n  font-size: 11px;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n.c-DashMonitor .keyItem {\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n\r\n.c-DashMonitor .keyBox {\r\n  display: inline-block;\r\n  position: relative;\r\n  top: -1px;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 0 5px;\r\n  border: 1px solid #888;\r\n  vertical-align: middle;\r\n}\r\n\r\n.c-DashMonitor .waiting { background: rgb(173, 173, 173) url(data:image/gif;base64,R0lGODlhBAAEAIAAANLS0paWliH/C05FVFNDQVBFMi4wAwEAAAAh+QQEBQAAACwAAAAABAAEAAACBkwAl2h5BQAh+QQEBQAAACwAAAAABAAEAAACBURiaLBZACH5BAQFAAAALAAAAAAEAAQAAAIGBBKXaHkFACH5BAQFAAAALAAAAAAEAAQAAAIFDGBosVkAOw==); }\r\n.c-DashMonitor .downloading { background: rgb(114, 114, 114) url(data:image/gif;base64,R0lGODlhBAAEAIAAADZn96m++yH/C05FVFNDQVBFMi4wAwEAAAAh+QQEBQAAACwAAAAABAAEAAACBgQSl2h5BQAh+QQEBQAAACwAAAAABAAEAAACBQxgaLFZACH5BAQFAAAALAAAAAAEAAQAAAIGTACXaHkFACH5BAQFAAAALAAAAAAEAAQAAAIFRGJosFkAOw==); }\r\n.c-DashMonitor .downloaded { background: rgb(55, 71, 255); }\r\n.c-DashMonitor .appending { background: rgb(133, 185, 143); }\r\n.c-DashMonitor .appended { background: rgb(0, 189, 36); }\r\n.c-DashMonitor .error { background: rgb(223, 66, 66); }\r\n\r\n"
    );
  }),
  define("dashmonitor", ["dashmonitor.css"], function () {
    function e(e, t) {
      return (t = t || document), t.querySelector(e);
    }
    function t(e, t, i, n) {
      var r = document.createElement(e);
      return (
        t && (r.className = t),
        i && (r.textContent = i),
        n && n.appendChild(r),
        r
      );
    }
    function i(e, t) {
      for (var i in t) if (t[i] == e) return i;
      return "";
    }
    function n(e, t, i) {
      var n = parseFloat(e.toFixed(t));
      if (i)
        for (
          n = "" + n, -1 == n.indexOf(".") && (n += ".");
          n.indexOf(".") != n.length - 3;

        )
          n += "0";
      return n;
    }
    function r(e) {
      var t = 1e3,
        i = t * t,
        r = 8 * e;
      return t > r
        ? r + " bps"
        : i > r
        ? n(r / t, 2, 2) + " kbps"
        : n(r / i, 2, 2) + " mbps";
    }
    function a(e, t, i) {
      var n,
        r = e.className.trim().split(" "),
        a = {},
        o = "";
      for (n = 0; n < r.length; n++) r[n] && (a[r[n]] = !0);
      (i = void 0 === i ? !a[t] : i), i ? (a[t] = !0) : delete a[t];
      for (n in a) o += n + " ";
      e.className = o.trim();
    }
    function o(e, t) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    var s = 0;
    (window.DashMonitor = function () {
      (this.id = "DashMonitorView-" + s++),
        (this._rowElements = {}),
        (this.dataContext = {}),
        (this._updateSeekBar = o(this, this._updateSeekBar)),
        (this._onSessionChanged = o(this, this._onSessionChanged));
    }),
      (window.DashMonitor.prototype = {
        id: "",
        isActive: !1,
        isVisible: !0,
        dataContext: null,
        element: null,
        qualityContainer: null,
        _metricCount: 0,
        _video: null,
        attachTo: function (e) {
          var i = t("div");
          (i.innerHTML = this.renderHtml()),
            this.element
              ? e.replaceChild(i.firstChild, this.element)
              : e.appendChild(i.firstChild),
            this.activate();
        },
        dispose: function () {
          var e = this;
          e._interval && (clearInterval(e._interval), (e._interval = null)),
            e._videoElement &&
              (e._videoElement.removeEventListener(
                "timeupdate",
                e._updateSeekBar
              ),
              e._videoElement.removeEventListener("seeking", e._updateSeekBar),
              (e._videoElement = null)),
            e._dashling &&
              (e._dashling.removeEventListener(
                Dashling.Event.sessionStateChange,
                e._onSessionChanged
              ),
              (e._dashling = null));
        },
        observe: function (e, t) {
          var i = this;
          i.dispose(),
            t &&
              ((i._videoElement = t),
              t.addEventListener("timeupdate", i._updateSeekBar),
              t.addEventListener("seeking", i._updateSeekBar)),
            e &&
              ((i._dashling = e),
              e.addEventListener(
                Dashling.Event.sessionStateChange,
                i._onSessionChanged
              ),
              i._onSessionChanged());
        },
        _onSessionChanged: function () {
          var e = this,
            t = e._dashling,
            i = t.state;
          i == Dashling.SessionState.error || i == Dashling.SessionState.idle
            ? (clearInterval(e._interval),
              (e._interval = 0),
              e.setDataContext(e._getStats(t)))
            : t.state > Dashling.SessionState.idle &&
              !e._interval &&
              (e._interval = setInterval(function () {
                e.isVisible && e.setDataContext(e._getStats(t));
              }, 100));
        },
        reset: function () {
          this.element &&
            ((this.dataContext = {}), this.attachTo(this.element.parentNode));
        },
        setVisibility: function (e) {
          e != this.isVisible &&
            ((this.isVisible = e),
            this.isActive && this._update(this.dataContext));
        },
        setDataContext: function (e) {
          (this.dataContext = e), this._update(this.dataContext);
        },
        renderHtml: function () {
          var e =
            '<div id="' +
            this.id +
            '" class="c-DashMonitor"><ul class="streamMetrics"></ul><div class="audio streamData"><span class="streamTitle">Audio</span><ul class="streamMetrics"></ul><div class="traffic"><div class="qualities"></div><div class="seekContainer"><div class="seekBar"></div></div></div></div><div class="video streamData"><span class="streamTitle">Video</span><ul class="streamMetrics"></ul><div class="traffic"><div class="qualities"></div><div class="seekContainer"><div class="seekBar"></div></div></div></div><div class="key"><div class="keyItem"><div class="keyBox waiting"></div><span>Waiting for response</span></div><div class="keyItem"><div class="keyBox downloading"></div><span>Receiving bytes</span></div><div class="keyItem"><div class="keyBox downloaded"></div><span>Downloaded</span></div><div class="keyItem"><div class="keyBox appending"></div><span>Appending</span></div><div class="keyItem"><div class="keyBox appended"></div><span>Appended</span></div><div class="keyItem"><div class="keyBox error"></div><span>Error</span></div></div>';
          return e;
        },
        activate: function () {
          var t = (this.element = e("#" + this.id));
          (this.subElements = {
            metrics: e(".streamMetrics", t),
            audio: {
              element: e(".audio"),
              metrics: e(".audio .streamMetrics", t),
              qualities: e(".audio .qualities", t),
              seekBar: e(".audio .seekBar", t),
            },
            video: {
              element: e(".video"),
              metrics: e(".video .streamMetrics", t),
              qualities: e(".video .qualities", t),
              seekBar: e(".video .seekBar", t),
            },
            key: e(".key"),
          }),
            (this.isActive = !0),
            this._update(this.dataContext);
        },
        deactivate: function () {
          (this.subElements = null), (this.isActive = !1);
        },
        _updateSeekBar: function () {
          var e = this,
            t = e._videoElement;
          if (t) {
            var i = (100 * t.currentTime) / t.duration + "%";
            (e.subElements.audio.seekBar.style.left = i),
              (e.subElements.video.seekBar.style.left = i);
          }
        },
        _update: function (e) {
          var t = void 0 !== e.state && e.state != Dashling.SessionState.idle;
          if (this.isActive) {
            var i = this.subElements;
            a(this.element, "isVisible", t && this.isVisible),
              this._updateMetrics(i.metrics, e.metrics);
            var n = (e && e.streams && e.streams.audio) || {},
              r = (e && e.streams && e.streams.video) || {};
            a(i.audio.element, "isVisible", !(!n.metrics && !n.qualities)),
              a(i.video.element, "isVisible", !(!r.metrics && !r.qualities)),
              a(i.key, "isVisible", !(!n.qualities && !r.qualities)),
              this._updateMetrics(i.audio.metrics, n.metrics),
              this._updateQualities(i.audio.qualities, n.qualities),
              this._updateMetrics(i.video.metrics, r.metrics),
              this._updateQualities(i.video.qualities, r.qualities);
          }
        },
        _updateMetrics: function (i, n) {
          if ((a(i, "isVisible", !!n), n))
            for (
              var r = (i._metricLookup = i._metricLookup || {}), o = 0;
              o < n.length;
              o++
            ) {
              var s = n[o],
                l = r[s.title];
              l ||
                ((l = t("li")),
                (l.innerHTML =
                  '<span class="metricTitle">' +
                  s.title +
                  '</span><span class="metricValue"></span>'),
                (e(".metricTitle", l).textContent = s.title),
                i.appendChild(l),
                (l = r[s.title] = e(".metricValue", l))),
                (l.parentNode.className =
                  void 0 !== s.value && null !== s.value && "" !== s.value
                    ? "hasValue"
                    : ""),
                (l.textContent = s.value);
            }
        },
        _updateQualities: function (i, n) {
          if ((a(i, "isVisible", !!n), n))
            for (
              var r = (i._qualityRowLookup = i._qualityRowLookup || {}), o = 0;
              o < n.length;
              o++
            ) {
              var s = n[o];
              if (s) {
                var l = r[o];
                if (!l) {
                  (l = r[o] = t("div", "row")),
                    t("div", "rowHeader", s.title, l),
                    t("div", "rowFragments", null, l),
                    (l.qualityIndex = s.index);
                  for (var d = 0; d < i.childNodes.length; d++)
                    if (s.index > i.childNodes[d].qualityIndex) {
                      i.insertBefore(l, i.childNodes[d]);
                      break;
                    }
                  l.parentNode || i.appendChild(l);
                }
                this._updateFragments(e(".rowFragments", l), s.fragments);
              }
            }
        },
        _updateFragments: function (e, i) {
          if ((a(e, "isVisible", !!i), i)) {
            for (
              var n = (e._fragmentListLookup = e._fragmentListLookup || {}),
                r = {},
                o = this.dataContext.duration,
                s = 0;
              s < i.length;
              s++
            ) {
              var l = i[s],
                d = n[l.index];
              d
                ? delete n[l.index]
                : ((d = t("div", "rowRequest", null, e)),
                  (d.style.left = (100 * l.start) / o + "%"),
                  (d.style.width = (100 * l.length) / o + "%")),
                (r[l.index] = d),
                (d.className = "rowRequest " + l.state);
            }
            e._fragmentListLookup = r;
            for (var u in n) e.removeChild(n[u]);
          }
        },
        _getStats: function (e) {
          var t = {},
            a = e._streamController,
            o = e.settings.manifest;
          if (
            ((t.state = e.state),
            (t.metrics = []),
            t.metrics.push({
              title: "State",
              value: i(e.state, Dashling.SessionState),
            }),
            t.metrics.push({ title: "Last error", value: e.lastError }),
            t.metrics.push({
              title: "Load",
              value:
                (e.timeAtFirstCanPlay
                  ? e.timeAtFirstCanPlay
                  : new Date().getTime() - e.startTime) + " ms",
            }),
            o && a)
          ) {
            for (var s = [], l = 0; l < a._streams.length; l++)
              s.push(a._streams[l].fragments);
            (t.duration = o.mediaDuration),
              t.metrics.push({
                title: "Manifest",
                value:
                  e.settings.manifest &&
                  e.settings.manifest.request &&
                  e.settings.manifest.request.timeAtLastByte
                    ? e.settings.manifest.request.timeAtLastByte + " ms"
                    : "",
              }),
              t.metrics.push({ title: "Stalls", value: a._stalls || null }),
              t.metrics.push({ title: "Recovery time", value: "" }),
              t.metrics.push({ title: "Stall chance", value: "" }),
              t.metrics.push({
                title: "Buffer rate",
                value: n(e.getBufferRate(), 2, 2) + " s/s",
              }),
              t.metrics.push({
                title: "Buffer left",
                value: n(e.getRemainingBuffer(), 2, 2) + " s",
              });
            var d = a ? a.getTimeUntilUnderrun() : 0;
            t.metrics.push({
              title: "Time until stall",
              value: d < Number.MAX_VALUE ? n(d, 2, 2) + " s" : "",
            }),
              (t.streams = {});
            for (var l = 0; l < a._streams.length; l++) {
              var u = a._streams[l],
                c = { metrics: [], qualities: [] };
              t.streams[u.streamType] = c;
              var h;
              c.metrics.push({ title: "Quality", value: u.qualityIndex }),
                (h = u._requestManager.getAverageWait()),
                c.metrics.push({
                  title: "Avg wait",
                  value: h ? Math.round(h, 2) + " ms" : null,
                }),
                (h = u._requestManager.getAverageReceive()),
                c.metrics.push({
                  title: "Avg receive",
                  value: h ? Math.round(h, 2) + " ms" : null,
                }),
                (h = u._requestManager.getAverageBytesPerSecond()),
                c.metrics.push({
                  title: "Avg bandwidth",
                  value: h ? r(h) : null,
                });
              for (var m = 0; m < u.fragments.length; m++) {
                var g = u.fragments[m];
                if (g.activeRequest) {
                  var f = c.qualities[g.qualityIndex];
                  f ||
                    (f = c.qualities[g.qualityIndex] =
                      {
                        title: g.qualityId,
                        index: g.qualityIndex,
                        fragments: [],
                      });
                  var p = i(g.state, Dashling.FragmentState);
                  g.state == Dashling.FragmentState.downloading &&
                    -1 == g.activeRequest.timeAtFirstByte &&
                    (p = "waiting"),
                    f.fragments.push({
                      index: m,
                      state: p,
                      start: g.time.startSeconds,
                      length: g.time.lengthSeconds,
                    });
                }
              }
            }
          }
          return t;
        },
      });
  }),
  define(
    "navigationconstants",
    [
      "do",
      "bsi",
      "defineutilities",
      "elementeventing",
      "objecteventing",
      "lightstring",
      "pagestats",
    ],
    function () {
      wLive.Core.NavigationConstants = {
        AzureADPrompt: { None: 0, Login: 1, Consent: 2, AdminConsent: 3 },
      };
    }
  ),
  define("navigation", ["navigationconstants"], function () {
    !(function () {
      function e(e) {
        var t = "",
          i = !0;
        for (var n in e)
          i ? (i = !1) : (t += "&"),
            (t += n + "=" + (e[n] || "").encodeURIComponent());
        return t;
      }
      var t = wLive.Core,
        i = window.history,
        n = i && !!i.pushState,
        r = new RegExp("wreply=[^&]*"),
        a = new RegExp("redirect_uri=[^&]*"),
        o = new RegExp("prompt=[^&]*"),
        s = "aad_nonce";
      defineClass(
        "Shared.Navigation",
        function (e) {
          (this._pathMappings = e || {}),
            $Do.when("BeforeUnloadManager.attach", 0, bind(this, this.change)),
            this.addElementListener(window, "hashchange", this.change),
            this.addElementListener(window, "popstate", this.change),
            this._updateViewParams();
        },
        {
          __isObservable: !0,
          _shouldRebaseHashes: !0,
          _viewParams: null,
          _viewParamsString: null,
          getViewParams: function () {
            return this._viewParams;
          },
          getViewParamsString: function () {
            return this._viewParamsString;
          },
          getUrl: function () {
            return document.URL;
          },
          push: function (t) {
            var r = "string" == typeof t ? t : e(t);
            n
              ? (i.pushState({}, null, "?" + r), this.change())
              : (document.location.hash = r);
          },
          pop: function () {
            n && i.back();
          },
          replace: function (t) {
            var r = "string" == typeof t ? t : e(t);
            n
              ? (i.replaceState({}, null, "/?" + r), this.change())
              : (document.location.hash = r);
          },
          change: function () {
            this._viewParams;
            this._updateViewParams() && change(this, this._viewParams);
          },
          navigateTo: function (e, t) {
            $BSI.navigateTo(e, t);
          },
          reload: function () {
            window.location.reload();
          },
          authenticate: function () {
            var e = FilesConfig.si.replace(
              r,
              "wreply=" + this.getUrl().encodeUrl()
            );
            this.navigateTo(e, "_top");
          },
          azureADAuthenticate: function (e, i) {
            e = e ? e : this.getUrl();
            var n = FilesConfig.aadsi.replace(
                a,
                "redirect_uri=" + e.encodeUrl()
              ),
              r = $Utility.generateGuid();
            $Cookie.setCookie(s, r, $Config.sd), (n += "&nonce=" + r);
            var l = t.NavigationConstants.AzureADPrompt;
            if (i != l.None) {
              var d = "";
              switch (i) {
                case l.Login:
                  d = "login";
                  break;
                case l.Consent:
                  d = "consent";
                  break;
                case l.AdminConsent:
                  d = "admin_consent";
              }
              n.match(o)
                ? (n = n.replace(o, "prompt=" + d))
                : (n += "&prompt=" + d);
            }
            this.navigateTo(n, "_top");
          },
          _updateViewParams: function () {
            var e,
              t = "",
              i = !1,
              r = window.document.location;
            if (
              (r.hash.length > 1
                ? ((t = r.hash.substr(1)),
                  n && this._shouldRebaseHashes && (e = t))
                : r.search.length > 1 && (t = r.search.substr(1)),
              r.pathname && this._pathMappings)
            ) {
              var a = r.pathname.split("/")[1],
                o = a && this._pathMappings[a];
              if (o) {
                for (var s = [], l = 0; l < o.length; l++) s.push(o[l]);
                (t += s.join("&")), n && this._shouldRebaseHashes && (e = t);
              }
            }
            if (
              t != this._viewParamsString &&
              ((this._viewParams = {}),
              (this._viewParamsString = t || ""),
              (i = !0),
              this._viewParamsString)
            )
              for (
                var d = this._viewParamsString.split("&"), u = 0;
                u < d.length;
                u++
              ) {
                var c = d[u].split("="),
                  h = "";
                try {
                  h = decodeURIComponent(c[1]);
                } catch (m) {}
                h && (this._viewParams[c[0]] = h);
              }
            return e && this.replace(e), i;
          },
        },
        {},
        Shared.ElementEventing
      );
    })();
  }),
  define(
    "embedcontroller",
    [
      "jbase",
      "wliveloaded",
      "errormanager",
      "skydrive_pc_strip_32_ltr",
      "skydrive_pc_strip_8_ltr",
      "skydrive_sharing_strip_8_ltr",
      "header_strip_ltr",
      "setgroupfooter.html",
      "videoplayer.html",
      "dashmonitor",
      "navigation",
    ],
    function () {
      !(function () {
        function e() {
          function e() {
            for (
              var e = this.document.referrer,
                t = [
                  "live.com",
                  "live-int.com",
                  "onedrive.com",
                  "sway.com",
                  "sway-int.com",
                  "sway.net",
                  "sway-cdn.com",
                  "sway-edog.com",
                  "sharepoint.com",
                  "spoppe.com",
                  "yammer.com",
                  "outlook.com",
                  "office365.com",
                  "office.com",
                  "officeppe.com",
                  "office-int.com",
                ],
                i = !1,
                n = 0;
              n < t.length;
              n++
            )
              if ($U.doesMatchHost(e, t[n])) {
                i = !0;
                break;
              }
            return i;
          }
          function r(e) {
            var t;
            if (e.video || e.photo) {
              var n = i.SkyDriveItemHelper.getThumbnail(
                e.thumbnailSet,
                "scaled320"
              );
              t = { width: n.width, height: n.height };
            } else
              t = window.itemData.isLegacy
                ? e.folder && 1 === e.folder.category
                  ? { width: a, height: o }
                  : { width: s, height: l }
                : { width: d, height: u };
            return t;
          }
          if (t.itemData && t.itemData.items && t.itemData.items.length > 0) {
            var p = t.itemData.items[0],
              v = i.SkyDriveItem.getItemKey(p.id, p.ownerCid, p.group),
              y = i.SkyDriveItem.getItemKey(p.parentId),
              C = new i.SkyDriveItem(null, v, y);
            C.processItem(p);
            var S = jQuery("#embedItemDiv"),
              b = jQuery("#embedItemLink");
            if (f && C.video && e()) {
              var _ = new SkyDrive.UI.VideoPlayer();
              S.html(_.renderHtml()),
                S.addClass("embeddedVideoPlayer"),
                _.activate();
              var k = new Shared.Navigation();
              n.viewParams = k.getViewParams();
              var w = !(
                !n.viewParams.autoplay || "1" !== n.viewParams.autoplay
              );
              _.setDataContext({
                item: C,
                isAutoPlayEnabled: w,
                autoHideControls: !0,
              });
            } else if (
              (C.video && C.thumbnailSet) ||
              (C.photo && C.thumbnailSet) ||
              C.folder
            ) {
              var I = new wLive.Controls.NewItemTile(b, null);
              I.exposeResources({
                itemProvider: new SkyDrive.Core.BaseItemProvider(),
              });
              var x = r(C);
              S.css(x),
                I.initialize(),
                I._controlInstance.setSize(x),
                I.render(C);
            } else {
              var D = "https://p.sfx.ms/",
                T =
                  m[C.iconType] ||
                  i.SkyDriveItemHelper.getNormalizedExtension(C) ||
                  C.iconType,
                A = (
                  D +
                  "/icons/" +
                  SkyDrive.FileTypeHelper.iconVersion +
                  "/Large/{0}.png"
                ).format(T),
                P = $IS.Create(0, 1, g[T], 96, D, A, C.name, "");
              S.css({ width: c, height: h, "text-align": "center" }), b.html(P);
              var E = jQuery(_ce("span"))
                .attr({ id: "iconNameSpan" })
                .html(C.name);
              b.append(jQuery(_ce("br"))), b.append(E);
            }
          }
        }
        var t = window,
          i = wLive.Core,
          n = i.ViewContext.getInstance();
        if (!window.require || window.FilesIS8 || window.FilesIS32) {
          var r = JBase.UI.ImageStripHelper;
          r.registerStrip(FilesConfig.imageStripUrl_8, window.FilesIS8),
            r.registerStrip(FilesConfig.imageStripUrl_32, window.FilesIS32);
        } else
          $B.Mobile
            ? require([
                "skydrive_mobile_strip_8_ltr",
                "skydrive_mobile_strip_32_ltr",
              ], function () {
                var e = JBase.UI.ImageStripHelper;
                e.registerStrip(FilesConfig.imageStripUrl_8, FilesIS8),
                  e.registerStrip(FilesConfig.imageStripUrl_32, FilesIS32);
              })
            : require([
                "skydrive_pc_strip_8_ltr",
                "skydrive_pc_strip_32_ltr",
              ], function () {
                var e = JBase.UI.ImageStripHelper;
                e.registerStrip(FilesConfig.imageStripUrl_8, FilesIS8),
                  e.registerStrip(FilesConfig.imageStripUrl_32, FilesIS32);
              });
        var a = 122,
          o = 137,
          s = 98,
          l = 76,
          d = 165,
          u = 128,
          c = 98,
          h = 115,
          m = { Notebook: "One", Odp: "Odp", Ods: "Ods", Odt: "Odt" },
          g = {
            Audio: 68,
            Doc: 96,
            Default: 68,
            Exe: 96,
            Html: 68,
            Mdb: 96,
            Mpp: 96,
            Odp: 96,
            Ods: 96,
            Odt: 96,
            One: 96,
            Pdf: 96,
            Ppt: 96,
            Photo: 96,
            Pub: 96,
            Rtf: 68,
            Txt: 68,
            Video: 85,
            Vsd: 96,
            Xaml: 68,
            Xls: 96,
            Xml: 68,
            Xps: 79,
            Xsn: 96,
            Zip: 93,
          },
          f = !!FilesConfig.embeddedVideoPlayer;
        (i.EmbedController = e), new i.EmbedController();
      })();
    }
  ),
  define("Embed_s_Embed", function () {});
