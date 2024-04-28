import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ViewTransitions } from 'next-view-transitions';

import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quazza',
  description: 'We will steal your wallet',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={inter.className}>
          <main>{children}</main>
          <Toaster richColors />
        </body>
      </html>
    </ViewTransitions>
  );
}
