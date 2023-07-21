const playlist = require("../repository/playlist");

function getPlaylist() {
    return playlist.getPlaylist();
}

function addSongToPlaylist(song) {
    playlists = playlist.getPlaylist();
    song.id += playlists.length
    playlists.push(song);
    return;
}

function playPlaylist() {
    const playedSong = [];
    playlists = playlist.getPlaylist();
    playlists.forEach(song => {
        playedSong.push(`play song ${song.title}`);
        song.playCount += 1;
    });
    return playedSong;
}

module.exports = { getPlaylist, addSongToPlaylist, playPlaylist }