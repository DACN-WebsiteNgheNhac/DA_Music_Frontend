import {
   createSlice,
   createAsyncThunk,
   ActionReducerMapBuilder,
   PayloadAction,
} from '@reduxjs/toolkit';
import { musicApi } from '~/axios';

export interface ISearchSlide {
   loading: boolean;
   value: string;
   result: ISection[];
}

const initialState: ISearchSlide = {
   loading: false,
   value: '',
   result: [],
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
         state.result = [];
      },
   },
   extraReducers: (builder: ActionReducerMapBuilder<ISearchSlide>) => {
      builder
         .addCase(fetchSearch.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchSearch.rejected, (state) => {
            state.loading = false;
         })
         .addCase(fetchSearch.fulfilled, (state, action: PayloadAction<ISection[]>) => {
            state.result = action.payload;
            state.loading = false;
         });
   },
});

export const fetchSearch = createAsyncThunk('search/fetchSearch', async (payload: string) => {
   const res = await musicApi.fetchSearchSuggestion(payload);
   return res.data?.metadata;
});

export const { setValue, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
