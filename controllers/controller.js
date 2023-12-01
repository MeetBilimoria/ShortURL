const shortid  =  require("shortid");

const URL = require("../models/model");

async function handlepostturl(req, res ,) {
  const body = req.body;
  if (!body.redirect) return res.status(400).json({ error: "URL is required" });

  const shortId = shortid();

  await URL.create({
    shortId: shortId,
    redirect: body.redirect,
      
    visitHistory: [],
  });
  return res.render("view",{ id: shortId })

  
}

async function hanglegeturl(req,res,){
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate({ shortId },
    {$push:
      {visitHistory:
        {timestamps:Date.now()
        }
      }
    },
    {new:true});
  return res.redirect(entry.redirect);
}



module.exports = {
  handlepostturl,hanglegeturl,
};
