//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //should return object values in an array
    let objValues = [];
    for (let key in object) {
        objValues.push(object[key]);
    }
    return objValues
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //should return all the keys in object as a single string, separated with spaces
    //define the string to return
    let string = ''
    //loop and build string
    for (let key in object) {
        string += key + ' ';
    }
    //string will have extra space at the end, let's get rid of that
    let substring = string.substring(0, string.length - 1)
    return substring
    
    //ALTERNATIVE:
    //return Object.keys(object).join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //takes all the string values out of an object and returns it as a single string, separated by spaces
    //NOTE not all values will be strings
    //let's use an array this time
    let arrOfStrings = [];
    for (let key in object) {
        if (typeof object[key] === 'string'){
            arrOfStrings.push(object[key]);
        }
    }
    return arrOfStrings.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array';
    } else if (typeof collection === 'object') {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //should take a string with one word and return it with the first letter capitalized
    let firstChar = string[0].toUpperCase();
    return string.replace(string[0], firstChar);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //should capitalize first letter in every word of a string of words
    //gotta turn that string into an array first
    let arrOfStrings = string.split(' ');
    //loop thru this array and capitalize each index
    for (var i = 0 ; i < arrOfStrings.length; i++){
        var upperChar = arrOfStrings[i][0].toUpperCase();
        arrOfStrings[i] = arrOfStrings[i].replace(arrOfStrings[i][0], upperChar);
    }
    
    return arrOfStrings.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var message = "Welcome "
    //capitalize first char of name
    var name = object.name;
    name = name.replace(name[0], name[0].toUpperCase());
    
    return message += name + '!'
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//should take an object with props name and species and return message:
//'Name' is a 'Species' ...note capitalization
var name = object.name;
    name = name.replace(name[0], name[0].toUpperCase());
var species = object.species;
    species = species.replace(species[0], species[0].toUpperCase());
    
    return `${name} is a ${species}`
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//if this obj has a noises prop that is an array, return it as a string separated by spaces
//if it doesn't have a noises array (or it is empty), return 'there are no noises'
    if (object.hasOwnProperty('noises') && object.noises.length > 0){
        return object.noises.join(' ');
    } else {
        return 'there are no noises'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//returns true if word is in the string of words, otherwise returns false
//first, let's safeguard against case sensitivity
string = string.toLowerCase();
word = word.toLowerCase();
//turn string into array of strings
    let arrOfStrings = string.split(' ');
    //declare default answer of false if words don't match
    let answer = false;
    for (let i = 0; i < arrOfStrings.length; i++){
        if (arrOfStrings[i] === word){
            answer = true;
        }
    }
    return answer;
    
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //takes a name, adds that name to the object's friends prop - which is an array
    object.friends.push(name);
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//if name is in the object's friends array, return true; else return false
    name = name.toLowerCase();

    //declare default answer of false if words don't match
    let answer = false;
    if (object.hasOwnProperty('friends')){
    for (let i = 0; i < object.friends.length; i++){
        if (object.friends[i] === name){
            answer = true;
        }
    }
    }
    return answer;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//takes a name, and an array of objects with 'name' and 'friends[]' props
//return a list of all names that aren't in 'names' friend list

    let notFriends = [];
    for (let i = 0; i < array.length; i++){
        if (!array[i].friends.includes(name)){
            if (name !== array[i].name){
            notFriends.push(array[i].name)
            }
        }
    }
    return notFriends
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//Should take an object, a key and a value. Should update the property <key> on <object> with new <value>.
//If <key> does not exist on <object> create it.
    object[key] = value
    return object
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//Should take an object and an array of strings. 
//Should remove any properties on <object> that are listed in <array>
//debugger;
    for (var key in object) {
        for (var i = 0; i < array.length; i++){
            if (key === array[i]){
                delete object[key]
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let newArr = [];
    for (var i = 0; i < array.length; i++){
        if (!newArr.includes(array[i])){
            newArr.push(array[i])
        }
    }
    return newArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}