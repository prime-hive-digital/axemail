import { Router } from "express";
import { send } from "./mail.controller";
import { protect } from "../../middleware/auth.middleware";

const router = Router();

router.post("/send", protect, send);

export default router;
