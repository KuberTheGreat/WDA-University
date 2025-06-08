// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  name: '',
  enrlno: '',
  gender: '',
  profilePic: '', // This will be a URL string
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, name, enrlno, gender, profilePic } = action.payload;
      state.user = user;
      state.name = name;
      state.enrlno = enrlno;
      state.gender = gender;
      state.profilePic = profilePic || '';
    },
    clearUser: (state) => {
      state.user = null;
      state.name = '';
      state.enrlno = '';
      state.gender = '';
      state.profilePic = '';
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
