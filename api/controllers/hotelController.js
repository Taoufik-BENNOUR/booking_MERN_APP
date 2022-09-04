const Hotel = require("../models/Hotel")
const Room = require("../models/Room")



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
      const hotel =  await Hotel.findById(req.params.hotelId)
    res.status(200).json({msg:"Hotel found",hotel})
    } catch (error) {
        next(error)
    }
}
//GET ALL HOTELS 
exports.getHotels = async(req,res,next)=>{
    const {min,max,...others} = req.query
    try {
       const allHotels = await Hotel.find({...others,
        cheapestPrice:{$gt:min |1 ,$lt:max||9999}}).limit(req.query.limit)
    res.status(200).json({msg:"Hotels found",allHotels})
    } catch (error) {
        next(error)
    }
}

exports.countByCity = async(req,res,next)=>{
    const cities = req.query.cities.split(",")
    try {
       const list = await Promise.all(cities.map(city=>{
        return Hotel.countDocuments({city:city})
       }))
    res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}
exports.countByType = async(req,res,next)=>{
        try {
          const hotelCount =await  Hotel.countDocuments({type:"hotel"})
          const apartmentCount = await Hotel.countDocuments({type:"apartment"})

    res.status(200).json([
        {type:"hotel",count:hotelCount},
        {type:"apartment",count:apartmentCount}])
    } catch (error) {
        next(error)
    }}
exports.getHotelRooms = async(req,res,next)=>{
        try {
          const hotel = await  Hotel.findById(req.params.id)

          const list = await Promise.all(hotel.rooms.map(room=>{
            return Room.findById(room)
          }))
    res.status(200).json(list)
    } catch (error) {
        next(error)
    }}