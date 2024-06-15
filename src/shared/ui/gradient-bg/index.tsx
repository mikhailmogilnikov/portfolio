'use client';

import { AnimatePresence, m } from 'framer-motion';
import { CSSProperties, useEffect, useState } from 'react';
import { Gradient } from 'whatamesh';

type Props = {
  colors: {
    color1: string;
    color2: string;
    color3: string;
    color4: string;
  };
};

export const GradientBg = ({ colors }: Props) => {
  const [gradient] = useState(new Gradient());
  const [isUpdating, setIsUpdating] = useState(false);

  const { color1, color2, color3, color4 } = colors;

  useEffect(() => {
    if (isUpdating) {
      setTimeout(() => {
        setIsUpdating(false);
      }, 100);
    } else {
      gradient.initGradient('#gradient-canvas');
    }
  }, [isUpdating]);

  useEffect(() => {
    setIsUpdating(true);
  }, [colors]);

  const style = {
    '--gradient-color-1': color1,
    '--gradient-color-2': color2,
    '--gradient-color-3': color3,
    '--gradient-color-4': color4,
  } as CSSProperties;

  return (
    <AnimatePresence>
      {!isUpdating && (
        <m.canvas
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          id='gradient-canvas'
          data-transition-in
          className='-z-10'
          style={style}
        />
      )}
    </AnimatePresence>
  );
};
