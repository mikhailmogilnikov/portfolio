import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { GalleryImage } from './image';
import { Video } from './video';

type Props = { media: TGalleryItem; imgSizes: string };

export const Media = ({ media, imgSizes }: Props) => {
  const { type, url, description } = media;
  return type === 'image' ? (
    <GalleryImage url={url} description={description} sizes={imgSizes} />
  ) : (
    <Video url={url} />
  );
};
