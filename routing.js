const express= require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("requesting a GET request");
})

router.post('/',(req,res)=>{
    res.send("requesting a POST request")
})

module.exports=router;