# RukRekha 🌳

**RukRekha** is a Cardano-based blockchain platform that verifies tree-planting activities using IoT-style environmental data, NFTs, and smart contracts. It creates transparent, immutable records for reforestation efforts and rewards contributors with eco-badges.

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Cardano](https://img.shields.io/badge/Cardano-0033AD?logo=cardano&logoColor=white)](https://cardano.org/)
[![Status](https://img.shields.io/badge/Status-Work_done-green)](#project-status)

> **RukRekha** (*රුක් රේඛා*) means “Tree Line” or “Tree Record” in Sinhala.

## Live Demo

The project is deployed through Vercel:

**Live Application:** [https://ruk-rekha.vercel.app](https://ruk-rekha.vercel.app)

## YouTube Demonstration

<!-- Replace the URL below with the final YouTube video link -->
**Project Demonstration:** [YouTube Video](https://youtu.be/286Io5gN35w)

## Project Status

Current development focuses on connecting the tree-registration interface, Firebase data storage, Cardano testnet integration, NFT metadata generation, and smart-contract validation into a complete end-to-end workflow.

## Overview

RukRekha aims to make tree-planting claims verifiable rather than relying only on manual reports. A contributor records a planting activity through the web interface; environmental data and activity details can be stored off-chain, while a cryptographic record and NFT-based proof are anchored to the Cardano blockchain.

The platform is designed to support environmental organizations, CSR programs, schools, and individual contributors who need accountable reforestation records.

## Key Features

### Implemented / In Development

- Tree-planting submission form
- Firebase-based off-chain data upload
- Cryptographic hash generation for activity records
- Cardano integration using Lucid
- NFT metadata structure for tree-planting records
- Aiken-based Plutus smart-contract development
- Cardano minting workflow
- Vercel-based deployment configuration

### Planned Features

- Full IoT device integration using ESP32 sensors
- Real-time environmental monitoring
- GPS-based tree-location verification
- Public tree-planting dashboard
- Contributor profiles and impact history
- Eco-badge reward system
- Administrative verification workflow
- Mobile-responsive dashboard improvements
- Automated testing and CI/CD pipeline

## How It Works

```text
Tree Planting Activity
          │
          ▼
Web Submission Form
          │
          ▼
Activity Data + Environmental Readings
          │
          ▼
Hash Generation
          │
          ▼
Firebase Off-Chain Storage
          │
          ▼
Cardano Transaction / Smart Contract Validation
          │
          ▼
Tree NFT / Eco-Badge Minting
          │
          ▼
Immutable Public Verification Record
```

## Technology Stack

| Layer | Technology |
|---|---|
| Front end | HTML, CSS, Bootstrap, JavaScript |
| Blockchain | Cardano Testnet |
| Wallet and transactions | Lucid |
| Blockchain data access | Blockfrost API |
| Smart contracts | Aiken, Plutus V2 |
| NFTs | Cardano native assets and Mesh SDK |
| Off-chain storage | Firebase |
| IoT simulation | JavaScript |
| Deployment | Vercel |
| License | Apache License 2.0 |

## Screenshots

### Tree Planting Form

![Tree planting form](src/docs/tree-form.png)

### Firebase Upload

![Firebase upload](src/docs/firebase-upload.png)

### NFT Metadata

![NFT metadata](src/docs/nft-metadata.png)

### Cardano Minting

![Cardano minting](src/docs/cardano-mint.png)

## Project Structure

```text
RukRekha/
├── apps/                          # Application modules
├── backend/
│   └── contracts/                 # Aiken smart contracts
├── cardano-mint/                  # Cardano NFT minting workflow
├── src/
│   └── docs/                      # Project screenshots and documentation assets
├── firebase_upload.js             # Firebase data upload utility
├── hash_generator.js              # Activity-record hash generation
├── lucid.js                       # Cardano Lucid integration
├── test.js                        # Test script
├── tree_form.html                 # Tree-planting submission interface
├── tree_nft_metadata.json         # NFT metadata template
├── vercel.json                    # Vercel deployment configuration
├── .env                           # Environment variables
├── .gitignore
├── LICENSE
└── README.md
```

## Prerequisites

Install the following before running the project locally:

- Node.js 18 or later
- npm
- A Cardano testnet wallet
- A Blockfrost project ID
- A Firebase project
- Aiken, if modifying or compiling smart contracts

## Installation

Clone the repository:

```bash
git clone [https://github.com/Thyagee/RukRekha.git](https://github.com/Thyagee/RukRekha.git)
cd RukRekha
```

Install dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file in the project root using the required environment variables:

```env
BLOCKFROST_PROJECT_ID=your_blockfrost_project_id
CARDANO_NETWORK=Preprod
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
FIREBASE_APP_ID=your_firebase_app_id
```

> **Security notice:** Do not commit real API keys, wallet seeds, private keys, or production Firebase credentials. The current `.env` file should be removed from version control and replaced with a `.env.example` file.

## Running Locally

Start the application using a local development server:

```bash
npx serve .
```

Then open the displayed local URL in a browser.

To test Cardano-related utilities:

```bash
node test.js
```

## Deployment

The project includes a `vercel.json` configuration for Vercel deployment.

To deploy:

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Configure environment variables in the Vercel project settings.
4. Deploy the application.
5. Verify the deployment using the Cardano Preprod or Preview testnet.

## Smart Contracts

The `backend/contracts` directory contains Aiken-based Plutus smart contracts. These contracts are intended to validate authorized tree-planting submissions before related blockchain actions are accepted.

To build Aiken contracts:

```bash
cd backend/contracts
aiken build
```

## NFT Metadata

`tree_nft_metadata.json` defines the metadata structure used for tree-planting NFTs and eco-badges. Metadata can include tree species, planting date, location reference, contributor information, environmental readings, and verification details.

## Security Considerations

Before production use, implement the following:

- Remove all secrets from Git history and rotate exposed credentials immediately
- Store sensitive values in environment variables or a secrets manager
- Restrict Firebase security rules to authenticated and authorized users
- Validate all form inputs on both client and server
- Use testnet wallets only during development
- Never expose wallet seed phrases or private keys
- Add rate limiting and abuse prevention for public submission endpoints
- Implement audit logging for administrative actions

## Roadmap

- Complete the end-to-end planting verification workflow
- Integrate ESP32-based soil moisture, temperature, and humidity sensors
- Add GPS and photo evidence validation
- Launch the public verification dashboard
- Implement contributor eco-badge rewards
- Add administrative approval and audit tools
- Create automated tests for smart contracts and web utilities
- Add CI/CD, monitoring, and production deployment hardening

## Contributing

Contributions are welcome. Since this project is still in development, please open an issue before submitting major changes.

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "feat: add tree verification workflow"
   ```

4. Push the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

## Author

**Thyagee**  
GitHub: [https://github.com/Thyagee](https://github.com/Thyagee)
**DhanikaJ**
GitHub: [https://github.com/DhanikaJ](https://github.com/DhanikaJ)
