'use client';

import { MeshBackground } from '@mikhailmogilnikov/entities/mesh-bg';
import { Button } from '@mikhailmogilnikov/shared/ui/(buttons)/button';
import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { m } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  PiCaretLeftBold,
  PiGithubLogoBold,
  PiTelegramLogoBold,
} from 'react-icons/pi';
import { SlSocialVkontakte } from 'react-icons/sl';

export const SocialsPage = () => {
  const { push } = useRouter();

  return (
    <>
      <Flex>
        <Button onPress={() => push('/')} radius='full' className='shadow-base'>
          <PiCaretLeftBold size={22} />
          На главную
        </Button>
      </Flex>

      <section className='flex md:gap-8 items-center justify-center flex-col md:flex-row'>
        <MeshBackground />

        <m.button
          onClick={() =>
            window.open('https://github.com/mikhailmogilnikov', '_blank')
          }
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          drag
          dragElastic={0.5}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragSnapToOrigin
          dragTransition={{ bounceDamping: 10 }}
          initial={{ scale: 0.8 }}
          animate={{
            y: 0,
            scale: 1,
            transition: {
              type: 'spring',
              damping: 3,
            },
          }}
          className='w-[40vw] md:w-56 max-md:mr-[35vw] aspect-square bg-gradient-to-tr from-zinc-950 to-zinc-700 rounded-full flex items-center justify-center'
        >
          <PiGithubLogoBold className='text-white w-1/2 h-1/2' />
        </m.button>
        <m.button
          onClick={() =>
            window.open('https://t.me/mikhailmogilnikov', '_blank')
          }
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          drag
          dragElastic={0.5}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragSnapToOrigin
          dragTransition={{ bounceDamping: 10 }}
          initial={{ scale: 0.8 }}
          animate={{
            y: 0,
            scale: 1,
            transition: {
              type: 'spring',
              damping: 3,
            },
          }}
          className='w-[40vw] md:w-56 max-md:ml-[35vw] aspect-square bg-gradient-to-tr from-indigo-400 to-sky-500 rounded-full flex items-center justify-center md:mt-36'
        >
          <PiTelegramLogoBold className='text-white w-1/2 h-1/2' />
        </m.button>
        <m.button
          onClick={() =>
            window.open('https://vk.com/mikhailmogilnikov', '_blank')
          }
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          drag
          dragElastic={0.5}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragSnapToOrigin
          dragTransition={{ bounceDamping: 10 }}
          initial={{ scale: 0.8 }}
          animate={{
            y: 0,
            scale: 1,
            transition: {
              type: 'spring',
              damping: 3,
            },
          }}
          className='w-[40vw] md:w-56 max-md:mr-[35vw] aspect-square bg-gradient-to-tr from-blue-500 to-blue-700 rounded-full flex items-center justify-center'
        >
          <SlSocialVkontakte className='text-white w-1/2 h-1/2' />
        </m.button>
      </section>
    </>
  );
};
