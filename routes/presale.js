const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
require('dotenv').config();

// Ganti dengan string koneksi kamu
const uri = process.env.MONGODB_URI;

router.post('/buy', async (req, res) => {
  const { amount, wallet } = req.body;

  if (!amount || !wallet) {
    return res.status(400).json({ message: 'Amount and wallet are required' });
  }

  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('zerritech');
    const collection = db.collection('presale_orders');

    const result = await collection.insertOne({ amount, wallet, date: new Date() });

    res.json({ message: 'Pembelian berhasil', orderId: result.insertedId });
  } catch (error) {
    console.error('❌ Error saving order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
