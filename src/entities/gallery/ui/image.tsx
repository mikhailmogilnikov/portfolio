import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { Skeleton } from '@nextui-org/skeleton';
import Image from 'next/image';
import { useState } from 'react';

type Props = Pick<TGalleryItem, 'url' | 'description'> & {
  sizes: string;
  primary?: boolean;
};

export const GalleryImage = ({ url, description, sizes, primary }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <Skeleton className='w-full h-full' />}
      <Image
        src={url}
        alt={description as string}
        fill
        sizes={sizes}
        draggable={false}
        loading={!primary ? 'lazy' : 'eager'}
        priority={primary}
        onLoad={() => setIsLoaded(true)}
        className='absolute snap-start flex-shrink-0 object-cover z-10'
      />
    </>
  );
};
