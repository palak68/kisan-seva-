const Booking = require('../models/Booking');
const Payment = require('../models/Payment');

exports.createBooking = async (req, res) => {
  const { title, price, img, paymentMethod } = req.body;

  const booking = new Booking({ title, price, img, paymentMethod });
  await booking.save();

  const payment = new Payment({
    booking: booking._id,
    amount: price,
    status: paymentMethod === 'Cash on Delivery' ? 'completed' : 'pending',
    transactionId: paymentMethod === 'Cash on Delivery' ? 'COD-' + Date.now() : null
  });
  await payment.save();

  res.json({ bookingId: booking._id });
};
