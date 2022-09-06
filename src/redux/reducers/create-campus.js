import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const createCampus = async (formData) => {
  try {
    console.log("in fetch", formData);
    const createdCampus = await axios.post("/api/campus", {
      data: formData,
    });
    return createdCampus.json();
  } catch (error) {
    throw new Error(error);
  }
};

export const createCampusThunk = createAsyncThunk(
  "campus/createCampus",
  async (formData) => {
    console.log("in thunk", formData);
    let data = await createCampus(formData);
    return data.data;
  }
);

const createCampusSlice = createSlice({
  name: "createCampus",
  initialState: {
    campus: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCampusThunk.fulfilled, (state, action) => {
      state.campus.push(action.payload);
    });
  },
});

export const createCampusActions = createCampusSlice.actions;
export default createCampusSlice;
