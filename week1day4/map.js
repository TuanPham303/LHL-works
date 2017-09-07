function map(arr, cb){
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    newArr.push(cb(arr[i]));
  }
  return newArr;
}

var words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));