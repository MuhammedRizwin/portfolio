import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://muhammedrizwinsadique.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Muhammed Rizwin Sadique | Performance Marketing Specialist in Kannur',
  description: 'Explore the portfolio of Muhammed Rizwin Sadique, a Performance Marketing Specialist based in Kannur, Kerala, India, working across Meta Ads, digital growth strategy and web development.',
  keywords: [
    'Muhammed Rizwin Sadique',
    'Performance Marketing Specialist',
    'Performance Marketing Specialist in Kannur',
    'Meta Ads',
    'Digital Growth Strategy',
    'Web Development'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: siteUrl,
    siteName: 'Muhammed Rizwin Sadique',
    title: 'Muhammed Rizwin Sadique | Performance Marketing Specialist',
    description: 'Performance Marketing Specialist in Kannur, Kerala, India. Explore my work in Meta Ads, digital growth strategy and web development.',
    locale: 'en_IN'
  },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: '/favicon', type: 'image/png', sizes: '64x64' }], shortcut: '/favicon' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
