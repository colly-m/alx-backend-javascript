const http = require('http');
const fs = require('fs');

const countStudents = (dbPath) => new Promise((resolve, reject) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length === 0) {
      resolve('No students found');
      return;
    }

    const students = lines.slice(1).map((line) => line.split(',')).filter((parts) => parts.length === 4);

    const fields = {};
    students.forEach((student) => {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    });

    let output = `Number of students: ${students.length}\n`;
    for (const [field, names] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    resolve(output.trim());
  });
});

const hostname = 'localhost';
const port = 1245

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbPath = process.argv[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      const studentData = await countStudents(dbPath);
      res.end(studentData);
    } catch (error) {
      res.end(`Cannot load the database: ${error.message}`);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(port, hostname);

module.exports = app;
