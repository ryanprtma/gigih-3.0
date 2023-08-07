// Convert Songs collection to JSON
const songsJSON = JSON.stringify(db.songs.find().toArray());

// Convert Artists collection to JSON
const artistsJSON = JSON.stringify(db.artists.find().toArray());

// Convert Popular Songs collection to JSON
const popularSongsJSON = JSON.stringify(db.popular_songs.find().toArray());

// Print the JSON data
print(songsJSON);
print(artistsJSON);
print(popularSongsJSON);
