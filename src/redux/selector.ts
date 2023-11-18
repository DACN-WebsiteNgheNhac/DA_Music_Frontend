import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const appSelector = (state: RootState) => state.app;
export const audioSelector = (state: RootState) => state.audio;
export const musicSelector = (state: RootState) => state.music;
export const searchSelector = (state: RootState) => state.search;

export const currentSongSelector = createSelector(
   (state: RootState) => state.music.currentIndex,
   (state: RootState) => state.music.playlistSongs,
   (currentIndex, playlistSongs) => {
      return playlistSongs[currentIndex];
   },
);
