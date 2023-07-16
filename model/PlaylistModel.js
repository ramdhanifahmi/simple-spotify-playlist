class Playlist {
    constructor(title, artists, url) {
        this.title = title;
        this.artists = artists instanceof Array ? artists : [artists];
        this.url = url;
        this.playCount = 0;
      }

    static playlist = [
        new Playlist('no song without you', ['HONNE'], 'https://open.spotify.com/track/1lNHWPDvKEbamKezpLq7HW?si=2af7bbdbd4684d98'),
        new Playlist('Paragraphs', ['Luke Chiang'], 'https://open.spotify.com/track/2p9Ac0KQAUfOIXXWAxlzmM?si=07f6d915684a453c'),
        new Playlist('You\'re Gonna Live Forever in Me', ['John Mayer'], 'https://open.spotify.com/track/51lPx6ZCSalL2kvSrDUyJc?si=1e5d3c7566de46f2'),
        new Playlist('La La Lost You - Acoustic Version', ['NIKI', '88rising'], 'https://open.spotify.com/track/5WkCcSa78lM1Ym4LXzJUiN?si=497b3193fe4b4090'),
        new Playlist('Mariposa - Accoustic', ['Peach Tree Rascals'], 'https://open.spotify.com/track/64o1r6z5k2HmTglC2D4IKm?si=0b5c56df29c74b15')
    ];

    static addSong(song) {
        this.playlist.push(song);
    }

    static getPlaylist() {
        return this.playlist;
    }

    static getSongById(id) {
        return this.playlist[id];
    }

    static getSortedPlaylist() {
        return [...this.playlist].sort((a, b) => b.playCount - a.playCount);
    }
  }

  module.exports = Playlist;
