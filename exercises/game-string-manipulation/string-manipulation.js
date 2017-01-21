var readlineSync = require('readline-sync');

//  console.log("Welcome to the Dark Forrest! Many have entered, few have survived. The forrest is full of ogres, monsters, bandits, and pitfalls.");
//  
//  var name = readlineSync.question('What is your name, stranger? ');
//  console.log("Hi " + name.toUpperCase());


//  console.log("Welcome to the Dark Forrest! Many have entered, few have survived. The forrest is full of ogres, monsters, bandits, and pitfalls.");
//  
//  var name = readlineSync.question('What is your name, stranger? ');
//  console.log("Hi " + name.toUpperCase());


var walk = readlineSync.question("Enter 'w' to walk ");
    console.log(chance());



function chance() {
     var x = Math.floor((Math.random() * 3) + 1);
    if (x < 2) {
        console.log(proceed()); 
        
    } else { 
        console.log(determineType());
    }
}


  function proceed() {
    readlineSync.question("Enter 'w' to walk ");
    console.log(chance());
  }


function determineType(enemies, rando) {
    var enemyTypes = ["ogre", "monster", "bandit"];
    var rando = Math.floor((Math.random() * 3) + 1);
    console.log("You are confronted by a " + enemyTypes[rando];
}


function choice() {         
    readlineSync.question("Press 'f' to fight or ", + run());
    console.log(choice());
}

function run() {
      console.log("r to run away");
}



// **** if player chooses between options (x for yes,  a for no- and functions for each situation) 

        
//      
//        
//      
//      
//                            
 //     function Enemy(type, hitPoints, defense) {                   
 //         this.type = determineType();
 //         this.hitPoints =determineDamage();
 //         this.defense = this.hitPoints * 3;
//      }
//          
//          
//       function determineType() {
//           var enemyTypes = ["ogre", "monster", "bandit"];
//           var rand = getRandomInt(0, 2);
//           return enemyTypes[rand];
 //     }
//         
//          
//      function determineHitPoints(type) {
//          if (type === "monster") {
//               return getRandomInt(80, 100);
//          } else if(type === "ogre"){
//               return getRandomInt(50, 79);
//           } else(type === "bandit") 
//              return getRandomInt(20, 49);
//      }
//       
//      function enemy() {
//          this.type = determineType();
//          this.hitPoints = determineHitPoints(this.type);
//          this.defense = this.hitPoints * 3;
//      }
//      
//      function makeEnemies(num) {
//          for(var i = 0; i < num; i++) {
//              var newEnemy = new Enemy();
//              enemies.push(newEnemy);
//          }
//      }
//      makeEnemies(10);
//      console.log(enemies);