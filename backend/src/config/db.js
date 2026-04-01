import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // Optionally: do not crash entirely, let the app stay up if DB is missing during hackathon tests
    // process.exit(1); 
    console.log("Could not connect to MongoDB. Make sure MongoDB is running locally at 27017 or update your MONGODB_URI in .env");
  }
};

export default connectDB;
