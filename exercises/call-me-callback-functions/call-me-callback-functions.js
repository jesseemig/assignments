// . Iterate through those names and execute a function called attemptCall for // . each name in the array. (It's okay if this for loop is on the global // . scope.)
// . The attemptCall function should have 4 parameters: the current name in // . the loop's iteration, as well as 3 callback parameters, dontCall,call, // . and sendText.
// . If the name has an odd length of characters, invoke the dontCall callback // . function.
// . If the name has an even length of characters, invoke the call callback // . function.
// . If the name has more than one letter a (uppercase or lowercase) in it, // . invoke the sendText callback function. This takes precedence over // . even/odd conditionals
// . Each of the callback functions (call, dontCall, and sendText) should // . print a message to the console regarding what happened (i.e.: "You did // . not call Jon"). Be sure to use the name of the person that was used from // . the array.


var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];  

for(var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCall, call, text)
}

function attemptCall(name, dontCall, call, text){
    if (name.length % 2 === 1){
        dont(name)
    }
}

function dontCall(name) {
    console.log("You did not call " + name)
}

function call(){}
function text(){}