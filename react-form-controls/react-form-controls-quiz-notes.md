# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?
  Controlled components are handled by a React component whereas uncontrolled components are handled
  directly by the DOM.
- What are some advantages of using uncontrolled components?
  It seems easier to follow along the process of how the changes are handled. The controlled form
  was more nuanced since it was being handled by state variables. It also lets us have access to whole
  form object and the values inside. Seems a little easier to manipulate.
- What are some advantages of using controlled components?
  It makes sense if you want your UI to rerender. Also makes sense if you want to be able to adjust the input state.
  It also lets us do everything all in React without having to look at the DOM.
- Which style do you prefer?
  I prefer the controlled components because of the ease of access to the submitted data.
- What two props must you pass to an input for it to be "controlled"?
  Value and onChange.
- What are some popular npm packages for creating forms in React?
  React Final Form, Formilk, React Hook Form

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
