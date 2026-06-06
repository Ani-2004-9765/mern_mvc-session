const mongoose = require('mongoose');

const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017/users").then((result) => {
        console.log("connectedd.....");
        
    }).catch((err) => {
        console.log(err);
        

    });
}

module.exports={connectDB}