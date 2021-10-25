module.exports = function (t) {
  return {
    transformIncoming: (e) =>
      e.scheme === "vscode-remote"
        ? { scheme: "file", path: e.path }
        : e.scheme === "file"
        ? { scheme: "vscode-local", path: e.path }
        : e,
    transformOutgoing: (e) =>
      e.scheme === "file"
        ? { scheme: "vscode-remote", authority: t, path: e.path }
        : e.scheme === "vscode-local"
        ? { scheme: "file", path: e.path }
        : e,
    transformOutgoingScheme: (e) =>
      e === "file" ? "vscode-remote" : e === "vscode-local" ? "file" : e,
  };
};

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/054a9295330880ed74ceaedda236253b4f39a335/core/vs/server/uriTransformer.js.map
