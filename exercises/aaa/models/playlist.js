var mongoose = require("mongoose");
var Schema = mongoose.Schema;
                       
var playlistSchema = new Schema({
        song: String,
        artist: String,
        album: String
});

module.exports = mongoose.model("Playlist", playlistSchema);