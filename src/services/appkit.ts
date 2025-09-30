import { AppKit } from "@reown/appkit";
import { AppKitAdapterEthers5 } from "@reown/appkit-adapter-ethers5";
import WalletKit from "@reown/walletkit";

export const appkit = new AppKit({
  adapter: new AppKitAdapterEthers5(),
  network: "mainnet",
});

export const walletKit = new WalletKit({ appkit });

export async function connectWallet() {
  const wallet = await walletKit.connect();
  return wallet;
}
