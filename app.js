// app.js
import express from "express";
import indexRoute from "./routes/indexRoute.js"; // Adjust the import path as necessary
import connectDB from "./config/dbConnection.js";

const PORT = process.env.PORT || 8080;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", indexRoute);

// Initialize database connection and start the server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
