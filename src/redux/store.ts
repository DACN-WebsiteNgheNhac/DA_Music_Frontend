import { configureStore } from '@reduxjs/toolkit';
import { audioReducer, musicReducer } from './slices';

const store = configureStore({
   reducer: {
      audio: audioReducer,
      music: musicReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
