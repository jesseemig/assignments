var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
app.use(bodyParser.json());
var path = require('path');
var port = 8150;

app.use(express.static(path.join(__dirname, "public")));

var bounties = [
    {
    firstName: "Jesse",
    lastName: "Emig",
    living: true,
    amount: 10000,
    type: "sith",
    id: "808485485"
    },
    {
    firstName: "John",
    lastName: "Smith",
    living: false,
    amount: 8000,
    type: "Jedi",
    id: "4384723847"
    }
];

app.get("/bounty", function (req, res) {
    res.send(bounties);
})

app.post("/bounty", function (req, res) {
    console.log(req.body);
    var newBounty = req.body;
    newBounty.id = uuid.v4();
    bounties.push(newBounty);
    res.send(newBounty);
});


app.listen(8150, function () {
    console.log("Server listening on port 8150");
});

    