/* eslint-disable consistent-return */

import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { m, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TbPhotoVideo } from 'react-icons/tb';

export const Video = ({ url }: Pick<TGalleryItem, 'url'>) => {
  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleCanPlayThrough = () => {
      setIsLoaded(true);
    };

    const videoElement = ref.current;

    if (!videoElement) return;

    videoElement.addEventListener('canplaythrough', handleCanPlayThrough);

    return () => {
      videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, []);

  useEffect(() => {
    const videoElement = ref.current;

    if (!videoElement) return;

    if (isInView) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }, [isInView]);

  const tempUrl = isInView ? url : '';

  return (
    <div className='w-full h-full relative flex items-center justify-center'>
      <m.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={ref}
        loop
        autoPlay={false}
        playsInline
        muted
        preload='none'
        controls={false}
        src={isLoaded ? url : tempUrl}
        className='absolute w-full h-full snap-start flex-shrink-0 object-cover z-10'
      />
      <TbPhotoVideo className='animate-pulse z-0 w-1/4 h-1/4' />
    </div>
  );
};
