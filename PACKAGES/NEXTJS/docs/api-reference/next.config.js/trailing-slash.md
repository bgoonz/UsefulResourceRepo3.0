Trailing Slash
==============

**Version History**

<table><thead><tr class="header"><th>Version</th><th>Changes</th></tr></thead><tbody><tr class="odd"><td><code>v9.5.0</code></td><td>Trailing Slash added.</td></tr></tbody></table>

By default Next.js will redirect urls with trailing slashes to their counterpart without a trailing slash. For example `/about/` will redirect to `/about`. You can configure this behavior to act the opposite way, where urls without trailing slashes are redirected to their counterparts with trailing slashes.

Open `next.config.js` and add the `trailingSlash` config:

    module.exports = {
      trailingSlash: true,
    }

With this option set, urls like `/about` will redirect to `/about/`.

Related
-------

[**Introduction to next.config.js:** <span class="small">Learn more about the configuration file used by Next.js.</span>](/docs/api-reference/next.config.js/introduction.md)
