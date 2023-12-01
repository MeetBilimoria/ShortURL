const express = require("express");

const router = express.Router();

const { handlegeturl } = require('../controllers/controller');




//first route


router.post("/",handlegeturl);
  
  
  //second route
  router.get("/:shortId", async (req, res) => {
      
        const shortId = req.params.shortId;
        const entry = await URL.findOne({ shortId });
        return res.redirect(entry.redirect);
     
        
      });
    module.exports = router