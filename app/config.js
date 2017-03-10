var mongoose = require('mongoose');
var assert = require('assert');

mongoURI = 'mongodb://localhost/shortlydb';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongodb connection open');
});

module.exports = db;