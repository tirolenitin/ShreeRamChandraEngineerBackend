// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nitinwd01:05E9poG485FrzD38@cluster0.qr3ezhy.mongodb.net/ShreeRamChandra?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database Connected Successfully to Atlas");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
