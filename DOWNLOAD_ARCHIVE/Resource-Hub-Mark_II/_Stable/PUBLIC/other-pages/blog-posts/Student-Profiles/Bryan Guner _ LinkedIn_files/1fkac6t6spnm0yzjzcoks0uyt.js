define( "@css-blocks/ember-cli/helpers/-css-blocks-classnames", [ "exports", "@css-blocks/helpers/classnames" ], function ( e, t ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var i = Ember.Helper.helper( t.classnames )
  e.default = i
} )
define( "@css-blocks/ember-cli/helpers/-css-blocks-concat", [ "exports", "@css-blocks/helpers/concat" ], function ( e, t ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var i = Ember.Helper.helper( t.concat )
  e.default = i
} )
define( "@linkedin/ember-cli-css-blocks-migration/index", [ "exports" ], function ( e ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.isDisabled = e.isEnabled = void 0
  e.isEnabled = !1
  e.isDisabled = !0
} )
define( "artdeco-button/components/artdeco-button", [ "exports", "artdeco-button/templates/components/artdeco-button", "artdeco-button/utils/constants" ], function ( e, t, i ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var n = Ember.Component.extend( {
    layout: t.default,
    tagName: "button",
    classNames: [ "artdeco-button" ],
    classNameBindings: [ "_classCircle", "_classColor", "_classIconRight", "_classSize", "_classStretch", "_classTheme", "_classType", "disabled:artdeco-button--disabled" ],
    attributeBindings: [ "aria-controls", "aria-expanded", "aria-pressed", "aria-label", "aria-labelledby", "aria-describedby", "disabled", "_outputtedTabIndex:tabindex", "controlType:type", "title" ],
    circle: !1,
    color: i.COLORS.DEFAULT,
    controlType: void 0,
    disabled: !1,
    size: 2,
    stretch: i.STRETCHES.NONE,
    theme: i.THEMES.STANDARD,
    type: i.TYPES.PRIMARY,
    tabindex: 0,
    icon: null,
    iconRight: !1,
    iconSize: Ember.computed( "circle", "isIconInBug", "size", ( function () {
      const {
        circle: e,
        isIconInBug: t,
        size: i
      } = Ember.getProperties( this, [ "circle", "isIconInBug", "size" ] ), n = parseInt( i, 10 )
      return t ? 4 === n ? "21dp" : "14dp" : e && 1 === n || !e && n < 4 ? "small" : null
    } ) ).readOnly(),
    iconColor: Ember.computed( "color", "isIconInBug", ( function () {
      const {
        color: e,
        isIconInBug: t
      } = Ember.getProperties( this, [ "color", "isIconInBug" ] )
      return t ? "inverse" === e ? "brand" : "inverse" : null
    } ) ).readOnly(),
    isIconInBug: Ember.computed( "icon", "type", ( function () {
      const e = Ember.get( this, "icon" ) === i.IN_BUG
      return e
    } ) ).readOnly(),
    _classCircle: Ember.computed( "circle", "color", "icon", "theme", ( function () {
      const {
        circle: e,
        color: t,
        icon: n,
        theme: s
      } = Ember.getProperties( this, [ "circle", "color", "icon", "theme" ] )
      if ( !e ) return ""
      i.THEMES.PRO
      return "artdeco-button--circle"
    } ) ).readOnly(),
    _classColor: Ember.computed( "color", ( function () {
      const e = Ember.get( this, "color" )
      return e === i.COLORS.DEFAULT ? "" : `artdeco-button--${e}`
    } ) ).readOnly(),
    _classIconRight: Ember.computed( "circle", "icon", "iconRight", ( function () {
      const {
        circle: e,
        icon: t,
        iconRight: i
      } = Ember.getProperties( this, [ "icon", "iconRight" ] )
      return i ? "artdeco-button--icon-right" : ""
    } ) ).readOnly(),
    _classSize: Ember.computed( "size", ( function () {
      const e = Ember.get( this, "size" ),
        t = parseInt( e, 10 )
      return `artdeco-button--${t}`
    } ) ).readOnly(),
    _classStretch: Ember.computed( "circle", "size", "stretch", "type", ( function () {
      const {
        circle: e,
        stretch: t
      } = Ember.getProperties( this, [ "circle", "stretch" ] )
      return t && t !== i.STRETCHES.NONE ? `artdeco-button--${t}` : ""
    } ) ).readOnly(),
    _classTheme: Ember.computed( "color", "theme", "type", ( function () {
      const {
        color: e,
        theme: t,
        type: n
      } = Ember.getProperties( this, [ "color", "theme", "type" ] )
      if ( t === i.THEMES.STANDARD ) return ""
      i.THEMES.PRO
      i.THEMES.PREMIUM
      return `artdeco-button--${t}`
    } ) ).readOnly(),
    _classType: Ember.computed( "type", ( function () {
      const e = Ember.get( this, "type" )
      return `artdeco-button--${e}`
    } ) ).readOnly(),
    _outputtedTabIndex: Ember.computed( "tabindex", ( function () {
      const e = this.get( "tabindex" )
      return 0 !== e ? e : null
    } ) ).readOnly(),
    _isValuePresent: ( e, t ) => Object.keys( e ).map( t => e[ t ] ).indexOf( t ) > -1,
    didReceiveAttrs() {
      this._super( ...arguments )
      Ember.isEmpty( Ember.get( this, "title" ) )
      const e = [ ...Ember.get( this, "attributeBindings" ) ]
      Object.keys( this ).forEach( t => {
        "data-" === t.substring( 0, 5 ) && e.push( t )
      } )
      Ember.set( this, "attributeBindings", e )
    }
  } )
  e.default = n
} )
define( "artdeco-button/templates/components/artdeco-button", [ "exports" ], function ( e ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var t = Ember.HTMLBars.template( {
    id: "YmB6lrMK",
    block: '{"symbols":["&default"],"statements":[[4,"if",[[24,["icon"]]],null,{"statements":[[0,"  "],[1,[28,"li-icon",null,[["class","color","size","type"],[[28,"concat",["artdeco-button__icon",[28,"if",[[24,["isIconInBug"]]," artdeco-button__icon--in-bug"],null]],null],[24,["iconColor"]],[24,["iconSize"]],[24,["icon"]]]]],false],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[7,"span",true],[10,"class","artdeco-button__text"],[8],[0,"\\n"],[4,"if",[[25,1]],null,{"statements":[[0,"    "],[14,1],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[1,[22,"text"],false],[0,"\\n"]],"parameters":[]}],[9]],"hasEval":false}',
    meta: {
      moduleName: "artdeco-button/templates/components/artdeco-button.hbs"
    }
  } )
  e.default = t
} )
define( "artdeco-button/utils/constants", [ "exports" ], function ( e ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.IN_BUG = e.STRETCHES = e.SIZES = e.TYPES = e.COLORS = e.THEMES = void 0
  e.THEMES = {
    STANDARD: "standard",
    PREMIUM: "premium",
    PRO: "pro"
  }
  e.COLORS = {
    DEFAULT: "default",
    INVERSE: "inverse",
    MUTED: "muted"
  }
  e.TYPES = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary"
  }
  e.SIZES = [ 1, 2, 3, 4 ]
  e.STRETCHES = {
    NONE: "none",
    FLUID: "fluid",
    FULL: "full"
  }
  e.IN_BUG = "linkedin-bug"
} )
define( "artdeco-button/utils/get-key-from-event", [ "exports" ], function ( e ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = function ( e ) {
    return e.key || t[ e.which ] || null
  }
  const t = {
    13: "Enter",
    27: "Escape",
    32: " "
  }
} )
define( "artdeco-empty-state/components/artdeco-empty-state", [ "exports", "artdeco-empty-state/templates/components/artdeco-empty-state", "artdeco-empty-state/utils/constants" ], function ( e, t, i ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var n = Ember.Component.extend( {
    layout: t.default,
    tagName: "section",
    classNames: [ "artdeco-empty-state" ],
    actionText: null,
    buttonType: "secondary",
    headline: null,
    message: null,
    illustration: null,
    muted: !1,
    onButtonClick: null,
    size: i.ILLUSTRATION_SIZE_DEFAULT,
    theme: "standard",
    url: null,
    mercadoSize: 1,
    actions: {
      buttonClick() {
        Ember.tryInvoke( this, "onButtonClick" )
      }
    },
    init() {
      this._super( ...arguments )
      this._assertAttrs()
    },
    _assertAttrs() {
      const {
        buttonType: e,
        headline: t,
        illustration: i,
        message: n,
        muted: s,
        onButtonClick: r,
        size: a,
        theme: o,
        url: l,
        mercadoSize: c
      } = Ember.getProperties( this, [ "buttonType", "headline", "illustration", "message", "muted", "onButtonClick", "size", "theme", "url", "mercadoSize" ] )
    },
    _isIllustrationValid( e, t ) {
      return i.ILLUSTRATIONS.includes( e + ( t ? "-muted" : "" ) ) || this._isMercadoIllustration
    },
    _isSpot: e => i.ILLUSTRATION_SPOTS.includes( e ),
    _isMicroSpot: e => i.ILLUSTRATION_MICROSPOTS.includes( e ),
    _isMercadoIllustration: Ember.computed( "illustration", ( function () {
      return this._isSpot( this.illustration ) || this._isMicroSpot( this.illustration )
    } ) ),
    _mercadoSizeString: Ember.computed( "mercadoSize", ( function () {
      const {
        mercadoSize: e
      } = this
      return 1 === e ? "small" : 2 === e ? "large" : ""
    } ) ),
    _mercadoPaddingClass: Ember.computed( "mercadoSize", "illustration", ( function () {
      const e = this._mercadoSizeString
      return this._isSpot( this.illustration ) ? `artdeco-empty-state__headline--mercado-spots-${e}` : this._isMicroSpot( this.illustration ) ? `artdeco-empty-state__headline--mercado-microspots-${e}` : ""
    } ) )
  } )
  e.default = n
} )
define( "artdeco-empty-state/templates/components/artdeco-empty-state", [ "exports" ], function ( e ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var t = Ember.HTMLBars.template( {
    id: "QwRsk/Oq",
    block: '{"symbols":[],"statements":[[0,"\\n"],[4,"if",[[24,["_isMercadoIllustration"]]],null,{"statements":[[0,"  "],[7,"h1",true],[11,"class",[29,["artdeco-empty-state__headline artdeco-empty-state__headline--mercado-",[22,"illustration"],"-",[22,"_mercadoSizeString"]," ",[22,"_mercadoPaddingClass"]]]],[8],[0,"\\n    "],[1,[22,"headline"],false],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[7,"h1",true],[11,"class",[29,["artdeco-empty-state__headline artdeco-empty-state__headline--",[22,"illustration"],[28,"if",[[24,["muted"]],"-muted"],null]," artdeco-empty-state__headline--",[22,"size"]]]],[8],[0,"\\n    "],[1,[22,"headline"],false],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]}],[0,"\\n"],[7,"p",true],[10,"class","artdeco-empty-state__message"],[8],[0,"\\n  "],[1,[22,"message"],false],[0,"\\n"],[9],[0,"\\n\\n"],[4,"if",[[24,["actionText"]]],null,{"statements":[[4,"if",[[24,["url"]]],null,{"statements":[[0,"    "],[7,"a",true],[11,"href",[29,[[22,"url"]]]],[11,"class",[29,["artdeco-button artdeco-button--",[22,"buttonType"]," artdeco-button--",[22,"theme"]," artdeco-empty-state__action"]]],[11,"target",[29,[[22,"ctaTarget"]]]],[11,"rel",[29,[[22,"ctaRel"]]]],[11,"data-control-name",[29,[[22,"ctaDataControlName"]]]],[8],[0,"\\n      "],[1,[22,"actionText"],false],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[1,[28,"artdeco-button",null,[["class","click","text","type","theme","data-control-name"],["artdeco-empty-state__action",[28,"action",[[23,0,[]],"buttonClick"],null],[24,["actionText"]],[24,["buttonType"]],[24,["theme"]],[24,["ctaDataControlName"]]]]],false],[0,"\\n"]],"parameters":[]}]],"parameters":[]},null]],"hasEval":false}',
    meta: {
      moduleName: "artdeco-empty-state/templates/components/artdeco-empty-state.hbs"
    }
  } )
  e.default = t
} )
define( "artdeco-empty-state/utils/constants", [ "exports" ], function ( e ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.MERCADO_SIZES = e.THEMES = e.BUTTON_TYPES = e.ILLUSTRATION_SIZES = e.ILLUSTRATION_SIZE_DEFAULT = e.ILLUSTRATION_SPOTS = e.ILLUSTRATION_MICROSPOTS = e.ILLUSTRATIONS = void 0
  e.ILLUSTRATIONS = [ "add-attachment", "add-connection-inverse", "add-feed", "add-media", "add-school", "address-book-import", "blank-page-muted", "blank-page", "calendar-import", "camera-lens-muted", "camera-lens", "clipboard-muted", "clipboard-check", "contacts-sync", "deserted-island", "desktop-mobile-screens", "desktop-text-ads", "edit-pipeline", "empty-clipboard", "empty-course-bookmark", "empty-globe-search", "empty-monitor-unfollow", "empty-pencil-paper", "empty-rocket-launch", "empty-search-company", "empty-search-groups", "empty-search-jobs", "empty-search-people", "empty-search-results", "empty-search-school", "empty-trophy", "empty-video-bookmark", "empty-video-course", "empty-video-single", "folder-data-transfer", "gray-missing-profile", "inmail-personalized", "laptop-personal-ads", "missing-piece-muted", "missing-piece", "missing-profile-muted", "no-connection-muted", "no-connection", "no-entities-muted", "no-entities", "no-invites-muted", "no-invites", "no-jobs-muted", "no-jobs", "no-likers-muted", "no-likers", "no-messages-muted", "no-messages", "no-profile-views-muted", "no-profile-views", "paper-move-folder", "people-comment", "people-nearby-muted", "sad-browser-muted", "sad-browser", "saved-articles", "search-companies-muted", "search-groups-muted", "search-jobs-muted", "search-people-muted", "search-results-muted", "search-schools-muted", "shooting-star-muted", "shooting-star", "star-empty-muted", "star-empty", "star-muted", "star", "success-award", "success-check", "success-inbug", "upload-media-muted", "upload-media" ]
  e.ILLUSTRATION_MICROSPOTS = [ "address-book", "company", "gift", "mail", "salary", "ui-chart", "article", "compass", "glasses", "mail-open", "school", "ui-dashboard", "article-stack", "dartboard", "globe", "megaphone", "search", "ui-feed-profile", "award", "dashboard", "id-badge", "messages", "shield", "unlocked", "binders", "document", "image", "notebook", "signal-caution", "video", "birthday", "document-comment", "image-stack", "notepad", "signal-error", "video-course", "briefcase-jobs", "document-folder", "industry", "patent", "signal-success", "calendar", "document-report", "location-marker", "pencil-ruler", "slides-stack", "camera", "flowers", "locked", "phone", "toolbox", "certificate", "folder", "magnet", "rocket", "trophy" ]
  e.ILLUSTRATION_SPOTS = [ "empty-leaving", "error-construction", "main-broadcast", "main-coworkers-2", "main-presentation", "empty-no-mail", "error-crossing", "main-collaboration", "main-coworkers-3", "main-relax", "empty-room", "error-fail", "main-commute", "main-coworkers-4", "success-individual", "empty-waiting", "error-pit-crew", "main-conversation", "main-coworkers-5", "success-individual-2", "error-connection", "error-server", "main-coworkers", "main-person", "success-team" ]
  e.ILLUSTRATION_SIZE_DEFAULT = 3
  e.ILLUSTRATION_SIZES = [ 1, 2, 3 ]
  e.BUTTON_TYPES = [ "secondary", "tertiary" ]
  e.THEMES = [ "standard", "pro" ]
  e.MERCADO_SIZES = [ 1, 2 ]
} )
define( "artdeco-toggle/components/artdeco-toggle", [ "exports", "artdeco-toggle/templates/components/artdeco-toggle", "ember-lifeline", "artdeco-toggle/utils/constants" ], function ( e, t, i, n ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var s = Ember.Component.extend( {
    layout: t.default,
    classNames: [ "artdeco-toggle" ],
    toggled: !1,
    isFocused: !1,
    size: "32dp",
    theme: "default",
    disabled: !1,
    isLabelHidden: !1,
    tabIndex: 0,
    hasLabel: !1,
    isDefaultChecked: null,
    _internalCheckboxState: !1,
    classNameBindings: [ "_classSize", "_classTheme", "disabled:artdeco-toggle--disabled", "toggled:artdeco-toggle--toggled", "isFocused:artdeco-toggle--focused" ],
    attributeBindings: [ "trackingControlName:data-control-name" ],
    _classSize: Ember.computed( "size", ( function () {
      return `artdeco-toggle--${Ember.get(this,"size")}`
    } ) ),
    _classTheme: Ember.computed( "theme", ( function () {
      return `artdeco-toggle--${Ember.get(this,"theme")}`
    } ) ),
    isToggled: Ember.computed.bool( "toggled" ),
    _a11yText: Ember.computed.or( "a11yText", "labelText" ),
    hasA11yText: Ember.computed.notEmpty( "_a11yText" ),
    externalLabel: Ember.computed.and( "hasLabel", "toggleId" ),
    _toggleId: Ember.computed( "toggleId", ( function () {
      return Ember.getWithDefault( this, "toggleId", `adToggle_${Ember.guidFor(this)}` )
    } ) ),
    _validate() {
      Ember.get( this, "hasLabel" )
    },
    init() {
      this._super( ...arguments )
      if ( null !== Ember.get( this, "isDefaultChecked" ) ) {
        Ember.set( this, "toggled", !0 )
        Ember.set( this, "_internalCheckboxState", !0 )
      }
      Ember.get( this, "toggled" ) && Ember.set( this, "isDefaultChecked", !0 )
    },
    didReceiveAttrs() {
      this._validate()
      if ( this.element && this.element.querySelector( "input" ) ) {
        const e = Ember.get( this, "toggled" )
        this.element.querySelector( "input" ).checked = e
        Ember.set( this, "_internalCheckboxState", e )
      }
    },
    willDestroy() {
      this._super( ...arguments );
      ( 0, i.runDisposables )( this )
    },
    click() {
      Ember.get( this, "disabled" ) || Ember.tryInvoke( this, "onToggle", [ !Ember.get( this, "toggled" ) ] )
    },
    actions: {
      focus( e ) {
        ( 0, i.runTask )( this, () => {
          Ember.set( this, "isFocused", e )
        } )
      }
    }
  } )
  e.default = s
} )
define( "artdeco-toggle/templates/components/artdeco-toggle", [ "exports" ], function ( e ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var t = Ember.HTMLBars.template( {
    id: "mC6fhfHU",
    block: '{"symbols":[],"statements":[[7,"span",true],[10,"aria-hidden","true"],[10,"class","artdeco-toggle__text"],[10,"data-artdeco-toggle-text","true"],[11,"data-artdeco-toggled",[22,"toggled"]],[8],[0,"\\n"],[4,"if",[[24,["toggled"]]],null,{"statements":[[0,"    "],[1,[28,"if",[[24,["toggledText"]],[24,["toggledText"]],[28,"t",["ad_toggled_text","artdeco-toggle/templates/components/artdeco-toggle"],null]],null],false],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[1,[28,"if",[[24,["untoggledText"]],[24,["untoggledText"]],[28,"t",["ad_untoggled_text","artdeco-toggle/templates/components/artdeco-toggle"],null]],null],false],[0,"\\n"]],"parameters":[]}],[9],[0,"\\n"],[4,"unless",[[24,["externalLabel"]]],null,{"statements":[[7,"label",true],[11,"for",[22,"_toggleId"]],[10,"data-artdeco-toggle-label","true"],[11,"class",[29,["artdeco-toggle__label ",[28,"if",[[24,["isToggled"]]," toggled "],null],[28,"if",[[24,["disabled"]]," disabled "],null],[28,"if",[[24,["isFocused"]]," focused "],null],[28,"if",[[24,["theme"]],[24,["theme"]]],null]]]],[8],[0,"\\n"],[4,"if",[[24,["hasA11yText"]]],null,{"statements":[[0,"    "],[7,"span",true],[11,"class",[29,["label ",[28,"if",[[24,["isLabelHidden"]]," a11y-text "],null]]]],[11,"data-artdeco-toggle-label-hidden",[22,"isLabelHidden"]],[8],[0,"\\n      "],[1,[22,"_a11yText"],false],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[7,"input",true],[11,"checked",[22,"isDefaultChecked"]],[10,"class","input artdeco-toggle__button"],[10,"data-artdeco-toggle-button","true"],[11,"id",[22,"_toggleId"]],[11,"disabled",[22,"disabled"]],[11,"onfocus",[28,"action",[[23,0,[]],"focus",true],null]],[11,"onblur",[28,"action",[[23,0,[]],"focus",false],null]],[10,"type","checkbox"],[8],[9],[0,"\\n"]],"hasEval":false}',
    meta: {
      moduleName: "artdeco-toggle/templates/components/artdeco-toggle.hbs"
    }
  } )
  e.default = t
} )
define( "artdeco-toggle/utils/constants", [ "exports" ], function ( e ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.THEMES = e.SIZES = void 0
  e.SIZES = [ "32dp", "24dp" ]
  e.THEMES = [ "default", "inverse" ]
} )
define( "conversations/components/quick-replies", [ "exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@ember-decorators/component", "ember-batcher", "msg-shared/utils/constants" ], function ( e, t, i, n, s, r, a, o ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var l, c, d, p, u, m, h, g, b, f, y, _, E, R, T, v
  const S = Ember.HTMLBars.template( {
      id: "4yzaT2wu",
      block: '{"symbols":["reply","asset","@trackingPrefix","@handleInMailReplySmartAction"],"statements":[[4,"if",[[23,0,["hasOverflow"]]],null,{"statements":[[0,"  "],[5,"artdeco-button@artdeco-button",[],[["@class","@circle","@size","@icon","@text","@color","@type","@disabled","@click"],["flex-shrink-zero mr2",true,1,"chevron-left-icon",[28,"t",["i18n_scroll_quick_replies_left","conversations/components/quick-replies"],null],"muted","tertiary",[23,0,["disableScrollLeft"]],[28,"action",[[23,0,[]],"scrollHandler","LEFT"],null]]]],[0,"\\n"]],"parameters":[]},null],[7,"ul",true],[11,"class",[29,["conversations-quick-replies__container relative list-style-none display-flex justify-flex-start overflow-hidden pv2",[28,"if",[[23,0,["animateIn"]]," conversations-quick-replies__container--animate-in"],null]]]],[8],[0,"\\n"],[4,"each",[[23,0,["filteredQuickReplies"]]],null,{"statements":[[0,"    "],[7,"li",true],[10,"class","conversations-quick-replies__reply"],[8],[0,"\\n"],[4,"if",[[28,"global-helpers@eq",[[23,1,["reply","replyType"]],"GIF"],null]],null,{"statements":[[0,"        "],[7,"button",false],[12,"class","conversations-quick-replies__reply-button artdeco-button artdeco-button--2 artdeco-button--secondary p0"],[12,"data-control-name","smart_action_gif"],[12,"type","button"],[3,"action",[[23,0,[]],[23,0,["openGIFPopover"]],[23,1,["reply","quickActionPrefillText"]],[28,"ember-cli-pemberly-tracking@tracking",null,[["control-name"],["smart_action_gif"]]]]],[8],[0,"\\n          "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","size","class"],["gif-icon","small","conversations-quick-replies__rich-props-icon"]]],false],[0,"\\n          "],[7,"hr",true],[10,"class","conversations-quick-replies__rich-props-vertical-divider"],[8],[9],[0,"\\n          "],[7,"span",true],[10,"class","a11y-text"],[8],[1,[28,"t",["i18n_a11y_reply_context","conversations/components/quick-replies"],[["contentText"],[[23,1,["reply","quickActionPrefillText"]]]]],false],[9],[0,"\\n          "],[7,"span",true],[10,"aria-hidden","true"],[10,"class","ml2 mr3"],[8],[1,[28,"t",["i18n_a11y_search_gif_text","conversations/components/quick-replies"],[["prefilledText"],[[23,1,["reply","quickActionPrefillText"]]]]],false],[9],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"global-helpers@eq",[[23,1,["reply","replyType"]],"INMAIL_ACCEPT"],null]],null,{"statements":[[0,"        "],[7,"button",false],[12,"class","conversations-quick-replies__reply-button artdeco-button artdeco-button--2 artdeco-button--secondary p0"],[12,"data-control-name",[28,"concat",[[23,3,[]],[23,0,["inmailPrefix"]],"inmail_yes"],null]],[12,"type","button"],[3,"on",["click",[28,"fn",[[23,4,[]],[23,1,[]]],null]]],[8],[0,"\\n          "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","size","class"],["pencil-icon","small","conversations-quick-replies__rich-props-icon"]]],false],[0,"\\n          "],[7,"hr",true],[10,"class","conversations-quick-replies__rich-props-vertical-divider"],[8],[9],[0,"\\n          "],[7,"span",true],[10,"class","a11y-text"],[8],[1,[28,"t",["i18n_a11y_reply_context","conversations/components/quick-replies"],[["contentText"],[[23,1,["text"]]]]],false],[9],[0,"\\n          "],[7,"span",true],[10,"aria-hidden","true"],[10,"class","ml2 mr3"],[8],[0,"\\n            "],[1,[23,1,["text"]],false],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"global-helpers@eq",[[23,1,["reply","replyType"]],"INMAIL_DECLINE"],null]],null,{"statements":[[0,"        "],[7,"button",false],[12,"class","conversations-quick-replies__reply-button artdeco-button artdeco-button--2 artdeco-button--secondary p0"],[12,"data-control-name",[28,"concat",[[23,3,[]],[23,0,["inmailPrefix"]],"inmail_no"],null]],[12,"type","button"],[3,"on",["click",[28,"fn",[[23,4,[]],[23,1,[]]],null]]],[8],[0,"\\n          "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","size","class"],["pencil-icon","small","conversations-quick-replies__rich-props-icon"]]],false],[0,"\\n          "],[7,"hr",true],[10,"class","conversations-quick-replies__rich-props-vertical-divider"],[8],[9],[0,"\\n          "],[7,"span",true],[10,"class","a11y-text"],[8],[1,[28,"t",["i18n_a11y_reply_context","conversations/components/quick-replies"],[["contentText"],[[23,1,["text"]]]]],false],[9],[0,"\\n          "],[7,"span",true],[10,"aria-hidden","true"],[10,"class","ml2 mr3"],[8],[0,"\\n            "],[1,[23,1,["text"]],false],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"        "],[5,"artdeco-button@artdeco-button",[[12,"data-control-name",[23,0,["controlActionEventName"]]]],[["@class","@type","@click"],["conversations-quick-replies__reply-button","secondary",[28,"action",[[23,0,[]],"sendQuickReply",[23,1,["reply"]],[23,0,["conversation"]]],null]]],{"statements":[[0,"\\n          "],[7,"span",true],[10,"class","a11y-text"],[8],[1,[28,"t",["i18n_a11y_reply_context","conversations/components/quick-replies"],[["contentText"],[[23,1,["text"]]]]],false],[9],[0,"\\n          "],[7,"span",true],[10,"class","conversations-quick-replies__reply-content"],[10,"aria-hidden","true"],[8],[0,"\\n"],[4,"if",[[23,0,["emojiSkintoneManager","selectedSkintone"]]],null,{"statements":[[0,"              "],[5,"asset-loader@deferred-asset-loader",[],[["@bundle"],["msg-rich-media"]],{"statements":[[0,"\\n"],[4,"if",[[23,2,["state","fulfilled"]]],null,{"statements":[[0,"                  "],[1,[28,"msg-rich-media@emoji-skintone-modifier",[[23,1,["text"]],[23,0,["emojiSkintoneManager","selectedSkintone"]]],null],false],[0,"\\n"]],"parameters":[]},null],[0,"              "]],"parameters":[2]}],[0,"\\n"]],"parameters":[]},{"statements":[[0,"              "],[1,[23,1,["text"]],false],[0,"\\n"]],"parameters":[]}],[0,"          "],[9],[0,"\\n        "]],"parameters":[]}],[0,"\\n      "]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}],[0,"    "],[9],[0,"\\n"]],"parameters":[1]},null],[9],[0,"\\n\\n"],[4,"if",[[23,0,["hasOverflow"]]],null,{"statements":[[0,"  "],[5,"artdeco-button@artdeco-button",[],[["@class","@circle","@size","@icon","@text","@color","@type","@disabled","@click"],["flex-shrink-zero ml2",true,1,"chevron-right-icon",[28,"t",["i18n_scroll_quick_replies_right","conversations/components/quick-replies"],null],"muted","tertiary",[23,0,["disableScrollRight"]],[28,"action",[[23,0,[]],"scrollHandler","RIGHT"],null]]]],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',
      meta: {
        moduleName: "conversations/components/quick-replies.hbs"
      }
    } ),
    {
      IMPRESSION_KEYS: {
        CONTEXTUAL_RECOMMENDATION_IMPRESSION: O
      },
      CONTROL_NAMES: I,
      ACTION_KEYS: {
        MEBC_QUICK_REPLY_ACTION: k
      }
    } = o.default
  let C = ( l = ( 0, r.classNames )( "conversations-quick-replies", "justify-center", "display-flex", "align-items-center" ), c = Ember.inject.service( "lix" ), d = Ember.inject.service( "store" ), p = Ember.inject.service( "tracking" ), u = Ember.inject.service( "client-sensor-web@client-sensor" ), m = Ember.inject.service( "msg-shared@emoji-skintone" ), h = Ember.computed( "quickReplies.[]", "maxQuickReplies", "saveReply", "openGIFPopover", "handleInMailReplySmartAction" ).readOnly(), g = Ember._action, b = Ember._action, l( f = ( y = class extends Ember.Component {
    constructor() {
      super( ...arguments );
      ( 0, i.default )( this, "data-test-conversations-quick-replies", !0 );
      ( 0, t.default )( this, "lix", _, this );
      ( 0, t.default )( this, "store", E, this );
      ( 0, t.default )( this, "tracking", R, this );
      ( 0, t.default )( this, "clientSensor", T, this );
      ( 0, t.default )( this, "emojiSkintoneManager", v, this );
      ( 0, i.default )( this, "disableScrollLeft", !0 );
      ( 0, i.default )( this, "disableScrollRight", !1 );
      ( 0, i.default )( this, "animateIn", !0 )
    }
    get filteredQuickReplies() {
      const {
        quickReplies: e,
        maxQuickReplies: t
      } = Ember.getProperties( this, "quickReplies", "maxQuickReplies" ), i = {
        TEXT: this.saveReply,
        GIF: this.openGIFPopover,
        INMAIL_ACCEPT: this.handleInMailReplySmartAction,
        INMAIL_DECLINE: this.handleInMailReplySmartAction
      }, n = e.filter( e => {
        const t = Ember.get( e, "reply.replyType" )
        return !t || i[ t ]
      } )
      return t ? n.slice( 0, t ) : n
    }
    init() {
      super.init.apply( this, arguments )
      this.tracking.setupTrackableComponent( this )
      this._cachedContextWidth = this.contextWidth
      if ( Ember.get( this.conversation, "latestEvent.isInMail" ) ) {
        let e = "premium_"
        Ember.get( this.conversation, "latestEvent.isRecruiterInMail" ) ? e = "lts_" : Ember.get( this.conversation, "latestEvent.isSalesInMail" ) && ( e = "lss_" )
        this.inmailPrefix = e
      }
    }
    didInsertElement() {
      super.didInsertElement.apply( this, arguments )
      this.scrollingElement = this.element.querySelector( ".conversations-quick-replies__container" )
    }
    didReceiveAttrs() {
      super.didReceiveAttrs.apply( this, arguments )
      const e = this.eventId
      this.shouldUpdate = !e || e !== this.lastQRId
      if ( this.shouldUpdate ) {
        Ember.set( this, "animateIn", !1 )
        this.lastQRId = e
      }
    }
    didUpdateAttrs() {
      super.didUpdateAttrs.apply( this, arguments )
      if ( this._cachedContextWidth !== this.contextWidth ) {
        this._checkOverflow()
        this._cachedContextWidth = this.contextWidth
      }
    }
    didRender() {
      super.didRender.apply( this, arguments )
      if ( this.shouldUpdate ) {
        this._checkOverflow()
        this.shouldUpdate = !1
      }
    }
    onExposed() {
      const e = this.useCase
      if ( e ) {
        const t = this.filteredQuickReplies,
          {
            tracking: i
          } = this
        t.forEach( t => {
          const {
            reply: n
          } = t
          i.fireTrackingPayload( O, {
            recommendedEntity: {
              recommendedEntityUrn: Ember.get( n, "objectUrn" ),
              recommendationTrackingId: Ember.get( n, "trackingId" ),
              usecase: e,
              visibleTime: 0,
              duration: 0,
              listPosition: {
                index: 0
              }
            }
          } )
        } )
      }
    }
    _checkOverflow() {
      Ember.set( this, "hasOverflow", !1 );
      ( 0, a.mutateDOM )( () => {
        this.isDestroying || Ember.run( () => {
          Ember.set( this, "hasOverflow", this.scrollingElement.scrollWidth > this.scrollingElement.clientWidth )
        } )
      } )
    }
    _updateScrollButtons() {
      const e = this.scrollingElement.scrollWidth - this.scrollingElement.clientWidth
      let t = !1,
        i = !1
      0 === this.scrollingElement.scrollLeft ? t = !0 : this.scrollingElement.scrollLeft === e && ( i = !0 )
      Ember.setProperties( this, {
        disableScrollLeft: t,
        disableScrollRight: i
      } )
    }
    sendQuickReply( e, t, i ) {
      const n = i.target.querySelector( ".conversations-quick-replies__reply-content" ).innerText
      n && Ember.set( e, "content.text", n )
      const s = this.useCase
      this.saveReply( e, t, s )
      const r = this.tracking.generateControlUrn( I.MEBC_QUICK_REPLY ),
        a = Ember.get( e, "trackingId" )
      this.tracking.fireTrackingPayload( k, {
        controlUrn: r,
        recommendationTrackingId: a,
        actionCategory: "SELECT",
        usecase: s
      } )
      this.clientSensor.incrementMetricCounter( {
        groupName: "messaging",
        metricName: "smart-reply-action-event"
      } )
    }
    scrollHandler( e ) {
      ( 0, a.mutateDOM )( () => {
        if ( !this.isDestroying ) {
          const {
            scrollLeft: t
          } = this.scrollingElement, i = "LEFT" === e ? t - 120 : t + 120
          this.scrollingElement.scrollLeft = i
          this._updateScrollButtons()
        }
      } )
    }
  }, _ = ( 0, n.default )( y.prototype, "lix", [ c ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), E = ( 0, n.default )( y.prototype, "store", [ d ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), R = ( 0, n.default )( y.prototype, "tracking", [ p ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), T = ( 0, n.default )( y.prototype, "clientSensor", [ u ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), v = ( 0, n.default )( y.prototype, "emojiSkintoneManager", [ m ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), ( 0, n.default )( y.prototype, "filteredQuickReplies", [ h ], Object.getOwnPropertyDescriptor( y.prototype, "filteredQuickReplies" ), y.prototype ), ( 0, n.default )( y.prototype, "sendQuickReply", [ g ], Object.getOwnPropertyDescriptor( y.prototype, "sendQuickReply" ), y.prototype ), ( 0, n.default )( y.prototype, "scrollHandler", [ b ], Object.getOwnPropertyDescriptor( y.prototype, "scrollHandler" ), y.prototype ), y ) ) || f )
  e.default = C
  Ember._setComponentTemplate( S, C )
} )
define( "dummy-yield-wrapper/components/dummy-yield-wrapper", [ "exports", "@ember-decorators/component" ], function ( e, t ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var i
  let n = ( 0, t.tagName )( "" )( i = class extends Ember.Component {} ) || i
  e.default = n
} )
define( "heathrow/components/heathrow-toast", [ "exports", "@babel/runtime/helpers/esm/toConsumableArray", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@ember-decorators/component" ], function ( e, t, i, n, s, r, a ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var o, l, c, d, p, u, m
  let h = ( o = ( 0, a.tagName )( "section" ), l = ( 0, a.classNames )( "mn-heathrow-toast", "artdeco-card" ), c = Ember.inject.service( "tracking" ), d = Ember._action, o( p = l( p = ( u = class extends Ember.Component {
    constructor() {
      super( ...arguments );
      ( 0, i.default )( this, "tracking", m, this );
      ( 0, n.default )( this, "isMarkedUnknown", !1 )
    }
    init() {
      super.init.apply( this, arguments )
      const {
        inviteActionFailed: e
      } = this
      Ember.setProperties( this, {
        showMarkUnknownBtn: !e && this.ignoreInvite,
        showPersonPicture: this.acceptInvite && !e || this.sendInvite
      } )
    }
    rejectInvitationWithAction( e ) {
      var i
      this.tracking.fireInteractionEvent( "i_don't_know" )
      Ember.set( this, "isMarkedUnknown", !0 )
      null === ( i = this.rejectInvitationAction ) || void 0 === i || i.call.apply( i, [ this ].concat( ( 0, t.default )( e ) ) )
    }
  }, m = ( 0, s.default )( u.prototype, "tracking", [ c ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), ( 0, s.default )( u.prototype, "rejectInvitationWithAction", [ d ], Object.getOwnPropertyDescriptor( u.prototype, "rejectInvitationWithAction" ), u.prototype ), u ) ) || p ) || p )
  e.default = h
} )
define( "heathrow/services/heathrow", [ "exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "global-utils/utils/is-browser", "ember-cli-pemberly-tracking/utils/tracking", "heathrow/utils/constants" ], function ( e, t, i, n, s, r, a, o ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var l, c, d, p, u, m, h, g, b, f, y
  let _ = ( l = Ember.inject.service( "store" ), c = Ember.inject.service( "tracking" ), d = Ember.inject.service( "lego@tracking" ), p = Ember.inject.service( "global-services@local-storage" ), u = Ember.inject.service( "lix" ), m = class extends Ember.Service {
    constructor() {
      super( ...arguments );
      ( 0, t.default )( this, "store", h, this );
      ( 0, t.default )( this, "tracking", g, this );
      ( 0, t.default )( this, "legoTracking", b, this );
      ( 0, t.default )( this, "localStorage", f, this );
      ( 0, t.default )( this, "lix", y, this )
    }
    _hasSeenPhoto() {
      const {
        localStorage: e
      } = this
      if ( e && e.cacheAvailable ) {
        const t = ( new Date ).getTime(),
          i = e.getKeyedObject( "heathrowPhotoTimestamp", 0 ),
          n = i && i.lastSeen
        if ( n ) return Math.abs( t - n ) < 864e5
      }
      return !1
    }
    _normalizeEntityName() {
      return ( arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : "" ).split( /[/.]/ ).pop().replace( "-", "" ).toLowerCase()
    }
    _getRouteServed( e, t, i ) {
      const n = this._normalizeEntityName( t ),
        s = {
          abiroute: function ( e ) {
            return "SKIP_SPLASH" === e ? o.HEATHROW_ROUTES.ABI_RESULTS_LANDING : o.HEATHROW_ROUTES.ABI_SPLASH
          },
          feedroute: o.HEATHROW_ROUTES.FEED,
          pymkroute: o.HEATHROW_ROUTES.PYMK,
          profilephotouploadroute: this._hasSeenPhoto() ? o.HEATHROW_ROUTES.PYMK : o.HEATHROW_ROUTES.PROFILE_PHOTO_UPLOAD,
          genericroute: o.HEATHROW_ROUTES.GENERIC_ROUTE,
          entityactivityfeedroute: o.HEATHROW_ROUTES.ENTITY_ACTIVITY_FEED,
          colleaguesroute: o.HEATHROW_ROUTES.COLLEAGUES,
          default: e.get( "fallbackRoute" ) || o.HEATHROW_ROUTES.PYMK
        }
      return n === o.HEATHROW_NORMAL_NAME_MAP.ABI ? s[ n ]( i ) : s[ n ] || s.default
    }
    _handleSuggestedRouteResponse( e ) {
      const t = e.get( "elements.firstObject.route" ),
        i = e.get( "elements.firstObject.suggestedRoute" ),
        n = t.get( "splashOperation" ),
        {
          emberEntityName: s,
          legoTrackingToken: r,
          $type: a
        } = Ember.getProperties( t, "emberEntityName", "legoTrackingToken", "$type" ),
        l = this._getRouteServed( t, s || a, n )
      this._fireSuggestedRouteActionEvent( this.trackingId, i || l )
      r && this._fireLegoImpressionEvent( r )
      return l === o.HEATHROW_ROUTES.GENERIC_ROUTE ? {
        route: i
      } : l === o.HEATHROW_ROUTES.COLLEAGUES ? {
        route: l,
        colleaguesCompanyUrn: e.get( "elements.firstObject.route.miniCompany.entityUrn" )
      } : {
        route: l
      }
    }
    organicAbiShouldSkipImport() {
      if ( !r.default ) return Ember.RSVP.resolve( !1 )
      const e = o.HEATHROW_ROUTES.ORGANIC_ABI,
        t = o.HEATHROW_USER_ACTION_TYPES.USER_NAVIGATION,
        i = [ o.HEATHROW_ROUTES.ABI_RESULTS_LANDING, o.HEATHROW_ROUTES.ABI_SPLASH ]
      return this.getSuggestedRoute( e, t, i ).then( e => {
        let {
          route: t
        } = e
        return o.HEATHROW_ROUTES.ABI_RESULTS_LANDING === t
      } )
    }
    _fireSuggestedRouteRequestEvent( e, t, i ) {
      this.tracking.fireTrackingPayload( "SuggestedRouteRequestEvent", {
        trackingId: i,
        origin: e,
        userActionType: t
      } )
    }
    _fireSuggestedRouteActionEvent( e, t, i ) {
      this.tracking.fireTrackingPayload( "SuggestedRouteActionEvent", {
        trackingId: e,
        routeServed: t,
        error: i
      } )
    }
    _fireLegoImpressionEvent( e ) {
      const {
        legoTracking: t
      } = this
      t.sendLegoImpression( e, t.LEGO_IMPRESSION_VISIBILITY_SHOW )
    }
    getSuggestedRoute( e, t, i, n ) {
      const s = ( 0, a.generateTrackingId )(),
        r = {
          origin: e,
          trackingId: s,
          userActionType: t,
          q: "viewerAndAction",
          platform: "DESKTOP"
        }
      this.setProperties( {
        trackingId: s
      } )
      n && ( r.actor = n )
      i && i.length > 0 && Ember.assign( r, {
        list: [ {
          key: "supportedRoutes",
          values: i
        } ]
      } )
      this._fireSuggestedRouteRequestEvent( e, t, s )
      let o = "growth/suggestedRoutes"
      const l = Object.keys( r )
      for ( let a = 0; a < l.length; a++ ) {
        const e = r[ l[ a ] ]
        o += `|${"object"==typeof e?JSON.stringify(e):e}`
      }
      return this.store.queryURL( "growth/suggestedRoutes", {
        cacheKey: o,
        params: r,
        reload: !0
      } ).then( e => this._handleSuggestedRouteResponse( e ) )
    }
  }, h = ( 0, n.default )( m.prototype, "store", [ l ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), g = ( 0, n.default )( m.prototype, "tracking", [ c ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), b = ( 0, n.default )( m.prototype, "legoTracking", [ d ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), f = ( 0, n.default )( m.prototype, "localStorage", [ p ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), y = ( 0, n.default )( m.prototype, "lix", [ u ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), m )
  e.default = _
} )
define( "heathrow/utils/constants", [ "exports" ], function ( e ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.HEATHROW_NORMAL_NAME_MAP = e.HEATHROW_USER_ACTION_TYPES = e.HEATHROW_ROUTE_MAP = e.HEATHROW_ROUTES = void 0
  e.HEATHROW_ROUTES = {
    ABI_SPLASH: "ABI_SPLASH",
    ABI_RESULTS_LANDING: "ABI_RESULTS_LANDING",
    ORGANIC_ABI: "ORGANIC_ABI",
    FEED: "FEED",
    PYMK: "PYMK",
    SPLASH: "SPLASH",
    PROFILE_PHOTO_UPLOAD: "PROFILE_PHOTO_UPLOAD",
    ENTITY_ACTIVITY_FEED: "ENTITY_ACTIVITY_FEED",
    GENERIC_ROUTE: "GENERIC_ROUTE",
    GET_THE_APP: "GET_THE_APP",
    FOLLOW_HUB: "FOLLOW_HUB",
    COLLEAGUES: "COLLEAGUES"
  }
  e.HEATHROW_ROUTE_MAP = {
    ABI_SPLASH: "abi.intro",
    ABI_RESULTS_LANDING: "abi.results",
    FEED: "feed.index",
    PROFILE_PHOTO_UPLOAD: "mynetwork.index",
    ENTITY_ACTIVITY_FEED: "profile-subroutes.detail-recent-activity",
    PYMK: "index",
    GET_THE_APP: "index",
    FOLLOW_HUB: "feed.follow.confirmation.invite-accept",
    COLLEAGUES: "index"
  }
  e.HEATHROW_USER_ACTION_TYPES = {
    USER_NAVIGATION: "USER_NAVIGATION",
    ACCEPT_INVITATION: "ACCEPT_INVITATION",
    INVITATION_ACCEPTANCE_NOTIFICATION: "INVITATION_ACCEPTANCE_NOTIFICATION",
    CONNECT: "CONNECT",
    IGNORE_INVTATION: "IGNORE_INVTATION"
  }
  e.HEATHROW_NORMAL_NAME_MAP = {
    ABI: "abiroute",
    FEED: "feedroute",
    PYMK: "pymkroute",
    PROFILE_PHOTO_UPLOAD: "profilephotouploadroute"
  }
} )
define( "msg-facepile-grid/components/conversation-facepile-grid", [ "exports", "@babel/runtime/helpers/esm/toConsumableArray", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component" ], function ( e, t, i, n, s, r, a ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var o, l, c, d, p, u, m
  const h = Ember.HTMLBars.template( {
    id: "fCCS1HDv",
    block: '{"symbols":["@conversation","@entitySize","@iconSize","&attrs"],"statements":[[4,"if",[[23,0,["conversationParticipants"]]],null,{"statements":[[0,"  "],[5,"msg-facepile-grid@facepile-grid",[[13,4]],[["@participants","@isManyToManyConvo","@entitySize","@iconSize"],[[23,0,["conversationParticipants"]],[23,1,["isManyToManyConvo"]],[23,2,[]],[23,3,[]]]]],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',
    meta: {
      moduleName: "msg-facepile-grid/components/conversation-facepile-grid.hbs"
    }
  } )
  let g = ( o = Ember.inject.service( "formatter" ), l = Ember.inject.service( "authentication@authenticated-user" ), c = Ember.inject.service( "lix" ), d = class extends a.default {
    constructor() {
      super( ...arguments );
      ( 0, i.default )( this, "formatter", p, this );
      ( 0, i.default )( this, "authenticatedUser", u, this );
      ( 0, i.default )( this, "lix", m, this )
      this.enableGroupChatIdentity = this.lix.getTreatmentIsEnabled( "voyager.web.messaging-group-chat-identity" )
    }
    get conversationParticipants() {
      const e = Ember.get( this, "args.conversation.latestParticipants" )
      if ( e && this.enableGroupChatIdentity && Ember.get( this, "args.conversation.isManyToManyConvo" ) && Ember.get( this, "args.conversation.viewerCurrentParticipant" ) ) {
        const i = Ember.get( this, "authenticatedUser.miniProfile" )
        return [].concat( ( 0, t.default )( e ), [ {
          miniProfile: i,
          picture: Ember.get( i, "picture" ),
          ghostType: "person",
          fullName: this.formatter.formatName( i, "full" )
        } ] )
      }
      return e
    }
  }, p = ( 0, s.default )( d.prototype, "formatter", [ o ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), u = ( 0, s.default )( d.prototype, "authenticatedUser", [ l ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), m = ( 0, s.default )( d.prototype, "lix", [ c ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), d )
  e.default = g
  Ember._setComponentTemplate( h, g )
} )
define( "msg-facepile-grid/components/facepile-grid", [ "exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component" ], function ( e, t, i, n, s, r ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var a, o, l
  const c = Ember.HTMLBars.template( {
      id: "ttIRUYRB",
      block: '{"symbols":["p","@iconSize","@participants","&attrs"],"statements":[[7,"div",false],[12,"class",[29,["msg-facepile-grid\\n    ",[28,"if",[[28,"global-helpers@or",[[23,0,["hasGroupChatIdentity"]],[28,"global-helpers@gt",[[23,3,["length"]],1],null]],null],"msg-facepile-grid--group-size-2","msg-facepile-grid--no-facepile"],null],"\\n    ",[23,0,["sizeClass"]]]]],[13,4],[8],[0,"\\n"],[4,"if",[[28,"global-helpers@and",[[23,0,["hasGroupChatIdentity"]],[28,"global-helpers@eq",[[23,3,["length"]],1],null]],null]],null,{"statements":[[0,"    "],[7,"div",true],[10,"class","msg-facepile-grid__img msg-facepile-grid__group-chat-icon"],[8],[0,"\\n      "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","size","class"],["people-icon",[23,2,[]],"t-black--light"]]],false],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[4,"each",[[23,0,["participantsToPrint"]]],null,{"statements":[[0,"    "],[5,"ember-vector-images@lazy-image",[],[["@classNames","@image","@alt","@desiredWidth","@desiredHeight","@ghostType"],[[28,"concat",["msg-facepile-grid__img msg-facepile-grid__img--",[23,1,["ghostType"]]],null],[23,1,["picture"]],[23,1,["fullName"]],100,100,[23,1,["ghostType"]]]]],[0,"\\n"]],"parameters":[1]},null],[9],[0,"\\n"]],"hasEval":false}',
      meta: {
        moduleName: "msg-facepile-grid/components/facepile-grid.hbs"
      }
    } ),
    d = {
      1: "msg-facepile-grid--1",
      2: "msg-facepile-grid--2",
      3: "msg-facepile-grid--3",
      4: "msg-facepile-grid--4"
    }
  let p = ( a = Ember.inject.service( "lix" ), o = class extends r.default {
    get sizeClass() {
      return d[ this.args.entitySize ]
    }
    get participantsToPrint() {
      return this.args.participants.slice( 0, 2 )
    }
    get hasGroupChatIdentity() {
      return this.enableGroupChatIdentity && Ember.get( this, "args.isManyToManyConvo" )
    }
    constructor() {
      super( ...arguments );
      ( 0, t.default )( this, "lix", l, this )
      this.enableGroupChatIdentity = this.lix.getTreatmentIsEnabled( "voyager.web.messaging-group-chat-identity" )
    }
  }, l = ( 0, n.default )( o.prototype, "lix", [ a ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), o )
  e.default = p
  Ember._setComponentTemplate( c, p )
} )
define( "msg-typeahead/components/connections-typeahead", [ "exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@ember-decorators/component", "global-utils/utils/is-browser", "msg-shared/utils/constants", "ember-batcher", "urn-utils", "global-helpers/helpers/load" ], function ( e, t, i, n, s, r, a, o, l, c, d ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var p, u, m, h, g, b, f, y, _, E, R, T, v, S, O, I, k, C, P, x, A, N, L, U, M, w, H, D, z, F, j
  const B = Ember.HTMLBars.template( {
      id: "CHh1707/",
      block: '{"symbols":["recipient","index","openMessaging","entryPointData","recipient"],"statements":[[0,"\\n"],[4,"if",[[23,0,["a11yText"]]],null,{"statements":[[0,"  "],[7,"label",true],[11,"for",[29,[[23,0,["elementId"]],"-search-field"]]],[10,"class","visually-hidden"],[8],[1,[23,0,["a11yText"]],false],[9],[0,"\\n"]],"parameters":[]},null],[7,"section",true],[10,"class","msg-connections-typeahead__top-fixed-section"],[8],[0,"\\n  "],[7,"div",true],[10,"class","scrollable msg-connections-typeahead__added-recipients display-flex align-items-center pl2 pv1"],[11,"onclick",[28,"action",[[23,0,[]],"setFocusToParticipantTextField"],null]],[8],[0,"\\n"],[4,"each",[[23,0,["recipientsWithContext"]]],null,{"statements":[[0,"      "],[5,"artdeco-pill@artdeco-pill-dismiss",[],[["@class","@text","@a11yText","@onDismiss","@size"],["msg-connections-typeahead__added-recipient mv1 mr1",[28,"ember-cli-pemberly-i18n@format-name",null,[["firstName","lastName","type"],[[23,5,["miniProfile","firstName"]],[23,5,["miniProfile","lastName"]],"full"]]],[28,"t",["i18n_remove_recipient","msg-typeahead/components/connections-typeahead"],[["recipientName"],[[28,"global-helpers@name",[[23,5,[]]],null]]]],[28,"action",[[23,0,[]],"removeRecipientFromTypeahead",[23,5,[]]],null],1]]],[0,"\\n"]],"parameters":[5]},null],[0,"\\n    "],[7,"input",false],[12,"id",[28,"concat",[[23,0,["elementId"]],"-search-field"],null]],[12,"class",[28,"concat",["msg-connections-typeahead__search-field",[28,"unless",[[23,0,["recipients"]]," msg-connections-typeahead__search-field--no-recipients"],null]," ml1 mv1"],null]],[12,"autofocus",[23,0,["autofocus"]]],[12,"placeholder",[28,"unless",[[23,0,["recipients"]],[23,0,["placeholder"]]],null]],[12,"role","combobox"],[12,"aria-autocomplete","list"],[12,"aria-owns",[28,"concat",[[23,0,["elementId"]],"-suggestions-menu"],null]],[12,"autocomplete","off"],[12,"aria-expanded",[28,"if",[[23,0,["possibleRecipients"]],"true","false"],null]],[12,"aria-activedescendant",[23,0,["highlightedRecipient","domId"]]],[12,"type","text"],[3,"on",["input",[28,"fn",[[23,0,["debounceFetchRecipients"]]],null]]],[3,"on",["focus",[28,"ember-simple-set-helper@set",[[23,0,[]],"isFocusedOnSearchField",true],null]]],[3,"on",["blur",[28,"ember-simple-set-helper@set",[[23,0,[]],"isFocusedOnSearchField",false],null]]],[8],[9],[0,"\\n\\n"],[4,"if",[[23,0,["displayPlusIcon"]]],null,{"statements":[[0,"      "],[5,"artdeco-button@artdeco-button",[],[["@class","@color","@size","@icon","@circle","@text","@click"],["msg-connections-typeahead__plus-icon mv2 ml2","muted",1,"plus-icon",true,[28,"t",["i18n_show_recipient_suggestions","msg-typeahead/components/connections-typeahead"],null],[28,"ember-cli-pemberly-tracking@tracked-action",[[23,0,["plusIconControlName"]],[28,"action",[[23,0,[]],"showSuggestions"],null]],null]]]],[0,"\\n"]],"parameters":[]},null],[0,"\\n    "],[7,"div",true],[10,"class","msg-connections-typeahead__hidden-field"],[8],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"],[4,"if",[[23,0,["displaySearchResults"]]],null,{"statements":[[0,"  "],[7,"div",true],[11,"class",[29,["scrollable ",[28,"concat",[[28,"if",[[23,0,["renderInPlace"]],"msg-connections-typeahead__inplace-search-results","msg-connections-typeahead__search-results container"],null],[28,"if",[[23,0,["showJumboExpandedSearchResults"]]," msg-connections-typeahead__search-results--jumbo-bubble-expanded"],null],[28,"if",[[23,0,["showExpandedSearchResults"]]," msg-connections-typeahead__search-results--expanded"],null]],null]]]],[8],[0,"\\n"],[4,"if",[[23,0,["activeFetch","isLoading"]]],null,{"statements":[[0,"      "],[5,"artdeco-loader@artdeco-loader",[[12,"class","mhA"]],[["@size"],["small"]]],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,0,["activeFetch","isLoaded"]]],null,{"statements":[[4,"if",[[23,0,["possibleRecipients"]]],null,{"statements":[[4,"if",[[23,0,["showSuggestedLabel"]]],null,{"statements":[[0,"          "],[7,"div",true],[10,"class","t-bold t-14 t-black--light pb2 pl3 pt2"],[8],[0,"\\n            "],[1,[28,"t",["i18n_suggested","msg-typeahead/components/connections-typeahead"],null],false],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[]},null],[0,"        "],[7,"ul",true],[10,"class","list-style-none"],[10,"role","listbox"],[11,"id",[28,"concat",[[23,0,["elementId"]],"-suggestions-menu"],null]],[8],[0,"\\n"],[4,"each",[[23,0,["possibleRecipients"]]],null,{"statements":[[0,"            "],[7,"li",true],[10,"role","presentation"],[11,"onmouseover",[28,"action",[[23,0,[]],"onListItemHover",[23,1,[]]],null]],[8],[0,"\\n"],[4,"if",[[28,"global-helpers@eq",[[23,1,["recipientType"]],[23,0,["CONVERSATION"]]],null]],null,{"statements":[[0,"                "],[5,"msg-typeahead@conversation-result",[[12,"onmousedown",[28,"action",[[23,0,[]],"preventEventChain"],null]]],[["@highlightedRecipient","@recipient","@listPosition","@openConversationControlName","@openConversation"],[[23,0,["highlightedRecipient"]],[23,1,[]],[23,2,[]],[28,"if",[[23,0,["isSuggestedList"]],[23,0,["quickOpenConversationControlName"]],[23,0,["openConversationControlName"]]],null],[28,"action",[[23,0,[]],[23,0,["openConversation"]]],null]]]],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,0,["includeNonConnectionResults"]]],null,{"statements":[[4,"if",[[28,"global-helpers@or",[[28,"global-helpers@or",[[28,"global-helpers@eq",[[23,1,["recipientType"]],[23,0,["CONNECTIONS"]]],null],[28,"global-helpers@and",[[23,0,["enableGroupMessageRequests"]],[28,"global-helpers@eq",[[23,1,["type"]],[23,0,["COWORKERS"]]],null]],null]],null],[23,0,["isSuggestedList"]]],null]],null,{"statements":[[0,"                    "],[5,"msg-typeahead@person-result",[[12,"onclick",[28,"ember-cli-pemberly-tracking@tracked-action",[[28,"if",[[28,"global-helpers@eq",[[23,1,["type"]],[23,0,["COWORKERS"]]],null],[23,0,["addCoworkerControlName"]],[28,"if",[[23,0,["isSuggestedList"]],[23,0,["quickAddRecipientControlName"]],[23,0,["addRecipientControlName"]]],null]],null],[28,"action",[[23,0,[]],"handleTypeaheadResultClick",[23,1,[]]],null]],null]],[12,"onmousedown",[28,"action",[[23,0,[]],"preventEventChain"],null]]],[["@highlightedRecipient","@recipient","@listPosition","@trackingUsecase"],[[23,0,["highlightedRecipient"]],[23,1,[]],[23,2,[]],[28,"if",[[23,0,["renderInPlace"]],"GROUP_COMPOSE_MEMBER_FOR_GROUP","COMPOSE_MEMBER_FOR_GROUP_THREAD"],null]]]],[0,"\\n"]],"parameters":[]},{"statements":[[0,"                    "],[5,"message-button@entry-point",[],[["@interstitialUpsellOrigin","@recipientUrns","@contextEntityUrn","@screenContext"],["premium_inmail_message_compose_typeahead_upsell_modal",[23,1,["entityUrn"]],[23,1,["contextEntityUrn"]],"MESSAGING"]],{"statements":[[0,"\\n                      "],[5,"msg-typeahead@person-result",[[12,"onclick",[28,"ember-cli-pemberly-tracking@tracked-action",[[28,"if",[[28,"global-helpers@eq",[[23,1,["type"]],[23,0,["COWORKERS"]]],null],[23,0,["addCoworkerControlName"]],[23,0,["addNonConnectionControlName"]]],null],[28,"action",[[23,0,[]],[23,0,["composeToNonConnection"]],[23,3,[]],[23,4,[]]],null]],null]],[12,"onmousedown",[28,"action",[[23,0,[]],"preventEventChain"],null]]],[["@highlightedRecipient","@recipient"],[[23,0,["highlightedRecipient"]],[23,1,[]]]]],[0,"\\n                    "]],"parameters":[3,4]}],[0,"\\n"]],"parameters":[]}]],"parameters":[]},{"statements":[[0,"                  "],[5,"msg-typeahead@person-result",[[12,"onclick",[28,"ember-cli-pemberly-tracking@tracked-action",[[28,"if",[[23,0,["isSuggestedList"]],[23,0,["quickAddRecipientControlName"]],[23,0,["addRecipientControlName"]]],null],[28,"action",[[23,0,[]],"handleTypeaheadResultClick",[23,1,[]]],null]],null]],[12,"onmousedown",[28,"action",[[23,0,[]],"preventEventChain"],null]]],[["@highlightedRecipient","@recipient","@selectedRecipientUrns","@listPosition","@trackingUsecase"],[[23,0,["highlightedRecipient"]],[23,1,[]],[23,0,["selectedRecipientUrns"]],[23,2,[]],[28,"if",[[23,0,["renderInPlace"]],"GROUP_COMPOSE_MEMBER_FOR_GROUP","COMPOSE_MEMBER_FOR_GROUP_THREAD"],null]]]],[0,"\\n"]],"parameters":[]}]],"parameters":[]}],[0,"            "],[9],[0,"\\n"]],"parameters":[1,2]},null],[0,"        "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"        "],[7,"div",true],[10,"class","msg-connections-typeahead__no-result p2 display-flex align-items-center"],[8],[0,"\\n          "],[5,"artdeco-inline-feedback@artdeco-inline-feedback",[],[["@message"],[[28,"if",[[23,0,["onlyConnectionResults"]],[28,"t",["i18n_no_connection_results","msg-typeahead/components/connections-typeahead"],null],[28,"t",["i18n_no_results","msg-typeahead/components/connections-typeahead"],null]],null]]]],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]}],[0,"    "]],"parameters":[]},null]],"parameters":[]}],[0,"  "],[9],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',
      meta: {
        moduleName: "msg-typeahead/components/connections-typeahead.hbs"
      }
    } ),
    W = {},
    {
      KEYCODES: q,
      MESSAGE_TYPEAHEAD_SEARCH_TYPES: {
        CONNECTIONS: G,
        COWORKERS: Y,
        GROUP_THREADS: K,
        PEOPLE: V
      },
      MESSAGE_TYPEAHEAD_RESULT_TYPES: {
        CONVERSATION: Q
      }
    } = o.default
  let $ = ( p = ( 0, r.classNameBindings )( "renderInPlace:msg-connections-typeahead-with-full-suggested-list", "isFocused:msg-connections-typeahead--is-focused" ), u = ( 0, r.classNames )( "msg-connections-typeahead", "relative" ), m = Ember.inject.service( "global-services@a11y-notification" ), h = Ember.inject.service( "i18n" ), g = Ember.inject.service( "lix" ), b = Ember.inject.service( "msg-data@data-manager" ), f = Ember.inject.service( "store" ), y = Ember.inject.service( "tracking" ), _ = Ember.computed( "recipientSuggestionEnabled", "recipients.length", "searchTerm", "displaySearchResults" ).readOnly(), E = Ember.computed( "isFocusedOnSearchField", "renderInPlace", "activeFetch" ).readOnly(), R = Ember.computed( "recipients.length", "includeGroupConversationResults", "includeNonConnectionResults" ).readOnly(), T = Ember.computed.mapBy( "recipients", "entityUrn" ).readOnly(), v = Ember.computed( "recipientsWithContext.[]" ).readOnly(), S = Ember.computed.mapBy( "recipientsWithContext", "miniProfile" ).readOnly(), O = Ember._action, I = Ember._action, k = Ember._action, C = Ember._action, P = Ember._action, x = Ember._action, A = Ember._action, p( N = u( N = ( L = class extends Ember.Component {
    constructor() {
      super( ...arguments );
      ( 0, t.default )( this, "a11yNotification", U, this );
      ( 0, t.default )( this, "i18n", M, this );
      ( 0, t.default )( this, "lix", w, this );
      ( 0, t.default )( this, "msgDataManager", H, this );
      ( 0, t.default )( this, "store", D, this );
      ( 0, t.default )( this, "tracking", z, this );
      ( 0, i.default )( this, "addRecipientControlName", "search_add" );
      ( 0, i.default )( this, "quickAddRecipientControlName", "quick_add" );
      ( 0, i.default )( this, "addNonConnectionControlName", "search_add_nonconnection" );
      ( 0, i.default )( this, "addCoworkerControlName", "search_add_coworker" );
      ( 0, i.default )( this, "openConversationControlName", "search_add_group" );
      ( 0, i.default )( this, "quickOpenConversationControlName", "quick_add_group" );
      ( 0, i.default )( this, "beginSearchControlName", "begin_recipient_search" );
      ( 0, i.default )( this, "plusIconControlName", "plus_icon" );
      ( 0, i.default )( this, "searchTerm", "" );
      ( 0, i.default )( this, "recipientsWithContext", [] );
      ( 0, i.default )( this, "searchFieldClass", "msg-connections-typeahead__search-field" );
      ( 0, i.default )( this, "searchFieldSelector", ".msg-connections-typeahead__search-field" );
      ( 0, i.default )( this, "searchResultClass", "msg-connections-typeahead__search-result" );
      ( 0, i.default )( this, "searchResultsSelector", ".msg-connections-typeahead__search-results" );
      ( 0, i.default )( this, "addedRecipientsSelector", ".msg-connections-typeahead__added-recipients" );
      ( 0, i.default )( this, "CONVERSATION", Q );
      ( 0, i.default )( this, "CONNECTIONS", G );
      ( 0, i.default )( this, "COWORKERS", Y );
      ( 0, t.default )( this, "selectedRecipientUrns", F, this );
      ( 0, t.default )( this, "recipients", j, this )
    }
    get displayPlusIcon() {
      return this.recipientSuggestionEnabled && 0 === this.searchTerm.length && !this.displaySearchResults && this.recipients.length > 0
    }
    get displaySearchResults() {
      return this.renderInPlace || this.isFocusedOnSearchField && this.activeFetch
    }
    get onlyConnectionResults() {
      return this.recipients.length || !( this.includeGroupConversationResults || this.includeNonConnectionResults )
    }
    get contextByRecipients() {
      const e = []
      this.recipientsWithContext.forEach( t => {
        t.contextEntityUrn && e.addObject( {
          recipient: ( 0, c.extractEntityInfoFromUrn )( Ember.get( t, "miniProfile.entityUrn" ) ).id,
          contextEntityUrn: t.contextEntityUrn
        } )
      } )
      return e
    }
    init() {
      super.init.apply( this, arguments )
      this._normalizeRecipientsWithContext()
      if ( this.withSuggestedList ) {
        this.renderInPlace && Ember.set( this, "searchResultsSelector", ".msg-connections-typeahead__inplace-search-results" )
        this._fetchSuggestedRecipients( this.includeGroupConversationResults )
      }
    }
    didUpdateAttrs() {
      var e
      super.didUpdateAttrs.apply( this, arguments );
      ( null === ( e = this.prefilledRecipients ) || void 0 === e ? void 0 : e.length ) > this.recipientsWithContext.length && this._normalizeRecipientsWithContext()
    }
    didInsertElement() {
      super.didInsertElement.apply( this, arguments )
      this.addedRecipientsContainer = this.element.querySelector( this.addedRecipientsSelector )
      this._focusSearchField()
    }
    focusIn( e ) {
      this.runTask( () => {
        var t
        if ( this.isDestroying ) return
        Ember.set( this, "isFocused", !0 )
        null === ( t = this.onFocusInTypeahead ) || void 0 === t || t.call( this )
        const {
          possibleRecipients: i
        } = this
        if ( !i ) return
        const n = e.target && e.target.id,
          s = i.findBy( "domId", n )
        s && this._setHighlightedRecipient( s )
      } )
    }
    focusOut() {
      this.runTask( () => {
        var e
        if ( !this.isDestroying ) {
          Ember.set( this, "isFocused", !1 )
          null === ( e = this.onFocusOutTypeahead ) || void 0 === e || e.call( this )
        }
      } )
    }
    click( e ) {
      e.target === this.element && this._focusSearchField()
    }
    keyDown( e ) {
      switch ( e.keyCode ) {
        case q.UP_ARROW:
          this._moveHighlightedRecipient( -1 )
          e.preventDefault()
          break
        case q.DOWN_ARROW:
          this._moveHighlightedRecipient( 1 )
          e.preventDefault()
          break
        case q.BACKSPACE:
          if ( e.target.classList.contains( this.searchFieldClass ) && !e.target.value ) {
            const e = Ember.get( this, "recipientsWithContext.lastObject" )
            e && this.actions.removeRecipientFromTypeahead.call( this, e )
          }
          break
        case q.ENTER:
          e.target === this._getSearchField() && this._handleEnterKey()
          break
        case q.ESC:
          this._closeDropdown( !0 )
      }
    }
    _closeDropdown( e ) {
      this.renderInPlace || Ember.set( this, "activeFetch", null )
      e ? Ember.set( this, "isFocused", !1 ) : this.withSuggestedList ? Ember.setProperties( this, {
        isSuggestedList: !0,
        possibleRecipients: this.suggestedRecipients,
        showSuggestedLabel: !0
      } ) : Ember.set( this, "possibleRecipients", null )
    }
    _ensureHighlightedRecipientIsScrolledIntoView() {
      const e = this._getHighlightedRecipientElement()
      if ( !e ) return
      const t = e.offsetTop,
        i = t + e.offsetHeight,
        n = this.element.querySelector( this.searchResultsSelector ),
        s = n.offsetHeight,
        r = n.scrollTop
      i > r + s ? n.scrollTop = i - s : t < r && ( n.scrollTop = t )
    }
    _handleEnterKey() {
      const e = this._getHighlightedRecipientElement() !e && this.actionOnTypeaheadEnter && "function" == typeof this.actionOnTypeaheadEnter ? this.actionOnTypeaheadEnter() : this._selectHighlightedRecipient( e )
    }
    _selectHighlightedRecipient( e ) {
      if ( a.default && e ) {
        e.click()
        this.tracking.fireInteractionEvent( "search_add_enterkey" )
      }
    }
    _getHighlightedRecipientElement() {
      var e
      const t = Ember.get( this, "highlightedRecipient.domId" )
      return t && ( null === ( e = this.element ) || void 0 === e ? void 0 : e.querySelector( `#${t}` ) )
    }
    _focusSearchField() {
      this._getSearchField().focus()
      Ember.set( this, "isFocusedOnSearchField", !0 )
    }
    _getSearchField() {
      return this.element.querySelector( this.searchFieldSelector )
    }
    _moveHighlightedRecipient( e ) {
      const {
        possibleRecipients: t
      } = this
      if ( !t || 0 === t.length ) return
      const i = this.highlightedRecipient,
        n = t.indexOf( i ),
        s = Ember.get( this, "possibleRecipients.length" ),
        r = i ? ( n + e + s ) % s : 0
      this._setHighlightedRecipient( t.objectAt( r ) )
    }
    _setHighlightedRecipient( e ) {
      Ember.set( this, "highlightedRecipient", e )
      this._ensureHighlightedRecipientIsScrolledIntoView( e )
    }
    _sendA11yNotification( e, t ) {
      let i = W[ e ]
      if ( !i ) {
        i = this.i18n.lookupTranslation( "component", "msg-typeahead@connections-typeahead", e )
        W[ e ] = i
      }
      return this.a11yNotification.setTextInLiveRegion( i( [ t ] ) )
    }
    _fetchRecipients( e ) {
      if ( !e ) {
        this._closeDropdown()
        return
      }
      const t = [ G ]
      if ( Ember.get( this, "recipients.length" ) ) this.enableGroupMessageRequests && t.push( Y )
      else {
        this.includeGroupConversationResults && t.push( K )
        this.includeNonConnectionResults && t.push( V )
        this.includeCoworkerResults && t.push( Y )
      }
      Ember.setProperties( this, {
        isSuggestedList: !1,
        showSuggestedLabel: !1
      } )
      const i = this.msgDataManager.fetchTypeaheadResults( e, t ).then( t => {
        t.forEach( e => Ember.set( e, "domId", Ember.guidFor( e ) ) )
        if ( !this.isDestroying ) {
          const i = this._filterOutExistingRecipients( t )
          i.length ? Ember.setProperties( this, {
            highlightedRecipient: Ember.get( i, "firstObject" ),
            possibleRecipients: i,
            isSuggestedList: !1,
            showSuggestedLabel: !1
          } ) : this.withSuggestedList && !e ? Ember.setProperties( this, {
            isSuggestedList: !0,
            highlightedRecipient: Ember.get( this, "suggestedRecipients.firstObject" ),
            possibleRecipients: this.suggestedRecipients,
            showSuggestedLabel: !0
          } ) : Ember.set( this, "possibleRecipients", null )
          this._sendA11yNotification( "i18n_a11y_suggestions_hint_text", {
            resultsLength: Ember.get( i, "length" )
          } )
        }
      } )
      Ember.set( this, "activeFetch", ( 0, d.load )( i ) )
    }
    _filterOutExistingRecipients( e ) {
      const t = new Set( this.recipients.mapBy( "entityUrn" ) ),
        i = new Set( this.recipientsToFilterOut ? this.recipientsToFilterOut.mapBy( "entityUrn" ) : [] )
      return e.filter( e => !t.has( Ember.get( e, "entityUrn" ) ) && !i.has( Ember.get( e, "entityUrn" ) ) )
    }
    _fetchSuggestedRecipients( e, t ) {
      let i = []
      if ( t ) {
        i = !this.renderInPlace || !this.isSuggestedList ? this.recipients.mapBy( "entityUrn" ) : []
      }
      const n = this.msgDataManager.fetchSuggestedRecipients( e, i ).then( e => {
        if ( !this.isDestroying ) {
          const t = this._filterOutExistingRecipients( e )
          Ember.setProperties( this, {
            possibleRecipients: t,
            isSuggestedList: !0,
            suggestedRecipients: t,
            showSuggestedLabel: !0
          } )
          t && t.length > 0 && this._setHighlightedRecipient( t[ 0 ] )
        }
      } )
      Ember.set( this, "activeFetch", ( 0, d.load )( n ) )
      return n
    }
    _addRecipient( e ) {
      const t = Ember.get( e, "contextEntityUrn" )
      this.recipientsWithContext.addObject( {
        contextEntityUrn: t,
        miniProfile: e.miniProfile
      } )
      this.recipientsChanged( this.recipients, this.contextByRecipients )
      Ember.get( e, "suggestedRecipientProfile" ) && this.tracking.fireTrackingPayload( "MessagingRecommendationActionEvent", {
        actionCategory: "SELECT",
        controlUrn: this.isSuggestedList ? this.quickAddRecipientControlName : this.addRecipientControlName,
        recommendationTrackingId: Ember.get( e, "trackingId" ),
        usecase: this.renderInPlace ? "GROUP_COMPOSE_MEMBER_FOR_GROUP" : "COMPOSE_MEMBER_FOR_GROUP_THREAD"
      } )
      this._sendA11yNotification( "i18n_a11y_added_recipient", {
        name: e.name
      } )
      this.renderInPlace && !this.isSuggestedList && this._fetchSuggestedRecipients( !1, !0 )
      if ( this.enableGroupMessageRequests && t && 1 === this.recipientsWithContext.length ) {
        var i
        null === ( i = this.setComposeContext ) || void 0 === i || i.call( this, Ember.get( e, "entityUrn" ), t )
      }
      this._closeDropdown()
      this._getSearchField().value = ""
      Ember.set( this, "searchTerm", "" )
      this._focusSearchField();
      ( 0, l.mutateDOM )( () => {
        this.isDestroying || ( this.addedRecipientsContainer.scrollTop = this.addedRecipientsContainer.scrollHeight )
      } )
    }
    _removeRecipient( e, t ) {
      this.recipientsWithContext.removeObject( e )
      this.recipientsChanged( this.recipients, this.contextByRecipients )
      this._sendA11yNotification( "i18n_a11y_removed_recipient", {
        name: t
      } )
      this._focusSearchField()
    }
    _normalizeRecipientsWithContext() {
      var e
      null === ( e = this.prefilledRecipients ) || void 0 === e || e.forEach( e => {
        this.recipientsWithContext.findBy( "miniProfile", e ) || this.recipientsWithContext.addObject( {
          miniProfile: e,
          contextEntityUrn: void 0
        } )
      } )
    }
    setFocusToParticipantTextField() {
      this._focusSearchField()
    }
    showSuggestions() {
      this._focusSearchField()
      this._fetchSuggestedRecipients( !1, !0 )
    }
    handleTypeaheadResultClick( e ) {
      const t = this.recipientsWithContext.findBy( "miniProfile", e.miniProfile )
      t ? this._removeRecipient( t, e.name ) : this._addRecipient( e )
    }
    removeRecipientFromTypeahead( e ) {
      const t = this.recipientsWithContext.findBy( "miniProfile", e.miniProfile )
      this._removeRecipient( t, e.name )
    }
    debounceFetchRecipients() {
      const e = this.searchTerm,
        t = this._getSearchField().value!e && t && this.tracking.fireInteractionEvent( this.beginSearchControlName )
      Ember.set( this, "searchTerm", t )
      if ( Ember.testing ) this._fetchRecipients( t )
      else {
        Ember.run.cancel( this.debounce )
        const e = Ember.testing ? 0 : 500
        this.debounce = this.debounceTask( "_fetchRecipients", t, e )
      }
    }
    onListItemHover( e ) {
      Ember.set( this, "highlightedRecipient", e )
    }
    preventEventChain( e ) {
      e.preventDefault()
    }
  }, U = ( 0, n.default )( L.prototype, "a11yNotification", [ m ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), M = ( 0, n.default )( L.prototype, "i18n", [ h ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), w = ( 0, n.default )( L.prototype, "lix", [ g ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), H = ( 0, n.default )( L.prototype, "msgDataManager", [ b ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), D = ( 0, n.default )( L.prototype, "store", [ f ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), z = ( 0, n.default )( L.prototype, "tracking", [ y ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), ( 0, n.default )( L.prototype, "displayPlusIcon", [ _ ], Object.getOwnPropertyDescriptor( L.prototype, "displayPlusIcon" ), L.prototype ), ( 0, n.default )( L.prototype, "displaySearchResults", [ E ], Object.getOwnPropertyDescriptor( L.prototype, "displaySearchResults" ), L.prototype ), ( 0, n.default )( L.prototype, "onlyConnectionResults", [ R ], Object.getOwnPropertyDescriptor( L.prototype, "onlyConnectionResults" ), L.prototype ), F = ( 0, n.default )( L.prototype, "selectedRecipientUrns", [ T ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), ( 0, n.default )( L.prototype, "contextByRecipients", [ v ], Object.getOwnPropertyDescriptor( L.prototype, "contextByRecipients" ), L.prototype ), j = ( 0, n.default )( L.prototype, "recipients", [ S ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), ( 0, n.default )( L.prototype, "setFocusToParticipantTextField", [ O ], Object.getOwnPropertyDescriptor( L.prototype, "setFocusToParticipantTextField" ), L.prototype ), ( 0, n.default )( L.prototype, "showSuggestions", [ I ], Object.getOwnPropertyDescriptor( L.prototype, "showSuggestions" ), L.prototype ), ( 0, n.default )( L.prototype, "handleTypeaheadResultClick", [ k ], Object.getOwnPropertyDescriptor( L.prototype, "handleTypeaheadResultClick" ), L.prototype ), ( 0, n.default )( L.prototype, "removeRecipientFromTypeahead", [ C ], Object.getOwnPropertyDescriptor( L.prototype, "removeRecipientFromTypeahead" ), L.prototype ), ( 0, n.default )( L.prototype, "debounceFetchRecipients", [ P ], Object.getOwnPropertyDescriptor( L.prototype, "debounceFetchRecipients" ), L.prototype ), ( 0, n.default )( L.prototype, "onListItemHover", [ x ], Object.getOwnPropertyDescriptor( L.prototype, "onListItemHover" ), L.prototype ), ( 0, n.default )( L.prototype, "preventEventChain", [ A ], Object.getOwnPropertyDescriptor( L.prototype, "preventEventChain" ), L.prototype ), L ) ) || N ) || N )
  e.default = $
  Ember._setComponentTemplate( B, $ )
} )
define( "msg-typeahead/components/conversation-result", [ "exports", "@babel/runtime/helpers/esm/toConsumableArray", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper" ], function ( e, t, i, n, s, r ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var a, o, l, c, d, p, u, m, h, g, b, f
  const y = Ember.HTMLBars.template( {
    id: "Qp2OdNYZ",
    block: '{"symbols":[],"statements":[[0,"\\n"],[7,"button",true],[11,"class",[29,["display-flex flex-row align-items-center msg-connections-typeahead__search-result\\n    ",[28,"if",[[28,"global-helpers@eq",[[23,0,["highlightedRecipient"]],[23,0,["recipient"]]],null],"msg-connections-typeahead__search-result--highlighted"],null]]]],[10,"tabindex","-1"],[10,"role","option"],[11,"id",[23,0,["recipient","domId"]]],[11,"aria-selected",[28,"if",[[28,"global-helpers@eq",[[23,0,["recipient","domId"]],[23,0,["highlightedRecipient","domId"]]],null],"true","false"],null]],[11,"onclick",[28,"ember-cli-pemberly-tracking@tracked-action",[[23,0,["openConversationControlName"]],[28,"action",[[23,0,[]],"selectConversation",[23,0,["recipient","conversationId"]]],null]],null]],[10,"type","button"],[8],[0,"\\n  "],[5,"msg-facepile-grid@facepile-grid",[],[["@participants","@isManyToManyConvo","@entitySize","@iconSize"],[[28,"if",[[28,"global-helpers@and",[[23,0,["enableGroupChatIdentity"]],[23,0,["isRecipientSuggestion"]]],null],[24,["conversationParticipantsIncludingSelf"]],[23,0,["recipient","participants"]]],null],true,3,"small"]]],[0,"\\n  "],[7,"div",true],[10,"class","msg-connections-typeahead__entity-description display-flex"],[8],[0,"\\n    "],[7,"dl",true],[10,"class","display-flex flex-column truncate"],[8],[0,"\\n      "],[7,"dt",true],[10,"class","t-14 t-black t-bold truncate"],[8],[0,"\\n        "],[1,[28,"if",[[23,0,["recipient","text"]],[23,0,["recipient","text"]],[28,"if",[[23,0,["enableGroupChatIdentity"]],[28,"t",["i18n_conversation_names","msg-typeahead/components/conversation-result"],[["names"],[[28,"msg-ui@participant-names-with-self",[[23,0,["recipient","conversation"]],true],null]]]],[28,"t",["i18n_conversation_names","msg-typeahead/components/conversation-result"],[["names"],[[23,0,["recipient","conversation","participantNames"]]]]]],null]],null],false],[0,"\\n      "],[9],[0,"\\n      "],[7,"dd",true],[10,"class","t-12 t-black--light t-normal truncate"],[8],[0,"\\n        "],[1,[28,"if",[[23,0,["recipient","subtext"]],[23,0,["recipient","subtext"]],[28,"t",["i18n_group_message","msg-typeahead/components/conversation-result"],[["count"],[[28,"if",[[23,0,["enableGroupChatIdentity"]],[23,0,["recipient","conversation","totalParticipantsCount"]],[23,0,["recipient","participants","length"]]],null]]]]],null],false],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',
    meta: {
      moduleName: "msg-typeahead/components/conversation-result.hbs"
    }
  } )
  let _ = ( a = Ember.inject.service( "tracking" ), o = Ember.inject.service( "formatter" ), l = Ember.inject.service( "authentication@authenticated-user" ), c = Ember.inject.service( "lix" ), d = Ember.computed( "recipient.hitInfo" ).readOnly(), p = Ember.computed( "recipient.participants.[]" ), u = Ember._action, m = class extends Ember.Component {
    constructor() {
      super( ...arguments );
      ( 0, i.default )( this, "tracking", h, this );
      ( 0, i.default )( this, "formatter", g, this );
      ( 0, i.default )( this, "authenticatedUser", b, this );
      ( 0, i.default )( this, "lix", f, this )
    }
    init() {
      super.init.apply( this, arguments )
      this.tracking.setupTrackableComponent( this )
      this.enableGroupChatIdentity = this.lix.getTreatmentIsEnabled( "voyager.web.messaging-group-chat-identity" )
    }
    get isRecipientSuggestion() {
      return !Ember.get( this, "recipient.hitInfo" )
    }
    get conversationParticipantsIncludingSelf() {
      const e = Ember.get( this, "authenticatedUser.miniProfile" )
      return [].concat( ( 0, t.default )( Ember.get( this, "recipient.participants" ) ), [ {
        miniProfile: e,
        picture: Ember.get( e, "picture" ),
        ghostType: "person",
        fullName: this.formatter.formatName( e, "full" )
      } ] )
    }
    onImpression( e ) {
      let {
        duration: t,
        visibleTime: i
      } = e
      this.tracking.fireTrackingPayload( "MessagingRecommendationImpressionEvent", {
        recommendedEntity: {
          duration: t,
          usecase: "TYPEAHEAD_GROUP_THREAD",
          recommendedEntityUrn: Ember.get( this.recipient, "hitInfo.targetUrn" ),
          listPosition: {
            index: this.listPosition
          },
          recommendationTrackingId: Ember.get( this.recipient, "hitInfo.trackingId" ),
          visibleTime: i
        }
      } )
    }
    selectConversation( e ) {
      this.tracking.fireTrackingPayload( "MessagingRecommendationActionEvent", {
        actionCategory: "SELECT",
        controlUrn: this.openConversationControlName,
        recommendationTrackingId: Ember.get( this.recipient, "hitInfo.trackingId" ),
        usecase: "TYPEAHEAD_GROUP_THREAD"
      } )
      this.openConversation( e )
    }
  }, h = ( 0, s.default )( m.prototype, "tracking", [ a ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), g = ( 0, s.default )( m.prototype, "formatter", [ o ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), b = ( 0, s.default )( m.prototype, "authenticatedUser", [ l ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), f = ( 0, s.default )( m.prototype, "lix", [ c ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), ( 0, s.default )( m.prototype, "isRecipientSuggestion", [ d ], Object.getOwnPropertyDescriptor( m.prototype, "isRecipientSuggestion" ), m.prototype ), ( 0, s.default )( m.prototype, "conversationParticipantsIncludingSelf", [ p ], Object.getOwnPropertyDescriptor( m.prototype, "conversationParticipantsIncludingSelf" ), m.prototype ), ( 0, s.default )( m.prototype, "selectConversation", [ u ], Object.getOwnPropertyDescriptor( m.prototype, "selectConversation" ), m.prototype ), m )
  e.default = _
  Ember._setComponentTemplate( y, _ )
} )
define( "msg-typeahead/components/person-result", [ "exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper" ], function ( e, t, i, n, s ) {
  "use strict"
  Object.defineProperty( e, "__esModule", {
    value: !0
  } )
  e.default = void 0
  var r, a, o, l
  const c = Ember.HTMLBars.template( {
    id: "P0rpiIGU",
    block: '{"symbols":[],"statements":[[7,"button",true],[11,"class",[29,["display-flex flex-row align-items-center msg-connections-typeahead__search-result\\n    ",[28,"if",[[28,"global-helpers@eq",[[23,0,["highlightedRecipient"]],[23,0,["recipient"]]],null],"msg-connections-typeahead__search-result--highlighted"],null]]]],[10,"tabindex","-1"],[10,"role","option"],[11,"id",[23,0,["recipient","domId"]]],[11,"aria-selected",[28,"if",[[28,"global-helpers@eq",[[23,0,["recipient","domId"]],[23,0,["highlightedRecipient","domId"]]],null],"true","false"],null]],[10,"type","button"],[8],[0,"\\n\\n  "],[5,"presence@entity-with-presence",[],[["@classNames","@indicatorClasses","@miniProfile","@size"],["msg-connections-typeahead__presence-entity","msg-connections-typeahead__presence-entity-indicator",[23,0,["recipient","miniProfile"]],2]]],[0,"\\n  "],[7,"div",true],[10,"class","msg-connections-typeahead__entity-description"],[8],[0,"\\n    "],[7,"dl",true],[10,"class","display-flex flex-column truncate msg-connections-typeahead__entity-description-list"],[8],[0,"\\n"],[4,"if",[[23,0,["recipient","hitInfo","text","attributes"]]],null,{"statements":[[0,"        "],[7,"dt",true],[10,"class","t-14 t-black truncate"],[8],[0,"\\n          "],[1,[28,"global-helpers@attributed-text-html",[[23,0,["recipient","hitInfo","text"]]],null],false],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"        "],[7,"dt",true],[10,"class","t-14 t-black t-bold truncate"],[8],[0,"\\n          "],[1,[28,"ember-cli-pemberly-i18n@format-name",null,[["firstName","lastName","type","color"],[[23,0,["recipient","miniProfile","firstName"]],[23,0,["recipient","miniProfile","lastName"]],"full",true]]],false],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]}],[0,"      "],[7,"dd",true],[10,"class","t-12 t-black--light t-normal truncate"],[8],[1,[23,0,["recipient","subtext"]],false],[9],[0,"\\n"],[4,"if",[[23,0,["recipient","contextText"]]],null,{"statements":[[0,"        "],[7,"dd",true],[10,"class","t-12 t-black--light t-normal truncate"],[8],[1,[28,"text-view-model@text-view-model",[[23,0,["recipient","contextText"]]],null],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n"],[4,"if",[[23,0,["isChecked"]]],null,{"statements":[[0,"      "],[7,"span",true],[8],[1,[28,"artdeco-icons-web@li-icon",null,[["aria-hidden","class","type","size"],["true","msg-connections-typeahead__check-icon","check-icon","large"]]],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',
    meta: {
      moduleName: "msg-typeahead/components/person-result.hbs"
    }
  } )
  let d = ( r = Ember.inject.service( "tracking" ), a = Ember.computed( "recipient", "selectedRecipientUrns.[]" ).readOnly(), o = class extends Ember.Component {
    constructor() {
      super( ...arguments );
      ( 0, t.default )( this, "tracking", l, this )
    }
    init() {
      super.init.apply( this, arguments )
      this.tracking.setupTrackableComponent( this )
    }
    get isChecked() {
      return !!this.selectedRecipientUrns && -1 !== this.selectedRecipientUrns.indexOf( Ember.get( this, "recipient.miniProfile.entityUrn" ) )
    }
    onImpression( e ) {
      let {
        duration: t,
        visibleTime: i
      } = e
      const n = Ember.get( this.recipient, "suggestedRecipientProfile" )
      this.trackingUsecase && n && this.tracking.fireTrackingPayload( "MessagingRecommendationImpressionEvent", {
        recommendedEntity: {
          duration: t,
          usecase: this.trackingUsecase,
          recommendationTrackingId: Ember.get( this.recipient, "trackingId" ),
          visibleTime: i,
          listPosition: {
            index: this.listPosition
          },
          recommendedEntityUrn: Ember.get( this.recipient, "miniProfile.entityUrn" )
        }
      } )
    }
  }, l = ( 0, n.default )( o.prototype, "tracking", [ r ], {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    initializer: null
  } ), ( 0, n.default )( o.prototype, "isChecked", [ a ], Object.getOwnPropertyDescriptor( o.prototype, "isChecked" ), o.prototype ), o )
  e.default = d
  Ember._setComponentTemplate( c, d )
} )

//# sourceMappingURL=engine-vendor.map
