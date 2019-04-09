//Basic String Concatenation //
// Strings can be slapped together (concatenated) using the + operator
var myString = 'Hello' + ' ' + 'World';
console.log(myString); //prints Hello World
//Note that we have to manually put in the space character
//Another way to do this:
myString = 'Hello ' + 'World';
console.log(myString); //prints Hello World
//Note that the space is included directly after Hello

//This same thing can be achieved using interpolation
myString = `Hello ${'World'}`;
console.log(myString);
//No need to use + or add spaces this way
//Note you have to use backticks 
//This is more practical when you want to have an expression in your string,
//or when you want to use the values of variables in a string
myString = `1 plus 1 is ${1+1}`;
console.log(myString);

var wordOne = 'yes';
var wordTwo = 'this';
var wordThree = 'works';
myString = `Does this work? ${wordOne} ${wordTwo} ${wordThree}`;
console.log(myString); // Does this work? yes this works

//Useful String Methods
//MDN details about 35 different string methods, I'll go over a few of the most useful here
//Note that Strings are primitive and therefore immutable
//None of these actually modifies the original string, but returns a new string based off of the original

// .concat() is basically a replacement for +
// combines two strings and returns a new string
myString = 'Hello';
var newString = myString.concat(' ', 'World'); //add a space, then World to myString
//Then, take that new string and assign it to newString
console.log(newString);

// .split() takes a string and splits it based on a character, and returns an array of strings 
newString = 'Split me up at the spaces';
var arrayOfStrings = newString.split(' '); //putting a space between quotes in the 
//parentheses tells .split() to separate newString at each space -- the space characters are removed in the new array
console.log(arrayOfStrings);

// .substring() returns the characters in a string between two specified indexes
//The ending index is non inclusive
var subString = newString.substring(0, 11);
console.log(subString); //prints Split me up

// .toLowerCase() turns every character in a string to lower case
var wackyCase = 'tHiS iS StRaNgE';
var lowerCase = wackyCase.toLowerCase();
console.log(lowerCase); //this is strange

// .toUpperCase() turns every character in a string to upper case
var upperCase = wackyCase.toUpperCase();
console.log(upperCase); //THIS IS STRANGE

//to remove ALL whitespace in a string, use .replace()
//the best way to do this is with a regular expression
var spaces = "    Lots  Of  Spaces    ";
var noSpaces = spaces.replace(/\s/g,"");
//regular expressions are patterns enclosed in / /
// \s is the pattern for whitespace
//g means global, so it knows to refer to ALL whitespace in the string
//"" tells .replace() to replace all that whitespace with nothing
console.log(noSpaces); //prints LotsOfSpaces