// All of the following are ways that template literals are *NOT* `strictly better` than " or ' delimited strings
// RE: https://ponyfoo.com/articles/template-literals-strictly-better-strings

// valid syntax, but doesn't turn on strict mode
`use strict`;

// invalid syntax
const x = { `hello world`: 42 };

// invalid syntax
const { `hello world`: a } = x;

// invalid syntax
import foo from `foo.js`;