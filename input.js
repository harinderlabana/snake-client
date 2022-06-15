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
const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
  // console.log(data);

  if (data === 'w') {
    setInterval(() => {
      connection.write('Move: up');
    }, 50);
  }
  if (data === 'a') {
    setInterval(() => {
      connection.write('Move: left');
    }, 50);
  }
  if (data === 's') {
    setInterval(() => {
      connection.write('Move: down');
    }, 50);
  }
  if (data === 'd') {
    setInterval(() => {
      connection.write('Move: right');
    }, 50);
  }
};

module.exports = setupInput;
