'use client';

import { useParams } from 'next/navigation';
import ExternalLink from '@/components/ExternalLink';
import { useAccount, useWalletClient, useChainId } from 'wagmi';
import { parseEther } from 'viem';
import { waitForTransactionReceipt } from 'viem/actions';
import { ritualTestnet } from '@/lib/wagmi';
import { useState } from 'react';

export default function SkillDetail() {
  const { id } = useParams<{ id: string }>();
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const chainId = useChainId();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Mock skill data - in a real app, this would come from a smart contract
  const skill = {
    id: 1,
    title: 'AI Agent Skill: Sentiment Analysis',
    author: '0x1234567890123456789012345678901234567890',
    description: 'A skill for analyzing sentiment in text data using a pre-trained model.',
    rating: 4.5,
    reviewCount: 12,
    downloadCount: 124,
    tags: ['AI', 'NLP', 'Sentiment'],
    version: '1.0.0',
    createdAt: '2024-01-15',
  };

  const isCorrectNetwork = chainId === ritualTestnet.id;

  const handleRate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected || !walletClient) {
      setError('Please connect your wallet');
      return;
    }
    if (!isCorrectNetwork) {
      setError('Please switch to Ritual Testnet');
      return;
    }
    if (rating < 1 || rating > 5) {
      setError('Please provide a rating between 1 and 5');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
    setTxHash(null);

    try {
      // Send 0.001 RIT to treasury for the rating action
      const treasuryAddress = '0x433d4d43afd32a5ea40e875236db26d4c3b7886f';
      const amount = parseEther('0.001');

      const hash = await walletClient.sendTransaction({
        to: treasuryAddress as `0x${string}`,
        value: amount,
      });

      setTxHash(hash);
      const receipt = await waitForTransactionReceipt(walletClient, { hash });
      if (receipt.status === 'success') {
        setSuccess(true);
        // In a real app, we would also call a rating contract to submit the rating
      } else {
        setError('Transaction failed');
      }
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected || !walletClient) {
      setError('Please connect your wallet');
      return;
    }
    if (!isCorrectNetwork) {
      setError('Please switch to Ritual Testnet');
      return;
    }
    if (!review.trim()) {
      setError('Please write a review');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
    setTxHash(null);

    try {
      // Send 0.001 RIT to treasury for the review action
      const treasuryAddress = '0x433d4d43afd32a5ea40e875236db26d4c3b7886f';
      const amount = parseEther('0.001');

      const hash = await walletClient.sendTransaction({
        to: treasuryAddress as `0x${string}`,
        value: amount,
      });

      setTxHash(hash);
      const receipt = await waitForTransactionReceipt(walletClient, { hash });
      if (receipt.status === 'success') {
        setSuccess(true);
        // In a real app, we would also call a review contract to submit the review
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <a href="/skills" className="text-sm text-indigo-600 hover:text-indigo-500">
          ← Back to Skills
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md border border-gray-200">
        <div className="p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{skill.title}</h1>
            <div className="flex items-center space-x-3 mt-2">
              <span className="text-xs text-gray-500">by</span>
              <ExternalLink address={skill.author} />
              <span className="text-xs text-gray-400">• v{skill.version}</span>
              <span className="text-xs text-gray-400">• {skill.createdAt}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6">{skill.description}</p>

          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-2">
              <span className="text-yellow-400">&#9733;</span>
              <span className="font-medium">{skill.rating.toFixed(1)}</span>
              <span className="ml-2 text-gray-500">({skill.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag: string) => (
                <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Rate this skill</h2>
            <form onSubmit={handleRate} className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    disabled={isSubmitting}
                    className={`h-10 w-10 text-yellow-300 hover:text-yellow-400 transition-colors duration-200 ${
                      rating >= star ? 'text-yellow-400' : 'text-yellow-300'
                    }`}
                  >
                    &#9733;
                  </button>
                ))}
              </div>
              <button
                type="submit"
                disabled={isSubmitting || rating === 0}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Submit Rating
              </button>
            </form>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Write a review</h2>
            <form onSubmit={handleReview} className="space-y-4">
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share your experience with this skill..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={4}
              />
              <button
                type="submit"
                disabled={isSubmitting || !review.trim()}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Submit Review
              </button>
            </form>
          </div>

          {txHash && (
            <div className="mb-4">
              <TransactionStatus txHash={txHash} />
            </div>
          )}

          {error && (
            <div className="p-4 mb-4 bg-red-50 border border-red-200 rounded-md text-red-600">
              {error}
            </div>
          )}

          {success && (
            <div className="p-4 mb-4 bg-green-50 border border-green-200 rounded-md text-green-600">
              Success! Transaction confirmed.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}