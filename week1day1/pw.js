/*var pass = process.argv.slice(2).toString();

var find = ["a", "e", "o", "l"];
var replace = ["4", "3", "0", "1"];

for (var i = 0; i < pass.length; i++){
  for (var c = 0; c < find.length; c++){
    if (pass[i] === find[c]){
      pass = pass.replace(pass[i], replace[c]);
    }
  }
}
console.log(pass);*/


// -------using object
 
var pass = process.argv.slice(2).toString();

var replace = {
  "a": "4",
  "e": "3",
  "o": "0",
  "l": "1"
};

for (var i = 0; i < pass.length; i++) {
  var letter = pass[i];
  if(Object.keys(replace).indexOf(letter) !== -1){
    pass = pass.replace(pass[i], replace[letter]);
  }
}
console.log(pass);