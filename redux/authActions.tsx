import { createAction } from "@reduxjs/toolkit";

// set the user auth state to login
export const login = createAction<void>("auth/login");

// set the user auth state to logout
export const logout = createAction<void>("auth/logout");
