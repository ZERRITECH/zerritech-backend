const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  buyerAddress: String,
  amount: Number,
  trxHash: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Purchase', purchaseSchema);
