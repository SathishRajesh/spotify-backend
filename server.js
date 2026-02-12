const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fetchTracks = require('./utils/fetchSpotifyTracks');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://7122002sathish_db_user:jWIleQbov6hvFamx@cluster0.38vg6tr.mongodb.net/').then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/songs', require('./routes/songs'));
app.get('/', (req, res) => {
  res.send('Backend deployed successfully!');
});
app.listen(5000, async () => {
  console.log('Server running on port 5000');
  await fetchTracks();
});
