import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { musicApi } from '~/axios';
import { RootState } from '../store';
import { toast } from 'react-toastify';

export interface IUserSlide extends IUser {
   id: string;
   name: string;
   birthDay: string;
   gender: string;
   image: string;
   username: string;
   password: string;
   createdAt: Date | string;
   roleId: string;
   roleName: string;
   playlists: IAlbum[];
   favorites: ISong[];
   loading: boolean;
}

const initialState: IUserSlide = {
   id: '',
   name: '',
   gender: '',
   image: '',
   birthDay: '',
   roleId: '',
   roleName: '',
   username: '',
   password: '',
   createdAt: '',
   playlists: [],
   favorites: [],
   loading: false,
};

// const initialState: IUserSlide = {
//    id: 'U001',
//    name: 'Thắng Trần',
//    gender: 'Nam',
//    image: 'https://s120-ava-talk-zmp3.zmdcdn.me/c/7/e/a/2/120/b90e2b957b2f78662e163c0e45b4c853.jpg',
//    birthDay: new Date(),
//    playlists: [],
//    favorites: [],
//    roleId: '',
//    roleName: '',
// };

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      logout: () => {
         return initialState;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchPlaylistByUser.fulfilled, (state, action: PayloadAction<IAlbum[]>) => {
            state.playlists = action.payload;
         })
         .addCase(fetchFavorites.fulfilled, (state, action: PayloadAction<ISong[]>) => {
            state.favorites = action.payload;
         });

      builder
         .addCase(login.pending, (state) => {
            state.loading = true;
         })
         .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.loading = false;
            state.id = action.payload.id || '';
            state.name = action.payload.name || '';
            state.gender = action.payload.gender || '';
            state.image = action.payload.image || '';
            state.birthDay = action.payload.birthDay || '';
            state.roleId = action.payload.roleId || '';
            state.roleName = action.payload.roleName || '';
            state.username = action.payload.username || '';
            state.password = action.payload.password || '';
            state.createdAt = action.payload.createdAt || '';
         })
         .addCase(login.rejected, (state, action) => {
            state.loading = false;
            console.error(action.error);
         });
   },
});

export const login = createAsyncThunk(
   'user/login',
   async ({ username, password }: ILogin, { rejectWithValue }) => {
      try {
         const res = await musicApi.login(username, password);
         toast.success('Đăng nhập thành công');
         return res?.data?.metadata;
      } catch (error) {
         toast.error('Tài khoản hoặc mật khẩu không đúng');
         return rejectWithValue('Đăng nhập thất bại');
      }
   },
);
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

export const { logout } = userSlice.actions;

export default userSlice.reducer;
