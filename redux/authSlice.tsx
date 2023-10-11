import { createSlice } from "@reduxjs/toolkit";

// initial auth state
interface AuthState {
  isAuthenticated: boolean;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
};

// auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
