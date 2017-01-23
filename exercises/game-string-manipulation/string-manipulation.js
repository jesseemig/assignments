var readlineSync = require('readline-sync');

var player = 100;

function playerDamage() {
    var damageDone = Math.floor((Math.random() * 100) + 1);
    if(player > enemyLife) {
        console.log("You won! You delivered " + damageDone + "You were injured and your life is down to " player());
    } else {
        console.log("You were killed!");
    }
}
//  console.log("Welcome to the Dark Forrest! Many have entered, few have survived. The forrest is full of ogres, monsters, bandits, and pitfalls.");

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



// dev/assignments/exercises/game-string-manipulation $ node string-manipulation.js


var walk = readlineSync.question("Enter 'w' to walk ");
    console.log(chance());



function chance() {
     var x = Math.floor((Math.random() * 3) + 1);
     if (x <= 2) {
        return (proceed());
             
        
    } else {
        return (determineType());
            
    }
}


function proceed() {
    readlineSync.question("Enter 'w' to walk ");
    return (chance());
}


function determineType(rando) {
    var rando = Math.floor((Math.random() * 3) + 1);
    if (rando === 1) {
        console.log("You are confronted by an angry ogre ");
        fightRun();
    } else if (rando === 2) {
        console.log("You are confronted by an angry monster ");
        fightRun();
    } else {
        console.log("You are confronted by a bandit ");
        fightRun();
    }
}



function fightRun() {
 var decision = readlineSync.question("If you want to fight enter 'fight' " + "if you want to run enter 'run' ");
       if (decision === "run") {
            console.log(run());
       } else {
            console.log(test());
       }
}

function run() {
    var y = Math.floor((Math.random() * 2) + 1);
     if (y === 2) {
        console.log("You escaped! ");
        proceed();
     }
}
        

function fight(player) {
    var damage = Math.floor((Math.random() * 100) + 1);
    if (damage)****
}

function determineDamage(determineType) {
    if (determineType === "monster") {
         return getRandomInt(80, 100);
    } else if (determineType === "ogre") {
         return getRandomInt(50, 79);
     } else (determineType === "bandit");
        return getRandomInt(20, 49);
}


//  function Enemy(hitPoints, defense) {                   
//      this.hitPoints = determineDamage;
//      this.defense = this.hitPoints * 3;
//  }



