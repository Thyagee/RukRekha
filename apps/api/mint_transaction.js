const { Transaction, BlockfrostProvider, AssetMetadata, resolvePlutusScript } = require('@meshsdk/core');
require('dotenv').config();

// ✅ Setup Blockfrost Provider
const blockfrost = new BlockfrostProvider(process.env.BLOCKFROST_API_KEY);

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
    try {
        const tx = new Transaction({ initiator: blockfrost });

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

        // ✅ Build Transaction
        const unsignedTx = await tx.build();

        // At this point: return unsignedTx to frontend to be signed in user wallet
        // OR: if you truly want to sign server-side, you must use cardano-serialization-lib manually.
        console.log("✅ Unsigned transaction (hex):", unsignedTx.to_hex());
    } catch (err) {
        console.error("❌ Error minting NFT:", err);
    }
}

mintNFT();
