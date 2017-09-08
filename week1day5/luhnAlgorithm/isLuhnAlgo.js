function check(id){
  var idArray = id.toString().split('').map(function(ele){
    return Number(ele);
  });
  for (var i = idArray.length - 2; i >= 0; i -= 2) {
    idArray[i] *= 2;
    if (idArray[i] >= 10) {
      idArray[i] -= 9;
    }
  }
  var sum = idArray.reduce(function(sum, ele){
    return sum + ele;
  });
  return sum % 10 === 0 ? true : false;
}

module.exports = check;