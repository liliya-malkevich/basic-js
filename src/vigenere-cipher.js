const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  flag = true;
  constructor(flag = true){
    this.flag = flag;
  }
  encrypt(message, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(arguments.length<2 || arguments[0]===undefined) throw new Error();
  }    
  decrypt(message, key) {
   // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(arguments.length<2 || arguments[0]===undefined) throw new Error();
  }
}

module.exports = VigenereCipheringMachine;
