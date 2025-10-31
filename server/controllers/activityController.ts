import { Request, Response } from "express";
import Activity from "../models/activityModel"; // ✅ corrected import path

// ✅ GET all activities
export const getActivities = async (req: Request, res: Response): Promise<void> => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    console.error("❌ Error fetching activities:", error);
    res.status(500).json({ message: "Failed to fetch activities" });
  }
};

// ✅ GET single activity by ID (numeric _id)
export const getActivityById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id); // ✅ Convert id to number
    const activity = await Activity.findOne({ _id: id });

    if (!activity) {
      res.status(404).json({ message: "Activity not found" });
      return;
    }

    res.status(200).json(activity);
  } catch (error) {
    console.error("❌ Error fetching activity:", error);
    res.status(500).json({ message: "Failed to fetch activity" });
  }
};
