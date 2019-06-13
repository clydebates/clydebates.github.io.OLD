////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  return Math.min(num1, num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  num = Math.abs(num);
  if (num === 0){
    return true;
  } else if (num === 1){
    return false;
  } else {
    return isEven(num - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
//counts the number of specific character occurrences in string
//turn string into array containing each char at separate indexes
  let arrOfStrings = string.split('');
  let counter = 0
  for (let i = 0; i < arrOfStrings.length; i++){
    if (arrOfStrings[i] === char){
      counter++
    }
  }
  return counter
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  let counter = 0
    for (let i = 0; i < string.length; i++){
     if (string[i] === 'B'){
      counter++
     }
   }
  return counter
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
