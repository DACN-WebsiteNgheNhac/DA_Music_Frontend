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
   title: string;
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
   title: '',
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
      setPlaySongWithId: (state, action: PayloadAction<string>) => {
         state.currentIndex = state.playlistSongs.findIndex(
            (item: ISong) => item.id === action.payload,
         );
         state.isPlaying = true;
      },
      setPlaylistSongs: (state, action: PayloadAction<IAlbum>) => {
         state.isPlaying = true;
         state.playlistId = action.payload.id;
         state.playlistSongs = action.payload.songs;
         state.title = action.payload.name;
      },
      setSingleSong: (state, action: PayloadAction<ISong>) => {
         state.isPlaying = true;
         state.playlistId = '';
         state.playlistSongs = [action.payload];
      },
      clearPlaylistSongs: (state) => {
         state = initialState;
      },
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
   setSingleSong,
   clearPlaylistSongs,
} = musicSlice.actions;

export default musicSlice.reducer;
