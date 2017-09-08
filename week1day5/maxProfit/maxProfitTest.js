var assert = require("chai").assert;
var maxProfit = require("./maxProfit");

describe("Find max profit stock", function () {
  it("should return 16 if the array is [45, 24, 35, 31, 40, 38, 11]", function(){
    var array = [45, 24, 35, 31, 40, 38, 11];
    var result = maxProfit(array);
    assert.isTrue(result === 16);
  });
});