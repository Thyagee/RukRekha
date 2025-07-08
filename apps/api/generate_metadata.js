const fs = require('fs');
const path = require('path');

function generateMetadata(data) {
    const { policyId, tree_id, donor, tree_type, location, gps, planting_date, image_url, qr_code_link } = data;

    const metadata = {
        "721": {
            [policyId]: {
                [`TreeNFT_${tree_id}`]: {
                    name: `Tree #${tree_id}`,
                    image: image_url,
                    description: `${tree_type} tree planted in ${location}`,
                    planting_date: planting_date,
                    gps: gps,
                    donor: donor,
                    qr_code_link: qr_code_link
                }
            }
        }
    };

    const filename = `treeNFT_${tree_id}.json`;
    const filePath = path.join(__dirname, 'contracts', 'metadata', filename);

    fs.writeFileSync(filePath, JSON.stringify(metadata, null, 2));
    console.log(`✅ Metadata generated: ${filePath}`);

    return filePath;
}

// ✅ Test Example
generateMetadata({
    policyId: "policyid1234567890abcdef",
    tree_id: "TREE12345",
    donor: "John Doe",
    tree_type: "Neem",
    location: "Colombo",
    gps: "6.9271,79.8612",
    planting_date: "2025-06-25",
    image_url: "https://firebasestorage.googleapis.com/yourimage.jpg",
    qr_code_link: "https://rukrekha.com/tree/TREE12345"
});
