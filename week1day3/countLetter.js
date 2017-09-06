function countLetters(string){
  var output = {};
  for (var char in string){
    if (/\w/.test(string[char])) {
      if (output[string[char]] === undefined){
        output[string[char]] = 0;
      } 
      output[string[char]]++;
    }
  }
  return output;
}
console.log(countLetters("lighthouse in the house"));