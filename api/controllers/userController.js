const User = require("../models/User")




//update User 
exports.updateUser = async(req,res,next)=>{
   
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.status(200).json({msg:"User Updated",updatedUser})
    } catch (error) {
        next(error)
    }
}
exports.deleteUser = async(req,res,next)=>{
   
    try {
       await User.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"User has been deleted"})
    } catch (error) {
        next(error)
    }
}
exports.getUser = async(req,res,next)=>{
   
    try {
      const User =  await User.findById(req.params.id)
    res.status(200).json({msg:"User found",User})
    } catch (error) {
        next(error)
    }
}
//GET ALL Users
exports.getUsers = async(req,res,next)=>{
    try {
       const allUsers = await User.find()
    res.status(200).json({msg:"Users found",allUsers})
    } catch (error) {
        next(error)
    }
}
