// The while loop //

// Does something while (or as long as) a certain condition is true
/*
let's say we want to console log the numbers 0-10. 
Instead of writing out 11 different console.log statements, we can use a loop
*/
let x = 0;
while (x < 11) {
    console.log(x);
    x++;
}

/*
So what this means is, WHILE x is less than 11, print x to the console
then, add one to the current value of x
It is EXTREMELY important to remember that second part, without it, the condition 
x < 11 will never be false, and we'll have created an infinite loop
*/

//one more for good measure, this time counting backwards
let y = 10
while (y > -1) {
    console.log(y)
    y--
}
// For loops //
/*
kind of do the same thing as while loops, but are easier to manage because 
the increment/decrement is stated in the beginning.
These are also the go-to for looping thru an Array
*/
let myArray = [1,2,'hello', true];
/*
Syntax: declare a local variable (i), as long as i is less than the length of 
the array, add 1 to the current value of i -- note these are separated with ;
*/
for (let i = 0; i < myArray.length; i++) { 
    console.log(myArray[i]); //print the value of the array at the index equivalent to the current value of i
}

//this code will print out all the values of the array
/*
what if we wanted to print out the array backwards? Well then we'd jsut
have to initialize our local variable to the last index in the array, set
our stop conidition at 0, and decrement our variable each time
*/
for (let i = myArray.length - 1; i > -1; i--) {
    console.log(myArray[i]);
}




/// For-in loops ///
//used to loop through objects
//will loop for as many times as there are keys in the object
let myObj = {
    1: 'one',
    2: 'two',
    3: 'three'
}

for (let key in myObj) {
    console.log(myObj[key]); //prints the value associated with each key in the object
}

/*
it's important to remember to use bracket notation in the above example,
because key is a variable, not an actual name
*/
//We can name our key variable anything, it's just convention to name it key
for (let farts in myObj) {
    console.log(myObj[farts]); //does the same thing as above
}

//so that printed values, what if we wanted the keys themselves?
for (var key in myObj) {
    console.log(key); //prints the actual key name
}

