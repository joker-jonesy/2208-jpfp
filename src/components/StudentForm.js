import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useAddStudentMutation,
  useUpdateStudentMutation,
} from "../redux/api/apiSlice";

function StudentForm(props) {
  const [addStudent] = useAddStudentMutation();
  const [editStudent] = useUpdateStudentMutation();
  const params = useParams();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gpa: "",
    img: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id: params.id,
      data: formData,
    };
    props.props ? await addStudent(formData) : await editStudent(payload);
  };

  return (
    <div>
      {props.props ? "Add new Student" : "Edit Student"}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          Set First Name{" "}
          <input
            type="text"
            onChange={(e) =>
              setFormData((oldState) => ({
                ...oldState,
                firstName: e.target.value,
              }))
            }
            value={formData.firstName}
          ></input>
        </div>
        <div>
          Set Last Name{" "}
          <input
            type="text"
            onChange={(e) =>
              setFormData((oldState) => ({
                ...oldState,
                lastName: e.target.value,
              }))
            }
            value={formData.lastName}
          ></input>
        </div>
        <div>
          Set Your Email
          <input
            type="text"
            onChange={(e) =>
              setFormData((oldState) => ({
                ...oldState,
                email: e.target.value,
              }))
            }
            value={formData.email}
          ></input>
        </div>
        <div>
          Set GPA
          <input
            type="number"
            onChange={(e) =>
              setFormData((oldState) => ({
                ...oldState,
                gpa: e.target.value,
              }))
            }
            value={formData.gpa}
          ></input>
        </div>
        <div>
          Upload an Image
          <input
            type="file"
            onChange={(e) =>
              setFormData((oldState) => ({
                ...oldState,
                img: e.target.value,
              }))
            }
            value={formData.img}
          ></input>
        </div>
        <button type="submit" value="submit campus">
          Submit Student!
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
