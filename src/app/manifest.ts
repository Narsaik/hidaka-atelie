import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HIDAKA Ateliê - Haute Couture Concierge',
    short_name: 'HIDAKA',
    description: 'Alta-costura personalizada no conforto da sua casa. Criação sob medida exclusiva com atendimento concierge em domicílio.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a1a1a',
    orientation: 'portrait',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['fashion', 'lifestyle', 'shopping'],
    lang: 'pt-BR',
  };
}
