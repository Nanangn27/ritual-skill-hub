import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CustomLayout from '@/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ritual Skill Hub',
  description: 'A decentralized skill hub for Ritual Chain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{<CustomLayout>{children}</CustomLayout>}</body>
    </html>
  );
}