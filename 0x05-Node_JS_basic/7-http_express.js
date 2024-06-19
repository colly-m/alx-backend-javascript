const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const databaseFile = process.argv[2];
  try {
    const { students, csStudents, sweStudents } = await countStudents(databaseFile);
    let response = `This is the list of our students\n`;
    response += `Number of students: ${students.length}\n`;
    response += `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`;
    response += `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}\n`;
    res.send(response);
  } catch (error) {
    res.send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
