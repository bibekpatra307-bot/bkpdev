import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultUrl = process.env.APP_URL || 'http://localhost:3000';
  const baseUrl = defaultUrl.startsWith('http') ? defaultUrl : `https://${defaultUrl}`;

  const routes = [
    '',
    '/about',
    '/services',
    '/services/website-development',
    '/services/mobile-app-development',
    '/services/ui-ux-design',
    '/services/e-commerce-solutions',
    '/services/ai-software-solutions',
    '/services/seo-digital-marketing',
    '/portfolio',
    '/pricing',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-conditions',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
