const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(date.getMonth()>=0 && date.getMonth()<=1 || date.getMonth() === 11) return 'winter';
  if(date.getMonth()>=2 && date.getMonth()<=4) return 'spring';
  if(date.getMonth()>=5 && date.getMonth()<=7) return 'summer';
  if(date.getMonth()>=8 && date.getMonth()<=10) return 'fall';
};
//console.log(getSeason((new Date(1602, 3, 19, 23, 25, 29, 673))));