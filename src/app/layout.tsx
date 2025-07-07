import { type Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import ProvidersConfig from '@/components/providers/config'
import DefaultLayout from '@/components/layout/default'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Pixora - Your Premier E-commerce Destination',
    template: '%s | Pixora'
  },
  description: 'Pixora - Your premier e-commerce destination. Discover amazing products and enjoy seamless shopping experience.',
  keywords: ['ecommerce', 'shopping', 'online store', 'pixora', 'products'],
  authors: [{ name: 'Pixora Team' }],
  creator: 'Pixora',
  publisher: 'Pixora',
  metadataBase: new URL('https://pixora.icu'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pixora - Your Premier E-commerce Destination',
    description: 'Discover amazing products and enjoy seamless shopping experience at Pixora.',
    url: 'https://pixora.icu',
    siteName: 'Pixora',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pixora - Your Premier E-commerce Destination',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixora - Your Premier E-commerce Destination',
    description: 'Discover amazing products and enjoy seamless shopping experience at Pixora.',
    images: ['/og-image.jpg'],
    creator: '@pixora',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ProvidersConfig>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </ProvidersConfig>
      </body>
    </html>
  )
}
