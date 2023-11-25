import {
   createSlice,
   createAsyncThunk,
   ActionReducerMapBuilder,
   PayloadAction,
} from '@reduxjs/toolkit';
import { musicApi } from '~/axios';
import { shuffleArray } from '~/helpers';

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
         if (state.isShuffle) {
            state.playlistSongsBefore = state.playlistSongs;
            state.playlistSongs = shuffleArray(
               state.playlistSongs,
               state.playlistSongs[state.currentIndex].id,
            );
            state.currentIndex = 0;
         } else {
            state.currentIndex = state.playlistSongsBefore.findIndex(
               (item) => item?.id === state.playlistSongs[state.currentIndex].id,
            );
            const tmp: ISong[] = state.playlistSongs;
            state.playlistSongs = state.playlistSongsBefore;
            state.playlistSongsBefore = tmp;
         }
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

         shuffleLogic(state);
      },
      setNewReleaseSongs: (state, action: PayloadAction<IAlbum>) => {
         state.isPlaying = true;
         state.playlistId = '';
         state.playlistSongs = action.payload.songs;
         state.title = action.payload.name;
         state.currentIndex =
            state.playlistSongs.findIndex((item) => item.id === action.payload.id) || 0;

         shuffleLogic(state);
      },
      setPlaySongAndPlayCurrentSong: (state, action: PayloadAction<IReduxAlbumProps>) => {
         state.isPlaying = true;
         state.playlistId = action.payload.id;
         state.playlistSongs = action.payload.songs;
         state.title = action.payload.name;
         state.currentIndex =
            state.playlistSongs.findIndex((item) => item.id === action.payload.songId) || 0;
      },
      setSingleSong: (state, action: PayloadAction<ISong>) => {
         state.isPlaying = true;
         state.playlistId = '';
         state.currentIndex = 0;
         state.playlistSongs = [action.payload];
      },
      clearPlaylistSongs: () => {
         return initialState;
      },
   },
   extraReducers(builder: ActionReducerMapBuilder<IMusicSlice>) {
      builder.addCase(fetchAlbum.pending, (state) => {
         state.loading = true;
         state.isPlaying = false;
      });
      builder.addCase(fetchAlbum.rejected, (state) => {
         state.loading = false;
         state.isPlaying = false;
      });

      builder.addCase(fetchAlbum.fulfilled, (state, action: PayloadAction<IAlbum>) => {
         state.currentIndex = 0;
         state.isPlaying = true;
         state.playlistId = action.payload.id;
         state.playlistSongs = action.payload.songs;
         state.title = action.payload.name;

         shuffleLogic(state);
      });
   },
});

export const fetchAlbum = createAsyncThunk('music/fetchAlbum', async (albumId: string) => {
   const res = await musicApi.fetchAlbumById(albumId);
   return res.data?.metadata;
});

const shuffleLogic = (state: IMusicSlice) => {
   // shuffle logic
   if (state.isShuffle) {
      state.playlistSongsBefore = state.playlistSongs;
      state.playlistSongs = shuffleArray(
         state.playlistSongs,
         state.playlistSongs[state.currentIndex].id,
      );
      state.currentIndex = 0;
   } else {
      state.playlistSongsBefore = shuffleArray(
         state.playlistSongs,
         state.playlistSongs[state.currentIndex].id,
      );
   }
};

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
   setNewReleaseSongs,
   setPlaySongAndPlayCurrentSong,
} = musicSlice.actions;

export default musicSlice.reducer;
