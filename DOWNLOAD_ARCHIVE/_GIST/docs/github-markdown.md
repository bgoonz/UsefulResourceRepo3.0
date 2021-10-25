# Advanced Formatting in GitHub Markdown

GitHub Flavored Markdown lets you create useful documents in [GitHub](https://github.com/) and [GitHub Enterprise](https://enterprise.github.com/home) using `.md` files. Like other varieties of markdown, GitHub Markdown tries to be as readable as possible in its raw form, resulting in an intentionally limited set of formatting options. However, these options can feel restrictive when dealing with complex content.

Although GitHub Markdown strips out most HTML tags, here are a few tricks that can give you more flexibility when formatting your documents. These advanced formatting options can make your documents more useable, but they come at the expense of plain text readability, so use with caution.

Check out this excellent [cheatsheet](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf) for an overview of standard formatting in GitHub Markdown.

- [Images](#images)
- [Dropdowns](#dropdowns)
- [Buttons](#buttons)
- [Anchor Links](#anchor-links)
- [Horizontal line](#horizontal-line)
- [Extra space](#extra-space)
- [References](#references)

## Images

To **left align** and **resize** an image:

<img src="https://apaskulin.github.io/waxtechnical/images/pup.jpg" width="200" />

Use:

    <img align="left" width="200" src="https://apaskulin.github.io/waxtechnical/images/pup.jpg">

---

To **right align** and **resize** an image:

<img src="https://apaskulin.github.io/waxtechnical/images/pup.jpg" width="200" />

Use:

    <img align="right" width="200" src="https://apaskulin.github.io/waxtechnical/images/pup.jpg">

---

To **center** and **resize** an image:

<img src="https://apaskulin.github.io/waxtechnical/images/pup.jpg" width="300" />

Use:

    <p align="center">
      <img width="300" src="https://apaskulin.github.io/waxtechnical/images/pup.jpg">
    </p>

---

## Dropdowns

To create a dropdown containing **text**:

Example This is a dropdown with text!

Use:

    <details>
    <summary>Example</summary>
    This is a dropdown with text!
    </details>

---

To create a dropdown containing a **list**:

Example

- This dropdown contains
- a list!

Use:

    <details>
    <summary>Example</summary>
    <ul><li>This dropdown contains</li>
    <li>a list!</li></ul>
    </details>

---

To create a dropdown containing an **image**:

Example <img src="https://apaskulin.github.io/waxtechnical/images/pup.jpg" width="500" />

Use:

    <details>
    <summary>Example</summary>
    <img src="https://apaskulin.github.io/waxtechnical/images/pup.jpg" width="500">
    </details>

---

To create a dropdown containing **code**:

Example

    This dropdown contains
    a code block!

Use:

    <details>
    <summary>Example</summary>
    <pre>$ This dropdown contains<br>a code block!</pre>
    </details>

---

## Buttons

To create a single button:

<table><thead><tr class="header"><th><a href="https://github.com/">Click here</a></th></tr></thead><tbody></tbody></table>

Use:

    |[Click here](https://github.com/)|
    |---|

---

To create a row of buttons:

<table><thead><tr class="header"><th><a href="https://github.com/">Click here</a></th><th><a href="https://github.com/">Or here</a></th><th><a href="https://github.com/">Or here</a></th></tr></thead><tbody></tbody></table>

Use:

    |[Click here](https://github.com/)|[Or here](https://github.com/)|[Or here](https://github.com/)|
    |---|---|---|

---

## Anchor links

To link to a heading:

This is an example of an [anchor link](#anchor-links) to a heading.

Use:

    This is an example of an [anchor link](#anchor-links) to a heading.

---

To create an anchor anywhere on the page, use:

    <a name="your-anchor-name">

To reference it:

This is an example of an [anchor link](#your-anchor-name) anywhere on the page.

Use:

    See [creating an anchor link anywhere](#manual-anchor).

---

## Horizontal line

To create a horizontal line:

---

Use:

    ---

---

## Extra space

To add extra space, use one or more:

    <br>

---

### References

GitHub Flavored Markdown Spec - https://github.github.com/gfm/  
Advanced Markdown with David Wells - https://github.com/DavidWells/advanced-markdown  
Markdown Cheatsheet PDF - https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf
