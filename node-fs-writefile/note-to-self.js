import { writeFile } from 'node:fs/promises';

const [, , string] = process.argv;

try {
  await writeFile('note.txt', string + '\n', 'utf-8');
} catch (error) {
  console.error(error);
  process.exit(1);
}
