const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  code: String,          // e.g. CS301
  name: String,          // e.g. Operating Systems
  semester: Number,      // 3, 4, 5, etc.
  googleSiteLink: String,
});

module.exports = mongoose.model('Course', courseSchema);
