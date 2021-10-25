"use strict";
var _statcounter = function ( _1 ) {
  try {
    var _2 = ( window.top && window.top.document ? window.top.document : document )
  } catch ( e ) {
    var _2 = window.document
  }
  var _3 = {};
  if ( typeof _1 === "undefined" ) {} else {
    if ( _1.start_recording ) {
      return _1
    } else {
      if ( _1.record_pageview ) {
        _3 = _1
      } else {
        _3._pageview_tags_in = _1
      }
    }
  }
  var _4;
  var _5 = [];
  var _6 = false;
  var _7 = 1000;
  var _8 = false;
  var _9 = false;
  var _a = false;
  var _b = false;
  var _c = {};
  var _d = {};
  var _e = {};
  var _f = {};
  var _10 = {};
  var _11 = 1;
  var _12 = Math.pow( 2, 23 ) / 8;
  var _13 = Math.pow( 2, 19 ) / 8;
  var _14 = false;
  var _15 = "on";
  _3.start_recording = function ( _16, _17 ) {
    _15 = _17;
    if ( _16 !== undefined ) {
      if ( _14 !== false && _14 === _16 ) {
        return
      }
      _14 = _16
    } else {
      if ( typeof ( sc_project ) === "undefined" ) {
        return
      } else {
        _14 = sc_project
      }
    }
    _statcounter._rrwebRecord( {
      emit: rrwebEmission,
      maskAllInputs: true,
      slimDOMOptions: "all",
    } );
    setupWebsocket()
  };

  function send( _18 ) {
    if ( _6 ) {
      return
    }
    try {
      if ( !_8 ) {
        _18[ "project" ] = _14, _18[ "visitor" ] = _9.replace( /^\./, "" ), _18[ "session" ] = _a
      }
      var msg = JSON.stringify( _18 );
      if ( msg.length > _12 ) {
        var sig = ( Math.random() * 16777215 << 0 ).toString( 16 );
        var _1b = Math.ceil( msg.length / _12 );
        var _1c = Math.ceil( msg.length / _1b );
        for ( var i = 0; i < _1b; i++ ) {
          var _1e = msg.substring( _1c * i, _1c * ( i + 1 ) );
          _4.send( "part:" + sig + ":" + ( i + 1 ) + ":" + _1b + ":" + _1e )
        }
      } else {
        _4.send( msg )
      }
      _8 = true;
      _7 = 1000
    } catch ( e ) {
      if ( _5 === false ) {
        _5 = []
      }
      _5.push( _18 );
      _8 = false
    }
  }

  function retryWebsocket() {
    if ( _6 ) {
      return
    }
    if ( _4 && _4.readyState === WebSocket.OPEN ) {
      return
    }
    if ( _5 === false ) {
      _5 = []
    }
    _4 = null;
    setTimeout( setupWebsocket, _7 );
    _7 *= 1.5
  }

  function setupWebsocket() {
    if ( _6 ) {
      return
    }
    try {
      if ( _15 == "dev" || _15.indexOf( "wsdev" ) !== -1 ) {
        _4 = new WebSocket( "wss://dev.statcounter.io/" )
      } else {
        _4 = new WebSocket( "wss://statcounter.io/" )
      }
    } catch ( e ) {
      retryWebsocket();
      return
    }
    _8 = false;
    _4.onclose = retryWebsocket;
    _4.onopen = function () {
      _4.onmessage = handleServerMessage;
      while ( _5.length ) {
        send( _5.shift() )
      }
      _5 = false
    }
  }

  function handleServerMessage( m ) {
    var j = JSON.parse( m.data );
    var _21 = false;
    if ( j.payload && j.payload.required ) {
      _21 = j.payload[ "required" ]
    } else {
      if ( j.required ) {
        _21 = j[ "required" ]
      }
    }
    if ( j.type == "rrweb-DOM-request" ) {
      var _22 = [];
      var _23 = 0;
      for ( var i = 0; i < _21.length; i++ ) {
        var _25 = _21[ i ];
        var _26 = [ _25, _d[ _25 ], _c[ _25 ] ];
        if ( _e[ _25 ] > _12 / 2 ) {
          sendEvent( "DOM-response", {
            "content": [ _26 ]
          } )
        } else {
          _22.push( _26 );
          _23 += _e[ _25 ]
        }
        if ( _23 > _12 / 2 || i == _21.length - 1 ) {
          if ( _22.length ) {
            sendEvent( "DOM-response", {
              "content": _22
            } )
          }
          _23 = 0;
          _22 = []
        }
      }
      _c = {};
      _d = {};
      _e = {}
    }
    if ( j.type == "hangup" ) {
      _6 = true;
      turn_off_and_clean_up()
    }
  }

  function turn_off_and_clean_up() {
    if ( _statcounter._rrwebRecord ) {
      delete _statcounter._rrwebRecord
    }
    if ( _27 ) {
      clearTimeout( _27 )
    }
    _5 = [];
    if ( _4 ) {
      _4.close()
    }
  }

  function sendEvent( _28, e ) {
    if ( _6 ) {
      return
    }
    if ( _28 === false ) {} else {
      if ( e[ "type" ] !== undefined ) {
        if ( !( e[ "type" ] == 2 && _28 == "pageload" ) ) {
          e[ "dupe_type" ] = _28
        }
      } else {
        e[ "type" ] = _28
      }
    }
    if ( _a === false ) {
      _a = _statcounter.get_session_num( _14 );
      _9 = _statcounter.get_visitor_id();
      _b = _statcounter.get_tab_session()
    }
    e[ "tab" ] = _b;
    if ( _5 === false ) {
      send( e )
    } else {
      _5.push( e )
    }
    return e
  }

  function log( _2a ) {
    console.log( JSON.stringify( _2a, null, 4 ) )
  }

  function murmurhash3_32_gc( key, _2c ) {
    var _2d, _2e, h1, h1b, c1, c1b, c2, c2b, k1, i;
    _2d = key.length & 3;
    _2e = key.length - _2d;
    h1 = _2c;
    c1 = 3432918353;
    c2 = 461845907;
    i = 0;
    while ( i < _2e ) {
      k1 = ( ( key.charCodeAt( i ) & 255 ) ) | ( ( key.charCodeAt( ++i ) & 255 ) << 8 ) | ( ( key.charCodeAt( ++i ) & 255 ) << 16 ) | ( ( key.charCodeAt( ++i ) & 255 ) << 24 );
      ++i;
      k1 = ( ( ( ( k1 & 65535 ) * c1 ) + ( ( ( ( k1 >>> 16 ) * c1 ) & 65535 ) << 16 ) ) ) & 4294967295;
      k1 = ( k1 << 15 ) | ( k1 >>> 17 );
      k1 = ( ( ( ( k1 & 65535 ) * c2 ) + ( ( ( ( k1 >>> 16 ) * c2 ) & 65535 ) << 16 ) ) ) & 4294967295;
      h1 ^= k1;
      h1 = ( h1 << 13 ) | ( h1 >>> 19 );
      h1b = ( ( ( ( h1 & 65535 ) * 5 ) + ( ( ( ( h1 >>> 16 ) * 5 ) & 65535 ) << 16 ) ) ) & 4294967295;
      h1 = ( ( ( h1b & 65535 ) + 27492 ) + ( ( ( ( h1b >>> 16 ) + 58964 ) & 65535 ) << 16 ) )
    }
    k1 = 0;
    switch ( _2d ) {
      case 3:
        k1 ^= ( key.charCodeAt( i + 2 ) & 255 ) << 16;
      case 2:
        k1 ^= ( key.charCodeAt( i + 1 ) & 255 ) << 8;
      case 1:
        k1 ^= ( key.charCodeAt( i ) & 255 );
        k1 = ( ( ( k1 & 65535 ) * c1 ) + ( ( ( ( k1 >>> 16 ) * c1 ) & 65535 ) << 16 ) ) & 4294967295;
        k1 = ( k1 << 15 ) | ( k1 >>> 17 );
        k1 = ( ( ( k1 & 65535 ) * c2 ) + ( ( ( ( k1 >>> 16 ) * c2 ) & 65535 ) << 16 ) ) & 4294967295;
        h1 ^= k1
    }
    h1 ^= key.length;
    h1 ^= h1 >>> 16;
    h1 = ( ( ( h1 & 65535 ) * 2246822507 ) + ( ( ( ( h1 >>> 16 ) * 2246822507 ) & 65535 ) << 16 ) ) & 4294967295;
    h1 ^= h1 >>> 13;
    h1 = ( ( ( ( h1 & 65535 ) * 3266489909 ) + ( ( ( ( h1 >>> 16 ) * 3266489909 ) & 65535 ) << 16 ) ) ) & 4294967295;
    h1 ^= h1 >>> 16;
    return h1 >>> 0
  }

  function fragmentRrwebContent( _37, _38, _39 ) {
    if ( _37[ "id" ] ) {
      if ( _37[ "id" ] == _11 ) {
        delete _37[ "id" ];
        _11++
      } else {
        console.log( "error id mismatch" )
      }
    }
    if ( _37.attributes ) {
      _37.attributes = Object.keys( _37.attributes ).sort().reduce( function ( _3a, key ) {
        _3a[ key ] = _37.attributes[ key ];
        return _3a
      }, {} )
    }
    if ( _37.childNodes && Object.keys( _37.childNodes ).length == 0 && _37.type == 2 ) {
      delete _37[ "childNodes" ]
    } else {
      if ( _37.childNodes ) {
        for ( var i = 0; i < _37.childNodes.length; i++ ) {
          var cn = _37.childNodes[ i ];
          if ( typeof cn !== "string" ) {
            _37.childNodes[ i ] = fragmentRrwebContent( cn, _37, _39 )
          }
        }
      }
    }
    var _3e = null;
    if ( _37.attributes && Object.keys( _37.attributes ).length == 0 && _37.type == 2 ) {
      delete _37[ "attributes" ]
    } else {
      if ( _37.attributes ) {
        if ( _37.attributes[ "id" ] ) {
          _3e = "#" + _37.attributes[ "id" ]
        } else {
          if ( _39 !== undefined && _37.attributes[ "class" ] ) {
            var _3f = _37.attributes[ "class" ].split( " " );
            for ( var i = 0; i < _3f.length; i++ ) {
              if ( _39[ _3f[ i ] ] == 1 ) {
                _3e = "." + _3f[ i ];
                break
              }
            }
          }
        }
      }
    }
    if ( _3e && _c[ _3e ] !== undefined && _c[ _3e ] != _37 ) {
      for ( var i = 0; i < _f[ _3e ].length; i++ ) {
        for ( var j = 0; j < _f[ _3e ][ i ].childNodes.length; j++ ) {
          if ( _f[ _3e ][ i ].childNodes[ j ] == _3e ) {
            _f[ _3e ][ i ].childNodes[ j ] = _c[ _3e ]
          }
        }
      }
      delete _c[ _3e ];
      _10[ _3e ] = true
    }
    var _41 = false;
    if ( _3e && _10[ _3e ] === undefined ) {
      if ( _c[ _3e ] !== undefined && _c[ _3e ] == _37 ) {
        _f[ _3e ].append( _38 )
      } else {
        _f[ _3e ] = [ _38 ]
      }
      _41 = _3e
    } else {
      if ( _37.tagName == "head" ) {
        _41 = _37.tagName + "://" + _2.location.host + _2.location.pathname
      } else {
        if ( _37.tagName == "body" ) {
          _41 = _37.tagName
        } else {
          if ( _37.attributes && _37.attributes[ "_cssText" ] && _37.attributes[ "_originalHref" ] ) {
            _41 = _37.attributes[ "_originalHref" ]
          } else {
            if ( _37.tagName == "style" && _38.tagName == "head" ) {
              if ( !_38._style_fragment_nth ) {
                _38._style_fragment_nth = 1
              }
              _41 = "head>style:nth-of-type(" + ( _38._style_fragment_nth++ ) + ")"
            }
          }
        }
      }
    }
    if ( _37.type == 2 && _37.tagName ) {
      delete _37[ "type" ]
    }
    if ( _41 ) {
      if ( _39 === undefined && _37.childNodes && _37.childNodes.length && JSON.stringify( _37 ).length > _13 ) {
        _37 = refragmentRrwebContentByClass( _37, _38 )
      }
      _c[ _41 ] = _37;
      return _41
    } else {
      if ( _37.type == 3 && _37.textContent && Object.keys( _37 ).length == 2 ) {
        return _37.textContent
      } else {
        return _37
      }
    }
  }

  function refragmentRrwebContentByClass( _42, _43 ) {
    var _44 = {};
    countClasses( _42, _44 );
    for ( var i = 0; i < _42.childNodes.length; i++ ) {
      var cn = _42.childNodes[ i ];
      if ( typeof cn !== "string" ) {
        _42.childNodes[ i ] = fragmentRrwebContent( cn, _42, _44 )
      }
    }
    return _42
  }

  function countClasses( _47, _48 ) {
    for ( var i = 0; i < _47.childNodes.length; i++ ) {
      var cn = _47.childNodes[ i ];
      if ( cn.attributes && cn.attributes[ "class" ] ) {
        var _4b = cn.attributes[ "class" ].split( /\s+/ );
        for ( var j = 0; j < _4b.length; j++ ) {
          if ( _48[ _4b[ j ] ] === undefined ) {
            _48[ _4b[ j ] ] = _2.getElementsByClassName( _4b[ j ] ).length
          }
        }
      }
      if ( cn.childNodes && cn.childNodes.length ) {
        countClasses( cn, _48 )
      }
    }
  }
  var _27 = false;

  function rrwebEmission( _4d ) {
    if ( !( _4d.type === 3 && _4d.data.source == 0 ) ) {
      if ( _27 ) {
        clearTimeout( _27 )
      }
      _27 = setTimeout( function () {
        _statcounter._rrwebRecord.freezePage()
      }, 25000 )
    }
    if ( _4d.type !== 2 ) {
      if ( _4d.type === 4 ) {
        _4d.data.referrer = _statcounter.get_referrer();
        try {
          _4d.data.config = JSON.parse( sessionStorage.getItem( "statcounter_config" ) );
          _4d.data.raw_cookie = _2.cookie;
          _4d.data.counter_version = _statcounter.version();
          _4d.data.recorder_version = "04544f-86dad65e69ceb880285b4d2d27b9614cf757beb6-74c233a8c3b7f0fe3de06ae96bb092a5b43d8a41"
        } catch ( e ) {}
      }
      sendEvent( false, _4d );
      return
    }
    if ( false ) {
      var _4e = murmurhash3_32_gc( JSON.stringify( _4d.data.node ) );
      var _4f = _2.location.host + _2.location.pathname;
      _c[ "(full)" + _4f ] = _4d.data.node;
      _d[ "(full)" + _4f ] = _4e
    }
    var _4d = JSON.parse( JSON.stringify( _4d ) );
    _11 = 1;
    _4d.data.node = fragmentRrwebContent( _4d.data.node );
    for ( var _50 in _c ) {
      var _51 = _c[ _50 ];
      if ( _50.substring( 0, 1 ) == "#" && _51.attributes && _51.attributes.id ) {
        delete _51.attributes[ "id" ];
        if ( Object.keys( _51.attributes ).length == 0 ) {
          delete _51[ "attributes" ]
        }
      }
      var _52 = JSON.stringify( _51 );
      var _4e = murmurhash3_32_gc( _52 );
      _d[ _50 ] = _4e;
      _e[ _50 ] = _52.length
    }
    _f = {};
    var _53 = [];
    for ( var _54 in _c ) {
      _53.push( [ _54, _d[ _54 ] ] )
    }
    _4d[ "key-sig-list" ] = _53;
    sendEvent( "pageload", _4d )
  }
  _3._add_recording_event = function ( _55, _56 ) {
    _statcounter._rrwebRecord.addCustomEvent( _55, _56 )
  };
  var _57, _58;
  if ( typeof _2.hidden !== "undefined" ) {
    _57 = "hidden";
    _58 = "visibilitychange"
  } else {
    if ( typeof _2.msHidden !== "undefined" ) {
      _57 = "msHidden";
      _58 = "msvisibilitychange"
    } else {
      if ( typeof _2.webkitHidden !== "undefined" ) {
        _57 = "webkitHidden";
        _58 = "webkitvisibilitychange"
      }
    }
  }

  function handleVisibilityChange() {
    if ( _statcounter._rrwebRecord ) {
      if ( _2[ _57 ] ) {
        console.log( "hidden window" );
        _3._add_recording_event( "window-hidden" );
        _statcounter._rrwebRecord.freezePage()
      } else {
        console.log( "shown window" );
        _3._add_recording_event( "window-visible" )
      }
    }
  }
  if ( typeof _2.addEventListener === "undefined" || _57 === undefined ) {} else {
    _2.addEventListener( _58, handleVisibilityChange, false )
  }
  return _3
}( _statcounter );
// v: 86dad65e69ceb880285b4d2d27b9614cf757beb6-74c233a8c3b7f0fe3de06ae96bb092a5b43d8a41
_statcounter._rrwebRecord = function () {
  "use strict";
  /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
  var e, t = function () {
    return ( t = Object.assign || function ( e ) {
      for ( var t, n = 1, r = arguments.length; n < r; n++ )
        for ( var o in t = arguments[ n ] ) Object.prototype.hasOwnProperty.call( t, o ) && ( e[ o ] = t[ o ] );
      return e
    } ).apply( this, arguments )
  };

  function n( e ) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      n = t && e[ t ],
      r = 0;
    if ( n ) return n.call( e );
    if ( e && "number" == typeof e.length ) return {
      next: function () {
        return e && r >= e.length && ( e = void 0 ), {
          value: e && e[ r++ ],
          done: !e
        }
      }
    };
    throw new TypeError( t ? "Object is not iterable." : "Symbol.iterator is not defined." )
  }

  function r( e, t ) {
    var n = "function" == typeof Symbol && e[ Symbol.iterator ];
    if ( !n ) return e;
    var r, o, a = n.call( e ),
      i = [];
    try {
      for ( ;
        ( void 0 === t || t-- > 0 ) && !( r = a.next() ).done; ) i.push( r.value )
    } catch ( e ) {
      o = {
        error: e
      }
    } finally {
      try {
        r && !r.done && ( n = a.return ) && n.call( a )
      } finally {
        if ( o ) throw o.error
      }
    }
    return i
  }

  function o() {
    for ( var e = [], t = 0; t < arguments.length; t++ ) e = e.concat( r( arguments[ t ] ) );
    return e
  }! function ( e ) {
    e[ e.Document = 0 ] = "Document", e[ e.DocumentType = 1 ] = "DocumentType", e[ e.Element = 2 ] = "Element", e[ e.Text = 3 ] = "Text", e[ e.CDATA = 4 ] = "CDATA", e[ e.Comment = 5 ] = "Comment"
  }( e || ( e = {} ) );
  var a = 1,
    i = RegExp( "[^a-z1-6-_]" );

  function u( e ) {
    try {
      var t = e.rules || e.cssRules;
      return t ? Array.from( t ).map( s ).join( "" ) : null
    } catch ( e ) {
      return null
    }
  }

  function s( e ) {
    return function ( e ) {
      return "styleSheet" in e
    }( e ) ? u( e.styleSheet ) || "" : e.cssText
  }
  var l, c, d, p, f, h = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm,
    v = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/).*/,
    m = /^(data:)([\w\/\+\-]+);(charset=[\w-]+|base64|utf-?8).*,(.*)/i;

  function y( e, t ) {
    return ( e || "" ).replace( h, ( function ( e, n, r, o, a, i ) {
      var u, s = r || a || i,
        l = n || o || "";
      if ( !s ) return e;
      if ( !v.test( s ) ) return "url(" + l + s + l + ")";
      if ( m.test( s ) ) return "url(" + l + s + l + ")";
      if ( "/" === s[ 0 ] ) return "url(" + l + ( ( ( u = t ).indexOf( "//" ) > -1 ? u.split( "/" ).slice( 0, 3 ).join( "/" ) : u.split( "/" )[ 0 ] ).split( "?" )[ 0 ] + s ) + l + ")";
      var c = t.split( "/" ),
        d = s.split( "/" );
      c.pop();
      for ( var p = 0, f = d; p < f.length; p++ ) {
        var h = f[ p ];
        "." !== h && ( ".." === h ? c.pop() : c.push( h ) )
      }
      return "url(" + l + c.join( "/" ) + l + ")"
    } ) )
  }

  function g( e, t ) {
    if ( !t || "" === t.trim() ) return t;
    var n = e.createElement( "a" );
    return n.href = t, n.href
  }

  function b( e, t, n ) {
    return "src" === t || "href" === t && n ? g( e, n ) : "srcset" === t && n ? function ( e, t ) {
      return "" === t.trim() ? t : t.split( "," ).map( ( function ( t ) {
        var n = t.trimLeft().trimRight().split( " " );
        return 2 === n.length ? g( e, n[ 0 ] ) + " " + n[ 1 ] : 1 === n.length ? "" + g( e, n[ 0 ] ) : ""
      } ) ).join( ", " )
    }( e, n ) : "style" === t && n ? y( n, location.href ) : n
  }

  function S( t, n, r, o, a, s ) {
    switch ( void 0 === a && ( a = {} ), t.nodeType ) {
      case t.DOCUMENT_NODE:
        return {
          type: e.Document, childNodes: []
        };
      case t.DOCUMENT_TYPE_NODE:
        return {
          type: e.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId
        };
      case t.ELEMENT_NODE:
        var l = !1;
        "string" == typeof r ? l = t.classList.contains( r ) : t.classList.forEach( ( function ( e ) {
          r.test( e ) && ( l = !0 )
        } ) );
        for ( var c = function ( e ) {
            var t = e.toLowerCase().trim();
            return i.test( t ) ? "div" : t
          }( t.tagName ), d = {}, p = 0, f = Array.from( t.attributes ); p < f.length; p++ ) {
          var h = f[ p ],
            v = h.name,
            m = h.value;
          d[ v ] = b( n, v, m )
        }
        if ( "link" === c && o ) {
          var g, S = Array.from( n.styleSheets ).find( ( function ( e ) {
            return e.href === t.href
          } ) );
          ( g = u( S ) ) && ( delete d.rel, d._originalHref = d.href, delete d.href, d._cssText = y( g, S.href ) )
        }
        if ( "style" === c && t.sheet && !( t.innerText || t.textContent || "" ).trim().length )( g = u( t.sheet ) ) && ( d._cssText = y( g, location.href ) );
        if ( "input" === c || "textarea" === c || "select" === c ) {
          m = t.value;
          "radio" !== d.type && "checkbox" !== d.type && "submit" !== d.type && "button" !== d.type && m ? d.value = a[ d.type ] || a[ c ] ? "*".repeat( m.length ) : m : t.checked && ( d.checked = t.checked )
        }
        if ( "option" === c ) {
          var C = t.parentElement;
          d.value === C.value && ( d.selected = t.selected )
        }
        if ( "canvas" === c && s && ( d.rr_dataURL = t.toDataURL() ), "audio" !== c && "video" !== c || ( d.rr_mediaState = t.paused ? "paused" : "played" ), t.scrollLeft && ( d.rr_scrollLeft = t.scrollLeft ), t.scrollTop && ( d.rr_scrollTop = t.scrollTop ), l ) {
          var E = t.getBoundingClientRect(),
            w = E.width,
            M = E.height;
          d.rr_width = w + "px", d.rr_height = M + "px"
        }
        return {
          type: e.Element, tagName: c, attributes: d, childNodes: [], isSVG: ( _ = t, "svg" === _.tagName || _ instanceof SVGElement || void 0 ), needBlock: l
        };
      case t.TEXT_NODE:
        var I = t.parentNode && t.parentNode.tagName,
          x = t.textContent,
          N = "STYLE" === I || void 0;
        return N && x && ( x = y( x, location.href ) ), "SCRIPT" === I && ( x = "SCRIPT_PLACEHOLDER" ), {
          type: e.Text,
          textContent: x || "",
          isStyle: N
        };
      case t.CDATA_SECTION_NODE:
        return {
          type: e.CDATA, textContent: ""
        };
      case t.COMMENT_NODE:
        return {
          type: e.Comment, textContent: t.textContent || ""
        };
      default:
        return !1
    }
    var _
  }

  function C( e ) {
    return void 0 === e ? "" : e.toLowerCase()
  }

  function E( t, n, r, o, i, u, s, l, c, d ) {
    void 0 === i && ( i = !1 ), void 0 === u && ( u = !0 ), void 0 === l && ( l = {} ), void 0 === d && ( d = !0 );
    var p, f = S( t, n, o, u, s, c || !1 );
    if ( !f ) return console.warn( t, "not serialized" ), null;
    p = "__sn" in t ? t.__sn.id : ! function ( t, n ) {
      if ( n.comment && t.type === e.Comment ) return !0;
      if ( t.type === e.Element ) {
        if ( n.script && ( "script" === t.tagName || "link" === t.tagName && "preload" === t.attributes.rel && "script" === t.attributes.as ) ) return !0;
        if ( n.headFavicon && ( "link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && ( C( t.attributes.name ).match( /^msapplication-tile(image|color)$/ ) || "application-name" === C( t.attributes.name ) || "icon" === C( t.attributes.rel ) || "apple-touch-icon" === C( t.attributes.rel ) || "shortcut icon" === C( t.attributes.rel ) ) ) ) return !0;
        if ( "meta" === t.tagName ) {
          if ( n.headMetaDescKeywords && C( t.attributes.name ).match( /^description|keywords$/ ) ) return !0;
          if ( n.headMetaSocial && ( C( t.attributes.property ).match( /^(og|twitter|fb):/ ) || C( t.attributes.name ).match( /^(og|twitter):/ ) || "pinterest" === C( t.attributes.name ) ) ) return !0;
          if ( n.headMetaRobots && ( "robots" === C( t.attributes.name ) || "googlebot" === C( t.attributes.name ) || "bingbot" === C( t.attributes.name ) ) ) return !0;
          if ( n.headMetaHttpEquiv && void 0 !== t.attributes[ "http-equiv" ] ) return !0;
          if ( n.headMetaAuthorship && ( "author" === C( t.attributes.name ) || "generator" === C( t.attributes.name ) || "framework" === C( t.attributes.name ) || "publisher" === C( t.attributes.name ) || "progid" === C( t.attributes.name ) || C( t.attributes.property ).match( /^article:/ ) || C( t.attributes.property ).match( /^product:/ ) ) ) return !0;
          if ( n.headMetaVerification && ( "google-site-verification" === C( t.attributes.name ) || "yandex-verification" === C( t.attributes.name ) || "csrf-token" === C( t.attributes.name ) || "p:domain_verify" === C( t.attributes.name ) || "verify-v1" === C( t.attributes.name ) || "verification" === C( t.attributes.name ) || "shopify-checkout-api-token" === C( t.attributes.name ) ) ) return !0
        }
      }
      return !1
    }( f, l ) && ( d || f.type !== e.Text || f.isStyle || f.textContent.replace( /^\s+|\s+$/gm, "" ).length ) ? a++ : -2;
    var h = Object.assign( f, {
      id: p
    } );
    if ( t.__sn = h, -2 === p ) return null;
    r[ p ] = t;
    var v = !i;
    if ( h.type === e.Element && ( v = v && !h.needBlock, delete h.needBlock ), ( h.type === e.Document || h.type === e.Element ) && v ) {
      l.headWhitespace && f.type === e.Element && "head" == f.tagName && ( d = !1 );
      for ( var m = 0, y = Array.from( t.childNodes ); m < y.length; m++ ) {
        var g = E( y[ m ], n, r, o, i, u, s, l, c, d );
        g && h.childNodes.push( g )
      }
    }
    return h
  }

  function w( e, t, n ) {
    void 0 === n && ( n = _().document );
    var r = {
      capture: !0,
      passive: !0
    };
    return n.addEventListener( e, t, r ),
      function () {
        return n.removeEventListener( e, t, r )
      }
  }! function ( e ) {
    e[ e.DomContentLoaded = 0 ] = "DomContentLoaded", e[ e.Load = 1 ] = "Load", e[ e.FullSnapshot = 2 ] = "FullSnapshot", e[ e.IncrementalSnapshot = 3 ] = "IncrementalSnapshot", e[ e.Meta = 4 ] = "Meta", e[ e.Custom = 5 ] = "Custom"
  }( l || ( l = {} ) ),
  function ( e ) {
    e[ e.Mutation = 0 ] = "Mutation", e[ e.MouseMove = 1 ] = "MouseMove", e[ e.MouseInteraction = 2 ] = "MouseInteraction", e[ e.Scroll = 3 ] = "Scroll", e[ e.ViewportResize = 4 ] = "ViewportResize", e[ e.Input = 5 ] = "Input", e[ e.TouchMove = 6 ] = "TouchMove", e[ e.MediaInteraction = 7 ] = "MediaInteraction", e[ e.StyleSheetRule = 8 ] = "StyleSheetRule", e[ e.CanvasMutation = 9 ] = "CanvasMutation", e[ e.Font = 10 ] = "Font"
  }( c || ( c = {} ) ),
  function ( e ) {
    e[ e.MouseUp = 0 ] = "MouseUp", e[ e.MouseDown = 1 ] = "MouseDown", e[ e.Click = 2 ] = "Click", e[ e.ContextMenu = 3 ] = "ContextMenu", e[ e.DblClick = 4 ] = "DblClick", e[ e.Focus = 5 ] = "Focus", e[ e.Blur = 6 ] = "Blur", e[ e.TouchStart = 7 ] = "TouchStart", e[ e.TouchMove_Departed = 8 ] = "TouchMove_Departed", e[ e.TouchEnd = 9 ] = "TouchEnd"
  }( d || ( d = {} ) ),
  function ( e ) {
    e[ e.Play = 0 ] = "Play", e[ e.Pause = 1 ] = "Pause"
  }( p || ( p = {} ) ),
  function ( e ) {
    e.Start = "start", e.Pause = "pause", e.Resume = "resume", e.Resize = "resize", e.Finish = "finish", e.FullsnapshotRebuilded = "fullsnapshot-rebuilded", e.LoadStylesheetStart = "load-stylesheet-start", e.LoadStylesheetEnd = "load-stylesheet-end", e.SkipStart = "skip-start", e.SkipEnd = "skip-end", e.MouseInteraction = "mouse-interaction", e.EventCast = "event-cast", e.CustomEvent = "custom-event", e.Flush = "flush", e.StateChange = "state-change"
  }( f || ( f = {} ) );
  var M = {
    map: {},
    getId: function ( e ) {
      return e.__sn ? e.__sn.id : -1
    },
    getNode: function ( e ) {
      return M.map[ e ] || null
    },
    removeNodeFromMap: function ( e ) {
      var t = e.__sn && e.__sn.id;
      delete M.map[ t ], e.childNodes && e.childNodes.forEach( ( function ( e ) {
        return M.removeNodeFromMap( e )
      } ) )
    },
    has: function ( e ) {
      return M.map.hasOwnProperty( e )
    }
  };

  function I( e, t, n ) {
    void 0 === n && ( n = {} );
    var r = null,
      o = 0;
    return function ( a ) {
      var i = Date.now();
      o || !1 !== n.leading || ( o = i );
      var u = t - ( i - o ),
        s = this,
        l = arguments;
      u <= 0 || u > t ? ( r && ( window.clearTimeout( r ), r = null ), o = i, e.apply( s, l ) ) : r || !1 === n.trailing || ( r = window.setTimeout( ( function () {
        o = !1 === n.leading ? 0 : Date.now(), r = null, e.apply( s, l )
      } ), u ) )
    }
  }

  function x( e, t, n, r, o ) {
    void 0 === o && ( o = window );
    var a = o.Object.getOwnPropertyDescriptor( e, t );
    return o.Object.defineProperty( e, t, r ? n : {
        set: function ( e ) {
          var t = this;
          setTimeout( ( function () {
            n.set.call( t, e )
          } ), 0 ), a && a.set && a.set.call( this, e )
        }
      } ),
      function () {
        return x( e, t, a || {}, !0 )
      }
  }

  function N( e, t, n ) {
    try {
      if ( !( t in e ) ) return function () {};
      var r = e[ t ],
        o = n( r );
      return "function" == typeof o && ( o.prototype = o.prototype || {}, Object.defineProperties( o, {
          __rrweb_original__: {
            enumerable: !1,
            value: r
          }
        } ) ), e[ t ] = o,
        function () {
          e[ t ] = r
        }
    } catch ( e ) {
      return function () {}
    }
  }

  function _() {
    for ( var e = window; e.parent && e.parent != e; ) try {
      e.parent.document;
      e = e.parent
    } catch ( e ) {
      break
    }
    return e
  }

  function T() {
    var e = _(),
      t = e.document;
    return e.innerHeight || t.documentElement && t.documentElement.clientHeight || t.body && t.body.clientHeight
  }

  function k() {
    var e = _(),
      t = e.document;
    return e.innerWidth || t.documentElement && t.documentElement.clientWidth || t.body && t.body.clientWidth
  }

  function D( e, t ) {
    if ( !e ) return !1;
    if ( e.nodeType === e.ELEMENT_NODE ) {
      var n = !1;
      return "string" == typeof t ? n = e.classList.contains( t ) : e.classList.forEach( ( function ( e ) {
        t.test( e ) && ( n = !0 )
      } ) ), n || D( e.parentNode, t )
    }
    return e.nodeType, e.TEXT_NODE, D( e.parentNode, t )
  }

  function O( e ) {
    return "__sn" in e && -2 === e.__sn.id
  }

  function L( e ) {
    return Boolean( e.changedTouches )
  }

  function R( e ) {
    return "__ln" in e
  }
  var F = function () {
      function e() {
        this.length = 0, this.head = null
      }
      return e.prototype.get = function ( e ) {
        if ( e >= this.length ) throw new Error( "Position outside of list range" );
        for ( var t = this.head, n = 0; n < e; n++ ) t = ( null == t ? void 0 : t.next ) || null;
        return t
      }, e.prototype.addNode = function ( e ) {
        var t = {
          value: e,
          previous: null,
          next: null
        };
        if ( e.__ln = t, e.previousSibling && R( e.previousSibling ) ) {
          var n = e.previousSibling.__ln.next;
          t.next = n, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, n && ( n.previous = t )
        } else if ( e.nextSibling && R( e.nextSibling ) ) {
          n = e.nextSibling.__ln.previous;
          t.previous = n, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, n && ( n.next = t )
        } else this.head && ( this.head.previous = t ), t.next = this.head, this.head = t;
        this.length++
      }, e.prototype.removeNode = function ( e ) {
        var t = e.__ln;
        this.head && ( t.previous ? ( t.previous.next = t.next, t.next && ( t.next.previous = t.previous ) ) : ( this.head = t.next, this.head && ( this.head.previous = null ) ), e.__ln && delete e.__ln, this.length-- )
      }, e
    }(),
    z = function ( e, t ) {
      return e + "@" + t
    };

  function A( e ) {
    return "__sn" in e
  }

  function P( e, t ) {
    e.delete( t ), t.childNodes.forEach( ( function ( t ) {
      return P( e, t )
    } ) )
  }

  function H( e, t ) {
    var n = t.parentNode;
    if ( !n ) return !1;
    var r = M.getId( n );
    return !!e.some( ( function ( e ) {
      return e.id === r
    } ) ) || H( e, n )
  }

  function j( e, t ) {
    var n = t.parentNode;
    return !!n && ( !!e.has( n ) || j( e, n ) )
  }
  var V = new( function () {
    function e() {
      var e = this;
      this.frozen = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = function ( t ) {
        t.forEach( e.processMutation ), e.frozen || e.emit()
      }, this.emit = function () {
        for ( var t, r, o, a, i = [], u = new F, s = function ( t ) {
            for ( var n = t, r = -2; - 2 === r; ) r = ( n = n.nextSibling ) && M.getId( n );
            return -1 === r && D( t.nextSibling, e.blockClass ) && ( r = null ), r
          }, l = function ( t ) {
            if ( t.parentNode ) {
              var n = M.getId( t.parentNode ),
                r = s( t );
              if ( -1 === n || -1 === r ) return u.addNode( t );
              var o = E( t, document, M.map, e.blockClass, !0, e.inlineStylesheet, e.maskInputOptions, e.slimDOMOptions, e.recordCanvas );
              o && i.push( {
                parentId: n,
                nextId: r,
                node: o
              } )
            }
          }; e.mapRemoves.length; ) M.removeNodeFromMap( e.mapRemoves.shift() );
        try {
          for ( var c = n( e.movedSet ), d = c.next(); !d.done; d = c.next() ) {
            l( h = d.value )
          }
        } catch ( e ) {
          t = {
            error: e
          }
        } finally {
          try {
            d && !d.done && ( r = c.return ) && r.call( c )
          } finally {
            if ( t ) throw t.error
          }
        }
        try {
          for ( var p = n( e.addedSet ), f = p.next(); !f.done; f = p.next() ) {
            var h = f.value;
            j( e.droppedSet, h ) || H( e.removes, h ) ? j( e.movedSet, h ) ? l( h ) : e.droppedSet.add( h ) : l( h )
          }
        } catch ( e ) {
          o = {
            error: e
          }
        } finally {
          try {
            f && !f.done && ( a = p.return ) && a.call( p )
          } finally {
            if ( o ) throw o.error
          }
        }
        for ( var v = null; u.length; ) {
          var m = null;
          if ( v ) {
            var y = M.getId( v.value.parentNode ),
              g = s( v.value ); - 1 !== y && -1 !== g && ( m = v )
          }
          if ( !m )
            for ( var b = u.length - 1; b >= 0; b-- ) {
              var S = u.get( b );
              y = M.getId( S.value.parentNode ), g = s( S.value );
              if ( -1 !== y && -1 !== g ) {
                m = S;
                break
              }
            }
          if ( !m ) break;
          v = m.previous, u.removeNode( m.value ), l( m.value )
        }
        var C = {
          texts: e.texts.map( ( function ( e ) {
            return {
              id: M.getId( e.node ),
              value: e.value
            }
          } ) ).filter( ( function ( e ) {
            return M.has( e.id )
          } ) ),
          attributes: e.attributes.map( ( function ( e ) {
            return {
              id: M.getId( e.node ),
              attributes: e.attributes
            }
          } ) ).filter( ( function ( e ) {
            return M.has( e.id )
          } ) ),
          removes: e.removes,
          adds: i
        };
        ( C.texts.length || C.attributes.length || C.removes.length || C.adds.length ) && ( e.texts = [], e.attributes = [], e.removes = [], e.addedSet = new Set, e.movedSet = new Set, e.droppedSet = new Set, e.movedMap = {}, e.emissionCallback( C ) )
      }, this.processMutation = function ( t ) {
        if ( !O( t.target ) ) switch ( t.type ) {
          case "characterData":
            var n = t.target.textContent;
            D( t.target, e.blockClass ) || n === t.oldValue || e.texts.push( {
              value: n,
              node: t.target
            } );
            break;
          case "attributes":
            n = t.target.getAttribute( t.attributeName );
            if ( D( t.target, e.blockClass ) || n === t.oldValue ) return;
            var r = e.attributes.find( ( function ( e ) {
              return e.node === t.target
            } ) );
            r || ( r = {
              node: t.target,
              attributes: {}
            }, e.attributes.push( r ) ), r.attributes[ t.attributeName ] = b( document, t.attributeName, n );
            break;
          case "childList":
            t.addedNodes.forEach( ( function ( n ) {
              return e.genAdds( n, t.target )
            } ) ), t.removedNodes.forEach( ( function ( n ) {
              var r = M.getId( n ),
                o = M.getId( t.target );
              D( n, e.blockClass ) || D( t.target, e.blockClass ) || O( n ) || ( e.addedSet.has( n ) ? ( P( e.addedSet, n ), e.droppedSet.add( n ) ) : e.addedSet.has( t.target ) && -1 === r || function e( t ) {
                var n = M.getId( t );
                return !M.has( n ) || ( !t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE ) && ( !t.parentNode || e( t.parentNode ) )
              }( t.target ) || ( e.movedSet.has( n ) && e.movedMap[ z( r, o ) ] ? P( e.movedSet, n ) : e.removes.push( {
                parentId: o,
                id: r
              } ) ), e.mapRemoves.push( n ) )
            } ) )
        }
      }, this.genAdds = function ( t, n ) {
        if ( !D( t, e.blockClass ) ) {
          if ( A( t ) ) {
            if ( O( t ) ) return;
            e.movedSet.add( t );
            var r = null;
            n && A( n ) && ( r = n.__sn.id ), r && ( e.movedMap[ z( t.__sn.id, r ) ] = !0 )
          } else e.addedSet.add( t ), e.droppedSet.delete( t );
          t.childNodes.forEach( ( function ( t ) {
            return e.genAdds( t )
          } ) )
        }
      }
    }
    return e.prototype.init = function ( e, t, n, r, o, a ) {
      this.blockClass = t, this.inlineStylesheet = n, this.maskInputOptions = r, this.recordCanvas = o, this.emissionCallback = e, this.slimDOMOptions = a
    }, e.prototype.freeze = function () {
      this.frozen = !0
    }, e.prototype.unfreeze = function () {
      this.frozen = !1
    }, e.prototype.isFrozen = function () {
      return this.frozen
    }, e
  }() );

  function U( e, t, n ) {
    if ( !1 === n.mouseInteraction ) return function () {};
    var r = !0 === n.mouseInteraction || void 0 === n.mouseInteraction ? {} : n.mouseInteraction,
      o = [];
    return Object.keys( d ).filter( ( function ( e ) {
        return Number.isNaN( Number( e ) ) && !e.endsWith( "_Departed" ) && !1 !== r[ e ]
      } ) ).forEach( ( function ( n ) {
        var r = n.toLowerCase(),
          a = function ( n ) {
            return function ( r ) {
              if ( !D( r.target, t ) ) {
                var o = M.getId( r.target ),
                  a = L( r ) ? r.changedTouches[ 0 ] : r,
                  i = a.clientX,
                  u = a.clientY;
                e( {
                  type: d[ n ],
                  id: o,
                  x: i,
                  y: u
                } )
              }
            }
          }( n );
        o.push( w( r, a ) )
      } ) ),
      function () {
        o.forEach( ( function ( e ) {
          return e()
        } ) )
      }
  }
  var W, B = [ "INPUT", "TEXTAREA", "SELECT" ],
    X = new WeakMap;

  function q( e, r ) {
    void 0 === r && ( r = {} ),
      function ( e, t ) {
        var n = e.mutationCb,
          r = e.mousemoveCb,
          a = e.mouseInteractionCb,
          i = e.scrollCb,
          u = e.viewportResizeCb,
          s = e.inputCb,
          l = e.mediaInteractionCb,
          c = e.styleSheetRuleCb,
          d = e.canvasMutationCb,
          p = e.fontCb;
        e.mutationCb = function () {
          for ( var e = [], r = 0; r < arguments.length; r++ ) e[ r ] = arguments[ r ];
          t.mutation && t.mutation.apply( t, o( e ) ), n.apply( void 0, o( e ) )
        }, e.mousemoveCb = function () {
          for ( var e = [], n = 0; n < arguments.length; n++ ) e[ n ] = arguments[ n ];
          t.mousemove && t.mousemove.apply( t, o( e ) ), r.apply( void 0, o( e ) )
        }, e.mouseInteractionCb = function () {
          for ( var e = [], n = 0; n < arguments.length; n++ ) e[ n ] = arguments[ n ];
          t.mouseInteraction && t.mouseInteraction.apply( t, o( e ) ), a.apply( void 0, o( e ) )
        }, e.scrollCb = function () {
          for ( var e = [], n = 0; n < arguments.length; n++ ) e[ n ] = arguments[ n ];
          t.scroll && t.scroll.apply( t, o( e ) ), i.apply( void 0, o( e ) )
        }, e.viewportResizeCb = function () {
          for ( var e = [], n = 0; n < arguments.length; n++ ) e[ n ] = arguments[ n ];
          t.viewportResize && t.viewportResize.apply( t, o( e ) ), u.apply( void 0, o( e ) )
        }, e.inputCb = function () {
          for ( var e = [], n = 0; n < arguments.length; n++ ) e[ n ] = arguments[ n ];
          t.input && t.input.apply( t, o( e ) ), s.apply( void 0, o( e ) )
        }, e.mediaInteractionCb = function () {
          for ( var e = [], n = 0; n < arguments.length; n++ ) e[ n ] = arguments[ n ];
          t.mediaInteaction && t.mediaInteaction.apply( t, o( e ) ), l.apply( void 0, o( e ) )
        }, e.styleSheetRuleCb = function () {
          for ( var e = [], n = 0; n < arguments.length; n++ ) e[ n ] = arguments[ n ];
          t.styleSheetRule && t.styleSheetRule.apply( t, o( e ) ), c.apply( void 0, o( e ) )
        }, e.canvasMutationCb = function () {
          for ( var e = [], n = 0; n < arguments.length; n++ ) e[ n ] = arguments[ n ];
          t.canvasMutation && t.canvasMutation.apply( t, o( e ) ), d.apply( void 0, o( e ) )
        }, e.fontCb = function () {
          for ( var e = [], n = 0; n < arguments.length; n++ ) e[ n ] = arguments[ n ];
          t.font && t.font.apply( t, o( e ) ), p.apply( void 0, o( e ) )
        }
      }( e, r );
    var a, i, u = function ( e, t, n, r, o, a ) {
        V.init( e, t, n, r, o, a );
        var i = new MutationObserver( V.processMutations.bind( V ) ),
          u = _();
        return i.observe( u.document, {
          attributes: !0,
          attributeOldValue: !0,
          characterData: !0,
          characterDataOldValue: !0,
          childList: !0,
          subtree: !0
        } ), i
      }( e.mutationCb, e.blockClass, e.inlineStylesheet, e.maskInputOptions, e.recordCanvas, e.slimDOMOptions ),
      s = function ( e, t ) {
        if ( !1 === t.mousemove ) return function () {};
        var n, r = "number" == typeof t.mousemove ? t.mousemove : 50,
          o = [],
          a = I( ( function ( t ) {
            var r = Date.now() - n;
            e( o.map( ( function ( e ) {
              return e.timeOffset -= r, e
            } ) ), t ? c.TouchMove : c.MouseMove ), o = [], n = null
          } ), 500 ),
          i = I( ( function ( e ) {
            var t = e.target,
              r = L( e ) ? e.changedTouches[ 0 ] : e,
              i = r.clientX,
              u = r.clientY;
            n || ( n = Date.now() ), o.push( {
              x: i,
              y: u,
              id: M.getId( t ),
              timeOffset: Date.now() - n
            } ), a( L( e ) )
          } ), r, {
            trailing: !1
          } ),
          u = [ w( "mousemove", i ), w( "touchmove", i ) ];
        return function () {
          u.forEach( ( function ( e ) {
            return e()
          } ) )
        }
      }( e.mousemoveCb, e.sampling ),
      l = U( e.mouseInteractionCb, e.blockClass, e.sampling ),
      d = ( a = e.scrollCb, i = e.blockClass, w( "scroll", I( ( function ( e ) {
        if ( e.target && !D( e.target, i ) ) {
          var t = M.getId( e.target ),
            n = _().document;
          if ( e.target === n ) {
            var r = n.scrollingElement || n.documentElement;
            a( {
              id: t,
              x: r.scrollLeft,
              y: r.scrollTop
            } )
          } else a( {
            id: t,
            x: e.target.scrollLeft,
            y: e.target.scrollTop
          } )
        }
      } ), e.sampling.scroll || 100 ) ) ),
      f = function ( e ) {
        return w( "resize", I( ( function () {
          var t = T(),
            n = k();
          e( {
            width: Number( n ),
            height: Number( t )
          } )
        } ), 200 ), window )
      }( e.viewportResizeCb ),
      h = function ( e, n, r, a, i ) {
        function u( e ) {
          var t = e.target;
          if ( t && t.tagName && !( B.indexOf( t.tagName ) < 0 ) && !D( t, n ) ) {
            var o = t.type;
            if ( "password" !== o && !t.classList.contains( r ) ) {
              var i = t.value,
                u = !1;
              "radio" === o || "checkbox" === o ? u = t.checked : ( a[ t.tagName.toLowerCase() ] || a[ o ] ) && ( i = "*".repeat( i.length ) ), s( t, {
                text: i,
                isChecked: u
              } );
              var l = t.name,
                c = _().document;
              "radio" === o && l && u && c.querySelectorAll( 'input[type="radio"][name="' + l + '"]' ).forEach( ( function ( e ) {
                e !== t && s( e, {
                  text: e.value,
                  isChecked: !u
                } )
              } ) )
            }
          }
        }

        function s( n, r ) {
          var o = X.get( n );
          if ( !o || o.text !== r.text || o.isChecked !== r.isChecked ) {
            X.set( n, r );
            var a = M.getId( n );
            e( t( t( {}, r ), {
              id: a
            } ) )
          }
        }
        var l = ( "last" === i.input ? [ "change" ] : [ "input", "change" ] ).map( ( function ( e ) {
            return w( e, u )
          } ) ),
          c = Object.getOwnPropertyDescriptor( HTMLInputElement.prototype, "value" ),
          d = [
            [ HTMLInputElement.prototype, "value" ],
            [ HTMLInputElement.prototype, "checked" ],
            [ HTMLSelectElement.prototype, "value" ],
            [ HTMLTextAreaElement.prototype, "value" ],
            [ HTMLSelectElement.prototype, "selectedIndex" ]
          ];
        return c && c.set && l.push.apply( l, o( d.map( ( function ( e ) {
            return x( e[ 0 ], e[ 1 ], {
              set: function () {
                u( {
                  target: this
                } )
              }
            } )
          } ) ) ) ),
          function () {
            l.forEach( ( function ( e ) {
              return e()
            } ) )
          }
      }( e.inputCb, e.blockClass, e.ignoreClass, e.maskInputOptions, e.sampling ),
      v = function ( e, t ) {
        var n = function ( n ) {
            return function ( r ) {
              var o = r.target;
              o && !D( o, t ) && e( {
                type: "play" === n ? p.Play : p.Pause,
                id: M.getId( o )
              } )
            }
          },
          r = [ w( "play", n( "play" ) ), w( "pause", n( "pause" ) ) ];
        return function () {
          r.forEach( ( function ( e ) {
            return e()
          } ) )
        }
      }( e.mediaInteractionCb, e.blockClass ),
      m = function ( e ) {
        var t = CSSStyleSheet.prototype.insertRule;
        CSSStyleSheet.prototype.insertRule = function ( n, r ) {
          var o = M.getId( this.ownerNode );
          return -1 !== o && e( {
            id: o,
            adds: [ {
              rule: n,
              index: r
            } ]
          } ), t.apply( this, arguments )
        };
        var n = CSSStyleSheet.prototype.deleteRule;
        return CSSStyleSheet.prototype.deleteRule = function ( t ) {
            var r = M.getId( this.ownerNode );
            return -1 !== r && e( {
              id: r,
              removes: [ {
                index: t
              } ]
            } ), n.apply( this, arguments )
          },
          function () {
            CSSStyleSheet.prototype.insertRule = t, CSSStyleSheet.prototype.deleteRule = n
          }
      }( e.styleSheetRuleCb ),
      y = e.recordCanvas ? function ( e, t ) {
        var r, a, i = Object.getOwnPropertyNames( CanvasRenderingContext2D.prototype ),
          u = [],
          s = function ( n ) {
            try {
              if ( "function" != typeof CanvasRenderingContext2D.prototype[ n ] ) return "continue";
              var r = N( CanvasRenderingContext2D.prototype, n, ( function ( r ) {
                return function () {
                  for ( var a = this, i = [], u = 0; u < arguments.length; u++ ) i[ u ] = arguments[ u ];
                  return D( this.canvas, t ) || setTimeout( ( function () {
                    var t = o( i );
                    "drawImage" === n && t[ 0 ] && t[ 0 ] instanceof HTMLCanvasElement && ( t[ 0 ] = t[ 0 ].toDataURL() ), e( {
                      id: M.getId( a.canvas ),
                      property: n,
                      args: t
                    } )
                  } ), 0 ), r.apply( this, i )
                }
              } ) );
              u.push( r )
            } catch ( t ) {
              var a = x( CanvasRenderingContext2D.prototype, n, {
                set: function ( t ) {
                  e( {
                    id: M.getId( this.canvas ),
                    property: n,
                    args: [ t ],
                    setter: !0
                  } )
                }
              } );
              u.push( a )
            }
          };
        try {
          for ( var l = n( i ), c = l.next(); !c.done; c = l.next() ) {
            s( c.value )
          }
        } catch ( e ) {
          r = {
            error: e
          }
        } finally {
          try {
            c && !c.done && ( a = l.return ) && a.call( l )
          } finally {
            if ( r ) throw r.error
          }
        }
        return function () {
          u.forEach( ( function ( e ) {
            return e()
          } ) )
        }
      }( e.canvasMutationCb, e.blockClass ) : function () {},
      g = e.collectFonts ? function ( e ) {
        var t = [],
          n = new WeakMap,
          r = FontFace;
        window.FontFace = function ( e, t, o ) {
          var a = new r( e, t, o );
          return n.set( a, {
            family: e,
            buffer: "string" != typeof t,
            descriptors: o,
            fontSource: "string" == typeof t ? t : JSON.stringify( Array.from( new Uint8Array( t ) ) )
          } ), a
        };
        var o = N( document.fonts, "add", ( function ( t ) {
          return function ( r ) {
            return setTimeout( ( function () {
              var t = n.get( r );
              t && ( e( t ), n.delete( r ) )
            } ), 0 ), t.apply( this, [ r ] )
          }
        } ) );
        return t.push( ( function () {
            window.FonFace = r
          } ) ), t.push( o ),
          function () {
            t.forEach( ( function ( e ) {
              return e()
            } ) )
          }
      }( e.fontCb ) : function () {};
    return function () {
      u.disconnect(), s(), l(), d(), f(), h(), v(), m(), y(), g()
    }
  }

  function Y( e ) {
    return t( t( {}, e ), {
      timestamp: Date.now()
    } )
  }

  function K( e ) {
    void 0 === e && ( e = {} );
    var n = e.emit,
      o = e.checkoutEveryNms,
      a = e.checkoutEveryNth,
      i = e.blockClass,
      u = void 0 === i ? "rr-block" : i,
      s = e.ignoreClass,
      d = void 0 === s ? "rr-ignore" : s,
      p = e.inlineStylesheet,
      f = void 0 === p || p,
      h = e.maskAllInputs,
      v = e.maskInputOptions,
      m = e.slimDOMOptions,
      y = e.hooks,
      g = e.packFn,
      b = e.sampling,
      S = void 0 === b ? {} : b,
      C = e.mousemoveWait,
      I = e.recordCanvas,
      x = void 0 !== I && I,
      N = e.collectFonts,
      D = void 0 !== N && N;
    if ( !n ) throw new Error( "emit function is required" );
    void 0 !== C && void 0 === S.mousemove && ( S.mousemove = C );
    var O, L, R = !0 === h ? {
        color: !0,
        date: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
        textarea: !0,
        select: !0
      } : void 0 !== v ? v : {},
      F = !0 === m || "all" === m ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaVerification: !0,
        headMetaAuthorship: "all" === m,
        headMetaDescKeywords: "all" === m
      } : !1 === m ? {} : m;
    void 0 === O && ( O = window ), "NodeList" in O && !O.NodeList.prototype.forEach && ( O.NodeList.prototype.forEach = Array.prototype.forEach ), "DOMTokenList" in O && !O.DOMTokenList.prototype.forEach && ( O.DOMTokenList.prototype.forEach = Array.prototype.forEach );
    var z = 0;

    function A( e ) {
      var t, n, o, a;
      void 0 === e && ( e = !1 );
      var i = _(),
        s = i.document;
      W( Y( {
        type: l.Meta,
        data: {
          href: i.location.href,
          width: k(),
          height: T()
        }
      } ), e );
      var c = V.isFrozen();
      V.freeze();
      var d = r( function ( e, t, n, r, o, a ) {
          void 0 === t && ( t = "rr-block" ), void 0 === n && ( n = !0 );
          var i = {};
          return [ E( e, e, i, t, !1, n, !0 === r ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0
          } : !1 === r ? {} : r, !0 === o || "all" === o ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: "all" === o,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0
          } : !1 === o ? {} : o, a ), i ]
        }( s, u, f, R, F, x ), 2 ),
        p = d[ 0 ],
        h = d[ 1 ];
      if ( !p ) return console.warn( "Failed to snapshot the document" );
      M.map = h, W( Y( {
        type: l.FullSnapshot,
        data: {
          node: p,
          initialOffset: {
            left: void 0 !== i.pageXOffset ? i.pageXOffset : ( null == s ? void 0 : s.documentElement.scrollLeft ) || ( null === ( n = null === ( t = null == s ? void 0 : s.body ) || void 0 === t ? void 0 : t.parentElement ) || void 0 === n ? void 0 : n.scrollLeft ) || ( null == s ? void 0 : s.body.scrollLeft ) || 0,
            top: void 0 !== i.pageYOffset ? i.pageYOffset : ( null == s ? void 0 : s.documentElement.scrollTop ) || ( null === ( a = null === ( o = null == s ? void 0 : s.body ) || void 0 === o ? void 0 : o.parentElement ) || void 0 === a ? void 0 : a.scrollTop ) || ( null == s ? void 0 : s.body.scrollTop ) || 0
          }
        }
      } ) ), c || ( V.emit(), V.unfreeze() )
    }
    W = function ( e, t ) {
      if ( !V.isFrozen() || e.type === l.FullSnapshot || e.type == l.IncrementalSnapshot && e.data.source == c.Mutation || ( V.emit(), V.unfreeze() ), n( g ? g( e ) : e, t ), e.type === l.FullSnapshot ) L = e, z = 0;
      else if ( e.type === l.IncrementalSnapshot ) {
        z++;
        var r = a && z >= a,
          i = o && e.timestamp - L.timestamp > o;
        ( r || i ) && A( !0 )
      }
    };
    try {
      var P = [];
      P.push( w( "DOMContentLoaded", ( function () {
        W( Y( {
          type: l.DomContentLoaded,
          data: {}
        } ) )
      } ) ) );
      var H = function () {
          A(), P.push( q( {
            mutationCb: function ( e ) {
              return W( Y( {
                type: l.IncrementalSnapshot,
                data: t( {
                  source: c.Mutation
                }, e )
              } ) )
            },
            mousemoveCb: function ( e, t ) {
              return W( Y( {
                type: l.IncrementalSnapshot,
                data: {
                  source: t,
                  positions: e
                }
              } ) )
            },
            mouseInteractionCb: function ( e ) {
              return W( Y( {
                type: l.IncrementalSnapshot,
                data: t( {
                  source: c.MouseInteraction
                }, e )
              } ) )
            },
            scrollCb: function ( e ) {
              return W( Y( {
                type: l.IncrementalSnapshot,
                data: t( {
                  source: c.Scroll
                }, e )
              } ) )
            },
            viewportResizeCb: function ( e ) {
              return W( Y( {
                type: l.IncrementalSnapshot,
                data: t( {
                  source: c.ViewportResize
                }, e )
              } ) )
            },
            inputCb: function ( e ) {
              return W( Y( {
                type: l.IncrementalSnapshot,
                data: t( {
                  source: c.Input
                }, e )
              } ) )
            },
            mediaInteractionCb: function ( e ) {
              return W( Y( {
                type: l.IncrementalSnapshot,
                data: t( {
                  source: c.MediaInteraction
                }, e )
              } ) )
            },
            styleSheetRuleCb: function ( e ) {
              return W( Y( {
                type: l.IncrementalSnapshot,
                data: t( {
                  source: c.StyleSheetRule
                }, e )
              } ) )
            },
            canvasMutationCb: function ( e ) {
              return W( Y( {
                type: l.IncrementalSnapshot,
                data: t( {
                  source: c.CanvasMutation
                }, e )
              } ) )
            },
            fontCb: function ( e ) {
              return W( Y( {
                type: l.IncrementalSnapshot,
                data: t( {
                  source: c.Font
                }, e )
              } ) )
            },
            blockClass: u,
            ignoreClass: d,
            maskInputOptions: R,
            inlineStylesheet: f,
            sampling: S,
            recordCanvas: x,
            collectFonts: D,
            slimDOMOptions: F
          }, y ) )
        },
        j = _().document;
      return "interactive" === j.readyState || "complete" === j.readyState ? H() : P.push( w( "load", ( function () {
          W( Y( {
            type: l.Load,
            data: {}
          } ) ), H()
        } ), window ) ),
        function () {
          P.forEach( ( function ( e ) {
            return e()
          } ) )
        }
    } catch ( e ) {
      console.warn( e )
    }
  }
  return K.addCustomEvent = function ( e, t ) {
    if ( !W ) throw new Error( "please add custom event after start recording" );
    W( Y( {
      type: l.Custom,
      data: {
        tag: e,
        payload: t
      }
    } ) )
  }, K.freezePage = function () {
    V.freeze()
  }, K
}();
