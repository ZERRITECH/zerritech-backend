// db.js
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://zerriuser:Alvin_190695@cluster0.4hszwdl.mongodb.net/zerritech?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

module.exports = { connectDB, client };
