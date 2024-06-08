import { lightboxReducer } from '@mikhailmogilnikov/widgets/lightbox/model/lightbox.slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    lightbox: lightboxReducer,
  },
});
