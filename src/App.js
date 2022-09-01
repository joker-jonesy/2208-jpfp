import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Campus from "./components/Campus";
import Nav from "./components/Nav";
import Students from "./components/students";
import { fetchStudentsThunk } from "./redux/reducers/students-slice";
import Home from "./components/Home";
import { fetchCampusThunk } from "./redux/reducers/campus-slice";
import SingleCampus from "./components/SingleCampus";
import SingleStudent from "./components/SingleStudent";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentsThunk());
    dispatch(fetchCampusThunk());
  }, [dispatch]);

  return (
    <>
      <div>ITS HECKIN PROJECT TIME</div>
      <Nav />
      <Routes>
        <Route path="/campus" element={<Campus />} />
        <Route path="/students" element={<Students />} />
        <Route path="/campus/:id" element={<SingleCampus />} />
        <Route path="/student/:id" element={<SingleStudent />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
