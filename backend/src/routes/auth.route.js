import express from "express";
import { checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const authRoutes = express.Router();

authRoutes.get("/check", protectRoute, checkAuth);

export default authRoutes;