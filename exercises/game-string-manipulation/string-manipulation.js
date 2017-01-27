var ask = require("readline-sync");

var player = 100;
var enemy = 100000000;

console.log("Welcome to the Dark Forrest! Many have entered, few have survived. The forrest is full of ogres, monsters, bandits, and pitfalls.");



var name = ask.question('What is your name, stranger? ');

console.log("Welcome " + name.toUpperCase());
proceed();

function seeIn() {
    console.log(name + " " + playerItems);
var inventory = ask.question("Enter 'w' to continue- ");
    proceed();
}

var playerItems = [];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function walk() {
 var ugh =   ask.question("Enter 'w' to walk, 'i' for inventory ");
   if (ugh === "w") {
    random(1, 5) === 1;
    determineType();
    } else if (ugh === "i") {
        seeIn();
    } else {
        proceed();
    }
}


var items = ["sword", "knife", "rusty spoon", "shield"];

function recieve() {
    var items = ["sword", "knife", "rusty spoon", "shield"];
    var youGot = items[Math.floor(Math.random()* items.length)];
    console.log("Congratulations! You are victorious! You recieved a " + youGot);
    playerItems += youGot;
    proceed();
}



function proceed() {
 var err =  ask.question("Enter 'w' to walk, 'i' for inventory ");
    if (err === "w") {
        random(1, 5) === 1;
        determineType();
    } else if (err === "i") {
        seeIn();
    } else {
       walk();
    }
}


function determineType() {
    var assign = random(1, 3);
    if (assign === 1) {
        console.log("You are confronted by an angry ogre ");
        fightRun();
    } else if (assign === 2) {
        console.log("You are confronted by an angry monster ");
        fightRun();
    } else {
        console.log("You are confronted by a bandit ");
        fightRun();
    }
}



function fightRun() {
 var decision = ask.question("If you want to fight enter 'fight' " + "if you want to run enter 'run' ");
       if (decision === "run") {
            run();
       } else {
           fight();
       }
}


function run() {
     if (random(1, 2) === 2) {
        console.log("You escaped! ");
        proceed();
     } else {
         console.log("You weren't fast enough.");
         fight();
     }
}
     
var enemyAttack = 0;
var playerAttack = 0;


function fight() {
    ask.question("The fight is on! ")
    enemyAttack = random(1, 100);
    var cost = enemyAttack;
    player -= cost
    console.log("He struck first and delivered " + enemyAttack + " damage points. You have " + player + " health left");
    if (player < 1) {
        console.log("It was a fatal blow! Your lifeless corpse now belongs to the forrest. GAME OVER");
         } else if (player > 0) {
        playerAttack = random(1, 100);
        console.log("Your blow delivered " + playerAttack + "  damage points");
             outCome();
        } else {
            outCome();
        }
}

function outCome(){
    if (playerAttack > enemyAttack) {
        recieve();
    } else {
        console.log("You lost but you manage to flee before he can attack again. ");
            proceed();
    }
}  
 


function walkAway() {
    ask("Enter 'c' to continue on your way ");
    walk();
}
    

 

