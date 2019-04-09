/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";



//////// DIFFERENCES: var, let, const /////////

//These three have the following attributes: 
/*  mutable
    hoisted
    scoped to functions
    scoped to if blocks
    scoped to loop blocks
    */
//  var is mutable, it is hoisted, and it is scoped to functions. 
//  var IS NOT scoped to if or loop blocks.
//
//  let is mutable, but it is NOT hoiseted.
//  let is scoped to ALL code blocks: functions, if, and loops.

// const is NOT mutable (cannot be redefined)
// const is NOT hoisted
// const (like let) is scoped to ALL code blocks: functions, if, and loops.

//// MUTABILITY ////

var mutable = 'Change me!';
console.log(mutable);
//because this string variable is declared with var, I can rewrite it. 
//NOTE: this isn't actually "changing" the string, it's deleting it and replacing it with a new one.
//      all primitive data types are inherently immutable.
mutable = 'You been changed, son.';
console.log(mutable);
//With var, we can even change this sting to a completely different data type
mutable = 7;
console.log(mutable);

//let is also mutable
let newMutable = 'let works too'
console.log(newMutable);
newMutable = 'see?'
console.log(newMutable)

//const is NOT mutable---trying to reassign it will throw an error

/*

    const message = 'Duh';
    message = 'Duuuuuuuuuuh';
    console.log(message)
 
*/

//this throws 'TypeError: Assignment to constant variable'
//this is because constants CANNOT be redefined. That's why they're constant... duh.

//Therefore, the best time to use const is when you're declaring a variable that you know will never change.


//// SCOPE ////

/*use let within a code block when you don't necessarily 
want it to be accesible from outside that code block.*/
if (5 < 10) {
    let message = 'Duh';
    console.log(message)
} 
//console.log(message);

//in the above if statement, it evaluates to true b/c 5 is indeed less than 10
//so now our new variable 'message' is a string that says 'Duh'.
//the console.log within the if statement goes off without a hitch.
/*however, the console.log on the next line will throw a reference error 
because it cannot access the variable message*/
//this is because we used let within the if statement, meaning its scope is confined to that code block.

//the same thing will happen with const:
if (5 < 10) {
    const message = 'Duh';
    console.log(message)
} 
//console.log(message);

//let's try the same thing with var
if (5 < 10) {
    var newMessage = 'Duh';
    console.log(newMessage)
} 
console.log(newMessage);
/*because var is NOT scoped to if blocks or loop blocks, we can access message outside of 
our if statement */
//HOWEVER
function makeArray(num, string) {
    var newArr = [];
    newArr.push(num, string)
    console.log(newArr)
}
//console.log(newArr);

/*here we find ourselves again unable to access our variable outside of the code block.
This is because ALL variables, including those with the var keyword, are scoped to function blocks.*/

//in this way, we call var FUNCTION SCOPED
//and we call let and const BLOCK SCOPED
//var is only scoped to function blocks, whereas let and const are scoped to ALL blocks of code.




///////////  HOISTING   //////////////

//Hoisting refers to how JavaScript executes code.
//var is the only variable keyword that will be hoisted.
//function declarations are also hoisted, but we'll cover that in the functions notes.

/*Basically, JS commits to memory declarations of all functions and var's throughout the 
entire code before the code is actually executed (during the compiling phase, to be exact) */
//This refers specifically to the declarations, not the initialization.
//Ex:
console.log(hoisted) //prints undefined even though it is initialized on the next line
var hoisted = 'Initialization'
console.log(hoisted) //prints 'Initialization', as expected

//interestingly, because of hoisting, you can initialize a var and then declare it later 
newHoist = 6;
console.log(newHoist); // prints 6 even though newHoist isn't declared until the next line
var newHoist;

/*this is all because each time your code is run, JavaScript searches the entire thing for
functions and var's, then commits their declarations to memory -- kind of like "hoisting them to the top"
except that your actual code isn't really moving anywhere, it's just being memorized by the compiler 
before execution. */

//NOTE: the var keyword is the ONLY one of the variable keywords that is hoisted.
//Let's try the above example with let
// hoistMePlease = 6;
// console.log(hoistMePlease); // throws ReferenceError: hoistMePlease is not defined
// let hoistMePlease;
//no, we will not hoist you, because you used let.

/*constants are also not hoisted. in fact, the above example would throw a syntax error
with const because they have to be initialized on the same line they are declared*/
/*

const exampleHoist; 
    
*/
//throws SyntaxError: Missing initializer in const declaration

