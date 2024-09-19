import dotenv from "dotenv";
dotenv.config();  // Load the environment variables

import express from "express";
import Connection from "./db/conn.js";
import foodRouter from "./routes/foodRoute.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;
app.use("/api/foods", foodRouter);

console.log("MongoDB URL:", process.env.DB_URL);  // Add this line before the Connection call
Connection();


Connection();  // Connect to the database

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


// import express from "express";
// import Connection from "./db/conn.js";
// import dotenv from "dotenv";
// import foodRouter from "./routes/foodRoute.js";
// const app = express();
// import cors from "cors";
// dotenv.config()

// app.use(cors())
// app.use(express.json())
// const PORT = process.env.PORT || 8000
// app.use("/api/foods", foodRouter)

// Connection()
// app.listen(PORT, () =>{
//     console.log("listening on port 8000");
    
// })