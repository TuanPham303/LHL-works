var inputs = process.argv.slice(2);
for(i = 0; i < inputs.length; i++){
  console.log(inputs[i].slice(1) + inputs[i].slice(0, 1) + "ay");
}