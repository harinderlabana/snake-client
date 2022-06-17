const {keyBindings} = require('./constants');

let connection;

//setup the user input
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

//handle ctrl + c user input for exiting program
const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  } else {
    for (const key in keyBindings) {
      if (key === data) {
        connection.write(keyBindings[key]);
      }
    }
  }
};

module.exports = setupInput;
