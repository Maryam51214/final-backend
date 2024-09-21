

import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import Connection from "./db/conn.js";
import foodRouter from "./routes/foodRoute.js";

dotenv.config();
const app = express();

// CORS configuration
app.use(cors({
  origin: '*' // Your React frontend URL
}));

app.use(express.json());

const PORT = process.env.PORT || 8000;
app.use("/api/foods", foodRouter);

Connection();
app.listen(PORT, () => {
    console.log("listening on port 8000");
});
