import { createSlice } from '@reduxjs/toolkit';

export interface IAppSlide {
   loading: boolean;
   error: boolean;
}

const initialState: IAppSlide = {
   loading: false,
   error: false,
};

const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
      setStartLoading: (state) => {
         state.loading = true;
         state.error = false;
      },
      setEndLoading: (state) => {
         state.loading = false;
         state.error = false;
      },
      setError: (state) => {
         state.loading = false;
         state.error = true;
      },
   },
});

export const { setStartLoading, setEndLoading, setError } = appSlice.actions;

export default appSlice.reducer;
