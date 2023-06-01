# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  It lets us pass information from parent to children without having to use props. Also useful if multiple components
  need the same information.
- What values can be stored in context?
  Any kind of values can be stored in context.
- How do you create context and make it available to the components?
  You use the createContext function from react, give it a default value in the parentheses and assign it to a variable.
- How do you access the context values?
  useContext hook.
- When would you use context? (in addition to the best answer: "rarely")
  If multiple children of a parent need the same information or if its relevant to them.
  Also useful for theming, such as dark theme.

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
