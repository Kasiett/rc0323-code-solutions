import { readFile, writeFile } from 'node:fs/promises';

const [, , ...args] = process.argv;
const fromNote = args[0];
const toNewfile = args[1];

try {
  const copy = await readFile(fromNote, 'utf-8');
  await writeFile(toNewfile, copy, 'utf-8');
} catch (error) {
  console.error(error);
}
