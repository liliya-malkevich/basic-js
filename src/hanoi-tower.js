const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let t = Math.pow(2,disksNumber)-1;
  let s = (t/turnsSpeed)*3600;
  let rez = {
    turns: t,
    seconds: Math.floor(s)
  }
  return rez;
};
//console.log(calculateHanoi(5,4074));