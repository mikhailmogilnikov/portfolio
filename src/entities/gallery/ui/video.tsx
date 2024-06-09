import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';

export const Video = ({ url }: Pick<TGalleryItem, 'url'>) => {
  return (
    <video
      loop
      autoPlay
      muted
      controls={false}
      className='w-full h-full snap-start flex-shrink-0 object-cover'
    >
      <source src={url} type='video/mp4' />
    </video>
  );
};
