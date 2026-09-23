// server/routes/placements.js
const express = require('express');
const Placement = require('../models/Placement');
const auth = require('../middleware/auth');
const requireRole = require('../middleware/role');

const router = express.Router();

/**
 * PUBLIC: list placements
 * GET /api/placements?batchYear=2025
 */
router.get('/', async (req, res) => {
  try {
    const { batchYear } = req.query;

    const filter = {};
    if (batchYear) filter.batchYear = Number(batchYear);

    const items = await Placement.find(filter).sort({
      batchYear: -1,
      packageLPA: -1,
    });

    res.json(items);
  } catch (err) {
    console.error('Placements GET error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * PROTECTED: add placement record
 * Faculty / Admin only
 */
router.post('/', auth, requireRole('faculty', 'admin'), async (req, res) => {
  try {
    const item = await Placement.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    console.error('Placements POST error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * PROTECTED: update placement
 */
router.put('/:id', auth, requireRole('faculty', 'admin'), async (req, res) => {
  try {
    const item = await Placement.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(item);
  } catch (err) {
    console.error('Placements PUT error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * PROTECTED: delete placement
 */
router.delete('/:id', auth, requireRole('faculty', 'admin'), async (req, res) => {
  try {
    await Placement.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error('Placements DELETE error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
