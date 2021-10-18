# Invalid Multi-match

#### Why This Error Occurred

In one of your custom-routes you specified a multi-match `/:path*` and used it in your `destination` without adding the `*` in your `destination` e.g. `destination: '/another/:path'`

#### Possible Ways to Fix It

Add `*` to your usage of the multi-match param in your `destination`.

**Before**

    {
      source: '/:path*',
      destination: '/another/:path'
    }

**After**

    {
      source: '/:path*',
      destination: '/another/:path*'
    }
