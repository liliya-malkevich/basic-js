const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  if(arguments.length === 0 ||members===null|| typeof(members) !== "object" || members.length == 0  || typeof(members[0]) !== "string" ) return false;
let arr = [];
let g;
for(i in members){
  for(let j = 0;j<members[i].split('').length;j++){
 
    if(members[i].substring(j,j+1)==' '){
      
      continue;
    }
    
    g = j;
    break;
  }
  arr[i]=members[i].substring(g,g+1);
}
arr.sort();
return arr.join('').toUpperCase();
};

