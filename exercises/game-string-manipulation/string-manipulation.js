var readlineSync = require('readline-sync');

var player = 0;

//  console.log("Welcome to the Dark Forrest! Many have entered, few have survived. The forrest is full of ogres, monsters, bandits, and pitfalls.");

//  var name = readlineSync.question('What is your name, stranger? ');

//  console.log("Hi " + name.toUpperCase());


// dev/assignments/exercises/game-string-manipulation $ node string-manipulation.js


var walk = readlineSync.question("Enter 'w' to walk ");
    console.log(chance());

function randomItem() {
    var items = ["sword", "knife", "shield", "crossbow"]
    var pick = Math.floor((Math.random() * 4) + 1);
    ///
}

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


function cont() {
    readlineSync.question("Press 'c' to continue ")
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
            return(run());
       } else {
            return(fight());
       }
}


function run() {
    var y = Math.floor((Math.random() * 2) + 1);
     if (y === 2) {
        console.log("You escaped! ");
        proceed();
     } else {
         console.log("You weren't fast enough. Prepare to fight");
         cont();
         fight();
     }
}
        


function fight() {
    player += strike();
    console.log("He struck first and delivered " + player + " damage points. ");
    cont();
}
   
        } else if (enemy > 99) {
        enemy += strike();
        console.log("Your blow delivered " + enemy + "  damage points");
            else if (player <= 99) {
        console.log("You slayed your enemy you have been awaraded a ");
        randomItem();
        walkAway;
        } 
    }
    
    Function playerTotal(player) {
        if (player > 99){
            console.log("You failed! You fought with honor but the forrest always wins.");
        }
    }
     
    enemy += strike();
    console.log("Your blow delivered " + enemy + "  damage points");
    if (player > 99) {
            console.log("You failed! You fought with honor but the forrest always wins.");
    } else if (enemy > 99) {
        console.log("You slayed your enemy you have been awaraded a ");
        randomItem();
        walkAway;
    } else if (player >= 99) {
     function playerHurt() {    
        damage = Math.floor((Math.random() * 100) + 1);
        player += damage;
    console.log("Your opponent's strike caused " + player + " damage points ");
         if (player > 99) {
            console.log("You failed! You fought with honor but the forrest always wins.");
         } else if (enemy > 99){
        console.log("You slayed your enemy you have been awaraded a ");
        cont();
        walkAway();
     } 
         
     }
    }
}

function strike() {
    damage = Math.floor((Math.random() * 100) + 1); 
}
         



 

         

    function walkAway() {
        readlineSync.question("Enter 'c' to continue on your way ");
    console.log(chance());
    }






//  function Enemy(hitPoints, defense) {                   
//      this.hitPoints = determineDamage;
//      this.defense = this.hitPoints * 3;
//  }



