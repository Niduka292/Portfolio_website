const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;
var app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/portfoliio_db")
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