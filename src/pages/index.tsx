import React from "react";
import { WalletConnectButton } from "../components/WalletConnectButton";
import { AuctionCard } from "../components/AuctionCard";
import { Auction } from "../models/auction";

const auctions: Auction[] = [
  { nftAddress: "0xNFT1", tokenId: "1", startingBid: 0.1, status: "pending" },
  { nftAddress: "0xNFT2", tokenId: "2", startingBid: 0.2, status: "pending" },
];

export const HomePage = () => {
  return (
    <div>
      <h1>NFT Auction Hub</h1>
      <WalletConnectButton />
      {auctions.map((auction) => (
        <AuctionCard key={auction.nftAddress + auction.tokenId} auction={auction} />
      ))}
    </div>
  );
};
