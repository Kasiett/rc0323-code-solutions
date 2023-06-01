# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is React?

- What is a React component?
  A component is a piece of the UI (user interface) that has its own logic and appearance.
  A component can be as small as a button, or as large as an entire page.

- How do you mount a React app (root component) to the DOM?
  you have to make sure you have root component (App.js) next we import it to index.js in our root directory , we import reactDOM we call it method createRoot with one arg --> get el by Id #root which is in index.html.
  next we render root.render method and pass our App.
  Examp:
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
  );

- What are some other popular frontend frameworks?
  Angular, VUE , JQuery.

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
