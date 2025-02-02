require('dotenv').config()
const mongoose = require("mongoose");
const url = process.env.MONGO_URI;

const connectToMongo = () => {
  try {
    mongoose.connect(url);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectToMongo;
