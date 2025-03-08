import { Router } from "express";
import { createEvent } from "../controllers/event.controller.js";

const router = Router();

router.get("/events" );
router.post("/events", createEvent);

export default router;