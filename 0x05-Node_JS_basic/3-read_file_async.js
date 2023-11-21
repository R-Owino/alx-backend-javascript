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
      const fields = {};
      const students = {};

      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.length > 0);
      lines.shift();
      lines.forEach((line) => {
        const student = line.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
        students[student[3]] = (students[student[3]] || 0) + 1;
      });

      console.log(`Number of students: ${lines.length}`);
      for (const field in students) {
        if (field) {
          console.log(`Number of students in ${field}: ${students[field]}. List: ${fields[field].join(', ')}`);
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
