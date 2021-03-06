var X = Object.create,
  L = Object.defineProperty,
  Y = Object.getPrototypeOf,
  Z = Object.prototype.hasOwnProperty,
  ee = Object.getOwnPropertyNames,
  te = Object.getOwnPropertyDescriptor;
var B = (n) => L(n, "__esModule", { value: !0 });
var oe = (n, e) => {
    B(n);
    for (var t in e) L(n, t, { get: e[t], enumerable: !0 });
  },
  ie = (n, e, t) => {
    if ((B(n), (e && typeof e == "object") || typeof e == "function"))
      for (let o of ee(e))
        !Z.call(n, o) &&
          o !== "default" &&
          L(n, o, {
            get: () => e[o],
            enumerable: !(t = te(e, o)) || t.enumerable,
          });
    return n;
  },
  b = (n) =>
    n && n.__esModule
      ? n
      : ie(
          L(n != null ? X(Y(n)) : {}, "default", { value: n, enumerable: !0 }),
          n
        );
oe(exports, { activate: () => ce });
var h = b(require("vscode"));
var g = b(require("vscode"));
function D(n, e) {
  let t = n.indexOf(e);
  t >= 0 && n.splice(t, 1);
}
function k(n) {
  return n[n.length - 1];
}
async function K(n, e) {
  let t = await g.workspace.openTextDocument(n),
    o = t.getWordRangeAtPosition(e);
  return o || (o = t.getWordRangeAtPosition(e, /[^\s]+/)), Boolean(o);
}
function A(n, e, t = 8, o = !0) {
  let i = e.start.with({ character: Math.max(0, e.start.character - t) }),
    s = n.getWordRangeAtPosition(i),
    r = n.getText(new g.Range(s ? s.start : i, e.start)),
    c = n.getText(e),
    m = e.end.translate(0, 331),
    C = n.getText(new g.Range(e.end, m));
  return (
    o && ((r = r.replace(/^\s*/g, "")), (C = C.replace(/\s*$/g, ""))),
    { before: r, inside: c, after: C }
  );
}
var y = class {
    constructor(e) {
      this.name = e;
    }
    async set(e) {
      await g.commands.executeCommand("setContext", this.name, e);
    }
    async reset() {
      await g.commands.executeCommand("setContext", this.name, void 0);
    }
  },
  O = class {
    constructor(e, t) {
      this._doc = e;
      this._position = t;
      (this._version = e.version), (this._word = this._getAnchorWord(e, t));
    }
    _getAnchorWord(e, t) {
      let o =
        e.getWordRangeAtPosition(t) || e.getWordRangeAtPosition(t, /[^\s]+/);
      return o && e.getText(o);
    }
    guessedTrackedPosition() {
      if (!this._word) return this._position;
      if (this._version === this._doc.version) return this._position;
      let e = this._getAnchorWord(this._doc, this._position);
      if (this._word === e) return this._position;
      let t = this._position.line,
        o = 0,
        i,
        s;
      do {
        if (((s = !1), (i = t + o), i < this._doc.lineCount)) {
          s = !0;
          let r = this._doc.lineAt(i).text.indexOf(this._word);
          if (r >= 0) return new g.Position(i, r);
        }
        if (((o += 1), (i = t - o), i >= 0)) {
          s = !0;
          let r = this._doc.lineAt(i).text.indexOf(this._word);
          if (r >= 0) return new g.Position(i, r);
        }
      } while (o < 100 && s);
      return this._position;
    }
  };
var v = b(require("vscode"));
var T = class {
    constructor(e, t) {
      this.location = e;
      this.direction = t;
      this.contextValue = "callHierarchy";
      this.title = t === _.Incoming ? "Callers Of" : "Calls From";
    }
    async resolve() {
      let e = await Promise.resolve(
          v.commands.executeCommand(
            "vscode.prepareCallHierarchy",
            this.location.uri,
            this.location.range.start
          )
        ),
        t = new j(this.direction, e != null ? e : []),
        o = new N(t);
      if (t.roots.length !== 0)
        return {
          provider: o,
          get message() {
            return t.roots.length === 0 ? "No results." : void 0;
          },
          navigation: t,
          highlights: t,
          dispose() {
            o.dispose();
          },
        };
    }
    with(e) {
      return new T(e, this.direction);
    }
  },
  _;
(function (n) {
  (n[(n.Incoming = 0)] = "Incoming"), (n[(n.Outgoing = 1)] = "Outgoing");
})(_ || (_ = {}));
var x = class {
    constructor(e, t, o, i) {
      this.model = e;
      this.item = t;
      this.parent = o;
      this.locations = i;
    }
    remove() {
      this.model.remove(this);
    }
  },
  j = class {
    constructor(e, t) {
      this.direction = e;
      this.roots = [];
      this._onDidChange = new v.EventEmitter();
      this.onDidChange = this._onDidChange.event;
      this.roots = t.map((o) => new x(this, o, void 0, void 0));
    }
    async _resolveCalls(e) {
      if (this.direction === 0) {
        let t = await v.commands.executeCommand(
          "vscode.provideIncomingCalls",
          e.item
        );
        return t
          ? t.map(
              (o) =>
                new x(
                  this,
                  o.from,
                  e,
                  o.fromRanges.map((i) => new v.Location(o.from.uri, i))
                )
            )
          : [];
      } else {
        let t = await v.commands.executeCommand(
          "vscode.provideOutgoingCalls",
          e.item
        );
        return t
          ? t.map(
              (o) =>
                new x(
                  this,
                  o.to,
                  e,
                  o.fromRanges.map((i) => new v.Location(e.item.uri, i))
                )
            )
          : [];
      }
    }
    async getCallChildren(e) {
      return (
        e.children || (e.children = await this._resolveCalls(e)), e.children
      );
    }
    location(e) {
      return new v.Location(e.item.uri, e.item.range);
    }
    nearest(e, t) {
      var o;
      return (o = this.roots.find(
        (i) => i.item.uri.toString() === e.toString()
      )) != null
        ? o
        : this.roots[0];
    }
    next(e) {
      var t;
      return (t = this._move(e, !0)) != null ? t : e;
    }
    previous(e) {
      var t;
      return (t = this._move(e, !1)) != null ? t : e;
    }
    _move(e, t) {
      var i, s;
      if ((i = e.children) == null ? void 0 : i.length)
        return t ? e.children[0] : k(e.children);
      let o = this.roots.includes(e)
        ? this.roots
        : (s = e.parent) == null
        ? void 0
        : s.children;
      if (o == null ? void 0 : o.length) {
        let r = o.indexOf(e);
        return o[r + (t ? 1 : -1) + (o.length % o.length)];
      }
    }
    getEditorHighlights(e, t) {
      return e.locations
        ? e.locations
            .filter((o) => o.uri.toString() === t.toString())
            .map((o) => o.range)
        : e.item.uri.toString() === t.toString()
        ? [e.item.selectionRange]
        : void 0;
    }
    remove(e) {
      var i;
      let o = this.roots.includes(e)
        ? this.roots
        : (i = e.parent) == null
        ? void 0
        : i.children;
      o && (D(o, e), this._onDidChange.fire(this));
    }
  },
  H = class {
    constructor(e) {
      this._model = e;
      this._emitter = new v.EventEmitter();
      this.onDidChangeTreeData = this._emitter.event;
      this._modelListener = e.onDidChange((t) =>
        this._emitter.fire(t instanceof x ? t : void 0)
      );
    }
    dispose() {
      this._emitter.dispose(), this._modelListener.dispose();
    }
    getTreeItem(e) {
      let t = new v.TreeItem(e.item.name);
      return (
        (t.description = e.item.detail),
        (t.contextValue = "call-item"),
        (t.iconPath = H._getThemeIcon(e.item.kind)),
        (t.command = {
          command: "vscode.open",
          title: "Open Call",
          arguments: [
            e.item.uri,
            {
              selection: e.item.selectionRange.with({
                end: e.item.selectionRange.start,
              }),
            },
          ],
        }),
        (t.collapsibleState = v.TreeItemCollapsibleState.Collapsed),
        t
      );
    }
    getChildren(e) {
      return e ? this._model.getCallChildren(e) : this._model.roots;
    }
    getParent(e) {
      return e.parent;
    }
    static _getThemeIcon(e) {
      let t = H._themeIconIds[e];
      return t ? new v.ThemeIcon(t) : void 0;
    }
  },
  N = H;
N._themeIconIds = [
  "symbol-file",
  "symbol-module",
  "symbol-namespace",
  "symbol-package",
  "symbol-class",
  "symbol-method",
  "symbol-property",
  "symbol-field",
  "symbol-constructor",
  "symbol-enum",
  "symbol-interface",
  "symbol-function",
  "symbol-variable",
  "symbol-constant",
  "symbol-string",
  "symbol-number",
  "symbol-boolean",
  "symbol-array",
  "symbol-object",
  "symbol-key",
  "symbol-null",
  "symbol-enum-member",
  "symbol-struct",
  "symbol-event",
  "symbol-operator",
  "symbol-type-parameter",
];
function q(n, e) {
  let t = new V(e.workspaceState, _.Incoming);
  function o() {
    if (h.window.activeTextEditor) {
      let s = new T(
        new h.Location(
          h.window.activeTextEditor.document.uri,
          h.window.activeTextEditor.selection.active
        ),
        t.value
      );
      n.setInput(s);
    }
  }
  function i(s, r) {
    t.value = s;
    let c,
      m = n.getInput();
    r instanceof x
      ? (c = new T(
          new h.Location(r.item.uri, r.item.selectionRange.start),
          t.value
        ))
      : m instanceof T && (c = new T(m.location, t.value)),
      c && n.setInput(c);
  }
  e.subscriptions.push(
    h.commands.registerCommand("references-view.showCallHierarchy", o),
    h.commands.registerCommand("references-view.showOutgoingCalls", (s) =>
      i(_.Outgoing, s)
    ),
    h.commands.registerCommand("references-view.showIncomingCalls", (s) =>
      i(_.Incoming, s)
    ),
    h.commands.registerCommand("references-view.removeCallItem", ne)
  );
}
function ne(n) {
  n instanceof x && n.remove();
}
var E = class {
    constructor(e, t = _.Outgoing) {
      this._mem = e;
      this._value = t;
      this._ctxMode = new y("references-view.callHierarchyMode");
      let o = e.get(E._key);
      typeof o == "number" && o >= 0 && o <= 1
        ? (this.value = o)
        : (this.value = t);
    }
    get value() {
      return this._value;
    }
    set value(e) {
      (this._value = e),
        this._ctxMode.set(
          this._value === _.Incoming ? "showIncoming" : "showOutgoing"
        ),
        this._mem.update(E._key, e);
    }
  },
  V = E;
V._key = "references-view.callHierarchyMode";
var l = b(require("vscode"));
var d = b(require("vscode"));
var S = class {
    constructor(e, t, o, i) {
      this.title = e;
      this.location = t;
      this._command = o;
      this._result = i;
      this.contextValue = o;
    }
    async resolve() {
      let e;
      if (this._result) e = new I(this._result);
      else {
        let o = await Promise.resolve(
          d.commands.executeCommand(
            this._command,
            this.location.uri,
            this.location.range.start
          )
        );
        e = new I(o != null ? o : []);
      }
      if (e.items.length === 0) return;
      let t = new z(e);
      return {
        provider: t,
        get message() {
          return e.message;
        },
        navigation: e,
        highlights: e,
        dispose() {
          t.dispose();
        },
      };
    }
    with(e) {
      return new S(this.title, e, this._command);
    }
  },
  I = class {
    constructor(e) {
      this._onDidChange = new d.EventEmitter();
      this.onDidChangeTreeData = this._onDidChange.event;
      this.items = [];
      let t;
      for (let o of e.sort(I._compareLocations)) {
        let i =
          o instanceof d.Location
            ? o
            : new d.Location(o.targetUri, o.targetRange);
        (!t || I._compareUriIgnoreFragment(t.uri, i.uri) !== 0) &&
          ((t = new f(i.uri.with({ fragment: "" }), [], this)),
          this.items.push(t)),
          t.references.push(new w(i, t));
      }
    }
    static _compareUriIgnoreFragment(e, t) {
      let o = e.with({ fragment: "" }).toString(),
        i = t.with({ fragment: "" }).toString();
      return o < i ? -1 : o > i ? 1 : 0;
    }
    static _compareLocations(e, t) {
      let o = e instanceof d.Location ? e.uri : e.targetUri,
        i = t instanceof d.Location ? t.uri : t.targetUri;
      if (o.toString() < i.toString()) return -1;
      if (o.toString() > i.toString()) return 1;
      let s = e instanceof d.Location ? e.range : e.targetRange,
        r = t instanceof d.Location ? t.range : t.targetRange;
      return s.start.isBefore(r.start) ? -1 : s.start.isAfter(r.start) ? 1 : 0;
    }
    get message() {
      if (this.items.length === 0) return "No results.";
      let e = this.items.reduce((o, i) => o + i.references.length, 0),
        t = this.items.length;
      return e === 1 && t === 1
        ? `${e} result in ${t} file`
        : e === 1
        ? `${e} result in ${t} files`
        : t === 1
        ? `${e} results in ${t} file`
        : `${e} results in ${t} files`;
    }
    location(e) {
      return e instanceof w ? e.location : void 0;
    }
    nearest(e, t) {
      if (this.items.length === 0) return;
      for (let s of this.items)
        if (s.uri.toString() === e.toString()) {
          for (let c of s.references)
            if (c.location.range.contains(t)) return c;
          let r;
          for (let c of s.references) {
            if (c.location.range.end.isAfter(t)) return c;
            r = c;
          }
          if (r) return r;
          break;
        }
      let o = 0,
        i = I._prefixLen(this.items[o].toString(), e.toString());
      for (let s = 1; s < this.items.length; s++)
        I._prefixLen(this.items[s].uri.toString(), e.toString()) > i && (o = s);
      return this.items[o].references[0];
    }
    static _prefixLen(e, t) {
      let o = 0;
      for (
        ;
        o < e.length && o < t.length && e.charCodeAt(o) === t.charCodeAt(o);

      )
        o += 1;
      return o;
    }
    next(e) {
      var t;
      return (t = this._move(e, !0)) != null ? t : e;
    }
    previous(e) {
      var t;
      return (t = this._move(e, !1)) != null ? t : e;
    }
    _move(e, t) {
      let o = t ? 1 : -1,
        i = (s) => {
          let r =
            (this.items.indexOf(s) + o + this.items.length) % this.items.length;
          return this.items[r];
        };
      if (e instanceof f) return t ? i(e).references[0] : k(i(e).references);
      if (e instanceof w) {
        let s = e.file.references.indexOf(e) + o;
        return s < 0
          ? k(i(e.file).references)
          : s >= e.file.references.length
          ? i(e.file).references[0]
          : e.file.references[s];
      }
    }
    getEditorHighlights(e, t) {
      let o = this.items.find((i) => i.uri.toString() === t.toString());
      return o == null ? void 0 : o.references.map((i) => i.location.range);
    }
    remove(e) {
      e instanceof f
        ? (D(this.items, e), this._onDidChange.fire(void 0))
        : (D(e.file.references, e),
          e.file.references.length === 0
            ? (D(this.items, e.file), this._onDidChange.fire(void 0))
            : this._onDidChange.fire(e.file));
    }
    async asCopyText() {
      let e = "";
      for (let t of this.items)
        e += `${await t.asCopyText()}
`;
      return e;
    }
  },
  z = class {
    constructor(e) {
      this._model = e;
      this._onDidChange = new d.EventEmitter();
      this.onDidChangeTreeData = this._onDidChange.event;
      this._listener = e.onDidChangeTreeData((t) =>
        this._onDidChange.fire(void 0)
      );
    }
    dispose() {
      this._onDidChange.dispose(), this._listener.dispose();
    }
    async getTreeItem(e) {
      if (e instanceof f) {
        let t = new d.TreeItem(e.uri);
        return (
          (t.contextValue = "file-item"),
          (t.description = !0),
          (t.iconPath = d.ThemeIcon.File),
          (t.collapsibleState = d.TreeItemCollapsibleState.Collapsed),
          t
        );
      } else {
        let { range: t } = e.location,
          o = await e.getDocument(!0),
          { before: i, inside: s, after: r } = A(o, t),
          c = {
            label: i + s + r,
            highlights: [[i.length, i.length + s.length]],
          },
          m = new d.TreeItem(c);
        return (
          (m.collapsibleState = d.TreeItemCollapsibleState.None),
          (m.contextValue = "reference-item"),
          (m.command = {
            command: "vscode.open",
            title: "Open Reference",
            arguments: [
              e.location.uri,
              { selection: t.with({ end: t.start }) },
            ],
          }),
          m
        );
      }
    }
    async getChildren(e) {
      if (!e) return this._model.items;
      if (e instanceof f) return e.references;
    }
    getParent(e) {
      return e instanceof w ? e.file : void 0;
    }
  },
  f = class {
    constructor(e, t, o) {
      this.uri = e;
      this.references = t;
      this.model = o;
    }
    remove() {
      this.model.remove(this);
    }
    async asCopyText() {
      let e = `${d.workspace.asRelativePath(this.uri)}
`;
      for (let t of this.references)
        e += `  ${await t.asCopyText()}
`;
      return e;
    }
  },
  w = class {
    constructor(e, t) {
      this.location = e;
      this.file = t;
    }
    async getDocument(e) {
      if (
        (this._document ||
          (this._document = d.workspace.openTextDocument(this.location.uri)),
        e)
      ) {
        let t = this.file.model.next(this.file);
        t instanceof f && t !== this.file
          ? d.workspace.openTextDocument(t.uri)
          : t instanceof w && d.workspace.openTextDocument(t.location.uri);
      }
      return this._document;
    }
    remove() {
      this.file.model.remove(this);
    }
    async asCopyText() {
      let e = await this.getDocument(),
        t = A(e, this.location.range, 21, !1);
      return `${this.location.range.start.line + 1}, ${
        this.location.range.start.character + 1
      }: ${t.before + t.inside + t.after}`;
    }
  };
function Q(n, e) {
  function t(r, c) {
    if (l.window.activeTextEditor) {
      let m = new S(
        r,
        new l.Location(
          l.window.activeTextEditor.document.uri,
          l.window.activeTextEditor.selection.active
        ),
        c
      );
      n.setInput(m);
    }
  }
  e.subscriptions.push(
    l.commands.registerCommand("references-view.findReferences", () =>
      t("References", "vscode.executeReferenceProvider")
    ),
    l.commands.registerCommand("references-view.findImplementations", () =>
      t("Implementations", "vscode.executeImplementationProvider")
    ),
    l.commands.registerCommand("references-view.find", (...r) =>
      l.commands.executeCommand("references-view.findReferences", ...r)
    ),
    l.commands.registerCommand("references-view.removeReferenceItem", re),
    l.commands.registerCommand("references-view.copy", $),
    l.commands.registerCommand("references-view.copyAll", se),
    l.commands.registerCommand("references-view.copyPath", ae)
  );
  let o,
    i = "references.preferredLocation";
  function s(r) {
    if (r && !r.affectsConfiguration(i)) return;
    let c = l.workspace.getConfiguration().get(i);
    o == null || o.dispose(),
      (o = void 0),
      c === "view" &&
        (o = l.commands.registerCommand(
          "editor.action.showReferences",
          async (m, C, R) => {
            let P = new S(
              "References",
              new l.Location(m, C),
              "vscode.executeReferenceProvider",
              R
            );
            n.setInput(P);
          }
        ));
  }
  e.subscriptions.push(l.workspace.onDidChangeConfiguration(s)),
    e.subscriptions.push({ dispose: () => (o == null ? void 0 : o.dispose()) }),
    s();
}
var se = async (n) => {
  n instanceof w ? $(n.file.model) : n instanceof f && $(n.model);
};
function re(n) {
  (n instanceof f || n instanceof w) && n.remove();
}
async function $(n) {
  let e;
  n instanceof I
    ? (e = await n.asCopyText())
    : n instanceof w
    ? (e = await n.asCopyText())
    : n instanceof f && (e = await n.asCopyText()),
    e && (await l.env.clipboard.writeText(e));
}
async function ae(n) {
  n instanceof f &&
    (n.uri.scheme === "file"
      ? l.env.clipboard.writeText(n.uri.fsPath)
      : l.env.clipboard.writeText(n.uri.toString(!0)));
}
var a = b(require("vscode"));
var u = b(require("vscode")),
  U = class {
    constructor(e, t) {
      this._view = e;
      this._delegate = t;
      this._decorationType = u.window.createTextEditorDecorationType({
        backgroundColor: new u.ThemeColor(
          "editor.findMatchHighlightBackground"
        ),
        rangeBehavior: u.DecorationRangeBehavior.ClosedClosed,
        overviewRulerLane: u.OverviewRulerLane.Center,
        overviewRulerColor: new u.ThemeColor(
          "editor.findMatchHighlightBackground"
        ),
      });
      this.disposables = [];
      this._ignore = new Set();
      this.disposables.push(
        u.workspace.onDidChangeTextDocument((o) =>
          this._ignore.add(o.document.uri.toString())
        ),
        u.window.onDidChangeActiveTextEditor(() => e.visible && this.update()),
        e.onDidChangeVisibility((o) =>
          o.visible ? this._show() : this._hide()
        ),
        e.onDidChangeSelection(() => e.visible && this.update())
      ),
        this._show();
    }
    dispose() {
      u.Disposable.from(...this.disposables).dispose();
      for (let e of u.window.visibleTextEditors)
        e.setDecorations(this._decorationType, []);
    }
    _show() {
      let { activeTextEditor: e } = u.window;
      if (!e || !e.viewColumn || this._ignore.has(e.document.uri.toString()))
        return;
      let [t] = this._view.selection;
      if (!t) return;
      let o = this._delegate.getEditorHighlights(t, e.document.uri);
      o && e.setDecorations(this._decorationType, o);
    }
    _hide() {
      for (let e of u.window.visibleTextEditors)
        e.setDecorations(this._decorationType, []);
    }
    update() {
      this._hide(), this._show();
    }
  };
var p = b(require("vscode"));
var M = class {
  constructor(e) {
    this._view = e;
    this._disposables = [];
    this._ctxCanNavigate = new y("references-view.canNavigate");
    this._disposables.push(
      p.commands.registerCommand("references-view.next", () => this.next(!1)),
      p.commands.registerCommand("references-view.prev", () =>
        this.previous(!1)
      )
    );
  }
  dispose() {
    p.Disposable.from(...this._disposables).dispose();
  }
  update(e) {
    (this._delegate = e), this._ctxCanNavigate.set(Boolean(this._delegate));
  }
  _anchor() {
    if (!this._delegate) return;
    let [e] = this._view.selection;
    if (e) return e;
    if (!!p.window.activeTextEditor)
      return this._delegate.nearest(
        p.window.activeTextEditor.document.uri,
        p.window.activeTextEditor.selection.active
      );
  }
  _open(e, t) {
    p.commands.executeCommand("vscode.open", e.uri, {
      selection: new p.Selection(e.range.start, e.range.start),
      preserveFocus: t,
    });
  }
  previous(e) {
    if (!this._delegate) return;
    let t = this._anchor();
    if (!t) return;
    let o = this._delegate.previous(t),
      i = this._delegate.location(o);
    i && (this._view.reveal(o, { select: !0, focus: !0 }), this._open(i, e));
  }
  next(e) {
    if (!this._delegate) return;
    let t = this._anchor();
    if (!t) return;
    let o = this._delegate.next(t),
      i = this._delegate.location(o);
    i && (this._view.reveal(o, { select: !0, focus: !0 }), this._open(i, e));
  }
};
var W = class {
    constructor() {
      this.viewId = "references-view.tree";
      this._ctxIsActive = new y("reference-list.isActive");
      this._ctxHasResult = new y("reference-list.hasResult");
      this._ctxInputSource = new y("reference-list.source");
      this._history = new J(this);
      this._provider = new G();
      (this._tree = a.window.createTreeView(this.viewId, {
        treeDataProvider: this._provider,
        showCollapseAll: !0,
      })),
        (this._navigation = new M(this._tree));
    }
    dispose() {
      var e;
      this._history.dispose(),
        this._tree.dispose(),
        (e = this._sessionDisposable) == null || e.dispose();
    }
    getInput() {
      return this._input;
    }
    async setInput(e) {
      var m, C;
      if (!(await K(e.location.uri, e.location.range.start))) {
        this.clearInput();
        return;
      }
      this._ctxInputSource.set(e.contextValue),
        this._ctxIsActive.set(!0),
        this._ctxHasResult.set(!0),
        a.commands.executeCommand(`${this.viewId}.focus`);
      let t =
        !this._input ||
        Object.getPrototypeOf(this._input) !== Object.getPrototypeOf(e);
      (this._input = e),
        (m = this._sessionDisposable) == null || m.dispose(),
        (this._tree.title = e.title),
        (this._tree.message = t ? void 0 : this._tree.message);
      let o = Promise.resolve(e.resolve());
      this._provider.update(
        o.then((R) => {
          var P;
          return (P = R == null ? void 0 : R.provider) != null
            ? P
            : this._history;
        })
      );
      let i = await o;
      if (this._input !== e) return;
      if (!i) {
        this.clearInput();
        return;
      }
      this._history.add(e),
        (this._tree.message = i.message),
        this._navigation.update(i.navigation);
      let s =
        (C = i.navigation) == null
          ? void 0
          : C.nearest(e.location.uri, e.location.range.start);
      s &&
        this._tree.visible &&
        (await this._tree.reveal(s, { select: !0, focus: !0, expand: !0 }));
      let r = [],
        c;
      i.highlights && ((c = new U(this._tree, i.highlights)), r.push(c)),
        i.provider.onDidChangeTreeData &&
          r.push(
            i.provider.onDidChangeTreeData(() => {
              (this._tree.title = e.title),
                (this._tree.message = i.message),
                c == null || c.update();
            })
          ),
        typeof i.dispose == "function" &&
          r.push(new a.Disposable(() => i.dispose())),
        (this._sessionDisposable = a.Disposable.from(...r));
    }
    clearInput() {
      var e;
      (e = this._sessionDisposable) == null || e.dispose(),
        (this._input = void 0),
        this._ctxHasResult.set(!1),
        this._ctxInputSource.reset(),
        (this._tree.title = "References"),
        (this._tree.message =
          this._history.size === 0
            ? "No results."
            : "No results. Try running a previous search again:"),
        this._provider.update(Promise.resolve(this._history));
    }
  },
  G = class {
    constructor() {
      this._onDidChange = new a.EventEmitter();
      this.onDidChangeTreeData = this._onDidChange.event;
    }
    update(e) {
      var t;
      (t = this._sessionDispoables) == null || t.dispose(),
        (this._sessionDispoables = void 0),
        this._onDidChange.fire(void 0),
        (this.provider = e),
        e
          .then((o) => {
            this.provider === e &&
              o.onDidChangeTreeData &&
              (this._sessionDispoables = o.onDidChangeTreeData(
                this._onDidChange.fire,
                this._onDidChange
              ));
          })
          .catch((o) => {
            (this.provider = void 0), console.error(o);
          });
    }
    async getTreeItem(e) {
      return this._assertProvider(), (await this.provider).getTreeItem(e);
    }
    async getChildren(e) {
      return this._assertProvider(), (await this.provider).getChildren(e);
    }
    async getParent(e) {
      this._assertProvider();
      let t = await this.provider;
      return t.getParent ? t.getParent(e) : void 0;
    }
    _assertProvider() {
      if (!this.provider) throw new Error("MISSING provider");
    }
  },
  F = class {
    constructor(e, t, o, i) {
      this.key = e;
      this.word = t;
      this.anchor = o;
      this.input = i;
      this.description = `${a.workspace.asRelativePath(
        i.location.uri
      )} \u2022 ${i.title.toLocaleLowerCase()}`;
    }
  },
  J = class {
    constructor(e) {
      this._tree = e;
      this._onDidChangeTreeData = new a.EventEmitter();
      this.onDidChangeTreeData = this._onDidChangeTreeData.event;
      this._disposables = [];
      this._ctxHasHistory = new y("reference-list.hasHistory");
      this._inputs = new Map();
      this._disposables.push(
        a.commands.registerCommand("references-view.clear", () =>
          e.clearInput()
        ),
        a.commands.registerCommand("references-view.clearHistory", () => {
          this.clear(), e.clearInput();
        }),
        a.commands.registerCommand("references-view.refind", (t) => {
          t instanceof F && this._reRunHistoryItem(t);
        }),
        a.commands.registerCommand("references-view.refresh", () => {
          let t = Array.from(this._inputs.values()).pop();
          t && this._reRunHistoryItem(t);
        }),
        a.commands.registerCommand("_references-view.showHistoryItem", (t) => {
          var o;
          if (t instanceof F) {
            let i =
              (o = t.anchor.guessedTrackedPosition()) != null
                ? o
                : t.input.location.range.start;
            return a.commands.executeCommand(
              "vscode.open",
              t.input.location.uri,
              { selection: new a.Range(i, i) }
            );
          }
        }),
        a.commands.registerCommand(
          "references-view.pickFromHistory",
          async () => {
            let o = (await this.getChildren()).map((s) => ({
                label: s.word,
                description: s.description,
                item: s,
              })),
              i = await a.window.showQuickPick(o, {
                placeHolder: "Select previous reference search",
              });
            i && this._reRunHistoryItem(i.item);
          }
        )
      );
    }
    dispose() {
      a.Disposable.from(...this._disposables).dispose(),
        this._onDidChangeTreeData.dispose();
    }
    _reRunHistoryItem(e) {
      this._inputs.delete(e.key);
      let t = e.anchor.guessedTrackedPosition(),
        o = e.input;
      t &&
        !e.input.location.range.start.isEqual(t) &&
        (o = e.input.with(new a.Location(e.input.location.uri, t))),
        this._tree.setInput(o);
    }
    async add(e) {
      var c, m;
      let t = await a.workspace.openTextDocument(e.location.uri),
        o = new O(t, e.location.range.start),
        i =
          (c = t.getWordRangeAtPosition(e.location.range.start)) != null
            ? c
            : t.getWordRangeAtPosition(e.location.range.start, /[^\s]+/),
        s = i ? t.getText(i) : "???",
        r = new F(
          JSON.stringify([
            (m = i == null ? void 0 : i.start) != null
              ? m
              : e.location.range.start,
            e.location.uri,
            e.title,
          ]),
          s,
          o,
          e
        );
      this._inputs.delete(r.key),
        this._inputs.set(r.key, r),
        this._ctxHasHistory.set(!0);
    }
    clear() {
      this._inputs.clear(),
        this._ctxHasHistory.set(!1),
        this._onDidChangeTreeData.fire(void 0);
    }
    get size() {
      return this._inputs.size;
    }
    getTreeItem(e) {
      let t = new a.TreeItem(e.word);
      return (
        (t.description = e.description),
        (t.command = {
          command: "_references-view.showHistoryItem",
          arguments: [e],
          title: "Rerun",
        }),
        (t.collapsibleState = a.TreeItemCollapsibleState.None),
        (t.contextValue = "history-item"),
        t
      );
    }
    getChildren() {
      return Promise.all([...this._inputs.values()].reverse());
    }
    getParent() {}
  };
function ce(n) {
  let e = new W();
  Q(e, n), q(e, n);
  function t(o) {
    e.setInput(o);
  }
  return { setInput: t };
}
//# sourceMappingURL=extension.js.map
