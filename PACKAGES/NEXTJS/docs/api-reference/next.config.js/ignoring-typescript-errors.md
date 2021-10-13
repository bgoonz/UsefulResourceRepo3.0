Ignoring TypeScript Errors
==========================

Next.js fails your **production build** (`next build`) when TypeScript errors are present in your project.

If you’d like Next.js to dangerously produce production code even when your application has errors, you can disable the built-in type checking step.

> Be sure you are running type checks as part of your build or deploy process, otherwise this can be very dangerous.

Open `next.config.js` and enable the `ignoreBuildErrors` option in the `typescript` config:

    module.exports = {
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
    }

Related
-------

[**Introduction to next.config.js:** <span class="small">Learn more about the configuration file used by Next.js.</span>](/docs/api-reference/next.config.js/introduction.md)

[**TypeScript:** <span class="small">Get started with TypeScript in Next.js.</span>](/docs/basic-features/typescript.md)
