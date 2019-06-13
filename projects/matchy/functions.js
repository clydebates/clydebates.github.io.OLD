/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    //animals is an array with objects that have name properties
    //if name equals the name property of ANY object in animals array, return that object
    //else, return null
    
    //make name lowercase for sake of case insensitivity
    name = name.toLowerCase();
    //we will do the same for animals' object's name property later, using this 
    var propNameLowered = '';
    //gotta loop to access individual obj inside animals
    for (var i = 0; i < animals.length; i++){
        propNameLowered = animals[i].name.toLowerCase();
        if (propNameLowered === name) {
            return animals[i];
        } 
        
    }
    return null;
    
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    //animals is an array with objects that have name properties
    //if name equals the name property of ANY object in animals array, replace it with replacement
    
    
    //make name lowercase for sake of case insensitivity
    name = name.toLowerCase();
    //we will do the same for animals' object's name property later, using this 
    var propNameLowered = '';
    //gotta loop to access individual obj inside animals
    for (var i = 0; i < animals.length; i++){
        propNameLowered = animals[i].name.toLowerCase();
        if (propNameLowered === name) {
            animals[i] = replacement;
        } 
        
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    //animals is an array with objects that have name properties
    //if name equals the name property of ANY object in animals array, remove that object
    
    
    //make name lowercase for sake of case insensitivity
    name = name.toLowerCase();
    //we will do the same for animals' object's name property later, using this 
    var propNameLowered = '';
    //gotta loop to access individual obj inside animals
    for (var i = 0; i < animals.length; i++){
        propNameLowered = animals[i].name.toLowerCase();
        if (propNameLowered === name) {
            animals.splice(i, 1);
        } 
        
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    //gotta do a bunch of checks
    //first, check if animal obj has name prop && that prop has a length > 0
    /*you can check if name exists by just typing it in the conditional statement
    JS will coerce it to a boolean value no matter what, so if it isn't there,
    it will coerce to false. */
    //originally I used .hasOwnProperty(), but turns out ya don't need it
    if(animal.name.length > 0){
        //next, check if it has species prop && length > 0
        if(animal.species.length > 0) {
            //loop thru animals array to compare names against new animal.name
            for (var i = 0; i < animals.length; i++){
                //if names do match, we'll return undefined to quit the code
                
                /*we can't set it to simply push into animals if names don't match,
                because the loop keeps running, so even if animal.name !== animals[i].name
                the first time, it might one of the following times. We have to run
                the entire loop and check every possibility. We return undefined
                in order to just quit the entire function right then and there in 
                the case that the new animal name === an existing animal name*/
                if(animal.name.toLowerCase() === animals[i].name.toLowerCase()){
                    return undefined;
                }
            }
            //now, outside our loop but inside the if checks, push the object
            animals.push(animal);
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
