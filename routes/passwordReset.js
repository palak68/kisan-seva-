const Joi = require('joi');

const forgetPasswordSchema = Joi.object({
  email: Joi.string().email().required()
});
const resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  id: Joi.string().required(),
  password: Joi.string().min(6).required()
});
const express = require('express');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Token = require('../models/Token');
const sendEmail = require('../utils/sendemail'); 

const router = express.Router();

// Password reset link bhejne ka route
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP

    await Token.findOneAndUpdate(
      { userId: user._id },
      { token: otp, createdAt: Date.now() },
      { upsert: true }
    );

    await sendEmail(user.email, 'Password Reset OTP', `आपका पासवर्ड रीसेट OTP है: ${otp}`);

    res.json({ message: 'OTP sent to your email', userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
router.post('/verify-otp', async (req, res) => {
  const verifyOtpSchema = Joi.object({
  id: Joi.string().required(),
  otp: Joi.string().length(6).required(),
  password: Joi.string().min(6).required()
});

const { error } = verifyOtpSchema.validate(req.body);
if (error) return res.status(400).json({ message: error.details[0].message });

  const { id, otp, password } = req.body;
  try {
    const tokenEntry = await Token.findOne({ userId: id });
    if (!tokenEntry) return res.status(400).json({ message: 'OTP not found' });

    const tokenAge = Date.now() - tokenEntry.createdAt.getTime();
    if (tokenAge > 10 * 60 * 1000) {
      await tokenEntry.deleteOne();
      return res.status(400).json({ message: 'OTP expired' });
    }

    if (tokenEntry.token !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    const user = await User.findById(id);
    user.password = await bcrypt.hash(password, 10);
    await user.save();
    await tokenEntry.deleteOne();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});







module.exports = router;
