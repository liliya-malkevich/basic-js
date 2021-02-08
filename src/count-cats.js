const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // remove line with error and write your code here
 if(arguments.length===0 || matrix.length == 0) return 0;
  let count = 0;
  for(i in matrix){
    for(j in matrix[i]){
if(matrix[i][j] === '^^') count ++;
    }
  }
  return count;
};
