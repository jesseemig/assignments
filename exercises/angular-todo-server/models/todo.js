var mongoose = require("mongoose");
var Schema = mongoose.Schema;
                       
var todoSchema = new Schema({
        title: String,
        price: Number,
        imageUrl: String,
        completed: false,
        miles: Number
});

module.exports = mongoose.model("Todo", todoSchema);