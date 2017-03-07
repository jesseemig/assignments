var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var playlistSchema = new Schema({
    
    name: String,
    url: String,
    artist: {
        name: String
    }
});

module.exports = mongoose.model("Playlist", playlistSchema);