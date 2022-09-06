import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetSingleCampusQuery,
  useUpdateCampusMutation,
} from "../redux/api/apiSlice";
import CampusForm from "./CampusForm";

function SingleCampus() {
  const [edit, setEdit] = useState(false);
  const params = useParams();

  const { data, error, isLoading, isFetching, isSuccess } =
    useGetSingleCampusQuery(params.id);
  const [updateCampus] = useUpdateCampusMutation();

  const handleRemoveStudent = async (e, id) => {
    e.preventDefault();
    let payload = {
      id: params.id,
      data: "remove",
      studentId: id,
    };
    await updateCampus(payload);
  };

  return (
    <div>
      Single Campus Page
      {isLoading && <h2>Campus is being served</h2>}
      {isFetching && <h2>Fetching campus, please wait</h2>}
      {error && <h2>Oops! There was an error Dx</h2>}
      {isSuccess && (
        <div>
          {" "}
          <div>{data.name}</div>
          <div>{data.address}</div>
          <div>{data.description}</div>
          <div>image goes here</div>
          <div>Students</div>
          {data.Students &&
            data.Students.map((student) => {
              return (
                <div key={student.id}>
                  <Link to={`/student/${student.id}`}>
                    {student.firstName}
                    {student.firstLame}
                  </Link>
                  <button onClick={(e) => handleRemoveStudent(e, student.id)}>
                    Unregister Student
                  </button>
                </div>
              );
            })}
        </div>
      )}
      {!edit && <CampusForm props={edit} />}
    </div>
  );
}

export default SingleCampus;
