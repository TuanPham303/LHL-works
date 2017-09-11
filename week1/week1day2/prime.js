// 1. Program to print all the prime numbers from 1 to 500

function isPrime(num){
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return num !== 1;
}

for (var i = 1; i <= 500; i++) {
  if(isPrime(i)){
    console.log(i);
  } 
}