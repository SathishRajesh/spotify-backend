const mongoose = require('mongoose');

const connectDB = async () => {
  if (!process.env.MONGO_DB_URL) {
    console.log('MONGO_URI missing');
    return;
  }

  await mongoose.connect(process.env.MONGO_DB_URL);
  console.log('MongoDB connected');
};

module.exports = connectDB;