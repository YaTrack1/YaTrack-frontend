import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: true,
  },
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const { setIsLoggedIn } = authSlice.actions;

export default authSlice.reducer;
