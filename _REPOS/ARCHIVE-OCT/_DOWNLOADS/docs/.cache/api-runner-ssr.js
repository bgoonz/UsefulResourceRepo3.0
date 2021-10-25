var plugins = [
  {
    plugin: require("/mnt/c/Users/bryan/Downloads/docs/node_modules/gatsby-plugin-react-helmet/gatsby-ssr"),
    options: { plugins: [] },
  },
  {
    plugin: require("/mnt/c/Users/bryan/Downloads/docs/node_modules/gatsby-plugin-styled-components/gatsby-ssr"),
    options: { plugins: [] },
  },
  {
    plugin: require("/mnt/c/Users/bryan/Downloads/docs/node_modules/gatsby-plugin-manifest/gatsby-ssr"),
    options: {
      plugins: [],
      name: "gatsby-starter-default",
      short_name: "starter",
      start_url: "/",
      background_color: "#663399",
      theme_color: "#663399",
      display: "minimal-ui",
      icon: "src/images/npm-icon.png",
    },
  },
  {
    plugin: require("/mnt/c/Users/bryan/Downloads/docs/node_modules/gatsby-plugin-google-fonts/gatsby-ssr"),
    options: { plugins: [], fonts: ["Poppins", "Inconsolata"] },
  },
  {
    plugin: require("/mnt/c/Users/bryan/Downloads/docs/node_modules/gatsby-remark-autolink-headers/gatsby-ssr"),
    options: {
      plugins: [],
      offsetY: "100",
      icon: '<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>',
      className: "header-link-class",
      maintainCase: false,
      removeAccents: true,
    },
  },
  {
    plugin: require("/mnt/c/Users/bryan/Downloads/docs/gatsby-ssr"),
    options: { plugins: [] },
  },
];
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`);

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map((plugin) => {
    if (!plugin.plugin[api]) {
      return undefined;
    }
    const result = plugin.plugin[api](args, plugin.options);
    if (result && argTransform) {
      args = argTransform({ args, result });
    }
    return result;
  });

  // Filter out undefined results.
  results = results.filter((result) => typeof result !== `undefined`);

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};
