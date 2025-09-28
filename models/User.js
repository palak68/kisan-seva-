const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true  },
  password: { type: String, required: true },
  userType: { type: String, enum: ['farmer', 'tractor_owner', 'worker'], },
  location: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);