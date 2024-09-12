import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { useLightbox } from '@mikhailmogilnikov/shared/lib/hooks/use-lightbox';
import { m } from 'framer-motion';
import { Text } from '../../../shared/ui/(layout)/text';
import { Media } from './media';

type Props = {
  item: TGalleryItem;
  imgSizes: string;
};

export const GalleryItem = ({ item, imgSizes }: Props) => {
  const { setGallery } = useLightbox();
  const { aspect, description } = item;

  return (
    // <AppendAnimation>
    <button
      type='button'
      onClick={() => setGallery([item])}
      className='w-full h-fit flex flex-col gap-3 md:gap-4'
    >
      <m.div
        layoutId={`${item.url}_item`}
        style={{ aspectRatio: aspect }}
        className='w-full bg-default rounded-2xl relative shadow-base border-1 border-divider overflow-clip'
      >
        <Media media={item} imgSizes={imgSizes} />
      </m.div>
      {description && (
        <Text
          className='text-sm md:text-medium font-medium text-start'
          opacity={0.8}
        >
          {description}
        </Text>
      )}
    </button>
    // </AppendAnimation>
  );
};
