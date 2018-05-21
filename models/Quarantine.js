var mongoose = require('mongoose');

var quarantineSchema = new mongoose.Schema({
  gateName: String,
  testName: String,
  Risk: String,
  description: String,
  lastrun: String,
  failureCount: String,
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Quarantine', quarantineSchema);
