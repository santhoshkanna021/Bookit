import express from "express";
import { getActivities, getActivityById } from "../controllers/activityController";

const router = express.Router();

// ✅ Routes
router.get("/", getActivities);       // GET all
router.get("/:id", getActivityById);  // GET by ID

export default router;
