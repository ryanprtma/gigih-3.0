const songList = (songList) => {
    const { title, artists, duration } = songList;
    return new Promise((resolve, reject) => {
        if (songList == undefined) {
            reject('song tidak ditemukan');
            return;
        }

        if (title == undefined) {
            reject('judul tidak ditemukan');
            return;
        }

        if (artists == undefined || artists.length < 1) {
            reject('artist tidak ditemukan');
            return;
        }

        if (duration == undefined || duration == 0) {
            reject('durasi tidak ditemukan');
            return;
        }

        setTimeout(resolve(songList), 3000);
    });
}

const song1 = {
    title: "song title 1",
    artists: [
        {
            name: "artist name 1"
        }
    ],
    duration: 200
}

const song2 = {
    title: "song title2",
    artists: [
        {
            name: "artist name 2"
        }
    ],
    duration: 200
}

const songs = [song1, song2];
// song = undefined;

async function asyncSongList(songs) {
    for (let i = 0; i <= songs.length - 1; i++) {
        let song = songs[i]
        try {
            const data = await songList(song);

            console.log(data.title);

        } catch (error) {
            console.log(error);
        }
    }
};

asyncSongList(songs);
console.log("test 1");
