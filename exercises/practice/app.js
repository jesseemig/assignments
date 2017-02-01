//  constructor function to start parties
//  penguines and communists
//  1000000
//  random 1 - 2 for attack first
//  function sendNuke(party, onHit, onMiss)
//  party is object of party being attacked
//  onHit is callback function if attack successfull
//  onMiss callback function if attack unsuccessfull
//  onHit and onMiss parameter is party
//  onHit CL + party + missed the
//  random function to determine hit or miss
//  if successfull initiate random damage
//  after attack oposing partyattacks
//  repeat until one party is 0
var isPenguinsTurn;

function Team(name, population) {
    this.name = name;
    this.population = population;
    this.isAlive = function() {
     return this.population > 0;   
    }
}


var penguins = new Team("penguins", 1000000);
var communists = new Team("communists", 1000000);

function sendNuke(party, onHit, onMiss) {
    var success = randNum(0, 3)
    if (success === 0) {
        onHit(party);
    }   else {
        onMiss(party);
    }
}

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}     

function onHit(whoGotNuked) {
    whoGotNuked.population = whoGotNuked.population - randNum(10000, 200000);
    console.log(whoGotNuked.name + " got nuked and have " + whoGotNuked.population + " population left.");
}

function onMiss(party) {
    isPenguinsTurn = !isPenguinsTurn;
    console.log(party.name + " did not get hit");
}


function first() {
    if (randNum(0, 1) === 1) {
        isPenguinsTurn = true;
        sendNuke(penguins, onHit, onMiss);
    } else {
        isPenguinsTurn = false;
        sendNuke(communists, onHit, onMiss);
    }
}

while (penguins.isAlive() && communists.isAlive()) {
    if (isPenguinsTurn) {
        sendNuke(communists, onHit, onMiss);
    } else {
        sendNuke(penguins, onHit, onMiss);
    }
}


console.log("Game over");

