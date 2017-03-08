var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var expressJwt = require("express-jwt");
var port = process.env.PORT || 8000;

// This config just holds some info for us so we don't have to keep typing the same string over and over again. It
// also can allow us to add the config file to gitignore so we don't need to send our database secret to github
// where someone could easily steal it.
var config = require("./config");
var path = require("path");

app.use(morgan("dev"));
app.use(bodyParser.json());

/*
* Anything that begins with '/api' is going to have to have a valid token, otherwise
* Express JWT will reject it. We pass in the secret that was given when creating the token, so that
* it knows how to decrypt/unlock it. If it finds a valid token in the incoming request, it'll pull out the payload
* of the token and set a property on the request object, `req`, called `user`. (So we can access it as `req.user`).
* */
app.use("/api", expressJwt({secret: config.secret}));

// app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(config.database, function (err) {
    if (err) throw err;
    console.log("Connected to the database");
});

/*
* We don't begin our authentication routes with /api, otherwise our users would never be able to get the token they
* need in order to get anything from our API
* */
app.use("/auth", require("./routes/authRoutes"));

/*
* We put the /api at the beginning of these routes so that express-jwt will protect them by checking for a valid
* token before allowing any interaction with the protected endpoints.
* */
app.use("/api/todos", require("./routes/todoRoutes"));

app.listen(port, function () {
    console.log("Server running on port " + port);
});