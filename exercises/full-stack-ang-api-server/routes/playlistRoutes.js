var express = require("express");
var playlistRoutes = express.Router();
var Playlist = require("../models/playlist");

playlistRoutes.get("/", function (req, res) {
    Playlist.find(function (err, playlists) {
        if (err) return res.status(500).send(err);
        res.send(playlists);
    });
});

playlistRoutes.post("/", function (req, res) {
    var playlist = new Playlist(req.body);
    playlist.save(function (err) {
        if (err) return res.status(500).send(err);
        res.status(201).send(playlist);
    });
});

playlistRoutes.delete("/:id", function (req, res) {
    Playlist.findByIdAndRemove(req.params.id, function (err, playlist) {
        if (err) return res.status(500).send(err);
        res.send(playlist);
    });
});

module.exports = playlistRoutes;