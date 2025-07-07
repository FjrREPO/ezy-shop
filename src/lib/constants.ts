export const SITE_CONFIG = {
  name: 'Pixora',
  domain: 'pixora.life',
  url: 'https://pixora.life',
  description: 'Pixora - Your premier e-commerce destination. Discover amazing products and enjoy seamless shopping experience.',
  keywords: ['ecommerce', 'shopping', 'online store', 'pixora', 'products'],
  author: 'Pixora Team',
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  },
  social: {
    twitter: '@pixora',
    facebook: 'https://facebook.com/pixora',
    instagram: 'https://instagram.com/pixora',
  },
  contact: {
    email: 'contact@pixora.life',
    support: 'support@pixora.life',
  },
  api: {
    baseUrl: process.env.NODE_ENV === 'production' 
      ? 'https://pixora.life/api' 
      : 'http://localhost:3000/api',
  },
} as const;

export const NAVIGATION = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  footer: [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Return Policy', href: '/returns' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'Twitter', href: 'https://twitter.com/pixora' },
        { name: 'Facebook', href: 'https://facebook.com/pixora' },
        { name: 'Instagram', href: 'https://instagram.com/pixora' },
        { name: 'Newsletter', href: '/newsletter' },
      ],
    },
  ],
} as const;
