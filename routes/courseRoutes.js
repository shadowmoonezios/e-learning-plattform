const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Kurs erstellen
router.post('/', async (req, res) => {
    const { title, description, content, instructor } = req.body;
    try {
        const newCourse = new Course({ title, description, content, instructor });
        await newCourse.save();
        res.status(201).json({ message: 'Kurs erstellt' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;