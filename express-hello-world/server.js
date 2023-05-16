import express from 'express';
const app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  res.send('Hi I am server!');
});
app.listen(8080, () => {
  console.log('server listening on port 8080');
});
