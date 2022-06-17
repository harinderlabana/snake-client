const net = require('net');
const {IP, PORT, playerName} = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  //print connection message and send Name to server
  conn.on('connect', () => {
    console.log('Connection established.');
    conn.write(playerName);
  });

  //listening for data being broadcasted across server
  conn.on('data', (data) => {
    console.log('Oops: ', data);
    process.exit();
  });

  return conn;
};

module.exports = connect;
