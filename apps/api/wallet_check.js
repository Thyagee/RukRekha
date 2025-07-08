// const { PrivateKeyWallet, BlockfrostProvider } = require('@meshsdk/core');
// require('dotenv').config();

// const blockfrost = new BlockfrostProvider(process.env.BLOCKFROST_API_KEY);

// const wallet = new PrivateKeyWallet({
//     networkId: process.env.NETWORK,
//     provider: blockfrost,
//     privateKey: process.env.PRIVATE_KEY,
// });

// async function walletCheck() {
//     const address = await wallet.getAddress();
//     console.log("✅ Wallet Address:", address);
// }

// walletCheck();

const { PrivateKeyWallet, BlockfrostProvider } = require('@meshsdk/core');
require('dotenv').config();

const blockfrost = new BlockfrostProvider(process.env.BLOCKFROST_API_KEY);

const wallet = new Wallet({
  networkId: process.env.NETWORK,
  provider: blockfrost,
  mnemonic: process.env.PROJECT_WALLET_MNEMONIC,
});

// Check wallet address
async function walletCheck() {
  const addr = await wallet.getAddress();
  console.log("Wallet Address:", addr);
}
walletCheck();
