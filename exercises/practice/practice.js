function playerHurt() {    
        damage = Math.floor((Math.random() * 100) + 1);
        player += damage;
    console.log("Your opponent's strike caused " + player + " damage points " + cont());
         if (player > 99) {
            console.log("You failed! You fought with honor but the forrest always wins.");
         } else if (enemy > 99){
        console.log("You slayed your enemy you have been awaraded a ");
      //  award random item
            cont();
             walkAway();
     } else
         fight()
}
       
function enemyHurt() {
    enemyDamage = Math.floor((Math.random() * 100) + 1);
    enemy = enemyDamage;
    console.log("Your blow delivered " + enemy + " damage points. ")
    if (enemy > 99){
        console.log("You slayed your enemy you have been awaraded a ");
      //  award random item
        walkAway();
    } else {
        cont();
    }
}