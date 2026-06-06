const express = require('express');
const { connectDB } = require('./db');
const router = require('./route/roomRoute');
const methodOverride = require('method-override');

const app = express()

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
app.use(methodOverride("_method"))
app.use("/",router)

app.listen(5000,()=>{
    console.log("Running....");
})