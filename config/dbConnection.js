// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://nitinwd01:05E9poG485FrzD38@ac-od2i08s-shard-00-00.qr3ezhy.mongodb.net:27017,ac-od2i08s-shard-00-01.qr3ezhy.mongodb.net:27017,ac-od2i08s-shard-00-02.qr3ezhy.mongodb.net:27017/ShreeRamChandra?ssl=true&replicaSet=atlas-ra8cbw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database Connected Successfully to Atlas");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;




/* 
mongodb://nitinwd01:05E9poG485FrzD38@ac-od2i08s-shard-00-00.qr3ezhy.mongodb.net:27017,ac-od2i08s-shard-00-01.qr3ezhy.mongodb.net:27017,ac-od2i08s-shard-00-02.qr3ezhy.mongodb.net:27017/ShreeRamChandra?ssl=true&replicaSet=atlas-ra8cbw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0
*/