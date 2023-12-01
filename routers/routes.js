const express = require("express");

const router = express.Router();

const { handlepostturl,hanglegeturl } = require('../controllers/controller');




//first route


router.post("/", handlepostturl);
  
//second route
router.get("/:shortId", hanglegeturl);



module.exports = router