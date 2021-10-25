var plugins = [
  {
    plugin: require("C:/Users/bryan/Downloads/gatsby-starter-resume-master/node_modules/gatsby-plugin-react-helmet/gatsby-ssr"),
    options: { plugins: [] },
  },
  {
    plugin: require("C:/Users/bryan/Downloads/gatsby-starter-resume-master/node_modules/gatsby-plugin-manifest/gatsby-ssr"),
    options: {
      plugins: [],
      name: "Resume",
      short_name: "Landing",
      start_url: "/gatsby-starter-resume/",
      background_color: "#663399",
      theme_color: "#663399",
      display: "standalone",
      icon: "src/assets/img/website-icon.png",
      legacy: true,
      theme_color_in_head: true,
      cache_busting_mode: "query",
      crossOrigin: "anonymous",
      include_favicon: true,
      cacheDigest: "8b8c11595e531cd02a36c2310402617f",
    },
  },
  {
    plugin: require("C:/Users/bryan/Downloads/gatsby-starter-resume-master/node_modules/gatsby-plugin-offline/gatsby-ssr"),
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
