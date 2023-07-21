const songs = require("../repository/song");
const playlist = require("../repository/playlist");

const getAllSongs = () => {
    return songs.getAllSong();
}

function playSong(id) {
    playlists = playlist.getPlaylist();
    const song = playlists.find(song => song.id === id);
    song.countPlayedSong += 1;
    return song;
}

function countPlayedSong(id) {
    playlists = playlist.getPlaylist();
    const song = playlists.find(song => song.id === id);
    const countPlayedSong = {
        title: song.title,
        played: song.playCount
    }

    return countPlayedSong;
}

function songsByMostPlayed() {
    playlists = playlist.getPlaylist();
    return playlists.sort((a, b) => b.playCount - a.playCount);
}

module.exports = { getAllSongs, countPlayedSong, playSong, songsByMostPlayed }