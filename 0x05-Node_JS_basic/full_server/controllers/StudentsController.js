const { readDatabase } = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase(process.argv[2]);
            let responseText = 'This is the list of our students\n';

            const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

            for (const field of fields) {
                const studentList = students[field];
                responseText += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
            }

            res.status(200).send(responseText.trim());
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(process.argv[2]);
            const studentList = students[major] || [];

            res.status(200).send(`List: ${studentList.join(', ')}`);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;
