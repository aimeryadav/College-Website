const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: String,
  email: String,
  phone: String,
  photoUrl: String,
  profile: String,
});

module.exports = mongoose.model('Faculty', facultySchema);
