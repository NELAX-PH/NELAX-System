import { MetadataRoute } from 'next';
import { prototypes } from '@/data/prototypes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nelax.system'; // Placeholder production URL

  // Core routes
  const routes = [
    '',
    '/system',
    '/laboratory',
    '/demo',
    '/initiate',
    '/manifesto',
    '/legal',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic laboratory routes
  const labRoutes = prototypes.map((proto) => ({
    url: `${baseUrl}/laboratory/${proto.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...labRoutes];
}
