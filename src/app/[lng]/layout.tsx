/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { dir } from 'i18next';
import { Viewport } from 'next';
import { Inter } from 'next/font/google';
import { MenuWrapper } from '@mikhailmogilnikov/widgets/menu';
import { useTranslation } from '@mikhailmogilnikov/shared/i18n';
import {
  fallbackLng,
  languages,
} from '@mikhailmogilnikov/shared/i18n/settings';
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

export default function RootLayout({ children, params: { lng } }: PageProps) {
  return (
    <html suppressHydrationWarning className='dark' lang={lng} dir={dir(lng)}>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/assets/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/assets/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/assets/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/assets/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/assets/favicon/safari-pinned-tab.svg'
          color='#000000'
        />
        <link rel='shortcut icon' href='/assets/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#c2dbff' />
        <meta
          name='msapplication-config'
          content='/assets/favicon/browserconfig.xml'
        />
        <meta name='theme-color' content='#000000' />
      </head>
      <body className={inter.className}>
        <Providers lng={lng}>
          <MenuWrapper>
            <main className='w-full h-min min-h-screen flex flex-col gap-12 md:gap-20 items-center p-4 md:p-8 py-10 md:py-12 xl:py-24 !pb-40 max-w-8xl mx-auto overflow-x-hidden'>
              {children}
            </main>
          </MenuWrapper>
        </Providers>
      </body>
    </html>
  );
}
