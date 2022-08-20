const Room = require("../models/Room")
const Hotel = require("../models/Hotel")


exports.createRoom = async(req,res,next)=>{

    const hotelId = req.params.hotelId
    const newRoom = new Room(req.body)
    try {

        const savedRoom = await newRoom.save()
        await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}})
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}

exports.updateRoom = async(req,res,next)=>{
   
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.status(200).json({msg:"Room Updated",updatedRoom})
    } catch (error) {
        next(error)
    }
}
exports.deleteRoom = async(req,res,next)=>{
    const hotelId = req.params.hotelId
    try {
       await Room.findByIdAndDelete(req.params.id)
       await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
    res.status(200).json({msg:"Room has been deleted"})
    } catch (error) {
        next(error)
    }
}
exports.getRoom = async(req,res,next)=>{
   
    try {
      const Room =  await Room.findById(req.params.id)
    res.status(200).json({msg:"Room found",Room})
    } catch (error) {
        next(error)
    }
}
//GET ALL Rooms
exports.getRooms = async(req,res,next)=>{
    try {
       const allRooms = await Room.find()
    res.status(200).json({msg:"Rooms found",allRooms})
    } catch (error) {
        next(error)
    }
}

