import mongoose from 'mongoose';
import { config } from 'dotenv';
config();
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      autoIndex: true,
      autoCreate: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB connected: ${connection.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
