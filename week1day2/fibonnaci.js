// 2. Program to generate a fibonnaci series - 0 1 1 2 3 5 8 13

var fibonnaci = [0, 1];
for(var i = 2; i <= 20; i++){
  var nextNum = 0;
  nextNum = fibonnaci[i - 1] + fibonnaci[i - 2];
  fibonnaci.push(nextNum);
}
console.log(fibonnaci);