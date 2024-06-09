import {
  TGalleryItem,
  TMediaSize,
} from '@mikhailmogilnikov/shared/model/types/project.type';
import { useDispatch, useSelector } from 'react-redux';
import { calculateFullscreenByAspect } from '../utils/calculate-fullscreen-by-aspect';

export const useLightbox = () => {
  const dispatch = useDispatch();

  const gallery: TGalleryItem[] | null = useSelector(
    (state: RootState) => state.lightbox.gallery,
  );

  const size: TMediaSize = useSelector(
    (state: RootState) => state.lightbox.size,
  );

  const setSize = (aspect: string) => {
    const calcSize = calculateFullscreenByAspect(
      aspect,
      window.innerWidth,
      window.innerHeight,
    );

    dispatch({
      type: 'lightbox/setSize',
      payload: calcSize,
    });
  };

  const setGallery = (incomingGallery: TGalleryItem[] | null) => {
    if (incomingGallery) {
      setSize(incomingGallery[0].aspect);
    }

    dispatch({
      type: 'lightbox/setGallery',
      payload: incomingGallery,
    });
  };

  return {
    gallery,
    size,
    setGallery,
  };
};
