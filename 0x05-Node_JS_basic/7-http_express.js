/* small HTTP server using http module
 * display Hello Holberton School! when url path is /
 * display This is the list of our students when url path is /students
 * followed by same content in 3-read_file_async.js
 * name of database must be passed aa argument of the program
 */

const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.write('This is the list of our students\n');
      res.end(data);
    })
    .catch((error) => {
      res.write('This is the list of our students\n');
      res.end(`${error.message}`);
    });
});

app.listen(port);

module.exports = app;
