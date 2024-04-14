/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

import { clsx } from 'clsx';
import { AnimatePresence, LayoutGroup, m } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { MouseEventHandler, useState } from 'react';
import {
  PiCaretDownBold,
  PiPaperPlaneTiltBold,
  PiShareNetworkBold,
  PiTranslateBold,
} from 'react-icons/pi';
import { RemoveScroll } from 'react-remove-scroll';
import { useMedia } from 'react-use';
import { useClientTranslation } from '@mikhailmogilnikov/shared/i18n/use-client-translation';
import {
  MenuCaretVariants,
  MenuListVariants,
} from '../config/menu-animation-variants';
import { ThemeIcons } from '../config/theme-icons';
import { ESelectedControls } from '../model/selected-controls.enum';

type Props = {
  setIsOpened: (state: boolean) => void;
};

export const MenuControls = ({ setIsOpened }: Props) => {
  const { setTheme, theme } = useTheme();
  const { t, i18n } = useClientTranslation();
  const isDesktop = useMedia('(min-width: 768px)');
  const router = useRouter();

  const [selectedControl, setSelectedControl] = useState(
    ESelectedControls.NONE,
  );

  const handleClick: MouseEventHandler<HTMLLIElement> = (e) => {
    const {
      currentTarget: { id },
    } = e;

    switch (id) {
      case ESelectedControls.THEME: {
        if (selectedControl === ESelectedControls.NONE) {
          setSelectedControl(ESelectedControls.THEME);
        } else {
          setSelectedControl(ESelectedControls.NONE);
        }
        break;
      }
      case ESelectedControls.LANGUAGE: {
        if (selectedControl === ESelectedControls.NONE) {
          setSelectedControl(ESelectedControls.LANGUAGE);
        } else {
          setSelectedControl(ESelectedControls.NONE);
        }
        break;
      }
      default: {
        setSelectedControl(ESelectedControls.NONE);
        setIsOpened(false);
        router.push(`/${id}`);
      }
    }

    e.stopPropagation();
  };

  const handleClickChildren: MouseEventHandler<HTMLButtonElement> = (e) => {
    const {
      currentTarget: { id },
    } = e;

    switch (id) {
      case 'light':
      case 'dark':
      case 'system':
        setTheme(id);
        break;
      case 'ru':
      case 'en':
        router.push(`/${id}`);
        break;
      default:
        return;
    }

    e.stopPropagation();
  };

  const ThemeIcon = ThemeIcons[theme as 'light' | 'dark' | 'system'];

  return (
    <RemoveScroll removeScrollBar={false}>
      <m.ul
        initial={{
          bottom: isDesktop ? 60 : 40,
          scale: 0,
          filter: 'blur(24px)',
        }}
        animate={{
          bottom: isDesktop ? 100 : 80,
          scale: 1,
          filter: 'blur(0px)',
        }}
        exit={{ bottom: 20, scale: 0, filter: 'blur(24px)' }}
        className='absolute right-10 md:right-16 flex flex-col gap-8 items-end origin-bottom-right'
      >
        <LayoutGroup>
          <AnimatePresence>
            {(selectedControl === ESelectedControls.NONE ||
              selectedControl === ESelectedControls.THEME) && (
              <m.li
                layout
                variants={MenuListVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                id='theme'
                onClick={handleClick}
                className='flex flex-col h-min gap-5 items-end'
              >
                <AnimatePresence>
                  {selectedControl === ESelectedControls.THEME && (
                    <m.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          delay: 0.5,
                          duration: 0.3,
                          staggerChildren: 0.5,
                        },
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className='flex flex-col gap-4 text-xl font-medium text-end pb-8'
                    >
                      <m.button
                        id='light'
                        className={clsx('font-medium text-end', {
                          'opacity-50': theme !== 'light',
                        })}
                        onClick={handleClickChildren}
                        initial={{ filter: 'blur(20px)', x: 40 }}
                        animate={{
                          filter: 'blur(0px)',
                          x: 0,
                          transition: { delay: 0.6 },
                        }}
                        exit={{
                          filter: 'blur(20px)',
                          x: 40,
                          transition: { delay: 0.1 },
                        }}
                      >
                        {t('theme.light')}
                      </m.button>
                      <m.button
                        id='dark'
                        className={clsx('font-medium text-end', {
                          'opacity-50': theme !== 'dark',
                        })}
                        onClick={handleClickChildren}
                        initial={{ filter: 'blur(20px)', x: 40 }}
                        animate={{
                          filter: 'blur(0px)',
                          x: 0,
                          transition: { delay: 0.55 },
                        }}
                        exit={{
                          filter: 'blur(20px)',
                          x: 40,
                          transition: { delay: 0.05 },
                        }}
                      >
                        {t('theme.dark')}
                      </m.button>
                      <m.button
                        id='system'
                        className={clsx('font-medium text-end', {
                          'opacity-50': theme !== 'system',
                        })}
                        onClick={handleClickChildren}
                        initial={{ filter: 'blur(20px)', x: 40 }}
                        animate={{
                          filter: 'blur(0px)',
                          x: 0,
                          transition: { delay: 0.5 },
                        }}
                        exit={{
                          filter: 'blur(20px)',
                          x: 40,
                          transition: { delay: 0 },
                        }}
                      >
                        {t('theme.system')}
                      </m.button>
                    </m.div>
                  )}
                </AnimatePresence>

                <m.div layout className='flex gap-5 items-center'>
                  <m.div
                    variants={MenuCaretVariants}
                    initial='static'
                    animate={
                      ESelectedControls.THEME === selectedControl
                        ? 'expand'
                        : 'static'
                    }
                  >
                    <PiCaretDownBold size={18} />
                  </m.div>

                  <p className='text-xl font-semibold'>{t('theme.title')}</p>

                  <ThemeIcon size={28} />
                </m.div>
              </m.li>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {(selectedControl === ESelectedControls.NONE ||
              selectedControl === ESelectedControls.LANGUAGE) && (
              <m.li
                layout
                variants={MenuListVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                id='language'
                onClick={handleClick}
                className='flex flex-col h-min gap-5 items-end'
              >
                <AnimatePresence mode='popLayout'>
                  {selectedControl === ESelectedControls.LANGUAGE && (
                    <m.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          delay: 0.5,
                          duration: 0.3,
                          staggerChildren: 0.5,
                        },
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className='flex flex-col gap-4 text-xl font-medium text-end pb-8'
                    >
                      <m.button
                        id='ru'
                        className={clsx('font-medium text-end', {
                          'opacity-50': i18n.language !== 'ru',
                        })}
                        onClick={handleClickChildren}
                        initial={{ filter: 'blur(20px)', x: 40 }}
                        animate={{
                          filter: 'blur(0px)',
                          x: 0,
                          transition: { delay: 0.55 },
                        }}
                        exit={{
                          filter: 'blur(20px)',
                          x: 40,
                          transition: { delay: 0.05 },
                        }}
                      >
                        Русский
                      </m.button>
                      <m.button
                        id='en'
                        className={clsx('font-medium text-end', {
                          'opacity-50': i18n.language !== 'en',
                        })}
                        onClick={handleClickChildren}
                        initial={{ filter: 'blur(20px)', x: 40 }}
                        animate={{
                          filter: 'blur(0px)',
                          x: 0,
                          transition: { delay: 0.5 },
                        }}
                        exit={{
                          filter: 'blur(20px)',
                          x: 40,
                          transition: { delay: 0 },
                        }}
                      >
                        English
                      </m.button>
                    </m.div>
                  )}
                </AnimatePresence>

                <m.div layout className='flex gap-5 items-center'>
                  <m.div
                    variants={MenuCaretVariants}
                    initial='static'
                    animate={
                      ESelectedControls.LANGUAGE === selectedControl
                        ? 'expand'
                        : 'static'
                    }
                  >
                    <PiCaretDownBold size={18} />
                  </m.div>
                  <p className='text-xl font-semibold'>
                    {' '}
                    {t('language.title')}
                  </p>
                  <PiTranslateBold size={28} />
                </m.div>
              </m.li>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {selectedControl === ESelectedControls.NONE && (
              <m.li
                layout
                variants={MenuListVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                id='socials'
                onClick={handleClick}
                className='flex gap-5 items-center'
              >
                <p className='text-xl font-semibold'>{t('socials')}</p>
                <PiShareNetworkBold size={28} />
              </m.li>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {selectedControl === ESelectedControls.NONE && (
              <m.li
                layout
                variants={MenuListVariants}
                initial='hidden'
                animate='visible'
                exit='hidden'
                id='contact'
                onClick={handleClick}
                className='flex gap-5 items-center'
              >
                <p className='text-xl font-semibold'>{t('contact')}</p>
                <PiPaperPlaneTiltBold size={28} />
              </m.li>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </m.ul>
    </RemoveScroll>
  );
};
