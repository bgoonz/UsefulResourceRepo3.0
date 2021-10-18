# Frequently Asked Questions

Is this production ready?

Next.js has been powering <https://vercel.com>  since its inception.

We’re ecstatic about both the developer experience and end-user performance, so we decided to share it with the community.

How big is it?

The client side bundle size should be measured in a per-app basis. A small Next main bundle is around 65kb gzipped.

How can I change the internal webpack configs?

Next.js tries its best to remove the overhead of webpack configurations, but for advanced cases where more control is needed, refer to the [custom webpack config documentation](/docs/api-reference/next.config.js/custom-webpack-config.md).

What syntactic features are compiled? How do I change them?

We track V8. Since V8 has wide support for ES6 and async and await, we compile those. Since V8 doesn’t support class decorators, we don’t compile those.

See the documentation about [customizing babel config](/docs/advanced-features/customizing-babel-config.md) for more information.

Why a new Router? Next.js is special in that:

- Routes don’t need to be known ahead of time, We don’t ship a route manifest
- Routes are always lazy-loadable

How do I fetch data?

It’s up to you. You can use the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) or [SWR](https://swr.vercel.app/) inside your React components for remote data fetching; or use our [data fetching methods](/docs/basic-features/data-fetching.md) for initial data population.

Can I use it with GraphQL?

Yes! Here’s an [example with Apollo](https://github.com/vercel/next.js/tree/canary/examples/with-apollo).

Can I use it with Redux?

Yes! Here’s an [example](https://github.com/vercel/next.js/tree/canary/examples/with-redux). And there’s another [example with thunk](https://github.com/vercel/next.js/tree/canary/examples/with-redux-thunk).

Can I use a CDN for static assets?

Yes. You can read more about it [here](/docs/api-reference/next.config.js/cdn-support-with-asset-prefix.md).

Can I use Next with my favorite JavaScript library or toolkit?

Since our first release we’ve had many example contributions. You can check them out in the [examples](https://github.com/vercel/next.js/tree/canary/examples) directory.

What is this inspired by?

Many of the goals we set out to accomplish were the ones listed in The [7 principles of Rich Web Applications](https://rauchg.com/2014/7-principles-of-rich-web-applications) by Guillermo Rauch.

The ease-of-use of PHP is a great inspiration. We feel Next.js is a suitable replacement for many scenarios where you would otherwise use PHP to output HTML.

Unlike PHP, we benefit from the ES6 module system and every page exports a component or function that can be easily imported for lazy evaluation or testing.

As we were researching options for server-rendering React that didn’t involve a large number of steps, we came across [react-page](https://github.com/facebookarchive/react-page) (now deprecated), a similar approach to Next.js by the creator of React Jordan Walke.

Can I make a Next.js Progressive Web App (PWA)?

Yes! Check out our [PWA Example](https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app) to see how it works.
