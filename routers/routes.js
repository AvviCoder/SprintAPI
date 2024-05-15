const MensRanking = require("../models/mens");
const express = require("express");
const router = express.Router;
app.get("/", (req,res)=>{
    res.send("lets test the overall app once again..");
})

router.post("/mens", async(req,res)=>{
    try{
        const addRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertRecord = addRecords.save(); // to create an entry into the database
        res.status(201).send(insertRecord);
    }catch(err)
    {
        res.status(400).send(err);
    }
})

router.get("/getlegends", async(req,res)=>{
    try{ // simple find function will fetch all the data 
        const getPlayer = await MensRanking.find({}).sort({"ranking": 1}); 
        res.status(201).send(getPlayer);
    }catch(err)
    {
        res.status(400).send(err);
    }
})

router.get("/getlegends/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const targetPlayer = await MensRanking.findById({_id});
        res.send(targetPlayer);
    }catch(err)
    {
        res.status(400).send(err);
    }
})

router.patch("/upadatelegends", async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedData = await MensRanking.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.send(updatedData);
    }catch(err)
    {
        res.status(500).send(err);
    }
})

module.exports = router;