//Constructor Functions//
function Car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
}

let myCar = new Car('Toyota', 'Prius', 'white'); //note the new keyword used here
console.log(myCar);

//Add behaviors to ALL instances of Car using the prototype
Car.prototype.go = function(){
    console.log(`The ${this.color} ${this.model} goes vrooom!`)
}
myCar.go()
let nansCar = new Car('Ford', 'Mountaineer', 'black');
nansCar.go(); /*this can be used here becase the go function is defined in the 
prototype of Car, meaning all instances can use it*/



//Factory Functions... slightly different//
/*These actually return an object within a return statement, whereas Constructors 
don't -- the 'new' keyword does that for them
Their syntax is more like a 'normal' function
Add behaviors(functions) within Facorties themselves, not the prototype
This adds a little more privacy and allows for closures to be utilized*/

function makePerson(firstName, lastName, numOfPets){
    return {
        firstName: firstName,
        lastName: lastName,
        pets: `has ${numOfPets} pets.`
    }
}

var myself = makePerson('Clyde', 'Bates', 2);
console.log(myself);
//what if I want this in string form?
let myDetails = ''
for (var key in myself){
    myDetails += myself[key] + ' ';
}
console.log(myDetails)