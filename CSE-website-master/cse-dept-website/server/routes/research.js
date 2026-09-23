// server/routes/research.js
const express = require('express');
const Research = require('../models/Research');
const auth = require('../middleware/auth');
const requireRole = require('../middleware/role');

const router = express.Router();

/**
 * PUBLIC: list research projects
 * GET /api/research
 * Optional query: ?year=2024&domain=AI
 */
router.get('/', async (req, res) => {
  try {
    const { year, domain } = req.query;

    const filter = {};
    if (year) filter.year = Number(year);
    if (domain) filter.domain = domain;

    const items = await Research.find(filter).sort({ year: -1, createdAt: -1 });
    res.json(items);
  } catch (err) {
    console.error('Research GET error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * PROTECTED: create new research project
 * Faculty + Admin only
 */
router.post('/', auth, requireRole('faculty', 'admin'), async (req, res) => {
  try {
    const item = await Research.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    console.error('Research POST error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * PROTECTED: update research
 */
router.put('/:id', auth, requireRole('faculty', 'admin'), async (req, res) => {
  try {
    const item = await Research.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(item);
  } catch (err) {
    console.error('Research PUT error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * PROTECTED: delete research
 */
router.delete('/:id', auth, requireRole('faculty', 'admin'), async (req, res) => {
  try {
    await Research.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error('Research DELETE error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
