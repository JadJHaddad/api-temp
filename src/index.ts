import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors<Request>());
const port = process.env.PORT || 3000;

process.env.URI &&
  mongoose
    .connect(process.env.URI)
    .then(() => console.log("[server] Connected to MongoDB"));

mongoose.connection.on("error", (err) => {
  console.error("[server] MongoDB error: ", err.message);
});

app.listen(port, () => {
  console.log(`[server] Server is running at http://localhost:${port} `);
});
