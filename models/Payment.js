// models/Payment.js
const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  amount: Number ,
  status: { type: String, default: 'pending' },
  transactionId: String
});
module.exports = mongoose.model('Payment', PaymentSchema);

