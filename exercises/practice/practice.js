
var goombasCaught = 12;
var goombasWorth = 5;
var bobCaught = 8;
var bobWorth = 7;
var cheepCaught = 5;
var cheepWorth = 11;


var totalCalc = function() {
    var goombasTotal = goombasWorth * goombasCaught;
        console.log(goombasTotal);
    var bobsTotal = bobCaught * bobWorth;
        console.log(bobsTotal);
    var cheepsTotal = cheepCaught * 11;
    console.log(cheepsTotal);
    var grandTotal = goombasTotal + bobsTotal + cheepsTotal;
    console.log(grandTotal) //interhtml instead of console.log
}

totalCalc(goombasCaught, goombasWorth, bobCaught, bobWorth, cheepCaught, cheepWorth);


var name = "jack";
function sayName() {
console.log(name);
}
sayName(name);