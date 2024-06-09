import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { RemoveScroll } from 'react-remove-scroll';
import { LightboxWrapper } from './wrapper';

export const LightboxContent = ({ image }: { image: TGalleryItem }) => {
  return (
    <RemoveScroll className='fixed inset-0 z-[100] flex justify-center items-center'>
      <LightboxWrapper image={image}> </LightboxWrapper>
    </RemoveScroll>
  );
};
