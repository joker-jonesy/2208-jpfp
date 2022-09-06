import React from "react";
import { Routes, Route } from "react-router-dom";
import Campus from "./components/Campus";
import Nav from "./components/Nav";
import Students from "./components/students";
import Home from "./components/Home";
import SingleCampus from "./components/SingleCampus";
import SingleStudent from "./components/SingleStudent";

function App() {
  return (
    <>
      <div>ITS HECKIN PROJECT TIME</div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/students" element={<Students />} />
        <Route path="/campus/:id" element={<SingleCampus />} />
        <Route path="/student/:id" element={<SingleStudent />} />
      </Routes>
    </>
  );
}

export default App;
