import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exploreOptions: {
    cuisines: {},
    tags: {},
    locations: {},
  },
};

export const exploreOptionsSlice = createSlice({
  name: "exploreOptions",
  initialState,
  reducers: {
    addCuisine: (state, action) => {
      const { id, name } = action.payload;
      state.exploreOptions.cuisines[id] = { id, name };
    },
    removeCuisine: (state, action) => {
      const id = action.payload;
      delete state.exploreOptions.cuisines[id];
    },
    addTag: (state, action) => {
      const { id, name } = action.payload;
      state.exploreOptions.tags[id] = { id, name };
    },
    removeTag: (state, action) => {
      const id = action.payload;
      delete state.exploreOptions.tags[id];
    },
    addLocation: (state, action) => {
      const { id, name } = action.payload;
      state.exploreOptions.locations[id] = { id, name };
    },
    removeLocation: (state, action) => {
      const id = action.payload;
      delete state.exploreOptions.locations[id];
    },
  },
});

export const {
  addCuisine,
  removeCuisine,
  addTag,
  removeTag,
  addLocation,
  removeLocation,
} = exploreOptionsSlice.actions;

export default exploreOptionsSlice.reducer;
