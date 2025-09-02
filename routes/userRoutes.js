const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Benutzerregistrierung
router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const newUser = new User({ username, password, email });
        await newUser.save();
        res.status(201).json({ message: 'Benutzer registriert' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;