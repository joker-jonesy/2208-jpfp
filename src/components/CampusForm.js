import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useAddCampusMutation,
  useUpdateCampusMutation,
} from "../redux/api/apiSlice";

function CampusForm(props) {
  const [addCampus] = useAddCampusMutation();
  const [editCampus] = useUpdateCampusMutation();

  const params = useParams();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    img: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      id: params.id,
      data: formData,
    };
    props.props ? await addCampus(formData) : await editCampus(payload);
  };

  return (
    <div>
      {props.props ? "Add Campus" : "Edit Campus"}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          Set Name{" "}
          <input
            type="text"
            onChange={(e) =>
              setFormData((oldState) => ({
                ...oldState,
                name: e.target.value,
              }))
            }
            value={formData.name}
          ></input>
        </div>
        <div>
          Set Address{" "}
          <input
            type="text"
            onChange={(e) =>
              setFormData((oldState) => ({
                ...oldState,
                address: e.target.value,
              }))
            }
            value={formData.address}
          ></input>
        </div>
        <div>
          Create a Description
          <input
            type="text"
            onChange={(e) =>
              setFormData((oldState) => ({
                ...oldState,
                description: e.target.value,
              }))
            }
            value={formData.description}
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
          Submit Campus!
        </button>
      </form>
    </div>
  );
}

export default CampusForm;
