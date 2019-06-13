// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require(`lodown-saltyapple42`);

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
let numMales = 0;
let maleArr = _.filter(array, function(e, i, arr){
    if (e.gender === 'male'){
        return true;
    } else {
        return false;
    }
});

numMales = maleArr.length;
return numMales;
};






var femaleCount = function(array){
return _.reduce(array, function(acc, cv, i){
        if (cv.gender === 'female'){
            acc++;
        }
    return acc;
    },0);

};




var oldestCustomer = (array) => {
    //gonna use pluck to get all the ages in an array
    //then loop thru that array and find the biggest
    //then use each to find the name of the person with that age
    let allAges = _.pluck(array, 'age');
    let oldestAge = 0;
    for (let i = 0; i < allAges.length; i++){
        if (allAges[i] > oldestAge){
            oldestAge = allAges[i];
        }
    }
    let oldbag = '';
    _.each(array, function(e,i,a){
        if (e.age === oldestAge){
            oldbag = e.name;
        }
    });
    return oldbag;
};




var youngestCustomer = (array) => {
    //guess what? gonna copy, paste, and edit, baby
    let allAges = _.pluck(array, 'age');
    let youngestAge = Infinity;
    for (let i = 0; i < allAges.length; i++){
        if (allAges[i] < youngestAge){
            youngestAge = allAges[i];
        }
    }
    let whippersnapper = '';
    _.each(array, function(e,i,a){
        if (e.age === youngestAge){
            whippersnapper = e.name;
        }
    });
    return whippersnapper;
};




var averageBalance = (array) => {
//use pluck to get an array of all balances, then reduce to get an average
    let balances = _.pluck(array, 'balance');
//balances is an array of strings, each with a '$' and ','
    let total = _.reduce(balances, function(acc, cv, i) {
//turn current value into a number without '$' or ','
        cv = cv.substring(1).split(',').join('');
//cv doesn't have '$' or ',' anymore, but is still a string, so use parseFloat to coerce into number so we can do math on it
        cv = parseFloat(cv);
        acc += cv;
        return acc;
    },0);
    let average = total / balances.length;
    return average;
    
};




var firstLetterCount = function(array, char) {
    //how many customers name's begin with a given char?
    return _.reduce(array, function(acc, cv, i){
        if (cv.name[0].toLowerCase() === char.toLowerCase()){
            acc++;
        }
        return acc;
    },0);
};




var friendFirstLetterCount = (array, customer, char) => {
//should return the number of friends a given customer has that start with given char
//customer is an object inside array, friends is an array of objects inside the customer object, need to access name of friends

//let's get our customer's friends' names in an array
    let custFriends;
    _.each(array, function(e, i, arr){
        if (e.name === customer){
            custFriends = _.pluck(e.friends, 'name');
        }
    });
//now custFriends is an array with customer's friend's names
    let friendCount = 0;
   _.each(custFriends, function(e, i, arr){
       if (e[0].toLowerCase() === char.toLowerCase()){
           friendCount++;
       }
   });
    return friendCount;
};




var friendsCount = (array, name) => {
//returns customer(s) that have given name in their friends list (returns them in an array)
let friendsOfName = [];
//use each to loop thru each customer
    _.each(array, function(e, i, arr){
        //pluck is returning an array of friend names for some to check thru
        //the callback function of some is checking if any name in the plucked friend list is the same as name parameter
        if (_.some(_.pluck(e.friends, 'name'), function(e){
            if (e === name){
                return true;
            }
        })) {
            friendsOfName.push(e.name);
        }
    });
   
    return friendsOfName;
    
};




var topThreeTags = (array) => {
//find the three most common tags amongst ALL customers' tags
//gonna need to compile all tags into one giant array, 
//then use unique to get an array of all possible tags
//then add unique array elements as keys in a new Obj
//then loop thru giant array, each time key is hit, increment its value
let giantArr = [];
//nest an each inside of each because tags are in an array and we want just one array, not an array of arrays
    _.each(array, function(e,i,arr){
        _.each(e.tags, function(e,i,arr){
            giantArr.push(e);
        });
    });
    

let possibleTags = _.unique(giantArr);

//create our obj of all possible tags, setting their values each to 0
let tagObj = {};
    for(let element of possibleTags){
        tagObj[element] = 0;
    }
//loop thru giantArr, increment value of tag in object each time it is hit
    for (let element of giantArr){
        tagObj[element]++;
    }
    
let topThree = [];
let instances = 0;
    //if the value of our tag is greater than the current value of instances, set instances to our tag value
    for (let key in tagObj){
        if (tagObj[key] > instances){
            instances = tagObj[key];
        }
    }
    //loop again, this time, if instances is the same as our current tag value, push the tag into topThree
    for (let key in tagObj){
        if (tagObj[key] === instances){
            topThree.push(key);
        }
    }
    //just for good measure, if there aren't 3 or more that equal instances, push the next highest into topThree
    for (let key in tagObj){
        if (tagObj[key] === instances-1){
            topThree.push(key);
        }
    }
    //set a cutoff of three tags
    if (topThree.length > 3){
        topThree.splice(3, Infinity);
    }
     return topThree;
    
//I'm gonna submit this but I know it's really sloppy----there's gotta be a way to use reduce for this
};
 
 
 
 
var genderCount = (array) => {
    //create an object that is a summary of all genders
    //must use reduce
    return _.reduce(array, (acc, cv, i) => {
        if (!acc.male){
            acc.male = 0;
        }
        if (!acc.female){
            acc.female = 0;
        }
        if (!acc.transgender){
            acc.transgender = 0;
        }
        if (cv.gender === 'male'){
            acc.male++;
        } else if (cv.gender === 'female'){
            acc.female++;
        } else {
            acc.transgender++
        }
        return acc;
    }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
