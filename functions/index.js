const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Firebase Functions!' });
});

// Example: create an order and save to Firestore
app.post('/orders', async (req, res) => {
  try {
    const order = req.body;
    const docRef = await admin.firestore().collection('orders').add(order);
    res.status(201).json({ id: docRef.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

exports.api = functions.https.onRequest(app);
