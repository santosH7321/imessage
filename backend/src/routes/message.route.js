import { Router } from "express";
import { getConversationsForSidebar, getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";
import { upload } from "../middleware/upload.middleware.js";
import { protectRoute } from "../middleware/auth.middleware.js";


export const MessageRouter = Router();

MessageRouter.use(protectRoute);

MessageRouter.get("/user", getUsersForSidebar);
MessageRouter.get("/conversations", getConversationsForSidebar);
MessageRouter.get("/:id", getMessages);
MessageRouter.post("/send/:id", upload.single("media"), sendMessage);