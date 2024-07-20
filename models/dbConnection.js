import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://nitinwd01:05E9poG485FrzD38@cluster0.qr3ezhy.mongodb.net/ShreeRamChandra?retryWrites=true&w=majority&appName=Cluster0")
  .then((res) => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
