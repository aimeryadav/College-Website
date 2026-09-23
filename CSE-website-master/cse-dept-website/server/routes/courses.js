const express = require('express');
const Course = require('../models/Course');
const auth = require('../middleware/auth');
const requireRole = require('../middleware/role');

const router = express.Router();

// Students & faculty - must be logged in
router.get('/', auth, async (req, res) => {
  const { semester } = req.query;
  const filter = semester ? { semester: Number(semester) } : {};
  const courses = await Course.find(filter).sort({ semester: 1, code: 1 });
  res.json(courses);
});

// Faculty can create/update
router.post('/', auth, requireRole('faculty','admin'), async (req, res) => {
  const course = await Course.create(req.body);
  res.status(201).json(course);
});

router.put('/:id', auth, requireRole('faculty','admin'), async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(course);
});

module.exports = router;
