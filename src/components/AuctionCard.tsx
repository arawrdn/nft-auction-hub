import React from "react";
import { Auction, Bid } from "../models/auction";
import { placeBid } from "../services/auctionService";

interface Props {
  auction: Auction;
}

export const AuctionCard: React.FC<Props> = ({ auction }) => {
  const handleBid = async () => {
    await placeBid(auction.nftAddress + auction.tokenId, 0.05); // demo bid 0.05 ETH
  };

  return (
    <div>
      <p>NFT: {auction.nftAddress} #{auction.tokenId}</p>
      <p>Starting Bid: {auction.startingBid} ETH</p>
      <button onClick={handleBid}>Place Bid</button>
    </div>
  );
};
