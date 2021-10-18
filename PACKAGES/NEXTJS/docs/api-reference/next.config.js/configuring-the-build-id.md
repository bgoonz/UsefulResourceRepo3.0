# Configuring the Build ID

Next.js uses a constant id generated at build time to identify which version of your application is being served. This can cause problems in multi-server deployments when `next build` is ran on every server. In order to keep a static build id between builds you can provide your own build id.

Open `next.config.js` and add the `generateBuildId` function:

    module.exports = {
      generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return 'my-build-id'
      },
    }

## Related

[**Introduction to next.config.js:** <span class="small">Learn more about the configuration file used by Next.js.</span>](/docs/api-reference/next.config.js/introduction.md)
