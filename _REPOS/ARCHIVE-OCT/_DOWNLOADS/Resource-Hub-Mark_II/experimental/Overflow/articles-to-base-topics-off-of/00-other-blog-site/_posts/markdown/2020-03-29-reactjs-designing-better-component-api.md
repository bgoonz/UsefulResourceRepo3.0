<!--


---
 'ReactJS : designing better component api (UI)'
excerpt: 'ReactJS : designing better component api (UI)'
date: 2020-03-29 00:05:00 IST
updated: 2020-03-29 00:05:00 IST
categories: javascript
tags: reactjs
---
A good api has a huge impact on the productivity of the team and stability of the product.
 
The secret to designing a good component api is the mix of
 
* splitting the components to smaller components
* passing minimal data to the components
* deduce the data from existing data instead of having a separate state.
* have similar api for similar components
* Keep it futuristic and extendable
 
For this post, we will group the components mainly into two categories.
 
1. UI Primitive components
2. Functional / Large UI components (Part 2)
 
# UI Primitive components
 
These are the components usually we put into a component library.
To make the best out of the primitive UI components, the api for these components should focus on being generic and extendable.
These components are going to be used throughout the whole project in different use cases and to compose larger components.
 
To illustrate the good and bad, we take an example of `Button` component which is a wrapper to the HTML element button but with
some of our product specific customisations.
 
# <a class="anchor" name="accept-children" href="#accept-children"><i class="anchor-icon"></i></a> Accept `children`
 
Consider the `Button` component which has only `text` prop which can accept a string. And suddenly an new scenario came up to show the text in bold
or a new icon for the text. Now this requires changes to our `Button` api. we need to accept new parameters to make this possible. First thought process
for a newbie will add a new prop which can say whether to render the text in bold or add a new prop to accept icon url.
 
```jsx
// bad
const Button = ({ text, bold, iconUrl }) => {
 const t = bold ? <strong>{text}</strong> : text;
 const icon = iconUrl ? <image src={iconUrl} /> : null; 
 return <button>{icon} {t}</button>;
}
```
 
But if we use this approach we keep on adding new props for any new formatting changes in future and end up with lots of props.
This will get worse when more customisations like icon placement or other props for the icon.
 
The better solution will be accepting `children`. By this `Button` component doesn't need to make any more changes to add
icons or any style changes to the text.
 
```jsx
// better
const Button = ({ children }) => {
 return <button>{children}</button>;
}
```
 
In this case the developer who uses the button has more control on what and how to render the content/text.
if he needs icon
 
```jsx
<Button>
   <image src={iconUrl} />
   <strong>Hello World</strong>
</Button>
```
 
In case we have too much usage of Button with Icon we can use `Button` to compose and create new component `ButtomWithIcon` for the specific usage.
 
 
# <a class="anchor" name="same-api-as-base" href="#same-api-as-base"><i class="anchor-icon"></i></a> use the same api as the base component
 
To make it easy to use our custom component, we can reuse the same api of the base component for our custom component as well.
This will help our team to get used to the custom component easily since they don't want to learn about new props.
The custom component will look more familiar to them.
 
```jsx
// bad
const Button = ({ children, handleSubmit, enabled }) => {
 return <button disabled={!enabled} onClick={handleSubmit}>{children}</button>;
}
```
 
In the above case, the team has to go and check the documentation or the component to figure out which prop to be used.
The above api can make the team more confused and difficult to use the component.
 
The better approach will be
 
```jsx
// better
const Button = ({children, disabled, onClick}) => {
 return (
   <button disabled={disabled} onClick={onClick}>
     {children}
   </button>
 );
}
```
 
Once we start following the above approach we can extend that into next tip.
 
# <a class="anchor" name="accept-valid-base-props" href="#accept-valid-base-props"><i class="anchor-icon"></i></a> Accept valid base component props
 
Accepting the props which are required only for basic scenarios won't be enough. We can avoid frequent addition of props when the new requirement arises. 
using the [Rest/Spread][rest_operator].
 
```jsx
// bad
const Button = ({ children }) => {
 return <button>{children}</button>;
}
```
 
The new api using `rest` will look like
 
```jsx
// good
const Button = ({ children, ...rest }) => {
 return <button {...rest}>{children}</button>;
}
```
 
<!-- ### Instead of computing inside the component, compute and pass -->
# <a class="anchor" name="avoid-unnecessary-computation" href="#avoid-unnecessary-computation"><i class="anchor-icon"></i></a> Avoid unnecessary computation
 
The primitive UI components should not contain any kind of business logic. Including business logic makes it difficult to use them as generic components.
 
```jsx
// bad
const Button = ({ children, name }) => {
 const disabled = name === "";
 return <button disabled={disabled}>{children}</button>;
}
```
 
The above one has a condition to disable the button when the name is empty. But this won't be the requirement always.
`Button` component doesn't need to know on what basis it should render `disabled`. The condition can be different for each requirement.
 
 ```jsx
// better
const Button = ({ children, disabled, onClick }) => {
 return <button disabled={disabled} onClick={onClick}>{children}</button>;
}
 
<Button disabled={name === ""} />
```
 
We will cover the `Functional / Large UI components` in the next post.
 
 
[rest_operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

