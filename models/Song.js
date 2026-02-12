const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  preview_url: String,
  image: String
});

module.exports = mongoose.model('Song', songSchema);
