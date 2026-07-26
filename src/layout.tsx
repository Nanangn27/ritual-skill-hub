"use client";

import Link from 'next/link';
import { useAccount, useConnect, useDisconnect, useChainId } from 'wagmi';
import { metaMask, walletConnect } from 'wagmi/connectors';
import { ritualTestnet } from '@/lib/wagmi';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { address, isConnected, isConnecting } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const chainId = useChainId();
  const router = useRouter();
  const [shortAddress, setShortAddress] = useState<string>('');

  useEffect(() => {
    if (address) {
      setShortAddress(`${address.slice(0, 6)}...${address.slice(-4)}`);
    } else {
      setShortAddress('');
    }
  }, [address]);

  const handleConnect = async () => {
    try {
      await connectAsync({ connector: metaMask() });
    } catch (error) {
      console.error('Failed to connect wallet', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectAsync();
    } catch (error) {
      console.error('Failed to disconnect wallet', error);
    }
  };

  // Check if connected to Ritual Testnet
  const isCorrectNetwork = chainId === ritualTestnet.id;

  // If not on correct network and connected, redirect or show warning
  useEffect(() => {
    if (isConnected && !isCorrectNetwork) {
      // We could show a warning or force a disconnect, but for now just show warning in UI
      console.warn('Please switch to Ritual Testnet');
    }
  }, [isConnected, isCorrectNetwork, chainId]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between py-4">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-indigo-600">
              Ritual Skill Hub
            </Link>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {!isConnected ? (
              <>
                <button
                  onClick={handleConnect}
                  className={`px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 ${isConnecting ? 'cursor-wait' : ''}`}
                  disabled={isConnecting}
                >
                  {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="flex items-center space-x-1">
                    <div className="h-4 w-4 bg-indigo-500 rounded-full"></div>
                    <span className={isCorrectNetwork ? 'text-green-600' : 'text-red-600'}>
                      {isCorrectNetwork ? 'Ritual Testnet' : 'Wrong Network'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>Wallet:</span>
                    <span className="font-mono">{shortAddress}</span>
                  </div>
                </div>
                <button
                  onClick={handleDisconnect}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Disconnect
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      <main className="min-h-[calc(100vh-140px)] px-4 sm:px-6 lg:px-8 py-8">
        {(!isConnected || !isCorrectNetwork) && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
            {!isConnected ? (
              <p>Please connect your wallet to access Ritual Skill Hub.</p>
            ) : (
              <>
                <p>Please switch to Ritual Testnet to continue.</p>
                <button
                  onClick={handleConnect}
                  className="mt-2 px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700"
                >
                  Connect Wallet (Ritual Testnet)
                </button>
              </>
            )}
          </div>
        )}
        {children}
      </main>
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            Ritual Skill Hub &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
