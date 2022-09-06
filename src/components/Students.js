import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudentThunk } from "../redux/reducers/delete-student";
import StudentForm from "./StudentForm";

function Students() {
  const students = useSelector((state) => state.persistedStudents.students);
  const dispatch = useDispatch();

  console.log(students);

  return (
    <div>
      Students Page
      {students &&
        students.map((student) => (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              {student.firstName} {student.lastName}
            </Link>
            <button onClick={() => dispatch(deleteStudentThunk(student.id))}>
              X
            </button>
          </div>
        ))}
      <StudentForm />
    </div>
  );
}

export default Students;
