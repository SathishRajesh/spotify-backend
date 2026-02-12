const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    isConnected = conn.connections[0].readyState;
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
