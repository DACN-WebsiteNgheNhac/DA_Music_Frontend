import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
   loading: false,
   showAlbum: false,
   isPlaying: false,
   isLoop: false,
   isShuffle: false,
   currentIndex: 0,
   albumId: '',
   albumSongs: [],
   albumSongsBefore: [],
};

const musicSlice = createSlice({
   name: 'music',
   initialState,
   reducers: {
      nextSong: (state) => {},
      prevSong: (state) => {},
      setLoading: (state, action) => {
         state.loading = action.payload;
      },
      setPlay: (state, action) => {},
      setLoop: (state, action) => {},
      setShuffle: (state, action) => {},
      setShowAlbum: (state) => {
         state.showAlbum = !state.showAlbum;
      },
      setPlaySongWithId: (state, action) => {},
      setAlbumSongs: (state, action) => {},
      clearAlbumSongs: (state) => {},
   },
});

export const {
   setPlay,
   setLoop,
   setShuffle,
   nextSong,
   prevSong,
   setLoading,
   setShowAlbum,
   setAlbumSongs,
   setPlaySongWithId,
   clearAlbumSongs,
} = musicSlice.actions;

export default musicSlice.reducer;
