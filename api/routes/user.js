const express = require("express")
const { updateUser, deleteUser, getUser, getUsers } = require("../controllers/userController")
const {verifyToken, verifyUser} = require("../utils/verifyToken")

const Router = express.Router()


Router.get("/currentUser",verifyToken,(req,res,next)=>{
    res.send("logged in")
})
//  http://localhost:9000/users/:id
Router.put("/users/:id",verifyUser, updateUser)

//  http://localhost:9000/users/:id
Router.delete("/users/:id",deleteUser)

//  http://localhost:9000/users/:id
Router.get("/users/:id",getUser)

//  http://localhost:9000/users
Router.get("/users",getUsers)




module.exports = Router