export interface Auction {
  nftAddress: string;
  tokenId: string;
  startingBid: number;
  txHash?: string;
  status: "pending" | "confirmed" | "failed";
}

export interface Bid {
  auctionId: string;
  amount: number;
  txHash?: string;
  status: "pending" | "confirmed" | "failed";
}
