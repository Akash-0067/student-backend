import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB Connected successfully');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1); 
  }
};
