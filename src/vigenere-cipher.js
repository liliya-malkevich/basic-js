const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  flag = true;
  arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(flag = true){
    this.flag = flag;
  }
  encrypt(message, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(arguments.length<2 || arguments[0]===undefined) throw new Error();
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');
    if(message.length>key.length){
      let k = 0;
      for(let i = key.length; i<message.length;i++){
        key.push(key[k]);
        k++;
      }
    }
    let myWord = [];
    let j = 0;
    for(let i = 0; i<message.length;i++){

      let letter = this.arr_EN.indexOf(message[i])+this.arr_EN.indexOf(key[j]);
      if(this.arr_EN.indexOf(message[i]) === -1){
        myWord.push(message[i]);
        letter = 0;
        continue;
      }
      if(letter>=this.arr_EN.length) letter -= this.arr_EN.length;
      myWord.push(this.arr_EN[letter]);
      j++;
      letter = 0;
    }
    if(!this.flag) myWord = myWord.reverse();
    return myWord.join('');
  }    
  decrypt(message, key) {
   // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(arguments.length<2 || arguments[0]===undefined) throw new Error();
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');
    if(message.length>key.length){
      let k = 0;
      for(let i = key.length; i<message.length;i++){
        key.push(key[k]);
        k++;
      }
    }
    let myWord = [];
    let j = 0;
    for(let i = 0; i<message.length;i++){

      let letter = -this.arr_EN.indexOf(message[i])+this.arr_EN.indexOf(key[j]);
      if(this.arr_EN.indexOf(message[i]) === -1){
        myWord.push(message[i]);
        letter = 0;
        continue;
      }
      if(letter>0) letter -= this.arr_EN.length;
      myWord.push(this.arr_EN[Math.abs(letter)]);
      j++;
      letter = 0;
    }
    if(!this.flag) myWord = myWord.reverse();
    return myWord.join('');

  }
}
//let ob = new VigenereCipheringMachine(true);
//console.log(ob.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'));
module.exports = VigenereCipheringMachine;
