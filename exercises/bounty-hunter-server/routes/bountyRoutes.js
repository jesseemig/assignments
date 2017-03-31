var express = require("express");
var carRoutes = express.Router();
var Bounty = require("../models/bounty");

bountyRoutes.get("/", function (req, res) {
    Bounty.find(function (err, bounties) {
        if (err) return res.status(500).send(err);
        res.send(bounties);
    });
});

bountyRoutes.get("/:id", function (req, res) {
    var populate = req.query.populate;
    var query = Bounty.findById(req.params.id);
        if (populate) {
            query.populate("Bounties ")
    }
    query.exec(function (err, car) {
        if (err) return res.status(500).send(err);
        res.send(cars);
    });
});

carRoutes.post("/", function (req, res) {
    var car = new Car(req.body);
    car.save(function (err) {
        if (err) return res.status(500).send(err);
        res.status(201).send(car);
    });
});

carRoutes.put("/:id", function (req, res) {
    Car.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, car) {
        if (err) return res.status(500).send(err);
        res.send(car);
    });
});

carRoutes.delete("/:id", function (req, res) {
    Car.findByIdAndRemove(req.params.id, function (err, car) {
        if (err) return res.status(500).send(err);
        res.send(car);
    });
});

module.exports = carRoutes;