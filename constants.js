const IP = 'localhost';
const PORT = 50541;

// convert player name as command line arg to first 3 letters in uppercase or use default name.
const playerName = `Name: ${(process.argv.slice(2)[0] || 'SNK')
  .substring(0, 3)
  .toUpperCase()}`;

const keyBindings = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  1: 'Say: Watch out!',
  2: 'Say: Good game!',
};

module.exports = {
  IP,
  PORT,
  playerName,
  keyBindings,
};
