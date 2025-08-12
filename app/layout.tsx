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
      <head>
        <link rel="icon" href="/img/devrito.png" type="image/png" />
        <link rel="shortcut icon" href="/img/devrito.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/devrito.png" />
      </head>
      <body>
        {children}
        <ScrollEffects />
      </body>
    </html>
  );
}
