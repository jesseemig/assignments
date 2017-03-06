var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({

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
}

module.exports = mongoose.model("Todo", todoSchema);