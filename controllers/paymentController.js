const Payment = require('../models/Payment');
const razorpay = require('../utils/razorpay');

exports.initiatePayment = async (req, res) => {
  const { amount, bookingId } = req.body;
  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: 'INR',
    receipt: `receipt_${bookingId}`
  });
  res.json(order);
};

exports.confirmPayment = async (req, res) => {
  const { bookingId, razorpay_payment_id } = req.body;
  const payment = await Payment.findOneAndUpdate(
    { booking: bookingId },
    { status: 'completed', transactionId: razorpay_payment_id },
    { new: true }
  );
  res.json({ success: true, payment });
};
