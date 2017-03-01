var mongoose = require("mongoose”);
var Schema = mongoose.Schema;
var person


var personSchema = new Schema({
    _id: String,
    name: String,
    carsOwned: [{
        _id: String,
        make: String,
        model: String,
        year: Number,
        engine: String,
        miles: Number
}]
})