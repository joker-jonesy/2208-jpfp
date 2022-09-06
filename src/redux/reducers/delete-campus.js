import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteCampus = async (id) => {
  let data = await axios.delete(`/api/campus/${id}`);
  return data;
};

export const deleteCampusThunk = createAsyncThunk(
  "campus/deleteCampus",
  async (id) => {
    let data = await deleteCampus(id);
    console.log("thunk", data);
    return data;
  }
);

const deleteCampusSlice = createSlice({
  name: "deleteCampus",
  initialState: { campus: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteCampusThunk.fulfilled, (state, { payload }) => {
      state.campus = state.campus.splice(
        state.campus.findIndex((school) => school.id === payload),
        1
      );
    });
  },
});

export const deleteCampusActions = deleteCampusSlice.actions;
export default deleteCampusSlice;
