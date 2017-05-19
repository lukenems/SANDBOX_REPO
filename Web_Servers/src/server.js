'use strict';

var express = require('express');
var fs = require('fs');
var path = require('path');
var albums = require('../albums.json');
var artists = require('../artists.json');
var songs = require('../songs.json');

//finds albums in albums.json by artist_id
function albumsForArtist(artistId){
  //array of albums for individual artist
  var albumArr = []
  //loops through albums.json. if the id from the URL matches artist_id, push that
  //that album into individual artist albums array
  for (var i = 0; i < albums.length; i++) {
    if(artistId === albums[i].artist_id){
      albumArr.push(albums[i])
    }
  }
  return albumArr
}

function artistForAlbum(albumId) {
  var artistArr = []

  for (var i = 0; i < artists.length; i++) {
    if (albumId === albums[i].artist_id) {
      artistArr.push(albums[i])
    }
  }
  console.log('artist array' + artistArr)
  return artistArr
}

function songsForAlbum(artistId){
  //array of songs for individual artist
  var songsArr = []
  //loops through songs and pushes songs equal to album_id into songsArr
  for (var i = 0; i < songs.length; i++) {
    if(artistId === songs[i].album_id){
      songsArr.push(songs[i])
    }
  }
  //returns the total song count of album_id
  return songsArr.length
}


var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {
      artists: artists,
    })
})


app.get('/albums', function(req, res){
    res.render('albums', {
      albums: albums,
      artists: artists,
      songs: songs,
    })
})


app.get('/albums/:id', function(req, res){
  var id = parseInt(req.params.id) - 1;
  var artistName = artistForAlbum(id)
    res.render('album', {
      albums: albums[id],
      albums: albums,
      artist: artistName,
      artists: artists,
      songs: songs,
    })
    console.log(artists);
})


app.get('/artists', function(req, res){
    res.render('index', {
      artists: artists,
    })
})

app.get('/artists/:id', function(req, res){
  //converts req.params.id into an integer so it can be passed into artist[id]
  var id = parseInt(req.params.id);
  //assigns artistAlbums to artist_id
  var artistAlbums = albumsForArtist(id)
  //array for all individual artist albums

  var albumSongs = []
  for (var i=0; i < artistAlbums.length; i++) {
    // albumSongs is using both functions
    albumSongs.push(songsForAlbum(artistAlbums[i].id))
  }
    res.render('artist', {
      //makes the index of artists begin at 1 instead of 0
      artist: artists[id - 1],
      album: artistAlbums,
      songCount: albumSongs,
    })

})

app.get('/songs', function(req, res){
  res.render('songs', {
    songs: songs,
  })
});

app.listen(3000, function() {
  console.log("The frontend server is running port 3000 just fine!");
});
