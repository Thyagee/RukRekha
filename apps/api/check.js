const dotenv = require('dotenv');

dotenv.config();

console.log("✅ .env Loaded");
console.log("BLOCKFROST_API_KEY:", process.env.BLOCKFROST_API_KEY);
console.log("NETWORK:", process.env.NETWORK);
console.log("MNEMONIC:", process.env.PROJECT_WALLET_MNEMONIC);
console.log("FIREBASE_BUCKET:", process.env.FIREBASE_BUCKET);
