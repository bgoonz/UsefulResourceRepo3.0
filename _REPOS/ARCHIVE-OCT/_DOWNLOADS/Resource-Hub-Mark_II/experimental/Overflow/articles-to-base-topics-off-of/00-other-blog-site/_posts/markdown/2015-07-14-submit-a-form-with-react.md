<!--


---
 "JavaScript : Submit a form with reactjs"
excerpt: "JavaScript : Submit a form with reactjs with validation and loading indicator"
date: 2015-07-14 00:00:00 IST
updated: 2015-07-14 00:00:00 IST
categories: javascript
tags: reactjs
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

When ever I read about reactjs, I heard that "Its needs a different thinking". I understood that statement When I worked on a simple form with loading indicator in reactjs. In usual case I used to add loading class in `beforeSend` and remove it when `$.ajax` is `done`/`fail`.

But I came to reactjs, first I tried to do the same, but later I understood it should go to `state`. Here below the code for simple reactjs form. I used `loading` state to to render loading indicator.

```js
App.Users.Add = React.createClass({
  getInitialState: function () {
    return {
      username: "",
      email: "",
      password: "",
      loading: false,
      errors: {},
    };
  },
  _create: function () {
    return $.ajax({
      url: "/api/users",
      type: "POST",
      data: {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      },
      beforeSend: function () {
        this.setState({ loading: true });
      }.bind(this),
    });
  },
  _onSubmit: function (e) {
    e.preventDefault();
    var errors = this._validate();
    if (Object.keys(errors).length != 0) {
      this.setState({
        errors: errors,
      });
      return;
    }
    var xhr = this._create();
    xhr.done(this._onSuccess).fail(this._onError).always(this.hideLoading);
  },
  hideLoading: function () {
    this.setState({ loading: false });
  },
  _onSuccess: function (data) {
    this.refs.user_form.getDOMNode().reset();
    this.setState(this.getInitialState());
    // show success message
  },
  _onError: function (data) {
    var message = "Failed to create the user";
    var res = data.responseJSON;
    if (res.message) {
      message = data.responseJSON.message;
    }
    if (res.errors) {
      this.setState({
        errors: res.errors,
      });
    }
  },
  _onChange: function (e) {
    var state = {};
    state[e.target.name] = $.trim(e.target.value);
    this.setState(state);
  },
  _validate: function () {
    var errors = {};
    if (this.state.username == "") {
      errors.username = "Username is required";
    }
    if (this.state.email == "") {
      errors.email = "Email is required";
    }
    if (this.state.password == "") {
      errors.password = "Password is required";
    }
    return errors;
  },
  _formGroupClass: function (field) {
    var className = "form-group ";
    if (field) {
      className += " has-error";
    }
    return className;
  },
  render: function () {
    return (
      <div className="form-container">
        <form ref="user_form" onSubmit={this._onSubmit}>
          <div className={this._formGroupClass(this.state.errors.username)}>
            <label className="control-label" for="username">
              Username{" "}
            </label>
            <input
              name="username"
              ref="username"
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              onChange={this._onChange}
            />
            <span className="help-block">{this.state.errors.username}</span>
          </div>
          <div className={this._formGroupClass(this.state.errors.email)}>
            <label className="control-label" for="email">
              Email address
            </label>
            <input
              name="email"
              ref="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={this._onChange}
            />
            <span className="help-block">{this.state.errors.email}</span>
          </div>
          <div className={this._formGroupClass(this.state.errors.password)}>
            <label className="control-label" for="password">
              Password
            </label>
            <input
              name="password"
              ref="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this._onChange}
            />
            <span className="help-block">{this.state.errors.password}</span>
          </div>
          <button
            type="submit"
            className="btn btn-default"
            disabled={this.state.loading}
          >
            Create
            <App.Loading loading={this.state.loading} />
          </button>
        </form>
      </div>
    );
  },
});
```

So in the above component, I save the value entered in the text boxes into the `state` and validate which submiting the form. Once I validation is success then I initialte an ajax request. In the `beforeSend` of I set the `loading` state to `true` and whether its fail or success I set the loading state to `false`. So when the loading state is `true` it will render the loading component with [fontawesome](http://fontawesome.io/) CSS classes.

I extracted the loading component to reuse as much as I can.

```js
App.Loading = React.createClass({
  render: function () {
    if (!this.props.loading) {
      return <span></span>;
    }
    return <span className="fa-spinner fa-spin"></span>;
  },
});
```

Now I can render this `App.Users.Add` component anywhere.

```js
React.render(<App.Users.Add />, document.getElementById("container"));
```

I store all the validation errors in the state as well. So when ever the error occurs the reactjs will take care of rending it.
