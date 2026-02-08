import './globals.css';
import type { Metadata } from 'next';
import ScrollEffects from '@/components/ScrollEffects';
import CustomCursor from '@/components/CustomCursor';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Ritoban Dutta — Developer Portfolio',
  description: 'Portfolio site for Ritoban Dutta — Software Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img/devrito.png" type="image/png" />
        <link rel="shortcut icon" href="/img/devrito.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/devrito.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Changa+One:ital@0;1&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body style={{ backgroundColor: '#111111' }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />
          {children}
          <ScrollEffects />
        </ThemeProvider>
      </body>
    </html>
  );
}
