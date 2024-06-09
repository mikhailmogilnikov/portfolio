import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { GalleryImage } from './image';
import { Video } from './video';

export const Media = ({ media }: { media: TGalleryItem }) => {
  const { type, url, description } = media;
  return type === 'image' ? (
    <GalleryImage url={url} description={description} />
  ) : (
    <Video url={url} />
  );
};
