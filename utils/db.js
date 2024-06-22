import mongoose from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';

dotenv.config();

class DBClient {
  constructor() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI not found in environment variables');
    }
    this.uri = uri;
  }

  async connect() {
    try {
      await mongoose.connect(this.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Failed to connect to MongoDB', err);
      throw err;
    }
  }
}

export default DBClient;
