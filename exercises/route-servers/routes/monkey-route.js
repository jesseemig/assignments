var express = require("express");
var monkeyRoutes = express.Router();

monkeyRoutes.route("/")
    .get(function (req, res) {
        res.send("Here's a list of monkeys");
    })
    .post(function (req, res) {
        res.send("Thanks for the new monkey!");
    });

monkeyRoutes.route("/:id")
    .get(function (req, res) {
        res.send("Here's a single monkey instance with the id of " + req.params.id);
    })
    .put(function (req, res) {
        res.send("Thanks for the updated Monkey! Id: " + req.params.id);
    })
    .delete(function (req, res) {
        res.send("He's been shipped to another zoo");
    });
