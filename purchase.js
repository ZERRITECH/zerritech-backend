const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  wallet: String,
  amount: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Purchase', purchaseSchema);
