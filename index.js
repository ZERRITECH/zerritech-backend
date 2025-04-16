const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { connectDB } = require('./db'); // pastikan ini benar

connectDB(); // koneksi database

const presaleRoute = require('./routes/presale');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/presale', presaleRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
