require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const signup = require('./routes/signup');
const login = require('./routes/login');
const user = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend from web/ directory
app.use(express.static(path.join(__dirname, '../web')));

app.use('/api', signup);
app.use('/api', login);
app.use('/api', user);

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
