var numDice = Number(process.argv[2]);

function rollDice(num) {
  var diceRolls = '';
  for (var i = 0; i < num; i++) {
    diceRolls += (Math.round(Math.random()*6 + 0.5)) + ', ';
  }
  return diceRolls.slice(0,-2);
}
console.log('Rolled ' + numDice + ' dice: ' + rollDice(numDice));