import express from 'express';

const app = express();

let nextId = 1;

const grades = {};
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const newGrade = { id: nextId, ...req.body };
  grades[nextId] = newGrade;
  nextId++;
  res.status(201).json('grade added...');
  console.log(newGrade);
});
app.listen(8080, () => {
  console.log('server is runing...');
});
