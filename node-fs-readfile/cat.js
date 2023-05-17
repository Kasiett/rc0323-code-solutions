import { readFile } from 'node:fs/promises';
const [, , ...filenames] = process.argv;
console.log(filenames);

// [ Promise { <pending> }, Promise { <pending> }, Promise { <pending> } ]
const promises = filenames.map((filename) => readFile(filename, 'utf-8'));
console.log(promises);
try {
  const files = await Promise.all(promises);
  console.log(files.join('/n'));
} catch (error) {
  console.error('Error reading files ', error);
  process.exit(1);
}
