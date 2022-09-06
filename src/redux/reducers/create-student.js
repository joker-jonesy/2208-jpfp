import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createStudent = async (formData) => {
  try {
    console.log("in fetch", formData);
    const createdStudent = await axios.post("/api/student", {
      data: formData,
    });
    return createdStudent.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const createStudentThunk = createAsyncThunk(
  "student/createStudent",
  async (formData) => {
    console.log("in thunk", formData);
    let data = await createStudent(formData);
    return data.data;
  }
);

const createStudentSlice = createSlice({
  name: "createStudent",
  initialState: {
    student: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createStudentThunk.fulfilled, (state, action) => {
      state.student.push(action.payload);
    });
  },
});

export const createStudentActions = createStudentSlice.actions;
export default createStudentSlice;
