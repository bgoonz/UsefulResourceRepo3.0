# next/image Un-configured Host

#### Why This Error Occurred

On one of your pages that leverages the `next/image` component, you passed a `src` value that uses a hostname in the URL that isn’t defined in the `images.domains` config in `next.config.js`.

#### Possible Ways to Fix It

Add the hostname of your URL to the `images.domains` config in `next.config.js`:

    // next.config.js
    module.exports = {
      images: {
        domains: ['assets.example.com'],
      },
    }

### Useful Links

- [Image Optimization Documentation](https://nextjs.org/docs/basic-features/image-optimization)
