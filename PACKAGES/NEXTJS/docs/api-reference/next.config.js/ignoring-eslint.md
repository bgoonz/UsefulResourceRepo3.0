# Ignoring ESLint

When ESLint is detected in your project, Next.js fails your **production build** (`next build`) when errors are present.

If you’d like Next.js to produce production code even when your application has ESLint errors, you can disable the built-in linting step completely. This is not recommended unless you already have ESLint configured to run in a separate part of your workflow (for example, in CI or a pre-commit hook).

Open `next.config.js` and enable the `ignoreDuringBuilds` option in the `eslint` config:

    module.exports = {
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
    }

## Related

[**Introduction to next.config.js:** <span class="small">Learn more about the configuration file used by Next.js.</span>](/docs/api-reference/next.config.js/introduction.md)

[**ESLint:** <span class="small">Get started with ESLint in Next.js.</span>](/docs/basic-features/eslint.md)
