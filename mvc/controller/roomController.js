const roomModel = require("../model/roomModel");

const addform=(req,resp)=>{
resp.render("add")
}

const showRooms =async(req,resp)=>{
    try {
        const result = await roomModel.find();
        resp.render("show",{result})
    } catch (error) {
        console.log(error);
        
    }
}

const addRooms= async(req,resp)=>{
    try {

        const result= new roomModel({
            RoomNo:req.body.RoomNo,
            RoomType:req.body.RoomType,
            Price:req.body.Price,
            capacity:req.body.capacity


        })
        await result.save();
        resp.redirect("/showRooms")
        
    } catch (error) {
        console.log(error);
        
    }
}

const deleteRooms = async (req,resp)=>{
    try {
        await roomModel.findByIdAndDelete(req.params.id)
        resp.redirect("/showRooms")
    } catch (error) {
        console.log(error);
    }
}

const editForm = async (req,resp) =>{
    try {
        const roomData = await roomModel.findById(req.params.id);
        console.log(roomData)
        resp.render("edit",{roomData})
    } catch (error) {
        console.log(error);
    }
}

const updateRooms = async(req,resp)=>{
    try {
        await roomModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        resp.redirect("/showRooms")
    } catch (error) {
        console.log(error);
    }
}

module.exports ={showRooms,addRooms,addform,updateRooms,editForm,deleteRooms}