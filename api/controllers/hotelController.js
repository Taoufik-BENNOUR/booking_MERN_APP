const Hotel = require("../models/Hotel")



exports.createHotel = async (req,res,next)=>{
   
    const newHotel = new Hotel(req.body)

    try {
const savedHotel = await newHotel.save()
res.status(200).json(savedHotel)
    } catch (error) {
        next(error)
    }
}
//update hotel 
exports.updateHotel = async(req,res,next)=>{
   
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.status(200).json({msg:"Hotel Updated",updatedHotel})
    } catch (error) {
        next(error)
    }
}
exports.deleteHotel = async(req,res,next)=>{
   
    try {
       await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"Hotel has been deleted"})
    } catch (error) {
        next(error)
    }
}
exports.getHotel = async(req,res,next)=>{
   
    try {
      const hotel =  await Hotel.findById(req.params.id)
    res.status(200).json({msg:"Hotel found",hotel})
    } catch (error) {
        next(error)
    }
}
//GET ALL HOTELS 
exports.getHotels = async(req,res,next)=>{
    try {
       const allHotels = await Hotel.find()
    res.status(200).json({msg:"Hotels found",allHotels})
    } catch (error) {
        next(error)
    }
}
