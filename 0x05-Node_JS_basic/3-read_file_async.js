/* script that contains function countStudents that accepts path in argument
 * should attepmt to read the database file asynchronously
 * the function should return a Promise
 * logs the number of students in each field and the list with this format:
 * Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 */

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const students = data
        .trim()
        .split('\n')
        .map((student) => student.split(','));
      students.shift();
      const fields = {};

      students.forEach((student) => {
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      });

      console.log(`Number of students: ${students.length}`);

      Object.keys(fields).forEach((field) => {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      });

      resolve();
      });
  });
}

module.exports = countStudents;
