# express-static-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the Express Static middleware?
  It is used to expose a directory or a file to a particular URL so its contents can be publicly accessed
- What does `express.static()` return?
  It returns middleware which is a function.
  It returns a HTTP 404 if it cannot find a file so it returns a status code.
- What are several examples of static files?
  HTML files, images, videos, text files, anything that doesn't change every time it is delivered to users.
- What is a good way to serve application images using Express?
  app.use(express.static('directory-name')) and add the directory with the images.

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
