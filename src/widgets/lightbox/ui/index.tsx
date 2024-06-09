'use client';

import { useLightbox } from '@mikhailmogilnikov/shared/lib/hooks/use-lightbox';
import { AnimatePresence } from 'framer-motion';
import { LightboxContent } from './lightbox';

export const Lightbox = () => {
  const { gallery } = useLightbox();

  return (
    <AnimatePresence>
      {gallery && <LightboxContent image={gallery[0]} />}
    </AnimatePresence>
  );
};
