var countdownGenerator = function (x) {
  var a = x + 1;
  return function(){
    a--;
    if (a > 0){
      console.log('T-minus ' + a + '...');
    }
    if (a === 0){
      console.log('Blast Off!');
    }
    if (a < 0){
      console.log('Rocket already gine, bub!');
    }
  };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!