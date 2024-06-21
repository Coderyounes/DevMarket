import mongoose from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

main();
