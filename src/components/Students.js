import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetStudentQuery,
  useDeleteStudentMutation,
} from "../redux/api/apiSlice";
import StudentForm from "./StudentForm";

function Students() {
  const [isTrue, setIsTrue] = useState(true);
  const { data, error, isLoading, isFetching, isSuccess } = useGetStudentQuery({
    refetchOnMountOrArgChange: true,
  });
  const [deleteStudent] = useDeleteStudentMutation();

  return (
    <div>
      Students Page
      {isLoading && <h2>Campuses are being served</h2>}
      {isFetching && <h2>Fetching campuses, please wait</h2>}
      {error && <h2>Oops! There was an error Dx</h2>}
      {isSuccess &&
        data.map((student) => (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              {student.firstName} {student.lastName}
            </Link>
            <button onClick={() => deleteStudent(student.id)}>X</button>
          </div>
        ))}
      <StudentForm props={isTrue} />
    </div>
  );
}

export default Students;
