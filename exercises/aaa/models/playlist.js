var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var playlistSchema = new Schema({
    
    title: String,
    album: {
        title: String
    },
    artist: {
        name: String
    }

});

module.exports = mongoose.model("Playlist", playlistSchema);