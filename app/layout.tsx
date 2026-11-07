import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://muhammedrizwinsadique.vercel.app';
const name = 'Muhammed Rizwin Sadique';
const title = 'Muhammed Rizwin Sadique | Performance Marketing Specialist in Kannur';
const description = 'Muhammed Rizwin Sadique is a Performance Marketing Specialist and Digital Marketing Strategist in Kannur, Kerala, focused on Meta Ads, Google Ads and digital growth.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'MRS Portfolio',
  keywords: [
    'Muhammed Rizwin Sadique',
    'Performance Marketing Specialist',
    'Digital Marketing Strategist',
    'Digital Growth Strategist',
    'Google Ads Specialist',
    'Meta Ads Specialist',
    'Performance Marketing Specialist in Kannur',
    'SEO',
    'AEO',
    'AIO',
    'Web Development'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: siteUrl,
    siteName: name,
    title,
    description,
    locale: 'en_IN'
  },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: '/favicon', type: 'image/png', sizes: '64x64' }], shortcut: '/favicon' }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': siteUrl + '/#person',
      name,
      url: siteUrl,
      jobTitle: ['Performance Marketing Specialist', 'Digital Marketing Strategist', 'Digital Growth Strategist'],
      description: 'Performance marketing, digital marketing strategy and business growth professional based in Kannur, Kerala, India.',
      homeLocation: { '@type': 'Place', name: 'Kannur, Kerala, India' },
      knowsAbout: ['Performance Marketing', 'Digital Marketing Strategy', 'Digital Growth Strategy', 'Meta Ads', 'Google Ads', 'SEO', 'AEO', 'AIO', 'Web Development'],
      sameAs: [
        'https://www.linkedin.com/in/muhammedrizwinsadique/',
        'https://github.com/MuhammedRizwin',
        'https://www.behance.net/rizwinsadique',
        'https://www.instagram.com/riz__win/'
      ]
    },
    {
      '@type': 'ProfilePage',
      '@id': siteUrl + '/#profile',
      url: siteUrl,
      name: title,
      description,
      mainEntity: { '@id': siteUrl + '/#person' }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />{children}</body></html>;
}
