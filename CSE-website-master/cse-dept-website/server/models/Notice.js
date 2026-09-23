const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  visibleTo: { type: String, enum: ['all','students','faculty'], default: 'all' },
  pinned: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notice', noticeSchema);
