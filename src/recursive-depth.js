const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here.
   let d = 0;
   if(arr.length == 0) return 1;
   for(let i of arr){
     if(Array.isArray(i)) d += this.calculateDepth(i);
   }
   return d+1;
  }
};