import express from 'express';

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
  274: {
    id: 274,
    name: 'Tommy Jonny',
    course: 'Java',
    score: 92,
  },
};

const app = express();

app.get('/api/grades', (req, res) => {
  const data = [];
  for (const grade in grades) {
    data.push(grades[grade]);
  }
  res.json(data);
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = req.params.gradeId;
  if (!grades[id]) {
    res.sendStatus(404);
  } else {
    delete grades[id];
    res.json(grades).sendStatus(404);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
