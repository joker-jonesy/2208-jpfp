import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchSingleStudent = async (id) => {
  try {
    let response = await axios.get(`/api/student/${id}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchSingleStudentThunk = createAsyncThunk(
  "singleStudent/fetchSingleStudent",
  async (id) => {
    let data = await fetchSingleStudent(id);
    return data.data;
  }
);

const fetchSingleStudentSlice = createSlice({
  name: "fetchSingleStudent",
  initialState: {
    singleStudent: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleStudentThunk.fulfilled, (state, action) => {
      state.singleStudent = action.payload;
    });
  },
});

export const fetchSingleStudentActions = fetchSingleStudentSlice.actions;
export default fetchSingleStudentSlice;
