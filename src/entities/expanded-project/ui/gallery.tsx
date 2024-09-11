import { Gallery } from '@mikhailmogilnikov/entities/gallery';
import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';
import { Flex } from '@mikhailmogilnikov/shared/ui/(layout)/flex';
import { Text } from '@mikhailmogilnikov/shared/ui/(layout)/text';

import { useMedia } from 'react-use';

type Props = {
  items: ProjectType['gallery'];
};

export const ExpandedProjectGallery = ({ items }: Props) => {
  const isMobile = useMedia('(max-width: 900px)', true);

  if (items.length === 0) {
    return null;
  }

  return (
    <Flex col tag='article' gap={2}>
      <Text tag='h2' className='text-2xl md:text-3xl font-semibold mt-4'>
        Галерея. <span className='opacity-50'>Нажмите для увеличения.</span>
      </Text>
      <Gallery
        items={items}
        className='mt-4'
        gap={isMobile ? '16px' : '32px'}
      />
    </Flex>
  );
};
