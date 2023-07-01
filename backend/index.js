const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db')
const sessionRoutes = require('./routes/sessionRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');

connectDB();
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


const PORT =  5000;

app.listen(PORT,()=>{
    console.log("server started");
})

app.use('/sessions',sessionRoutes);
app.use('/volunteer',volunteerRoutes);
app.use('/student',studentRoutes);
// app.use('/')