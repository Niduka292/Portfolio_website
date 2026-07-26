import express from "express";
import handler from "../api/contact.js";

const app = express();
app.use(express.json());

// Forward requests to your Vercel serverless function
app.all("/api/contact", (req, res) => handler(req, res));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Local dev server running on http://localhost:${PORT}`);
});