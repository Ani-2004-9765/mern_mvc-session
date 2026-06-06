const express = require('express');
const router=express.Router()
const {showRooms,addRooms,addform,updateRooms,editForm,deleteRooms} = require('../controller/roomController');

router.get("/addRooms",addform)
router.post("/addRooms",addRooms)

router.get("/showRooms",showRooms)

router.get("/Edit/:id",editForm)
router.patch("/updateRooms/:id",updateRooms)

router.delete("/deleteRooms/:id",deleteRooms)

module.exports=router



