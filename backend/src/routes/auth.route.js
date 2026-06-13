import express from "express";
import { checkAuth } from "../controllers/auth.controller.js";

const authRoutes = express.Router();

authRoutes.get("/check", checkAuth);

export default authRoutes;