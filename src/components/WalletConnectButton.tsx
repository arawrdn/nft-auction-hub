import React from "react";
import { connectWallet } from "../services/appkit";

export const WalletConnectButton = () => {
  const handleConnect = async () => {
    await connectWallet();
  };

  return <button onClick={handleConnect}>Connect Wallet</button>;
};
