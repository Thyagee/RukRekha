const express = require('express');
const { db } = require('../firebase');
const bcrypt = require('bcrypt');
const fetch = require('node-fetch');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { name, email, wallet, password, confirmPassword, userType, orgName, phone, address, country, orgType, recaptcha } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    // Verify reCAPTCHA token
    const secretKey = "6LcGTncrAAAAAG1oAnbfPUVXoUOqCZoRONK9p-PM"; 
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptcha}`;

    const captchaVerification = await fetch(verificationURL, {
      method: 'POST'
    });
    const captchaResult = await captchaVerification.json();

    if (!captchaResult.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }

    try {
        const userRef = db.collection('users');
        const existing = await userRef.where('email', '==', email).get();
        if (!existing.empty) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await userRef.doc(wallet).set({
            name,
            email,
            wallet,
            password: hashedPassword,
            userType,
            orgName,
            phone,
            address,
            country,
            orgType,
            createdAt: new Date(),
        });

        return res.status(201).json({ message: "Signup successful" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Signup failed" });
    }
});

module.exports = router;
