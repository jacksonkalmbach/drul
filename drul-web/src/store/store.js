import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "../store/reducers/users/userAuthSlice";
import exploreOptionsReducer from "./reducers/explore/exploreOptionsSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    exploreOptions: exploreOptionsReducer,
  },
});

export default store;
