var express     = require("express");
var app         = express();
var mongoose    = require("mongoose");
var morgan      = require("morgan");
var bodyParser  = require("body-parser");
var expressJwt  = require("express-jwt");
var port        = process.env.PORT || 8000;
var config      = require("./config");
var path        = require("path");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("Connected to the database");
});

app.use("/api", expressJwt({secret: config.secret}));

app.use("/auth", require("./routes/authRoutes"));
app.use("/api/todos", require("./routes/todoRoutes"));

app.listen(port, function () {
    console.log("Server running on port " + port);
});