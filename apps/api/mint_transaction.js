const { Transaction, BlockfrostProvider, PrivateKeyWallet, AssetMetadata, resolvePlutusScript } = require('@meshsdk/core');
require('dotenv').config();

// ✅ Setup Blockfrost Provider
const blockfrost = new BlockfrostProvider(process.env.BLOCKFROST_API_KEY);

// ✅ Setup Backend Wallet (use PrivateKeyWallet — assumes private key in .env)
const wallet = new PrivateKeyWallet({
    networkId: process.env.NETWORK,
    provider: blockfrost,
    privateKey: process.env.PRIVATE_KEY,
});

// ✅ Load Smart Contract JSON (compiled with Aiken)
const mintScript = resolvePlutusScript('contracts/mint_policy.json');

// ✅ Metadata for NFT
const assetName = 'TreeNFT_TREE12345';  // Must be unique
const assetMetadata = {
    name: "Tree #12345",
    image: "https://firebasestorage.googleapis.com/your-tree-photo.jpg",
    description: "Neem tree planted in Colombo",
    planting_date: "2025-06-25",
    location: "6.9271,79.8612",
    donor: "John Doe",
    qr_code_link: "https://rukrekha.com/tree/TREE12345"
};

// ✅ Construct Transaction
async function mintNFT() {
    const tx = new Transaction({ initiator: wallet });

    // ✅ Attach Minting Policy
    tx.mintAsset(
        {
            script: mintScript,
            assetName: assetName,
            quantity: '1'
        },
        {
            [assetName]: assetMetadata
        }
    );

    // ✅ (Optional) Attach Payment (like tree donation fee)
    // tx.sendLovelace("addr_test1q.....", "5000000"); // Optional ADA payment

    // ✅ Build Transaction
    const unsignedTx = await tx.build();

    // ✅ Sign Transaction
    const signedTx = await wallet.signTx(unsignedTx);

    // ✅ Submit Transaction
    const txHash = await wallet.submitTx(signedTx);

    console.log("✅ Transaction Hash:", txHash);
}

mintNFT();
