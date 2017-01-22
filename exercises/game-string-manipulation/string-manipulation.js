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



// dev/assignments/exercises/game-string-manipulation $ node string-manipulation.js


var walk = readlineSync.question("Enter 'w' to walk ");
    console.log(chance());



function chance() {
     var x = Math.floor((Math.random() * 3) + 1);
     if (x <= 2) {
        return(proceed());
             
        
    } else { 
        return(determineType());
            
    }
}


function proceed() {
    readlineSync.question("Enter 'w' to walk ");
    return(chance());
}


function determineType(enemies, rando) {
    var rando = Math.floor((Math.random() * 3) + 1);
    if (rando === 1) {
        return("You are confronted by an angry ogre")
    } else if (rando === 2) {
        return("You are confronted by an angry monster")
    } else {
    return ("You are confronted by a bandit")
    }
}


var decision = readlineSync.question("If you want to fight enter 'fight' " + "if you want to run enter 'run' ");  
      if (decision === "fight") {
          return(FIGHT SEQUENCE)
      } RETURN RUN RESULT
      



function determineDamage(type) {
    if (type === "monster") {
         return getRandomInt(80, 100);
    } else if(type === "ogre"){
         return getRandomInt(50, 79);
     } else(type === "bandit") 
        return getRandomInt(20, 49);
}


function Enemy(hitPoints, defense) {                   
    this.hitPoints = determineDamage;
    this.defense = this.hitPoints * 3;
}


	

 


//  function run() {
//      console.log("r to run away");
//  }



// **** if player chooses between options (x for yes,  a for no- and functions for each situation) 

