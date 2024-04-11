'use client';

import { NextUIProvider } from '@nextui-org/react';
import { LazyMotion as FramerMotionProvider, domMax } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@mikhailmogilnikov/shared/lib/providers';

type Props = {
  children: React.ReactNode;
  lng: string;
};

const Providers = ({ children, lng }: Props) => (
  <FramerMotionProvider features={domMax}>
    <LanguageProvider lng={lng}>
      <NextUIProvider>
        <ThemeProvider attribute='class' defaultTheme='system'>
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </LanguageProvider>
  </FramerMotionProvider>
);

export default Providers;
