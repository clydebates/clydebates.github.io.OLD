/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'Dog';
animal['name'] = 'Brenna';
animal.noises =[];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'Woof';
noises.push('Bark');
noises.unshift('Hoooooowl');
noises[noises.length] = 'sniff sniff';
console.log(noises.length);
console.log(noises.length-1);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises[noises.length] = 'Ruuuf';
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  Bracket notation
    Dot notation
 * 2. What are the different ways of accessing elements on arrays?
 *  Bracket notation
    Methods:
    .push()
    .pop()
    .unshift()
    .shift()
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);
var cat = {
    species: 'cat',
    name: 'Isabeau',
    noises: ['meow', 'maow maow']
};

var frog = {
    species: 'frog',
    name: 'Clyde',
    noises: ['ribbit', 'croak']
};
animals.push(cat);
animals.push(frog);
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*choosing array because we're creating a list that doesn't need
key/value pairs. We can have each friend name as one element in the array*/
var friends = [];
function getRandom(){
    return Math.floor(Math.random() * animals.length);
}

friends.push(animals[getRandom()].name);
console.log(friends);
animals[0].friends = friends;
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
