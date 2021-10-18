# Disabling x-powered-by

By default Next.js will add the `x-powered-by` header. To opt-out of it, open `next.config.js` and disable the `poweredByHeader` config:

    module.exports = {
      poweredByHeader: false,
    }

## Related

[**Introduction to next.config.js:** <span class="small">Learn more about the configuration file used by Next.js.</span>](/docs/api-reference/next.config.js/introduction.md)
