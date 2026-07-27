import { http, createConfig } from "wagmi";
import { injected, metaMask } from "wagmi/connectors";

// Ritual Testnet
export const ritualTestnet = {
  id: 1979,
  name: "Ritual Testnet",
  network: "ritual-testnet",
  nativeCurrency: {
    name: "RITUAL",
    symbol: "RIT",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.ritualfoundation.org"],
    },
    public: {
      http: ["https://rpc.ritualfoundation.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Ritual Explorer",
      url: "https://explorer.ritualfoundation.org",
    },
  },
  testnet: true,
} as const;

export const config = createConfig({
  reconnectOnMount: true,
  chains: [ritualTestnet],
  connectors: [
    injected(),
    metaMask(),
  ],
  transports: {
    [ritualTestnet.id]: http(),
  },
});
