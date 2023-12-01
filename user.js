const express = require("express");
const fs = require("fs");
const port = 8000;
const app = express();
const users = require("./MOCK_DATA.json");

app
.route("/user/:id")
//getting all the user 
.get((req, res) => {
  return res.json(users); 
})
//getting all the user name/last name
.get((req,res)=>{
const html =`<ul>
${users.map((user) => `<li>First Name: ${user.first_name}</li> <oi>Last Name: ${user.last_name}</oi>`).join("")}
</ul>`
res.send(html)
})
//getting all the user with id
.get((req,res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id == id)
    return res.json(user);
  })


app.listen(port, () => {
  console.log(`The app is running on ${port} `);
});
