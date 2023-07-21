let song1 = {
    id: 1,
    title: "song 1",
    artist: ["artist 1", "artist 2"],
    playCount: 0
}

let song2 = {
    id: 2,
    title: "song 2",
    artist: ["artist 1", "artist 2"],
    playCount: 1
}

let song3 = {
    id: 3,
    title: "song 3",
    artist: ["artist 1", "artist 2"],
    playCount: 2
}

let songs = [
    song1, song2, song3
]

function getAllSong() {
    return songs;
}

function getSong(songId) {
    return songs.find((song) => song.id === songId);
}

function createSong(title, artists) {
    let newSong = {
        id: songs.length() + 1,
        title: title,
        artist: artists,
        playCount: 0
    }
    return newSong
}

module.exports = { getAllSong, getSong, getAllSong, createSong };