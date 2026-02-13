const { fetchSongsFromiTunes } = require("../services/deezerService");

const searchSongs = async (req, res) => {
  try {
    const query = req.query.q || "tamil";

    const data = await fetchSongsFromiTunes(query);

    const songs = data.map(song => ({
      id: song.trackId,
      title: song.trackName,
      artist: song.artistName,
      preview: song.previewUrl,
      cover: song.artworkUrl100
    }));
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch songs" });
  }
};

module.exports = { searchSongs };
