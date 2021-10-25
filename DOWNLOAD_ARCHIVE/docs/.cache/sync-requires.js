const { hot } = require("react-hot-loader/root");

// prefer default export if available
const preferDefault = (m) => (m && m.default) || m;

exports.components = {
  "component---src-templates-page-js": hot(
    preferDefault(
      require("/mnt/c/Users/bryan/Downloads/docs/src/templates/Page.js")
    )
  ),
  "component---cache-dev-404-page-js": hot(
    preferDefault(
      require("/mnt/c/Users/bryan/Downloads/docs/.cache/dev-404-page.js")
    )
  ),
  "component---src-pages-404-js": hot(
    preferDefault(require("/mnt/c/Users/bryan/Downloads/docs/src/pages/404.js"))
  ),
  "component---src-pages-index-js": hot(
    preferDefault(
      require("/mnt/c/Users/bryan/Downloads/docs/src/pages/index.js")
    )
  ),
};
