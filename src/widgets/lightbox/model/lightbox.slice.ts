/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { TGalleryItem } from '../../../shared/model/types/project.type';

const initialState: {
  gallery: TGalleryItem[] | null;
  size: { width: 0; height: 0 };
} = {
  gallery: null,
  size: { width: 0, height: 0 },
};

const lightboxSlice = createSlice({
  name: 'lightbox',
  initialState,
  reducers: {
    setGallery: (state, { payload }) => {
      state.gallery = payload;
    },
    setSize: (state, { payload }) => {
      state.size = payload;
    },
  },
});

export const { reducer: lightboxReducer } = lightboxSlice;
