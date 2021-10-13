API Routes
==========

**Examples**

-   [Basic API Routes](https://github.com/vercel/next.js/tree/canary/examples/api-routes)
-   [API Routes with middleware](https://github.com/vercel/next.js/tree/canary/examples/api-routes-middleware)
-   [API Routes with GraphQL](https://github.com/vercel/next.js/tree/canary/examples/api-routes-graphql)
-   [API Routes with REST](https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest)
-   [API Routes with CORS](https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors)

API routes provide a solution to build your **API** with Next.js.

Any file inside the folder `pages/api` is mapped to `/api/*` and will be treated as an API endpoint instead of a `page`. They are server-side only bundles and won’t increase your client-side bundle size.

For example, the following API route `pages/api/user.js` returns a `json` response with a status code of `200`:

    export default function handler(req, res) {
      res.status(200).json({ name: 'John Doe' })
    }

For an API route to work, you need to export a function as default (a.k.a **request handler**), which then receives the following parameters:

-   `req`: An instance of [http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage), plus some [pre-built middlewares](/docs/api-routes/api-middlewares.md)
-   `res`: An instance of [http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse), plus some [helper functions](/docs/api-routes/response-helpers.md)

To handle different HTTP methods in an API route, you can use `req.method` in your request handler, like so:

    export default function handler(req, res) {
      if (req.method === 'POST') {
        // Process a POST request
      } else {
        // Handle any other HTTP method
      }
    }

To fetch API endpoints, take a look into any of the examples at the start of this section.

Use Cases
---------

For new projects, you can build your entire API with API Routes. If you have an existing API, you do not need to forward calls to the API through an API Route. Some other use cases for API Routes are:

-   Masking the URL of an external service (e.g. `/api/secret` instead of `https://company.com/secret-url`)
-   Using [Environment Variables](/docs/basic-features/environment-variables.md) on the server to securely access external services.

Caveats
-------

-   API Routes [do not specify CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), meaning they are **same-origin only** by default. You can customize such behavior by wrapping the request handler with the [CORS middleware](/docs/api-routes/api-middlewares.md#connectexpress-middleware-support).
-   API Routes can’t be used with [`next export`](/docs/advanced-features/static-html-export.md)

Related
-------

For more information on what to do next, we recommend the following sections:

[**API Middlewares:** <span class="small">learn about the built-in middlewares for the request.</span>](/docs/api-routes/api-middlewares.md)

[**Response Helpers:** <span class="small">learn about the built-in methods for the response.</span>](/docs/api-routes/response-helpers.md)

[**TypeScript:** <span class="small">Add TypeScript to your API Routes.</span>](/docs/basic-features/typescript.md#api-routes)
