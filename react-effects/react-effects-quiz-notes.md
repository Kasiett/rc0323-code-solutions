# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When it is first rendered, then appended to the DOM to shows up on the webpage.
- What is a React Effect?
  A react effect lets us perform side effects in function components based on non-react
  components/systems.
- When should you use an Effect and when should you not use an Effect?
  Tracking element visibility, triggering an animation, can be used for a modal.
  If there is no external system involved or your effect is based on another react state/component,
  you shouldn't use effects.
- When do Effects run?
  It runs after the first render and after every update of the dependencies.
- What function is used to declare an Effect?
  useEffect() that takes a function as a parameter.
- What are Effect dependencies and how do you declare them?
  Dependencies are the second parameter, though optional, that can determine when the
  side effect runs.
- Why would you want to clean up from an Effect?
  Sometimes, it needs to revert the last effect that ran before running the next render
  to ensure it runs as intended.
- How do you clean up from an Effect?
  You have to add a cleanup function respective to the first effect.
- When does the cleanup function run?
  When the dependencies change, so pretty much before every time useEffect is called aside from the first time.

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
