var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var expressJwt = require("express-jwt")
var port = process.env.PORT || 8000;
var morgan = require("morgan");
var mongoose = require("mongoose");
var config = require("./config");
var path = require('path');

                     
//  app.use(express.static(path.join(__dirname)));

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/api", expressJwt({secret: config.secret}));


mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("Connected to the database");
});


app.use("/auth", require("./routes/authRoutes"));
app.use("api/todo", require("./routes/todoRoutes"));


app.listen(port, function () {
    console.log("Server is listening on port " + port);
});
