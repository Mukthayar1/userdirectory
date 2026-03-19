import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userEmail: null,
  token: null,
  saveUserInfo: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action,) => {
      state.isAuthenticated = true;
      state.userEmail = action.payload.email;
      state.token = action.payload.token;
      state.saveUserInfo = action.payload.rememberMe
    },
    logout: (state) => {
      state.isAuthenticated = false;
      if (!state?.saveUserInfo) {
        state.userEmail = null;
      }
      state.token = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;