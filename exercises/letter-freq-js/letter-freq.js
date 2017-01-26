// display how many times each letter is in the phrase
var phrase = 'slimy smelly solution'; 

function letterCount(str) { //(str) so we can use multiple times with any // string
    var count = {}; //to keep track of letter count ("s": 3)- value pair
    for (var i = 0; i < str.length; i++) {
        var letter = str[i]
        // created var letter to store whatever the [i] is as looping 
        if (count[letter] !== undefined) { 
            //letter in [ ] (not .str)bc count is object
            count[letter]++
        }else {
            count[letter] = 1;
        }
            
        }
    console.log(count);
    }
letterCount(phrase);

// the loop is creating a blank object, storing the letter var so it holds the letter's value each time the loop passes. If whatever letter the loop is on is not undefined (so it is defined) take the letter and pass