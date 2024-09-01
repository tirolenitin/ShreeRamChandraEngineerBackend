// app.js
import express from "express";
import indexRoute from "./routes/indexRoute.js"; // Adjust the import path as necessary
import connectDB from "./config/dbConnection.js";
import cors from 'cors';

const PORT = process.env.PORT || 8080 ;

const app = express();

// cors origin 

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend's URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

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
