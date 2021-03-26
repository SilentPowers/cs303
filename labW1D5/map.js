"use strict";

//map
const lengths = ["one", "two", "three", "four", "five", "six"];
let result = lengths.map(function(element, i, array){
  return `${element.length} at index: ${i + 1}`;
});
//console.log(result);


//sort
const compareNumeric = function(a,b){
  if(a > b) return -1;
  if(a === b) return 0;
  if(a < b) return 1;
};

let arr1 = ["1","15","2"];
arr1.sort(compareNumeric);
console.log(arr1);

let arr2 = [444,33,44];
arr2.sort((a, b) => b - a);
console.log(arr2);


//reduce
let arr = [1,2,3,4,5];

const product = arr.reduce(function(acc, element){
  return acc * element;
}, 1);
console.log(product);

const max = arr.reduce(function(acc, element){
  //acc = acc < element ? acc = element : acc;
  //return acc;
  if(acc < element){
    return element;
  }
  else{
    return acc;
  }
}, arr[0]);
console.log(max);