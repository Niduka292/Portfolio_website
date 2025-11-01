import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// MongoDB connection (Atlas)
if (!process.env.MONGO_URI) {
  throw new Error("Missing MONGO_URI in environment variables");
}

let conn = null;
async function connectDB() {
  if (conn) return conn;
  conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return conn;
}

// Schema (copied from backend/models/message.js)
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

// API route handler
export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;
      const newMsg = new Message({ name, email, message });
      await newMsg.save();
      return res.status(200).json({ success: true, msg: "Message saved successfully" });
    } catch (err) {
      console.error("Error saving message:", err);
      return res.status(500).json({ success: false, msg: "Error saving message" });
    }
  } else if (req.method === "GET") {
    const messages = await Message.find();
    return res.status(200).json(messages);
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
