/* A program that displays a message when executed
 * A user should be able to input their name on a new line
 * The program shoud display Your name is: INPUT_NAME
 * When the program ends, it should display: This important software is now closing
 */

const readline = require('readline');

// create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// display welcome message
console.log('Welcome to Holberton School, what is your name?');

// prompt user for input
rl.question('', (name) => {
  // display user input
  console.log(`Your name is: ${name}`);

  // close readline interface
  rl.close();

  // display closing message
  console.log('This important software is now closing');
});
