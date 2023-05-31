import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllTodosRequest,
  postAllTodosRequest,
  deleteAllTodosRequest,
  checkTodoRequest,
  editTodoRequest
} from "../../api/todoService";

export const getAllTodos = createAsyncThunk(
  "todo/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const todos = await getAllTodosRequest();
      return todos.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response.message);
    }
  }
);

export const postAllTodos = createAsyncThunk(
  "todo/addTodo",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      await postAllTodosRequest(payload);
      return dispatch(getAllTodos());
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response.message);
    }
  }
);

export const chekAllTodos = createAsyncThunk(
    "todo/chekTodo",
    async (payload, { dispatch, rejectWithValue }) => {
      try {
        await checkTodoRequest(payload);
        return dispatch(getAllTodos());
      } catch (error) {
        console.log(error);
        return rejectWithValue(error?.response.message);
      }
    }
  );

export const deleteAllTodos = createAsyncThunk(
  "todo/deleteTodo",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      await deleteAllTodosRequest(payload);
      dispatch(getAllTodos());
    } catch (error) {
      console.log(error);
      return rejectWithValue(error?.response.message);
    }
  }
);

export const editAllTodos = createAsyncThunk(
    "todo/editTodo",
    async (payload, { dispatch, rejectWithValue }) => {
      try {
        await editTodoRequest(payload);
        dispatch(getAllTodos());
      } catch (error) {
        console.log(error);
        return rejectWithValue(error?.response.message);
      }
    }
  );
