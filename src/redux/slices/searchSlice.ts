import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface ISearchSlide {
   loading: boolean;
   value: string;
}

const initialState = {
   loading: false,
   value: '',
};

const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      setValue: (state, action) => {
         state.value = action.payload;
      },
      clearSearch: (state) => {
         state.loading = false;
         state.value = '';
      },
   },
});

export const { setValue, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
