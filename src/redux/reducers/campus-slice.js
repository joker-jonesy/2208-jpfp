import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCampus = async () => {
  let response = await axios.get("/api/campus");
  return response;
};

export const fetchCampusThunk = createAsyncThunk(
  "campus/fetchCampus",
  async () => {
    let data = await fetchCampus();
    return data.data;
  }
);

const fetchCampusSlice = createSlice({
  name: "fetchCampus",
  initialState: {
    campus: {},
    singleCampus: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusThunk.fulfilled, (state, action) => {
      state.campus = action.payload;
    });
  },
});

export const fetchCampusActions = fetchCampusSlice.actions;
export default fetchCampusSlice;
