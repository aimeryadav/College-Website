// server/models/Placement.js
const mongoose = require('mongoose');

const placementSchema = new mongoose.Schema({
  studentName: { type: String, required: true },                          
  batchYear: Number,                      // e.g. 2025
  company: { type: String, required: true },
  role: String,                           // "SDE", "Analyst", etc.
  packageLPA: Number,                     // 6.5, 12, etc.
  type: { type: String, default: 'On Campus' }, // "On Campus", "Off Campus"
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Placement', placementSchema);
