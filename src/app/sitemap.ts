import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hidaka-atelie.vercel.app';
  const lastModified = new Date();

  const routes = [
    '',
    '/sobre',
    '/servico',
    '/processo',
    '/portfolio',
    '/contato',
    '/politica-privacidade',
    '/termos-uso',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contato' ? 0.9 : 0.8,
  }));
}
