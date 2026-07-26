import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

console.log("🚀 Function started");

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
      serverSelectionTimeoutMS: 5000,
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

// Configure Nodemailer Transporter outside handler for reusability
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Google 16-character App Password
  },
});

// API route handler
export default async function handler(req, res) {
  console.log("📥 Request received:", req.method, req.url);
  
  // Set headers first
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

      // 1. Save to MongoDB
      const newMsg = new Message({ name, email, message });
      await newMsg.save();
      console.log("✅ Message saved to MongoDB successfully");

      // 2. Send Email Notification
      try {
        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          replyTo: email,
          subject: `New portfolio message from ${name}`,
          html: `
            <h3>New Portfolio Contact Message</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });
        console.log("✉️ Email notification sent successfully");
      } catch (emailErr) {
        // Log email errors specifically so serverless function doesn't crash completely
        console.error("❌ Email sending failed:", emailErr.message);
      }
      
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
    
    return res.status(500).json({ 
      success: false, 
      msg: "Server error", 
      error: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
}