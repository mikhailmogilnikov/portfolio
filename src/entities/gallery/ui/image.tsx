import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import Image from 'next/image';

type Props = Pick<TGalleryItem, 'url' | 'description'>;

export const GalleryImage = ({ url, description }: Props) => {
  return (
    <Image
      src={url}
      alt={description as string}
      fill
      placeholder='blur'
      draggable={false}
      loading='lazy'
      className='snap-start flex-shrink-0 object-cover'
    />
  );
};
