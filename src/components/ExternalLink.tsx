import Link from 'next/link';

interface ExternalLinkProps {
  address: string;
  showFullAddress?: boolean;
}

export default function ExternalLink({ address, showFullAddress = false }: ExternalLinkProps) {
  const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
  const displayAddress = showFullAddress ? address : shortAddress;

  return (
    <Link
      href={`https://explorer.ritualfoundation.org/address/${address}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-indigo-600 hover:text-indigo-500 underline hover:no-underline"
    >
      {displayAddress}
    </Link>
  );
}