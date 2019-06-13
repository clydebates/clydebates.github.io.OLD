
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(size) {
  //declare loop variable
  let num = 1;
  //declare pound sign as a string
  let hash = '#'
  //loop from 1 to the max size (inclusive)
  while (num <= size) {
    //gotta print just one # on the first go
    if (num === 1){
      console.log(hash)
    }else{
      //add a # each subsequent loop
    console.log(hash += '#');
    }
    //don't forget to increment or else we'll all die
    num++
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//did this already so I'm not going to pseudocode...
function fizzBuzz(start, end) {
  for (var i = start; i <= end; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz'); 
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  var chessBoard = '';
  
  //create outside loop for lines, acts as counter and adds \n at end
  for (var i = 0; i < size; i++){
    //inside loop creates the lines
    for (var x = 0; x < size; x++){
      //if the sum of the two loop counters is even, add a space
      if ((x+i) % 2 === 0) {
        chessBoard += ' ';
        //if the sum is odd, add a #
      } else {
        chessBoard += '#';
      }
      /* Run thru of the first few iterations to better understand:
      both i and x are at 0
      sum of 0+0 is even, first if block runs
      nested loop runs again, now i=0 and x=1
      sum of 0+1 is odd, second block runs
      nested loop runs again, now i=0 and x=2
      sum of 0+2 is even, first block runs
      and so on until x = size
      */
    }
    //nested loop has run its course, meaning a line has been completed. new line time
    chessBoard += '\n';
    //now parent loop goes again, making i = 1
  }
  //it should be built, log it
  console.log(chessBoard);
}
//no way in hell I would've gotten that without the hints

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
