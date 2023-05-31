import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todos/todoSlice";

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
  },
});
