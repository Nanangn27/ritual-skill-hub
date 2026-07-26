import { http, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, walletConnect, metaMask } from 'wagmi/connectors';

// Define Ritual Chain testnet chain
export const ritualTestnet = {
  id: 1979,
  name: 'Ritual Testnet',
  network: 'ritual-testnet',
  nativeCurrency: { name: 'RITUAL', symbol: 'RIT', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.ritualfoundation.org'] },
    public: { http: ['https://rpc.ritualfoundation.org'] },
  },
  blockExplorers: {
    default: { name: 'Ritual Explorer', url: 'https://explorer.ritualfoundation.org' },
  },
  testnet: true,
} as const;

// Create wagmi config
export const config = createConfig({
  chains: [ritualTestnet],
  connectors: [
    injected(),
    metaMask(),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID ?? '' }),
  ],
  transports: {
    [ritualTestnet.id]: http(),
  },
});