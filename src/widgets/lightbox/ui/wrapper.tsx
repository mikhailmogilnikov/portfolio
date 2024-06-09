import { useLightbox } from '@mikhailmogilnikov/shared/lib/hooks/use-lightbox';
import { calculateFullscreenByAspect } from '@mikhailmogilnikov/shared/lib/utils/calculate-fullscreen-by-aspect';
import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { Text } from '@mikhailmogilnikov/shared/ui/(layout)/text';
import {
  AnimatePresence,
  PanInfo,
  m,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { PropsWithChildren, useEffect, useState } from 'react';
import { PiArrowCircleDownBold, PiHandTap } from 'react-icons/pi';
import { useLocalStorage, useWindowSize } from 'react-use';

type Props = {
  image: TGalleryItem;
} & PropsWithChildren;

export const LightboxWrapper = ({ children, image }: Props) => {
  const { gallery, setGallery, size } = useLightbox();
  const [dragCount, setDragCount] = useLocalStorage('drag-count', 1);
  const { width, height } = useWindowSize();
  const y = useMotionValue(0);

  const [imageWidth, setImageWidth] = useState(size.width);
  const [imageHeight, setImageHeight] = useState(size.height);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (gallery) {
      const { width: imgWidth, height: imgHeight } =
        calculateFullscreenByAspect(gallery[0].aspect, width, height);
      setImageWidth(imgWidth);
      setImageHeight(imgHeight);
    }
  }, [width, height]);

  const scale = useTransform(y, [-300, 0, 300], [0.75, 1, 0.75]);

  const closeGallery = () => {
    setGallery(null);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (Math.abs(info.offset.y) >= 40) {
      if (dragCount) {
        setDragCount(dragCount + 1);
      }

      closeGallery();
    }
  };

  return (
    <>
      <m.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        type='button'
        aria-label='Close lightbox'
        onClick={closeGallery}
        className='absolute inset-0 backdrop-blur-2xl bg-background/50 z-10'
      />
      <m.div
        layoutId={`${image.url}_item`}
        style={{
          aspectRatio: image.aspect,
          width: imageWidth,
          height: imageHeight,
          y,
          scale,
        }}
        drag
        dragSnapToOrigin
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.7}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onDragStart={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
        onTouchEnd={() => setIsDragging(false)}
        onDragEnd={handleDragEnd}
        className='max-w-[92vw] max-h-[92vh] rounded-2xl bg-default z-20 cursor-grab shadow-base relative  overflow-clip border-1 border-separate'
      >
        {children}
        {!!dragCount && dragCount < 2 && (
          <PiHandTap
            size={36}
            className='opacity-30 absolute top-4 right-4 animate-pulse'
          />
        )}
      </m.div>
      <AnimatePresence>
        {isDragging && dragCount && dragCount < 6 && (
          <m.div
            initial={{ scale: 0, filter: 'blur(24px)', opacity: 0 }}
            animate={{
              scale: 1,
              filter: 'blur(0px)',
              opacity: 1,
              transition: { delay: 0.2 },
            }}
            exit={{ scale: 0, filter: 'blur(24px)', opacity: 0 }}
            className='w-64 max-w-[98vw] h-16 bg-black border-1 border-divider rounded-full absolute bottom-4 z-30 origin-bottom flex items-center justify-center px-4 gap-3'
          >
            <PiArrowCircleDownBold
              size={36}
              className='text-white flex-shrink-0'
            />
            <Text className='font-semibold text-white'>
              Потяните вниз, чтобы закрыть
            </Text>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
