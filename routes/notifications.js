
const express = require('express');
const Notification = require('../models/Notification.js');
const router = express.Router();

router.post('/', async (req, res) => {
  const notif = new Notification(req.body);
  await notif.save();
  res.json(notif);
});
router.get('/:userId', async (req, res) => {
  const notifs = await Notification.find({ user: req.params.userId });
  res.json(notifs);
});
router.put('/:id/read', async (req, res) => {
  const notif = await Notification.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
  res.json(notif);
});
module.exports = router;