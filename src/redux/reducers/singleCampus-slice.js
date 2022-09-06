import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchSingleCampus = async (id) => {
  try {
    let response = await axios.get(`/api/campus/${id}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchSingleCampusThunk = createAsyncThunk(
  "singleCampus/fetchSingleCampus",
  async (id) => {
    let data = await fetchSingleCampus(id);
    return data.data;
  }
);

const fetchSingleCampusSlice = createSlice({
  name: "fetchSingleCampus",
  initialState: {
    singleCampus: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCampusThunk.fulfilled, (state, action) => {
      state.singleCampus = action.payload;
    });
  },
});

export const fetchSingleCampusActions = fetchSingleCampusSlice.actions;
export default fetchSingleCampusSlice;
