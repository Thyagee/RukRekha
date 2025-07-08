const express = require('express');
const { db } = require('../firebase');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const SECRET = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userRef = db.collection('users');
        const snapshot = await userRef.where('email', '==', email).get();

        if (snapshot.empty) {
            return res.status(400).json({ error: "User not found" });
        }

        let userData;
        snapshot.forEach(doc => {
            userData = doc.data();
        });

        const validPassword = await bcrypt.compare(password, userData.password);
        if (!validPassword) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        const token = jwt.sign({ wallet: userData.wallet }, SECRET, { expiresIn: '1d' });

        return res.json({
            message: "Login successful",
            token,
            user: {
                name: userData.name,
                email: userData.email,
                wallet: userData.wallet,
                userType: userData.userType,
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Login failed" });
    }
});

// --- Wallet login route ---
router.post('/login-wallet', async (req, res) => {
  const { wallet } = req.body;
  try {
    const userRef = db.collection('users').doc(wallet);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      // If wallet is not registered, force registration or show error
      // For now: create new user with just wallet
      await userRef.set({
        wallet,
        signupMethod: 'wallet',
        createdAt: new Date()
      });
    }
    // JWT for wallet login
    const token = jwt.sign({ wallet }, SECRET, { expiresIn: '1d' });
    res.json({
      message: "Wallet login successful",
      token,
      wallet
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Wallet login failed" });
  }
});

module.exports = router;