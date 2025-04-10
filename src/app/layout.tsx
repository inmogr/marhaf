
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Marhaf Chamie - Senior AI & Software Engineer',
  description: 'Marhaf Chamie\'s personal portfolio showcasing skills, experience, and projects in AI, full-stack development, and cloud engineering.',
  openGraph: {
    title: 'Marhaf Chamie - Senior AI & Software Engineer',
    description: 'Marhaf Chamie\'s personal portfolio showcasing skills, experience, and projects in AI, full-stack development, and cloud engineering.',
    url: 'https://marhaf-syed.com',
    images: ['https://marhaf-syed.com/og.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marhaf Chamie - Senior AI & Software Engineer',
    description: 'Marhaf Chamie\'s personal portfolio showcasing skills, experience, and projects in AI, full-stack development, and cloud engineering.',
    images: ['https://marhaf-syed.com/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
