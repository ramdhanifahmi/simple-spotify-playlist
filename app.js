// app.js

const express = require('express');
const bodyParser = require('body-parser');
const playlistController = require('./controller/playlistController');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route to show the playlist page
app.get('/playlist', playlistController.showPlaylist);

// Route to add a song to the playlist
app.post('/playlist', playlistController.addSong);

// Route to play a song
app.get('/playlist/:id', playlistController.playSong);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
