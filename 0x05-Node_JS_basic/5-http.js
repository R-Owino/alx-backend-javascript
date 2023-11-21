/* small HTTP server using http module
 * display Hello Holberton School! when url path is /
 * display This is the list of our students when url path is /students
 * followed by same content in 3-read_file_async.js
 * name of database must be passed aa argument of the program
 */

const http = require('http');
const countStudents = require('./3-read_file_async');
const path = require('path');

const port = 1245;

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
