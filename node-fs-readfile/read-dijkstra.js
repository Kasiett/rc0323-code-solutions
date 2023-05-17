import { readFile } from 'node:fs/promises';
try {
  const content = await readFile('dijkstra.txt', 'utf-8');
  console.log(content);
} catch (error) {
  console.log(error);
}
