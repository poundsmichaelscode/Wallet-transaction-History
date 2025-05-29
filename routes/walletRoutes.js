const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Dummy data for now
const wallets = {
  'user1': { balance: 1500 },
};

const transactions = {
  'user1': [
    { id: 1, amount: -100, type: 'debit', date: '2025-05-27' },
    { id: 2, amount: 500, type: 'credit', date: '2025-05-25' },
  ]
};

// GET wallet balance
router.get('/balance', auth, (req, res) => {
  const userId = req.user.id;
  const wallet = wallets[userId];

  if (!wallet) return res.status(404).json({ message: 'Wallet not found.' });

  res.json({ balance: wallet.balance });
});

// GET transaction history
router.get('/transactions', auth, (req, res) => {
  const userId = req.user.id;
  const userTransactions = transactions[userId] || [];

  res.json({ transactions: userTransactions });
});

module.exports = router;
