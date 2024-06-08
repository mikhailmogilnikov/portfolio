import { lightboxReducer } from '@mikhailmogilnikov/shared/model/lightbox.slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    lightbox: lightboxReducer,
  },
});
