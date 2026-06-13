import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db.js";
connectDB();

import express from "express";
import cors from "cors";
import { clerkMiddleware } from '@clerk/express'

const app = express();

const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({origin: FRONTEND_URL, credentials: true}));
app.use(express.urlencoded({extended: true}));
app.use(clerkMiddleware())

app.listen(PORT, () => {
    console.log(`Server is listing on http://localhost:${PORT}`)
})