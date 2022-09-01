import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchStudents = async () => {
  let response = axios.get("/api/student");
  return response;
};

export const fetchStudentsThunk = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    let data = await fetchStudents();
    return data.data;
  }
);

const fetchStudentsSlice = createSlice({
  name: "fetchStudents",
  initialState: {
    students: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsThunk.fulfilled, (state, action) => {
      state.students = action.payload;
    });
  },
});

export const fetchStudentsActions = fetchStudentsSlice.actions;
export default fetchStudentsSlice;
