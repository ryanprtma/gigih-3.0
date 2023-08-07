'use my_music_database'

// Insert 10 songs
db.songs.insertMany([
    {
        title: 'Song 1', artists: ['Artist 1'
        ], album: 'Album 1'
    },
    {
        title: 'Song 2', artists: ['Artist 2'
        ], album: 'Album 2'
    },
    // ... Add more songs here ...
]);

// Insert 10 artists
db.artists.insertMany([
    {
        name: 'Artist 1', dateOfBirth: '1990-01-01', genres: ['Pop', 'R&B'
        ]
    },
    {
        name: 'Artist 2', dateOfBirth: '1985-05-15', genres: ['Rock'
        ]
    },
    // ... Add more artists here ...
]);

// Insert 10 popular songs
db.popular_songs.insertMany([
    {
        title: 'Song 1', playCount: 1000, period: '2023-07-01 to 2023-07-21'
    },
    {
        title: 'Song 2', playCount: 850, period: '2023-07-01 to 2023-07-21'
    },
    // ... Add more popular songs here ...
]);
