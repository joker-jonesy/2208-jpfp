import { configureStore } from "@reduxjs/toolkit";
import fetchCampusSlice from "../reducers/campus-slice";
import fetchSingleCampusSlice from "../reducers/singleCampus-slice";
import fetchSingleStudentSlice from "../reducers/singleStudent-slice";
import fetchStudentsSlice from "../reducers/students-slice";

const store = configureStore({
  reducer: {
    fetchStudentsSlice: fetchStudentsSlice.reducer,
    fetchCampusSlice: fetchCampusSlice.reducer,
    fetchSingleCampusSlice: fetchSingleCampusSlice.reducer,
    fetchSingleStudentSlice: fetchSingleStudentSlice.reducer,
  },
});

export default store;
