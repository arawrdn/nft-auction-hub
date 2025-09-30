import { appkit } from "./appkit";
import { Auction, Bid } from "../models/auction";

export async function createAuction(nftAddress: string, tokenId: string, startingBid: number): Promise<Auction> {
  const tx = await appkit.sendTransaction({
    to: "0xAuctionContractHere",
    value: 0,
    token: "ETH"
  });

  return { nftAddress, tokenId, startingBid, txHash: tx.hash, status: "pending" };
}

export async function placeBid(auctionId: string, amount: number): Promise<Bid> {
  const tx = await appkit.sendTransaction({
    to: "0xAuctionContractHere",
    value: amount,
    token: "ETH"
  });

  return { auctionId, amount, txHash: tx.hash, status: "pending" };
}
