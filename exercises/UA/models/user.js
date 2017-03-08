var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/*
* No different than any other schema we've done, except this represents the user who is using our site.
* */
var userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("User", userSchema);