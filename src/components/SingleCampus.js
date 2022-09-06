import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCampusThunk } from "../redux/reducers/singleCampus-slice";

function SingleCampus() {
  const params = useParams();
  const dispatch = useDispatch();

  const campus = useSelector(
    (state) => state.persistedSingleCampus.singleCampus
  );

  useEffect(() => {
    dispatch(fetchSingleCampusThunk(params.id));
  }, [dispatch]);

  return (
    <div>
      YOOOOO
      <div>{campus.name}</div>
      <div>{campus.address}</div>
      <div>{campus.description}</div>
      <div>image goes here</div>
      <div>Students</div>
      {campus.Students &&
        campus.Students.map((student) => {
          return (
            <Link to={`/student/${student.id}`} key={student.id}>
              {student.firstName}
              {student.firstLame}
            </Link>
          );
        })}
    </div>
  );
}

export default SingleCampus;
