import express from  "express";
const app =  express()
import cors from "cors";
//import userRoutes from "./Routes/userRoutes.js";
import connectToDb from "./config/db.js";
import "dotenv/config";
app.use(cors());
app.use(express.json());


// connect to db
connectToDb()


