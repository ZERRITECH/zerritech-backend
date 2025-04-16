const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataFile = path.join(__dirname, '../data/presale.json');

if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, '[]');
}

router.post('/', (req, res) => {
  const { wallet, amount } = req.body;

  if (!wallet || typeof wallet !== 'string' || !wallet.startsWith('T')) {
    return res.status(400).json({ message: 'Invalid TRON wallet address' });
  }

  if (!amount || typeof amount !== 'number' || amount < 10) {
    return res.status(400).json({ message: 'Minimum purchase is 10 USDT' });
  }

  const newPurchase = {
    wallet,
    amount,
    date: new Date().toISOString()
  };

  const purchases = JSON.parse(fs.readFileSync(dataFile));
  purchases.push(newPurchase);
  fs.writeFileSync(dataFile, JSON.stringify(purchases, null, 2));

  res.json({ message: 'Purchase recorded. Awaiting payment.' });
});

module.exports = router;
