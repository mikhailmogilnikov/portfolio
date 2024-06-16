import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { m, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TbPhotoVideo } from 'react-icons/tb';

export const Video = ({ url }: Pick<TGalleryItem, 'url'>) => {
  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref);
  const [videoSrc, setVideoSrc] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      if (loading || videoSrc) return;

      const controller = new AbortController();
      controllerRef.current = controller;
      setLoading(true);

      try {
        const response = await fetch(url, {
          headers: {
            Range: 'bytes=0-',
          },
          signal: controller.signal,
        });

        if (response.ok) {
          const blob = await response.blob();
          const videoUrl = URL.createObjectURL(blob);
          setVideoSrc(videoUrl);
        } else {
          console.error(
            'Ошибка при загрузке видео:',
            response.status,
            response.statusText,
          );
        }
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.log('Загрузка видео была отменена');
        } else {
          console.error('Ошибка при загрузке видео:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    if (isInView) {
      fetchVideo();
    } else if (controllerRef.current) {
        controllerRef.current.abort();
        setLoading(false);
      }

    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, [isInView, url]);

  useEffect(() => {
    const videoElement = ref.current;

    if (!videoElement) return;

    if (isInView) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }, [isInView, videoSrc]);

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
        src={videoSrc}
        className='absolute w-full h-full snap-start flex-shrink-0 object-cover z-10'
      />
      <TbPhotoVideo className='animate-pulse z-0 w-1/4 h-1/4' />
    </div>
  );
};
