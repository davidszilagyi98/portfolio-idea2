import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Alex Chen | Senior Frontend Engineer',
  description: 'Senior Frontend Engineer at Linear. Building delightful web experiences with React, TypeScript, and modern web technologies.',
  openGraph: {
    title: 'Alex Chen | Senior Frontend Engineer',
    description: 'Senior Frontend Engineer building delightful web experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Chen | Senior Frontend Engineer',
    description: 'Senior Frontend Engineer building delightful web experiences.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
