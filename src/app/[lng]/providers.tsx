'use client';

import { NextUIProvider } from '@nextui-org/react';
import { LazyMotion as FramerMotionProvider, domMax } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { Provider as StoreProvider } from 'react-redux';
import {
  LanguageProvider,
  OriginTracker,
} from '@mikhailmogilnikov/shared/lib/providers';
import { MenuWrapper } from '@mikhailmogilnikov/widgets/menu';
import { store } from '../_env/store';

type Props = {
  children: React.ReactNode;
  lng: string;
};

const Providers = ({ children, lng }: Props) => (
  <StoreProvider store={store}>
    <OriginTracker>
      <FramerMotionProvider features={domMax}>
        <LanguageProvider lng={lng}>
          <NextUIProvider>
            <ThemeProvider attribute='class' defaultTheme='light'>
              <MenuWrapper>{children}</MenuWrapper>
            </ThemeProvider>
          </NextUIProvider>
        </LanguageProvider>
      </FramerMotionProvider>
    </OriginTracker>
  </StoreProvider>
);

export default Providers;
