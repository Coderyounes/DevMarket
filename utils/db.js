const mongoose = require('mongoose');

const dotenv = require('dotenv');

mongoose.set('strictQuery', false);
dotenv.config();
class DBClient {
  constructor() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI not found in environment variables');
    }
    this.uri = uri;
    this.status = false;
  }

  async connect() {
    try {
      mongoose.connect(this.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
      this.status = true;
    } catch (err) {
      console.error('Failed to connect to MongoDB', err);
      throw err;
    }
  }

  async isAlive() {
    return this.status;
  }
}

module.exports = DBClient;
