# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  An action that can be triggered as a result of the user action or system generated event.
- What is an "event handler"? Which component declares the handler?
  An event handler is a function that causes something to happen in response to the event.
  The component that declares the handler is the component that returns the JSX element
  where the event occurs.

- How do you pass an event handler to a React component?
  You place it in the opening tag like an attribute.
- What is the naming convention for event handlers?
  Conventionally, it begins with 'handle'.
- What is an "event handler prop"? Which component declares the prop?
  An event handler prop is an event handler passed in as a prop.
- What are some custom event handler props a component may wish to define?
  If we want to modify the text displayed. Or if we want to be able to customize what
  we want the event handler to do.
  Example: We want the same appearnce but we want the number displayed to be incremented
  or decremented and this can change depending on what event handler we pass in to the component.
- What is the naming convention for custom event handler props?
  They usually start with 'on'.

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
