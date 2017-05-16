'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send("<h1>Eat more chocolate</h1>")
})

app.listen(3000, function() {
  console.log("The frontend server is running port 3000 just fine!");
});
