<!--


---
 'Jest : Shared tests'
excerpt: 'Explains how to write shared tests in jest'
date: 2018-07-26 00:05:00 IST
updated: 2018-07-26 00:05:00 IST
categories: jest
tags: jest, testing
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

We are tend to follow `DRY` while writing business logic, like we tend to move the block into a function, component etc. But I didn't see much people follow `DRY` while writing tests. In this post I will try explain how to share tests cases.

Consider we have two React components which has similar functionality. First let see `FormA` which has 2 fields `name` & `age` which uses internal state and on submit of the form it will validates the input. Nice and simple component.

```jsx
import React, {Component} from 'react';

class FormA extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
      fields: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({errors: {}});
    let errors = {};
    if (!this.state.fields.name) {
      errors = {name: 'Name is Required'};
    }
    if (!this.state.fields.age) {
      errors = {...errors, age: 'Age is Required'};
    }
    this.setState({errors});
  }

  onChange(e) {
    const fields = {...this.state.fields, [e.target.name]: e.target.value};
    this.setState({fields});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Name </label>
          <input
            type="text"
            name="name"
            value={this.state.fields.name}
            onChange={this.onChange}
          />
          <div className="error-message">{this.state.errors.name}</div>
          <label>Age </label>
          <input
            type="text"
            name="age"
            value={this.state.fields.age}
            onChange={this.onChange}
          />
          <div className="error-message">{this.state.errors.age}</div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
```

Now let's write some tests to make sure our validation is working fine and error messages are rendering in UI. Also, we can add another test suite to make sure whether the input updates are updating the correct fields in state.

```js
import React from 'react';
import {shallow} from 'enzyme';
import fakeEvent from 'fake-event';

describe('<FormA />', () => {
  beforeEach(() => {
    this.commonProps = {};
  });

  describe('render error messages', () => {
    test('render name error message', () => {
      const component = shallow(<FormA {...this.commonProps} />);
      component.setState({fields: {age: 12}});
      component.find('button').simulate('click');
      component.update();
      expect(component.text()).toEqual(
        expec.stringContaining('Name is Required')
      );
    });

    test('render age error message', () => {
      const component = shallow(<FormA {...this.commonProps} />);
      component.setState({fields: {name: 'Name'}});
      component.find('button').simulate('click');
      component.update();
      expect(component.text()).toEqual(
        expec.stringContaining('Age is Required')
      );
    });
  });

  describe('change events update states', () => {
    test('update name state', () => {
      const component = shallow(<Form {...this.commonProps} />);
      component
        .find('input[name="name"]')
        .simulate('change', fakeEvent({target: {name: 'name', value: 'Name'}}));
      expect(component.state('fields').name).toEqual('Name');
    });

    test('update age state', () => {
      const component = shallow(<Form {...this.commonProps} />);
      component
        .find('input[name="age"]')
        .simulate('change', fakeEvent({target: {name: 'age', value: 20}}));
      expect(component.state('fields').age).toEqual(20);
    });
  });
});
```

Let's run the tests.  
Hooray. All are green. 🕺

After a while we get another requirement which leads to a new component `FormB`.  
`FormA` and `FormB` component differs only on the `gender` field. We already have test cases for `FormA` and considering to write for `FormB`. We can easily duplicate the `FormA` tests and add tests for the gender field. Now we have test coverage for both components.

Below are the changes for `FormB` component

```jsx
// FormB.js
class FormB extends Component

  onSubmit() {
    // ...
    if (!this.state.fields.gender) {
      errors = {...errors, gender: "Gender is Required" };
    }
    // ...
  }

  render() {
    // ...

    <label>Gender </label>
    <input type="text" name="gender" value={this.state.fields.gender} onChange={this.onChange} />
    <div className="error-message">{this.state.errors.gender}</div>
    <button type="submit">Submit</button>

    // ...
  }
}
```

and the tests for gender field.

```js
// FormB.test.js

// test cases from above example

test('render age error message', () => {
  const component = shallow(<FormB {...this.commonProps} />);
  component.setState({fields: {name: 'Name', age: 12}});
  component.find('form').simulate('submit', fakeEvent());
  expect(component.text()).toEqual(
    expect.stringContaining('Gender is Required')
  );
});

describe('change events update states', () => {
  // test cases from aboove example

  test('update Gender state', () => {
    const component = shallow(<FormB {...this.commonProps} />);
    component
      .find('input[name="gender"]')
      .simulate('change', fakeEvent({target: {name: 'gender', value: 'male'}}));
    expect(component.state('fields').gender).toEqual('male');
  });
});
```

Let's run the tests again.  
All looks fine and tests are back on green.

But when we look there are too much duplication in the test cases. Can we do better by `DRY` principle and sharing tests between these two components?

# <a class="anchor" name="refactor-to-share-tests" href="#refactor-to-share-tests"><i class="anchor-icon"></i></a>Refactor to share tests

Lets start with creating a directory called `test/shared` and add file `shouldBehaveLikeForm.js`. All the shared cases for this Form will go into this.
When we go back and check the tests we can see there are two test suits cases which can be shared between these components.

Lets take the rendering errors first.

```js
// shouldBehaveLikeForm.js
import React from 'react';
import {shallow} from 'enzyme';

export const commonFormValidation = function(Form) {
  test('render name error message', () => {
    const component = shallow(<Form {...this.commonProps} />);
    component.setState({fields: {age: 12, gender: 'male'}});
    component.find('form').simulate('submit', fakeEvent());
    expect(component.text()).toEqual(
      expect.stringContaining('Name is Required')
    );
  });

  test('render age error message', () => {
    const component = shallow(<Form {...this.commonProps} />);
    component.setState({fields: {name: 'Name', gender: 'male'}});
    component.find('form').simulate('submit', fakeEvent());
    expect(component.text()).toEqual(
      expect.stringContaining('Age is Required')
    );
  });
};
```

we will export the `commonFormValidation` from `shouldBehaveLikeForm.js` with the two test cases for rendering error message. Now let go back to `FormA.test.js` and make necessary changes to make use of this `commonFormValidation`.

```js
import FormA from '../FormA';
import {commonFormValidation} from '../test/shared/shouldBehaveLikeForm';

describe('<FormA />', () => {
  beforeEach(() => {
    this.commonProps = {};
  });

  describe('render error messages', () => {
    commonFormValidation.bind(this)(FormA);
  });

  // tests cases for onChange
});
```

Now use the same `commonFormValidation` in `FormB.test.js`

```js
import React from 'react';
import {shallow} from 'enzyme';
import fakeEvent from 'fake-event';

import FormB from '../FormB';
import {commonFormValidation} from '../test/shared/shouldBehaveLikeForm';

describe('<FormB />', () => {
  beforeEach(() => {
    this.commonProps = {};
  });

  describe('render error messages', () => {
    commonFormValidation.bind(this)(FormB);

    test('render age error message', () => {
      const component = shallow(<FormB {...this.commonProps} />);
      component.setState({fields: {name: 'Name', age: 12}});
      component.find('form').simulate('submit', fakeEvent());
      expect(component.text()).toEqual(
        expect.stringContaining('Gender is Required')
      );
    });
  });

  // tests cases for onChange
});
```

Same as above lets create another function `commonFormOnUpdate` in `shouldBehaveLikeForm.js` which has the common test cases for `onChange`.

```js
// shouldBehaveLikeForm.js
import React from 'react';
import {shallow} from 'enzyme';

export const commonFormOnUpdate = function(Form) {
  test('update name state', () => {
    const component = shallow(<Form {...this.commonProps} />);
    component
      .find('input[name="name"]')
      .simulate('change', fakeEvent({target: {name: 'name', value: 'Name'}}));
    expect(component.state('fields').name).toEqual('Name');
  });

  test('update age state', () => {
    const component = shallow(<Form {...this.commonProps} />);
    component
      .find('input[name="age"]')
      .simulate('change', fakeEvent({target: {name: 'age', value: 20}}));
    expect(component.state('fields').age).toEqual(20);
  });
};
```

and can be used in same way.

```js
// FormA.test.js
import FormA from '../FormA';
import {
  commonFormValidation,
  commonFormOnUpdate,
} from '../test/shared/shouldBehaveLikeForm';

describe('<FormA />', () => {
  beforeEach(() => {
    this.commonProps = {};
  });

  describe('render error messages', () => {
    commonFormValidation.bind(this)(FormA);
  });

  describe('change events update states', () => {
    commonFormOnUpdate.bind(this)(FormA);
  });
});
```

same shared test will be used in `FormB.test.js`.

```js
// FormB.test.js

import React from 'react';
import {shallow} from 'enzyme';
import fakeEvent from 'fake-event';

import FormB from '../FormB';
import {
  commonFormValidation,
  commonFormOnUpdate,
} from '../test/shared/shouldBehaveLikeForm';

describe('<FormB />', () => {
  beforeEach(() => {
    this.commonProps = {};
  });

  describe('render error messages', () => {
    commonFormValidation.bind(this)(FormB);

    test('render age error message', () => {
      const component = shallow(<FormB {...this.commonProps} />);
      component.setState({fields: {name: 'Name', age: 12}});
      component.find('form').simulate('submit', fakeEvent());
      expect(component.text()).toEqual(
        expect.stringContaining('Gender is Required')
      );
    });
  });

  describe('change events update states', () => {
    commonFormOnUpdate.bind(this)(FormB);

    test('update Gender state', () => {
      const component = shallow(<FormB {...this.commonProps} />);
      component
        .find('input[name="gender"]')
        .simulate(
          'change',
          fakeEvent({target: {name: 'gender', value: 'male'}})
        );
      expect(component.state('fields').gender).toEqual('male');
    });
  });
});
```

Finally, all the tests are green again. 💃

![shared tests running][shared_tests]

# <a class="anchor" name="this-is-undefined-error" href="#this-is-undefined-error"><i class="anchor-icon"></i></a>`this` is undefined error

One issue I face during the shared tests are `this` is undefined error, especially when I need to use the `this.commonProps` in the shared tests.
This can be fixed in two ways.

1.  Avoid using `arrow` function for outer most `describe`

    replace `describe('<FormB />', () => {` with `describe('<FormB />', function () {`

2.  Use `{ "allowTopLevelThis": true }` as option for `transform-es2015-modules-commonjs` in **.babelrc**

```json
{
  "presets": ["react"],
  "plugins": [
    [
      "transform-es2015-modules-commonjs",
      {
        "allowTopLevelThis": true
      }
    ]
  ]
}
```

The example code is available on [gitlab.com/revathskumar/jest-shared-test-example][gitlab] and see the commit of refactoring part as nice [gitlab diff][gitlab_diff].

    Versions of Language/packages used in this post.

    | Library/Language | Version |
    | ---------------- |---------|
    |      react       |  16.4.1 |
    |      jest        |  23.3.0 |
    |    babel-jest    |  23.2.0 |

More details on the packages and version on [package.json][package_json]

[shared_tests]: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/jest-shared-tests/jest-shared-example-2.png
[gitlab]: https://gitlab.com/revathskumar/jest-shared-test-example
[gitlab_diff]: https://gitlab.com/revathskumar/jest-shared-test-example/commit/d9031be27747cd60cc2ee70282d52c9f7f45345c
[package_json]: https://gitlab.com/revathskumar/jest-shared-test-example/blob/3721550f041652022de656279c90817496bba79e/package.json
