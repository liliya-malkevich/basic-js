const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // remove line with error and write your code here
  if(!Array.isArray(arr)){
    throw new Error('THROW');
  }
  if(arr.length === 0) return [];
 let i1 = arr.indexOf('--discard-next');
 let i2 = arr.indexOf('--discard-prev');
 let i3 = arr.indexOf('--double-next');
 let i4 = arr.indexOf('--double-prev');
 let n = arr.length;
// let iter = [i1,i2,i3,i4];
// iter.sort();
//console.log(iter);
 if(i1 === 0||i2 === 0||i3 === 0||i4 === 0){
  arr.splice(0,1);
 }
 if(i1 === n-1 ||i2 === n-1||i3 === n-1||i4===n-1){
   arr.splice(n-1,1);
 }
//  if(i3>0  && i3 !== n-1) {
//   arr.splice(i3+1,0,arr[i3+1]);
//    }
// if(i4>0  && i4 !== n-1) {
//     arr.splice(i4-1,0,arr[i4-1]);
//      }
//  if(i1>0 && i1 !== n-1) {
// arr.splice(i1+1,1);
//  }
//  if(i2>0  && i2 !== n-1) {
//   arr.splice(i2-1,1);
//    }
  
   for(let i = 0;i<arr.length;i++){
     //console.log(arr);
     if(arr[i]==='--discard-next' && i1>0 && i1 !== n-1) {arr.splice(i1+1,1);i++}
     if(arr[i]==='--discard-prev' && i2>0 && i2 !== n-1) {arr.splice(i2-1,1);i++}
     if(arr[i]==='--double-next' && i3>0 && i3 !== n-1) {arr.splice(i3+1,0,arr[i3+1]);i++}
     if(arr[i]==='--double-prev' && i4>0 && i4 !== n-1){ arr.splice(i4-1,0,arr[i4-1]);i++}
   }
   
for(let i = 0;i<arr.length;i++){
  if(typeof(arr[i])==="string" && arr[i].split('')[0]==='-' && arr[i].split('')[1]==='-'){ 
    arr.splice(i,1);
    --i;
  }
}
  return arr;
  
};
//console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));