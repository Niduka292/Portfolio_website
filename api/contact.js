import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("🚀 Function started");
console.log("📋 All environment variables:", Object.keys(process.env));
console.log("🔍 MONGO_URI exists?", !!process.env.MONGO_URI);
console.log("🔍 MONGO_URI value (first 20 chars):", process.env.MONGO_URI?.substring(0, 20));
// MongoDB connection
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing!");
  throw new Error("Missing MONGO_URI in environment variables");
}

let conn = null;
async function connectDB() {
  try {
    if (conn) {
      console.log("✅ Using cached connection");
      return conn;
    }
    console.log("🔄 Creating new connection...");
    conn = await mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // 5 second timeout
    });
    console.log("✅ MongoDB connected");
    return conn;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}

// Schema
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

// API route handler
export default async function handler(req, res) {
  console.log("📥 Request received:", req.method, req.url);
  
  // CRITICAL: Set headers first
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS for CORS
  if (req.method === 'OPTIONS') {
    console.log("✅ OPTIONS request handled");
    return res.status(200).end();
  }

  try {
    // Connect to DB
    await connectDB();
    console.log("✅ DB connected, processing request");

    if (req.method === "POST") {
      console.log("📝 POST request body:", req.body);
      
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        console.log("❌ Missing required fields");
        return res.status(400).json({ 
          success: false, 
          msg: "All fields are required" 
        });
      }

      const newMsg = new Message({ name, email, message });
      await newMsg.save();
      console.log("✅ Message saved successfully");
      
      return res.status(200).json({ 
        success: true, 
        msg: "Message saved successfully" 
      });
      
    } else if (req.method === "GET") {
      console.log("📋 GET request - fetching messages");
      
      const messages = await Message.find().sort({ createdAt: -1 }).limit(10);
      console.log(`✅ Found ${messages.length} messages`);
      
      return res.status(200).json({ 
        success: true, 
        messages 
      });
      
    } else {
      console.log("❌ Method not allowed:", req.method);
      return res.status(405).json({ 
        success: false, 
        msg: "Method not allowed" 
      });
    }
  } catch (err) {
    console.error("❌ Error in handler:", err);
    console.error("Stack trace:", err.stack);
    
    // CRITICAL: Always return a response, even on error
    return res.status(500).json({ 
      success: false, 
      msg: "Server error", 
      error: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
}