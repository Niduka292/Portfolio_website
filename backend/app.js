import express from "express";
import handler from "../api/contact.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.static(fileURLToPath(new URL("../frontend", import.meta.url))));
app.get("/CV.pdf", (req, res) => res.sendFile(path.resolve(fileURLToPath(new URL("../CV.pdf", import.meta.url)))));

// Forward requests to your Vercel serverless function
app.all("/api/contact", (req, res) => handler(req, res));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Local dev server running on http://localhost:${PORT}`);
});
