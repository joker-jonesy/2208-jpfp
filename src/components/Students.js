import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Students() {
  const students = useSelector((state) => state.fetchStudentsSlice.students);

  useEffect(() => {
    console.log(students);
  }, []);

  return (
    <div>
      Students Page
      {students &&
        students.map((student) => (
          <Link to={`/student/${student.id}`} key={student.id}>
            {student.firstName} {student.lastName}
          </Link>
        ))}
    </div>
  );
}

export default Students;
