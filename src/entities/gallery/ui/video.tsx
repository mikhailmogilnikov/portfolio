import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { TbPhotoVideo } from 'react-icons/tb';

export const Video = ({ url }: Pick<TGalleryItem, 'url'>) => {
  return (
    <div className='w-full h-full relative flex items-center justify-center'>
      <video
        loop
        autoPlay
        playsInline
        muted
        preload='none'
        controls={false}
        src={url}
        className='absolute w-full h-full snap-start flex-shrink-0 object-cover z-10'
      />
      <TbPhotoVideo className='animate-pulse z-0 w-1/4 h-1/4' />
    </div>
  );
};
