const express = require('express');
const dotenv = require('dotenv');
const bodyParser =require('body-parser')
const app = express();
app.use(bodyParser.json())

//call db connection
const connectDB = require('./config/db')
//load the configurations
dotenv.config({path: './config/config.env'});
connectDB();

app.use('', require('./routes/index'))
app.listen(3000, () => {
    console.log("Server started on port 3000")
})