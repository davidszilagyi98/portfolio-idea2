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
  title: 'David Szilagyi | Web Developer & Digital Product Specialist',
  description: 'Web developer with a background in digital product development, UX design, and e-commerce. Building effective and user-friendly digital solutions.',
  openGraph: {
    title: 'David Szilagyi | Web Developer & Digital Product Specialist',
    description: 'Web developer building effective and user-friendly digital solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Szilagyi | Web Developer & Digital Product Specialist',
    description: 'Web developer building effective and user-friendly digital solutions.',
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
