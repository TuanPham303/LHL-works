/*
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr);   
    }
  }
}

function actionWhenFound(arr) {
  console.log("Found Waldo at index " + arr.indexOf("Waldo"));
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);*/

// ******* REFACTORING

function findWaldo(arr, found) {
  arr.forEach(function(i){
    if (i === "Waldo"){
      found(arr);
    }
  });
}

function actionWhenFound(arr) {
  console.log("Found Waldo at index " + arr.indexOf("Waldo"));
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);