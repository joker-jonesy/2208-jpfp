import { configureStore } from "@reduxjs/toolkit";
import fetchCampusSlice from "../reducers/campus-slice";
import fetchSingleCampusSlice from "../reducers/singleCampus-slice";
import fetchSingleStudentSlice from "../reducers/singleStudent-slice";
import fetchStudentsSlice from "../reducers/students-slice";
import createCampusSlice from "../reducers/create-campus";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import deleteCampusSlice from "../reducers/delete-campus";
import deleteStudentSlice from "../reducers/delete-student";
import createStudentSlice from "../reducers/create-student";

const persistConfig = {
  key: "root",
  storage,
};

const persistedStudents = persistReducer(
  persistConfig,
  fetchStudentsSlice.reducer
);
const persistedCampus = persistReducer(persistConfig, fetchCampusSlice.reducer);

const persistedSingleCampus = persistReducer(
  persistConfig,
  fetchSingleCampusSlice.reducer
);
const persistedSingleStudent = persistReducer(
  persistConfig,
  fetchSingleStudentSlice.reducer
);

export const store = configureStore({
  reducer: {
    persistedStudents,
    persistedCampus,
    persistedSingleCampus,
    persistedSingleStudent,
    createCampusSlice: createCampusSlice.reducer,
    createStudentSlice: createStudentSlice.reducer,
    deleteCampusSlice: deleteCampusSlice.reducer,
    deleteStudentSlice: deleteStudentSlice.reducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
