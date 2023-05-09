# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.
  The logical OR (||) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true. It is typically used with boolean (logical) values. When it is, it returns a Boolean value. However, the || operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

Short-circuit evaluation" is a behavior exhibited by the && (logical AND) and || (logical OR) operators in JavaScript where the second operand may not be evaluated if the result of the expression can be determined by evaluating only the first operand.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The ?? (nullish coalescing) operator allows you to provide a default value for a variable if its value only null or undefined

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The ?: (ternary) operator is a shorthand way of writing an if/else statement in JavaScript. The ?: operator allows you to write a single line of code that performs a conditional check and returns one of two values based on the result of the check.

- What is the `?.` (optional chaining) operator? When would you use it?

The ?. (optional chaining) operator allows you to safely access nested properties or methods of an object without causing an error if one of the intermediate properties or methods is null or undefined.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The ... (spread) syntax is a JavaScript feature that allows you to expand an iterable object (such as an array or an object) into multiple elements, either in a function call or when creating a new array or object.

- What data types can be spread into an array? Into an object?

In JavaScript, any iterable data type can be spread into an array using the ... (spread) syntax. This includes arrays, strings, and objects that have a [Symbol.iterator] method.

- How does spread syntax differ from rest syntax?
  The spread syntax is used to spread elements of an iterable (like an array or a string) into another array or object literal.
  The rest syntax, on the other hand, is used to collect multiple arguments or elements into an array or object.
  while the spread syntax is used to spread an iterable into another array or object, the rest syntax is used to collect multiple arguments or elements into an array or object.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
