/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';
import { TGalleryItem } from './types/project.type';

const initialState: { gallery: TGalleryItem[] | null } = {
  gallery: null,
};

const lightboxSlice = createSlice({
  name: 'lightbox',
  initialState,
  reducers: {
    setGallery: (state, { payload }) => {
      state.gallery = payload;
    },
  },
});

export const { reducer: lightboxReducer } = lightboxSlice;
