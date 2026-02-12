const Song = require('../models/Song');

exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.find({});
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
