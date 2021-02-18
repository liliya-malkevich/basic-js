const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr,d=0,temp = 0) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here.
   
   if(arr.length == 0) return 1;

   for(let i of arr){
     if(Array.isArray(i)) d = this.calculateDepth(i);
     if(d>temp) temp = d;
   }
   return temp+1;
  }
};