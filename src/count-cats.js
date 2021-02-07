const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // remove line with error and write your code here
  let n = matrix.length;
  let m = matrix[0].length;
  let count = 0;
  for(let i = 0;i<n;i++){
    for(let j = 0;j<m;j++){
if(matrix[i][j] === '^^') count ++;
    }
  }
  return count;
};
