import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
