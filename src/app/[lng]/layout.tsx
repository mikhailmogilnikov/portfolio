/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { dir } from 'i18next';
import { Viewport } from 'next';
import { Inter } from 'next/font/google';
import { useTranslation } from '@mikhailmogilnikov/shared/i18n';
import {
  fallbackLng,
  languages,
} from '@mikhailmogilnikov/shared/i18n/settings';
import dynamic from 'next/dynamic';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

type MetadataProps = {
  params: { lng: string };
};

type PageProps = MetadataProps & {
  children: React.ReactNode;
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params: { lng } }: MetadataProps) {
  // eslint-disable-next-line no-param-reassign
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng);
  return {
    title: t('title'),
    description: t('description'),
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const DynamicLightbox = dynamic(
  () =>
    import('@mikhailmogilnikov/widgets/lightbox').then((mod) => mod.Lightbox),
  {
    ssr: false,
  },
);

export default async function RootLayout({
  children,
  params: { lng },
}: PageProps) {
  return (
    <html suppressHydrationWarning className='dark' lang={lng} dir={dir(lng)}>
      <head>
        <meta name='theme-color' content='#000000' />
      </head>
      <body className={inter.className}>
        <Providers lng={lng}>
          <DynamicLightbox />
          <main className='w-full h-min min-h-screen flex flex-col gap-12 md:gap-20 items-center p-4 md:p-8 py-10 md:py-12 xl:py-24 !pb-40 max-w-8xl mx-auto overflow-x-hidden'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
