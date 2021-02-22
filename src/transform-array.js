const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // remove line with error and write your code here
  if(!Array.isArray(arr)){
    throw new Error('THROW');
  }
  if(arr.length === 0) return [];
 let i1 = '--discard-next';
 let i2 = '--discard-prev';
 let i3 = '--double-next';
 let i4 = '--double-prev';
 let n = arr.length;
 let rez = [];
 for(let i = 0;i<n;i++){
if(arr[i] !== i1 && arr[i] !== i2 && arr[i] !== i3 && arr[i] !== i4 ) rez.push(arr[i]);
else if(arr[i] === i1 && i !== n-1){
  rez.push(undefined);
  i++;
}
else if(arr[i] === i2 && i !== 0) rez.pop();
else if(arr[i] === i3 && i !== n-1) rez.push(arr[i+1]);
else if(arr[i] === i4 && i !== 0) rez.push(rez[rez.length - 1]);
}

// for(let i = 0;i<rez.length;i++){
//   if(rez[i] == i1 && rez[i] == i2 && rez[i] !== i3 && arr[i] !== i4 ){ 
//     rez.splice(i,1);
//     --i;
//   }
// }
rez = rez.filter(x => x !== undefined);
  return rez;
  
};
//console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));