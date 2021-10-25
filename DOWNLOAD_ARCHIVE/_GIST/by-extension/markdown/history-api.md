# History API

The DOM [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object provides access to the browser's session history (not to be confused for [WebExtensions history](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/history)) through the [`history`](https://developer.mozilla.org/en-US/docs/Web/API/Window/history "history") object. It exposes useful methods and properties that let you navigate back and forth through the user's history, and manipulate the contents of the history stack.

## [Concepts and usage](https://developer.mozilla.org/en-US/docs/Web/API/History_API#concepts_and_usage "Permalink to Concepts and usage")

Moving backward and forward through the user's history is done using the [`back()`](https://developer.mozilla.org/en-US/docs/Web/API/History/back "back()"), [`forward()`](https://developer.mozilla.org/en-US/docs/Web/API/History/forward "forward()"), and [`go()`](https://developer.mozilla.org/en-US/docs/Web/API/History/go "go()") methods.

### [Moving forward and backward](https://developer.mozilla.org/en-US/docs/Web/API/History_API#moving_forward_and_backward "Permalink to Moving forward and backward")

To move backward through history:

```
window.history.back()

```

Copy to Clipboard

This acts exactly as if the user clicked on the `**Back**` button in their browser toolbar.

Similarly, you can move forward (as if the user clicked the `**Forward**` button), like this:

```
window.history.forward()

```

Copy to Clipboard

### [Moving to a specific point in history](https://developer.mozilla.org/en-US/docs/Web/API/History_API#moving_to_a_specific_point_in_history "Permalink to Moving to a specific point in history")

You can use the [`go()`](https://developer.mozilla.org/en-US/docs/Web/API/History/go "go()") method to load a specific page from session history, identified by its relative position to the current page. (The current page's relative position is `0`.)

To move back one page (the equivalent of calling [`back()`](https://developer.mozilla.org/en-US/docs/Web/API/History/back "back()")):

```
window.history.go(-1)

```

Copy to Clipboard

To move forward a page, just like calling [`forward()`](https://developer.mozilla.org/en-US/docs/Web/API/History/forward "forward()"):

```
window.history.go(1)

```

Copy to Clipboard

Similarly, you can move forward 2 pages by passing `2`, and so forth.

Another use for the `go()` method is to refresh the current page by either passing `0`, or by invoking it without an argument:

```
// The following statements
// both have the effect of
// refreshing the page
window.history.go(0)
window.history.go()

```

Copy to Clipboard

You can determine the number of pages in the history stack by looking at the value of the `length` property:

```
let numberOfEntries = window.history.length

```

Copy to Clipboard

## [Interfaces](https://developer.mozilla.org/en-US/docs/Web/API/History_API#interfaces "Permalink to Interfaces")

[`History`](https://developer.mozilla.org/en-US/docs/Web/API/History)

Allows manipulation of the browser *session history* (that is, the pages visited in the tab or frame that the current page is loaded in).

## [Examples](https://developer.mozilla.org/en-US/docs/Web/API/History_API#examples "Permalink to Examples")

The following example assigns a listener to the `onpopstate` property. And then illustrates some of the methods of the history object to add, replace, and move within the browser history for the current tab.

```
window.onpopstate = function(event) {
  alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
}

history.pushState({page: 1}, "title 1", "?page=1")
history.pushState({page: 2}, "title 2", "?page=2")
history.replaceState({page: 3}, "title 3", "?page=3")
history.back() // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back() // alerts "location: http://example.com/example.html, state: null"
history.go(2)  // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"
```
