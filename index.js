const express = require("express");
const path = require("path")
const app = express();
const {connectmongodb} = require("./mongoconnect/databaseconnection")

const port = 8000;
const urlrouter = require("./routers/routes")
const userRoutes = require("./routers/userRoutes")
const staticRoutes = require("./routers/staticRoutes")


// mongodb connection

connectmongodb("mongodb://127.0.0.1:27017/shorturl")


//view engine/template
app.set("view engine","ejs");
app.set("views", path.resolve("./views"))



// Schema

//schema end

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//middleware end

// Routes

app.use("/url" , urlrouter)
app.use("/",staticRoutes)
app.use("/user",userRoutes)



//routes end

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}/login`);
});
