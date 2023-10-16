import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI ?? "");
    console.log("Connected to MongoDB");
    return db;
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;
