const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Download this from Firebase console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "rukrekha-45ad3.firebasestorage.app"
});

const db = admin.firestore();
const storage = admin.storage();
module.exports = { db, storage  };
