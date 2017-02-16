var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use("/monkey", require("./routes/monkeyRoutes"));
app.use("/tiger", require("./routes/tigerRoutes"));

app.listen(port, function() {
    console.log("App is listening on port " + port);
});
