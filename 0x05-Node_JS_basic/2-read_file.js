/* script that contains function countStudents that accepts path in argument
 * should attepmt to read the database file synchronously
 * logs the number of students in each field and the list with this format:
 * Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 */

const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.length > 0);
  const fields = {};
  const students = {};

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
}

module.exports = countStudents;
