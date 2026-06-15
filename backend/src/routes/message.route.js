import { Router } from "express";
import { getUsersForSidebar } from "../controllers/message.controller.js";

export const MessageRouter = Router();

MessageRouter.get("/user", getUsersForSidebar);
