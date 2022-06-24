import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'
import cors from 'cors'
import {signup,bookYourSeats,getonemovie,home} from './router2.js'
import {logins} from './router.js'


//variables
var app = express()  
dotenv.config()
app.use(express.json());
app.use(cors())

//var mongoUrl="mongodb://localhost"
var mongoUrl = process.env.mongoUrl

//create server with mongo
async function createConnection(){
    var client = new MongoClient(mongoUrl);
    await client.connect()
    console.log("connection is ready ")
 return client
}
export var client = await createConnection()



app.use("/home",home)
app.use("/bookYourSeats",bookYourSeats)
app.use("/bookYourSeats",getonemovie)
app.use("/signup",signup)

//book your seats
app.use("/login",logins)

// addMovie
app.post("/admin/addMovie",async function(req,res){
    var data = req.body
    let result =await client.db("movie").collection("mov").insertOne({data})
    res.send(result)
   
})
//sign

//login


app.listen(process.env.PORT)