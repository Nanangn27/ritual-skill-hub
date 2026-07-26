# Ritual Skill Hub

A decentralized platform for publishing, discovering, and interacting with AI agent skills on the Ritual Chain testnet.

## Features

- **Wallet Connection**: Connect with MetaMask, Rabby, or WalletConnect.
- **Network Check**: Ensures users are on the Ritual Testnet (Chain ID 1979).
- **Skill Discovery**: Browse and search for AI agent skills.
- **Skill Details**: View skill details, rate, review, and download.
- **Publish Skills**: Allow publishers to submit new skills (with a 0.001 RIT fee to the treasury).
- **Rate & Review**: Users can rate and review skills (each action requires a 0.001 RIT fee to the treasury).
- **Transaction Status**: View transaction details on the Ritual Explorer after submission.

## Contract Interactions

Currently, the frontend only sends 0.001 RIT to the treasury address for premium actions (publishing, rating, reviewing). In a complete implementation, the following smart contracts would be interacted with:

1. **Skill Registry Contract**: For publishing, updating, and retrieving skill metadata.
2. **Rating Contract**: For storing and retrieving skill ratings.
3. **Review Contract**: For storing and retrieving skill reviews.
4. **Bookmark Contract**: For allowing users to bookmark skills.

The treasury address is: `0x433d4d43afd32a5ea40e875236db26d4c3b7886f`

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- A wallet compatible with Ritual Testnet (MetaMask, Rabby, WalletConnect)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ritual-skill-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Wagmi Configuration

The Wagmi configuration is in `src/lib/wagmi.ts`. It defines the Ritual Testnet chain:

```typescript
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
};
```

### Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_WC_PROJECT_ID=your_walletconnect_project_id
```

Replace `your_walletconnect_project_id` with your actual WalletConnect project ID.

## Project Structure

- `app/`: Next.js app directory containing pages and layout.
- `src/lib/wagmi.ts`: Wagmi configuration for Ritual Testnet.
- `src/components/`: Reusable components (Wallet connector, Skill card, Transaction status, etc.).
- `public/`: Static assets.

## Known Limitations

1. **Smart Contract Interactions**: Currently, the only blockchain interaction is sending 0.001 RIT to the treasury for premium actions. The actual skill data (metadata, ratings, reviews) is not stored on-chain in this demo. In a production version, smart contracts would handle this data.

2. **Skill Data**: The skill data displayed is hardcoded mock data. In a real application, this would be fetched from smart contracts or a decentralized storage solution (like IPFS) with metadata on-chain.

3. **WalletConnect**: The WalletConnect connector requires a project ID. You need to obtain one from [WalletCloud](https://cloud.walletconnect.com/) and set it in the environment variable.

4. **Error Handling**: Error handling is basic and could be improved for production.

## Future Improvements

- Implement actual smart contracts for skill registry, ratings, reviews, and bookmarks.
- Integrate with IPFS or a decentralized storage solution for storing skill metadata (like code, models, etc.).
- Add user profiles to show published skills, bookmarks, and activity.
- Implement search and filtering skills by skipping already processed items in the skills page (the current filtering is incomplete).
- Add pagination for skills list.
- Improve UI/UX with loading states, better error messages, and responsive design.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built for the Ritual Hackathon.
- Uses Wagmi, Viem, and Next.js.
- Inspired by the need for a decentralized AI skill marketplace.