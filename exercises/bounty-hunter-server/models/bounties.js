var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bountySchema = new Schema({
       firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Bounty", bountySchema);


