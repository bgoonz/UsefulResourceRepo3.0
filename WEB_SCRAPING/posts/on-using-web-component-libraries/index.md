<a href="../../index.html" class="header-link"><img src="../../images/logos/wordmark.svg" alt="A Beautiful Site" class="wordmark" /></a> <a href="../../index.html" class="nav-item">Home</a> <a href="../../tags/index.html" class="nav-item">Tags</a> <a href="../index.html" class="nav-item">Archive</a> <a href="../../about/index.html" class="nav-item">About</a>

------------------------------------------------------------------------

On Using Web Component Libraries
================================

September 20, 2021 • 2 min read

We tend to think of components as things that belong to a framework. After all, React has components, Vue has components, Angular has components…it's just how we've always used them.

Because of that, people tend to refer to [Lit](https://lit.dev/) and [FAST Element](https://www.fast.design/docs/fast-element/getting-started/) as frameworks, but they’re not. They’re *libraries*, and that’s an important distinction.

If you want a React component to work, you have to use it with React. If you want a Vue component to work, you have to use it with Vue. If you want an Angular component to work…well, you get the point.

*With web components, the platform is the framework.*

Naturally, a follow up question is "why do you need a library then?" The truth is that we don’t. We can create web components without a library. [Here's a counter component written in pure JavaScript](https://codepen.io/claviska/pen/abwGLPm?editors=0010).

    class MyCounter extends HTMLElement {
      static get observedAttributes() {
        return ['count'];
      }

      constructor() {
        super();
        this.state = {
          count: 0
        };
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
          <button type="button">
            Count:
            <span class="count">${this.state.count}</span>
          </button>
        `;
        this.handleClick = this.handleClick.bind(this);
      }

      connectedCallback() {
        this.shadowRoot.querySelector('button').addEventListener('click', this.handleClick);
      }

      disconnectedCallback() {
        this.shadowRoot.querySelector('button').removeEventListener('click', this.handleClick);
      }

      get count() {
        return this.state.count;
      }

      set count(newCount) {
        this.state.count = newCount;
        this.update();
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'count') {
          this.state.count = Number(newValue);
          this.update();
        }
      }

      handleClick() {
        this.count = this.count + 1;
      }

      update() {
        this.shadowRoot.querySelector('.count').textContent = this.state.count;
      }
    }

    customElements.define('my-counter', MyCounter);

We *choose* to use libraries to improve the the component authoring experience and abstract messy boilerplate into efficient, reusable modules. [Here's a functionally equivalent counter built with Lit](https://codepen.io/claviska/pen/LYLmzKL?editors=0010).

    import { LitElement, html } from 'lit';
    import { customElement, property } from 'lit/decorators.js';

    @customElement('my-counter')
    class MyCounter extends LitElement {
      @property({ type: Number }) count = 0;

      handleClick() {
        this.count++;
      }

      render() {
        return html`
          <button type="button" @click=${this.handleClick}>
            Count: ${this.count}
          </button>
        `;
      }
    }

Sure, we can bake features such as declarative rendering and reactivity into each and every component, but that’s not DRY. It would convolute the code and make our components larger and more difficult to maintain. That’s not what I want and it's probably not what my users want.

Alternatively, we could build those features ourselves and split them off into reusable modules — but that's just reinventing the wheel, isn't it?

When you think of it that way, using a library to build web components makes a lot of sense.

------------------------------------------------------------------------

<span class="small"></span>

Aside: [It’s been said](https://twitter.com/evanplaice/status/1420922358534049804?s=20) that developer experience is the only benefit to using a library. While it’s true that benefits to the end user are marginalized with one-off components, it's worth noting that APIs such as those offered by Lit and FAST Element lead to less bugs due to reduced complexity and less code in the component itself. Consider the counter examples above. Which one is easier to maintain?

<a href="../../tags/web%20components/index.html" class="post-tag">web components</a> <a href="../../tags/html/index.html" class="post-tag">html</a> <a href="../../tags/javascript/index.html" class="post-tag">javascript</a>

------------------------------------------------------------------------

<img src="http://0.gravatar.com/avatar/bf1b3b95fd5b096a3592247c29667b33?s=512" alt="Photo of Cory" class="avatar avatar-small" />

Written by [Cory LaViska](../../index-4.html), a software engineer and UX architect responsible for [Shoelace.style](https://shoelace.style/), [Surreal CMS](https://www.surrealcms.com/), and other [open source things](https://github.com/claviska).

You can follow Cory on [Twitter](https://twitter.com/bgooonz) and [GitHub](https://github.com/claviska).

------------------------------------------------------------------------

<a href="../finding-the-closest-element-through-shadow-roots/index.html" class="post-nav-previous"><span class="small">Previous post</span> Finding the Closest Element Through Shadow Roots</a> <a href="../on-buttons-and-links/index.html" class="post-nav-next"><span class="small">Up next</span> On Buttons and Links</a>
