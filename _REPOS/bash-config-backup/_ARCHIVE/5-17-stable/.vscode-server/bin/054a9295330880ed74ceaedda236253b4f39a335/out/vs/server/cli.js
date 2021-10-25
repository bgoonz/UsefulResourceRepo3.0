const path = require("path");
delete process.env.ELECTRON_RUN_AS_NODE,
  (process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH =
    process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH ||
    path.join(__dirname, "..", "..", "..", "remote", "node_modules")),
  require("../../bootstrap-node").injectNodeModuleLookupPath(
    process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH
  ),
  require("../../bootstrap-amd").load("vs/server/remoteCli");

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/054a9295330880ed74ceaedda236253b4f39a335/core/vs/server/cli.js.map
