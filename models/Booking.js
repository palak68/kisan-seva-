const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  title: String,
  price: Number,
  img: String,
  paymentMethod: String,
  status: { type: String, default: 'pending' }
});
module.exports = mongoose.model('Booking', BookingSchema);
