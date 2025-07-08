const axios = require('axios');
require('dotenv').config();

const BLOCKFROST_API_KEY = process.env.BLOCKFROST_API_KEY;
const url = 'https://cardano-preprod.blockfrost.io/api/v0/health';

async function checkBlockfrost() {
    try {
        const response = await axios.get(url, {
            headers: {
                project_id: BLOCKFROST_API_KEY
            }
        });
        console.log('✅ Blockfrost API Status:', response.data);
    } catch (error) {
        console.error('❌ Blockfrost API Error:', error.response ? error.response.data : error.message);
    }
}

checkBlockfrost();
