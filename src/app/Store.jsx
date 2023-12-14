import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../featues/counter/CounterSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
