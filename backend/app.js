import express from "express";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { fileURLToPath } from "url";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();
app.use(express.json());
app.use(cors());
app.use("/contact",contactRoutes);

// Serve static frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// Serve default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

mongoose.connect(process.env.MONGO_URI)
.then(function(){
    console.log("MongoDB connected successfully");
})
.catch(function(err){
    console.log("Failed to connected to the MongoDB: ",err);
});

app.get("/", function(req,res){
    res.send("<h1>Express application</h1>")
});

app.listen(PORT,function(){
    console.log(`Server running on http://localhost:${PORT}`);
    
})