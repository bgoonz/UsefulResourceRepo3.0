# CSS Blocks Architecture

Welcome to css-blocks' architecture document! Here you will learn all about the css-blocks framework design, internals, and related build tooling.

I heavily recommend you review the [CSS Blocks Project README][project_home] for a full overview of the css-blocks project and its public APIs! This document expects you have a good handle on Block syntax and Block composition concepts.

I'll give you a chance to review...

Oh, you're back? Good! Glad you're a css-blocks master now – welcome to the community! 🎉 Now, lets dive in to the really fun stuff.

- [CSS Blocks Architecture](#css-blocks-architecture)
- [Build Phases](#build-phases)
  - [Block Parsing](#block-parsing)
  - [Template Analysis](#template-analysis)
  - [Block Compilation](#block-compilation)
  - [Optimization (Production Only)](#optimization-production-only)
  - [Rewrite Phase](#rewrite-phase)
- [Project Structure](#project-structure)
  - [Core Packages](#core-packages)
    - [@css-blocks/core](#css-blockscore)
    - [@css-blocks/runtime](#css-blocksruntime)
    - [@css-blocks/code-style](#css-blockscode-style)
  - [Template Integrations](#template-integrations)
    - [@css-blocks/glimmer](#css-blocksglimmer)
    - [@css-blocks/jsx](#css-blocksjsx)
  - [Build System Integrations](#build-system-integrations)
    - [@css-blocks/broccoli](#css-blocksbroccoli)
    - [@css-blocks/webpack](#css-blockswebpack)
    - [@css-blocks/ember-cli](#css-blocksember-cli)

# Build Phases

Lets kick this off with a high-level overview of what happens when you run a css-blocks build. We'll dive deeper into the project structure and organization a little later, but there's a **lot** going on here, and what's the point of reading about APIs if you don't know what we're trying to accomplish?

After all, as Uncle Ben once said – "With great power, comes great...computational complexity" (Sorry, its been a while since I've seen Spider Man).

To pull off all the features promised by css-blocks, we need to do a _lot_ of work. Over the course of a single build, css-blocks will bring your application through five (5) distinct phases:

1. Block Parsing
2. Template Analysis
3. Block Compilation
4. Optimization (Production Only)
5. Template Rewrite

## Block Parsing

Lets start at the very beginning – a very good place to start! In css-blocks, we start with your templates – unexpected for a CSS framework, I know!

CSS Blocks starts at the entry point template(s) passed to it by your build, and crawls the template dependency trees. Every time we encounter a referenced Block file in a template (remember: the syntax for this changes depending on the templating language), we pass it off to the [BlockFactory](./packages/css-blocks/src/BlockParser/BlockFactory.ts) for parsing.

The `BlockFactory` parses every Block file discovered into an internally used, intermediate data model that is well indexed, easily searchable, and manages all the complexity of Block composition, inheritance and implementation. This data model is affectionately called a [BlockTree](./packages/css-blocks/src/Block/index.ts).

The `BlockFactory` also ensures we only ever have a single instance of each unique Block file's data model at any time, and encapsulates all the logic around Block reference resolution, CSS parsing and preprocessor integration.

In this phase we validate Block syntax and will stop the build with a helpful error if we notice anything wrong in a Block file! These include errors for:

- Invalid Selectors or Identifiers
- Missing API Implementations
- Illegal use of `!important`
- Malformed Block paths or block-references
- And more!

At the end of a successful **Block Parsing Phase**, we are left with a collection of `Block` objects that my be used to query any and all relevant information about a Block file. Any valid `Block` may contain one to many `Style` objects that represent individual `BlockClass`es, or `AttrValue`s accessible on the `Block`. These in turn map directly back to one or more declared rulesets in the source Block file.

You can read more about `Block` objects and their associated APIs in the [CSS Blocks Core README](./packages/css-blocks/README.md).

## Template Analysis

Once we're finished constructing our `Block` objects, these data are passed off to a template `Analyzer` for the **Template Analysis Phase**. It is the job of the analyzer to inspect every element, in every template of the application, and report back information, like:

- which styles are used;
- which styles are dynamic;
- which styles are mutually exclusive;

and any other pertinent usage information that we can glean from the templates.

The syntax for consuming Blocks in any given template language may change, but we require that each language's implementation be _statically analyzable_. This means that by parsing the template we are able to tell with certainty when and how Styles are being used. The more uncertainty in a template's implementation, the less stylesheet optimization we can do in the next build phase.

The `Analyzer` is has access to:

1.  all parsed `Block` objects;
2.  all template entry points.

The `Analyzer` will crawl the template dependency tree and create a new `Analysis` object for each template discovered. These `Analysis` objects contain style usage information for every element the template contains.

In this phase we validate style composition and will stop the build with a helpful error if we notice anything wrong, including but not limited to:

- Invalid application of `Style`s, like:
  - an `AttrValue` used without parent `BlockClass`,
  - two classes from the same block applied to the same element,
  - a `:scope` and `BlockClass` applied on the same element;
- Un-resolved property conflicts on correlated `Style`s from different Blocks;
- Duplicate application of exclusive `AttrValue`s.

You can read more about `Analyzer`s and their associated APIs in the [Analyzer README](./packages/css-blocks/src/TemplateAnalysis/README.md).

## Block Compilation

Now that we have our parsed `Block` objects, and the fully populated `Analysis` data, we can emit a compiled CSS file for each `Block`.

The [`BlockCompiler`](./packages/css-blocks/src/BlockCompiler) is responsible for taking in a `Block` object, and emitting a transformed PostCSS root node with the rewritten classes.

At this phase, your Block files are rewritten to use globally unique class names, and all extension and conflict resolution selectors are emitted.

As described in the [CSS Blocks README][core], `Style` objects (`BlockClasses` and `AttrValues`) conveniently map directly to BEM classes. By default, you will see BEM classes emitted in this phase.

> Note: BEM is the default output mode for css-blocks – and currently the only output mode – but [other output modes](./packages/css-blocks/src/configuration/OutputMode.ts) for css-blocks may be added in the future.

## Optimization (Optional)

Once we have all of our style data parsed from the **Block Parsing Phase**, and all of our usage data from the **Template Analysis Phase**, _and_ the compiled Block CSS files, all this information is passed off to [Opticss][opticss], our standalone CSS stylesheet optimizer, for style optimization!

I encourage you to read up about Opticss and its internals [over in its repository][opticss]. However, after all is said and done, and a lot of optimization magic is run, we are returned:

1. a re-written, optimized, CSS file;
2. a `StyleMapping` object with queryable rewrite data, described below;
3. an `Action` queue describing every transformation step the optimizer made.

> Note: In a non-optimized build, this step is essentially a pass through. The Optimizer will return un-transformed CSS and `StyleMapping` data that is the same as the input data.

The [`StyleMapping`](./packages/css-blocks/src/TemplateRewriter/StyleMapping.ts) object returned by css-blocks after an Opticss run contains APIs that allow you to query a `RewriteMapping` for any Element analyzed during the **Analysis Phase**. This `RewriteMapping` contains all the information required to rewrite that Element from the old, pre-optimized classes, to the new, fully-optimized classes, as we will see in the **Rewrite Phase**.

## Rewrite Phase

Phew! Last step. Now that we have our final CSS stylesheet and it's corresponding `StyleMapping`, we can re-visit every Element we encountered during our **Analysis Phase** and make sure it uses the correct classes at the right times.

As mentioned above, every Element has a corresponding [`RewriteMapping`](./packages/css-blocks/src/TemplateRewriter/RewriteMapping.ts) returned from Opticss. Any given Class, ID or Attribute associated with an element will map back to one (or many) optimized class names that should **only** be applied if a certain set of conditions are met.

Some classes are static – they are always present on the element. Other classes are dynamic, and should only be applied if the application is in a specific state.

Knowing this, we can conceptually think of these Element `RewriteMappings` as a set of classes and dynamic expressions (which evaluate to `true` or `false`), spread over a specially crafted boolean expression that is specific to that Element.

For example, given this Block file and template:

```css
.class-0 {
  color: red;
  float: left;
}
.class-1 {
  color: red;
  float: right;
}
.class-0[state|active] {
  color: blue;
}
.class-1[state|color="yellow"] {
  color: yellow;
}
```

```handlebars
<div class="class-0" state:active={{isActive}}>
<div class="{{style-if isColorful 'class-1'}}" state:color={{dynamicColor}}>
```

We can easily conceptualize the `RewriteMapping` data for each element in development mode, when the CSS output is just BEM.

```css
.block__class-0 {
  color: red;
  float: left;
}

.block__class-1 {
  color: red;
  float: right;
}

/* Notice: `[state|active]` will *only* be applied when `.class-0` is also applied! */
.block__class-0.block__class-0--active {
  color: blue;
}

/* Notice: `[state|color=yellow]` will *only* be applied when `.class-1` is also applied! */
.block__class-1.block__class-1--color-yellow {
  color: yellow;
}
```

```javascript
// For Element 1:
//   - `.class-0` is always applied
//   - `.class-0[state|active]` is *only* applied when `isActive` is true
const el1Classes = [
  "block__class-0",
  isActive && "block__class-0--active",
].join(" ");

// For Element 2:
//   - `.class-1` is applied when `isColorful` is true
//   -  `[state|color=yellow]` is applied when `dynamicColor` === "yellow"
const el2Classes = [
  isColorful ? "block__class-1" : "",
  dynamicColor === "yellow" ? "block__class-1--color-yellow" : "",
].join(" ");
```

> ⁉️ **Note**
>
> The above functional syntax is only here to explain the concept of `RewriteMapping`s and conditional style application! Please read about css-blocks' [Runtime Library][runtime] to learn about how this dynamicism is actually represented in the browser.

In production mode however, these `RewriteMapping`s change! The optimized stylesheet may look something like this:

```css
.a {
  color: red;
}
.b {
  float: left;
}
.c {
  float: right;
}
.d {
  color: blue;
}
.e {
  color: yellow;
}
```

And our `RewriteMapping`s will adjust to accommodate:

```javascript
// Element 1 styling logic remains the same, but uses updated classes.
const el1Classes = ["a b", isActive && "d"].join(" ");

// Element 2 styling logic is updated to use the new minified classes,
// but also pushes some stylesheet logic to the template!
// `[state|color=yellow]` will *only every be applied when `isColorful`
// is also truthy.
const el2Classes = [
  isColorful ? "a c" : "",
  isColorful && dynamicColor === "yellow" ? "e" : "",
].join(" ");
```

Now, as mentioned above, what actually gets written out to your templates is _not_ the very explicit JavaScript syntax you see above. The examples above were only written in that way to help explain the concept of `RewriteMapping`s.

To make life easy for template rewriters, css-blocks delivers its own tiny (~500byte) [Runtime Library][runtime]. Rewriters only need to make sure they invoke this runtime function with the arguments provided to them by the `RewriteMapping` using the template's preferred syntax. You can read about implementation details of this runtime library in its package's [README][runtime].

Because all this runtime logic is abstracted away from template rewriters, they can focus on a single task: understanding the template syntax and transforming individual elements.

---

And there it is. That is what happens, end to end, when you build a css-blocks project. Now lets talk about the code that actually makes this process tick.

# Project Structure

CSS Blocks is structured as a mono-repo, meaning all of the packages we're about to talk about live in _this_ Git repository, but still publish to individual node modules. You can read more about mono-repos and the associated tooling on the [lernajs.io][lerna_website] website.

Every module in css-blocks has its own dedicated README that deep-dives into the nitty-gritty implementation details of that package. So, instead of capturing that complexity here, this section will function as a reference for the major modules in css-blocks and provide a high-level description of each module's function.

The css-blocks mono-repo is organized into the following packages:

## Core Packages

Core css-blocks packages deliver anything that is considered a core-concern of css-blocks – including but not limited to: all the Block file parsing, analysis, and compilation logic, the browser runtime, shared rewrite data structures, etc.

### [@css-blocks/core][core]

Here be Dragons – `@css-blocks/core` is the package that drives everything that happens between reading a Block file and outputting final CSS! CSS Blocks core nearly deserves to be a mono-repo in its own right. All `BlockSyntax` features, functionality for constructing `BlockTrees`, the base class for all `Analyzer`s, the `BlockFactory` and `BlockCompiler` implementations, and more, live in this package.

### [@css-blocks/runtime][runtime]

The runtime package delivers the very slim in-browser runtime that handles dynamic class application. The high-level concept of _what_ the runtime does is briefly explained in the **Rewrite Phase** section above, but for a more detailed examination of how we actually execute these arbitrary binary expressions, with N number of static or dynamic classes, check out this project's README.

### [@css-blocks/code-style][runtime]

This is a utility package that provides TSLint code style rules for the project. Currently, for consistency, it simply re-exports the code style rules delivered by [@opticss/opticss][opticss], the CSS optimizer.

## Template Integrations

A core requirement of css-blocks is the ability to analyze and rewrite your application's templates. Because of language differences, every templating system will have a _slightly_ different syntax when importing / referencing Blocks from a template, and for interacting with css-blocks classes / states in the markup.

**Template Integration** packages' sole responsibility is to understand your project's specific templating syntax (ex: Glimmer, JSX, etc) and provide language specific `Analyzer` and `Rewriter`s.

**Analyzers** will typically be run on one (1) entry point template and are responsible for two (2) things as the crawl the template dependency tree:

1. Discover Block files referenced by the templates and pass them to the `BlockFactory` (provided by `@css-blocks/core`) for compilation and,
2. After Block compilation, crawl every element in every template and log relevant Block class/state usage information on an `Analysis` object (also provided by `@css-blocks/core`).

**Rewriters** are responsible for taking the aforementioned `StyleAnalysis` objects emitted from a Block compilation and transforming templates to use the new classes and updated dynamic expressions. **Rewriters** are a little more free-form than **Analyzers** because the will typically need to interface with the existing template compilation pipeline (ex: Babel Plugins for JSX, Glimmer AST Plugins for Glimmer).

Specific instructions for a given template integration can be found in their respective packages:

### [@css-blocks/glimmer][glimmer]

Provides the template integration for [Glimmer Templates][glimmer_website].

### [@css-blocks/jsx][jsx]

Provides the template integration for [JSX Templates][jsx_website].

## Build System Integrations

**Build System Integrations** are what allow css-blocks to work anywhere. Because the system is designed to be modular, a build integration can be made for any consuming build system. Every build integration will export a css-blocks plugin, in the form required by the system, and have some method to provide it an **Analyzer** and **Rewriter** to run on the project.

These build system integrations are responsible for understanding the file system abstraction provided by the build system, handing off templates to the **Analyzer** for analysis, and shuttling `StyleAnalays` data between the **Analyzer** and **Rewriter**.

### [@css-blocks/broccoli][broccoli]

Provides the build system integration for [Broccoli][broccoli_website].

### [@css-blocks/webpack][webpack]

Provides the build system integration for [Webpack][webpack_website].

### [@css-blocks/ember-cli][ember_cli]

Provides the build system integration for [Ember CLI][ember_cli_website].

## Public Websites

### [@css-blocks/website][website]

The public-facing website and hosted Typedoc API documentation hosted at [www.css-blocks.com][css_blocks_website]. Built as a React app and dog-foods our JSX/Webpack integrations.

### [@css-blocks/playground][playground]

The demo application that allows users to play with CSS Blocks syntax and OptiCSS in-browser. Built as a Glimmer application and dog-foods our Glimmer, Ember CLI and Broccoli integrations.

[project_home]: .
[core]: ./packages/@css-blocks/css-blocks
[runtime]: ./packages/@css-blocks/runtime
[jsx]: ./packages/@css-blocks/jsx
[glimmer]: ./packages/@css-blocks/glimmer
[ember_cli]: ./packages/@css-blocks/ember-cli
[webpack]: ./packages/@css-blocks/webpack
[broccoli]: ./packages/@css-blocks/broccoli
[website]: ./packages/@css-blocks/website
[playground]: ./packages/@css-blocks/playground
[opticss]: https://github.com/linkedin/opticss
[ember_cli_website]: https://ember-cli.com/
[webpack_website]: https://webpack.js.org/
[broccoli_website]: http://broccolijs.com/
[jsx_website]: https://facebook.github.io/jsx/
[glimmer_website]: https://glimmerjs.com/
[lerna_website]: https://lernajs.io
[css_blocks_website]: http://css-blocks.com
