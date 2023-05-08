# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  (parameters) => {
  // function body
  }
  The parentheses are optional if the function has only one parameter. If there are no parameters, it is must to include empty parentheses.

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  the main difference between a concise body and a block body arrow function is that the concise body syntax returns the value of the expression without using an explicit return statement.
  when there is no {} the function implicitly returns the value of the expression following the arrow (=>) symbol. and
  it should be one line function
- When using _concise body syntax_, how do you return an object literal?
  To return an object literal using the concise body syntax in an arrow function, we need to wrap the object literal in parentheses to avoid ambiguity with the function block braces, also to differentiate from regular code block
- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function

  - How many arguments does the arrow function take? ==> it take no parameters

  - What value does it return? ==> 42

  - How many arguments are passed to the function `foo`? one argument is passed

  - What type of argument is passed to the function `foo`? function

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function

  - How many arguments does the arrow function take? ==> take one arg 'y'

  - What value does it return? ==> The arrow function does not return any value explicitly.

  - How many arguments are passed to the function `bar`?==> One argument is passed to the function bar.

  - What type of argument is passed to the function `bar`? ==> function

  - When does the arrow function's code get executed?

- How does the value of `this` differ between standard functions and arrow functions?

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
