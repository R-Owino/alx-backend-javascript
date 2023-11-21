/* small HTTP server using http module
 * display Hello Holberton School! when url path is /
 * display This is the list of our students when url path is /students
 * followed by same content in 3-read_file_async.js
 * name of database must be passed aa argument of the program
 */

const http = require('http');
const fs = require('fs');

const port = 1245;

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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(port);

module.exports = app;
