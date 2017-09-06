// 4. Program to say amount in words - like Seventeen only, Seven Hundred only
// try to put everything in 1 object and have 1 function to do all the jobs
var num = {
  "0": "zero",
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine"
};
var dec = {
  '1': 'teen',
  '2': 'ty',
  '3': 'hundreds'
};

var input = process.argv[2].toString();

var word = '';

function hundreds(){
  if (input.length > 2) {
    return num[Math.floor(input / Math.pow(10, (input.length - 1)))] + ' ' + dec[input.length] + ' ';
  }
  return '';
}

function ten(){
  num[5] = "fif";
  num[3] = "thir";
  num[2] = "twen";
  var remain = input % 100;
  if (remain < 20 && remain >= 10) {
    if (remain === 10) {
      return "ten";
    }
    if (remain === 11) {
      return "eleven";
    }
    if (remain === 12) {
      return "twelve";
    }
    return num[remain % Math.pow(10, (remain.toString().length - 1))] + dec[remain.toString().length - 1];
  } 
  if (remain < 10){
    return '';
  } 
  return num[Math.floor(remain / Math.pow(10, (remain.toString().length - 1)))] + dec[remain.toString().length] + ' ';
}

function one(){
  num[5] = "five";
  num[3] = "three";
  num[2] = "two";
  var remain10 = input % 100;
  var remain = input % 10;
  if (remain10 > 20) {
    return num[remain];  
  } 
  return '';
}
/*if(input.length !== 1){
  num[0] = '';
  word = hundreds() + ten() + one();
}*/
word = hundreds() + ten() + one();
console.log(word);
