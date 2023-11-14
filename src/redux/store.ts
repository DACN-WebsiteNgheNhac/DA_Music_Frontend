import { configureStore } from '@reduxjs/toolkit';
import { audioReducer, musicReducer, searchReducer } from './slices';

const store = configureStore({
   reducer: {
      audio: audioReducer,
      music: musicReducer,
      search: searchReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
