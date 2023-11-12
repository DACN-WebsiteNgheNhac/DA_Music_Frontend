import { RootState } from './store';

export const audioSelector = (state: RootState) => state.audio;
export const musicSelector = (state: RootState) => state.music;
