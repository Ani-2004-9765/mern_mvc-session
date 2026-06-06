const mongoose = require('mongoose');

const roomSchema= mongoose.Schema({
    RoomNo:{
        type:Number,
        required:true
    },
    RoomType:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    capacity:{
      type:String,
        required:true   
    }

},{timestamps:true}
)

const roomModel=mongoose.model("room",roomSchema)
module.exports=roomModel