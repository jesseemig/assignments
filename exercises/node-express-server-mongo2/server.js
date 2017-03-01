var express = require("express”);
var app = express();
var bodyParser = require("body-parser”);
var morgan = require(“morgan”);
var port = process.env.PORT || 8000;
var mongoose = require("mongoose”);
var path = require(“path”);
var RaceCar = require("./models/person");

app.use(bodyParser.json());
app.use(morgan(“dev”));

app.use("/person", require("./models/person-route"));

mongoose.connect("mongodb://localhost/cars", function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected to the database");
});

app.listen(port, function () {
    console.log("Server is listening on port " + port);
})