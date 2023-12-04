import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { musicApi } from '~/axios';
import { RootState } from '../store';

export interface IUserSlide {
   id: string;
   name: string;
   gender: string;
   image: string;
   birthDay: Date | null;
   playlists: IAlbum[];
   favorites: ISong[];
}

const initialState: IUserSlide = {
   id: 'U001',
   name: 'Thắng Trần',
   gender: 'Nam',
   image: 'https://s120-ava-talk-zmp3.zmdcdn.me/c/7/e/a/2/120/b90e2b957b2f78662e163c0e45b4c853.jpg',
   birthDay: new Date(),
   playlists: [],
   favorites: [],
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchPlaylistByUser.fulfilled, (state, action: PayloadAction<IAlbum[]>) => {
         state.playlists = action.payload;
      });
      builder.addCase(fetchFavorites.fulfilled, (state, action: PayloadAction<ISong[]>) => {
         state.favorites = action.payload;
      });
   },
});

export const fetchPlaylistByUser = createAsyncThunk(
   'user/fetchPlaylist',
   async (_, { getState }) => {
      const state = getState() as RootState;
      const res = await musicApi.fetchPlaylistByUser(state?.user?.id);
      return res.data?.metadata;
   },
);
export const createPlaylist = createAsyncThunk(
   'user/createPlaylist',
   async (
      { user, name, description }: { user: string; name: string; description: string },
      { dispatch },
   ) => {
      const res = await musicApi.createPlaylist(user, name, description);
      dispatch(fetchPlaylistByUser());
      return res.data?.metadata;
   },
);
export const editPlaylist = createAsyncThunk(
   'user/editPlaylist',
   async (
      {
         playlsitId,
         name,
         description,
      }: {
         playlsitId: string;
         name: string;
         description: string;
      },
      { dispatch },
   ) => {
      const res = await musicApi.editPlaylist(playlsitId, name, description);
      dispatch(fetchPlaylistByUser());
      return res.data?.metadata;
   },
);
export const deletePlaylist = createAsyncThunk(
   'user/deletePlaylist',
   async (playlistId: string, { dispatch }) => {
      const res = await musicApi.deletePlaylist(playlistId);
      dispatch(fetchPlaylistByUser());
      return res.data?.metadata;
   },
);

export const fetchFavorites = createAsyncThunk('user/fetchFavorites', async (_, { getState }) => {
   const state = getState() as RootState;
   const res = await musicApi.getFavoriteByUser(state.user.id);
   return res.data.metadata;
});

export const likeSong = createAsyncThunk(
   'user/likeSong',
   async (songId: string, { getState, dispatch }) => {
      const state = getState() as RootState;
      const res = await musicApi.likeSong({ userId: state.user.id, songId });
      dispatch(fetchFavorites());
      return res.data.metadata;
   },
);
export const unLikeSong = createAsyncThunk(
   'user/unLikeSong',
   async (songId: string, { getState, dispatch }) => {
      const state = getState() as RootState;
      const res = await musicApi.unLikeSong({ userId: state.user.id, songId });
      dispatch(fetchFavorites());
      return res.data.metadata;
   },
);

export default userSlice.reducer;
