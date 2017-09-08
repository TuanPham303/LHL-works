//---Normal version - need to pass input array into the function arguments

function myFilter(array, callback) {
  var newArray = [];
  array.forEach(function(ele) {
    if (callback(ele)) {
      newArray.push(ele);
    }
  });
  return newArray;
}

//---Refactored version - can be used after '.' notation

/*
Array.prototype.myFilter = function(callback) {
  var newArray = [];
  this.forEach(function(ele) {
    if (callback(ele)) {
      newArray.push(ele);
    }
  });
  return newArray;
};
*/

//------------------------------------------------------

// ------------------TEST 1-------------------

/*var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

var longWords = words.myFilter(function(word){
  return word.length > 6;
});

console.log(longWords);*/

//------------------TEST 2------------------

/*function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].myFilter(isBigEnough);

console.log(filtered);*/

// ---------------TEST 3------------------

/*var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
  return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id)) {
    return true;
  } 
  invalidEntries++;
  return false; 
}

var arrByID = arr.myFilter(filterByID);

console.log('Filtered Array\n', arrByID); 
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]
console.log('Number of Invalid Entries = ', invalidEntries); 
// Number of Invalid Entries = 4*/