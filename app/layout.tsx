import './globals.css';
import type { Metadata } from 'next';
import ScrollEffects from '@/components/ScrollEffects';

export const metadata: Metadata = {
  title: 'Ritoban Dutta — Developer Portfolio',
  description: 'Portfolio site for Ritoban Dutta — Software Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollEffects />
      </body>
    </html>
  );
}
