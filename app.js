const env = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookings');
const paymentRoutes = require('./routes/payments');
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate")
app.use(express.json());
const MONGO_URL = "mongodb://127.0.0.1:27017/Agrimitra";
const methodOverride = require('method-override');
const passwordResetRoutes = require('./routes/passwordReset');



mongoose.connect(MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/auth', passwordResetRoutes);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded ({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.get("/",(req,res)=>{
    res.send("starting")
});
 app.get('/index', (req, res) => {
  res.render("index")
});
app.get('/login', (req, res) => {
  res.render('login');   
});

app.get('/signup', (req, res) => {
  res.render('signup');  
});
app.get('/booking', (req, res) => {
  res.render('booking', { razorpayKey: process.env.RAZORPAY_KEY });;
});

app.get('/forgetpassword', (req, res) => {
  res.render('forgetpassword');
});
app.get('/reset-password', (req, res) => {
  res.render('resetpassword'); 
});
const sendEmail = require('./utils/sendemail');

app.get('/test-email', async (req, res) => {
  try {
    await sendEmail('palaksharma24873@gmail.com', 'Test Email', 'This is a test message');
    res.send('Email sent');
  } catch (err) {
    console.error('Email error:', err.message);
    res.status(500).send('Email failed');
  }
});



app.listen(8080,()=>{
    console.log("server is listing to port 8080")
});