# node-fs-readfile-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a directory?
  In Node.js, a directory refers to a folder on a file system. Node.js provides a built-in module called fs (file system) that enables developers to interact with the file system, including creating, reading, updating, and deleting files and directories.

- What is a relative file path?
  A relative file path is a file path that is defined relative to the current working directory of the application or the current file being executed. It specifies the location of a file or a directory relative to the location of the current working directory or the current file.

- What is an absolute file path?
  An absolute file path is a file path that provides the complete path to a file or a directory from the root directory of the file system. It specifies the location of a file or a directory in relation to the root of the file system.

- What module does Node.js include for manipulating the file system?

Node.js includes a built-in module called fs (short for "file system") that provides methods for working with the file system, including reading and writing files, creating and deleting directories, and more. This module is designed to be similar to the standard POSIX functions for working with the file system in Unix-like operating systems.
methods in the fs module include:

fs.readFile(): reads the contents of a file
fs.writeFile(): writes data to a file, overwriting existing contents
fs.appendFile(): appends data to the end of a file
fs.existsSync(): checks if a file or directory exists
fs.mkdir(): creates a new directory
fs.rmdir(): removes a directory
fs.readdir(): reads the contents of a directory
fs.stat(): gets information about a file or directory, such as its size or last modified time
These are just a few examples of the many methods provided by the fs module for manipulating the file system in Node.js.

- What method is available in the `node:fs` module for reading data from a file?
  fs.readFile(): This method reads the contents of a file asynchronously and returns the contents as a buffer or a string, depending on the encoding specified. It takes the file path as its first argument and a callback function as its second argument. The callback function is called with two arguments: an error object (if an error occurred) and the file contents.

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
