for (var i = 100; i <= 200; i++){
  if(i % 3 === 0 && i % 4 === 0){
    console.log('LoopyLighthouse');
    continue;
  }
  if(i % 3 === 0){
    console.log('Loopy');
    continue;
  } 
  if(i % 4 === 0){
    console.log('Lighthouse');
    continue;
  }
  console.log(i); 
}