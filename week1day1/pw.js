var pass = process.argv.slice(2).toString();
var find = ["a", "e", "o", "l"];
var replace = ["4", "3", "0", "1"];
for (i = 0; i < pass.length; i++){
  for (c = 0; c < find.length; c++){
    if (pass[i] == find[c]){
      pass = pass.replace(pass[i], replace[c]);
    }
  }
}
console.log(pass);
