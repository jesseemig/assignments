var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var checkPassord = require("./middleware/checkPassword");

var kittens = [
    {
        id: 2434,
        name: "mittens"
    }
]

app.use(bodyParser.json());

app.get("/kittens/:kittenId/owners/ownerId", function(req, res) {
    
})