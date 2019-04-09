///// OPERATORS ////
//Operators, unsurprisingly, do operations on our code.
//They can be unary, binary, or, in one case, ternary.
//Unary - takes one operand (the thing which is being operated on)
//Binary - takes two operands
//Ternary - takes three operands

//BINARY operators
//These all take this form:
// operand operator operand

// Assignment operators //
//These assign values to the left operand based on the value of the right operand
//EVERY SINGLE ONE OF THESE ends with an equal sign =
var x;
x = 1 //basic Assignment operator, =
x += 1 //Addition assignment... means x = x + 1 (same deal with everything below)
x -= 1 //Subtraction assignment
x *= 1 //Multiplication assignment
x /= 1 //Division assignment
x %= 1 //Remainder assignment
//Note there are other assignment operators, but for my beginner's purposes, this is all I'm going to detail.

//The above are all super simple, assigning 1 to x in various ways
//It is important to note that if the right operand requires evaluation, that is done before assignment
x = 2 * 4 //2 is multiplied by 4, resolving to 8, which is then assigned to x
console.log(x); // 8
//assignment operators can be used with any data type, not just numbers
x = 'String'
console.log(x); //String
x = [];
console.log(x); //prints an empty array



// Arithmetic Operators //
//Math. These do math.
//Declaring some variables for examples:
var y = 0;
var z = 1;

y = 1 + 1 //Addition Operator, resolves to 2
console.log(y); // 2
y = 1 - 1 //Subtraction Operator, resolves to 0
console.log(y); // 0
y = 2 * 2 //Multiplication Operator, resolves to 4
console.log(y); // 4
y = 4 / 2 //Division Operator, resolves to 2
console.log(y); // 2
y = 12 % 5 // Remainder Operator... divides left operand by right operand and returns remainder. In this case, 2.
console.log(y); // 2 (there's 2 left over when you divide 12 by 5)
//y = (2**3) // Exponential Operator, should reslove to 8 but Cloud9 isn't using the most recent 
//version of JS so it doesn't recognize this operator.

//UNARY ARITHMETIC OPERATORS... only take one operand
z++ //Increment, adds 1 to its operand... same as z = z + 1
console.log(z) // 2
z-- //Decrement, subtracts 1 from its operand... same as z = z - 1
console.log(z) // 1
// negation. Makes its operand negative
console.log(-z) // -1
// plus. Makes its operand positive
console.log(+z) // 1
//negation and plus also attempt to turn a value into a number, if it isn't already
console.log(+'3') // 3
console.log(+true) // 1
console.log(+false) // 0
console.log(+'String') // NaN


// COMPARISON OPERATORS //
//All of these are binary //
//Return boolean based off comparison of the operands
//Equality Operators -- returns true if operands are equal
1 == 1 //true, 1 is equal to 1
1 == '1' //true, == don't give no shits about data type
1 === 1 //true, one is STRICTLY equal to 1
1 === '1' //false, === gives all the shits about data type
//Inequality operators -- returns true if operands are NOT equal
1 != '1' //false, != doesn't care about data types, so 1 and '1' are indeed euqual
1 !== '1' //true, !== is strictly inequal, cares about data type, so 1 and '1' are NOT equal
//Relational operators
4 > 3 //Greater than operator. Returns true here.
4 >= 4 //Greater than or equal to operator. Returns true here.
4 < 3 // Less than operator. Returns false here.
3 <= 3 // Less than or equal to operator. Returns true here.


// LOGICAL OPERATORS //
//Used with Boolean values, most often seen in conditional statements
//Logical AND: &&
//Logical OR: ||
//Logical NOT (aka bang): ! (unary operator)

//AND: &&
if(4>3 && 3>0) { //returns true. read: if 4 is greater than 3 AND 3 is greater than 0, do something.
    //do something
}
//OR: ||
if(4>3 || 3<0){ //still returns true, even though right operand is false. 
//read: if 4 is greater than 3 OR 3 is less than 0, do something
    
}
//Unary !
if (!4>3) { //returns false... the operand 4>3 is true, so ! flips it to false.
    
}


// TERNARY (Conditional) OPERATOR //
//Basically used as a replacement for if statements.
//Syntax:
//condition ? expressionTrue : expressionFalse
//if the condition is truthy, then expressionTrue executes, if it is falsey, expressionFalse executes
7 > 0 ? console.log('True!') : console.log('False!')
//The above code prints True! to the console.
0 > 7 ? console.log('True!') : console.log('False!')
//The above code prints False! to the console.
//You can also chain these together as a replacement for if...else if...else
/*
function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
*/
