import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();
app.use(express.json());

async function getData() {
  const data = await readFile('./data.json', 'utf-8');
  return JSON.parse(data);
}

app.get('/api/notes', async (req, res) => {
  const data = await getData();
  const arrData = [];
  for (const note in data.notes) {
    arrData.push(data.notes[note]);
  }
  res.json(arrData);
});

app.get('/api/notes/:id', async (req, res) => {
  const data = await getData();
  const id = Number(req.params.id);
  if (!id || !Number.isInteger(id) || id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
  res.json(data.notes[id]);
});

app.post('/api/notes', async (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field...' });
  } else {
    const data = await getData();
    const newNote = { id: data.nextId, ...req.body };
    data.notes[data.nextId] = newNote;
    data.nextId++;
    try {
      await writeFile('data.json', JSON.stringify(data, null, 2));
      res.status(201).json(newNote);
    } catch (error) {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  }
});

app.listen(8080, (req, res) => {
  console.log('listening localhost:8080...');
});
