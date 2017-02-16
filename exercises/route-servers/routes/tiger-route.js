var express = require("express");
var tigerRoutes = express.Router();

tigerRoutes.get("/", function(req, res) {
    res.send("Here's a list of tigers");
});

tigerRoutes.post("/", function(req, res) {
    res.send("Thanks for the new tiger!");
});

tigerRoutes.get("/:id", function(req, res) {
    res.send("Here's a single tiger instance with the id of " + req.params.id);
});

tigerRoutes.put("/:id", function(req, res) {
    res.send("Thanks for the updated tiger! Id: " + req.params.id);
});

tigerRoutes.delete("/:id", function(req, res) {
    res.send("He's been shipped to another zoo");
});


module.exports = tigerRoutes;