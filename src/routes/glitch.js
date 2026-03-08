const express = require('express');
const router = express.Router();
const aiRoutes = require('./ai'); // Mengarah ke src/routes/ai.js

// Prefix: /glitch/ai
router.use('/ai', aiRoutes);

module.exports = router;