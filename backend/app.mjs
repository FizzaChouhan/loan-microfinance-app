import express from  "express";
//Initialize express app
const app =  express()
import cors from "cors";
//import userRoutes from "./Routes/userRoutes.js";
import connectToDb from "./config/db.js";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";

app.use("/api/auth", authRoutes);

//Middleware
app.use(cors());
app.use(express.json());


// connect to db
connectToDb()
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

