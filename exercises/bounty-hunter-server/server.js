var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid");
app.use(bodyParser.json());

var bounties = [
    {
    firstName: "Jesse",
    lastName: "Emig",
        living: true,
        bountyAmount: 10000,
        type: "",
    id: "" 
    }
];

app.get("/bounty", function (req, res) {
    res.send(bounties);
});

app.post("/bounty", function (req, res) {
    var newBounty = req.body;
    newBounty.id = uuid.v4;
    bounties.push(newBounty);
    res.send(newBounty);
});


app.listen(8100, function () {
    console.log("Server listening on port 8100");
});

    