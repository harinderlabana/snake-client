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

const handleUserInput = function(data) {
  //handle ctrl + c user input for exiting program
  if (data === '\u0003') {
    process.exit();
  } else {
    //keybinding logic
    for (const key in keyBindings) {
      if (key === data) {
        connection.write(keyBindings[key]);
      }
    }
  }
};

module.exports = setupInput;
