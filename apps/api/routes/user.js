const express = require('express');
const { db } = require('../firebase');
const jwt = require('jsonwebtoken');

const router = express.Router();
const SECRET = process.env.JWT_SECRET;

// 🔐 Middleware to check token
function auth(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: "Token missing" });

    try {
        const decoded = jwt.verify(token, SECRET);
        req.wallet = decoded.wallet;
        next();
    } catch {
        return res.status(401).json({ error: "Invalid token" });
    }
}

// ✅ Get user info
router.get('/user', auth, async (req, res) => {
    const doc = await db.collection('users').doc(req.wallet).get();
    if (!doc.exists) return res.status(404).json({ error: "User not found" });

    const data = doc.data();
    delete data.password; // 🔐 Never send password
    return res.json({ user: data });
});

// ✅ Update profile
router.put('/user', auth, async (req, res) => {
    const updates = req.body;
    delete updates.password;

    await db.collection('users').doc(req.wallet).update(updates);
    return res.json({ message: "User updated" });
});

// ✅ Delete user
router.delete('/user', auth, async (req, res) => {
    await db.collection('users').doc(req.wallet).delete();
    return res.json({ message: "User deleted" });
});

module.exports = router;
