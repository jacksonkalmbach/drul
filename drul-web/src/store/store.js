import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "../store/reducers/users/userAuthSlice";
import cuisineFilterReducer from "./reducers/explore/exploreCuisinesSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    exploreCuisine: cuisineFilterReducer,
  },
});

export default store;
