# Please answer the following questions

1.  In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?

- `it()` tests single functions.
- `describe()` descrtibes a set of functions under a single heading or suite.

2.  What is the point of `Test Driven Development`? What do you think about this approach?

    Test Driven Development is a great system where it allows us to get a better workflow to our codebase in that we save debugging time by only ever writing a piece of production code to pass a specific feature requirment / unit test. this makes a no error codebase from day one. My standpoint on this is that I tend to use TDD on occasion when doing medium to enterprise projects. it is a good practice to get in to when doing embedded systems programming for operating systems and security suites like i used to do for work.

3.  What are `mocks`? What are a good use cases for them?

    Mocks are a way to create a shadow copy of a function in order to test the output. eg; a click event from a button / link can be mocked as we simulate the click via code.

4.  Mention three types of automated tests.

- `Unit Test`
- `Integration Test`
- `code Snapshot`
