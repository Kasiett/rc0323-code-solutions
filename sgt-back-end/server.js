import pg from 'pg';
import express from 'express';

const app = express();
app.use(express.json());

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    // validate the "inputs" FIRST
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      // there is no way that a matching grade could be found
      // so we immediately respond to the client and STOP the code
      // with a return statement
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
      return;
    }
    // Ok, the input is reasonable, time to query the database.
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;
    // 👆 We are NOT putting the user input directly into our query
    const params = [gradeId];
    // 👆 instead, we are sending the user input in a separate array.
    /*
     * Review the documentation on parameterized queries here:
     * https://node-postgres.com/features/queries#parameterized-query
     * You'll be using this technique to prevent SQL injection attacks.
     *
     * https://www.youtube.com/watch?v=_jKylhJtPmI
     */
    const result = await db.query(sql, params);
    // The query succeeded, even if nothing was found.
    // The Result object will include an array of rows.
    // See the docs on results: https://node-postgres.com/apis/result
    const grade = result.rows[0];
    if (grade) {
      // the specific grade was found in the database, yay!
      res.json(grade);
    } else {
      // We could not have known ahead of time without actually querying the db,
      // but the specific grade being requested was not found in the database.
      res
        .status(404)
        .json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    // the query failed for some reason
    // possibly due to a syntax error in the SQL statement
    // print the error to STDERR (the terminal) for debugging purposes
    console.error(err);
    // respond to the client with a generic 500 error message
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
      select *
        from "grades"`;

    const result = await db.query(sql);

    const grades = result.rows;

    res.json(grades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.post('/api/grades', async (req, res) => {
  const { name, course } = req.body;
  const score = Number(req.body.score);
  try {
    if (!name || !course || Number.isNaN(score)) {
      res.status(400).json({
        error: 'name, course, score are required fields ',
      });
      return;
    }
    if (score > 100 || score < 0) {
      res.status(400).json({ error: 'score must be between 0 and 100...' });
      return;
    } else {
      const sql = `insert into "grades" ("name", "course", "score")
                 values ($1, $2, $3)`;
      const newGrade = [name, course, score];
      await db.query(sql, newGrade);

      res.status(201).json('Grade added...');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const score = Number(req.body.score);
  const { name, course } = req.body;
  try {
    if (!Number.isInteger(gradeId) || gradeId < 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
    }
    if (!name || !course || Number.isNaN(score)) {
      res
        .status(400)
        .json({ error: 'name, course, and score are required fields.' });
    }
    if (score < 0 || score > 100) {
      res.status(400).json({ error: 'score must be between 0 and 100...' });
    }

    const sql = `update "grades"
             set "name" = $1,
                 "course" = $2,
                 "score" = $3
            where  "gradeId" = $4`;
    const data = [name, course, score, gradeId];

    const result = await db.query(sql, data);

    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ error: `cannot find grade with "gradeId ${gradeId}` });
    } else {
      res.status(200).json('Updated successfully...');
    }
  } catch (error) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);

    if (!Number.isInteger(gradeId) || gradeId < 0) {
      res.status(400).json({ error: '"gradeId" must be a positive integer' });
    }
    const sql = `delete
                    from "grades"
                    where "gradeId" = $1
                    returning *`;

    const data = [gradeId];
    const result = await db.query(sql, data);

    if (result.rowCount === 0) {
      res
        .status(404)
        .json({ error: `cannot find grade with "gradeId ${gradeId}` });
    } else {
      res.status(204).json('Grade deleted.');
    }
  } catch (error) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.listen(8080, (req, res) => {
  console.log('listening on port 8080');
});
