import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { AppendAnimation } from '@mikhailmogilnikov/shared/ui/(layout)/append-animation';
import { useLightbox } from '@mikhailmogilnikov/shared/lib/hooks/use-lightbox';
import { m } from 'framer-motion';
import { Text } from '../../../shared/ui/(layout)/text';
import { Media } from './media';

type Props = {
  item: TGalleryItem;
};

export const GalleryItem = ({ item }: Props) => {
  const { setGallery } = useLightbox();
  const { aspect, description } = item;

  return (
    <AppendAnimation>
      <button
        type='button'
        onClick={() => setGallery([item])}
        className='w-full h-fit flex flex-col gap-3 md:gap-4'
      >
        <m.div
          layoutId={`${item.url}_item`}
          style={{ aspectRatio: aspect }}
          className='w-full bg-default rounded-2xl relative shadow-base border-1 border-separate overflow-clip'
        >
          <Media media={item} />
        </m.div>
        {description && (
          <Text className='text-sm md:text-medium font-medium'>
            {description}
          </Text>
        )}
      </button>
    </AppendAnimation>
  );
};
