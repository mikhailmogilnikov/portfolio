'use client';

import { useLightbox } from '@mikhailmogilnikov/shared/lib/hooks/use-lightbox';
import { AnimatePresence } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';

export const Lightbox = () => {
  const { gallery } = useLightbox();

  return (
    <AnimatePresence>
      {gallery && (
        <RemoveScroll className='fixed inset-0 z-[100]'>fds</RemoveScroll>
      )}
    </AnimatePresence>
  );
};
