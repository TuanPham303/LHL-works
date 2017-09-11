function sort(arr){
  return arr.sort(function(a, b){
    return a - b;
  });
}
console.log(sort([1, 10, 2, 5, 9]));