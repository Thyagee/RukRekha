import * as blake from 'blakejs';

const treeData = {
    tree_id: "TREE12345",
    planter_name: "GreenOrg",
    tree_type: "Neem",
    location: { lat: "6.9271", long: "79.8612" },
    date_planted: "2025-06-24"
};

// ✅ Convert JSON to string
const treeDataString = JSON.stringify(treeData);

// ✅ Convert string to Uint8Array
const inputBytes = new TextEncoder().encode(treeDataString);

// ✅ Generate hash
const hash = blake.blake2b(inputBytes, null, 32);

// ✅ Convert hash to hex string
const hashHex = Buffer.from(hash).toString('hex');

// ✅ Output
console.log("Original Data:\n", treeDataString);
console.log("\nHash (Blake2b 256-bit):\n", hashHex);

