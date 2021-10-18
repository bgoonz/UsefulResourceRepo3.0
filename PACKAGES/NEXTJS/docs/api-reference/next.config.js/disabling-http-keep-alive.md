# Disabling HTTP Keep-Alive

Next.js automatically polyfills [node-fetch](/docs/basic-features/supported-browsers-features#polyfills) and enables [HTTP Keep-Alive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive) by default. You may want to disable HTTP Keep-Alive for certain `fetch()` calls or globally.

For a single `fetch()` call, you can add the agent option:

    import { Agent } from 'https'

    const url = 'https://example.com'
    const agent = new Agent({ keepAlive: false })
    fetch(url, { agent })

To override all `fetch()` calls globally, you can use `next.config.js`:

    module.exports = {
      httpAgentOptions: {
        keepAlive: false,
      },
    }

## Related

[**Introduction to next.config.js:** <span class="small">Learn more about the configuration file used by Next.js.</span>](/docs/api-reference/next.config.js/introduction.md)
