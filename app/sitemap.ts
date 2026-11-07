import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://muhammedrizwinsadique.vercel.app/', changeFrequency: 'monthly', priority: 1 }];
}
