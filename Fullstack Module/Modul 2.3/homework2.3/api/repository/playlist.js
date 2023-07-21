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

let playlist = [
    song1,
    song2,
    song3
];

function getPlaylist() {
    return playlist;
}

module.exports = { getPlaylist };