var people = { 
    type: "students",
    majorityGender: ["male", "female", "undefined"],
    happy: "yes",
    peoples: function() {
        return "Happy people";
    },
};

console.log(people.majorityGender[2]);
roomObjects.push(people);
 
var chair = {
    color: "white",
    seat: ["blue", "soft"],
    armRests: 2,
    chairs: function() {
    console.log(chair[2]);
    },
};
console.log(chair);
roomObjects.push(chair);

var computers = {
    quantity: 30,
    monitorColor: "black",
    condition: "good",
    computers: function() {
    return "They are good";
},
};

roomObjects.push(people);
