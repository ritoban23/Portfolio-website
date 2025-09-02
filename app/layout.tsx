import './globals.css';
import type { Metadata } from 'next';
import ScrollEffects from '@/components/ScrollEffects';
import CustomCursor from '@/components/CustomCursor';

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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        <CustomCursor />
        {children}
        <ScrollEffects />
      </body>
    </html>
  );
}
