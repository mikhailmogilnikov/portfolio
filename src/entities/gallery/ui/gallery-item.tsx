import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { AppendAnimation } from '@mikhailmogilnikov/shared/ui/(layout)/append-animation';
import { Text } from '../../../shared/ui/(layout)/text';

type Props = {
  item: TGalleryItem;
};

export const GalleryItem = ({ item }: Props) => {
  const { aspect, description } = item;

  return (
    <AppendAnimation>
      <div className='w-full h-fit flex flex-col gap-3 md:gap-4'>
        <div
          style={{ aspectRatio: aspect }}
          className='w-full bg-default rounded-2xl'
        />
        {description && (
          <Text className='text-sm md:text-md font-medium'>{description}</Text>
        )}
      </div>
    </AppendAnimation>
  );
};
