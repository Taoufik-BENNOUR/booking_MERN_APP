const User = require("../models/User")
const bcrypt = require("bcryptjs")
const createError = require("../utils/error")
const jwt = require("jsonwebtoken");

exports.register = async(req,res,next)=>{
    try {
        const salt =  await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword})
        await newUser.save()
        res.status(200).json({msg:"registred"})
    } catch (error) {
        next(error)
    }
}
exports.login = async(req,res,next)=>{
    try {
        const user = await User.findOne({username:req.body.username})

        if(!user) return next(createError(404,"User not found"))
         const isPasswordCorrect =  await bcrypt.compare(req.body.password,user.password)

        if(!isPasswordCorrect) return next(createError(400,"Wrong password or username"))
        const {password,isAdmin,...otherDetails} = user._doc

        const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)

        res.cookie("access_token",token,{httpOnly:true}).json({msg:"login successfull",otherDetails})

    } catch (error) {
        next(error)
    }
}