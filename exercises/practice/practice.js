
var readlineSync = require('readline-sync');

//  console.log("Welcome to the Dark Forrest! Many have entered, few have survived. The forrest is full of ogres, monsters, bandits, and pitfalls.");
//  
//  var name = readlineSync.question('What is your name, stranger? ');
//  console.log("Hi " + name.toUpperCase());


//  console.log("Welcome to the Dark Forrest! Many have entered, few have survived. The forrest is full of ogres, monsters, bandits, and pitfalls.");
//  
//  var name = readlineSync.question('What is your name, stranger? ');
//  console.log("Hi " + name.toUpperCase());






//  when walk chance

//  if chance 1-4, x < 2 w to walk- tell user to press w again and run the chance function when they do
//  if chance x is less than 2 alert "Confronted by"- 
//  function for type and return type to user
//  user choose run or fight
//  if run- 1/2
//  if caught - fight function
//  fight assign type properties
//  engage battle



// /dev/assignments/exercises/game-string-manipulation $ node string-manipulation.js


var walk = readlineSync.question("Enter 'w' to walk ");
    console.log(chance());



function chance() {
     var x = Math.floor((Math.random() * 3) + 1);
     if (x != 1) {
        return("yes");
            // proceed()); 
        
    } else { 
        return("no");
            // determineType());
    }
}


function proceed() {
readlineSync.question("Enter 'w' to walk ");
console.log(chance());
}
