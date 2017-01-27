//  allows the user to enter new words and saves them into your object (be // sure to pass the object in as a parameter). Does not allow duplicate //  words to be stored in the dictionary. This includes case-sensitivity.
//  Allows the user to look up words in the dictionary and see the definition //  of that word.


var readline = require("readline-sync")

var dictionary = {
    // can put use spaces in variable name if in " "
    boy: "not a girl",
    girl: "not a boy",
    hat: "covers messy hair",
};

console.log(dictionary.boy);

var myArray = [true, false, 1, function () {}, "anything"];
console.log(myArray[3]);

function addWord(word, definition) {
    dictionary[word] = definition;
}

function findWord(word) {
    if (dictionary[word] === undefined) {
        console.log("That word is not in the dictionary yet");
    } else {
        return dictionary[word];
    }
}