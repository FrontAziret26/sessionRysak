import { createSlice } from "@reduxjs/toolkit";
import { getAllTodos } from "./todosThunk";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      
      state.todos = action.payload;
    });
  },
});
