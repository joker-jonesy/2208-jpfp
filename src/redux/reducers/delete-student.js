import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteStudent = async (id) => {
  let data = await axios.delete(`/api/Student/${id}`);
  return data;
};

export const deleteStudentThunk = createAsyncThunk(
  "student/deleteStudent",
  async (id) => {
    let data = await deleteStudent(id);
    console.log("thunk", data);
    return data;
  }
);

const deleteStudentSlice = createSlice({
  name: "deleteStudent",
  initialState: { students: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteStudentThunk.fulfilled, (state, action) => {
      state.students.splice(
        state.students.findIndex((kid) => kid.id === action.payload),
        1
      );
    });
  },
});

export const deleteStudentActions = deleteStudentSlice.actions;
export default deleteStudentSlice;
