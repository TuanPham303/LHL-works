var words = process.argv.slice(2);
for(i = 0; i < words.length; i++){
  words[i] = words[i].split("").reverse().join("");
  console.log(words[i]);
}
