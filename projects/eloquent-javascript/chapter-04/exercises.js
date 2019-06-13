// ////////////////////////////////////////////////////////////////////////////////
// // range ///////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
//should return an array of all numbers between start and end (inclusive)
let numArray = [];
if (start === end){
  return [];
}

if (!step){
    for (var i = start; i <= end; i++){
      numArray.push(i)
  }
  } else if (step > 0){
  for (var x = start; x <= end; x += step){
    numArray.push(x);
  }
  } else if (start > end && step < 0){
    for (var y = start; y >= end; y--){
      numArray.push(y)
    }
  }else {
      numArray = [];
    }
    return numArray
  }

  


// ////////////////////////////////////////////////////////////////////////////////
// // sum /////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

function sum(array) {
//takes an array of numbers and returns the sum of them 
var sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// ////////////////////////////////////////////////////////////////////////////////
// // reverseArray ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //takes an array and returns a new one, with the original values reversed in it
  let newArr = [];
  //gonna need to loop thru array backwards, and push values to newArr
  for (let i = array.length-1; i > -1; i--){
    newArr.push(array[i]);
  }
  return newArr;
}

// ////////////////////////////////////////////////////////////////////////////////
// // reverseArrayInPlace /////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //should modifiy existing array, returning it with elements reversed
  //check if array is empty
  
  if (array.length === 0){
    return [];
  }
  //set variables to hold values that we unshift
  
  let shifted = 0
  
  for (let i = 0; i < Math.floor(array.length/2); i++){
    let j = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i];
    array[i] = j;
  }
  console.log(array);
  
  return array;
}

// ////////////////////////////////////////////////////////////////////////////////
// // arrayToList /////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  var list = null;
  for (var i = array.length-1; i > -1 ; i--){
    list = {value: array[i], rest: list}
  }
 
  return list
}

// ////////////////////////////////////////////////////////////////////////////////
// // listToArray /////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let arr = [];
  //loop taken from book:
  for (var node = list; node; node = node.rest) {
  //start condition: new var 'node' is the entire list
  //stop condition: as long as node is truthy
  //increment: reassign node to the next object in the chain, eventually it will be falsy
    arr.push(node.value);
  }
  return arr;
}

// ////////////////////////////////////////////////////////////////////////////////
// // prepend /////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  //return a new list with element added to the front of the old list
  let newList = {value: element, rest: list};
  return newList;
  
}

// ////////////////////////////////////////////////////////////////////////////////
// // nth /////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

function nth(list, index) {
//takes a list and a number, which returns the element at the <number> index of the list
//get elements from list using previously made function, turning it into an array
  list = listToArray(list); //list is now an array
  return list[index]; //return list at the specified index
  
}

// ////////////////////////////////////////////////////////////////////////////////
// // deepEqual ///////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

function deepEqual(value1, value2) {
//return true only if value1 and value2 are the same exact value
//OR if they are objects with the same data

/*we don't have to rule out arrays or Date or anything like that, this function
will treat them like the objects they are and still work */

//first things first: start with simple data types
if(value1 === value2){
  return true;
} 

//return false if either values are null
//(if they are both null the test would've passed with the previous if statement)
if (value1 === null || value2 === null){
  return false;
}
//if they aren't objects, return false
if (typeof value1 !== 'object' || typeof value2 !== 'object') {
  return false;
}

//like the book says, use Object.keys to get an array of the keys

let keysVal1 = Object.keys(value1);
let keysVal2 = Object.keys(value2);
    
//if the lengths don't match, return false
  if(keysVal1.length !== keysVal2.length){
      return false
  }
//now we only have to loop over one, because we know the lengths are the same, 
//which means the loop will run the same amount of times either way

//a for..of loop takes elements from an array as the variable
//kind of like a for..in loop for arrays
  for (var key of keysVal1){
    //if our keys don't match, return false
    if (!keysVal2.includes(key)){
      return false;
    }
    //now for the recursion to check possible nested objects/arrays
    //this recursion will continue as long as key isn't null 
      if (!deepEqual(value1[key], value2[key])){
        return false; 
      }
  }
return true; 
}

// ////////////////////////////////////////////////////////////////////////////////
// // DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
