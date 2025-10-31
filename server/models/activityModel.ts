import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  _id: { type: Number, required: true }, // ✅ numeric ID
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const Activity = mongoose.model("Activity", activitySchema);
export default Activity;
