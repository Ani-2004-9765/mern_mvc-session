const express = require('express');
const { connectDB } = require('./db');
const router = require('./route/userRoute');
const session = require('express-session');

const app = express()

app.use(session({
    secret:"zyxgchsbdjshv",
    resave: false,
    saveUninitialized : false,
}))

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
app.use("/",router)

app.listen(4000,()=>{
    console.log("Running....");
})