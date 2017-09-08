function maxProfit (arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var c = i + 1; c < arr.length; c++) {
      max = arr[c] - arr[i] > max ? arr[c] - arr[i] : max;
    }
  }
  return max;
}

module.exports = maxProfit;
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));