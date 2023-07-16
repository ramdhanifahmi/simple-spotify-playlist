const Playlist = require('../model/PlaylistModel');

// Handler untuk menampilkan halaman Playlist
exports.showPlaylist = (req, res) => {
  const playlist = Playlist.getPlaylist();
  const sortedPlaylist = Playlist.getSortedPlaylist();
  res.render('playlist', { playlist, sortedPlaylist, title: 'Playlist' });
};

// Handler untuk menambahkan lagu ke playlist
exports.addSong = (req, res) => {
  const { title, artists, url } = req.body;
  const song = new Playlist(title, artists, url);
  Playlist.addSong(song);
  res.redirect('/playlist');
};

// Handler untuk memutar lagu
exports.playSong = (req, res) => {
  const songId = req.params.id;
  const song = Playlist.getSongById(songId);
  if (song) {
    song.playCount++;
  }
  const playlist = Playlist.getPlaylist();
  const sortedPlaylist = Playlist.getSortedPlaylist();
  res.render('playlist', { playlist, sortedPlaylist, currentSong: song, title: 'Playlist' });
};
