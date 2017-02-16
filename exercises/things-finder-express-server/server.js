var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid");
var app = express();
var port = 8250;

app.use(bodyParser.json());

var people = [

    {name: "Jesse", married: false},
    {name: "Adam", married: true},
    {name: "Nate", married: true}
];

app.get("/people", function (req, res) {

    var query = {};
    var filteredPeople = [];

    if (Object.keys(req.query).length > 0) {

        for (var i = 0; i < people.length; i++) {
        if (people[i].name === req.query.name) {
            filteredPeople.push(people[i]);
        }
    }
    return res.send(filteredPeople);
}
return res.send(people);
});


app.listen(8250, function () {
    console.log("Server listening on 8250");
})