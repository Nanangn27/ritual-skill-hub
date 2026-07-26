import Link from 'next/link';

interface TransactionStatusProps {
  txHash: string;
}

export default function TransactionStatus({ txHash }: TransactionStatusProps) {
  return (
    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-1.5 1.5a1 1 0 001.414 1.414L9 9.414V11a1 1 0 102 0v-1.586l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-medium text-blue-800">Transaction Submitted</h3>
          <div className="mt-2 space-y-1 text-sm text-blue-600">
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Transaction Hash:</span>
              <span className="font-mono ml-1">
                <Link
                  href={`https://explorer.ritualfoundation.org/tx/${txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {txHash.slice(0, 6)}...{txHash.slice(-4)}
                </Link>
              </span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
              </svg>
              <span>Block Number:</span>
              <span className="ml-1">Waiting for confirmation...</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
              </svg>
              <span>Timestamp:</span>
              <span className="ml-1">Waiting for confirmation...</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
              </svg>
              <span>From:</span>
              <span className="ml-1">Connecting wallet...</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
              </svg>
              <span>To:</span>
              <span className="ml-1">
                0x433d4d43afd32a5ea40e875236db26d4c3b7886f
              </span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
              </svg>
              <span>Amount:</span>
              <span className="ml-1">0.001 RIT</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
              </svg>
              <span>Status:</span>
              <span className="ml-1">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}