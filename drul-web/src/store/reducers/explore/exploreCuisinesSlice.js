import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cuisines: {},
};

export const exploreCuisinesSlice = createSlice({
  name: "exploreCuisine",
  initialState,
  reducers: {
    addCuisineType: (state, action) => {
      const { id, name } = action.payload;
      state.cuisines[id] = { id, name };
    },
    removeCuisineType: (state, action) => {
      const id = action.payload;
      delete state.cuisines[id];
    },
  },
});

export const { addCuisineType, removeCuisineType } =
  exploreCuisinesSlice.actions;

export default exploreCuisinesSlice.reducer;
