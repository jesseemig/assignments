var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;
var morgan = require("morgan");
var mongoose = require("mongoose");
                       
app.use(bodyParser.json());
app.use(morgan("dev"));



  
app.use("/playlist", require("./routes/playlistRoutes"));


mongoose.connect("mongodb://localhost/playlists", function (err) {
    if (err) throw err;
    console.log("Connected to the database");
});



app.listen(port, function () {
    console.log("Server is listening on port " + port);
});