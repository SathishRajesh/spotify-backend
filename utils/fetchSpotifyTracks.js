const axios = require('axios');
const qs = require('qs');
const Song = require('../models/Song');

const CLIENT_ID = '12d77c528a70423fa627769a98a1c1fe';
const CLIENT_SECRET = '5fac187286d2469ea5fea1a7ee39d692';

async function getAccessToken() {
  const res = await axios.post(
    'https://accounts.spotify.com/api/token',
    qs.stringify({ grant_type: 'client_credentials' }),
    {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );
  return res.data.access_token;
}

async function fetchTracks() {
  try {
  const token = await getAccessToken();
  console.log("Token:", token);

  const res = await axios.get(
    'https://api.spotify.com/v1/search?q=ed+sheeran&type=track&limit=10',
    { headers: { 'Authorization': 'Bearer ' + token } }
  );

  console.log(res.data);
} catch (err) {
  if (err.response) {
    console.error("Status:", err.response.status); 
    console.error("Headers:", err.response.headers);
    console.error("Data:", err.response.data); 
  } else {
    console.error(err.message);
  }
}

}

module.exports = fetchTracks;
