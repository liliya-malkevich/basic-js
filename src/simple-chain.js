const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {

   // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(arguments.length === 0) this.arr.push(`( )`);
   else this.arr.push(`( ${(value)} )`);
    return this;

  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(!Number.isInteger(position) || position<1 || position>this.arr.length){
     this.arr = [];
      throw new Error();
    }
    this.arr.splice(position-1,1);
    return this;
  },
  reverseChain() {
   // throw new CustomError('Not implemented');
    // remove line with error and write your code here
this.arr=this.arr.reverse();
return this;
  },
  finishChain() {
   // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    const en = this.arr.join('~~');
    this.arr = [];
    return en;
  }
};

module.exports = chainMaker;
