const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2]; // The database file is passed as a command-line argument

const app = http.createServer(async (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        
        try {
            const studentList = await countStudents(database);
            res.end(`This is the list of our students\n${studentList}`);
        } catch (error) {
            res.statusCode = 500;
            res.end('Cannot load the database');
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

module.exports = app;
