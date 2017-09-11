function bottle (investment) {
  var totalBottleNum = Math.floor(investment / 2); //5
  var curBottleFromCap = 0;
  var curBottleNum = Math.floor(investment / 2); //5
  var curCapNum = Math.floor(investment / 2); // 5
  while (curBottleNum > 1 || curCapNum > 3) {
    totalBottleNum += Math.floor(curBottleNum / 2); //7 8 9
    curBottleNum = Math.floor(curBottleNum / 2) + (curBottleNum % 2) + curBottleFromCap; //3 2
    curBottleFromCap += Math.floor((curCapNum + curBottleNum ) / 4); 
    curCapNum = curCapNum % 4 + Math.floor(curCapNum / 4) + curBottleNum;
  }
  totalBottleNum += curBottleNum;
  /*while (curCapNum > 3) {
    totalBottleFromCap += Math.floor(curCapNum / 4); 
    curCapNum = curCapNum % 4 + Math.floor(curCapNum / 4);
  }*/
  return totalBottleNum;
}

console.log(bottle(10));