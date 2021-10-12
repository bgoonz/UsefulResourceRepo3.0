/*! For license information please see officebrowserfeedback_floodgate.min.js.LICENSE.txt */
!(function (e) {
  var t = {};
  function A(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, A), (r.l = !0), r.exports;
  }
  (A.m = e),
    (A.c = t),
    (A.d = function (e, t, n) {
      A.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (A.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (A.t = function (e, t) {
      if ((1 & t && (e = A(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (A.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          A.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (A.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return A.d(t, "a", t), t;
    }),
    (A.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (A.p = ""),
    A((A.s = 49));
})([
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return n;
    }),
      A.d(t, "b", function () {
        return r;
      }),
      A.d(t, "c", function () {
        return i;
      }),
      A.d(t, "d", function () {
        return o;
      }),
      A.d(t, "e", function () {
        return a;
      }),
      A.d(t, "g", function () {
        return s;
      }),
      A.d(t, "f", function () {
        return u;
      }),
      A.d(t, "h", function () {
        return c;
      });
    var n = (function () {
        function e() {}
        return (
          (e.Alt = "alt"),
          (e.AriaLabel = "aria-label"),
          (e.AriaSelected = "aria-selected"),
          (e.AriaOrientation = "aria-orientation"),
          (e.AriaExpanded = "aria-expanded"),
          (e.AriaControls = "aria-controls"),
          (e.AriaHasPopups = "aria-haspopup"),
          (e.AriaModal = "aria-modal"),
          (e.AriaLabelledBy = "aria-labelledby"),
          (e.AriaDescribedBy = "aria-describedby"),
          (e.Class = "class"),
          (e.DataHtml2CanvasIgnore = "data-html2canvas-ignore"),
          (e.Disabled = "disabled"),
          (e.Fill = "fill"),
          (e.For = "for"),
          (e.Preview = "preview"),
          (e.Form = "form"),
          (e.Height = "height"),
          (e.HRef = "href"),
          (e.Id = "id"),
          (e.MaxLength = "maxlength"),
          (e.Name = "name"),
          (e.Placeholder = "placeholder"),
          (e.Points = "points"),
          (e.Rel = "rel"),
          (e.Role = "role"),
          (e.Source = "src"),
          (e.Stroke = "stroke"),
          (e.TabIndex = "tabindex"),
          (e.Target = "target"),
          (e.Transform = "transform"),
          (e.Type = "type"),
          (e.Value = "value"),
          (e.ViewBox = "viewBox"),
          (e.Width = "width"),
          (e.xlinkHref = "xlink:href"),
          (e.X = "x"),
          (e.Y = "y"),
          e
        );
      })(),
      r = (function () {
        function e() {}
        return (
          (e.BlankWindow = "_blank"),
          (e.Button = "button"),
          (e.Dialog = "dialog"),
          (e.Tab = "tab"),
          (e.TabList = "tablist"),
          (e.TabPanel = "tabpanel"),
          (e.Checkbox = "checkbox"),
          (e.Checked = "checked"),
          (e.False = "false"),
          (e.Zero = "0"),
          (e.Polite = "polite"),
          (e.Radio = "radio"),
          (e.Submit = "submit"),
          (e.ScreenshotPreview = "ScreenshotPreview"),
          (e.Text = "text"),
          (e.TextAreaMaxLength = "1000"),
          (e.True = "true"),
          (e.Unchecked = "unchecked"),
          (e.NoReferrer = "noreferrer"),
          (e.AriaOrientationValueVertical = "vertical"),
          e
        );
      })(),
      i =
        ((function () {
          function e() {}
          e.CLCID = "CLCID";
        })(),
        (function () {
          function e() {}
          return (
            (e.AriaLiveTemplate = "obf-AriaLiveTemplate"),
            (e.CheckBox = "obf-CheckBox"),
            (e.FontTitle = "obf-FontTitle"),
            (e.CloseButton = "obf-CloseButton"),
            (e.FontSubtitle = "obf-FontSubtitle"),
            (e.FontText = "obf-FontText"),
            (e.FontSubText = "obf-FontSubText"),
            (e.FontSubSubText = "obf-FontSubSubText"),
            (e.Hidden = "obf-Hidden"),
            (e.Link = "obf-Link"),
            (e.MarginLeft60px = "obf-MarginLeft60px"),
            (e.MarginLeft180px = "obf-MarginLeft180px"),
            (e.NarrowLayout = "obf-NarrowLayout"),
            (e.PrivacyStatementLinkDiv = "obf-PrivacyStatementLinkDiv"),
            (e.Rtl = "obf-Rtl"),
            (e.Spinner = "obf-Spinner"),
            (e.SpinnerCircle = "obf-SpinnerCircle"),
            (e.SubmitButton = "obf-SubmitButton"),
            (e.CancelButton = "obf-CancelButton"),
            (e.TextInput = "obf-TextInput"),
            (e.Visible = "obf-Visible"),
            (e.Rating = "obf-Rating"),
            (e.RatingGraphic = "obf-RatingGraphic"),
            (e.RatingGraphicFilled = "obf-RatingGraphic-Filled"),
            (e.ChoiceGroup = "obf-ChoiceGroup"),
            (e.ChoiceGroupIcon = "obf-ChoiceGroupIcon"),
            (e.OverallAnchor = "obf-OverallAnchor"),
            (e.OverallAnchorActive = "obf-OverallAnchorActive"),
            (e.OverallImage = "obf-OverallImage"),
            (e.OverallText = "obf-OverallText"),
            (e.SingleLayout = "obf-SingleLayout"),
            (e.ShowRightBorder = "obf-ShowRightBorder"),
            (e.SlideLeft = "obf-slideLeft"),
            (e.TextAlignLeft = "obf-TextAlignLeft"),
            (e.FormContainer = "obf-FormContainer"),
            (e.FormWideContainer = "obf-FormWideContainer"),
            (e.ThanksPanelTitle = "obf-ThanksPanelTitle"),
            (e.ThanksPanelMessage = "obf-ThanksPanelMessage"),
            (e.FormQuestionMiddleText = "obf-FormQuestionMiddleText"),
            (e.FormMiddleText = "obf-FormMiddleText"),
            (e.FormCategoriesDropdown = "obf-FormCategoriesDropdown"),
            (e.FormComment = "obf-FormComment"),
            (e.FormRatingContainer = "obf-FormRatingContainer"),
            (e.FormRatingLabel = "obf-FormRatingLabel"),
            (e.FormRating = "obf-FormRating"),
            (e.FormEmailContainer = "obf-FormEmailContainer"),
            (e.FormEmailInput = "obf-FormEmailInput"),
            (e.FormEmailTextBox = "obf-FormEmailTextBox"),
            (e.FormEmailCheckBox = "obf-FormEmailCheckBox"),
            (e.FormEmailLabel = "obf-FormEmailLabel"),
            (e.FormBottomContainer = "obf-FormBottomContainer"),
            (e.FormSubmitButtonContainer = "obf-FormSubmitButtonContainer"),
            (e.FormScreenshotContainer = "obf-FormScreenshotContainer"),
            (e.FormScreenshotLabel = "obf-FormScreenshotLabel"),
            (e.FormScreenshotCheckbox = "obf-FormScreenshotCheckbox"),
            (e.FormScreenshotPreview = "obf-FormScreenshotPreview"),
            (e.TFormEmailCheckbox = "obf-TFormEmailCheckbox"),
            (e.TFormEmailLabel = "obf-TFormEmailLabel "),
            (e.EmailCheckBoxLabel = "obf-EmailCheckBoxLabel"),
            (e.Toast = "obf-Toast"),
            (e.ToastZoom = "obf-ToastZoom"),
            e
          );
        })()),
      o = (function () {
        function e() {}
        return (
          (e.CloseButton = "obf-CloseButton"),
          (e.ColumnSeparatorDiv = "obf-ColumnSeparatorDiv"),
          (e.OverallAnchorsContainer = "obf-OverallAnchorsContainer"),
          (e.OverallFrownAnchor = "obf-OverallFrownAnchor"),
          (e.OverallFrownDiv = "obf-OverallFrownDiv"),
          (e.OverallFrownImage = "obf-OverallFrownImage"),
          (e.OverallFrownText = "obf-OverallFrownText"),
          (e.OverallSmileAnchor = "obf-OverallSmileAnchor"),
          (e.OverallSmileDiv = "obf-OverallSmileDiv"),
          (e.OverallSmileImage = "obf-OverallSmileImage"),
          (e.OverallSmileText = "obf-OverallSmileText"),
          (e.OverallIdeaAnchor = "obf-OverallIdeaAnchor"),
          (e.OverallIdeaDiv = "obf-OverallIdeaDiv"),
          (e.OverallIdeaImage = "obf-OverallIdeaImage"),
          (e.OverallIdeaText = "obf-OverallIdeaText"),
          (e.OverallBugAnchor = "obf-OverallBugAnchor"),
          (e.OverallBugDiv = "obf-OverallBugDiv"),
          (e.OverallBugImage = "obf-OverallBugImage"),
          (e.OverallBugText = "obf-OverallBugText"),
          (e.QuestionLeftText = "obf-QuestionLeftText"),
          (e.LeftFormContainer = "obf-LeftFormContainer"),
          (e.LeftPanelContainer = "obf-LeftPanelContainer"),
          (e.MainContainer = "obf-MainContainer"),
          (e.MainContentHolder = "obf-MainContentHolder"),
          (e.MiddleFormContainer = "obf-MiddleFormContainer"),
          (e.OverlayBackground = "obf-OverlayBackground"),
          (e.PrivacyStatementLink = "obf-PrivacyStatementLink"),
          (e.FirstTabbable = "obf-FirstTabbable"),
          (e.LastTabbable = "obf-LastTabbable"),
          (e.EmailCheckBox = "obf-EmailCheckBox"),
          (e.SingleFormContainer = "obf-SingleFormContainer"),
          (e.SingleFormQuestionMiddleText = "obf-SingleFormQuestionMiddleText"),
          (e.SingleFormCategoriesDropdown = "obf-SingleFormCategoriesDropdown"),
          (e.SingleFormComment = "obf-SingleFormComment"),
          (e.SingleFormEmailInput = "obf-SingleFormEmailInput"),
          (e.SingleFormRating = "obf-SingleFormRating"),
          (e.SingleFormScreenshotCheckbox = "obf-SingleFormScreenshotCheckbox"),
          (e.SingleFormScreenshotPreview = "obf-SingleFormScreenshotPreview"),
          (e.SingleFormSubmitButton = "obf-SingleFormSubmitButton"),
          (e.SingleFormCancelButton = "obf-SingleFormCancelButton"),
          (e.SingleFormSubmitButtonSpinner =
            "obf-SingleFormSubmitButtonSpinner"),
          (e.BasicFormContainer = "obf-BasicFormContainer"),
          (e.BasicFormQuestionMiddleText = "obf-BasicFormQuestionMiddleText"),
          (e.BasicFormCategoriesDropdown = "obf-BasicFormCategoriesDropdown"),
          (e.BasicFormComment = "obf-BasicFormComment"),
          (e.BasicFormEmailInput = "obf-BasicFormEmailInput"),
          (e.BasicFormRating = "obf-BasicFormRating"),
          (e.BasicFormScreenshotCheckbox = "obf-BasicFormScreenshotCheckbox"),
          (e.BasicFormScreenshotPreview = "obf-BasicFormScreenshotPreview"),
          (e.BasicFormSubmitButton = "obf-BasicFormSubmitButton"),
          (e.BasicFormCancelButton = "obf-BasicFormCancelButton"),
          (e.BasicFormSubmitButtonSpinner = "obf-BasicFormSubmitButtonSpinner"),
          (e.ThanksPanelContainer = "obf-ThanksPanelContainer"),
          (e.ThanksPanelCloseButton = "obf-ThanksPanelCloseButton"),
          (e.ThanksPanelDiscussion = "obf-ThanksPanelDiscussion"),
          (e.ThanksPanelVerticalContainer = "obf-ThanksPanelVerticalContainer"),
          (e.ThanksPanelInnerContainer = "obf-ThanksPanelInnerContainer"),
          (e.UserVoiceFormContainer = "obf-UserVoiceFormContainer"),
          (e.UserVoiceFormGoButton = "obf-UserVoiceFormGoButton"),
          (e.ToastContainer = "obf-ToastContainer"),
          (e.ToastCancel = "obf-ToastCancel"),
          (e.TPromptContainer = "obf-TPromptContainer"),
          (e.TPromptTitle = "obf-TPromptTitle"),
          (e.TPromptText = "obf-TPromptText"),
          (e.TFormContainer = "obf-TFormContainer"),
          (e.TFormTitle = "obf-TFormTitle"),
          (e.TFormRating = "obf-TFormRating"),
          (e.TFormRatingQuestion = "obf-TFormRatingQuestion"),
          (e.TFormComment = "obf-TFormComment"),
          (e.TFormEmailTextBox = "obf-TFormEmailTextBox"),
          (e.TFormEmailCheckBox = "obf-TFormEmailCheckBox"),
          (e.TFormEmailLabel = "obf-TFormEmailLabel"),
          (e.TFormSubmitButton = "obf-TFormSubmitButton"),
          (e.TFormSubmitButtonSpinner = "obf-TFormSubmitButtonSpinner"),
          (e.TFormSubmitButtonContainer = "obf-TFormSubmitButtonContainer"),
          e
        );
      })(),
      a = (function () {
        function e() {}
        return (e.Esc = 27), (e.Tab = 9), e;
      })(),
      s = (function () {
        function e() {}
        return (
          (e.Anchor = "A"),
          (e.Button = "button"),
          (e.Defs = "defs"),
          (e.Div = "div"),
          (e.FieldSet = "fieldset"),
          (e.Form = "form"),
          (e.Img = "img"),
          (e.Input = "input"),
          (e.Label = "label"),
          (e.Legend = "legend"),
          (e.Option = "option"),
          (e.Polygon = "polygon"),
          (e.Select = "select"),
          (e.Span = "span"),
          (e.Svg = "svg"),
          (e.TextArea = "textarea"),
          (e.Use = "use"),
          e
        );
      })(),
      u = (function () {
        function e() {}
        return (e.Button = "Button"), e;
      })(),
      c = (function () {
        function e() {}
        return (
          (e.PrivacyStatementLink =
            "https://go.microsoft.com/fwlink/?LinkId=521839"),
          e
        );
      })();
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "get", function () {
      return a;
    }),
      A.d(t, "validateFeedbackType", function () {
        return s;
      });
    var n = A(5),
      r = A(7),
      i = A(47),
      o =
        (A(44),
        A(45),
        new ((function () {
          function e() {}
          return (
            (e.validateCategoryOptions = function (e) {
              if (!e) return { show: !1 };
              if ((n.c(e.show, "categories.show"), e.customCategories)) {
                n.b(e.customCategories, "categories.customCategories");
                for (var t = 0, A = e.customCategories; t < A.length; t++) {
                  var r = A[t];
                  if ((n.f(r, "custom category '" + r + "'"), r.length > 20))
                    throw (
                      "custom category '" + r + "' too long, max 20 characters."
                    );
                }
              }
              return e;
            }),
            (e.prototype.getCommonInitOptions = function () {
              return this.commonInitOptions;
            }),
            (e.prototype.getInAppFeedbackInitOptions = function () {
              return this.inAppFeedbackInitOptions;
            }),
            (e.prototype.getInAppFeedbackLaunchOptions = function () {
              return this.inAppFeedbackLaunchOptions;
            }),
            (e.prototype.getFloodgateInitOptions = function () {
              return this.floodgateInitOptions;
            }),
            (e.prototype.getFloodgateSurvey = function () {
              return this.floodgateSurvey;
            }),
            (e.prototype.getSdkSessionId = function () {
              return (
                this.sdkSessionId || (this.sdkSessionId = n.g()),
                this.sdkSessionId
              );
            }),
            (e.prototype.getEventSampling = function () {
              return this.eventSampling;
            }),
            (e.prototype.setCommonInitOptions = function (e) {
              n.e(e, "passedInitOptions");
              var t = {
                appId: e.appId,
                applicationGroup: e.applicationGroup || {},
                build: e.build,
                cid: e.cid,
                environment: e.environment,
                intlFilename: e.intlFilename,
                intlUrl: e.intlUrl,
                webSurfacesResourceBaseUrl: e.webSurfacesResourceBaseUrl,
                locale: e.locale,
                onError: e.onError,
                originalLocale: e.locale,
                primaryColour: e.primaryColour,
                secondaryColour: e.secondaryColour,
                sessionId: e.sessionId,
                stylesUrl: e.stylesUrl,
                telemetryGroup: e.telemetryGroup || {},
                userEmail: e.userEmail,
                userEmailConsentDefault: e.userEmailConsentDefault,
                webGroup: e.webGroup || {},
                eventSampling: e.eventSampling,
                petrolTimeout: e.petrolTimeout,
                isCommercialHost: e.isCommercialHost,
              };
              if (
                (n.d(t.appId, "initOptions.appId"),
                !(t.appId % 1 == 0 && t.appId > 0))
              )
                throw "initOptions.appId is not a positive integer: " + t.appId;
              if (
                (n.f(t.stylesUrl, "initOptions.stylesUrl"),
                n.f(t.intlUrl, "initOptions.intlUrl"),
                void 0 !== t.intlFilename
                  ? n.f(t.intlFilename, "initOptions.intlFilename")
                  : (t.intlFilename = "officebrowserfeedbackstrings.js"),
                n.d(t.environment, "initOptions.environment"),
                1 !== t.environment && 0 !== t.environment)
              )
                throw (
                  "initOptions.environment has a bad value: " + t.environment
                );
              if (
                (void 0 !== t.userEmail &&
                  n.f(t.userEmail, "initOptions.userEmail"),
                void 0 !== t.userEmailConsentDefault &&
                  n.c(
                    t.userEmailConsentDefault,
                    "initOptions.userEmailConsentDefault"
                  ),
                void 0 !== t.sessionId
                  ? n.f(t.sessionId, "initOptions.sessionId")
                  : (t.sessionId = "00000000-0000-0000-0000-000000000000"),
                (t.telemetryGroup.processSessionId = t.sessionId),
                void 0 !== t.cid &&
                  (n.f(t.cid, "initOptions.cid"),
                  (t.applicationGroup.extendedManifestData = JSON.stringify({
                    cid: t.cid,
                  }))),
                void 0 !== t.build)
              ) {
                n.f(t.build, "initOptions.build");
                new RegExp(
                  "^[0-9]{1,9}(\\.[0-9]{1,9})?(\\.[0-9]{1,9})?(\\.[0-9]{1,9})?$"
                ).test(t.build) || (t.build = "0.0.0.0");
              } else t.build = "0.0.0.0";
              t.telemetryGroup.officeBuild = t.build;
              var A = new RegExp("^#[0-9a-f]{3}([0-9a-f]{3})?$", "i");
              void 0 !== t.primaryColour &&
                (A.test(t.primaryColour) || (t.primaryColour = void 0)),
                void 0 !== t.secondaryColour &&
                  (A.test(t.secondaryColour) || (t.secondaryColour = void 0)),
                void 0 !== t.locale
                  ? (n.f(t.locale, "initOptions.locale"),
                    (t.locale = i.a(t.locale)))
                  : (t.locale = "en"),
                void 0 === t.onError && (t.onError = function (e) {}),
                void 0 !== t.petrolTimeout &&
                  n.d(t.petrolTimeout, "initOptions.petrolTimeout"),
                (this.eventSampling = this.parseEventSamplingOption(
                  t.eventSampling
                )),
                (this.commonInitOptions = t),
                void 0 === t.isCommercialHost || null == t.isCommercialHost
                  ? (t.isCommercialHost = !1)
                  : n.c(t.isCommercialHost, "initOptions.isCommercialHost");
            }),
            (e.prototype.setInAppFeedbackInitOptions = function (e) {
              n.e(e, "passedInitOptions");
              var t = {
                bugForm: e.bugForm,
                onDismiss: e.onDismiss,
                screenshot: e.screenshot,
                showEmailAddress: e.showEmailAddress,
                userEmail: e.userEmail,
                userVoice:
                  void 0 !== e.userVoice ? { url: e.userVoice.url } : void 0,
                transitionEnabled: e.transitionEnabled,
                isShowThanks: e.isShowThanks,
              };
              void 0 === t.onDismiss && (t.onDismiss = function (e) {}),
                void 0 !== t.bugForm
                  ? n.c(t.bugForm, "initOptions.bugForm")
                  : (t.bugForm = !1),
                void 0 !== t.userEmail &&
                  n.f(t.userEmail, "initOptions.userEmail"),
                void 0 !== t.screenshot
                  ? n.c(t.screenshot, "initOptions.screenshot")
                  : (t.screenshot = !0),
                void 0 !== t.showEmailAddress
                  ? n.c(t.showEmailAddress, "initOptions.showEmailAddress")
                  : (t.showEmailAddress = !0),
                void 0 !== t.userVoice &&
                  (n.e(t.userVoice, "initOptions.userVoice"),
                  n.f(t.userVoice.url, "initOptions.userVoice.url")),
                void 0 !== t.isShowThanks
                  ? n.c(t.isShowThanks, "initOptions.isShowThanks")
                  : (t.isShowThanks = !1),
                void 0 === t.transitionEnabled && (t.transitionEnabled = !0),
                (this.inAppFeedbackInitOptions = t);
            }),
            (e.prototype.setInAppFeedbackLaunchOptions = function (t) {
              if (!this.commonInitOptions) throw "commonInitOptions not set";
              t || (t = {}),
                (this.commonInitOptions.applicationGroup = n.k(
                  t.applicationGroup,
                  this.commonInitOptions.applicationGroup
                )),
                (this.commonInitOptions.telemetryGroup = n.k(
                  t.telemetryGroup,
                  this.commonInitOptions.telemetryGroup
                )),
                (this.commonInitOptions.webGroup = n.k(
                  t.webGroup,
                  this.commonInitOptions.webGroup
                )),
                (t.categories = e.validateCategoryOptions(t.categories)),
                (this.inAppFeedbackLaunchOptions = t);
            }),
            (e.prototype.setFloodgateInitOptions = function (e) {
              n.e(e, "passedInitOptions");
              var t = {
                autoDismiss: e.autoDismiss,
                campaignDefinitions: e.campaignDefinitions,
                campaignFlights: e.campaignFlights,
                campaignQueryParameters: e.campaignQueryParameters,
                onDismiss: e.onDismiss,
                onSurveyActivatedCallback: e.onSurveyActivatedCallback,
                settingStorageCallback: e.settingStorageCallback,
                uIStringGetter: e.uIStringGetter,
                authTokenCallback: e.authTokenCallback,
                surveyEnabled: e.surveyEnabled,
                showEmailAddress: e.showEmailAddress,
                augLoopCallback: e.augLoopCallback,
              };
              if (
                (void 0 === t.autoDismiss && (t.autoDismiss = 0),
                void 0 === t.onDismiss && (t.onDismiss = function (e, t) {}),
                void 0 === t.onSurveyActivatedCallback)
              ) {
                t.onSurveyActivatedCallback = {
                  onSurveyActivated: function (e) {
                    e.launch();
                  },
                };
              }
              void 0 === t.uIStringGetter &&
                (t.uIStringGetter = function (e) {
                  return e;
                }),
                void 0 === t.surveyEnabled
                  ? (t.surveyEnabled = !0)
                  : n.c(t.surveyEnabled, "surveyEnabled"),
                void 0 !== t.showEmailAddress
                  ? n.c(
                      t.showEmailAddress,
                      "initOptionsFloodgate.showEmailAddress"
                    )
                  : (t.showEmailAddress = !0),
                (this.floodgateInitOptions = t);
            }),
            (e.prototype.setFloodgateSurvey = function (e) {
              this.floodgateSurvey = e;
            }),
            (e.prototype.checkIfSurveysEnabled = function () {
              return (
                !this.floodgateInitOptions ||
                this.floodgateInitOptions.surveyEnabled
              );
            }),
            (e.prototype.parseEventSamplingOption = function (e) {
              var t = { event: {} };
              if (void 0 !== e)
                for (var A in e)
                  if (e.hasOwnProperty(A))
                    switch (e[A].type) {
                      case "Event":
                        var r = e[A].sampleRate;
                        if (
                          (n.d(r, "initOption.EventSampling.SampleRate"),
                          n.f(e[A].name, "initOption.EventSampling.Name"),
                          r < 0 || r > 1)
                        )
                          throw (
                            "initOption.EventSampling." +
                            e[A].name +
                            ".SampleRate is out of range"
                          );
                        t.event[e[A].name] = r;
                        break;
                      default:
                        throw "initOption.EventSampling.Type value is not recognized";
                    }
              return t;
            }),
            e
          );
        })())());
    function a() {
      return o;
    }
    function s(e) {
      if ((n.f(e, "feedbackType"), e === r.b[r.b.Smile])) return r.b.Smile;
      if (e === r.b[r.b.Frown]) return r.b.Frown;
      if (e === r.b[r.b.Bug]) return r.b.Bug;
      throw "feedbackType should be one of Smile, Frown or Bug";
    }
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return C;
    }),
      A.d(t, "c", function () {
        return F;
      }),
      A.d(t, "b", function () {
        return U;
      });
    var n = (function () {
        function e(e, t) {
          if (!e) throw new Error("name must not be null");
          if (!t) throw new Error("version must not be null");
          (this.name = e), (this.version = t);
        }
        return (
          (e.prototype.getName = function () {
            return this.name;
          }),
          (e.prototype.getPlatform = function () {
            return e.PLATFORM;
          }),
          (e.prototype.getVersion = function () {
            return this.version;
          }),
          (e.PLATFORM = "Web"),
          e
        );
      })(),
      r = (function () {
        function e(e) {
          if (!e) throw new Error("id must not be null");
          this.id = e;
        }
        return (
          (e.prototype.getId = function () {
            return this.id;
          }),
          e
        );
      })(),
      i = (function () {
        function e(e, t, A, n) {
          (this.id = e),
            (this.locale = t),
            (this.sessionId = A),
            (this.version = n);
        }
        return (
          (e.prototype.getId = function () {
            return this.id;
          }),
          (e.prototype.getLocale = function () {
            return this.locale;
          }),
          (e.prototype.getSessionId = function () {
            return this.sessionId;
          }),
          (e.prototype.getVersion = function () {
            return this.version;
          }),
          e
        );
      })(),
      o = (function () {
        function e(t, A, n, r) {
          if (!t) throw new Error("name must not be null");
          if (!A) throw new Error("sessionId must not be null");
          if ((!n && 0 !== n) || n < 0)
            throw new Error("sequence must not be negative");
          (this.name = t),
            (this.id = A + e.ID_DELIMITER + n),
            (this.sequence = n),
            (this.sampleRate = r);
        }
        return (
          (e.prototype.getName = function () {
            return this.name;
          }),
          (e.prototype.getId = function () {
            return this.id;
          }),
          (e.prototype.getSource = function () {
            return e.SOURCE;
          }),
          (e.prototype.getSchemaVersion = function () {
            return e.SCHEMA_VERSION;
          }),
          (e.prototype.getSequence = function () {
            return this.sequence;
          }),
          (e.prototype.getSampleRate = function () {
            return this.sampleRate;
          }),
          (e.ID_DELIMITER = "."),
          (e.SOURCE = "MsoThin"),
          (e.SCHEMA_VERSION = 1),
          e
        );
      })(),
      a = (function () {
        function e(e) {
          this.audienceGroup = e;
        }
        return (
          (e.prototype.getAudienceGroup = function () {
            return this.audienceGroup;
          }),
          e
        );
      })(),
      s = (function () {
        function e(e, t) {
          (this.name = e), (this.version = t);
        }
        return (
          (e.prototype.getName = function () {
            return this.name;
          }),
          (e.prototype.getVersion = function () {
            return this.version;
          }),
          e
        );
      })(),
      u = (function () {
        function e(e) {
          this.id = e;
        }
        return (
          (e.prototype.getId = function () {
            return this.id;
          }),
          e
        );
      })(),
      c = (function () {
        function e(e, t) {
          (this.tenantId = t),
            (this.primaryIdentityHash = e ? e.trim() : e),
            (this.primaryIdentitySpace = this.generatePrimaryIdentitySpace());
        }
        return (
          (e.prototype.getTenantId = function () {
            return this.tenantId;
          }),
          (e.prototype.getPrimaryIdentityHash = function () {
            return this.primaryIdentityHash;
          }),
          (e.prototype.getPrimaryIdentitySpace = function () {
            return this.primaryIdentitySpace;
          }),
          (e.prototype.generatePrimaryIdentitySpace = function () {
            if (this.primaryIdentityHash) {
              if (this.primaryIdentityHash.startsWith("a:"))
                return "UserObjectId";
              if (this.primaryIdentityHash.startsWith("p:")) return "MsaPuid";
              if (this.primaryIdentityHash.startsWith("ap:"))
                return "OrgIdPuid";
            }
          }),
          e
        );
      })(),
      l = A(5),
      d = A(73);
    function g() {
      return d.AWT;
    }
    var p,
      h,
      f = (function () {
        function e(e, t, A, n, r, i, o, a, s) {
          if (!e) throw new Error("tenantToken must not be null");
          if (!t) throw new Error("namespace must not be null");
          if (!A) throw new Error("app must not be null");
          if (!n) throw new Error("session must not be null");
          g().initialize(e),
            (this.namespace = t),
            (this.oesApp = A),
            (this.oesSession = n),
            (this.oesHost = r),
            (this.oesRelease = i),
            (this.oesBrowser = o),
            (this.oesDevice = a),
            (this.oesUser = s),
            (this.sequence = 1);
        }
        return (
          (e.setApp = function (e, t) {
            (e["App.Name"] = t.getName()),
              (e["App.Platform"] = t.getPlatform()),
              (e["App.Version"] = t.getVersion());
          }),
          (e.setSession = function (e, t) {
            e["Session.Id"] = t.getId();
          }),
          (e.setHost = function (e, t) {
            t &&
              ((e["Host.Id"] = t.getId()),
              (e["Host.SessionId2"] = t.getSessionId()),
              (e["Host.Version"] = t.getVersion()),
              (e["Host.Locale"] = t.getLocale()));
          }),
          (e.setEvent = function (e, t) {
            (e["Event.Name"] = t.getName()),
              (e["Event.Id"] = t.getId()),
              (e["Event.Source"] = t.getSource()),
              (e["Event.SchemaVersion"] = t.getSchemaVersion()),
              (e["Event.Sequence"] = t.getSequence()),
              (e["Event.SampleRate"] = t.getSampleRate());
          }),
          (e.setRelease = function (e, t) {
            t && (e["Release.AudienceGroup"] = t.getAudienceGroup());
          }),
          (e.setBrowser = function (e, t) {
            t &&
              ((e["Browser.Name"] = t.getName()),
              (e["Browser.Version"] = t.getVersion()));
          }),
          (e.setDevice = function (e, t) {
            t && (e["Device.Id"] = t.getId());
          }),
          (e.setUser = function (e, t) {
            t &&
              ((e["User.PrimaryIdentityHash"] = t.getPrimaryIdentityHash()),
              (e["User.PrimaryIdentitySpace"] = t.getPrimaryIdentitySpace()),
              (e["User.TenantId"] = t.getTenantId()));
          }),
          (e.prototype.logEvent = function (t, A, n) {
            if ((void 0 === n && (n = 1), !t))
              throw new Error("eventName must not be null");
            var r = new o(
                this.namespace + e.EVENT_NAME_DELIMITER + t,
                this.oesSession.getId(),
                this.sequence,
                n
              ),
              i = {};
            if (null != A)
              for (var a in A)
                A.hasOwnProperty(a) &&
                  (i[e.CUSTOM_PROPERTIES_FIELD_PREFIX + a] = A[a]);
            e.setApp(i, this.oesApp),
              e.setSession(i, this.oesSession),
              e.setHost(i, this.oesHost),
              e.setRelease(i, this.oesRelease),
              e.setEvent(i, r),
              e.setBrowser(i, this.oesBrowser),
              e.setDevice(i, this.oesDevice),
              e.setUser(i, this.oesUser),
              g().logEvent({ name: r.getName(), properties: i }),
              this.sequence++;
          }),
          (e.EVENT_NAME_DELIMITER = "_"),
          (e.CUSTOM_PROPERTIES_FIELD_PREFIX = "Data."),
          e
        );
      })(),
      B = (function () {
        function e() {}
        return (
          (e.create = function (e, t, A, n, r, i, o, a, s) {
            return new f(e, t, A, n, r, i, o, a, s);
          }),
          e
        );
      })(),
      m = A(14),
      v = A(13),
      C = (function () {
        function e() {}
        var t,
          A,
          n,
          r,
          i,
          o,
          a,
          s,
          u,
          c,
          l,
          d,
          g,
          p,
          h,
          f,
          B,
          m,
          v,
          C,
          w,
          y,
          E,
          F,
          U,
          S,
          Q,
          T,
          b,
          I,
          N,
          H,
          _,
          O,
          D,
          L,
          R,
          M;
        return (
          (e.InApp =
            (((t = function () {}).UI =
              (((A = function () {}).Picker =
                (((n = function () {}).Shown =
                  (((r = function () {}).VALUE = {
                    name: "InApp_UI_Picker_Shown",
                  }),
                  r)),
                n)),
              (A.Form =
                (((i = function () {}).Shown =
                  (((o = function () {}).VALUE = {
                    name: "InApp_UI_Form_Shown",
                  }),
                  o)),
                (i.Submit =
                  (((a = function () {}).VALUE = {
                    name: "InApp_UI_Form_Submit",
                  }),
                  a)),
                i)),
              A)),
            t)),
          (e.SURVEY_FLOODGATE_CAMPAIGNLOAD_FAILED = {
            name: "Survey_Floodgate_CampaignLoad_Failed",
          }),
          (e.SURVEY_FLOODGATE_FILEREAD_FAILED = {
            name: "Survey_Floodgate_FileRead_Failed",
          }),
          (e.SURVEY_FLOODGATE_FILEWRITE_FAILED = {
            name: "Survey_Floodgate_FileWrite_Failed",
          }),
          (e.SURVEY_FLOODGATE_TRIGGERMET = {
            name: "Survey_Floodgate_TriggerMet",
          }),
          (e.SURVEY_FLOODGATE_USERSELECTED = {
            name: "Survey_Floodgate_UserSelected",
          }),
          (e.SURVEY_UI_FORM_SHOWN = { name: "Survey_UI_Form_Shown" }),
          (e.SURVEY_UI_FORM_SUBMIT = { name: "Survey_UI_Form_Submit" }),
          (e.SURVEY_UI_FORM_USERCLOSED = { name: "Survey_UI_Form_UserClosed" }),
          (e.SURVEY_UI_PROMPT_AUTODISMISSED = {
            name: "Survey_UI_Prompt_AutoDismissed",
          }),
          (e.SURVEY_UI_PROMPT_SHOWN = { name: "Survey_UI_Prompt_Shown" }),
          (e.SURVEY_UI_PROMPT_USERCLOSED = {
            name: "Survey_UI_Prompt_UserClosed",
          }),
          (e.SURVEY_UI_PROMPT_CLICKED = { name: "Survey_UI_Prompt_Clicked" }),
          (e.SURVEY_UI_REDIRECTIONFAILURE = {
            name: "Survey_UI_RedirectionFailure",
          }),
          (e.Shared =
            (((s = function () {}).Upload =
              (((u = function () {}).Failed =
                (((c = function () {}).VALUE = {
                  name: "Shared_Upload_Failed",
                }),
                c)),
              u)),
            (s.Screenshot =
              (((l = function () {}).Render =
                (((d = function () {}).Failed =
                  (((g = function () {}).VALUE = {
                    name: "Shared_Screenshot_Render_Failed",
                  }),
                  g)),
                (d.Success =
                  (((p = function () {}).VALUE = {
                    name: "Shared_Screenshot_Render_Success",
                  }),
                  p)),
                d)),
              (l.GetContent =
                (((h = function () {}).Failed =
                  (((f = function () {}).DefaultImage =
                    (((B = function () {}).Returned =
                      (((m = function () {}).VALUE = {
                        name: "Shared_Screenshot_GetContent_Failed_DefaultImage_Returned",
                      }),
                      m)),
                    B)),
                  f)),
                h)),
              l)),
            s)),
          (e.WebSurfaces =
            (((v = function () {}).Common =
              (((C = function () {}).Error =
                (((w = function () {}).VALUE = {
                  name: "WebSurfaces_Common_Error",
                }),
                w)),
              (C.Info =
                (((y = function () {}).VALUE = {
                  name: "WebSurfaces_Common_Info",
                }),
                y)),
              C)),
            (v.Messaging =
              (((E = function () {}).Requests =
                (((F = function () {}).VALUE = {
                  name: "WebSurfaces_Messaging_Requests",
                }),
                F)),
              E)),
            v)),
          (e.UserFacts =
            (((U = function () {}).Common =
              (((S = function () {}).Error =
                (((Q = function () {}).VALUE = {
                  name: "UserFacts_Common_Error",
                }),
                Q)),
              (S.Info =
                (((T = function () {}).VALUE = {
                  name: "UserFacts_Common_Info",
                }),
                T)),
              S)),
            (U.Messaging =
              (((b = function () {}).Requests =
                (((I = function () {}).VALUE = {
                  name: "UserFacts_Messaging_Requests",
                }),
                I)),
              b)),
            (U.AugLoop =
              (((N = function () {}).Requests =
                (((H = function () {}).VALUE = {
                  name: "UserFacts_AugLoop_Requests",
                }),
                H)),
              (N.Error =
                (((_ = function () {}).VALUE = {
                  name: "UserFacts_AugLoop_Error",
                }),
                _)),
              N)),
            (U.Provider =
              (((O = function () {}).Info =
                (((D = function () {}).VALUE = {
                  name: "UserFacts_Provider_Summary",
                }),
                D)),
              O)),
            U)),
          (e.Common =
            (((L = function () {}).Error =
              (((R = function () {}).VALUE = { name: "Common_Error" }), R)),
            (L.Info =
              (((M = function () {}).VALUE = { name: "Common_Info" }), M)),
            L)),
          e
        );
      })(),
      w = A(9),
      y = A(1),
      E = l.j;
    function F(e, t, A, o, l) {
      var d = e.telemetryGroup ? e.telemetryGroup : {},
        g = e.webGroup ? e.webGroup : {};
      (p = new S(
        B.create(
          Q.getTenantToken(e.environment),
          "Office_Feedback",
          new n(t, A),
          new r(o),
          new i(e.appId.toString(), e.originalLocale, e.sessionId, e.build),
          new a(d.audienceGroup),
          new s(g.browser, g.browserVersion),
          new u(d.deviceId),
          new c(d.loggableUserId ? d.loggableUserId : e.cid, d.tenantId)
        ),
        l
      )),
        (h = e.environment);
    }
    function U() {
      return p;
    }
    var S = (function () {
        function e(e, t) {
          if (((this.SAMPLING_RESULT = Math.random()), !e))
            throw new Error("telemetryLogger must not be null");
          (this.telemetryLogger = e), (this.eventSampling = t);
        }
        return (
          (e.prototype.logEvent = function (t, A, n) {
            if (!t) throw new Error("eventId must not be null");
            var r = this.getEventSamplingRate(t.name);
            if (E(A) || 0 === A) {
              if (0 === h) {
                this.isConsoleLogEnabled &&
                  console &&
                  console.log(
                    "Floodgate event: ",
                    e.EVENT_NAME,
                    "logSeverity must not be null or none"
                  ),
                  this.telemetryLogger.logEvent(
                    e.EVENT_NAME,
                    { ErrorMessage: "logSeverity must not be null or none" },
                    r
                  );
              }
              return !1;
            }
            return (
              ((n = n || {})[e.EVENT_ID] = t.name),
              (this.isLoggingEnabled(A, r) ||
                this.isEventTelemetryEnabled(t.name)) &&
                this.telemetryLogger.logEvent(e.EVENT_NAME, n, r),
              this.isConsoleLogEnabled &&
                console &&
                console.log("Floodgate event: ", e.EVENT_NAME, A, n),
              !0
            );
          }),
          (e.prototype.logLocal = function (e) {
            for (var t = [], A = 1; A < arguments.length; A++)
              t[A - 1] = arguments[A];
            this.isLoggingEnabled(e) &&
              this.isConsoleLogEnabled &&
              console &&
              console.log("FG: ", e, t);
          }),
          (e.prototype.getUserSamplingRate = function () {
            return this.SAMPLING_RESULT;
          }),
          (e.prototype.isEventTelemetryEnabled = function (e) {
            try {
              var t =
                this.dynamicLogSettings &&
                this.dynamicLogSettings["content_" + e];
              return null == t ? void 0 : t.isEnabled;
            } catch (e) {
              this.isConsoleLogEnabled &&
                console.log("Error checking for dynamic log settings: ", e);
            }
            return !1;
          }),
          (e.prototype.isLoggingEnabled = function (e, t) {
            if ((void 0 === t && (t = 1), E(this.logLevel))) {
              var A = this.getCurrentLogLevel();
              this.logLevel = E(A) ? 2 : A;
            }
            return e <= this.logLevel && this.SAMPLING_RESULT <= t && 0 !== t;
          }),
          (e.prototype.getCurrentLogLevel = function () {
            try {
              var e =
                  ("undefined" != typeof URLSearchParams &&
                    new URLSearchParams(window.location.search)) ||
                  void 0,
                t = e && e.get("obfconsolelog");
              if (!t) {
                var A = "undefined" != typeof document && document.referrer;
                t = A && -1 !== A.indexOf("obfconsolelog");
              }
              t && (this.isConsoleLogEnabled = !0);
              var n = e && e.get("obfloglevel");
              if (!E(n))
                return (this.isConsoleLogEnabled = !0), parseInt(n, 10);
              if (m.a.isStorageAvailable()) {
                var r = new m.a().read(v.FileType.LogLevelSettings);
                r || (r = Object(w.a)("LogLevelSettings", ""));
                var i = r && this.parseObject(r);
                if (i) {
                  this.dynamicLogSettings = i;
                  var o = i.content,
                    a = y.get().getCommonInitOptions();
                  if (a) {
                    var s = a.appId && a.appId.toString(),
                      u = a.originalLocale && a.originalLocale.toLowerCase();
                    o =
                      i["content_" + s + "_" + u] ||
                      i["content_" + s] ||
                      i["content_" + u] ||
                      i.content;
                  }
                  if (o)
                    return (
                      o.consoleLog && (this.isConsoleLogEnabled = !0),
                      o.logLevel
                    );
                }
              }
            } catch (e) {
              return void (
                this.isConsoleLogEnabled &&
                console.log("Error while getting the current log level: ", e)
              );
            }
            return null;
          }),
          (e.prototype.parseObject = function (e) {
            try {
              return JSON.parse(e);
            } catch (e) {
              return (
                this.isConsoleLogEnabled &&
                  console.log(
                    "Error while parsing the json string for log level: ",
                    e
                  ),
                null
              );
            }
          }),
          (e.prototype.getEventSamplingRate = function (e) {
            var t = 1;
            return (
              this.eventSampling.event &&
                e in this.eventSampling.event &&
                (t = this.eventSampling.event[e]),
              t
            );
          }),
          (e.EVENT_NAME = "SDK"),
          (e.EVENT_ID = "EventId"),
          e
        );
      })(),
      Q = (function () {
        function e() {}
        return (
          (e.getTenantToken = function (t) {
            return 0 === t
              ? e.TENANT_TOKEN_PRODUCTION
              : e.TENANT_TOKEN_PRE_PRODUCTION;
          }),
          (e.TENANT_TOKEN_PRODUCTION =
            "d79e824386c4441cb8c1d4ae15690526-bd443309-5494-444a-aba9-0af9eef99f84-7360"),
          (e.TENANT_TOKEN_PRE_PRODUCTION =
            "2bf6a2ffddca4a80a892a0b182132961-625cb102-8b0c-480e-af53-92e48695d08d-7736"),
          e
        );
      })();
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "l", function () {
      return o;
    }),
      A.d(t, "d", function () {
        return a;
      }),
      A.d(t, "b", function () {
        return s;
      }),
      A.d(t, "j", function () {
        return u;
      }),
      A.d(t, "k", function () {
        return c;
      }),
      A.d(t, "c", function () {
        return l;
      }),
      A.d(t, "i", function () {
        return d;
      }),
      A.d(t, "g", function () {
        return g;
      }),
      A.d(t, "h", function () {
        return p;
      }),
      A.d(t, "m", function () {
        return h;
      }),
      A.d(t, "e", function () {
        return f;
      }),
      A.d(t, "f", function () {
        return B;
      }),
      A.d(t, "a", function () {
        return m;
      });
    var n = A(0),
      r = A(22),
      i = A(2);
    function o(e, t) {
      u(e, t ? n.c.Hidden : n.c.Visible, t ? n.c.Visible : n.c.Hidden);
    }
    function a(e) {
      var t = document.getElementById(e);
      null != t && null != t.parentNode && t.parentNode.removeChild(t);
    }
    function s(e, t) {
      var A = document.getElementById(e);
      A &&
        (A.className.match(new RegExp("\\b" + t + "\\b")) ||
          (A.className = A.className + " " + t));
    }
    function u(e, t, A) {
      !(function (e, t) {
        var A = document.getElementById(e);
        A &&
          ((A.className = A.className
            .split(new RegExp("\\b" + t + "\\b", "i"))
            .join(" ")),
          (A.className = A.className.split(/\s+/).join(" ")));
      })(e, t),
        s(e, A);
    }
    function c(e, t, A) {
      var n = document.getElementById(e);
      n && n.setAttribute(t, A);
    }
    function l(e, t, A) {
      e.addEventListener
        ? e.addEventListener(t, A, !1)
        : e.attachEvent && e.attachEvent("on" + t, A);
    }
    function d(e, t, A) {
      e.removeEventListener
        ? e.removeEventListener(t, A, !1)
        : e.detachEvent && e.detachEvent("on" + t, A);
    }
    function g(e, t, A) {
      var n = document.getElementById(e);
      n && l(n, t, A);
    }
    function p(e, t, A) {
      e && l(e, t, A);
    }
    function h(e, t, A) {
      var n = document.getElementById(e);
      n && d(n, t, A);
    }
    function f() {
      var e = -1,
        t = window.navigator.userAgent;
      t.indexOf("Trident") > -1 &&
        null != new RegExp("Trident/([0-9]{1,}[.0-9]{0,})").exec(t) &&
        ((e = parseFloat(RegExp.$1)), (e += 4));
      return e;
    }
    function B() {
      return "rtl" === getComputedStyle(document.documentElement).direction;
    }
    function m(e, t) {
      var A = document.getElementById(e),
        n = A && A.checked,
        a = document.getElementById(t);
      if (n) {
        o(t, !0);
        var s = performance.now();
        r.a(document.body)
          .then(function (e) {
            var t = performance.now();
            i
              .b()
              .logEvent(i.a.Shared.Screenshot.Render.Success.VALUE, 1, {
                TimeMilliseconds: t - s,
              }),
              (a.src = e.toDataURL());
          })
          .catch(function (e) {
            var t = performance.now();
            i.b().logEvent(i.a.Shared.Screenshot.Render.Failed.VALUE, 2, {
              ErrorMessage: e,
              TimeMilliseconds: t - s,
            });
          });
      } else o(t, !1);
    }
  },
  function (e, t, A) {
    "use strict";
    var n;
    function r(e) {
      n = e;
    }
    function i() {
      return n;
    }
    A.d(t, "b", function () {
      return r;
    }),
      A.d(t, "a", function () {
        return i;
      });
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "g", function () {
      return r;
    }),
      A.d(t, "k", function () {
        return i;
      }),
      A.d(t, "j", function () {
        return o;
      }),
      A.d(t, "h", function () {
        return a;
      }),
      A.d(t, "i", function () {
        return c;
      }),
      A.d(t, "e", function () {
        return l;
      }),
      A.d(t, "d", function () {
        return d;
      }),
      A.d(t, "f", function () {
        return g;
      }),
      A.d(t, "c", function () {
        return p;
      }),
      A.d(t, "b", function () {
        return h;
      }),
      A.d(t, "a", function () {
        return f;
      });
    var n = A(10),
      r = n.Utils.guid,
      i = n.Utils.overrideValues,
      o = n.Utils.isNOU,
      a = n.Utils.isBoolean,
      s = n.Utils.isString,
      u = n.Utils.isObject;
    function c(e) {
      return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
    }
    function l(e, t) {
      if (!u(e)) throw t + " is not an object: " + e;
    }
    function d(e, t) {
      if (
        !(function (e) {
          return "number" == typeof e;
        })(e)
      )
        throw t + " is not a number: " + e;
    }
    function g(e, t) {
      if (!s(e)) throw t + " is not a string: " + e;
    }
    function p(e, t) {
      if (!a(e)) throw t + " is not a boolean: " + e;
    }
    function h(e, t) {
      if (!Array.isArray(e)) throw t + " is not an array: " + e;
    }
    function f(e, t) {
      var A = new Promise(function (t, A) {
        var n = setTimeout(function () {
          clearTimeout(n), A("Timed out in " + e + "ms.");
        }, e);
      });
      return Promise.race([t, A]);
    }
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return n;
    }),
      A.d(t, "b", function () {
        return r;
      }),
      A.d(t, "c", function () {
        return i;
      });
    var n = function () {
      return (n =
        Object.assign ||
        function (e) {
          for (var t, A = 1, n = arguments.length; A < n; A++)
            for (var r in (t = arguments[A]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }).apply(this, arguments);
    };
    function r(e, t, A, n) {
      return new (A || (A = Promise))(function (r, i) {
        function o(e) {
          try {
            s(n.next(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          try {
            s(n.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function s(e) {
          var t;
          e.done
            ? r(e.value)
            : ((t = e.value),
              t instanceof A
                ? t
                : new A(function (e) {
                    e(t);
                  })).then(o, a);
        }
        s((n = n.apply(e, t || [])).next());
      });
    }
    function i(e, t) {
      var A,
        n,
        r,
        i,
        o = {
          label: 0,
          sent: function () {
            if (1 & r[0]) throw r[1];
            return r[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: a(0), throw: a(1), return: a(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function a(i) {
        return function (a) {
          return (function (i) {
            if (A) throw new TypeError("Generator is already executing.");
            for (; o; )
              try {
                if (
                  ((A = 1),
                  n &&
                    (r =
                      2 & i[0]
                        ? n.return
                        : i[0]
                        ? n.throw || ((r = n.return) && r.call(n), 0)
                        : n.next) &&
                    !(r = r.call(n, i[1])).done)
                )
                  return r;
                switch (((n = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                  case 0:
                  case 1:
                    r = i;
                    break;
                  case 4:
                    return o.label++, { value: i[1], done: !1 };
                  case 5:
                    o.label++, (n = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = o.ops.pop()), o.trys.pop();
                    continue;
                  default:
                    if (
                      !((r = o.trys),
                      (r = r.length > 0 && r[r.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      o = 0;
                      continue;
                    }
                    if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                      o.label = i[1];
                      break;
                    }
                    if (6 === i[0] && o.label < r[1]) {
                      (o.label = r[1]), (r = i);
                      break;
                    }
                    if (r && o.label < r[2]) {
                      (o.label = r[2]), o.ops.push(i);
                      break;
                    }
                    r[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                i = t.call(e, o);
              } catch (e) {
                (i = [6, e]), (n = 0);
              } finally {
                A = r = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, a]);
        };
      }
    }
  },
  function (e, t, A) {
    "use strict";
    var n;
    A.d(t, "b", function () {
      return n;
    }),
      A.d(t, "a", function () {
        return r;
      }),
      A.d(t, "c", function () {
        return i;
      }),
      (function (e) {
        (e[(e.Smile = 0)] = "Smile"),
          (e[(e.Frown = 1)] = "Frown"),
          (e[(e.Idea = 2)] = "Idea"),
          (e[(e.Bug = 3)] = "Bug");
      })(n || (n = {}));
    var r = (function () {
        function e() {}
        return (
          (e.WebSurfacesLink =
            "https://content.growth.office.net/mirrored/resources/programmablesurfaces/prod/officewebsurfaces.core.min.js"),
          e
        );
      })(),
      i = (function () {
        function e() {}
        return (
          (e.TMSAppID = "4c4f550b-42b2-4a16-93f9-fdb9e01bb6ed"),
          (e.TULIPSAppID = "05c88d91-956e-46b4-91b0-77a33cc21a4d"),
          e
        );
      })();
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return o;
    }),
      A.d(t, "b", function () {
        return a;
      }),
      A.d(t, "l", function () {
        return s;
      }),
      A.d(t, "m", function () {
        return u;
      }),
      A.d(t, "k", function () {
        return c;
      }),
      A.d(t, "d", function () {
        return l;
      }),
      A.d(t, "h", function () {
        return d;
      }),
      A.d(t, "g", function () {
        return g;
      }),
      A.d(t, "f", function () {
        return p;
      }),
      A.d(t, "i", function () {
        return h;
      }),
      A.d(t, "j", function () {
        return f;
      }),
      A.d(t, "e", function () {
        return B;
      }),
      A.d(t, "c", function () {
        return m;
      });
    var n = window,
      r = (n.OfficeBrowserFeedback = n.OfficeBrowserFeedback || {}),
      i = (r.floodgate = r.floodgate || {});
    function o() {
      return n;
    }
    function a() {
      return n;
    }
    function s(e) {
      r.setUiStrings = e;
    }
    function u(e) {
      r.singleFeedback = e;
    }
    function c(e) {
      r.multiFeedback = e;
    }
    function l(e) {
      r.createScreenshot = e;
    }
    function d(e) {
      i.showSurvey = e;
    }
    function g(e) {
      i.showCustomSurvey = e;
    }
    function p(e) {
      i.initialize = e;
    }
    function h(e) {
      i.start = e;
    }
    function f(e) {
      i.stop = e;
    }
    function B(e) {
      i.getEngine = e;
    }
    function m(e) {
      i.getSettingIdMap = e;
    }
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return u;
    });
    var n = A(5),
      r = A(14),
      i = A(31),
      o = A(2),
      a = n.j,
      s = null;
    function u(e, t) {
      try {
        if (
          (!s && r.a.isStorageAvailable() && (s = new i.a(["DynamicSettings"])),
          !s)
        )
          return t;
        var A = s.getItemContent("DynamicSettings");
        if (!a(A) && A.hasOwnProperty(e) && !a(A[e])) {
          var n = A[e];
          if ("number" == typeof t && "number" != typeof n) {
            if ("string" == typeof n) {
              var u = -1 === n.indexOf(".") ? parseInt(n, 10) : parseFloat(n);
              return isNaN(u) ? t : u;
            }
            return t;
          }
          return n;
        }
      } catch (t) {
        o.b().logEvent(o.a.Common.Error.VALUE, 2, {
          ErrorMessage: "Error reading dynamic setting " + (t && t.message),
          Type: e,
        });
      }
      return t;
    }
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Utils = t.Api = void 0);
    var n = A(12);
    t.Api = n;
    var r = A(11);
    t.Utils = r;
    var i = A(17);
    Object.defineProperty(t, "FloodgateEngine", {
      enumerable: !0,
      get: function () {
        return i.FloodgateEngine;
      },
    });
  },
  function (e, t, A) {
    "use strict";
    function n(e) {
      return (
        "[object Date]" === Object.prototype.toString.call(e) &&
        !isNaN(e.getTime())
      );
    }
    function r(e) {
      return null == e;
    }
    function i(e) {
      return "string" == typeof e;
    }
    function o(e, A) {
      if (!e) return null;
      if (A < 0) return (A = -A), this.addSecondsWithoutOverflow(e, A);
      var n = e.getTime() - 1e3 * A;
      return n > t.MIN_DATE_MILLISECONDS
        ? new Date(n)
        : new Date(t.MIN_DATE_MILLISECONDS);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.fyShuffle =
        t.dateToShortUtcString =
        t.isUtcDatetimeString =
        t.overrideValues =
        t.stringToDate =
        t.makeArrayFromObjectValuesSortedByKeyString =
        t.guid =
        t.extractLanguageSubtag =
        t.isValidLanguageSubTag =
        t.subtractSecondsWithoutOverflow =
        t.addSecondsWithoutOverflow =
        t.MIN_DATE_MILLISECONDS =
        t.MAX_DATE_MILLISECONDS =
        t.getDistantFuture =
        t.getDistantPast =
        t.isBoolean =
        t.isString =
        t.isArray =
        t.isObject =
        t.isNOU =
        t.isNumber =
        t.isEnumValue =
        t.isDate =
        t.timeAdd =
          void 0),
      (t.timeAdd = function (e, t, A) {
        switch (t.toLowerCase()) {
          case "h":
          case "hour":
            return new Date(e.getTime() + 36e5 * A);
          case "m":
          case "minute":
            return new Date(e.getTime() + 6e4 * A);
          case "s":
          case "second":
            return new Date(e.getTime() + 1e3 * A);
          default:
            throw new Error("Invalid interval value of " + t);
        }
      }),
      (t.isDate = n),
      (t.isEnumValue = function (e, t) {
        return e in t;
      }),
      (t.isNumber = function (e) {
        return null !== e && !isNaN(e) && isFinite(e);
      }),
      (t.isNOU = r),
      (t.isObject = function (e) {
        return null != e && "object" == typeof e;
      }),
      (t.isArray = function (e) {
        return null != e && Array.isArray(e);
      }),
      (t.isString = i),
      (t.isBoolean = function (e) {
        return "boolean" == typeof e;
      }),
      (t.getDistantPast = function () {
        return new Date(-116444736e5);
      }),
      (t.getDistantFuture = function () {
        return new Date(640922112e5);
      }),
      (t.MAX_DATE_MILLISECONDS = 864e13),
      (t.MIN_DATE_MILLISECONDS = -864e13),
      (t.addSecondsWithoutOverflow = function (e, A) {
        if (!e) return null;
        if (A < 0) return o(e, -1 * A);
        var n = e.getTime() + 1e3 * A;
        return n < t.MAX_DATE_MILLISECONDS
          ? new Date(n)
          : new Date(t.MAX_DATE_MILLISECONDS);
      }),
      (t.subtractSecondsWithoutOverflow = o);
    function a(e) {
      if (!e) return null;
      var t = e.match(
        "^((?:[a-zA-Z]{2,3}(?:-[a-zA-Z]{3}){0,3})|(?:[a-zA-Z]{4,8}))(?:-([a-zA-Z]{4}))?(?:-([a-zA-Z]{2}|[0-9]{3}))?(-.*)?$"
      );
      return !t || t.length < 1 || !r(t[4]) ? null : t[0];
    }
    function s() {
      return Math.floor(65536 * (1 + Math.random()))
        .toString(16)
        .substring(1);
    }
    (t.isValidLanguageSubTag = function (e) {
      if (!e) return !1;
      var t = a(e);
      return !!t && t === e;
    }),
      (t.extractLanguageSubtag = a),
      (t.guid = function () {
        return (
          s() +
          s() +
          "-" +
          s() +
          "-4" +
          s().substr(0, 3) +
          "-" +
          s() +
          "-" +
          s() +
          s() +
          s()
        ).toLowerCase();
      }),
      (t.makeArrayFromObjectValuesSortedByKeyString = function (e) {
        var t = Object.keys(e);
        t.sort();
        var A = [];
        for (var n in t)
          if (t.hasOwnProperty(n)) {
            var r = t[n];
            A.push(e[r]);
          }
        return A;
      }),
      (t.stringToDate = function (e) {
        if (!i(e)) return null;
        var t = e ? new Date(e) : null;
        return n(t) ? t : null;
      }),
      (t.overrideValues = function (e, t) {
        if (!t) return t;
        var A = t;
        if (e) for (var n in e) e.hasOwnProperty(n) && (A[n] = e[n]);
        return A;
      }),
      (t.isUtcDatetimeString = function (e) {
        return (
          !!i(e) && /^(\d{4}\-\d\d\-\d\dT\d\d:\d\d:\d\d(\.\d\d\d)?Z)$/.test(e)
        );
      }),
      (t.dateToShortUtcString = function (e) {
        if (!n(e)) return null;
        function t(e) {
          return e < 10 ? "0" + e : e.toString();
        }
        return (
          e.getUTCFullYear() +
          "-" +
          t(e.getUTCMonth() + 1) +
          "-" +
          t(e.getUTCDate()) +
          "T" +
          t(e.getUTCHours()) +
          ":" +
          t(e.getUTCMinutes()) +
          ":" +
          t(e.getUTCSeconds()) +
          "Z"
        );
      }),
      (t.fyShuffle = function (e) {
        if (!r(e)) {
          if (0 === e.length || 1 === e.length) return e;
          for (var t = e.length - 1; t > 0; ) {
            var A = Math.floor(Math.random() * (t + 1)),
              n = e[t];
            (e[t] = e[A]), (e[A] = n), t--;
          }
          return e;
        }
      });
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ISurveyInfo =
        t.ISurveyComponent =
        t.ISurvey =
        t.IFloodgateSettingIdMap =
        t.IFloodgateStorageProvider =
        t.IActivityListener =
          void 0);
    var n = A(38);
    t.ISurveyInfo = n;
    var r = A(52);
    t.IActivityListener = r;
    var i = A(53);
    t.IFloodgateSettingIdMap = i;
    var o = A(13);
    t.IFloodgateStorageProvider = o;
    var a = A(16);
    t.ISurvey = a;
    var s = A(18);
    t.ISurveyComponent = s;
    var u = A(19);
    Object.defineProperty(t, "CampaignDefinition", {
      enumerable: !0,
      get: function () {
        return u.CampaignDefinition;
      },
    });
  },
  function (e, t, A) {
    "use strict";
    var n;
    !(function (e) {
      !(function (e) {
        (e[(e.FloodgateSettings = 0)] = "FloodgateSettings"),
          (e[(e.SurveyActivationStats = 1)] = "SurveyActivationStats"),
          (e[(e.SurveyEventActivityStats = 2)] = "SurveyEventActivityStats"),
          (e[(e.CampaignDefinitions = 3)] = "CampaignDefinitions"),
          (e[(e.CampaignStates = 4)] = "CampaignStates"),
          (e[(e.GovernedChannelStates = 5)] = "GovernedChannelStates"),
          (e[(e.TmsCache_MessageMetadata = 6)] = "TmsCache_MessageMetadata"),
          (e[(e.TmsCache_UserGovernance = 7)] = "TmsCache_UserGovernance"),
          (e[(e.TmsCache_CampaignContent = 8)] = "TmsCache_CampaignContent"),
          (e[(e.Tms_DynamicSettings = 9)] = "Tms_DynamicSettings"),
          (e[(e.LogLevelSettings = 10)] = "LogLevelSettings"),
          (e[(e.UserFacts = 11)] = "UserFacts"),
          (e[(e.DebugOverrides = 12)] = "DebugOverrides");
      })(e.FileType || (e.FileType = {}));
    })(n || (n = {})),
      (e.exports = n);
  },
  function (e, t, A) {
    "use strict";
    var n,
      r = A(12),
      i = A(8),
      o = A(2),
      a = r.IFloodgateStorageProvider.FileType,
      s =
        (((n = {})[a.CampaignDefinitions] = "obf-CampaignDefinitions"),
        (n[a.CampaignStates] = "obf-CampaignStates"),
        (n[a.FloodgateSettings] = "obf-FloodgateSettings"),
        (n[a.GovernedChannelStates] = "obf-GovernedChannelStates"),
        (n[a.SurveyActivationStats] = "obf-SurveyActivationStats"),
        (n[a.SurveyEventActivityStats] = "obf-SurveyEventActivityStats"),
        (n[a.TmsCache_CampaignContent] = "obf-TmsCampaignContent"),
        (n[a.TmsCache_MessageMetadata] = "obf-TmsMessageMetadata"),
        (n[a.TmsCache_UserGovernance] = "obf-TmsUserGovernance"),
        (n[a.Tms_DynamicSettings] = "obf-TmsDynamicSettings"),
        (n[a.LogLevelSettings] = "obf-LogLevelSettings"),
        (n[a.UserFacts] = "obf-UserFacts"),
        (n[a.DebugOverrides] = "obf-DebugOverrides"),
        n),
      u = (function () {
        function e() {}
        return (
          (e.isStorageAvailable = function () {
            try {
              var e = "__storage_test__";
              return (
                i.b().localStorage.setItem(e, e),
                i.b().localStorage.removeItem(e),
                !0
              );
            } catch (e) {
              return (
                e instanceof DOMException &&
                (22 === e.code ||
                  1014 === e.code ||
                  "QuotaExceededError" === e.name ||
                  "NS_ERROR_DOM_QUOTA_REACHED" === e.name) &&
                0 !== i.b().localStorage.length
              );
            }
          }),
          (e.safeReadObject = function (e, t) {
            if ((void 0 === t && (t = void 0), !(e in a))) return t;
            try {
              var A = s[e],
                n = i.b().localStorage.getItem(A),
                r = !n || ("{" !== n[0] && "[" !== n[0]) ? n : JSON.parse(n);
              return null != r ? r : t;
            } catch (e) {}
            return t;
          }),
          (e.prototype.fileLock = function (e) {}),
          (e.prototype.fileUnlock = function (e) {}),
          (e.prototype.read = function (e) {
            if (!(e in a)) return "";
            var t,
              A = s[e];
            try {
              t = i.b().localStorage.getItem(A);
            } catch (e) {
              return (
                o
                  .b()
                  .logEvent(o.a.SURVEY_FLOODGATE_FILEREAD_FAILED, 2, {
                    ErrorMessage: e.toString(),
                    FileName: A,
                  }),
                ""
              );
            }
            return t;
          }),
          (e.prototype.write = function (e, t) {
            if (e in a) {
              var A = s[e];
              try {
                i.b().localStorage.setItem(A, t);
              } catch (e) {
                return void o
                  .b()
                  .logEvent(o.a.SURVEY_FLOODGATE_FILEWRITE_FAILED, 2, {
                    ErrorMessage: e.toString(),
                    FileName: A,
                  });
              }
            }
          }),
          e
        );
      })();
    t.a = u;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TelemetryEvent = void 0);
    var n = (function () {
      function e() {}
      var t,
        A,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        c,
        l,
        d,
        g,
        p,
        h,
        f,
        B,
        m,
        v,
        C,
        w,
        y,
        E,
        F,
        U,
        S,
        Q,
        T,
        b,
        I,
        N,
        H,
        _,
        O,
        D;
      return (
        (e.CampaignState =
          (((t = function () {}).Deserialize =
            (((A = function () {}).Failed =
              "FloodgateCore_CampaignState_Deserialize_Failed"),
            A)),
          t)),
        (e.FileBasedCampaignStateProvider =
          (((n = function () {}).Load =
            (((r = function () {}).Failed =
              "FloodgateCore_FileBasedCampaignStateProvider_Load_Failed"),
            r)),
          n)),
        (e.HostBasedCampaignStateProvider =
          (((i = function () {}).GetStatesFromHost =
            (((o = function () {}).Failed =
              "FloodgateCore_HostBasedCampaignStateProvider_GetStatesFromHost_Failed"),
            o)),
          i)),
        (e.Floodgate =
          (((a = function () {}).Initialize =
            (((s = function () {}).Failed =
              "FloodgateCore_Floodgate_Initialize_Failed"),
            s)),
          (a.Start =
            (((u = function () {}).Failed =
              "FloodgateCore_Floodgate_Start_Failed"),
            (u.Warning = "FloodgateCore_Floodgate_Start_Warning"),
            (u.SurveysDisabled =
              "FloodgateCore_Floodgate_Start_SurveysDisabled"),
            u)),
          (a.UserFactsLoad =
            (((c = function () {}).Failed =
              "FloodgateCore_Floodgate_UserFactsLoad_Failed"),
            c)),
          (a.UserFactsSpecDeserialization =
            (((l = function () {}).Failed =
              "FloodgateCore_Floodgate_UserFactsSpecDeserialization_Failed"),
            l)),
          (a.UserFactsSpecIsAMatch =
            (((d = function () {}).Failed =
              "FloodgateCore_Floodgate_UserFactsSpecIsAMatch_Failed"),
            d)),
          a)),
        (e.FloodgateEngine =
          (((g = function () {}).Make =
            (((p = function () {}).Failed =
              "FloodgateCore_FloodgateEngine_Make_Failed"),
            p)),
          (g.Common =
            (((h = function () {}).Error =
              "FloodgateCore_FloodgateEngine_Common_Error"),
            h)),
          (g.Start =
            (((f = function () {}).Failed =
              "FloodgateCore_FloodgateEngine_Start_Failed"),
            f)),
          (g.StartAsync =
            (((B = function () {}).Failed =
              "FloodgateCore_FloodgateEngine_StartAsync_Failed"),
            (B.Stopped = "FloodgateCore_FloodgateEngine_StartAsync_Stopped"),
            B)),
          (g.OnSurveyActivated =
            (((m = function () {}).ActivationStatsSuppressedSurvey =
              "FloodgateCore_FloodgateEngine_OnSurveyActivated_ActivationStatsSuppressedSurvey"),
            (m.ClosedChannelType =
              "FloodgateCore_FloodgateEngine_OnSurveyActivated_ClosedChannelType"),
            (m.SurveyNotDefined =
              "FloodgateCore_FloodgateEngine_OnSurveyActivated_SurveyNotDefined"),
            m)),
          g)),
        (e.GovernedChannelState =
          (((v = function () {}).Deserialize =
            (((C = function () {}).Failed =
              "FloodgateCore_GovernedChannelState_Deserialize_Failed"),
            C)),
          v)),
        (e.FileBasedGovernedChannelStateProvider =
          (((w = function () {}).Load =
            (((y = function () {}).Failed =
              "FloodgateCore_FileBasedGovernedChannelStateProvider_Load_Failed"),
            y)),
          w)),
        (e.HostBasedGovernedChannelStateProvider =
          (((E = function () {}).GetStatesFromHost =
            (((F = function () {}).Failed =
              "FloodgateCore_HostBasedGovernedChannelStateProvider_GetStatesFromHost_Failed"),
            F)),
          E)),
        (e.SurveyStatCollectionActivation =
          (((U = function () {}).FromJson =
            (((S = function () {}).Failed =
              "FloodgateCore_SurveyStatCollectionActivation_FromJson_Failed"),
            S)),
          (U.ToJson =
            (((Q = function () {}).Failed =
              "FloodgateCore_SurveyStatCollectionActivation_ToJson_Failed"),
            Q)),
          U)),
        (e.HostBasedSurveyActivationStatsProvider =
          (((T = function () {}).GetSurveyStatsFromHost =
            (((b = function () {}).Failed =
              "FloodgateCore_HostBasedSurveyActivationStatsProvider_GetSurveyStatsFromHost_Failed"),
            b)),
          T)),
        (e.SurveyStatCollectionEventActivity =
          (((I = function () {}).FromJson =
            (((N = function () {}).Failed =
              "FloodgateCore_SurveyStatCollectionEventActivity_FromJson_Failed"),
            N)),
          (I.ToJson =
            (((H = function () {}).Failed =
              "FloodgateCore_SurveyStatCollectionEventActivity_ToJson_Failed"),
            H)),
          I)),
        (e.SurveyActivity =
          (((_ = function () {}).LogActivity =
            (((O = function () {}).EventsReprocessed =
              "FloodgateCore_SurveyActivity_LogActivity_EventsReprocessed"),
            O)),
          (_.SetActivityTrackingContracts =
            (((D = function () {}).DuplicateSurveyID =
              "FloodgateCore_SurveyActivity_SetActivityTrackingContracts_DuplicateSurveyID"),
            D)),
          _)),
        e
      );
    })();
    t.TelemetryEvent = n;
  },
  function (e, t, A) {
    "use strict";
    var n;
    !(function (e) {
      !(function (e) {
        (e[(e.Feedback = 0)] = "Feedback"),
          (e[(e.Nps = 1)] = "Nps"),
          (e[(e.Psat = 2)] = "Psat"),
          (e[(e.Bps = 3)] = "Bps"),
          (e[(e.Fps = 4)] = "Fps"),
          (e[(e.Nlqs = 5)] = "Nlqs"),
          (e[(e.Intercept = 6)] = "Intercept"),
          (e[(e.GenericMessagingSurface = 12)] = "GenericMessagingSurface");
      })(e.Type || (e.Type = {})),
        (e.DOM_FEEDBACKSURVEY_TAGNAME = "FeedbackSurvey"),
        (e.DOM_NPS_TAGNAME = "Nps"),
        (e.DOM_PSAT_TAGNAME = "Psat"),
        (e.DOM_BPS_TAGNAME = "Bps"),
        (e.DOM_FPS_TAGNAME = "Fps"),
        (e.DOM_NLQS_TAGNAME = "Nlqs"),
        (e.DOM_INTERCEPT_TAGNAME = "Intercept"),
        (e.LAUNCHER_TYPE_DEFAULT = "survey");
    })(n || (n = {})),
      (e.exports = n);
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.FloodgateEngine = void 0);
    var n = A(13),
      r = A(19),
      i = A(54),
      o = A(39),
      a = A(15),
      s = A(67),
      u = A(20),
      c = A(42),
      l = A(30),
      d = A(37),
      g = A(40),
      p = A(43),
      h = n.FileType,
      f = A(70),
      B = A(11),
      m = (function () {
        function e() {}
        return (
          (e.prototype.log_TriggerMet = function (e, t, A, n, r) {}),
          (e.prototype.log_UserSelected = function (e, t, A, n) {}),
          (e.prototype.log_CampaignLoad_Failed = function (e) {}),
          (e.prototype.log_Error = function (e, t) {}),
          (e.prototype.log_Event = function (e, t) {}),
          e
        );
      })(),
      v = {
        run: function (e) {},
        shouldAcceptActivity: function (e) {
          return !0;
        },
      },
      C = (function () {
        function e(t, A, n, r, i, o, a, s) {
          if (
            ((this.initializationStatus = 0),
            (this.candidateSurveys = {}),
            (this.launchedSurveys = {}),
            (this.launchedLaunchers = []),
            (this.surveyEventSent = []),
            !t)
          )
            throw new Error("surveyClient must not be null");
          if (!A) throw new Error("activityListener must not be null");
          if (!n) throw new Error("launcherFactory must not be null");
          if (!r) throw new Error("onSurveyActivatedCallback must not be null");
          if (!i) throw new Error("storage must not be null");
          if (!o) throw new Error("governor must not be null");
          if (!s) throw new Error("transporterFactory must not be null");
          (this.surveyClient = t),
            (this.activityListener = A),
            (this.launcherFactory = n),
            (this.onSurveyActivatedCallback = r),
            (this.storage = i),
            (this.governor = o),
            (this.surveyActivationStatsProvider = a),
            (e.transporterFactory = s),
            (this.loggedFirstStart = !1),
            this.setPendingSurveys(null),
            this.activityListener.clearSurveys();
          var u = this;
          this.activityListener.setCallback({
            run: function (e) {
              u.onSurveyActivated(e);
            },
            shouldAcceptActivity: function (e) {
              return u.shouldAcceptActivity(e);
            },
          });
        }
        return (
          (e.setTelemetryLogger = function (t) {
            if (!t) throw new Error("telemetryLogger must not be null");
            e.telemetryLogger = t;
          }),
          (e.getTelemetryLogger = function () {
            return e.telemetryLogger;
          }),
          (e.getTransportFactory = function () {
            return e.transporterFactory;
          }),
          (e.make = function (t, A, n, s, u, p, h, f, B, m) {
            try {
              var C = c.GovernedChannelStateProviderFactory.make(s, u),
                w = g.SurveyActivationStatsProviderFactory.make(s, u),
                y = o.CampaignStateProviderFactory.make(s, u);
              return (
                B.push(new r.FileSystemCampaignDefinitionProvider(s)),
                new e(
                  new i.CampaignManager(y, B, p, h, t, new Date(), m),
                  new d(v, this.getTelemetryLogger),
                  A,
                  n,
                  s,
                  new l.Governor(C),
                  w,
                  f
                )
              );
            } catch (e) {
              this.telemetryLogger.log_Event(
                a.TelemetryEvent.FloodgateEngine.Make.Failed,
                { ErrorMessage: e && e.toString(), ErrorDetails: e && e.stack }
              );
            }
          }),
          (e.prototype.mergeAndSave = function () {
            this.saveSettings(),
              this.saveSurveyActivationHistory(),
              this.saveSurveyEventActivityHistory(),
              this.surveyClient.saveCurrentState(),
              this.governor.saveChannelStates();
          }),
          (e.prototype.start = function () {
            if (
              2 !== this.initializationStatus &&
              3 !== this.initializationStatus
            )
              try {
                this.setInitializationStatus(2),
                  this.loadSettingsAndPriorEventCounts();
                var t = this.getAvailableChannelTypes();
                this.surveyClient.refreshSurveyDefinitions(t),
                  this.setPendingSurveysAndStartFloodgate(),
                  this.setInitializationStatus(3);
              } catch (t) {
                this.setInitializationStatus(1),
                  e
                    .getTelemetryLogger()
                    .log_Event(a.TelemetryEvent.FloodgateEngine.Start.Failed, {
                      ErrorMessage: t && t.toString(),
                      ErrorDetails: t && t.stack,
                    });
              }
          }),
          (e.prototype.startAsync = function () {
            if (
              2 === this.initializationStatus ||
              3 === this.initializationStatus
            )
              return Promise.resolve();
            try {
              this.setInitializationStatus(2),
                this.loadSettingsAndPriorEventCounts();
              var t = this.getAvailableChannelTypes(),
                A = this;
              return new Promise(function (n, r) {
                A.surveyClient
                  .refreshSurveyDefinitionsAsync(t)
                  .then(function () {
                    4 === A.initializationStatus
                      ? (A.setInitializationStatus(3),
                        A.stop(),
                        e
                          .getTelemetryLogger()
                          .log_Event(
                            a.TelemetryEvent.FloodgateEngine.StartAsync.Stopped,
                            {
                              ErrorMessage:
                                "Stopped because of a pending stop() call",
                            }
                          ))
                      : A.setPendingSurveysAndStartFloodgate(),
                      n();
                  })
                  .catch(function (t) {
                    A.setInitializationStatus(1),
                      e
                        .getTelemetryLogger()
                        .log_Event(
                          a.TelemetryEvent.FloodgateEngine.StartAsync.Failed,
                          {
                            ErrorMessage:
                              "Survey refresh error " + (t && t.message),
                          }
                        ),
                      r(t);
                  });
              });
            } catch (t) {
              return (
                this.setInitializationStatus(1),
                e
                  .getTelemetryLogger()
                  .log_Event(
                    a.TelemetryEvent.FloodgateEngine.StartAsync.Failed,
                    {
                      ErrorMessage: t && t.toString(),
                      ErrorDetails: t && t.stack,
                    }
                  ),
                Promise.resolve()
              );
            }
          }),
          (e.prototype.stop = function () {
            3 === this.initializationStatus &&
              (this.mergeAndSave(),
              this.setPendingSurveys(null),
              this.updateActivityListenerWithCurrentSurveyDefinitions()),
              this.setInitializationStatus(4);
          }),
          (e.prototype.getActivityListener = function () {
            return this.activityListener;
          }),
          (e.prototype.setInitializationStatus = function (e) {
            this.initializationStatus = e;
          }),
          (e.prototype.saveSettings = function () {
            this.storage.fileLock(h.FloodgateSettings);
            try {
              this.writeString(
                h.FloodgateSettings,
                s.FloodgateSettings.toJson(this.floodgateSettings)
              );
            } finally {
              this.storage.fileUnlock(h.FloodgateSettings);
            }
          }),
          (e.prototype.loadSettingsAndPriorEventCounts = function () {
            try {
              (this.previousSurveyActivationStats =
                this.surveyActivationStatsProvider.load()),
                (this.previousSurveyEventActivityStats =
                  p.SurveyStatCollectionEventActivity.fromJson(
                    this.readString(h.SurveyEventActivityStats)
                  ));
              var t = this.previousSurveyEventActivityStats.getStats();
              for (var A in t)
                t.hasOwnProperty(A) && this.surveyEventSent.push(A);
              this.floodgateSettings = s.FloodgateSettings.fromJson(
                this.readString(h.FloodgateSettings)
              );
            } catch (t) {
              e.getTelemetryLogger().log_Event(
                a.TelemetryEvent.FloodgateEngine.Common.Error,
                {
                  ErrorMessage:
                    "Error loading prior settings/events " +
                    (t && t.toString()),
                }
              );
            }
          }),
          (e.prototype.getAvailableChannelTypes = function () {
            var e = this.governor.getAvailableChannelData(),
              t = [];
            return (
              e.forEach(function (e) {
                e && t.push(e.getType());
              }),
              t
            );
          }),
          (e.prototype.setPendingSurveysAndStartFloodgate = function () {
            this.setPendingSurveys(this.surveyClient.getAppSurveys()),
              this.updateActivityListenerWithCurrentSurveyDefinitions(),
              this.setInitializationStatus(3),
              this.loggedFirstStart ||
                ((this.loggedFirstStart = !0),
                this.getActivityListener().logActivity(
                  d.FloodgateStartActivityName
                ));
          }),
          (e.prototype.saveSurveyActivationHistory = function () {
            this.storage.fileLock(h.SurveyActivationStats);
            try {
              var e = this.surveyActivationStatsProvider.load(),
                t = new g.SurveyStatCollectionActivation();
              for (var A in this.launchedSurveys)
                if (this.launchedSurveys.hasOwnProperty(A)) {
                  var n = new g.SurveyActivationStats(),
                    r = this.launchedSurveys[A];
                  (n.Type = r.getType()),
                    (n.ExpirationTimeUtc = r
                      .getSurveyInfo()
                      .getExpirationTimeUtc()),
                    (n.ActivationTimeUtc = new Date()),
                    t.addStats(r.getSurveyInfo().getId(), n);
                }
              e.accumulate(t),
                this.surveyActivationStatsProvider.save(e),
                (this.previousSurveyActivationStats = e);
            } finally {
              this.storage.fileUnlock(h.SurveyActivationStats);
            }
          }),
          (e.prototype.saveSurveyEventActivityHistory = function () {
            this.storage.fileLock(h.SurveyEventActivityStats);
            try {
              var e = p.SurveyStatCollectionEventActivity.fromJson(
                  this.readString(h.SurveyEventActivityStats)
                ),
                t = new Date(),
                A = new p.SurveyStatCollectionEventActivity(),
                n = function (e) {
                  if (r.candidateSurveys.hasOwnProperty(e)) {
                    var n = new p.SurveyEventActivityStats(),
                      i = r.candidateSurveys[e];
                    if (!i.getSurveyInfo().isActiveForDate(t))
                      return "continue";
                    n.ExpirationTimeUtc = i
                      .getSurveyInfo()
                      .getExpirationTimeUtc();
                    var o = i
                        .getSurveyInfo()
                        .getActivationEvent()
                        .getTrackingSet(),
                      a = [],
                      s = [];
                    o.getList().forEach(function (e) {
                      e &&
                        (e.getIsAggregate()
                          ? a.push(e.getActivity())
                          : s.push(e.getActivity()));
                    }),
                      (n.Counts = new Array(a.length));
                    for (var u = 0; u < a.length; u++)
                      n.Counts[u] =
                        r.activityListener.moveSessionCountIntoBaseCount(
                          a[u],
                          i.getSurveyInfo().getId()
                        );
                    for (var c = 0, l = s; c < l.length; c++) {
                      var d = l[c];
                      r.activityListener.saveSessionTrackingActivity(d);
                    }
                    A.addStats(i.getSurveyInfo().getId(), n);
                  }
                },
                r = this;
              for (var i in this.candidateSurveys) n(i);
              e.accumulate(A),
                this.writeString(
                  h.SurveyEventActivityStats,
                  p.SurveyStatCollectionEventActivity.toJson(e)
                ),
                (this.previousSurveyEventActivityStats = e);
            } finally {
              this.storage.fileUnlock(h.SurveyEventActivityStats);
            }
          }),
          (e.prototype.setPendingSurveys = function (e) {
            if (((this.candidateSurveys = {}), e))
              for (var t in e)
                if (e.hasOwnProperty(t)) {
                  var A = e[t];
                  this.launcherFactory.AcceptsSurvey(A) &&
                    (this.candidateSurveys[t] = A);
                }
          }),
          (e.prototype.getCurrentSurveyDefinitions = function () {
            var t = new Array(),
              A = this.getAllCampaignDefinitionIDs(),
              n = this.getAllCandidateCampaignDefinitionIDs();
            for (var r in this.candidateSurveys)
              if (this.candidateSurveys.hasOwnProperty(r)) {
                var i = this.candidateSurveys[r];
                if (
                  this.previousSurveyActivationStats.getBySurveyId(
                    i.getSurveyInfo().getId()
                  )
                )
                  continue;
                if (!i.getSurveyInfo().isActiveForDate(new Date())) continue;
                if (this.surveyEventSent.indexOf(r) < 0) {
                  this.surveyEventSent.push(r);
                  var o = this.getAdditionalSurveyInfoForTelemetry(i, A, n);
                  e.telemetryLogger.log_UserSelected(
                    i.getSurveyInfo().getBackEndId(),
                    i.getSurveyInfo().getId(),
                    i.getType(),
                    JSON.stringify(o)
                  );
                }
                t.push(i);
              }
            return t;
          }),
          (e.prototype.getAdditionalSurveyInfoForTelemetry = function (
            e,
            t,
            A
          ) {
            var n,
              r,
              i,
              o,
              a = this.surveyClient.getCampaignDefinitions()[e.getCampaignId()];
            return (
              (n = a.nominationScheme.percentageNumerator),
              (r = a.nominationScheme.percentageDenominator),
              (i = a.nominationScheme.nominationPeriod.asTimeIntervalSeconds()),
              (i = B.isNOU(i) ? -1 : i),
              (o = a.nominationScheme.cooldownPeriod.asTimeIntervalSeconds()),
              (o = B.isNOU(o) ? -1 : o),
              {
                allCampaignDefinitionIDs: t,
                allCandidateCampaignDefinitionIDs: A,
                channelType: e.getSurveyInfo().getGovernedChannelType(),
                cooldownPeriodNumber: o,
                nominationPeriodNumber: i,
                percentageDenominator: r,
                percentageNumerator: n,
                surveyLauncherType: e.getLauncherType(),
              }
            );
          }),
          (e.prototype.getAllCandidateCampaignDefinitionIDs = function () {
            var e = [];
            for (var t in this.candidateSurveys)
              if (this.candidateSurveys.hasOwnProperty(t)) {
                var A = this.candidateSurveys[t];
                e.push(A.getSurveyInfo().getBackEndId());
              }
            return e;
          }),
          (e.prototype.getAllCampaignDefinitionIDs = function () {
            var e = this.surveyClient.getCampaignDefinitions(),
              t = [];
            for (var A in e)
              if (Object.prototype.hasOwnProperty.call(e, A)) {
                var n = e[A];
                t.push(n.campaignId);
              }
            return t;
          }),
          (e.prototype.updateActivityListenerWithCurrentSurveyDefinitions =
            function () {
              for (
                var e = [], t = 0, A = this.getCurrentSurveyDefinitions();
                t < A.length;
                t++
              ) {
                var n = A[t].getSurveyInfo(),
                  r = new f.ActivityTrackingContract(
                    n.getId(),
                    n.getActivationEvent().getTrackingSet()
                  );
                e.push(r);
              }
              this.activityListener.SetActivityTrackingContracts(
                e,
                this.previousSurveyEventActivityStats
              );
            }),
          (e.prototype.shouldAcceptActivity = function (e) {
            return (
              3 === this.initializationStatus ||
              e === d.FloodgateStartActivityName
            );
          }),
          (e.prototype.onSurveyActivated = function (t) {
            for (
              var A, n = 0, r = this.getCurrentSurveyDefinitions();
              n < r.length;
              n++
            ) {
              var i = r[n];
              if (i.getSurveyInfo().getId() === t) {
                A = i;
                break;
              }
            }
            if (B.isNOU(A))
              e.getTelemetryLogger().log_Error(
                a.TelemetryEvent.FloodgateEngine.OnSurveyActivated
                  .SurveyNotDefined,
                "Survey is not defined in the current survey definitions."
              );
            else {
              var o = A.getSurveyInfo()
                  .getActivationEvent()
                  .getTrackingSet()
                  .getActivityTrackingInfo(),
                s = this.getAdditionalSurveyInfoForTelemetry(
                  A,
                  this.getAllCampaignDefinitionIDs(),
                  this.getAllCandidateCampaignDefinitionIDs()
                );
              e.telemetryLogger.log_TriggerMet(
                A.getSurveyInfo().getBackEndId(),
                A.getSurveyInfo().getId(),
                A.getType(),
                o,
                JSON.stringify(s)
              );
              var c = !1,
                l = A.getSurveyInfo().getGovernedChannelType();
              if (this.candidateSurveys[A.getSurveyInfo().getId()])
                if (A.getSurveyInfo().isActiveForDate(new Date())) {
                  if (
                    (this.governor.refreshChannelData(),
                    this.governor.isChannelOpen(l))
                  )
                    this.surveyActivationStatsProvider
                      .load()
                      .getBySurveyId(A.getSurveyInfo().getId())
                      ? e
                          .getTelemetryLogger()
                          .log_Event(
                            a.TelemetryEvent.FloodgateEngine.OnSurveyActivated
                              .ActivationStatsSuppressedSurvey,
                            {
                              CampaignId: A.getSurveyInfo().getBackEndId(),
                              SurveyId: A.getSurveyInfo().getId(),
                            }
                          )
                      : 0 === Object.keys(this.launchedSurveys).length &&
                        ((this.launchedSurveys[A.getSurveyInfo().getId()] = A),
                        (c = !0));
                  else
                    e.getTelemetryLogger().log_Event(
                      a.TelemetryEvent.FloodgateEngine.OnSurveyActivated
                        .ClosedChannelType,
                      { ClosedChannelType: u.GovernedChannelType[l] }
                    );
                } else;
              else;
              this.mergeAndSave(),
                this.activityListener.clearSurveys(),
                c &&
                  (this.governor.startChannelCooldown(l),
                  this.surveyClient.onSurveyActivated(A.getSurveyInfo()),
                  this.launchLauncher(A));
            }
          }),
          (e.prototype.readString = function (e) {
            return this.storage.read(e);
          }),
          (e.prototype.writeString = function (e, t) {
            this.storage.write(e, t);
          }),
          (e.prototype.launchLauncher = function (e) {
            var t = this.launcherFactory.makeSurveyLauncher(e);
            t &&
              (this.launchedLaunchers.push(t),
              this.onSurveyActivatedCallback.onSurveyActivated(t, e));
          }),
          (e.telemetryLogger = new m()),
          e
        );
      })();
    t.FloodgateEngine = C;
  },
  function (e, t, A) {
    "use strict";
    var n;
    !(function (e) {
      (e.DOM_PROMPT_TAGNAME = "Prompt"),
        (e.DOM_COMMENT_TAGNAME = "Comment"),
        (e.DOM_RATING_TAGNAME = "Rating"),
        (e.DOM_MULTIPLECHOICE_TAGNAME = "MultipleChoice"),
        (e.DOM_INTERCEPT_TAGNAME = "Intercept"),
        (e.JSON_INTERCEPT_KEYNAME = "intercept"),
        (e.JSON_INTERCEPTURL_KEYNAME = "url"),
        (e.JSON_PROMPT_KEYNAME = "prompt"),
        (e.JSON_PROMPTYESTEXT_KEYNAME = "yesButtonText"),
        (e.JSON_PROMPTNOTEXT_KEYNAME = "noButtonText"),
        (e.JSON_COMMENT_KEYNAME = "comment"),
        (e.JSON_RATING_KEYNAME = "rating"),
        (e.JSON_RATINGOPTIONS_KEYNAME = "options"),
        (e.JSON_TITLE_KEYNAME = "title"),
        (e.JSON_QUESTION_KEYNAME = "question"),
        (e.JSON_MULTIPLECHOICE_KEYNAME = "multipleChoice"),
        (e.JSON_APPLICATION_KEYNAME = "application"),
        (e.JSON_EXTENDEDMANIFESTDATA_KEYNAME = "extendedManifestData"),
        (e.JSON_SURVEYSTRINGS_KEYNAME = "surveyStrings"),
        (e.JSON_SURVEYSPECIFICDATA_KEYNAME = "surveySpecificData");
    })(n || (n = {})),
      (e.exports = n);
  },
  function (e, t, A) {
    "use strict";
    var n,
      r =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var A in t) t.hasOwnProperty(A) && (e[A] = t[A]);
            })(e, t);
        }),
        function (e, t) {
          function A() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((A.prototype = t.prototype), new A()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.FileSystemCampaignDefinitionProvider =
        t.FilterValidCampaignDefinitions =
        t.CampaignDefinition =
        t.CampaignSurveyTemplateIntercept =
        t.CampaignSurveyTemplateGenericMessagingSurface =
        t.CampaignSurveyTemplateNps11PointStatic =
        t.CampaignSurveyTemplateNps5PointStatic =
        t.CampaignSurveyTemplateNps =
        t.CampaignSurveyTemplateNlqs =
        t.CampaignSurveyTemplateFps =
        t.CampaignSurveyTemplate =
        t.CampaignSurveyMetadata =
        t.CampaignSurveyContentComment =
        t.CampaignSurveyContentRating =
        t.CampaignSurveyContentIntercept =
        t.CampaignSurveyContentPrompt =
        t.CampaignSurveyContentMultipleChoice =
        t.CampaignSurveyContent =
        t.CampaignSurveyEventCountedActivitySequence =
        t.CampaignSurveyEventCountedActivity =
        t.CampaignSurveyEvent =
        t.CampaignNominationSchemeRatioPercentage =
        t.CampaignNominationScheme =
        t.CampaignDistributionRamp =
        t.CampaignDistribution =
        t.CampaignAdditionalDataRequested =
        t.CampaignDurationSingleBuildChange =
        t.CampaignDurationTimeInterval =
        t.CampaignDuration =
        t.CampaignScopeUserFactAll =
        t.CampaignScopeUserFactAny =
        t.CampaignScopeEnvironmentCrossProduct =
        t.CampaignScopeAny =
        t.CampaignScope =
        t.CampaignLanguageRangeLanguageSubtag =
        t.CampaignLanguageRange =
          void 0);
    var i = A(13),
      o = A(17),
      a = A(20),
      s = A(11),
      u = A(71),
      c = s.getDistantFuture,
      l = s.isBoolean,
      d = s.isNOU,
      g = s.isNumber,
      p = s.isString,
      h = s.isUtcDatetimeString,
      f = s.stringToDate,
      B = (function () {
        function e() {}
        return (
          (e.deserialize = function (e) {
            var t;
            return (
              e && 0 === e.Type && (t = m.deserialize(e)),
              void 0 === t ? null : t
            );
          }),
          (e.prototype.validate = function () {
            return !0;
          }),
          e
        );
      })();
    t.CampaignLanguageRange = B;
    var m = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return e && (A.languageSubTag = e.Value), A.validate() ? A : null;
        }),
        (t.prototype.isInRange = function (e) {
          if (d(e)) return !1;
          var t = s.extractLanguageSubtag(e);
          return (
            !d(t) &&
            t.toLocaleUpperCase() === this.languageSubTag.toLocaleUpperCase()
          );
        }),
        (t.prototype.validate = function () {
          return (
            !!e.prototype.validate.call(this) &&
            !(d(this.languageSubTag) || !p(this.languageSubTag)) &&
            !!s.isValidLanguageSubTag(this.languageSubTag)
          );
        }),
        t
      );
    })(B);
    t.CampaignLanguageRangeLanguageSubtag = m;
    var v = (function () {
      function e() {}
      return (
        (e.deserialize = function (e) {
          var t;
          if (d(e)) return null;
          switch (e.Type) {
            case 0:
              t = C.deserialize(e);
              break;
            case 1:
              t = w.deserialize(e);
              break;
            case 2:
              t = y.deserialize(e);
              break;
            case 3:
              t = E.deserialize(e);
          }
          return void 0 === t ? null : t;
        }),
        (e.prototype.validate = function () {
          return !0;
        }),
        e
      );
    })();
    t.CampaignScope = v;
    var C = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          return new t();
        }),
        (t.prototype.isInScope = function () {
          return !0;
        }),
        (t.prototype.validate = function () {
          return !!e.prototype.validate.call(this);
        }),
        t
      );
    })(v);
    t.CampaignScopeAny = C;
    var w = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t(),
            n = [];
          if (d(e)) return null;
          for (var r in e.Languages)
            if (e.Languages.hasOwnProperty(r)) {
              var i = e.Languages[r];
              i && n.push(B.deserialize(i));
            }
          return (
            0 === n.length && (n = null),
            (A.languageRanges = n),
            A.validate() ? A : null
          );
        }),
        (t.prototype.setEnvironmentProvider = function (e) {
          this.environmentProvider = e;
        }),
        (t.prototype.isInScope = function () {
          if (d(this.languageRanges)) return !0;
          if (
            d(this.environmentProvider) ||
            !this.environmentProvider.getLanguage()
          )
            return !1;
          var e = this.environmentProvider.getLanguage();
          for (var t in this.languageRanges) {
            if (this.languageRanges.hasOwnProperty(t))
              if (this.languageRanges[t].isInRange(e)) return !0;
          }
          return !1;
        }),
        (t.prototype.validate = function () {
          if (!e.prototype.validate.call(this)) return !1;
          if (this.languageRanges)
            for (var t in this.languageRanges)
              if (
                this.languageRanges.hasOwnProperty(t) &&
                !this.languageRanges[t]
              )
                return !1;
          return !0;
        }),
        t
      );
    })(v);
    t.CampaignScopeEnvironmentCrossProduct = w;
    var y = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return (
            (A.userFacts = u.deserializeUserFacts(e)), A.validate() ? A : null
          );
        }),
        (t.prototype.setUserFactsProvider = function (e) {
          this.userFactsProvider = e;
        }),
        (t.prototype.isInScope = function () {
          var e = this;
          return (
            !!d(this.userFacts) ||
            (!!this.userFactsProvider &&
              this.userFacts.some(function (t) {
                var A = e.userFactsProvider.getUserFact(t.getName());
                return t.isAMatch(A);
              }))
          );
        }),
        (t.prototype.validate = function () {
          return (
            !!e.prototype.validate.call(this) &&
            u.validateUserFacts(this.userFacts)
          );
        }),
        t
      );
    })(v);
    t.CampaignScopeUserFactAny = y;
    var E = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return (
            (A.userFacts = u.deserializeUserFacts(e)), A.validate() ? A : null
          );
        }),
        (t.prototype.setUserFactsProvider = function (e) {
          this.userFactsProvider = e;
        }),
        (t.prototype.isInScope = function () {
          var e = this;
          return (
            !!d(this.userFacts) ||
            (!!this.userFactsProvider &&
              this.userFacts.every(function (t) {
                var A = e.userFactsProvider.getUserFact(t.getName());
                return t.isAMatch(A);
              }))
          );
        }),
        (t.prototype.validate = function () {
          return (
            !!e.prototype.validate.call(this) &&
            u.validateUserFacts(this.userFacts)
          );
        }),
        t
      );
    })(v);
    t.CampaignScopeUserFactAll = E;
    var F = (function () {
      function e() {}
      return (
        (e.deserialize = function (e) {
          var t;
          if (d(e)) return null;
          switch (e.Type) {
            case 0:
              t = U.deserialize(e);
              break;
            case 1:
              t = S.deserialize(e);
          }
          return void 0 === t ? null : t;
        }),
        (e.prototype.validate = function () {
          return !0;
        }),
        e
      );
    })();
    t.CampaignDuration = F;
    var U = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return (
            e && (A.intervalSeconds = e.IntervalSeconds),
            A.validate() ? A : null
          );
        }),
        (t.prototype.asTimeIntervalSeconds = function () {
          return this.intervalSeconds;
        }),
        (t.prototype.validate = function () {
          return !!e.prototype.validate.call(this) && !!g(this.intervalSeconds);
        }),
        t
      );
    })(F);
    t.CampaignDurationTimeInterval = U;
    var S = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          return new t();
        }),
        (t.prototype.asTimeIntervalSeconds = function () {
          return null;
        }),
        t
      );
    })(F);
    t.CampaignDurationSingleBuildChange = S;
    var Q = (function () {
      function e() {}
      return (
        (e.deserialize = function (t) {
          var A = new e();
          if (!d(t)) {
            A.additionalData = [];
            for (var n = 0, r = t; n < r.length; n++) {
              "EmailAddress" === r[n] && A.additionalData.push(0);
            }
          }
          return A.validate() ? A : null;
        }),
        (e.prototype.validate = function () {
          return !d(this.additionalData);
        }),
        e
      );
    })();
    t.CampaignAdditionalDataRequested = Q;
    var T = (function () {
      function e() {}
      return (
        (e.deserialize = function (e) {
          var t;
          return (
            e && 0 === e.Type && (t = b.deserialize(e)), void 0 === t ? null : t
          );
        }),
        (e.prototype.validate = function () {
          return !0;
        }),
        e
      );
    })();
    t.CampaignDistribution = T;
    var b = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return (
            e &&
              ((A.maxDelaySeconds = e.MaxDelaySeconds), (A.chunks = e.Chunks)),
            A.validate() ? A : null
          );
        }),
        (t.prototype.validate = function () {
          return (
            !!e.prototype.validate.call(this) &&
            !(!g(this.maxDelaySeconds) || this.maxDelaySeconds < 0) &&
            !(!g(this.chunks) || this.chunks < 0)
          );
        }),
        t
      );
    })(T);
    t.CampaignDistributionRamp = b;
    var I = (function () {
      function e() {}
      return (
        (e.deserialize = function (e) {
          var t;
          return (
            e && 0 === e.Type && (t = N.deserialize(e)), void 0 === t ? null : t
          );
        }),
        (e.prototype.getActiveSurveyTimeIntervalSeconds = function () {
          var e = this.nominationPeriod.asTimeIntervalSeconds();
          return g(e) ? e : this.fallbackSurveyDurationSeconds;
        }),
        (e.prototype.calculateSurveyStartTimeFromDate = function (e) {
          return e || new Date();
        }),
        (e.prototype.calculateSurveyExpirationTimeFromSurveyStartTime =
          function (e) {
            return (
              (e = e || new Date()),
              s.addSecondsWithoutOverflow(
                e,
                this.getActiveSurveyTimeIntervalSeconds()
              )
            );
          }),
        (e.prototype.getCampaignCooldown = function (e) {
          return e ? this.cooldownPeriod : this.nominationPeriod;
        }),
        (e.prototype.validate = function () {
          return (
            !d(this.nominationPeriod) &&
            (d(this.cooldownPeriod) &&
              (this.cooldownPeriod = this.nominationPeriod),
            !(
              !g(this.nominationPeriod.asTimeIntervalSeconds()) &&
              (!g(this.fallbackSurveyDurationSeconds) ||
                this.fallbackSurveyDurationSeconds <= 0)
            ))
          );
        }),
        e
      );
    })();
    t.CampaignNominationScheme = I;
    var N = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return d(e)
            ? null
            : (e.DistributionModel &&
                (A.distributionModel = T.deserialize(e.DistributionModel)),
              e.CooldownPeriod &&
                (A.cooldownPeriod = F.deserialize(e.CooldownPeriod)),
              e.NominationPeriod &&
                (A.nominationPeriod = F.deserialize(e.NominationPeriod)),
              (A.fallbackSurveyDurationSeconds =
                e.FallbackSurveyDurationSeconds),
              (A.percentageDenominator = e.PercentageDenominator),
              (A.percentageNumerator = e.PercentageNumerator),
              A.validate() ? A : null);
        }),
        (t.prototype.evaluateNominationRules = function () {
          var e = Math.random();
          return (
            Math.floor(e * this.percentageDenominator) <
            this.percentageNumerator
          );
        }),
        (t.prototype.validate = function () {
          return (
            !!e.prototype.validate.call(this) &&
            !(!g(this.percentageDenominator) || !g(this.percentageNumerator)) &&
            !(
              this.percentageDenominator <= 0 || this.percentageNumerator < 0
            ) &&
            !(this.percentageNumerator > this.percentageDenominator)
          );
        }),
        t
      );
    })(I);
    t.CampaignNominationSchemeRatioPercentage = N;
    var H = (function () {
      function e() {}
      return (
        (e.deserialize = function (e) {
          var t;
          if (d(e)) return null;
          switch (e.Type) {
            case 0:
              t = _.deserialize(e);
              break;
            case 1:
              t = O.deserialize(e);
          }
          return void 0 === t ? null : t;
        }),
        (e.prototype.validate = function () {
          return !0;
        }),
        e
      );
    })();
    t.CampaignSurveyEvent = H;
    var _ = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return d(e)
            ? null
            : ((A.activity = e.Activity),
              (A.count = e.Count),
              (A.isAggregate = e.IsAggregate),
              A.validate() ? A : null);
        }),
        (t.prototype.validate = function () {
          return (
            !!e.prototype.validate.call(this) &&
            !(d(this.activity) || !p(this.activity)) &&
            !(!g(this.count) || this.count <= 0) &&
            !!l(this.isAggregate)
          );
        }),
        t
      );
    })(H);
    t.CampaignSurveyEventCountedActivity = _;
    var O = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t(),
            n = [];
          if (d(e)) return null;
          for (var r in e.Sequence)
            if (e.Sequence.hasOwnProperty(r)) {
              var i = e.Sequence[r];
              i && n.push(_.deserialize(i));
            }
          return (
            0 === n.length && (n = null),
            (A.sequence = n),
            A.validate() ? A : null
          );
        }),
        (t.prototype.validate = function () {
          if (!e.prototype.validate.call(this)) return !1;
          if (d(this.sequence)) return !1;
          for (var t in this.sequence)
            if (this.sequence.hasOwnProperty(t) && !this.sequence[t]) return !1;
          return !0;
        }),
        t
      );
    })(H);
    t.CampaignSurveyEventCountedActivitySequence = O;
    var D = (function () {
      function e() {}
      return (
        (e.deserialize = function (t, A) {
          var n = new e();
          return d(t)
            ? null
            : ((n.prompt = R.deserialize(t.Prompt)),
              (n.rating = K.deserialize(t.Rating)),
              (n.comment = P.deserialize(t.Question)),
              (n.multipleChoice = L.deserialize(t.MultipleChoice)),
              (n.intercept = M.deserialize(t.Intercept)),
              n.validate(A) ? n : null);
        }),
        (e.prototype.validate = function (e) {
          return (
            !d(this.intercept) ||
            (!d(this.prompt) &&
              (e
                ? !d(this.rating) || !d(this.multipleChoice) || !d(this.comment)
                : !d(this.rating) && !d(this.comment)))
          );
        }),
        e
      );
    })();
    t.CampaignSurveyContent = D;
    var L = (function () {
      function e() {}
      return (
        (e.deserialize = function (t) {
          var A = new e();
          return d(t)
            ? null
            : ((A.question = t.Question),
              (A.availableOptions = t.AvailableOptions),
              (A.minNumberOfSelectedOptions = t.MinNumberOfSelectedOptions),
              (A.maxNumberOfSelectedOptions = t.MaxNumberOfSelectedOptions),
              A.validate() ? A : null);
        }),
        (e.prototype.validate = function () {
          if (
            d(this.question) ||
            !p(this.question) ||
            d(this.availableOptions) ||
            !Array.isArray(this.availableOptions) ||
            this.availableOptions.length < 2 ||
            d(this.minNumberOfSelectedOptions) ||
            !g(this.minNumberOfSelectedOptions) ||
            d(this.maxNumberOfSelectedOptions) ||
            !g(this.maxNumberOfSelectedOptions)
          )
            return !1;
          for (var e in this.availableOptions)
            if (
              this.availableOptions.hasOwnProperty(e) &&
              !p(this.availableOptions[e])
            )
              return !1;
          return !0;
        }),
        e
      );
    })();
    t.CampaignSurveyContentMultipleChoice = L;
    var R = (function () {
      function e() {}
      return (
        (e.deserialize = function (t) {
          var A = new e();
          return d(t)
            ? null
            : ((A.title = t.Title),
              (A.question = t.Question),
              (A.yesLabel = t.YesLabel),
              (A.noLabel = t.NoLabel),
              A.validate() ? A : null);
        }),
        (e.prototype.validate = function () {
          return !(
            d(this.title) ||
            !p(this.title) ||
            d(this.question) ||
            !p(this.question) ||
            d(this.yesLabel) ||
            !p(this.yesLabel) ||
            d(this.noLabel) ||
            !p(this.noLabel)
          );
        }),
        e
      );
    })();
    t.CampaignSurveyContentPrompt = R;
    var M = (function () {
      function e() {}
      return (
        (e.deserialize = function (t) {
          var A = new e();
          return d(t)
            ? null
            : ((A.title = t.Title),
              (A.question = t.Question),
              (A.url = t.Url),
              A.validate() ? A : null);
        }),
        (e.prototype.validate = function () {
          return !(
            d(this.title) ||
            !p(this.title) ||
            d(this.question) ||
            !p(this.question) ||
            d(this.url) ||
            !p(this.url)
          );
        }),
        e
      );
    })();
    t.CampaignSurveyContentIntercept = M;
    var K = (function () {
      function e() {}
      return (
        (e.deserialize = function (t) {
          var A = new e();
          return d(t)
            ? null
            : ((A.isZeroBased = t.IsZeroBased),
              (A.question = t.Question),
              (A.ratingValuesAscending = t.RatingValuesAscending),
              A.validate() ? A : null);
        }),
        (e.prototype.validate = function () {
          if (
            d(this.question) ||
            !p(this.question) ||
            d(this.ratingValuesAscending) ||
            !Array.isArray(this.ratingValuesAscending) ||
            this.ratingValuesAscending.length < 2 ||
            this.ratingValuesAscending.length > 11
          )
            return !1;
          if (d(this.isZeroBased)) this.isZeroBased = !1;
          else if (!l(this.isZeroBased)) return !1;
          for (var e in this.ratingValuesAscending)
            if (
              this.ratingValuesAscending.hasOwnProperty(e) &&
              !p(this.ratingValuesAscending[e])
            )
              return !1;
          return !0;
        }),
        e
      );
    })();
    t.CampaignSurveyContentRating = K;
    var P = (function () {
      function e() {}
      return (
        (e.deserialize = function (t) {
          var A = new e();
          return d(t)
            ? null
            : ((A.question = t.Question), A.validate() ? A : null);
        }),
        (e.prototype.validate = function () {
          return !(d(this.question) || !p(this.question));
        }),
        e
      );
    })();
    t.CampaignSurveyContentComment = P;
    var x = (function () {
      function e() {}
      return (
        (e.deserialize = function (t) {
          if (d(t)) return null;
          var A = new e();
          return (
            (A.contentMetadata = t.ContentMetadata), A.validate() ? A : null
          );
        }),
        (e.prototype.validate = function () {
          return !(
            d(this.contentMetadata) || !s.isObject(this.contentMetadata)
          );
        }),
        e
      );
    })();
    t.CampaignSurveyMetadata = x;
    var k = (function () {
      function e() {}
      return (
        (e.deserialize = function (e) {
          var t;
          if (d(e)) return null;
          switch (e.Type) {
            case 0:
              t = J.deserialize(e);
              break;
            case 1:
              t = X.deserialize(e);
              break;
            case 2:
              t = V.deserialize(e);
              break;
            case 3:
              t = G.deserialize(e);
              break;
            case 4:
              t = z.deserialize(e);
              break;
            case 22:
              t = W.deserialize(e);
              break;
            case 5:
              t = Y.deserialize(e);
          }
          return void 0 === t ? null : t;
        }),
        (e.prototype.validate = function () {
          return !d(this.activationEvent);
        }),
        e
      );
    })();
    t.CampaignSurveyTemplate = k;
    var V = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return d(e)
            ? null
            : ((A.activationEvent = H.deserialize(e.ActivationEvent)),
              (A.content = D.deserialize(e.Content, !0)),
              A.validate() ? A : null);
        }),
        (t.prototype.validate = function () {
          return !(!e.prototype.validate.call(this) || d(this.content));
        }),
        t
      );
    })(k);
    t.CampaignSurveyTemplateFps = V;
    var G = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return d(e)
            ? null
            : ((A.activationEvent = H.deserialize(e.ActivationEvent)),
              (A.content = D.deserialize(e.Content)),
              A.validate() ? A : null);
        }),
        (t.prototype.validate = function () {
          return !(!e.prototype.validate.call(this) || d(this.content));
        }),
        t
      );
    })(k);
    t.CampaignSurveyTemplateNlqs = G;
    var z = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return d(e)
            ? null
            : ((A.activationEvent = H.deserialize(e.ActivationEvent)),
              (A.content = D.deserialize(e.Content)),
              A.validate() ? A : null);
        }),
        (t.prototype.validate = function () {
          return !(!e.prototype.validate.call(this) || d(this.content));
        }),
        t
      );
    })(k);
    t.CampaignSurveyTemplateNps = z;
    var J = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return d(e)
            ? null
            : ((A.activationEvent = H.deserialize(e.ActivationEvent)),
              A.validate() ? A : null);
        }),
        (t.prototype.validate = function () {
          return !!e.prototype.validate.call(this);
        }),
        t
      );
    })(k);
    t.CampaignSurveyTemplateNps5PointStatic = J;
    var X = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return d(e)
            ? null
            : ((A.activationEvent = H.deserialize(e.ActivationEvent)),
              A.validate() ? A : null);
        }),
        (t.prototype.validate = function () {
          return !!e.prototype.validate.call(this);
        }),
        t
      );
    })(k);
    t.CampaignSurveyTemplateNps11PointStatic = X;
    var W = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          if (d(e)) return null;
          var A = new t();
          return (
            (A.activationEvent = H.deserialize(e.ActivationEvent)),
            (A.metadata = x.deserialize(e.Metadata)),
            A.validate() ? A : null
          );
        }),
        (t.prototype.validate = function () {
          return !(!e.prototype.validate.call(this) || d(this.metadata));
        }),
        t
      );
    })(k);
    t.CampaignSurveyTemplateGenericMessagingSurface = W;
    var Y = (function (e) {
      function t() {
        return e.call(this) || this;
      }
      return (
        r(t, e),
        (t.deserialize = function (e) {
          var A = new t();
          return d(e)
            ? null
            : ((A.activationEvent = H.deserialize(e.ActivationEvent)),
              (A.content = D.deserialize(e.Content)),
              A.validate() ? A : null);
        }),
        (t.prototype.validate = function () {
          return !(!e.prototype.validate.call(this) || d(this.content));
        }),
        t
      );
    })(k);
    t.CampaignSurveyTemplateIntercept = Y;
    var j = (function () {
      function e() {}
      return (
        (e.deserialize = function (t) {
          var A = new e();
          if (d(t)) return null;
          (A.campaignId = t.CampaignId),
            (A.governedChannelType = t.GovernedChannelType),
            (A.startTime = t.StartTimeUtc),
            (A.endTime = t.EndTimeUtc),
            (A.launcherType = t.LauncherType);
          var n = Q.deserialize(t.AdditionalDataRequested);
          return (
            (A.additionalDataRequested = n ? n.additionalData : []),
            t.SurveyTemplate &&
              (A.surveyTemplate = k.deserialize(t.SurveyTemplate)),
            t.NominationScheme &&
              (A.nominationScheme = I.deserialize(t.NominationScheme)),
            t.Scope && (A.scope = v.deserialize(t.Scope)),
            A.validate() ? A : null
          );
        }),
        (e.prototype.validate = function () {
          if (
            (d(this.scope) && (this.scope = new C()),
            d(this.campaignId) || !p(this.campaignId))
          )
            return !1;
          if (
            !g(this.governedChannelType) ||
            !s.isEnumValue(this.governedChannelType, a.GovernedChannelType)
          )
            return !1;
          if (d(this.nominationScheme)) return !1;
          if (d(this.surveyTemplate)) return !1;
          if (!d(this.launcherType) && !p(this.launcherType)) return !1;
          if (d(this.startTime)) this.startTime = c();
          else {
            if (!h(this.startTime)) return !1;
            this.startTime = f(this.startTime);
          }
          if (d(this.endTime)) this.endTime = c();
          else {
            if (!h(this.endTime)) return !1;
            this.endTime = f(this.endTime);
          }
          return !0;
        }),
        e
      );
    })();
    function q(e) {
      var t = [];
      if (d(e)) return { result: t, error: "Empty" };
      if (!Array.isArray(e)) return { result: t, error: "Not an array" };
      for (var A = [], n = 0; n < e.length; n++) {
        var r = e[n];
        if (r) {
          var i = j.deserialize(r);
          i ? t.push(i) : A.push(n);
        } else A.push(n);
      }
      return {
        result: t,
        error:
          A.length > 0
            ? "Invalid campaign definitions at indexes: " + A.toString()
            : void 0,
      };
    }
    (t.CampaignDefinition = j), (t.FilterValidCampaignDefinitions = q);
    var Z = (function () {
      function e(e) {
        if (d(e)) throw new Error("storage must not be null");
        this.storage = e;
      }
      return (
        (e.prototype.load = function () {
          var e,
            t = this.storage.read(i.FileType.CampaignDefinitions);
          if (d(t)) return [];
          try {
            e = JSON.parse(t);
          } catch (e) {
            return (
              o.FloodgateEngine.getTelemetryLogger().log_CampaignLoad_Failed(
                e.toString()
              ),
              []
            );
          }
          return q(e).result;
        }),
        (e.prototype.loadAsync = function () {
          var e = this.load();
          return new Promise(function (t, A) {
            t(e);
          });
        }),
        e
      );
    })();
    t.FileSystemCampaignDefinitionProvider = Z;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.GovernedChannel = t.GovernedChannelType = void 0);
    var n,
      r = A(11);
    !(function (e) {
      (e[(e.Standard = 0)] = "Standard"),
        (e[(e.Urgent = 1)] = "Urgent"),
        (e[(e.Banner = 2)] = "Banner"),
        (e[(e.TeachingMessage = 3)] = "TeachingMessage");
    })(t.GovernedChannelType || (t.GovernedChannelType = {})),
      (function (e) {
        e.getDefault = function () {
          return e.Standard;
        };
      })((n = t.GovernedChannelType || (t.GovernedChannelType = {})));
    var i = (function () {
      function e(e, t, A, i) {
        if (!r.isEnumValue(e, n))
          throw new Error("type is not a valid GovernedChannelType");
        if (!t) throw new Error("name must not be null or empty");
        if (A < 0) throw new Error("cooldownSeconds must not be negative");
        (this.type = e),
          (this.name = t),
          (this.cooldownSeconds = A),
          this.setCooldownStartTime(i);
      }
      return (
        (e.prototype.setCooldownStartTime = function (e) {
          (this.cooldownStartTime = e),
            r.isNOU(this.cooldownStartTime)
              ? (this.cooldownEndTime = r.getDistantPast())
              : (this.cooldownEndTime = r.addSecondsWithoutOverflow(
                  this.cooldownStartTime,
                  this.cooldownSeconds
                ));
        }),
        (e.prototype.isOpen = function () {
          return this.isOpenAtDate(new Date());
        }),
        (e.prototype.isOpenAtDate = function (e) {
          return !!e && e > this.cooldownEndTime;
        }),
        (e.prototype.getType = function () {
          return this.type;
        }),
        (e.prototype.getName = function () {
          return this.name;
        }),
        (e.prototype.getCooldownSeconds = function () {
          return this.cooldownSeconds;
        }),
        (e.prototype.getCooldownStartTime = function () {
          return this.cooldownStartTime;
        }),
        (e.prototype.getCooldownEndTime = function () {
          return this.cooldownEndTime;
        }),
        e
      );
    })();
    t.GovernedChannel = i;
  },
  function (e, t, A) {
    "use strict";
    var n = A(16),
      r = A(20),
      i = A(38),
      o = A(11),
      a = o.getDistantFuture,
      s = o.getDistantPast,
      u = o.isNOU,
      c = o.isDate,
      l = (function () {
        function e(e) {
          if (u(e)) throw new Error("data must not be null");
          if (u(e.id) || "" === e.id)
            throw new Error("data.id must not be null or empty");
          if (
            (u(e.governedChannelType) &&
              (e.governedChannelType = r.GovernedChannelType.getDefault()),
            u(e.expirationTimeUtc) || "" === e.expirationTimeUtc)
          )
            throw new Error("data.expirationTimeUtc must not be null or empty");
          if (u(e.activationEvent))
            throw new Error("data.activationEvent must not be null");
          (u(e.backEndIdentifier) || "" === e.backEndIdentifier) &&
            (e.backEndIdentifier = e.id),
            u(e.launcherType) && (e.launcherType = n.LAUNCHER_TYPE_DEFAULT),
            (this.data = e);
        }
        return (
          (e.prototype.getId = function () {
            return this.data.id;
          }),
          (e.prototype.getBackEndId = function () {
            return this.data.backEndIdentifier;
          }),
          (e.prototype.getGovernedChannelType = function () {
            return this.data.governedChannelType;
          }),
          (e.prototype.getRawStartTimeUtc = function () {
            return this.data.startTimeUtc;
          }),
          (e.prototype.getStartTimeUtc = function () {
            if (u(this.data.startTimeUtc)) return s();
            var e = new Date(this.data.startTimeUtc);
            return c(e) ? e : a();
          }),
          (e.prototype.getExpirationTimeUtc = function () {
            if (u(this.data.expirationTimeUtc)) return s();
            var e = new Date(this.data.expirationTimeUtc);
            return c(e) ? e : s();
          }),
          (e.prototype.getRawExpirationTimeUtc = function () {
            return this.data.expirationTimeUtc;
          }),
          (e.prototype.isActiveForDate = function (e) {
            return (
              !u(e) &&
              e >= this.getStartTimeUtc() &&
              e <= this.getExpirationTimeUtc()
            );
          }),
          (e.prototype.getActivationEvent = function () {
            return this.data.activationEvent;
          }),
          (e.prototype.getPreferredLaunchType = function () {
            return this.data.preferredLaunchType;
          }),
          (e.prototype.isAdditionalDataRequested = function (e) {
            if (u(this.data.additionalDataRequested)) return !1;
            for (
              var t = 0, A = this.data.additionalDataRequested;
              t < A.length;
              t++
            ) {
              if (A[t] === e) return !0;
            }
            return !1;
          }),
          (e.prototype.getLauncherType = function () {
            return this.data.launcherType;
          }),
          (e.prototype.getMetadata = function () {
            return this.data.metadata;
          }),
          (e.prototype.getDomElements = function (e) {
            if (!e) throw new Error("Document must not be null");
            var t = e.createElement(i.DOM_TYPE_TAGNAME);
            t.appendChild(e.createTextNode(i.DOM_TYPE_VALUE));
            var A = e.createElement(i.DOM_ID_TAGNAME);
            return A.appendChild(e.createTextNode(this.getBackEndId())), [t, A];
          }),
          (e.prototype.getJsonElements = function () {
            var e = {};
            e[i.JSON_ID_KEYNAME] = this.getBackEndId();
            var t = {};
            return (t[i.JSON_SURVEY_KEYNAME] = e), t;
          }),
          e
        );
      })();
    !(function (e) {
      var t = function () {
        this.preferredLaunchType = "Default";
      };
      e.SurveyDataSourceData = t;
    })(l || (l = {})),
      (e.exports = l);
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return i;
    });
    var n = A(6),
      r = A(46);
    function i(e, t) {
      return r(e || document.body, Object(n.a)({ background: "#ffffff" }, t));
    }
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return d;
    });
    var n = A(6),
      r = A(5),
      i = A(2),
      o = A(1);
    function a(e, t, A, n) {
      if (void 0 === t)
        return Promise.reject(new Error("Manifest cannot be undefined"));
      var r,
        i,
        a,
        s,
        u,
        c,
        l,
        d = new FormData();
      return (
        d.append("Manifest", t),
        A && d.append("Screenshot", A),
        n && d.append("Diagnostics", n),
        (r = "POST"),
        (i = e
          ? "https://petrol.office.microsoft.com/v1/feedback"
          : "https://petrol-int.office.microsoft.com/v1/feedback"),
        (a = d),
        (s = 2),
        (u = function (e, t, A) {
          200 !== e.status &&
            A(
              new Error(
                "Non-200 response with status code: " +
                  e.status +
                  ", response: " +
                  e.responseText
              )
            ),
            t();
        }),
        (c = function (e, t) {
          return new Promise(function (A, n) {
            var o = new XMLHttpRequest();
            o.open(r, i, !0),
              (o.timeout = t),
              (o.onload = function () {
                u(o, A, n);
              }),
              (o.ontimeout = function () {
                e > 0
                  ? c(e - 1, 2 * t).then(A, n)
                  : n(
                      new Error(
                        "Request to '" +
                          i +
                          "' timed out. timeout: " +
                          o.timeout
                      )
                    );
              }),
              (o.onerror = function () {
                e > 0
                  ? c(e - 1, t).then(A, n)
                  : n(
                      new Error(
                        "Request to '" +
                          i +
                          "' errored. " +
                          o.status +
                          " - " +
                          o.statusText +
                          " : " +
                          o.responseText
                      )
                    );
              }),
              o.send(a);
          });
        }),
        (l = o.get().getCommonInitOptions().petrolTimeout
          ? o.get().getCommonInitOptions().petrolTimeout
          : 8e3),
        c(s, l)
      );
    }
    var s = (function () {
        function e(e) {
          this.screenshot = e;
        }
        return (
          (e.prototype.getContent = function () {
            var e;
            try {
              e = this.screenshot.toDataURL("image/jpeg").split(",")[1];
            } catch (t) {
              i
                .b()
                .logEvent(
                  i.a.Shared.Screenshot.GetContent.Failed.DefaultImage.Returned
                    .VALUE,
                  2,
                  { ErrorMessage: t.toString() }
                ),
                (e =
                  "iVBORw0KGgoAAAANSUhEUgAAAN0AAAA+AQMAAACV2ox1AAAABGdBTUEAALGPC/xhBQAAAAZQTFRFAAAA////pdmf3QAAAAlwSFlzAAAOwgAADsIBFShKgAAAAjtJREFUSMfV1M1rE0EUAHDBa5r8A9vkL6giFiI0JH+Ih9KLx8TaukkJugShHgrJzYvkVPQkUqgwSePLEELaU+zBg8JKVvSQQNydlsadwCQzziRZ82ETxYMfc3gD8+MxjzcfV8T80f0vkQ8i68tAPSMSQ0PkI6QDpEPkZBHy1Wp1/zjni2lrZq2T2uikDG17A54Hr0vsvwXIl3WXt02zeIHQBSq3DxHk7VO55zIFgLLrcmaaQBGiqCwQArBVQTbNZODNBB5Ee2EEr5eGiDG4k5mcqcy+Ksh+N8K2+bRI1Z68fRMVoV+XmcFwpQJZGohpkds1WtjppGLaq51a2b8yp310UW9/H8VfRj68CIKRsWCFPCCEM419S4bSAOmPmdb3TBrQ4lmnt9n4/Hiv5fTunsOzXbJfLR2rU3Fd5ugOe9mw0lvNOCNxyDdIHkpHCv0S3a+MS0yT+4wkAKx1gBJeVxeMRhSeNZpXJfY+zqAVl+g0mCFRJMgs6oy9+MCMrWZaJJwiWFjuWcIShf+Wk2W9e59OHu21WPdsswZNLKs9wV77mJiaMVbBQ+/1jGZDofFLuOBU/jzG6OQKnkLOZ5EvwolMX2Q19TAX9MWyy/aNarewfZptechdLn8B3TatB/YXB2j4MKw3jTHKX4AO0CbqaSddMokHUbr0PpSXmFG4O4WIu86asCVihfoM6nUmse5gGkbJOyThVesX4UI0d00LBYMr55VuIZl8MkY1uOiTy9v3c+ShuXj5+NdQdL8B+5gmw8WZuREAAAAASUVORK5CYII=");
            }
            for (var t = atob(e), A = [], n = 0; n < t.length; n++)
              A.push(t.charCodeAt(n));
            return new Blob([new Uint8Array(A)], { type: "image/jpeg" });
          }),
          e
        );
      })(),
      u = A(7),
      c = (function () {
        function e(e, t, A, n, r, i, o, a) {
          this.manifestData = {
            appId: t,
            application: i,
            clientFeedbackId: r,
            manifestType: e,
            source: "Client",
            submitTime: A,
            telemetry: o,
            type: l(n),
            web: a,
          };
        }
        return (
          (e.prototype.setComment = function (e) {
            this.manifestData.comment = e;
          }),
          (e.prototype.setEmail = function (e) {
            this.manifestData.email = e;
          }),
          (e.prototype.setCategory = function (e) {
            (this.manifestData.telemetry = this.manifestData.telemetry || {}),
              (this.manifestData.telemetry.featureArea = e);
          }),
          (e.prototype.setValues = function (e) {
            if (e)
              for (var t in e)
                e.hasOwnProperty(t) &&
                  (this.manifestData.hasOwnProperty(t)
                    ? (this.manifestData[t] = r.k(e[t], this.manifestData[t]))
                    : (this.manifestData[t] = e[t]));
          }),
          (e.prototype.getContent = function () {
            return new Blob([JSON.stringify(this.manifestData)], {
              type: "application/json",
            });
          }),
          e
        );
      })();
    function l(e) {
      return "Survey" === e ? e : u.b[e];
    }
    var d = (function () {
      function e(e, t, A, i, o, a, s) {
        (this.clientFeedbackId = r.g()),
          (this.manifest = new c(
            t,
            A,
            new Date().toISOString(),
            i,
            this.clientFeedbackId,
            Object(n.a)({}, o),
            Object(n.a)({}, a),
            Object(n.a)({}, s)
          )),
          (this.environment = e);
      }
      return (
        (e.prototype.getClientFeedbackId = function () {
          return this.clientFeedbackId;
        }),
        (e.prototype.setComment = function (e) {
          this.manifest.setComment(e);
        }),
        (e.prototype.setEmail = function (e) {
          this.manifest.setEmail(e);
        }),
        (e.prototype.setCategory = function (e) {
          this.manifest.setCategory(e);
        }),
        (e.prototype.setScreenshot = function (e) {
          this.screenshot = new s(e);
        }),
        (e.prototype.getManifest = function () {
          return this.manifest;
        }),
        (e.prototype.setManifestValues = function (e) {
          this.manifest.setValues(e);
        }),
        (e.prototype.submit = function () {
          var e = this.manifest.getContent(),
            t = void 0,
            A = this.clientFeedbackId;
          return (
            this.screenshot && (t = this.screenshot.getContent()),
            a(0 === this.environment, e, t).catch(function (e) {
              o
                .get()
                .getCommonInitOptions()
                .onError(
                  "Payload submission failed: " +
                    e.message +
                    ". ClientFeedbackId: " +
                    A
                ),
                i
                  .b()
                  .logEvent(i.a.Shared.Upload.Failed.VALUE, 2, {
                    ErrorMessage: e.message,
                    ClientFeedbackId: A,
                  });
            })
          );
        }),
        e
      );
    })();
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return a;
    }),
      A.d(t, "b", function () {
        return s;
      });
    A(50);
    var n = A(1),
      r = A(8),
      i = A(2),
      o = !1;
    function a() {
      if (!o) {
        if (!r.a().OfficeBrowserFeedback.initOptions)
          throw new Error("Window.OfficeBrowserFeedback.initOptions not set");
        (r.a().OfficeBrowserFeedback.sdkVersion = "1.6.0"),
          n.get().setCommonInitOptions(r.a().OfficeBrowserFeedback.initOptions),
          i.c(
            n.get().getCommonInitOptions(),
            "OfficeFeedbackSDK",
            "1.6.0",
            n.get().getSdkSessionId(),
            n.get().getEventSampling()
          ),
          (o = !0);
      }
    }
    function s() {
      o = !1;
    }
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return l;
    }),
      A.d(t, "b", function () {
        return d;
      });
    var n = A(4),
      r = A(1),
      i = A(8),
      o = A(0);
    var a = A(22),
      s = A(28),
      u = A(46),
      c = !1;
    function l() {
      return new Promise(function (e, t) {
        if (c) e();
        else {
          var A = r.get().getCommonInitOptions();
          A || t("initOptionsCommon is null"), Object(s.b)(A.stylesUrl);
          var i = A.intlUrl + A.locale.toLowerCase() + "/" + A.intlFilename;
          Object(s.a)(i)
            .then(function () {
              n.a()
                ? (!(function (e, t) {
                    void 0 === e && (e = void 0),
                      void 0 === t && (t = void 0),
                      e || (e = "#0167B0"),
                      t || (t = "#194789");
                    var A = document.createElement("style");
                    (A.textContent =
                      "." +
                      o.c.OverallAnchor +
                      ":focus { background-color: " +
                      e +
                      " } ." +
                      o.c.OverallAnchor +
                      ":hover { background-color: " +
                      t +
                      " } ." +
                      o.c.OverallAnchorActive +
                      " { background-color: " +
                      e +
                      " } ." +
                      o.c.SpinnerCircle +
                      " { background-color: " +
                      e +
                      " } ." +
                      o.c.ChoiceGroup +
                      " input[type=radio]:checked+label>." +
                      o.c.ChoiceGroupIcon +
                      " { border-color: " +
                      e +
                      " } ." +
                      o.c.ChoiceGroup +
                      " input[type=radio]:hover+label>." +
                      o.c.ChoiceGroupIcon +
                      " { border-color: " +
                      t +
                      " } ." +
                      o.c.ChoiceGroup +
                      " input[type=radio]:checked+label>." +
                      o.c.ChoiceGroupIcon +
                      ">span { background-color: " +
                      e +
                      " } ." +
                      o.c.SubmitButton +
                      " { background-color: " +
                      e +
                      " } ." +
                      o.c.SubmitButton +
                      ":hover { background-color: " +
                      t +
                      " } ." +
                      o.c.CancelButton +
                      " { background-color: " +
                      e +
                      " } ." +
                      o.c.CancelButton +
                      ":hover { background-color: " +
                      t +
                      " } ." +
                      o.c.Link +
                      " { color: " +
                      e +
                      " } ." +
                      o.c.Link +
                      ":hover { color: " +
                      t +
                      " } ." +
                      o.c.ThanksPanelTitle +
                      " { color: " +
                      e +
                      " } #" +
                      o.d.TPromptTitle +
                      " { color: " +
                      e +
                      " } #" +
                      o.d.TFormTitle +
                      " { color: " +
                      e +
                      " } "),
                      document.body.appendChild(A);
                  })(A.primaryColour, A.secondaryColour),
                  (c = !0),
                  e())
                : t("UiStrings were not loaded from " + i);
            })
            .catch(function (e) {
              t("Script load failed for " + i + ". " + e);
            });
        }
      });
    }
    function d() {
      c = !1;
    }
    i.l(function (e) {
      n.b(e);
    }),
      i.d(a.a),
      (i.a().OfficeBrowserFeedback.html2canvas = u);
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Survey = void 0);
    var n = A(16),
      r = A(17),
      i = (function () {
        function e() {}
        return (
          (e.prototype.getCampaignId = function () {
            return this.getSurveyInfo().getBackEndId();
          }),
          (e.prototype.getLauncherType = function () {
            return this.getSurveyInfo().getLauncherType();
          }),
          (e.prototype.getClientFeedbackId = function () {
            return this.clientFeedbackId;
          }),
          (e.prototype.submit = function () {
            var e = n.Type[this.getType()],
              t = r.FloodgateEngine.getTransportFactory().makeTransporter(e);
            t.setManifestValues(this.getJsonElements()),
              (this.clientFeedbackId = t.getClientFeedbackId()),
              t.submit();
          }),
          e
        );
      })();
    t.Survey = i;
  },
  function (e, t, A) {
    "use strict";
    var n =
      (this && this.__spreadArrays) ||
      function () {
        for (var e = 0, t = 0, A = arguments.length; t < A; t++)
          e += arguments[t].length;
        var n = Array(e),
          r = 0;
        for (t = 0; t < A; t++)
          for (var i = arguments[t], o = 0, a = i.length; o < a; o++, r++)
            n[r] = i[o];
        return n;
      };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.SchemaObject = void 0);
    var r = (function () {
      function e(t) {
        e.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_SchemaObject";
        }),
        (e.getBaseTypes = function () {
          return [];
        }),
        (e.getTypeNameFor = function (e) {
          return e && e.H_ ? e.H_.T_ : void 0;
        }),
        (e.getBaseTypesFor = function (e) {
          return e && e.H_ && e.H_.B_ ? e.H_.B_ : [];
        }),
        (e.getAllTypesFor = function (t) {
          var A = e.getTypeNameFor(t);
          return A ? n([A], e.getBaseTypesFor(t)) : [];
        }),
        (e.matchesTypesFor = function (t, A) {
          if (!Array.isArray(A) || 0 === A.length) return !0;
          for (
            var n = e.getTypeNameFor(t),
              r = t && t.H_ && t.H_.B_ ? t.H_.B_ : void 0,
              i = 0,
              o = A;
            i < o.length;
            i++
          ) {
            var a = o[i];
            if (a === n) return !0;
            if (r && r.indexOf(a) >= 0) return !0;
          }
          return !1;
        }),
        (e.assign = function (e, t, A) {
          if (A)
            for (var n = 0, r = Object.keys(A); n < r.length; n++) {
              var i = r[n];
              t[i] = A[i];
            }
          return (t.H_ = e.H_), t;
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.SchemaObject = r;
  },
  function (e, t, A) {
    "use strict";
    function n(e) {
      var t = document.createElement("link");
      (t.rel = "stylesheet"), (t.type = "text/css"), (t.href = e);
      var A = document.getElementsByTagName("script")[0];
      A.parentNode.insertBefore(t, A);
    }
    function r(e, t) {
      return (
        void 0 === t && (t = window.origin),
        new Promise(function (A, n) {
          var r = document.createElement("script");
          (r.async = !0),
            r.readyState
              ? (r.onreadystatechange = function () {
                  ("loaded" !== r.readyState && "complete" !== r.readyState) ||
                    ((r.onreadystatechange = null), A());
                })
              : (r.onload = function () {
                  A();
                }),
            (r.onerror = function () {
              n();
            }),
            (r.src = e),
            t && "null" !== t && (r.crossOrigin = "anonymous");
          var i = document.getElementsByTagName("script")[0];
          i.parentNode.insertBefore(r, i);
        })
      );
    }
    A.d(t, "b", function () {
      return n;
    }),
      A.d(t, "a", function () {
        return r;
      });
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return r;
    });
    var n = A(0);
    function r(e, t) {
      if ((void 0 === e.brs && (e.brs = !0), !e.brs)) return null;
      var A;
      if (
        (e.tag || (e.tag = n.g.Div),
        e.tag === n.g.Svg && (t = !0),
        (A = t
          ? document.createElementNS("http://www.w3.org/2000/svg", e.tag)
          : document.createElement(e.tag)),
        e.attributes)
      )
        for (var i = void 0, o = 0; o < e.attributes.length; o++)
          (i = e.attributes[o]).name === n.a.xlinkHref
            ? A.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                n.a.HRef,
                i.value
              )
            : A.setAttribute(i.name, i.value);
      if ((e.id && (A.id = e.id), e.classes)) {
        var a = e.classes.join(" ");
        t ? A.setAttribute(n.a.Class, a) : (A.className = a);
      }
      if (
        (e.innerText && !t && (A.textContent = e.innerText),
        e.innerHTML && !t && (A.innerHTML = e.innerHTML),
        e.children)
      )
        for (o = 0; o < e.children.length; o++) {
          var s = e.children[o];
          if (s) {
            var u = r(s, t);
            u && A.appendChild(u);
          }
        }
      return A;
    }
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Governor = t.DEFAULT_TEACHING_MESSAGE_COOLDOWN = void 0);
    var n = A(20),
      r = A(42),
      i = A(11).isNOU;
    t.DEFAULT_TEACHING_MESSAGE_COOLDOWN = 15;
    var o = function (e, t) {
        (this.name = e), (this.cooldownSeconds = t);
      },
      a = (function () {
        function e(e) {
          if (((this.channels = []), !e))
            throw new Error("channelStateProvider must not be null");
          (this.channelStateProvider = e), this.loadChannels();
        }
        return (
          (e.GetChannelCoolDown = function (t) {
            var A = e.defaultChannelData[t];
            return A ? A.cooldownSeconds : 0;
          }),
          (e.SetDefaultChannelCoolDown = function (t, A) {
            var n = e.defaultChannelData[t];
            n && (n.cooldownSeconds = A);
          }),
          (e.prototype.refreshChannelData = function () {
            this.loadChannels();
          }),
          (e.prototype.getAvailableChannelData = function () {
            var e = [];
            for (var t in this.channels)
              if (this.channels.hasOwnProperty(t)) {
                var A = this.channels[t];
                A.isOpen() && e.push(A);
              }
            return e;
          }),
          (e.prototype.isChannelOpen = function (e) {
            if (i(e)) throw new Error("type must not be null");
            return this.channels[e].isOpen();
          }),
          (e.prototype.startChannelCooldown = function (e, t) {
            if (i(e)) throw new Error("type must not be null");
            (t = t || new Date()),
              this.channels[e].setCooldownStartTime(t),
              this.saveChannelStates();
          }),
          (e.prototype.saveChannelStates = function () {
            var e = [];
            for (var t in this.channels)
              if (this.channels.hasOwnProperty(t)) {
                var A = this.channels[t],
                  n = new r.GovernedChannelState(
                    A.getType(),
                    A.getCooldownStartTime()
                  );
                e.push(n);
              }
            this.channelStateProvider.save(e);
          }),
          (e.prototype.loadChannels = function () {
            for (var t in (this.loadChannelStatesFromProvider(),
            n.GovernedChannelType))
              if (n.GovernedChannelType.hasOwnProperty(t)) {
                var A = Number(t);
                if (isNaN(A) || this.channels[A]) continue;
                var r = e.defaultChannelData[A],
                  i = new n.GovernedChannel(A, r.name, r.cooldownSeconds, null);
                this.channels[A] = i;
              }
          }),
          (e.prototype.loadChannelStatesFromProvider = function () {
            this.channels = [];
            var t = this.channelStateProvider.load();
            for (var A in t)
              if (t.hasOwnProperty(A)) {
                var r = t[A],
                  i = r.getType(),
                  o = e.defaultChannelData[i],
                  a = new n.GovernedChannel(
                    i,
                    o.name,
                    o.cooldownSeconds,
                    r.getCooldownStartTime()
                  );
                this.channels[a.getType()] = a;
              }
          }),
          (e.minute = 60),
          (e.hour = 60 * e.minute),
          (e.day = 24 * e.hour),
          (e.defaultChannelData = [
            new o(
              n.GovernedChannelType[n.GovernedChannelType.Standard],
              14 * e.day
            ),
            new o(n.GovernedChannelType[n.GovernedChannelType.Urgent], 0),
            new o(
              n.GovernedChannelType[n.GovernedChannelType.Banner],
              15 * e.day
            ),
            new o(
              n.GovernedChannelType[n.GovernedChannelType.TeachingMessage],
              t.DEFAULT_TEACHING_MESSAGE_COOLDOWN * e.day
            ),
          ]),
          e
        );
      })();
    t.Governor = a;
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return a;
    });
    var n = A(14),
      r = A(5),
      i = A(13),
      o = r.j,
      a = (function () {
        function e(e) {
          (this.useLocalStorage = !1),
            (this.cachedItems = {}),
            this.initialize(e);
        }
        return (
          (e.prototype.setContentItem = function (e, t, A) {
            var n = this.createItem(e, t, A);
            return this.setItem(n), n;
          }),
          (e.prototype.getItemContent = function (e) {
            var t = this.getItem(e);
            return t && t.content;
          }),
          (e.prototype.has = function (e) {
            return e in this.cachedItems;
          }),
          (e.prototype.isItemExpired = function (e) {
            var t = this.getItem(e);
            return !t || !t.expiryDate || t.expiryDate < new Date();
          }),
          (e.prototype.createItem = function (e, t, A) {
            return {
              contentType: e,
              content: t,
              expiryDate: new Date(Date.now() + A),
              lastRetrievedDate: new Date(),
            };
          }),
          (e.prototype.setItem = function (e) {
            (this.cachedItems[e.contentType] = e),
              this.updateItemInLocalStorage(e);
          }),
          (e.prototype.getItem = function (e) {
            return this.cachedItems[e];
          }),
          (e.prototype.initialize = function (e) {
            (this.cachedItems = {}),
              n.a.isStorageAvailable() &&
                ((this.floodgateStorage = new n.a()),
                (this.useLocalStorage = !0),
                this.initCachedItemsFromLocalStorage(e));
          }),
          (e.prototype.initCachedItemsFromLocalStorage = function (e) {
            if (this.useLocalStorage && !o(e))
              for (var t = 0, A = e; t < A.length; t++) {
                var n = A[t],
                  r = this.floodgateStorage.read(
                    this.mapContentTypeToFloodgateProviderKey(n)
                  );
                if (!o(r)) {
                  var i = this.parseObjectFromCache(r);
                  o(i) ||
                    ((i.expiryDate =
                      "string" == typeof i.expiryDate
                        ? new Date(i.expiryDate)
                        : i.expiryDate),
                    (this.cachedItems[i.contentType] = i));
                }
              }
          }),
          (e.prototype.updateItemInLocalStorage = function (e) {
            this.useLocalStorage &&
              this.floodgateStorage.write(
                this.mapContentTypeToFloodgateProviderKey(e.contentType),
                JSON.stringify(e)
              );
          }),
          (e.prototype.parseObjectFromCache = function (e) {
            try {
              return JSON.parse(e);
            } catch (e) {
              return null;
            }
          }),
          (e.prototype.mapContentTypeToFloodgateProviderKey = function (e) {
            switch (e) {
              case "CampaignContent":
                return i.FileType.TmsCache_CampaignContent;
              case "MessageMetadata":
                return i.FileType.TmsCache_MessageMetadata;
              case "UserGovernance":
                return i.FileType.TmsCache_UserGovernance;
              case "DynamicSettings":
                return i.FileType.Tms_DynamicSettings;
              case "LogLevelSettings":
                return i.FileType.LogLevelSettings;
              case "UserFacts":
                return i.FileType.UserFacts;
              default:
                throw new Error("Unmapped ContentType in TmsCache");
            }
          }),
          e
        );
      })();
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return i;
    });
    var n = A(0),
      r = A(3),
      i = (function () {
        function e(e) {
          (this.circleObjects = []),
            (this.spinnerId = e),
            (this.spinner = document.getElementById(this.spinnerId)),
            this.createCirclesAndArrange(),
            this.initializeOpacities(),
            this.start(),
            r.l(e, !0);
        }
        return (
          (e.prototype.destroy = function () {
            r.l(this.spinnerId, !1), this.stop();
          }),
          (e.prototype.start = function () {
            var e = this;
            this.stop(),
              (this.interval = setInterval(function () {
                for (var t = e.circleObjects.length; t--; )
                  o(e.circleObjects[t]);
              }, 90));
          }),
          (e.prototype.stop = function () {
            clearInterval(this.interval);
          }),
          (e.prototype.createCirclesAndArrange = function () {
            for (var e, t = 0, A = (2 * Math.PI) / 8, n = 8; n--; ) {
              var r = s(),
                i =
                  Math.round(17 + 13.6 * Math.cos(t) - 0.5 * r.clientWidth) -
                  34 * 0.2 * 0.5,
                o =
                  Math.round(17 + 13.6 * Math.sin(t) - 0.5 * r.clientHeight) -
                  34 * 0.2 * 0.5;
              this.spinner.appendChild(r),
                (r.style.left = i + "px"),
                (r.style.top = o + "px"),
                (t += A),
                (e = { element: r, j: n }),
                this.circleObjects.push(e);
            }
          }),
          (e.prototype.initializeOpacities = function () {
            for (var e, t = 0, A = 1; t < 8; t++) {
              (e = (1 / 8) * A++), a(this.circleObjects[t].element, e);
            }
          }),
          e
        );
      })();
    function o(e) {
      var t,
        A =
          ((t = e.element),
          parseFloat(window.getComputedStyle(t).getPropertyValue("opacity")) -
            1 / 8);
      A <= 0 && (A = 1), a(e.element, A);
    }
    function a(e, t) {
      e.style.opacity = t.toString();
    }
    function s() {
      var e = document.createElement("div");
      return (
        e.classList.add(n.c.SpinnerCircle),
        (e.style.width = e.style.height = 34 * 0.2 + "px"),
        e
      );
    }
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.MergeAndUpdateSurveyActivationStats =
        t.MergeAndUpdateCampaignStates =
        t.MergeAndUpdateGovernedChannelStates =
        t.makeSettingItemValue =
        t.extractSettingItemValueSubString =
        t.ItemCollection =
          void 0);
    var n = A(40),
      r = (function () {
        function e() {
          (this.items = {}), (this.itemCount = 0);
        }
        return (
          (e.prototype.add = function (e, t) {
            this.items[e] || this.itemCount++, (this.items[e] = t);
          }),
          (e.prototype.find = function (e) {
            return this.items[e];
          }),
          (e.prototype.remove = function (e) {
            var t = this.items[e];
            return t && (delete this.items[e], this.itemCount--), t;
          }),
          (e.prototype.count = function () {
            return this.itemCount;
          }),
          e
        );
      })();
    (t.ItemCollection = r),
      (t.extractSettingItemValueSubString = function (e) {
        if (!e) return e;
        var t = e.indexOf(i) + i.length,
          A = e.indexOf(o);
        return t < 0 || A < 0 ? e : e.substring(t, A);
      }),
      (t.makeSettingItemValue = function (e) {
        return e ? i + e + o : i + o;
      }),
      (t.MergeAndUpdateGovernedChannelStates = function (e, t) {
        var A = new r();
        if (!e && !t) return A;
        if (!e) return A.add(0, t), A;
        if (!t) return A.add(0, e), A.add(1, e), A;
        var n = [],
          i = [];
        return (
          e &&
            e.forEach(function (e) {
              for (var A, r = -1, o = 0; o < t.length; o++)
                if ((A = t[o]).getType() === e.getType()) {
                  r = o;
                  break;
                }
              if (-1 === r) return n.push(e), void i.push(e);
              e.getCooldownStartTime() > A.getCooldownStartTime()
                ? (n.push(e), i.push(e))
                : n.push(A),
                t.splice(r, 1);
            }),
          t &&
            t.forEach(function (e) {
              n.push(e);
            }),
          A.add(0, n),
          i.length > 0 && A.add(1, i),
          A
        );
      }),
      (t.MergeAndUpdateCampaignStates = function (e, t) {
        var A = new r();
        if (!e && !t) return A;
        if (!e) return A.add(0, t), A;
        if (!t) return A.add(0, e), A.add(1, e), A;
        var n = [],
          i = [];
        return (
          e &&
            e.forEach(function (e) {
              for (var A, r = new Date(), o = -1, a = 0; a < t.length; a++)
                if ((A = t[a]).CampaignId === e.CampaignId) {
                  o = a;
                  break;
                }
              return -1 === o
                ? (n.push(e), void i.push(e))
                : A.LastCooldownEndTimeUtc > r
                ? (n.push(A), void t.splice(o, 1))
                : e.LastCooldownEndTimeUtc > r
                ? (n.push(e), i.push(e), void t.splice(o, 1))
                : (e.getCooldownStartDate() > A.getCooldownStartDate() ||
                  (e.getCooldownStartDate() === A.getCooldownStartDate() &&
                    e.LastNominationTimeUtc > A.LastNominationTimeUtc)
                    ? (n.push(e), i.push(e))
                    : n.push(A),
                  void t.splice(o, 1));
            }),
          t &&
            t.forEach(function (e) {
              n.push(e);
            }),
          A.add(0, n),
          i.length > 0 && A.add(1, i),
          A
        );
      }),
      (t.MergeAndUpdateSurveyActivationStats = function (e, t) {
        var A = new r();
        if (!e && !t) return A;
        if (!e) return A.add(0, t), A;
        if (!t) return A.add(0, e), A.add(1, e), A;
        var i = new n.SurveyStatCollectionActivation(),
          o = new n.SurveyStatCollectionActivation(),
          a = e.getStats(),
          s = t.getStats();
        for (var u in a)
          if (a.hasOwnProperty(u)) {
            var c = s[u];
            if (!c) {
              i.addStats(u, a[u]), o.addStats(u, a[u]);
              continue;
            }
            a[u].ActivationTimeUtc > c.ActivationTimeUtc
              ? (i.addStats(u, a[u]), o.addStats(u, a[u]))
              : i.addStats(u, s[u]),
              delete s[u];
          }
        for (var u in s) s.hasOwnProperty(u) && i.addStats(u, s[u]);
        A.add(0, i);
        var l = o.getStats();
        for (var d in l)
          if (l.hasOwnProperty(d)) {
            A.add(1, o);
            break;
          }
        return A;
      });
    var i = "<data>",
      o = "</data>";
  },
  function (e, t, A) {
    "use strict";
    var n = A(18),
      r = (function () {
        function e(e) {
          if (!e) throw new Error("data must not be null");
          if (!e.question)
            throw new Error("data.question must not be null or empty");
          (this.data = e), (this.userComment = "");
        }
        return (
          (e.make = function (t) {
            try {
              return new e(t);
            } catch (e) {
              return null;
            }
          }),
          (e.prototype.getType = function () {
            return "Comment";
          }),
          (e.prototype.getQuestion = function () {
            return this.data.question;
          }),
          (e.prototype.setSubmittedText = function (e) {
            this.userComment = e;
          }),
          (e.prototype.getSubmittedText = function () {
            return this.userComment;
          }),
          (e.prototype.getDomElements = function (e) {
            if (!e) throw new Error("Document must not be null");
            var t = e.createElement(n.DOM_COMMENT_TAGNAME);
            return (
              t.appendChild(e.createTextNode(this.getSubmittedText())), [t]
            );
          }),
          (e.prototype.getJsonElements = function () {
            var e = {};
            return (e[n.JSON_COMMENT_KEYNAME] = this.getSubmittedText()), e;
          }),
          (e.prototype.getComponentJson = function () {
            var e;
            return ((e = {})[n.JSON_QUESTION_KEYNAME] = this.getQuestion()), e;
          }),
          e
        );
      })();
    !(function (e) {
      var t = function () {};
      e.CommentComponentData = t;
    })(r || (r = {})),
      (e.exports = r);
  },
  function (e, t, A) {
    "use strict";
    var n = A(18),
      r = (function () {
        function e(e) {
          if (!e) throw new Error("data must not be null");
          if (!e.question)
            throw new Error("data.question must not be null or empty");
          if (!e.title) throw new Error("data.title must not be null or empty");
          if (!e.yesButtonLabel)
            throw new Error("data.yesButtonLabel must not be null or empty");
          if (!e.noButtonLabel)
            throw new Error("data.noButtonLabel must not be null or empty");
          (this.data = e), (this.selectedButton = 0);
        }
        return (
          (e.make = function (t) {
            try {
              return new e(t);
            } catch (e) {
              return null;
            }
          }),
          (e.prototype.getType = function () {
            return "Prompt";
          }),
          (e.prototype.getTitle = function () {
            return this.data.title;
          }),
          (e.prototype.getQuestion = function () {
            return this.data.question;
          }),
          (e.prototype.getYesButtonText = function () {
            return this.data.yesButtonLabel;
          }),
          (e.prototype.getNoButtonText = function () {
            return this.data.noButtonLabel;
          }),
          (e.prototype.setButtonSelected = function (e) {
            e && (this.selectedButton = e);
          }),
          (e.prototype.getButtonSelected = function () {
            return this.selectedButton;
          }),
          (e.prototype.getDomElements = function (e) {
            if (!e) throw new Error("Document must not be null");
            var t = e.createElement(n.DOM_PROMPT_TAGNAME);
            return (
              t.appendChild(
                e.createTextNode(
                  this.promptButtonToString(this.getButtonSelected())
                )
              ),
              [t]
            );
          }),
          (e.prototype.getJsonElements = function () {
            var e = {};
            return (
              (e[n.JSON_PROMPT_KEYNAME] = this.promptButtonToString(
                this.getButtonSelected()
              )),
              e
            );
          }),
          (e.prototype.getComponentJson = function () {
            var e;
            return (
              ((e = {})[n.JSON_TITLE_KEYNAME] = this.getTitle()),
              (e[n.JSON_QUESTION_KEYNAME] = this.getQuestion()),
              (e[n.JSON_PROMPTYESTEXT_KEYNAME] = this.getYesButtonText()),
              (e[n.JSON_PROMPTNOTEXT_KEYNAME] = this.getNoButtonText()),
              e
            );
          }),
          (e.prototype.promptButtonToString = function (e) {
            switch (e) {
              case 0:
                return "Unselected";
              case 1:
                return "Yes";
              case 2:
                return "No";
              default:
                return "Unknown";
            }
          }),
          e
        );
      })();
    !(function (e) {
      var t = function () {};
      e.PromptComponentData = t;
    })(r || (r = {})),
      (e.exports = r);
  },
  function (e, t, A) {
    "use strict";
    var n = A(18),
      r = (function () {
        function e(e) {
          if (!e) throw new Error("data must not be null");
          if (!e.question)
            throw new Error("data.question must not be null or empty");
          if (!e.ratingValuesAscending || e.ratingValuesAscending.length < 2)
            throw new Error(
              "data.ratingValuesAscending must not be null or have less than two choices"
            );
          e.ratingValuesAscending.forEach(function (e) {
            if (!e)
              throw new Error("rating values must not contain null or empty");
          }),
            (this.data = e),
            (this.selectedIndex = -1);
        }
        return (
          (e.make = function (t) {
            try {
              return new e(t);
            } catch (e) {
              return null;
            }
          }),
          (e.prototype.getType = function () {
            return "Rating";
          }),
          (e.prototype.getQuestion = function () {
            return this.data.question;
          }),
          (e.prototype.getRatingValuesAscending = function () {
            return this.data.ratingValuesAscending;
          }),
          (e.prototype.getSelectedRating = function () {
            return this.isRatingIndexValid(this.selectedIndex)
              ? this.data.ratingValuesAscending[this.selectedIndex]
              : "";
          }),
          (e.prototype.setSelectedRatingIndex = function (e) {
            this.isRatingIndexValid(e)
              ? (this.selectedIndex = e)
              : (this.selectedIndex = -1);
          }),
          (e.prototype.getSelectedRatingIndex = function () {
            return this.selectedIndex;
          }),
          (e.prototype.getDomElements = function (e) {
            if (!e) throw new Error("Document must not be null");
            var t = e.createElement(n.DOM_RATING_TAGNAME);
            return (
              this.isRatingIndexValid(this.getSelectedRatingIndex())
                ? t.appendChild(
                    e.createTextNode(this.getNormalizedRatingScore().toFixed(6))
                  )
                : t.appendChild(e.createTextNode("Not rated")),
              [t]
            );
          }),
          (e.prototype.getJsonElements = function () {
            var e = {};
            return (
              this.isRatingIndexValid(this.getSelectedRatingIndex())
                ? (e[n.JSON_RATING_KEYNAME] = this.getNormalizedRatingScore())
                : (e[n.JSON_RATING_KEYNAME] = "Not rated"),
              e
            );
          }),
          (e.prototype.getComponentJson = function () {
            var e;
            return (
              ((e = {})[n.JSON_QUESTION_KEYNAME] = this.getQuestion()),
              (e[n.JSON_RATINGOPTIONS_KEYNAME] =
                this.getRatingValuesAscending()),
              e
            );
          }),
          (e.prototype.getNormalizedRatingScore = function () {
            return this.isRatingIndexValid(this.getSelectedRatingIndex())
              ? this.data.isZeroBased
                ? this.selectedIndex /
                  (this.data.ratingValuesAscending.length - 1)
                : (this.selectedIndex + 1) /
                  this.data.ratingValuesAscending.length
              : -1;
          }),
          (e.prototype.isRatingIndexValid = function (e) {
            return e >= 0 && e < this.data.ratingValuesAscending.length;
          }),
          e
        );
      })();
    !(function (e) {
      var t = function () {};
      e.RatingComponentData = t;
    })(r || (r = {})),
      (e.exports = r);
  },
  function (e, t, A) {
    "use strict";
    var n = A(68),
      r = A(15),
      i = A(69),
      o = A(43),
      a = A(11),
      s = [],
      u = 0,
      c = {},
      l = (function () {
        function e(e, t) {
          if (!e) throw new Error("callback must not be null");
          (this.trackedActivityMap = {}),
            (this.callback = e),
            (this.loggerCallback = t);
        }
        return (
          (e.resetSessionActivity = function () {
            c = {};
          }),
          (e.prototype.logActivity = function (e, t) {
            void 0 === t && (t = 1), this.logActivity_private(e, 0, t, null);
          }),
          (e.prototype.logActivityStartTime = function (e, t) {
            this.logActivity_private(e, 1, 0, t);
          }),
          (e.prototype.logActivityStopTime = function (e, t) {
            this.logActivity_private(e, 2, 0, t);
          }),
          (e.prototype.SetActivityTrackingContracts = function (e, t) {
            void 0 === t && (t = new o.SurveyStatCollectionEventActivity());
            var A = 0;
            if (e && 0 !== e.length && t) {
              for (var a = {}, s = [], u = 0, l = e; u < l.length; u++) {
                var d = l[u],
                  g = d.trackingSet;
                if (-1 === s.indexOf(d.surveyId)) {
                  s.push(d.surveyId);
                  for (
                    var p = t.getBySurveyId(d.surveyId),
                      h = [g.getList().length],
                      f = new Array(g.getList().length),
                      B = 0,
                      m = 0,
                      v = 0,
                      C = g.getList();
                    v < C.length;
                    v++
                  ) {
                    var w = C[v];
                    if (
                      ((h[m] = 0),
                      w.getIsAggregate() &&
                        p &&
                        B < p.Counts.length &&
                        (h[m] = p.Counts[B++]),
                      c[w.getActivity()])
                    )
                      for (
                        var y = 0, E = c[w.getActivity()];
                        y < E.length;
                        y++
                      ) {
                        var F = E[y];
                        if (F.surveyId === d.surveyId) {
                          f[m] = F;
                          break;
                        }
                      }
                    m++;
                  }
                  var U = new n(g);
                  U.initCounts(h, f, !1);
                  for (
                    var S = 0, Q = U.generateActivityIndexList();
                    S < Q.length;
                    S++
                  ) {
                    var T = Q[S],
                      b = new i.IndexedTracker();
                    (b.index = T.index),
                      (b.surveyId = d.surveyId),
                      (b.tracker = U),
                      a[T.activity] || (a[T.activity] = []),
                      a[T.activity].push(b);
                  }
                } else A++;
              }
              if (A > 0) {
                var I = this.loggerCallback && this.loggerCallback();
                I &&
                  I.log_Error(
                    r.TelemetryEvent.SurveyActivity.SetActivityTrackingContracts
                      .DuplicateSurveyID,
                    "Duplicate surveyId passed in activityTrackingContracts. Duplicate count: " +
                      A
                  );
              }
              this.copyObject(this.trackedActivityMap, a);
            }
          }),
          (e.prototype.clearSurveys = function () {
            var e = this;
            Object.getOwnPropertyNames(this.trackedActivityMap).forEach(
              function (t) {
                delete e.trackedActivityMap[t];
              }
            );
          }),
          (e.prototype.saveSessionTrackingActivity = function (e) {
            c[e] = this.trackedActivityMap[e];
          }),
          (e.prototype.getCount = function (e, t) {
            var A = this.getIndexedTracker(e, t);
            return A ? A.tracker.getCount(A.index) : 0;
          }),
          (e.prototype.getSessionCount = function (e, t) {
            var A = this.getIndexedTracker(e, t);
            return A ? A.tracker.getSessionCount(A.index) : 0;
          }),
          (e.prototype.moveSessionCountIntoBaseCount = function (e, t) {
            var A = this.getIndexedTracker(e, t);
            return A ? A.tracker.moveSessionCountIntoBaseCount(A.index) : 0;
          }),
          (e.prototype.getSurveyIds = function (e) {
            if (!a.isNOU(e)) {
              var t = this.trackedActivityMap[e];
              if (t)
                return t.map(function (e) {
                  return e.surveyId;
                });
            }
          }),
          (e.prototype.setCallback = function (e) {
            this.callback = e;
          }),
          (e.prototype.getIndexedTracker = function (e, t) {
            var A = this.trackedActivityMap[e];
            if (A) {
              for (var n, r = 0, i = A; r < i.length; r++) {
                var o = i[r];
                if (o.surveyId === t) {
                  n = o;
                  break;
                }
              }
              return n;
            }
          }),
          (e.prototype.resetQueuedActivities = function () {
            s = [];
          }),
          (e.prototype.logActivity_private = function (t, A, n, i) {
            var o = this;
            if (
              (this.callback &&
                !this.callback.shouldAcceptActivity(t) &&
                (u++,
                s.length < e.MaxPendingActivitiesQueueSize &&
                  s.push({
                    activityName: t,
                    logType: A,
                    increment: n,
                    timestamp: i,
                  })),
              t === e.FloodgateStartActivityName)
            ) {
              if (u > 0) {
                var a = this.loggerCallback && this.loggerCallback();
                a &&
                  a.log_Event(
                    r.TelemetryEvent.SurveyActivity.LogActivity
                      .EventsReprocessed,
                    { Count: s.length, Dropped: u - s.length }
                  ),
                  s.map(function (e) {
                    return o.logActivity_core(
                      e.activityName,
                      e.logType,
                      e.increment,
                      e.timestamp
                    );
                  });
              }
              (u = 0), this.resetQueuedActivities();
            }
            this.logActivity_core(t, A, n, i);
          }),
          (e.prototype.logActivity_core = function (e, t, A, n) {
            var r = this.trackedActivityMap[e];
            if (r && 0 !== r.length) {
              var i = [];
              if (r.length > 1) {
                i = new Array(r.length);
                for (var o = 0; o < i.length; o++) i[o] = o;
                i = a.fyShuffle(i);
              } else i.push(0);
              for (var s = 0, u = i; s < u.length; s++) {
                var c = r[u[s]];
                switch (t) {
                  case 1:
                    c.tracker.startTime(c.index, n);
                    continue;
                  case 2:
                    A = c.tracker.stopTime(c.index, n);
                  case 0:
                    break;
                  default:
                    continue;
                }
                if (2 === c.tracker.incrementActivity(c.index, A)) {
                  this.executeCallback(c.surveyId);
                  break;
                }
              }
            }
          }),
          (e.prototype.executeCallback = function (e) {
            this.callback.run(e);
          }),
          (e.prototype.copyObject = function (e, t) {
            Object.keys(t).forEach(function (A) {
              e[A] = t[A];
            });
          }),
          (e.FloodgateStartActivityName = "FloodgateFirstStart"),
          (e.MaxPendingActivitiesQueueSize = 100),
          e
        );
      })();
    e.exports = l;
  },
  function (e, t, A) {
    "use strict";
    var n;
    !(function (e) {
      (e.DOM_TYPE_TAGNAME = "Type"),
        (e.DOM_TYPE_VALUE = "Survey"),
        (e.DOM_ID_TAGNAME = "SurveyID"),
        (e.JSON_SURVEY_KEYNAME = "survey"),
        (e.JSON_ID_KEYNAME = "surveyId");
    })(n || (n = {})),
      (e.exports = n);
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.FileBasedCampaignStateProvider =
        t.HostBasedCampaignStateProvider =
        t.CampaignStateProviderFactory =
        t.CampaignState =
          void 0);
    var n = A(13),
      r = A(15),
      i = A(17),
      o = A(33),
      a = A(11),
      s = n.FileType,
      u = a.getDistantPast,
      c = a.isBoolean,
      l = a.isDate,
      d = a.isNOU,
      g = a.isString,
      p = a.isUtcDatetimeString,
      h = a.stringToDate,
      f = (function () {
        function e(e, t, A, n, r, i, o, a, s, u, c, l) {
          if (
            ((this.CampaignId = e),
            (this.LastNominationTimeUtc = t),
            (this.LastNominationBuildNumber = A),
            (this.DeleteAfterSecondsWhenStale = n),
            (this.ForceCandidacy = r),
            (this.IsCandidate = i),
            (this.DidCandidateTriggerSurvey = o),
            (this.LastSurveyActivatedTimeUtc = a),
            (this.LastSurveyId = s),
            (this.LastSurveyStartTimeUtc = u),
            (this.LastSurveyExpirationTimeUtc = c),
            (this.LastCooldownEndTimeUtc = l),
            !this.validate())
          )
            throw new Error("Constructor arguments are not valid");
        }
        return (
          (e.deserialize = function (t) {
            var A;
            if (!t) return null;
            try {
              A = new e(
                t.CampaignId,
                t.LastNominationTimeUtc,
                t.LastNominationBuildNumber,
                t.DeleteAfterSecondsWhenStale,
                !1,
                t.IsCandidate,
                t.DidCandidateTriggerSurvey,
                t.LastSurveyActivatedTimeUtc,
                t.LastSurveyId,
                t.LastSurveyStartTimeUtc,
                t.LastSurveyExpirationTimeUtc,
                t.LastCooldownEndTimeUtc
              );
            } catch (e) {
              return (
                i.FloodgateEngine.getTelemetryLogger().log_Event(
                  r.TelemetryEvent.CampaignState.Deserialize.Failed,
                  { ErrorMessage: e.toString() }
                ),
                null
              );
            }
            return A;
          }),
          (e.prototype.validate = function () {
            if (!this.CampaignId || !g(this.CampaignId)) return !1;
            if (
              d(this.LastNominationBuildNumber) ||
              !g(this.LastNominationBuildNumber)
            )
              return !1;
            if (
              !a.isNumber(this.DeleteAfterSecondsWhenStale) ||
              this.DeleteAfterSecondsWhenStale < 0
            )
              return !1;
            if (!c(this.IsCandidate) || !c(this.DidCandidateTriggerSurvey))
              return !1;
            if (this.IsCandidate) {
              if (
                d(this.LastSurveyStartTimeUtc) ||
                d(this.LastSurveyExpirationTimeUtc)
              )
                return !1;
              if (!g(this.LastSurveyId)) return !1;
            }
            if (
              this.DidCandidateTriggerSurvey &&
              d(this.LastSurveyActivatedTimeUtc)
            )
              return !1;
            if (d(this.LastSurveyId)) this.LastSurveyId = "";
            else if (!g(this.LastSurveyId)) return !1;
            if (p(this.LastNominationTimeUtc))
              this.LastNominationTimeUtc = h(this.LastNominationTimeUtc);
            else if (!l(this.LastNominationTimeUtc)) return !1;
            if (d(this.LastSurveyActivatedTimeUtc))
              this.LastSurveyActivatedTimeUtc = u();
            else if (p(this.LastSurveyActivatedTimeUtc))
              this.LastSurveyActivatedTimeUtc = h(
                this.LastSurveyActivatedTimeUtc
              );
            else if (!l(this.LastSurveyActivatedTimeUtc)) return !1;
            if (d(this.LastSurveyStartTimeUtc))
              this.LastSurveyStartTimeUtc = u();
            else if (p(this.LastSurveyStartTimeUtc))
              this.LastSurveyStartTimeUtc = h(this.LastSurveyStartTimeUtc);
            else if (!l(this.LastSurveyStartTimeUtc)) return !1;
            if (d(this.LastSurveyExpirationTimeUtc))
              this.LastSurveyExpirationTimeUtc = u();
            else if (p(this.LastSurveyExpirationTimeUtc))
              this.LastSurveyExpirationTimeUtc = h(
                this.LastSurveyExpirationTimeUtc
              );
            else if (!l(this.LastSurveyExpirationTimeUtc)) return !1;
            if (d(this.LastCooldownEndTimeUtc))
              this.LastCooldownEndTimeUtc = u();
            else if (p(this.LastCooldownEndTimeUtc))
              this.LastCooldownEndTimeUtc = h(this.LastCooldownEndTimeUtc);
            else if (!l(this.LastCooldownEndTimeUtc)) return !1;
            return !0;
          }),
          (e.prototype.markCurrentSurveyTakenOnDate = function (e, t) {
            (this.DidCandidateTriggerSurvey = !0),
              (this.LastSurveyActivatedTimeUtc = null != e ? e : new Date()),
              (this.LastCooldownEndTimeUtc = a.addSecondsWithoutOverflow(
                this.LastSurveyActivatedTimeUtc,
                t
              ));
          }),
          (e.prototype.getCooldownStartDate = function () {
            return this.IsCandidate
              ? this.DidCandidateTriggerSurvey
                ? this.LastSurveyActivatedTimeUtc
                : this.LastSurveyStartTimeUtc
              : this.LastNominationTimeUtc;
          }),
          e
        );
      })();
    t.CampaignState = f;
    var B = (function () {
      function e() {}
      return (
        (e.make = function (e, t) {
          return t ? new v(e, t) : new C(e);
        }),
        e
      );
    })();
    t.CampaignStateProviderFactory = B;
    var m = function () {},
      v = (function () {
        function e(e, t) {
          if (!t) throw new Error("host-based storage must not be null");
          (this.hostBasedStorage = t),
            e && (this.fileBasedStateProvider = new C(e));
        }
        return (
          (e.prototype.load = function () {
            var e,
              t = this.getStatesFromHost();
            return (
              this.fileBasedStateProvider &&
                (e = this.fileBasedStateProvider.load()),
              o.MergeAndUpdateCampaignStates(e, t).find(0)
            );
          }),
          (e.prototype.save = function (e) {
            var t = this;
            if (e) {
              var A = this.getStatesFromHost(),
                n = o.MergeAndUpdateCampaignStates(e, A),
                r = n.find(1),
                i = n.find(0);
              r &&
                r.forEach(function (e) {
                  var A = o.makeSettingItemValue(JSON.stringify(e));
                  t.hostBasedStorage.upsertSettingItem(
                    s[s.CampaignStates],
                    e.CampaignId,
                    A
                  );
                }),
                this.fileBasedStateProvider &&
                  this.fileBasedStateProvider.save(i);
            }
          }),
          (e.prototype.getStatesFromHost = function () {
            var e = [],
              t = this.hostBasedStorage.readSettingList(s[s.CampaignStates]);
            for (var A in t)
              if (t.hasOwnProperty(A)) {
                var n = t[A],
                  a = o.extractSettingItemValueSubString(n),
                  u = {};
                try {
                  u = JSON.parse(a);
                  var c = f.deserialize(u);
                  c && e.push(c);
                } catch (e) {
                  i.FloodgateEngine.getTelemetryLogger().log_Event(
                    r.TelemetryEvent.HostBasedCampaignStateProvider
                      .GetStatesFromHost.Failed,
                    {
                      ErrorMessage:
                        "Json parsing/deserializing failed. " +
                        e.toString() +
                        ".  Input:" +
                        a,
                    }
                  );
                }
              }
            return e;
          }),
          e
        );
      })();
    t.HostBasedCampaignStateProvider = v;
    var C = (function () {
      function e(e) {
        if (!e) throw new Error("storage must not be null");
        this.storage = e;
      }
      return (
        (e.prototype.load = function () {
          var e,
            t = this.storage.read(s.CampaignStates);
          if (!t) return [];
          try {
            e = JSON.parse(t);
            var A = [];
            return (
              e &&
                e.CampaignStates &&
                e.CampaignStates.forEach(function (e) {
                  var t = f.deserialize(e);
                  t && A.push(t);
                }),
              A
            );
          } catch (e) {
            return (
              i.FloodgateEngine.getTelemetryLogger().log_Event(
                r.TelemetryEvent.FileBasedCampaignStateProvider.Load.Failed,
                {
                  ErrorMessage:
                    "Json parsing/deserializing failed. " +
                    e.toString() +
                    ".  Input:" +
                    t,
                }
              ),
              []
            );
          }
        }),
        (e.prototype.save = function (e) {
          if (e) {
            var t = new m();
            t.CampaignStates = e;
            var A = JSON.stringify(t);
            this.storage.write(s.CampaignStates, A);
          }
        }),
        e
      );
    })();
    t.FileBasedCampaignStateProvider = C;
  },
  function (e, t, A) {
    "use strict";
    var n,
      r =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var A in t) t.hasOwnProperty(A) && (e[A] = t[A]);
            })(e, t);
        }),
        function (e, t) {
          function A() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((A.prototype = t.prototype), new A()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.SurveyActivationStats =
        t.FileBasedSurveyActivationStatsProvider =
        t.HostBasedSurveyActivationStatsProvider =
        t.SurveyActivationStatsProviderFactory =
        t.SurveyStatCollectionActivation =
          void 0);
    var i = A(13),
      o = i.FileType,
      a = A(16),
      s = A(15),
      u = A(17),
      c = A(33),
      l = A(41),
      d = A(11),
      g = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r(t, e),
          (t.fromJson = function (e) {
            var A,
              n = new t();
            if (!e)
              return (
                u.FloodgateEngine.getTelemetryLogger().log_Event(
                  s.TelemetryEvent.SurveyStatCollectionActivation.FromJson
                    .Failed,
                  { ErrorMessage: "Input json is null or empty." }
                ),
                n
              );
            try {
              A = JSON.parse(e);
            } catch (e) {
              return (
                u.FloodgateEngine.getTelemetryLogger().log_Event(
                  s.TelemetryEvent.SurveyStatCollectionActivation.FromJson
                    .Failed,
                  { ErrorMessage: "Json parsing failed. " + e.toString() }
                ),
                n
              );
            }
            return n.deserialize(A) ? n : new t();
          }),
          (t.toJson = function (e) {
            return (
              e ||
                (u.FloodgateEngine.getTelemetryLogger().log_Event(
                  s.TelemetryEvent.SurveyStatCollectionActivation.ToJson.Failed,
                  { ErrorMessage: "Input json is null or empty." }
                ),
                (e = new t())),
              JSON.stringify(e)
            );
          }),
          (t.prototype.accumulate = function (e) {
            if (e) {
              var t = e.getStats();
              for (var A in t) t.hasOwnProperty(A) && this.addStats(A, t[A]);
            }
          }),
          (t.prototype.deserialize = function (e) {
            var t = e.Surveys,
              A = new Date();
            for (var n in t)
              if (t.hasOwnProperty(n)) {
                var r = new B();
                r.deserialize(t[n]) &&
                  r.ExpirationTimeUtc > A &&
                  this.addStats(n, r);
              }
            return this.validate();
          }),
          (t.prototype.validate = function () {
            return d.isObject(this.getStats());
          }),
          t
        );
      })(l.SurveyStatCollection);
    t.SurveyStatCollectionActivation = g;
    var p = (function () {
      function e() {}
      return (
        (e.make = function (e, t) {
          return t ? new h(e, t) : new f(e);
        }),
        e
      );
    })();
    t.SurveyActivationStatsProviderFactory = p;
    var h = (function () {
      function e(e, t) {
        if (!t) throw new Error("host-based storage must not be null");
        (this.hostBasedStorage = t),
          e && (this.fileBasedStorageProvider = new f(e));
      }
      return (
        (e.prototype.load = function () {
          var e = this.getSurveyStatsFromHost(),
            t = new g();
          return (
            this.fileBasedStorageProvider &&
              (t = this.fileBasedStorageProvider.load()),
            c.MergeAndUpdateSurveyActivationStats(t, e).find(0)
          );
        }),
        (e.prototype.save = function (e) {
          if (e) {
            var t = this.getSurveyStatsFromHost(),
              A = c.MergeAndUpdateSurveyActivationStats(e, t),
              n = A.find(1),
              r = A.find(0);
            if (n) {
              var i = n.getStats();
              for (var a in i)
                if (i.hasOwnProperty(a)) {
                  var s = c.makeSettingItemValue(JSON.stringify(i[a]));
                  this.hostBasedStorage.upsertSettingItem(
                    o[o.SurveyActivationStats],
                    a,
                    s
                  );
                }
            }
            this.fileBasedStorageProvider &&
              this.fileBasedStorageProvider.save(r);
          }
        }),
        (e.prototype.getSurveyStatsFromHost = function () {
          var e = new g(),
            t = this.hostBasedStorage.readSettingList(
              o[o.SurveyActivationStats]
            );
          for (var A in t)
            if (t.hasOwnProperty(A)) {
              var n = c.extractSettingItemValueSubString(t[A]),
                r = new B(),
                i = void 0;
              try {
                (i = JSON.parse(n)), r.deserialize(i);
              } catch (e) {
                u.FloodgateEngine.getTelemetryLogger().log_Event(
                  s.TelemetryEvent.HostBasedSurveyActivationStatsProvider
                    .GetSurveyStatsFromHost.Failed,
                  {
                    ErrorMessage:
                      "Json parsing/deserializing failed. " +
                      e.toString() +
                      ".  Input:" +
                      n,
                  }
                );
              }
              var a = new Date();
              r.ExpirationTimeUtc <= a
                ? this.hostBasedStorage.deleteSettingItem(
                    o[o.SurveyActivationStats],
                    A
                  )
                : e.addStats(A, r);
            }
          return e;
        }),
        e
      );
    })();
    t.HostBasedSurveyActivationStatsProvider = h;
    var f = (function () {
      function e(e) {
        if (!e) throw new Error("storage must not be null");
        this.storage = e;
      }
      return (
        (e.prototype.load = function () {
          var e = this.storage.read(i.FileType.SurveyActivationStats);
          return e ? g.fromJson(e) : new g();
        }),
        (e.prototype.save = function (e) {
          if (e) {
            var t = g.toJson(e);
            this.storage.write(i.FileType.SurveyActivationStats, t);
          }
        }),
        e
      );
    })();
    t.FileBasedSurveyActivationStatsProvider = f;
    var B = (function () {
      function e() {}
      return (
        (e.prototype.deserialize = function (e) {
          return (
            (this.ActivationTimeUtc = e.ActivationTimeUtc),
            (this.ExpirationTimeUtc = e.ExpirationTimeUtc),
            (this.Type = e.Type),
            this.validate()
          );
        }),
        (e.prototype.validate = function () {
          return (
            !!d.isUtcDatetimeString(this.ActivationTimeUtc) &&
            ((this.ActivationTimeUtc = d.stringToDate(this.ActivationTimeUtc)),
            !!d.isUtcDatetimeString(this.ExpirationTimeUtc) &&
              ((this.ExpirationTimeUtc = d.stringToDate(
                this.ExpirationTimeUtc
              )),
              d.isEnumValue(this.Type, a.Type)))
          );
        }),
        e
      );
    })();
    t.SurveyActivationStats = B;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.SurveyStatCollection = void 0);
    var n = (function () {
      function e() {
        (this.Surveys = {}), (this.Surveys = {});
      }
      return (
        (e.prototype.addStats = function (e, t) {
          this.Surveys[e] = t;
        }),
        (e.prototype.getBySurveyId = function (e) {
          return this.Surveys[e];
        }),
        (e.prototype.getStats = function () {
          return this.Surveys;
        }),
        e
      );
    })();
    t.SurveyStatCollection = n;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.FileBasedGovernedChannelStateProvider =
        t.HostBasedGovernedChannelStateProvider =
        t.GovernedChannelStateProviderFactory =
        t.GovernedChannelState =
          void 0);
    var n = A(13),
      r = A(15),
      i = A(17),
      o = A(20),
      a = A(33),
      s = A(11),
      u = n.FileType,
      c = (function () {
        function e(e, t) {
          if (
            ((this.ChannelType = e),
            (this.CooldownStartTimeUtc = t),
            !this.validate())
          )
            throw new Error("Constructor arguments are not valid");
        }
        return (
          (e.deserialize = function (t) {
            var A;
            if (!t) return null;
            try {
              A = new e(t.ChannelType, t.CooldownStartTimeUtc);
            } catch (e) {
              return (
                i.FloodgateEngine.getTelemetryLogger().log_Event(
                  r.TelemetryEvent.GovernedChannelState.Deserialize.Failed,
                  { ErrorMessage: e.toString() }
                ),
                null
              );
            }
            return A;
          }),
          (e.prototype.validate = function () {
            return (
              !!s.isEnumValue(this.ChannelType, o.GovernedChannelType) &&
              (s.isUtcDatetimeString(this.CooldownStartTimeUtc)
                ? (this.CooldownStartTimeUtc = s.stringToDate(
                    this.CooldownStartTimeUtc
                  ))
                : (!s.isNOU(this.CooldownStartTimeUtc) &&
                    s.isDate(this.CooldownStartTimeUtc)) ||
                  (this.CooldownStartTimeUtc = s.getDistantPast()),
              !0)
            );
          }),
          (e.prototype.getType = function () {
            return this.ChannelType;
          }),
          (e.prototype.getCooldownStartTime = function () {
            return this.CooldownStartTimeUtc;
          }),
          e
        );
      })();
    t.GovernedChannelState = c;
    var l = (function () {
      function e() {}
      return (
        (e.make = function (e, t) {
          return t ? new g(e, t) : new p(e);
        }),
        e
      );
    })();
    t.GovernedChannelStateProviderFactory = l;
    var d = function () {},
      g = (function () {
        function e(e, t) {
          if (!t) throw new Error("host-based storage must not be null");
          (this.hostBasedStorage = t),
            e && (this.fileBasedStateProvider = new p(e));
        }
        return (
          (e.prototype.load = function () {
            var e,
              t = this.getStatesFromHost();
            return (
              this.fileBasedStateProvider &&
                (e = this.fileBasedStateProvider.load()),
              a.MergeAndUpdateGovernedChannelStates(e, t).find(0)
            );
          }),
          (e.prototype.save = function (e) {
            var t = this;
            if (e) {
              var A = this.getStatesFromHost(),
                n = a.MergeAndUpdateGovernedChannelStates(e, A),
                r = n.find(1),
                i = n.find(0);
              r &&
                r.forEach(function (e) {
                  var A = a.makeSettingItemValue(JSON.stringify(e));
                  t.hostBasedStorage.upsertSettingItem(
                    u[u.GovernedChannelStates],
                    String(e.getType()),
                    A
                  );
                }),
                this.fileBasedStateProvider &&
                  this.fileBasedStateProvider.save(i);
            }
          }),
          (e.prototype.getStatesFromHost = function () {
            var e = [],
              t = this.hostBasedStorage.readSettingList(
                u[u.GovernedChannelStates]
              );
            for (var A in t)
              if (t.hasOwnProperty(A)) {
                var n = t[A],
                  o = a.extractSettingItemValueSubString(n),
                  s = {};
                try {
                  s = JSON.parse(o);
                  var l = c.deserialize(s);
                  l && e.push(l);
                } catch (e) {
                  i.FloodgateEngine.getTelemetryLogger().log_Event(
                    r.TelemetryEvent.HostBasedGovernedChannelStateProvider
                      .GetStatesFromHost.Failed,
                    {
                      ErrorMessage:
                        "Json parsing/deserializing failed. " +
                        e.toString() +
                        ".  Input:" +
                        o,
                    }
                  );
                }
              }
            return e;
          }),
          e
        );
      })();
    t.HostBasedGovernedChannelStateProvider = g;
    var p = (function () {
      function e(e) {
        if (!e) throw new Error("storage must not be null");
        this.storage = e;
      }
      return (
        (e.prototype.load = function () {
          var e,
            t = this.storage.read(u.GovernedChannelStates);
          if (!t) return [];
          try {
            e = JSON.parse(t);
            var A = [];
            return (
              e &&
                e.ChannelStates &&
                e.ChannelStates.forEach(function (e) {
                  var t = c.deserialize(e);
                  t && A.push(t);
                }),
              A
            );
          } catch (e) {
            return (
              i.FloodgateEngine.getTelemetryLogger().log_Event(
                r.TelemetryEvent.FileBasedGovernedChannelStateProvider.Load
                  .Failed,
                {
                  ErrorMessage:
                    "Json parsing/deserializing failed. " +
                    e.toString() +
                    ".  Input:" +
                    t,
                }
              ),
              []
            );
          }
        }),
        (e.prototype.save = function (e) {
          if (e) {
            var t = new d();
            t.ChannelStates = e;
            var A = JSON.stringify(t);
            this.storage.write(u.GovernedChannelStates, A);
          }
        }),
        e
      );
    })();
    t.FileBasedGovernedChannelStateProvider = p;
  },
  function (e, t, A) {
    "use strict";
    var n,
      r =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var A in t) t.hasOwnProperty(A) && (e[A] = t[A]);
            })(e, t);
        }),
        function (e, t) {
          function A() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((A.prototype = t.prototype), new A()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.SurveyEventActivityStats = t.SurveyStatCollectionEventActivity =
        void 0);
    var i = A(15),
      o = A(17),
      a = A(41),
      s = A(11),
      u = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r(t, e),
          (t.fromJson = function (e) {
            var A,
              n = new t();
            if (!e) return n;
            try {
              A = JSON.parse(e);
            } catch (e) {
              return (
                o.FloodgateEngine.getTelemetryLogger().log_Event(
                  i.TelemetryEvent.SurveyStatCollectionEventActivity.FromJson
                    .Failed,
                  { ErrorMessage: "Json parsing failed. " + e.toString() }
                ),
                n
              );
            }
            return n.deserialize(A) ? n : new t();
          }),
          (t.toJson = function (e) {
            return (
              e ||
                (o.FloodgateEngine.getTelemetryLogger().log_Event(
                  i.TelemetryEvent.SurveyStatCollectionEventActivity.ToJson
                    .Failed,
                  { ErrorMessage: "Input json is null or empty." }
                ),
                (e = new t())),
              JSON.stringify(e)
            );
          }),
          (t.prototype.accumulate = function (e) {
            if (e) {
              var t = e.getStats();
              for (var A in t)
                if (t.hasOwnProperty(A)) {
                  var n = this.getBySurveyId(A);
                  if (
                    (n || (((n = new c()).Counts = []), this.addStats(A, n)),
                    (n.ExpirationTimeUtc = t[A].ExpirationTimeUtc),
                    n.Counts.length < t[A].Counts.length)
                  ) {
                    var r = n.Counts.slice();
                    n.Counts = r;
                  }
                  for (var i = 0; i < t[A].Counts.length; i++)
                    n.Counts[i] || (n.Counts[i] = 0),
                      (n.Counts[i] += t[A].Counts[i]);
                }
            }
          }),
          (t.prototype.deserialize = function (e) {
            var t = e.Surveys,
              A = new Date();
            for (var n in t)
              if (t.hasOwnProperty(n)) {
                var r = new c();
                r.deserialize(t[n]) &&
                  r.ExpirationTimeUtc > A &&
                  this.addStats(n, r);
              }
            return this.validate();
          }),
          (t.prototype.validate = function () {
            return s.isObject(this.getStats());
          }),
          t
        );
      })(a.SurveyStatCollection);
    t.SurveyStatCollectionEventActivity = u;
    var c = (function () {
      function e() {}
      return (
        (e.prototype.deserialize = function (e) {
          return (
            (this.ExpirationTimeUtc = e.ExpirationTimeUtc),
            (this.Counts = e.Counts),
            this.validate()
          );
        }),
        (e.prototype.validate = function () {
          if (!this.Counts) return !1;
          for (var e = 0; e < this.Counts.length; e++) {
            var t = this.Counts[e];
            if (!s.isNumber(t)) return !1;
            t < 0 && (this.Counts[e] = 0);
          }
          return (
            !!s.isUtcDatetimeString(this.ExpirationTimeUtc) &&
            ((this.ExpirationTimeUtc = s.stringToDate(this.ExpirationTimeUtc)),
            !0)
          );
        }),
        e
      );
    })();
    t.SurveyEventActivityStats = c;
  },
  function (e, t) {},
  function (e, t) {},
  function (e, t, A) {
    e.exports = (function () {
      "use strict";
      var e = function (t, A) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var A in t) t.hasOwnProperty(A) && (e[A] = t[A]);
          })(t, A);
      };
      function t(t, A) {
        function n() {
          this.constructor = t;
        }
        e(t, A),
          (t.prototype =
            null === A
              ? Object.create(A)
              : ((n.prototype = A.prototype), new n()));
      }
      var A = function () {
        return (A =
          Object.assign ||
          function (e) {
            for (var t, A = 1, n = arguments.length; A < n; A++)
              for (var r in (t = arguments[A]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
      function n(e, t, A, n) {
        return new (A || (A = Promise))(function (r, i) {
          function o(e) {
            try {
              s(n.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              s(n.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            e.done
              ? r(e.value)
              : new A(function (t) {
                  t(e.value);
                }).then(o, a);
          }
          s((n = n.apply(e, t || [])).next());
        });
      }
      function r(e, t) {
        var A,
          n,
          r,
          i,
          o = {
            label: 0,
            sent: function () {
              if (1 & r[0]) throw r[1];
              return r[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function a(i) {
          return function (a) {
            return (function (i) {
              if (A) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((A = 1),
                    n &&
                      (r =
                        2 & i[0]
                          ? n.return
                          : i[0]
                          ? n.throw || ((r = n.return) && r.call(n), 0)
                          : n.next) &&
                      !(r = r.call(n, i[1])).done)
                  )
                    return r;
                  switch (((n = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                    case 0:
                    case 1:
                      r = i;
                      break;
                    case 4:
                      return o.label++, { value: i[1], done: !1 };
                    case 5:
                      o.label++, (n = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (r = (r = o.trys).length > 0 && r[r.length - 1]) ||
                          (6 !== i[0] && 2 !== i[0])
                        )
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                        o.label = i[1];
                        break;
                      }
                      if (6 === i[0] && o.label < r[1]) {
                        (o.label = r[1]), (r = i);
                        break;
                      }
                      if (r && o.label < r[2]) {
                        (o.label = r[2]), o.ops.push(i);
                        break;
                      }
                      r[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  i = t.call(e, o);
                } catch (e) {
                  (i = [6, e]), (n = 0);
                } finally {
                  A = r = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, a]);
          };
        }
      }
      for (
        var i = (function () {
            function e(e, t, A, n) {
              (this.left = e),
                (this.top = t),
                (this.width = A),
                (this.height = n);
            }
            return (
              (e.prototype.add = function (t, A, n, r) {
                return new e(
                  this.left + t,
                  this.top + A,
                  this.width + n,
                  this.height + r
                );
              }),
              (e.fromClientRect = function (t) {
                return new e(t.left, t.top, t.width, t.height);
              }),
              e
            );
          })(),
          o = function (e) {
            return i.fromClientRect(e.getBoundingClientRect());
          },
          a = function (e) {
            for (var t = [], A = 0, n = e.length; A < n; ) {
              var r = e.charCodeAt(A++);
              if (r >= 55296 && r <= 56319 && A < n) {
                var i = e.charCodeAt(A++);
                56320 == (64512 & i)
                  ? t.push(((1023 & r) << 10) + (1023 & i) + 65536)
                  : (t.push(r), A--);
              } else t.push(r);
            }
            return t;
          },
          s = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            if (String.fromCodePoint)
              return String.fromCodePoint.apply(String, e);
            var A = e.length;
            if (!A) return "";
            for (var n = [], r = -1, i = ""; ++r < A; ) {
              var o = e[r];
              o <= 65535
                ? n.push(o)
                : ((o -= 65536), n.push(55296 + (o >> 10), (o % 1024) + 56320)),
                (r + 1 === A || n.length > 16384) &&
                  ((i += String.fromCharCode.apply(String, n)), (n.length = 0));
            }
            return i;
          },
          u =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          c = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
          l = 0;
        l < u.length;
        l++
      )
        c[u.charCodeAt(l)] = l;
      var d,
        g = function (e, t, A) {
          return e.slice
            ? e.slice(t, A)
            : new Uint16Array(Array.prototype.slice.call(e, t, A));
        },
        p = (function () {
          function e(e, t, A, n, r, i) {
            (this.initialValue = e),
              (this.errorValue = t),
              (this.highStart = A),
              (this.highValueIndex = n),
              (this.index = r),
              (this.data = i);
          }
          return (
            (e.prototype.get = function (e) {
              var t;
              if (e >= 0) {
                if (e < 55296 || (e > 56319 && e <= 65535))
                  return (
                    (t = ((t = this.index[e >> 5]) << 2) + (31 & e)),
                    this.data[t]
                  );
                if (e <= 65535)
                  return (
                    (t =
                      ((t = this.index[2048 + ((e - 55296) >> 5)]) << 2) +
                      (31 & e)),
                    this.data[t]
                  );
                if (e < this.highStart)
                  return (
                    (t = 2080 + (e >> 11)),
                    (t = this.index[t]),
                    (t += (e >> 5) & 63),
                    (t = ((t = this.index[t]) << 2) + (31 & e)),
                    this.data[t]
                  );
                if (e <= 1114111) return this.data[this.highValueIndex];
              }
              return this.errorValue;
            }),
            e
          );
        })(),
        h = 10,
        f = 13,
        B = 15,
        m = 17,
        v = 18,
        C = 19,
        w = 20,
        y = 21,
        E = 22,
        F = 24,
        U = 25,
        S = 26,
        Q = 27,
        T = 28,
        b = 30,
        I = 32,
        N = 33,
        H = 34,
        _ = 35,
        O = 37,
        D = 38,
        L = 39,
        R = 40,
        M = 42,
        K = (function (e) {
          var t,
            A,
            n,
            r = (function (e) {
              var t,
                A,
                n,
                r,
                i,
                o = 0.75 * e.length,
                a = e.length,
                s = 0;
              "=" === e[e.length - 1] && (o--, "=" === e[e.length - 2] && o--);
              var u =
                  "undefined" != typeof ArrayBuffer &&
                  "undefined" != typeof Uint8Array &&
                  void 0 !== Uint8Array.prototype.slice
                    ? new ArrayBuffer(o)
                    : new Array(o),
                l = Array.isArray(u) ? u : new Uint8Array(u);
              for (t = 0; t < a; t += 4)
                (A = c[e.charCodeAt(t)]),
                  (n = c[e.charCodeAt(t + 1)]),
                  (r = c[e.charCodeAt(t + 2)]),
                  (i = c[e.charCodeAt(t + 3)]),
                  (l[s++] = (A << 2) | (n >> 4)),
                  (l[s++] = ((15 & n) << 4) | (r >> 2)),
                  (l[s++] = ((3 & r) << 6) | (63 & i));
              return u;
            })(e),
            i = Array.isArray(r)
              ? (function (e) {
                  for (var t = e.length, A = [], n = 0; n < t; n += 4)
                    A.push(
                      (e[n + 3] << 24) |
                        (e[n + 2] << 16) |
                        (e[n + 1] << 8) |
                        e[n]
                    );
                  return A;
                })(r)
              : new Uint32Array(r),
            o = Array.isArray(r)
              ? (function (e) {
                  for (var t = e.length, A = [], n = 0; n < t; n += 2)
                    A.push((e[n + 1] << 8) | e[n]);
                  return A;
                })(r)
              : new Uint16Array(r),
            a = g(o, 12, i[4] / 2),
            s =
              2 === i[5]
                ? g(o, (24 + i[4]) / 2)
                : ((t = i),
                  (A = Math.ceil((24 + i[4]) / 4)),
                  t.slice
                    ? t.slice(A, n)
                    : new Uint32Array(Array.prototype.slice.call(t, A, n)));
          return new p(i[0], i[1], i[2], i[3], a, s);
        })(
          "KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"
        ),
        P = [b, 36],
        x = [1, 2, 3, 5],
        k = [h, 8],
        V = [Q, S],
        G = x.concat(k),
        z = [D, L, R, H, _],
        J = [B, f],
        X = function (e, t, A, n) {
          var r = n[A];
          if (Array.isArray(e) ? -1 !== e.indexOf(r) : e === r)
            for (var i = A; i <= n.length; ) {
              if ((s = n[++i]) === t) return !0;
              if (s !== h) break;
            }
          if (r === h)
            for (i = A; i > 0; ) {
              var o = n[--i];
              if (Array.isArray(e) ? -1 !== e.indexOf(o) : e === o)
                for (var a = A; a <= n.length; ) {
                  var s;
                  if ((s = n[++a]) === t) return !0;
                  if (s !== h) break;
                }
              if (o !== h) break;
            }
          return !1;
        },
        W = function (e, t) {
          for (var A = e; A >= 0; ) {
            var n = t[A];
            if (n !== h) return n;
            A--;
          }
          return 0;
        },
        Y = function (e, t, A, n, r) {
          if (0 === A[n]) return "×";
          var i = n - 1;
          if (Array.isArray(r) && !0 === r[i]) return "×";
          var o = i - 1,
            a = i + 1,
            s = t[i],
            u = o >= 0 ? t[o] : 0,
            c = t[a];
          if (2 === s && 3 === c) return "×";
          if (-1 !== x.indexOf(s)) return "!";
          if (-1 !== x.indexOf(c)) return "×";
          if (-1 !== k.indexOf(c)) return "×";
          if (8 === W(i, t)) return "÷";
          if (11 === K.get(e[i]) && (c === O || c === I || c === N)) return "×";
          if (7 === s || 7 === c) return "×";
          if (9 === s) return "×";
          if (-1 === [h, f, B].indexOf(s) && 9 === c) return "×";
          if (-1 !== [m, v, C, F, T].indexOf(c)) return "×";
          if (W(i, t) === E) return "×";
          if (X(23, E, i, t)) return "×";
          if (X([m, v], y, i, t)) return "×";
          if (X(12, 12, i, t)) return "×";
          if (s === h) return "÷";
          if (23 === s || 23 === c) return "×";
          if (16 === c || 16 === s) return "÷";
          if (-1 !== [f, B, y].indexOf(c) || 14 === s) return "×";
          if (36 === u && -1 !== J.indexOf(s)) return "×";
          if (s === T && 36 === c) return "×";
          if (c === w && -1 !== P.concat(w, C, U, O, I, N).indexOf(s))
            return "×";
          if (
            (-1 !== P.indexOf(c) && s === U) ||
            (-1 !== P.indexOf(s) && c === U)
          )
            return "×";
          if (
            (s === Q && -1 !== [O, I, N].indexOf(c)) ||
            (-1 !== [O, I, N].indexOf(s) && c === S)
          )
            return "×";
          if (
            (-1 !== P.indexOf(s) && -1 !== V.indexOf(c)) ||
            (-1 !== V.indexOf(s) && -1 !== P.indexOf(c))
          )
            return "×";
          if (
            (-1 !== [Q, S].indexOf(s) &&
              (c === U || (-1 !== [E, B].indexOf(c) && t[a + 1] === U))) ||
            (-1 !== [E, B].indexOf(s) && c === U) ||
            (s === U && -1 !== [U, T, F].indexOf(c))
          )
            return "×";
          if (-1 !== [U, T, F, m, v].indexOf(c))
            for (var l = i; l >= 0; ) {
              if ((d = t[l]) === U) return "×";
              if (-1 === [T, F].indexOf(d)) break;
              l--;
            }
          if (-1 !== [Q, S].indexOf(c))
            for (l = -1 !== [m, v].indexOf(s) ? o : i; l >= 0; ) {
              var d;
              if ((d = t[l]) === U) return "×";
              if (-1 === [T, F].indexOf(d)) break;
              l--;
            }
          if (
            (D === s && -1 !== [D, L, H, _].indexOf(c)) ||
            (-1 !== [L, H].indexOf(s) && -1 !== [L, R].indexOf(c)) ||
            (-1 !== [R, _].indexOf(s) && c === R)
          )
            return "×";
          if (
            (-1 !== z.indexOf(s) && -1 !== [w, S].indexOf(c)) ||
            (-1 !== z.indexOf(c) && s === Q)
          )
            return "×";
          if (-1 !== P.indexOf(s) && -1 !== P.indexOf(c)) return "×";
          if (s === F && -1 !== P.indexOf(c)) return "×";
          if (
            (-1 !== P.concat(U).indexOf(s) && c === E) ||
            (-1 !== P.concat(U).indexOf(c) && s === v)
          )
            return "×";
          if (41 === s && 41 === c) {
            for (var g = A[i], p = 1; g > 0 && 41 === t[--g]; ) p++;
            if (p % 2 != 0) return "×";
          }
          return s === I && c === N ? "×" : "÷";
        },
        j = function (e, t) {
          t || (t = { lineBreak: "normal", wordBreak: "normal" });
          var A = (function (e, t) {
              void 0 === t && (t = "strict");
              var A = [],
                n = [],
                r = [];
              return (
                e.forEach(function (e, i) {
                  var o = K.get(e);
                  if (
                    (o > 50 ? (r.push(!0), (o -= 50)) : r.push(!1),
                    -1 !== ["normal", "auto", "loose"].indexOf(t) &&
                      -1 !== [8208, 8211, 12316, 12448].indexOf(e))
                  )
                    return n.push(i), A.push(16);
                  if (4 === o || 11 === o) {
                    if (0 === i) return n.push(i), A.push(b);
                    var a = A[i - 1];
                    return -1 === G.indexOf(a)
                      ? (n.push(n[i - 1]), A.push(a))
                      : (n.push(i), A.push(b));
                  }
                  return (
                    n.push(i),
                    31 === o
                      ? A.push("strict" === t ? y : O)
                      : o === M || 29 === o
                      ? A.push(b)
                      : 43 === o
                      ? (e >= 131072 && e <= 196605) ||
                        (e >= 196608 && e <= 262141)
                        ? A.push(O)
                        : A.push(b)
                      : void A.push(o)
                  );
                }),
                [n, A, r]
              );
            })(e, t.lineBreak),
            n = A[0],
            r = A[1],
            i = A[2];
          return (
            ("break-all" !== t.wordBreak && "break-word" !== t.wordBreak) ||
              (r = r.map(function (e) {
                return -1 !== [U, b, M].indexOf(e) ? O : e;
              })),
            [
              n,
              r,
              "keep-all" === t.wordBreak
                ? i.map(function (t, A) {
                    return t && e[A] >= 19968 && e[A] <= 40959;
                  })
                : void 0,
            ]
          );
        },
        q = (function () {
          function e(e, t, A, n) {
            (this.codePoints = e),
              (this.required = "!" === t),
              (this.start = A),
              (this.end = n);
          }
          return (
            (e.prototype.slice = function () {
              return s.apply(
                void 0,
                this.codePoints.slice(this.start, this.end)
              );
            }),
            e
          );
        })();
      !(function (e) {
        (e[(e.STRING_TOKEN = 0)] = "STRING_TOKEN"),
          (e[(e.BAD_STRING_TOKEN = 1)] = "BAD_STRING_TOKEN"),
          (e[(e.LEFT_PARENTHESIS_TOKEN = 2)] = "LEFT_PARENTHESIS_TOKEN"),
          (e[(e.RIGHT_PARENTHESIS_TOKEN = 3)] = "RIGHT_PARENTHESIS_TOKEN"),
          (e[(e.COMMA_TOKEN = 4)] = "COMMA_TOKEN"),
          (e[(e.HASH_TOKEN = 5)] = "HASH_TOKEN"),
          (e[(e.DELIM_TOKEN = 6)] = "DELIM_TOKEN"),
          (e[(e.AT_KEYWORD_TOKEN = 7)] = "AT_KEYWORD_TOKEN"),
          (e[(e.PREFIX_MATCH_TOKEN = 8)] = "PREFIX_MATCH_TOKEN"),
          (e[(e.DASH_MATCH_TOKEN = 9)] = "DASH_MATCH_TOKEN"),
          (e[(e.INCLUDE_MATCH_TOKEN = 10)] = "INCLUDE_MATCH_TOKEN"),
          (e[(e.LEFT_CURLY_BRACKET_TOKEN = 11)] = "LEFT_CURLY_BRACKET_TOKEN"),
          (e[(e.RIGHT_CURLY_BRACKET_TOKEN = 12)] = "RIGHT_CURLY_BRACKET_TOKEN"),
          (e[(e.SUFFIX_MATCH_TOKEN = 13)] = "SUFFIX_MATCH_TOKEN"),
          (e[(e.SUBSTRING_MATCH_TOKEN = 14)] = "SUBSTRING_MATCH_TOKEN"),
          (e[(e.DIMENSION_TOKEN = 15)] = "DIMENSION_TOKEN"),
          (e[(e.PERCENTAGE_TOKEN = 16)] = "PERCENTAGE_TOKEN"),
          (e[(e.NUMBER_TOKEN = 17)] = "NUMBER_TOKEN"),
          (e[(e.FUNCTION = 18)] = "FUNCTION"),
          (e[(e.FUNCTION_TOKEN = 19)] = "FUNCTION_TOKEN"),
          (e[(e.IDENT_TOKEN = 20)] = "IDENT_TOKEN"),
          (e[(e.COLUMN_TOKEN = 21)] = "COLUMN_TOKEN"),
          (e[(e.URL_TOKEN = 22)] = "URL_TOKEN"),
          (e[(e.BAD_URL_TOKEN = 23)] = "BAD_URL_TOKEN"),
          (e[(e.CDC_TOKEN = 24)] = "CDC_TOKEN"),
          (e[(e.CDO_TOKEN = 25)] = "CDO_TOKEN"),
          (e[(e.COLON_TOKEN = 26)] = "COLON_TOKEN"),
          (e[(e.SEMICOLON_TOKEN = 27)] = "SEMICOLON_TOKEN"),
          (e[(e.LEFT_SQUARE_BRACKET_TOKEN = 28)] = "LEFT_SQUARE_BRACKET_TOKEN"),
          (e[(e.RIGHT_SQUARE_BRACKET_TOKEN = 29)] =
            "RIGHT_SQUARE_BRACKET_TOKEN"),
          (e[(e.UNICODE_RANGE_TOKEN = 30)] = "UNICODE_RANGE_TOKEN"),
          (e[(e.WHITESPACE_TOKEN = 31)] = "WHITESPACE_TOKEN"),
          (e[(e.EOF_TOKEN = 32)] = "EOF_TOKEN");
      })(d || (d = {}));
      var Z = function (e) {
          return e >= 48 && e <= 57;
        },
        $ = function (e) {
          return Z(e) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
        },
        ee = function (e) {
          return 10 === e || 9 === e || 32 === e;
        },
        te = function (e) {
          return (
            (function (e) {
              return (
                (function (e) {
                  return e >= 97 && e <= 122;
                })(e) ||
                (function (e) {
                  return e >= 65 && e <= 90;
                })(e)
              );
            })(e) ||
            (function (e) {
              return e >= 128;
            })(e) ||
            95 === e
          );
        },
        Ae = function (e) {
          return te(e) || Z(e) || 45 === e;
        },
        ne = function (e) {
          return (
            (e >= 0 && e <= 8) || 11 === e || (e >= 14 && e <= 31) || 127 === e
          );
        },
        re = function (e, t) {
          return 92 === e && 10 !== t;
        },
        ie = function (e, t, A) {
          return 45 === e
            ? te(t) || re(t, A)
            : !!te(e) || !(92 !== e || !re(e, t));
        },
        oe = function (e, t, A) {
          return 43 === e || 45 === e
            ? !!Z(t) || (46 === t && Z(A))
            : Z(46 === e ? t : e);
        },
        ae = function (e) {
          var t = 0,
            A = 1;
          (43 !== e[t] && 45 !== e[t]) || (45 === e[t] && (A = -1), t++);
          for (var n = []; Z(e[t]); ) n.push(e[t++]);
          var r = n.length ? parseInt(s.apply(void 0, n), 10) : 0;
          46 === e[t] && t++;
          for (var i = []; Z(e[t]); ) i.push(e[t++]);
          var o = i.length,
            a = o ? parseInt(s.apply(void 0, i), 10) : 0;
          (69 !== e[t] && 101 !== e[t]) || t++;
          var u = 1;
          (43 !== e[t] && 45 !== e[t]) || (45 === e[t] && (u = -1), t++);
          for (var c = []; Z(e[t]); ) c.push(e[t++]);
          var l = c.length ? parseInt(s.apply(void 0, c), 10) : 0;
          return A * (r + a * Math.pow(10, -o)) * Math.pow(10, u * l);
        },
        se = { type: d.LEFT_PARENTHESIS_TOKEN },
        ue = { type: d.RIGHT_PARENTHESIS_TOKEN },
        ce = { type: d.COMMA_TOKEN },
        le = { type: d.SUFFIX_MATCH_TOKEN },
        de = { type: d.PREFIX_MATCH_TOKEN },
        ge = { type: d.COLUMN_TOKEN },
        pe = { type: d.DASH_MATCH_TOKEN },
        he = { type: d.INCLUDE_MATCH_TOKEN },
        fe = { type: d.LEFT_CURLY_BRACKET_TOKEN },
        Be = { type: d.RIGHT_CURLY_BRACKET_TOKEN },
        me = { type: d.SUBSTRING_MATCH_TOKEN },
        ve = { type: d.BAD_URL_TOKEN },
        Ce = { type: d.BAD_STRING_TOKEN },
        we = { type: d.CDO_TOKEN },
        ye = { type: d.CDC_TOKEN },
        Ee = { type: d.COLON_TOKEN },
        Fe = { type: d.SEMICOLON_TOKEN },
        Ue = { type: d.LEFT_SQUARE_BRACKET_TOKEN },
        Se = { type: d.RIGHT_SQUARE_BRACKET_TOKEN },
        Qe = { type: d.WHITESPACE_TOKEN },
        Te = { type: d.EOF_TOKEN },
        be = (function () {
          function e() {
            this._value = [];
          }
          return (
            (e.prototype.write = function (e) {
              this._value = this._value.concat(a(e));
            }),
            (e.prototype.read = function () {
              for (var e = [], t = this.consumeToken(); t !== Te; )
                e.push(t), (t = this.consumeToken());
              return e;
            }),
            (e.prototype.consumeToken = function () {
              var e = this.consumeCodePoint();
              switch (e) {
                case 34:
                  return this.consumeStringToken(34);
                case 35:
                  var t = this.peekCodePoint(0),
                    A = this.peekCodePoint(1),
                    n = this.peekCodePoint(2);
                  if (Ae(t) || re(A, n)) {
                    var r = ie(t, A, n) ? 2 : 1,
                      i = this.consumeName();
                    return { type: d.HASH_TOKEN, value: i, flags: r };
                  }
                  break;
                case 36:
                  if (61 === this.peekCodePoint(0))
                    return this.consumeCodePoint(), le;
                  break;
                case 39:
                  return this.consumeStringToken(39);
                case 40:
                  return se;
                case 41:
                  return ue;
                case 42:
                  if (61 === this.peekCodePoint(0))
                    return this.consumeCodePoint(), me;
                  break;
                case 43:
                  if (oe(e, this.peekCodePoint(0), this.peekCodePoint(1)))
                    return (
                      this.reconsumeCodePoint(e), this.consumeNumericToken()
                    );
                  break;
                case 44:
                  return ce;
                case 45:
                  var o = e,
                    a = this.peekCodePoint(0),
                    u = this.peekCodePoint(1);
                  if (oe(o, a, u))
                    return (
                      this.reconsumeCodePoint(e), this.consumeNumericToken()
                    );
                  if (ie(o, a, u))
                    return (
                      this.reconsumeCodePoint(e), this.consumeIdentLikeToken()
                    );
                  if (45 === a && 62 === u)
                    return this.consumeCodePoint(), this.consumeCodePoint(), ye;
                  break;
                case 46:
                  if (oe(e, this.peekCodePoint(0), this.peekCodePoint(1)))
                    return (
                      this.reconsumeCodePoint(e), this.consumeNumericToken()
                    );
                  break;
                case 47:
                  if (42 === this.peekCodePoint(0))
                    for (this.consumeCodePoint(); ; ) {
                      var c = this.consumeCodePoint();
                      if (42 === c && 47 === (c = this.consumeCodePoint()))
                        return this.consumeToken();
                      if (-1 === c) return this.consumeToken();
                    }
                  break;
                case 58:
                  return Ee;
                case 59:
                  return Fe;
                case 60:
                  if (
                    33 === this.peekCodePoint(0) &&
                    45 === this.peekCodePoint(1) &&
                    45 === this.peekCodePoint(2)
                  )
                    return this.consumeCodePoint(), this.consumeCodePoint(), we;
                  break;
                case 64:
                  var l = this.peekCodePoint(0),
                    g = this.peekCodePoint(1),
                    p = this.peekCodePoint(2);
                  if (ie(l, g, p))
                    return (
                      (i = this.consumeName()),
                      { type: d.AT_KEYWORD_TOKEN, value: i }
                    );
                  break;
                case 91:
                  return Ue;
                case 92:
                  if (re(e, this.peekCodePoint(0)))
                    return (
                      this.reconsumeCodePoint(e), this.consumeIdentLikeToken()
                    );
                  break;
                case 93:
                  return Se;
                case 61:
                  if (61 === this.peekCodePoint(0))
                    return this.consumeCodePoint(), de;
                  break;
                case 123:
                  return fe;
                case 125:
                  return Be;
                case 117:
                case 85:
                  var h = this.peekCodePoint(0),
                    f = this.peekCodePoint(1);
                  return (
                    43 !== h ||
                      (!$(f) && 63 !== f) ||
                      (this.consumeCodePoint(),
                      this.consumeUnicodeRangeToken()),
                    this.reconsumeCodePoint(e),
                    this.consumeIdentLikeToken()
                  );
                case 124:
                  if (61 === this.peekCodePoint(0))
                    return this.consumeCodePoint(), pe;
                  if (124 === this.peekCodePoint(0))
                    return this.consumeCodePoint(), ge;
                  break;
                case 126:
                  if (61 === this.peekCodePoint(0))
                    return this.consumeCodePoint(), he;
                  break;
                case -1:
                  return Te;
              }
              return ee(e)
                ? (this.consumeWhiteSpace(), Qe)
                : Z(e)
                ? (this.reconsumeCodePoint(e), this.consumeNumericToken())
                : te(e)
                ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken())
                : { type: d.DELIM_TOKEN, value: s(e) };
            }),
            (e.prototype.consumeCodePoint = function () {
              var e = this._value.shift();
              return void 0 === e ? -1 : e;
            }),
            (e.prototype.reconsumeCodePoint = function (e) {
              this._value.unshift(e);
            }),
            (e.prototype.peekCodePoint = function (e) {
              return e >= this._value.length ? -1 : this._value[e];
            }),
            (e.prototype.consumeUnicodeRangeToken = function () {
              for (
                var e = [], t = this.consumeCodePoint();
                $(t) && e.length < 6;

              )
                e.push(t), (t = this.consumeCodePoint());
              for (var A = !1; 63 === t && e.length < 6; )
                e.push(t), (t = this.consumeCodePoint()), (A = !0);
              if (A) {
                var n = parseInt(
                    s.apply(
                      void 0,
                      e.map(function (e) {
                        return 63 === e ? 48 : e;
                      })
                    ),
                    16
                  ),
                  r = parseInt(
                    s.apply(
                      void 0,
                      e.map(function (e) {
                        return 63 === e ? 70 : e;
                      })
                    ),
                    16
                  );
                return { type: d.UNICODE_RANGE_TOKEN, start: n, end: r };
              }
              var i = parseInt(s.apply(void 0, e), 16);
              if (45 === this.peekCodePoint(0) && $(this.peekCodePoint(1))) {
                this.consumeCodePoint(), (t = this.consumeCodePoint());
                for (var o = []; $(t) && o.length < 6; )
                  o.push(t), (t = this.consumeCodePoint());
                return (
                  (r = parseInt(s.apply(void 0, o), 16)),
                  { type: d.UNICODE_RANGE_TOKEN, start: i, end: r }
                );
              }
              return { type: d.UNICODE_RANGE_TOKEN, start: i, end: i };
            }),
            (e.prototype.consumeIdentLikeToken = function () {
              var e = this.consumeName();
              return "url" === e.toLowerCase() && 40 === this.peekCodePoint(0)
                ? (this.consumeCodePoint(), this.consumeUrlToken())
                : 40 === this.peekCodePoint(0)
                ? (this.consumeCodePoint(),
                  { type: d.FUNCTION_TOKEN, value: e })
                : { type: d.IDENT_TOKEN, value: e };
            }),
            (e.prototype.consumeUrlToken = function () {
              var e = [];
              if ((this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)))
                return { type: d.URL_TOKEN, value: "" };
              var t = this.peekCodePoint(0);
              if (39 === t || 34 === t) {
                var A = this.consumeStringToken(this.consumeCodePoint());
                return A.type === d.STRING_TOKEN &&
                  (this.consumeWhiteSpace(),
                  -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0))
                  ? (this.consumeCodePoint(),
                    { type: d.URL_TOKEN, value: A.value })
                  : (this.consumeBadUrlRemnants(), ve);
              }
              for (;;) {
                var n = this.consumeCodePoint();
                if (-1 === n || 41 === n)
                  return { type: d.URL_TOKEN, value: s.apply(void 0, e) };
                if (ee(n))
                  return (
                    this.consumeWhiteSpace(),
                    -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)
                      ? (this.consumeCodePoint(),
                        { type: d.URL_TOKEN, value: s.apply(void 0, e) })
                      : (this.consumeBadUrlRemnants(), ve)
                  );
                if (34 === n || 39 === n || 40 === n || ne(n))
                  return this.consumeBadUrlRemnants(), ve;
                if (92 === n) {
                  if (!re(n, this.peekCodePoint(0)))
                    return this.consumeBadUrlRemnants(), ve;
                  e.push(this.consumeEscapedCodePoint());
                } else e.push(n);
              }
            }),
            (e.prototype.consumeWhiteSpace = function () {
              for (; ee(this.peekCodePoint(0)); ) this.consumeCodePoint();
            }),
            (e.prototype.consumeBadUrlRemnants = function () {
              for (;;) {
                var e = this.consumeCodePoint();
                if (41 === e || -1 === e) return;
                re(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
              }
            }),
            (e.prototype.consumeStringSlice = function (e) {
              for (var t = ""; e > 0; ) {
                var A = Math.min(6e4, e);
                (t += s.apply(void 0, this._value.splice(0, A))), (e -= A);
              }
              return this._value.shift(), t;
            }),
            (e.prototype.consumeStringToken = function (e) {
              for (var t = "", A = 0; ; ) {
                var n = this._value[A];
                if (-1 === n || void 0 === n || n === e)
                  return (
                    (t += this.consumeStringSlice(A)),
                    { type: d.STRING_TOKEN, value: t }
                  );
                if (10 === n) return this._value.splice(0, A), Ce;
                if (92 === n) {
                  var r = this._value[A + 1];
                  -1 !== r &&
                    void 0 !== r &&
                    (10 === r
                      ? ((t += this.consumeStringSlice(A)),
                        (A = -1),
                        this._value.shift())
                      : re(n, r) &&
                        ((t += this.consumeStringSlice(A)),
                        (t += s(this.consumeEscapedCodePoint())),
                        (A = -1)));
                }
                A++;
              }
            }),
            (e.prototype.consumeNumber = function () {
              var e = [],
                t = 4,
                A = this.peekCodePoint(0);
              for (
                (43 !== A && 45 !== A) || e.push(this.consumeCodePoint());
                Z(this.peekCodePoint(0));

              )
                e.push(this.consumeCodePoint());
              A = this.peekCodePoint(0);
              var n = this.peekCodePoint(1);
              if (46 === A && Z(n))
                for (
                  e.push(this.consumeCodePoint(), this.consumeCodePoint()),
                    t = 8;
                  Z(this.peekCodePoint(0));

                )
                  e.push(this.consumeCodePoint());
              (A = this.peekCodePoint(0)), (n = this.peekCodePoint(1));
              var r = this.peekCodePoint(2);
              if (
                (69 === A || 101 === A) &&
                (((43 === n || 45 === n) && Z(r)) || Z(n))
              )
                for (
                  e.push(this.consumeCodePoint(), this.consumeCodePoint()),
                    t = 8;
                  Z(this.peekCodePoint(0));

                )
                  e.push(this.consumeCodePoint());
              return [ae(e), t];
            }),
            (e.prototype.consumeNumericToken = function () {
              var e = this.consumeNumber(),
                t = e[0],
                A = e[1],
                n = this.peekCodePoint(0),
                r = this.peekCodePoint(1),
                i = this.peekCodePoint(2);
              if (ie(n, r, i)) {
                var o = this.consumeName();
                return {
                  type: d.DIMENSION_TOKEN,
                  number: t,
                  flags: A,
                  unit: o,
                };
              }
              return 37 === n
                ? (this.consumeCodePoint(),
                  { type: d.PERCENTAGE_TOKEN, number: t, flags: A })
                : { type: d.NUMBER_TOKEN, number: t, flags: A };
            }),
            (e.prototype.consumeEscapedCodePoint = function () {
              var e = this.consumeCodePoint();
              if ($(e)) {
                for (var t = s(e); $(this.peekCodePoint(0)) && t.length < 6; )
                  t += s(this.consumeCodePoint());
                ee(this.peekCodePoint(0)) && this.consumeCodePoint();
                var A = parseInt(t, 16);
                return 0 === A ||
                  (function (e) {
                    return e >= 55296 && e <= 57343;
                  })(A) ||
                  A > 1114111
                  ? 65533
                  : A;
              }
              return -1 === e ? 65533 : e;
            }),
            (e.prototype.consumeName = function () {
              for (var e = ""; ; ) {
                var t = this.consumeCodePoint();
                if (Ae(t)) e += s(t);
                else {
                  if (!re(t, this.peekCodePoint(0)))
                    return this.reconsumeCodePoint(t), e;
                  e += s(this.consumeEscapedCodePoint());
                }
              }
            }),
            e
          );
        })(),
        Ie = (function () {
          function e(e) {
            this._tokens = e;
          }
          return (
            (e.create = function (t) {
              var A = new be();
              return A.write(t), new e(A.read());
            }),
            (e.parseValue = function (t) {
              return e.create(t).parseComponentValue();
            }),
            (e.parseValues = function (t) {
              return e.create(t).parseComponentValues();
            }),
            (e.prototype.parseComponentValue = function () {
              for (var e = this.consumeToken(); e.type === d.WHITESPACE_TOKEN; )
                e = this.consumeToken();
              if (e.type === d.EOF_TOKEN)
                throw new SyntaxError(
                  "Error parsing CSS component value, unexpected EOF"
                );
              this.reconsumeToken(e);
              var t = this.consumeComponentValue();
              do {
                e = this.consumeToken();
              } while (e.type === d.WHITESPACE_TOKEN);
              if (e.type === d.EOF_TOKEN) return t;
              throw new SyntaxError(
                "Error parsing CSS component value, multiple values found when expecting only one"
              );
            }),
            (e.prototype.parseComponentValues = function () {
              for (var e = []; ; ) {
                var t = this.consumeComponentValue();
                if (t.type === d.EOF_TOKEN) return e;
                e.push(t), e.push();
              }
            }),
            (e.prototype.consumeComponentValue = function () {
              var e = this.consumeToken();
              switch (e.type) {
                case d.LEFT_CURLY_BRACKET_TOKEN:
                case d.LEFT_SQUARE_BRACKET_TOKEN:
                case d.LEFT_PARENTHESIS_TOKEN:
                  return this.consumeSimpleBlock(e.type);
                case d.FUNCTION_TOKEN:
                  return this.consumeFunction(e);
              }
              return e;
            }),
            (e.prototype.consumeSimpleBlock = function (e) {
              for (
                var t = { type: e, values: [] }, A = this.consumeToken();
                ;

              ) {
                if (A.type === d.EOF_TOKEN || Ke(A, e)) return t;
                this.reconsumeToken(A),
                  t.values.push(this.consumeComponentValue()),
                  (A = this.consumeToken());
              }
            }),
            (e.prototype.consumeFunction = function (e) {
              for (
                var t = { name: e.value, values: [], type: d.FUNCTION };
                ;

              ) {
                var A = this.consumeToken();
                if (
                  A.type === d.EOF_TOKEN ||
                  A.type === d.RIGHT_PARENTHESIS_TOKEN
                )
                  return t;
                this.reconsumeToken(A),
                  t.values.push(this.consumeComponentValue());
              }
            }),
            (e.prototype.consumeToken = function () {
              var e = this._tokens.shift();
              return void 0 === e ? Te : e;
            }),
            (e.prototype.reconsumeToken = function (e) {
              this._tokens.unshift(e);
            }),
            e
          );
        })(),
        Ne = function (e) {
          return e.type === d.DIMENSION_TOKEN;
        },
        He = function (e) {
          return e.type === d.NUMBER_TOKEN;
        },
        _e = function (e) {
          return e.type === d.IDENT_TOKEN;
        },
        Oe = function (e) {
          return e.type === d.STRING_TOKEN;
        },
        De = function (e, t) {
          return _e(e) && e.value === t;
        },
        Le = function (e) {
          return e.type !== d.WHITESPACE_TOKEN;
        },
        Re = function (e) {
          return e.type !== d.WHITESPACE_TOKEN && e.type !== d.COMMA_TOKEN;
        },
        Me = function (e) {
          var t = [],
            A = [];
          return (
            e.forEach(function (e) {
              if (e.type === d.COMMA_TOKEN) {
                if (0 === A.length)
                  throw new Error(
                    "Error parsing function args, zero tokens for arg"
                  );
                return t.push(A), void (A = []);
              }
              e.type !== d.WHITESPACE_TOKEN && A.push(e);
            }),
            A.length && t.push(A),
            t
          );
        },
        Ke = function (e, t) {
          return (
            (t === d.LEFT_CURLY_BRACKET_TOKEN &&
              e.type === d.RIGHT_CURLY_BRACKET_TOKEN) ||
            (t === d.LEFT_SQUARE_BRACKET_TOKEN &&
              e.type === d.RIGHT_SQUARE_BRACKET_TOKEN) ||
            (t === d.LEFT_PARENTHESIS_TOKEN &&
              e.type === d.RIGHT_PARENTHESIS_TOKEN)
          );
        },
        Pe = function (e) {
          return e.type === d.NUMBER_TOKEN || e.type === d.DIMENSION_TOKEN;
        },
        xe = function (e) {
          return e.type === d.PERCENTAGE_TOKEN || Pe(e);
        },
        ke = function (e) {
          return e.length > 1 ? [e[0], e[1]] : [e[0]];
        },
        Ve = { type: d.NUMBER_TOKEN, number: 0, flags: 4 },
        Ge = { type: d.PERCENTAGE_TOKEN, number: 50, flags: 4 },
        ze = { type: d.PERCENTAGE_TOKEN, number: 100, flags: 4 },
        Je = function (e, t, A) {
          var n = e[0],
            r = e[1];
          return [Xe(n, t), Xe(void 0 !== r ? r : n, A)];
        },
        Xe = function (e, t) {
          if (e.type === d.PERCENTAGE_TOKEN) return (e.number / 100) * t;
          if (Ne(e))
            switch (e.unit) {
              case "rem":
              case "em":
                return 16 * e.number;
              case "px":
              default:
                return e.number;
            }
          return e.number;
        },
        We = function (e) {
          if (e.type === d.DIMENSION_TOKEN)
            switch (e.unit) {
              case "deg":
                return (Math.PI * e.number) / 180;
              case "grad":
                return (Math.PI / 200) * e.number;
              case "rad":
                return e.number;
              case "turn":
                return 2 * Math.PI * e.number;
            }
          throw new Error("Unsupported angle type");
        },
        Ye = function (e) {
          return (
            e.type === d.DIMENSION_TOKEN &&
            ("deg" === e.unit ||
              "grad" === e.unit ||
              "rad" === e.unit ||
              "turn" === e.unit)
          );
        },
        je = function (e) {
          switch (
            e
              .filter(_e)
              .map(function (e) {
                return e.value;
              })
              .join(" ")
          ) {
            case "to bottom right":
            case "to right bottom":
            case "left top":
            case "top left":
              return [Ve, Ve];
            case "to top":
            case "bottom":
              return qe(0);
            case "to bottom left":
            case "to left bottom":
            case "right top":
            case "top right":
              return [Ve, ze];
            case "to right":
            case "left":
              return qe(90);
            case "to top left":
            case "to left top":
            case "right bottom":
            case "bottom right":
              return [ze, ze];
            case "to bottom":
            case "top":
              return qe(180);
            case "to top right":
            case "to right top":
            case "left bottom":
            case "bottom left":
              return [ze, Ve];
            case "to left":
            case "right":
              return qe(270);
          }
          return 0;
        },
        qe = function (e) {
          return (Math.PI * e) / 180;
        },
        Ze = function (e) {
          if (e.type === d.FUNCTION) {
            var t = st[e.name];
            if (void 0 === t)
              throw new Error(
                'Attempting to parse an unsupported color function "' +
                  e.name +
                  '"'
              );
            return t(e.values);
          }
          if (e.type === d.HASH_TOKEN) {
            if (3 === e.value.length) {
              var A = e.value.substring(0, 1),
                n = e.value.substring(1, 2),
                r = e.value.substring(2, 3);
              return tt(
                parseInt(A + A, 16),
                parseInt(n + n, 16),
                parseInt(r + r, 16),
                1
              );
            }
            if (4 === e.value.length) {
              (A = e.value.substring(0, 1)),
                (n = e.value.substring(1, 2)),
                (r = e.value.substring(2, 3));
              var i = e.value.substring(3, 4);
              return tt(
                parseInt(A + A, 16),
                parseInt(n + n, 16),
                parseInt(r + r, 16),
                parseInt(i + i, 16) / 255
              );
            }
            if (6 === e.value.length)
              return (
                (A = e.value.substring(0, 2)),
                (n = e.value.substring(2, 4)),
                (r = e.value.substring(4, 6)),
                tt(parseInt(A, 16), parseInt(n, 16), parseInt(r, 16), 1)
              );
            if (8 === e.value.length)
              return (
                (A = e.value.substring(0, 2)),
                (n = e.value.substring(2, 4)),
                (r = e.value.substring(4, 6)),
                (i = e.value.substring(6, 8)),
                tt(
                  parseInt(A, 16),
                  parseInt(n, 16),
                  parseInt(r, 16),
                  parseInt(i, 16) / 255
                )
              );
          }
          if (e.type === d.IDENT_TOKEN) {
            var o = ut[e.value.toUpperCase()];
            if (void 0 !== o) return o;
          }
          return ut.TRANSPARENT;
        },
        $e = function (e) {
          return 0 == (255 & e);
        },
        et = function (e) {
          var t = 255 & e,
            A = 255 & (e >> 8),
            n = 255 & (e >> 16),
            r = 255 & (e >> 24);
          return t < 255
            ? "rgba(" + r + "," + n + "," + A + "," + t / 255 + ")"
            : "rgb(" + r + "," + n + "," + A + ")";
        },
        tt = function (e, t, A, n) {
          return (
            ((e << 24) | (t << 16) | (A << 8) | (Math.round(255 * n) << 0)) >>>
            0
          );
        },
        At = function (e, t) {
          if (e.type === d.NUMBER_TOKEN) return e.number;
          if (e.type === d.PERCENTAGE_TOKEN) {
            var A = 3 === t ? 1 : 255;
            return 3 === t
              ? (e.number / 100) * A
              : Math.round((e.number / 100) * A);
          }
          return 0;
        },
        nt = function (e) {
          var t = e.filter(Re);
          if (3 === t.length) {
            var A = t.map(At),
              n = A[0],
              r = A[1],
              i = A[2];
            return tt(n, r, i, 1);
          }
          if (4 === t.length) {
            var o = t.map(At),
              a = ((n = o[0]), (r = o[1]), (i = o[2]), o[3]);
            return tt(n, r, i, a);
          }
          return 0;
        };
      function rt(e, t, A) {
        return (
          A < 0 && (A += 1),
          A >= 1 && (A -= 1),
          A < 1 / 6
            ? (t - e) * A * 6 + e
            : A < 0.5
            ? t
            : A < 2 / 3
            ? 6 * (t - e) * (2 / 3 - A) + e
            : e
        );
      }
      var it,
        ot,
        at = function (e) {
          var t = e.filter(Re),
            A = t[0],
            n = t[1],
            r = t[2],
            i = t[3],
            o =
              (A.type === d.NUMBER_TOKEN ? qe(A.number) : We(A)) /
              (2 * Math.PI),
            a = xe(n) ? n.number / 100 : 0,
            s = xe(r) ? r.number / 100 : 0,
            u = void 0 !== i && xe(i) ? Xe(i, 1) : 1;
          if (0 === a) return tt(255 * s, 255 * s, 255 * s, 1);
          var c = s <= 0.5 ? s * (a + 1) : s + a - s * a,
            l = 2 * s - c,
            g = rt(l, c, o + 1 / 3),
            p = rt(l, c, o),
            h = rt(l, c, o - 1 / 3);
          return tt(255 * g, 255 * p, 255 * h, u);
        },
        st = { hsl: at, hsla: at, rgb: nt, rgba: nt },
        ut = {
          ALICEBLUE: 4042850303,
          ANTIQUEWHITE: 4209760255,
          AQUA: 16777215,
          AQUAMARINE: 2147472639,
          AZURE: 4043309055,
          BEIGE: 4126530815,
          BISQUE: 4293182719,
          BLACK: 255,
          BLANCHEDALMOND: 4293643775,
          BLUE: 65535,
          BLUEVIOLET: 2318131967,
          BROWN: 2771004159,
          BURLYWOOD: 3736635391,
          CADETBLUE: 1604231423,
          CHARTREUSE: 2147418367,
          CHOCOLATE: 3530104575,
          CORAL: 4286533887,
          CORNFLOWERBLUE: 1687547391,
          CORNSILK: 4294499583,
          CRIMSON: 3692313855,
          CYAN: 16777215,
          DARKBLUE: 35839,
          DARKCYAN: 9145343,
          DARKGOLDENROD: 3095837695,
          DARKGRAY: 2846468607,
          DARKGREEN: 6553855,
          DARKGREY: 2846468607,
          DARKKHAKI: 3182914559,
          DARKMAGENTA: 2332068863,
          DARKOLIVEGREEN: 1433087999,
          DARKORANGE: 4287365375,
          DARKORCHID: 2570243327,
          DARKRED: 2332033279,
          DARKSALMON: 3918953215,
          DARKSEAGREEN: 2411499519,
          DARKSLATEBLUE: 1211993087,
          DARKSLATEGRAY: 793726975,
          DARKSLATEGREY: 793726975,
          DARKTURQUOISE: 13554175,
          DARKVIOLET: 2483082239,
          DEEPPINK: 4279538687,
          DEEPSKYBLUE: 12582911,
          DIMGRAY: 1768516095,
          DIMGREY: 1768516095,
          DODGERBLUE: 512819199,
          FIREBRICK: 2988581631,
          FLORALWHITE: 4294635775,
          FORESTGREEN: 579543807,
          FUCHSIA: 4278255615,
          GAINSBORO: 3705462015,
          GHOSTWHITE: 4177068031,
          GOLD: 4292280575,
          GOLDENROD: 3668254975,
          GRAY: 2155905279,
          GREEN: 8388863,
          GREENYELLOW: 2919182335,
          GREY: 2155905279,
          HONEYDEW: 4043305215,
          HOTPINK: 4285117695,
          INDIANRED: 3445382399,
          INDIGO: 1258324735,
          IVORY: 4294963455,
          KHAKI: 4041641215,
          LAVENDER: 3873897215,
          LAVENDERBLUSH: 4293981695,
          LAWNGREEN: 2096890111,
          LEMONCHIFFON: 4294626815,
          LIGHTBLUE: 2916673279,
          LIGHTCORAL: 4034953471,
          LIGHTCYAN: 3774873599,
          LIGHTGOLDENRODYELLOW: 4210742015,
          LIGHTGRAY: 3553874943,
          LIGHTGREEN: 2431553791,
          LIGHTGREY: 3553874943,
          LIGHTPINK: 4290167295,
          LIGHTSALMON: 4288707327,
          LIGHTSEAGREEN: 548580095,
          LIGHTSKYBLUE: 2278488831,
          LIGHTSLATEGRAY: 2005441023,
          LIGHTSLATEGREY: 2005441023,
          LIGHTSTEELBLUE: 2965692159,
          LIGHTYELLOW: 4294959359,
          LIME: 16711935,
          LIMEGREEN: 852308735,
          LINEN: 4210091775,
          MAGENTA: 4278255615,
          MAROON: 2147483903,
          MEDIUMAQUAMARINE: 1724754687,
          MEDIUMBLUE: 52735,
          MEDIUMORCHID: 3126187007,
          MEDIUMPURPLE: 2473647103,
          MEDIUMSEAGREEN: 1018393087,
          MEDIUMSLATEBLUE: 2070474495,
          MEDIUMSPRINGGREEN: 16423679,
          MEDIUMTURQUOISE: 1221709055,
          MEDIUMVIOLETRED: 3340076543,
          MIDNIGHTBLUE: 421097727,
          MINTCREAM: 4127193855,
          MISTYROSE: 4293190143,
          MOCCASIN: 4293178879,
          NAVAJOWHITE: 4292783615,
          NAVY: 33023,
          OLDLACE: 4260751103,
          OLIVE: 2155872511,
          OLIVEDRAB: 1804477439,
          ORANGE: 4289003775,
          ORANGERED: 4282712319,
          ORCHID: 3664828159,
          PALEGOLDENROD: 4008225535,
          PALEGREEN: 2566625535,
          PALETURQUOISE: 2951671551,
          PALEVIOLETRED: 3681588223,
          PAPAYAWHIP: 4293907967,
          PEACHPUFF: 4292524543,
          PERU: 3448061951,
          PINK: 4290825215,
          PLUM: 3718307327,
          POWDERBLUE: 2967529215,
          PURPLE: 2147516671,
          REBECCAPURPLE: 1714657791,
          RED: 4278190335,
          ROSYBROWN: 3163525119,
          ROYALBLUE: 1097458175,
          SADDLEBROWN: 2336560127,
          SALMON: 4202722047,
          SANDYBROWN: 4104413439,
          SEAGREEN: 780883967,
          SEASHELL: 4294307583,
          SIENNA: 2689740287,
          SILVER: 3233857791,
          SKYBLUE: 2278484991,
          SLATEBLUE: 1784335871,
          SLATEGRAY: 1887473919,
          SLATEGREY: 1887473919,
          SNOW: 4294638335,
          SPRINGGREEN: 16744447,
          STEELBLUE: 1182971135,
          TAN: 3535047935,
          TEAL: 8421631,
          THISTLE: 3636451583,
          TOMATO: 4284696575,
          TRANSPARENT: 0,
          TURQUOISE: 1088475391,
          VIOLET: 4001558271,
          WHEAT: 4125012991,
          WHITE: 4294967295,
          WHITESMOKE: 4126537215,
          YELLOW: 4294902015,
          YELLOWGREEN: 2597139199,
        };
      (function (e) {
        (e[(e.VALUE = 0)] = "VALUE"),
          (e[(e.LIST = 1)] = "LIST"),
          (e[(e.IDENT_VALUE = 2)] = "IDENT_VALUE"),
          (e[(e.TYPE_VALUE = 3)] = "TYPE_VALUE"),
          (e[(e.TOKEN_VALUE = 4)] = "TOKEN_VALUE");
      })(it || (it = {})),
        (function (e) {
          (e[(e.BORDER_BOX = 0)] = "BORDER_BOX"),
            (e[(e.PADDING_BOX = 1)] = "PADDING_BOX"),
            (e[(e.CONTENT_BOX = 2)] = "CONTENT_BOX");
        })(ot || (ot = {}));
      var ct,
        lt,
        dt,
        gt = {
          name: "background-clip",
          initialValue: "border-box",
          prefix: !1,
          type: it.LIST,
          parse: function (e) {
            return e.map(function (e) {
              if (_e(e))
                switch (e.value) {
                  case "padding-box":
                    return ot.PADDING_BOX;
                  case "content-box":
                    return ot.CONTENT_BOX;
                }
              return ot.BORDER_BOX;
            });
          },
        },
        pt = {
          name: "background-color",
          initialValue: "transparent",
          prefix: !1,
          type: it.TYPE_VALUE,
          format: "color",
        },
        ht = function (e) {
          var t = Ze(e[0]),
            A = e[1];
          return A && xe(A) ? { color: t, stop: A } : { color: t, stop: null };
        },
        ft = function (e, t) {
          var A = e[0],
            n = e[e.length - 1];
          null === A.stop && (A.stop = Ve), null === n.stop && (n.stop = ze);
          for (var r = [], i = 0, o = 0; o < e.length; o++) {
            var a = e[o].stop;
            if (null !== a) {
              var s = Xe(a, t);
              s > i ? r.push(s) : r.push(i), (i = s);
            } else r.push(null);
          }
          var u = null;
          for (o = 0; o < r.length; o++) {
            var c = r[o];
            if (null === c) null === u && (u = o);
            else if (null !== u) {
              for (
                var l = o - u, d = (c - r[u - 1]) / (l + 1), g = 1;
                g <= l;
                g++
              )
                r[u + g - 1] = d * g;
              u = null;
            }
          }
          return e.map(function (e, A) {
            return { color: e.color, stop: Math.max(Math.min(1, r[A] / t), 0) };
          });
        },
        Bt = function (e, t, A) {
          var n =
              "number" == typeof e
                ? e
                : (function (e, t, A) {
                    var n = t / 2,
                      r = A / 2,
                      i = Xe(e[0], t) - n,
                      o = r - Xe(e[1], A);
                    return (Math.atan2(o, i) + 2 * Math.PI) % (2 * Math.PI);
                  })(e, t, A),
            r = Math.abs(t * Math.sin(n)) + Math.abs(A * Math.cos(n)),
            i = t / 2,
            o = A / 2,
            a = r / 2,
            s = Math.sin(n - Math.PI / 2) * a,
            u = Math.cos(n - Math.PI / 2) * a;
          return [r, i - u, i + u, o - s, o + s];
        },
        mt = function (e, t) {
          return Math.sqrt(e * e + t * t);
        },
        vt = function (e, t, A, n, r) {
          return [
            [0, 0],
            [0, t],
            [e, 0],
            [e, t],
          ].reduce(
            function (e, t) {
              var i = t[0],
                o = t[1],
                a = mt(A - i, n - o);
              return (r ? a < e.optimumDistance : a > e.optimumDistance)
                ? { optimumCorner: t, optimumDistance: a }
                : e;
            },
            { optimumDistance: r ? 1 / 0 : -1 / 0, optimumCorner: null }
          ).optimumCorner;
        },
        Ct = function (e) {
          var t = qe(180),
            A = [];
          return (
            Me(e).forEach(function (e, n) {
              if (0 === n) {
                var r = e[0];
                if (
                  r.type === d.IDENT_TOKEN &&
                  -1 !== ["top", "left", "right", "bottom"].indexOf(r.value)
                )
                  return void (t = je(e));
                if (Ye(r)) return void (t = (We(r) + qe(270)) % qe(360));
              }
              var i = ht(e);
              A.push(i);
            }),
            { angle: t, stops: A, type: ct.LINEAR_GRADIENT }
          );
        },
        wt = function (e) {
          return 0 === e[0] && 255 === e[1] && 0 === e[2] && 255 === e[3];
        },
        yt = function (e, t, A, n, r) {
          var i = "http://www.w3.org/2000/svg",
            o = document.createElementNS(i, "svg"),
            a = document.createElementNS(i, "foreignObject");
          return (
            o.setAttributeNS(null, "width", e.toString()),
            o.setAttributeNS(null, "height", t.toString()),
            a.setAttributeNS(null, "width", "100%"),
            a.setAttributeNS(null, "height", "100%"),
            a.setAttributeNS(null, "x", A.toString()),
            a.setAttributeNS(null, "y", n.toString()),
            a.setAttributeNS(null, "externalResourcesRequired", "true"),
            o.appendChild(a),
            a.appendChild(r),
            o
          );
        },
        Et = function (e) {
          return new Promise(function (t, A) {
            var n = new Image();
            (n.onload = function () {
              return t(n);
            }),
              (n.onerror = A),
              (n.src =
                "data:image/svg+xml;charset=utf-8," +
                encodeURIComponent(new XMLSerializer().serializeToString(e)));
          });
        },
        Ft = {
          get SUPPORT_RANGE_BOUNDS() {
            var e = (function (e) {
              if (e.createRange) {
                var t = e.createRange();
                if (t.getBoundingClientRect) {
                  var A = e.createElement("boundtest");
                  (A.style.height = "123px"),
                    (A.style.display = "block"),
                    e.body.appendChild(A),
                    t.selectNode(A);
                  var n = t.getBoundingClientRect(),
                    r = Math.round(n.height);
                  if ((e.body.removeChild(A), 123 === r)) return !0;
                }
              }
              return !1;
            })(document);
            return (
              Object.defineProperty(Ft, "SUPPORT_RANGE_BOUNDS", { value: e }), e
            );
          },
          get SUPPORT_SVG_DRAWING() {
            var e = (function (e) {
              var t = new Image(),
                A = e.createElement("canvas"),
                n = A.getContext("2d");
              if (!n) return !1;
              t.src =
                "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
              try {
                n.drawImage(t, 0, 0), A.toDataURL();
              } catch (e) {
                return !1;
              }
              return !0;
            })(document);
            return (
              Object.defineProperty(Ft, "SUPPORT_SVG_DRAWING", { value: e }), e
            );
          },
          get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var e =
              "function" == typeof Array.from &&
              "function" == typeof window.fetch
                ? (function (e) {
                    var t = e.createElement("canvas");
                    (t.width = 100), (t.height = 100);
                    var A = t.getContext("2d");
                    if (!A) return Promise.reject(!1);
                    (A.fillStyle = "rgb(0, 255, 0)"),
                      A.fillRect(0, 0, 100, 100);
                    var n = new Image(),
                      r = t.toDataURL();
                    n.src = r;
                    var i = yt(100, 100, 0, 0, n);
                    return (
                      (A.fillStyle = "red"),
                      A.fillRect(0, 0, 100, 100),
                      Et(i)
                        .then(function (t) {
                          A.drawImage(t, 0, 0);
                          var n = A.getImageData(0, 0, 100, 100).data;
                          (A.fillStyle = "red"), A.fillRect(0, 0, 100, 100);
                          var i = e.createElement("div");
                          return (
                            (i.style.backgroundImage = "url(" + r + ")"),
                            (i.style.height = "100px"),
                            wt(n)
                              ? Et(yt(100, 100, 0, 0, i))
                              : Promise.reject(!1)
                          );
                        })
                        .then(function (e) {
                          return (
                            A.drawImage(e, 0, 0),
                            wt(A.getImageData(0, 0, 100, 100).data)
                          );
                        })
                        .catch(function () {
                          return !1;
                        })
                    );
                  })(document)
                : Promise.resolve(!1);
            return (
              Object.defineProperty(Ft, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                value: e,
              }),
              e
            );
          },
          get SUPPORT_CORS_IMAGES() {
            var e = void 0 !== new Image().crossOrigin;
            return (
              Object.defineProperty(Ft, "SUPPORT_CORS_IMAGES", { value: e }), e
            );
          },
          get SUPPORT_RESPONSE_TYPE() {
            var e = "string" == typeof new XMLHttpRequest().responseType;
            return (
              Object.defineProperty(Ft, "SUPPORT_RESPONSE_TYPE", { value: e }),
              e
            );
          },
          get SUPPORT_CORS_XHR() {
            var e = "withCredentials" in new XMLHttpRequest();
            return (
              Object.defineProperty(Ft, "SUPPORT_CORS_XHR", { value: e }), e
            );
          },
        },
        Ut = (function () {
          function e(e) {
            var t = e.id,
              A = e.enabled;
            (this.id = t), (this.enabled = A), (this.start = Date.now());
          }
          return (
            (e.prototype.debug = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.enabled &&
                ("undefined" != typeof window &&
                window.console &&
                "function" == typeof console.debug
                  ? console.debug.apply(
                      console,
                      [this.id, this.getTime() + "ms"].concat(e)
                    )
                  : this.info.apply(this, e));
            }),
            (e.prototype.getTime = function () {
              return Date.now() - this.start;
            }),
            (e.create = function (t) {
              e.instances[t.id] = new e(t);
            }),
            (e.destroy = function (t) {
              delete e.instances[t];
            }),
            (e.getInstance = function (t) {
              var A = e.instances[t];
              if (void 0 === A)
                throw new Error("No logger instance found with id " + t);
              return A;
            }),
            (e.prototype.info = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.enabled &&
                "undefined" != typeof window &&
                window.console &&
                "function" == typeof console.info &&
                console.info.apply(
                  console,
                  [this.id, this.getTime() + "ms"].concat(e)
                );
            }),
            (e.prototype.error = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.enabled &&
                ("undefined" != typeof window &&
                window.console &&
                "function" == typeof console.error
                  ? console.error.apply(
                      console,
                      [this.id, this.getTime() + "ms"].concat(e)
                    )
                  : this.info.apply(this, e));
            }),
            (e.instances = {}),
            e
          );
        })(),
        St = (function () {
          function e() {}
          return (
            (e.create = function (t, A) {
              return (e._caches[t] = new Qt(t, A));
            }),
            (e.destroy = function (t) {
              delete e._caches[t];
            }),
            (e.open = function (t) {
              var A = e._caches[t];
              if (void 0 !== A) return A;
              throw new Error('Cache with key "' + t + '" not found');
            }),
            (e.getOrigin = function (t) {
              var A = e._link;
              return A
                ? ((A.href = t),
                  (A.href = A.href),
                  A.protocol + A.hostname + A.port)
                : "about:blank";
            }),
            (e.isSameOrigin = function (t) {
              return e.getOrigin(t) === e._origin;
            }),
            (e.setContext = function (t) {
              (e._link = t.document.createElement("a")),
                (e._origin = e.getOrigin(t.location.href));
            }),
            (e.getInstance = function () {
              var t = e._current;
              if (null === t) throw new Error("No cache instance attached");
              return t;
            }),
            (e.attachInstance = function (t) {
              e._current = t;
            }),
            (e.detachInstance = function () {
              e._current = null;
            }),
            (e._caches = {}),
            (e._origin = "about:blank"),
            (e._current = null),
            e
          );
        })(),
        Qt = (function () {
          function e(e, t) {
            (this.id = e), (this._options = t), (this._cache = {});
          }
          return (
            (e.prototype.addImage = function (e) {
              var t = Promise.resolve();
              return this.has(e)
                ? t
                : Ot(e) || Nt(e)
                ? ((this._cache[e] = this.loadImage(e)), t)
                : t;
            }),
            (e.prototype.match = function (e) {
              return this._cache[e];
            }),
            (e.prototype.loadImage = function (e) {
              return n(this, void 0, void 0, function () {
                var t,
                  A,
                  n,
                  i,
                  o = this;
                return r(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (t = St.isSameOrigin(e)),
                        (A =
                          !Ht(e) &&
                          !0 === this._options.useCORS &&
                          Ft.SUPPORT_CORS_IMAGES &&
                          !t),
                        (n =
                          !Ht(e) &&
                          !t &&
                          "string" == typeof this._options.proxy &&
                          Ft.SUPPORT_CORS_XHR &&
                          !A),
                        t || !1 !== this._options.allowTaint || Ht(e) || n || A
                          ? ((i = e), n ? [4, this.proxy(i)] : [3, 2])
                          : [2]
                      );
                    case 1:
                      (i = r.sent()), (r.label = 2);
                    case 2:
                      return (
                        Ut.getInstance(this.id).debug(
                          "Added image " + e.substring(0, 256)
                        ),
                        [
                          4,
                          new Promise(function (e, t) {
                            var n = new Image();
                            (n.onload = function () {
                              return e(n);
                            }),
                              (n.onerror = t),
                              (_t(i) || A) && (n.crossOrigin = "anonymous"),
                              (n.src = i),
                              !0 === n.complete &&
                                setTimeout(function () {
                                  return e(n);
                                }, 500),
                              o._options.imageTimeout > 0 &&
                                setTimeout(function () {
                                  return t(
                                    "Timed out (" +
                                      o._options.imageTimeout +
                                      "ms) loading image"
                                  );
                                }, o._options.imageTimeout);
                          }),
                        ]
                      );
                    case 3:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (e.prototype.has = function (e) {
              return void 0 !== this._cache[e];
            }),
            (e.prototype.keys = function () {
              return Promise.resolve(Object.keys(this._cache));
            }),
            (e.prototype.proxy = function (e) {
              var t = this,
                A = this._options.proxy;
              if (!A) throw new Error("No proxy defined");
              var n = e.substring(0, 256);
              return new Promise(function (r, i) {
                var o = Ft.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                  a = new XMLHttpRequest();
                if (
                  ((a.onload = function () {
                    if (200 === a.status)
                      if ("text" === o) r(a.response);
                      else {
                        var e = new FileReader();
                        e.addEventListener(
                          "load",
                          function () {
                            return r(e.result);
                          },
                          !1
                        ),
                          e.addEventListener(
                            "error",
                            function (e) {
                              return i(e);
                            },
                            !1
                          ),
                          e.readAsDataURL(a.response);
                      }
                    else
                      i(
                        "Failed to proxy resource " +
                          n +
                          " with status code " +
                          a.status
                      );
                  }),
                  (a.onerror = i),
                  a.open(
                    "GET",
                    A + "?url=" + encodeURIComponent(e) + "&responseType=" + o
                  ),
                  "text" !== o &&
                    a instanceof XMLHttpRequest &&
                    (a.responseType = o),
                  t._options.imageTimeout)
                ) {
                  var s = t._options.imageTimeout;
                  (a.timeout = s),
                    (a.ontimeout = function () {
                      return i("Timed out (" + s + "ms) proxying " + n);
                    });
                }
                a.send();
              });
            }),
            e
          );
        })(),
        Tt = /^data:image\/svg\+xml/i,
        bt = /^data:image\/.*;base64,/i,
        It = /^data:image\/.*/i,
        Nt = function (e) {
          return Ft.SUPPORT_SVG_DRAWING || !Dt(e);
        },
        Ht = function (e) {
          return It.test(e);
        },
        _t = function (e) {
          return bt.test(e);
        },
        Ot = function (e) {
          return "blob" === e.substr(0, 4);
        },
        Dt = function (e) {
          return "svg" === e.substr(-3).toLowerCase() || Tt.test(e);
        },
        Lt = function (e) {
          var t = lt.CIRCLE,
            A = dt.FARTHEST_CORNER,
            n = [],
            r = [];
          return (
            Me(e).forEach(function (e, i) {
              var o = !0;
              if (
                (0 === i
                  ? (o = e.reduce(function (e, t) {
                      if (_e(t))
                        switch (t.value) {
                          case "center":
                            return r.push(Ge), !1;
                          case "top":
                          case "left":
                            return r.push(Ve), !1;
                          case "right":
                          case "bottom":
                            return r.push(ze), !1;
                        }
                      else if (xe(t) || Pe(t)) return r.push(t), !1;
                      return e;
                    }, o))
                  : 1 === i &&
                    (o = e.reduce(function (e, n) {
                      if (_e(n))
                        switch (n.value) {
                          case "circle":
                            return (t = lt.CIRCLE), !1;
                          case "ellipse":
                            return (t = lt.ELLIPSE), !1;
                          case "contain":
                          case "closest-side":
                            return (A = dt.CLOSEST_SIDE), !1;
                          case "farthest-side":
                            return (A = dt.FARTHEST_SIDE), !1;
                          case "closest-corner":
                            return (A = dt.CLOSEST_CORNER), !1;
                          case "cover":
                          case "farthest-corner":
                            return (A = dt.FARTHEST_CORNER), !1;
                        }
                      else if (Pe(n) || xe(n))
                        return Array.isArray(A) || (A = []), A.push(n), !1;
                      return e;
                    }, o)),
                o)
              ) {
                var a = ht(e);
                n.push(a);
              }
            }),
            {
              size: A,
              shape: t,
              stops: n,
              position: r,
              type: ct.RADIAL_GRADIENT,
            }
          );
        };
      !(function (e) {
        (e[(e.URL = 0)] = "URL"),
          (e[(e.LINEAR_GRADIENT = 1)] = "LINEAR_GRADIENT"),
          (e[(e.RADIAL_GRADIENT = 2)] = "RADIAL_GRADIENT");
      })(ct || (ct = {})),
        (function (e) {
          (e[(e.CIRCLE = 0)] = "CIRCLE"), (e[(e.ELLIPSE = 1)] = "ELLIPSE");
        })(lt || (lt = {})),
        (function (e) {
          (e[(e.CLOSEST_SIDE = 0)] = "CLOSEST_SIDE"),
            (e[(e.FARTHEST_SIDE = 1)] = "FARTHEST_SIDE"),
            (e[(e.CLOSEST_CORNER = 2)] = "CLOSEST_CORNER"),
            (e[(e.FARTHEST_CORNER = 3)] = "FARTHEST_CORNER");
        })(dt || (dt = {}));
      var Rt,
        Mt = function (e) {
          if (e.type === d.URL_TOKEN) {
            var t = { url: e.value, type: ct.URL };
            return St.getInstance().addImage(e.value), t;
          }
          if (e.type === d.FUNCTION) {
            var A = Kt[e.name];
            if (void 0 === A)
              throw new Error(
                'Attempting to parse an unsupported image function "' +
                  e.name +
                  '"'
              );
            return A(e.values);
          }
          throw new Error("Unsupported image type");
        },
        Kt = {
          "linear-gradient": function (e) {
            var t = qe(180),
              A = [];
            return (
              Me(e).forEach(function (e, n) {
                if (0 === n) {
                  var r = e[0];
                  if (r.type === d.IDENT_TOKEN && "to" === r.value)
                    return void (t = je(e));
                  if (Ye(r)) return void (t = We(r));
                }
                var i = ht(e);
                A.push(i);
              }),
              { angle: t, stops: A, type: ct.LINEAR_GRADIENT }
            );
          },
          "-moz-linear-gradient": Ct,
          "-ms-linear-gradient": Ct,
          "-o-linear-gradient": Ct,
          "-webkit-linear-gradient": Ct,
          "radial-gradient": function (e) {
            var t = lt.CIRCLE,
              A = dt.FARTHEST_CORNER,
              n = [],
              r = [];
            return (
              Me(e).forEach(function (e, i) {
                var o = !0;
                if (0 === i) {
                  var a = !1;
                  o = e.reduce(function (e, n) {
                    if (a)
                      if (_e(n))
                        switch (n.value) {
                          case "center":
                            return r.push(Ge), e;
                          case "top":
                          case "left":
                            return r.push(Ve), e;
                          case "right":
                          case "bottom":
                            return r.push(ze), e;
                        }
                      else (xe(n) || Pe(n)) && r.push(n);
                    else if (_e(n))
                      switch (n.value) {
                        case "circle":
                          return (t = lt.CIRCLE), !1;
                        case "ellipse":
                          return (t = lt.ELLIPSE), !1;
                        case "at":
                          return (a = !0), !1;
                        case "closest-side":
                          return (A = dt.CLOSEST_SIDE), !1;
                        case "cover":
                        case "farthest-side":
                          return (A = dt.FARTHEST_SIDE), !1;
                        case "contain":
                        case "closest-corner":
                          return (A = dt.CLOSEST_CORNER), !1;
                        case "farthest-corner":
                          return (A = dt.FARTHEST_CORNER), !1;
                      }
                    else if (Pe(n) || xe(n))
                      return Array.isArray(A) || (A = []), A.push(n), !1;
                    return e;
                  }, o);
                }
                if (o) {
                  var s = ht(e);
                  n.push(s);
                }
              }),
              {
                size: A,
                shape: t,
                stops: n,
                position: r,
                type: ct.RADIAL_GRADIENT,
              }
            );
          },
          "-moz-radial-gradient": Lt,
          "-ms-radial-gradient": Lt,
          "-o-radial-gradient": Lt,
          "-webkit-radial-gradient": Lt,
          "-webkit-gradient": function (e) {
            var t = qe(180),
              A = [],
              n = ct.LINEAR_GRADIENT,
              r = lt.CIRCLE,
              i = dt.FARTHEST_CORNER;
            return (
              Me(e).forEach(function (e, t) {
                var r = e[0];
                if (0 === t) {
                  if (_e(r) && "linear" === r.value)
                    return void (n = ct.LINEAR_GRADIENT);
                  if (_e(r) && "radial" === r.value)
                    return void (n = ct.RADIAL_GRADIENT);
                }
                if (r.type === d.FUNCTION)
                  if ("from" === r.name) {
                    var i = Ze(r.values[0]);
                    A.push({ stop: Ve, color: i });
                  } else if ("to" === r.name)
                    (i = Ze(r.values[0])), A.push({ stop: ze, color: i });
                  else if ("color-stop" === r.name) {
                    var o = r.values.filter(Re);
                    if (2 === o.length) {
                      i = Ze(o[1]);
                      var a = o[0];
                      He(a) &&
                        A.push({
                          stop: {
                            type: d.PERCENTAGE_TOKEN,
                            number: 100 * a.number,
                            flags: a.flags,
                          },
                          color: i,
                        });
                    }
                  }
              }),
              n === ct.LINEAR_GRADIENT
                ? { angle: (t + qe(180)) % qe(360), stops: A, type: n }
                : { size: i, shape: r, stops: A, position: [], type: n }
            );
          },
        },
        Pt = {
          name: "background-image",
          initialValue: "none",
          type: it.LIST,
          prefix: !1,
          parse: function (e) {
            if (0 === e.length) return [];
            var t = e[0];
            return t.type === d.IDENT_TOKEN && "none" === t.value
              ? []
              : e
                  .filter(function (e) {
                    return (
                      Re(e) &&
                      (function (e) {
                        return e.type !== d.FUNCTION || Kt[e.name];
                      })(e)
                    );
                  })
                  .map(Mt);
          },
        },
        xt = {
          name: "background-origin",
          initialValue: "border-box",
          prefix: !1,
          type: it.LIST,
          parse: function (e) {
            return e.map(function (e) {
              if (_e(e))
                switch (e.value) {
                  case "padding-box":
                    return 1;
                  case "content-box":
                    return 2;
                }
              return 0;
            });
          },
        },
        kt = {
          name: "background-position",
          initialValue: "0% 0%",
          type: it.LIST,
          prefix: !1,
          parse: function (e) {
            return Me(e)
              .map(function (e) {
                return e.filter(xe);
              })
              .map(ke);
          },
        };
      !(function (e) {
        (e[(e.REPEAT = 0)] = "REPEAT"),
          (e[(e.NO_REPEAT = 1)] = "NO_REPEAT"),
          (e[(e.REPEAT_X = 2)] = "REPEAT_X"),
          (e[(e.REPEAT_Y = 3)] = "REPEAT_Y");
      })(Rt || (Rt = {}));
      var Vt,
        Gt = {
          name: "background-repeat",
          initialValue: "repeat",
          prefix: !1,
          type: it.LIST,
          parse: function (e) {
            return Me(e)
              .map(function (e) {
                return e
                  .filter(_e)
                  .map(function (e) {
                    return e.value;
                  })
                  .join(" ");
              })
              .map(zt);
          },
        },
        zt = function (e) {
          switch (e) {
            case "no-repeat":
              return Rt.NO_REPEAT;
            case "repeat-x":
            case "repeat no-repeat":
              return Rt.REPEAT_X;
            case "repeat-y":
            case "no-repeat repeat":
              return Rt.REPEAT_Y;
            case "repeat":
            default:
              return Rt.REPEAT;
          }
        };
      !(function (e) {
        (e.AUTO = "auto"), (e.CONTAIN = "contain"), (e.COVER = "cover");
      })(Vt || (Vt = {}));
      var Jt,
        Xt = {
          name: "background-size",
          initialValue: "0",
          prefix: !1,
          type: it.LIST,
          parse: function (e) {
            return Me(e).map(function (e) {
              return e.filter(Wt);
            });
          },
        },
        Wt = function (e) {
          return _e(e) || xe(e);
        },
        Yt = function (e) {
          return {
            name: "border-" + e + "-color",
            initialValue: "transparent",
            prefix: !1,
            type: it.TYPE_VALUE,
            format: "color",
          };
        },
        jt = Yt("top"),
        qt = Yt("right"),
        Zt = Yt("bottom"),
        $t = Yt("left"),
        eA = function (e) {
          return {
            name: "border-radius-" + e,
            initialValue: "0 0",
            prefix: !1,
            type: it.LIST,
            parse: function (e) {
              return ke(e.filter(xe));
            },
          };
        },
        tA = eA("top-left"),
        AA = eA("top-right"),
        nA = eA("bottom-right"),
        rA = eA("bottom-left");
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"), (e[(e.SOLID = 1)] = "SOLID");
      })(Jt || (Jt = {}));
      var iA,
        oA = function (e) {
          return {
            name: "border-" + e + "-style",
            initialValue: "solid",
            prefix: !1,
            type: it.IDENT_VALUE,
            parse: function (e) {
              switch (e) {
                case "none":
                  return Jt.NONE;
              }
              return Jt.SOLID;
            },
          };
        },
        aA = oA("top"),
        sA = oA("right"),
        uA = oA("bottom"),
        cA = oA("left"),
        lA = function (e) {
          return {
            name: "border-" + e + "-width",
            initialValue: "0",
            type: it.VALUE,
            prefix: !1,
            parse: function (e) {
              return Ne(e) ? e.number : 0;
            },
          };
        },
        dA = lA("top"),
        gA = lA("right"),
        pA = lA("bottom"),
        hA = lA("left"),
        fA = {
          name: "color",
          initialValue: "transparent",
          prefix: !1,
          type: it.TYPE_VALUE,
          format: "color",
        },
        BA = {
          name: "display",
          initialValue: "inline-block",
          prefix: !1,
          type: it.LIST,
          parse: function (e) {
            return e.filter(_e).reduce(function (e, t) {
              return e | mA(t.value);
            }, 0);
          },
        },
        mA = function (e) {
          switch (e) {
            case "block":
              return 2;
            case "inline":
              return 4;
            case "run-in":
              return 8;
            case "flow":
              return 16;
            case "flow-root":
              return 32;
            case "table":
              return 64;
            case "flex":
            case "-webkit-flex":
              return 128;
            case "grid":
            case "-ms-grid":
              return 256;
            case "ruby":
              return 512;
            case "subgrid":
              return 1024;
            case "list-item":
              return 2048;
            case "table-row-group":
              return 4096;
            case "table-header-group":
              return 8192;
            case "table-footer-group":
              return 16384;
            case "table-row":
              return 32768;
            case "table-cell":
              return 65536;
            case "table-column-group":
              return 131072;
            case "table-column":
              return 262144;
            case "table-caption":
              return 524288;
            case "ruby-base":
              return 1048576;
            case "ruby-text":
              return 2097152;
            case "ruby-base-container":
              return 4194304;
            case "ruby-text-container":
              return 8388608;
            case "contents":
              return 16777216;
            case "inline-block":
              return 33554432;
            case "inline-list-item":
              return 67108864;
            case "inline-table":
              return 134217728;
            case "inline-flex":
              return 268435456;
            case "inline-grid":
              return 536870912;
          }
          return 0;
        };
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.LEFT = 1)] = "LEFT"),
          (e[(e.RIGHT = 2)] = "RIGHT"),
          (e[(e.INLINE_START = 3)] = "INLINE_START"),
          (e[(e.INLINE_END = 4)] = "INLINE_END");
      })(iA || (iA = {}));
      var vA,
        CA = {
          name: "float",
          initialValue: "none",
          prefix: !1,
          type: it.IDENT_VALUE,
          parse: function (e) {
            switch (e) {
              case "left":
                return iA.LEFT;
              case "right":
                return iA.RIGHT;
              case "inline-start":
                return iA.INLINE_START;
              case "inline-end":
                return iA.INLINE_END;
            }
            return iA.NONE;
          },
        },
        wA = {
          name: "letter-spacing",
          initialValue: "0",
          prefix: !1,
          type: it.VALUE,
          parse: function (e) {
            return e.type === d.IDENT_TOKEN && "normal" === e.value
              ? 0
              : e.type === d.NUMBER_TOKEN || e.type === d.DIMENSION_TOKEN
              ? e.number
              : 0;
          },
        };
      !(function (e) {
        (e.NORMAL = "normal"), (e.STRICT = "strict");
      })(vA || (vA = {}));
      var yA,
        EA = {
          name: "line-break",
          initialValue: "normal",
          prefix: !1,
          type: it.IDENT_VALUE,
          parse: function (e) {
            switch (e) {
              case "strict":
                return vA.STRICT;
              case "normal":
              default:
                return vA.NORMAL;
            }
          },
        },
        FA = {
          name: "line-height",
          initialValue: "normal",
          prefix: !1,
          type: it.TOKEN_VALUE,
        },
        UA = {
          name: "list-style-image",
          initialValue: "none",
          type: it.VALUE,
          prefix: !1,
          parse: function (e) {
            return e.type === d.IDENT_TOKEN && "none" === e.value
              ? null
              : Mt(e);
          },
        };
      !(function (e) {
        (e[(e.INSIDE = 0)] = "INSIDE"), (e[(e.OUTSIDE = 1)] = "OUTSIDE");
      })(yA || (yA = {}));
      var SA,
        QA = {
          name: "list-style-position",
          initialValue: "outside",
          prefix: !1,
          type: it.IDENT_VALUE,
          parse: function (e) {
            switch (e) {
              case "inside":
                return yA.INSIDE;
              case "outside":
              default:
                return yA.OUTSIDE;
            }
          },
        };
      !(function (e) {
        (e[(e.NONE = -1)] = "NONE"),
          (e[(e.DISC = 0)] = "DISC"),
          (e[(e.CIRCLE = 1)] = "CIRCLE"),
          (e[(e.SQUARE = 2)] = "SQUARE"),
          (e[(e.DECIMAL = 3)] = "DECIMAL"),
          (e[(e.CJK_DECIMAL = 4)] = "CJK_DECIMAL"),
          (e[(e.DECIMAL_LEADING_ZERO = 5)] = "DECIMAL_LEADING_ZERO"),
          (e[(e.LOWER_ROMAN = 6)] = "LOWER_ROMAN"),
          (e[(e.UPPER_ROMAN = 7)] = "UPPER_ROMAN"),
          (e[(e.LOWER_GREEK = 8)] = "LOWER_GREEK"),
          (e[(e.LOWER_ALPHA = 9)] = "LOWER_ALPHA"),
          (e[(e.UPPER_ALPHA = 10)] = "UPPER_ALPHA"),
          (e[(e.ARABIC_INDIC = 11)] = "ARABIC_INDIC"),
          (e[(e.ARMENIAN = 12)] = "ARMENIAN"),
          (e[(e.BENGALI = 13)] = "BENGALI"),
          (e[(e.CAMBODIAN = 14)] = "CAMBODIAN"),
          (e[(e.CJK_EARTHLY_BRANCH = 15)] = "CJK_EARTHLY_BRANCH"),
          (e[(e.CJK_HEAVENLY_STEM = 16)] = "CJK_HEAVENLY_STEM"),
          (e[(e.CJK_IDEOGRAPHIC = 17)] = "CJK_IDEOGRAPHIC"),
          (e[(e.DEVANAGARI = 18)] = "DEVANAGARI"),
          (e[(e.ETHIOPIC_NUMERIC = 19)] = "ETHIOPIC_NUMERIC"),
          (e[(e.GEORGIAN = 20)] = "GEORGIAN"),
          (e[(e.GUJARATI = 21)] = "GUJARATI"),
          (e[(e.GURMUKHI = 22)] = "GURMUKHI"),
          (e[(e.HEBREW = 22)] = "HEBREW"),
          (e[(e.HIRAGANA = 23)] = "HIRAGANA"),
          (e[(e.HIRAGANA_IROHA = 24)] = "HIRAGANA_IROHA"),
          (e[(e.JAPANESE_FORMAL = 25)] = "JAPANESE_FORMAL"),
          (e[(e.JAPANESE_INFORMAL = 26)] = "JAPANESE_INFORMAL"),
          (e[(e.KANNADA = 27)] = "KANNADA"),
          (e[(e.KATAKANA = 28)] = "KATAKANA"),
          (e[(e.KATAKANA_IROHA = 29)] = "KATAKANA_IROHA"),
          (e[(e.KHMER = 30)] = "KHMER"),
          (e[(e.KOREAN_HANGUL_FORMAL = 31)] = "KOREAN_HANGUL_FORMAL"),
          (e[(e.KOREAN_HANJA_FORMAL = 32)] = "KOREAN_HANJA_FORMAL"),
          (e[(e.KOREAN_HANJA_INFORMAL = 33)] = "KOREAN_HANJA_INFORMAL"),
          (e[(e.LAO = 34)] = "LAO"),
          (e[(e.LOWER_ARMENIAN = 35)] = "LOWER_ARMENIAN"),
          (e[(e.MALAYALAM = 36)] = "MALAYALAM"),
          (e[(e.MONGOLIAN = 37)] = "MONGOLIAN"),
          (e[(e.MYANMAR = 38)] = "MYANMAR"),
          (e[(e.ORIYA = 39)] = "ORIYA"),
          (e[(e.PERSIAN = 40)] = "PERSIAN"),
          (e[(e.SIMP_CHINESE_FORMAL = 41)] = "SIMP_CHINESE_FORMAL"),
          (e[(e.SIMP_CHINESE_INFORMAL = 42)] = "SIMP_CHINESE_INFORMAL"),
          (e[(e.TAMIL = 43)] = "TAMIL"),
          (e[(e.TELUGU = 44)] = "TELUGU"),
          (e[(e.THAI = 45)] = "THAI"),
          (e[(e.TIBETAN = 46)] = "TIBETAN"),
          (e[(e.TRAD_CHINESE_FORMAL = 47)] = "TRAD_CHINESE_FORMAL"),
          (e[(e.TRAD_CHINESE_INFORMAL = 48)] = "TRAD_CHINESE_INFORMAL"),
          (e[(e.UPPER_ARMENIAN = 49)] = "UPPER_ARMENIAN"),
          (e[(e.DISCLOSURE_OPEN = 50)] = "DISCLOSURE_OPEN"),
          (e[(e.DISCLOSURE_CLOSED = 51)] = "DISCLOSURE_CLOSED");
      })(SA || (SA = {}));
      var TA,
        bA = {
          name: "list-style-type",
          initialValue: "none",
          prefix: !1,
          type: it.IDENT_VALUE,
          parse: function (e) {
            switch (e) {
              case "disc":
                return SA.DISC;
              case "circle":
                return SA.CIRCLE;
              case "square":
                return SA.SQUARE;
              case "decimal":
                return SA.DECIMAL;
              case "cjk-decimal":
                return SA.CJK_DECIMAL;
              case "decimal-leading-zero":
                return SA.DECIMAL_LEADING_ZERO;
              case "lower-roman":
                return SA.LOWER_ROMAN;
              case "upper-roman":
                return SA.UPPER_ROMAN;
              case "lower-greek":
                return SA.LOWER_GREEK;
              case "lower-alpha":
                return SA.LOWER_ALPHA;
              case "upper-alpha":
                return SA.UPPER_ALPHA;
              case "arabic-indic":
                return SA.ARABIC_INDIC;
              case "armenian":
                return SA.ARMENIAN;
              case "bengali":
                return SA.BENGALI;
              case "cambodian":
                return SA.CAMBODIAN;
              case "cjk-earthly-branch":
                return SA.CJK_EARTHLY_BRANCH;
              case "cjk-heavenly-stem":
                return SA.CJK_HEAVENLY_STEM;
              case "cjk-ideographic":
                return SA.CJK_IDEOGRAPHIC;
              case "devanagari":
                return SA.DEVANAGARI;
              case "ethiopic-numeric":
                return SA.ETHIOPIC_NUMERIC;
              case "georgian":
                return SA.GEORGIAN;
              case "gujarati":
                return SA.GUJARATI;
              case "gurmukhi":
                return SA.GURMUKHI;
              case "hebrew":
                return SA.HEBREW;
              case "hiragana":
                return SA.HIRAGANA;
              case "hiragana-iroha":
                return SA.HIRAGANA_IROHA;
              case "japanese-formal":
                return SA.JAPANESE_FORMAL;
              case "japanese-informal":
                return SA.JAPANESE_INFORMAL;
              case "kannada":
                return SA.KANNADA;
              case "katakana":
                return SA.KATAKANA;
              case "katakana-iroha":
                return SA.KATAKANA_IROHA;
              case "khmer":
                return SA.KHMER;
              case "korean-hangul-formal":
                return SA.KOREAN_HANGUL_FORMAL;
              case "korean-hanja-formal":
                return SA.KOREAN_HANJA_FORMAL;
              case "korean-hanja-informal":
                return SA.KOREAN_HANJA_INFORMAL;
              case "lao":
                return SA.LAO;
              case "lower-armenian":
                return SA.LOWER_ARMENIAN;
              case "malayalam":
                return SA.MALAYALAM;
              case "mongolian":
                return SA.MONGOLIAN;
              case "myanmar":
                return SA.MYANMAR;
              case "oriya":
                return SA.ORIYA;
              case "persian":
                return SA.PERSIAN;
              case "simp-chinese-formal":
                return SA.SIMP_CHINESE_FORMAL;
              case "simp-chinese-informal":
                return SA.SIMP_CHINESE_INFORMAL;
              case "tamil":
                return SA.TAMIL;
              case "telugu":
                return SA.TELUGU;
              case "thai":
                return SA.THAI;
              case "tibetan":
                return SA.TIBETAN;
              case "trad-chinese-formal":
                return SA.TRAD_CHINESE_FORMAL;
              case "trad-chinese-informal":
                return SA.TRAD_CHINESE_INFORMAL;
              case "upper-armenian":
                return SA.UPPER_ARMENIAN;
              case "disclosure-open":
                return SA.DISCLOSURE_OPEN;
              case "disclosure-closed":
                return SA.DISCLOSURE_CLOSED;
              case "none":
              default:
                return SA.NONE;
            }
          },
        },
        IA = function (e) {
          return {
            name: "margin-" + e,
            initialValue: "0",
            prefix: !1,
            type: it.TOKEN_VALUE,
          };
        },
        NA = IA("top"),
        HA = IA("right"),
        _A = IA("bottom"),
        OA = IA("left");
      !(function (e) {
        (e[(e.VISIBLE = 0)] = "VISIBLE"),
          (e[(e.HIDDEN = 1)] = "HIDDEN"),
          (e[(e.SCROLL = 2)] = "SCROLL"),
          (e[(e.AUTO = 3)] = "AUTO");
      })(TA || (TA = {}));
      var DA,
        LA = {
          name: "overflow",
          initialValue: "visible",
          prefix: !1,
          type: it.LIST,
          parse: function (e) {
            return e.filter(_e).map(function (e) {
              switch (e.value) {
                case "hidden":
                  return TA.HIDDEN;
                case "scroll":
                  return TA.SCROLL;
                case "auto":
                  return TA.AUTO;
                case "visible":
                default:
                  return TA.VISIBLE;
              }
            });
          },
        };
      !(function (e) {
        (e.NORMAL = "normal"), (e.BREAK_WORD = "break-word");
      })(DA || (DA = {}));
      var RA,
        MA = {
          name: "overflow-wrap",
          initialValue: "normal",
          prefix: !1,
          type: it.IDENT_VALUE,
          parse: function (e) {
            switch (e) {
              case "break-word":
                return DA.BREAK_WORD;
              case "normal":
              default:
                return DA.NORMAL;
            }
          },
        },
        KA = function (e) {
          return {
            name: "padding-" + e,
            initialValue: "0",
            prefix: !1,
            type: it.TYPE_VALUE,
            format: "length-percentage",
          };
        },
        PA = KA("top"),
        xA = KA("right"),
        kA = KA("bottom"),
        VA = KA("left");
      !(function (e) {
        (e[(e.LEFT = 0)] = "LEFT"),
          (e[(e.CENTER = 1)] = "CENTER"),
          (e[(e.RIGHT = 2)] = "RIGHT");
      })(RA || (RA = {}));
      var GA,
        zA = {
          name: "text-align",
          initialValue: "left",
          prefix: !1,
          type: it.IDENT_VALUE,
          parse: function (e) {
            switch (e) {
              case "right":
                return RA.RIGHT;
              case "center":
              case "justify":
                return RA.CENTER;
              case "left":
              default:
                return RA.LEFT;
            }
          },
        };
      !(function (e) {
        (e[(e.STATIC = 0)] = "STATIC"),
          (e[(e.RELATIVE = 1)] = "RELATIVE"),
          (e[(e.ABSOLUTE = 2)] = "ABSOLUTE"),
          (e[(e.FIXED = 3)] = "FIXED"),
          (e[(e.STICKY = 4)] = "STICKY");
      })(GA || (GA = {}));
      var JA,
        XA = {
          name: "position",
          initialValue: "static",
          prefix: !1,
          type: it.IDENT_VALUE,
          parse: function (e) {
            switch (e) {
              case "relative":
                return GA.RELATIVE;
              case "absolute":
                return GA.ABSOLUTE;
              case "fixed":
                return GA.FIXED;
              case "sticky":
                return GA.STICKY;
            }
            return GA.STATIC;
          },
        },
        WA = {
          name: "text-shadow",
          initialValue: "none",
          type: it.LIST,
          prefix: !1,
          parse: function (e) {
            return 1 === e.length && De(e[0], "none")
              ? []
              : Me(e).map(function (e) {
                  for (
                    var t = {
                        color: ut.TRANSPARENT,
                        offsetX: Ve,
                        offsetY: Ve,
                        blur: Ve,
                      },
                      A = 0,
                      n = 0;
                    n < e.length;
                    n++
                  ) {
                    var r = e[n];
                    Pe(r)
                      ? (0 === A
                          ? (t.offsetX = r)
                          : 1 === A
                          ? (t.offsetY = r)
                          : (t.blur = r),
                        A++)
                      : (t.color = Ze(r));
                  }
                  return t;
                });
          },
        };
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.LOWERCASE = 1)] = "LOWERCASE"),
          (e[(e.UPPERCASE = 2)] = "UPPERCASE"),
          (e[(e.CAPITALIZE = 3)] = "CAPITALIZE");
      })(JA || (JA = {}));
      var YA,
        jA = {
          name: "text-transform",
          initialValue: "none",
          prefix: !1,
          type: it.IDENT_VALUE,
          parse: function (e) {
            switch (e) {
              case "uppercase":
                return JA.UPPERCASE;
              case "lowercase":
                return JA.LOWERCASE;
              case "capitalize":
                return JA.CAPITALIZE;
            }
            return JA.NONE;
          },
        },
        qA = {
          name: "transform",
          initialValue: "none",
          prefix: !0,
          type: it.VALUE,
          parse: function (e) {
            if (e.type === d.IDENT_TOKEN && "none" === e.value) return null;
            if (e.type === d.FUNCTION) {
              var t = ZA[e.name];
              if (void 0 === t)
                throw new Error(
                  'Attempting to parse an unsupported transform function "' +
                    e.name +
                    '"'
                );
              return t(e.values);
            }
            return null;
          },
        },
        ZA = {
          matrix: function (e) {
            var t = e
              .filter(function (e) {
                return e.type === d.NUMBER_TOKEN;
              })
              .map(function (e) {
                return e.number;
              });
            return 6 === t.length ? t : null;
          },
          matrix3d: function (e) {
            var t = e
                .filter(function (e) {
                  return e.type === d.NUMBER_TOKEN;
                })
                .map(function (e) {
                  return e.number;
                }),
              A = t[0],
              n = t[1],
              r = (t[2], t[3], t[4]),
              i = t[5],
              o = (t[6], t[7], t[8], t[9], t[10], t[11], t[12]),
              a = t[13];
            return t[14], t[15], 16 === t.length ? [A, n, r, i, o, a] : null;
          },
        },
        $A = { type: d.PERCENTAGE_TOKEN, number: 50, flags: 4 },
        en = [$A, $A],
        tn = {
          name: "transform-origin",
          initialValue: "50% 50%",
          prefix: !0,
          type: it.LIST,
          parse: function (e) {
            var t = e.filter(xe);
            return 2 !== t.length ? en : [t[0], t[1]];
          },
        };
      !(function (e) {
        (e[(e.VISIBLE = 0)] = "VISIBLE"),
          (e[(e.HIDDEN = 1)] = "HIDDEN"),
          (e[(e.COLLAPSE = 2)] = "COLLAPSE");
      })(YA || (YA = {}));
      var An,
        nn = {
          name: "visible",
          initialValue: "none",
          prefix: !1,
          type: it.IDENT_VALUE,
          parse: function (e) {
            switch (e) {
              case "hidden":
                return YA.HIDDEN;
              case "collapse":
                return YA.COLLAPSE;
              case "visible":
              default:
                return YA.VISIBLE;
            }
          },
        };
      !(function (e) {
        (e.NORMAL = "normal"),
          (e.BREAK_ALL = "break-all"),
          (e.KEEP_ALL = "keep-all");
      })(An || (An = {}));
      var rn,
        on = {
          name: "word-break",
          initialValue: "normal",
          prefix: !1,
          type: it.IDENT_VALUE,
          parse: function (e) {
            switch (e) {
              case "break-all":
                return An.BREAK_ALL;
              case "keep-all":
                return An.KEEP_ALL;
              case "normal":
              default:
                return An.NORMAL;
            }
          },
        },
        an = {
          name: "z-index",
          initialValue: "auto",
          prefix: !1,
          type: it.VALUE,
          parse: function (e) {
            if (e.type === d.IDENT_TOKEN) return { auto: !0, order: 0 };
            if (He(e)) return { auto: !1, order: e.number };
            throw new Error("Invalid z-index number parsed");
          },
        },
        sn = {
          name: "opacity",
          initialValue: "1",
          type: it.VALUE,
          prefix: !1,
          parse: function (e) {
            return He(e) ? e.number : 1;
          },
        },
        un = {
          name: "text-decoration-color",
          initialValue: "transparent",
          prefix: !1,
          type: it.TYPE_VALUE,
          format: "color",
        },
        cn = {
          name: "text-decoration-line",
          initialValue: "none",
          prefix: !1,
          type: it.LIST,
          parse: function (e) {
            return e
              .filter(_e)
              .map(function (e) {
                switch (e.value) {
                  case "underline":
                    return 1;
                  case "overline":
                    return 2;
                  case "line-through":
                    return 3;
                  case "none":
                    return 4;
                }
                return 0;
              })
              .filter(function (e) {
                return 0 !== e;
              });
          },
        },
        ln = {
          name: "font-family",
          initialValue: "",
          prefix: !1,
          type: it.LIST,
          parse: function (e) {
            return e.filter(dn).map(function (e) {
              return e.value;
            });
          },
        },
        dn = function (e) {
          return e.type === d.STRING_TOKEN || e.type === d.IDENT_TOKEN;
        },
        gn = {
          name: "font-size",
          initialValue: "0",
          prefix: !1,
          type: it.TYPE_VALUE,
          format: "length",
        },
        pn = {
          name: "font-weight",
          initialValue: "normal",
          type: it.VALUE,
          prefix: !1,
          parse: function (e) {
            if (He(e)) return e.number;
            if (_e(e))
              switch (e.value) {
                case "bold":
                  return 700;
                case "normal":
                default:
                  return 400;
              }
            return 400;
          },
        },
        hn = {
          name: "font-variant",
          initialValue: "none",
          type: it.LIST,
          prefix: !1,
          parse: function (e) {
            return e.filter(_e).map(function (e) {
              return e.value;
            });
          },
        };
      !(function (e) {
        (e.NORMAL = "normal"), (e.ITALIC = "italic"), (e.OBLIQUE = "oblique");
      })(rn || (rn = {}));
      var fn,
        Bn = {
          name: "font-style",
          initialValue: "normal",
          prefix: !1,
          type: it.IDENT_VALUE,
          parse: function (e) {
            switch (e) {
              case "oblique":
                return rn.OBLIQUE;
              case "italic":
                return rn.ITALIC;
              case "normal":
              default:
                return rn.NORMAL;
            }
          },
        },
        mn = function (e, t) {
          return 0 != (e & t);
        },
        vn = {
          name: "content",
          initialValue: "none",
          type: it.LIST,
          prefix: !1,
          parse: function (e) {
            if (0 === e.length) return [];
            var t = e[0];
            return t.type === d.IDENT_TOKEN && "none" === t.value ? [] : e;
          },
        },
        Cn = {
          name: "counter-increment",
          initialValue: "none",
          prefix: !0,
          type: it.LIST,
          parse: function (e) {
            if (0 === e.length) return null;
            var t = e[0];
            if (t.type === d.IDENT_TOKEN && "none" === t.value) return null;
            for (var A = [], n = e.filter(Le), r = 0; r < n.length; r++) {
              var i = n[r],
                o = n[r + 1];
              if (i.type === d.IDENT_TOKEN) {
                var a = o && He(o) ? o.number : 1;
                A.push({ counter: i.value, increment: a });
              }
            }
            return A;
          },
        },
        wn = {
          name: "counter-reset",
          initialValue: "none",
          prefix: !0,
          type: it.LIST,
          parse: function (e) {
            if (0 === e.length) return [];
            for (var t = [], A = e.filter(Le), n = 0; n < A.length; n++) {
              var r = A[n],
                i = A[n + 1];
              if (_e(r) && "none" !== r.value) {
                var o = i && He(i) ? i.number : 0;
                t.push({ counter: r.value, reset: o });
              }
            }
            return t;
          },
        },
        yn = {
          name: "quotes",
          initialValue: "none",
          prefix: !0,
          type: it.LIST,
          parse: function (e) {
            if (0 === e.length) return null;
            var t = e[0];
            if (t.type === d.IDENT_TOKEN && "none" === t.value) return null;
            var A = [],
              n = e.filter(Oe);
            if (n.length % 2 != 0) return null;
            for (var r = 0; r < n.length; r += 2) {
              var i = n[r].value,
                o = n[r + 1].value;
              A.push({ open: i, close: o });
            }
            return A;
          },
        },
        En = function (e, t, A) {
          if (!e) return "";
          var n = e[Math.min(t, e.length - 1)];
          return n ? (A ? n.open : n.close) : "";
        },
        Fn = {
          name: "box-shadow",
          initialValue: "none",
          type: it.LIST,
          prefix: !1,
          parse: function (e) {
            return 1 === e.length && De(e[0], "none")
              ? []
              : Me(e).map(function (e) {
                  for (
                    var t = {
                        color: 255,
                        offsetX: Ve,
                        offsetY: Ve,
                        blur: Ve,
                        spread: Ve,
                        inset: !1,
                      },
                      A = 0,
                      n = 0;
                    n < e.length;
                    n++
                  ) {
                    var r = e[n];
                    De(r, "inset")
                      ? (t.inset = !0)
                      : Pe(r)
                      ? (0 === A
                          ? (t.offsetX = r)
                          : 1 === A
                          ? (t.offsetY = r)
                          : 2 === A
                          ? (t.blur = r)
                          : (t.spread = r),
                        A++)
                      : (t.color = Ze(r));
                  }
                  return t;
                });
          },
        },
        Un = (function () {
          function e(e) {
            (this.backgroundClip = Tn(gt, e.backgroundClip)),
              (this.backgroundColor = Tn(pt, e.backgroundColor)),
              (this.backgroundImage = Tn(Pt, e.backgroundImage)),
              (this.backgroundOrigin = Tn(xt, e.backgroundOrigin)),
              (this.backgroundPosition = Tn(kt, e.backgroundPosition)),
              (this.backgroundRepeat = Tn(Gt, e.backgroundRepeat)),
              (this.backgroundSize = Tn(Xt, e.backgroundSize)),
              (this.borderTopColor = Tn(jt, e.borderTopColor)),
              (this.borderRightColor = Tn(qt, e.borderRightColor)),
              (this.borderBottomColor = Tn(Zt, e.borderBottomColor)),
              (this.borderLeftColor = Tn($t, e.borderLeftColor)),
              (this.borderTopLeftRadius = Tn(tA, e.borderTopLeftRadius)),
              (this.borderTopRightRadius = Tn(AA, e.borderTopRightRadius)),
              (this.borderBottomRightRadius = Tn(
                nA,
                e.borderBottomRightRadius
              )),
              (this.borderBottomLeftRadius = Tn(rA, e.borderBottomLeftRadius)),
              (this.borderTopStyle = Tn(aA, e.borderTopStyle)),
              (this.borderRightStyle = Tn(sA, e.borderRightStyle)),
              (this.borderBottomStyle = Tn(uA, e.borderBottomStyle)),
              (this.borderLeftStyle = Tn(cA, e.borderLeftStyle)),
              (this.borderTopWidth = Tn(dA, e.borderTopWidth)),
              (this.borderRightWidth = Tn(gA, e.borderRightWidth)),
              (this.borderBottomWidth = Tn(pA, e.borderBottomWidth)),
              (this.borderLeftWidth = Tn(hA, e.borderLeftWidth)),
              (this.boxShadow = Tn(Fn, e.boxShadow)),
              (this.color = Tn(fA, e.color)),
              (this.display = Tn(BA, e.display)),
              (this.float = Tn(CA, e.cssFloat)),
              (this.fontFamily = Tn(ln, e.fontFamily)),
              (this.fontSize = Tn(gn, e.fontSize)),
              (this.fontStyle = Tn(Bn, e.fontStyle)),
              (this.fontVariant = Tn(hn, e.fontVariant)),
              (this.fontWeight = Tn(pn, e.fontWeight)),
              (this.letterSpacing = Tn(wA, e.letterSpacing)),
              (this.lineBreak = Tn(EA, e.lineBreak)),
              (this.lineHeight = Tn(FA, e.lineHeight)),
              (this.listStyleImage = Tn(UA, e.listStyleImage)),
              (this.listStylePosition = Tn(QA, e.listStylePosition)),
              (this.listStyleType = Tn(bA, e.listStyleType)),
              (this.marginTop = Tn(NA, e.marginTop)),
              (this.marginRight = Tn(HA, e.marginRight)),
              (this.marginBottom = Tn(_A, e.marginBottom)),
              (this.marginLeft = Tn(OA, e.marginLeft)),
              (this.opacity = Tn(sn, e.opacity));
            var t = Tn(LA, e.overflow);
            (this.overflowX = t[0]),
              (this.overflowY = t[t.length > 1 ? 1 : 0]),
              (this.overflowWrap = Tn(MA, e.overflowWrap)),
              (this.paddingTop = Tn(PA, e.paddingTop)),
              (this.paddingRight = Tn(xA, e.paddingRight)),
              (this.paddingBottom = Tn(kA, e.paddingBottom)),
              (this.paddingLeft = Tn(VA, e.paddingLeft)),
              (this.position = Tn(XA, e.position)),
              (this.textAlign = Tn(zA, e.textAlign)),
              (this.textDecorationColor = Tn(
                un,
                e.textDecorationColor || e.color
              )),
              (this.textDecorationLine = Tn(cn, e.textDecorationLine)),
              (this.textShadow = Tn(WA, e.textShadow)),
              (this.textTransform = Tn(jA, e.textTransform)),
              (this.transform = Tn(qA, e.transform)),
              (this.transformOrigin = Tn(tn, e.transformOrigin)),
              (this.visibility = Tn(nn, e.visibility)),
              (this.wordBreak = Tn(on, e.wordBreak)),
              (this.zIndex = Tn(an, e.zIndex));
          }
          return (
            (e.prototype.isVisible = function () {
              return (
                this.display > 0 &&
                this.opacity > 0 &&
                this.visibility === YA.VISIBLE
              );
            }),
            (e.prototype.isTransparent = function () {
              return $e(this.backgroundColor);
            }),
            (e.prototype.isTransformed = function () {
              return null !== this.transform;
            }),
            (e.prototype.isPositioned = function () {
              return this.position !== GA.STATIC;
            }),
            (e.prototype.isPositionedWithZIndex = function () {
              return this.isPositioned() && !this.zIndex.auto;
            }),
            (e.prototype.isFloating = function () {
              return this.float !== iA.NONE;
            }),
            (e.prototype.isInlineLevel = function () {
              return (
                mn(this.display, 4) ||
                mn(this.display, 33554432) ||
                mn(this.display, 268435456) ||
                mn(this.display, 536870912) ||
                mn(this.display, 67108864) ||
                mn(this.display, 134217728)
              );
            }),
            e
          );
        })(),
        Sn = function (e) {
          (this.content = Tn(vn, e.content)), (this.quotes = Tn(yn, e.quotes));
        },
        Qn = function (e) {
          (this.counterIncrement = Tn(Cn, e.counterIncrement)),
            (this.counterReset = Tn(wn, e.counterReset));
        },
        Tn = function (e, t) {
          var A = new be(),
            n = null != t ? t.toString() : e.initialValue;
          A.write(n);
          var r = new Ie(A.read());
          switch (e.type) {
            case it.IDENT_VALUE:
              var i = r.parseComponentValue();
              return e.parse(_e(i) ? i.value : e.initialValue);
            case it.VALUE:
              return e.parse(r.parseComponentValue());
            case it.LIST:
              return e.parse(r.parseComponentValues());
            case it.TOKEN_VALUE:
              return r.parseComponentValue();
            case it.TYPE_VALUE:
              switch (e.format) {
                case "angle":
                  return We(r.parseComponentValue());
                case "color":
                  return Ze(r.parseComponentValue());
                case "image":
                  return Mt(r.parseComponentValue());
                case "length":
                  var o = r.parseComponentValue();
                  return Pe(o) ? o : Ve;
                case "length-percentage":
                  var a = r.parseComponentValue();
                  return xe(a) ? a : Ve;
              }
          }
          throw new Error(
            "Attempting to parse unsupported css format type " + e.format
          );
        },
        bn = function (e) {
          (this.styles = new Un(window.getComputedStyle(e, null))),
            (this.textNodes = []),
            (this.elements = []),
            null !== this.styles.transform &&
              or(e) &&
              (e.style.transform = "none"),
            (this.bounds = o(e)),
            (this.flags = 0);
        },
        In = function (e, t) {
          (this.text = e), (this.bounds = t);
        },
        Nn = function (e) {
          var t = e.ownerDocument;
          if (t) {
            var A = t.createElement("html2canvaswrapper");
            A.appendChild(e.cloneNode(!0));
            var n = e.parentNode;
            if (n) {
              n.replaceChild(A, e);
              var r = o(A);
              return A.firstChild && n.replaceChild(A.firstChild, A), r;
            }
          }
          return new i(0, 0, 0, 0);
        },
        Hn = function (e, t, A) {
          var n = e.ownerDocument;
          if (!n) throw new Error("Node has no owner document");
          var r = n.createRange();
          return (
            r.setStart(e, t),
            r.setEnd(e, t + A),
            i.fromClientRect(r.getBoundingClientRect())
          );
        },
        _n = function (e, t) {
          return 0 !== t.letterSpacing
            ? a(e).map(function (e) {
                return s(e);
              })
            : On(e, t);
        },
        On = function (e, t) {
          for (
            var A,
              n = (function (e, t) {
                var A = a(e),
                  n = j(A, t),
                  r = n[0],
                  i = n[1],
                  o = n[2],
                  s = A.length,
                  u = 0,
                  c = 0;
                return {
                  next: function () {
                    if (c >= s) return { done: !0, value: null };
                    for (
                      var e = "×";
                      c < s && "×" === (e = Y(A, i, r, ++c, o));

                    );
                    if ("×" !== e || c === s) {
                      var t = new q(A, e, u, c);
                      return (u = c), { value: t, done: !1 };
                    }
                    return { done: !0, value: null };
                  },
                };
              })(e, {
                lineBreak: t.lineBreak,
                wordBreak:
                  t.overflowWrap === DA.BREAK_WORD ? "break-word" : t.wordBreak,
              }),
              r = [];
            !(A = n.next()).done;

          )
            A.value && r.push(A.value.slice());
          return r;
        },
        Dn = function (e, t) {
          (this.text = Ln(e.data, t.textTransform)),
            (this.textBounds = (function (e, t, A) {
              var n = _n(e, t),
                r = [],
                i = 0;
              return (
                n.forEach(function (e) {
                  if (t.textDecorationLine.length || e.trim().length > 0)
                    if (Ft.SUPPORT_RANGE_BOUNDS)
                      r.push(new In(e, Hn(A, i, e.length)));
                    else {
                      var n = A.splitText(e.length);
                      r.push(new In(e, Nn(A))), (A = n);
                    }
                  else Ft.SUPPORT_RANGE_BOUNDS || (A = A.splitText(e.length));
                  i += e.length;
                }),
                r
              );
            })(this.text, t, e));
        },
        Ln = function (e, t) {
          switch (t) {
            case JA.LOWERCASE:
              return e.toLowerCase();
            case JA.CAPITALIZE:
              return e.replace(Rn, Mn);
            case JA.UPPERCASE:
              return e.toUpperCase();
            default:
              return e;
          }
        },
        Rn = /(^|\s|:|-|\(|\))([a-z])/g,
        Mn = function (e, t, A) {
          return e.length > 0 ? t + A.toUpperCase() : e;
        },
        Kn = (function (e) {
          function A(t) {
            var A = e.call(this, t) || this;
            return (
              (A.src = t.currentSrc || t.src),
              (A.intrinsicWidth = t.naturalWidth),
              (A.intrinsicHeight = t.naturalHeight),
              St.getInstance().addImage(A.src),
              A
            );
          }
          return t(A, e), A;
        })(bn),
        Pn = (function (e) {
          function A(t) {
            var A = e.call(this, t) || this;
            return (
              (A.canvas = t),
              (A.intrinsicWidth = t.width),
              (A.intrinsicHeight = t.height),
              A
            );
          }
          return t(A, e), A;
        })(bn),
        xn = (function (e) {
          function A(t) {
            var A = e.call(this, t) || this,
              n = new XMLSerializer();
            return (
              (A.svg =
                "data:image/svg+xml," +
                encodeURIComponent(n.serializeToString(t))),
              (A.intrinsicWidth = t.width.baseVal.value),
              (A.intrinsicHeight = t.height.baseVal.value),
              St.getInstance().addImage(A.svg),
              A
            );
          }
          return t(A, e), A;
        })(bn),
        kn = (function (e) {
          function A(t) {
            var A = e.call(this, t) || this;
            return (A.value = t.value), A;
          }
          return t(A, e), A;
        })(bn),
        Vn = (function (e) {
          function A(t) {
            var A = e.call(this, t) || this;
            return (
              (A.start = t.start),
              (A.reversed =
                "boolean" == typeof t.reversed && !0 === t.reversed),
              A
            );
          }
          return t(A, e), A;
        })(bn),
        Gn = [{ type: d.DIMENSION_TOKEN, flags: 0, unit: "px", number: 3 }],
        zn = [{ type: d.PERCENTAGE_TOKEN, flags: 0, number: 50 }],
        Jn = "password",
        Xn = (function (e) {
          function A(t) {
            var A,
              n,
              r,
              o = e.call(this, t) || this;
            switch (
              ((o.type = t.type.toLowerCase()),
              (o.checked = t.checked),
              (o.value =
                0 ===
                (n =
                  (A = t).type === Jn
                    ? new Array(A.value.length + 1).join("•")
                    : A.value).length
                  ? A.placeholder || ""
                  : n),
              ("checkbox" !== o.type && "radio" !== o.type) ||
                ((o.styles.backgroundColor = 3739148031),
                (o.styles.borderTopColor =
                  o.styles.borderRightColor =
                  o.styles.borderBottomColor =
                  o.styles.borderLeftColor =
                    2779096575),
                (o.styles.borderTopWidth =
                  o.styles.borderRightWidth =
                  o.styles.borderBottomWidth =
                  o.styles.borderLeftWidth =
                    1),
                (o.styles.borderTopStyle =
                  o.styles.borderRightStyle =
                  o.styles.borderBottomStyle =
                  o.styles.borderLeftStyle =
                    Jt.SOLID),
                (o.styles.backgroundClip = [ot.BORDER_BOX]),
                (o.styles.backgroundOrigin = [0]),
                (o.bounds =
                  (r = o.bounds).width > r.height
                    ? new i(
                        r.left + (r.width - r.height) / 2,
                        r.top,
                        r.height,
                        r.height
                      )
                    : r.width < r.height
                    ? new i(
                        r.left,
                        r.top + (r.height - r.width) / 2,
                        r.width,
                        r.width
                      )
                    : r)),
              o.type)
            ) {
              case "checkbox":
                o.styles.borderTopRightRadius =
                  o.styles.borderTopLeftRadius =
                  o.styles.borderBottomRightRadius =
                  o.styles.borderBottomLeftRadius =
                    Gn;
                break;
              case "radio":
                o.styles.borderTopRightRadius =
                  o.styles.borderTopLeftRadius =
                  o.styles.borderBottomRightRadius =
                  o.styles.borderBottomLeftRadius =
                    zn;
            }
            return o;
          }
          return t(A, e), A;
        })(bn),
        Wn = (function (e) {
          function A(t) {
            var A = e.call(this, t) || this,
              n = t.options[t.selectedIndex || 0];
            return (A.value = (n && n.text) || ""), A;
          }
          return t(A, e), A;
        })(bn),
        Yn = (function (e) {
          function A(t) {
            var A = e.call(this, t) || this;
            return (A.value = t.value), A;
          }
          return t(A, e), A;
        })(bn),
        jn = function (e) {
          return Ze(Ie.create(e).parseComponentValue());
        },
        qn = (function (e) {
          function A(t) {
            var A = e.call(this, t) || this;
            (A.src = t.src),
              (A.width = parseInt(t.width, 10) || 0),
              (A.height = parseInt(t.height, 10) || 0),
              (A.backgroundColor = A.styles.backgroundColor);
            try {
              if (
                t.contentWindow &&
                t.contentWindow.document &&
                t.contentWindow.document.documentElement
              ) {
                A.tree = tr(t.contentWindow.document.documentElement);
                var n = t.contentWindow.document.documentElement
                    ? jn(
                        getComputedStyle(
                          t.contentWindow.document.documentElement
                        ).backgroundColor
                      )
                    : ut.TRANSPARENT,
                  r = t.contentWindow.document.body
                    ? jn(
                        getComputedStyle(t.contentWindow.document.body)
                          .backgroundColor
                      )
                    : ut.TRANSPARENT;
                A.backgroundColor = $e(n)
                  ? $e(r)
                    ? A.styles.backgroundColor
                    : r
                  : n;
              }
            } catch (e) {}
            return A;
          }
          return t(A, e), A;
        })(bn),
        Zn = ["OL", "UL", "MENU"],
        $n = function (e, t, A) {
          for (var n = e.firstChild, r = void 0; n; n = r)
            if (((r = n.nextSibling), rr(n) && n.data.trim().length > 0))
              t.textNodes.push(new Dn(n, t.styles));
            else if (ir(n)) {
              var i = er(n);
              i.styles.isVisible() &&
                (Ar(n, i, A) ? (i.flags |= 4) : nr(i.styles) && (i.flags |= 2),
                -1 !== Zn.indexOf(n.tagName) && (i.flags |= 8),
                t.elements.push(i),
                Br(n) || cr(n) || mr(n) || $n(n, i, A));
            }
        },
        er = function (e) {
          return gr(e)
            ? new Kn(e)
            : dr(e)
            ? new Pn(e)
            : cr(e)
            ? new xn(e)
            : ar(e)
            ? new kn(e)
            : sr(e)
            ? new Vn(e)
            : ur(e)
            ? new Xn(e)
            : mr(e)
            ? new Wn(e)
            : Br(e)
            ? new Yn(e)
            : pr(e)
            ? new qn(e)
            : new bn(e);
        },
        tr = function (e) {
          var t = er(e);
          return (t.flags |= 4), $n(e, t, t), t;
        },
        Ar = function (e, t, A) {
          return (
            t.styles.isPositionedWithZIndex() ||
            t.styles.opacity < 1 ||
            t.styles.isTransformed() ||
            (lr(e) && A.styles.isTransparent())
          );
        },
        nr = function (e) {
          return e.isPositioned() || e.isFloating();
        },
        rr = function (e) {
          return e.nodeType === Node.TEXT_NODE;
        },
        ir = function (e) {
          return e.nodeType === Node.ELEMENT_NODE;
        },
        or = function (e) {
          return void 0 !== e.style;
        },
        ar = function (e) {
          return "LI" === e.tagName;
        },
        sr = function (e) {
          return "OL" === e.tagName;
        },
        ur = function (e) {
          return "INPUT" === e.tagName;
        },
        cr = function (e) {
          return "svg" === e.tagName;
        },
        lr = function (e) {
          return "BODY" === e.tagName;
        },
        dr = function (e) {
          return "CANVAS" === e.tagName;
        },
        gr = function (e) {
          return "IMG" === e.tagName;
        },
        pr = function (e) {
          return "IFRAME" === e.tagName;
        },
        hr = function (e) {
          return "STYLE" === e.tagName;
        },
        fr = function (e) {
          return "SCRIPT" === e.tagName;
        },
        Br = function (e) {
          return "TEXTAREA" === e.tagName;
        },
        mr = function (e) {
          return "SELECT" === e.tagName;
        },
        vr = (function () {
          function e() {
            this.counters = {};
          }
          return (
            (e.prototype.getCounterValue = function (e) {
              var t = this.counters[e];
              return t && t.length ? t[t.length - 1] : 1;
            }),
            (e.prototype.getCounterValues = function (e) {
              var t = this.counters[e];
              return t || [];
            }),
            (e.prototype.pop = function (e) {
              var t = this;
              e.forEach(function (e) {
                return t.counters[e].pop();
              });
            }),
            (e.prototype.parse = function (e) {
              var t = this,
                A = e.counterIncrement,
                n = e.counterReset,
                r = !0;
              null !== A &&
                A.forEach(function (e) {
                  var A = t.counters[e.counter];
                  A &&
                    0 !== e.increment &&
                    ((r = !1), (A[Math.max(0, A.length - 1)] += e.increment));
                });
              var i = [];
              return (
                r &&
                  n.forEach(function (e) {
                    var A = t.counters[e.counter];
                    i.push(e.counter),
                      A || (A = t.counters[e.counter] = []),
                      A.push(e.reset);
                  }),
                i
              );
            }),
            e
          );
        })(),
        Cr = {
          integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
          values: [
            "M",
            "CM",
            "D",
            "CD",
            "C",
            "XC",
            "L",
            "XL",
            "X",
            "IX",
            "V",
            "IV",
            "I",
          ],
        },
        wr = {
          integers: [
            9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600,
            500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8,
            7, 6, 5, 4, 3, 2, 1,
          ],
          values: [
            "Ք",
            "Փ",
            "Ւ",
            "Ց",
            "Ր",
            "Տ",
            "Վ",
            "Ս",
            "Ռ",
            "Ջ",
            "Պ",
            "Չ",
            "Ո",
            "Շ",
            "Ն",
            "Յ",
            "Մ",
            "Ճ",
            "Ղ",
            "Ձ",
            "Հ",
            "Կ",
            "Ծ",
            "Խ",
            "Լ",
            "Ի",
            "Ժ",
            "Թ",
            "Ը",
            "Է",
            "Զ",
            "Ե",
            "Դ",
            "Գ",
            "Բ",
            "Ա",
          ],
        },
        yr = {
          integers: [
            1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200,
            100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8,
            7, 6, 5, 4, 3, 2, 1,
          ],
          values: [
            "י׳",
            "ט׳",
            "ח׳",
            "ז׳",
            "ו׳",
            "ה׳",
            "ד׳",
            "ג׳",
            "ב׳",
            "א׳",
            "ת",
            "ש",
            "ר",
            "ק",
            "צ",
            "פ",
            "ע",
            "ס",
            "נ",
            "מ",
            "ל",
            "כ",
            "יט",
            "יח",
            "יז",
            "טז",
            "טו",
            "י",
            "ט",
            "ח",
            "ז",
            "ו",
            "ה",
            "ד",
            "ג",
            "ב",
            "א",
          ],
        },
        Er = {
          integers: [
            1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700,
            600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9,
            8, 7, 6, 5, 4, 3, 2, 1,
          ],
          values: [
            "ჵ",
            "ჰ",
            "ჯ",
            "ჴ",
            "ხ",
            "ჭ",
            "წ",
            "ძ",
            "ც",
            "ჩ",
            "შ",
            "ყ",
            "ღ",
            "ქ",
            "ფ",
            "ჳ",
            "ტ",
            "ს",
            "რ",
            "ჟ",
            "პ",
            "ო",
            "ჲ",
            "ნ",
            "მ",
            "ლ",
            "კ",
            "ი",
            "თ",
            "ჱ",
            "ზ",
            "ვ",
            "ე",
            "დ",
            "გ",
            "ბ",
            "ა",
          ],
        },
        Fr = function (e, t, A, n, r, i) {
          return e < t || e > A
            ? br(e, r, i.length > 0)
            : n.integers.reduce(function (t, A, r) {
                for (; e >= A; ) (e -= A), (t += n.values[r]);
                return t;
              }, "") + i;
        },
        Ur = function (e, t, A, n) {
          var r = "";
          do {
            A || e--, (r = n(e) + r), (e /= t);
          } while (e * t >= t);
          return r;
        },
        Sr = function (e, t, A, n, r) {
          var i = A - t + 1;
          return (
            (e < 0 ? "-" : "") +
            (Ur(Math.abs(e), i, n, function (e) {
              return s(Math.floor(e % i) + t);
            }) +
              r)
          );
        },
        Qr = function (e, t, A) {
          void 0 === A && (A = ". ");
          var n = t.length;
          return (
            Ur(Math.abs(e), n, !1, function (e) {
              return t[Math.floor(e % n)];
            }) + A
          );
        },
        Tr = function (e, t, A, n, r, i) {
          if (e < -9999 || e > 9999) return br(e, SA.CJK_DECIMAL, r.length > 0);
          var o = Math.abs(e),
            a = r;
          if (0 === o) return t[0] + a;
          for (var s = 0; o > 0 && s <= 4; s++) {
            var u = o % 10;
            0 === u && mn(i, 1) && "" !== a
              ? (a = t[u] + a)
              : u > 1 ||
                (1 === u && 0 === s) ||
                (1 === u && 1 === s && mn(i, 2)) ||
                (1 === u && 1 === s && mn(i, 4) && e > 100) ||
                (1 === u && s > 1 && mn(i, 8))
              ? (a = t[u] + (s > 0 ? A[s - 1] : "") + a)
              : 1 === u && s > 0 && (a = A[s - 1] + a),
              (o = Math.floor(o / 10));
          }
          return (e < 0 ? n : "") + a;
        },
        br = function (e, t, A) {
          var n = A ? ". " : "",
            r = A ? "、" : "",
            i = A ? ", " : "",
            o = A ? " " : "";
          switch (t) {
            case SA.DISC:
              return "•" + o;
            case SA.CIRCLE:
              return "◦" + o;
            case SA.SQUARE:
              return "◾" + o;
            case SA.DECIMAL_LEADING_ZERO:
              var a = Sr(e, 48, 57, !0, n);
              return a.length < 4 ? "0" + a : a;
            case SA.CJK_DECIMAL:
              return Qr(e, "〇一二三四五六七八九", r);
            case SA.LOWER_ROMAN:
              return Fr(e, 1, 3999, Cr, SA.DECIMAL, n).toLowerCase();
            case SA.UPPER_ROMAN:
              return Fr(e, 1, 3999, Cr, SA.DECIMAL, n);
            case SA.LOWER_GREEK:
              return Sr(e, 945, 969, !1, n);
            case SA.LOWER_ALPHA:
              return Sr(e, 97, 122, !1, n);
            case SA.UPPER_ALPHA:
              return Sr(e, 65, 90, !1, n);
            case SA.ARABIC_INDIC:
              return Sr(e, 1632, 1641, !0, n);
            case SA.ARMENIAN:
            case SA.UPPER_ARMENIAN:
              return Fr(e, 1, 9999, wr, SA.DECIMAL, n);
            case SA.LOWER_ARMENIAN:
              return Fr(e, 1, 9999, wr, SA.DECIMAL, n).toLowerCase();
            case SA.BENGALI:
              return Sr(e, 2534, 2543, !0, n);
            case SA.CAMBODIAN:
            case SA.KHMER:
              return Sr(e, 6112, 6121, !0, n);
            case SA.CJK_EARTHLY_BRANCH:
              return Qr(e, "子丑寅卯辰巳午未申酉戌亥", r);
            case SA.CJK_HEAVENLY_STEM:
              return Qr(e, "甲乙丙丁戊己庚辛壬癸", r);
            case SA.CJK_IDEOGRAPHIC:
            case SA.TRAD_CHINESE_INFORMAL:
              return Tr(e, "零一二三四五六七八九", "十百千萬", "負", r, 14);
            case SA.TRAD_CHINESE_FORMAL:
              return Tr(e, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", r, 15);
            case SA.SIMP_CHINESE_INFORMAL:
              return Tr(e, "零一二三四五六七八九", "十百千萬", "负", r, 14);
            case SA.SIMP_CHINESE_FORMAL:
              return Tr(e, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", r, 15);
            case SA.JAPANESE_INFORMAL:
              return Tr(
                e,
                "〇一二三四五六七八九",
                "十百千万",
                "マイナス",
                r,
                0
              );
            case SA.JAPANESE_FORMAL:
              return Tr(
                e,
                "零壱弐参四伍六七八九",
                "拾百千万",
                "マイナス",
                r,
                7
              );
            case SA.KOREAN_HANGUL_FORMAL:
              return Tr(
                e,
                "영일이삼사오육칠팔구",
                "십백천만",
                "마이너스",
                i,
                7
              );
            case SA.KOREAN_HANJA_INFORMAL:
              return Tr(
                e,
                "零一二三四五六七八九",
                "十百千萬",
                "마이너스",
                i,
                0
              );
            case SA.KOREAN_HANJA_FORMAL:
              return Tr(e, "零壹貳參四五六七八九", "拾百千", "마이너스", i, 7);
            case SA.DEVANAGARI:
              return Sr(e, 2406, 2415, !0, n);
            case SA.GEORGIAN:
              return Fr(e, 1, 19999, Er, SA.DECIMAL, n);
            case SA.GUJARATI:
              return Sr(e, 2790, 2799, !0, n);
            case SA.GURMUKHI:
              return Sr(e, 2662, 2671, !0, n);
            case SA.HEBREW:
              return Fr(e, 1, 10999, yr, SA.DECIMAL, n);
            case SA.HIRAGANA:
              return Qr(
                e,
                "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん"
              );
            case SA.HIRAGANA_IROHA:
              return Qr(
                e,
                "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす"
              );
            case SA.KANNADA:
              return Sr(e, 3302, 3311, !0, n);
            case SA.KATAKANA:
              return Qr(
                e,
                "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",
                r
              );
            case SA.KATAKANA_IROHA:
              return Qr(
                e,
                "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",
                r
              );
            case SA.LAO:
              return Sr(e, 3792, 3801, !0, n);
            case SA.MONGOLIAN:
              return Sr(e, 6160, 6169, !0, n);
            case SA.MYANMAR:
              return Sr(e, 4160, 4169, !0, n);
            case SA.ORIYA:
              return Sr(e, 2918, 2927, !0, n);
            case SA.PERSIAN:
              return Sr(e, 1776, 1785, !0, n);
            case SA.TAMIL:
              return Sr(e, 3046, 3055, !0, n);
            case SA.TELUGU:
              return Sr(e, 3174, 3183, !0, n);
            case SA.THAI:
              return Sr(e, 3664, 3673, !0, n);
            case SA.TIBETAN:
              return Sr(e, 3872, 3881, !0, n);
            case SA.DECIMAL:
            default:
              return Sr(e, 48, 57, !0, n);
          }
        },
        Ir = (function () {
          function e(e, t) {
            if (
              ((this.options = t),
              (this.scrolledElements = []),
              (this.referenceElement = e),
              (this.counters = new vr()),
              (this.quoteDepth = 0),
              !e.ownerDocument)
            )
              throw new Error("Cloned element does not have an owner document");
            this.documentElement = this.cloneNode(
              e.ownerDocument.documentElement
            );
          }
          return (
            (e.prototype.toIFrame = function (e, t) {
              var A = this,
                i = Hr(e, t);
              if (!i.contentWindow)
                return Promise.reject("Unable to find iframe window");
              var o = e.defaultView.pageXOffset,
                a = e.defaultView.pageYOffset,
                s = i.contentWindow,
                u = s.document,
                c = _r(i).then(function () {
                  return n(A, void 0, void 0, function () {
                    var e;
                    return r(this, function (A) {
                      switch (A.label) {
                        case 0:
                          return (
                            this.scrolledElements.forEach(Rr),
                            s &&
                              (s.scrollTo(t.left, t.top),
                              !/(iPad|iPhone|iPod)/g.test(
                                navigator.userAgent
                              ) ||
                                (s.scrollY === t.top && s.scrollX === t.left) ||
                                ((u.documentElement.style.top = -t.top + "px"),
                                (u.documentElement.style.left = -t.left + "px"),
                                (u.documentElement.style.position =
                                  "absolute"))),
                            (e = this.options.onclone),
                            void 0 === this.clonedReferenceElement
                              ? [
                                  2,
                                  Promise.reject(
                                    "Error finding the " +
                                      this.referenceElement.nodeName +
                                      " in the cloned document"
                                  ),
                                ]
                              : u.fonts && u.fonts.ready
                              ? [4, u.fonts.ready]
                              : [3, 2]
                          );
                        case 1:
                          A.sent(), (A.label = 2);
                        case 2:
                          return "function" == typeof e
                            ? [
                                2,
                                Promise.resolve()
                                  .then(function () {
                                    return e(u);
                                  })
                                  .then(function () {
                                    return i;
                                  }),
                              ]
                            : [2, i];
                      }
                    });
                  });
                });
              return (
                u.open(),
                u.write(Dr(document.doctype) + "<html></html>"),
                Lr(this.referenceElement.ownerDocument, o, a),
                u.replaceChild(
                  u.adoptNode(this.documentElement),
                  u.documentElement
                ),
                u.close(),
                c
              );
            }),
            (e.prototype.createElementClone = function (e) {
              return dr(e)
                ? this.createCanvasClone(e)
                : hr(e)
                ? this.createStyleClone(e)
                : e.cloneNode(!1);
            }),
            (e.prototype.createStyleClone = function (e) {
              try {
                var t = e.sheet;
                if (t && t.cssRules) {
                  var A = [].slice.call(t.cssRules, 0).reduce(function (e, t) {
                      return t && "string" == typeof t.cssText
                        ? e + t.cssText
                        : e;
                    }, ""),
                    n = e.cloneNode(!1);
                  return (n.textContent = A), n;
                }
              } catch (e) {
                if (
                  (Ut.getInstance(this.options.id).error(
                    "Unable to access cssRules property",
                    e
                  ),
                  "SecurityError" !== e.name)
                )
                  throw e;
              }
              return e.cloneNode(!1);
            }),
            (e.prototype.createCanvasClone = function (e) {
              if (this.options.inlineImages && e.ownerDocument) {
                var t = e.ownerDocument.createElement("img");
                try {
                  return (t.src = e.toDataURL()), t;
                } catch (e) {
                  Ut.getInstance(this.options.id).info(
                    "Unable to clone canvas contents, canvas is tainted"
                  );
                }
              }
              var A = e.cloneNode(!1);
              try {
                (A.width = e.width), (A.height = e.height);
                var n = e.getContext("2d"),
                  r = A.getContext("2d");
                return (
                  r &&
                    (n
                      ? r.putImageData(
                          n.getImageData(0, 0, e.width, e.height),
                          0,
                          0
                        )
                      : r.drawImage(e, 0, 0)),
                  A
                );
              } catch (e) {}
              return A;
            }),
            (e.prototype.cloneNode = function (e) {
              if (rr(e)) return document.createTextNode(e.data);
              if (!e.ownerDocument) return e.cloneNode(!1);
              var t = e.ownerDocument.defaultView;
              if (or(e) && t) {
                var A = this.createElementClone(e),
                  n = t.getComputedStyle(e),
                  r = t.getComputedStyle(e, ":before"),
                  i = t.getComputedStyle(e, ":after");
                this.referenceElement === e &&
                  (this.clonedReferenceElement = A),
                  lr(A) && Pr(A);
                for (
                  var o = this.counters.parse(new Qn(n)),
                    a = this.resolvePseudoContent(e, A, r, fn.BEFORE),
                    s = e.firstChild;
                  s;
                  s = s.nextSibling
                )
                  (ir(s) &&
                    (fr(s) ||
                      s.hasAttribute("data-html2canvas-ignore") ||
                      ("function" == typeof this.options.ignoreElements &&
                        this.options.ignoreElements(s)))) ||
                    (this.options.copyStyles && ir(s) && hr(s)) ||
                    A.appendChild(this.cloneNode(s));
                a && A.insertBefore(a, A.firstChild);
                var u = this.resolvePseudoContent(e, A, i, fn.AFTER);
                return (
                  u && A.appendChild(u),
                  this.counters.pop(o),
                  n && this.options.copyStyles && !pr(e) && Or(n, A),
                  (0 === e.scrollTop && 0 === e.scrollLeft) ||
                    this.scrolledElements.push([A, e.scrollLeft, e.scrollTop]),
                  (Br(e) || mr(e)) && (Br(A) || mr(A)) && (A.value = e.value),
                  A
                );
              }
              return e.cloneNode(!1);
            }),
            (e.prototype.resolvePseudoContent = function (e, t, A, n) {
              var r = this;
              if (A) {
                var i = A.content,
                  o = t.ownerDocument;
                if (
                  o &&
                  i &&
                  "none" !== i &&
                  "-moz-alt-content" !== i &&
                  "none" !== A.display
                ) {
                  this.counters.parse(new Qn(A));
                  var a = new Sn(A),
                    s = o.createElement("html2canvaspseudoelement");
                  return (
                    Or(A, s),
                    a.content.forEach(function (t) {
                      if (t.type === d.STRING_TOKEN)
                        s.appendChild(o.createTextNode(t.value));
                      else if (t.type === d.URL_TOKEN) {
                        var A = o.createElement("img");
                        (A.src = t.value),
                          (A.style.opacity = "1"),
                          s.appendChild(A);
                      } else if (t.type === d.FUNCTION) {
                        if ("attr" === t.name) {
                          var n = t.values.filter(_e);
                          n.length &&
                            s.appendChild(
                              o.createTextNode(e.getAttribute(n[0].value) || "")
                            );
                        } else if ("counter" === t.name) {
                          var i = t.values.filter(Re),
                            u = i[0],
                            c = i[1];
                          if (u && _e(u)) {
                            var l = r.counters.getCounterValue(u.value),
                              g = c && _e(c) ? bA.parse(c.value) : SA.DECIMAL;
                            s.appendChild(o.createTextNode(br(l, g, !1)));
                          }
                        } else if ("counters" === t.name) {
                          var p = t.values.filter(Re),
                            h = ((u = p[0]), p[1]);
                          if (((c = p[2]), u && _e(u))) {
                            var f = r.counters.getCounterValues(u.value),
                              B = c && _e(c) ? bA.parse(c.value) : SA.DECIMAL,
                              m = h && h.type === d.STRING_TOKEN ? h.value : "",
                              v = f
                                .map(function (e) {
                                  return br(e, B, !1);
                                })
                                .join(m);
                            s.appendChild(o.createTextNode(v));
                          }
                        }
                      } else if (t.type === d.IDENT_TOKEN)
                        switch (t.value) {
                          case "open-quote":
                            s.appendChild(
                              o.createTextNode(En(a.quotes, r.quoteDepth++, !0))
                            );
                            break;
                          case "close-quote":
                            s.appendChild(
                              o.createTextNode(En(a.quotes, --r.quoteDepth, !1))
                            );
                            break;
                          default:
                            s.appendChild(o.createTextNode(t.value));
                        }
                    }),
                    (s.className = Mr + " " + Kr),
                    (t.className += n === fn.BEFORE ? " " + Mr : " " + Kr),
                    s
                  );
                }
              }
            }),
            (e.destroy = function (e) {
              return !!e.parentNode && (e.parentNode.removeChild(e), !0);
            }),
            e
          );
        })();
      !(function (e) {
        (e[(e.BEFORE = 0)] = "BEFORE"), (e[(e.AFTER = 1)] = "AFTER");
      })(fn || (fn = {}));
      var Nr,
        Hr = function (e, t) {
          var A = e.createElement("iframe");
          return (
            (A.className = "html2canvas-container"),
            (A.style.visibility = "hidden"),
            (A.style.position = "fixed"),
            (A.style.left = "-10000px"),
            (A.style.top = "0px"),
            (A.style.border = "0"),
            (A.width = t.width.toString()),
            (A.height = t.height.toString()),
            (A.scrolling = "no"),
            A.setAttribute("data-html2canvas-ignore", "true"),
            e.body.appendChild(A),
            A
          );
        },
        _r = function (e) {
          return new Promise(function (t, A) {
            var n = e.contentWindow;
            if (!n) return A("No window assigned for iframe");
            var r = n.document;
            n.onload =
              e.onload =
              r.onreadystatechange =
                function () {
                  n.onload = e.onload = r.onreadystatechange = null;
                  var A = setInterval(function () {
                    r.body.childNodes.length > 0 &&
                      "complete" === r.readyState &&
                      (clearInterval(A), t(e));
                  }, 50);
                };
          });
        },
        Or = function (e, t) {
          for (var A = e.length - 1; A >= 0; A--) {
            var n = e.item(A);
            "content" !== n && t.style.setProperty(n, e.getPropertyValue(n));
          }
          return t;
        },
        Dr = function (e) {
          var t = "";
          return (
            e &&
              ((t += "<!DOCTYPE "),
              e.name && (t += e.name),
              e.internalSubset && (t += e.internalSubset),
              e.publicId && (t += '"' + e.publicId + '"'),
              e.systemId && (t += '"' + e.systemId + '"'),
              (t += ">")),
            t
          );
        },
        Lr = function (e, t, A) {
          e &&
            e.defaultView &&
            (t !== e.defaultView.pageXOffset ||
              A !== e.defaultView.pageYOffset) &&
            e.defaultView.scrollTo(t, A);
        },
        Rr = function (e) {
          var t = e[0],
            A = e[1],
            n = e[2];
          (t.scrollLeft = A), (t.scrollTop = n);
        },
        Mr = "___html2canvas___pseudoelement_before",
        Kr = "___html2canvas___pseudoelement_after",
        Pr = function (e) {
          xr(
            e,
            "." +
              Mr +
              ':before{\n    content: "" !important;\n    display: none !important;\n}\n         .' +
              Kr +
              ':after{\n    content: "" !important;\n    display: none !important;\n}'
          );
        },
        xr = function (e, t) {
          var A = e.ownerDocument;
          if (A) {
            var n = A.createElement("style");
            (n.textContent = t), e.appendChild(n);
          }
        };
      !(function (e) {
        (e[(e.VECTOR = 0)] = "VECTOR"),
          (e[(e.BEZIER_CURVE = 1)] = "BEZIER_CURVE");
      })(Nr || (Nr = {}));
      var kr,
        Vr = function (e, t) {
          return (
            e.length === t.length &&
            e.some(function (e, A) {
              return e === t[A];
            })
          );
        },
        Gr = (function () {
          function e(e, t) {
            (this.type = Nr.VECTOR), (this.x = e), (this.y = t);
          }
          return (
            (e.prototype.add = function (t, A) {
              return new e(this.x + t, this.y + A);
            }),
            e
          );
        })(),
        zr = function (e, t, A) {
          return new Gr(e.x + (t.x - e.x) * A, e.y + (t.y - e.y) * A);
        },
        Jr = (function () {
          function e(e, t, A, n) {
            (this.type = Nr.BEZIER_CURVE),
              (this.start = e),
              (this.startControl = t),
              (this.endControl = A),
              (this.end = n);
          }
          return (
            (e.prototype.subdivide = function (t, A) {
              var n = zr(this.start, this.startControl, t),
                r = zr(this.startControl, this.endControl, t),
                i = zr(this.endControl, this.end, t),
                o = zr(n, r, t),
                a = zr(r, i, t),
                s = zr(o, a, t);
              return A ? new e(this.start, n, o, s) : new e(s, a, i, this.end);
            }),
            (e.prototype.add = function (t, A) {
              return new e(
                this.start.add(t, A),
                this.startControl.add(t, A),
                this.endControl.add(t, A),
                this.end.add(t, A)
              );
            }),
            (e.prototype.reverse = function () {
              return new e(
                this.end,
                this.endControl,
                this.startControl,
                this.start
              );
            }),
            e
          );
        })(),
        Xr = function (e) {
          return e.type === Nr.BEZIER_CURVE;
        },
        Wr = function (e) {
          var t = e.styles,
            A = e.bounds,
            n = Je(t.borderTopLeftRadius, A.width, A.height),
            r = n[0],
            i = n[1],
            o = Je(t.borderTopRightRadius, A.width, A.height),
            a = o[0],
            s = o[1],
            u = Je(t.borderBottomRightRadius, A.width, A.height),
            c = u[0],
            l = u[1],
            d = Je(t.borderBottomLeftRadius, A.width, A.height),
            g = d[0],
            p = d[1],
            h = [];
          h.push((r + a) / A.width),
            h.push((g + c) / A.width),
            h.push((i + p) / A.height),
            h.push((s + l) / A.height);
          var f = Math.max.apply(Math, h);
          f > 1 &&
            ((r /= f),
            (i /= f),
            (a /= f),
            (s /= f),
            (c /= f),
            (l /= f),
            (g /= f),
            (p /= f));
          var B = A.width - a,
            m = A.height - l,
            v = A.width - c,
            C = A.height - p,
            w = t.borderTopWidth,
            y = t.borderRightWidth,
            E = t.borderBottomWidth,
            F = t.borderLeftWidth,
            U = Xe(t.paddingTop, e.bounds.width),
            S = Xe(t.paddingRight, e.bounds.width),
            Q = Xe(t.paddingBottom, e.bounds.width),
            T = Xe(t.paddingLeft, e.bounds.width);
          (this.topLeftBorderBox =
            r > 0 || i > 0
              ? Yr(A.left, A.top, r, i, kr.TOP_LEFT)
              : new Gr(A.left, A.top)),
            (this.topRightBorderBox =
              a > 0 || s > 0
                ? Yr(A.left + B, A.top, a, s, kr.TOP_RIGHT)
                : new Gr(A.left + A.width, A.top)),
            (this.bottomRightBorderBox =
              c > 0 || l > 0
                ? Yr(A.left + v, A.top + m, c, l, kr.BOTTOM_RIGHT)
                : new Gr(A.left + A.width, A.top + A.height)),
            (this.bottomLeftBorderBox =
              g > 0 || p > 0
                ? Yr(A.left, A.top + C, g, p, kr.BOTTOM_LEFT)
                : new Gr(A.left, A.top + A.height)),
            (this.topLeftPaddingBox =
              r > 0 || i > 0
                ? Yr(
                    A.left + F,
                    A.top + w,
                    Math.max(0, r - F),
                    Math.max(0, i - w),
                    kr.TOP_LEFT
                  )
                : new Gr(A.left + F, A.top + w)),
            (this.topRightPaddingBox =
              a > 0 || s > 0
                ? Yr(
                    A.left + Math.min(B, A.width + F),
                    A.top + w,
                    B > A.width + F ? 0 : a - F,
                    s - w,
                    kr.TOP_RIGHT
                  )
                : new Gr(A.left + A.width - y, A.top + w)),
            (this.bottomRightPaddingBox =
              c > 0 || l > 0
                ? Yr(
                    A.left + Math.min(v, A.width - F),
                    A.top + Math.min(m, A.height + w),
                    Math.max(0, c - y),
                    l - E,
                    kr.BOTTOM_RIGHT
                  )
                : new Gr(A.left + A.width - y, A.top + A.height - E)),
            (this.bottomLeftPaddingBox =
              g > 0 || p > 0
                ? Yr(
                    A.left + F,
                    A.top + C,
                    Math.max(0, g - F),
                    p - E,
                    kr.BOTTOM_LEFT
                  )
                : new Gr(A.left + F, A.top + A.height - E)),
            (this.topLeftContentBox =
              r > 0 || i > 0
                ? Yr(
                    A.left + F + T,
                    A.top + w + U,
                    Math.max(0, r - (F + T)),
                    Math.max(0, i - (w + U)),
                    kr.TOP_LEFT
                  )
                : new Gr(A.left + F + T, A.top + w + U)),
            (this.topRightContentBox =
              a > 0 || s > 0
                ? Yr(
                    A.left + Math.min(B, A.width + F + T),
                    A.top + w + U,
                    B > A.width + F + T ? 0 : a - F + T,
                    s - (w + U),
                    kr.TOP_RIGHT
                  )
                : new Gr(A.left + A.width - (y + S), A.top + w + U)),
            (this.bottomRightContentBox =
              c > 0 || l > 0
                ? Yr(
                    A.left + Math.min(v, A.width - (F + T)),
                    A.top + Math.min(m, A.height + w + U),
                    Math.max(0, c - (y + S)),
                    l - (E + Q),
                    kr.BOTTOM_RIGHT
                  )
                : new Gr(
                    A.left + A.width - (y + S),
                    A.top + A.height - (E + Q)
                  )),
            (this.bottomLeftContentBox =
              g > 0 || p > 0
                ? Yr(
                    A.left + F + T,
                    A.top + C,
                    Math.max(0, g - (F + T)),
                    p - (E + Q),
                    kr.BOTTOM_LEFT
                  )
                : new Gr(A.left + F + T, A.top + A.height - (E + Q)));
        };
      !(function (e) {
        (e[(e.TOP_LEFT = 0)] = "TOP_LEFT"),
          (e[(e.TOP_RIGHT = 1)] = "TOP_RIGHT"),
          (e[(e.BOTTOM_RIGHT = 2)] = "BOTTOM_RIGHT"),
          (e[(e.BOTTOM_LEFT = 3)] = "BOTTOM_LEFT");
      })(kr || (kr = {}));
      var Yr = function (e, t, A, n, r) {
          var i = ((Math.sqrt(2) - 1) / 3) * 4,
            o = A * i,
            a = n * i,
            s = e + A,
            u = t + n;
          switch (r) {
            case kr.TOP_LEFT:
              return new Jr(
                new Gr(e, u),
                new Gr(e, u - a),
                new Gr(s - o, t),
                new Gr(s, t)
              );
            case kr.TOP_RIGHT:
              return new Jr(
                new Gr(e, t),
                new Gr(e + o, t),
                new Gr(s, u - a),
                new Gr(s, u)
              );
            case kr.BOTTOM_RIGHT:
              return new Jr(
                new Gr(s, t),
                new Gr(s, t + a),
                new Gr(e + o, u),
                new Gr(e, u)
              );
            case kr.BOTTOM_LEFT:
            default:
              return new Jr(
                new Gr(s, u),
                new Gr(s - o, u),
                new Gr(e, t + a),
                new Gr(e, t)
              );
          }
        },
        jr = function (e) {
          return [
            e.topLeftBorderBox,
            e.topRightBorderBox,
            e.bottomRightBorderBox,
            e.bottomLeftBorderBox,
          ];
        },
        qr = function (e) {
          return [
            e.topLeftPaddingBox,
            e.topRightPaddingBox,
            e.bottomRightPaddingBox,
            e.bottomLeftPaddingBox,
          ];
        },
        Zr = function (e, t, A) {
          (this.type = 0),
            (this.offsetX = e),
            (this.offsetY = t),
            (this.matrix = A),
            (this.target = 6);
        },
        $r = function (e, t) {
          (this.type = 1), (this.target = t), (this.path = e);
        },
        ei = function (e) {
          (this.element = e),
            (this.inlineLevel = []),
            (this.nonInlineLevel = []),
            (this.negativeZIndex = []),
            (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
            (this.positiveZIndex = []),
            (this.nonPositionedFloats = []),
            (this.nonPositionedInlineLevel = []);
        },
        ti = (function () {
          function e(e, t) {
            if (
              ((this.container = e),
              (this.effects = t.slice(0)),
              (this.curves = new Wr(e)),
              null !== e.styles.transform)
            ) {
              var A = e.bounds.left + e.styles.transformOrigin[0].number,
                n = e.bounds.top + e.styles.transformOrigin[1].number,
                r = e.styles.transform;
              this.effects.push(new Zr(A, n, r));
            }
            if (e.styles.overflowX !== TA.VISIBLE) {
              var i = jr(this.curves),
                o = qr(this.curves);
              Vr(i, o)
                ? this.effects.push(new $r(i, 6))
                : (this.effects.push(new $r(i, 2)),
                  this.effects.push(new $r(o, 4)));
            }
          }
          return (
            (e.prototype.getParentEffects = function () {
              var e = this.effects.slice(0);
              if (this.container.styles.overflowX !== TA.VISIBLE) {
                var t = jr(this.curves),
                  A = qr(this.curves);
                Vr(t, A) || e.push(new $r(A, 6));
              }
              return e;
            }),
            e
          );
        })(),
        Ai = function (e, t, A, n) {
          e.container.elements.forEach(function (r) {
            var i = mn(r.flags, 4),
              o = mn(r.flags, 2),
              a = new ti(r, e.getParentEffects());
            mn(r.styles.display, 2048) && n.push(a);
            var s = mn(r.flags, 8) ? [] : n;
            if (i || o) {
              var u = i || r.styles.isPositioned() ? A : t,
                c = new ei(a);
              if (
                r.styles.isPositioned() ||
                r.styles.opacity < 1 ||
                r.styles.isTransformed()
              ) {
                var l = r.styles.zIndex.order;
                if (l < 0) {
                  var d = 0;
                  u.negativeZIndex.some(function (e, t) {
                    return l > e.element.container.styles.zIndex.order
                      ? ((d = t), !1)
                      : d > 0;
                  }),
                    u.negativeZIndex.splice(d, 0, c);
                } else if (l > 0) {
                  var g = 0;
                  u.positiveZIndex.some(function (e, t) {
                    return l > e.element.container.styles.zIndex.order
                      ? ((g = t + 1), !1)
                      : g > 0;
                  }),
                    u.positiveZIndex.splice(g, 0, c);
                } else u.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
              } else
                r.styles.isFloating()
                  ? u.nonPositionedFloats.push(c)
                  : u.nonPositionedInlineLevel.push(c);
              Ai(a, c, i ? c : A, s);
            } else r.styles.isInlineLevel() ? t.inlineLevel.push(a) : t.nonInlineLevel.push(a), Ai(a, t, A, s);
            mn(r.flags, 8) && ni(r, s);
          });
        },
        ni = function (e, t) {
          for (
            var A = e instanceof Vn ? e.start : 1,
              n = e instanceof Vn && e.reversed,
              r = 0;
            r < t.length;
            r++
          ) {
            var i = t[r];
            i.container instanceof kn &&
              "number" == typeof i.container.value &&
              0 !== i.container.value &&
              (A = i.container.value),
              (i.listValue = br(A, i.container.styles.listStyleType, !0)),
              (A += n ? -1 : 1);
          }
        },
        ri = function (e, t, A, n) {
          var r = [];
          return (
            Xr(e) ? r.push(e.subdivide(0.5, !1)) : r.push(e),
            Xr(A) ? r.push(A.subdivide(0.5, !0)) : r.push(A),
            Xr(n) ? r.push(n.subdivide(0.5, !0).reverse()) : r.push(n),
            Xr(t) ? r.push(t.subdivide(0.5, !1).reverse()) : r.push(t),
            r
          );
        },
        ii = function (e) {
          var t = e.bounds,
            A = e.styles;
          return t.add(
            A.borderLeftWidth,
            A.borderTopWidth,
            -(A.borderRightWidth + A.borderLeftWidth),
            -(A.borderTopWidth + A.borderBottomWidth)
          );
        },
        oi = function (e) {
          var t = e.styles,
            A = e.bounds,
            n = Xe(t.paddingLeft, A.width),
            r = Xe(t.paddingRight, A.width),
            i = Xe(t.paddingTop, A.width),
            o = Xe(t.paddingBottom, A.width);
          return A.add(
            n + t.borderLeftWidth,
            i + t.borderTopWidth,
            -(t.borderRightWidth + t.borderLeftWidth + n + r),
            -(t.borderTopWidth + t.borderBottomWidth + i + o)
          );
        },
        ai = function (e, t, A) {
          var n = (function (e, t) {
              return 0 === e ? t.bounds : 2 === e ? oi(t) : ii(t);
            })(li(e.styles.backgroundOrigin, t), e),
            r = (function (e, t) {
              return e === ot.BORDER_BOX
                ? t.bounds
                : e === ot.CONTENT_BOX
                ? oi(t)
                : ii(t);
            })(li(e.styles.backgroundClip, t), e),
            i = ci(li(e.styles.backgroundSize, t), A, n),
            o = i[0],
            a = i[1],
            s = Je(
              li(e.styles.backgroundPosition, t),
              n.width - o,
              n.height - a
            );
          return [
            di(li(e.styles.backgroundRepeat, t), s, i, n, r),
            Math.round(n.left + s[0]),
            Math.round(n.top + s[1]),
            o,
            a,
          ];
        },
        si = function (e) {
          return _e(e) && e.value === Vt.AUTO;
        },
        ui = function (e) {
          return "number" == typeof e;
        },
        ci = function (e, t, A) {
          var n = t[0],
            r = t[1],
            i = t[2],
            o = e[0],
            a = e[1];
          if (xe(o) && a && xe(a)) return [Xe(o, A.width), Xe(a, A.height)];
          var s = ui(i);
          if (_e(o) && (o.value === Vt.CONTAIN || o.value === Vt.COVER))
            return ui(i)
              ? A.width / A.height < i != (o.value === Vt.COVER)
                ? [A.width, A.width / i]
                : [A.height * i, A.height]
              : [A.width, A.height];
          var u = ui(n),
            c = ui(r),
            l = u || c;
          if (si(o) && (!a || si(a)))
            return u && c
              ? [n, r]
              : s || l
              ? l && s
                ? [u ? n : r * i, c ? r : n / i]
                : [u ? n : A.width, c ? r : A.height]
              : [A.width, A.height];
          if (s) {
            var d = 0,
              g = 0;
            return (
              xe(o) ? (d = Xe(o, A.width)) : xe(a) && (g = Xe(a, A.height)),
              si(o) ? (d = g * i) : (a && !si(a)) || (g = d / i),
              [d, g]
            );
          }
          var p = null,
            h = null;
          if (
            (xe(o) ? (p = Xe(o, A.width)) : a && xe(a) && (h = Xe(a, A.height)),
            null === p ||
              (a && !si(a)) ||
              (h = u && c ? (p / n) * r : A.height),
            null !== h && si(o) && (p = u && c ? (h / r) * n : A.width),
            null !== p && null !== h)
          )
            return [p, h];
          throw new Error("Unable to calculate background-size for element");
        },
        li = function (e, t) {
          var A = e[t];
          return void 0 === A ? e[0] : A;
        },
        di = function (e, t, A, n, r) {
          var i = t[0],
            o = t[1],
            a = A[0],
            s = A[1];
          switch (e) {
            case Rt.REPEAT_X:
              return [
                new Gr(Math.round(n.left), Math.round(n.top + o)),
                new Gr(Math.round(n.left + n.width), Math.round(n.top + o)),
                new Gr(Math.round(n.left + n.width), Math.round(s + n.top + o)),
                new Gr(Math.round(n.left), Math.round(s + n.top + o)),
              ];
            case Rt.REPEAT_Y:
              return [
                new Gr(Math.round(n.left + i), Math.round(n.top)),
                new Gr(Math.round(n.left + i + a), Math.round(n.top)),
                new Gr(
                  Math.round(n.left + i + a),
                  Math.round(n.height + n.top)
                ),
                new Gr(Math.round(n.left + i), Math.round(n.height + n.top)),
              ];
            case Rt.NO_REPEAT:
              return [
                new Gr(Math.round(n.left + i), Math.round(n.top + o)),
                new Gr(Math.round(n.left + i + a), Math.round(n.top + o)),
                new Gr(Math.round(n.left + i + a), Math.round(n.top + o + s)),
                new Gr(Math.round(n.left + i), Math.round(n.top + o + s)),
              ];
            default:
              return [
                new Gr(Math.round(r.left), Math.round(r.top)),
                new Gr(Math.round(r.left + r.width), Math.round(r.top)),
                new Gr(
                  Math.round(r.left + r.width),
                  Math.round(r.height + r.top)
                ),
                new Gr(Math.round(r.left), Math.round(r.height + r.top)),
              ];
          }
        },
        gi = (function () {
          function e(e) {
            (this._data = {}), (this._document = e);
          }
          return (
            (e.prototype.parseMetrics = function (e, t) {
              var A = this._document.createElement("div"),
                n = this._document.createElement("img"),
                r = this._document.createElement("span"),
                i = this._document.body;
              (A.style.visibility = "hidden"),
                (A.style.fontFamily = e),
                (A.style.fontSize = t),
                (A.style.margin = "0"),
                (A.style.padding = "0"),
                i.appendChild(A),
                (n.src =
                  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
                (n.width = 1),
                (n.height = 1),
                (n.style.margin = "0"),
                (n.style.padding = "0"),
                (n.style.verticalAlign = "baseline"),
                (r.style.fontFamily = e),
                (r.style.fontSize = t),
                (r.style.margin = "0"),
                (r.style.padding = "0"),
                r.appendChild(this._document.createTextNode("Hidden Text")),
                A.appendChild(r),
                A.appendChild(n);
              var o = n.offsetTop - r.offsetTop + 2;
              A.removeChild(r),
                A.appendChild(this._document.createTextNode("Hidden Text")),
                (A.style.lineHeight = "normal"),
                (n.style.verticalAlign = "super");
              var a = n.offsetTop - A.offsetTop + 2;
              return i.removeChild(A), { baseline: o, middle: a };
            }),
            (e.prototype.getMetrics = function (e, t) {
              var A = e + " " + t;
              return (
                void 0 === this._data[A] &&
                  (this._data[A] = this.parseMetrics(e, t)),
                this._data[A]
              );
            }),
            e
          );
        })(),
        pi = (function () {
          function e(e) {
            (this._activeEffects = []),
              (this.canvas = e.canvas
                ? e.canvas
                : document.createElement("canvas")),
              (this.ctx = this.canvas.getContext("2d")),
              (this.options = e),
              e.canvas ||
                ((this.canvas.width = Math.floor(e.width * e.scale)),
                (this.canvas.height = Math.floor(e.height * e.scale)),
                (this.canvas.style.width = e.width + "px"),
                (this.canvas.style.height = e.height + "px")),
              (this.fontMetrics = new gi(document)),
              this.ctx.scale(this.options.scale, this.options.scale),
              this.ctx.translate(-e.x + e.scrollX, -e.y + e.scrollY),
              (this.ctx.textBaseline = "bottom"),
              (this._activeEffects = []),
              Ut.getInstance(e.id).debug(
                "Canvas renderer initialized (" +
                  e.width +
                  "x" +
                  e.height +
                  " at " +
                  e.x +
                  "," +
                  e.y +
                  ") with scale " +
                  e.scale
              );
          }
          return (
            (e.prototype.applyEffects = function (e, t) {
              for (var A = this; this._activeEffects.length; ) this.popEffect();
              e.filter(function (e) {
                return mn(e.target, t);
              }).forEach(function (e) {
                return A.applyEffect(e);
              });
            }),
            (e.prototype.applyEffect = function (e) {
              this.ctx.save(),
                (function (e) {
                  return 0 === e.type;
                })(e) &&
                  (this.ctx.translate(e.offsetX, e.offsetY),
                  this.ctx.transform(
                    e.matrix[0],
                    e.matrix[1],
                    e.matrix[2],
                    e.matrix[3],
                    e.matrix[4],
                    e.matrix[5]
                  ),
                  this.ctx.translate(-e.offsetX, -e.offsetY)),
                (function (e) {
                  return 1 === e.type;
                })(e) && (this.path(e.path), this.ctx.clip()),
                this._activeEffects.push(e);
            }),
            (e.prototype.popEffect = function () {
              this._activeEffects.pop(), this.ctx.restore();
            }),
            (e.prototype.renderStack = function (e) {
              return n(this, void 0, void 0, function () {
                var t;
                return r(this, function (A) {
                  switch (A.label) {
                    case 0:
                      return (t = e.element.container.styles).isVisible()
                        ? ((this.ctx.globalAlpha = t.opacity),
                          [4, this.renderStackContent(e)])
                        : [3, 2];
                    case 1:
                      A.sent(), (A.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.renderNode = function (e) {
              return n(this, void 0, void 0, function () {
                return r(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return e.container.styles.isVisible()
                        ? [4, this.renderNodeBackgroundAndBorders(e)]
                        : [3, 3];
                    case 1:
                      return t.sent(), [4, this.renderNodeContent(e)];
                    case 2:
                      t.sent(), (t.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.renderTextWithLetterSpacing = function (e, t) {
              var A = this;
              0 === t
                ? this.ctx.fillText(
                    e.text,
                    e.bounds.left,
                    e.bounds.top + e.bounds.height
                  )
                : a(e.text)
                    .map(function (e) {
                      return s(e);
                    })
                    .reduce(function (t, n) {
                      return (
                        A.ctx.fillText(n, t, e.bounds.top + e.bounds.height),
                        t + A.ctx.measureText(n).width
                      );
                    }, e.bounds.left);
            }),
            (e.prototype.createFontStyle = function (e) {
              var t = e.fontVariant
                  .filter(function (e) {
                    return "normal" === e || "small-caps" === e;
                  })
                  .join(""),
                A = e.fontFamily.join(", "),
                n = Ne(e.fontSize)
                  ? "" + e.fontSize.number + e.fontSize.unit
                  : e.fontSize.number + "px";
              return [[e.fontStyle, t, e.fontWeight, n, A].join(" "), A, n];
            }),
            (e.prototype.renderTextNode = function (e, t) {
              return n(this, void 0, void 0, function () {
                var A,
                  n,
                  i,
                  o,
                  a = this;
                return r(this, function (r) {
                  return (
                    (A = this.createFontStyle(t)),
                    (n = A[0]),
                    (i = A[1]),
                    (o = A[2]),
                    (this.ctx.font = n),
                    e.textBounds.forEach(function (e) {
                      (a.ctx.fillStyle = et(t.color)),
                        a.renderTextWithLetterSpacing(e, t.letterSpacing);
                      var A = t.textShadow;
                      A.length &&
                        e.text.trim().length &&
                        (A.slice(0)
                          .reverse()
                          .forEach(function (t) {
                            (a.ctx.shadowColor = et(t.color)),
                              (a.ctx.shadowOffsetX =
                                t.offsetX.number * a.options.scale),
                              (a.ctx.shadowOffsetY =
                                t.offsetY.number * a.options.scale),
                              (a.ctx.shadowBlur = t.blur.number),
                              a.ctx.fillText(
                                e.text,
                                e.bounds.left,
                                e.bounds.top + e.bounds.height
                              );
                          }),
                        (a.ctx.shadowColor = ""),
                        (a.ctx.shadowOffsetX = 0),
                        (a.ctx.shadowOffsetY = 0),
                        (a.ctx.shadowBlur = 0)),
                        t.textDecorationLine.length &&
                          ((a.ctx.fillStyle = et(
                            t.textDecorationColor || t.color
                          )),
                          t.textDecorationLine.forEach(function (t) {
                            switch (t) {
                              case 1:
                                var A = a.fontMetrics.getMetrics(i, o).baseline;
                                a.ctx.fillRect(
                                  e.bounds.left,
                                  Math.round(e.bounds.top + A),
                                  e.bounds.width,
                                  1
                                );
                                break;
                              case 2:
                                a.ctx.fillRect(
                                  e.bounds.left,
                                  Math.round(e.bounds.top),
                                  e.bounds.width,
                                  1
                                );
                                break;
                              case 3:
                                var n = a.fontMetrics.getMetrics(i, o).middle;
                                a.ctx.fillRect(
                                  e.bounds.left,
                                  Math.ceil(e.bounds.top + n),
                                  e.bounds.width,
                                  1
                                );
                            }
                          }));
                    }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.renderReplacedElement = function (e, t, A) {
              if (A && e.intrinsicWidth > 0 && e.intrinsicHeight > 0) {
                var n = oi(e),
                  r = qr(t);
                this.path(r),
                  this.ctx.save(),
                  this.ctx.clip(),
                  this.ctx.drawImage(
                    A,
                    0,
                    0,
                    e.intrinsicWidth,
                    e.intrinsicHeight,
                    n.left,
                    n.top,
                    n.width,
                    n.height
                  ),
                  this.ctx.restore();
              }
            }),
            (e.prototype.renderNodeContent = function (t) {
              return n(this, void 0, void 0, function () {
                var A, n, o, a, s, u, c, l, g, p, h, f, B, m;
                return r(this, function (r) {
                  switch (r.label) {
                    case 0:
                      this.applyEffects(t.effects, 4),
                        (A = t.container),
                        (n = t.curves),
                        (o = A.styles),
                        (a = 0),
                        (s = A.textNodes),
                        (r.label = 1);
                    case 1:
                      return a < s.length
                        ? ((u = s[a]), [4, this.renderTextNode(u, o)])
                        : [3, 4];
                    case 2:
                      r.sent(), (r.label = 3);
                    case 3:
                      return a++, [3, 1];
                    case 4:
                      if (!(A instanceof Kn)) return [3, 8];
                      r.label = 5;
                    case 5:
                      return (
                        r.trys.push([5, 7, , 8]),
                        [4, this.options.cache.match(A.src)]
                      );
                    case 6:
                      return (
                        (f = r.sent()),
                        this.renderReplacedElement(A, n, f),
                        [3, 8]
                      );
                    case 7:
                      return (
                        r.sent(),
                        Ut.getInstance(this.options.id).error(
                          "Error loading image " + A.src
                        ),
                        [3, 8]
                      );
                    case 8:
                      if (
                        (A instanceof Pn &&
                          this.renderReplacedElement(A, n, A.canvas),
                        !(A instanceof xn))
                      )
                        return [3, 12];
                      r.label = 9;
                    case 9:
                      return (
                        r.trys.push([9, 11, , 12]),
                        [4, this.options.cache.match(A.svg)]
                      );
                    case 10:
                      return (
                        (f = r.sent()),
                        this.renderReplacedElement(A, n, f),
                        [3, 12]
                      );
                    case 11:
                      return (
                        r.sent(),
                        Ut.getInstance(this.options.id).error(
                          "Error loading svg " + A.svg.substring(0, 255)
                        ),
                        [3, 12]
                      );
                    case 12:
                      return A instanceof qn && A.tree
                        ? [
                            4,
                            new e({
                              id: this.options.id,
                              scale: this.options.scale,
                              backgroundColor: A.backgroundColor,
                              x: 0,
                              y: 0,
                              scrollX: 0,
                              scrollY: 0,
                              width: A.width,
                              height: A.height,
                              cache: this.options.cache,
                              windowWidth: A.width,
                              windowHeight: A.height,
                            }).render(A.tree),
                          ]
                        : [3, 14];
                    case 13:
                      (c = r.sent()),
                        A.width &&
                          A.height &&
                          this.ctx.drawImage(
                            c,
                            0,
                            0,
                            A.width,
                            A.height,
                            A.bounds.left,
                            A.bounds.top,
                            A.bounds.width,
                            A.bounds.height
                          ),
                        (r.label = 14);
                    case 14:
                      if (
                        (A instanceof Xn &&
                          ((l = Math.min(A.bounds.width, A.bounds.height)),
                          "checkbox" === A.type
                            ? A.checked &&
                              (this.ctx.save(),
                              this.path([
                                new Gr(
                                  A.bounds.left + 0.39363 * l,
                                  A.bounds.top + 0.79 * l
                                ),
                                new Gr(
                                  A.bounds.left + 0.16 * l,
                                  A.bounds.top + 0.5549 * l
                                ),
                                new Gr(
                                  A.bounds.left + 0.27347 * l,
                                  A.bounds.top + 0.44071 * l
                                ),
                                new Gr(
                                  A.bounds.left + 0.39694 * l,
                                  A.bounds.top + 0.5649 * l
                                ),
                                new Gr(
                                  A.bounds.left + 0.72983 * l,
                                  A.bounds.top + 0.23 * l
                                ),
                                new Gr(
                                  A.bounds.left + 0.84 * l,
                                  A.bounds.top + 0.34085 * l
                                ),
                                new Gr(
                                  A.bounds.left + 0.39363 * l,
                                  A.bounds.top + 0.79 * l
                                ),
                              ]),
                              (this.ctx.fillStyle = et(707406591)),
                              this.ctx.fill(),
                              this.ctx.restore())
                            : "radio" === A.type &&
                              A.checked &&
                              (this.ctx.save(),
                              this.ctx.beginPath(),
                              this.ctx.arc(
                                A.bounds.left + l / 2,
                                A.bounds.top + l / 2,
                                l / 4,
                                0,
                                2 * Math.PI,
                                !0
                              ),
                              (this.ctx.fillStyle = et(707406591)),
                              this.ctx.fill(),
                              this.ctx.restore())),
                        hi(A) && A.value.length)
                      ) {
                        switch (
                          ((this.ctx.font = this.createFontStyle(o)[0]),
                          (this.ctx.fillStyle = et(o.color)),
                          (this.ctx.textBaseline = "middle"),
                          (this.ctx.textAlign = Bi(A.styles.textAlign)),
                          (m = oi(A)),
                          (g = 0),
                          A.styles.textAlign)
                        ) {
                          case RA.CENTER:
                            g += m.width / 2;
                            break;
                          case RA.RIGHT:
                            g += m.width;
                        }
                        (p = m.add(g, 0, 0, -m.height / 2 + 1)),
                          this.ctx.save(),
                          this.path([
                            new Gr(m.left, m.top),
                            new Gr(m.left + m.width, m.top),
                            new Gr(m.left + m.width, m.top + m.height),
                            new Gr(m.left, m.top + m.height),
                          ]),
                          this.ctx.clip(),
                          this.renderTextWithLetterSpacing(
                            new In(A.value, p),
                            o.letterSpacing
                          ),
                          this.ctx.restore(),
                          (this.ctx.textBaseline = "bottom"),
                          (this.ctx.textAlign = "left");
                      }
                      if (!mn(A.styles.display, 2048)) return [3, 20];
                      if (null === A.styles.listStyleImage) return [3, 19];
                      if ((h = A.styles.listStyleImage).type !== ct.URL)
                        return [3, 18];
                      (f = void 0), (B = h.url), (r.label = 15);
                    case 15:
                      return (
                        r.trys.push([15, 17, , 18]),
                        [4, this.options.cache.match(B)]
                      );
                    case 16:
                      return (
                        (f = r.sent()),
                        this.ctx.drawImage(
                          f,
                          A.bounds.left - (f.width + 10),
                          A.bounds.top
                        ),
                        [3, 18]
                      );
                    case 17:
                      return (
                        r.sent(),
                        Ut.getInstance(this.options.id).error(
                          "Error loading list-style-image " + B
                        ),
                        [3, 18]
                      );
                    case 18:
                      return [3, 20];
                    case 19:
                      t.listValue &&
                        A.styles.listStyleType !== SA.NONE &&
                        ((this.ctx.font = this.createFontStyle(o)[0]),
                        (this.ctx.fillStyle = et(o.color)),
                        (this.ctx.textBaseline = "middle"),
                        (this.ctx.textAlign = "right"),
                        (m = new i(
                          A.bounds.left,
                          A.bounds.top +
                            Xe(A.styles.paddingTop, A.bounds.width),
                          A.bounds.width,
                          (function (e, t) {
                            return _e(e) && "normal" === e.value
                              ? 1.2 * t
                              : e.type === d.NUMBER_TOKEN
                              ? t * e.number
                              : xe(e)
                              ? Xe(e, t)
                              : t;
                          })(o.lineHeight, o.fontSize.number) /
                            2 +
                            1
                        )),
                        this.renderTextWithLetterSpacing(
                          new In(t.listValue, m),
                          o.letterSpacing
                        ),
                        (this.ctx.textBaseline = "bottom"),
                        (this.ctx.textAlign = "left")),
                        (r.label = 20);
                    case 20:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.renderStackContent = function (e) {
              return n(this, void 0, void 0, function () {
                var t, A, n, i, o, a, s, u, c, l, d, g, p, h, f;
                return r(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [
                        4,
                        this.renderNodeBackgroundAndBorders(e.element),
                      ];
                    case 1:
                      r.sent(), (t = 0), (A = e.negativeZIndex), (r.label = 2);
                    case 2:
                      return t < A.length
                        ? ((f = A[t]), [4, this.renderStack(f)])
                        : [3, 5];
                    case 3:
                      r.sent(), (r.label = 4);
                    case 4:
                      return t++, [3, 2];
                    case 5:
                      return [4, this.renderNodeContent(e.element)];
                    case 6:
                      r.sent(), (n = 0), (i = e.nonInlineLevel), (r.label = 7);
                    case 7:
                      return n < i.length
                        ? ((f = i[n]), [4, this.renderNode(f)])
                        : [3, 10];
                    case 8:
                      r.sent(), (r.label = 9);
                    case 9:
                      return n++, [3, 7];
                    case 10:
                      (o = 0), (a = e.nonPositionedFloats), (r.label = 11);
                    case 11:
                      return o < a.length
                        ? ((f = a[o]), [4, this.renderStack(f)])
                        : [3, 14];
                    case 12:
                      r.sent(), (r.label = 13);
                    case 13:
                      return o++, [3, 11];
                    case 14:
                      (s = 0), (u = e.nonPositionedInlineLevel), (r.label = 15);
                    case 15:
                      return s < u.length
                        ? ((f = u[s]), [4, this.renderStack(f)])
                        : [3, 18];
                    case 16:
                      r.sent(), (r.label = 17);
                    case 17:
                      return s++, [3, 15];
                    case 18:
                      (c = 0), (l = e.inlineLevel), (r.label = 19);
                    case 19:
                      return c < l.length
                        ? ((f = l[c]), [4, this.renderNode(f)])
                        : [3, 22];
                    case 20:
                      r.sent(), (r.label = 21);
                    case 21:
                      return c++, [3, 19];
                    case 22:
                      (d = 0),
                        (g = e.zeroOrAutoZIndexOrTransformedOrOpacity),
                        (r.label = 23);
                    case 23:
                      return d < g.length
                        ? ((f = g[d]), [4, this.renderStack(f)])
                        : [3, 26];
                    case 24:
                      r.sent(), (r.label = 25);
                    case 25:
                      return d++, [3, 23];
                    case 26:
                      (p = 0), (h = e.positiveZIndex), (r.label = 27);
                    case 27:
                      return p < h.length
                        ? ((f = h[p]), [4, this.renderStack(f)])
                        : [3, 30];
                    case 28:
                      r.sent(), (r.label = 29);
                    case 29:
                      return p++, [3, 27];
                    case 30:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.mask = function (e) {
              this.ctx.beginPath(),
                this.ctx.moveTo(0, 0),
                this.ctx.lineTo(this.canvas.width, 0),
                this.ctx.lineTo(this.canvas.width, this.canvas.height),
                this.ctx.lineTo(0, this.canvas.height),
                this.ctx.lineTo(0, 0),
                this.formatPath(e.slice(0).reverse()),
                this.ctx.closePath();
            }),
            (e.prototype.path = function (e) {
              this.ctx.beginPath(), this.formatPath(e), this.ctx.closePath();
            }),
            (e.prototype.formatPath = function (e) {
              var t = this;
              e.forEach(function (e, A) {
                var n = Xr(e) ? e.start : e;
                0 === A ? t.ctx.moveTo(n.x, n.y) : t.ctx.lineTo(n.x, n.y),
                  Xr(e) &&
                    t.ctx.bezierCurveTo(
                      e.startControl.x,
                      e.startControl.y,
                      e.endControl.x,
                      e.endControl.y,
                      e.end.x,
                      e.end.y
                    );
              });
            }),
            (e.prototype.renderRepeat = function (e, t, A, n) {
              this.path(e),
                (this.ctx.fillStyle = t),
                this.ctx.translate(A, n),
                this.ctx.fill(),
                this.ctx.translate(-A, -n);
            }),
            (e.prototype.resizeImage = function (e, t, A) {
              if (e.width === t && e.height === A) return e;
              var n = this.canvas.ownerDocument.createElement("canvas");
              return (
                (n.width = t),
                (n.height = A),
                n
                  .getContext("2d")
                  .drawImage(e, 0, 0, e.width, e.height, 0, 0, t, A),
                n
              );
            }),
            (e.prototype.renderBackgroundImage = function (e) {
              return n(this, void 0, void 0, function () {
                var t, A, n, i, o, a;
                return r(this, function (s) {
                  switch (s.label) {
                    case 0:
                      (t = e.styles.backgroundImage.length - 1),
                        (A = function (A) {
                          var i,
                            o,
                            a,
                            s,
                            u,
                            c,
                            l,
                            d,
                            g,
                            p,
                            h,
                            f,
                            B,
                            m,
                            v,
                            C,
                            w,
                            y,
                            E,
                            F,
                            U,
                            S,
                            Q,
                            T,
                            b,
                            I,
                            N,
                            H,
                            _,
                            O,
                            D;
                          return r(this, function (r) {
                            switch (r.label) {
                              case 0:
                                if (A.type !== ct.URL) return [3, 5];
                                (i = void 0), (o = A.url), (r.label = 1);
                              case 1:
                                return (
                                  r.trys.push([1, 3, , 4]),
                                  [4, n.options.cache.match(o)]
                                );
                              case 2:
                                return (i = r.sent()), [3, 4];
                              case 3:
                                return (
                                  r.sent(),
                                  Ut.getInstance(n.options.id).error(
                                    "Error loading background-image " + o
                                  ),
                                  [3, 4]
                                );
                              case 4:
                                return (
                                  i &&
                                    ((a = ai(e, t, [
                                      i.width,
                                      i.height,
                                      i.width / i.height,
                                    ])),
                                    (C = a[0]),
                                    (S = a[1]),
                                    (Q = a[2]),
                                    (E = a[3]),
                                    (F = a[4]),
                                    (m = n.ctx.createPattern(
                                      n.resizeImage(i, E, F),
                                      "repeat"
                                    )),
                                    n.renderRepeat(C, m, S, Q)),
                                  [3, 6]
                                );
                              case 5:
                                A.type === ct.LINEAR_GRADIENT
                                  ? ((s = ai(e, t, [null, null, null])),
                                    (C = s[0]),
                                    (S = s[1]),
                                    (Q = s[2]),
                                    (E = s[3]),
                                    (F = s[4]),
                                    (u = Bt(A.angle, E, F)),
                                    (c = u[0]),
                                    (l = u[1]),
                                    (d = u[2]),
                                    (g = u[3]),
                                    (p = u[4]),
                                    ((h =
                                      document.createElement("canvas")).width =
                                      E),
                                    (h.height = F),
                                    (f = h.getContext("2d")),
                                    (B = f.createLinearGradient(l, g, d, p)),
                                    ft(A.stops, c).forEach(function (e) {
                                      return B.addColorStop(
                                        e.stop,
                                        et(e.color)
                                      );
                                    }),
                                    (f.fillStyle = B),
                                    f.fillRect(0, 0, E, F),
                                    E > 0 &&
                                      F > 0 &&
                                      ((m = n.ctx.createPattern(h, "repeat")),
                                      n.renderRepeat(C, m, S, Q)))
                                  : (function (e) {
                                      return e.type === ct.RADIAL_GRADIENT;
                                    })(A) &&
                                    ((v = ai(e, t, [null, null, null])),
                                    (C = v[0]),
                                    (w = v[1]),
                                    (y = v[2]),
                                    (E = v[3]),
                                    (F = v[4]),
                                    (U =
                                      0 === A.position.length
                                        ? [Ge]
                                        : A.position),
                                    (S = Xe(U[0], E)),
                                    (Q = Xe(U[U.length - 1], F)),
                                    (T = (function (e, t, A, n, r) {
                                      var i = 0,
                                        o = 0;
                                      switch (e.size) {
                                        case dt.CLOSEST_SIDE:
                                          e.shape === lt.CIRCLE
                                            ? (i = o =
                                                Math.min(
                                                  Math.abs(t),
                                                  Math.abs(t - n),
                                                  Math.abs(A),
                                                  Math.abs(A - r)
                                                ))
                                            : e.shape === lt.ELLIPSE &&
                                              ((i = Math.min(
                                                Math.abs(t),
                                                Math.abs(t - n)
                                              )),
                                              (o = Math.min(
                                                Math.abs(A),
                                                Math.abs(A - r)
                                              )));
                                          break;
                                        case dt.CLOSEST_CORNER:
                                          if (e.shape === lt.CIRCLE)
                                            i = o = Math.min(
                                              mt(t, A),
                                              mt(t, A - r),
                                              mt(t - n, A),
                                              mt(t - n, A - r)
                                            );
                                          else if (e.shape === lt.ELLIPSE) {
                                            var a =
                                                Math.min(
                                                  Math.abs(A),
                                                  Math.abs(A - r)
                                                ) /
                                                Math.min(
                                                  Math.abs(t),
                                                  Math.abs(t - n)
                                                ),
                                              s = vt(n, r, t, A, !0),
                                              u = s[0],
                                              c = s[1];
                                            o =
                                              a * (i = mt(u - t, (c - A) / a));
                                          }
                                          break;
                                        case dt.FARTHEST_SIDE:
                                          e.shape === lt.CIRCLE
                                            ? (i = o =
                                                Math.max(
                                                  Math.abs(t),
                                                  Math.abs(t - n),
                                                  Math.abs(A),
                                                  Math.abs(A - r)
                                                ))
                                            : e.shape === lt.ELLIPSE &&
                                              ((i = Math.max(
                                                Math.abs(t),
                                                Math.abs(t - n)
                                              )),
                                              (o = Math.max(
                                                Math.abs(A),
                                                Math.abs(A - r)
                                              )));
                                          break;
                                        case dt.FARTHEST_CORNER:
                                          if (e.shape === lt.CIRCLE)
                                            i = o = Math.max(
                                              mt(t, A),
                                              mt(t, A - r),
                                              mt(t - n, A),
                                              mt(t - n, A - r)
                                            );
                                          else if (e.shape === lt.ELLIPSE) {
                                            a =
                                              Math.max(
                                                Math.abs(A),
                                                Math.abs(A - r)
                                              ) /
                                              Math.max(
                                                Math.abs(t),
                                                Math.abs(t - n)
                                              );
                                            var l = vt(n, r, t, A, !1);
                                            (u = l[0]),
                                              (c = l[1]),
                                              (o =
                                                a *
                                                (i = mt(u - t, (c - A) / a)));
                                          }
                                      }
                                      return (
                                        Array.isArray(e.size) &&
                                          ((i = Xe(e.size[0], n)),
                                          (o =
                                            2 === e.size.length
                                              ? Xe(e.size[1], r)
                                              : i)),
                                        [i, o]
                                      );
                                    })(A, S, Q, E, F)),
                                    (b = T[0]),
                                    (I = T[1]),
                                    b > 0 &&
                                      b > 0 &&
                                      ((N = n.ctx.createRadialGradient(
                                        w + S,
                                        y + Q,
                                        0,
                                        w + S,
                                        y + Q,
                                        b
                                      )),
                                      ft(A.stops, 2 * b).forEach(function (e) {
                                        return N.addColorStop(
                                          e.stop,
                                          et(e.color)
                                        );
                                      }),
                                      n.path(C),
                                      (n.ctx.fillStyle = N),
                                      b !== I
                                        ? ((H =
                                            e.bounds.left +
                                            0.5 * e.bounds.width),
                                          (_ =
                                            e.bounds.top +
                                            0.5 * e.bounds.height),
                                          (D = 1 / (O = I / b)),
                                          n.ctx.save(),
                                          n.ctx.translate(H, _),
                                          n.ctx.transform(1, 0, 0, O, 0, 0),
                                          n.ctx.translate(-H, -_),
                                          n.ctx.fillRect(
                                            w,
                                            D * (y - _) + _,
                                            E,
                                            F * D
                                          ),
                                          n.ctx.restore())
                                        : n.ctx.fill())),
                                  (r.label = 6);
                              case 6:
                                return t--, [2];
                            }
                          });
                        }),
                        (n = this),
                        (i = 0),
                        (o = e.styles.backgroundImage.slice(0).reverse()),
                        (s.label = 1);
                    case 1:
                      return i < o.length ? ((a = o[i]), [5, A(a)]) : [3, 4];
                    case 2:
                      s.sent(), (s.label = 3);
                    case 3:
                      return i++, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.renderBorder = function (e, t, A) {
              return n(this, void 0, void 0, function () {
                return r(this, function (n) {
                  return (
                    this.path(
                      (function (e, t) {
                        switch (t) {
                          case 0:
                            return ri(
                              e.topLeftBorderBox,
                              e.topLeftPaddingBox,
                              e.topRightBorderBox,
                              e.topRightPaddingBox
                            );
                          case 1:
                            return ri(
                              e.topRightBorderBox,
                              e.topRightPaddingBox,
                              e.bottomRightBorderBox,
                              e.bottomRightPaddingBox
                            );
                          case 2:
                            return ri(
                              e.bottomRightBorderBox,
                              e.bottomRightPaddingBox,
                              e.bottomLeftBorderBox,
                              e.bottomLeftPaddingBox
                            );
                          case 3:
                          default:
                            return ri(
                              e.bottomLeftBorderBox,
                              e.bottomLeftPaddingBox,
                              e.topLeftBorderBox,
                              e.topLeftPaddingBox
                            );
                        }
                      })(A, t)
                    ),
                    (this.ctx.fillStyle = et(e)),
                    this.ctx.fill(),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.renderNodeBackgroundAndBorders = function (e) {
              return n(this, void 0, void 0, function () {
                var t,
                  A,
                  n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  c = this;
                return r(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        this.applyEffects(e.effects, 2),
                        (t = e.container.styles),
                        (A =
                          !$e(t.backgroundColor) || t.backgroundImage.length),
                        (n = [
                          { style: t.borderTopStyle, color: t.borderTopColor },
                          {
                            style: t.borderRightStyle,
                            color: t.borderRightColor,
                          },
                          {
                            style: t.borderBottomStyle,
                            color: t.borderBottomColor,
                          },
                          {
                            style: t.borderLeftStyle,
                            color: t.borderLeftColor,
                          },
                        ]),
                        (i = fi(li(t.backgroundClip, 0), e.curves)),
                        A || t.boxShadow.length
                          ? (this.ctx.save(),
                            this.path(i),
                            this.ctx.clip(),
                            $e(t.backgroundColor) ||
                              ((this.ctx.fillStyle = et(t.backgroundColor)),
                              this.ctx.fill()),
                            [4, this.renderBackgroundImage(e.container)])
                          : [3, 2]
                      );
                    case 1:
                      r.sent(),
                        this.ctx.restore(),
                        t.boxShadow
                          .slice(0)
                          .reverse()
                          .forEach(function (t) {
                            c.ctx.save();
                            var A,
                              n,
                              r,
                              i,
                              o,
                              a = jr(e.curves),
                              s = t.inset ? 0 : 1e4,
                              u =
                                ((A = a),
                                (n = -s + (t.inset ? 1 : -1) * t.spread.number),
                                (r = (t.inset ? 1 : -1) * t.spread.number),
                                (i = t.spread.number * (t.inset ? -2 : 2)),
                                (o = t.spread.number * (t.inset ? -2 : 2)),
                                A.map(function (e, t) {
                                  switch (t) {
                                    case 0:
                                      return e.add(n, r);
                                    case 1:
                                      return e.add(n + i, r);
                                    case 2:
                                      return e.add(n + i, r + o);
                                    case 3:
                                      return e.add(n, r + o);
                                  }
                                  return e;
                                }));
                            t.inset
                              ? (c.path(a), c.ctx.clip(), c.mask(u))
                              : (c.mask(a), c.ctx.clip(), c.path(u)),
                              (c.ctx.shadowOffsetX = t.offsetX.number + s),
                              (c.ctx.shadowOffsetY = t.offsetY.number),
                              (c.ctx.shadowColor = et(t.color)),
                              (c.ctx.shadowBlur = t.blur.number),
                              (c.ctx.fillStyle = t.inset
                                ? et(t.color)
                                : "rgba(0,0,0,1)"),
                              c.ctx.fill(),
                              c.ctx.restore();
                          }),
                        (r.label = 2);
                    case 2:
                      (o = 0), (a = 0), (s = n), (r.label = 3);
                    case 3:
                      return a < s.length
                        ? (u = s[a]).style === Jt.NONE || $e(u.color)
                          ? [3, 5]
                          : [4, this.renderBorder(u.color, o, e.curves)]
                        : [3, 7];
                    case 4:
                      r.sent(), (r.label = 5);
                    case 5:
                      o++, (r.label = 6);
                    case 6:
                      return a++, [3, 3];
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.render = function (e) {
              return n(this, void 0, void 0, function () {
                var t;
                return r(this, function (A) {
                  switch (A.label) {
                    case 0:
                      return (
                        this.options.backgroundColor &&
                          ((this.ctx.fillStyle = et(
                            this.options.backgroundColor
                          )),
                          this.ctx.fillRect(
                            this.options.x - this.options.scrollX,
                            this.options.y - this.options.scrollY,
                            this.options.width,
                            this.options.height
                          )),
                        (n = new ti(e, [])),
                        (r = new ei(n)),
                        Ai(n, r, r, (i = [])),
                        ni(n.container, i),
                        (t = r),
                        [4, this.renderStack(t)]
                      );
                    case 1:
                      return (
                        A.sent(), this.applyEffects([], 2), [2, this.canvas]
                      );
                  }
                  var n, r, i;
                });
              });
            }),
            e
          );
        })(),
        hi = function (e) {
          return (
            e instanceof Yn ||
            e instanceof Wn ||
            (e instanceof Xn && "radio" !== e.type && "checkbox" !== e.type)
          );
        },
        fi = function (e, t) {
          switch (e) {
            case ot.BORDER_BOX:
              return jr(t);
            case ot.CONTENT_BOX:
              return (function (e) {
                return [
                  e.topLeftContentBox,
                  e.topRightContentBox,
                  e.bottomRightContentBox,
                  e.bottomLeftContentBox,
                ];
              })(t);
            case ot.PADDING_BOX:
            default:
              return qr(t);
          }
        },
        Bi = function (e) {
          switch (e) {
            case RA.CENTER:
              return "center";
            case RA.RIGHT:
              return "right";
            case RA.LEFT:
            default:
              return "left";
          }
        },
        mi = (function () {
          function e(e) {
            (this.canvas = e.canvas
              ? e.canvas
              : document.createElement("canvas")),
              (this.ctx = this.canvas.getContext("2d")),
              (this.options = e),
              (this.canvas.width = Math.floor(e.width * e.scale)),
              (this.canvas.height = Math.floor(e.height * e.scale)),
              (this.canvas.style.width = e.width + "px"),
              (this.canvas.style.height = e.height + "px"),
              this.ctx.scale(this.options.scale, this.options.scale),
              this.ctx.translate(-e.x + e.scrollX, -e.y + e.scrollY),
              Ut.getInstance(e.id).debug(
                "EXPERIMENTAL ForeignObject renderer initialized (" +
                  e.width +
                  "x" +
                  e.height +
                  " at " +
                  e.x +
                  "," +
                  e.y +
                  ") with scale " +
                  e.scale
              );
          }
          return (
            (e.prototype.render = function (e) {
              return n(this, void 0, void 0, function () {
                var t, A;
                return r(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (t = yt(
                          Math.max(
                            this.options.windowWidth,
                            this.options.width
                          ) * this.options.scale,
                          Math.max(
                            this.options.windowHeight,
                            this.options.height
                          ) * this.options.scale,
                          this.options.scrollX * this.options.scale,
                          this.options.scrollY * this.options.scale,
                          e
                        )),
                        [4, vi(t)]
                      );
                    case 1:
                      return (
                        (A = n.sent()),
                        this.options.backgroundColor &&
                          ((this.ctx.fillStyle = et(
                            this.options.backgroundColor
                          )),
                          this.ctx.fillRect(
                            0,
                            0,
                            this.options.width * this.options.scale,
                            this.options.height * this.options.scale
                          )),
                        this.ctx.drawImage(
                          A,
                          -this.options.x * this.options.scale,
                          -this.options.y * this.options.scale
                        ),
                        [2, this.canvas]
                      );
                  }
                });
              });
            }),
            e
          );
        })(),
        vi = function (e) {
          return new Promise(function (t, A) {
            var n = new Image();
            (n.onload = function () {
              t(n);
            }),
              (n.onerror = A),
              (n.src =
                "data:image/svg+xml;charset=utf-8," +
                encodeURIComponent(new XMLSerializer().serializeToString(e)));
          });
        },
        Ci = function (e) {
          return Ze(Ie.create(e).parseComponentValue());
        };
      St.setContext(window);
      var wi = function (e, t) {
        return n(void 0, void 0, void 0, function () {
          var n,
            a,
            s,
            u,
            c,
            l,
            d,
            g,
            p,
            h,
            f,
            B,
            m,
            v,
            C,
            w,
            y,
            E,
            F,
            U,
            S,
            Q,
            T;
          return r(this, function (r) {
            switch (r.label) {
              case 0:
                if (!(n = e.ownerDocument))
                  throw new Error("Element is not attached to a Document");
                if (!(a = n.defaultView))
                  throw new Error("Document is not attached to a Window");
                return (
                  (s = (Math.round(1e3 * Math.random()) + Date.now()).toString(
                    16
                  )),
                  (u =
                    lr(e) || "HTML" === e.tagName
                      ? (function (e) {
                          var t = e.body,
                            A = e.documentElement;
                          if (!t || !A)
                            throw new Error("Unable to get document size");
                          var n = Math.max(
                              Math.max(t.scrollWidth, A.scrollWidth),
                              Math.max(t.offsetWidth, A.offsetWidth),
                              Math.max(t.clientWidth, A.clientWidth)
                            ),
                            r = Math.max(
                              Math.max(t.scrollHeight, A.scrollHeight),
                              Math.max(t.offsetHeight, A.offsetHeight),
                              Math.max(t.clientHeight, A.clientHeight)
                            );
                          return new i(0, 0, n, r);
                        })(n)
                      : o(e)),
                  (c = u.width),
                  (l = u.height),
                  (d = u.left),
                  (g = u.top),
                  (p = A(
                    {},
                    {
                      allowTaint: !1,
                      imageTimeout: 15e3,
                      proxy: void 0,
                      useCORS: !1,
                    },
                    t
                  )),
                  (h = {
                    backgroundColor: "#ffffff",
                    cache: t.cache ? t.cache : St.create(s, p),
                    logging: !0,
                    removeContainer: !0,
                    foreignObjectRendering: !1,
                    scale: a.devicePixelRatio || 1,
                    windowWidth: a.innerWidth,
                    windowHeight: a.innerHeight,
                    scrollX: a.pageXOffset,
                    scrollY: a.pageYOffset,
                    x: d,
                    y: g,
                    width: Math.ceil(c),
                    height: Math.ceil(l),
                    id: s,
                  }),
                  (f = A({}, h, p, t)),
                  (B = new i(
                    f.scrollX,
                    f.scrollY,
                    f.windowWidth,
                    f.windowHeight
                  )),
                  Ut.create({ id: s, enabled: f.logging }),
                  Ut.getInstance(s).debug("Starting document clone"),
                  (m = new Ir(e, {
                    id: s,
                    onclone: f.onclone,
                    ignoreElements: f.ignoreElements,
                    inlineImages: f.foreignObjectRendering,
                    copyStyles: f.foreignObjectRendering,
                  })),
                  (v = m.clonedReferenceElement)
                    ? [4, m.toIFrame(n, B)]
                    : [
                        2,
                        Promise.reject(
                          "Unable to find element in cloned iframe"
                        ),
                      ]
                );
              case 1:
                return (
                  (C = r.sent()),
                  (w = n.documentElement
                    ? Ci(getComputedStyle(n.documentElement).backgroundColor)
                    : ut.TRANSPARENT),
                  (y = n.body
                    ? Ci(getComputedStyle(n.body).backgroundColor)
                    : ut.TRANSPARENT),
                  (E = t.backgroundColor),
                  (F =
                    "string" == typeof E
                      ? Ci(E)
                      : null === E
                      ? ut.TRANSPARENT
                      : 4294967295),
                  (U =
                    e === n.documentElement
                      ? $e(w)
                        ? $e(y)
                          ? F
                          : y
                        : w
                      : F),
                  (S = {
                    id: s,
                    cache: f.cache,
                    canvas: f.canvas,
                    backgroundColor: U,
                    scale: f.scale,
                    x: f.x,
                    y: f.y,
                    scrollX: f.scrollX,
                    scrollY: f.scrollY,
                    width: f.width,
                    height: f.height,
                    windowWidth: f.windowWidth,
                    windowHeight: f.windowHeight,
                  }),
                  f.foreignObjectRendering
                    ? (Ut.getInstance(s).debug(
                        "Document cloned, using foreign object rendering"
                      ),
                      [4, new mi(S).render(v)])
                    : [3, 3]
                );
              case 2:
                return (Q = r.sent()), [3, 5];
              case 3:
                return (
                  Ut.getInstance(s).debug(
                    "Document cloned, using computed rendering"
                  ),
                  St.attachInstance(f.cache),
                  Ut.getInstance(s).debug("Starting DOM parsing"),
                  (T = tr(v)),
                  St.detachInstance(),
                  U === T.styles.backgroundColor &&
                    (T.styles.backgroundColor = ut.TRANSPARENT),
                  Ut.getInstance(s).debug("Starting renderer"),
                  [4, new pi(S).render(T)]
                );
              case 4:
                (Q = r.sent()), (r.label = 5);
              case 5:
                return (
                  !0 === f.removeContainer &&
                    (Ir.destroy(C) ||
                      Ut.getInstance(s).error(
                        "Cannot detach cloned iframe as it is not in the DOM anymore"
                      )),
                  Ut.getInstance(s).debug("Finished rendering"),
                  Ut.destroy(s),
                  St.destroy(s),
                  [2, Q]
                );
            }
          });
        });
      };
      return function (e, t) {
        return void 0 === t && (t = {}), wi(e, t);
      };
    })();
  },
  function (e, t, A) {
    "use strict";
    A.d(t, "a", function () {
      return i;
    });
    var n = [
        "af",
        "am",
        "ar",
        "as",
        "az",
        "be",
        "bg",
        "bn-BD",
        "bn-IN",
        "bs",
        "ca",
        "ca-Es-VALENCIA",
        "chr-Cher",
        "cs",
        "cy",
        "da",
        "de",
        "el",
        "en-GB",
        "es",
        "es-MX",
        "et",
        "eu",
        "fa",
        "fi",
        "fil",
        "fr",
        "fr-CA",
        "ga",
        "gd",
        "gl",
        "gu",
        "ha-Latn-NG",
        "he",
        "hi",
        "hr",
        "hu",
        "hy",
        "id",
        "is",
        "it",
        "ja",
        "ka",
        "kk",
        "km-KH",
        "kn",
        "ko",
        "kok",
        "ky",
        "lb",
        "lo",
        "lt",
        "lv",
        "mi",
        "mk",
        "ml",
        "mn",
        "mr",
        "ms",
        "mt",
        "nb-NO",
        "ne",
        "nl",
        "nn-NO",
        "or",
        "pa",
        "pl",
        "prs",
        "pt-BR",
        "pt-PT",
        "quz",
        "ro",
        "ru",
        "sd",
        "si",
        "sk",
        "sl",
        "sq",
        "sr-Cyrl-BA",
        "sr-Cyrl-RS",
        "sr-Latn-RS",
        "sv",
        "sw",
        "ta",
        "te",
        "th",
        "tk",
        "tr",
        "tt",
        "ug",
        "uk",
        "ur",
        "uz-Latn-UZ",
        "vi",
        "zh-Hans",
        "zh-Hant",
      ],
      r = {
        "ZH-CN": "zh-Hans",
        "ZH-HK": "zh-Hant",
        "ZH-MO": "zh-Hant",
        "ZH-SG": "zh-Hans",
        "ZH-TW": "zh-Hant",
      };
    function i(e) {
      var t = e.toLocaleUpperCase();
      if (t in r) return r[t];
      for (var A = 0, i = n; A < i.length; A++) {
        if ((u = i[A]).toUpperCase() === t) return u;
      }
      for (var o = t.split("-")[0], a = 0, s = n; a < s.length; a++) {
        var u;
        if ((u = s[a]).toUpperCase() === o) return u;
      }
      return "en";
    }
  },
  function (e, t, A) {
    "use strict";
    var n =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, A, n) {
              void 0 === n && (n = A),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return t[A];
                  },
                });
            }
          : function (e, t, A, n) {
              void 0 === n && (n = A), (e[n] = t[A]);
            }),
      r =
        (this && this.__exportStar) ||
        function (e, t) {
          for (var A in e)
            "default" === A ||
              Object.prototype.hasOwnProperty.call(t, A) ||
              n(t, e, A);
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      r(A(74), t),
      r(A(75), t),
      r(A(76), t),
      r(A(77), t),
      r(A(78), t),
      r(A(27), t),
      r(A(79), t),
      r(A(80), t);
  },
  function (e, t, A) {
    A(81), (e.exports = A(82));
  },
  function (e, t, A) {
    "use strict";
    e.exports = A(51).polyfill();
  },
  function (e, t, A) {
    e.exports = (function () {
      "use strict";
      function e(e) {
        return "function" == typeof e;
      }
      var t = Array.isArray
          ? Array.isArray
          : function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            },
        A = 0,
        n = void 0,
        r = void 0,
        i = function (e, t) {
          (d[A] = e), (d[A + 1] = t), 2 === (A += 2) && (r ? r(g) : m());
        },
        o = "undefined" != typeof window ? window : void 0,
        a = o || {},
        s = a.MutationObserver || a.WebKitMutationObserver,
        u =
          "undefined" == typeof self &&
          "[object process]" === {}.toString.call(Object({})),
        c =
          "undefined" != typeof Uint8ClampedArray &&
          "undefined" != typeof importScripts &&
          "undefined" != typeof MessageChannel;
      function l() {
        var e = setTimeout;
        return function () {
          return e(g, 1);
        };
      }
      var d = new Array(1e3);
      function g() {
        for (var e = 0; e < A; e += 2)
          (0, d[e])(d[e + 1]), (d[e] = void 0), (d[e + 1] = void 0);
        A = 0;
      }
      var p,
        h,
        f,
        B,
        m = void 0;
      function v(e, t) {
        var A = this,
          n = new this.constructor(y);
        void 0 === n[w] && H(n);
        var r = A._state;
        if (r) {
          var o = arguments[r - 1];
          i(function () {
            return I(r, n, o, A._result);
          });
        } else T(A, n, e, t);
        return n;
      }
      function C(e) {
        if (e && "object" == typeof e && e.constructor === this) return e;
        var t = new this(y);
        return F(t, e), t;
      }
      u
        ? (m = function () {
            return Object({}).nextTick(g);
          })
        : s
        ? ((h = 0),
          (f = new s(g)),
          (B = document.createTextNode("")),
          f.observe(B, { characterData: !0 }),
          (m = function () {
            B.data = h = ++h % 2;
          }))
        : c
        ? (((p = new MessageChannel()).port1.onmessage = g),
          (m = function () {
            return p.port2.postMessage(0);
          }))
        : (m =
            void 0 === o
              ? (function () {
                  try {
                    var e = Function("return this")().require("vertx");
                    return void 0 !== (n = e.runOnLoop || e.runOnContext)
                      ? function () {
                          n(g);
                        }
                      : l();
                  } catch (e) {
                    return l();
                  }
                })()
              : l());
      var w = Math.random().toString(36).substring(2);
      function y() {}
      function E(t, A, n) {
        A.constructor === t.constructor &&
        n === v &&
        A.constructor.resolve === C
          ? (function (e, t) {
              1 === t._state
                ? S(e, t._result)
                : 2 === t._state
                ? Q(e, t._result)
                : T(
                    t,
                    void 0,
                    function (t) {
                      return F(e, t);
                    },
                    function (t) {
                      return Q(e, t);
                    }
                  );
            })(t, A)
          : void 0 === n
          ? S(t, A)
          : e(n)
          ? (function (e, t, A) {
              i(function (e) {
                var n = !1,
                  r = (function (e, t, A, n) {
                    try {
                      e.call(t, A, n);
                    } catch (e) {
                      return e;
                    }
                  })(
                    A,
                    t,
                    function (A) {
                      n || ((n = !0), t !== A ? F(e, A) : S(e, A));
                    },
                    function (t) {
                      n || ((n = !0), Q(e, t));
                    },
                    e._label
                  );
                !n && r && ((n = !0), Q(e, r));
              }, e);
            })(t, A, n)
          : S(t, A);
      }
      function F(e, t) {
        if (e === t)
          Q(e, new TypeError("You cannot resolve a promise with itself"));
        else if (
          ((r = typeof (n = t)),
          null === n || ("object" !== r && "function" !== r))
        )
          S(e, t);
        else {
          var A = void 0;
          try {
            A = t.then;
          } catch (t) {
            return void Q(e, t);
          }
          E(e, t, A);
        }
        var n, r;
      }
      function U(e) {
        e._onerror && e._onerror(e._result), b(e);
      }
      function S(e, t) {
        void 0 === e._state &&
          ((e._result = t),
          (e._state = 1),
          0 !== e._subscribers.length && i(b, e));
      }
      function Q(e, t) {
        void 0 === e._state && ((e._state = 2), (e._result = t), i(U, e));
      }
      function T(e, t, A, n) {
        var r = e._subscribers,
          o = r.length;
        (e._onerror = null),
          (r[o] = t),
          (r[o + 1] = A),
          (r[o + 2] = n),
          0 === o && e._state && i(b, e);
      }
      function b(e) {
        var t = e._subscribers,
          A = e._state;
        if (0 !== t.length) {
          for (
            var n = void 0, r = void 0, i = e._result, o = 0;
            o < t.length;
            o += 3
          )
            (n = t[o]), (r = t[o + A]), n ? I(A, n, r, i) : r(i);
          e._subscribers.length = 0;
        }
      }
      function I(t, A, n, r) {
        var i = e(n),
          o = void 0,
          a = void 0,
          s = !0;
        if (i) {
          try {
            o = n(r);
          } catch (e) {
            (s = !1), (a = e);
          }
          if (A === o)
            return void Q(
              A,
              new TypeError(
                "A promises callback cannot return that same promise."
              )
            );
        } else o = r;
        void 0 !== A._state ||
          (i && s
            ? F(A, o)
            : !1 === s
            ? Q(A, a)
            : 1 === t
            ? S(A, o)
            : 2 === t && Q(A, o));
      }
      var N = 0;
      function H(e) {
        (e[w] = N++),
          (e._state = void 0),
          (e._result = void 0),
          (e._subscribers = []);
      }
      var _ = (function () {
          function e(e, A) {
            (this._instanceConstructor = e),
              (this.promise = new e(y)),
              this.promise[w] || H(this.promise),
              t(A)
                ? ((this.length = A.length),
                  (this._remaining = A.length),
                  (this._result = new Array(this.length)),
                  0 === this.length
                    ? S(this.promise, this._result)
                    : ((this.length = this.length || 0),
                      this._enumerate(A),
                      0 === this._remaining && S(this.promise, this._result)))
                : Q(
                    this.promise,
                    new Error("Array Methods must be provided an Array")
                  );
          }
          return (
            (e.prototype._enumerate = function (e) {
              for (var t = 0; void 0 === this._state && t < e.length; t++)
                this._eachEntry(e[t], t);
            }),
            (e.prototype._eachEntry = function (e, t) {
              var A = this._instanceConstructor,
                n = A.resolve;
              if (n === C) {
                var r = void 0,
                  i = void 0,
                  o = !1;
                try {
                  r = e.then;
                } catch (e) {
                  (o = !0), (i = e);
                }
                if (r === v && void 0 !== e._state)
                  this._settledAt(e._state, t, e._result);
                else if ("function" != typeof r)
                  this._remaining--, (this._result[t] = e);
                else if (A === O) {
                  var a = new A(y);
                  o ? Q(a, i) : E(a, e, r), this._willSettleAt(a, t);
                } else
                  this._willSettleAt(
                    new A(function (t) {
                      return t(e);
                    }),
                    t
                  );
              } else this._willSettleAt(n(e), t);
            }),
            (e.prototype._settledAt = function (e, t, A) {
              var n = this.promise;
              void 0 === n._state &&
                (this._remaining--, 2 === e ? Q(n, A) : (this._result[t] = A)),
                0 === this._remaining && S(n, this._result);
            }),
            (e.prototype._willSettleAt = function (e, t) {
              var A = this;
              T(
                e,
                void 0,
                function (e) {
                  return A._settledAt(1, t, e);
                },
                function (e) {
                  return A._settledAt(2, t, e);
                }
              );
            }),
            e
          );
        })(),
        O = (function () {
          function t(e) {
            (this[w] = N++),
              (this._result = this._state = void 0),
              (this._subscribers = []),
              y !== e &&
                ("function" != typeof e &&
                  (function () {
                    throw new TypeError(
                      "You must pass a resolver function as the first argument to the promise constructor"
                    );
                  })(),
                this instanceof t
                  ? (function (e, t) {
                      try {
                        t(
                          function (t) {
                            F(e, t);
                          },
                          function (t) {
                            Q(e, t);
                          }
                        );
                      } catch (t) {
                        Q(e, t);
                      }
                    })(this, e)
                  : (function () {
                      throw new TypeError(
                        "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                      );
                    })());
          }
          return (
            (t.prototype.catch = function (e) {
              return this.then(null, e);
            }),
            (t.prototype.finally = function (t) {
              var A = this.constructor;
              return e(t)
                ? this.then(
                    function (e) {
                      return A.resolve(t()).then(function () {
                        return e;
                      });
                    },
                    function (e) {
                      return A.resolve(t()).then(function () {
                        throw e;
                      });
                    }
                  )
                : this.then(t, t);
            }),
            t
          );
        })();
      return (
        (O.prototype.then = v),
        (O.all = function (e) {
          return new _(this, e).promise;
        }),
        (O.race = function (e) {
          var A = this;
          return t(e)
            ? new A(function (t, n) {
                for (var r = e.length, i = 0; i < r; i++)
                  A.resolve(e[i]).then(t, n);
              })
            : new A(function (e, t) {
                return t(new TypeError("You must pass an array to race."));
              });
        }),
        (O.resolve = C),
        (O.reject = function (e) {
          var t = new this(y);
          return Q(t, e), t;
        }),
        (O._setScheduler = function (e) {
          r = e;
        }),
        (O._setAsap = function (e) {
          i = e;
        }),
        (O._asap = i),
        (O.polyfill = function () {
          var e = void 0;
          if ("undefined" != typeof window) e = window;
          else if ("undefined" != typeof self) e = self;
          else
            try {
              e = Function("return this")();
            } catch (e) {
              throw new Error(
                "polyfill failed because global object is unavailable in this environment"
              );
            }
          var t = e.Promise;
          if (t) {
            var A = null;
            try {
              A = Object.prototype.toString.call(t.resolve());
            } catch (e) {}
            if ("[object Promise]" === A && !t.cast) return;
          }
          e.Promise = O;
        }),
        (O.Promise = O),
        O
      );
    })();
  },
  function (e, t, A) {
    "use strict";
    var n;
    !(function (e) {
      var t = (function () {
        function e() {}
        return (
          (e.AppLaunch = "AppLaunch"),
          (e.AppUsageTime = "AppUsageTime"),
          (e.AppResume = "AppResume"),
          e
        );
      })();
      e.ActivityName = t;
    })(n || (n = {})),
      (e.exports = n);
  },
  function (e, t, A) {
    "use strict";
    var n;
    !(function (e) {
      e.RoamingSettingIdMap = {
        CampaignStates: 1258,
        GovernedChannelStates: 1257,
        SurveyActivationStats: 1259,
      };
    })(n || (n = {})),
      (e.exports = n);
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.CampaignManager = void 0);
    var n = A(17),
      r = A(11),
      i = A(19),
      o = A(39),
      a = A(55),
      s = A(15),
      u = r.getDistantFuture,
      c = r.getDistantPast,
      l = r.isArray,
      d = r.isNOU,
      g = (function () {
        function e(e, t, A, n, r, i, o) {
          if (!e) throw new Error("stateProvider must not be null");
          if (!l(t))
            throw new Error(
              "definitionProviders is either null or not an array type"
            );
          if (!A) throw new Error("stringProvider must not be null");
          if (d(r)) throw new Error("currentBuildNumber must not be null");
          (this.campaignStates = {}),
            (this.campaignDefinitions = {}),
            (this.userFacts = []),
            (this.stateProvider = e),
            (this.definitionProviders = t),
            (this.stringProvider = A),
            (this.userFactsProvider = o),
            (this.environmentProvider = n),
            (this.currentBuildNumber = r),
            (i = i || new Date());
        }
        return (
          (e.isStateUpForNomination = function (t, A, n, r) {
            if (!t || !A) return !1;
            if (((n = n || new Date()), t.ForceCandidacy)) return !0;
            var i = A.nominationScheme.getCampaignCooldown(
              t.IsCandidate && t.DidCandidateTriggerSurvey
            );
            return (
              !!i &&
              (!!e.hasBuildChangeDurationElapsed(
                i,
                t.LastNominationBuildNumber,
                r
              ) ||
                e.hasTimeIntervalDurationElapsed(
                  i,
                  t.getCooldownStartDate(),
                  n
                ))
            );
          }),
          (e.isDateInRange = function (e, t, A) {
            return (
              (e = e || new Date()),
              (t = t || c()),
              (A = A || u()),
              t.getTime() <= e.getTime() && A.getTime() >= e.getTime()
            );
          }),
          (e.hasTimeIntervalDurationElapsed = function (e, t, A) {
            if (d(e) || !(e instanceof i.CampaignDurationTimeInterval))
              return !1;
            if (!t || !A) return !1;
            var n = r.addSecondsWithoutOverflow(t, e.intervalSeconds);
            return A.getTime() >= n.getTime();
          }),
          (e.hasBuildChangeDurationElapsed = function (e, t, A) {
            return (
              !d(e) &&
              e instanceof i.CampaignDurationSingleBuildChange &&
              (d(t) || d(A) ? (null === t) != (null === A) : !(t === A))
            );
          }),
          (e.isCampaignInScope = function (t, A, n, r) {
            return (
              !!t &&
              ((A = A || new Date()),
              !!e.isDateInRangeWithDefinition(A, t) &&
                !(
                  t.scope &&
                  ((t.scope instanceof i.CampaignScopeUserFactAny ||
                    t.scope instanceof i.CampaignScopeUserFactAll) &&
                    t.scope.setUserFactsProvider(r),
                  t.scope instanceof i.CampaignScopeEnvironmentCrossProduct &&
                    t.scope.setEnvironmentProvider(n),
                  !t.scope.isInScope())
                ))
            );
          }),
          (e.isDateInRangeWithDefinition = function (t, A) {
            return (
              !!A &&
              ((t = t || new Date()),
              e.isDateInRange(t, A.startTime ? A.startTime : u(), A.endTime))
            );
          }),
          (e.prototype.getActiveSurveys = function () {
            var e = {};
            for (var t in this.campaignStates)
              if (this.campaignStates.hasOwnProperty(t)) {
                var A = this.campaignStates[t];
                if (!A.IsCandidate) continue;
                var n = this.campaignDefinitions[A.CampaignId];
                if (!n) continue;
                var r = a.CampaignSurveyFactory.makeSurvey(
                  A,
                  n.governedChannelType,
                  n.surveyTemplate,
                  this.stringProvider,
                  n.additionalDataRequested,
                  n.launcherType
                );
                if (!r) continue;
                e[r.getSurveyInfo().getId()] = r;
              }
            return e;
          }),
          (e.prototype.onCampaignSurveyActivated = function (e, t) {
            var A = this.campaignStates[e];
            A &&
              ((t = t || new Date()),
              A.markCurrentSurveyTakenOnDate(
                t,
                this.campaignDefinitions[
                  e
                ].nominationScheme.cooldownPeriod.asTimeIntervalSeconds()
              ),
              this.saveCurrentState());
          }),
          (e.prototype.getCampaignStates = function () {
            return this.campaignStates;
          }),
          (e.prototype.getCampaignDefinitions = function () {
            return this.campaignDefinitions;
          }),
          (e.prototype.getUserFacts = function () {
            return this.userFacts;
          }),
          (e.prototype.onSurveyActivated = function (e) {
            e && this.onCampaignSurveyActivated(e.getBackEndId(), new Date());
          }),
          (e.prototype.refreshSurveyDefinitions = function (e, t) {
            this.refreshSurveyDefinitionsPrivate(e, t || new Date());
          }),
          (e.prototype.refreshSurveyDefinitionsAsync = function (e, t) {
            var A = this;
            return new Promise(function (n, r) {
              A.refreshSurveyDefinitionsPrivateAsync(e, t || new Date())
                .then(function () {
                  n();
                })
                .catch(function (e) {
                  r(e);
                });
            });
          }),
          (e.prototype.getAppSurveys = function () {
            return this.getActiveSurveys();
          }),
          (e.prototype.saveCurrentState = function () {
            var e = r.makeArrayFromObjectValuesSortedByKeyString(
              this.campaignStates
            );
            this.stateProvider.save(e);
          }),
          (e.prototype.refreshSurveyDefinitionsPrivate = function (e, t) {
            (this.campaignStates = {}),
              (this.campaignDefinitions = {}),
              (this.userFacts = []),
              this.loadAndFilterCampaignData(t, e),
              this.evaluateCampaigns(t);
          }),
          (e.prototype.refreshSurveyDefinitionsPrivateAsync = function (e, t) {
            (this.campaignStates = {}),
              (this.campaignDefinitions = {}),
              (this.userFacts = []);
            var A = this;
            return new Promise(function (n, r) {
              A.loadAndFilterCampaignDataAsync(t, e)
                .then(function () {
                  A.evaluateCampaigns(t), n();
                })
                .catch(function (e) {
                  r(e);
                });
            });
          }),
          (e.prototype.loadAndFilterCampaignDataAsync = function (e, t) {
            e = e || new Date();
            for (
              var A = [],
                r = [],
                i =
                  this.userFactsProvider && this.userFactsProvider.loadAsync(),
                o = 0,
                a = Object.keys(this.definitionProviders);
              o < a.length;
              o++
            ) {
              var u = a[o],
                c = this.definitionProviders[u],
                g = c && c.loadAsync();
              d(g) ||
                ((g = g.catch(function () {
                  n.FloodgateEngine.getTelemetryLogger().log_CampaignLoad_Failed(
                    "Failed to load from campaign definition provider"
                  ),
                    Promise.resolve();
                })),
                r.push(g));
            }
            var p = this;
            return new Promise(function (o, a) {
              Promise.all(r)
                .then(function (r) {
                  for (var a = 0, u = Object.keys(r); a < u.length; a++) {
                    var c = r[u[a]];
                    l(c) && (A = A.concat(c));
                  }
                  var g = function (n) {
                    (p.userFacts = n || []), p.FilterCampaignData(e, t, A), o();
                  };
                  d(i)
                    ? g()
                    : i
                        .then(function (e) {
                          g(e);
                        })
                        .catch(function () {
                          n.FloodgateEngine.getTelemetryLogger().log_Error(
                            s.TelemetryEvent.Floodgate.UserFactsLoad.Failed,
                            "Failed to load from user facts provider"
                          ),
                            g();
                        });
                })
                .catch(function (e) {
                  n.FloodgateEngine.getTelemetryLogger().log_CampaignLoad_Failed(
                    "Failed to load from campaign definition provider"
                  );
                });
            });
          }),
          (e.prototype.loadAndFilterCampaignData = function (e, t) {
            e = e || new Date();
            for (
              var A = [], r = 0, i = Object.keys(this.definitionProviders);
              r < i.length;
              r++
            ) {
              var o = i[r];
              try {
                var a =
                  this.definitionProviders[o] &&
                  this.definitionProviders[o].load();
                l(a) && (A = A.concat(a));
              } catch (e) {
                n.FloodgateEngine.getTelemetryLogger().log_CampaignLoad_Failed(
                  "Failed to load from campaign definition provider. " +
                    e.toString()
                );
              }
            }
            try {
              this.userFacts =
                (this.userFactsProvider && this.userFactsProvider.load()) || [];
            } catch (e) {
              n.FloodgateEngine.getTelemetryLogger().log_Error(
                s.TelemetryEvent.Floodgate.UserFactsLoad.Failed,
                "Failed to load from user facts provider. " + e
              );
            }
            this.FilterCampaignData(e, t, A);
          }),
          (e.prototype.FilterCampaignData = function (t, A, n) {
            var i = {};
            for (var o in n)
              if (n.hasOwnProperty(o)) {
                if (
                  ((i[(c = n[o]).campaignId] = c),
                  A && A.indexOf(c.governedChannelType) < 0)
                )
                  continue;
                if (
                  !e.isCampaignInScope(
                    c,
                    t,
                    this.environmentProvider,
                    this.userFactsProvider
                  )
                )
                  continue;
                this.campaignDefinitions[c.campaignId] = c;
              }
            var a = this.stateProvider.load(),
              s = [];
            for (var o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                this.campaignDefinitions.hasOwnProperty(u.CampaignId) ||
                  s.push(u),
                  (this.campaignStates[u.CampaignId] = u);
              }
            for (var o in s)
              if (s.hasOwnProperty(o)) {
                if (!(u = s[o])) continue;
                var c,
                  l = !1;
                (c = i[u.CampaignId])
                  ? e.isStateUpForNomination(
                      u,
                      c,
                      t,
                      this.currentBuildNumber
                    ) && (l = !0)
                  : u.LastNominationTimeUtc.getTime() <=
                      r
                        .subtractSecondsWithoutOverflow(
                          t,
                          u.DeleteAfterSecondsWhenStale
                        )
                        .getTime() && (l = !0),
                  l && delete this.campaignStates[u.CampaignId];
              }
          }),
          (e.prototype.evaluateCampaigns = function (t) {
            for (var A in ((t = t || new Date()), this.campaignDefinitions))
              if (this.campaignDefinitions.hasOwnProperty(A)) {
                var n = this.campaignDefinitions[A],
                  i = this.campaignStates[n.campaignId];
                if (
                  !i ||
                  e.isStateUpForNomination(i, n, t, this.currentBuildNumber)
                ) {
                  var a = i ? i.LastSurveyId : "",
                    s = i ? i.LastSurveyStartTimeUtc : c(),
                    u = i ? i.LastSurveyExpirationTimeUtc : c(),
                    l = i ? i.LastSurveyActivatedTimeUtc : c(),
                    d = i ? i.LastCooldownEndTimeUtc : c(),
                    g =
                      (i && i.ForceCandidacy) ||
                      n.nominationScheme.evaluateNominationRules();
                  g &&
                    ((a = r.guid()),
                    (s =
                      n.nominationScheme.calculateSurveyStartTimeFromDate(t)),
                    (u =
                      n.nominationScheme.calculateSurveyExpirationTimeFromSurveyStartTime(
                        s
                      )));
                  var p = new o.CampaignState(
                    n.campaignId,
                    t,
                    this.currentBuildNumber,
                    n.nominationScheme.getActiveSurveyTimeIntervalSeconds(),
                    !1,
                    g,
                    !1,
                    l,
                    a,
                    s,
                    u,
                    d
                  );
                  this.campaignStates[p.CampaignId] = p;
                }
              }
          }),
          e
        );
      })();
    t.CampaignManager = g;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.CampaignSurveyFactory = void 0);
    var n = A(16),
      r = A(56),
      i = A(59),
      o = A(60),
      a = A(62),
      s = A(63),
      u = A(65),
      c = A(66),
      l = A(21),
      d = A(11),
      g = A(19),
      p = d.dateToShortUtcString,
      h = d.isNOU,
      f = (function () {
        function e() {}
        return (
          (e.makeSurvey = function (t, A, n, r, i, l) {
            return t && n && r
              ? n instanceof g.CampaignSurveyTemplateNps5PointStatic
                ? c.make5Point(e.makeSurveyDataSourceData(t, A, n, i, l), r)
                : n instanceof g.CampaignSurveyTemplateNps11PointStatic
                ? c.make11Point(e.makeSurveyDataSourceData(t, A, n, i, l), r)
                : n instanceof g.CampaignSurveyTemplateFps
                ? o.makeFps(e.makeSurveyDataSourceData(t, A, n, i, l), r, n)
                : n instanceof g.CampaignSurveyTemplateNlqs
                ? u.makeNlqs(e.makeSurveyDataSourceData(t, A, n, i, l), r, n)
                : n instanceof g.CampaignSurveyTemplateNps
                ? c.makeCustom(e.makeSurveyDataSourceData(t, A, n, i, l), r, n)
                : n instanceof g.CampaignSurveyTemplateGenericMessagingSurface
                ? a.makeCustom(e.makeSurveyDataSourceData(t, A, n, i, l))
                : n instanceof g.CampaignSurveyTemplateIntercept
                ? s.makeIntercept(
                    e.makeSurveyDataSourceData(t, A, n, i, l),
                    r,
                    n
                  )
                : null
              : null;
          }),
          (e.makeSurveyDataSourceData = function (t, A, r, i, o) {
            if (!t || !r) return null;
            var a = new l.SurveyDataSourceData();
            return (
              (a.activationEvent = e.makeEvent(t, r.activationEvent)),
              (a.metadata = e.makeMetadata(r.metadata)),
              (a.id = t.LastSurveyId),
              (a.backEndIdentifier = t.CampaignId),
              (a.expirationTimeUtc = p(t.LastSurveyExpirationTimeUtc)),
              (a.governedChannelType = A),
              (a.startTimeUtc = p(t.LastSurveyStartTimeUtc)),
              (a.additionalDataRequested = i || []),
              (a.launcherType = o || n.LAUNCHER_TYPE_DEFAULT),
              a
            );
          }),
          (e.makeCountedActivityEventData = function (e) {
            if (!e) return null;
            var t = new r.CountedActivityEventData();
            return (
              (t.activity = e.activity),
              (t.count = e.count),
              (t.isAggregate = e.isAggregate),
              t
            );
          }),
          (e.makeCountedActivityEvent = function (t, A) {
            if (!t || !A) return null;
            var n = e.makeCountedActivityEventData(A);
            return n ? new r.CountedActivityEvent(n) : null;
          }),
          (e.makeCountedActivitySequenceEvent = function (t, A) {
            if (!t || !A) return null;
            var n = new r.CountedActivitySequenceEventData();
            n.sequence = [];
            for (var i = 0, o = A.sequence; i < o.length; i++) {
              var a = o[i],
                s = e.makeCountedActivityEventData(a);
              if (!s) return null;
              n.sequence.push(s);
            }
            return new r.CountedActivitySequenceEvent(n);
          }),
          (e.makeEvent = function (t, A) {
            return A instanceof g.CampaignSurveyEventCountedActivity
              ? e.makeCountedActivityEvent(t, A)
              : A instanceof g.CampaignSurveyEventCountedActivitySequence
              ? e.makeCountedActivitySequenceEvent(t, A)
              : null;
          }),
          (e.makeMetadata = function (e) {
            if (h(e) || h(e.contentMetadata)) return null;
            var t = new i.Metadata();
            return (
              (t.contentMetadata = e.contentMetadata), new i.SurveyMetadata(t)
            );
          }),
          e
        );
      })();
    t.CampaignSurveyFactory = f;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.CountedActivitySequenceEventData =
        t.CountedActivitySequenceEvent =
        t.CountedActivityEventData =
        t.CountedActivityEvent =
          void 0);
    var n = A(57),
      r = A(58),
      i = (function () {
        function e(e) {
          if (!e) throw new Error("data must not be null");
          if (e.count <= 0) throw new Error("count must be greater than 0");
          if (!e.activity || 0 === e.activity.length)
            throw new Error("activity must not be null or an empty string");
          this.data = e;
        }
        return (
          (e.make = function (t) {
            try {
              return new e(t);
            } catch (e) {
              return null;
            }
          }),
          (e.prototype.getActivity = function () {
            return this.data.activity;
          }),
          (e.prototype.getCount = function () {
            return this.data.count;
          }),
          (e.prototype.isAggregate = function () {
            return this.data.isAggregate;
          }),
          (e.prototype.getType = function () {
            return "CountedActivity";
          }),
          (e.prototype.getTrackingSet = function () {
            var e = new Array();
            return (
              e.push(
                new n.ActivityTrackingData(
                  this.data.activity,
                  this.data.count,
                  this.data.isAggregate
                )
              ),
              new r.ActivityTrackingSet(!1, e)
            );
          }),
          e
        );
      })();
    t.CountedActivityEvent = i;
    var o = function () {};
    t.CountedActivityEventData = o;
    var a = (function () {
      function e(e) {
        if (!e) throw new Error("data must not be null");
        if (!e.sequence) throw new Error("data.sequence must not be null");
        if (0 === e.sequence.length)
          throw new Error("data.sequence size must be greater than 0");
        this.data = [];
        for (var t = 0, A = e.sequence; t < A.length; t++) {
          var n = A[t];
          this.data.push(new i(n));
        }
      }
      return (
        (e.make = function (t) {
          try {
            return new e(t);
          } catch (e) {
            return null;
          }
        }),
        (e.prototype.getSequence = function () {
          return this.data;
        }),
        (e.prototype.getType = function () {
          return "CountedActivitySequence";
        }),
        (e.prototype.getTrackingSet = function () {
          for (var e = new Array(), t = 0, A = this.data; t < A.length; t++) {
            var i = A[t];
            e.push(
              new n.ActivityTrackingData(
                i.getActivity(),
                i.getCount(),
                i.isAggregate()
              )
            );
          }
          return new r.ActivityTrackingSet(!0, e);
        }),
        e
      );
    })();
    t.CountedActivitySequenceEvent = a;
    var s = (function () {
      function e() {}
      return (e.prototype.CountedActivitySequenceEventData = function () {}), e;
    })();
    t.CountedActivitySequenceEventData = s;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ActivityTrackingData = void 0);
    var n = (function () {
      function e(e, t, A) {
        (this.activity = e), (this.count = t), (this.isAggregate = A);
      }
      return (
        (e.prototype.getActivity = function () {
          return this.activity;
        }),
        (e.prototype.getCount = function () {
          return this.count;
        }),
        (e.prototype.setCount = function (e) {
          this.count = e;
        }),
        (e.prototype.getIsAggregate = function () {
          return this.isAggregate;
        }),
        e
      );
    })();
    t.ActivityTrackingData = n;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ActivityTrackingSet = void 0);
    var n = A(11),
      r = (function () {
        function e(e, t) {
          (this.isOrdered = e), (this.list = t);
        }
        return (
          (e.prototype.getIsOrdered = function () {
            return this.isOrdered;
          }),
          (e.prototype.getList = function () {
            return this.list;
          }),
          (e.prototype.getActivityTrackingInfo = function () {
            var e;
            if (0 === this.list.length)
              return (
                (e = { Activities: [], IsListOrdered: this.isOrdered }),
                JSON.stringify(e)
              );
            for (var t = 0, A = this.list; t < A.length; t++) {
              var r = A[t],
                i = {
                  Activity: r.getActivity(),
                  Count: r.getCount(),
                  IsAggregate: r.getIsAggregate(),
                };
              n.isNOU(e)
                ? (e = { Activities: [i], IsListOrdered: this.isOrdered })
                : e.Activities.push(i);
            }
            return JSON.stringify(e);
          }),
          e
        );
      })();
    t.ActivityTrackingSet = r;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Metadata = t.SurveyMetadata = void 0);
    var n = A(11),
      r = (function () {
        function e(e) {
          if (!e) throw new Error("data must not be null");
          if (!e.contentMetadata)
            throw new Error("content metadata must not be null");
          if (!n.isObject(e.contentMetadata))
            throw new Error("content metadata must be of object type");
          this.data = e;
        }
        return (
          (e.make = function (t) {
            try {
              return new e(t);
            } catch (e) {
              return null;
            }
          }),
          (e.prototype.getContentMetadata = function () {
            return this.data.contentMetadata;
          }),
          e
        );
      })();
    t.SurveyMetadata = r;
    var i = function () {};
    t.Metadata = i;
  },
  function (e, t, A) {
    "use strict";
    var n,
      r =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var A in t) t.hasOwnProperty(A) && (e[A] = t[A]);
            })(e, t);
        }),
        function (e, t) {
          function A() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((A.prototype = t.prototype), new A()));
        }),
      i = A(16),
      o = A(18),
      a = A(34),
      s = A(61),
      u = A(35),
      c = A(36),
      l = A(11),
      d = A(26),
      g = A(21),
      p = l.isNOU,
      h = (function (e) {
        function t(t) {
          var A = e.call(this) || this;
          if (p(t)) throw new Error("data must not be null");
          return (
            (A.surveyInfo = new g(t.baseData)),
            (A.prompt = new u(t.promptData)),
            (A.question = t.commentData ? new a(t.commentData) : null),
            (A.rating = t.ratingData ? new c(t.ratingData) : null),
            (A.multipleChoice = t.multipleChoiceData
              ? new s(t.multipleChoiceData)
              : null),
            A
          );
        }
        return (
          r(t, e),
          (t.make = function (e) {
            try {
              return new t(e);
            } catch (e) {
              return null;
            }
          }),
          (t.makeFps = function (e, A, n) {
            if (p(e) || p(A) || p(n)) return null;
            var r = [],
              i = [],
              o = n.content;
            if (
              p(o) ||
              p(o.prompt) ||
              (p(o.rating) && p(o.multipleChoice) && p(o.comment))
            )
              return null;
            var l = new t.FpsSurveyData();
            if (
              ((l.baseData = e),
              (l.promptData = new u.PromptComponentData()),
              (l.promptData.title = A.getCustomString(o.prompt.title)),
              (l.promptData.question = A.getCustomString(o.prompt.question)),
              (l.promptData.yesButtonLabel = A.getCustomString(
                o.prompt.yesLabel
              )),
              (l.promptData.noButtonLabel = A.getCustomString(
                o.prompt.noLabel
              )),
              p(l.promptData.title) ||
                p(l.promptData.question) ||
                p(l.promptData.yesButtonLabel) ||
                p(l.promptData.noButtonLabel))
            )
              return null;
            if (o.rating) {
              (l.ratingData = new c.RatingComponentData()),
                (l.ratingData.question = A.getCustomString(o.rating.question)),
                (l.ratingData.isZeroBased = o.rating.isZeroBased);
              for (
                var d = 0, g = o.rating.ratingValuesAscending;
                d < g.length;
                d++
              ) {
                var h = g[d],
                  f = A.getCustomString(h);
                if (p(f)) return null;
                r.push(f);
              }
              if (
                ((l.ratingData.ratingValuesAscending = r),
                p(l.ratingData.question) ||
                  p(l.ratingData.ratingValuesAscending))
              )
                return null;
            }
            if (o.multipleChoice) {
              (l.multipleChoiceData = new s.MultipleChoiceComponentData()),
                (l.multipleChoiceData.question = A.getCustomString(
                  o.multipleChoice.question
                )),
                (l.multipleChoiceData.minNumberOfSelectedOptions =
                  o.multipleChoice.minNumberOfSelectedOptions),
                (l.multipleChoiceData.maxNumberOfSelectedOptions =
                  o.multipleChoice.maxNumberOfSelectedOptions);
              for (
                var B = 0, m = o.multipleChoice.availableOptions;
                B < m.length;
                B++
              ) {
                (h = m[B]), (f = A.getCustomString(h));
                if (p(f)) return null;
                i.push(f);
              }
              if (
                ((l.multipleChoiceData.availableOptions = i),
                p(l.multipleChoiceData.question) ||
                  p(l.multipleChoiceData.availableOptions))
              )
                return null;
            }
            return o.comment &&
              ((l.commentData = new a.CommentComponentData()),
              (l.commentData.question = A.getCustomString(o.comment.question)),
              p(l.commentData.question))
              ? null
              : this.make(l);
          }),
          (t.prototype.getType = function () {
            return i.Type.Fps;
          }),
          (t.prototype.getSurveyInfo = function () {
            return this.surveyInfo;
          }),
          (t.prototype.getCommentComponent = function () {
            return this.question;
          }),
          (t.prototype.getPromptComponent = function () {
            return this.prompt;
          }),
          (t.prototype.getRatingComponent = function () {
            return this.rating;
          }),
          (t.prototype.getMultipleChoiceComponent = function () {
            return this.multipleChoice;
          }),
          (t.prototype.getComponent = function (e) {
            switch (e) {
              case "Comment":
                return this.getCommentComponent();
              case "Prompt":
                return this.getPromptComponent();
              case "Rating":
                return this.getRatingComponent();
              case "MultipleChoice":
                return this.getMultipleChoiceComponent();
              default:
                return null;
            }
          }),
          (t.prototype.getDomElements = function (e) {
            if (p(e)) throw new Error("Document must not be null");
            var t = e.createElement(i.DOM_FPS_TAGNAME);
            return (
              this.getSurveyInfo()
                .getDomElements(e)
                .forEach(function (e) {
                  p(e) || t.appendChild(e);
                }),
              this.getCommentComponent()
                .getDomElements(e)
                .forEach(function (e) {
                  p(e) || t.appendChild(e);
                }),
              this.getRatingComponent() &&
                this.getRatingComponent()
                  .getDomElements(e)
                  .forEach(function (e) {
                    p(e) || t.appendChild(e);
                  }),
              this.getMultipleChoiceComponent() &&
                this.getMultipleChoiceComponent()
                  .getDomElements(e)
                  .forEach(function (e) {
                    p(e) || t.appendChild(e);
                  }),
              [t]
            );
          }),
          (t.prototype.getJsonElements = function () {
            var e,
              t = {};
            return (
              ((t = l.overrideValues(
                this.getSurveyInfo().getJsonElements(),
                t
              ))[o.JSON_APPLICATION_KEYNAME] = {}),
              (t[o.JSON_APPLICATION_KEYNAME][
                o.JSON_EXTENDEDMANIFESTDATA_KEYNAME
              ] = JSON.stringify(
                (((e = {})[o.JSON_SURVEYSTRINGS_KEYNAME] =
                  this.makeSurveyStrings()),
                (e[o.JSON_SURVEYSPECIFICDATA_KEYNAME] =
                  this.makeResponseString()),
                e)
              )),
              t
            );
          }),
          (t.prototype.makeResponseString = function () {
            var e = {};
            return (
              this.question &&
                (e[o.JSON_COMMENT_KEYNAME] = [
                  this.getCommentComponent().getSubmittedText(),
                ]),
              this.multipleChoice &&
                (e[o.JSON_MULTIPLECHOICE_KEYNAME] = [
                  this.getMultipleChoiceComponent().getOptionSelectedStates(),
                ]),
              this.rating &&
                (e[o.JSON_RATING_KEYNAME] = [
                  {
                    numberOfOptions:
                      this.getRatingComponent().getRatingValuesAscending()
                        .length,
                    selectedRating:
                      this.getRatingComponent().getSelectedRatingIndex(),
                  },
                ]),
              JSON.stringify(e)
            );
          }),
          (t.prototype.makeSurveyStrings = function () {
            var e = {};
            return (
              this.prompt &&
                (e[o.JSON_PROMPT_KEYNAME] = this.prompt.getComponentJson()),
              this.rating &&
                (e[o.JSON_RATING_KEYNAME] = [this.rating.getComponentJson()]),
              this.question &&
                (e[o.JSON_COMMENT_KEYNAME] = [
                  this.question.getComponentJson(),
                ]),
              this.multipleChoice &&
                (e[o.JSON_MULTIPLECHOICE_KEYNAME] = [
                  this.multipleChoice.getComponentJson(),
                ]),
              JSON.stringify(e)
            );
          }),
          t
        );
      })(d.Survey);
    !(function (e) {
      var t = function () {};
      e.FpsSurveyData = t;
    })(h || (h = {})),
      (e.exports = h);
  },
  function (e, t, A) {
    "use strict";
    var n = A(18),
      r = (function () {
        function e(e) {
          if (!e) throw new Error("data must not be null");
          if (!e.question)
            throw new Error("data.question must not be null or empty");
          if (!e.availableOptions || e.availableOptions.length < 2)
            throw new Error(
              "data.availableOptions must not be null or have less than two choices"
            );
          e.availableOptions.forEach(function (e) {
            if (!e)
              throw new Error("Option values must not contain null or empty");
          }),
            (this.data = e),
            (this.optionStates = new Array(e.availableOptions.length));
          for (var t = 0; t < this.optionStates.length; t++)
            this.optionStates[t] = !1;
        }
        return (
          (e.make = function (t) {
            try {
              return new e(t);
            } catch (e) {
              return null;
            }
          }),
          (e.prototype.getType = function () {
            return "MultipleChoice";
          }),
          (e.prototype.getQuestion = function () {
            return this.data.question;
          }),
          (e.prototype.getAvailableOptions = function () {
            return this.data.availableOptions;
          }),
          (e.prototype.getOptionSelectedStates = function () {
            return this.optionStates;
          }),
          (e.prototype.getMinNumberofSelectedOptions = function () {
            return this.data.minNumberOfSelectedOptions;
          }),
          (e.prototype.getMaxNumberofSelectedOptions = function () {
            return this.data.maxNumberOfSelectedOptions;
          }),
          (e.prototype.setOptionSelectedStates = function (e) {
            for (var t = 0; t < e.length; t++) this.optionStates[t] = e[t];
          }),
          (e.prototype.ValidateMinNumberofSelectedOptions = function () {
            var e = 0;
            return (
              this.optionStates.forEach(function (t) {
                t && e++;
              }),
              e >= this.getMinNumberofSelectedOptions()
            );
          }),
          (e.prototype.ValidateMaxNumberofSelectedOptions = function () {
            var e = 0;
            return (
              this.optionStates.forEach(function (t) {
                t && e++;
              }),
              e <= this.getMaxNumberofSelectedOptions()
            );
          }),
          (e.prototype.getDomElements = function (e) {
            if (!e) throw new Error("Document must not be null");
            var t = e.createElement(n.DOM_MULTIPLECHOICE_TAGNAME);
            return (
              t.appendChild(
                e.createTextNode(this.getOptionSelectedStates().toString())
              ),
              [t]
            );
          }),
          (e.prototype.getJsonElements = function () {
            var e = {};
            return (
              (e[n.JSON_MULTIPLECHOICE_KEYNAME] =
                this.getOptionSelectedStates().toString()),
              e
            );
          }),
          (e.prototype.getComponentJson = function () {
            var e;
            return (
              ((e = {})[n.JSON_QUESTION_KEYNAME] = this.getQuestion()),
              (e[n.JSON_RATINGOPTIONS_KEYNAME] = this.getAvailableOptions()),
              e
            );
          }),
          e
        );
      })();
    !(function (e) {
      var t = function () {};
      e.MultipleChoiceComponentData = t;
    })(r || (r = {})),
      (e.exports = r);
  },
  function (e, t, A) {
    "use strict";
    var n,
      r =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var A in t) t.hasOwnProperty(A) && (e[A] = t[A]);
            })(e, t);
        }),
        function (e, t) {
          function A() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((A.prototype = t.prototype), new A()));
        }),
      i = A(16),
      o = A(11),
      a = A(26),
      s = A(21),
      u = o.isNOU,
      c = (function (e) {
        function t(t) {
          var A = e.call(this) || this;
          if (!t) throw new Error("data must not be null");
          if (
            ((A.surveyInfo = new s(t.baseData)), u(A.surveyInfo.getMetadata()))
          )
            throw new Error("metadata must not be null");
          return A;
        }
        return (
          r(t, e),
          (t.make = function (e) {
            try {
              return new t(e);
            } catch (e) {
              return null;
            }
          }),
          (t.makeCustom = function (e) {
            if (u(e)) return null;
            var A = new t.GenericMessagingSurfaceSurveyData();
            return (A.baseData = e), this.make(A);
          }),
          (t.prototype.getType = function () {
            return i.Type.GenericMessagingSurface;
          }),
          (t.prototype.getSurveyInfo = function () {
            return this.surveyInfo;
          }),
          (t.prototype.getComponent = function (e) {
            return null;
          }),
          (t.prototype.getDomElements = function (e) {
            return [];
          }),
          (t.prototype.getJsonElements = function () {
            return {};
          }),
          t
        );
      })(a.Survey);
    !(function (e) {
      var t = function () {};
      e.GenericMessagingSurfaceSurveyData = t;
    })(c || (c = {})),
      (e.exports = c);
  },
  function (e, t, A) {
    "use strict";
    var n,
      r =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var A in t) t.hasOwnProperty(A) && (e[A] = t[A]);
            })(e, t);
        }),
        function (e, t) {
          function A() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((A.prototype = t.prototype), new A()));
        }),
      i = A(16),
      o = A(64),
      a = A(11),
      s = A(26),
      u = A(21),
      c = a.isNOU,
      l = (function (e) {
        function t(t) {
          var A = e.call(this) || this;
          if (c(t)) throw new Error("data must not be null");
          return (
            (A.surveyInfo = new u(t.baseData)),
            (A.intercept = new o(t.interceptData)),
            A
          );
        }
        return (
          r(t, e),
          (t.make = function (e) {
            try {
              return new t(e);
            } catch (e) {
              return null;
            }
          }),
          (t.makeIntercept = function (e, A, n) {
            if (c(e) || c(A) || c(n)) return null;
            var r = n.content;
            if (c(r) || c(r.intercept)) return null;
            var i = new t.InterceptSurveyData();
            return (
              (i.baseData = e),
              (i.interceptData = new o.InterceptComponentData()),
              (i.interceptData.title = A.getCustomString(r.intercept.title)),
              (i.interceptData.question = A.getCustomString(
                r.intercept.question
              )),
              (i.interceptData.url = A.getCustomString(r.intercept.url)),
              c(i.interceptData.title) ||
              c(i.interceptData.question) ||
              c(i.interceptData.url)
                ? null
                : this.make(i)
            );
          }),
          (t.prototype.getType = function () {
            return i.Type.Intercept;
          }),
          (t.prototype.getSurveyInfo = function () {
            return this.surveyInfo;
          }),
          (t.prototype.getInterceptComponent = function () {
            return this.intercept;
          }),
          (t.prototype.getComponent = function (e) {
            return "Intercept" === e ? this.getInterceptComponent() : null;
          }),
          (t.prototype.getDomElements = function (e) {
            return [];
          }),
          (t.prototype.getJsonElements = function () {
            return {};
          }),
          t
        );
      })(s.Survey);
    !(function (e) {
      var t = function () {};
      e.InterceptSurveyData = t;
    })(l || (l = {})),
      (e.exports = l);
  },
  function (e, t, A) {
    "use strict";
    var n = A(18),
      r = (function () {
        function e(e) {
          if (!e) throw new Error("data must not be null");
          if (!e.question)
            throw new Error("data.question must not be null or empty");
          if (!e.title) throw new Error("data.title must not be null or empty");
          if (!e.url) throw new Error("data.url must not be null or empty");
          this.data = e;
        }
        return (
          (e.make = function (t) {
            try {
              return new e(t);
            } catch (e) {
              return null;
            }
          }),
          (e.prototype.getType = function () {
            return "Intercept";
          }),
          (e.prototype.getTitle = function () {
            return this.data.title;
          }),
          (e.prototype.getQuestion = function () {
            return this.data.question;
          }),
          (e.prototype.getUrl = function () {
            return this.data.url;
          }),
          (e.prototype.getDomElements = function (e) {
            if (!e) throw new Error("Document must not be null");
            return [e.createElement(n.DOM_INTERCEPT_TAGNAME)];
          }),
          (e.prototype.getJsonElements = function () {
            var e;
            return ((e = {})[n.JSON_INTERCEPT_KEYNAME] = ""), e;
          }),
          (e.prototype.getComponentJson = function () {
            var e;
            return (
              ((e = {})[n.JSON_TITLE_KEYNAME] = this.getTitle()),
              (e[n.JSON_QUESTION_KEYNAME] = this.getQuestion()),
              (e[n.JSON_INTERCEPTURL_KEYNAME] = this.getUrl()),
              e
            );
          }),
          e
        );
      })();
    !(function (e) {
      var t = function () {};
      e.InterceptComponentData = t;
    })(r || (r = {})),
      (e.exports = r);
  },
  function (e, t, A) {
    "use strict";
    var n,
      r =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var A in t) t.hasOwnProperty(A) && (e[A] = t[A]);
            })(e, t);
        }),
        function (e, t) {
          function A() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((A.prototype = t.prototype), new A()));
        }),
      i = A(16),
      o = A(34),
      a = A(35),
      s = A(36),
      u = A(11),
      c = A(26),
      l = A(21),
      d = u.isNOU,
      g = u.overrideValues,
      p = (function (e) {
        function t(t) {
          var A = e.call(this) || this;
          if (d(t)) throw new Error("data must not be null");
          return (
            (A.surveyInfo = new l(t.baseData)),
            (A.prompt = new a(t.promptData)),
            (A.question = new o(t.commentData)),
            (A.rating = new s(t.ratingData)),
            A
          );
        }
        return (
          r(t, e),
          (t.make = function (e) {
            try {
              return new t(e);
            } catch (e) {
              return null;
            }
          }),
          (t.makeNlqs = function (e, A, n) {
            if (d(e) || d(A) || d(n)) return null;
            var r = [],
              i = n.content;
            if (d(i) || d(i.comment) || d(i.prompt) || d(i.rating)) return null;
            var u = new t.NlqsSurveyData();
            (u.baseData = e),
              (u.promptData = new a.PromptComponentData()),
              (u.ratingData = new s.RatingComponentData()),
              (u.commentData = new o.CommentComponentData()),
              (u.promptData.title = A.getCustomString(i.prompt.title)),
              (u.promptData.question = A.getCustomString(i.prompt.question)),
              (u.promptData.yesButtonLabel = A.getCustomString(
                i.prompt.yesLabel
              )),
              (u.promptData.noButtonLabel = A.getCustomString(
                i.prompt.noLabel
              )),
              (u.ratingData.question = A.getCustomString(i.rating.question)),
              (u.ratingData.isZeroBased = i.rating.isZeroBased),
              (u.commentData.question = A.getCustomString(i.comment.question));
            for (
              var c = 0, l = i.rating.ratingValuesAscending;
              c < l.length;
              c++
            ) {
              var g = l[c],
                p = A.getCustomString(g);
              if (d(p)) return null;
              r.push(p);
            }
            return (
              (u.ratingData.ratingValuesAscending = r),
              d(u.ratingData.question) ||
              d(u.commentData.question) ||
              d(u.promptData.title) ||
              d(u.promptData.question) ||
              d(u.promptData.yesButtonLabel) ||
              d(u.promptData.noButtonLabel) ||
              d(u.ratingData.ratingValuesAscending)
                ? null
                : this.make(u)
            );
          }),
          (t.prototype.getType = function () {
            return i.Type.Nlqs;
          }),
          (t.prototype.getSurveyInfo = function () {
            return this.surveyInfo;
          }),
          (t.prototype.getCommentComponent = function () {
            return this.question;
          }),
          (t.prototype.getPromptComponent = function () {
            return this.prompt;
          }),
          (t.prototype.getRatingComponent = function () {
            return this.rating;
          }),
          (t.prototype.getComponent = function (e) {
            switch (e) {
              case "Comment":
                return this.getCommentComponent();
              case "Prompt":
                return this.getPromptComponent();
              case "Rating":
                return this.getRatingComponent();
              default:
                return null;
            }
          }),
          (t.prototype.getDomElements = function (e) {
            if (d(e)) throw new Error("Document must not be null");
            var t = e.createElement(i.DOM_NLQS_TAGNAME);
            return (
              this.getSurveyInfo()
                .getDomElements(e)
                .forEach(function (e) {
                  d(e) || t.appendChild(e);
                }),
              this.getCommentComponent()
                .getDomElements(e)
                .forEach(function (e) {
                  d(e) || t.appendChild(e);
                }),
              this.getRatingComponent()
                .getDomElements(e)
                .forEach(function (e) {
                  d(e) || t.appendChild(e);
                }),
              [t]
            );
          }),
          (t.prototype.getJsonElements = function () {
            var e = {};
            return (
              (e = g(this.getSurveyInfo().getJsonElements(), e)),
              (e = g(this.getCommentComponent().getJsonElements(), e)),
              (e = g(this.getRatingComponent().getJsonElements(), e))
            );
          }),
          t
        );
      })(c.Survey);
    !(function (e) {
      var t = function () {};
      e.NlqsSurveyData = t;
    })(p || (p = {})),
      (e.exports = p);
  },
  function (e, t, A) {
    "use strict";
    var n,
      r =
        (this && this.__extends) ||
        ((n = function (e, t) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var A in t) t.hasOwnProperty(A) && (e[A] = t[A]);
            })(e, t);
        }),
        function (e, t) {
          function A() {
            this.constructor = e;
          }
          n(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((A.prototype = t.prototype), new A()));
        }),
      i = A(16),
      o = A(18),
      a = A(34),
      s = A(35),
      u = A(36),
      c = A(11),
      l = A(26),
      d = A(21),
      g = c.isNOU,
      p = c.overrideValues,
      h = (function (e) {
        function t(t) {
          var A = e.call(this) || this;
          if (!t) throw new Error("data must not be null");
          return (
            (A.surveyInfo = new d(t.baseData)),
            (A.prompt = new s(t.promptData)),
            (A.question = new a(t.commentData)),
            (A.rating = new u(t.ratingData)),
            A
          );
        }
        return (
          r(t, e),
          (t.make = function (e) {
            try {
              return new t(e);
            } catch (e) {
              return null;
            }
          }),
          (t.makeCustom = function (e, A, n) {
            if (g(e) || g(A) || g(n)) return null;
            var r = [],
              i = n.content;
            if (g(i) || g(i.comment) || g(i.prompt) || g(i.rating)) return null;
            var o = new t.NpsSurveyData();
            (o.baseData = e),
              (o.promptData = new s.PromptComponentData()),
              (o.ratingData = new u.RatingComponentData()),
              (o.commentData = new a.CommentComponentData()),
              (o.promptData.title = A.getCustomString(i.prompt.title)),
              (o.promptData.question = A.getCustomString(i.prompt.question)),
              (o.promptData.yesButtonLabel = A.getCustomString(
                i.prompt.yesLabel
              )),
              (o.promptData.noButtonLabel = A.getCustomString(
                i.prompt.noLabel
              )),
              (o.ratingData.question = A.getCustomString(i.rating.question)),
              (o.ratingData.isZeroBased = i.rating.isZeroBased),
              (o.commentData.question = A.getCustomString(i.comment.question));
            for (
              var c = 0, l = i.rating.ratingValuesAscending;
              c < l.length;
              c++
            ) {
              var d = l[c],
                p = A.getCustomString(d);
              if (g(p)) return null;
              r.push(p);
            }
            return (
              (o.ratingData.ratingValuesAscending = r),
              g(o.ratingData.question) ||
              g(o.commentData.question) ||
              g(o.promptData.title) ||
              g(o.promptData.question) ||
              g(o.promptData.yesButtonLabel) ||
              g(o.promptData.noButtonLabel) ||
              g(o.ratingData.ratingValuesAscending)
                ? null
                : this.make(o)
            );
          }),
          (t.make5Point = function (e, A) {
            if (!e || !A) return null;
            var n = new t.NpsSurveyData();
            (n.baseData = e),
              (n.ratingData = new u.RatingComponentData()),
              (n.ratingData.isZeroBased = !1),
              (n.commentData = new a.CommentComponentData()),
              (n.promptData = new s.PromptComponentData()),
              (n.ratingData.question = A.loadStringResource(4)),
              (n.commentData.question = A.loadStringResource(21)),
              (n.promptData.title = A.loadStringResource(0)),
              (n.promptData.question = A.loadStringResource(1)),
              (n.promptData.yesButtonLabel = A.loadStringResource(2)),
              (n.promptData.noButtonLabel = A.loadStringResource(3));
            var r = new Array(5);
            return (
              (r[0] = A.loadStringResource(16)),
              (r[1] = A.loadStringResource(17)),
              (r[2] = A.loadStringResource(18)),
              (r[3] = A.loadStringResource(19)),
              (r[4] = A.loadStringResource(20)),
              n.ratingData.question &&
              n.commentData.question &&
              n.promptData.title &&
              n.promptData.question &&
              n.promptData.yesButtonLabel &&
              n.promptData.noButtonLabel &&
              r[0] &&
              r[1] &&
              r[2] &&
              r[3] &&
              r[4]
                ? ((n.ratingData.ratingValuesAscending = r), this.make(n))
                : null
            );
          }),
          (t.make11Point = function (e, A) {
            if (!e || !A) return null;
            var n = new t.NpsSurveyData();
            (n.baseData = e),
              (n.ratingData = new u.RatingComponentData()),
              (n.ratingData.isZeroBased = !0),
              (n.commentData = new a.CommentComponentData()),
              (n.promptData = new s.PromptComponentData()),
              (n.ratingData.question = A.loadStringResource(4)),
              (n.commentData.question = A.loadStringResource(21)),
              (n.promptData.title = A.loadStringResource(0)),
              (n.promptData.question = A.loadStringResource(1)),
              (n.promptData.yesButtonLabel = A.loadStringResource(2)),
              (n.promptData.noButtonLabel = A.loadStringResource(3));
            var r = new Array(11);
            return (
              (r[0] = A.loadStringResource(5)),
              (r[1] = A.loadStringResource(6)),
              (r[2] = A.loadStringResource(7)),
              (r[3] = A.loadStringResource(8)),
              (r[4] = A.loadStringResource(9)),
              (r[5] = A.loadStringResource(10)),
              (r[6] = A.loadStringResource(11)),
              (r[7] = A.loadStringResource(12)),
              (r[8] = A.loadStringResource(13)),
              (r[9] = A.loadStringResource(14)),
              (r[10] = A.loadStringResource(15)),
              n.ratingData.question &&
              n.commentData.question &&
              n.promptData.title &&
              n.promptData.question &&
              n.promptData.yesButtonLabel &&
              n.promptData.noButtonLabel &&
              r[0] &&
              r[1] &&
              r[2] &&
              r[3] &&
              r[4] &&
              r[5] &&
              r[6] &&
              r[7] &&
              r[8] &&
              r[9] &&
              r[10]
                ? ((n.ratingData.ratingValuesAscending = r), this.make(n))
                : null
            );
          }),
          (t.prototype.getType = function () {
            return i.Type.Nps;
          }),
          (t.prototype.getSurveyInfo = function () {
            return this.surveyInfo;
          }),
          (t.prototype.getCommentComponent = function () {
            return this.question;
          }),
          (t.prototype.getPromptComponent = function () {
            return this.prompt;
          }),
          (t.prototype.getRatingComponent = function () {
            return this.rating;
          }),
          (t.prototype.getComponent = function (e) {
            switch (e) {
              case "Comment":
                return this.getCommentComponent();
              case "Prompt":
                return this.getPromptComponent();
              case "Rating":
                return this.getRatingComponent();
              default:
                return null;
            }
          }),
          (t.prototype.getDomElements = function (e) {
            if (!e) throw new Error("Document must not be null");
            var t = e.createElement(i.DOM_NPS_TAGNAME);
            return (
              this.getSurveyInfo()
                .getDomElements(e)
                .forEach(function (e) {
                  e && t.appendChild(e);
                }),
              this.getCommentComponent()
                .getDomElements(e)
                .forEach(function (e) {
                  e && t.appendChild(e);
                }),
              this.getRatingComponent()
                .getDomElements(e)
                .forEach(function (e) {
                  e && t.appendChild(e);
                }),
              [t]
            );
          }),
          (t.prototype.getJsonElements = function () {
            var e,
              t = {};
            return (
              (t = p(this.getSurveyInfo().getJsonElements(), t)),
              (t = p(this.getCommentComponent().getJsonElements(), t)),
              ((t = p(this.getRatingComponent().getJsonElements(), t))[
                o.JSON_APPLICATION_KEYNAME
              ] = {}),
              (t[o.JSON_APPLICATION_KEYNAME][
                o.JSON_EXTENDEDMANIFESTDATA_KEYNAME
              ] = JSON.stringify(
                (((e = {})[o.JSON_SURVEYSTRINGS_KEYNAME] =
                  this.makeSurveyStrings()),
                e)
              )),
              t
            );
          }),
          (t.prototype.makeSurveyStrings = function () {
            var e = {};
            return (
              this.prompt &&
                (e[o.JSON_PROMPT_KEYNAME] = this.prompt.getComponentJson()),
              this.rating &&
                (e[o.JSON_RATING_KEYNAME] = [this.rating.getComponentJson()]),
              this.question &&
                (e[o.JSON_COMMENT_KEYNAME] = [
                  this.question.getComponentJson(),
                ]),
              JSON.stringify(e)
            );
          }),
          t
        );
      })(l.Survey);
    !(function (e) {
      var t = function () {};
      e.NpsSurveyData = t;
    })(h || (h = {})),
      (e.exports = h);
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.FloodgateSettings = void 0);
    var n = (function () {
      function e() {}
      return (
        (e.toJson = function (e) {
          return JSON.stringify(e);
        }),
        (e.fromJson = function (e) {
          return JSON.parse(e);
        }),
        e
      );
    })();
    t.FloodgateSettings = n;
  },
  function (e, t, A) {
    "use strict";
    var n = (function () {
      function e(e) {
        if (!e) throw new Error("trackingSet must not be null");
        if (e.getList().length > 32)
          throw new Error("trackingSet list size must be less than 32");
        (this.isOrdered = e.getIsOrdered()),
          (this.trackedActivities = e.getList()),
          (this.currentIndex = 0),
          (this.activationMask = 0),
          (this.currentActivationFlags = 0),
          (this.isActivationByInitPending = !1),
          (this.currentCounts = new Array(this.trackedActivities.length)),
          (this.currentStartTimes = new Array(this.trackedActivities.length)),
          (this.currentSessionCounts = new Array(
            this.trackedActivities.length
          ));
        for (var t = 0; t < this.trackedActivities.length; t++)
          (this.currentCounts[t] = 0), (this.currentSessionCounts[t] = 0);
        for (t = 0; t < this.trackedActivities.length; t++)
          (this.activationMask |= 1 << t),
            this.trackedActivities[t].getCount() < 1 &&
              this.trackedActivities[t].setCount(1);
      }
      return (
        (e.prototype.getCount = function (e) {
          return this.isValidIndex(e) ? this.currentCounts[e] : 0;
        }),
        (e.prototype.getSessionCount = function (e) {
          return this.isValidIndex(e) ? this.currentSessionCounts[e] : 0;
        }),
        (e.prototype.getStartTime = function (e) {
          return this.isValidIndex(e) ? this.currentStartTimes[e] : null;
        }),
        (e.prototype.moveSessionCountIntoBaseCount = function (e) {
          if (!this.isValidIndex(e)) return 0;
          var t = this.currentSessionCounts[e];
          return (this.currentSessionCounts[e] = 0), t;
        }),
        (e.prototype.initCounts = function (e, t, A) {
          void 0 === A && (A = !1);
          for (
            var n = 0;
            n < this.trackedActivities.length &&
            !(this.isOrdered && n > this.currentIndex);
            n++
          )
            n < t.length &&
              t[n] &&
              ((this.currentSessionCounts[n] = this.currentCounts[n] =
                t[n].tracker.getSessionCount(t[n].index)),
              (this.currentStartTimes[n] = t[n].tracker.getStartTime(
                t[n].index
              ))),
              this.trackedActivities[n].getIsAggregate() &&
                n < e.length &&
                (this.currentCounts[n] += e[n]),
              this.hasCountCrossedThreshold(n) && this.finishActivityAtIndex(n);
          this.isActivated() && !A && (this.isActivationByInitPending = !0);
        }),
        (e.prototype.generateActivityIndexList = function () {
          for (
            var t = new Array(), A = 0;
            A < this.trackedActivities.length;
            A++
          ) {
            var n = new e.ActivityIndex();
            (n.activity = this.trackedActivities[A].getActivity()),
              (n.index = A),
              t.push(n);
          }
          return t;
        }),
        (e.prototype.incrementActivity = function (e, t) {
          if (!this.isValidIndex(e)) return 0;
          if (t < 0) throw new Error("increment must be non-negative");
          if (this.isOrdered && e > this.currentIndex) return 0;
          var A = !this.hasCountCrossedThreshold(e);
          return (
            (this.currentCounts[e] += t),
            (this.currentSessionCounts[e] += t),
            this.isActivationByInitPending
              ? this.isPermittedIndexForActivationByInit(e)
                ? this.commitActivation()
                : 0
              : A && this.hasCountCrossedThreshold(e)
              ? (this.finishActivityAtIndex(e),
                this.isActivated() ? this.commitActivation() : 1)
              : 0
          );
        }),
        (e.prototype.startTime = function (e, t) {
          this.isValidIndex(e) && (this.currentStartTimes[e] = t || new Date());
        }),
        (e.prototype.stopTime = function (e, t) {
          if (!this.isValidIndex(e)) return 0;
          var A = this.currentStartTimes[e];
          return (
            (this.currentStartTimes[e] = null),
            A
              ? A > (t = t || new Date())
                ? 0
                : (t.getTime() - A.getTime()) / 1e3
              : 0
          );
        }),
        (e.prototype.isValidIndex = function (e) {
          return e < this.trackedActivities.length;
        }),
        (e.prototype.isActivated = function () {
          return (
            (this.currentActivationFlags & this.activationMask) ===
            this.activationMask
          );
        }),
        (e.prototype.finishActivityAtIndex = function (e) {
          if (!this.isValidIndex(e)) throw new Error("Index is not valid");
          (this.currentActivationFlags |= 1 << e),
            e + 1 < this.trackedActivities.length &&
              (this.currentIndex = e + 1);
        }),
        (e.prototype.hasCountCrossedThreshold = function (e) {
          if (!this.isValidIndex(e)) throw new Error("Index is not valid");
          return this.currentCounts[e] >= this.trackedActivities[e].getCount();
        }),
        (e.prototype.isPermittedIndexForActivationByInit = function (e) {
          return !this.isOrdered || e + 1 === this.currentCounts.length;
        }),
        (e.prototype.commitActivation = function () {
          return (this.isActivationByInitPending = !1), 2;
        }),
        e
      );
    })();
    !(function (e) {
      var t = function () {};
      e.ActivityIndex = t;
    })(n || (n = {})),
      (e.exports = n);
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.IndexedTracker = void 0);
    var n = function () {};
    t.IndexedTracker = n;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.ActivityTrackingContract = void 0);
    var n = function (e, t) {
      (this.surveyId = e), (this.trackingSet = t);
    };
    t.ActivityTrackingContract = n;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.validateUserFacts = t.deserializeUserFacts = void 0);
    var n = A(72);
    (t.deserializeUserFacts = function (e) {
      var t = [];
      for (var A in e.UserFacts)
        if (e.UserFacts.hasOwnProperty(A)) {
          var r = e.UserFacts[A];
          r && t.push(n.UserFact.deserialize(r));
        }
      return 0 === t.length && (t = null), t;
    }),
      (t.validateUserFacts = function (e) {
        if (e) for (var t in e) if (e.hasOwnProperty(t) && !e[t]) return !1;
        return !0;
      });
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.UserFact = void 0);
    var n = A(15),
      r = A(17),
      i = A(11),
      o = i.isNOU,
      a = i.isNumber,
      s = i.isArray,
      u = [0, 1, 2, 3, 4, 5],
      c = (function () {
        function e(e) {
          this.input = e;
        }
        return (
          (e.deserialize = function (t) {
            return this.validate(t) ? new e(t) : null;
          }),
          (e.validate = function (e) {
            if (!e)
              return (
                r.FloodgateEngine.getTelemetryLogger().log_Error(
                  n.TelemetryEvent.Floodgate.UserFactsSpecDeserialization
                    .Failed,
                  "Input is null or undefined for user fact"
                ),
                !1
              );
            if (e && (o(e.Name) || o(e.Type) || o(e.Value)))
              return (
                r.FloodgateEngine.getTelemetryLogger().log_Error(
                  n.TelemetryEvent.Floodgate.UserFactsSpecDeserialization
                    .Failed,
                  "Either of the required parameters Name: " +
                    e.Name +
                    ", Type: " +
                    e.Type +
                    " or Value: " +
                    e.Value +
                    " are not provided for the user fact"
                ),
                !1
              );
            if (!this.validateUserFactType(e.Type))
              return (
                r.FloodgateEngine.getTelemetryLogger().log_Error(
                  n.TelemetryEvent.Floodgate.UserFactsSpecDeserialization
                    .Failed,
                  "Invalid UserFactType value " +
                    e.Type +
                    " is provided for user fact"
                ),
                !1
              );
            if (6 === e.Type)
              return (
                r.FloodgateEngine.getTelemetryLogger().log_Error(
                  n.TelemetryEvent.Floodgate.UserFactsSpecDeserialization
                    .Failed,
                  "Unsupported UserFactType value " +
                    e.Type +
                    " is provided for user fact"
                ),
                !1
              );
            if (e.LatencyType && !this.validateLatencyType(e.LatencyType))
              return (
                r.FloodgateEngine.getTelemetryLogger().log_Error(
                  n.TelemetryEvent.Floodgate.UserFactsSpecDeserialization
                    .Failed,
                  "Invalid LatencyType value " +
                    e.LatencyType +
                    " is provided for user fact of type " +
                    e.Type
                ),
                !1
              );
            if (
              e.LatencyType &&
              0 !== e.LatencyType &&
              o(e.LatencyDurationInSeconds)
            )
              return (
                r.FloodgateEngine.getTelemetryLogger().log_Error(
                  n.TelemetryEvent.Floodgate.UserFactsSpecDeserialization
                    .Failed,
                  "LatencyDurationInSeconds value " +
                    e.LatencyDurationInSeconds +
                    " is not provided for user fact of type " +
                    e.Type
                ),
                !1
              );
            if (e.LatencyDurationInSeconds && !a(e.LatencyDurationInSeconds))
              return (
                r.FloodgateEngine.getTelemetryLogger().log_Error(
                  n.TelemetryEvent.Floodgate.UserFactsSpecDeserialization
                    .Failed,
                  "Invalid LatencyDurationInSeconds value " +
                    e.LatencyDurationInSeconds +
                    " is provided for user fact of type " +
                    e.Type
                ),
                !1
              );
            if (1 === e.Type && o(e.IntervalType))
              return (
                r.FloodgateEngine.getTelemetryLogger().log_Error(
                  n.TelemetryEvent.Floodgate.UserFactsSpecDeserialization
                    .Failed,
                  "Required parameter intervalType is not provided for user fact of type " +
                    e.Type
                ),
                !1
              );
            var t = this.getComparatorTypes(e.Type);
            return (
              !(
                e.Comparator &&
                !(function (e, t) {
                  return -1 !== t.indexOf(e);
                })(e.Comparator, t)
              ) ||
              (r.FloodgateEngine.getTelemetryLogger().log_Error(
                n.TelemetryEvent.Floodgate.UserFactsSpecIsAMatch.Failed,
                "Unsupported comparator type for user fact of type " + e.Type
              ),
              !1)
            );
          }),
          (e.getComparatorTypes = function (e) {
            switch (e) {
              case 0:
                return [0, 1];
              case 4:
                return [0, 1, 6, 7];
              case 5:
                return [6, 7];
              case 1:
              case 2:
              case 3:
              default:
                return u;
            }
            return u;
          }),
          (e.assertNever = function (e) {
            return !1;
          }),
          (e.validateLatencyType = function (e) {
            return (
              0 === e || 3 === e || 1 === e || 2 === e || this.assertNever(e)
            );
          }),
          (e.validateUserFactType = function (e) {
            return (
              0 === e ||
              2 === e ||
              3 === e ||
              4 === e ||
              1 === e ||
              5 === e ||
              6 === e ||
              this.assertNever(e)
            );
          }),
          (e.prototype.isAMatch = function (e) {
            if (!e || !e.userFactValue) return !1;
            if (!this.isLatencyAcceptable(e)) return !1;
            try {
              var t = this.getType();
              return 0 === t
                ? (function (e, t, A) {
                    var n = JSON.parse(t.userFactValue.toLowerCase());
                    return l(!!e, !!n, A);
                  })(this.getValue(), e, this.getComparator())
                : 2 === t
                ? (function (e, t, A) {
                    var n = Date.parse(t.userFactValue);
                    if (!g(n, t.userFactValue, t.userFactName)) return !1;
                    var r = Date.parse(e);
                    if (!g(r, e, null, 2)) return !1;
                    return l(r, n, A);
                  })(this.getValue(), e, this.getComparator())
                : 3 === t
                ? (function (e, t, A) {
                    var n = parseInt(t.userFactValue, 10);
                    if (!g(n, t.userFactValue, t.userFactName)) return !1;
                    return l(e, n, A);
                  })(this.getValue(), e, this.getComparator())
                : 4 === t
                ? (function (e, t, A) {
                    return l(e.toLowerCase(), t.userFactValue.toLowerCase(), A);
                  })(this.getValue(), e, this.getComparator())
                : 1 === t
                ? (function (e, t, A, i) {
                    var o = Date.parse(t.userFactValue);
                    if (!g(o, t.userFactValue, t.userFactName)) return !1;
                    var a = Date.now(),
                      s = 0 === i ? a - o : o - a;
                    if (s < 0)
                      return (
                        r.FloodgateEngine.getTelemetryLogger().log_Error(
                          n.TelemetryEvent.Floodgate.UserFactsSpecIsAMatch
                            .Failed,
                          "Incorrect current time interval type was provided for user fact of type 1"
                        ),
                        !1
                      );
                    return l(864e5 * e, s, A);
                  })(
                    this.getValue(),
                    e,
                    this.getComparator(),
                    this.getIntervalType()
                  )
                : 5 === t
                ? (function (e, t, A) {
                    return l(e, t.userFactValue, A);
                  })(this.getValue(), e, this.getComparator())
                : (r.FloodgateEngine.getTelemetryLogger().log_Error(
                    n.TelemetryEvent.Floodgate.UserFactsSpecIsAMatch.Failed,
                    "Unsupported type of user fact was provided " + t
                  ),
                  !1);
            } catch (e) {
              return (
                r.FloodgateEngine.getTelemetryLogger().log_Error(
                  n.TelemetryEvent.Floodgate.UserFactsSpecIsAMatch.Failed,
                  e
                ),
                !1
              );
            }
          }),
          (e.prototype.getType = function () {
            return this.input.Type;
          }),
          (e.prototype.getName = function () {
            return this.input.Name;
          }),
          (e.prototype.getValue = function () {
            return this.input.Value;
          }),
          (e.prototype.getComparator = function () {
            return this.input.Comparator || 0;
          }),
          (e.prototype.getLatencyType = function () {
            return this.input.LatencyType || 0;
          }),
          (e.prototype.getLatencyDurationInSeconds = function () {
            return this.input.LatencyDurationInSeconds;
          }),
          (e.prototype.getIntervalType = function () {
            return this.input.IntervalType;
          }),
          (e.prototype.isLatencyAcceptable = function (e) {
            var t = this.getType();
            return (
              !(
                !o(this.getLatencyDurationInSeconds()) &&
                !(function (e, t, A) {
                  var n;
                  switch (e) {
                    case 0:
                      break;
                    case 1:
                      n = A.sourceDateTime;
                      break;
                    case 2:
                      n = A.storageDateTime;
                      break;
                    case 3:
                      n = A.clientIngestionDateTime;
                  }
                  if (!o(n)) {
                    var r = Date.parse(n);
                    return Date.now() - r <= 1e3 * t;
                  }
                  return !0;
                })(this.getLatencyType(), this.getLatencyDurationInSeconds(), e)
              ) ||
              (r.FloodgateEngine.getTelemetryLogger().log_Error(
                n.TelemetryEvent.Floodgate.UserFactsSpecIsAMatch.Failed,
                "Latency duration not acceptable for user fact of type " + t
              ),
              !1)
            );
          }),
          e
        );
      })();
    function l(e, t, A) {
      switch (A) {
        case 0:
          return t === e;
        case 1:
          return t !== e;
        case 2:
          return t > e;
        case 3:
          return t >= e;
        case 4:
          return t < e;
        case 5:
          return t <= e;
        case 6:
          return d(e, t);
        case 7:
          return !d(e, t);
      }
    }
    function d(e, t) {
      if ("string" == typeof t) {
        var A = t.toLowerCase();
        if ("string" == typeof e) return -1 !== e.toLowerCase().indexOf(A);
        if (s(e))
          return e.some(function (e) {
            return e && e.toString().toLowerCase() === A;
          });
      }
      return !!s(e) && -1 !== e.indexOf(t);
    }
    function g(e, t, A, i) {
      if (!a(e)) {
        var o = "User fact " + A + " has invalid value " + t;
        return (
          i &&
            (o =
              "Invalid date time value " +
              t +
              " was provided for user fact of type " +
              i),
          r.FloodgateEngine.getTelemetryLogger().log_Error(
            n.TelemetryEvent.Floodgate.UserFactsSpecIsAMatch.Failed,
            o
          ),
          !1
        );
      }
      return !0;
    }
    t.UserFact = c;
  },
  function (e, t, A) {
    var n;
    (n = function () {
      return (function (e) {
        var t = {};
        function A(n) {
          if (t[n]) return t[n].exports;
          var r = (t[n] = { i: n, l: !1, exports: {} });
          return e[n].call(r.exports, r, r.exports, A), (r.l = !0), r.exports;
        }
        return (
          (A.m = e),
          (A.c = t),
          (A.i = function (e) {
            return e;
          }),
          (A.d = function (e, t, n) {
            A.o(e, t) ||
              Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n,
              });
          }),
          (A.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return A.d(t, "a", t), t;
          }),
          (A.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (A.p = ""),
          A((A.s = 15))
        );
      })([
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = (function () {
            function e(e) {
              (this.low = 0),
                (this.high = 0),
                (this.low = parseInt(e, 10)),
                this.low < 0 && (this.high = -1);
            }
            return (
              (e.prototype.Equals = function (t) {
                var A = new e(t);
                return this.low === A.low && this.high === A.high;
              }),
              e
            );
          })();
          t.Int64 = n;
          var r = (function () {
            function e(e) {
              (this.low = 0), (this.high = 0), (this.low = parseInt(e, 10));
            }
            return (
              (e.prototype.Equals = function (t) {
                var A = new e(t);
                return this.low === A.low && this.high === A.high;
              }),
              e
            );
          })();
          t.UInt64 = r;
          var i = (function () {
            function e() {}
            return (
              (e.ToByte = function (e) {
                return this.ToUInt8(e);
              }),
              (e.ToInt16 = function (e) {
                return (32767 & e) | (((32768 & e) << 16) >> 16);
              }),
              (e.ToInt32 = function (e) {
                return (2147483647 & e) | (2147483648 & e);
              }),
              (e.ToUInt8 = function (e) {
                return 255 & e;
              }),
              (e.ToUInt32 = function (e) {
                return 4294967295 & e;
              }),
              e
            );
          })();
          t.Number = i;
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (function (e) {
              (e[(e.NotSet = 0)] = "NotSet"),
                (e[(e.DistinguishedName = 1)] = "DistinguishedName"),
                (e[(e.GenericData = 2)] = "GenericData"),
                (e[(e.IPV4Address = 3)] = "IPV4Address"),
                (e[(e.IPv6Address = 4)] = "IPv6Address"),
                (e[(e.MailSubject = 5)] = "MailSubject"),
                (e[(e.PhoneNumber = 6)] = "PhoneNumber"),
                (e[(e.QueryString = 7)] = "QueryString"),
                (e[(e.SipAddress = 8)] = "SipAddress"),
                (e[(e.SmtpAddress = 9)] = "SmtpAddress"),
                (e[(e.Identity = 10)] = "Identity"),
                (e[(e.Uri = 11)] = "Uri"),
                (e[(e.Fqdn = 12)] = "Fqdn"),
                (e[(e.IPV4AddressLegacy = 13)] = "IPV4AddressLegacy");
            })(t.AWTPiiKind || (t.AWTPiiKind = {}));
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = A(9),
            r = A(1),
            i = A(3),
            o = (function () {
              function e() {}
              return (
                (e.getPayloadBlob = function (e, t) {
                  var A = new n.IO.MemoryStream(),
                    r = new n.CompactBinaryProtocolWriter(A);
                  return (
                    r.WriteFieldBegin(n.BondDataType.BT_MAP, 3),
                    r.WriteMapContainerBegin(
                      t,
                      n.BondDataType.BT_STRING,
                      n.BondDataType.BT_LIST
                    ),
                    Object.keys(e).forEach(function (t) {
                      r.WriteString(t);
                      var A = e[t];
                      r.WriteContainerBegin(1, n.BondDataType.BT_STRUCT),
                        r.WriteFieldBegin(n.BondDataType.BT_STRING, 2),
                        r.WriteString("act_default_source"),
                        r.WriteFieldBegin(n.BondDataType.BT_STRING, 5),
                        r.WriteString(i.newGuid()),
                        r.WriteFieldBegin(n.BondDataType.BT_INT64, 6),
                        r.WriteInt64(i.numberToBondInt64(Date.now())),
                        r.WriteFieldBegin(n.BondDataType.BT_LIST, 8),
                        r.WriteContainerBegin(
                          A.length,
                          n.BondDataType.BT_STRUCT
                        );
                      for (var o = 0; o < A.length; ++o) r.WriteBlob(A[o]);
                      r.WriteStructEnd(!1);
                    }),
                    r.WriteStructEnd(!1),
                    A.GetBuffer()
                  );
                }),
                (e.getEventBlob = function (e) {
                  var t = new n.IO.MemoryStream(),
                    A = new n.CompactBinaryProtocolWriter(t);
                  A.WriteFieldBegin(n.BondDataType.BT_STRING, 1),
                    A.WriteString(e.id),
                    A.WriteFieldBegin(n.BondDataType.BT_INT64, 3),
                    A.WriteInt64(i.numberToBondInt64(e.timestamp)),
                    A.WriteFieldBegin(n.BondDataType.BT_STRING, 5),
                    A.WriteString(e.type),
                    A.WriteFieldBegin(n.BondDataType.BT_STRING, 6),
                    A.WriteString(e.name);
                  var o = [],
                    a = [];
                  return (
                    Object.keys(e.properties).forEach(function (t) {
                      e.properties[t].pii === r.AWTPiiKind.NotSet
                        ? o.push(t)
                        : a.push(t);
                    }),
                    o.length &&
                      (A.WriteFieldBegin(n.BondDataType.BT_MAP, 13),
                      A.WriteMapContainerBegin(
                        o.length,
                        n.BondDataType.BT_STRING,
                        n.BondDataType.BT_STRING
                      ),
                      o.forEach(function (t) {
                        A.WriteString(t), A.WriteString(e.properties[t].value);
                      })),
                    a.length &&
                      (A.WriteFieldBegin(n.BondDataType.BT_MAP, 30),
                      A.WriteMapContainerBegin(
                        a.length,
                        n.BondDataType.BT_STRING,
                        n.BondDataType.BT_STRUCT
                      ),
                      a.forEach(function (t) {
                        A.WriteString(t),
                          A.WriteFieldBegin(n.BondDataType.BT_INT32, 1),
                          A.WriteInt32(1),
                          A.WriteFieldBegin(n.BondDataType.BT_INT32, 2),
                          A.WriteInt32(e.properties[t].pii),
                          A.WriteFieldBegin(n.BondDataType.BT_STRING, 3),
                          A.WriteString(e.properties[t].value),
                          A.WriteStructEnd(!1);
                      })),
                    A.WriteStructEnd(!1),
                    t.GetBuffer()
                  );
                }),
                (e.base64Encode = function (e) {
                  return n.Encoding.Base64.GetString(e);
                }),
                e
              );
            })();
          t.default = o;
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = A(0),
            r = /[xy]/g;
          (t.numberToBondInt64 = function (e) {
            var t = new n.Int64("0");
            return (
              (t.low = 4294967295 & e), (t.high = Math.floor(e / 4294967296)), t
            );
          }),
            (t.newGuid = function () {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                r,
                function (e) {
                  var t = (16 * Math.random()) | 0;
                  return ("x" === e ? t : (3 & t) | 8).toString(16);
                }
              );
            }),
            (t.isPii = function (e) {
              return !isNaN(e) && null !== e && e >= 0 && e <= 13;
            });
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Version = "1.2.2"),
            (t.FullVersionString = "AWT-Web-CJS-" + t.Version);
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = A(1);
          t.AWTPiiKind = n.AWTPiiKind;
          var r = A(13);
          (t.AWT = r.default),
            (t.AWT_COLLECTOR_URL_UNITED_STATES =
              "https://us.pipe.aria.microsoft.com/Collector/3.0/"),
            (t.AWT_COLLECTOR_URL_GERMANY =
              "https://de.pipe.aria.microsoft.com/Collector/3.0/"),
            (t.AWT_COLLECTOR_URL_JAPAN =
              "https://jp.pipe.aria.microsoft.com/Collector/3.0/"),
            (t.AWT_COLLECTOR_URL_AUSTRALIA =
              "https://au.pipe.aria.microsoft.com/Collector/3.0/"),
            (t.AWT_COLLECTOR_URL_EUROPE =
              "https://eu.pipe.aria.microsoft.com/Collector/3.0/");
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (function (e) {
              (e[(e.BT_STOP = 0)] = "BT_STOP"),
                (e[(e.BT_STOP_BASE = 1)] = "BT_STOP_BASE"),
                (e[(e.BT_UINT8 = 3)] = "BT_UINT8"),
                (e[(e.BT_UINT32 = 5)] = "BT_UINT32"),
                (e[(e.BT_UINT64 = 6)] = "BT_UINT64"),
                (e[(e.BT_STRING = 9)] = "BT_STRING"),
                (e[(e.BT_STRUCT = 10)] = "BT_STRUCT"),
                (e[(e.BT_LIST = 11)] = "BT_LIST"),
                (e[(e.BT_MAP = 13)] = "BT_MAP"),
                (e[(e.BT_INT32 = 16)] = "BT_INT32"),
                (e[(e.BT_INT64 = 17)] = "BT_INT64"),
                (e[(e.BT_UNAVAILABLE = 127)] = "BT_UNAVAILABLE");
            })(t.BondDataType || (t.BondDataType = {}));
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = A(0),
            r = (function () {
              function e() {}
              return (
                (e.GetBytes = function (e) {
                  for (var t = [], A = 0; A < e.length; ++A) {
                    var n = e.charCodeAt(A);
                    n < 128
                      ? t.push(n)
                      : n < 2048
                      ? t.push(192 | (n >> 6), 128 | (63 & n))
                      : n < 55296 || n >= 57344
                      ? t.push(
                          224 | (n >> 12),
                          128 | ((n >> 6) & 63),
                          128 | (63 & n)
                        )
                      : ((n =
                          65536 +
                          (((1023 & n) << 10) | (1023 & e.charCodeAt(++A)))),
                        t.push(
                          240 | (n >> 18),
                          128 | ((n >> 12) & 63),
                          128 | ((n >> 6) & 63),
                          128 | (63 & n)
                        ));
                  }
                  return t;
                }),
                e
              );
            })();
          t.Utf8 = r;
          var i = (function () {
            function e() {}
            return (
              (e.GetString = function (e) {
                for (
                  var t,
                    A =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    n = [],
                    r = e.length % 3,
                    i = 0,
                    o = e.length - r;
                  i < o;
                  i += 3
                ) {
                  var a = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2];
                  n.push(
                    [
                      A.charAt(((t = a) >> 18) & 63),
                      A.charAt((t >> 12) & 63),
                      A.charAt((t >> 6) & 63),
                      A.charAt(63 & t),
                    ].join("")
                  );
                }
                switch (r) {
                  case 1:
                    (a = e[e.length - 1]),
                      n.push(A.charAt(a >> 2)),
                      n.push(A.charAt((a << 4) & 63)),
                      n.push("==");
                    break;
                  case 2:
                    var s = (e[e.length - 2] << 8) + e[e.length - 1];
                    n.push(A.charAt(s >> 10)),
                      n.push(A.charAt((s >> 4) & 63)),
                      n.push(A.charAt((s << 2) & 63)),
                      n.push("=");
                }
                return n.join("");
              }),
              e
            );
          })();
          t.Base64 = i;
          var o = (function () {
            function e() {}
            return (
              (e.GetBytes = function (e) {
                for (var t = []; 4294967168 & e; )
                  t.push((127 & e) | 128), (e >>>= 7);
                return t.push(127 & e), t;
              }),
              e
            );
          })();
          t.Varint = o;
          var a = (function () {
            function e() {}
            return (
              (e.GetBytes = function (e) {
                for (var t = e.low, A = e.high, n = []; A || 4294967168 & t; )
                  n.push((127 & t) | 128),
                    (t = ((127 & A) << 25) | (t >>> 7)),
                    (A >>>= 7);
                return n.push(127 & t), n;
              }),
              e
            );
          })();
          t.Varint64 = a;
          var s = (function () {
            function e() {}
            return (
              (e.EncodeZigzag32 = function (e) {
                return ((e = n.Number.ToInt32(e)) << 1) ^ (e >> 31);
              }),
              (e.EncodeZigzag64 = function (e) {
                var t = e.low,
                  A = e.high,
                  r = (A << 1) | (t >>> 31),
                  i = t << 1;
                2147483648 & A && ((r = ~r), (i = ~i));
                var o = new n.UInt64("0");
                return (o.low = i), (o.high = r), o;
              }),
              e
            );
          })();
          t.Zigzag = s;
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = A(0),
            r = (function () {
              function e() {
                this._buffer = [];
              }
              return (
                (e.prototype.WriteByte = function (e) {
                  this._buffer.push(n.Number.ToByte(e));
                }),
                (e.prototype.Write = function (e, t, A) {
                  for (; A--; ) this.WriteByte(e[t++]);
                }),
                (e.prototype.GetBuffer = function () {
                  return this._buffer;
                }),
                e
              );
            })();
          t.MemoryStream = r;
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = A(6);
          t.BondDataType = n.BondDataType;
          var r = A(7);
          t.Encoding = r;
          var i = A(8);
          t.IO = i;
          var o = A(0);
          (t.Int64 = o.Int64), (t.UInt64 = o.UInt64), (t.Number = o.Number);
          var a = (function () {
            function e(e) {
              this._stream = e;
            }
            return (
              (e.prototype.WriteBlob = function (e) {
                this._stream.Write(e, 0, e.length);
              }),
              (e.prototype.WriteContainerBegin = function (e, t) {
                this.WriteUInt8(t), this.WriteUInt32(e);
              }),
              (e.prototype.WriteMapContainerBegin = function (e, t, A) {
                this.WriteUInt8(t), this.WriteUInt8(A), this.WriteUInt32(e);
              }),
              (e.prototype.WriteFieldBegin = function (e, t) {
                t <= 5
                  ? this._stream.WriteByte(e | (t << 5))
                  : t <= 255
                  ? (this._stream.WriteByte(192 | e), this._stream.WriteByte(t))
                  : (this._stream.WriteByte(224 | e),
                    this._stream.WriteByte(t),
                    this._stream.WriteByte(t >> 8));
              }),
              (e.prototype.WriteInt32 = function (e) {
                (e = r.Zigzag.EncodeZigzag32(e)), this.WriteUInt32(e);
              }),
              (e.prototype.WriteInt64 = function (e) {
                this.WriteUInt64(r.Zigzag.EncodeZigzag64(e));
              }),
              (e.prototype.WriteString = function (e) {
                if ("" === e) this.WriteUInt32(0);
                else {
                  var t = r.Utf8.GetBytes(e);
                  this.WriteUInt32(t.length),
                    this._stream.Write(t, 0, t.length);
                }
              }),
              (e.prototype.WriteStructEnd = function (e) {
                this.WriteUInt8(
                  e ? n.BondDataType.BT_STOP_BASE : n.BondDataType.BT_STOP
                );
              }),
              (e.prototype.WriteUInt32 = function (e) {
                var t = r.Varint.GetBytes(o.Number.ToUInt32(e));
                this._stream.Write(t, 0, t.length);
              }),
              (e.prototype.WriteUInt64 = function (e) {
                var t = r.Varint64.GetBytes(e);
                this._stream.Write(t, 0, t.length);
              }),
              (e.prototype.WriteUInt8 = function (e) {
                this._stream.WriteByte(o.Number.ToUInt8(e));
              }),
              e
            );
          })();
          t.CompactBinaryProtocolWriter = a;
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = (function () {
            function e() {
              this._killedTokenDictionary = {};
            }
            return (
              (e.prototype.setKillSwitchTenants = function (e, t) {
                var A = this;
                if (e && t)
                  try {
                    var n = e.split(",");
                    if ("this-request-only" === t) return n;
                    var r = 1e3 * parseInt(t, 10);
                    n.forEach(function (e) {
                      A._killedTokenDictionary[e] = Date.now() + r;
                    });
                  } catch (e) {
                    return [];
                  }
                return [];
              }),
              (e.prototype.isTenantKilled = function (e) {
                return (
                  (void 0 !== this._killedTokenDictionary[e] &&
                    this._killedTokenDictionary[e] > Date.now()) ||
                  (delete this._killedTokenDictionary[e], !1)
                );
              }),
              e
            );
          })();
          t.default = n;
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = A(2),
            r = (function () {
              function e(e, t) {
                (this._maxRequestSize = e),
                  (this._outboundQueue = t),
                  (this._currentBatch = {}),
                  (this._currentBatchSize = 0);
              }
              return (
                (e.prototype.addEventToBatch = function (e) {
                  var t = n.default.getEventBlob(e);
                  t.length > this._maxRequestSize ||
                    (this._currentBatchSize + t.length > this._maxRequestSize
                      ? this.flushBatch()
                      : (void 0 === this._currentBatch[e.tenantToken] &&
                          (this._currentBatch[e.tenantToken] = []),
                        this._currentBatch[e.tenantToken].push(t),
                        (this._currentBatchSize += t.length)));
                }),
                (e.prototype.flushBatch = function () {
                  this._currentBatchSize > 0 &&
                    (this._outboundQueue.push(this._currentBatch),
                    (this._currentBatch = {}),
                    (this._currentBatchSize = 0));
                }),
                e
              );
            })();
          t.default = r;
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = (function () {
            function e() {}
            return (
              (e.shouldRetryForStatus = function (e) {
                return !(
                  (e >= 300 && e < 500 && 408 !== e) ||
                  501 === e ||
                  505 === e
                );
              }),
              (e.getMillisToBackoffForRetry = function (e) {
                var t,
                  A = Math.floor(1200 * Math.random()) + 2400;
                return (t = Math.pow(4, e) * A), Math.min(t, 12e4);
              }),
              e
            );
          })();
          t.default = n;
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = A(1),
            r = A(14),
            i = A(3),
            o = A(4),
            a = /^[a-zA-Z0-9]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/,
            s = /\./g,
            u = /^[a-zA-Z0-9](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/,
            c = (function () {
              function e() {}
              return (
                (e.initialize = function (e, t) {
                  if ((void 0 === t && (t = {}), this._isInitialized))
                    throw "Already Initialized";
                  (this._defaultTenantToken = e),
                    this._overrideValuesFromConfig(t),
                    r.default.initialize(this._config),
                    (this._isInitialized = !0);
                }),
                (e.flush = function (e) {
                  this._isInitialized &&
                    !this._isDestroyed &&
                    r.default.flush(e);
                }),
                (e.flushAndTeardown = function () {
                  this._isInitialized &&
                    !this._isDestroyed &&
                    ((this._isDestroyed = !0), r.default.flushAndTeardown());
                }),
                (e.setContext = function (e, t, A) {
                  void 0 === A && (A = "allTkns"),
                    null !== (t = this._sanitizeProperty(e, t)) &&
                      (this._contextProperties[A] ||
                        (this._contextProperties[A] = {}),
                      (this._contextProperties[A][e] = t));
                }),
                (e.logEvent = function (e) {
                  var t = this;
                  if (this._isInitialized) {
                    if (!e.name || !e.properties) return;
                    (e.name = e.name.toLowerCase()), e.name.replace(s, "_");
                    var A = "";
                    if (
                      (e.type
                        ? (e.type.toLowerCase(), (A = "custom."))
                        : (e.type = "custom"),
                      !a.test(e.name) || !a.test(e.type))
                    )
                      return;
                    if (
                      ((e.type = A + e.type),
                      isNaN(e.timestamp) &&
                        (e.timestamp = new Date().getTime()),
                      e.tenantToken ||
                        (e.tenantToken = this._defaultTenantToken),
                      (e.id = i.newGuid()),
                      Object.keys(e.properties).forEach(function (A) {
                        (e.properties[A] = t._sanitizeProperty(
                          A,
                          e.properties[A]
                        )),
                          null === e.properties[A] && delete e.properties[A];
                      }),
                      this._addContextIfAbsent(e, e.tenantToken),
                      this._addContextIfAbsent(e, "allTkns"),
                      0 === Object.keys(e.properties).length)
                    )
                      return;
                    this._setDefaultProperty(
                      e,
                      "EventInfo.InitId",
                      this._getInitId(e.tenantToken)
                    ),
                      this._setDefaultProperty(
                        e,
                        "EventInfo.Sequence",
                        this._getSequenceId(e.tenantToken)
                      ),
                      this._setDefaultProperty(
                        e,
                        "EventInfo.SdkVersion",
                        o.FullVersionString
                      ),
                      this._setDefaultProperty(e, "EventInfo.Name", e.name),
                      this._setDefaultProperty(
                        e,
                        "EventInfo.Time",
                        new Date(e.timestamp).toISOString()
                      ),
                      r.default.sendEvent(e);
                  }
                }),
                (e._overrideValuesFromConfig = function (e) {
                  e.collectorUrl &&
                    (this._config.collectorUrl = e.collectorUrl),
                    e.sendingTimer > 1e3 &&
                      (this._config.sendingTimer = e.sendingTimer);
                }),
                (e._getInitId = function (e) {
                  return (
                    void 0 === this._initIdMap[e] &&
                      (this._initIdMap[e] = i.newGuid()),
                    this._initIdMap[e]
                  );
                }),
                (e._getSequenceId = function (e) {
                  return (
                    void 0 === this._sequenceIdMap[e] &&
                      (this._sequenceIdMap[e] = 0),
                    (++this._sequenceIdMap[e]).toString()
                  );
                }),
                (e._setDefaultProperty = function (e, t, A) {
                  e.properties[t] = { value: A, pii: n.AWTPiiKind.NotSet };
                }),
                (e._addContextIfAbsent = function (e, t) {
                  if (this._contextProperties[t]) {
                    var A = this._contextProperties[t];
                    Object.keys(A).forEach(function (t) {
                      e.properties[t] || (e.properties[t] = A[t]);
                    });
                  }
                }),
                (e._sanitizeProperty = function (e, t) {
                  return (
                    ("string" != typeof t &&
                      "number" != typeof t &&
                      "boolean" != typeof t) ||
                      (t = { value: t }),
                    u.test(e) &&
                    null != t &&
                    null !== t.value &&
                    void 0 !== t.value &&
                    "" !== t.value
                      ? (void 0 === t.pii && (t.pii = n.AWTPiiKind.NotSet),
                        (t.value = t.value.toString()),
                        i.isPii(t.pii) ? t : null)
                      : null
                  );
                }),
                (e._isInitialized = !1),
                (e._isDestroyed = !1),
                (e._contextProperties = {}),
                (e._sequenceIdMap = {}),
                (e._initIdMap = {}),
                (e._config = {
                  collectorUrl:
                    "https://browser.pipe.aria.microsoft.com/Collector/3.0/",
                  sendingTimer: 1e3,
                }),
                e
              );
            })();
          t.default = c;
        },
        function (e, t, A) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = A(11),
            r = A(2),
            i = A(12),
            o = A(10),
            a = A(4),
            s = (function () {
              function e() {}
              return (
                (e.initialize = function (e) {
                  this._inboundQueues.push([]),
                    (this._recordBatcher = new n.default(
                      2936012,
                      this._outboundQueue
                    )),
                    (this._newEventsAllowed = !0),
                    "undefined" == typeof Uint8Array &&
                      (this._urlString += "&content-encoding=base64"),
                    (this._sendingTimer = e.sendingTimer),
                    (this._urlString =
                      e.collectorUrl + this._urlString + "&x-apikey=");
                }),
                (e.sendEvent = function (e) {
                  var t = this;
                  this._newEventsAllowed &&
                    (this._inboundQueues[this._inboundQueues.length - 1].push(
                      e
                    ),
                    !this._running &&
                      this._timeout < 0 &&
                      !this._isCurrentlyFlushing &&
                      (this._timeout = setTimeout(function () {
                        return t._batchAndSendEvents(!1);
                      }, this._sendingTimer)));
                }),
                (e.flushAndTeardown = function () {
                  (this._newEventsAllowed = !1), this._batchAndSendEvents(!0);
                }),
                (e.flush = function (e) {
                  this._inboundQueues.push([]),
                    this._isCurrentlyFlushing
                      ? this._flushQueue.push(e)
                      : ((this._isCurrentlyFlushing = !0), this._flush(e));
                }),
                (e._batchAndSendEvents = function (e) {
                  for (
                    this._running = !0;
                    this._inboundQueues[0].length > 0 &&
                    this._outboundQueue.length < 1;

                  )
                    this._recordBatcher.addEventToBatch(
                      this._inboundQueues[0].pop()
                    );
                  0 === this._outboundQueue.length &&
                    this._recordBatcher.flushBatch(),
                    this._sendRequest(this._outboundQueue.pop(), 0, e);
                }),
                (e._retryRequestIfNeeded = function (e, t, A, n, r) {
                  var o = this,
                    a = !0;
                  e &&
                    void 0 !== e.status &&
                    (this._killSwitch
                      .setKillSwitchTenants(
                        e.getResponseHeader("kill-tokens"),
                        e.getResponseHeader("kill-duration-seconds")
                      )
                      .forEach(function (e) {
                        delete t[e], A--;
                      }),
                    (!i.default.shouldRetryForStatus(e.status) || A <= 0) &&
                      (a = !1)),
                    a && r < 4
                      ? setTimeout(function () {
                          return o._sendRequest(t, r + 1, !1);
                        }, i.default.getMillisToBackoffForRetry(r))
                      : this._handleRequestFinished(null);
                }),
                (e._sendRequest = function (e, t, A) {
                  var n = this;
                  try {
                    var i = new XMLHttpRequest(),
                      o = 0,
                      a = "";
                    if (
                      (Object.keys(e).forEach(function (t) {
                        n._killSwitch.isTenantKilled(t)
                          ? delete e[t]
                          : (a.length > 0 && (a += ","), (a += t), o++);
                      }),
                      i.open("POST", this._urlString + a, !A),
                      A ||
                        ((i.ontimeout = function () {
                          n._retryRequestIfNeeded(i, e, o, a, t);
                        }),
                        (i.onerror = function () {
                          n._retryRequestIfNeeded(i, e, o, a, t);
                        }),
                        (i.onload = function () {
                          n._handleRequestFinished(i);
                        })),
                      o > 0)
                    ) {
                      var s = r.default.getPayloadBlob(e, o);
                      "undefined" == typeof Uint8Array
                        ? i.send(r.default.base64Encode(s))
                        : i.send(new Uint8Array(s));
                    } else A && this._handleRequestFinished(null);
                  } catch (e) {
                    this._handleRequestFinished(null);
                  }
                }),
                (e._handleRequestFinished = function (e) {
                  var t = this;
                  e &&
                    this._killSwitch.setKillSwitchTenants(
                      e.getResponseHeader("kill-tokens"),
                      e.getResponseHeader("kill-duration-seconds")
                    ),
                    this._inboundQueues[0].length > 0
                      ? (this._timeout = setTimeout(function () {
                          return t._batchAndSendEvents(!1);
                        }, this._sendingTimer))
                      : ((this._timeout = -1), (this._running = !1));
                }),
                (e._flush = function (e) {
                  var t = this;
                  this._running ||
                    (this._timeout > -1 &&
                      (clearTimeout(this._timeout), (this._timeout = -1)),
                    this._inboundQueues[0].length > 0 &&
                      this._batchAndSendEvents(!1)),
                    this._checkPrimaryInboundQueueEmpty(function () {
                      t._inboundQueues.shift(),
                        null != e && e(),
                        t._flushQueue.length > 0
                          ? setTimeout(function () {
                              return t._flush(t._flushQueue.shift());
                            }, t._sendingTimer)
                          : ((t._isCurrentlyFlushing = !1),
                            t._inboundQueues[0].length > 0 &&
                              (t._timeout = setTimeout(function () {
                                return t._batchAndSendEvents(!1);
                              }, t._sendingTimer)));
                    });
                }),
                (e._checkPrimaryInboundQueueEmpty = function (e) {
                  var t = this;
                  0 === this._inboundQueues[0].length
                    ? this._checkOutboundQueueEmptyAndSent(e)
                    : setTimeout(function () {
                        return t._checkPrimaryInboundQueueEmpty(e);
                      }, 250);
                }),
                (e._checkOutboundQueueEmptyAndSent = function (e) {
                  var t = this;
                  this._running
                    ? setTimeout(function () {
                        return t._checkOutboundQueueEmptyAndSent(e);
                      }, 250)
                    : e();
                }),
                (e._outboundQueue = []),
                (e._inboundQueues = []),
                (e._newEventsAllowed = !1),
                (e._killSwitch = new o.default()),
                (e._isCurrentlyFlushing = !1),
                (e._flushQueue = []),
                (e._running = !1),
                (e._timeout = -1),
                (e._urlString =
                  "?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version=" +
                  a.FullVersionString),
                e
              );
            })();
          t.default = s;
        },
        function (e, t, A) {
          e.exports = A(5);
        },
      ]);
    }),
      (e.exports = n());
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.AnnotationState = void 0),
      (function (e) {
        (e[(e.Undefined = 0)] = "Undefined"),
          (e[(e.Created = 10)] = "Created"),
          (e[(e.Sent = 20)] = "Sent"),
          (e[(e.Duplicated = 30)] = "Duplicated"),
          (e[(e.Seen = 40)] = "Seen"),
          (e[(e.Tried = 50)] = "Tried"),
          (e[(e.Kept = 60)] = "Kept"),
          (e[(e.Rejected = 70)] = "Rejected");
      })(t.AnnotationState || (t.AnnotationState = {}));
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.GridConstants = t.OpenType = t.BlobRefType = void 0),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.HttpsGetDownloadUrl = 1)] = "HttpsGetDownloadUrl");
      })(t.BlobRefType || (t.BlobRefType = {})),
      (function (e) {
        (e[(e.NewDocument = 0)] = "NewDocument"),
          (e[(e.EditDocument = 1)] = "EditDocument"),
          (e[(e.ViewOnlyDocument = 2)] = "ViewOnlyDocument");
      })(t.OpenType || (t.OpenType = {}));
    var n = (function () {
      function e() {}
      return (
        (e.lowerIndexBound = 1),
        (e.maxNumberOfRows = 1048576),
        (e.maxNumberOfColumns = 16384),
        (e.firstColumnName = "A"),
        (e.lastColumnName = "XFD"),
        e
      );
    })();
    t.GridConstants = n;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.BinaryClassificationAnnotation = t.Annotation = void 0);
    var n = A(27),
      r = (function () {
        function e(t) {
          n.SchemaObject.assign(e, this, t);
        }
        return (
          (e.getTypeName = function () {
            return "AugLoop_Core_Annotation";
          }),
          (e.getBaseTypes = function () {
            return [];
          }),
          (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
          e
        );
      })();
    t.Annotation = r;
    var i = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_BinaryClassificationAnnotation";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_Annotation"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.BinaryClassificationAnnotation = i;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.SignalOperation =
        t.MicroSyncOperation =
        t.DeltaUpdateOperation =
        t.VisibilityOperation =
        t.FocusOperation =
        t.PurgeOperation =
        t.DeleteOperation =
        t.UpdateOperation =
        t.UpdateAnnotationMetaDataOperation =
        t.MoveOperation =
        t.AddOperation =
        t.OperationWithSiblingContext =
        t.Operation =
        t.ItemDelta =
          void 0);
    var n = A(27),
      r = (function () {
        function e(t) {
          n.SchemaObject.assign(e, this, t);
        }
        return (
          (e.getTypeName = function () {
            return "AugLoop_Core_ItemDelta";
          }),
          (e.getBaseTypes = function () {
            return [];
          }),
          (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
          e
        );
      })();
    t.ItemDelta = r;
    var i = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_Operation";
        }),
        (e.getBaseTypes = function () {
          return [];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.Operation = i;
    var o = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_OperationWithSiblingContext";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_Operation"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.OperationWithSiblingContext = o;
    var a = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_AddOperation";
        }),
        (e.getBaseTypes = function () {
          return [
            "AugLoop_Core_OperationWithSiblingContext",
            "AugLoop_Core_Operation",
          ];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.AddOperation = a;
    var s = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_MoveOperation";
        }),
        (e.getBaseTypes = function () {
          return [
            "AugLoop_Core_OperationWithSiblingContext",
            "AugLoop_Core_Operation",
          ];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.MoveOperation = s;
    var u = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_UpdateAnnotationMetaDataOperation";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_Operation"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.UpdateAnnotationMetaDataOperation = u;
    var c = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_UpdateOperation";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_Operation"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.UpdateOperation = c;
    var l = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_DeleteOperation";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_Operation"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.DeleteOperation = l;
    var d = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_PurgeOperation";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_Operation"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.PurgeOperation = d;
    var g = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_FocusOperation";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_Operation"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.FocusOperation = g;
    var p = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_VisibilityOperation";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_Operation"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.VisibilityOperation = p;
    var h = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_DeltaUpdateOperation";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_Operation"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.DeltaUpdateOperation = h;
    var f = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_MicroSyncOperation";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_Operation"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.MicroSyncOperation = f;
    var B = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Signals_SignalOperation";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_Operation"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.SignalOperation = B;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Signal = void 0);
    var n = A(27),
      r = (function () {
        function e(t) {
          n.SchemaObject.assign(e, this, t);
        }
        return (
          (e.getTypeName = function () {
            return "AugLoop_Signals_Signal";
          }),
          (e.getBaseTypes = function () {
            return [];
          }),
          (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
          e
        );
      })();
    t.Signal = r;
  },
  function (e, t, A) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.DynamicContext =
        t.GridNeighborhoodContext =
        t.GridCell =
        t.Document =
        t.Session =
        t.TileGroup =
        t.Binary =
        t.Blob =
          void 0);
    var n = A(27),
      r = (function () {
        function e(t) {
          n.SchemaObject.assign(e, this, t);
        }
        return (
          (e.getTypeName = function () {
            return "AugLoop_Core_Blob";
          }),
          (e.getBaseTypes = function () {
            return [];
          }),
          (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
          e
        );
      })();
    t.Blob = r;
    var i = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_Binary";
        }),
        (e.getBaseTypes = function () {
          return [];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.Binary = i;
    var o = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_TileGroup";
        }),
        (e.getBaseTypes = function () {
          return [];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.TileGroup = o;
    var a = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_Session";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_TileGroup"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.Session = a;
    var s = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_Document";
        }),
        (e.getBaseTypes = function () {
          return ["AugLoop_Core_TileGroup"];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.Document = s;
    var u = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_GridCell";
        }),
        (e.getBaseTypes = function () {
          return [];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.GridCell = u;
    var c = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_GridNeighborhoodContext";
        }),
        (e.getBaseTypes = function () {
          return [];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.GridNeighborhoodContext = c;
    var l = (function () {
      function e(t) {
        n.SchemaObject.assign(e, this, t);
      }
      return (
        (e.getTypeName = function () {
          return "AugLoop_Core_DynamicContext";
        }),
        (e.getBaseTypes = function () {
          return [];
        }),
        (e.H_ = { T_: e.getTypeName(), B_: e.getBaseTypes() }),
        e
      );
    })();
    t.DynamicContext = l;
  },
  function (e, t, A) {
    "use strict";
    A.r(t),
      A.d(t, "getEngineStartPromise", function () {
        return Oe;
      }),
      A.d(t, "resetEngine", function () {
        return Me;
      }),
      A.d(t, "setEngineStartPromise", function () {
        return _e;
      }),
      A.d(t, "start", function () {
        return Le;
      }),
      A.d(t, "startInternal", function () {
        return De;
      }),
      A.d(t, "stop", function () {
        return Re;
      }),
      A.d(t, "initialize", function () {
        return dt;
      }),
      A.d(t, "showSurvey", function () {
        return gt;
      }),
      A.d(t, "showCustomSurvey", function () {
        return pt;
      }),
      A.d(t, "reset", function () {
        return ht;
      }),
      A.d(t, "getSettingIdMap", function () {
        return ft;
      });
    var n = A(24),
      r = A(1),
      i = A(8),
      o = A(10),
      a = A(6),
      s = A(9),
      u = A(7),
      c = A(28),
      l = A(2),
      d = A(13),
      g =
        ("undefined" != typeof globalThis && globalThis) ||
        ("undefined" != typeof self && self) ||
        (void 0 !== g && g),
      p = "URLSearchParams" in g,
      h = "Symbol" in g && "iterator" in Symbol,
      f =
        "FileReader" in g &&
        "Blob" in g &&
        (function () {
          try {
            return new Blob(), !0;
          } catch (e) {
            return !1;
          }
        })(),
      B = "FormData" in g,
      m = "ArrayBuffer" in g;
    if (m)
      var v = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]",
        ],
        C =
          ArrayBuffer.isView ||
          function (e) {
            return e && v.indexOf(Object.prototype.toString.call(e)) > -1;
          };
    function w(e) {
      if (
        ("string" != typeof e && (e = String(e)),
        /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
      )
        throw new TypeError("Invalid character in header field name");
      return e.toLowerCase();
    }
    function y(e) {
      return "string" != typeof e && (e = String(e)), e;
    }
    function E(e) {
      var t = {
        next: function () {
          var t = e.shift();
          return { done: void 0 === t, value: t };
        },
      };
      return (
        h &&
          (t[Symbol.iterator] = function () {
            return t;
          }),
        t
      );
    }
    function F(e) {
      (this.map = {}),
        e instanceof F
          ? e.forEach(function (e, t) {
              this.append(t, e);
            }, this)
          : Array.isArray(e)
          ? e.forEach(function (e) {
              this.append(e[0], e[1]);
            }, this)
          : e &&
            Object.getOwnPropertyNames(e).forEach(function (t) {
              this.append(t, e[t]);
            }, this);
    }
    function U(e) {
      if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
      e.bodyUsed = !0;
    }
    function S(e) {
      return new Promise(function (t, A) {
        (e.onload = function () {
          t(e.result);
        }),
          (e.onerror = function () {
            A(e.error);
          });
      });
    }
    function Q(e) {
      var t = new FileReader(),
        A = S(t);
      return t.readAsArrayBuffer(e), A;
    }
    function T(e) {
      if (e.slice) return e.slice(0);
      var t = new Uint8Array(e.byteLength);
      return t.set(new Uint8Array(e)), t.buffer;
    }
    function b() {
      return (
        (this.bodyUsed = !1),
        (this._initBody = function (e) {
          var t;
          (this.bodyUsed = this.bodyUsed),
            (this._bodyInit = e),
            e
              ? "string" == typeof e
                ? (this._bodyText = e)
                : f && Blob.prototype.isPrototypeOf(e)
                ? (this._bodyBlob = e)
                : B && FormData.prototype.isPrototypeOf(e)
                ? (this._bodyFormData = e)
                : p && URLSearchParams.prototype.isPrototypeOf(e)
                ? (this._bodyText = e.toString())
                : m && f && (t = e) && DataView.prototype.isPrototypeOf(t)
                ? ((this._bodyArrayBuffer = T(e.buffer)),
                  (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                : m && (ArrayBuffer.prototype.isPrototypeOf(e) || C(e))
                ? (this._bodyArrayBuffer = T(e))
                : (this._bodyText = e = Object.prototype.toString.call(e))
              : (this._bodyText = ""),
            this.headers.get("content-type") ||
              ("string" == typeof e
                ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                : this._bodyBlob && this._bodyBlob.type
                ? this.headers.set("content-type", this._bodyBlob.type)
                : p &&
                  URLSearchParams.prototype.isPrototypeOf(e) &&
                  this.headers.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8"
                  ));
        }),
        f &&
          ((this.blob = function () {
            var e = U(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }),
          (this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
              var e = U(this);
              return (
                e ||
                (ArrayBuffer.isView(this._bodyArrayBuffer)
                  ? Promise.resolve(
                      this._bodyArrayBuffer.buffer.slice(
                        this._bodyArrayBuffer.byteOffset,
                        this._bodyArrayBuffer.byteOffset +
                          this._bodyArrayBuffer.byteLength
                      )
                    )
                  : Promise.resolve(this._bodyArrayBuffer))
              );
            }
            return this.blob().then(Q);
          })),
        (this.text = function () {
          var e,
            t,
            A,
            n = U(this);
          if (n) return n;
          if (this._bodyBlob)
            return (
              (e = this._bodyBlob),
              (t = new FileReader()),
              (A = S(t)),
              t.readAsText(e),
              A
            );
          if (this._bodyArrayBuffer)
            return Promise.resolve(
              (function (e) {
                for (
                  var t = new Uint8Array(e), A = new Array(t.length), n = 0;
                  n < t.length;
                  n++
                )
                  A[n] = String.fromCharCode(t[n]);
                return A.join("");
              })(this._bodyArrayBuffer)
            );
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }),
        B &&
          (this.formData = function () {
            return this.text().then(H);
          }),
        (this.json = function () {
          return this.text().then(JSON.parse);
        }),
        this
      );
    }
    (F.prototype.append = function (e, t) {
      (e = w(e)), (t = y(t));
      var A = this.map[e];
      this.map[e] = A ? A + ", " + t : t;
    }),
      (F.prototype.delete = function (e) {
        delete this.map[w(e)];
      }),
      (F.prototype.get = function (e) {
        return (e = w(e)), this.has(e) ? this.map[e] : null;
      }),
      (F.prototype.has = function (e) {
        return this.map.hasOwnProperty(w(e));
      }),
      (F.prototype.set = function (e, t) {
        this.map[w(e)] = y(t);
      }),
      (F.prototype.forEach = function (e, t) {
        for (var A in this.map)
          this.map.hasOwnProperty(A) && e.call(t, this.map[A], A, this);
      }),
      (F.prototype.keys = function () {
        var e = [];
        return (
          this.forEach(function (t, A) {
            e.push(A);
          }),
          E(e)
        );
      }),
      (F.prototype.values = function () {
        var e = [];
        return (
          this.forEach(function (t) {
            e.push(t);
          }),
          E(e)
        );
      }),
      (F.prototype.entries = function () {
        var e = [];
        return (
          this.forEach(function (t, A) {
            e.push([A, t]);
          }),
          E(e)
        );
      }),
      h && (F.prototype[Symbol.iterator] = F.prototype.entries);
    var I = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function N(e, t) {
      if (!(this instanceof N))
        throw new TypeError(
          'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
        );
      var A,
        n,
        r = (t = t || {}).body;
      if (e instanceof N) {
        if (e.bodyUsed) throw new TypeError("Already read");
        (this.url = e.url),
          (this.credentials = e.credentials),
          t.headers || (this.headers = new F(e.headers)),
          (this.method = e.method),
          (this.mode = e.mode),
          (this.signal = e.signal),
          r || null == e._bodyInit || ((r = e._bodyInit), (e.bodyUsed = !0));
      } else this.url = String(e);
      if (
        ((this.credentials =
          t.credentials || this.credentials || "same-origin"),
        (!t.headers && this.headers) || (this.headers = new F(t.headers)),
        (this.method =
          ((A = t.method || this.method || "GET"),
          (n = A.toUpperCase()),
          I.indexOf(n) > -1 ? n : A)),
        (this.mode = t.mode || this.mode || null),
        (this.signal = t.signal || this.signal),
        (this.referrer = null),
        ("GET" === this.method || "HEAD" === this.method) && r)
      )
        throw new TypeError("Body not allowed for GET or HEAD requests");
      if (
        (this._initBody(r),
        !(
          ("GET" !== this.method && "HEAD" !== this.method) ||
          ("no-store" !== t.cache && "no-cache" !== t.cache)
        ))
      ) {
        var i = /([?&])_=[^&]*/;
        if (i.test(this.url))
          this.url = this.url.replace(i, "$1_=" + new Date().getTime());
        else {
          this.url +=
            (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
        }
      }
    }
    function H(e) {
      var t = new FormData();
      return (
        e
          .trim()
          .split("&")
          .forEach(function (e) {
            if (e) {
              var A = e.split("="),
                n = A.shift().replace(/\+/g, " "),
                r = A.join("=").replace(/\+/g, " ");
              t.append(decodeURIComponent(n), decodeURIComponent(r));
            }
          }),
        t
      );
    }
    function _(e, t) {
      if (!(this instanceof _))
        throw new TypeError(
          'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
        );
      t || (t = {}),
        (this.type = "default"),
        (this.status = void 0 === t.status ? 200 : t.status),
        (this.ok = this.status >= 200 && this.status < 300),
        (this.statusText = "statusText" in t ? t.statusText : ""),
        (this.headers = new F(t.headers)),
        (this.url = t.url || ""),
        this._initBody(e);
    }
    (N.prototype.clone = function () {
      return new N(this, { body: this._bodyInit });
    }),
      b.call(N.prototype),
      b.call(_.prototype),
      (_.prototype.clone = function () {
        return new _(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new F(this.headers),
          url: this.url,
        });
      }),
      (_.error = function () {
        var e = new _(null, { status: 0, statusText: "" });
        return (e.type = "error"), e;
      });
    var O = [301, 302, 303, 307, 308];
    _.redirect = function (e, t) {
      if (-1 === O.indexOf(t)) throw new RangeError("Invalid status code");
      return new _(null, { status: t, headers: { location: e } });
    };
    var D = g.DOMException;
    try {
      new D();
    } catch (e) {
      ((D = function (e, t) {
        (this.message = e), (this.name = t);
        var A = Error(e);
        this.stack = A.stack;
      }).prototype = Object.create(Error.prototype)),
        (D.prototype.constructor = D);
    }
    function L(e, t) {
      return new Promise(function (A, n) {
        var r = new N(e, t);
        if (r.signal && r.signal.aborted)
          return n(new D("Aborted", "AbortError"));
        var i = new XMLHttpRequest();
        function o() {
          i.abort();
        }
        (i.onload = function () {
          var e,
            t,
            n = {
              status: i.status,
              statusText: i.statusText,
              headers:
                ((e = i.getAllResponseHeaders() || ""),
                (t = new F()),
                e
                  .replace(/\r?\n[\t ]+/g, " ")
                  .split("\r")
                  .map(function (e) {
                    return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e;
                  })
                  .forEach(function (e) {
                    var A = e.split(":"),
                      n = A.shift().trim();
                    if (n) {
                      var r = A.join(":").trim();
                      t.append(n, r);
                    }
                  }),
                t),
            };
          n.url =
            "responseURL" in i ? i.responseURL : n.headers.get("X-Request-URL");
          var r = "response" in i ? i.response : i.responseText;
          setTimeout(function () {
            A(new _(r, n));
          }, 0);
        }),
          (i.onerror = function () {
            setTimeout(function () {
              n(new TypeError("Network request failed"));
            }, 0);
          }),
          (i.ontimeout = function () {
            setTimeout(function () {
              n(new TypeError("Network request failed"));
            }, 0);
          }),
          (i.onabort = function () {
            setTimeout(function () {
              n(new D("Aborted", "AbortError"));
            }, 0);
          }),
          i.open(
            r.method,
            (function (e) {
              try {
                return "" === e && g.location.href ? g.location.href : e;
              } catch (t) {
                return e;
              }
            })(r.url),
            !0
          ),
          "include" === r.credentials
            ? (i.withCredentials = !0)
            : "omit" === r.credentials && (i.withCredentials = !1),
          "responseType" in i &&
            (f
              ? (i.responseType = "blob")
              : m &&
                r.headers.get("Content-Type") &&
                -1 !==
                  r.headers
                    .get("Content-Type")
                    .indexOf("application/octet-stream") &&
                (i.responseType = "arraybuffer")),
          !t || "object" != typeof t.headers || t.headers instanceof F
            ? r.headers.forEach(function (e, t) {
                i.setRequestHeader(t, e);
              })
            : Object.getOwnPropertyNames(t.headers).forEach(function (e) {
                i.setRequestHeader(e, y(t.headers[e]));
              }),
          r.signal &&
            (r.signal.addEventListener("abort", o),
            (i.onreadystatechange = function () {
              4 === i.readyState && r.signal.removeEventListener("abort", o);
            })),
          i.send(void 0 === r._bodyInit ? null : r._bodyInit);
      });
    }
    (L.polyfill = !0),
      g.fetch ||
        ((g.fetch = L), (g.Headers = F), (g.Request = N), (g.Response = _));
    var R = A(5),
      M = R.j,
      K = (function () {
        function e(e) {
          this.sessionId = e;
        }
        return (
          (e.prototype.sendGetRequest = function (e, t, A) {
            return Object(a.b)(this, void 0, void 0, function () {
              var n;
              return Object(a.c)(this, function (r) {
                return (
                  (n = { method: "GET", headers: this.createHeaders(t) }),
                  [2, A ? this.timeoutFetch(e, n) : fetch(e, n)]
                );
              });
            });
          }),
          (e.prototype.sendPostRequest = function (e, t, A, n) {
            return Object(a.b)(this, void 0, void 0, function () {
              var r;
              return Object(a.c)(this, function (i) {
                return (
                  (r = {
                    method: "POST",
                    headers: this.createHeaders(A),
                    body: t,
                  }),
                  [2, n ? this.timeoutFetch(e, r) : fetch(e, r)]
                );
              });
            });
          }),
          (e.prototype.timeoutFetch = function (e, t) {
            return (
              void 0 === t && (t = {}),
              new Promise(function (A, n) {
                fetch(e, t).then(A, n),
                  setTimeout(function () {
                    return n(new Error("Service request timed out"));
                  }, 5e3);
              })
            );
          }),
          (e.prototype.createHeaders = function (e) {
            var t = "undefined" != typeof Headers && new Headers();
            return (
              t &&
                (M(e) || t.append("Authorization", "Bearer " + e),
                t.append("X-CorrelationId", R.g()),
                this.sessionId && t.append("X-UserSessionId", this.sessionId)),
              t
            );
          }),
          e
        );
      })();
    function P(e, t) {
      void 0 === t && (t = !0);
      var A = "";
      for (var n in e || [])
        if (e.hasOwnProperty(n)) {
          var r = e[n];
          if (null != r && "object" != typeof r)
            A += (A ? "&" : "") + (n + "=" + (t ? encodeURIComponent(r) : r));
        }
      return A;
    }
    var x = A(31),
      k = A(14),
      V = A(48);
    function G(e) {
      return new Promise(function (t) {
        setTimeout(t, e);
      });
    }
    function z(e, t) {
      var A = e && e[t];
      return A || Object.getOwnPropertyDescriptor(e, t) ? A : void 0;
    }
    function J(e, t) {
      if (!e) return Promise.resolve(null);
      var A = z(e, t);
      return A
        ? Promise.resolve(A)
        : new Promise(function (A, n) {
            var r;
            Object.defineProperty(e, t, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return r;
              },
              set: function (e) {
                A((r = e));
              },
            });
          });
    }
    function X(e, t, A, n) {
      return (
        void 0 === n && (n = 100),
        Object(a.b)(this, void 0, void 0, function () {
          var r;
          return Object(a.c)(this, function (i) {
            switch (i.label) {
              case 0:
                return (r = z(e, t)) || 0 === A ? [2, r] : [4, G(n)];
              case 1:
                return i.sent(), [2, X(e, t, A - 1, n)];
            }
          });
        })
      );
    }
    function W(e, t) {
      return new Promise(function (A, n) {
        e.activateAnnotation(t, {
          callback: function (e) {
            try {
              var n = (e && e.items ? e.items : []).filter(function (e) {
                return t === V.SchemaObject.getTypeNameFor(e.body);
              });
              A(n && n[0] && n[0].body);
            } catch (e) {
              A({ error: e });
            }
          },
        });
      });
    }
    function Y(e) {
      return (
        void 0 === e && (e = 100),
        Object(a.b)(this, void 0, void 0, function () {
          var t, A, n;
          return Object(a.c)(this, function (r) {
            switch (r.label) {
              case 0:
                return (t = z(window, "augLoop"))
                  ? [3, 7]
                  : (A = Object(s.a)("TulipsAugLoopPackageDelayLoad", -1)) > 0
                  ? [4, G(A)]
                  : [3, 2];
              case 1:
                return r.sent(), (t = z(window, "augLoop")), [3, 7];
              case 2:
                return (
                  (n = Object(s.a)("TulipsAugLoopLoadRetryTimes", 5)),
                  [4, X(window, "augLoop", n, e)]
                );
              case 3:
                return (t = r.sent()) ? [3, 5] : [4, J(window, "augLoop")];
              case 4:
                (t = r.sent()), (r.label = 5);
              case 5:
                return e > 0 ? [4, G(e)] : [3, 7];
              case 6:
                r.sent(), (r.label = 7);
              case 7:
                return [2, t];
            }
          });
        })
      );
    }
    function j(e, t, A) {
      return (
        void 0 === A && (A = 100),
        Object(a.b)(this, void 0, void 0, function () {
          var n, r, i;
          return Object(a.c)(this, function (o) {
            switch (o.label) {
              case 0:
                return (r = t) ? [4, t()] : [3, 2];
              case 1:
                (r = o.sent()), (o.label = 2);
              case 2:
                return (n = r) ? [3, 5] : [4, Y(A)];
              case 3:
                if (!o.sent()) throw new Error("Unable to get AL runtime");
                if (
                  !(i =
                    window.augLoop.ALFactoryGlobal.getAugLoopRuntimeManager().getSession())
                )
                  throw new Error("Unable to get AL session promise");
                return [4, i];
              case 4:
                if (!(n = o.sent()))
                  throw new Error("Unable to get AL session");
                o.label = 5;
              case 5:
                return [2, W(n, e)];
            }
          });
        })
      );
    }
    var q = function () {};
    function Z() {
      var e = k.a.safeReadObject(d.FileType.DebugOverrides, {});
      return (
        e &&
        e.tmsResponse &&
        e.tmsResponse.CampaignContent && {
          contentType: "CampaignContent",
          content: e.tmsResponse.CampaignContent,
        }
      );
    }
    var $,
      ee = (function () {
        function e(e, t, A, n, r, i, o, a, s, u, c) {
          (this.locale = "en-us"),
            (this.country = "US"),
            (this.locale = n),
            (this.country = r),
            (this.authTokenCallback = o),
            (this.augLoopCallback = a),
            (this.app = e),
            (this.platform = t),
            (this.version = A),
            (this.sessionId = i),
            (this.campaignFlights = s),
            (this.campaignParameters = u),
            (this.tmsgCache =
              this.tmsgCache ||
              c ||
              new x.a([
                "MessageMetadata",
                "UserGovernance",
                "CampaignContent",
                "DynamicSettings",
                "LogLevelSettings",
                "UserFacts",
              ]));
        }
        return (
          (e.prototype.getContent = function (e) {
            return Object(a.b)(this, void 0, void 0, function () {
              return Object(a.c)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.refreshItemsInCacheFromTmsService([e])];
                  case 1:
                    return (
                      t.sent(),
                      [2, this.retrieveCacheItemAndCreateContentResponse(e)]
                    );
                }
              });
            });
          }),
          (e.prototype.getMultipleContents = function (e) {
            return Object(a.b)(this, void 0, void 0, function () {
              var t, A, n, r, i, o;
              return Object(a.c)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, this.refreshItemsInCacheFromTmsService(e)];
                  case 1:
                    for (
                      a.sent(), t = new Array(), A = new Array(), n = 0, r = e;
                      n < r.length;
                      n++
                    )
                      (i = r[n]),
                        (o = this.createCachedContentResponse(i)),
                        t.push(o);
                    return this.refreshItemsInCacheFromTmsService(A), [2, t];
                }
              });
            });
          }),
          (e.prototype.getUserFactsContent = function (e) {
            return Object(a.b)(this, void 0, void 0, function () {
              return Object(a.c)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.refreshItemsInCacheFromTulipsService(e)];
                  case 1:
                    return (
                      t.sent(),
                      [2, this.retrieveCacheItemAndCreateContentResponse(e)]
                    );
                }
              });
            });
          }),
          (e.prototype.sendBeaconRequestToService = function (
            e,
            t,
            A,
            n,
            r,
            i,
            o,
            c
          ) {
            return Object(a.b)(this, void 0, void 0, function () {
              var d, g, p, h, f, B, m, v, C;
              return Object(a.c)(this, function (w) {
                switch (w.label) {
                  case 0:
                    return (
                      (this.sessionId = o),
                      (this.authTokenCallback = c),
                      (d = Object(s.a)("TmsAppId", u.c.TMSAppID)),
                      [4, this.getAuthToken(d)]
                    );
                  case 1:
                    return (
                      (g = w.sent()),
                      (p = void 0),
                      g
                        ? [3, 4]
                        : (h = this.authTokenCallback.getUserPuid)
                        ? [4, this.authTokenCallback.getUserPuid()]
                        : [3, 3]
                    );
                  case 2:
                    (h = w.sent()), (w.label = 3);
                  case 3:
                    (p = h), (w.label = 4);
                  case 4:
                    (f = +new Date()), (w.label = 5);
                  case 5:
                    return (
                      w.trys.push([5, 7, , 8]),
                      (B = {
                        app: e,
                        country: i,
                        locale: r,
                        platform: A,
                        puid: p,
                        version: n,
                      }),
                      (m = JSON.stringify({
                        actionName: t.actionName,
                        actionUrl: t.actionUrl,
                      })),
                      [
                        4,
                        this.sendRequest(
                          B,
                          g,
                          "TmsActionUrl",
                          "https://messaging.office.com/lifecycle/SetCampaignAction?",
                          m,
                          "POST"
                        ),
                      ]
                    );
                  case 6:
                    return (v = w.sent()) && 200 === v.status
                      ? [2, !0]
                      : (l
                          .b()
                          .logEvent(
                            l.a.WebSurfaces.Common.Error.VALUE,
                            2,
                            this.createTelemetryData(
                              f,
                              v,
                              "Beacon" + t.actionName
                            )
                          ),
                        [2, !1]);
                  case 7:
                    return (
                      (C = w.sent()),
                      l
                        .b()
                        .logEvent(
                          l.a.WebSurfaces.Common.Error.VALUE,
                          2,
                          Object(a.a)(
                            {
                              ErrorMessage:
                                "Error fetching from TMS SetCampaignAction endpoint" +
                                (C && C.message ? ": " + C.message : ""),
                            },
                            this.createTelemetryData(
                              f,
                              null,
                              "Beacon" + t.actionName
                            )
                          )
                        ),
                      [2, !1]
                    );
                  case 8:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.getAugLoopUserFactsContent = function (e) {
            return Object(a.b)(this, void 0, void 0, function () {
              return Object(a.c)(this, function (t) {
                switch (t.label) {
                  case 0:
                    return this.tmsgCache.getItemContent("UserFacts")
                      ? [3, 2]
                      : [4, this.refreshUserFactsInCacheFromAugLoop()];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return (
                      this.tmsgCache.isItemExpired("UserFacts") &&
                        this.refreshUserFactsInCacheFromAugLoop(),
                      [2, this.retrieveCacheItemAndCreateContentResponse(e)]
                    );
                }
              });
            });
          }),
          (e.prototype.refreshUserFactsInCacheFromAugLoop = function () {
            return Object(a.b)(this, void 0, void 0, function () {
              var e, t, A, n, r, i, o, u;
              return Object(a.c)(this, function (c) {
                switch (c.label) {
                  case 0:
                    if (!this.tmsgCache.isItemExpired("UserFacts"))
                      return (
                        (e = this.tmsgCache.getItemContent("UserFacts")),
                        l
                          .b()
                          .logEvent(l.a.UserFacts.AugLoop.Requests.VALUE, 3, {
                            Count: e ? e.length : -1,
                            Type: "AugLoopUserFactsCached",
                            Flights: this.campaignFlights,
                          }),
                        [2, e]
                      );
                    (t = +new Date()), (c.label = 1);
                  case 1:
                    return (
                      c.trys.push([1, 3, , 4]),
                      (n = Object(s.a)(
                        "TulipsAugLoopAnnotationName",
                        "AugLoop_User_UserLifecycleFactsAnnotation"
                      )),
                      (r = this.augLoopCallback.getRuntimeSession),
                      [4, j(n, r)]
                    );
                  case 2:
                    return (
                      (i = c.sent()) && i.userFacts
                        ? ((A =
                            this.addClientIngestionTimeAndNormalizeKeysInArray(
                              i.userFacts
                            )),
                          this.tmsgCache.setContentItem("UserFacts", A, 864e5),
                          l
                            .b()
                            .logEvent(
                              l.a.UserFacts.AugLoop.Requests.VALUE,
                              3,
                              Object(a.a)(
                                { Count: A ? A.length : -1 },
                                this.createTelemetryData(
                                  t,
                                  null,
                                  "AugLoopUserFacts"
                                )
                              )
                            ))
                        : ((o = i && i.error),
                          l
                            .b()
                            .logEvent(
                              l.a.UserFacts.AugLoop.Error.VALUE,
                              2,
                              Object(a.a)(
                                {
                                  ErrorMessage:
                                    "Error getting augloop facts " +
                                    (o && o.toString()),
                                },
                                this.createTelemetryData(
                                  t,
                                  null,
                                  "AugLoopUserFacts"
                                )
                              )
                            )),
                      [3, 4]
                    );
                  case 3:
                    return (
                      (u = c.sent()),
                      l
                        .b()
                        .logEvent(
                          l.a.UserFacts.AugLoop.Error.VALUE,
                          2,
                          Object(a.a)(
                            {
                              ErrorMessage:
                                "Error getting facts " + (u && u.message),
                            },
                            this.createTelemetryData(
                              t,
                              null,
                              "AugLoopUserFacts"
                            )
                          )
                        ),
                      [3, 4]
                    );
                  case 4:
                    return [2, A];
                }
              });
            });
          }),
          (e.prototype.createTelemetryData = function (e, t, A) {
            var n = t || {},
              r = n.headers,
              i = n.status,
              o = n.statusText,
              a = r && r.get("X-UserSessionId"),
              s = r && r.get("X-CorrelationId");
            return {
              Type: A,
              TimeMilliseconds: +new Date() - e,
              SessionId: a || this.sessionId,
              CorrelationId: s || void 0,
              HttpStatusCode: i || void 0,
              HttpStatusText: o || void 0,
              Flights: this.campaignFlights,
            };
          }),
          (e.prototype.sendRequest = function (e, t, A, n, r, i) {
            this.tmsgTransport = this.tmsgTransport || new K(this.sessionId);
            var o = P(e),
              a = Object(s.a)(A, n);
            return "POST" === i
              ? this.tmsgTransport.sendPostRequest(a + o, r, t)
              : this.tmsgTransport.sendGetRequest(a + o, t);
          }),
          (e.prototype.retrieveCacheItemAndCreateContentResponse = function (
            e
          ) {
            var t = this.createCachedContentResponse(e);
            return (
              this.tmsgCache.isItemExpired(e) &&
                ("UserFacts" === e
                  ? this.refreshItemsInCacheFromTulipsService(e)
                  : this.refreshItemsInCacheFromTmsService([e])),
              t
            );
          }),
          (e.prototype.createCachedContentResponse = function (e) {
            var t = new q();
            return (
              (t.content = this.tmsgCache.getItemContent(e)),
              (t.contentType = e),
              t
            );
          }),
          (e.prototype.getAuthToken = function (e) {
            return Object(a.b)(this, void 0, void 0, function () {
              var t,
                A,
                n,
                r,
                i,
                o = this;
              return Object(a.c)(this, function (a) {
                switch (a.label) {
                  case 0:
                    if (
                      !this.authTokenCallback ||
                      !this.authTokenCallback.getAuthToken
                    )
                      return [2, null];
                    (t = +new Date()),
                      (A = function () {
                        return +new Date() - t;
                      }),
                      (n = function (t) {
                        return (
                          void 0 === t && (t = void 0),
                          {
                            ErrorMessage: t,
                            SessionId: o.sessionId,
                            TimeMilliseconds: A(),
                            Type: e,
                          }
                        );
                      }),
                      (a.label = 1);
                  case 1:
                    return (
                      a.trys.push([1, 3, , 4]),
                      [4, this.authTokenCallback.getAuthToken(e)]
                    );
                  case 2:
                    return (
                      (r = a.sent()),
                      l.b().logEvent(l.a.WebSurfaces.Common.Info.VALUE, 3, n()),
                      [2, r]
                    );
                  case 3:
                    return (
                      (i = a.sent()),
                      l
                        .b()
                        .logEvent(
                          l.a.WebSurfaces.Common.Error.VALUE,
                          2,
                          n(
                            "Error getting token " +
                              (i && i.message ? ": " + i.message : "")
                          )
                        ),
                      [3, 4]
                    );
                  case 4:
                    return [2, null];
                }
              });
            });
          }),
          (e.prototype.refreshItemsInCacheFromTmsService = function (e) {
            return Object(a.b)(this, void 0, void 0, function () {
              var t, A, n, r, i, o, c, g, p, h, f, B, m, v, C, w;
              return Object(a.c)(this, function (y) {
                switch (y.label) {
                  case 0:
                    if (0 === e.length) return [2];
                    for (t = new Array(), A = 0, n = e; A < n.length; A++)
                      (r = n[A]), this.tmsgCache.isItemExpired(r) && t.push(r);
                    return 0 === t.length
                      ? [2]
                      : ((i = Object(s.a)("TmsAppId", u.c.TMSAppID)),
                        [4, this.getAuthToken(i)]);
                  case 1:
                    return (
                      (o = y.sent()),
                      (c = void 0),
                      o
                        ? [3, 4]
                        : (g = this.authTokenCallback.getUserPuid)
                        ? [4, this.authTokenCallback.getUserPuid()]
                        : [3, 3]
                    );
                  case 2:
                    (g = y.sent()), (y.label = 3);
                  case 3:
                    (c = g), (y.label = 4);
                  case 4:
                    (p = +new Date()), (y.label = 5);
                  case 5:
                    return (
                      y.trys.push([5, 10, , 11]),
                      (h =
                        document &&
                        (document.documentElement ||
                          document.getElementsByTagName("body")[0])),
                      (f = {
                        pageWidth: window.innerWidth || h.clientWidth,
                        pageHeight: window.innerHeight || h.clientHeight,
                        screenWidth: screen ? screen.width : void 0,
                        screenHeight: screen ? screen.height : void 0,
                        colorDepth: screen ? screen.colorDepth : void 0,
                      }),
                      (B = k.a.safeReadObject(d.FileType.DebugOverrides, {})),
                      (m =
                        B.replaceTmsQueryParams ||
                        Object(a.a)(
                          {
                            country: this.country,
                            locale: this.locale,
                            app: this.app,
                            platform: this.platform,
                            version: this.version,
                            campaignParams:
                              P(f) +
                              "&more=true&" +
                              (this.campaignParameters || ""),
                            contentType: e.join(";"),
                            puid: c,
                            OFC_FLIGHTS: this.campaignFlights,
                          },
                          B.addTmsQueryParams || {}
                        )),
                      [
                        4,
                        this.sendRequest(
                          m,
                          o,
                          "TmsServiceUrl",
                          "https://messaging.office.com/lifecycle/CampaignMetadataAggregator?"
                        ),
                      ]
                    );
                  case 6:
                    return 200 !== (v = y.sent()).status
                      ? [3, 8]
                      : [4, v.json()];
                  case 7:
                    return (
                      (C = y.sent()),
                      -1 !== e.indexOf("MessageMetadata") &&
                        void 0 !== C.MessageMetadata &&
                        this.tmsgCache.setContentItem(
                          "MessageMetadata",
                          C.MessageMetadata,
                          Object(s.a)("TmsMessageMetadataExpiry", 144e5)
                        ),
                      -1 !== e.indexOf("UserGovernance") &&
                        void 0 !== C.UserGovernanceRules &&
                        this.tmsgCache.setContentItem(
                          "UserGovernance",
                          C.UserGovernanceRules,
                          Object(s.a)("TmsUserGovernanceRulesExpiry", 144e5)
                        ),
                      -1 !== e.indexOf("CampaignContent") &&
                        void 0 !== C.CampaignContent &&
                        this.tmsgCache.setContentItem(
                          "CampaignContent",
                          C.CampaignContent,
                          Object(s.a)("TmsCampaignContentExpiry", 144e5)
                        ),
                      void 0 !== C.DynamicSettings &&
                        this.tmsgCache.setContentItem(
                          "DynamicSettings",
                          C.DynamicSettings,
                          Object(s.a)("TmsDynamicSettingsExpiry", 144e5)
                        ),
                      void 0 !== C.LogLevelSettings &&
                        this.tmsgCache.setContentItem(
                          "LogLevelSettings",
                          C.LogLevelSettings,
                          Object(s.a)("TmsLogLevelSettingsExpiry", 144e5)
                        ),
                      l
                        .b()
                        .logEvent(
                          l.a.WebSurfaces.Messaging.Requests.VALUE,
                          3,
                          this.createTelemetryData(p, v, e.join(";"))
                        ),
                      [3, 9]
                    );
                  case 8:
                    l
                      .b()
                      .logEvent(
                        l.a.WebSurfaces.Common.Error.VALUE,
                        2,
                        this.createTelemetryData(p, v, e.join(";"))
                      ),
                      (y.label = 9);
                  case 9:
                    return [3, 11];
                  case 10:
                    return (
                      (w = y.sent()),
                      l
                        .b()
                        .logEvent(
                          l.a.WebSurfaces.Common.Error.VALUE,
                          2,
                          Object(a.a)(
                            {
                              ErrorMessage:
                                "Error fetching from TMS" +
                                (w && w.message ? ": " + w.message : ""),
                            },
                            this.createTelemetryData(p, null, e.join(";"))
                          )
                        ),
                      [3, 11]
                    );
                  case 11:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.refreshItemsInCacheFromTulipsService = function (e) {
            return Object(a.b)(this, void 0, void 0, function () {
              var t, A, n, r, i, o, c;
              return Object(a.c)(this, function (d) {
                switch (d.label) {
                  case 0:
                    return this.tmsgCache.isItemExpired(e)
                      ? ((t = Object(s.a)("TulipsAppId", u.c.TULIPSAppID)),
                        [4, this.getAuthToken(t)])
                      : [2];
                  case 1:
                    if (!(A = d.sent())) return [2];
                    (n = +new Date()), (d.label = 2);
                  case 2:
                    return (
                      d.trys.push([2, 7, , 8]),
                      [
                        4,
                        this.sendRequest(
                          {},
                          A,
                          "TulipsServiceUrl",
                          "https://substrate.office.com/OfficePersonalizationUserLifecycle/api/facts"
                        ),
                      ]
                    );
                  case 3:
                    return 200 !== (r = d.sent()).status && 204 !== r.status
                      ? [3, 5]
                      : [4, r.json()];
                  case 4:
                    return (
                      (i = d.sent()),
                      -1 !== e.indexOf("UserFacts") &&
                        void 0 !== i &&
                        ((o = this.addClientIngestionTimeAndNormalizeKeys(i)),
                        this.tmsgCache.setContentItem("UserFacts", o, 864e5)),
                      l
                        .b()
                        .logEvent(
                          l.a.UserFacts.Messaging.Requests.VALUE,
                          3,
                          this.createTelemetryData(n, r, e)
                        ),
                      [3, 6]
                    );
                  case 5:
                    l
                      .b()
                      .logEvent(
                        l.a.UserFacts.Common.Error.VALUE,
                        2,
                        this.createTelemetryData(n, r, e)
                      ),
                      (d.label = 6);
                  case 6:
                    return [3, 8];
                  case 7:
                    return (
                      (c = d.sent()),
                      l
                        .b()
                        .logEvent(
                          l.a.UserFacts.Common.Error.VALUE,
                          2,
                          Object(a.a)(
                            {
                              ErrorMessage:
                                "Error fetching from TULIPS" +
                                (c && c.message ? ": " + c.message : ""),
                            },
                            this.createTelemetryData(n, null, e)
                          )
                        ),
                      [3, 8]
                    );
                  case 8:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.addClientIngestionTimeAndNormalizeKeys = function (e) {
            var t = this,
              A = new Date(Date.now()).toISOString();
            return e.map(function (e) {
              var n = t.normalizeKeys(e);
              return (n.clientIngestionDateTime = A), n;
            });
          }),
          (e.prototype.addClientIngestionTimeAndNormalizeKeysInArray =
            function (e) {
              var t = this,
                A = new Date(Date.now()).toISOString();
              return e.map(function (e) {
                var n = t.normalizeKeys(e);
                return (n.clientIngestionDateTime = A), n;
              });
            }),
          (e.prototype.normalizeKeys = function (e) {
            for (var t = {}, A = 0, n = Object.keys(e); A < n.length; A++) {
              var r = n[A];
              t[r.charAt(0).toLowerCase() + r.substring(1)] = e[r];
            }
            return t;
          }),
          e
        );
      })(),
      te = (function () {
        function e() {
          this.configuration = r.get();
          var e =
              this.configuration &&
              this.configuration.getFloodgateInitOptions(),
            t = e && e.authTokenCallback;
          if (
            (t && (t.getAuthToken || t.getUserPuid)) ||
            this.isAugLoopEnabled()
          ) {
            var A = this.configuration.getCommonInitOptions();
            this.tmsgClient = new ee(
              A.appId.toString(),
              "Web",
              A.build,
              A.originalLocale,
              this.extractCountryFromLocale(A.originalLocale),
              this.configuration.getSdkSessionId(),
              e.authTokenCallback,
              e.augLoopCallback,
              e.campaignFlights,
              e.campaignQueryParameters
            );
          }
        }
        return (
          (e.prototype.getCampaignDefinitions = function () {
            var e = Z();
            return e && e.content
              ? Promise.resolve(e.content)
              : this.tmsgClient
              ? this.tmsgClient
                  .getContent("CampaignContent")
                  .then(function (e) {
                    return e.content;
                  })
              : Promise.resolve(null);
          }),
          (e.prototype.getUserGovernanceRules = function () {
            return this.tmsgClient
              ? this.tmsgClient.getContent("UserGovernance").then(function (e) {
                  return e.content;
                })
              : Promise.resolve(null);
          }),
          (e.prototype.getMessageMetadata = function () {
            return this.tmsgClient
              ? this.tmsgClient
                  .getContent("MessageMetadata")
                  .then(function (e) {
                    return e.content;
                  })
              : Promise.resolve(null);
          }),
          (e.prototype.getUserFacts = function () {
            var e = this,
              t = Z();
            if (t && t.content) return Promise.resolve(t.content);
            if (!this.tmsgClient) return Promise.resolve(null);
            if (this.isAugLoopEnabled()) {
              var A = Object(s.a)("TulipsLoadTimeout", 1e3);
              return Object(R.a)(A, this.getAugLoopUserFacts())
                .then(function (e) {
                  return e;
                })
                .catch(function () {
                  return e.getSubstrateUserFacts();
                });
            }
            return this.getSubstrateUserFacts();
          }),
          (e.prototype.setCampaignAction = function (e) {
            if (this.tmsgClient) {
              var t = this.configuration.getCommonInitOptions(),
                A = this.configuration.getFloodgateInitOptions();
              return this.tmsgClient.sendBeaconRequestToService(
                t.appId.toString(),
                e,
                "Web",
                t.build,
                t.originalLocale,
                this.extractCountryFromLocale(t.originalLocale),
                this.configuration.getSdkSessionId(),
                A.authTokenCallback
              );
            }
          }),
          (e.prototype.extractCountryFromLocale = function (e) {
            if (e) {
              var t = e.split("-");
              return 2 === t.length ? t[1] : void 0;
            }
          }),
          (e.prototype.getSubstrateUserFacts = function () {
            return this.tmsgClient
              ? this.tmsgClient
                  .getUserFactsContent("UserFacts")
                  .then(function (e) {
                    return e.content;
                  })
              : Promise.resolve(null);
          }),
          (e.prototype.getAugLoopUserFacts = function () {
            return this.tmsgClient
              ? this.tmsgClient
                  .getAugLoopUserFactsContent("UserFacts")
                  .then(function (e) {
                    return e.content;
                  })
              : Promise.resolve(null);
          }),
          (e.prototype.isAugLoopEnabled = function () {
            var e, t, A;
            return null ===
              (A =
                null ===
                  (t =
                    null === (e = this.configuration) || void 0 === e
                      ? void 0
                      : e.getFloodgateInitOptions()) || void 0 === t
                  ? void 0
                  : t.augLoopCallback) || void 0 === A
              ? void 0
              : A.isEnabled;
          }),
          e
        );
      })();
    function Ae() {
      return $ || ($ = new te()), $;
    }
    var ne,
      re,
      ie = o.Utils.isNOU,
      oe = (function () {
        function e() {}
        return (
          (e.prototype.makeSurveyLauncher = function (e) {
            return this.AcceptsSurvey(e) ? new ae(e) : null;
          }),
          (e.prototype.AcceptsSurvey = function (t) {
            return (
              !ie(t) &&
              t.getType() === o.Api.ISurvey.Type.GenericMessagingSurface &&
              t.getLauncherType().toLocaleLowerCase() === e.LAUNCHER_TYPE
            );
          }),
          (e.LAUNCHER_TYPE = "coachingux"),
          e
        );
      })(),
      ae = (function () {
        function e(e) {
          this.survey = e;
        }
        return (
          (e.prototype.launch = function () {
            var e = this.survey && this.survey.getSurveyInfo(),
              t = e && e.getMetadata(),
              A = t && t.getContentMetadata();
            if (A) {
              var n = new Date(),
                o = function () {
                  var e = i.b();
                  return e && e.OfficeWebSurfaces;
                },
                d = function (t) {
                  var n = o();
                  t && n.Initialize(t),
                    n.RemoveSurface(),
                    n.RenderSurface(A, null, e.getBackEndId());
                },
                g = function (e) {
                  l.b().logEvent(l.a.WebSurfaces.Common.Error.VALUE, 1, {
                    ErrorMessage:
                      "Error loading websurfaces" +
                      (e && e.message ? ": " + e.message : ""),
                    TimeMilliseconds: Date.now() - +n,
                  });
                };
              try {
                if (o()) return void d();
                c.a(Object(s.a)("WebSurfacesLink", u.a.WebSurfacesLink), null)
                  .then(function () {
                    var t = r.get().getCommonInitOptions(),
                      A = r.get().getFloodgateInitOptions(),
                      i = A && A.onSurveyActivatedCallback,
                      o = Object(a.a)(Object(a.a)(Object(a.a)({}, t), A), {
                        beaconCallback: function (e) {
                          if (e) return Ae().setCampaignAction(e);
                        },
                        surfaceInitTime: n,
                        surfaceId: e.getBackEndId(),
                        logSessionId: r.get().getSdkSessionId(),
                        logSettings: Object(s.a)("LogLevelSettings", void 0),
                        renderer: i,
                        renderCallback: i && i.onTeachingCampaignRender,
                      });
                    d(o);
                  })
                  .catch(function (e) {
                    g(e);
                  });
              } catch (e) {
                g(e);
              }
            }
          }),
          e
        );
      })(),
      se = A(12),
      ue = (function () {
        function e(e) {
          if (((this.showPrompt = !0), (this.showEmailRequest = !1), !e))
            throw Error("survey must not be null");
          if (((this.survey = e), e.getType() === se.ISurvey.Type.Intercept)) {
            this.isIntercept = !0;
            var t = e.getComponent("Intercept");
            if (!t) throw Error("intercept component must not be null");
            this.intercept = t;
          } else {
            this.isIntercept = !1;
            var A = e.getComponent("Prompt"),
              n = e.getComponent("Comment"),
              r = e.getComponent("Rating");
            if (!A) throw Error("prompt component must not be null");
            if (
              ((this.prompt = A),
              (this.showEmailRequest = e
                .getSurveyInfo()
                .isAdditionalDataRequested(0)),
              !n)
            )
              throw Error("comment component must not be null");
            if (((this.comment = n), !r))
              throw Error("rating component must not be null");
            this.rating = r;
          }
        }
        return (
          (e.prototype.getPromptQuestion = function () {
            return this.isIntercept ? void 0 : this.prompt.getQuestion();
          }),
          (e.prototype.getTitle = function () {
            return this.isIntercept ? void 0 : this.prompt.getTitle();
          }),
          (e.prototype.getPromptYesButtonText = function () {
            return this.isIntercept ? void 0 : this.prompt.getYesButtonText();
          }),
          (e.prototype.getPromptNoButtonText = function () {
            return this.isIntercept ? void 0 : this.prompt.getNoButtonText();
          }),
          (e.prototype.getRatingValuesAscending = function () {
            return this.isIntercept
              ? void 0
              : this.rating.getRatingValuesAscending();
          }),
          (e.prototype.getRatingQuestion = function () {
            return this.isIntercept ? void 0 : this.rating.getQuestion();
          }),
          (e.prototype.getCommentQuestion = function () {
            return this.isIntercept ? void 0 : this.comment.getQuestion();
          }),
          (e.prototype.getInterceptTitle = function () {
            return this.isIntercept ? this.intercept.getTitle() : void 0;
          }),
          (e.prototype.getInterceptQuestion = function () {
            return this.isIntercept ? this.intercept.getQuestion() : void 0;
          }),
          (e.prototype.getInterceptUrl = function () {
            return this.isIntercept ? this.intercept.getUrl() : void 0;
          }),
          (e.prototype.setValues = function (e, t) {
            this.isIntercept ||
              (this.rating.setSelectedRatingIndex(e),
              this.comment.setSubmittedText(t));
          }),
          (e.prototype.getJsonElements = function () {
            return this.survey.getJsonElements();
          }),
          (e.prototype.getSurveyType = function () {
            return this.survey.getType();
          }),
          (e.prototype.getCampaignId = function () {
            return this.survey.getSurveyInfo().getBackEndId();
          }),
          (e.prototype.getId = function () {
            return this.survey.getSurveyInfo().getId();
          }),
          e
        );
      })(),
      ce = o.Utils.isNOU,
      le = (function () {
        function e() {}
        return (
          (e.prototype.makeSurveyLauncher = function (e) {
            return this.AcceptsSurvey(e) ? new de(e) : null;
          }),
          (e.prototype.AcceptsSurvey = function (e) {
            return (
              !ce(e) &&
              e.getType() !== o.Api.ISurvey.Type.GenericMessagingSurface
            );
          }),
          (e.LAUNCHER_TYPE = o.Api.ISurvey.LAUNCHER_TYPE_DEFAULT),
          e
        );
      })(),
      de = (function () {
        function e(e) {
          this.survey = e;
        }
        return (
          (e.prototype.launch = function () {
            i.a().OfficeBrowserFeedback.floodgate.showSurvey(
              new ue(this.survey)
            );
          }),
          e
        );
      })(),
      ge = o.Utils.isNOU,
      pe = (function () {
        function e(e, t) {
          (this.rudeSurveyLauncherFactory = e),
            (this.coachingUXLauncherFactory = t);
        }
        return (
          (e.make = function () {
            return new e(new le(), new oe());
          }),
          (e.prototype.makeSurveyLauncher = function (e) {
            if (ge(e)) return null;
            switch (e.getLauncherType().toLocaleLowerCase()) {
              case oe.LAUNCHER_TYPE:
                return this.makeGenericMessagingSurfaceLauncher(e);
              case le.LAUNCHER_TYPE:
              default:
                return this.makeRudeSurveyLauncher(e);
            }
          }),
          (e.prototype.AcceptsSurvey = function (e) {
            if (ge(e)) return !1;
            switch (e.getType()) {
              case o.Api.ISurvey.Type.GenericMessagingSurface:
                return (
                  !ge(this.coachingUXLauncherFactory) &&
                  this.coachingUXLauncherFactory.AcceptsSurvey(e)
                );
              default:
                return (
                  r.get().checkIfSurveysEnabled() &&
                  !ge(this.rudeSurveyLauncherFactory) &&
                  this.rudeSurveyLauncherFactory.AcceptsSurvey(e)
                );
            }
          }),
          (e.prototype.makeGenericMessagingSurfaceLauncher = function (e) {
            return ge(this.coachingUXLauncherFactory)
              ? null
              : this.coachingUXLauncherFactory.makeSurveyLauncher(e);
          }),
          (e.prototype.makeRudeSurveyLauncher = function (e) {
            return ge(this.rudeSurveyLauncherFactory)
              ? null
              : this.rudeSurveyLauncherFactory.makeSurveyLauncher(e);
          }),
          e
        );
      })(),
      he = A(23),
      fe = (function () {
        function e() {}
        return (
          (e.prototype.makeTransporter = function (e) {
            return new he.a(
              r.get().getCommonInitOptions().environment,
              e,
              r.get().getCommonInitOptions().appId,
              "Survey",
              r.get().getCommonInitOptions().applicationGroup,
              r.get().getCommonInitOptions().telemetryGroup,
              r.get().getCommonInitOptions().webGroup
            );
          }),
          e
        );
      })(),
      Be = (function () {
        function e() {}
        return (
          (e.prototype.getLanguage = function () {
            return r.get().getCommonInitOptions().originalLocale;
          }),
          e
        );
      })(),
      me = A(4),
      ve = (function () {
        function e() {}
        return (
          (e.prototype.loadStringResource = function (e) {
            var t = me.a();
            switch (e) {
              case 5:
                return t.Floodgate.Nps.Rating.Points11Value0;
              case 6:
                return t.Floodgate.Nps.Rating.Points11Value1;
              case 7:
                return t.Floodgate.Nps.Rating.Points11Value2;
              case 8:
                return t.Floodgate.Nps.Rating.Points11Value3;
              case 9:
                return t.Floodgate.Nps.Rating.Points11Value4;
              case 10:
                return t.Floodgate.Nps.Rating.Points11Value5;
              case 11:
                return t.Floodgate.Nps.Rating.Points11Value6;
              case 12:
                return t.Floodgate.Nps.Rating.Points11Value7;
              case 13:
                return t.Floodgate.Nps.Rating.Points11Value8;
              case 14:
                return t.Floodgate.Nps.Rating.Points11Value9;
              case 15:
                return t.Floodgate.Nps.Rating.Points11Value10;
              case 16:
                return t.Floodgate.Nps.Rating.Points5Value1;
              case 17:
                return t.Floodgate.Nps.Rating.Points5Value2;
              case 18:
                return t.Floodgate.Nps.Rating.Points5Value3;
              case 19:
                return t.Floodgate.Nps.Rating.Points5Value4;
              case 20:
                return t.Floodgate.Nps.Rating.Points5Value5;
              case 4:
                return t.Floodgate.Nps.Rating.Question;
              case 21:
                return t.Floodgate.Nps.Comment.Question;
              case 3:
                return t.Floodgate.Nps.Prompt.No;
              case 1:
                return t.Floodgate.Nps.Prompt.Question;
              case 0:
                return t.Floodgate.Nps.Prompt.Title;
              case 2:
                return t.Floodgate.Nps.Prompt.Yes;
              default:
                return "";
            }
          }),
          (e.prototype.getCustomString = function (e) {
            return r.get().getFloodgateInitOptions().uIStringGetter(e);
          }),
          e
        );
      })(),
      Ce = A(19),
      we = (function () {
        function e() {
          (this.loadAsyncTriggered = !1), (this.campaignDefinitions = []);
        }
        return (
          (e.prototype.load = function () {
            return (
              this.loadAsyncTriggered ||
                (this.loadAsync(), (this.loadAsyncTriggered = !0)),
              this.campaignDefinitions || []
            );
          }),
          (e.prototype.loadAsync = function () {
            var e = this,
              t = Ae().getCampaignDefinitions();
            t.then(function (t) {
              e.loadCampaignDefinitions(t), (e.loadAsyncTriggered = !0);
            });
            var A = Object(s.a)("TmsLoadTimeout", 1e3),
              n = Object(R.a)(A, t);
            return new Promise(function (t, A) {
              n.then(function (A) {
                e.loadCampaignDefinitions(A),
                  (e.loadAsyncTriggered = !0),
                  t(e.campaignDefinitions);
              }).catch(function (A) {
                t(e.campaignDefinitions);
              });
            });
          }),
          (e.prototype.loadCampaignDefinitions = function (e) {
            var t = e && e.campaigns;
            t &&
              (this.campaignDefinitions = Object(
                Ce.FilterValidCampaignDefinitions
              )(t).result);
          }),
          e
        );
      })(),
      ye = (function () {
        function e() {
          (this.loadAsyncTriggered = !1),
            (this.userFacts = []),
            (this.nameAndUserFactMap = {});
        }
        return (
          (e.prototype.load = function () {
            return (
              this.loadAsyncTriggered ||
                (this.loadAsync(), (this.loadAsyncTriggered = !0)),
              this.userFacts || []
            );
          }),
          (e.prototype.loadAsync = function () {
            var e = this,
              t = Ae()
                .getUserFacts()
                .then(function (t) {
                  e.loadUserFacts(t);
                }),
              A = Object(s.a)("TulipsLoadTimeout", 1e3);
            return Object(R.a)(A, t)
              .then(function () {
                return e.userFacts;
              })
              .catch(function () {
                return e.userFacts;
              });
          }),
          (e.prototype.getUserFact = function (e) {
            return this.nameAndUserFactMap[e];
          }),
          (e.prototype.loadUserFacts = function (e) {
            var t = this;
            e &&
              ((this.userFacts = e || []),
              this.userFacts.map(function (e) {
                t.nameAndUserFactMap[e.userFactName] = e;
              }),
              (this.loadAsyncTriggered = !0),
              this.logUserFactInfo(this.userFacts));
          }),
          (e.prototype.logUserFactInfo = function (e) {
            if (e && !(e.length <= 0)) {
              var t = Object(s.a)("TulipsIngestionTimeInterval", 864e5);
              if (!(t <= 0)) {
                var A;
                try {
                  var n = Date.now(),
                    r = function (e) {
                      var A = Date.parse(e);
                      return !!isNaN(A) || n - A > t;
                    },
                    i = {
                      Count: e.length,
                      RefreshTime: t,
                      IngestionTime: e[0].clientIngestionDateTime,
                      SourcesExpired:
                        e.filter(function (e) {
                          return e && r(e.sourceDateTime);
                        }).length || void 0,
                      StoragesExpired:
                        e.filter(function (e) {
                          return e && r(e.storageDateTime);
                        }).length || void 0,
                      IngestionsExpired:
                        e.filter(function (e) {
                          return e && r(e.clientIngestionDateTime);
                        }).length || void 0,
                    };
                  A = { Message: "UserFacts", Data: JSON.stringify(i) };
                } catch (e) {
                  A = { ErrorMessage: "Error getting UserFact info" };
                }
                l.b().logEvent(l.a.UserFacts.Provider.Info.VALUE, 3, A);
              }
            }
          }),
          e
        );
      })(),
      Ee = A(15),
      Fe = A(30),
      Ue = A(20),
      Se = A(37),
      Qe = A.n(Se),
      Te = !1,
      be = 0,
      Ie = null,
      Ne = null,
      He = null;
    function _e(e) {
      Ie = e;
    }
    function Oe() {
      return Ie;
    }
    function De(e, t) {
      if ((void 0 === t && (t = null), Ie)) return Ie;
      be++;
      var A = new Promise(function (A, n) {
        var i = function (e, t) {
          var A = o.FloodgateEngine.getTelemetryLogger();
          A &&
            A.log_Event(Ee.TelemetryEvent.Floodgate.Start.Failed, {
              Count: be,
              ErrorMessage: e,
              ErrorDetails: t && t.stack,
            }),
            n(e);
        };
        try {
          var a = r.get().getCommonInitOptions();
          if (!a)
            return void i(
              "Invalid floodgate common init options, state: " + Te
            );
          var u = r.get().getFloodgateInitOptions();
          if (!u) {
            var c = o.FloodgateEngine.getTelemetryLogger();
            c &&
              c.log_Event(Ee.TelemetryEvent.Floodgate.Start.Warning, {
                Count: be,
                ErrorMessage: "Invalid floodgate init options, state: " + Te,
              }),
              r.get().setFloodgateInitOptions({}),
              (u = r.get().getFloodgateInitOptions());
          }
          if (!t && !Ne)
            u && u.authTokenCallback && ((Ne = new we()), (He = new ye()));
          var l = Fe.Governor.GetChannelCoolDown(
              Ue.GovernedChannelType.TeachingMessage
            ),
            d = Object(s.a)("TeachingMessageCooldown", l);
          if (
            (Fe.Governor.SetDefaultChannelCoolDown(
              Ue.GovernedChannelType.TeachingMessage,
              d
            ),
            !(ne =
              t ||
              o.FloodgateEngine.make(
                a.build || "",
                pe.make(),
                u.onSurveyActivatedCallback,
                new k.a(),
                u.settingStorageCallback,
                re || new ve(),
                new Be(),
                new fe(),
                [Ne],
                He
              )))
          )
            return _e(null), void i("Failed to create floodgate engine");
          if (e || be > 1) ne.start(), A();
          else {
            var g = ne.startAsync();
            if (!g) return _e(null), void i("Failed to get floodgate engine");
            g.then(function () {
              A();
            }).catch(function (e) {
              _e(null), i("Failed to start floodgate engine", e);
            });
          }
        } catch (e) {
          _e(null),
            i("Failed to load floodgate engine: " + (e && e.toString()), e);
        }
      });
      return (
        _e(A),
        A.catch(function (e) {
          _e(null);
        }),
        A
      );
    }
    function Le(e) {
      return void 0 === e && (e = !1), De(e);
    }
    function Re() {
      ne && ne.stop(), _e(null);
    }
    function Me() {
      (be = 0), (Ie = null), (ne = null), (Ne = null), (He = null);
    }
    i.e(function () {
      return ne;
    }),
      i.i(Le),
      i.j(Re);
    var Ke,
      Pe,
      xe = A(25),
      ke = A(0),
      Ve = A(3),
      Ge = A(32),
      ze = R.j;
    function Je(e) {
      !(function () {
        for (var e = 0, t = Xe; e < t.length; e++) {
          var A = t[e];
          Ve.m(A.id, A.event, A.listener);
        }
        Xe = [];
      })(),
        Ke(e);
    }
    var Xe = [];
    function We(e, t, A) {
      Ve.g(e, t, A), Xe.push({ event: t, id: e, listener: A });
    }
    function Ye(e, t, A) {
      var n = r.get();
      l.b().logEvent(e, 1, {
        CampaignId: n.getFloodgateSurvey().getCampaignId(),
        SurveyId: n.getFloodgateSurvey().getId(),
        SurveyType: n.getFloodgateSurvey().getSurveyType(),
        PromptAutoDismiss: n.getFloodgateInitOptions().autoDismiss.toString(),
        ClientFeedbackId: t,
        IsEmailPolicyEnabled: A,
      });
    }
    function je(e) {
      var t = document.getElementById(ke.d.TFormEmailCheckBox);
      if (t) {
        var A = document.getElementById(ke.d.TFormEmailTextBox);
        (A.value = t.checked ? r.get().getCommonInitOptions().userEmail : null),
          (A.disabled = !t.checked);
      }
    }
    function qe(e) {
      e.keyCode === ke.e.Esc &&
        (e.preventDefault(),
        e.stopPropagation(),
        Je(!1),
        Ye(
          Pe ? l.a.SURVEY_UI_PROMPT_USERCLOSED : l.a.SURVEY_UI_FORM_USERCLOSED
        ));
    }
    function Ze(e) {
      e.preventDefault(),
        e.stopPropagation(),
        Je(!1),
        Ye(
          Pe ? l.a.SURVEY_UI_PROMPT_USERCLOSED : l.a.SURVEY_UI_FORM_USERCLOSED
        );
    }
    function $e(e) {
      var t, A, n;
      e.preventDefault(),
        e.stopPropagation(),
        r.get().getFloodgateSurvey().getSurveyType() ===
        se.ISurvey.Type.Intercept
          ? ((t = r.get().getFloodgateSurvey().getInterceptUrl()),
            (A = window.open(t, "_blank")),
            (n = !ze(A) && (A.focus(), !0)),
            Je(!1),
            Ye(
              n
                ? l.a.SURVEY_UI_PROMPT_CLICKED
                : l.a.SURVEY_UI_REDIRECTIONFAILURE
            ))
          : et();
    }
    function et() {
      (Pe = !1),
        Ve.l(ke.d.TPromptContainer, !1),
        Ve.l(ke.d.TFormContainer, !0),
        Ve.b(ke.d.ToastContainer, ke.c.ToastZoom),
        (
          " " +
          document.getElementById(ke.d.TFormContainer).className +
          " "
        ).indexOf(" " + ke.c.Visible + " ") > -1 &&
          document.getElementById(ke.d.ToastContainer).setAttribute("role", "");
      var e = document.getElementsByName(ke.d.TFormRating);
      e && e.length > 0 && e[0].focus(), Ye(l.a.SURVEY_UI_FORM_SHOWN);
    }
    function tt(e) {
      document.getElementById(ke.d.TFormSubmitButton).disabled = !1;
    }
    function At(e) {
      e.preventDefault(), e.stopPropagation(), Ve.l(ke.d.TFormSubmitButton, !1);
      var t = new Ge.a(ke.d.TFormSubmitButtonSpinner),
        A = new he.a(
          r.get().getCommonInitOptions().environment,
          se.ISurvey.Type[r.get().getFloodgateSurvey().getSurveyType()],
          r.get().getCommonInitOptions().appId,
          "Survey",
          r.get().getCommonInitOptions().applicationGroup,
          r.get().getCommonInitOptions().telemetryGroup,
          r.get().getCommonInitOptions().webGroup
        ),
        n = document.getElementById(ke.d.TFormComment),
        i = n && !!n.value,
        o = document.querySelector(
          'input[name="' + ke.d.TFormRating + '"]:checked'
        );
      r
        .get()
        .getFloodgateSurvey()
        .setValues(Number(o.value), i ? n.value : ""),
        A.setManifestValues(r.get().getFloodgateSurvey().getJsonElements());
      var a = document.getElementById(ke.d.TFormEmailCheckBox),
        s = document.getElementById(ke.d.TFormEmailTextBox);
      a && a.checked && "" !== s.value && A.setEmail(s.value),
        A.submit(),
        t.destroy(),
        Je(!0),
        Ye(
          l.a.SURVEY_UI_FORM_SUBMIT,
          A.getClientFeedbackId(),
          r.get().getFloodgateInitOptions().showEmailAddress
        );
    }
    var nt = R.j;
    function rt(e, t, A) {
      return [
        {
          attributes: [
            { name: ke.a.Type, value: ke.b.Radio },
            { name: ke.a.Value, value: e },
            { name: ke.a.Name, value: A },
          ],
          id: e,
          tag: ke.g.Input,
        },
        {
          attributes: [{ name: ke.a.For, value: e }],
          children: [
            {
              children: [{ tag: ke.g.Span }],
              classes: [ke.c.ChoiceGroupIcon],
              tag: ke.g.Span,
            },
            { classes: ["obf-ChoiceGroupLabel"], innerHTML: t, tag: ke.g.Span },
          ],
          classes: [ke.c.FontSubText],
          tag: ke.g.Label,
        },
      ];
    }
    function it() {
      for (
        var e,
          t = [],
          A = 0,
          n = 0,
          i = r.get().getFloodgateSurvey().getRatingValuesAscending();
        n < i.length;
        n++
      ) {
        var o = i[n];
        t.push([A, o]), A++;
      }
      return (function (e, t, A) {
        var n = { children: [], tag: ke.g.FieldSet };
        nt(t) ||
          Array.prototype.push.apply(n.children, [
            {
              classes: [ke.c.FontSubText],
              id: ke.d.TFormRatingQuestion,
              innerText: t,
              tag: ke.g.Legend,
              attributes: [{ name: ke.a.AriaLabel, value: t }],
            },
          ]);
        for (var r = 0, i = A; r < i.length; r++) {
          var o = i[r];
          Array.prototype.push.apply(n.children, rt(o[0].toString(), o[1], e));
        }
        return { children: [n], classes: [ke.c.ChoiceGroup], id: e };
      })(
        ke.d.TFormRating,
        null === (e = r.get().getFloodgateSurvey().getRatingQuestion()) ||
          void 0 === e
          ? void 0
          : e.trim(),
        t.reverse()
      );
    }
    var ot = A(29);
    function at(e) {
      var t, A, n, i;
      (t = ot.a({
        attributes: [
          { name: ke.a.DataHtml2CanvasIgnore, value: ke.b.True },
          { name: ke.a.Role, value: "alert" },
        ],
        children: [
          ((n =
            r.get().getFloodgateSurvey().getSurveyType() ===
            se.ISurvey.Type.Intercept),
          (i = {
            children: [
              {
                classes: [ke.c.FontText, ke.c.TextAlignLeft],
                id: ke.d.TPromptTitle,
                innerText: n
                  ? r.get().getFloodgateSurvey().getInterceptTitle()
                  : r.get().getFloodgateSurvey().getTitle(),
              },
              {
                classes: [ke.c.FontSubText, ke.c.TextAlignLeft],
                id: ke.d.TPromptText,
                innerText: n
                  ? r.get().getFloodgateSurvey().getInterceptQuestion()
                  : r.get().getFloodgateSurvey().getPromptQuestion(),
              },
            ],
            id: ke.d.TPromptContainer,
            tag: ke.g.Button,
          }),
          i),
          {
            attributes: [
              { name: ke.a.Type, value: ke.b.Button },
              { name: ke.a.AriaLabel, value: me.a().CloseLabel },
            ],
            id: ke.d.ToastCancel,
            innerHTML:
              '<svg viewBox="4 4 16 16" width="16px" height="16px" focusable="false"><path d="M19,6.41L17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z"/></svg>',
            tag: ke.g.Button,
          },
          r.get().getFloodgateSurvey().getSurveyType() !==
          se.ISurvey.Type.Intercept
            ? ((A = {
                children: [
                  {
                    classes: [ke.c.FontText, ke.c.TextAlignLeft],
                    id: ke.d.TFormTitle,
                    innerText: r.get().getFloodgateSurvey().getTitle(),
                  },
                  it(),
                  {
                    attributes: [
                      {
                        name: ke.a.Placeholder,
                        value: r
                          .get()
                          .getFloodgateSurvey()
                          .getCommentQuestion(),
                      },
                      {
                        name: ke.a.AriaLabel,
                        value: r
                          .get()
                          .getFloodgateSurvey()
                          .getCommentQuestion(),
                      },
                      { name: ke.a.MaxLength, value: ke.b.TextAreaMaxLength },
                    ],
                    classes: [ke.c.FontSubText, ke.c.TextInput],
                    id: ke.d.TFormComment,
                    tag: ke.g.TextArea,
                  },
                  {
                    brs:
                      r.get().getFloodgateInitOptions().showEmailAddress &&
                      r.get().getFloodgateSurvey().showEmailRequest,
                    children: [
                      {
                        attributes: [
                          { name: ke.a.Type, value: ke.b.Checkbox },
                          {
                            name: r.get().getCommonInitOptions()
                              .userEmailConsentDefault
                              ? ke.b.Checked
                              : ke.b.Unchecked,
                            value: "",
                          },
                        ],
                        classes: [ke.c.TFormEmailCheckbox, ke.c.CheckBox],
                        id: ke.d.TFormEmailCheckBox,
                        tag: ke.g.Input,
                      },
                      {
                        attributes: [
                          { name: ke.a.For, value: ke.d.TFormEmailCheckBox },
                        ],
                        classes: [
                          ke.c.FontSubText,
                          ke.c.TextAlignLeft,
                          ke.c.TFormEmailLabel,
                        ],
                        innerText: me.a().Form.EmailCheckBoxLabel,
                        tag: ke.g.Label,
                      },
                      {
                        attributes: [
                          { name: ke.a.Type, value: ke.b.Text },
                          {
                            name: ke.a.Placeholder,
                            value: me.a().Form.EmailPlaceholder,
                          },
                          {
                            name: ke.a.AriaLabel,
                            value: me.a().Form.EmailPlaceholder,
                          },
                          { name: ke.a.Name, value: ke.d.BasicFormEmailInput },
                          {
                            name: ke.a.MaxLength,
                            value: ke.b.TextAreaMaxLength,
                          },
                          {
                            name: ke.a.Value,
                            value: r.get().getCommonInitOptions()
                              .userEmailConsentDefault
                              ? r.get().getCommonInitOptions().userEmail
                              : "",
                          },
                        ],
                        classes: [
                          ke.c.FontSubText,
                          ke.c.FormEmailInput,
                          ke.c.TextInput,
                        ],
                        id: ke.d.TFormEmailTextBox,
                        tag: ke.g.Input,
                      },
                    ],
                  },
                  {
                    children: [
                      {
                        attributes: [
                          { name: ke.a.HRef, value: ke.h.PrivacyStatementLink },
                          { name: ke.a.Target, value: ke.b.BlankWindow },
                          { name: ke.a.Rel, value: ke.b.NoReferrer },
                        ],
                        classes: [ke.c.Link],
                        innerText: me.a().PrivacyStatement,
                        tag: ke.g.Anchor,
                      },
                    ],
                    classes: [
                      ke.c.FontSubSubText,
                      ke.c.TextAlignLeft,
                      ke.c.PrivacyStatementLinkDiv,
                    ],
                  },
                  {
                    children: [
                      {
                        attributes: [{ name: ke.a.Disabled, value: ke.b.True }],
                        classes: [ke.c.FontSubText, ke.c.SubmitButton],
                        id: ke.d.TFormSubmitButton,
                        innerText: me.a().Form.Submit,
                        tag: ke.g.Button,
                      },
                      {
                        classes: [ke.c.Spinner, ke.c.Hidden],
                        id: ke.d.TFormSubmitButtonSpinner,
                        tag: ke.g.Div,
                      },
                    ],
                    id: ke.d.TFormSubmitButtonContainer,
                  },
                ],
                classes: [ke.c.Hidden],
                id: ke.d.TFormContainer,
              }),
              A)
            : {},
        ],
        classes: [ke.c.Toast, Ve.f() ? ke.c.Rtl : ""],
        id: ke.d.ToastContainer,
      })),
        document.body.insertBefore(t, document.body.firstChild),
        Ve.l(ke.d.ToastContainer, !0),
        (function (e) {
          void 0 === e && (e = function (e) {}),
            (Ke = e),
            (Pe = !0),
            We(ke.d.ToastContainer, "keyup", qe),
            We(ke.d.ToastCancel, "click", Ze),
            We(ke.d.TPromptContainer, "click", $e),
            We(ke.d.TFormSubmitButton, "click", At),
            We(ke.d.TFormEmailCheckBox, "click", je),
            je(null);
          for (
            var t = document.querySelectorAll(
                'input[name="' + ke.d.TFormRating + '"]'
              ),
              A = 0;
            A < t.length;
            ++A
          )
            Ve.h(t[A], "click", tt);
          var n =
            r.get().getFloodgateSurvey().getSurveyType() ===
            se.ISurvey.Type.Intercept;
          r.get().getFloodgateSurvey().showPrompt || n
            ? Ye(l.a.SURVEY_UI_PROMPT_SHOWN)
            : et();
          var i = n ? 0 : r.get().getFloodgateInitOptions().autoDismiss;
          if (0 !== i) {
            var o = void 0;
            switch (i) {
              case 1:
                o = 7e3;
                break;
              case 2:
                o = 14e3;
                break;
              case 3:
                o = 21e3;
                break;
              case 4:
                o = 28e3;
            }
            void 0 !== o &&
              setTimeout(function () {
                Pe && (Je(!1), Ye(l.a.SURVEY_UI_PROMPT_AUTODISMISSED));
              }, o);
          }
        })(function (t) {
          Ve.l(ke.d.ToastContainer, !1),
            Ve.d(ke.d.ToastContainer),
            r
              .get()
              .getFloodgateInitOptions()
              .onDismiss(r.get().getFloodgateSurvey().getCampaignId(), t),
            e();
        });
    }
    var st = (function () {
        function e(e) {
          (this.comment = ""),
            (this.ratingIndex = -1),
            (this.showPrompt = e.showPrompt),
            (this.showEmailRequest =
              !!R.h(e.showEmailRequest) && e.showEmailRequest),
            (this.survey = e);
        }
        return (
          (e.prototype.getPromptQuestion = function () {
            return this.survey.promptQuestion;
          }),
          (e.prototype.getTitle = function () {
            return this.survey.title;
          }),
          (e.prototype.getPromptYesButtonText = function () {
            return this.survey.promptYesButtonText;
          }),
          (e.prototype.getPromptNoButtonText = function () {
            return this.survey.promptNoButtonText;
          }),
          (e.prototype.getRatingValuesAscending = function () {
            return this.survey.ratingValuesAscending;
          }),
          (e.prototype.getRatingQuestion = function () {
            return this.survey.ratingQuestion;
          }),
          (e.prototype.getCommentQuestion = function () {
            return this.survey.commentQuestion;
          }),
          (e.prototype.getInterceptTitle = function () {}),
          (e.prototype.getInterceptQuestion = function () {}),
          (e.prototype.getInterceptUrl = function () {}),
          (e.prototype.setValues = function (e, t) {
            (this.comment = t),
              this.isRatingIndexValid(e)
                ? (this.ratingIndex = e)
                : (this.ratingIndex = -1);
          }),
          (e.prototype.getJsonElements = function () {
            var e = {};
            return (
              (e.comment = this.comment),
              (e.rating = this.getNormalizedRatingScore()),
              (e.survey = { surveyId: this.getCampaignId() }),
              e
            );
          }),
          (e.prototype.getSurveyType = function () {
            return this.survey.surveyType;
          }),
          (e.prototype.getCampaignId = function () {
            return this.survey.campaignId;
          }),
          (e.prototype.getId = function () {
            return this.getCampaignId();
          }),
          (e.prototype.isRatingIndexValid = function (e) {
            return e >= 0 && e < this.survey.ratingValuesAscending.length;
          }),
          (e.prototype.getNormalizedRatingScore = function () {
            return this.isRatingIndexValid(this.ratingIndex)
              ? this.survey.isZeroBased
                ? this.ratingIndex /
                  (this.survey.ratingValuesAscending.length - 1)
                : (this.ratingIndex + 1) /
                  this.survey.ratingValuesAscending.length
              : -1;
          }),
          e
        );
      })(),
      ut = (function () {
        function e() {
          (this.showPrompt = !0),
            (this.showEmailRequest = !0),
            (this.comment = "");
        }
        return (
          (e.prototype.getPromptQuestion = function () {
            return "Prompt question?";
          }),
          (e.prototype.getTitle = function () {
            return "Title";
          }),
          (e.prototype.getPromptYesButtonText = function () {
            return "Yes";
          }),
          (e.prototype.getPromptNoButtonText = function () {
            return "No";
          }),
          (e.prototype.getRatingValuesAscending = function () {
            return ["worst", "worse", "ok", "better", "best"];
          }),
          (e.prototype.getRatingQuestion = function () {
            return "Rating question?";
          }),
          (e.prototype.getCommentQuestion = function () {
            return "Comment question?";
          }),
          (e.prototype.getInterceptTitle = function () {
            return "Intercept Title";
          }),
          (e.prototype.getInterceptQuestion = function () {
            return "Intercept question?";
          }),
          (e.prototype.getInterceptUrl = function () {
            return "https://example.com";
          }),
          (e.prototype.setValues = function (e, t) {
            t && (this.comment = t),
              R.i(e) && e >= 0 && e <= 4 && (this.rating = e / 4);
          }),
          (e.prototype.getJsonElements = function () {
            var e = {};
            return (
              this.comment && (e.comment = this.comment),
              this.rating && (e.rating = this.rating),
              e
            );
          }),
          (e.prototype.getSurveyType = function () {
            return se.ISurvey.Type.Nps;
          }),
          (e.prototype.getCampaignId = function () {
            return "10000000-0000-0000-0000-000000000000";
          }),
          (e.prototype.getId = function () {
            return "00000000-0000-0000-0000-000000000000";
          }),
          e
        );
      })(),
      ct = (function () {
        function e() {}
        return (
          (e.prototype.log_TriggerMet = function (e, t, A, n, r) {
            l.b().logEvent(l.a.SURVEY_FLOODGATE_TRIGGERMET, 1, {
              CampaignId: e,
              SurveyId: t,
              SurveyType: A,
              SurveyActivityInfo: n,
              AdditionalSurveyInfo: r,
            });
          }),
          (e.prototype.log_UserSelected = function (e, t, A, n) {
            l.b().logEvent(l.a.SURVEY_FLOODGATE_USERSELECTED, 1, {
              CampaignId: e,
              SurveyId: t,
              SurveyType: A,
              AdditionalSurveyInfo: n,
            });
          }),
          (e.prototype.log_CampaignLoad_Failed = function (e) {
            l.b().logEvent(l.a.SURVEY_FLOODGATE_CAMPAIGNLOAD_FAILED, 2, {
              ErrorMessage: e,
            });
          }),
          (e.prototype.log_Error = function (e, t) {
            var A = { name: e };
            l.b().logEvent(A, 2, { ErrorMessage: t });
          }),
          (e.prototype.log_Event = function (e, t) {
            var A = { name: e };
            l.b().logEvent(A, 1, t);
          }),
          e
        );
      })(),
      lt = !1;
    function dt() {
      return new Promise(function (e, t) {
        var A = function (e) {
          var A = o.FloodgateEngine.getTelemetryLogger();
          A &&
            A.log_Event(Ee.TelemetryEvent.Floodgate.Initialize.Failed, {
              ErrorMessage: e,
            }),
            t(e);
        };
        if (Te) e();
        else {
          try {
            n.a();
          } catch (e) {
            t("CommonApp initialization failed: {" + e + "}");
          }
          o.FloodgateEngine.setTelemetryLogger(new ct()),
            xe
              .a()
              .then(function () {
                try {
                  !(function () {
                    if (!k.a.isStorageAvailable())
                      throw new Error("window.localStorage is not available.");
                    i.a().OfficeBrowserFeedback.floodgate =
                      i.a().OfficeBrowserFeedback.floodgate || {};
                    var e = i.a().OfficeBrowserFeedback.floodgate.initOptions;
                    if (void 0 !== (e = e || {}).campaignDefinitions) {
                      var t = Object(Ce.FilterValidCampaignDefinitions)(
                        e.campaignDefinitions
                      );
                      if (t.error)
                        throw new Error(
                          "floodgate.initOptions.campaignDefinitions error: " +
                            t.error
                        );
                      new k.a().write(
                        se.IFloodgateStorageProvider.FileType
                          .CampaignDefinitions,
                        JSON.stringify(e.campaignDefinitions)
                      );
                    }
                    if (
                      (r.get().setFloodgateInitOptions(e),
                      Qe.a.resetSessionActivity(),
                      (Te = !0),
                      !r.get().getFloodgateInitOptions().surveyEnabled)
                    ) {
                      var A = o.FloodgateEngine.getTelemetryLogger();
                      A &&
                        A.log_Event(
                          Ee.TelemetryEvent.Floodgate.Start.SurveysDisabled,
                          {
                            Count: be,
                            Message:
                              "Floodgate initialized with surveys disabled (surveyEnabled is false)",
                          }
                        );
                    }
                  })();
                } catch (e) {
                  A("CommonFloodgate initialization failed: {" + e + "}");
                }
                e();
              })
              .catch(function (e) {
                A("Initialization failed: {" + e + "}");
              });
        }
      });
    }
    function gt(e) {
      return new Promise(function (t, A) {
        lt
          ? A("Control already open")
          : (r.get().setFloodgateSurvey(e || new ut()),
            at(function () {
              lt = !1;
            }),
            (lt = !0),
            t());
      });
    }
    function pt(e) {
      return gt(new st(e));
    }
    function ht() {
      n.b(), xe.b(), (Te = !1), Me(), (lt = !1);
    }
    function ft() {
      return se.IFloodgateSettingIdMap.RoamingSettingIdMap;
    }
    i.g(pt), i.h(gt), i.f(dt), i.c(ft);
  },
  function (e, t, A) {
    "use strict";
    A.r(t),
      A.d(t, "initialize", function () {
        return Me;
      }),
      A.d(t, "multiFeedback", function () {
        return Pe;
      }),
      A.d(t, "singleFeedback", function () {
        return xe;
      }),
      A.d(t, "reset", function () {
        return ke;
      });
    var n = {};
    A.r(n),
      A.d(n, "generate", function () {
        return Ce;
      }),
      A.d(n, "containerId", function () {
        return we;
      }),
      A.d(n, "onSelect", function () {
        return ye;
      }),
      A.d(n, "type", function () {
        return Ee;
      });
    var r = {};
    A.r(r),
      A.d(r, "generate", function () {
        return Fe;
      }),
      A.d(r, "containerId", function () {
        return Ue;
      }),
      A.d(r, "onSelect", function () {
        return Se;
      }),
      A.d(r, "type", function () {
        return Qe;
      });
    var i = {};
    A.r(i),
      A.d(i, "generate", function () {
        return Te;
      }),
      A.d(i, "containerId", function () {
        return be;
      }),
      A.d(i, "onSelect", function () {
        return Ie;
      }),
      A.d(i, "type", function () {
        return Ne;
      });
    var o = A(24),
      a = A(25),
      s = A(1),
      u = A(2),
      c = A(7),
      l = A(0),
      d = A(23),
      g = A(22),
      p = A(32),
      h = A(3);
    function f(e) {
      var t = document
        .getElementById(l.d.MainContainer)
        .querySelectorAll(
          "a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex ='-1']), object, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]"
        );
      if (e.id === l.d.LastTabbable)
        for (var A = 0; A < t.length; A++) {
          if ((n = t[A]).id !== l.d.FirstTabbable && B(n))
            return void n.focus();
        }
      else if (e.id === l.d.FirstTabbable)
        for (A = t.length - 1; A >= 0; A--) {
          var n;
          if ((n = t[A]).id !== l.d.LastTabbable && B(n)) return void n.focus();
        }
    }
    function B(e) {
      if (!e.parentElement) return !1;
      if (/\S/.test(e.parentElement.id)) {
        if (e.parentElement.className.indexOf(l.c.Visible) >= 0) return !0;
        if (e.parentElement.className.indexOf(l.c.Hidden) >= 0) return !1;
      }
      return B(e.parentElement);
    }
    var m,
      v,
      C,
      w = !1,
      y = !0,
      E = void 0,
      F = void 0,
      U = [
        l.d.OverallSmileAnchor,
        l.d.OverallFrownAnchor,
        l.d.OverallIdeaAnchor,
        l.d.OverallBugAnchor,
      ];
    function S(e) {
      var t;
      for (t = 0; t < U.length; t++)
        U[t] === e
          ? h.k(U[t], l.a.AriaSelected, l.b.True)
          : h.k(U[t], l.a.AriaSelected, l.b.False);
    }
    function Q(e) {
      h.i(window, "keyup", _),
        (function () {
          for (var e = 0, t = T; e < t.length; e++) {
            var A = t[e];
            h.m(A.id, A.event, A.listener);
          }
          T = [];
        })(),
        m(e);
    }
    var T = [];
    function b(e, t, A) {
      h.g(e, t, A), T.push({ event: t, id: e, listener: A });
    }
    function I(e, t, A, n, r) {
      void 0 === r && (r = function (e) {}),
        (w = A),
        (v = e),
        (C = t),
        (y = n),
        b(l.d.OverallSmileAnchor, "click", M),
        b(l.d.OverallFrownAnchor, "click", K),
        b(l.d.OverallIdeaAnchor, "click", P),
        b(l.d.OverallBugAnchor, "click", x),
        b(l.d.CloseButton, "click", function () {
          Q(!1);
        }),
        b(
          l.d.BasicFormSubmitButton,
          "click",
          G(
            l.d.BasicFormSubmitButton,
            l.d.BasicFormSubmitButtonSpinner,
            l.d.BasicFormComment,
            l.d.BasicFormEmailInput,
            l.d.BasicFormScreenshotCheckbox,
            l.d.BasicFormScreenshotPreview,
            l.d.BasicFormCategoriesDropdown
          )
        ),
        b(
          l.d.BasicFormScreenshotCheckbox,
          "click",
          J(l.d.BasicFormScreenshotCheckbox, l.d.BasicFormScreenshotPreview)
        ),
        b(l.d.UserVoiceFormGoButton, "click", z),
        b(l.d.ThanksPanelCloseButton, "click", function (e) {
          return (t = !0), k(l.d.ThanksPanelContainer, !0), void Q(t);
          var t;
        }),
        b(l.d.BasicFormCancelButton, "click", X),
        N(r),
        y ||
          (h.b(l.d.MainContentHolder, l.c.MarginLeft180px),
          h.b(l.d.ColumnSeparatorDiv, l.c.ShowRightBorder));
    }
    function N(e) {
      (m = e),
        h.c(window, "keyup", _),
        b(l.d.OverlayBackground, "click", O),
        b(l.d.MainContainer, "click", D),
        b(l.d.MainContainer, "keyup", H),
        b(l.d.PrivacyStatementLink, "click", L),
        b(l.d.EmailCheckBox, "click", W),
        b(l.d.BasicFormComment, "keyup", Y),
        b(l.d.SingleFormComment, "keyup", j),
        W(null);
    }
    function H(e) {
      (e.keyCode || e.which) === l.e.Tab &&
        ((document.activeElement.id === l.d.FirstTabbable && e.shiftKey) ||
          (document.activeElement.id === l.d.LastTabbable && !e.shiftKey)) &&
        (e.stopPropagation(), f(document.activeElement));
    }
    function _(e) {
      e.keyCode === l.e.Esc && (e.preventDefault(), e.stopPropagation(), Q(!1));
    }
    function O(e) {
      e.preventDefault(), e.stopPropagation(), Q(!1);
    }
    function D(e) {
      e.stopPropagation();
    }
    function L(e) {
      e.stopPropagation();
    }
    function R(e, t) {
      if (
        (e.preventDefault(),
        e.stopPropagation(),
        h.j(l.d.OverallSmileAnchor, l.c.OverallAnchorActive),
        h.j(l.d.OverallFrownAnchor, l.c.OverallAnchorActive),
        h.j(l.d.OverallIdeaAnchor, l.c.OverallAnchorActive),
        h.j(l.d.OverallBugAnchor, l.c.OverallAnchorActive),
        t && h.b(t, l.c.OverallAnchorActive),
        u
          .b()
          .logEvent(u.a.InApp.UI.Form.Shown.VALUE, 1, {
            FeedbackType: E,
            PanelType: F,
          }),
        void 0 !== E)
      ) {
        h.l(l.d.LeftFormContainer, !0),
          h.l(l.d.MiddleFormContainer, !0),
          h.l(l.d.LeftPanelContainer, !1);
        var A = v[E];
        V(A.containerId), y && V(A.containerId), A.onSelect(E);
      }
      if (void 0 !== F) {
        for (var n in (h.l(l.d.LeftFormContainer, !1),
        h.l(l.d.MiddleFormContainer, !1),
        h.l(l.d.LeftPanelContainer, !0),
        C))
          C.hasOwnProperty(n) && h.l(C[n].containerId, !0);
        C[F].onSelect(F);
      }
    }
    function M(e) {
      (E = c.b.Smile),
        (F = void 0),
        S(l.d.OverallSmileAnchor),
        h.k(l.d.MiddleFormContainer, l.a.AriaExpanded, l.b.True),
        h.k(
          l.d.MiddleFormContainer,
          l.a.AriaLabelledBy,
          l.d.OverallSmileAnchor
        ),
        R(e, l.d.OverallSmileAnchor);
    }
    function K(e) {
      (E = c.b.Frown),
        (F = void 0),
        S(l.d.OverallFrownAnchor),
        h.k(l.d.MiddleFormContainer, l.a.AriaExpanded, l.b.True),
        h.k(
          l.d.MiddleFormContainer,
          l.a.AriaLabelledBy,
          l.d.OverallFrownAnchor
        ),
        R(e, l.d.OverallFrownAnchor);
    }
    function P(e) {
      (E = c.b.Idea),
        (F = void 0),
        S(l.d.OverallIdeaAnchor),
        h.k(l.d.MiddleFormContainer, l.a.AriaExpanded, l.b.True),
        h.k(l.d.MiddleFormContainer, l.a.AriaLabelledBy, l.d.OverallIdeaAnchor),
        R(e, l.d.OverallIdeaAnchor);
    }
    function x(e) {
      (E = c.b.Bug),
        (F = void 0),
        S(l.d.OverallBugAnchor),
        h.k(l.d.MiddleFormContainer, l.a.AriaExpanded, l.b.True),
        h.k(l.d.MiddleFormContainer, l.a.AriaLabelledBy, l.d.OverallBugAnchor),
        R(e, l.d.OverallBugAnchor);
    }
    function k(e, t) {
      h.l(l.d.LeftFormContainer, t);
      for (
        var A = document.getElementById(l.d.MiddleFormContainer).children,
          n = 0;
        n < A.length;
        n++
      )
        A[n].id !== e && h.l(A[n].id, t);
    }
    function V(e) {
      for (var t in v) v.hasOwnProperty(t) && h.l(v[t].containerId, !1);
      w
        ? (h.l(l.d.LeftFormContainer, !1),
          h.l(l.d.MiddleFormContainer, !0),
          h.l(e, !0))
        : (h.b(l.d.ColumnSeparatorDiv, l.c.ShowRightBorder),
          h.l(l.d.MiddleFormContainer, !0),
          h.l(e, !0),
          h.b(l.d.LeftFormContainer, l.c.SlideLeft),
          h.b(l.d.MiddleFormContainer, l.c.SlideLeft));
    }
    function G(e, t, A, n, r, i, o) {
      return function (i) {
        i.preventDefault(), i.stopPropagation(), h.l(e, !1);
        var a = new p.a(t),
          c = new d.a(
            s.get().getCommonInitOptions().environment,
            "Sas",
            s.get().getCommonInitOptions().appId,
            E,
            s.get().getCommonInitOptions().applicationGroup,
            s.get().getCommonInitOptions().telemetryGroup,
            s.get().getCommonInitOptions().webGroup
          ),
          f = document.getElementById(A);
        f && !!f.value && c.setComment(f.value);
        var B = document.getElementById(l.d.EmailCheckBox),
          m = document.getElementById(n),
          v = m && !!m.value;
        B && B.checked && v && c.setEmail(m.value);
        var C = document.getElementById(r),
          w = C && C.checked,
          y = document.getElementById(o);
        if (
          (y && y.selectedIndex > 0 && c.setCategory(y.value),
          u
            .b()
            .logEvent(u.a.InApp.UI.Form.Submit.VALUE, 1, {
              FeedbackType: E,
              IsEmailIncluded: v,
              IsScreenshotIncluded: w,
            }),
          w)
        ) {
          var U = performance.now();
          g.a(document.body)
            .then(function (e) {
              var t = performance.now();
              u
                .b()
                .logEvent(u.a.Shared.Screenshot.Render.Success.VALUE, 1, {
                  TimeMilliseconds: t - U,
                }),
                c.setScreenshot(e),
                c.submit();
            })
            .catch(function (e) {
              var t = performance.now();
              u
                .b()
                .logEvent(u.a.Shared.Screenshot.Render.Failed.VALUE, 2, {
                  ErrorMessage: e,
                  TimeMilliseconds: t - U,
                }),
                c.submit();
            });
        } else c.submit();
        a.destroy(),
          s.get().getInAppFeedbackInitOptions().isShowThanks
            ? (function (e) {
                (E = void 0),
                  (F = 0),
                  k(l.d.ThanksPanelContainer, !1),
                  R(e, void 0);
              })(i)
            : Q(!0);
      };
    }
    function z(e) {
      e.preventDefault(),
        e.stopPropagation(),
        window.open(
          document
            .getElementById(l.d.UserVoiceFormGoButton)
            .getAttribute(l.a.Source)
        ),
        Q(!1);
    }
    function J(e, t) {
      return function (A) {
        h.a(e, t);
      };
    }
    function X() {
      Q(!1);
    }
    function W(e) {
      var t = document.getElementById(l.d.EmailCheckBox);
      if (t) {
        var A = document.getElementById(l.d.BasicFormEmailInput);
        (A.value = t.checked ? s.get().getCommonInitOptions().userEmail : null),
          (A.disabled = !t.checked);
      }
    }
    function Y(e) {
      var t = document.getElementById(l.d.BasicFormComment),
        A = t && !!t.value;
      document.getElementById(l.d.BasicFormSubmitButton).disabled = !A;
    }
    function j(e) {
      var t = document.getElementById(l.d.SingleFormComment),
        A = t && !!t.value;
      document.getElementById(l.d.SingleFormSubmitButton).disabled = !A;
    }
    var q,
      Z = A(4);
    function $(e) {
      for (
        var t = e || [],
          A = [
            {
              attributes: [{ name: "selected", value: "true" }],
              innerText: Z.a().Form.CategoryPlaceholder,
              tag: l.g.Option,
            },
          ],
          n = 0,
          r = t;
        n < r.length;
        n++
      ) {
        var i = r[n];
        A.push({ innerText: i, tag: l.g.Option });
      }
      return A;
    }
    !(function (e) {
      (e[(e.Single = 0)] = "Single"),
        (e[(e.Basic = 1)] = "Basic"),
        (e[(e.UserVoice = 2)] = "UserVoice");
    })(q || (q = {}));
    var ee = "obf-star",
      te = {
        children: [
          {
            attributes: [
              { name: l.a.Id, value: ee },
              { name: l.a.X, value: "0" },
              { name: l.a.Y, value: "0" },
              { name: l.a.Width, value: "105" },
              { name: l.a.Height, value: "100" },
              {
                name: l.a.Points,
                value:
                  "52.5, 80.3 84, 100 76.3, 63 105, 38 67.2, 35 52.5, 0 37.8, 35 0, 38 28.7, 63 20, 100 52.5, 80.3",
              },
            ],
            id: ee,
            tag: l.g.Polygon,
          },
        ],
        tag: l.g.Defs,
      },
      Ae = {
        attributes: [{ name: l.a.xlinkHref, value: "#" + ee }],
        tag: l.g.Use,
      },
      ne = {
        attributes: [
          { name: l.a.xlinkHref, value: "#" + ee },
          { name: l.a.Transform, value: "translate(105 0)" },
        ],
        tag: l.g.Use,
      },
      re = {
        attributes: [
          { name: l.a.xlinkHref, value: "#" + ee },
          { name: l.a.Transform, value: "translate(210 0)" },
        ],
        tag: l.g.Use,
      },
      ie = {
        attributes: [
          { name: l.a.xlinkHref, value: "#" + ee },
          { name: l.a.Transform, value: "translate(315 0)" },
        ],
        tag: l.g.Use,
      },
      oe = {
        attributes: [
          { name: l.a.xlinkHref, value: "#" + ee },
          { name: l.a.Transform, value: "translate(420 0)" },
        ],
        tag: l.g.Use,
      },
      ae = {
        attributes: [{ name: l.a.ViewBox, value: "0 0 525 100" }],
        children: [te, Ae, ne, re, ie, oe],
        classes: [l.c.RatingGraphic],
        tag: l.g.Svg,
      },
      se = {
        attributes: [{ name: l.a.ViewBox, value: "0 0 105 100" }],
        children: [te, Ae],
        classes: [l.c.RatingGraphic, l.c.RatingGraphicFilled],
        tag: l.g.Svg,
      },
      ue = {
        attributes: [{ name: l.a.ViewBox, value: "0 0 210 100" }],
        children: [te, Ae, ne],
        classes: [l.c.RatingGraphic, l.c.RatingGraphicFilled],
        tag: l.g.Svg,
      },
      ce = {
        attributes: [{ name: l.a.ViewBox, value: "0 0 315 100" }],
        children: [te, Ae, ne, re],
        classes: [l.c.RatingGraphic, l.c.RatingGraphicFilled],
        tag: l.g.Svg,
      },
      le = {
        attributes: [{ name: l.a.ViewBox, value: "0 0 420 100" }],
        children: [te, Ae, ne, re, ie],
        classes: [l.c.RatingGraphic, l.c.RatingGraphicFilled],
        tag: l.g.Svg,
      },
      de = {
        attributes: [{ name: l.a.ViewBox, value: "0 0 525 100" }],
        children: [te, Ae, ne, re, ie, oe],
        classes: [l.c.RatingGraphic, l.c.RatingGraphicFilled],
        tag: l.g.Svg,
      };
    function ge(e) {
      return {
        children: [
          ae,
          {
            attributes: [
              { name: l.a.Type, value: "radio" },
              { name: l.a.Name, value: e },
              { name: l.a.Value, value: "1" },
            ],
            tag: l.g.Input,
          },
          se,
          {
            attributes: [
              { name: l.a.Type, value: "radio" },
              { name: l.a.Name, value: e },
              { name: l.a.Value, value: "2" },
            ],
            tag: l.g.Input,
          },
          ue,
          {
            attributes: [
              { name: l.a.Type, value: "radio" },
              { name: l.a.Name, value: e },
              { name: l.a.Value, value: "3" },
            ],
            tag: l.g.Input,
          },
          ce,
          {
            attributes: [
              { name: l.a.Type, value: "radio" },
              { name: l.a.Name, value: e },
              { name: l.a.Value, value: "4" },
            ],
            tag: l.g.Input,
          },
          le,
          {
            attributes: [
              { name: l.a.Type, value: "radio" },
              { name: l.a.Name, value: e },
              { name: l.a.Value, value: "5" },
            ],
            tag: l.g.Input,
          },
          de,
        ],
        classes: [l.c.Rating],
        id: e,
        tag: l.g.Span,
      };
    }
    var pe = l.d.SingleFormContainer;
    q.Single;
    function he(e) {
      var t = { children: [] },
        A = {};
      for (var n in e) {
        if (e.hasOwnProperty(n))
          !(e[n].containerId in A) &&
            (t.children.push(e[n].generate()), (A[e[n].containerId] = !0));
      }
      return t.children;
    }
    function fe(e) {
      var t = { children: [] },
        A = {};
      for (var n in e) {
        if (e.hasOwnProperty(n))
          !(e[n].containerId in A) &&
            (t.children.push(e[n].generate()), (A[e[n].containerId] = !0));
      }
      return t.children;
    }
    function Be(e) {
      var t = { children: [] };
      return (
        c.b.Smile in e &&
          t.children.push(
            me(
              l.d.OverallSmileAnchor,
              l.d.OverallSmileImage,
              '<svg viewBox="0 0 72 72" width="24px" height="24px" focusable="false"><path d="M36 1C16.7 1 1 16.7 1 36s15.7 35 35 35c19.3 0 35-15.7 35-35S55.3 1 36 1ZM49.3 18.3c2.3 0 4.2 2.7 4.2 6 0 3.3-1.9 6-4.2 6 -2.3 0-4.2-2.7-4.2-6C45.1 21 47 18.3 49.3 18.3ZM22.9 18.3c2.3 0 4.2 2.7 4.2 6 0 3.3-1.9 6-4.2 6 -2.3 0-4.2-2.7-4.2-6C18.7 21 20.6 18.3 22.9 18.3ZM36 58.6c-8.5 0-16-4.1-20.9-10.4l3.5-3.6c3.5 4.5 9.9 7.6 17.4 7.6 7.4 0 13.9-3.1 17.4-7.6l3.6 3.6C52.1 54.4 44.4 58.6 36 58.6Z"/></svg>',
              l.d.OverallSmileText,
              Z.a().SmileForm.Anchor
            )
          ),
        c.b.Frown in e &&
          t.children.push(
            me(
              l.d.OverallFrownAnchor,
              l.d.OverallFrownImage,
              '<svg viewBox="0 0 72 72" width="24px" height="24px" focusable="false"><path d="M36 1C16.7 1 1 16.7 1 36s15.7 35 35 35c19.3 0 35-15.7 35-35S55.3 1 36 1ZM49.3 18.3c2.3 0 4.2 2.7 4.2 6 0 3.3-1.9 6-4.2 6 -2.3 0-4.2-2.7-4.2-6C45.1 21 47 18.3 49.3 18.3ZM22.9 18.3c2.3 0 4.2 2.7 4.2 6 0 3.3-1.9 6-4.2 6 -2.3 0-4.2-2.7-4.2-6C18.7 21 20.6 18.3 22.9 18.3ZM52.8 57.9c-3.3-4.4-9.6-7.3-16.7-7.3 -7.2 0-13.4 3-16.7 7.3l-3.4-3.4c4.7-6.1 11.9-10 20.1-10 8.2 0 15.5 4 20.2 10L52.8 57.9Z"/></svg>',
              l.d.OverallFrownText,
              Z.a().FrownForm.Anchor
            )
          ),
        c.b.Idea in e &&
          t.children.push(
            me(
              l.d.OverallIdeaAnchor,
              l.d.OverallIdeaImage,
              '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" focusable="false" viewBox="0,0,2048,2048"><path fill="#FAFAFA" fill-opacity="1.000" d="M 213 1920 v -546 l 275 -649 h 1072 l 275 649 v 546 z" /><path fill="#3A3A38" fill-opacity="1.000" d="M 1877 1365 v 598 h -1706 v -598 l 289 -682 h 288 l -41 41 l 44 44 h -239 l -248 597 h 1520 l -221 -532 l 63 -62 m 166 680 h -1536 v 426 h 1536 z" /><path fill="#FAFAFA" fill-opacity="1.000" d="M 1049 1067 l -342 -343 l 664 -664 l 482 483 l -523 524 z" /><path fill="#797774" fill-opacity="1.000" d="M 1536 649 l -271 -272 l 60 -60 l 272 271 m -211 212 l -272 -272 l 60 -60 l 272 271 m -211 211 l -272 -271 l 61 -61 l 271 272 z" /><path fill="#1E8BCD" fill-opacity="1.000" d="M 989 1067 l -343 -343 l 725 -724 l 543 543 l -524 524 h -121 l 524 -524 l -422 -422 l -604 603 l 343 343 z" /><path fill="#3A3A38" fill-opacity="1.000" d="M 1451 1109 h -854 v -85 h 854 z" /></svg>',
              l.d.OverallIdeaText,
              Z.a().IdeaForm.Anchor
            )
          ),
        c.b.Bug in e &&
          t.children.push(
            me(
              l.d.OverallBugAnchor,
              l.d.OverallBugImage,
              '<svg viewBox="150 100 1748 1748" width="24px" height="24px" focusable="false"><path d="M1824 1088q0 26-19 45t-45 19h-224q0 171-67 290l208 209q19 19 19 45t-19 45q-18 19-45 19t-45-19l-198-197q-5 5-15 13t-42 28.5-65 36.5-82 29-97 13v-896h-128v896q-51 0-101.5-13.5t-87-33-66-39-43.5-32.5l-15-14-183 207q-20 21-48 21-24 0-43-16-19-18-20.5-44.5t15.5-46.5l202-227q-58-114-58-274h-224q-26 0-45-19t-19-45 19-45 45-19h224v-294l-173-173q-19-19-19-45t19-45 45-19 45 19l173 173h844l173-173q19-19 45-19t45 19 19 45-19 45l-173 173v294h224q26 0 45 19t19 45zm-480-576h-640q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5z"/></svg>',
              l.d.OverallBugText,
              Z.a().BugForm.Anchor
            )
          ),
        t.children
      );
    }
    function me(e, t, A, n, r) {
      return {
        attributes: [
          { name: l.a.Type, value: l.b.Button },
          { name: l.a.Role, value: l.b.Tab },
          { name: l.a.AriaLabel, value: r },
          { name: l.a.AriaSelected, value: l.b.False },
        ],
        children: [
          { classes: [l.c.OverallImage], id: t, innerHTML: A, tag: l.g.Div },
          { classes: [l.c.FontSubtitle, l.c.OverallText], id: n, innerText: r },
        ],
        classes: [l.c.OverallAnchor, l.c.TextAlignLeft],
        id: e,
        tag: l.g.Button,
      };
    }
    var ve = A(29);
    function Ce() {
      var e = s.get().getInAppFeedbackLaunchOptions().categories;
      return {
        children: [
          {
            attributes: [{ name: l.a.For, value: l.d.BasicFormComment }],
            classes: [
              l.c.FontSubtitle,
              l.c.TextAlignLeft,
              l.c.FormQuestionMiddleText,
            ],
            id: l.d.BasicFormQuestionMiddleText,
            tag: l.g.Label,
            innerText: s.get().getInAppFeedbackInitOptions().transitionEnabled
              ? ""
              : Z.a().SingleForm.Title,
          },
          {
            attributes: [
              { name: l.a.Id, value: l.d.BasicFormCategoriesDropdown },
            ],
            brs: e.show,
            children: $(e ? e.customCategories : null),
            classes: [
              l.c.FontSubText,
              l.c.FormCategoriesDropdown,
              l.c.TextInput,
            ],
            tag: l.g.Select,
          },
          {
            attributes: [
              { name: l.a.Placeholder, value: Z.a().Form.CommentPlaceholder },
              { name: l.a.MaxLength, value: l.b.TextAreaMaxLength },
            ],
            classes: [l.c.FontSubText, l.c.FormComment, l.c.TextInput],
            id: l.d.BasicFormComment,
            tag: l.g.TextArea,
          },
          {
            brs: !1,
            children: [
              {
                attributes: [{ name: l.a.For, value: l.d.BasicFormRating }],
                classes: [l.c.FontText, l.c.TextAlignLeft, l.c.FormRatingLabel],
                innerText: Z.a().Form.RatingLabel,
                tag: l.g.Label,
              },
              ge(l.d.BasicFormRating),
            ],
            classes: [l.c.FormRatingContainer],
          },
          {
            brs: s.get().getInAppFeedbackInitOptions().showEmailAddress,
            children: [
              {
                attributes: [
                  { name: l.a.Type, value: l.b.Checkbox },
                  { name: l.b.Unchecked, value: "" },
                ],
                classes: [l.c.FormEmailCheckBox, l.c.CheckBox],
                id: l.d.EmailCheckBox,
                tag: l.g.Input,
              },
              {
                attributes: [{ name: l.a.For, value: l.d.EmailCheckBox }],
                classes: [
                  l.c.FontSubText,
                  l.c.TextAlignLeft,
                  l.c.FormEmailLabel,
                ],
                innerText: Z.a().Form.EmailCheckBoxLabel,
                tag: l.g.Label,
              },
              {
                attributes: [
                  { name: l.a.Type, value: l.b.Text },
                  { name: l.a.Placeholder, value: Z.a().Form.EmailPlaceholder },
                  { name: l.a.AriaLabel, value: Z.a().Form.EmailPlaceholder },
                  { name: l.a.Name, value: l.d.BasicFormEmailInput },
                  { name: l.a.MaxLength, value: l.b.TextAreaMaxLength },
                  {
                    name: l.a.Value,
                    value: s.get().getInAppFeedbackInitOptions().userEmail
                      ? s.get().getInAppFeedbackInitOptions().userEmail
                      : "",
                  },
                ],
                classes: [l.c.FontSubText, l.c.FormEmailInput, l.c.TextInput],
                id: l.d.BasicFormEmailInput,
                tag: l.g.Input,
              },
            ],
            classes: [l.c.FormEmailContainer],
          },
          {
            children: [
              {
                attributes: [
                  { name: l.a.Type, value: l.b.Checkbox },
                  { name: l.a.Value, value: l.b.Unchecked },
                ],
                brs: s.get().getInAppFeedbackInitOptions().screenshot,
                classes: [l.c.FormScreenshotCheckbox, l.c.CheckBox],
                id: l.d.BasicFormScreenshotCheckbox,
                tag: l.g.Input,
              },
              {
                attributes: [
                  { name: l.a.For, value: l.d.BasicFormScreenshotCheckbox },
                ],
                brs: s.get().getInAppFeedbackInitOptions().screenshot,
                classes: [
                  l.c.FontSubText,
                  l.c.TextAlignLeft,
                  l.c.FormScreenshotLabel,
                ],
                innerText: Z.a().Form.ScreenshotLabel,
                tag: l.g.Label,
              },
              {
                attributes: [
                  { name: l.a.Preview, value: l.b.ScreenshotPreview },
                  { name: l.a.Alt, value: Z.a().Form.ScreenshotImgAltText },
                ],
                brs: s.get().getInAppFeedbackInitOptions().screenshot,
                id: l.d.BasicFormScreenshotPreview,
                classes: [l.c.FormScreenshotPreview],
                tag: l.g.Img,
              },
            ],
            classes: [l.c.FormScreenshotContainer],
          },
          {
            children: [
              {
                classes: [l.c.FontSubSubText, l.c.TextAlignLeft],
                innerText: Z.a().Form.PrivacyLabel,
                tag: l.g.Label,
              },
              {
                classes: [l.c.FontSubSubText, l.c.TextAlignLeft],
                innerText: s.get().getCommonInitOptions().isCommercialHost
                  ? Z.a().Form.PrivacyConsent + " "
                  : "",
                tag: l.g.Label,
              },
              {
                attributes: [
                  { name: l.a.HRef, value: l.h.PrivacyStatementLink },
                  { name: l.a.Target, value: l.b.BlankWindow },
                  { name: l.a.Rel, value: l.b.NoReferrer },
                ],
                classes: [l.c.Link],
                id: l.d.PrivacyStatementLink,
                innerText: Z.a().PrivacyStatement,
                tag: l.g.Anchor,
              },
            ],
            classes: [
              l.c.FontSubSubText,
              l.c.TextAlignLeft,
              l.c.PrivacyStatementLinkDiv,
            ],
          },
          {
            children: [
              {
                attributes: [
                  { name: l.a.Type, value: l.b.Button },
                  { name: l.a.AriaLabel, value: Z.a().Form.Cancel },
                ],
                classes: [l.c.CancelButton],
                id: l.d.BasicFormCancelButton,
                innerText: Z.a().Form.Cancel,
                tag: l.g.Button,
              },
              {
                attributes: [{ name: l.a.Disabled, value: l.b.True }],
                classes: [l.c.SubmitButton],
                id: l.d.BasicFormSubmitButton,
                innerText: Z.a().Form.Submit,
                tag: l.g.Button,
              },
              {
                classes: [l.c.Spinner, l.c.Hidden],
                id: l.d.BasicFormSubmitButtonSpinner,
                tag: l.g.Div,
              },
            ],
            classes: [l.c.FormSubmitButtonContainer],
          },
        ],
        classes: [
          s.get().getInAppFeedbackInitOptions().transitionEnabled
            ? l.c.Hidden
            : l.c.Visible,
          l.c.MarginLeft60px,
        ],
        id: we,
      };
    }
    var we = l.d.BasicFormContainer;
    function ye(e) {
      switch (e) {
        case c.b.Smile:
          document.getElementById(l.d.BasicFormQuestionMiddleText).textContent =
            Z.a().SmileForm.Title;
          break;
        case c.b.Frown:
          document.getElementById(l.d.BasicFormQuestionMiddleText).textContent =
            Z.a().FrownForm.Title;
          break;
        case c.b.Idea:
          document.getElementById(l.d.BasicFormQuestionMiddleText).textContent =
            Z.a().IdeaForm.Title;
          break;
        case c.b.Bug:
          document.getElementById(l.d.BasicFormQuestionMiddleText).textContent =
            Z.a().BugForm.Title;
      }
      document.getElementById(l.d.BasicFormComment).focus();
    }
    var Ee = q.Basic;
    function Fe() {
      var e,
        t,
        A,
        n,
        r,
        i,
        o,
        a = s.get().getCommonInitOptions().primaryColour;
      return {
        children: [
          {
            tag: l.g.Div,
            id: l.d.ThanksPanelInnerContainer,
            children: [
              {
                id: l.d.ThanksPanelDiscussion,
                innerHTML:
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.4 25.3"\n\trole="presentation" alt="" tabindex="-1" focusable="false">\n\t<defs>\n\t\t<style>\n\t\t\t.cls-1,.cls-3{isolation:isolate;}\n\t\t\t.cls-2{fill:#e1dfdd;}\n\t\t\t.cls-3{fill:' +
                  a +
                  ';opacity:0.4;}\n\t\t\t.cls-4{fill:#c8c6c4;mix-blend-mode:multiply;}\n\t\t\t.cls-5{fill:#fff;}</style>\n\t</defs>\n\t<title>commentsOffice</title>\n\t<g class="cls-1">\n\t\t<g id="Layer_1" data-name="Layer 1">\n\t\t\t<path class="cls-2" d="M17.8,0H1.2A1.216,1.216,0,0,0,0,1.2V15.3a1.1554,1.1554,0,0,0,1.2,1.2H7l.1,\n\t\t\t\t4.1L10,16.5h7.9a1.1554,1.1554,0,0,0,1.2-1.2V1.2A1.305,1.305,0,0,0,17.8,0Z"/>\n\t\t\t<path class="cls-3" d="M28.5,10.8a6.0429,6.0429,0,0,0-3.2-2,7.1943,7.1943,0,0,0-6.4,1,7.4884,\n\t\t\t\t7.4884,0,0,0-3.1,5.7,6.016,6.016,0,0,0,.9,3.7,6.9394,6.9394,0,0,0,5,3.7l2.9,2.4L24.4,23a7.8372,\n\t\t\t\t7.8372,0,0,0,3-1.3,7.4574,7.4574,0,0,0,3-4.7A7.5076,7.5076,0,0,0,28.5,10.8Z"/>\n\t\t\t<path id="Layer2_1_MEMBER_1_FILL" data-name="Layer2 1 MEMBER 1 FILL" class="cls-4" d="M11.9885,\n\t\t\t\t8.0154a.8939.8939,0,1,0,.6371-.2589.8653.8653,0,0,0-.6371.2589M6.8115,9.24A.8977.8977,0,1,0,\n\t\t\t\t5.5532,7.9589.8977.8977,0,1,0,6.8115,9.24m3.2259-1.2412a.894.894,0,1,0,.2588.637A.8653.8653,\n\t\t\t\t0,0,0,10.0374,7.9983Z"/>\n\t\t\t<path class="cls-5" d="M20.9019,16.3243a.8008.8008,0,0,0,.2586-.5659.8371.8371,0,0,\n\t\t\t\t0-.21-.5919.7693.7693,0,0,0-1.1091-.05.8379.8379,0,0,0-.2627.5706.8012.8012,0,0,0,\n\t\t\t\t.2066.5869.77.77,0,0,0,1.1167.05m1.51-.51a.8014.8014,0,0,0,.2066.5874.7695.7695,0,0,0,\n\t\t\t\t1.1127.0541.8379.8379,0,0,0,.2627-.57.8009.8009,0,0,0-.2066-.5869.7694.7694,0,0,\n\t\t\t\t0-1.1167-.05.8011.8011,0,0,0-.2587.5663m2.8279.1272a.8371.8371,0,0,0,.21.5919.7693.7693,0,0,\n\t\t\t\t0,1.1091.05.8379.8379,0,0,0,.2627-.5706.8012.8012,0,0,0-.2066-.5869.77.77,0,0,\n\t\t\t\t0-1.1167-.05A.8008.8008,0,0,0,25.24,15.9416Z"/>\n\t\t</g>\n\t</g>\n</svg>',
                tag: l.g.Div,
              },
              {
                id: l.d.ThanksPanelVerticalContainer,
                tag: l.g.Div,
                children: [
                  {
                    classes: [
                      l.c.FontTitle,
                      l.c.TextAlignLeft,
                      l.c.FormQuestionMiddleText,
                      l.c.ThanksPanelTitle,
                    ],
                    innerText:
                      null === (e = Z.a().ThanksPanel) || void 0 === e
                        ? void 0
                        : e.Title,
                    tag: l.g.Div,
                  },
                  {
                    classes: [
                      l.c.FontSubText,
                      l.c.TextAlignLeft,
                      l.c.ThanksPanelMessage,
                    ],
                    innerText:
                      null === (t = Z.a().ThanksPanel) || void 0 === t
                        ? void 0
                        : t.AppreciateText,
                    tag: l.g.Div,
                  },
                  {
                    classes: [l.c.SubmitButton],
                    id: l.d.ThanksPanelCloseButton,
                    innerText:
                      null === (A = Z.a().ThanksPanel) || void 0 === A
                        ? void 0
                        : A.Close,
                    ariaLabel:
                      null === (n = Z.a().ThanksPanel) || void 0 === n
                        ? void 0
                        : n.Close,
                    tag: l.g.Button,
                    role: l.f.Button,
                    attributes: [
                      {
                        name: "aria-label",
                        value:
                          (null === (r = Z.a().ThanksPanel) || void 0 === r
                            ? void 0
                            : r.Title) +
                          " " +
                          (null === (i = Z.a().ThanksPanel) || void 0 === i
                            ? void 0
                            : i.AppreciateText) +
                          " " +
                          (null === (o = Z.a().ThanksPanel) || void 0 === o
                            ? void 0
                            : o.Close),
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        classes: [l.c.Hidden],
        id: Ue,
      };
    }
    var Ue = l.d.ThanksPanelContainer;
    function Se(e) {
      0 === e && document.getElementById(l.d.ThanksPanelCloseButton).focus();
    }
    var Qe = 0;
    function Te() {
      var e = s.get().getInAppFeedbackInitOptions().userVoice;
      return {
        children: [
          {
            classes: [
              l.c.FontSubtitle,
              l.c.TextAlignLeft,
              l.c.FormQuestionMiddleText,
            ],
            innerText: Z.a().UserVoiceForm.Title,
          },
          {
            classes: [l.c.FontText, l.c.TextAlignLeft, l.c.FormMiddleText],
            innerText: Z.a().UserVoiceForm.Text,
          },
          {
            children: [
              {
                children: [
                  {
                    attributes: [{ name: l.a.Source, value: e.url }],
                    classes: [l.c.SubmitButton],
                    id: l.d.UserVoiceFormGoButton,
                    innerText: Z.a().UserVoiceForm.Button,
                    tag: l.g.Button,
                  },
                ],
                classes: [l.c.FormSubmitButtonContainer],
              },
            ],
            classes: [l.c.FormBottomContainer],
          },
        ],
        classes: [l.c.Hidden, l.c.MarginLeft60px],
        id: be,
      };
    }
    var be = l.d.UserVoiceFormContainer;
    function Ie(e) {
      document.getElementById(l.d.UserVoiceFormGoButton).focus();
    }
    var Ne = q.UserVoice;
    function He(e) {
      var t = {};
      s.get().getInAppFeedbackInitOptions().isShowThanks && (t[0] = r);
      var A = {},
        o = s.get().getInAppFeedbackInitOptions().transitionEnabled;
      (A[c.b.Smile] = n),
        (A[c.b.Frown] = n),
        s.get().getInAppFeedbackInitOptions().userVoice &&
        "en" === s.get().getCommonInitOptions().locale
          ? (A[c.b.Idea] = i)
          : (A[c.b.Idea] = n),
        s.get().getInAppFeedbackInitOptions().bugForm && (A[c.b.Bug] = n),
        Oe(
          ve.a(
            (function (e, t) {
              return {
                attributes: [
                  { name: l.a.DataHtml2CanvasIgnore, value: l.b.True },
                ],
                children: [
                  {
                    attributes: [
                      { name: l.a.Role, value: l.b.Dialog },
                      { name: l.a.AriaModal, value: l.b.True },
                    ],
                    children: [
                      {
                        attributes: [
                          { name: l.a.Role, value: l.b.TabList },
                          {
                            name: l.a.AriaDescribedBy,
                            value: l.d.QuestionLeftText,
                          },
                          {
                            name: l.a.AriaLabel,
                            value: Z.a().FeedbackSubtitle,
                          },
                          {
                            name: l.a.AriaOrientation,
                            value: l.b.AriaOrientationValueVertical,
                          },
                        ],
                        children: [
                          {
                            attributes: [
                              { name: l.a.TabIndex, value: l.b.Zero },
                            ],
                            id: l.d.FirstTabbable,
                          },
                          {
                            attributes: [
                              { name: l.a.Type, value: l.b.Button },
                              { name: l.a.AriaLabel, value: Z.a().CloseLabel },
                            ],
                            id: l.d.CloseButton,
                            classes: [l.c.CloseButton],
                            innerHTML:
                              '<svg viewBox="4 4 16 16" width="16px" height="16px" focusable="false"><path d="M19,6.41L17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z"/></svg>',
                            tag: l.g.Button,
                          },
                          {
                            children: [
                              {
                                classes: [l.c.FormWideContainer, l.c.Hidden],
                                children: fe(t),
                                id: l.d.LeftPanelContainer,
                                tag: l.g.Div,
                              },
                              {
                                children: [
                                  {
                                    classes: [
                                      l.c.FontSubtitle,
                                      l.c.TextAlignLeft,
                                    ],
                                    id: l.d.QuestionLeftText,
                                    innerText: Z.a().FeedbackSubtitle,
                                  },
                                  {
                                    children: [
                                      {
                                        children: Be(e),
                                        id: l.d.OverallAnchorsContainer,
                                      },
                                    ],
                                    id: l.d.ColumnSeparatorDiv,
                                  },
                                ],
                                classes: [l.c.FormContainer],
                                id: l.d.LeftFormContainer,
                              },
                              {
                                children: he(e),
                                classes: [
                                  l.c.FormContainer,
                                  s.get().getInAppFeedbackInitOptions()
                                    .transitionEnabled
                                    ? l.c.Hidden
                                    : l.c.Visible,
                                ],
                                attributes: [
                                  { name: l.a.Role, value: l.b.TabPanel },
                                  { name: l.a.AriaExpanded, value: l.b.False },
                                ],
                                id: l.d.MiddleFormContainer,
                              },
                            ],
                            classes: [l.c.Hidden],
                            id: l.d.MainContentHolder,
                            tag: l.g.Form,
                          },
                          {
                            attributes: [
                              { name: l.a.TabIndex, value: l.b.Zero },
                            ],
                            id: l.d.LastTabbable,
                          },
                        ],
                        id: l.d.MainContainer,
                      },
                    ],
                    classes: [h.f() ? l.c.Rtl : ""],
                    id: l.d.OverlayBackground,
                  },
                ],
              };
            })(A, t)
          )
        );
      var a = !window.innerWidth || window.innerWidth < 800;
      I(A, t, a, o, function (t) {
        h.l(l.d.OverlayBackground, !1),
          h.d(l.d.OverlayBackground),
          s.get().getInAppFeedbackInitOptions().onDismiss(t),
          e();
      }),
        a && h.b(l.d.OverlayBackground, l.c.NarrowLayout);
    }
    function _e(e, t) {
      var A = {};
      s.get().getInAppFeedbackInitOptions().isShowThanks && (A[0] = r),
        Oe(
          ve.a(
            (function (e) {
              var t;
              return {
                attributes: [
                  { name: l.a.DataHtml2CanvasIgnore, value: l.b.True },
                ],
                children: [
                  {
                    children: [
                      {
                        attributes: [{ name: l.a.TabIndex, value: l.b.Zero }],
                        id: l.d.FirstTabbable,
                      },
                      {
                        attributes: [
                          { name: l.a.Type, value: l.b.Button },
                          { name: l.a.AriaLabel, value: Z.a().CloseLabel },
                        ],
                        id: l.d.CloseButton,
                        classes: [l.c.CloseButton],
                        innerHTML:
                          '<svg viewBox="4 4 16 16" width="16px" height="16px" focusable="false"><path d="M19,6.41L17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z"/></svg>',
                        tag: l.g.Button,
                      },
                      {
                        children: [
                          {
                            children: [
                              ((t = s
                                .get()
                                .getInAppFeedbackLaunchOptions().categories),
                              {
                                children: [
                                  {
                                    attributes: [
                                      {
                                        name: l.a.For,
                                        value: l.d.SingleFormComment,
                                      },
                                    ],
                                    classes: [
                                      l.c.FontSubtitle,
                                      l.c.TextAlignLeft,
                                      l.c.FormQuestionMiddleText,
                                    ],
                                    id: l.d.SingleFormQuestionMiddleText,
                                    innerText: Z.a().SingleForm.Title,
                                    tag: l.g.Label,
                                  },
                                  {
                                    attributes: [
                                      {
                                        name: l.a.Id,
                                        value: l.d.SingleFormCategoriesDropdown,
                                      },
                                    ],
                                    brs: t.show,
                                    children: $(t ? t.customCategories : null),
                                    classes: [
                                      l.c.FontSubText,
                                      l.c.FormCategoriesDropdown,
                                      l.c.TextInput,
                                    ],
                                    tag: l.g.Select,
                                  },
                                  {
                                    attributes: [
                                      {
                                        name: l.a.Placeholder,
                                        value: Z.a().Form.CommentPlaceholder,
                                      },
                                      {
                                        name: l.a.MaxLength,
                                        value: l.b.TextAreaMaxLength,
                                      },
                                    ],
                                    classes: [
                                      l.c.FontSubText,
                                      l.c.FormComment,
                                      l.c.TextInput,
                                    ],
                                    id: l.d.SingleFormComment,
                                    tag: l.g.TextArea,
                                  },
                                  {
                                    brs: !1,
                                    children: [
                                      {
                                        attributes: [
                                          {
                                            name: l.a.For,
                                            value: l.d.SingleFormRating,
                                          },
                                        ],
                                        classes: [
                                          l.c.FontSubText,
                                          l.c.TextAlignLeft,
                                          l.c.FormRatingLabel,
                                        ],
                                        innerText: Z.a().Form.RatingLabel,
                                        tag: l.g.Label,
                                      },
                                      ge(l.d.SingleFormRating),
                                    ],
                                    classes: [l.c.FormRatingContainer],
                                  },
                                  {
                                    brs: s.get().getInAppFeedbackInitOptions()
                                      .showEmailAddress,
                                    children: [
                                      {
                                        attributes: [
                                          {
                                            name: l.a.Type,
                                            value: l.b.Checkbox,
                                          },
                                          {
                                            name: s.get().getCommonInitOptions()
                                              .userEmailConsentDefault
                                              ? l.b.Checked
                                              : l.b.Unchecked,
                                            value: "",
                                          },
                                        ],
                                        classes: [
                                          l.c.FormEmailCheckBox,
                                          l.c.CheckBox,
                                        ],
                                        id: l.d.EmailCheckBox,
                                        tag: l.g.Input,
                                      },
                                      {
                                        attributes: [
                                          {
                                            name: l.a.For,
                                            value: l.d.EmailCheckBox,
                                          },
                                        ],
                                        classes: [
                                          l.c.FontSubText,
                                          l.c.TextAlignLeft,
                                          l.c.FormEmailLabel,
                                        ],
                                        innerText:
                                          Z.a().Form.EmailCheckBoxLabel,
                                        tag: l.g.Label,
                                      },
                                      {
                                        attributes: [
                                          { name: l.a.Type, value: l.b.Text },
                                          {
                                            name: l.a.Placeholder,
                                            value: Z.a().Form.EmailPlaceholder,
                                          },
                                          {
                                            name: l.a.AriaLabel,
                                            value: Z.a().Form.EmailPlaceholder,
                                          },
                                          {
                                            name: l.a.Name,
                                            value: l.d.SingleFormEmailInput,
                                          },
                                          {
                                            name: l.a.MaxLength,
                                            value: l.b.TextAreaMaxLength,
                                          },
                                          {
                                            name: l.a.Value,
                                            value: s
                                              .get()
                                              .getInAppFeedbackInitOptions()
                                              .userEmail
                                              ? s
                                                  .get()
                                                  .getInAppFeedbackInitOptions()
                                                  .userEmail
                                              : "",
                                          },
                                        ],
                                        classes: [
                                          l.c.FontSubText,
                                          l.c.FormEmailInput,
                                          l.c.TextInput,
                                        ],
                                        id: l.d.SingleFormEmailInput,
                                        tag: l.g.Input,
                                      },
                                    ],
                                    classes: [l.c.FormEmailContainer],
                                  },
                                  {
                                    children: [
                                      {
                                        attributes: [
                                          {
                                            name: l.a.Type,
                                            value: l.b.Checkbox,
                                          },
                                          {
                                            name: l.a.Value,
                                            value: l.b.Unchecked,
                                          },
                                        ],
                                        brs: s
                                          .get()
                                          .getInAppFeedbackInitOptions()
                                          .screenshot,
                                        classes: [
                                          l.c.FormScreenshotCheckbox,
                                          l.c.CheckBox,
                                        ],
                                        id: l.d.SingleFormScreenshotCheckbox,
                                        tag: l.g.Input,
                                      },
                                      {
                                        attributes: [
                                          {
                                            name: l.a.For,
                                            value:
                                              l.d.SingleFormScreenshotCheckbox,
                                          },
                                        ],
                                        brs: s
                                          .get()
                                          .getInAppFeedbackInitOptions()
                                          .screenshot,
                                        classes: [
                                          l.c.FontText,
                                          l.c.TextAlignLeft,
                                          l.c.FormScreenshotLabel,
                                        ],
                                        innerText: Z.a().Form.ScreenshotLabel,
                                        tag: l.g.Label,
                                      },
                                      {
                                        attributes: [
                                          {
                                            name: l.a.Preview,
                                            value: l.b.ScreenshotPreview,
                                          },
                                        ],
                                        brs: s
                                          .get()
                                          .getInAppFeedbackInitOptions()
                                          .screenshot,
                                        id: l.d.SingleFormScreenshotPreview,
                                        classes: [l.c.FormScreenshotPreview],
                                        tag: l.g.Img,
                                      },
                                    ],
                                    classes: [l.c.FormScreenshotContainer],
                                  },
                                  {
                                    children: [
                                      {
                                        classes: [
                                          l.c.FontSubSubText,
                                          l.c.TextAlignLeft,
                                        ],
                                        innerText: Z.a().Form.PrivacyLabel,
                                        tag: l.g.Label,
                                      },
                                      {
                                        classes: [
                                          l.c.FontSubSubText,
                                          l.c.TextAlignLeft,
                                        ],
                                        innerText: s
                                          .get()
                                          .getCommonInitOptions()
                                          .isCommercialHost
                                          ? Z.a().Form.PrivacyConsent + " "
                                          : "",
                                        tag: l.g.Label,
                                      },
                                      {
                                        attributes: [
                                          {
                                            name: l.a.HRef,
                                            value: l.h.PrivacyStatementLink,
                                          },
                                          {
                                            name: l.a.Target,
                                            value: l.b.BlankWindow,
                                          },
                                          {
                                            name: l.a.Rel,
                                            value: l.b.NoReferrer,
                                          },
                                        ],
                                        classes: [l.c.Link],
                                        id: l.d.PrivacyStatementLink,
                                        innerText: Z.a().PrivacyStatement,
                                        tag: l.g.Anchor,
                                      },
                                    ],
                                    classes: [
                                      l.c.FontSubSubText,
                                      l.c.TextAlignLeft,
                                      l.c.PrivacyStatementLinkDiv,
                                    ],
                                  },
                                  {
                                    children: [
                                      {
                                        attributes: [
                                          { name: l.a.Type, value: l.b.Button },
                                          {
                                            name: l.a.AriaLabel,
                                            value: Z.a().Form.Cancel,
                                          },
                                        ],
                                        classes: [l.c.CancelButton],
                                        id: l.d.SingleFormCancelButton,
                                        innerText: Z.a().Form.Cancel,
                                        tag: l.g.Button,
                                      },
                                      {
                                        attributes: [
                                          {
                                            name: l.a.Disabled,
                                            value: l.b.True,
                                          },
                                        ],
                                        classes: [l.c.SubmitButton],
                                        id: l.d.SingleFormSubmitButton,
                                        innerText: Z.a().Form.Submit,
                                        tag: l.g.Button,
                                      },
                                      {
                                        classes: [l.c.Spinner, l.c.Hidden],
                                        id: l.d.SingleFormSubmitButtonSpinner,
                                        tag: l.g.Div,
                                      },
                                    ],
                                    classes: [l.c.FormSubmitButtonContainer],
                                  },
                                ],
                                id: pe,
                              }),
                            ],
                            classes: [l.c.FormContainer],
                            id: l.d.MiddleFormContainer,
                          },
                        ].concat(fe(e)),
                        classes: [l.c.Hidden],
                        id: l.d.MainContentHolder,
                        tag: l.g.Form,
                      },
                      {
                        attributes: [{ name: l.a.TabIndex, value: l.b.Zero }],
                        id: l.d.LastTabbable,
                      },
                    ],
                    id: l.d.MainContainer,
                  },
                ],
                classes: [l.c.SingleLayout, h.f() ? l.c.Rtl : ""],
                id: l.d.OverlayBackground,
              };
            })(A)
          )
        ),
        (function (e, t, A) {
          void 0 === A && (A = function (e) {}),
            (E = e),
            (C = t),
            b(
              l.d.SingleFormSubmitButton,
              "click",
              G(
                l.d.SingleFormSubmitButton,
                l.d.SingleFormSubmitButtonSpinner,
                l.d.SingleFormComment,
                l.d.SingleFormEmailInput,
                l.d.SingleFormScreenshotCheckbox,
                l.d.SingleFormScreenshotPreview,
                l.d.SingleFormCategoriesDropdown
              )
            ),
            b(
              l.d.SingleFormScreenshotCheckbox,
              "click",
              J(
                l.d.SingleFormScreenshotCheckbox,
                l.d.SingleFormScreenshotPreview
              )
            ),
            b(l.d.CloseButton, "click", function () {
              Q(!1);
            }),
            b(l.d.SingleFormCancelButton, "click", X),
            N(A);
        })(t, A, function (t) {
          h.l(l.d.OverlayBackground, !1),
            h.d(l.d.OverlayBackground),
            s.get().getInAppFeedbackInitOptions().onDismiss(t),
            e();
        }),
        h.b(l.d.OverlayBackground, l.c.SingleLayout),
        h.a(l.d.SingleFormScreenshotCheckbox, l.d.SingleFormScreenshotPreview);
    }
    function Oe(e) {
      document.body.insertBefore(e, document.body.firstChild),
        h.l(l.d.OverlayBackground, !0),
        h.e() > 9 || -1 === h.e() ? setTimeout(De, 900) : De();
    }
    function De() {
      h.l(l.d.MainContentHolder, !0),
        document.getElementById(l.d.OverallSmileAnchor)
          ? (document.getElementById(l.d.OverallSmileAnchor).focus(),
            h.a(
              l.d.BasicFormScreenshotCheckbox,
              l.d.BasicFormScreenshotPreview
            ))
          : document.getElementById(l.d.SingleFormComment) &&
            (document.getElementById(l.d.SingleFormComment).focus(),
            h.a(
              l.d.SingleFormScreenshotCheckbox,
              l.d.SingleFormScreenshotPreview
            ));
    }
    var Le = A(8),
      Re = !1;
    function Me() {
      return new Promise(function (e, t) {
        if (Re) e();
        else {
          try {
            o.a();
          } catch (e) {
            t("CommonApp initialization failed: {" + e + "}");
          }
          a.a()
            .then(function () {
              s
                .get()
                .setInAppFeedbackInitOptions(
                  Le.a().OfficeBrowserFeedback.initOptions
                ),
                (Re = !0),
                e();
            })
            .catch(function (e) {
              t("Initialization failed: {" + e + "}");
            });
        }
      });
    }
    var Ke = !1;
    function Pe(e) {
      return new Promise(function (t, A) {
        Ke
          ? A("Control already open")
          : Me()
              .then(function () {
                s.get().setInAppFeedbackLaunchOptions(e),
                  He(function () {
                    Ke = !1;
                  }),
                  u
                    .b()
                    .logEvent(u.a.InApp.UI.Picker.Shown.VALUE, 1, {
                      IsBugEnabled: s.get().getInAppFeedbackInitOptions()
                        .bugForm,
                      IsIdeaEnabled:
                        void 0 !==
                        s.get().getInAppFeedbackInitOptions().userVoice,
                    }),
                  (Ke = !0),
                  t();
              })
              .catch(function (e) {
                A("Initialization failed: {" + e + "}");
              });
      });
    }
    function xe(e, t) {
      return new Promise(function (A, n) {
        if (Ke) n("Control already open");
        else {
          var r = s.validateFeedbackType(e);
          Me()
            .then(function () {
              s.get().setInAppFeedbackLaunchOptions(t),
                _e(function () {
                  Ke = !1;
                }, r),
                u
                  .b()
                  .logEvent(u.a.InApp.UI.Form.Shown.VALUE, 1, {
                    FeedbackType: r,
                  }),
                (Ke = !0),
                A();
            })
            .catch(function (e) {
              n("Initialization failed: {" + e + "}");
            });
        }
      });
    }
    function ke() {
      o.b(), a.b(), (Re = !1), (Ke = !1);
    }
    Le.k(Pe), Le.m(xe);
  },
]);
//# sourceMappingURL=officebrowserfeedback_floodgate.min.js.map
