/*function countLetters(string){
  var output = {};
  var strArray = string.split('');
  for (var char in strArray){
    if (/\w/.test(strArray[char]) && output[strArray[char]] !== undefined){
      output[strArray[char]].push((strArray.indexOf(strArray[char])));
      strArray[char] = ' ';
    }
    if (/\w/.test(strArray[char]) && output[strArray[char]] === undefined){
      output[strArray[char]] = [];
      output[strArray[char]].push((strArray.indexOf(strArray[char])));
      strArray[char] = ' ';
    } 
  }
  return output;
}*/

// REFACTORING

function countLetters(string){
  var output = {};
  for (var i = 0; i < string.length; i++){
    var char = string[i];
    if(/\w/.test(char)){
      if(!output[char]){
        output[char] = [];
      }
      output[char].push(i);
    } 
  }
  return output;
}


console.log(countLetters("lighthouse in the house"));

