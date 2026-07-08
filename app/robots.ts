import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const defaultUrl = process.env.APP_URL || 'http://localhost:3000';
  const baseUrl = defaultUrl.startsWith('http') ? defaultUrl : `https://${defaultUrl}`;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
