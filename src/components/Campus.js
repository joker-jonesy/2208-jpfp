import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Campus() {
  const campus = useSelector((state) => state.fetchCampusSlice.campus);

  return (
    <div>
      Campus Page
      {campus &&
        campus.map((campi) => {
          return (
            <div key={campi.id}>
              <Link to={`/campus/${campi.id}`}>{campi.name}</Link>
            </div>
          );
        })}
    </div>
  );
}

export default Campus;
