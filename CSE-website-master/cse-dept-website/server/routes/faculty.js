const express = require('express');
const Faculty = require('../models/Faculty');
const router = express.Router();

router.get('/', async (req, res) => {
  const faculty = await Faculty.find().sort({ name: 1 });
  res.json(faculty);
});

module.exports = router;
