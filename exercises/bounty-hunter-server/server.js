var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8150;
var morgan = require(“morgan”);
var mongoose = require("mongoose");
var path = require("path");
var Bounty = require("./models/bounty");

app.use(express.static(path.join(__dirname)));

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/bounty", require("./routes/bountyRoutes"));

mongoose.connect("mongodb://localhost/bounties", function (err) {
    if (err) throw err;
    console.log("Connected to the database");
});

app.listen(8150, function () {
    console.log("Server listening on port: " + port);
});
