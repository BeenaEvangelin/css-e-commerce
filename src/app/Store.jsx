import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "../featues/counter/CounterSlice";
import userReducer from "../featues/User/UserSlice";
const store = configureStore({
  reducer: {
    // counter: counterSlice,
    user: userReducer,
  },
});

export default store;
