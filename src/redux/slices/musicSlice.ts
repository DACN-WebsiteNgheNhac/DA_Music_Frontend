import { createSlice, createAsyncThunk, isAnyOf, Action, PayloadAction } from '@reduxjs/toolkit';

export interface IMusicSlice {
   loading: boolean;
   showPlaylist: boolean;
   isPlaying: boolean;
   isLoop: boolean;
   isShuffle: boolean;
   currentIndex: number;
   playlistId: string | null;
   playlistSongs: ISong[];
   playlistSongsBefore: ISong[];
}

const initialState: IMusicSlice = {
   loading: true,
   showPlaylist: false,
   isPlaying: false,
   isLoop: false,
   isShuffle: false,
   currentIndex: 0,
   playlistId: '',
   playlistSongs: [],
   playlistSongsBefore: [],
};

const musicSlice = createSlice({
   name: 'music',
   initialState,
   reducers: {
      nextSong: (state) => {
         if (state.playlistSongs.length === 0) {
            return;
         }
         if (state.playlistSongs.length - 1 === state.currentIndex) {
            state.currentIndex = 0;
         } else {
            state.currentIndex += 1;
         }
         state.isPlaying = true;
      },
      prevSong: (state) => {
         if (state.playlistSongs.length === 0) {
            return;
         }
         if (state.currentIndex === 0) {
            state.currentIndex = state.playlistSongs.length - 1;
         } else {
            state.currentIndex -= 1;
         }
         state.isPlaying = true;
      },
      setLoading: (state, action) => {
         state.loading = action.payload;
      },
      setPlayPause: (state) => {
         state.isPlaying = !state.isPlaying;
      },
      setLoop: (state) => {
         state.isLoop = !state.isLoop;
      },
      setShuffle: (state) => {
         state.isShuffle = !state.isShuffle;
      },
      setShowPlaylist: (state) => {
         state.showPlaylist = !state.showPlaylist;
      },
      setPlaySongWithId: (state, action) => {},
      setPlaylistSongs: (state, action: PayloadAction<IAlbum>) => {
         state.isPlaying = true;
         state.playlistSongs = action.payload.songs;
      },
      clearPlaylistSongs: (state) => {},
   },
});

export const {
   setPlayPause,
   setLoop,
   setShuffle,
   nextSong,
   prevSong,
   setLoading,
   setShowPlaylist,
   setPlaylistSongs,
   setPlaySongWithId,
   clearPlaylistSongs,
} = musicSlice.actions;

export default musicSlice.reducer;
