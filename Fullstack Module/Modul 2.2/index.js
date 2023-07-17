const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Sample data - initial playlist
let playlist = [
    { id: 1, title: 'Song 1', artist: 'Artist 1' },
    { id: 2, title: 'Song 2', artist: 'Artist 2' },
    { id: 3, title: 'Song 3', artist: 'Artist 3' }
];

// GET /api/playlist - Get all songs in the playlist
app.get('/api/playlist', (req, res) => {
    res.json(playlist);
});

app.get('/api/playlist/play', (req, res) => {
    waitSong = (title) => {
        return new Promise((resolve) => {
            setTimeout(resolve(`now play ${title}`), 5000);
        });
    }

    playlist.forEach(song => {
        waitSong(song.title).then((data) => {
            console.log(data);
            res.json(data);
        });
    });
});

// GET /api/playlist/:id - Get a specific song by ID
app.get('/api/playlist/:id', (req, res) => {
    const songId = parseInt(req.params.id);
    const song = playlist.find(song => song.id === songId);

    if (!song) {
        res.status(404).json({ error: 'Song not found' });
    } else {
        res.json(song);
    }
});

// POST /api/playlist - Add a new song to the playlist
app.post('/api/playlist', (req, res) => {
    const { title, artist } = req.body;
    console.log(title);
    const newSong = { id: playlist.length + 1, title, artist };
    playlist.push(newSong);
    res.status(201).json(newSong);
});

// PUT /api/playlist/:id - Update a song by ID
app.put('/api/playlist/:id', (req, res) => {
    const songId = parseInt(req.params.id);
    const { title, artist } = req.body;
    const song = playlist.find(song => song.id === songId);

    if (!song) {
        res.status(404).json({ error: 'Song not found' });
    } else {
        song.title = title || song.title;
        song.artist = artist || song.artist;
        res.json(song);
    }
});

// DELETE /api/playlist/:id - Delete a song by ID
app.delete('/api/playlist/:id', (req, res) => {
    const songId = parseInt(req.params.id);
    const songIndex = playlist.findIndex(song => song.id === songId);

    if (songIndex === -1) {
        res.status(404).json({ error: 'Song not found' });
    } else {
        const deletedSong = playlist.splice(songIndex, 1)[0];
        res.json(deletedSong);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
