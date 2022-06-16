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
  } else if (data === 'w') {
    connection.write('Move: up');
  } else if (data === 'a') {
    connection.write('Move: left');
  } else if (data === 's') {
    connection.write('Move: down');
  } else if (data === 'd') {
    connection.write('Move: right');
  } else if (data === '1') {
    connection.write('Say: Watch out!');
  } else if (data === '2') {
    connection.write('Say: Good game!');
  }
};

module.exports = setupInput;
