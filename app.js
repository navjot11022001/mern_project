const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const port=process.env.PORT || 5000;
dotenv.config({path:'./config.env'});
const cookieParser=require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
app.use(require("./router/auth")); 
//we link with the router file to make ourr app.js file halki
require("./db/conn");
// const User=require("./models/userSchema");
//Middleware

//ye isliye ki express humara jo bhi data json format me aaye to voo hume object form me dikha  paye

// const middleware=(req,res,next)=>{ 
// console.log(`hello middleware`);
// next();
// }




// middleware();

// app.get("/",(req,res)=>{
//      res.send("hello");
// })

// // app.get("/about",middleware,(req,res)=>{
// //     res.send("hello");
// // })
// app.get("/contact",(req,res)=>{
//     res.send("hello");
// })
// app.get("/signin",(req,res)=>{
//     res.send("hello");
// })
// app.get("/signup",(req,res)=>{
//     res.send("hello");
// })



app.listen(port,()=>{
    console.log('server is running')
})