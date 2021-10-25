module.exports = [
  {
    plugin: require("../node_modules/gatsby-plugin-manifest/gatsby-browser.js"),
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
    plugin: require("../node_modules/gatsby-plugin-offline/gatsby-browser.js"),
    options: { plugins: [] },
  },
  {
    plugin: require("../gatsby-browser.js"),
    options: { plugins: [] },
  },
];
