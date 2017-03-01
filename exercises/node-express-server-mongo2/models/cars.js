var express - require("express");
var carRoutes = express.Router();
var Car = require("../models/cars");

carRoutes.get("/", function (req, res) {
    Car.find(function (err, cars) {
        if (err) return res.status(500).send(err);
        res.send(cars);
    });
});

carRoutes.get("/:id", function (req, res) {
    var populate = req.query.populate;
    var query = Car.findById(req.params.id);
        if (populate) {
            // ("carsOwned", "-_id") would return everything but ID
            query.populate("carsOwned")
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
    Car.findByIdAndUpdate(req.params.id, req.body, {new: true}, function ( err, car) {
        if (err) return res.status(500).send(err);
        res.send(car);
    });
});

carRoutes.delete("/:id", function (req, res) {
    Car.findByIdAndUpdate(req.params.id, function (err, car) {
        if (err) return res.status(500).send(err);
        res.send(car);
    });
});

module.exports = carRoutes;