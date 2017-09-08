var assert = require("chai").assert;
var isLuhnAlgo = require("../isLuhnAlgo");

describe("Luhn Algorithm", function(){
  it("should return true if the password is valid", function(){
    var password = 79927398713;
    var result = isLuhnAlgo(password);
    assert.isTrue(result);
  });
  it("should return false if the password is invalid", function(){
    var password = 7992739871;
    var result = isLuhnAlgo(password);
    assert.isFalse(result);
  });
});