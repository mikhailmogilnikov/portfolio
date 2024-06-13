'use client';

import { useEffect } from 'react';
import { Gradient } from 'whatamesh';

export const GradientBg = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);

  return <canvas id='gradient-canvas' data-js-darken-top data-transition-in />;
};
