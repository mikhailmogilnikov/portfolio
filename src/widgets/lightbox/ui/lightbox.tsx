import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { RemoveScroll } from 'react-remove-scroll';
import { Media } from '@mikhailmogilnikov/entities/gallery';
import { LightboxWrapper } from './wrapper';

export const LightboxContent = ({ media }: { media: TGalleryItem }) => {
  return (
    <RemoveScroll className='fixed inset-0 z-[100] flex justify-center items-center'>
      <LightboxWrapper image={media}>
        <Media media={media} imgSizes='100vw' />
      </LightboxWrapper>
    </RemoveScroll>
  );
};
