const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config({path:'./config/.env'});
const hotelRoute = require("./api/routes/hotels.js")
const authRoute = require("./api/routes/auth.js");
const userRoute = require("./api/routes/user.js");
const cookieParser = require("cookie-parser");
const app = express()
app.use(express.json())

connectDB()


app.use(cookieParser)

app.use("/api/auth",authRoute)
app.use("/api",hotelRoute)
app.use("/api",userRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMsg = err.message || "error"
    return res.status(errorStatus).json({status:errorStatus,message:errorMsg})
})
app.listen(process.env.PORT,()=>{
    console.log("Server connected to port",process.env.PORT);
})