const express = require('express');
const app = express();
const PORT = 3000;

const songsRoute = require('./controller/songs');
const playlistRoute = require('./controller/playlists');

app.use('/', songsRoute);
app.use('/', playlistRoute);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});