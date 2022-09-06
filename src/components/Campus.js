import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCampusThunk } from "../redux/reducers/delete-campus";
import CampusForm from "./CampusForm";

function Campus() {
  const campus = useSelector((state) => state.persistedCampus.campus);
  const dispatch = useDispatch();

  return (
    <div>
      Campus Page
      {campus &&
        campus.map((campi) => {
          return (
            <div key={campi.id}>
              <Link to={`/campus/${campi.id}`}>{campi.name}</Link>
              <button onClick={() => dispatch(deleteCampusThunk(campi.id))}>
                X
              </button>
            </div>
          );
        })}
      <CampusForm />
    </div>
  );
}

export default Campus;
