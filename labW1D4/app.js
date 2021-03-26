"use strict";


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
 //module.exports = { ucFirst, getMaxSubSum, truncate, camelize, checkSpam,extractCurrencyValue }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {*} str string to uppercase
 * @returns{*} string with first letter capitalized
 */
function ucFirst(str) {
  if(str === ""){
    return "";
  }
  str.toLowerCase();
  return str[0].toUpperCase() + str.slice(1);

}

/**
 * 
 * @param {*} str of words
 * @returns{*} boolean, true if it includes 
 */
  function checkSpam(str){
    str = str.toLowerCase();
    if(str.includes("viagra") || str.includes("xxx")){
      return true;
    }
    else{
      return false;
    }
    //this does the same thing
    //return str.includes("viagra") || str.includes("xxx")
    
  }

/**
 * 
 * @param {*} str to check
 * @param {*} maxlength number
 * @returns{*} truncated string
 */
  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + "…" : str;
  }




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
let maxSum = 0;
let partial = 0;

for(const element of arr){
  partial = partial + element;
  //rememeber the max element
  maxSum = Math.max(maxSum, partial);
  if(partial < 0){
    partial = 0;
  }
}
return maxSum;

}

/*
Write the function camelize(str) that changes dash-separated
 words like “my-short-string” into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.
*/
/**
 * 
 * @param {*} str string of letters connected w/ "-"
 * @returns{string} of camelCase 
 *
 */
// function camelize(str) {
//   let newStr = "";
//   str = str.split("-");
  

//   for(const el of str){

//     if(el === ""){
//       continue;
//     }
//     newStr = newStr + el.replace(el[0], el[0].toUpperCase());
//   }
//   newStr = newStr.replace(newStr[0], newStr[0].toLowerCase());
// return newStr;

// }

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

/**
 * 
 * @param {*} str string 
 * @returns {*} number
 */
function extractCurrencyValue(str) {

  str = str.replace("$", "");

  return Number(str);

  //or
   //return Number(str.slice(1));

}


