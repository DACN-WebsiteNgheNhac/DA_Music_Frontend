import { createSlice } from '@reduxjs/toolkit';

const audioSlice = createSlice({
   name: 'audio',
   initialState: {
      isSeek: false,
      duration: 0,
      currentTime: 0,
      volume: 50,
      volumeBefore: 0,
   },
   reducers: {
      toggleVolume: (state) => {
         if (state.volume > 0) {
            state.volumeBefore = state.volume;
            state.volume = 0;
         } else if (state.volume !== state.volumeBefore) {
            state.volume = state.volumeBefore;
            state.volumeBefore = 0;
         } else {
            state.volume = 20;
            state.volumeBefore = 0;
         }
      },
      setVolume: (state, actions) => {
         state.volume = actions.payload;
      },
      setDuration: (state, actions) => {
         state.duration = actions.payload;
      },
      setCurrentTime: (state, actions) => {
         state.currentTime = actions.payload;
      },
      setSeek: (state, actions) => {
         state.isSeek = actions.payload;
      },
      resetAudio: (state) => {
         state.isSeek = false;
         state.duration = 0;
         state.currentTime = 0;
      },
   },
});

export const { setDuration, setCurrentTime, setSeek, resetAudio, setVolume, toggleVolume } =
   audioSlice.actions;

export default audioSlice.reducer;
