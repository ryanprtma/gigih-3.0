const express = require('express');
const router = express.Router();
const playlists = require('../service/playlists');
const bodyParser = require('body-parser');

router.get('/api/playlist', (req, res) => {
    const data = playlists.getPlaylist();
    res.json(data);
});

router.get('/api/playlist/play', (req, res) => {
    const data = playlists.playPlaylist()
    res.json(data);
});

router.post('/api/playlist', bodyParser.json(), (req, res) => {
    const { title, artist } = req.body;
    const artists = [];
    artist.forEach((item) => {
        artists.push(item);
    })

    const newSong = { id: 1, title, artists, playCount: 0 };
    playlists.addSongToPlaylist(newSong);
    res.status(201).json('new song added');
});

module.exports = router;