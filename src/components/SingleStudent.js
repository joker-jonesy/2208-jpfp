import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchSingleStudentThunk } from "../redux/reducers/singleStudent-slice";

function SingleStudent() {
  const params = useParams();
  const dispatch = useDispatch();

  const student = useSelector(
    (state) => state.persistedSingleStudent.singleStudent
  );
  console.log(student);

  useEffect(() => {
    dispatch(fetchSingleStudentThunk(params.id));
  }, [dispatch]);

  return (
    <div>
      <div>
        {student.firstName} {student.lastName}'s Page
      </div>
      <div>email : {student.email}</div>
      <div>gpa : {student.gpa}</div>
      <div>image goes here</div>
      <div>
        School :{" "}
        <Link to={`/campus/${student.CampusId}`}>
          {student.Campus && <h4>{student.Campus.name}</h4>}
        </Link>
      </div>
    </div>
  );
}

export default SingleStudent;
