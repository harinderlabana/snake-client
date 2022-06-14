const net = require('net');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  //print connection message and send Name to server
  conn.on('connect', () => {
    console.log('Connection established.');
    conn.write('Name: LAB');
  });
  //listening for data being broadcasted across server
  conn.on('data', (data) => {
    console.log('Timeout: ', data);
  });

  return conn;
};

module.exports = connect;
