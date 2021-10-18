# Response Helpers

**Examples**

- [Basic API Routes](https://github.com/vercel/next.js/tree/canary/examples/api-routes)
- [API Routes with REST](https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest)

The response (`res`) includes a set of Express.js-like methods to improve the developer experience and increase the speed of creating new API endpoints, take a look at the following example:

    export default function handler(req, res) {
      res.status(200).json({ name: 'Next.js' })
    }

The included helpers are:

- `res.status(code)` - A function to set the status code. `code` must be a valid [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- `res.json(body)` - Sends a JSON response. `body` must be a [serialiazable object](https://developer.mozilla.org/en-US/docs/Glossary/Serialization)
- `res.send(body)` - Sends the HTTP response. `body` can be a `string`, an `object` or a `Buffer`
- `res.redirect([status,] path)` - Redirects to a specified path or URL. `status` must be a valid [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). If not specified, `status` defaults to “307” “Temporary redirect”.

To view an example using types, check out the [TypeScript documentation](/docs/basic-features/typescript.md#api-routes).
