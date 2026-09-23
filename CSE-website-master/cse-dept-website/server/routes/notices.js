const express = require('express');
const Notice = require('../models/Notice');
const auth = require('../middleware/auth');
const requireRole = require('../middleware/role');

const router = express.Router();

// Get notices (students & faculty must be logged in)
router.get('/', auth, async (req, res) => {
  const role = req.user.role;
  let filter = {};
  if (role === 'student') filter.visibleTo = { $in: ['all','students'] };
  const notices = await Notice.find(filter).sort({ pinned: -1, createdAt: -1 });
  res.json(notices);
});

// Create notice (faculty/admin only)
router.post('/', auth, requireRole('faculty','admin'), async (req, res) => {
  const { title, content, visibleTo } = req.body;
  const notice = await Notice.create({
    title,
    content,
    visibleTo: visibleTo || 'all',
    createdBy: req.user.id
  });
  res.status(201).json(notice);
});

// Update notice
router.put('/:id', auth, requireRole('faculty','admin'), async (req, res) => {
  const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(notice);
});

// Delete notice
router.delete('/:id', auth, requireRole('faculty','admin'), async (req, res) => {
  await Notice.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
