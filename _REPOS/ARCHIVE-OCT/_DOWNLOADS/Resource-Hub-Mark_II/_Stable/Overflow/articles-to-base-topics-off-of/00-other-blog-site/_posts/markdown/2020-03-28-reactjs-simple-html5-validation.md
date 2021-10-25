<!--


---
 'ReactJS : simple HTML5 Validation'
excerpt: using HTML5 validation in React app
date: 2020-01-15 00:05:00 IST
updated: 2020-01-15 00:05:00 IST
categories: react
tags: react, html5
---
> Please note this blog post drafted long back and might be outdated. 
> please notify me if you see any issues. 

When I get question like which [validation package][question_tweet] you use in ReactJS, I usually answer saying I don't use any.
I go with [HTML5 validation][answer_tweet] which native to browsers for simple validation and rest of them do it on server side.

In my case it served well enough for all my projects.May be your usecase may vary.

# <a class="anchor" name="why" href="#why"><i class="anchor-icon"></i></a>Why HTML5 validation

Here are the couple of reason why I choose to go with HTML5 validations

* Simple and Easy to implement
* No extra dependency
* Easy to maintain
* No need to learn another package and its api.

# <a class="anchor" name="basic" href="#basic"><i class="anchor-icon"></i></a>Basic implementation

For the basic version, we can use `form` element and bind action to `onSubmit` event.
This is will show validation error in browsers native way.

```jsx
import React, { Component } from "react";

export default class Signup extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    // implement the submit via xhr
  };

  render() {
    return (
      <section>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            // other fields to validate
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
```

Since we are using `submit` event, the `handleSubmit` will get called only when there is no validation error.

{: style="text-align: center"}
![simple HTML5 validation][validation_img]

[![Edit Working example][codesandbox_logo]][codesandbox_app_1]

# <a class="anchor" name="programatically" href="#programatically"><i class="anchor-icon"></i></a>Form submit programatically

Lets consider another situation where we have 2 submit buttons, where one will submit the form like before another one will submit only after some state change. So for second button we have to bind `onClick` event and do submit programatically.

There is a catch in this scenario, when we do the submit programatically the native HTML5 validation won't get triggered.
So we have to check the validation and report it ourselves. We can use `checkValidity` and `reportValidity` methods for this.


```jsx
import React, { Component } from "react";

export default class Signup extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    console.log("submit");
    // implement the submit via xhr
  }

  handleSignup = evt => {
    if (this.form.checkValidity()) {
      this.form.submit();
    } else {
      this.form.reportValidity();
    }
  };

  render() {
    return (
      <section>
        <div className="container">
          <form ref={form => (this.form = form)} onSubmit={this.handleSubmit}>
            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="text"
                  placeholder="Name"
                  required
                  name="username"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user" />
                </span>
              </div>
            </div>
</body>
</html>
$
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="email"
                  placeholder="Email input"
                  required
                  name="email"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope" />
                </span>
              </div>
            </div>
</body>
</html>
$
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
              <div class="control">
                <button
                  type="button"
                  onClick={this.handleSignup}
                  class="button is-warning"
                >
                  Signup
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
```

The `checkValidity` will return true if there is no validation error and [reportValidity][report_validity_mdn] will trigger the `invalid` event on
each invalid child inputs which result in showing errors to user.

[![Edit Working example][codesandbox_logo]][codesandbox_app_2]

# <a class="anchor" name="custom-design" href="#custom-design"><i class="anchor-icon"></i></a>Custom design for Error messages

In the above implementations the issue is error messages will be shown in the native way as per the browser implementation and no as per our custom design.

If we want the custom design to implement, we have to keep get the error messages for each field and keep those in `state`. We can bind callback to [invalid][invalid_mdn] event, to collect error message from all the child inputs. We will use `validationMessage` property on the input element to get the localised message for the validation failure.

```jsx
import React, { Component } from "react";

export default class Signup extends Component {
  state = {
    fields: {},
    fieldErrors: {}
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // implement the submit via xhr
  };

  handleChange = evt => {
    console.log("change :: ", evt.target.name);
    const fieldErrors = {
      ...this.state.fieldErrors,
      [evt.target.name]: ""
    };

    this.setState({ fieldErrors });
  };

  handleInvalid = evt => {
    evt.preventDefault();
    console.log(evt.target.name);
    const fieldErrors = {
      ...this.state.fieldErrors,
      [evt.target.name]: evt.target.validationMessage
    };

    this.setState({ fieldErrors });
  };

  render() {
    const { fieldErrors } = this.state;
    return (
      <section>
        <div className="container">
          <form
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            onInvalid={this.handleInvalid}
          >
            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class={`input ${fieldErrors.username ? "is-danger" : ""}`}
                  type="text"
                  placeholder="Name"
                  required
                  name="username"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user" />
                </span>
                {fieldErrors.username && (
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle" />
                  </span>
                )}
              </div>
              {fieldErrors.username && (
                <p class="help is-danger">{fieldErrors.username}</p>
              )}
            </div>
</body>
</html>
$
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class={`input ${fieldErrors.email ? "is-danger" : ""}`}
                  type="email"
                  placeholder="Email input"
                  required
                  name="email"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope" />
                </span>
                {fieldErrors.email && (
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle" />
                  </span>
                )}
              </div>
              {fieldErrors.email && (
                <p class="help is-danger">{fieldErrors.email}</p>
              )}
            </div>
</body>
</html>
$
            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea
                  class={`textarea ${fieldErrors.message ? "is-danger" : ""}`}
                  placeholder="Textarea"
                  required
                  name="message"
                />
              </div>
              {fieldErrors.message && (
                <p class="help is-danger">{fieldErrors.message}</p>
              )}
            </div>
</body>
</html>
$
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" required name="toc" />
                  I agree to the <a href="#">terms and conditions</a>
                </label>
                {fieldErrors.toc && (
                  <p class="help is-danger">{fieldErrors.toc}</p>
                )}
              </div>
            </div>
</body>
</html>
$
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
```

Even though we are using `onInvalid` on form, it will trigger `handleInvalid` for each invalid field, and the `handleChange` is using to clear the state once some update is done on the field. If you want to set csutom validation message you can read from my other post, [HTML5 : custom validation message][validation_custom_message]

{: style="text-align: center"}
![HTML5 validation][validation_img_gif]

[![Edit Working example][codesandbox_logo]][codesandbox_app_3]

[question_tweet]: https://mobile.twitter.com/vaikoovery/status/1037546561952088064
[answer_tweet]: https://mobile.twitter.com/revathskumar/status/1037571942524440576
[report_validity_mdn]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity
[codesandbox_app_1]: https://codesandbox.io/s/rl63rzvvkm
[codesandbox_app_2]: https://codesandbox.io/s/x9y59x5vmw
[codesandbox_app_3]: https://codesandbox.io/s/pm7vwxw0px
[invalid_mdn]: https://developer.mozilla.org/en-US/docs/Web/Events/invalid
[validation_custom_message]: https://blog.revathskumar.com/2014/12/html5-custom-validation-messages.html
[validation_img]: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/react-html5-validation/html5-validation-2-cropped.png
[validation_img_gif]: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/react-html5-validation/html5-validation-custom-message.gif
[codesandbox_logo]: https://codesandbox.io/static/img/play-codesandbox.svg
