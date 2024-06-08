import { TGalleryItem } from '@mikhailmogilnikov/shared/model/types/project.type';
import { useDispatch, useSelector } from 'react-redux';

export const useLightbox = () => {
  const dispatch = useDispatch();

  const gallery: TGalleryItem[] | null = useSelector(
    (state: RootState) => state.lightbox.gallery,
  );

  const setGallery = (incomingGallery: TGalleryItem[] | null) => {
    dispatch({
      type: 'lightbox/setGallery',
      payload: incomingGallery,
    });
  };

  return {
    gallery,
    setGallery,
  };
};
