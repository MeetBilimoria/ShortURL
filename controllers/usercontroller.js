    const USER = require("../models/usermodel")

    async function handlesignup(req,res){
        const { name ,email, password} = req.body
        await USER.create({
            name,email,password
        })
        return res.render("login")
    }
    async function handlelogin(req,res){
        const { email, password} = req.body
        const user = await USER.findOne({email,password})
        if(!user)return  res.render("login",{
            error:"invalid user or password"
        })
        
        return res.redirect("/static/allurl")
      
    }

    module.exports = {handlesignup ,handlelogin}
