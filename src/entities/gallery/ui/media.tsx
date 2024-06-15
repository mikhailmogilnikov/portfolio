import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { GalleryImage } from './image';
import { Video } from './video';

type Props = { media: TGalleryItem; imgSizes: string; primary?: boolean };

export const Media = ({ media, imgSizes, primary }: Props) => {
  const { type, url, description } = media;
  return type === 'image' ? (
    <GalleryImage
      url={url}
      description={description}
      sizes={imgSizes}
      primary={primary}
    />
  ) : (
    <Video url={url} />
  );
};
