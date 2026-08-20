import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import { DOMAIN, STORE_NAME, PHONE_NUMBER } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: 'فروشگاه تخصصی دزدگیر اماکن و تجهیزات هوشمند IOT | ELFify',
    template: '%s | ELFify',
  },
  description: 'مرکز تخصصی مشاوره، خرید و استعلام قیمت انواع دزدگیر اماکن سیم‌کارتی، چشمی‌های وزنی، سنسورهای بیسیم و رله‌های کنترل از راه دور هوشمند الفیفای با ۳۶ ماه گارانتی تعویض و ارسال سراسری.',
  keywords: [
    'دزدگیر اماکن',
    'دزدگیر سیم کارتی',
    'خرید دزدگیر منزل',
    'سایلکس SG8-S',
    'فایروال F10',
    'کلاسیک Z4 Ultra',
    'چشمی وزنی',
    'سنسور حرکتی PIR',
    'اینترنت اشیاء',
    'خانه هوشمند',
    'رله هوشمند',
    'الفیفای',
    'ELFify',
  ],
  authors: [{ name: 'ELFify Security Engineering Team', url: DOMAIN }],
  creator: 'ELFify',
  publisher: 'ELFify',
  alternates: {
    canonical: DOMAIN,
    languages: {
      'fa-IR': `${DOMAIN}/fa`,
      'en-US': `${DOMAIN}/en`,
    },
  },
  openGraph: {
    title: 'فروشگاه تخصصی دزدگیر اماکن و تجهیزات هوشمند IOT | ELFify',
    description: 'خرید انواع دزدگیر اماکن سیم‌کارتی، چشمی‌های وزنی و رله‌های هوشمند IOT با ۳۶ ماه گارانتی تعویض',
    url: DOMAIN,
    siteName: STORE_NAME,
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: `${DOMAIN}/example_product.webp`,
        width: 800,
        height: 600,
        alt: 'سیستم دزدگیر اماکن و هوشمندسازی الفیفای',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'فروشگاه تخصصی دزدگیر اماکن و تجهیزات هوشمند IOT | ELFify',
    description: 'تأمین انواع دزدگیر اماکن سیم‌کارتی و رله‌های اینترنت اشیاء با پشتیبانی ۲۴/۷',
    images: [`${DOMAIN}/example_product.webp`],
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0C0F0A' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-[#210B2C] selection:text-white dark:selection:bg-purple-500 dark:selection:text-slate-950" suppressHydrationWarning>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
