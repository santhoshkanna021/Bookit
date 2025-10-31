import mongoose from "mongoose";
import dotenv from "dotenv";
import { activities } from "./data/activitiesData";
import Activity from "./models/activityModel";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected...");

    // 🗑️ Clear old data
    await Activity.deleteMany();

    // 🆕 Insert activities with numeric _id
    const formattedActivities = activities.map((item) => ({
      _id: item.id, // ✅ use numeric ID
      title: item.title,
      location: item.location,
      description: item.description,
      price: item.price,
      image: item.image,
    }));

    await Activity.insertMany(formattedActivities);
    console.log("✅ Activities seeded successfully with numeric IDs!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedData();
