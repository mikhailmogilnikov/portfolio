import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { Skeleton } from '@nextui-org/skeleton';
import { Suspense } from 'react';

export const Video = ({ url }: Pick<TGalleryItem, 'url'>) => {
  return (
    <Suspense fallback={<Skeleton className='w-full h-full' />}>
      <video
        loop
        autoPlay
        playsInline
        muted
        controls={false}
        src={url}
        preload='auto'
        aria-label='Video player'
        className='w-full h-full snap-start flex-shrink-0 object-cover'
      />
    </Suspense>
  );
};
