/* A program that displays a message when executed
 * A user should be able to input their name on a new line
 * The program shoud display Your name is: INPUT_NAME
 * When the program ends, it should display: This important software is now closing
 */

// display welcome message
console.log('Welcome to Holberton School, what is your name?');

// read user input
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// display closing message
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
