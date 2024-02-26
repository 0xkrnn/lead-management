const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser")

const app = express();
const PORT = process.env.PORT || 3000; 


// connecting to database

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection
db.on("error",(err) => console.log(err))
db.once("open",() => console.log("connected to DB"))

// middlewares

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            
    optionSuccessStatus:200,
 }

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser())

// routes
app.use("/leads",require("./routes/leadRoute"));
app.use("/api/user",require('./routes/authentication'));

app.get("/",(req,res) => {
    res.send("Server is running")
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});