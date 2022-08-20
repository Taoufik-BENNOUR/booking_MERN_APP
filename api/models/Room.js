const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

    maxPeople:{
        type:Number,
    },
    roomNumber:{
        type:[{number:Number,unavailableDate:{ type: [Date] } }],
    },

})

module.exports = mongoose.model("Room",roomSchema)