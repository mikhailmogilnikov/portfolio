import { Gallery } from '@mikhailmogilnikov/entities/gallery';
import { ProjectType } from '@mikhailmogilnikov/shared/model/types/project.type';
import { Article } from '@mikhailmogilnikov/shared/ui/(layout)/article';

import { useMedia } from 'react-use';

type Props = {
  items: ProjectType['gallery'];
};

export const ExpandedProjectGallery = ({ items }: Props) => {
  const isMobile = useMedia('(max-width: 900px)', true);

  return (
    <Article title='Галерея'>
      <Gallery
        items={items}
        className='mt-4'
        gap={isMobile ? '16px' : '32px'}
      />
    </Article>
  );
};
