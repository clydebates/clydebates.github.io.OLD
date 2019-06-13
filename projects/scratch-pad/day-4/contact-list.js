// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            return contacts.push(contact);
        },
        findContact: function(fullName) {
            //loop thru contact array to access individual contact objects
            let names = fullName.split(' ');
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].nameFirst === names[0] && contacts[i].nameLast === names[1]) {
                    return contacts[i];
                }
            }
            return undefined;
        },
        removeContact: function(contact) {
            //loop thru array and compare contact obj to each element of array
            //if they match, delete that element
            //must use slice(), otherwise the length of the array will not be effected
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].id === contact.id && contacts[i].nameFirst === contact.nameFirst && contacts[i].nameLast === contact.nameLast) {
                    contacts.splice([i], 1);
                    
                }
            }
        },
        printAllContactNames: function() {
            //create variable to hold full name
            let nameFull = '';
            //create variable to hold list of full names
            let list = '';
            //loop thru contacts array
            for (let i = 0; i < contacts.length; i++) {
                //assign nameFull to the the object's nameFirst + nameLast values, separated by a space
                nameFull = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                //add nameFull to list variable each loop (using += so we don't overwrite list)
                // add line break after full name
                list += nameFull + '\n';
            }
            //remove the last character of the list, which will be the last line break
            /*Technically we're not removing anything, we're creating a substring from 
            the list string, starting at the beginning and stopping at the last character*/
            let noLastLineBreak = list.substring(0, list.length-1);
            return noLastLineBreak;
        }
        
        /* ALTERNATIVE SOLUTION:
        printAllContactNames: function(contact) {
       var names = [];
        for (var i = 0; i < contacts.length; i++) {
           names.push(contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]);
            }
            return names.join('\n');
        }
        */
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
