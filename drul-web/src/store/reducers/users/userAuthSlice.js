import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  uid: "",
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
    setUid: (state, action) => {
      state.uid = action.payload;
    },
    clearUid: (state) => {
      state.uid = "";
    },
  },
});

export const { login, logout, setUid, clearUid } = userAuthSlice.actions;

export default userAuthSlice.reducer;
