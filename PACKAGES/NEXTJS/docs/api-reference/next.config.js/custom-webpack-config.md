# Custom Webpack Config

Before continuing to add custom webpack configuration to your application make sure Next.js doesn’t already support your use-case:

- [CSS imports](/docs/basic-features/built-in-css-support.md#adding-a-global-stylesheet)
- [CSS modules](/docs/basic-features/built-in-css-support.md#adding-component-level-css)
- [Sass/SCSS imports](/docs/basic-features/built-in-css-support.md#sass-support)
- [Sass/SCSS modules](/docs/basic-features/built-in-css-support.md#sass-support)
- [preact](https://github.com/vercel/next.js/tree/canary/examples/using-preact)
- [Customizing babel configuration](/docs/advanced-features/customizing-babel-config.md)

Some commonly asked for features are available as plugins:

- <span class="citation" data-cites="next/mdx">\[@next/mdx\]</span>(https://github.com/vercel/next.js/tree/canary/packages/next-mdx)
- <span class="citation" data-cites="next/bundle-analyzer">\[@next/bundle-analyzer\]</span>(https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)

In order to extend our usage of `webpack`, you can define a function that extends its config inside `next.config.js`, like so:

    module.exports = {
      webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Important: return the modified config
        return config
      },
    }

> The `webpack` function is executed twice, once for the server and once for the client. This allows you to distinguish between client and server configuration using the `isServer` property.

The second argument to the `webpack` function is an object with the following properties:

- `buildId`: `String` - The build id, used as a unique identifier between builds
- `dev`: `Boolean` - Indicates if the compilation will be done in development
- `isServer`: `Boolean` - It’s `true` for server-side compilation, and `false` for client-side compilation
- `defaultLoaders`: `Object` - Default loaders used internally by Next.js:
  - `babel`: `Object` - Default `babel-loader` configuration

Example usage of `defaultLoaders.babel`:

    // Example config for adding a loader that depends on babel-loader
    // This source was taken from the @next/mdx plugin source:
    // https://github.com/vercel/next.js/tree/canary/packages/next-mdx
    module.exports = {
      webpack: (config, options) => {
        config.module.rules.push({
          test: /\.mdx/,
          use: [
            options.defaultLoaders.babel,
            {
              loader: '@mdx-js/loader',
              options: pluginOptions.options,
            },
          ],
        })

        return config
      },
    }

## Related

[**Introduction to next.config.js:** <span class="small">Learn more about the configuration file used by Next.js.</span>](/docs/api-reference/next.config.js/introduction.md)
