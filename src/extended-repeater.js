const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code he
  str = String(str);
  options.addition = String(options.addition);
  if(options.repeatTimes === undefined) options.repeatTimes = 1;
  if(options.additionRepeatTimes === undefined) options.additionRepeatTimes =0;
  
  if(options.separator === undefined) options.separator = '+';
  if(options.addition == undefined){
  options.addition = '';
  options.additionRepeatTimes = 0;
  }
 
  //if(options.addition !== '' && options.additionRepeatTimes === 0) options.additionRepeatTimes = 1;
  if(options.additionSeparator === undefined) options.additionSeparator = '|';
  
let  myStr = '';
  for(let i = 0;i<options.repeatTimes;i++){
    myStr += str;
    for(let j = 0;j<options.additionRepeatTimes;j++){
myStr +=options.addition;
if(j !== options.additionRepeatTimes-1) myStr+= options.additionSeparator;
    }
    if(i !== options.repeatTimes-1)myStr+=options.separator;
  }
  
return myStr;
};
//console.log(repeater('TESTstr', { repeatTimes: undefined, separator: 'ds', addition: 'ADD!', additionRepeatTimes: undefined, additionSeparator: ')))000' }))
  