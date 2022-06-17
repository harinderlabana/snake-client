const IP = 'localhost';
const PORT = 50541;
const playerName = `Name: ${process.argv
  .slice(2)[0]
  .substr(0, 3)
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
