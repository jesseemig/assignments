var express = require("express");
var authRoutes = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config");

/*
* Create a new user similar to creating any other document in our database. One extra step is to check if a user with
* the given email already exists in the database.
* */
authRoutes.post("/signup", function (req, res) {
    User.find({email: req.body.email}, function (err, existingUser) {
        if (err) return res.status(500).send(err);
        if (existingUser.length) return res.send({success: false, message: "That email is already taken. Did you mean to log in?"});

        var newUser = new User(req.body);
        newUser.save(function (err) {
            if (err) return res.status(500).send(err);
            res.status(201).send({success: true, user: newUser, message: "Successfully created a new user!"});
        });
    });
});

/*
* When logging someone in, check for:
* 1. any database errors
* 2. if the database was unable to find a user with the specified email OR if the passwords don't match.
* If everything passes, create a token for the client side app to save. Can add options like expiration if desired.
* Finally, send the token to the client-side app.
* */
authRoutes.post("/login", function (req, res) {
    User.findOne({email: req.body.email}, function (err, user) {
        if (err) return res.status(500).send(err);
        if (!user || user.password !== req.body.password) {
            return res.status(401).send({success: false, message: "Invalid email or password"});
        }
        var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"});
        res.send({token: token, success: true, user: user.toObject(), message: "Here's your token!"});
    });
});

module.exports = authRoutes;