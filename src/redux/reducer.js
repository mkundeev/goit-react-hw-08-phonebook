import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload, isLoggedIn: true };
    },
    resetUser(state) {
      return { ...state, ...initialState };
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice;
