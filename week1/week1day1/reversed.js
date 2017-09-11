var words = process.argv.slice(2);
for(i = 0; i < words.length; i++){
  var reversed = "";
  for(c = words[i].length - 1; c >= 0; c--){
    reversed += words[i][c];
  }
  console.log(reversed);
}
