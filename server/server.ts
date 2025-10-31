import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db";
import activityRoutes from "./routes/activityRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/activities", activityRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("🌍 API is running...");
});

// ✅ Start server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
