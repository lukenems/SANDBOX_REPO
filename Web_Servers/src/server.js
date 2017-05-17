'use strict';

var express = require('express');
var fs = require('fs');
var path = require('path');
//var home = require('./views/index.ejs');
//var albums = require('./views/albums.ejs');
//var songs = require('./views/songs.ejs');
//var artists = require('./views/artists.ejs');
//var album = require('./views/album.ejs');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  fs.readFile('artists.json', 'utf8', (err, artists) => {
    if (err) throw err;
    artists = JSON.parse(artists)
    console.log("these are the ", typeof artists)
    res.render('index', {
      artists: artists,
    })
})
})

app.get('/albums/:id?', function(req, res){
  // console.log(req.params)
  // var album_id = req.params.album_id;
  // var album = albums[album_id];
  fs.readFile('albums.json', 'utf8', (err, albums) => {
    if (err) throw err;
    albums = JSON.parse(albums)
    console.log("these are the ", typeof albums)
    res.render('albums', {
      albums: albums,
    })
})
})

app.get('/songs', function(req, res){
  console.log(path.isAbsolute(__dirname))
  //read songs.json
  //parse songs json
  fs.readFile('songs.json', 'utf8', (err, songs) => {
    if (err) throw err;
    songs = JSON.parse(songs)
    console.log("these are the ", typeof songs)
    res.render('songs', {
      songs: songs,
    })

  });
 })

app.get('/artists/:artist_id?', function(req, res){
  //var artist_id = req.params.artist_id;
  //var artist = artists[artist_id];
  fs.readFile('artists.json', 'utf8', (err, artists) => {
    if (err) throw err;
    artists = JSON.parse(artists)
    console.log("these are the ", typeof artists)
    res.render('artists', {
      artists: artists,
    })
})
})

app.listen(3000, function() {
  console.log("The frontend server is running port 3000 just fine!");
});
