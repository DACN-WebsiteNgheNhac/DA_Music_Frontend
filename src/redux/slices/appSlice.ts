import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
   name: 'app',
   initialState: {
      count: 0,
   },
   reducers: {},
});

export default appSlice.reducer;
