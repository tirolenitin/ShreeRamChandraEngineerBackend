import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/S_R_Enginners")
  .then((res) => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
