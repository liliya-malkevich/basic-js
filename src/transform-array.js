const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // remove line with error and write your code here
  if(!Array.isArray(arr)){
    throw new Error('THROW');
  }
  if(arr.length === 0) return [];
  //if(typeof(arr[0]=== String)) delete arr[0];
  //if(typeof(arr[arr.length - 1]=== String)) delete arr[arr.length-1];
  return arr;
  
};
//console.log(transform(5));