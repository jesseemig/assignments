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


var bobs = function(bobCaught, bobWorth) {
    var bobsTotal = bobCaught * bobWorth;
    console.log(bobsTotal);
}

 bobs(bobCaught, bobWorth);


var cheeps = function(cheepCaught) {
    var cheepsTotal = cheepCaught * 11;
    console.log(cheepsTotal);
}

cheeps(cheepCaught, cheepWorth);

var final = function (goombas, bobs, cheeps) {
   var complete = goombas + bobs + cheeps;
    console.log(complete);
}

final(goombasTotal, bobsTotal, cheepTotal);

