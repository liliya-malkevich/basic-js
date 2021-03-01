const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  // remove line with error and write your code here
 //console.log(typeof(sampleActivity));
  if(arguments.length===0 || isNaN(Number(sampleActivity)) || typeof(sampleActivity) == "number" || Number(sampleActivity)===0 || typeof(sampleActivity)=== "object" || Number(sampleActivity)<=0 ||Number(sampleActivity)>15){
    return false;
  }
  sampleActivity = Number(sampleActivity);
  let k = 0.693/HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY/sampleActivity)/k;
  return Math.ceil(t);
};
//console.log(dateSample('1.1'));

