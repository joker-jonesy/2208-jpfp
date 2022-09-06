import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetSingleStudentQuery } from "../redux/api/apiSlice";
import StudentForm from "./StudentForm";

function SingleStudent() {
  const [isTrue, setIsTrue] = useState(false);
  const params = useParams();
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetSingleStudentQuery(params.id);

  return (
    <div>
      {isLoading && <h2>Campus is being served</h2>}
      {isFetching && <h2>Fetching campus, please wait</h2>}
      {error && <h2>Oops! There was an error Dx</h2>}
      {isSuccess && (
        <div>
          {" "}
          <div>
            {data.firstName} {data.lastName}'s Page
          </div>
          <div>email : {data.email}</div>
          <div>gpa : {data.gpa}</div>
          <div>image goes here</div>
          <div>
            School :{" "}
            <Link to={`/campus/${data.CampusId}`}>
              {data.Campus && <h4>{data.Campus.name}</h4>}
            </Link>
          </div>
        </div>
      )}
      <StudentForm props={isTrue} />
    </div>
  );
}

export default SingleStudent;
