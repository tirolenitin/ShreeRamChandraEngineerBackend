import express from "express";

import indexRoute from "./routes/indexRoute.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", indexRoute);

app.listen(8080, () => {
  console.log(`server is running on port 8080`);
});
