import { readFile } from 'node:fs/promises';

try {
  const input = process.argv[2];

  const filePath = new URL(input, import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (error) {
  console.error(error.message);
}
