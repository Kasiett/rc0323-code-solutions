import { readFile, writeFile } from 'node:fs/promises';

// capture the operation and arguments in the command line
const [, , operation, ...args] = process.argv;

// function that is called in try catch when page loads
async function processArguments() {
  // switch based on user operation
  switch (operation) {
    case 'read':
      return readNotes();
    case 'create':
      return createNote(args[0]);
    case 'update':
      return updateNote(args[0], args[1]);
    case 'delete':
      return deleteNote(args[0]);
    default:
      throw new Error(`Unrecognized operation: ${operation}`);
  }
}

try {
  await processArguments();
} catch (err) {
  console.log(err.message);
}

async function updateNote(key, value) {
  const data = await readFile('data.json', 'utf-8');
  const res = JSON.parse(data);
  res.notes[key] = value;
  await writeFile('data.json', JSON.stringify(res, null, 2));
}

async function deleteNote(noteId) {
  const data = await readFile('data.json', 'utf-8');
  const res = JSON.parse(data);
  delete res.notes[noteId];
  await writeFile('data.json', JSON.stringify(res, null, 2));
}

async function createNote(newNote) {
  const data = await readFile('data.json', 'utf-8');
  const res = JSON.parse(data);
  res.notes[res.nextId] = newNote;
  res.nextId++;
  await writeFile('data.json', JSON.stringify(res, null, 2));
}

async function readNotes() {
  const data = await readFile('data.json', 'utf-8');
  const res = JSON.parse(data);
  for (const note in res.notes) {
    console.log(`${note}: ${res.notes[note]}\n`);
  }
}
