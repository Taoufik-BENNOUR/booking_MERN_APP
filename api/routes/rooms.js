const express = require("express")
const { createRoom, updateRoom, deleteRoom, getRoom, getRooms } = require("../controllers/roomController")
const { isAdmin } = require("../utils/verifyToken")

const Router = express.Router()
//  http://localhost:9000/rooms
Router.post("/rooms/:hotelId",isAdmin,createRoom)

//  http://localhost:9000/rooms/:id
Router.put("/rooms/:id",isAdmin,updateRoom)

//  http://localhost:9000/rooms/:id
Router.delete("/rooms/:id:hotelId",isAdmin,deleteRoom)

//  http://localhost:9000/rooms/:id
Router.get("/rooms/:id",isAdmin,getRoom)

//  http://localhost:9000/rooms
Router.get("/rooms",getRooms)

module.exports = Router