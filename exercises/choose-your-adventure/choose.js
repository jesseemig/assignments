var ask = require("readline-sync");


console.log("Welcome to the streets! Every decision is life or death");


var name = ask.question("What's your name homie? ")

console.log("Get ready to ride or die " + name)
pick();

function pick() { 
 var chose =  ask.question("Choose your affiliation. Enter 'c' to become a Crip, or enter 'b' to become a Blood ");
if (chose === "c") {
    cripIn();
} else if (chose === "b") {
    bloodIn();
}
}

function cripIn() {
    console.log("You chose wisely. Crip life if the only life. Now it's time to put in work to prove you're worthy to rep blue "); 
    work();
}

function bloodIn() {
    console.log("Welcome to the family! As long as your loyal to us, we'll be loyal to you. Now let's get you to work ");
    work();
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function work() {
    var mission = random(1, 5);
    if (mission)
}