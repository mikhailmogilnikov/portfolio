'use client';

import { m } from 'framer-motion';
import Goo from 'gooey-react';

export const GooeyBg = () => {
  return (
    <m.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 0.3,
        transition: { delay: 1, duration: 2 },
      }}
      className='blur-3xl w-full h-full'
    >
      <Goo>
        <m.svg
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            ease: 'linear',
            repeat: Infinity,
            duration: 20,
            repeatType: 'loop',
          }}
          className='w-full h-[50vh]'
        >
          <m.circle
            initial={{ x: 0, scale: 0.9, fill: 'rgb(102, 102, 255)' }}
            animate={{ x: 100, scale: 1.2, fill: 'rgb(0, 128, 0)' }}
            transition={{
              ease: 'linear',
              repeat: Infinity,
              duration: 10,
              repeatType: 'mirror',
            }}
            cx='35%'
            cy='35%'
            r='25%'
          />
          <m.circle
            initial={{ x: 0, scale: 1.2, fill: 'rgb(255, 51, 153)' }}
            animate={{ x: -100, scale: 0.9, fill: 'rgb(255, 153, 153)' }}
            transition={{
              ease: 'linear',
              repeat: Infinity,
              duration: 10,
              repeatType: 'mirror',
            }}
            cx='65%'
            cy='65%'
            r='25%'
          />
          <m.circle
            initial={{ y: 0, fill: 'rgb(77, 219, 255)' }}
            animate={{ y: -100, fill: 'rgb(115, 0, 255)' }}
            transition={{
              ease: 'linear',
              repeat: Infinity,
              duration: 10,
              repeatType: 'mirror',
            }}
            cx='50%'
            cy='75%'
            r='25%'
          />
        </m.svg>
      </Goo>
    </m.div>
  );
};
