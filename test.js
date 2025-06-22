const { BlockfrostProvider } = require("@meshsdk/core");
require("dotenv").config();

const provider = new BlockfrostProvider(process.env.BLOCKFROST_API_KEY);
console.log("✅ Connected to Blockfrost testnet with API key:", process.env.BLOCKFROST_API_KEY);
