# NFT Auction Hub

**NFT Auction Hub** – A decentralized auction platform for NFTs where users can create auctions, place bids using ETH or stablecoins, and track auction status on-chain.

---

## Features

- Connect wallet via WalletConnect / WalletKit
- Create NFT auctions
- Place bids using ETH or stablecoins
- Track auction status and winning bids
- Minimal and clean React + TypeScript setup

---

## Tech Stack

- **React** – Frontend UI  
- **TypeScript** – Type safety  
- **AppKit (`@reown/appkit`)** – Wallet connection & blockchain interaction  
- **AppKit Adapter Ethers5 (`@reown/appkit-adapter-ethers5`)** – Ethers.js v5 integration  
- **WalletKit (`@reown/walletkit`)** – Multi-wallet support & signing  
- **WalletConnect packages** – Wallet compatibility and utilities  

---

## Setup & Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/nft-auction-hub.git
cd nft-auction-hub

# Install dependencies
npm install

# Start the development server
npm start

# Open in browser
# http://localhost:3000

1. Click "Connect Wallet" to connect your wallet via WalletConnect or WalletKit.
2. Create a new NFT auction (for demo, use placeholder NFT address and token ID).
3. Place bids on any available auction using ETH or supported stablecoins.
4. Track the transaction status (pending, confirmed, failed) and auction results.

Notes

- Replace 0xAuctionContractHere in auctionService.ts with your actual smart contract address.
- NFT addresses and token IDs in demo data should be replaced with real NFTs.
- Currently, ETH is used as the default currency; additional tokens can be added.
- WalletKit and WalletConnect packages ensure multi-wallet compatibility and signing support.
