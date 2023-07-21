const express = require('express');
const router = express.Router();
const songs = require('../service/songs');
const bodyParser = require('body-parser');

router.get('/api/songs', (req, res) => {
    const data = songs.getAllSongs();
    res.json(data);
});

router.get('/api/songs/sort-by-most-played', (req, res) => {
    const data = songs.songsByMostPlayed();
    res.json(data);
});

router.get('/api/song/:id/play', (req, res) => {
    const songId = parseInt(req.params.id);
    const data = songs.playSong(songId);
    res.json(`now playing ${data.title}`);
});

router.get('/api/song/:id/playcount', (req, res) => {
    const songId = parseInt(req.params.id);
    const data = songs.countPlayedSong(songId);
    res.json(data);
});


module.exports = router;