const express = require('express');
const students = require('./3-read_file_async');
const { argv } = require('process');
const hostname = '127.0.0.1';
const port = 1245;

const app = express();

app.get('/', (req, res) => {
  res.status(200).set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.status(200).set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  
  try {
    const data = await countStudents(process.argv[2]);
    res.write(`Number of students: ${data.students.length}\n`);
    res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
    res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
  } catch (err) {
    res.write(err.message);
  } finally {
    res.end();
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
