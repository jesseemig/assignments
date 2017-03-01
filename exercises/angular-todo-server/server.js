var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var path = require("path");
var port = process.env.PORT || 8150;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));


app.use("/todo", require("./routes/todoRoutes"));


mongoose.connect("mongodb://localhost/todo", function (err) {
    if (err) throw err;
    console.log("Conected to database");
});


app.listen(port, function () {
    console.log("Server listening on port " + port);
});
