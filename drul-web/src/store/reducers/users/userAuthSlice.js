import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },
});

export const { login, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
