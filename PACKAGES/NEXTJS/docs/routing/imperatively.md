Imperatively
============

**Examples**

-   [Using Router](https://github.com/vercel/next.js/tree/canary/examples/using-router)

[`next/link`](/docs/api-reference/next/link.md) should be able to cover most of your routing needs, but you can also do client-side navigations without it, take a look at the [documentation for `next/router`](/docs/api-reference/next/router.md).

The following example shows how to do basic page navigations with [`useRouter`](/docs/api-reference/next/router.md#useRouter):

    import { useRouter } from 'next/router'

    export default function ReadMore() {
      const router = useRouter()

      return (
        <button onClick={() => router.push('/about')}>
          Click here to read more
        </button>
      )
    }
