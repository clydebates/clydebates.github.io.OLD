// DATA TYPES //
/*JavaScript data types:
1. Number
2. String
3. Boolean
4. Array
5. Object
6. Function
7. undefined
8. null
9. NaN (Not a number)
10. Infinity and -Infinity
*/

/* First off, it's good to know that JS is a loosely-typed language, 
which means that variables can be assigned and reassigned to any of the above data types. */

// PRIMITIVE DATA TYPES //

// Number //
//Like it sounds, this data type is a numerical value.
var num = 5;
console.log(num);
//in the above example, our variable num is assigned to the number data type with a value of 5.
/* 
in JS, all different kinds of numbers fall into this number data type,
this means that floating point, integers, NaN, and +/-Infinity are all the number type.
*/

// NaN //
/*while this might seem like its own data type, NaN (meaning Not a Number) is, funnily enough, 
part of the number data type. It is returned when a Math function fails or when 
a function trying to parse a number fails*/
console.log(Math.sqrt(-1)); /*Math.sqrt returns the square root of a num. It fails if passed -1 
(because the square root of -1 is imaginary), and returns NaN */

console.log(parseInt('asdflka')); //cannot parse this string, returns NaN

//NaN is most useful for finding out if a variable is a number or not, using built in function isNaN()
console.log(isNaN(4)) // false... 4 is a number
console.log(isNaN('string')) //true, string is not a number

// Infinity and -Infinity //
/*Like, NaN, these are also included in the number data type. Combined, these 3 are the only
symbolic values in the number data type. 

Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308.

-Infinity is displayed when a number exceeds the lower limit of the floating point numbers, which is -1.797693134862316E+308.
*/
console.log(1.797693134862315E+309); //Inifinity-- this exceeds the limit JS is able to store... there's only 64 bits, afterall.
console.log(-1.797693134862315E+309) // -Infinity

// String //
// used to represent text
//characters inside single quotes '', double quotes "", or backticks ``.
var string = 'This is a string'
console.log(string)
string = `this is also a string`
console.log(string)
string = "as is this"
console.log(string)

// Boolean //
//a logical data type with true or false value
//all conditional statements will coerce to boolean
var booTrue = true
var booFalse = false
if (booTrue) {
    console.log("this is true")
}
if (booFalse) {
    console.log('this is false') //won't log b/c conditional is false
}
//the above if statements are given variables holding primitive Boolean values, 
//the first one being true, the second false.
//when this code is run, only the first if statement will print to the console because it is true.

// Undefined //
//automatically assigned by Javascript to any variable that isn't initialized
var thisIsNotDefined;
console.log(thisIsNotDefined);


// Null //
//basically the same thing as undefined, but intentionally assigned by the programmer
var nothing = null;
console.log(nothing); // null


////// COMPLEX DATA TYPES //////

// Array //
//An array is a list. It can contain any number of data types of any kind - including other arrays and objects.
//It is declared with square brackets, like so:
var myArray = [];
/*
Arrays are zero indexed, meaning that each element in the array has a specific point 
at which it can be accessed - starting from zero and going thru the entrie length of the array.
*/
var myArray = [0,1,2,'shoe',3, 4, [true, 'blue']]
/*
above we have an array with the number 0 and the 0 index, 1 at 1, 2 at 2, 
'shoe' at 3, 3 at 4, 4 at 5, and at index 6 we have a different array nested inside.
*/
// we use these index numbers inside bracket notation to access array elements.
console.log(myArray[3]) //shoe
console.log(myArray[6]) // [true, 'blue']

/* 
the array is actually a built in object in Javascript that is designed to work like this
if you were to use typeof on an array, it would return object
*/
console.log(typeof(myArray)) // object

// so how can we tell if our variable is an array or not? use Array.isArray()
console.log(Array.isArray(myArray)) // returns a boolean, in this case, true.

//The above code is an example of an array method, of which there are MANY
//There are also string methods, object methods, etc. Methods are built in functions that allow us to manipulate data in our code.
//Just be aware that you CAN'T use array methods on an object, or vice verca. 
/*For instance, .push() will not work on an object. There is no "end" to an object, it's not a numbered list.
Therefore, you can't add something to the end of it. */



// Objects //
//Like arrays, objects are a collection of any size and of any different kinds of data types.
/*Unlike arrays, object literals are NOT indexed -- they are not lists, they're more like
a box that we can throw things into with very little organization. */
//Objects use key/value pairs to collect data and are declared using curly braces.
var myObj = {key: 'value'}
//we can access the value by referencing the key with dot notation
console.log(myObj.key) // prints value
/*we can also use bracket notation to do this, but have to be aware that keys are 
actually strings, so when using bracket notation we have to have our key in quotes*/
console.log(myObj['key']) //prints value
//WRONG//
//console.log(myObj[key]) //throws reference error because bracket notation looks for a variable called key... there isn't one

//we can also use both bracket and dot notation to add new key/value pairs by simply using an assignment operator
myObj.newKey = 'new value'
myObj['3'] = 'third value'
console.log(myObj); //prints the entire object with key, newKey, and 3 and their respective values.



// Functions //
/*functions can logically be thought of as a subclass of objects, just like arrays... it's not actually its own data type
Though, Javascript will return 'function' if you use typeof, which is probably just for convience more than anything*/
console.log(typeof(function(){})) // function

/*More practically speaking, functions are just a way for us to hold on to a block of code, 
and execute that code wherever and however many times we want. They allow us to be able to code more 
efficiently by not having to repeat ourselves. */

//Function declaration:
function optionalName() {
    //code block goes here
}

//I named the above function optionalName because names are just that -- optional
//functions with no names are referred to as Anonymous
//What's NOT optional are the parentheses and curly braces, and of course the keyword function.

/*Functions can also have parameters inside the parentheses, which are kind of like 
local variables that get defined with Arguments later when we call the function*/
function add(num1, num2) { //num1 and num2 are parameters whose values will be determined when we pass arguments
    return num1 + num2 //the return keyword is necessary if we want to recieve some value outside the scope of the function that isn't undefined
}
//calling the function:
add(2, 3); //passes our argument '2' to num1 and our second argument '3' to num2
//these arguments then get passed thru the function, which in this case is just adding them together
//if we don't want this to just float into the ether, though, we need to assign it to memory using a variable
var sum = add(2, 3);
console.log(sum); // prints 5

//function declarations AND definitions are hoisted, so we can call them before they are defined.
//this is unlike var, which only has it's declaration hoisted
//this is explained in depth in the variables section.
var difference = subtract(4, 1)
console.log(difference) // prints 3 even though the function isn't declared/defined until later in the code

function subtract(num1, num2) {
    return num1 - num2
}


// DIFFERENCE BETWEEN COMPLEX AND PRIMITIVE //
//Simply put, primitive values are immutable and hold only ONE kind of value.
//You can't have a number data type hold 2 numbers, for example.
//They are immutable because they cannot be modified. 
//When you reassign a variable, the original primitive data type is lost and rewritten, not changed.
var string = 'Boo'
string = 'Boop' //We didn't just add a 'p' to the end, 'Boo' is gone forever and was replaced with 'Boop'
var num1 = 1
var num2 = 1
num1+num2 //this adds 1 and 1, and returns 2. but the original values are not changed, and since we aren't assigning this to a variable, this 2 is lost forever.


//To be perfectly accurate, variables in javascript are allotted just 8 bites of memory space.
//The number data type is the biggest of the primitives, it takes the full 8 bits.
//Since all primitive types can be stored in those 8 bits, they are stored by VALUE. The literal value is copied into memory.

//Complex data types aggregate other data types, and are therefore of indefinite size. They can be as big or small as they need to be.
//Obviously, if we only have 8 bits of memory, we're not going to fit 1000 different data types in that
//For this reason, complex data types are stored by a REFERENCE to that data.

///// WHAT DOES COPIED BY REFERENCE/VALUE MEAN, AND HOW ARE THEY DIFFERENT? ////
// PRIMITIVE
var foo = 5;

// Defining a function that should change the Primitive value... right?
function addTwo(num) {
   num += 2;
}

// Calling the function while passing our Primitive as an argument
addTwo(foo);
// Getting the current Primitive value
console.log(foo);   // 5...NOT 7

/*Primitive data types are stored as copies in memory, therfore our foo variable is not changed outside the scope of the function. 
Inside the function, a COPY of foo has 2 added to it. The original, global foo remains at five. */
//If we wanted to get 7 out of this, we would have to assign a new variable to the expression num += 2, and return that variable.


// COMPLEX
let myArr = [];
//Defining a function that should change the complex value
function push(arr) {
  arr.push(1)
}
//Calling our function while passing the complex array as an argument
push(myArr)
console.log(myArr) // prints [1]
/*Unlike with primitives, complex values can be larger than 8 bytes, the amount of memory allocated for a variable in JS.
So, they are not stored as exact copies as is with primitives, rather, they are stored as references to that complex data.

Therefore, when a complex data type is changed ANYWHERE in the code, the actual reference is changed, 
which changes the value of that complex data type EVERYWHERE in the code. */


//Another example of all the above:
// Using a string method doesn't mutate the string -- because the string is primitive and therefore stored as a COPY of the actual value
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();  //a COPY of bar variable is now all upper case, but then it's lost to the ether
console.log(bar);               // baz... variable bar has not changed 

// Using an array method mutates the array -- because the REFERENCE to that array has changed
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a NEW (not a mutated) value *cough cough* immutability
bar = bar.toUpperCase();       // BAZ.....baz is lost forever and replaced with BAZ