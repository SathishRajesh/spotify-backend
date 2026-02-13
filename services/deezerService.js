const axios = require("axios");

const fetchSongsFromiTunes = async (query) => {
  const response = await axios.get(
    "https://itunes.apple.com/search",
    {
      params: {
        term: query,
        media: "music",
        limit: 20
      }
    }
  );

  return response.data.results;
};

module.exports = { fetchSongsFromiTunes };
