var express = require("express");
var authRoutes = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config");

authRoutes.post("/signup", function (req, res) {
    console.log(req.headers);
    User.find({email: req.body.email}, function (err, existingUser) {
        console.log(err);
        if (err) return res.status(500).send(err);
        if (existingUser.length) return res.send({success: false, message: "That email is already taken. Did you mean to log in?"});

        var newUser = new User(req.body);
        newUser.save(function (err) {
            if (err) return res.status(500).send(err);
            res.status(201).send({success: true, user: newUser, message: "Successfully created a new user!"});
        });
    });
});

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