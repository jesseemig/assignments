var uuid = require("uuid");

function Caught(firstName, lastName, living, amount, type, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.living = living;
    this.amount = amount;
    this.type = type;
    this.id = uuid.v4({
        node:
    Caught.prototype.addCaught = function () {
       return ("first Name: " + this.firstName + ", " + "last name: " + this.lastName + ", " + "living: " + this.living + ", " + "type: " +  this.type + "ID: " + this.id);
    }
});
}
var jesse = new Caught("Jesse", "Emig", true, 10000, "Jedi", "ID: ");



    angular.module("MyApp")

.service("BountyService", [function (bounties, Caught, person, firstName, lastName, living, amount, type, uuid) {
    
    this.bounties = []
    
    this.Caught = function (bounties, person, firstName, lastName, living, amount, type, uuid) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.living = living;
    this.amount = amount;
    this.type = type;
    this.id = uuid({
        node:
    Caught.prototype.addCaught = function () {
       return ("first Name: " + this.firstName + ", " + "last name: " + this.lastName + ", " + "living: " + this.living + ", " + "type: " +  this.type + "ID: " + this.id);
        
    }
});
    this.bounties.push(person);
    this.person = {};
};
}]);