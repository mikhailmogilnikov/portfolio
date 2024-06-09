import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';

export const Video = ({ url }: Pick<TGalleryItem, 'url'>) => {
  return (
    <video
      loop
      autoPlay
      playsInline
      muted
      controls={false}
      src={url}
      className='w-full h-full snap-start flex-shrink-0 object-cover'
    />
  );
};
