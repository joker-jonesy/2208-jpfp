import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetCampusQuery,
  useDeleteCampusMutation,
} from "../redux/api/apiSlice";
import CampusForm from "./CampusForm";

function Campus() {
  const [adding, setAdding] = useState(true);
  const { data, error, isLoading, isFetching, isSuccess } = useGetCampusQuery();
  const [deleteCampus] = useDeleteCampusMutation();

  const deleteHandler = async (id) => {
    await deleteCampus(id);
  };

  return (
    <div>
      Campus Page
      {isLoading && <h2>Campuses are being served</h2>}
      {isFetching && <h2>Fetching campuses, please wait</h2>}
      {error && <h2>Oops! There was an error Dx</h2>}
      {isSuccess &&
        data.map((campi) => {
          return (
            <div key={campi.id}>
              <Link to={`/campus/${campi.id}`}>{campi.name}</Link>
              <button onClick={() => deleteHandler(campi.id)}>X</button>
            </div>
          );
        })}
      {adding && <CampusForm props={adding} />}
    </div>
  );
}

export default Campus;
