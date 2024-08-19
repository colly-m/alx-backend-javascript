const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      
      if (lines.length === 0) {
        throw new Error('Cannot load the database');
      }

      const students = lines.slice(1).filter(line => line.trim() !== '');
      console.log(`Number of students: ${students.length}`);

      const fields = {};

      students.forEach((student) => {
        const [firstname, lastname, age, field] = student.split(',');

        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      for (const [field, firstnames] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
