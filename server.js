const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/songs', require('./routes/songs'));
app.get('/', (req, res) => {
  res.send('Backend deployed successfully!');
});
app.listen(5000, async () => {
  console.log('Server running on port 5000');
});
