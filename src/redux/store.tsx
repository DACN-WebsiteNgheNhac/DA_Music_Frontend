import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { appSlice } from './slices';

const store = configureStore({
   reducer: {
      app: appSlice,
   },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
