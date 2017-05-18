'use strict';

var express = require('express');
var fs = require('fs');
var path = require('path');
var albums = require('../albums.json');
var artists = require('../artists.json');
var songs = require('../songs.json');

function albumsForArtist(artistId){
  var albumArr = []
  var artistIds = parseInt(artistId) + 1;
  for (var i = 0; i < albums.length; i++) {
    if(artistIds === albums[i].artist_id){
      albumArr.push(albums[i])
    }
  }
  return albumArr
}

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {

    console.log("these are the ", typeof artists)
    res.render('index', {
      artists: artists,
    })
})


app.get('/albums', function(req, res){

    console.log("these are the ", typeof albums)
    res.render('albums', {
      albums: albums,
    })
})


app.get('/albums/:id', function(req, res){
  var id = req.params.id;
    console.log("these are the ", typeof albums)
    res.render('album', {
      albums: albums[id],
    })
})

app.get('/songs', function(req, res){
    res.render('songs', {
      songs: songs,
    })

  });

app.get('/artists', function(req, res){
    res.render('index', {
      artists: artists,
    })
})

app.get('/artists/:id', function(req, res){
  var id = req.params.id;
  var artistAlbums = albumsForArtist(id)
  console.log(artistAlbums);
    res.render('artist', {
      artist: artists[id],
      album: artistAlbums,
    })

})

app.listen(3000, function() {
  console.log("The frontend server is running port 3000 just fine!");
});
