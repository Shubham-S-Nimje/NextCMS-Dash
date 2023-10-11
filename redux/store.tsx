import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import loaderSlice from "./loaderSlice";

// redux store
const store = configureStore({
  reducer: {
    auth: authSlice,
    loader: loaderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
