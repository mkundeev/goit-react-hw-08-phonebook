import { createSlice } from '@reduxjs/toolkit';
import { contactsApi, useAuthorizeUserMutation } from './contactsAPI';

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
  //   extraReducers: {
  //     [contactsApi.endpoints.authorizeUser.matchFulfilled]: (state, action) => {
  //       return { ...state, ...action.payload, isLoggedIn: true };
  //     },
  //   },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice;
