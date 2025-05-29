const express = require('express');
const app = express();
const walletRoutes = require('./routes/walletRoutes');
require('dotenv').config();

app.use(express.json());

// Register routes
app.use('/api/wallet', walletRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


