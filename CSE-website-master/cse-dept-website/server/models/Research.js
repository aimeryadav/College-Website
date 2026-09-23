// server/models/Research.js
const mongoose = require('mongoose');

const researchSchema = new mongoose.Schema({
  title: { type: String, required: true },          // Project / paper title
  description: String,                              // Short summary
  faculty: String,                                  // "Dr. XYZ, CSE"
  students: [String],                               // ["Gaurav S", "ABC"]
  domain: String,                                   // "AI/ML", "Systems", etc.
  year: Number,                                     // 2024, 2025...
  status: { type: String, default: 'ongoing' },     // "ongoing", "completed", etc.
  link: String,                                     // Google Drive / GitHub / DOI
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Research', researchSchema);
