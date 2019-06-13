/// FUNCTIONS ///
//There are two phases to functions: declaration and calling (or invocation)
//Declaration:
function example(){
    //code block
}
//Calling/Invoking:
example();

//Parameters/Arguments:
/*Parameters are the sort of 'variables' of a function. They are placed between
the parentheses in the declaration*/
function exParam(param1, param2) {
    //code block
}
/* Arguments are the VALUES that are passed into these parameters, you can think
of them like the value that fills the parameter 'variable.' These are placed 
between the parentheses of the invocation */
exParam(1, 2);

//Named function syntax:
//function name(parameters) {}

//Assigning a function to a variable:
//Just like assigning any other data type
var myFunc = function (){
    //code block
}
//now this annonymous function is assigned to variable myFunc

//Inputs and Outputs
/* We can optionally specify inputs with parameters and a single output with 
a return statement */
function add(num1, num2) { //num1 and num2 will collect input from Arguments
    return num1 + num2 //the return statement will output the evaluation of this expression
}


//Function Scope
/*Functions have their own scope, meaning they can access data from the parent and 
global scopes, but the opposite is not true. Parent scopes cannot access child scopes.*/
var parent = 7
function testScope(){
    var child = 10
    return parent + 1 //returns 8
}
//console.log(child); //throws reference error: child is not defined



// CLOSURES //
/*
Definition:
A function with access to the parent scope AND uses variables from the parent scope,
even after the parent function has closed.
*/
//create a nested function that takes a variable from its parent's scope
function outerFunction() {
  var outerVar = 10;
  return function(){
    return outerVar * 2;
  }
}

var double = outerFunction(); /* outerFunction() has been called, the code is done 
and now 'double' equals the nested function (because that is what outerFunction is returning.
Yet, that nested function can still access outerVar because it is a Closure. */

console.log(double); //prints [function]

console.log(double()); /*prints 20 because it's running the nested function 
(which is an example of closure because it takes a variable from the parent scope) */
console.log(outerFunction()()); /*prints 20 because we're invoking the outerFunction 
and then the nested function with the second set of parentheses.*/


//FUNCTION HOISTING//
/** Function declarations AND their bodies get hoisted to the top of their scope.
 * Function hoisting takes precedence over variable hoisting, they get pulled to the 
 * very top, even if var is declared first.
 * */