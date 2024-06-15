import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { GalleryItem } from './gallery-item';

type Props = {
  items: TGalleryItem[];
  className?: string;
  gap?: string;
  columns?: number;
};

export const Gallery = ({ items, className, gap, columns }: Props) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 1: 1, 200: 2, 900: 3 }}>
      <Masonry gutter={gap} columnsCount={columns} className={className}>
        {items.map((item) => (
          <GalleryItem
            key={item.url}
            item={item}
            imgSizes='(max-width: 200px) 100vw, (max-width: 900px) 50vw, 33vw'
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
