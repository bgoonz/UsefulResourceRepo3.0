
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-lekoarts-gatsby-theme-graphql-playground-src-templates-homepage-tsx": preferDefault(require("/workspace/a-whole-bunch-o-gatsby-templates/gatsby-starter-graphql-playground/node_modules/@lekoarts/gatsby-theme-graphql-playground/src/templates/homepage.tsx")),
  "component---node-modules-lekoarts-gatsby-theme-graphql-playground-src-templates-item-tsx": preferDefault(require("/workspace/a-whole-bunch-o-gatsby-templates/gatsby-starter-graphql-playground/node_modules/@lekoarts/gatsby-theme-graphql-playground/src/templates/item.tsx"))
}

