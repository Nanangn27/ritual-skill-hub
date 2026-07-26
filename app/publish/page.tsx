'use client';

import { useState } from 'react';
import { useAccount, useWalletClient, useChainId } from 'wagmi';
import { parseEther } from 'viem';
import { ritualTestnet } from '@/lib/wagmi';
import TransactionStatus from '@/components/TransactionStatus';

export default function PublishSkill() {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const chainId = useChainId();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    version: '1.0.0',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const isCorrectNetwork = chainId === ritualTestnet.id;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected || !walletClient) {
      setError('Please connect your wallet');
      return;
    }
    if (!isCorrectNetwork) {
      setError('Please switch to Ritual Testnet');
      return;
    }
    if (!formData.title.trim() || !formData.description.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
    setTxHash(null);

    try {
      // Send 0.001 RIT to treasury for publishing a skill
      const treasuryAddress = '0x433d4d43afd32a5ea40e875236db26d4c3b7886f';
      const amount = parseEther('0.001');

      const hash = await walletClient.sendTransaction({
        to: treasuryAddress as `0x${string}`,
        value: amount,
      });

      setTxHash(hash);
      const receipt = await walletClient.waitForTransactionReceipt({ hash });
      if (receipt.status === 'success') {
        setSuccess(true);
        // In a real app, we would call a skill registry contract to store the skill metadata
        // For now, we just show the transaction success
      } else {
        setError('Transaction failed');
      }
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <a href="/" className="text-sm text-indigo-600 hover:text-indigo-500">
          ← Back to Home
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Publish a Skill</h1>
          <p className="text-gray-600 mb-6">
            Share your AI agent skill with the Ritual Chain community. A fee of 0.001 RIT will be sent to the treasury for publishing.
          </p>

          {!isConnected ? (
            <p className="text-gray-500 mb-4">Connect your wallet to publish a skill.</p>
          ) : !isCorrectNetwork ? (
            <p className="text-red-500 mb-4">Please switch to Ritual Testnet to publish a skill.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skill Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter skill title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                  placeholder="Describe what your skill does"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g., AI, NLP, Sentiment"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Version</label>
                <input
                  type="text"
                  name="version"
                  value={formData.version}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="1.0.0"
                />
              </div>

              <div className="flex items-center space-x-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 transition`}
                >
                  {isSubmitting ? 'Publishing...' : 'Publish Skill'}
                </button>
              </div>

              {txHash && (
                <TransactionStatus txHash={txHash} />
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}