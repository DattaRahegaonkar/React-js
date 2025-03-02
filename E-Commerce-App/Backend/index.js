const express = require("express");
const cors = require("cors");
require("./db/config");
const app = express();
const Users = require("./db/User");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/signup", async (req, res) => {
  try {   
    let newUser = new Users(req.body);
    let result = await newUser.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {

  if(req.body.password && req.body.email) {
    let user = await Users.findOne(req.body).select("-password");
    if(user) {
      res.send(user);
    } else {
      res.send("User Not Found")
    }
  } else {
    res.send("User Not Found")
  }
  
});

app.listen(3000, () => {
  console.log("Server is Running");
});
