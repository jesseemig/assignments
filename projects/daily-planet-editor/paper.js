var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

function whoWins(isThereKryptonite, enemyName) {
    if (!isThereKryptonite) {
        return "Superman beats " + enemyName + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}

for (var i = 0; i < enemies.length; i++) {
    var isThereKryptonite = (i % 2);
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

function howAttractedIsLoisLaneToMe() {
    return Math.floor((Math.random() * 10)+1);
}
console.log(howAttractedIsLoisLaneToMe());

var clarkKent = true;
var superman = false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}
