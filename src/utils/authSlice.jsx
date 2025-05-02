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
      const { user, name, enrlno, gender } = action.payload;
      state.user = user;
      state.name = name;
      state.enrlno = enrlno;
      state.gender = gender;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
