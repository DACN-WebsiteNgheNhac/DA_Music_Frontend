import { createSlice } from '@reduxjs/toolkit';

export interface IUserSlide {
   id: string;
   name: string;
   gender: string;
   image: string;
   birthDay: Date | null;
}

const initialState: IUserSlide = {
   id: 'U001',
   name: 'Thắng Trần',
   gender: 'Nam',
   image: 'https://s120-ava-talk-zmp3.zmdcdn.me/c/7/e/a/2/120/b90e2b957b2f78662e163c0e45b4c853.jpg',
   birthDay: null,
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
});

export default userSlice.reducer;
