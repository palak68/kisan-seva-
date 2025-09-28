const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/book
router.post('/', async (req, res) => {
  try {
    const { img, title, price, paymentMethod } = req.body;
    console.log("📩 Incoming booking:", req.body); // 👈 Add this
    const newBooking = new Booking({ img,
       title,
        price: parseInt(price),
       paymentMethod });
    await newBooking.save();
    console.log("✅ Booking saved:", newBooking); // 👈 Add this
    res.status(201).json({ message: 'Booking confirmed', bookingId: newBooking._id });
  } catch (err) {
    console.error("❌ Booking error:", err.message);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;

