<!--


---
 "JavaScript : Using bootstrap modal with reactjs"
excerpt: "JavaScript : Using bootstrap modal with reactjs"
date: 2015-06-25 00:00:00 IST
updated: 2015-06-25 00:00:00 IST
categories: javascript
tags: reactjs, bootstrap
---

-->
<!DOCTYPE html>
<html>

<head>
  <title>basic-git-workflow</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/bootstrap.grid.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="./css/bootstrap.css.map">
  <link rel="stylesheet" href="./css/blog-home.css">
  <link rel="stylesheet" href="./css/prism.css">
  <script async defer src="./css/prism.js"></script>
</head>

<body>

When I first tried to use [bootstrap modal](http://getbootstrap.com/javascript/#modals) with my react web app, I tried to initiate via data-attributes and didn't worked. So I tried to place the hidden content outside my react app container and use `React.render` to render the modal and initiate via JavaScript. But it failed as well.

The only thing worked for me is rendering the hidden modal conent along with the react component and initiate it while clicking on the trigger button.

```js
var ModalHeader = React.createClass({
  render: function () {
    return (
      <div className="modal-header">
        {this.props.title}
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  },
});

var ModalBody = React.createClass({
  render: function () {
    return <div className="modal-body">{this.props.content}</div>;
  },
});

var ModalFooter = React.createClass({
  render: function () {
    return (
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">
          Submit
        </button>
      </div>
    );
  },
});

var Modal = React.createClass({
  render: function () {
    return (
      <div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalHeader title="Modal Title" />
            <ModalBody content="Modal Content" />
            <ModalFooter />
          </div>
        </div>
      </div>
    );
  },
});
```

Thus I had the hidden modal content as the react components. Now I need to initiate the modal with a trigger button component.

```js
var Button = React.createClass({
  showModal: function () {
    $(this.refs.modal.getDOMNode()).modal();
  },
  render: function () {
    return (
      <div>
        <button className="btn btn-default" onClick={this.showModal}>
          Show Modal
        </button>
        <Modal ref="modal" />
      </div>
    );
  },
});

React.render(<Button />, document.getElementById("container"));
```

Here is the demo in [jsbin](http://jsbin.com/rupive/edit?js,output).

<a class="jsbin-embed" href="http://jsbin.com/rupive/embed?output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.js"></script>
