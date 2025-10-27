const express = require("express");
const router = express.Router();
const Message = require("../models/message");

router.post("/",async (req, res) => {
    try{
        const {name, email, message} = req.body;
        const msg = new Message({name, email, message});
        await msg.save();
        res.status(201).json({message: "Message saved successfully"});
    }catch(err){
        console.error(err);
        res.status(500).json({error : "Failed to save message"});
        
    }
});

module.exports = router;