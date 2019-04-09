// Control Flow//
/* 
We can control the flow of our application by making decisions with 
conditional statements. We can say to the code, if this is true do this,
if not, do this, and/or if none of the above is true, do this.

These conditional statements are often found as if...else if...else statements.
*/
//Declaring some test variables:
var x = 10;
var y = 0;

// If statement:
if (x > y) {
    console.log('x is greater!');
}

/*
This if statement prints x is greater! to the console, because our condition,
"is x greater than y?" is true.
*/
if (y > x){
    console.log('y is greater!');
}
/*
This if statement does absolutely nothing because our condition,
"is y greater than x?" is false. Therefore, the code block doesn't run.
*/

//If.....else if
if (y > x) {
    console.log('y is greater!');
} else if (x > y) {
    console.log('x is greater!');
}
/*
With else if, we can chain conditions together. Here, x is greater! prints to
the console. Since our first condition is false, that code is skipped and we 
move onto the next condition, seeing as the second one is true, that code runs.
*/

//If...else if...else
if (y > x) {
    console.log('y is greater!');
} else if(x === y) {
    console.log('x and y are equal!');
} else {
    console.log('x is greater!');
}
/*
Here we've added a default code using else that will run if none of the above
conditions are true. Since y is not greater than x, and the two are not equal,
the code within the else block runs. Note that else does not have a condition 
in parentheses like if and else if. It is the default, and is always located at
the end of the chain.
*/



//// Switch Statements: another way to skin the cat /////
/*
Switch statements are just another syntax for doing the same thing 
if...else if...else statements do
*/
//Syntax:
/*
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}
*/
//To convert our previous if/else if chain:
switch (x > y) {
    case true: 
        console.log('x is greater!');
        break;
    case false:
        console.log('y is greater!');
        break;
}
/*
With x and y at their current values, the first case will run. x is indeed 
greater than y.

Note the break keyword. this tells the switch statement that code code block is
over and you're ready to move on to the next case. Default doesn't have a break
because it will always be the last. Also, a default statement is optional.
*/

/*It's convienent to use switch when we have to test against string data, and/or 
have a lot of things to test against:
*/
var userInput = 'Oranges';
switch (userInput) {
    case 'Bananas':
        console.log('Bananas are yellow');
        break;
    case 'Apples':
        console.log('Apples are red');
        break;
    case 'Pineapples':
        console.log('Pineapples are pointy');
        break;
    case 'Oranges':
        console.log('Oranges are, well, orange.');
        break;
    default:
    console.log('Fruit not found!');
}
/*
Here we print 'Oranges are, well, orange' to the console because the userInput
variable matched one of our cases. Had it not, the defualt statement would've run.
*/