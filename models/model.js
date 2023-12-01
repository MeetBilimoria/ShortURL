const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: { type: String, required: true, unique: true },
    redirect: { type: String, required: true },

    visitHistory: [{ timestamps: { type: Number } }]
  }, { timestamps: true });
  
  const URL = mongoose.model('URL', urlSchema);

  module.exports =  URL