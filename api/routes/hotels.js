const express = require("express")
const { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, countByType, getHotelRooms } = require("../controllers/hotelController")
const createError = require("../utils/error")
const { isAdmin } = require("../utils/verifyToken")

const Router = express.Router()
//  http://localhost:9000/hotels
Router.post("/hotels",isAdmin, createHotel)

//  http://localhost:9000/hotels/:id
Router.put("/hotels/:id",isAdmin,updateHotel)

//  http://localhost:9000/hotels/:id
Router.delete("/hotels/:id",isAdmin,deleteHotel)

//  http://localhost:9000/hotels/:id
Router.get("/hotels/:hotelId",getHotel)

//  http://localhost:9000/hotels
Router.get("/hotels",getHotels)



Router.get("/countByCity",countByCity)
Router.get("/countByType",countByType)
Router.get("/room/:id",getHotelRooms)

module.exports = Router