const express = require("express");
const URL = require("../models/model");
const router = express.Router();


router.get("/allurl",async(req,res)=>{
    const allurls = await URL.find({})
    return res.render("view",{urlfront:allurls})
})
router.get("/signup",async(req,res)=>{
   
    return res.render("signup")
})
router.get("/login",async(req,res)=>{
   
    return res.render("login")
})

module.exports = router