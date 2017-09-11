Array.prototype.myReduce = function (callback, initialValue) {
  callback(acc, curValue, curIndex, this);
  if (initialValue) {
    acc = initialValue;
    curIndex = 1;
  }
  if (!curIndex && !initialValue) {
    curIndex = 0;
  }
  acc = callback(acc, curValue, curIndex, this);
  return acc;
};


// --------------------------------------------------------


// ---------------TEST 1-----------------------
var numbers = [0, 1, 2, 3];
var result = numbers.myReduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(result);

// --------------------TEST 2----------------------
/*console.log([0, 1, 2, 3, 4].reduce(
  function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator + currentValue;
  }
));*/

// ---------------------TEST 3-----------------------
/*var sum = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 0);
console.log(sum);*/

// --------------------TEST 4--------------------------
/*var total = [ 0, 1, 2, 3 ].reduce(
  ( acc, cur ) => acc + cur,
  0
);
console.log(total);*/