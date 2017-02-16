var readline = require("readline-sync");
var Person = require("./module");


var bob = new Person("Bob", 31);
var sarah = new Person("Sarah", 31);

console.log(bob === sarah);

