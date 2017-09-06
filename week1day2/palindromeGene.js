// 3. Program to generate  palindromes - iii

// console.log(Math.random().toString(36).substring(2,3));
function paliGene(length){
  var pali = [];
  var mid = Math.floor(length/2);
  for(var i = 0; i <= mid; i++){
    var ranChar = Math.random().toString(36).substring(2,3);
    pali[i] = ranChar;
    pali[length - i - 1] = ranChar;
  }
  return pali.join('');
}
console.log(paliGene(10));