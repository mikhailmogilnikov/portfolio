/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { AnimatePresence, m } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { HiMenu } from 'react-icons/hi';
import { useWindowSize } from 'react-use';
import { useScrollDirection } from '@mikhailmogilnikov/shared/lib/hooks/use-scroll-direction';
import { preventZoom } from '@mikhailmogilnikov/shared/lib/utils/prevent-zoom';
import { updateThemeColor } from '@mikhailmogilnikov/shared/lib/utils/update-theme-color';
import {
  DarkThemeMenuVariant,
  LightThemeMenuVariant,
} from '../config/menu-animation-variants';
import { MenuControls } from './controls';

export const Menu = () => {
  const menuRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const scrollDirection = useScrollDirection();
  const { width, height } = useWindowSize();
  const router = useRouter();
  const [_cookie, setCookie] = useCookies();

  const [scaleSize, setScaleSize] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpened = useCallback(() => {
    if (isMounted) {
      setIsOpened(!isOpened);
    }
  }, [isMounted, isOpened]);

  useEffect(() => {
    router.prefetch('/');
    router.prefetch('/about');
    router.prefetch('/socials');
    router.prefetch('/contact');

    setCookie('theme', 'dark', { expires: new Date() });

    if (resolvedTheme === 'light') {
      setTimeout(() => {
        updateThemeColor('light');
        setCookie('theme', 'light', { expires: new Date() });
      }, 500);
    }

    setTimeout(() => {
      setIsMounted(true);
    }, 900);

    const calcScale = () => {
      if (width / height >= 1) return Math.round(width / 16) + 2;
      return Math.round(height / 16) + 2;
    };

    setScaleSize(calcScale());

    preventZoom();
  }, []);

  useEffect(() => {
    if (isMounted) {
      updateThemeColor(resolvedTheme as string);
      setCookie('theme', resolvedTheme, { expires: new Date() });
    }
  }, [resolvedTheme]);

  if (scaleSize === 0)
    return <div className='sticky bg-black top-0 left-0 w-dvw h-dvh z-50' />;

  const variants = {
    hidden: { scale: scaleSize, backgroundColor: '#000000' },
    visible: {
      scale: 1,
      transition: {
        delay: isMounted ? 0 : 0.5,
        duration: isMounted ? 0.4 : 0.8,
        ease: [0, 1, 0, 1],
      },
    },
    expand:
      resolvedTheme === 'light' ? LightThemeMenuVariant : DarkThemeMenuVariant,
    scrollHide: {
      filter: 'blur(10px)',
      scale: 1,
      opacity: 0,
      y: 110,
    },
  };

  const getAnimation = () => {
    if (isOpened) {
      return 'expand';
    }
    if (scrollDirection === 'down') {
      return 'scrollHide';
    }
    return 'visible';
  };

  return (
    <>
      <m.button
        ref={menuRef}
        initial='hidden'
        animate={getAnimation()}
        variants={variants}
        className='fixed w-16 aspect-square bottom-5 right-5 lg:bottom-10 lg:right-10  cursor-pointer rounded-full flex items-center justify-center outline outline-1 outline-white/25 z-50'
        onClick={handleOpened}
      >
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <HiMenu size={26} className='text-white' />
        </m.div>
      </m.button>
      <AnimatePresence>
        {isOpened && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed w-dvw h-dvh backdrop-blur-md cursor-pointer z-[60]'
            onClick={handleOpened}
          >
            <MenuControls setIsOpened={setIsOpened} />
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
