import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "../store/reducers/users/userAuthSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
  },
});

export default store;
