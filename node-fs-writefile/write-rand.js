import { writeFile } from 'node:fs/promises';

const random = Math.random();

try {
  await writeFile('random.txt', random + '\n', 'utf-8');
} catch (error) {
  console.error(error);
  process.exit(1);
}
