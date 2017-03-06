var express = require("express");
var authRouter = express.Router();
var User = require("../models/user");
var jwt - require("jsonwebtoken");
var config = require("../config");

authRoutes.post("/signup",  function (req, res) {
    User.find({emailL req.body.email}, function (err, exitingUser) {
        if (err) return res.status(500).send(err);
        if (exitingUser.length) res.send({success: false, message: "that email is already taken"})
        
        var newUser = new User(req.body);
        newUser.save(function (err) {
            if (err) return res.status(500).send(err);
            res.send({success: true, user: newUser, message: "Successfully created a new User"});
        });
    });
});

authRoutes.post("/login", function (req, res) {
    User.findOne({email: req.body}, function (err, user) {
        if (err) return res.status(500).send(err);
        if (!user || user.password !== req.body.password) {
            return res.status(401).send({success: false, message: "Invalid email or password"});
        }
        // config.secret
        var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"});
        res.send({token: token, success: true, user: user.toObject(), message: "Here's your token"});
    });
});

module.exports = authRoutes;