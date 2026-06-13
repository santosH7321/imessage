import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db.js";
connectDB();

import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`Server is listing on http://localhost:${PORT}`)
})