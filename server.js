const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Verbindung
mongoose.connect('mongodb://localhost:27017/e-learning', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB verbunden'))
    .catch(err => console.error(err));

// Einstiegspunkt
app.get('/', (req, res) => {
    res.send('Willkommen zur E-Learning Plattform!');
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});